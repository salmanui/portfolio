<template>
  <div>
    <div
      class="2xl:max-w-[1320px] w-[95vw] mx-auto px-4 lg:pt-[120px] lg:pb-[90px] py-[70px]"
    >
      <div class="text-center mb-[70px]">
        <h1 class="flex flex-col">
          <span class="text-blue-600 text-base font-semibold">Contact Me</span>
          <span class="lg:text-[40px] text-[30px] font-bold"
            >Get in Touch
          </span>
        </h1>
        <p class="text-base text-gray-400 font-medium max-w-lg mx-auto leading-[1.7]">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be a part of your
          visions.
        </p>
      </div>
      <div class="flex justify-center">
        <!-- Form -->
        <form class="lg:w-[75%] w-full" ref="form" @submit.prevent="sendMail">
        <div class="grid grid-cols-12 gap-8">
            <div class="lg:col-span-6 col-span-full">
                <input name="from_name" type="text" :value="inputFieldReset"  placeholder="Enter your name" class="w-full border-0 bg-[#f8f8f9] px-8 py-4 input-field" required/>
            </div>
            <div class="lg:col-span-6 col-span-full">
                <input name="company_name" type="text" :value="inputFieldReset"  placeholder="Company (Optional)" class="w-full border-0 bg-[#f8f8f9] px-8 py-4 input-field"/>
            </div>
            <div class="lg:col-span-6 col-span-full">
                <input name="email" type="email" :value="inputFieldReset"  placeholder="Enter your email" class="w-full border-0 bg-[#f8f8f9] px-8 py-4 input-field" required/>
            </div>
            <div class="lg:col-span-6 col-span-full">
                <input name="phone_number" type="number" :value="inputFieldReset"  placeholder="Phone number" class="w-full border-0 bg-[#f8f8f9] px-8 py-4 input-field"/>
            </div>
            <div class="lg:col-span-full col-span-full">
                <textarea name="message" rows="4" type="text" :value="inputFieldReset"  placeholder="Enter your message"  class="w-full border-0 bg-[#f8f8f9] px-8 py-4 input-field"></textarea>
            </div>
            <div class="lg:col-span-full col-span-full text-center">
                <button type="submit"
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

<script setup lang="ts">
import emailjs from 'emailjs-com';
import { ref, Ref } from 'vue';

const form: Ref<HTMLElement | null> = ref(null);
const inputFieldReset: Ref<string | null> = ref(null);

  const sendMail = () => {
  emailjs.sendForm('service_vr7ayhq', 'template_wg7xv02', form.value as HTMLFormElement, 'oZNxW7ScSUw3XGAJu')
    .then(() => {
      alert('Message sent successfully!');
      // Reset form fields
      if (form.value) {
        (form.value as HTMLFormElement).reset();
      }

      // Reset inputFieldReset
      if (inputFieldReset.value) {
        inputFieldReset.value = "";
      }
    }, (error) => {
      alert('Message not sent', error);
    });
};
</script>


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
