<template>
    <section>
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
                <button class="button is-primary" @click="login">
                  Login
                </button>
            </p>
        </b-field>
    </section>
</template>
<script>
import firebase from 'firebase'
export default {
    name:'login',
    data() {
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        login(){
            firebase.auth().signInWithEmailAndPassword(this.email , this.password).then(
                () => {
                    this.$router.replace('home')
                },
                (error) => {
                    alert(error.message)
                }
            );
        }
    }
}
</script>
