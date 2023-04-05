<template>
    <div class="loading" v-if="!shows || !locations">
        Loading...
    </div>

    <main v-else>
        <CardContainer :shows="shows" :locations="locations" :authors="authors" />
        <MapBox :shows="shows" :locations="locations" :authors="authors" />
    </main>
</template>

<script>
    import CardContainer from "../components/CardContainer.vue";
    import MapBox from "../components/MapBox.vue";
    
    export default {
        data() {
            return {
                shows: undefined,
                locations: undefined,
                authors: undefined
            }
        },
        components: {
            CardContainer,
            MapBox
        },
        async mounted() {
            const showsResponse = await fetch("./data/shows.json");
            const showsResult = await showsResponse.json();
            this.shows = showsResult.shows;
            const locationsResponse = await fetch("./data/locations.json");
            const locationsResult = await locationsResponse.json();
            this.locations = locationsResult.locations;
            const authorsResponse = await fetch("./data/authors.json");
            const authorsResult = await authorsResponse.json();
            this.authors = authorsResult.authors;
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