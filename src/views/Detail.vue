<template>
    <main>
        <ShowDetail :show="show" :bands="bands"/>
        <MapBoxDetail v-if="show" :location="show.location" />
    </main>
</template>

<script>
    import ShowDetail from "../components/ShowDetail.vue";
    import MapBoxDetail from "../components/MapBoxDetail.vue";
    import dataGetters from '../services/dataGetters.js';

    
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
            this.show = await dataGetters.getShowById(this.$route.params.id);
            this.bands = await dataGetters.getBandsByShowId(this.show.id);
        }
    } 
</script>

<style scoped>
    main {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        min-height: 480px;
        gap: 1px;
        justify-content: space-between;
        background-color: var(--default-dark-color);
        border-bottom: 1px solid var(--default-bright-color);
    }

</style>