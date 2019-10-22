<template>
  <div class="home">
      Bloque DoWhile {{ bloque.condicional }}
      {{variable}}
      <div style="border-left: 10px solid yellow">
          <ListaBloque :listaBloques="bloque.listaBloques"></ListaBloque>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'BloqueDoWhile',
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