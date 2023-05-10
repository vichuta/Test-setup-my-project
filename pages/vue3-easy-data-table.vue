<template>
  <div class="flex flex-col gap-4 p-4 text-left">
    <h1 class="text-4xl font-bold">Vue3-easy-data-table</h1>
    <div class="flex gap-4 text-gray-700">
      <div>
        <h2 class="text-2xl font-bold">Feature ที่ใส่ใน tag  {{ `<EasyDataTable>` }}</h2>
        <ul class="pl-6 list-disc">
          <li><b>alternating : </b>สลับสีตาม row odd/even</li>
          <li><b>border-cell : </b>เพิ่มเส้นแบ่งตาม column</li>
          <li><b>buttons-pagination : </b>เพิ่มปุ่มกดเลขหน้า</li>
          <li><b>show-index : </b>แสดง index ของ Row</li>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-bold">Feature ที่ใช้ใน  {{ `<script>` }}</h2>
        <ul class="pl-6 list-disc">
          <li><b>Click row : </b>ClickRowArgument</li>
          <li><b>Fixed columns : </b>เพิ่ม fixed: true ใน Header[] </li>
        </ul>
      </div>
    </div>
      <EasyDataTable
        :headers="headers"
        :items="items"
        @click-row="showRow"
        alternating
        border-cell
        buttons-pagination
        show-index
      />
    
    <div class="text-left">
      row clicked (ClickRowArgument):<br />
      <div id="row-clicked"></div>
    </div>

    <hr class="border-2 border-black" />
    <EasyDataScore />

    <hr class="border-2 border-black" />
    <EasyDataFilterOpition />
  </div>
</template>

<script lang="ts" setup>
import EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'
import type { Header, Item, ClickRowArgument } from 'vue3-easy-data-table'

const headers: Header[] = [
  { text: 'PLAYER', value: 'player', fixed: true },
  { text: 'TEAM', value: 'team' },
  { text: 'NUMBER', value: 'number' },
  { text: 'POSITION', value: 'position' },
  { text: 'HEIGHT', value: 'indicator.height' },
  { text: 'WEIGHT (lbs)', value: 'indicator.weight', sortable: true },
  { text: 'LAST ATTENDED', value: 'lastAttended', width: 200 },
  { text: 'COUNTRY', value: 'country' }
]

const items: Item[] = [
  {
    player: 'Stephen Curry',
    team: 'GSW',
    number: 30,
    position: 'G',
    indicator: { height: '6-2', weight: 185 },
    lastAttended: 'Davidson',
    country: 'USA'
  },
  {
    player: 'Lebron James',
    team: 'LAL',
    number: 6,
    position: 'F',
    indicator: { height: '6-9', weight: 250 },
    lastAttended: 'St. Vincent-St. Mary HS (OH)',
    country: 'USA'
  },
  {
    player: 'Kevin Durant',
    team: 'BKN',
    number: 7,
    position: 'F',
    indicator: { height: '6-10', weight: 240 },
    lastAttended: 'Texas-Austin',
    country: 'USA'
  },
  {
    player: 'Giannis Antetokounmpo',
    team: 'MIL',
    number: 34,
    position: 'F',
    indicator: { height: '6-11', weight: 242 },
    lastAttended: 'Filathlitikos',
    country: 'Greece'
  }
]
const showRow = (item: ClickRowArgument) => {
  let tagRow = document.getElementById('row-clicked')
  if (tagRow) {
    tagRow.innerHTML = JSON.stringify(item)
  }
}
</script>
