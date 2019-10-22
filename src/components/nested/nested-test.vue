<style scoped>
.item-container {
  max-width: 20rem;
  margin: 0;
}

.item {
  padding: 1rem;
  border: solid black 1px;
  background-color: #fefefe;
}
.item-sub {
  margin: 0 0 0 1rem;
}
</style>

<template>
  <draggable
    v-bind="dragOptions"
    tag="div"
    class="item-container"
    :list="list"
    :value="value"
    @input="emitter"
  >
    <div class="card" style="width: 18rem;">
      <div class="card-header">INICIO</div>
    </div>

    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Leer</h5>
        <p class="card-text">variable xz</p>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="row">
        <div class="col text-center">
          Condicion
        </div>
        </div>
        <div class="row">

        <div class="col">
        <p class="text-left">xd</p> 
        </div>

        <div class="col">
        <p class="text-right">xd</p> 
        </div>

        </div>
        </div>

      <div class="row">
        <div class="col-sm-6">
          1
        </div>
        <div class="col-sm-6">
          2
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="row">
        <div class="col text-center">
          Condicion
        </div>
        </div>
        <div class="row">

        <div class="col">
        <p class="text-left">xd</p> 
        </div>

        <div class="col">
        <p class="text-right">xd</p> 
        </div>

        </div>
        </div>

      <div class="row">
        <div class="col-sm-6">
          1
        </div>
        <div class="col-sm-6">
          2
        </div>
      </div>
    </div>

    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Escribir</h5>
        <p class="card-text">variable xz</p>
      </div>
    </div>

    <div class="card" style="width: 18rem;">
      <div class="card-header">FIN</div>
    </div>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "nested-test",
  methods: {
    emitter(value) {
      this.$emit("input", value);
    }
  },
  components: {
    draggable
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    },
    // this.value when input = v-model
    // this.list  when input != v-model
    realValue() {
      return this.value ? this.value : this.list;
    }
  },
  props: {
    value: {
      required: false,
      type: Array,
      default: null
    },
    list: {
      required: false,
      type: Array,
      default: null
    }
  }
};
</script>
