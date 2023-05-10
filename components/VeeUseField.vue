<template>
  <div>
    <div class="flex flex-col gap-2 py-4 text-left">
      <h3>useFlied() meta.dirty</h3>
      <div class="flex flex-col gap-2 p-4 border-2 border-black rounded-lg">
        <label for="name">Name :</label>
        <Field name="name" v-model="value" />
        <ErrorMessage name="name" />
        <span>{{ errorMessage }}</span>
        Meta: {{ meta }} <br />
        value: {{ value }}
        <button
          :disabled="!meta.dirty || !meta.valid"
          class="w-24 p-2 font-bold text-white rounded-lg"
          :class="!meta.dirty || !meta.valid ? 'bg-gray-300' : 'bg-blue-600'"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Field, ErrorMessage, useField } from 'vee-validate'
import * as yup from 'yup'

const isRequired = yup.string().required()

const { errorMessage, value, meta } = useField('name', isRequired, {
  initialValue: 'Admin'
})
</script>

<style scoped>
label {
  color: gray;
  -top: 20px;
}
input {
  border: 1px gray solid;
  border-radius: 0x.5em;
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
