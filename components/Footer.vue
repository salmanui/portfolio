<template>
  <div>
    <footer class="bg-[#090e34]">
      <div class="2xl:max-w-[1320px] w-[95vw] mx-auto px-4 py-5 mb-[90px] lg:mb-0">
        <div class="md:flex justify-between items-center">
          <p class="text-white text-base font-medium md:mb-0 mb-3">
            &#169; Copyright  {{ currentYear }} imsalman.in All rights reserved.
          </p>
          <div class="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/mohammad-salman-679022b2/"
                target="_blank"
                class="w-[40px] h-[40px] cursor-pointer border border-gray-100/20 flex justify-center items-center shadow-md transition-all ease-linear duration-200 hover:translate-y-[-4px] text-gray-400 hover:bg-blue-600 hover:text-white rounded-full"
                ><i class="fa-brands fa-linkedin"></i
              ></a>
              <a
                href="https://www.facebook.com/ImMohammadSalman"
                target="_blank"
                class="w-[40px] h-[40px] cursor-pointer border border-gray-100/20 flex justify-center items-center shadow-md transition-all ease-linear duration-200 hover:translate-y-[-4px] text-gray-400 hover:bg-blue-600 hover:text-white rounded-full"
                ><i class="fa-brands fa-facebook-f"></i
              ></a>
              <a href="#"
                class="w-[40px] h-[40px] cursor-pointer border border-gray-100/20 flex justify-center items-center shadow-md transition-all ease-linear duration-200 hover:translate-y-[-4px] text-gray-400 hover:bg-blue-600 hover:text-white rounded-full"
                ><i class="fa-brands fa-square-x-twitter"></i
              ></a>
              <a
              href="#"
                class="w-[40px] h-[40px] cursor-pointer border border-gray-100/20 flex justify-center items-center shadow-md transition-all ease-linear duration-200 hover:translate-y-[-4px] text-gray-400 hover:bg-blue-600 hover:text-white rounded-full"
                ><i class="fa-brands fa-youtube"></i
              ></a>
            </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const currentYear = ref(new Date().getFullYear());

onMounted(() => {
  // Update the year every second (you can adjust the interval as needed)
  setInterval(() => {
    currentYear.value = new Date().getFullYear();
  }, 1000);
});
</script>

<style></style>
