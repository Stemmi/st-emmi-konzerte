<template>
    <main>
        <CardContainer />
        <MapBox />
    </main>
</template>

<script>
    import CardContainer from "../components/CardContainer.vue";
    import MapBox from "../components/MapBox.vue";
    
    export default {
        components: {
            CardContainer,
            MapBox
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