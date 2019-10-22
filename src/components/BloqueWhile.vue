<template>
  <div class="home">
      Bloque While {{ bloque.condicional }}
      {{variable}}
      <div style="border-left: 10px solid red">
          <ListaBloque :listaBloques="bloque.listaBloques"></ListaBloque>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'BloqueWhile',
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
