<script setup lang="ts">
useHead({
  title: 'Improved Liveability - Specialist Disability Accommodation (SDA) - Adapt Smart Homes',
  meta: [
    { name: 'description', content: 'Adapt Smart Homes provides purpose-built Specialist Disability Accommodation (SDA) homes for NDIS participants with extreme functional impairment or very high support needs.' },
  ],
})
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
    <h1 class="text-3xl font-bold text-center text-dark">Improved Liveability</h1>
      </div>

    <UContainer class="py-16 space-y-16">
      <div class="grid md:grid-cols-2 gap-10">
        <div class="py-12 px-6 max-w-4xl mx-auto space-y-10">
      <p class="text-gray-700 leading-relaxed">
        Improved Liveability homes are designed to enhance ‘Livability’ by incorporating a reasonable level of comfort, accessibility, and ease of use for people with sensory, intellectual, or cognitive impairments.
        These dwellings incorporate thoughtful design features that support greater independence and safety in everyday living.
      </p>

    <section>
      <p class="text-gray-700 mb-4">
        While maintaining a reasonable level of physical access, Improved Liveability housing focuses on elements such as:
      </p>

      <ul class="list-disc ml-6 space-y-2 text-gray-700">
        <li>Enhanced lighting and visibility</li>
        <li>Improved wayfinding and signage</li>
        <li>Reduction of sensory overload (e.g., minimising visual or auditory distractions)</li>
        <li>Clear lines of sight and unobstructed pathways</li>
        <li>Easy-to-use switches, controls, and appliances</li>
        <li>Enhanced visual contrast for easier identification of doors, switches, and fittings</li>
        <li>Clear, logical floor plans for improved navigation and wayfinding</li>
        <li>Low-stimulus environments to reduce sensory overload</li>
        <li>Simple, intuitive fixtures and fittings (e.g., lever handles, easy-use taps)</li>
        <li>Adequate lighting and acoustic treatment for comfort and orientation</li>
        <li>Accessible layouts without requiring full physical access</li>
        <li>Ideal for people with autism, sensory processing challenges, or cognitive impairments</li>
      </ul>

      <p class="mt-4 text-gray-700">
        This type of SDA is ideal for individuals who do not require extensive physical support but benefit significantly from an environment that is predictable, calm, and tailored to their specific processing or communication needs.
      </p>

      <p class="mt-2 text-gray-700">
        At Rosmed, we offer Improved Liveability options designed with care, ensuring comfort, dignity, and a sense of belonging in every home.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-2">General Requirements</h2>
      <p class="text-gray-700 mb-4">
        <strong>Target Group:</strong> People with sensory, intellectual, or cognitive impairments.
      </p>

      <h3 class="text-xl font-semibold mb-2">Design Focus</h3>
      <ul class="list-disc ml-6 space-y-2 text-gray-700">
        <li>Support for sensory needs and cognitive clarity.</li>
        <li>Assistance with wayfinding, orientation, and ease of use.</li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-3">Key Requirements</h2>
      <ul class="list-disc ml-6 space-y-2 text-gray-700">
        <li><strong>Enhanced luminance contrast:</strong> Doorways, light switches, power outlets, and other important features must contrast with their surroundings for visual clarity.</li>
        <li><strong>Clear and logical layout:</strong> Easy-to-navigate spaces with minimal confusion or ambiguity.</li>
        <li><strong>Minimized sensory stimulation:</strong> Designs must reduce visual clutter, loud noises, or overwhelming sensory inputs.</li>
        <li><strong>Easy-use fixtures and fittings:</strong> Handles, taps, switches, and appliances should be simple and intuitive to operate.</li>
        <li><strong>Appropriate lighting and acoustics:</strong> Support individuals who are sensitive to noise or lighting variations.</li>
      </ul>
    </section>
  </div>

        <div class="bg-gray-50 rounded-2xl p-6 shadow-sm">
          <img src="/flyer.jpg" alt="Rosmed Care Process" class="rounded-xl mb-4" />
          <h3 class="font-semibold text-lg mb-2">The Process</h3>
          <p class="text-gray-700 text-sm">
            From finding land and NDIS registration to property completion — we guide you through every step.
          </p>
          <section class="mt-10">
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
