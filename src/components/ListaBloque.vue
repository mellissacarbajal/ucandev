<template>
  <div class="home">
    <div v-for="bloque in listaBloques" :key="bloque" class="block">
        <component :is="bloque.type" :bloque="bloque"></component>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'ListaBloque',
  props:["listaBloques"],
  components: {
  }
}
</script>
