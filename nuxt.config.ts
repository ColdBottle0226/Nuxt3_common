export default defineNuxtConfig({
  
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL, // 환경 변수 사용
    },
  },
  srcDir: 'app/',
  
  serverDir: 'server/', 

  compatibilityDate: "2025-03-04",
});