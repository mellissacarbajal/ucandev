<template>
  <div class="home">
  <div class="row justify-content-md-center">
      <div class="col-8" >
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">Bloque Condicional </h5>
                  <p class="card-text">{{ bloque.condicional }}
                  {{variable}}</p>
                  <div class="row  justify-content-end">
                      <div class="col-6">
                          <div class="card">
                              <div class="card-body">
                                  <ListaBloque :listaBloques="bloque.listaBloquesV"></ListaBloque>
                              </div>
                          </div>
                      </div>
                      <div class="col-6">
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

  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-sm-12">
        Level 1: .col-sm-9
        <div class="row">
          <div class="col-8 col-sm-6">
            Level 2: .col-8 .col-sm-6
          </div>
          <div class="col-4 col-sm-6">
            Level 2: .col-4 .col-sm-6
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