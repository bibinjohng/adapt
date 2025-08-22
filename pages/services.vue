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
    content: 'SDA homes are designed with features that cater to various disabilities. This includes ramps, wider doorways, step-free access, and modified bathrooms to accommodate individuals with mobility impairments, including those who use wheelchairs. Features include level entryways or ramps for easy access to the home, accessible bathrooms with handrails, lowered sinks, and showers with seats, adjustable kitchen counters and accessible appliances.'
  },
  {
    title: '2. Personalized Support',
    content: 'These homes are equipped with specialized support options to help people manage daily living tasks, such as personal care, meal preparation, and household chores. The level of support can be tailored to the needs of each individual, ranging from minimal assistance to more intensive care.'
  },
  {
    title: '3. Technology Integration',
    content: 'Many SDA homes integrate assistive technologies like smart home systems, environmental controls, and emergency alert systems. These features help improve independence and safety by allowing individuals to control various aspects of their home environment, such as lighting, temperature, and doors, often through voice commands or remote control.'
  },
  {
    title: '4. Safety and Security',
    content: 'These homes often include enhanced safety measures, such as automated lighting, motion detectors, fall detection sensors, and smart door locks. These systems are designed to keep residents safe while allowing them to live as independently as possible. Fire safety systems such as alarms that are accessible to individuals with sensory impairments (e.g., visual alarms).'
  },
  {
    title: '5. Accommodation Types',
    content: 'We provide Fully Accessible, Improved Liveability, High Physical Support, and Robust home types — each suited for unique support needs.'
  },
  {
    title: '6. Social and Community Integration',
    content: 'SDA homes are often located in areas that allow residents to engage with their local community. This could include proximity to public transport, shops, parks, and other social activities. The goal is to foster inclusion and participation in society.'
  },
  {
    title: '7. Individual Choice and Control',
    content: 'One of the main objectives of SDA homes is to give individuals with disabilities more control over where and how they live. The NDIS allows participants to choose their preferred SDA home and location, ensuring it suits their needs. Modifications to meet the specific needs of the individual, such as adapted furniture or adjustable equipment. The ability to adjust spaces based on evolving needs over time. Options for independent living with remote monitoring or assistance, enabling residents to maintain autonomy while still having access to support if needed. Specialized equipment to assist with daily tasks like cooking, bathing, or mobility.'
  },
  {
    title: '8. Space and Layout',
    content: 'Open-plan designs to reduce obstacles and allow easy movement. Sufficient space for caregivers or support staff to assist residents. Separate living and sleeping areas, tailored to the individual’s needs. Outdoor Access—Accessible gardens or outdoor spaces, providing a safe and enjoyable environment for relaxation or recreation. Pathways for easy navigation by wheelchair or mobility devices.'
  }
]
</script>
