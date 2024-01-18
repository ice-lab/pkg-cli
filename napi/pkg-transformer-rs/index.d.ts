/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface TransformResult {
  code: string
  map?: string
}
export interface TaskConfig {
  rootDir: string
  entryDir: string
  outputDir: string
  mode: string
  taskName: string
  transformExcludes?: Array<string>
  transforms?: Array<(err: Error | null, value: string) => any>
}
export function doTransform(taskConfig: TaskConfig): void
export function transform(code: string, loader: (err: Error | null, value: string) => any): Promise<TransformResult>
