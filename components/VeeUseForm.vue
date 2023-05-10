<template>
  <div class="flex flex-col gap-2 py-4 text-left">
    <h3>Editing Name</h3>
    <div>
      FullName : {{ fullName }}
      <button class="w-12 p-2 bg-gray-300 rounded-lg" @click="editing">
        Edit
      </button>
    </div>
    <Form
      @submit="save"
      v-slot="{ meta, errors }"
      :initial-values="statusEdting ? initialValues : defaultValues"
      :validation-schema="schema"
      class="flex flex-col gap-2 p-4 text-left border-2 border-black rounded-lg"
    >
      <label>FirstName :</label>
      <Field name="fname" :disabled="!statusEdting" v-model="firstName" />
      {{ errors }}

      <label>LastName :</label>
      <Field name="lname" :disabled="!statusEdting" v-model="lastName" />
      {{ meta }}
      <button
        :disabled="!meta.dirty || !meta.valid"
        class="w-24 p-2 font-bold text-white rounded-lg"
        :class="!meta.dirty || !meta.valid ? 'bg-gray-300' : 'bg-blue-600'"
      >
        Save
      </button>
    </Form>
  </div>
</template>
<script setup>
import { Field, Form } from 'vee-validate'
import * as yup from 'yup'

const fullName = ref('Admin Mysaleng')
const firstName = ref('')
const lastName = ref('')
const statusEdting = ref(false)

const defaultValues = {
  fname: '',
  lname: ''
}
const initialValues = ref({
  fname: '',
  lname: ''
})
const schema = yup.object({
  fname: yup.string().required(),
  lname: yup.string().required()
})

const editing = () => {
  let arrayText = fullName.value.split(' ')
  console.log(arrayText)
  firstName.value = arrayText[0]
  lastName.value = arrayText[1]
  initialValues.value.fname = arrayText[0]
  initialValues.value.lname = arrayText[1]

  statusEdting.value = true
}
//ถ้าไม่ใส่ใน Form
// const { meta, values } = useForm({
//   initialValues: {
//     fname: '',
//     lanme: ''
//   }
// })

function save() {
  // send stuff to api
  fullName.value = firstName.value + ' ' + lastName.value
  firstName.value = ''
  lastName.value = ''
  statusEdting.value = false
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
