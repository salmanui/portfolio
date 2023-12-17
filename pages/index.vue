<template>
  <div class="overflow-x-hidden">
    <Menu />
    <div id="home" class="lg:pt-[100px] relative 2xl:h-[600px]">
      <Banner/>
    </div>
    <div id="about" class="lg:pt-[145px] lg:pb-[120px] py-[70px] relative">
      <About/>
    </div>
    <div id="services" class="relative">
      <Services/>
    </div>
    <div id="projects" class="relative bg-[#f8f9ff]">
      <Projects/>
    </div>
    <div id="resume" class="relative">
      <Resume/>
    </div>
    <div id="contact" class="relative">
      <ContactMe/>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style></style>
