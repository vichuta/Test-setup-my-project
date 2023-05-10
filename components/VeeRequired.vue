<template>
  <div>
    <div class="flex flex-col gap-2 py-4 text-left">
      <h3>Field-level Validation</h3>
      <!-- <form
        :action="submitForm()"
        class="flex flex-col gap-2 p-4 border-2 border-black rounded-lg"
      >
        <h3 class="text-xl font-bold">Simple Form</h3>
        <label for="fname">FirstName :</label>
        <input type="text" id="fname" name="fname" value="John" />
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" value="Doe" />
        <input type="submit" value="Submit" class="text-white bg-blue-700" />
      </form> -->
      <Form class="flex flex-col gap-2 p-4 border-2 border-black rounded-lg">
        <label for="name">Name :</label>
        <Field name="name" :rules="isRequired" />
        <ErrorMessage name="name" />

        <label for="email">Email :</label>
        <Field name="email" :rules="emailRules" autocomplete="username" />
        <ErrorMessage name="email" />

        <label for="password">Password : </label>
        <Field
          name="password"
          type="password"
          :rules="passwordRules"
          autocomplete="current-password"
        />
        <ErrorMessage name="password" />
      </Form>
    </div>
  </div>
</template>

<script setup>
import { Field, Form, ErrorMessage, configure } from 'vee-validate'
import * as yup from 'yup'

function isRequired(value) {
  if (value && value.trim()) {
    return true
  }
  return 'This is required'
}

const emailRules = yup.string().required().email()
const passwordRules = yup.string().required().min(8).max(14)
// configure({
//   classes: {
//     valid: 'text-green-500',
//     invalid: 'text-red-500',
//     dirty: 'text-yellow-600'
//   }
// })
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
