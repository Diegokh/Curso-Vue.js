
<template>
    <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
      <div class="flex flex-col space-y-2">
        <!-- Messages go here -->

        <ChatBubble
        v-for="message in messages"
        :key="message.id"
        v-bind="message"/>
         
        <!-- :its-mine="message.itsMine" :message="message.message"
        :image="message.image" -->

      </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface.ts';
import ChatBubble from './ChatBubble.vue';

interface Props {
  messages: ChatMessage[];
}

const props = defineProps<Props>();
const chatRef = ref<HTMLDivElement | null>(null);

const scrollToBottom = async () => {
  await nextTick();
  if (chatRef.value) {
    chatRef.value.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth',
    });
  }
};

// Escuchamos los cambios en el arreglo de mensajes (deep para capturar nuevos elementos)
watch(
  () => props.messages,
  () => {
    scrollToBottom();
  },
  { deep: true, immediate: true }
);
</script>
