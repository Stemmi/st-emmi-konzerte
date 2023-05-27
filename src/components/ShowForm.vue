<template>
    <form @submit="postShow">
        <label for="title">Titel (optional):</label><br>
        <input type="text" id="title" name="title" maxlength="255" size="40"><br><br>
        
        <label for="location_id">Location:</label><br>
        <select v-model="location_id" v-if="locations" id="location_id" name="location_id" required>
            <option v-for="location of locations" :key="location.id" :value="location.id">{{ [location.name, location.city].filter(item => item).join(', ') }}</option>
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

        <input type="hidden" id="user_id" name="user_id" value="1">
        
        <button type="submit">OK</button>

    </form>
</template>

<script>
    import settings from '../services/settings.js';
    import api from '../services/api.js';
    import LocationForm from './LocationForm.vue';

    export default {
        data() {
            return {
                apiUrl: settings.apiUrl(),

                locations: undefined,
                location_id: undefined
            }
        },
        components: {
            LocationForm
        },
        methods: {
            async updateLocationId(id) {
                this.locations = await api.getLocations();
                this.location_id = id;
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
        }
    } 
</script>

<style scoped>

</style>