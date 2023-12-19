<template>
  <div>
    <div
      class="2xl:max-w-[1320px] w-[95vw] mx-auto px-4 lg:pt-[120px] lg:pb-[90px] py-[70px]"
    >
      <div class="text-center mb-[70px]">
        <h1 class="flex flex-col">
          <span class="text-blue-600 text-base font-semibold"
            >Creative Portfolios</span
          >
          <span class="lg:text-[40px] text-[30px] font-bold">Recent Works</span>
        </h1>
        <p class="text-base text-gray-400 font-medium max-w-lg mx-auto leading-[1.7]">
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
                  <a :href="item.href" target="_blank">
                    <span class="absolute inset-0" />
                    {{ item.title }}
                  </a>
                </h3>
                <p class="mt-5 line-clamp-4 text-base leading-6 text-gray-500 font-medium">
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
const projects = [
  {
    title: "GharPe - Direct From Builders",
    href: "https://dev.gharpe.com",
    description: `With our virtual platform, you can connect with sellers, take video tours of properties, and mark your visits as done – all without leaving your home. India's first platform to see your properties in 3D View, Drone View.`,
    imageUrl: "/images/gharpe.png",
  },
  {
    title: "BuilderPe - by GharPe",
    href: "https://dev.builderpe.com/",
    description: `Discover a unified solution for all your needs – our free software and managed services offer a single, convenient platform to meet your diverse requirements effortlessly.`,
    imageUrl: "/images/builderpe.png",
  },
  {
    title: "Projectsly - by 500apps",
    href: "https://projectsly.com/",
    description: `Projectsly is a project management software that helps teams plan and execute projects. It offers a range of features to improve team collaboration, task management, and productivity.`,
    imageUrl: "/images/projectsly.png",
  },
];
</script>

<style></style>
