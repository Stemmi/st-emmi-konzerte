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
                        <MapBoxPopupOneShow :show="location.shows[0]" :location="location" :author="getAuthor(location.shows[0].authorId)"/>
                    </div>
                    <div v-else>
                        <p>{{ location.shows }}</p>
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

    export default {
        data() {
            return {
                locationsWithShows: []
            }
        },
        components: {
            MapboxMap,
            MapboxMarker,
            MapBoxPopupOneShow
        },
        props: [
            "shows",
            "locations",
            "authors"
        ],
        computed: {
            latestShowCoordinates() {
                const showsWithValidDate = this.shows.filter(show => show.date);
                const latest = showsWithValidDate.reduce((prev, curr) => (prev.date > curr.date) ? prev : curr);
                return [this.locations[latest.locationId].long, this.locations[latest.locationId].lat];
            }
        },
        methods: {
            getAuthor(id) {
            if (!this.authors) return undefined;
            const filtered = this.authors.filter(aut => aut.id === id);
            if (!filtered.length) return undefined;
            return filtered[0];
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