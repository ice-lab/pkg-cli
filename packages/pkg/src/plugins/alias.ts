/**
 * This plugin is used to handle alias only in transform task
 */
import { init, parse } from 'es-module-lexer';
import type { ImportSpecifier } from 'es-module-lexer';
import type { CommandName } from 'build-scripts';
import consola from 'consola';
import MagicString from 'magic-string';

interface AliasPluginOptions {
  alias: Record<string, string>;
  command: CommandName;
}

async function redirectImport(code: string, imports: readonly ImportSpecifier[], aliasObject: Record<string, string>): Promise<MagicString> {
  let str: MagicString = new MagicString(code);

  imports.forEach((targetImport) => {
    if (targetImport.n in aliasObject) {
      str.overwrite(targetImport.s, targetImport.e, aliasObject[targetImport.n]);
    }
  });
  return str;
}

const aliasPlugin = (options: AliasPluginOptions = { alias: {}, command: 'start'}) => {

  return {
    name: 'ice-pkg:alias',

    async transform(code, id) {
      // only transform source code;
      if (!code) {
        return null;
      }
      const { alias, command } = options;
      await init;
      let imports: readonly ImportSpecifier[] = [];
      try {
        imports = parse(code)[0];
      } catch (e) {
        consola.error('[parse error]', e);
      }
      if (!imports.length) {
        return {
          code,
          map: null
        };
      }
      const str = await redirectImport(
        code,
        imports,
        // Only in dev mode should alias rax to rax-compat for preview
        command === 'start' ? Object.assign({rax: 'rax-compat'}, alias) : alias
      );

      return {
        code: str.toString(),
        map: str.generateMap({
          hires: true,
          includeContent: true
        })
      };
    }
  };
};

 export default aliasPlugin;
