<template>
    <div class="home">
        Bloque Imprimir {{bloque.value}}    
    </div>
</template>

<script>
export default {
        name: 'bloqueImprimir',
        props: ["bloque"],
        data(){
            return{
                variable: ""
            }
        },
        components: {
        }
}
</script>