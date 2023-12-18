<template>
  <div>
      <!-- Your desktop/laptop content goes here -->
    <Disclosure
      as="nav"
      :class="{ 'sticky-nav lg:px-4 lg:py-2': isNavbarFixed }"
    >
      <div
        class="mx-auto 2xl:max-w-[1320px] w-[95vw] px-4"
        :class="{ 'py-5': !isNavbarFixed }"
      >
        <div class="flex h-16 justify-between items-center">
          <div class="flex">
            <div class="flex flex-shrink-0 items-center">
              <img
                class="h-8 w-auto pr-4"
                src="/images/logo.svg"
                alt="Your Company"
              />
            </div>
            <div class="hidden sm:ml-6 lg:flex sm:space-x-10">
              <a
                href="#home"
                class="menu-scroll inline-flex items-center px-1 pt-1 text-base font-medium text-[#090e34] hover:text-blue-600 transition-all ease-linear duration-200"
                >Home</a
              >
              <a
                href="#about"
                class="menu-scroll inline-flex items-center px-1 pt-1 text-base font-medium text-[#090e34] hover:text-blue-600 transition-all ease-linear duration-200"
                >About</a
              >
              <a
                href="#services"
                class="menu-scroll inline-flex items-center t px-1 pt-1 text-base font-medium text-[#090e34] hover:text-blue-600 transition-all ease-linear duration-200"
                >Services</a
              >
              <a
                href="#projects"
                class="menu-scroll inline-flex items-center t px-1 pt-1 text-base font-medium text-[#090e34] hover:text-blue-600 transition-all ease-linear duration-200"
                >Projects</a
              >
              <a
                href="#contact"
                class="menu-scroll inline-flex items-center t px-1 pt-1 text-base font-medium text-[#090e34] hover:text-blue-600 transition-all ease-linear duration-200"
                >Contact Me</a
              >
            </div>
          </div>
          <div
            class="hover:translate-y-[-5px] transition-all ease-linear duration-200"
          >
            <a
              href="/resume/Salman-UI-Developer-Resume.pdf"
              download="Salman-UI-Developer-Resume"
              target="_blank"
              class="bg-blue-600 text-white font-[600] lg:text-base text-[14px] md:px-9 px-8 py-4 hover:bg-blue-700 rounded-full transition-all ease-linear duration-200 hover:shadow-md"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </Disclosure>
     <!-- Mobile menu - shown only on small screens -->
    <div v-if="isMobileView" class="lg:hidden block">
      <div class="mobile-menu">
        <div class="flex justify-around items-center py-4">
          <div>
            <a
              href="#home"
              class="flex flex-col justify-center menu-scroll items-center px-1 pt-1 text-[15px] font-medium text-[#090e34] hover:text-blue-600 transition-all ease-linear duration-200"
            >
              <i class="fa-solid fa-house text-xl"></i>
              Home</a
            >
          </div>
          <div>
            <a
              href="#about"
              class="flex flex-col justify-center menu-scroll items-center px-1 pt-1 text-[15px] font-medium text-[#090e34] hover:text-blue-600 transition-all ease-linear duration-200"
            >
              <i class="fa-solid fa-user text-xl"></i>
              About</a
            >
          </div>
          <div>
            <a
            href="#services"
              class="flex flex-col justify-center menu-scroll items-center px-1 pt-1 text-[15px] font-medium text-[#090e34] hover:text-blue-600 transition-all ease-linear duration-200"
            >
              <i class="fa-solid fa-gear-code text-xl"></i>
              Services</a
            >
          </div>
          <div>
            <a
            href="#projects"
              class="flex flex-col justify-center menu-scroll items-center px-1 pt-1 text-[15px] font-medium text-[#090e34] hover:text-blue-600 transition-all ease-linear duration-200"
            >
              <i class="fa-solid fa-chart-simple text-xl"></i>
              Projects</a
            >
          </div>
          <div>
            <a
            href="#contact"
              class="flex flex-col justify-center menu-scroll items-center px-1 pt-1 text-[15px] font-medium text-[#090e34] hover:text-blue-600 transition-all ease-linear duration-200"
            >
              <i class="fa-solid fa-mobile-button text-xl"></i>
              Contact Me</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Disclosure } from "@headlessui/vue";
import { ref, onMounted, onUnmounted, watch } from "vue";

const isNavbarFixed = ref(false);
const screenWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0);
const isMobileView = ref(screenWidth.value <= 1024);
const pageLinks = ref<NodeListOf<Element> | null>(null);

const handleClick = (e: Event, elem: Element) => {
  e.preventDefault();
  const targetId = elem.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  targetElement?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

const handleResize = () => {
  screenWidth.value = typeof window !== 'undefined' ? window.innerWidth : 0;
};

const handleScroll = () => {
  const scrollPos =
    typeof window !== 'undefined' ? window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop : 0;

  isNavbarFixed.value = scrollPos > 100;

  pageLinks.value?.forEach((currLink) => {
    const val = currLink.getAttribute("href");
    const refElement = document.querySelector(val);
    const scrollTopMinus = scrollPos + 73;

    if (
      refElement &&
      refElement.offsetTop <= scrollTopMinus &&
      refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
    ) {
      pageLinks.value?.forEach((link) => link.classList.remove("active"));
      currLink.classList.add("active");
    } else {
      currLink.classList.remove("active");
    }
  });
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize);
    window.addEventListener("scroll", handleScroll);
    pageLinks.value = document.querySelectorAll(".menu-scroll");
    pageLinks.value?.forEach((elem) =>
      elem.addEventListener("click", (e) => handleClick(e, elem))
    );
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener("scroll", handleScroll);
  }
});

watch(screenWidth, () => {
  isMobileView.value = screenWidth.value <= 1024;
});
</script>
<style>
.sticky-nav {
  backdrop-filter: blur(5px);
  box-shadow: rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset;
  position: fixed !important;
  width: 100%;
  z-index: 99 !important;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity)) !important;
  --tw-bg-opacity: 0.8 !important;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  transition-duration: 150ms !important;
}
.menu-scroll.active {
  color: rgb(37, 99, 235);
}
.mobile-menu {
  backdrop-filter: blur(5px);
  box-shadow: rgba(0, 0, 0, 0.2) 0px -1px 0px 0px inset;
  position: fixed !important;
  width: 100%;
  z-index: 99 !important;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity)) !important;
  --tw-bg-opacity: 0.8 !important;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  transition-duration: 150ms !important;
  bottom: 0px;
}
</style>
