<template>
  <div class="home">
        <div class="row justify-content-md-center">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Bloque DoWhile </h5>
                        <div class="row  justify-content-end">
                            <div class="col-11.5">
                                <div class="card">
                                    <div class="card-body">
                                        <ListaBloque :listaBloques="bloque.listaBloques"></ListaBloque>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="card-text">{{ bloque.condicional }}
                        {{variable}}</p>
                    </div>
                </div>
            </div>
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