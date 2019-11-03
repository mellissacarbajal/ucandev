<template>
    <section class="hero is-primary is-fullheight">
        <div class="hero-body">
            <div class="container">
            <div class="columns is-centered">
                <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                <div class="box">
                    <div class="field">
                    <label for="" class="label">Correo</label>
                    <div class="control has-icons-left">
                        <input type="email" v-model="email" placeholder="e.g. bobsmith@gmail.com" class="input" required>
                        <span class="icon is-small is-left">
                        <i class="fa fa-envelope"></i>
                        </span>
                    </div>
                    </div>
                    <div class="field">
                    <label for="" class="label">Password</label>
                    <div class="control has-icons-left">
                        <input type="password" v-model="password" placeholder="***" class="input" required>
                        <span class="icon is-small is-left">
                        <i class="fa fa-lock"></i>
                        </span>
                    </div>
                    </div>
                    <div class="field">
                    <label for="" class="checkbox">
                        <input type="checkbox">
                    Recordarme
                    </label>
                    </div>
                    <div class="field">
                    <button @click="login" class="button is-primary">
                        Login
                    </button>
                    <button @click="login" class="button is-primary">
                        Registrarse
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
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