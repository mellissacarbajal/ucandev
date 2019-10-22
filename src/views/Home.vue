<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ListaBloque :listaBloques="jsonDiagram"></ListaBloque>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
            jsonDiagram: [{
                    type: 'BloqueLeer',
                    value: 'nombre'
                },
                {
                type: 'BloqueWhile',
                condicional: 'nombre == "Ali"',
                listaBloques: [{
                              type: 'BloqueLeer',
                              value: 'nombre'
                          },
                          {
                          type: 'BloqueLeer',
                          value: '"Chau" + nombre'
                      }
                  ]
                },
                {
                type: 'BloqueDoWhile',
                condicional: 'nombre == "Melli"',
                listaBloques: [{
                              type: 'BloqueLeer',
                              value: 'nombre'
                          }
                  ]
                },
                {
                type: 'BloqueCondicional',
                condicional: 'nombre == "Julito"',
                listaBloquesV: [{
                              type: 'BloqueLeer',
                              value: 'verdadero'
                          },
                          {
                          type: 'BloqueLeer',
                          value: '"Chau" + verdadero'
                      }
                  ],
                  listaBloquesF: [{
                              type: 'BloqueLeer',
                              value: 'falso'
                          },
                          {
                          type: 'BloqueLeer',
                          value: '"Chau" + falso'
                      }
                  ],
                },
                {
                type: 'BloqueImprimir',
                value: 'Soy lo maximo'
            }
        ]
      }
  },
  components: {
  }
}
</script>
