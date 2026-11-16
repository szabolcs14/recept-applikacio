<script setup>

</script>
<template>
    <h1>Add hozzá a saját recepted!</h1>
    <form>
        <div class="mb-3">
            <label class="form-label">Étel neve</label>
            <input type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Kép</label>
            <input type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Mennyi idő elkészítne?</label>
            <input type="number" class="form-control">
        </div>
        <div class="mb-3">
            <select class="form-select" aria-label="Default select example">
                <option value="0">Válasz nehézséget</option>
                <option value="1">könnyű</option>
                <option value="2">közepes</option>
                <option value="3">nehéz</option>
            </select>
        </div>
    </form>
</template>
<style scoped>

</style>