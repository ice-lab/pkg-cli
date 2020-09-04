const chalk = require('chalk');
const ip = require('ip');
const consoleClear = require('console-clear');
const qrcode = require('qrcode-terminal');
const { handleWebpackErr } = require('rax-compile-config');
const { platformMap } = require('miniapp-builder-shared');
const { WEB, WEEX, MINIAPP, WECHAT_MINIPROGRAM, NODE } = require('../constants');

function devCompileLog(devCompleted, devUrl, targets, entries) {
  consoleClear(true);
  const { err, stats } = devCompleted;

  if (!handleWebpackErr(err, stats)) {
    return;
  }

  console.log(chalk.green('Rax development server has been started:'));
  console.log();

  if (targets.includes(WEB)) {
    console.log(chalk.green('[Web] Development pages:'));
    Object.keys(entries).forEach((entry) => console.log('   ', chalk.underline.white(devUrl + entry)));
    console.log();
  }

  if (targets.includes(NODE)) {
    console.log(chalk.green('[SSR] Development pages:'));
    Object.keys(entries).forEach((entry) => console.log('   ', chalk.underline.white(`${devUrl}ssr/${entry}`)));
    console.log();
  }

  if (targets.includes(WEEX)) {
    console.log(chalk.green('[Weex] Development server at:'));

    Object.keys(entries).forEach((entry) => {
      // Use Weex App to scan ip address (mobile phone can't visit localhost).
      const weexUrl = `${devUrl}weex/${entry}.js?wh_weex=true`.replace(/^http:\/\/localhost/gi, function(match) {
        // Called when matched
        try {
          return `http://${ip.address()}`;
        } catch (error) {
          console.log(chalk.yellow(`Get local IP address failed: ${error.toString()}`));
          return match;
        }
      });
      console.log('   ', chalk.underline.white(weexUrl));
      console.log();
      qrcode.generate(weexUrl, { small: true });
      console.log();
    });
  }

  Object.entries(platformMap).forEach(([platform, config]) => {
    if (targets.includes(platform)) {
      let outputPath = '';
      if (options[platform].distDir) {
        outputPath = options[platform].distDir;
        console.log(chalk.green(`[${config.name}] Component lib at: `));
      } else {
        outputPath = `demo/${platform}`;
        console.log(chalk.green(`[${config.name}] Use ali miniapp developer tools to open the following folder:`));
      }
      console.log('   ', chalk.underline.white(path.resolve(rootDir, outputPath)));
      console.log();
    }
  });
}

module.exports = devCompileLog;