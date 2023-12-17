<template>
  <div>
    <div
      class="2xl:max-w-[1320px] w-[95vw] mx-auto px-4 border-t border-gray-200 lg:pt-[120px] lg:pb-[90px] py-[70px]"
    >
      <div class="text-center mb-[70px]">
        <h1 class="flex flex-col">
          <span class="text-blue-600 text-lg font-semibold">What I Offer?</span>
          <span class="lg:text-[45px] text-[30px] font-bold">My Services</span>
        </h1>
        <p class="text-base text-gray-400 max-w-lg mx-auto leading-[1.7]">
          Communicate the value proposition of this service and the positive
          impact it can have on our clients' goals.
        </p>
      </div>
      <div>
        <ul
          role="list"
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
        >
          <li
            v-for="(item, index) in services"
            :key="index"
            class="col-span-1 border border-gray-100 hover:bg-blue-600 group/service rounded-lg bg-white text-center shadow-box"
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
                  class="w-[80px] h-[80px] bg-blue-600 group-hover/service:bg-white rounded-full flex justify-center items-center"
                >
                  <i class="text-[30px] text-white group-hover/service:text-blue-600" :class="item.icon"></i>
                </span>
              </div>
              <h3 class="mt-6 text-[22px] font-[600] text-gray-900 group-hover/service:text-white">
                {{ item.title }}
              </h3>
              <dl class="mt-3 max-h-[140px] overflow-auto scrollbar-thin">
                <dd class="text-base leading-[1.7] text-gray-500 font-medium group-hover/service:text-white/80">
                  {{ item.description }}
                </dd>
              </dl>
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
const services = [
  {
    title: "User Research",
    icon: "fa-solid fa-user-magnifying-glass",
    description:
      "User research involves gathering insights and feedback from target users to inform product design and development decisions.",
  },
  {
    title: "UI Development",
    icon: "fa-solid fa-code",
    description:
      "I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is UI development, HTML, CSS, Bootstrap, and Tailwind CSS building small and medium web apps, animations, and coding interactive layouts.",
  },
  {
    title: "Javascript",
    icon: "fa-brands fa-square-js",
    description:
      "I create successful dynamic functionality websites and application using JavaScript that are fast, easy to use, and built with best practices.",
  },
  {
    title: "Vuejs",
    icon: "fa-brands fa-vuejs",
    description:
      "I create successful website templates using vue.js for building user interfaces, known for its simplicity, flexibility, and efficient integration into projects of varying scales.",
  },
];
</script>

<style>
.shadow-box {
  box-shadow: 0px 11px 41px -11px rgba(9, 14, 52, 0.1);
}
</style>
