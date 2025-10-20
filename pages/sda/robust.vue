<script setup lang="ts">
useHead({
  title: 'Robust - Specialist Disability Accommodation (SDA) - Adapt Smart Homes',
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
    <h1 class="text-3xl font-bold text-center text-dark">Robust</h1>
      </div>

    <UContainer class="py-16 space-y-16">
      <div class="grid md:grid-cols-2 gap-10">
        <div class="py-12 px-6 max-w-4xl mx-auto space-y-10">
      <p class="text-gray-700 leading-relaxed">
        Robust homes are purpose-built for people who may have behavioural needs or require a more durable
        environment due to frequent physical interactions with their surroundings. These homes are designed
        to incorporate a reasonable level of physical access and be highly resilient — reducing maintenance
        and risk for both participants and the community.
      </p>

    <section>
      <p class="text-gray-700 mb-4">
        These dwellings are designed to be resilient and low-maintenance, while still offering a comfortable
        and homelike setting. Features often include:
      </p>

      <ul class="list-disc ml-6 space-y-2 text-gray-700">
        <li>Reinforced walls, doors, and fittings</li>
        <li>Secure windows and safe outdoor spaces</li>
        <li>Soundproofing to reduce external noise and promote calm</li>
        <li>Layouts that minimise risks and support de-escalation</li>
        <li>High-impact resistant materials for walls, doors, and fittings</li>
        <li>Secure windows and doors with shatter-resistant or reinforced elements</li>
        <li>Soundproofing and noise-reducing design to minimise stress and stimulation</li>
        <li>Breakaway fittings and tamper-proof features to reduce risk</li>
        <li>Durable surfaces that are easy to maintain and clean</li>
        <li>Secure, private outdoor spaces for relaxation and de-escalation</li>
        <li>Reinforced fixtures (e.g., plumbing and electrical components)</li>
        <li>Ideal for individuals who exhibit behaviours of concern or high-stress responses</li>
      </ul>

      <p class="mt-4 text-gray-700">
        Robust SDA homes are ideal for individuals who benefit from a secure, durable environment that helps
        reduce stress and improve quality of life.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-2">General Requirements</h2>
      <p class="text-gray-700">
        <strong>Target Group:</strong> Individuals who display challenging behaviours or need a durable,
        low-risk environment.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-2">Design Focus</h2>
      <ul class="list-disc ml-6 space-y-2 text-gray-700">
        <li>Safety, durability, and risk reduction for both residents and support staff.</li>
        <li>Capacity to manage and de-escalate behaviours of concern.</li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-3">Key Requirements</h2>
      <ul class="list-disc ml-6 space-y-2 text-gray-700">
        <li><strong>High-impact resistant materials:</strong> Durable walls, doors, and fittings to withstand physical impact.</li>
        <li><strong>Secure windows and doors:</strong> Often shatter-resistant or reinforced to ensure safety.</li>
        <li><strong>Soundproofing or acoustic treatment:</strong> To reduce overstimulation and improve emotional regulation.</li>
        <li><strong>Breakaway fittings:</strong> Minimising risks of injury or damage during behavioural episodes.</li>
        <li><strong>Safe outdoor access:</strong> Secure external areas that offer privacy and sensory relief.</li>
        <li><strong>Simple layouts with safe zones:</strong> Reducing triggers and providing calming spaces within the home.</li>
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
