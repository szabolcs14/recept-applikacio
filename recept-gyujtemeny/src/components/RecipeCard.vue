<script setup>
import { watchEffect, ref } from 'vue';
import { receiptState } from '../state/state';
import {testRecipts} from '../data/testData.js';
import Receipt from '../classes/Receipt';

const state = receiptState();
const receipts = ref([]);
const testList = ref([]);
const difficulty = ref("");

watchEffect(()=>{
    receipts.value = state.getReceipts();
});

const resolveUrl = (imgsrc)=>{
   if (imgsrc.startsWith('http://') || imgsrc.startsWith('https://')) {
        return imgsrc;
    }

    return new URL(imgsrc, import.meta.url).href;
}

const resolveDifficulty = ()=>{
    for (let i = 0; i < receipts.value.length; i++) {
        const d = receipts.value[i].getDifficulty();

        if(d == 1) {
            difficulty.value = "Könnyű";
        } else if(d == 2) {
            difficulty.value = "Közepes";
        } else if(difficulty == 3) {
            difficulty.value = "Nehéz";
        } else {
            difficulty.value = "Nincs definiálva!";
            return;
        }
    }
}

resolveDifficulty();
</script>
<template>
    <div class="row">
        <div class="col-lg-6 mb-3">
            <input type="text" class="form-control" placeholder="Keress receptet...">
        </div>
        <div class="col-lg-3 mb-3">
            <select class="form-select" aria-label="Default select example">
                <option value="0">Minden nehézség</option>
                <option value="1">könnyű</option>
                <option value="2">közepes</option>
                <option value="3">nehéz</option>
            </select>
        </div>
        <div class="col-lg-3 mb-3">
            <select class="form-select" aria-label="Default select example">
                <option value="0">Elkészítési idő szerint</option>
                <option value="1">20 percen belül</option>
                <option value="2">45 percen belül</option>
                <option value="3">1 órán belül</option>
                <option value="4">2 órán belül</option>
            </select>
        </div>
    </div>
    <div class="d-flex">
        <div v-for="(receipt, index) in receipts" class="card m-1" style="width: 18rem;">
            <img :src="resolveUrl(receipt.getImage())" class="card-img-top" alt="edes-csirka">
            <div class="card-body">
                <h5 class="card-title">{{receipt.getTitle()}}</h5>
                <p class="card-text">Elkészítési idő: <span>{{receipt.getPreparation()}}</span> perc </p>
                <p>{{difficulty}}</p>
                <a href="#" class="btn btn-primary">Részletek</a>
            </div>
        </div>
    </div>
    <div class="text-center m-0">
        <p>Nincs találat!</p>
    </div>
</template>
<style scoped>
    .d-flex{
        flex-wrap: wrap;
        justify-content: flex-start;
    }
</style>