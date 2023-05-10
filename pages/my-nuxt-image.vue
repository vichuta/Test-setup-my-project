<script lang="ts" setup>
// const movies = ref([])
// const getData = async () => {
//   movies.value await $fetch(`http://www.omdbapi.com/`)
// }
// getData();
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">@Nuxt Image</h1>
    img
    <div class="bg-gray-800 w-[400px] h-[300px]">
      <img
        src="~/assets/img/image.jpg"
        width="32"
        class="object-scale-down w-full mx-auto my-auto"
      />
    </div>
    <hr />
    nuxt-image
    <nuxt-img src="/image.jpg" :quality="10" />
    <nuxt-picture src="/image.jpg"></nuxt-picture>
    <!-- <nuxt-img /> -->
    <!-- {{ movies }} -->
  </div>
</template>

<style scoped></style>
