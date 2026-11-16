<script setup>

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
        <div class="card m-1" style="width: 18rem;">
            <img src="../assets/edes-csirke.jpg" class="card-img-top" alt="edes-csirka">
            <div class="card-body">
                <h5 class="card-title">Édes savanyú csirke</h5>
                <p class="card-text">Elkészítési idő: <span>15</span> perc </p>
                <p>könnyű</p>
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