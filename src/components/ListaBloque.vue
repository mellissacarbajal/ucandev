<template>
  <div class="home">
    <div v-for="bloque in listaBloques" :key="bloque" class="block">
        <draggable>
        <component :is="bloque.type" :bloque="bloque"></component>
        </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

// @ is an alias to /src
export default {
  name: 'ListaBloque',
  props:["listaBloques"],
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
    }
  }
}
</script>
