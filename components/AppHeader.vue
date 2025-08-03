<template>
  <header class="bg-white text-black p-3">
    <nav class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/">
        <img
          src="/ADAPT-logo.png"
          alt="Adapt Smart Homes Logo"
          class="h-18 w-auto inline-block"
        />
      </NuxtLink>
      <ul class="flex gap-8 text-md font-semibold">
        <li><NuxtLink to="/" class="hover:text-[#1181c3] active:text-[#1181c3] focus:text-[#1181c3]">Home testing</NuxtLink></li>
        <li><NuxtLink to="/about" class="hover:text-[#1181c3] active:text-[#1181c3] focus:text-[#1181c3]">About Us</NuxtLink></li>
        <li><NuxtLink to="/services" class="hover:text-[#1181c3] active:text-[#1181c3] focus:text-[#1181c3]">Our Services</NuxtLink></li>
        <li><NuxtLink to="/contact" class="hover:text-[#1181c3] active:text-[#1181c3] focus:text-[#1181c3]">Contact Us</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>
