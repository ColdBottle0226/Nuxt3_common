<template>
  <div>
    <h1>API 테스트</h1>
    <button @click="callApi">API 호출</button>
    <p v-if="response">{{ response }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const response = ref(null);

const callApi = async () => {
  try {
    const res = await fetch('/api/test', { method: 'POST' });
    response.value = await res.json();
  } catch (error) {
    console.error('API 호출 실패:', error);
  }
};
</script>
