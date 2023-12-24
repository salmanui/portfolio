<template>
  <div>
    <div
      class="2xl:max-w-[1320px] w-[95vw] mx-auto px-4 lg:pt-[120px] lg:pb-[90px] py-[70px]"
    >
      <div class="text-center mb-[70px]">
        <h1 class="flex flex-col">
          <span class="lg:text-[36px] leading-[1.7] text-[30px] font-bold">Recent Projects</span>
        </h1>
        <p class="text-base text-gray-500 font-normal max-w-xl mx-auto leading-[1.7]">
          Projects developing creative user interface websites,
          implementing and enhancing mobile applications with innovative user
          experiences.
        </p>
      </div>
      <div>
        <div
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <article
            v-for="(item, index) in projects"
            :key="index"
            class="project"
          >
            <div class="relative w-full overflow-hidden rounded-[10px] bg-gray-100 border shadow-md">
              <img
                :src="item.imageUrl"
                :alt=" item.title"
                class="aspect-[16/9] hover:scale-110 transition-all ease-in-out duration-500  w-full rounded-[10px] bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
            </div>
            <div class="max-w-xl">
              <div class="group relative">
                <h3
                  class="mt-6 text-[20px] font-bold leading-6 text-gray-900 group-hover:text-blue-600 transition-all ease-linear duration-200"
                  >
                  <a @click="navigate(item)">
                    <span class="absolute inset-0" />
                    {{ item.title }}
                  </a>
                </h3>
                <p class="mt-5 line-clamp-4 text-base leading-6 text-gray-500 font-normal">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {projects} from '../ts/projects'
// Click to navigate project page
const projectName = ref("");
const navigate = async (item: any) => {
  projectName.value = item.name.replace(" ", "-");
  await navigateTo(`/projects/${projectName.value}`);
};
</script>

<style></style>
