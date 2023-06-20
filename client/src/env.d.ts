interface ImportMeta {
  env: ImportMetaEnv;
}
interface ImportMetaEnv {
  readonly VITE_SERVER_URL?: string;
  // 다른 환경 변수들에 대한 타입 정의...
}
