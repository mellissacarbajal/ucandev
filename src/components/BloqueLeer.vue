<template>
  <div class="home">
<div class="row justify-content-md-center">
            <div class="col-8" >
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Bloque Leer </h5>
                            <p class="card-text">{{ bloque.value }}
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
