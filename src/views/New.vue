<template>
    <main>
    <section>
    
    <h3>Neuer Eintrag:</h3>
    <ShowForm :show="show" :bands="bands"/>
    
    </section>
    </main>
</template>

<script>
    import ShowForm from '../components/ShowForm.vue';

    export default {
        components: { 
            ShowForm
        },
        data() {
            return {
                show: {
                    id: undefined,
                    title: undefined,
                    location: {
                        id: undefined
                    },
                    date: undefined,
                    text: undefined,
                    poster: {
                        filename: undefined,
                        alt: undefined
                    },
                    user_id: undefined
                },
                bands: []
            }
        }
    } 
</script>

<style scoped>
    h3 {
        margin-bottom: 20px;
    }
</style>