<template>
    <main v-if="shows && locations">
        <CardContainer :shows="shows" :locations="locations" :users="users" />
        <MapBox :shows="shows" :locations="locations" :users="users" />
    </main>

    <main v-else class="loading">
        Loading...
    </main>
</template>

<script>
    import CardContainer from "../components/CardContainer.vue";
    import MapBox from "../components/MapBox.vue";
    import dataGetters from "../services/dataGetters.js";
    
    export default {
        data() {
            return {
                shows: undefined,
                locations: undefined,
                users: undefined
            }
        },
        components: {
            CardContainer,
            MapBox
        },
        async mounted() {
            this.shows = await dataGetters.getShows();
            this.locations = await dataGetters.getLocations();
            this.users = await dataGetters.getUsers();
        }
    } 
</script>

<style scoped>
    main {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 1px;
        justify-content: space-between;
        background-color: var(--default-dark-color);
        border-bottom: 1px solid var(--default-bright-color);
    }

</style>