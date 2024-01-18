#![deny(clippy::all)]
use std::path::{Path, PathBuf};
use tokio::time::Sleep;
use walkdir::WalkDir;
use glob_match::glob_match;
use napi::{
  bindgen_prelude::*,
  threadsafe_function::{ThreadsafeFunction, ThreadSafeCallContext, ThreadsafeFunctionCallMode},
};
use swc_core::{
  base::config::Options as SwcOptions,
  ecma::{
    ast::EsVersion,
    parser::{Syntax, TsConfig},
  },
};
use serde_json::{Map, Value};
use swc::Compiler;

#[macro_use]
extern crate napi_derive;

struct TransformInput {
  id: String,
  code: String,
  map: String,
}

#[napi(object)]
pub struct TransformResult {
  pub code: String,
  pub map: Option<String>,
}

#[napi(object, object_to_js=false)]
pub struct TaskConfig {
  pub root_dir: String,
  // entry directory. default is `./src`
  pub entry_dir: String,
  // output directory
  pub output_dir: String,
  // development or production
  pub mode: String,
  // es2017 / esm / cjs
  pub task_name: String,
  // files should be excluded relative to the entry_dir,
  pub transform_excludes: Option<Vec<String>>,
  #[napi(ts_return_type = "Array<Promise<string>>")]
  pub transforms: Option<Vec<ThreadsafeFunction<String>>>,
}

#[tokio::main]
#[napi]
pub async fn do_transform(
  task_config: TaskConfig,
) {
  // 1. get all files in entry_dir
  let files = get_files(&task_config);

  // 2. transform each files
  // let transforms = task_config.transforms.unwrap_or(vec![]);
  // for loader in transforms.into_iter() {
  //   run_transform(String::from("code111"), loader).await.unwrap();
  // }
  let loader = task_config.transforms.unwrap_or(vec![])[0].clone();
  transform(String::from("code111"), loader).await.unwrap();

  for file in files {

  }
}

#[napi]
pub async fn transform(code: String, loader: ThreadsafeFunction<String>) -> Result<TransformResult> {
  // let transform_input = TransformResult {
  //   code: "code".to_string(),
  //   map: Some("map".to_string()),
  // };
  println!("cccc");
  let TransformResult { code, map } = loader.call_async::<Promise<TransformResult>>(Ok(code)).await?.await?;
  // ... do something with code and map
  println!("code: {}", code);
  println!("map: {:?}", map.clone());
  Ok(TransformResult { code, map })
}

fn get_files(task_config: &TaskConfig) -> Vec<String> {
  let entry_absolute_path: PathBuf = Path::new(&task_config.root_dir).join(Path::new(&task_config.entry_dir));

  let transform_excludes = task_config.transform_excludes
  .clone()
  .unwrap_or(vec![])
  .iter()
  .map(|exclude| {
    Path::new(&entry_absolute_path).join(Path::new(exclude)).to_str().unwrap().to_string()
  })
  .collect::<Vec<_>>();

  let files = WalkDir::new(&entry_absolute_path)
    .into_iter()
    .filter_map(|e| e.ok())
    .filter(|e| e.file_type().is_file())
    .map(|e| e.path().to_str().unwrap().to_string())
    .filter(|p| !transform_excludes.iter().any(|exclude| glob_match(exclude, p)))
    .collect::<Vec<_>>();

  files
}

fn get_swc_config(
  file: PathBuf,
  es_target: EsVersion,
) -> SwcOptions {
  let mut swc_options = SwcOptions {
    ..Default::default()
  };
  swc_options.config.jsc.target = Some(es_target);
  let file_extension = file.extension().unwrap();
  let ts_extensions = vec!["ts", "tsx", "mts"];
  if ts_extensions.iter().any(|ext| ext == &file_extension) {
    swc_options.config.jsc.syntax = Some(Syntax::Typescript(TsConfig {
      tsx: true,
      decorators: true,
      ..Default::default()
    }))
  }
  swc_options
}

async fn swc_transform(transform_input: &TransformInput) {
  // let swc_options = get_swc_config(
  //   PathBuf::new().join(&transform_input.id),
  //   EsVersion::Es2017, // TODO: get esVersion from task_config
  // );

  // let c = Compiler::new(swc_options);
}
