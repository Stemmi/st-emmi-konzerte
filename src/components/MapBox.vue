<template>
    <section id="map">
        <MapboxMap
            style="height: 100%"
            access-token="pk.eyJ1Ijoic3RlbW1pIiwiYSI6ImNsZnNjeWV0MDA1MTAzaHNlNzY1OHl5YTgifQ.fDF5EfP2eLcs0DhN1QNKig"
            map-style="mapbox://styles/mapbox/streets-v11"
            :center="latestShowCoordinates"
            :zoom="6">
            <span v-for="location of locationsWithShows" :key="location.id">
            <MapboxMarker
                :lng-lat="[location.long, location.lat]"
                color="#ab0000"
                popup >
                <template v-slot:popup>
                    <div v-if="location.shows.length === 1">
                        <MapBoxPopupOneShow :show="location.shows[0]" :location="location" :user="getUser(location.shows[0].userId)"/>
                    </div>
                    <div v-else>
                        <MapBoxPopupMultipleShows :show="location.shows[0]" :location="location"/>
                    </div>
                    
                </template>
            </MapboxMarker>
        </span>
        </MapboxMap>
    </section>
</template>

<script>
    import 'mapbox-gl/dist/mapbox-gl.css';
    import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl';
    import MapBoxPopupOneShow from './MapBoxPopupOneShow.vue';
    import MapBoxPopupMultipleShows from './MapBoxPopupMultipleShows.vue';
    import dataGetters from '../services/dataGetters.js';

    export default {
        data() {
            return {
                locationsWithShows: []
            }
        },
        components: {
            MapboxMap,
            MapboxMarker,
            MapBoxPopupOneShow,
            MapBoxPopupMultipleShows
        },
        props: [
            "shows",
            "locations",
            "users"
        ],
        computed: {
            latestShowCoordinates() {
                const showsWithValidDate = this.shows.filter(show => show.date);
                const latest = showsWithValidDate.reduce((prev, curr) => (prev.date > curr.date) ? prev : curr);
                return [this.locations[latest.locationId].long, this.locations[latest.locationId].lat];
            }
        },
        methods: {
            getUser(id) {
                return dataGetters.getUserById(id, this.users);
            }
        },
        mounted() {
            for (let location of this.locations) {
                const currentShows = this.shows.filter(show => show.locationId === location.id);
                if (!currentShows.length) continue;
                this.locationsWithShows.push(
                    {
                        ...location,
                        shows: currentShows
                    }
                );
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