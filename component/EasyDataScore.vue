<template>
  <div>
    <h2 class="text-2xl font-bold">
      การใช้งาน Classname ของ Easy Data Table และการทำ Expand row
    </h2>
    <div class="text-gray-700">
      <!-- <h2 class="text-2xl font-bold">Feature ที่ใส่ใน tag  {{ `<EasyDataTable>` }}</h2> -->
      <ul class="pl-6 list-disc">
        <li>
          <b>Class name customization : </b>ทุก function จะ return เป็นชื่อ
          class CSS ของ easy table (ใช้ tailwind ได้แค่บางตัว)
        </li>
        <li><b>Expandable row : </b>ใช้ bodyExpandRowClassNameFunction และจัดหน้าตา Expand Row ที่ {{ `<template #expand="item">` }}</li>
        <li><b>no-hover : </b>ปกติค่า default ของ hover คือ bg เป็นสีเทาอ่อน ดังนั้นถ้าใช้ Class name customization ต้องใช้ no hover </li>
      </ul>
    </div>
    <EasyDataTable
      :headers="headers"
      :items="items"
      :header-item-class-name="headerItemClassNameFunction"
      :body-row-class-name="bodyRowClassNameFunction"
      :body-expand-row-class-name="bodyExpandRowClassNameFunction"
      :body-item-class-name="bodyItemClassNameFunction"
      no-hover
    >
      <!-- จัดหน้าตาของ Expand Row 
           (เหมือนจะใส่ class อื่นตรงนี้ไม่ได้ ต้องใส่ตรง return classNameFunction + flex, grid ใช้ไม่ได้)-->
      <template #expand="item">
        <div>Name: {{ item.name }} Class: {{ item.class }}</div>
        <div>Score: {{ item.score }}</div>
      </template>
    </EasyDataTable>
  </div>
</template>

<script lang="ts" setup>
import {
  Header,
  Item,
  BodyRowClassNameFunction,
  HeaderItemClassNameFunction,
  BodyItemClassNameFunction
} from 'vue3-easy-data-table'
import EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'
// ((มี loadIntroduction = loading ตอนกด Expand Row))

// --- Data ---
const headers: Header[] = [
  { text: 'Name', value: 'name' },
  { text: 'Class', value: 'class' },
  { text: 'Score', value: 'score', sortable: true }
]

const items: Item[] = [
  { name: 'HC', class: 'class 1', score: 100 },
  { name: 'Curry', class: 'class 2', score: 60 },
  { name: 'James', class: 'class 3', score: 59 },
  { name: 'Durant', class: 'class 3', score: 59 },
  { name: 'Nice', class: 'class 3', score: 40 }
]

// --- Class Name Fucntion ----
//ทุก function จะ return เป็นชื่อ class CSS ของ easy table

//เพิ่ม CSS ตามเงื่อนไข (filter Row)
const bodyRowClassNameFunction: BodyRowClassNameFunction = (
  item: Item,
  rowNumber: number
): string => {
  if (item.score < 60) return 'fail-row'
  return 'pass-row'
}

//เพิ่ม Expand row (เปิด/ปิดดูรายละเอียดเพิ่มเติมของ)
const bodyExpandRowClassNameFunction: BodyRowClassNameFunction = (
  item: Item,
  rowNumber: number
): string => {
  return 'expand-row font-bold'
}

//ปรับเปลี่ยน Item บาง Column
const bodyItemClassNameFunction: BodyItemClassNameFunction = (
  column: string,
  rowNumber: number
): string => {
  //ex. ทำให้ item.score ใช้ font-size ใหญ่กว่าปกติ
  if (column === 'score') return 'score-column'
  return ''
}

//ปรับเปลี่ยน Header บาง Column
const headerItemClassNameFunction: HeaderItemClassNameFunction = (
  header: Header,
  columnNumber: number
): string => {
  //ex. ทำให้ Score ใช้ font-size ใหญ่กว่าปกติ
  if (header.value === 'score') return 'score-column'
  return ''
}
</script>

<style>
.score-column {
  font-size: 20px;
}
.fail-row {
  --easy-table-body-row-background-color: #f56c6c;
  --easy-table-body-row-font-color: #fff;
}
.pass-row {
  --easy-table-body-row-background-color: #67c23a;
  --easy-table-body-row-font-color: #fff;
}
.expand-row {
  --easy-table-body-row-background-color: grey;
  --easy-table-body-row-font-color: #fff;
  font-family: 'Courier New', Courier, monospace;
  font-size: larger;
  font-style: italic;
}
</style>
