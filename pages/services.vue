<template>
  <!-- Image Banner -->
  <div class="w-full">
    <img
      src="/banner-3.webp"
      alt="Our Services"
      class="w-full object-cover h-[300px] md:h-[400px]"
    />
  </div>

  <!-- Page Title -->
  <div class="bg-[#1181c3] text-white text-center py-10 px-4">
    <h1 class="text-3xl font-bold text-center">Our Services</h1>
  </div>

  <section class="px-4 py-10 max-w-2xl mx-auto text-gray-800">

    <!-- Intro -->
    <section class="mb-10 text-center">
      <p>
        Our SDA homes are designed to support your comfort, independence, and safety while empowering inclusion and lifestyle freedom. Explore the key features below.
      </p>
    </section>

    <!-- 8 Key Features Accordion -->
    <section v-for="(item, index) in features" :key="index" class="mb-6 border-b border-gray-200 pb-4">
      <button
        @click="toggle(index)"
        class="w-full text-left font-semibold text-[#1181c3] text-lg flex justify-between items-center focus:outline-none py-2"
      >
        {{ item.title }}
        <span class="text-gray-400">{{ active === index ? '-' : '+' }}</span>
      </button>
      <div v-if="active === index" class="mt-2 text-gray-700 leading-relaxed">
        {{ item.content }}
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(null)
const toggle = (index) => {
  active.value = active.value === index ? null : index
}

const features = [
  {
    title: '1. Accessibility',
    content: 'Our homes are built with ramps, wide doorways, step-free entries, and modified bathrooms to ensure ease of mobility and use for all residents.'
  },
  {
    title: '2. Personalized Support',
    content: 'Each home is tailored to the resident’s support needs — whether minimal help or 24/7 care, we adapt to enable comfortable living.'
  },
  {
    title: '3. Technology Integration',
    content: 'From voice-activated lighting to remote-controlled doors and emergency alerts, technology is built into our homes to enhance independence.'
  },
  {
    title: '4. Safety and Security',
    content: 'Smart locks, fall sensors, accessible alarms, and motion detection systems create a secure living space with peace of mind.'
  },
  {
    title: '5. Accommodation Types',
    content: 'We provide Fully Accessible, Improved Liveability, High Physical Support, and Robust home types — each suited for unique support needs.'
  },
  {
    title: '6. Social and Community Integration',
    content: 'Our homes are placed close to essential services and transport, encouraging community interaction and inclusion.'
  },
  {
    title: '7. Individual Choice and Control',
    content: 'Residents have control over how they live, with adaptable spaces and remote assistance options built in.'
  },
  {
    title: '8. Space and Layout',
    content: 'Open-plan design, support-staff space, and accessible outdoor areas ensure comfort and flexibility for all.'
  }
]
</script>
