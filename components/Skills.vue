<template>
  <div>
    <div
      class="2xl:max-w-[1320px] w-[95vw] mx-auto px-4 lg:pt-[120px] lg:pb-[90px] py-[70px]"
    >
      <div class="text-center mb-[70px]">
        <h1 class="flex flex-col">
          <span class="lg:text-[36px] leading-[1.7] text-[30px] font-bold">My Skills</span>
        </h1>
        <p
          class="text-base text-gray-500 font-normal max-w-lg mx-auto leading-[1.7]"
        >
          Skilled in front-end web development, specializing in creating modern,
          responsive designs with a focus on user experience.
        </p>
      </div>

      <div>
        <ul
          role="list"
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6"
        >
          <li
            v-for="(item, index) in skills"
            :key="index"
            class="col-span-1 border border-gray-100 hover:bg-blue-600 group/service skills-card rounded-lg bg-white text-center shadow-box"
          >
            <div class="p-8 relative">
              <span class="absolute top-0 right-0">
                <svg
                  width="218"
                  height="109"
                  viewBox="0 0 218 109"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.05"
                    cx="156.5"
                    cy="-47.5"
                    r="156.5"
                    fill="white"
                  ></circle>
                  <circle
                    opacity="0.08"
                    cx="210"
                    cy="6"
                    r="62"
                    fill="white"
                  ></circle>
                </svg>
              </span>
              <div class="flex justify-center">
                <span
                  class="w-[80px] h-[80px] bg-blue-600 p-4 group-hover/service:bg-white skills-icon rounded-full flex justify-center items-center"
                >
                  <i
                    class="text-[30px] text-white group-hover/service:text-blue-600 icon-skill"
                    :class="item.iconClass"
                  ></i>
                </span>
              </div>
              <h3
                class="mt-6 text-[16px] font-semibold text-gray-900 group-hover/service:text-white"
              >
                {{ item.title }}
              </h3>
              <span class="absolute bottom-1 left-1">
                <svg
                  width="23"
                  height="32"
                  viewBox="0 0 23 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="21.262"
                    cy="1.12081"
                    r="1.12081"
                    transform="rotate(90 21.262 1.12081)"
                    fill="white"
                  ></circle>
                  <circle
                    cx="21.262"
                    cy="30.4863"
                    r="1.12081"
                    transform="rotate(90 21.262 30.4863)"
                    fill="white"
                  ></circle>
                  <circle
                    cx="1.76005"
                    cy="1.12081"
                    r="1.12081"
                    transform="rotate(90 1.76005 1.12081)"
                    fill="white"
                  ></circle>
                  <circle
                    cx="1.76005"
                    cy="30.4863"
                    r="1.12081"
                    transform="rotate(90 1.76005 30.4863)"
                    fill="white"
                  ></circle>
                  <circle
                    cx="11.6228"
                    cy="1.12081"
                    r="1.12081"
                    transform="rotate(90 11.6228 1.12081)"
                    fill="white"
                  ></circle>
                  <circle
                    cx="11.6228"
                    cy="30.4863"
                    r="1.12081"
                    transform="rotate(90 11.6228 30.4863)"
                    fill="white"
                  ></circle>
                  <circle
                    cx="21.262"
                    cy="10.9839"
                    r="1.12081"
                    transform="rotate(90 21.262 10.9839)"
                    fill="white"
                  ></circle>
                  <circle
                    cx="1.76005"
                    cy="10.9839"
                    r="1.12081"
                    transform="rotate(90 1.76005 10.9839)"
                    fill="white"
                  ></circle>
                  <circle
                    cx="11.6228"
                    cy="10.9839"
                    r="1.12081"
                    transform="rotate(90 11.6228 10.9839)"
                    fill="white"
                  ></circle>
                  <circle
                    cx="21.262"
                    cy="20.8469"
                    r="1.12081"
                    transform="rotate(90 21.262 20.8469)"
                    fill="white"
                  ></circle>
                  <circle
                    cx="1.76005"
                    cy="20.8469"
                    r="1.12081"
                    transform="rotate(90 1.76005 20.8469)"
                    fill="white"
                  ></circle>
                  <circle
                    cx="11.6228"
                    cy="20.8469"
                    r="1.12081"
                    transform="rotate(90 11.6228 20.8469)"
                    fill="white"
                  ></circle>
                </svg>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = [
  {
    iconClass: "fa-brands fa-html5",
    title: "HTML5",
  },
  {
    iconClass: "fa-brands fa-css3-alt",
    title: "CSS3",
  },
  {
    iconClass: "fa-brands fa-bootstrap",
    title: "Bootstrap",
  },
  {
    iconClass: "fa-brands fa-sass",
    title: "Sass",
  },
  {
    iconClass: "fa-brands fa-js",
    title: "Javascript",
  },
  {
    iconClass: "fa-brands fa-vuejs",
    title: "Vuejs",
  },
];
</script>

<style>
.skills-card .skills-icon {
  position: relative;
  transition: all 0.5s ease;
  z-index: 1;
}
.skills-card .skills-icon .icon-skill {
  transition: all 0.5s ease;
}
.skills-card:hover .skills-icon {
  transform: rotate(45deg);
}
.skills-card:hover .skills-icon .icon-skill {
  transform: scale(0.8) rotate(-45deg);
  transition: all 0.5s ease;
}
</style>
