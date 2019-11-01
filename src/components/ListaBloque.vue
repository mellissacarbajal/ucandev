<template>
  <div>
    <draggable v-model="listaBloques">
      <div v-for="(bloque, idx) in listaBloques" :key="`${bloque.type}-${idx}`" class="block">
         <a @click="agregarBloqueModal(idx)" class="button is-primary">+</a>
         <component :is="bloque.type" :bloque="bloque"></component>
      </div>
    </draggable>
    <a @click="agregarBloqueModal(listaBloques.length)" class="button is-primary">+</a>
    <!--div v-for="(bloque, idx) in listaBloques" :key="bloque.type" class="block">
        <draggable
        v-bind="dragOptions"
        :list="list"
        :value="value"
        @input="emitter">
        <component :is="bloque.type" :bloque="bloque"></component>
        <a @click="agregarBloqueModal(idx)">Agregar</a>
        </draggable>
    </div-->
    <b-modal :active.sync="isactive"  has-modal-card
                 trap-focus
                 aria-role="dialog"
                 aria-modal>
                 <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Agregar nuevo bloque</p>
                    </header>
                    <section class="modal-card-body">
                        <div v-if="tipoBloqueSeleccionado===null">
                          <button type="button" class="button is-primary" @click="modalIngresar('BloqueLeer')">Leer</button> 
                          <button type="button" class="button is-primary" @click="modalIngresar('BloqueVariable')">Sentencia</button>
                          <button type="button" class="button is-primary" @click="modalIngresar('BloqueImprimir')">Escribir</button> 
                          <button type="button" class="button is-primary" @click="modalIngresar('BloqueWhile')">Mientras</button> 
                          <button type="button" class="button is-primary" @click="modalIngresar('BloqueDoWhile')">Hacer/Mientras</button> 
                          <button type="button" class="button is-primary" @click="modalIngresar('BloqueCondicional')">Condicional</button>
                        </div>
                        <div v-if="tipoBloqueSeleccionado=='BloqueLeer'">
                          Ingrese la variable a leer: <input v-model="nuevoBloque.value" />
                        </div>
                        <div v-if="tipoBloqueSeleccionado=='BloqueVariable'">
                          Ingrese sentencia: <input v-model="nuevoBloque.value" />
                        </div> 
                        <div v-if="tipoBloqueSeleccionado=='BloqueImprimir'">
                          Ingrese el contenido a imprimir: <input v-model="nuevoBloque.value"/>
                        </div> 
                        <div v-if="tipoBloqueSeleccionado=='BloqueWhile'">
                          Ingrese la condicion: <input v-model="nuevoBloque.value"/>
                        </div> 
                        <div v-if="tipoBloqueSeleccionado=='BloqueDoWhile'">
                          Ingrese la condicion: <input v-model="nuevoBloque.value"/>
                        </div>
                        <div v-if="tipoBloqueSeleccionado=='BloqueCondicional'">
                          Ingrese la condicicional : <input v-model="nuevoBloque.value"/>
                        </div> 
                    </section>
                    <footer class="modal-card-foot" v-if="tipoBloqueSeleccionado!==null">
                        <button class="button" type="button" @click="isactive=false; tipoBloqueSeleccionado=null">Close</button>
                        <button class="button" type="button" @click="tipoBloqueSeleccionado=null">Cancelar</button>
                        <button class="button is-primary" @click="agregarBloque()">Guardar</button>
                    </footer>
                </div>
      
    </b-modal>
  </div>
</template>

<script> 
import draggable from "vuedraggable";
import BloqueLeer from './BloqueLeer.vue';
Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};


// @ is an alias to /src
export default {
  name: 'ListaBloque',
  props:["listaBloques"],
  components: {
    draggable, BloqueLeer
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
  },
  data: function () {
    return {
      isactive: false,
      indiceactual: -1,
      tipoBloqueSeleccionado: null,
      nuevoBloque: {}
    }
  },
  methods: {
    emitter(value){
      this.$emit("input",value)
    },
    agregarBloque() {
      
      this.listaBloques.insert(this.indiceactual, this.nuevoBloque)
      this.indiceactual=-1
      this.isactive=false
      this.tipoBloqueSeleccionado=null
    },
    agregarBloqueModal(idn) {
      this.isactive=true
      this.indiceactual=idn
    },
    modalIngresar(tipoDeBloque){
      this.tipoBloqueSeleccionado=tipoDeBloque
      this.nuevoBloque = { type: tipoDeBloque }

      if (tipoDeBloque === 'BloqueCondicional'){
        this.nuevoBloque = { type: tipoDeBloque, listaBloquesV: [], listaBloquesF : [] }
    
      }

      if (tipoDeBloque === 'BloqueWhile'){
        this.nuevoBloque = {type: tipoDeBloque, listaBloques: []}
      }

      
      if (tipoDeBloque === 'BloqueDoWhile'){
        this.nuevoBloque = {type: tipoDeBloque, listaBloques: []}
      }
    }
  }
}
</script>

<style lang="css">
.block {
  border: 2px gray solid;
  padding: 10px;
} 
</style>
