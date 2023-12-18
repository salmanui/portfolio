<template>
  <div>
    <div
      class="2xl:max-w-[1320px] w-[95vw] mx-auto px-4 lg:pt-[120px] lg:pb-[90px] py-[70px]"
    >
      <div class="text-center mb-[70px]">
        <h1 class="flex flex-col">
          <span class="text-blue-600 text-lg font-semibold">Get in Touch</span>
          <span class="lg:text-[45px] text-[30px] font-bold"
            >Contact With Me
          </span>
        </h1>
        <p class="text-base text-gray-400 max-w-lg mx-auto leading-[1.7]">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be a part of your
          visions.
        </p>
      </div>
      <div class="flex justify-center">
        <!-- Form -->
        <form class="lg:w-[75%] w-full">
        <div class="grid grid-cols-12 gap-8">
            <div class="lg:col-span-6 col-span-full">
                <input type="text" placeholder="Enter your name" class="w-full border-0 bg-[#f8f8f9] px-8 py-4 input-field" required/>
            </div>
            <div class="lg:col-span-6 col-span-full">
                <input type="text" placeholder="Company (Optional)" class="w-full border-0 bg-[#f8f8f9] px-8 py-4 input-field"/>
            </div>
            <div class="lg:col-span-6 col-span-full">
                <input type="email" placeholder="Enter your email" class="w-full border-0 bg-[#f8f8f9] px-8 py-4 input-field" required/>
            </div>
            <div class="lg:col-span-6 col-span-full">
                <input type="number" placeholder="Phone number" class="w-full border-0 bg-[#f8f8f9] px-8 py-4 input-field"/>
            </div>
            <div class="lg:col-span-full col-span-full">
                <textarea rows="4" placeholder="Enter your message"  class="w-full border-0 bg-[#f8f8f9] px-8 py-4 input-field"></textarea>
            </div>
            <div class="lg:col-span-full col-span-full text-center">
                <button
            class="bg-blue-600 text-white font-[600] text-base px-9 py-3 hover:bg-blue-700 rounded-full transition-all ease-linear duration-200 hover:shadow-md hover:translate-y-[-5px]"
          >
            Hire Me
          </button>
            </div>
        </div>
    </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.input-field:focus {
    border-color: rgb(33, 99, 235);
    box-shadow: none;
}
.input-field {
    outline: 2px solid transparent;
    outline-offset: 2px;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: 150ms;
    width: 100%;
    border-radius: 0.125rem;
    border-bottom-width: 2px;
    border-color: transparent;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
}
textarea {
    resize: none;
}
</style>
