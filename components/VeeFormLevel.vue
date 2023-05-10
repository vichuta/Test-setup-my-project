<template>
  <div>
    <div class="flex flex-col gap-2 py-4 text-left">
      <h3>Form-level Validation</h3>
      <Form
        @submit="submitName"
        :validation-schema="simpleSchema"
        class="flex flex-col gap-2 p-4 border-2 border-black rounded-lg"
      >
        <label for="name">Name :</label>
        <Field name="name" autocomplete="off" />
        <ErrorMessage name="name" />

        <button class="w-24 p-2 font-bold text-white bg-blue-600 rounded-lg">
          Submit
        </button>
        {{ resultName }}
      </Form>

      <Form
        @submit="submitLogin"
        :validation-schema="schema"
        class="flex flex-col gap-2 p-4 border-2 border-black rounded-lg"
      >
        <label for="email">Email :</label>
        <Field name="email" autocomplete="off" />
        <ErrorMessage name="email" />

        <label for="passowrd">Password :</label>
        <Field name="password" type="password" autocomplete="off" />
        <ErrorMessage name="password" />

        <button class="w-24 p-2 font-bold text-white bg-blue-600 rounded-lg">
          Submit
        </button>
        {{ resultUser }}
      </Form>
    </div>
  </div>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
const resultName = ref('')
const resultUser = ref('')

//แบบไม่ใช่ yup
const simpleSchema = {
  name(value) {
    // validate name value...
    if (value && value.trim()) {
      return true
    }
    return 'This is required (แบบไม่ใช้ yup)'
  }
}

//แบบใช้ yup
const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8)
})

//ถ้า condition ไม่ตรงตาม schema จะไม่ส่งข้อมูลไป หรือ กด sumbit แล้วไม่รัน function ให้
const submitName = (value) => {
  console.log(value) // return object => {name: '...', password: '...'} ((undefined))
  resultName.value = value
}
const submitLogin = (value) => {
  console.log(value)
  resultUser.value = value
}
</script>

<style scoped>
label {
  color: gray;
  -top: 20px;
}
input {
  border: 1px gray solid;
  border-radius: 0.5em;
  padding: 8px;
}

h3 {
  font-size: 18px;
  font-weight: bold;
}
p {
  font-size: 14px;
  font-family: 'Courier New', Courier, monospace;
  color: blue;
  font-weight: bolder;
}
/* ErrorMessage */
span {
  font-size: smaller;
  color: red;
}
</style>
