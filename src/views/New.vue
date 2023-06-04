<template>
    <main>
    <section>
    
    <h3>Neuer Eintrag:</h3>
    <ShowForm :show="show"/>
    
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
                    title: undefined,
                    location_id: undefined,
                    date: undefined,
                    text: undefined,
                    poster_filename: undefined,
                    poster_alt: undefined,
                    bands: [],
                    user_id: undefined
                }
            }
        }
    } 
</script>

<style scoped>
    h3 {
        margin-bottom: 20px;
    }
</style>