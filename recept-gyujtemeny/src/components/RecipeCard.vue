<script setup>
import { watchEffect } from 'vue';
import { receiptState } from '../state/state';
import {testRecipts} from '../data/testData.js';
import Receipt from '../classes/Receipt';

const state = receiptState();
const receipts = ref([]);
const testList = ref([]);

watchEffect(()=>{
    receipts.value = state.getReceipts();
});

const init = ()=>{
    for (let i = 0; i < testRecipts.length; i++) {
        const r =  testRecipts[i];
        const imageSRC = new URL(`../assets/images/${r.image}`, import.meta.url).href;
        testList.value.push(new Receipt(imageSRC, r.title, r.time, r.difficulty));
    }
}

init();
</script>
<template>
    <div class="d-flex">
        <div v-for="receipt in testList" class="card m-1" style="width: 18rem;">
            <img :src="receipt.getImage()" class="card-img-top" alt="edes-csirka">
            <div class="card-body">
                <h5 class="card-title">{{receipt.getTitle()}}</h5>
                <p class="card-text">Elkészítési idő: <span>{{receipt.getPreparation()}}</span> perc </p>
                <p>{{receipt.getDifficulty()}}</p>
                <a href="#" class="btn btn-primary">Részletek</a>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .d-flex{
        flex-wrap: wrap;
        justify-content: flex-start;
    }
</style>