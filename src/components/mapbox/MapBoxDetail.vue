<template>
    <section id="map">
        <MapboxMap
            access-token="pk.eyJ1Ijoic3RlbW1pIiwiYSI6ImNsZnNjeWV0MDA1MTAzaHNlNzY1OHl5YTgifQ.fDF5EfP2eLcs0DhN1QNKig"
            map-style="mapbox://styles/stemmi/clih8mpqz008801pf2lj32zhd"
            :center="hasCoordinates?[location.long, location.lat]:[10.5,53.5]"
            :zoom="hasCoordinates?12:6">
            <MapboxMarker v-if="hasCoordinates"
                :lng-lat="[location.long, location.lat]"
                color="#ab0000"
                popup >
                <template v-slot:popup>
                    <MapBoxDetailPopup :location="location" />
                </template>
            </MapboxMarker>
        </MapboxMap>
    </section>
</template>

<script>
    import 'mapbox-gl/dist/mapbox-gl.css';
    import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl';
    import MapBoxDetailPopup from './MapBoxDetailPopup.vue';

    export default {
        props: [
            "location"
        ],
        components: {
            MapboxMap,
            MapboxMarker,
            MapBoxDetailPopup
        },
        computed: {
            hasCoordinates() {
                return (this.location.long && this.location.lat);
            }
        }
    }
</script>