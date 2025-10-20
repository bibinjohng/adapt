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
    <h1 class="text-3xl font-bold text-center text-dark">High Physical Support</h1>
      </div>

    <UContainer class="py-16 space-y-16">
      <div class="grid md:grid-cols-2 gap-10">
        <div class="py-12 px-6 max-w-4xl mx-auto space-y-10">
      <p class="text-gray-700 leading-relaxed">
        High Physical Support SDA homes are designed for individuals with very high support needs, including
        those who require complex mobility and medical assistance. Housing has been designed to incorporate a
        high level of physical access provision for people with significant physical impairment and requiring
        very high levels of support.
      </p>

    <section>
      <p class="text-gray-700 mb-4">
        These homes include all the features of Fully Accessible design, with additional advanced supports such as:
      </p>
      <ul class="list-disc ml-6 space-y-2 text-gray-700">
        <li>Ceiling hoists and height-adjustable equipment</li>
        <li>Emergency power solutions for life-sustaining devices</li>
        <li>Automated doors, blinds, and environmental controls</li>
        <li>Provisions for 24/7 on-site care where required</li>
        <li>All features of Fully Accessible homes, plus:</li>
        <li>Structural provision for ceiling hoists in bedrooms and bathrooms</li>
        <li>Backup power solutions for life-supporting equipment (e.g., ventilators, hoists)</li>
        <li>Automated environmental controls (e.g., lighting, blinds, doors)</li>
        <li>Communication technology for emergency calls or care alerts</li>
        <li>Height-adjustable benches and equipment in kitchen and bathrooms</li>
        <li>Provision for 24/7 on-site care, including staff accommodation where needed</li>
        <li>Ideal for individuals with complex physical support needs requiring medical or assistive technologies</li>
      </ul>

      <p class="mt-4 text-gray-700">
        High Physical Support dwellings ensure maximum safety, accessibility, and care readiness, allowing residents
        to live with confidence and comfort.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-2">General Requirements</h2>
      <p class="text-gray-700">
        <strong>Target Group:</strong> Individuals with very high physical support needs, often requiring
        specialised equipment and 24/7 care.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-2">Design Focus</h2>
      <ul class="list-disc ml-6 space-y-2 text-gray-700">
        <li>Full accessibility with built-in supports for high-level personal and medical care needs.</li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-3">Key Requirements</h2>
      <ul class="list-disc ml-6 space-y-2 text-gray-700">
        <li><strong>All requirements of Fully Accessible</strong> dwellings, plus:</li>
        <li><strong>Structural provisions for ceiling hoists</strong> in bedrooms and bathrooms.</li>
        <li><strong>Emergency power solutions</strong> (e.g., backup battery systems) to maintain essential equipment during outages.</li>
        <li><strong>Assistive technology readiness:</strong> Infrastructure to support automation (e.g., smart lighting, doors, blinds).</li>
        <li><strong>Communication systems:</strong> Intercoms or emergency call systems connecting to support workers or care staff.</li>
        <li><strong>Space for overnight support staff</strong> (if required) with a private room and access to amenities.</li>
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
