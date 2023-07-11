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