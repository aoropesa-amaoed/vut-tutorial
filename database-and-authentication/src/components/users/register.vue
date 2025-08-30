<template>
    <div class="row justify-content-md-center">
        <div class="col col-lg-5">
            <h1 v-text="Register ? 'Register' : 'Login'"></h1>
            <hr/>
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" v-model="formData.email">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" v-model="formData.password">
                </div>
           
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
            <hr/>
            <button class="btn btn-outline-primary" 
            v-text="Register ? 'Go to Login' : 'Go to Register'"
            @click="Register = !Register">
            </button>
        </div>
    </div>
</template>


<script setup>
  
  import { auth } from '../firebase/config';
 import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword  
         } from 'firebase/auth';
  import {ref, reactive} from 'vue';
  import { useRouter } from 'vue-router';


  const router = useRouter();
  const Register = ref(true);
  const formData = reactive({
    email:'',
    password:''
  });

  const submitForm = () => {
    if(Register.value){
       
    registerUser();

    }else{

       signInUser();
    }
    
  }

  const signInUser = async () => {
    try{
        const res = await signInWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
        )
        if(!res){
            throw new Error('Could not complete the login')
        }
        router.push('/');
    }catch(error){
        console.log(error.message);
    }
  }

  const registerUser = async () => {
    try{
        const res = await createUserWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
        )
        if(!res){
            throw new Error('Could not complete the register')
        }
        router.push('/');
        
    }catch(error){
        console.log(error.message);
    }
  }

</script>