import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
  plugins: [react()],
  // root: "client", // 프로젝트 루트를 'client'로 설정하십시오.
  // build: {
  //   outDir: "build", // 빌드했을 때 출력될 폴더
  // },
  server: {
    port: 3000,
    open: true, // 서버를 시작할 때 자동으로 브라우저 열기
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      common: path.resolve(__dirname, "src/common"),
      store: path.resolve(__dirname, "src/store"),
      api: path.resolve(__dirname, "src/api"),
      hooks: path.resolve(__dirname, "src/hooks"),
    },
  },
});
