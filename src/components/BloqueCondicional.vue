<template>
  <div class="home">
      Bloque Condicional {{ bloque.condicional }}
      {{variable}}
      <div style="border-left: 10px solid blue">
          <ListaBloque :listaBloques="bloque.listaBloquesV"></ListaBloque>
      </div>
      <div style="border-left: 10px solid black">
          <ListaBloque :listaBloques="bloque.listaBloquesF"></ListaBloque>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'BloqueCondicional',
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