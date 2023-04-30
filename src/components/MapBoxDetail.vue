<template>
    <section id="map">
        <MapboxMap
            style="height: 100%"
            access-token="pk.eyJ1Ijoic3RlbW1pIiwiYSI6ImNsZnNjeWV0MDA1MTAzaHNlNzY1OHl5YTgifQ.fDF5EfP2eLcs0DhN1QNKig"
            map-style="mapbox://styles/mapbox/streets-v11"
            :center="[location.long, location.lat]"
            :zoom="14">
            <MapboxMarker
                :lng-lat="[location.long, location.lat]"
                color="#ab0000"
                popup >
                <template v-slot:popup>
                    <MapBoxPopup :location="location" />
                </template>
            </MapboxMarker>
        </MapboxMap>
    </section>
</template>

<script>
    import 'mapbox-gl/dist/mapbox-gl.css';
    import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl';
    import MapBoxPopup from './MapBoxPopup.vue';

    export default {
        props: [
            "location"
        ],
        components: {
            MapboxMap,
            MapboxMarker,
            MapBoxPopup
        }
    }
</script>

<style lang="css" scoped>
    section {
        min-height: 500px;
        flex: 49%;
        padding: 10px;
    }
</style>