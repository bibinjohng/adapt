<script setup lang="ts">
useHead({
  title: 'Fully Accessible - Specialist Disability Accommodation (SDA) - Adapt Smart Homes',
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
    <h1 class="text-3xl font-bold text-center text-dark">Fully Accessible</h1>
      </div>

    <UContainer class="py-16 space-y-16">
      <div class="grid md:grid-cols-2 gap-10">
        <div class="py-12 px-6 max-w-4xl mx-auto space-y-10">
      <p class="text-gray-700 leading-relaxed">
        Fully Accessible SDA homes are designed for individuals with significant physical disabilities who
        use mobility aids, such as wheelchairs or walkers. Housing has been designed to incorporate a high level
        of physical access provision for people with significant physical impairment.
      </p>

    <section>
      <p class="text-gray-700 mb-4">
        These accommodations include extensive mobility features to ensure full and independent access
        throughout the home, such as:
      </p>
      <ul class="list-disc ml-6 space-y-2 text-gray-700">
        <li>Step-free entryways and wide doorways</li>
        <li>Accessible bathrooms with grab rails and roll-in showers</li>
        <li>Lowered benches and appliances in kitchens and laundry areas</li>
        <li>Seamless internal and external navigation</li>
        <li>Step-free access to and throughout the entire home</li>
        <li>Wide doorways and hallways to accommodate wheelchairs and mobility aids</li>
        <li>Roll-in showers, accessible toilets, and grab rails in all bathrooms</li>
        <li>Kitchens with accessible benchtops, cooktops, and under-bench access</li>
        <li>Lever handles, easy-to-reach power points, and light switches</li>
        <li>Continuous, slip-resistant flooring without abrupt level changes</li>
        <li>Spacious circulation zones in all living areas, bedrooms, and bathrooms</li>
        <li>Ideal for people with significant physical disabilities who require full mobility access</li>
      </ul>

      <p class="mt-4 text-gray-700">
        Fully Accessible homes aim to empower residents by enabling greater mobility, autonomy, and dignity in daily life.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-2">General Requirements</h2>
      <p class="text-gray-700">
        <strong>Target Group:</strong> People with significant physical impairments requiring full access throughout the home.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-2">Design Focus</h2>
      <ul class="list-disc ml-6 space-y-2 text-gray-700">
        <li>
          Unobstructed movement and usability for residents who use wheelchairs, mobility aids, or require personal assistance.
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-3">Key Requirements</h2>
      <ul class="list-disc ml-6 space-y-2 text-gray-700">
        <li><strong>Step-free access</strong> throughout the home (including entries and exits).</li>
        <li><strong>Minimum circulation space</strong> for mobility devices in all rooms (e.g., 1.2m turning circles).</li>
        <li><strong>Wide doorways and corridors</strong> to accommodate wheelchairs.</li>
        <li>
          <strong>Accessible kitchen and bathroom design:</strong> Lowered benchtops, roll-under sinks, lever taps, accessible ovens and cooktops.
        </li>
        <li><strong>Grab rails and reinforced bathroom walls:</strong> To support personal care tasks.</li>
        <li><strong>No thresholds</strong> or abrupt level changes inside the home.</li>
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
