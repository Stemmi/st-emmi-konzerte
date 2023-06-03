<template>
    <form @submit="postShow">
        <label for="title">Titel (optional):</label><br>
        <input type="text" id="title" name="title" maxlength="255" size="40"><br><br>
        
        <SelectLocation :location_id="locationId" @update-location="handleLocationSelection" />

        <label for="date">Datum:</label><br>
        <input type="date" id="date" name="date" size="10" required><br><br>
        
        <label for="text">Beschreibung:</label><br>
        <textarea id="text" name="text" maxlength="255" rows="4" cols="80"></textarea><br><br>
        
        <NewImageForm />

        <label for="poster_filename">Plakat-Foto:</label><br>
        <input type="text" id="poster_filename" name="poster_filename" maxlength="255" size="40"><br><br>
        
        <label for="poster_alt">Plakat-Alt-Text:</label><br>
        <input type="text" id="poster_alt" name="poster_alt" maxlength="255" size="40"><br><br>

        <SelectBands :selected_band_ids="selectedBandIds" @update-band="handleBandSelection" />

        <input type="hidden" id="user_id" name="user_id" value="1">
        
        <button v-if="locationId!=-1&&bandId!=-1" type="submit">OK</button>
    </form>
</template>

<script>
    import SelectLocation from './SelectLocation.vue';
    import NewImageForm from './NewImageForm.vue';
    import SelectBands from './SelectBands.vue';
    import settings from '../services/settings.js';

    export default {
        data() {
            return {
                apiUrl: settings.apiUrl(),
                locationId: undefined,
                bandId: undefined,
                selectedBandIds: []
            }
        },
        components: {
            SelectLocation, NewImageForm, SelectBands
        },
        methods: {
            handleLocationSelection(value) {
                this.locationId = +value;
            },
            handleBandSelection(value) {
                this.bandId = +value;
            },
            async postShow(event) {
                event.preventDefault();

                const reqBody = {
                    'title': title.value,
                    'location_id': this.locationId.toString(),
                    'date': date.value,
                    'text': text.value,
                    'poster_filename': poster_filename.value,
                    'poster_alt': poster_alt.value,
                    'bands': this.selectedBandIds.map((id) => id.toString()),
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
        }
    } 
</script>

<style scoped>
    
</style>