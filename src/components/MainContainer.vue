<template>
    <main>
        <PreviewContainer :shows="shows" />
        <MapBox />
    </main>
</template>

<script>
    import PreviewContainer from "./PreviewContainer.vue";
    import MapBox from "./MapBox.vue";
    
    export default {
        data() {
            return {
                shows: undefined
            }
        },
        components: {
            PreviewContainer,
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
        gap: 2px;
        justify-content: space-between;
        margin-top: 2px;
    }
</style>