<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <nav
      class="flex items-center justify-start w-full gap-3 p-4 text-white bg-blue-600"
    >
      <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
      <NuxtLink to="/list-movie" class="hover:underline">Movies</NuxtLink>
      <NuxtLink to="/my-swal2" class="hover:underline">Swal2</NuxtLink>
      <!-- <NuxtLink to="https://vueschool.io">Vue School</NuxtLink> -->
    </nav>
    <div class="p-4 text-center">
      <NuxtPage />
    </div>
  </div>
</template>
