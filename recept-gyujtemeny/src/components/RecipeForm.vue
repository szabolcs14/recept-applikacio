<script setup>
import { ref } from 'vue';
import Receipt from '../classes/Receipt';
import { receiptState, receiptUpdate, switchPage } from '../state/state';

const updatePage = receiptUpdate()
const page = switchPage()

const state = receiptState();
const name = ref("");
const image = ref("");
const time = ref("");
const difficulty = ref(0);

const defineRecipt = () => {
    if (name.value == "") {
        alert("A receptnek kötelező nevet adni!");
        return false;
    } else if (image.value == "") {
        alert("A képnek muszály külső hivatkozást megadni!");
        return false;
    } else if (time.value == "" || time.value <= 0) {
        alert("Az idő nem lehet üres, nulla vagy annál kisebb érték!");
        return false;
    } else if (difficulty.value == 0) {
        alert("A nehézségi szint nem megfelelő, mindenképpen kell választania!");
        return false;
    } else {
        return true;
    }
}

const add = () => {
    if (defineRecipt()) {
        alert("Minden rendben volt, hozzáadva a listához!");
        const r = new Receipt(image.value, name.value, time.value, difficulty.value);
        state.addReceipt(r);
        name.value = image.value = time.value = difficulty.value = "";
    }
}
</script>
<template>
    <h1 v-if="updatePage.getUpdate = false">Add hozzá a saját recepted!</h1>
    <h1 v-if="updatePage.getUpdate = true">Recept Szerkesztése!</h1>
    <form>
        <div class="mb-3">
            <label class="form-label">Étel neve</label>
            <input v-model="name" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Kép</label>
            <input v-model="image" type="text" class="form-control" placeholder="URL">
        </div>
        <div class="mb-3">
            <label class="form-label">Mennyi idő elkészítne?</label>
            <input v-model="time" type="number" class="form-control" placeholder="... perc">
        </div>
        <div class="mb-3">
            <select v-model="difficulty" class="form-select" aria-label="Default select example">
                <option value="0">Válasz nehézséget</option>
                <option value="1">Könnyű</option>
                <option value="2">Közepes</option>
                <option value="3">Nehéz</option>
            </select>
        </div>
        <div class="mb-3">
            <p class="m-0 py-3" v-if="updatePage.getUpdate = false"><button type="button" class="btn btn-success" @click="add">Hozzáad</button></p>
            <p class="m-0 py-3" v-if="updatePage.getUpdate = true"><button type="button" class="btn btn-primary" @click="edit">Szerkeszt</button></p>
        </div>
    </form>
</template>
<style scoped>
    .btn:hover {
         transform: scale(1.05);
         font-size: 16px;
         font-weight: 600;
    }

     @media (max-width: 768px) {
        
        h1, div.mb-3:last-child{
            text-align: center;
        }
        h1{
            margin-bottom: 20px;
        }
  }
  
</style>