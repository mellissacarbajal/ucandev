<template>
  <div class="home has-text-centered">
  <div>Inicio</div>
   <ListaBloque :listaBloques="jsonDiagram"></ListaBloque>
   <div>Fin</div>
   <button type="button" class="button is-primary" @click="validar()">Validar</button>

   <button type="button" class="button is-primary" @click="tutifruti"></button>
  </div>
</template>

<script>
import firebase from 'firebase'
// @ is an alias to /src

String.prototype.format = function() {
          var formatted = this;
          for (var i = 0; i < arguments.length; i++) {
              var regexp = new RegExp('\\{'+i+'\\}', 'gi');
              formatted = formatted.replace(regexp, arguments[i]);
          }
          return formatted;
      };


const templates = {
  'BloqueLeer': "let {0} = leerDato()\n",
  'BloqueVariable': "{0}\n",
  'BloqueImprimir': "escribirDato({0});\n",
  'BloqueWhile': "while({0})\n {\n {1} \n};\n",
  'BloqueDoWhile': "do{\n {0} \n while({1})\n};\n",
  'BloqueCondicional': "if({0}) {\n {1} \n}else{\n {2} \n};\n",

}


export default {
  name: 'home',
  data() {
    return {
            jsonDiagram: [],
      }
  },
  components: {
  },
  methods: {
    tutifruti(){
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    validar() {
      console.log(this.jsonDiagram)
      

      let cases = [{
        entrada: "3\n15\n16\n17\n",
        salida: "16\n"
      },
      {
        entrada: "2\n12\n6\n",
        salida: "9\n"
      }
      ] 

     function getCode(listBloques){
       // Convierte una lista de bloques a codigo javascript
        let resultCode = '';

        for(let i=0; i<listBloques.length; i++) {
          const bloque = listBloques[i];
          if(bloque.type === 'BloqueLeer'){
            resultCode += templates[bloque.type].format(bloque.value)
          } else if(bloque.type === 'BloqueVariable') {
            resultCode += templates[bloque.type].format(bloque.value)
          }
          else if(bloque.type === 'BloqueImprimir') {
            resultCode += templates[bloque.type].format(bloque.value)
          }
          else if (bloque.type === 'BloqueWhile') {
            let body = getCode(bloque.listaBloques)
            resultCode += templates[bloque.type].format(bloque.value, body)
          }
          else if (bloque.type === 'BloqueDoWhile') {
            let body = getCode(bloque.listaBloques)
            resultCode += templates[bloque.type].format(body, bloque.value)
          }
          else if (bloque.type === 'BloqueCondicional') {
            let bodyV = getCode(bloque.listaBloquesV)
            let bodyF = getCode(bloque.listaBloquesF)
            resultCode += templates[bloque.type].format(bloque.value, bodyV, bodyF)
          }
        }
        return resultCode
     }


      let code = getCode(this.jsonDiagram)
      console.log(code);
      let todasCorrectas = true;
      for(let i=0; i<cases.length; i++){
        // Validamos que para todos los casos el codigo funcione
        let caso = cases[i]
        let entradas = caso.entrada.split("\n")
        let result=''
        // eslint-disable-next-line no-unused-vars
        let leerDato = function() {
          let entrada = entradas.shift() // Obtenemos dato por dato de las entradas
          try {
            return parseFloat(entrada)
          }catch (e) {
            return entrada
          }
        }
        // eslint-disable-next-line no-unused-vars
        let escribirDato = function (val) {
          result += val + '\n' // Escribimos en la salida con \n para luego validar
          console.log(val)
          console.log(result)
        }
        try {
          eval(code);
        }catch(e) { console.log(e)}
        if(result != caso.salida) {
          todasCorrectas = false;
        }     
      }

      if(todasCorrectas) {
        alert("Bien funciono");
      } else {
        alert("No funciono");
      }

    }
  }
}
</script>
