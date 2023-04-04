<template>
    <section id="map">
        <MapboxMap
            style="height: 100%"
            access-token="pk.eyJ1Ijoic3RlbW1pIiwiYSI6ImNsZnNjeWV0MDA1MTAzaHNlNzY1OHl5YTgifQ.fDF5EfP2eLcs0DhN1QNKig"
            map-style="mapbox://styles/mapbox/streets-v12"
            :center="[10.004522218291346, 53.58301762220104]"
            :zoom="8">
            <MapboxMarker :lng-lat="[9.303324603170019, 53.747435117712484]" />
            <MapboxMarker :lng-lat="[10.705824640619618, 53.37610229130491]" />
        </MapboxMap>
    </section>
</template>

<script>
    import 'mapbox-gl/dist/mapbox-gl.css';
    import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl';

    export default {
        components: {
            MapboxMap,
            MapboxMarker
        }
    }
</script>

<style lang="css" scoped>
    section {
        flex: 49%;
        padding: 10px;
    }
</style>