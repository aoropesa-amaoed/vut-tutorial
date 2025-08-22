<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup';

const formSSchema = yup.object({
    name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters long'),
})


// const isRequired = (value) => {
// if(!value){
//     return 'This field is required';
// }
// return true;
// }
// const validateName = (value) => {
//     if(value.length < 3){
//         return 'Name must be at least 3 characters long';
//     }
//     return true;
// }
function handleSubmit(values,{resetForm}){
 console.log(values);
 resetForm();
}
</script>

<template>
    <Form @submit="handleSubmit" :validation-schema="formSSchema">
        <div clalss="mb-3">
        <label for="name">Name</label>
        <Field 
            name="name" 
            
            type="text" 
            class="form-control" />
        <ErrorMessage 
        name="name"
        as="div"
        v-slot="{ message }" >
        <div class="text-danger">{{ message }}</div>

        </ErrorMessage>
        
    </div>
    <button class="btn btn-primary">
        Submit
    </button>
    </Form>
    
</template>