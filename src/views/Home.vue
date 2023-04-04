<template>
    <div class="loading" v-if="!shows">
        Loading...
    </div>

    <main v-else>
        <CardContainer :shows="shows" />
        <MapBox />
    </main>
</template>

<script>
    import CardContainer from "../components/CardContainer.vue";
    import MapBox from "../components/MapBox.vue";
    
    export default {
        data() {
            return {
                shows: undefined
            }
        },
        components: {
            CardContainer,
            MapBox
        },
        async mounted() {
            const response = await fetch("./data/shows.json");
            const result = await response.json();
            this.shows = result.shows;
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