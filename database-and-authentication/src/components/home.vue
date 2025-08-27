<template>
    <div class="row row-cols-1 row-cols-md-2 g-4">

    <!-- ITEM -->
    <div class="col"
        v-for="(notes) in notes" :key="notes.id">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title" >{{ notes.title }}</h5>
                <p class="card-text">{{ notes.description }}</p>
            </div>
            <div class="card-footer">
                <router-link :to="`/admin/update_article/${notes.id}`">
                    Update note
                </router-link>
            </div>
        </div>
    </div>

  
</div>
</template>
<script setup>
import { db } from './firebase/config';
import { collection, doc, getDocs } from 'firebase/firestore';
import {ref} from 'vue';

//fetch collection

const notes = ref([

]);



const noteCollection = collection(db, 'notes');

getDocs(noteCollection)
.then(snapshot => {
    let documents = [];
    snapshot.docs.forEach(doc => {
        documents.push({...doc.data(),id: doc.id })
    });
    notes.value = documents;
    console.log(documents);
});


</script>