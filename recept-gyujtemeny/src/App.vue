<script setup>
import { ref } from 'vue';
import RecipeCard from './components/RecipeCard.vue';
import RecipeForm from './components/RecipeForm.vue';

const activePage = ref(0)
const LoadPage = (page) => {
  activePage.value = page
}

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
      <div class="container d-flex">
        <h1 class="pe-3">Recept könyv</h1>
        <nav class="d-flex">
          <p class="my-0 px-3" @click="LoadPage(0)">Receptek</p>
          <p class="my-0 px-3" @click="LoadPage(1)">Új Receptek</p>
          <p class="my-0 px-3">Kedvencek</p>
        </nav>
      </div>
    </header>
    <main class="container py-4">
      <section v-if="activePage == 0">
        <RecipeCard />
      </section>
      <section v-if="activePage == 1">
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
</style>