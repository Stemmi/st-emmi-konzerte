<template>
    <main>
    <section>
    
    <h3>Eintrag bearbeiten:</h3>
    <ShowForm v-if="show&&bands" :show="show" :bands="bands" />
    
    </section>
    </main>
</template>

<script>
    import ShowForm from '../components/ShowForm.vue';
    import api from '../services/api';

    export default {
        components: { 
            ShowForm
        },
        data() {
            return {
                show: undefined,
                bands: undefined
            }
        },
        async mounted() {
            this.show = await api.getShowById(this.$route.params.id);
            this.bands = await api.getBandsByShowId(this.show.id);
        }
    } 
</script>

<style scoped>
    h3 {
        margin-bottom: 20px;
    }
</style>