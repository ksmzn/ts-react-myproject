// file-loaderなどで読み込むリソースが型エラーになるので、型定義を行う
declare module '*.png' {
  const content: any
  export default content
}
// declare module '*.png'

// This is a temporary fix for redux-devtools-extension#492

import { StoreEnhancer } from 'redux'

declare module 'redux' {
  export type GenericStoreEnhancer = StoreEnhancer
}
