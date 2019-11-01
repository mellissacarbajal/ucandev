<template>
  <div class="home">
<div class="row justify-content-md-center">
            <div class="col-12" >
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Sentencia</h5>
                            <p class="card-text">{{ bloque.value }}
                            </p>
                    </div>
                </div>
            </div>
        </div>
 </div>
</template>


<script>

export default {
  name: 'bloqueVariable',
  props: ["bloque"],
  data() {
    return {
    }
  },
  components: {
  }
}
</script>