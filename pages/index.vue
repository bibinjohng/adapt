<template>
  <section>

    <!-- Image Banner -->
    <div class="w-full">
      <img
        src="/banner-1.webp"
        alt="Adapt Smart Homes"
        class="w-full object-cover h-[300px] md:h-[400px]"
      />
    </div>

    <!-- Hero Section -->
    <div class="bg-[#1181c3] text-white text-center py-10 px-4">
      <h2 class="text-3xl md:text-3xl font-bold mb-4 leading-tight tracking-tight">
        Adapt Smart Homes – The Way of Living
      </h2>
      <p class="text-lg italic">
        “A house is made with walls and beams; a home is built with love and dreams.”
        <br /> — Ralph Waldo Emerson
      </p>
    </div>

    <!-- Introduction -->
    <div class="container mx-auto px-4 py-12 text-center">
      <h3 class="text-2xl font-semibold text-black mb-4">Creating Comfortable & Safe SDA Homes</h3>
      <p class="text-gray-700 max-w-2xl mx-auto leading-relaxed">
        Adapt Smart Homes builds and decorates with love, care, and respect. We aim to construct Specialist Disability
        Accommodation (SDA) homes designed for comfort, independence, and accessibility — putting your safety first.
      </p>
    </div>

    <!-- Feature Preview -->
    <div class="bg-gray-100 py-12">
      <div class="container mx-auto px-4 text-center">
        <h4 class="text-xl font-bold mb-6 text-black">What Makes Our SDA Homes Special?</h4>

        <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mb-6">
          <div v-for="(feature, index) in features" :key="index" class="bg-white rounded-xl p-12 shadow hover:shadow-lg transition">
            <h5 class="font-semibold text-[#1181c3] mb-2">{{ feature.title }}</h5>
            <p class="text-sm text-gray-600">{{ feature.desc }}</p>
          </div>
        </div>

        <NuxtLink to="/services" class="inline-block bg-[#1181c3] hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold transition">
          Learn More
        </NuxtLink>
      </div>
    </div>

    <!-- Why Choose Us -->
    <div class="container mx-auto px-4 py-12 text-center">
      <h3 class="text-2xl font-bold text-black mb-6">Why Choose Adapt Smart Homes?</h3>
      <ul class="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-left text-gray-700">
        <li><strong>✓ Trusted Expertise:</strong> Highly skilled professionals with SDA experience.</li>
        <li><strong>✓ Holistic Support:</strong> Physical, emotional, and social well-being in focus.</li>
        <li><strong>✓ Tailored Living:</strong> Architect-designed homes to suit your lifestyle.</li>
        <li><strong>✓ Community Inclusion:</strong> Locations near transport, shops, and services.</li>
      </ul>
    </div>

    <!-- Call to Action -->
    <div class="bg-black text-white py-12 text-center px-4">
      <h3 class="text-2xl font-bold mb-4">Need More Info or Want to Talk?</h3>
      <p class="mb-6">
        Our team is happy to have a chat with you about SDA options tailored to your needs.
      </p>
      <NuxtLink to="/contact" class="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
        Contact Us
      </NuxtLink>
    </div>

  </section>
</template>

<script setup>
const features = [
  { title: 'Accessibility', desc: 'Ramps, wide doorways, and step-free access throughout.' },
  { title: 'Personalized Support', desc: 'Care and assistance options tailored to each resident.' },
  { title: 'Smart Technology', desc: 'Voice-controlled lighting, temperature, doors, and more.' },
  { title: 'Safety & Security', desc: 'Sensors, smart locks, fire alerts, and fall detection.' }
]
</script>
