<template>
    <form @submit="postShow">
        <label for="title">Titel (optional):</label><br>
        <input type="text" id="title" name="title" maxlength="255" size="40"><br><br>
        
        <label for="location_id">Location:</label><br>
        <select v-model="location_id" v-if="locations" id="location_id" name="location_id" required>
            <option v-for="location of locations" :key="location.id" :value="location.id">{{ [ location.city, location.name ].filter(item => item).join(', ') }}</option>
            <option value="-1">+++ Neue Location +++</option>
        </select><br><br>

        <LocationForm v-if="location_id==='-1'" @new_location_id="updateLocationId"/>

        <label for="date">Datum:</label><br>
        <input type="date" id="date" name="date" size="10" required><br><br>
        
        <label for="text">Beschreibung:</label><br>
        <textarea id="text" name="text" maxlength="255" rows="4" cols="80"></textarea><br><br>
        
        <label for="poster_filename">Plakat-Foto:</label><br>
        <input type="text" id="poster_filename" name="poster_filename" maxlength="255" size="40"><br><br>
        
        <label for="poster_alt">Plakat-Alt-Text:</label><br>
        <input type="text" id="poster_alt" name="poster_alt" maxlength="255" size="40"><br><br>

        <label for="band_id">Weitere Bands:</label><br>
        <select v-model="band_id" v-if="locations" id="band_id" name="band_id">
            <option v-for="band of allBands" :key="band.id" :value="band.id">{{ band.name }}</option>
            <option value="-1">+++ Neue Band +++</option>
        </select>
        <button class="inline_button" type="button" @click="addBand">+</button><br><br>

        <ul class="bands-text">
            <li v-for="band, index in bandsList" :key="band.id">{{ band.name }}<button class="inline_button" type="button" :data-index="index" @click="removeBand">x</button></li>
        </ul><br><br>

        <input type="hidden" id="user_id" name="user_id" value="1">
        
        <button v-if="location_id != -1" type="submit">OK</button>

    </form>
</template>

<script>
    import LocationForm from './LocationForm.vue';
    import formatting from '../services/formatting.js';
    import settings from '../services/settings.js';
    import api from '../services/api.js';


    export default {
        data() {
            return {
                apiUrl: settings.apiUrl(),

                locations: undefined,
                location_id: undefined,
                allBands: undefined,
                selectedBandIds: [],
                band_id: undefined,
            }
        },
        components: {
            LocationForm
        },
        computed: {
            bandsList() {
                return formatting.createBandsList(this.allBands, this.selectedBandIds);
            }
        },
        methods: {
            async updateLocationId(id) {
                this.locations = await api.getLocations();
                this.location_id = id;
            },
            addBand() {
                if (this.selectedBandIds.includes(this.band_id)) return;
                this.selectedBandIds.push(this.band_id);
            },
            removeBand(event) {
                this.selectedBandIds.splice(event.target.dataset.index, 1);
            },
            async postShow(event) {
                event.preventDefault();

                const reqBody = {
                    'title': title.value,
                    'location_id': location_id.value,
                    'date': date.value,
                    'text': text.value,
                    'poster_filename': poster_filename.value,
                    'poster_alt': poster_alt.value,
                    'user_id': user_id.value
                };

                fetch(this.apiUrl+"/shows", {
                    method: 'POST',
                    body: JSON.stringify(reqBody),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                }) 
                .then((response) => response.json())
                .then((show) => this.$router.push({ path: `/detail/${show.id}` }));
            }
        },
        async mounted() {            
            this.locations = await api.getLocations();
            this.allBands = await api.getBands();

        }
    } 
</script>

<style scoped>
    ul {
        list-style-type: none;
        display: flex;
        gap: 10px;
    } 
    .inline_button {
        font-weight: bold;
        display:inline-block;
        margin: auto 5px auto 5px;
        padding: 1px 5px 2px 5px;
    }

    .bands-text {
        background-color: white;
        font-size: 0.9rem;
        color: black;
    }
</style>