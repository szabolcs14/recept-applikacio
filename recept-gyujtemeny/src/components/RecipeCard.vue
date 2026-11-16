<script setup>
import { watchEffect, ref } from 'vue';
import { receiptState } from '../state/state';
import {testRecipts} from '../data/testData.js';
import Receipt from '../classes/Receipt';

const state = receiptState();
const receipts = ref([]);
const testList = ref([]);

watchEffect(()=>{
    receipts.value = state.getReceipts();
});

const init = () => {
    for (let i = 0; i < testRecipts.length; i++) {
        const r = testRecipts[i];
        const imageSRC = new URL(r.image, import.meta.url).href;
        testList.value.push(new Receipt(imageSRC, r.title, r.time, r.difficulty));
    }
}

init();
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
                <option value="3">2 órán belül</option>
            </select>
        </div>
    </div>
    <div class="d-flex">
        <div v-for="receipt in testList" class="card m-1" style="width: 18rem;">
            <img :src="receipt.getImage()" class="card-img-top" alt="edes-csirka">
            <div class="card-body d-flex">
                <div>
                    <h5 class="card-title">{{receipt.getTitle()}}</h5>
                    <p class="card-text">Elkészítési idő: <span>{{receipt.getPreparation()}}</span> perc </p>
                    <p>{{receipt.getDifficulty()}}</p>
                </div>
                <div>
                    <a href="#" class="btn btn-primary">Részletek</a>
                </div>
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
    .card img {
        height: 200px;
    }
    .card, .card img {
        width: 300px !important;
    }
    .card .d-flex {
            align-content: space-between;
    }
</style>