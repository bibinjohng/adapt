<template>
  <!-- Banner -->
  <div class="w-full">
    <img
      src="/banner-4.webp"
      alt="Contact Adapt Smart Homes"
      class="w-full object-cover h-[300px] md:h-[400px]"
    />
  </div>

  <!-- Page Title -->
  <div class="bg-[#1181c3] text-white text-center py-10 px-4">
    <h1 class="text-3xl font-bold">Contact Us</h1>
  </div>

  <!-- Contact Form -->
  <section class="px-4 py-10 max-w-xl mx-auto text-gray-800">
    <div class="text-center mb-6">
      <p>
        We're happy to talk about SDA options tailored to your needs. <br /><br />
        By collaborating with Adapt smarthomes, you invest in a workforce that fosters a thriving environment for yourself or your loved ones. Our unwavering commitment to quality ensures that you have the resources needed to deliver on your promise of exceptional housing.
        <br /><br />
        <strong>Phone:</strong>
        <a href="tel:0426018899" class="text-[#1181c3] hover:underline">0426 018 899</a>
      </p>
    </div>

    <UForm :state="form" :schema="schema" @submit="handleSubmit" class="space-y-6 bg-white p-8 rounded-xl shadow-md">
      <div class="grid grid-cols-1 gap-6">
        <UInput
          v-model="form.name"
          variant="outline"
          placeholder="Your Name"
          class="!bg-gray-100 !text-gray-900"
        />
        <UInput
          v-model="form.email"
          type="email"
          color="primary"
          variant="outline"
          placeholder="Your Email"
          class="!bg-gray-100 !text-gray-900"
        />
        <UTextarea
          v-model="form.message"
          color="primary"
          variant="outline"
          placeholder="Your Message"
          rows="5"
          class="!bg-gray-100 !text-gray-900"
        />
      </div>
      <div class="flex justify-end">
        <UButton
          type="submit"
          class="bg-[#1181c3] hover:bg-[#0d6fa1] text-white font-semibold px-6 py-2 rounded-lg"
          :loading="loading"
        >
          Send Message
        </UButton>
      </div>
    </UForm>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { z } from 'zod'
import { useToast } from '#imports'

// 1. Form state
const form = ref({
  name: '',
  email: '',
  message: ''
})

// 2. Toast
const toast = useToast()

// 3. Zod schema
const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message cannot be empty')
})

// 4. Loading and submission
const loading = ref(false)

const handleSubmit = async () => {
  loading.value = true

  try {
    const response = await fetch('https://formspree.io/f/mwpqgoqp', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: JSON.stringify(form.value)
    })

    if (response.ok) {
      toast.add({ title: 'Message sent!', description: 'We’ll get back to you shortly.', color: 'green' })
      form.value = { name: '', email: '', message: '' }
    } else {
      throw new Error('Submission failed')
    }
  } catch (err) {
    console.error(err)
    toast.add({ title: 'Error', description: 'Failed to send your message.', color: 'red' })
  } finally {
    loading.value = false
  }
}
</script>
