<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <nav
      class="flex items-center justify-start w-full gap-6 p-4 text-white bg-blue-600"
    >
      <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
      <NuxtLink to="/my-nuxt-image" class="hover:underline"
        >nuxt-image</NuxtLink
      >
      <NuxtLink to="/my-swal2" class="hover:underline">Swal2</NuxtLink>
      <NuxtLink to="/vue3-easy-data-table" class="hover:underline"
        >Vue3-Easy-Data-Table</NuxtLink
      >
      <NuxtLink to="/my-vee-validate" class="hover:underline"
        >Vee-Validate</NuxtLink
      >
      <!-- <NuxtLink to="https://vueschool.io">Vue School</NuxtLink> -->
    </nav>
    <div class="p-4 text-center">
      <NuxtPage />
    </div>
  </div>
</template>

<script></script>
