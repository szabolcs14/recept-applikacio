<script setup>
import { watchEffect, ref, computed } from 'vue';
import { receiptState } from '../state/state';

const state = receiptState();
const receipts = ref([]);

const searchText = ref("");
const difficult = ref(0);
const prepareTime = ref(0);

watchEffect(() => {
    receipts.value = state.getReceipts();
});

const resolveUrl = (imgsrc) => {
    if (imgsrc.startsWith('http://') || imgsrc.startsWith('https://')) {
        return imgsrc;
    }
    return new URL(imgsrc, import.meta.url).href;
};

const resolveDifficulty = (d) => {
    if (d == 1) return "Könnyű";
    if (d == 2) return "Közepes";
    if (d == 3) return "Nehéz";
    return "Nincs definiálva!";
};

const filteredReceipts = computed(() => {
    return receipts.value.filter(r =>
        r.getTitle().toLowerCase().includes(searchText.value.toLowerCase()) &&
        (difficult.value == 0 || r.getDifficulty() == difficult.value) &&
        (prepareTime.value == 0 || r.getPreparation() <= prepareTime.value)
    );
});
</script>

<template>
    <div class="row">
        <div class="col-lg-6 mb-3">
            <input v-model="searchText" type="text" class="form-control" placeholder="Keress receptet...">
        </div>
        <div class="col-lg-3 mb-3">
            <select v-model="difficult" class="form-select">
                <option value="0">Minden nehézség</option>
                <option value="1">Könnyű</option>
                <option value="2">Közepes</option>
                <option value="3">Nehéz</option>
            </select>
        </div>
        <div class="col-lg-3 mb-3">
            <select v-model="prepareTime" class="form-select">
                <option value="0">Elkészítési idő szerint</option>
                <option value="20">20 percen belül</option>
                <option value="45">45 percen belül</option>
                <option value="60">1 órán belül</option>
                <option value="120">2 órán belül</option>
            </select>
        </div>
    </div>

    <div class="d-flex">
        <div v-for="(receipt, index) in filteredReceipts" :key="index" class="card m-1" style="width: 18rem;">
            <img :src="resolveUrl(receipt.getImage())" class="card-img-top" alt="edes-csirka">
            <div class="card-body">
                <h5 class="card-title">{{ receipt.getTitle() }}</h5>
                <p class="card-text">Elkészítési idő: <span>{{ receipt.getPreparation() }}</span> perc </p>
                <p>{{ resolveDifficulty(receipt.getDifficulty()) }}</p>
                <a href="#" class="btn btn-primary">Részletek</a>
            </div>
        </div>
    </div>

    <div v-if="filteredReceipts.length === 0" class="text-center m-0">
        <p class="badge text-bg-danger mt-4 fs-6">Nincs találat!</p>
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
    .card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        overflow: hidden;
    }
    .card:hover {
        transform: scale(1.04);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
    .card img {
        transition: transform 0.4s ease;
    }
    .card:hover img {
        transform: scale(1.1);
    }
    .btn:hover {
        transform: scale(1.05);
        font-size: 16px;
        font-weight: 600;
    }

    @media (max-width: 768px) {
  
    .d-flex{
        justify-content: center;
    }
    .card{
        margin-bottom: 20px  !important;
    }

  }
</style>