<template>
  <div class="home">
      Bloque Leer {{ bloque.value }}
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'bloqueLeer',
  props: ["bloque"],
  data() {
    return {
      variable: ""
    }
  },
  components: {
  }
}
</script>
