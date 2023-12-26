<template>
  <div>
    <button class="arrow-button bg-blue-600 text-white font-[600] text-base hover:bg-blue-700 rounded-full transition-all ease-linear duration-200 hover:shadow-md" v-show="showButton" @click="scrollToTop">
      <i class="fas fa-arrow-up"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const showButton = ref(false);

const scrollToTop = () => {
  // Check if window is defined before accessing it
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

const handleScroll = () => {
  // Check if window is defined before accessing it
  if (typeof window !== "undefined") {
    showButton.value = window.scrollY > 800;
  }
};

onMounted(() => {
  // Check if window is defined before adding the scroll event listener
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }
});

onBeforeUnmount(() => {
  // Check if window is defined before removing the scroll event listener
  if (typeof window !== "undefined") {
    window.removeEventListener("scroll", handleScroll);
  }
});
</script>
<style>
.arrow-button {
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 45px;
  height: 45px;
  transition: transform 0.5s ease-in-out;
  position: fixed;
  right: 20px;
  bottom: 20px;
}

.arrow-button:hover {
  transform: translateY(-5px);
}
</style>
