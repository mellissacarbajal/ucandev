<template>
  <div class="home">
  <div class="row justify-content-md-center">
      <div class="col-12" >
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">Bloque Condicional </h5>
                  <p class="card-text">{{ bloque.value }}
                  {{variable}}</p>
                  <div class="columns is-mobile">
                      <div class="column is-half">
                        si
                          <div class="card">
                              <div class="card-body">
                                  <ListaBloque :listaBloques="bloque.listaBloquesV"></ListaBloque>
                              </div>
                          </div>
                      </div>
                      <div class="column is-half">
                          no
                          <div class="card">
                              <div class="card-body">
                                  <ListaBloque :listaBloques="bloque.listaBloquesF"></ListaBloque>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
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