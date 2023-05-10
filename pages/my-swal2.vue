<script lang="ts" setup>
import Swal from 'sweetalert2'
// const Swal = require('sweetalert2')

const swalFunction = () => {
  Swal.fire({
    title: 'Are you want to Save?',
    text: 'คุณต้องการบันทึกการแก้ไขนี้ใช่หรือไม่',
    icon: 'question',
    position: 'top', // default: center
    showCloseButton: true, //ปุ่มปิด popup มุมขวาบน

    //Setting Confirm button
    confirmButtonText: 'Save',
    reverseButtons: true,

    //Setting Deny button
    showDenyButton: true,
    denyButtonText: `Don't save`,

    //Setting Cancel button
    showCancelButton: true
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Save is OK', '', 'success')
    } else if (result.isDenied) {
      Swal.fire({
        title: 'Are you sure?',
        text: `Don't save`,
        confirmButtonText: 'Yes',
        confirmButtonColor: 'green',
        showDenyButton: true,
        denyButtonText: 'No',
        denyButtonColor: 'red'
      }).then((ans) => {
        if (ans.isDenied) {
          // ถ้ากดปฏิเสธ แล้วย้อนมา popup อันแรกทำยังไง?
        }
      })
    }
  })
}
const checkModalForm = async () => {
  const { value: email } = await Swal.fire({
    title: 'Input Your Email',
    inputLabel: 'email address',
    input: 'email',
    inputPlaceholder: 'Enter your email address'
  })
  if (email) {
    Swal.fire(`Entered email: ${email}`)
  }
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">Swal Alert 2</h1>
    <br />
    <button
      class="w-40 p-2 text-white bg-blue-800 rounded-md"
      @click="swalFunction()"
    >
      <span>Save Modal</span>
    </button>
    <br />
    <br />
    <button
      class="w-40 p-2 text-white bg-blue-800 rounded-md"
      @click="checkModalForm()"
    >
      <span>Input Modal</span>
    </button>
  </div>
</template>

<style scoped></style>
