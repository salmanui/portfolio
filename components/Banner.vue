<template>
  <div>
    <div class="absolute top-0">
      <svg
        width="48"
        height="95"
        viewBox="0 0 48 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="0.5"
          cy="47.5"
          r="47.5"
          fill="url(#paint0_radial_6:121)"
        ></circle>
        <defs>
          <radialGradient
            id="paint0_radial_6:121"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(0.5) rotate(90) scale(95)"
          >
            <stop stop-color="white"></stop>
            <stop offset="0.569" stop-color="#F0F4FD"></stop>
            <stop offset="0.993" stop-color="#D9E0F0"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
    <div class="2xl:max-w-[1320px] w-[95vw] mx-auto px-4">
      <div class="grid grid-cols-12 gap-8">
        <div class="lg:col-span-5 col-span-full relative">
          <h1 class="flex flex-col">
            <span class="text-blue-600 text-base font-medium">
              Hey There 👋 I am</span
            >
            <span class="text-[45px] font-bold">Mohammad Salman</span>
          </h1>
          <h2 class="text-gray-500 text-xl font-medium mb-5">
            Professional
            <span class="text-blue-600">
              {{ typedText }}
            </span>
          </h2>
          <p class="text-gray-500 font-normal text-base mb-10 leading-[1.75]">
            I have around {{ experience.years }}
            {{ experience.years > 1 ? "years" : "year" }}
            {{ experience.months }}
            {{ experience.months > 1 ? "months" : "month" }} of work experience
            in UI Developer at Mantra. I have worked on my relevant technical
            skills like e.g: HTML/HTML5, CSS/CSS3, Bootstrap, Vue Bootstrap, Tailwind CSS, Tailwind UI, JavaScript, Vuejs.
          </p>
        </div>
        <div class="lg:col-span-7 col-span-full">
          <div class="lg:absolute lg:right-28 lg:bottom-0 relative z-[1]">
            <img src="/images/banner_image.png" alt="Banner Image" class="h-[600px]" />
            <div class="absolute bottom-2 lg:left-[-20px]">
            <svg
              width="40"
              height="38"
              viewBox="0 0 40 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.31451 3.18282L32.4926 6.24789C36.3084 6.75249 38.147 11.1986 35.8021 14.2508L21.5587 32.7911C19.2138 35.8434 14.444 35.2126 12.9731 31.6558L4.03852 10.0504C2.56762 6.49355 5.49873 2.67822 9.31451 3.18282Z"
                stroke="#4A6CF7"
                stroke-width="6"
              ></path>
            </svg>
          </div>
          </div>
          <div class="absolute right-0 bottom-0">
            <svg
              width="491"
              height="490"
              viewBox="0 0 491 490"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="356.5"
                cy="356.5"
                r="356.5"
                fill="url(#paint0_linear_6:37)"
              ></circle>
              <defs>
                <linearGradient
                  id="paint0_linear_6:37"
                  x1="356.5"
                  y1="0"
                  x2="356.5"
                  y2="713"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4A6CF7"></stop>
                  <stop offset="1" stop-color="#1E3BB3"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const text = "UI Developer";
const typedText = ref("");
const startDate = new Date("2019-01-21"); // Replace with your actual start date
const currentDate = new Date();
const experience = ref({ years: 0, months: 0 });

onMounted(() => {
  //Experience block
  const diffInMilliseconds = currentDate - startDate;
  experience.value.years = Math.floor(
    diffInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
  );
  experience.value.months = Math.floor(
    (diffInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) /
      (30.44 * 24 * 60 * 60 * 1000)
  );
  let index = 0;
  const speed = 100;

  function type() {
    if (index < text.length) {
      typedText.value += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }
  type();
});
</script>

<style></style>
