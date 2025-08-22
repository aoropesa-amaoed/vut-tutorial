<template>
    <form @submit="checkkForm">
      <div class="row">
        <div class="col-xl-12">
          <h1>Contact us</h1>
          <hr />
  
          <div class="mb-3">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              class="form-control"
              v-model = "formData.name"
            />
          </div>
      
          <div class="mb-3">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              class="form-control"
              v-model = "formData.email"
            />
          </div>
  
          <div class="mb-3">
            <label for="subject">Subject</label>
            <input
              type="text"
              id="subject"
              class="form-control"
              v-model = "formData.subject"
            />
          </div>
  
          <div class="mb-3">
            <label for="message">Message</label>
            <textarea
              class="form-control"
              rows="3"
              id="message"
              v-model = "formData.message"
            ></textarea>
          </div>
  
  
          <div class="mb-3">
              <h5>Want more spam ? </h5>
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Newsletter" id="newsletter"
                  v-model = "formData.extras"
                  >
                  <label class="form-check-label" for="newsletter">
                      Newsletter
                  </label>
              </div>
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Promotions" id="promotions"
                 v-model = "formData.extras" >
                  <label class="form-check-label" for="newsletter">
                      Promotions
                  </label>
              </div>
           </div>
  
           <div class="mb-3">
              <h5>What are you ? </h5>
              <div class="form-check">
                  <input class="form-check-input" type="radio" id="human" value="human" name="origin"
                  v-model = "formData.gender"
                  >
                  <label class="form-check-label" for="human">
                      Human
                  </label>
              </div>
              <div class="form-check">
                  <input class="form-check-input" type="radio" id="alien" value="alien" name="origin"
                  v-model="formData.gender">
                  <label class="form-check-label" for="alien">
                      Alien
                  </label>
              </div>
          </div>
            
            <button
                class="btn btn-primary"
                
            >
            Submit
            </button>
            <hr />
            <div v-if="errors.length" class="text-danger">
              <b>Please fix the following errors</b>
              <ul>
                <li v-for="error in errors" :key="error">
                  {{ error }}
                </li>
              </ul>
            </div>
  
         
        </div>
      </div>
    </form>
  </template>


<script setup>
import { reactive } from 'vue';

const errors = reactive([

]);

const formData = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
    extras:[],
    gender: 'alien'
    // origin: 'human'
});

const checkkForm = (e) => {
  e.preventDefault();
  errors.splice(0);

  if(!formData.name){
    errors.push('Name is required');
  }
  if(!formData.email){
    errors.push('Email is required');
  }
  if(!errors.length){
    handleSubmit();
  }
}
const handleSubmit = () => {
    console.log(JSON.stringify(formData));
}


</script>