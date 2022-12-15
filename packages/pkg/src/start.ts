import consola from 'consola';
import { mergeConfigOptions } from './helpers/mergeConfigOptions.js';
import { createWatcher } from './helpers/watcher.js';
import { runBundleWatchTasks } from './loaders/bundle.js';
import { runTransformWatchTasks } from './loaders/transform.js';

import type { BundleTaskLoaderConfig, OutputResult, PkgContext, TransformTaskLoaderConfig, WatchEvent } from './types.js';

export default async function start(context: PkgContext) {
  const { getTaskConfig, applyHook, commandArgs } = context;

  const configs = getTaskConfig();
  await applyHook('before.start.load', { args: commandArgs, config: configs });

  if (!configs.length) {
    const err = new Error('Could not Find any pending tasks when excuting \'start\' command.');

    throw err;
  }

  await applyHook('before.start.run', {
    args: commandArgs,
    config: configs,
  });

  // @ts-ignore fixme
  const normalizedConfigs = configs.map((config) => mergeConfigOptions(config, context));

  const outputResults: OutputResult[] = [];
  const {
    handleChanges: handleBundleChanges,
    outputResults: bundleOutputResults,
  } = await runBundleWatchTasks(
    normalizedConfigs.filter((config) => config.type === 'bundle') as BundleTaskLoaderConfig[],
    context,
  );
  const {
    handleChanges: handleTransformChange,
    outputResults: transformOutputResults,
  } = await runTransformWatchTasks(
    normalizedConfigs.filter((config) => config.type === 'transform') as TransformTaskLoaderConfig[],
    context,
  );

  outputResults.push(...bundleOutputResults, ...transformOutputResults);

  await applyHook('after.start.compile', outputResults);

  const watcher = createWatcher(context);

  async function handleChange(id: string, event: WatchEvent) {
    const newOutputResults = [];
    const newBundleOutputResults = await handleBundleChanges(id, event);
    const newTransformOutputResults = await handleTransformChange(id, event);

    newOutputResults.push(
      ...newBundleOutputResults,
      newTransformOutputResults,
    );

    await applyHook('after.start.compile', newOutputResults);
  }

  watcher.on('add', async (id) => await handleChange(id, 'create'));
  watcher.on('change', async (id) => await handleChange(id, 'update'));
  watcher.on('unlink', async (id) => await handleChange(id, 'delete'));

  watcher.on('error', (err) => {
    consola.error(err);
  });
}
