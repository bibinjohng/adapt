<script setup lang="ts">
useHead({
  title: 'Specialist Disability Accommodation (SDA) - Adapt Smart Homes',
  meta: [
    { name: 'description', content: 'Adapt Smart Homes provides purpose-built Specialist Disability Accommodation (SDA) homes for NDIS participants with extreme functional impairment or very high support needs.' },
  ],
})

const categories = [
  {
    title: 'Improved Liveability',
    desc: 'Designed for people with sensory, intellectual, or cognitive impairments.',
    img: '/improved-liveability.jpg',
    path: '/sda/improved-liveability',
  },
  {
    title: 'Fully Accessible',
    desc: 'Suitable for people with significant physical impairments, with extensive mobility features.',
    img: '/fully-accessible.jpg',
    path: '/sda/fully-accessible',
  },
  {
    title: 'Robust',
    desc: 'Built to withstand increased wear and tear and reduce the risk of injury.',
    img: '/robust.jpg',
    path: '/sda/robust',
  },
  {
    title: 'High Physical Support',
    desc: 'Includes features such as ceiling hoists, backup power, and assistive technology for high support needs.',
    img: '/high-physical-spport.jpg',
    path: '/sda/high-physical-support',
  },
]
</script>

<template>
  <div>
    <!-- Image Banner -->
    <div class="w-full">
      <img
        src="/banner-2.webp"
        alt="Adapt Smart Homes"
        class="w-full object-cover h-[300px] md:h-[400px]"
      />
    </div>
    <div class="bg-[#1181c3] text-white text-center py-10 px-4">
    <h1 class="text-3xl font-bold text-center text-dark">SDA (Specialist Disability Accommodation)</h1>
      </div>

    <UContainer class="py-16 space-y-16">
      <!-- INTRO -->
      <section class="text-center max-w-3xl mx-auto">
        <p class="text-lg text-gray-700 leading-relaxed">
          Our goal is to provide NDIS participants with high physical support needs the opportunity to live
          in beautiful, architecturally designed residences they are proud to call home.
        </p>
        <p class="mt-4 text-gray-600">
          We build homes in both suburban and city locations across Australia, enabling residents to live
          independently with access to amenities, services, and entertainment.
        </p>
      </section>

      <!-- SECTION: WHAT IS SDA -->
      <section class="grid md:grid-cols-2 gap-10">
        <div>
          <h2 class="text-2xl font-semibold mb-4">What is Specialist Disability Accommodation?</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Specialist Disability Accommodation (SDA) is purpose-built housing designed for NDIS participants
            with extreme functional impairment or very high support needs. These homes feature accessible
            layouts and assistive technologies that support greater independence and comfort.
          </p>
          <p class="text-gray-700 leading-relaxed">
            SDA homes are designed to create safe and supportive living environments and comply with strict
            design standards to ensure safety, accessibility, and quality of life.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-4">SDA Design Standard</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Every new SDA dwelling must meet the SDA Design Standard, which defines essential features and
            quality benchmarks for accessible, safe, and compliant homes.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Additionally, SDA dwellings comply with the Australian National Construction Code and local
            planning requirements to ensure safety and sustainability.
          </p>
        </div>
      </section>

      <!-- SECTION: CATEGORIES -->
      <section>
        <h2 class="text-center text-2xl font-semibold mb-10">SDA Design Categories</h2>
        <div class="grid md:grid-cols-4 gap-6">
          <UCard
            v-for="(cat, i) in categories"
            :key="i"
            class="text-center bg-gray-50 rounded-xl overflow-hidden shadow-sm"
          >
            <img :src="cat.img" :alt="cat.title" class="h-40 w-full object-cover" />
            <div class="p-5">
              <h3 class="font-semibold text-lg mb-2 text-blue-700">{{ cat.title }}</h3>
              <p class="text-sm text-gray-700 mb-4">{{ cat.desc }}</p>
              <UButton label="Read More" color="secondary" variant="outline" size="md" :to="cat.path" />
            </div>
          </UCard>
        </div>
      </section>
      <div class="grid md:grid-cols-2 gap-10">
        <div>
        <!-- SECTION: WHY CHOOSE -->
        <section class="mb-10">
          <h2 class="text-2xl font-semibold mb-6">Why Choose Rosmed Care?</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            At Rosmed Care, we believe that a home should be more than a place to live — it should be a foundation
            for independence, dignity, and community inclusion.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Our purpose-built homes comply with the SDA Design Standard and the Australian National Construction
            Code, ensuring residents have access to high-quality, well-maintained housing tailored to their needs.
          </p>
        </section>

        <!-- SECTION: COMPREHENSIVE SUPPORT -->
        <section class="mb-10">
          <h2 class="text-2xl font-semibold mb-6">Comprehensive Support Services</h2>
          <ul class="list-disc ml-6 space-y-2 text-gray-700">
            <li><strong>Supported Independent Living (SIL):</strong> Personalized support for independent living.</li>
            <li><strong>Short/Medium-Term Accommodation (STA/MTA):</strong> Flexible respite or transition housing.</li>
            <li><strong>Allied Health Services:</strong> Occupational therapy, speech therapy, physiotherapy, and more.</li>
            <li><strong>Community Nursing Care:</strong> Support for complex medical needs.</li>
            <li><strong>Life Skills Development:</strong> Programs to build everyday skills.</li>
            <li><strong>Community Participation:</strong> Opportunities for social inclusion and recreation.</li>
          </ul>
        </section>

        <!-- SECTION: VALUES -->
        <section class="mb-10">
          <div>
            <h2 class="text-2xl font-semibold mb-6">Our Values</h2>
            <ul class="list-disc ml-6 text-gray-700 space-y-2">
              <li><strong>Respectful:</strong> Honoring the choices and diversity of our clients.</li>
              <li><strong>Optimistic:</strong> Believing in the potential of every individual.</li>
              <li><strong>Specialized:</strong> Providing expert, tailored care.</li>
              <li><strong>Motivated:</strong> Making a positive difference.</li>
              <li><strong>Enhanced:</strong> Continuously improving our services.</li>
              <li><strong>Committed:</strong> Supporting independence and inclusion.</li>
            </ul>
          </div>
        </section>
      </div>

        <div class="bg-gray-50 rounded-2xl p-6 shadow-sm">
          <img src="/flyer.jpg" alt="Rosmed Care Process" class="rounded-xl mb-4" />
          <h3 class="font-semibold text-lg mb-2">The Process</h3>
          <p class="text-gray-700 text-sm">
            From finding land and NDIS registration to property completion — we guide you through every step.
          </p>
        </div>
       </div>
      <!-- CTA -->
      <section class="text-center bg-blue-50 rounded-2xl p-10 mt-16">
        <h2 class="text-2xl font-semibold mb-4">Discover the Rosmed Care Difference</h2>
        <p class="text-gray-700 mb-6 max-w-2xl mx-auto">
          Our purpose-built SDA homes, personalized support services, and dedication to quality make us a trusted
          provider for independent and inclusive living.
        </p>
        <UButton to="/contact" color="primary" label="Contact Us" size="lg" />
      </section>
    </UContainer>
  </div>
</template>

<style scoped>
h2, h3 {
  color: #1181c3;
}
</style>
