<template>
  <div v-if="isOpen" class="project-modal-overlay">
    <div class="project-modal m-auto 2xl:max-w-[1280px] lg:max-w-[940px] xl:max-w-[1140px]  w-[90vw]">
      <button @click="closeModal" class="absolute right-7 top-6">
        <i
          class="text-2xl text-gray-500 hover:text-blue-600 fa-regular fa-xmark"
        ></i>
      </button>
      <div class="p-[30px] overflow-auto h-[80vh] modal-scroll">
        <h1 class="text-2xl font-bold mb-[30px]">{{ project.title }}</h1>
        <p class="text-base font-bold mb-[10px]">Description</p>
        <p class="text-base font-normal mb-[30px]">{{ project.description }}</p>
        <p class="text-base font-bold mb-[10px]">Roles and Responsibilities</p>
        <p class="text-base font-normal mb-[30px]">{{ project.role }}</p>
        <p class="text-base font-bold mb-[10px]">Skills</p>
        <div class="flex space-x-4 flex-wrap mb-[30px]">
          <div v-for="(item, index) in project.skills" :key="index">
            <span
              class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700 ring-1 ring-inset ring-blue-700/10"
            >
              {{ item.name }}</span
            >
          </div>
        </div>
        <p class="text-base font-bold mb-[10px]">Site link</p>
        <a
          :href="project.site_link"
          target="_blank"
          class="text-base text-blue-600 hover:text-blue-700 font-normal mb-[30px]"
          >{{ project.site_link }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watchEffect } from "vue";

const props = defineProps(["project", "isOpen"]);
const emits = defineEmits(["closeModal"]);
const closeModal = () => {
  emits("closeModal"); // Emit the event with the correct syntax
};
const isModalOpen = ref(false);
watchEffect(() => {
  if (typeof document !== "undefined") {
    document.body.style.overflow = isModalOpen.value ? "hidden" : "";
  }
});

// Watch for changes in the "isOpen" prop and update our local ref accordingly
watchEffect(() => {
  isModalOpen.value = props.isOpen;
});
</script>
<style>
.project-modal {
  backdrop-filter: blur(5px);
  box-shadow: rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset;
  position: fixed !important;
  width: 100%;
  z-index: 999 !important;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity)) !important;
  --tw-bg-opacity: 0.8 !important;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-backdrop-filter !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  transition-duration: 150ms !important;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  height: 80vh;
  border-radius: 10px;
  border: 1px solid rgb(37 99 235);
}
.modal-scroll::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f565;
}
.modal-scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.44, rgb(122, 153, 217)),
    color-stop(0.72, rgb(73, 125, 189)),
    color-stop(0.86, rgb(28, 58, 148))
  );
}
.modal-scroll::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: rgb(255 255 255 / var(--tw-bg-opacity)) !important;
  --tw-bg-opacity: 0.8 !important;;
    border-radius: 10px;
}
</style>
