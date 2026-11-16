<script setup>
import { ref } from 'vue';
import Receipt from '../classes/Receipt';
import { receiptState } from '../state/state';

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
    <h1>Add hozzá a saját recepted!</h1>
    <form>
        <div class="mb-3">
            <label class="form-label">Étel neve</label>
            <input v-model="name" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Kép</label>
            <input v-model="image" type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Mennyi idő elkészítne?</label>
            <input v-model="time" type="number" class="form-control">
        </div>
        <div class="mb-3">
            <select v-model="difficulty" class="form-select" aria-label="Default select example">
                <option value="0">Válasz nehézséget</option>
                <option value="1">könnyű</option>
                <option value="2">közepes</option>
                <option value="3">nehéz</option>
            </select>
        </div>
        <div class="mb-3">
            <p><button type="button" class="btn btn-success" @click="add">Hozzáad</button></p>
        </div>
    </form>
</template>
<style scoped></style>