<template>
    <main>
        <ShowDetail :show="show" :bands="bands"/>
        <MapBoxDetail v-if="show" :location="show.location" />
    </main>
</template>

<script>
    import ShowDetail from "../components/ShowDetail.vue";
    import MapBoxDetail from "../components/MapBoxDetail.vue";
    import api from '../services/api.js';

    
    export default {
        data() {
            return {
                show: undefined,
                bands: []
            }
        },
        
        components: {
            ShowDetail,
            MapBoxDetail
        },
        async mounted() {
            this.show = await api.getShowById(this.$route.params.id);
            this.bands = await api.getBandsByShowId(this.show.id);
        }
    } 
</script>