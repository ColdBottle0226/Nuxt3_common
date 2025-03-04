export default defineEventHandler(async (event): Promise<any> => {
  const config = useRuntimeConfig();

  try {
    const response: any = await $fetch(`${config.public.apiBaseUrl}/api/test/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userSeq: 2,
        userId: "admin",
        userName: "admin",
        userPw: "1234"
      }),
    });

    return response;
  } catch (error) {
    console.error('API 요청 실패:', error);
    return { success: false, message: 'API 요청 실패' };
  }
});
