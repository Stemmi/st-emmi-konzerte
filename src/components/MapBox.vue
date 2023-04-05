<template>
    <section id="map">
        <MapboxMap
            style="height: 100%"
            access-token="pk.eyJ1Ijoic3RlbW1pIiwiYSI6ImNsZnNjeWV0MDA1MTAzaHNlNzY1OHl5YTgifQ.fDF5EfP2eLcs0DhN1QNKig"
            map-style="mapbox://styles/mapbox/streets-v11"
            :center="[locations[latestShow.locationId].long, locations[latestShow.locationId].lat]"
            :zoom="6">
            <MapboxMarker
                v-for="location of locations"
                :lng-lat="[location.long, location.lat]"
                popup >
                    <template v-slot:popup>
                        <p>Hello world!</p>
                    </template>
            </MapboxMarker>
        </MapboxMap>
    </section>
</template>

<script>
    import 'mapbox-gl/dist/mapbox-gl.css';
    import { MapboxMap, MapboxMarker, MapboxPopup } from '@studiometa/vue-mapbox-gl';

    export default {
        components: {
            MapboxMap,
            MapboxMarker
        },
        props: [
            "shows",
            "locations"
        ],
        computed: {
            latestShow() {
                const showsWithValidDate = this.shows.filter(show => show.date);
                return showsWithValidDate.reduce((prev, curr) => (prev.date > curr.date) ? prev : curr);
            }
        }
    }
</script>

<style lang="css" scoped>
    section {
        flex: 49%;
        padding: 10px;
    }


</style>