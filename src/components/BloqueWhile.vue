<template>
  <div class="home">
    <div class="row justify-content-md-center">
      <div class="col-8">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Bloque While</h5>
            <p class="card-text">
              {{ bloque.condicional }}
              {{variable}}
            </p>

            <div class="row justify-content-end">
              <div class="col-11.5">
                <div class="card">
                  <div class="card-body">
                    <ListaBloque :listaBloques="bloque.listaBloques"></ListaBloque>
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
  name: "BloqueWhile",
  props: ["bloque"],
  data() {
    return {
      variable: ""
    };
  },
  components: {}
};
</script>
