<template>
  <div>
    <h2 class="text-2xl font-bold">Filtering + Multiple selecting</h2>
    <div class="flex gap-4 text-gray-700">
      <div>
        <h2 class="text-xl font-bold">ในตัวอย่าง Filtering จะมี 3 แบบ</h2>
        <ul class="pl-6 list-disc">
          <li><b>Search Name : </b> ใช้เป็น input text</li>
          <li><b>Range Number: </b>ใช้ Slider from "@vueform/slider";</li>
          <li><b>Filter by category : </b>ใช้เป็น input selector</li>
        </ul>
      </div>
      <div>
        <h2 class="text-xl font-bold">Multiple selecting</h2>
        <ul class="pl-6 list-disc">
          <li>เพิ่ม v-model:items-selected="itemsSelected" ใน {{ `<EasyDataTable>` }}</li>
          <li>และใช้ const itemsSelected = {{ `ref<Item[]>([])` }} ใน {{ `<script>` }}</li>
        </ul>
      </div>
    </div>
    <EasyDataTable
      :headers="headers"
      :items="items"
      :filter-options="filterOptions"
      v-model:items-selected="itemsSelected"
    >
      <template #header-color="header">
        <div class="filter-column">
          <iconFilter
            src="~/assets/icons/filter.vue"
            class="w-10 h-10"
            @click.stop="showColorFilter = !showColorFilter"
          />
          {{ header.text }}
          <div class="filter-menu filter-sport-menu" v-if="showColorFilter">
            <select class="favouriteSport-selector" v-model="colorProduct">
              <option value="white">white</option>
              <option value="black">black</option>
              <option value="pink">pink</option>
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="all">all</option>
            </select>
          </div>
        </div>
      </template>
    </EasyDataTable>
    items selected:<br />
    {{ itemsSelected }}
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { Header, Item, FilterOption } from 'vue3-easy-data-table'
import EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'
import iconFilter from '~/assets/icons/filter.vue'

const itemsSelected = ref<Item[]>([])

const headers: Header[] = [
  { text: 'Product', value: 'name' },
  { text: 'Price', value: 'price', sortable: true },
  { text: 'Color', value: 'color' }
]

const items: Item[] = [
  { name: 'iPhone X', price: 15000, color: 'white' },
  { name: 'iPhone X', price: 15000, color: 'black' },
  { name: 'iPhone X', price: 15000, color: 'blue' },
  { name: 'iPhone X', price: 15000, color: 'pink' },
  { name: 'iPhone 11', price: 20000, color: 'white' },
  { name: 'iPhone 11', price: 20000, color: 'pink' },
  { name: 'iPhone 11', price: 20000, color: 'red' },
  { name: 'iPhone 12', price: 23000, color: 'white' },
  { name: 'iPhone 12', price: 25000, color: 'pink' },
  { name: 'iPhone 12', price: 25000, color: 'blue' },
  { name: 'iPhone Pro', price: 20000, color: 'red' },
  { name: 'iPhone Pro', price: 20000, color: 'white' },
  { name: 'iPhone Pro', price: 20000, color: 'pink' },
  { name: 'iPhone Pro', price: 20000, color: 'blue' }
]

const colorProduct = ref('white')
const priceProduct = ref<[number, number]>([10000, 20000])
const showPriceFilter = ref(false)
const showColorFilter = ref(false)
const filterOptions = computed((): FilterOption[] => {
  const filterOptionsArray: FilterOption[] = []
  if (colorProduct.value !== 'all') {
    filterOptionsArray.push({
      field: 'color',
      comparison: '=',
      criteria: colorProduct.value
    })
  }
  filterOptionsArray.push({
    field: 'price',
    comparison: 'between',
    criteria: priceProduct.value
  })
  //   filterOptionsArray.push({
  //     field: 'color',
  //     criteria: 'white',
  //     comparison: (value, criteria): boolean =>
  //       value != null &&
  //       criteria != null &&
  //       typeof value === 'string' &&
  //       value.includes(`name-${criteria}`)
  //   })
  return filterOptionsArray
})
</script>

<style>
.filter-column {
  display: flex;
  align-items: center;
  justify-items: center;
  position: relative;
}
.filter-icon {
  cursor: pointer;
  display: inline-block;
  width: 15px !important;
  height: 15px !important;
  margin-right: 4px;
}
.filter-menu {
  padding: 15px 30px;
  z-index: 1;
  position: absolute;
  top: 30px;
  width: 200px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
}
.filter-price-menu {
  height: 40px;
}
.slider {
  margin-top: 36px;
}
.favouriteSport-selector {
  width: 100%;
}
</style>
