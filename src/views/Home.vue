<template>
    <main>
        <CardContainer />
        <MapBox />
    </main>
</template>

<script>
    import CardContainer from "../components/CardContainer.vue";
    import MapBox from "../components/mapbox/MapBox.vue";
    
    export default {     
        components: {
            CardContainer,
            MapBox
        }
    } 
</script>