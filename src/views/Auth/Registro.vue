<template>
    <div id="app">
        <b-field>
            <b-input v-model="name"
                placeholder="Nombre">
            </b-input>
        </b-field>

        <b-field>
            <b-input v-model="lastname"
                placeholder="Apellidos">
            </b-input>
        </b-field>
        
        <b-field>
            <b-input v-model="code"
                placeholder="Codigo"
                type="number"
                min="9">
            </b-input>
        </b-field>

        <b-field>
            <b-input v-model="email" 
                placeholder="Correo"
                type="email"
                icon="email">
            </b-input>
        </b-field>

        <b-field>
            <b-input v-model="password" 
                type="password"
                icon="email"
                placeholder="Contraseña">
            </b-input>
        </b-field>

        <b-field>
            <p class="control">
                <button class="button is-primary" @click="registrar">
                  Registrar
                </button>
            </p>
        </b-field>
  </div>
</template>


<script>
import firebase from 'firebase'
export default {
    name:'registrar',
    data() {
        return{
            name: '',
            lastname: '',
            code: '',
            email: '',
            password: ''
        }
    },
    methods: {
        registrar(){
           firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
               (user) => {
                   firebase.database().ref('perfil/' + user.user.uid).set(
                       {
                           name: this.name,
                           lastname: this.lastname,
                           code: this.code,
                           email: this.email,

                       }, (error) => {
                           if (error){
                               alert('Error')
                               } else {
                                   this.$router.replace('home')
                               }
                       }
                   )
               },(error) => {
                   alert(error.message)
               }
           );
        }
    }
}
</script>
