<template>
    <main>
    <section>
    
    <h3>Neuer Eintrag:</h3>
    <ShowForm :show="show" :bands="bands" @sendForm="postShow" />
    
    </section>
    </main>
</template>

<script>
    import ShowForm from '../components/ShowForm.vue';
    import settings from '../services/settings';


    export default {
        components: { 
            ShowForm
        },
        data() {
            return {
                apiUrl: settings.apiUrl(),
                show: {
                    location: {},
                    poster: {},
                },
                bands: []
            }
        },
        methods: {
            async postShow(reqBody) {
                fetch(this.apiUrl+"/shows", {
                    method: 'POST',
                    body: JSON.stringify(reqBody),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                }) 
                .then((response) => response.json())
                .then((show) => this.$router.push({ path: `/detail/${show.id}` }));
            }
        }
    } 
</script>

<style scoped>
    h3 {
        margin-bottom: 20px;
    }
</style>