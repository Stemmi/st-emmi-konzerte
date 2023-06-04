<template>
    <section v-if="locations && latestShowCoordinates" id="map">
        <MapboxMap
            style="height: 100%"
            access-token="pk.eyJ1Ijoic3RlbW1pIiwiYSI6ImNsZnNjeWV0MDA1MTAzaHNlNzY1OHl5YTgifQ.fDF5EfP2eLcs0DhN1QNKig"
            map-style="mapbox://styles/stemmi/clih8mpqz008801pf2lj32zhd"
            :center="hasLatestLocationCoordinates?latestShowCoordinates:[9.956186211022594,53.561359415147024]"
            :zoom="hasLatestLocationCoordinates?12:5">
            <span v-for="location of locations" :key="location.id">
            <MapboxMarker v-if="location.long&&location.lat"
                :lng-lat="[location.long, location.lat]"
                color="#ab0000"
                popup >
                <template v-slot:popup>
                    <MapBoxPopup :location="location" />
                </template>
            </MapboxMarker>
        </span>
        </MapboxMap>
    </section>

    <section v-else class="loading">
        Loading...
    </section>
</template>

<script>
    import 'mapbox-gl/dist/mapbox-gl.css';
    import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl';
    import MapBoxPopup from './MapBoxPopup.vue';
    import api from '../services/api.js';

    export default {
        data() {
            return {
                locations: undefined,
                latestShowCoordinates: undefined
            }
        },
        computed: {
            hasLatestLocationCoordinates() {
                return (this.latestShowCoordinates[0] && this.latestShowCoordinates[1])
            }
        },
        components: {
            MapboxMap,
            MapboxMarker,
            MapBoxPopup
        },
        async mounted() {            
            this.locations = await api.getLocations();
            this.latestShowCoordinates = await api.getLatestLocationPosition();            
        }
    }
</script>

<style lang="css" scoped>
    section {
        min-height: 500px;
        flex: 49%;
    }
</style>