<script setup>
import { ref } from 'vue';
import RecipeCard from './components/RecipeCard.vue';
import RecipeForm from './components/RecipeForm.vue';
import { switchPage } from './state/state.js';

const page = switchPage()

</script>

<template>
  <!DOCTYPE html>
  <html lang="hu">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recept gyűjtemény</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
  </head>
  <body>
    <header class="py-2 bg-light">
  
      <div class="container mobil-header">
        <h1 class="text-center">Recept könyv</h1>
        <nav class="d-flex">
          <p class="my-0 px-3" @click="page.receiptsPage()">Receptek</p>
          <p class="my-0 px-3" @click="page.formPage()">Új Receptek</p>
          <p class="my-0 px-3">Kedvencek</p>
        </nav>
      </div>

      <div class="container d-flex desktop-header">
        <h1 class="pe-3">Recept könyv</h1>
        <nav class="d-flex">
          <p class="my-0 px-3" @click="page.receiptsPage()">Receptek</p>
          <p class="my-0 px-3" @click="page.formPage()">Új Receptek</p>
          <p class="my-0 px-3">Kedvencek</p>
        </nav>
      </div>

    </header>
    <main class="container py-4">
      <section v-if="page.getPage() == 0">
        <RecipeCard />
      </section>
      <section v-if="page.getPage() == 1">
        <RecipeForm />
      </section>
    </main>
    <footer class="py-3 bg-light text-center">
      <p class="my-0">&copy; Minden jog fenttartva</p>
    </footer>
  </body>
  </html>
</template>
<style scoped>


  nav p {
    color: #808080;
    font-size: 16px;
  }
  nav p:hover {
    color: #818181;
    cursor: pointer;
    font-weight: 600;
    font-size: 17px;
  }

  header .d-flex{
        align-items: center;
        justify-content: flex-start;
  }
  h1 {
    font-size: 24px;
    font-weight: 400;
  }

  .mobil-header {
    display: none;
  }

  @media (max-width: 768px) {
  
    .mobil-header {
        display: block;
    }

    .desktop-header {
        display: none !important;
    }

    .mobil-header nav {
        justify-content: center;
    }

    .mobil-header h1 {
        margin-bottom: 15px;
    }

    h1{
      font-size: 32px;
      padding: 10px;
    }
  }

</style>