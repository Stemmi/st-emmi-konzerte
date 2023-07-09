<template>
    <form @submit="submitForm">
        <label for="title">Titel (optional):</label>
        <input v-model="show.title" type="text" id="title" name="title" maxlength="255" size="40" >
        
        <SelectLocation :location_id="locationId" @update-location="handleLocationSelection" />

        <label for="date">Datum:</label>
        <input v-model="date" type="date" id="date" name="date" size="10" required>
   
        <label for="text">Beschreibung:</label>
        <textarea v-model="show.text" id="text" name="text" maxlength="255" rows="4" cols="80"></textarea>
        
        <NewPosterForm :poster_filename="posterFilename" @changed_input="handlePosterInputChange" @new_poster="handleNewPoster"/>
        
        <label for="poster_alt">Plakat-Alt-Text:</label>
        <input v-model="show.poster.alt" type="text" id="poster_alt" name="poster_alt" maxlength="255" size="40">

        <SelectBands :selected_band_ids="selectedBandIds" @update-band="handleBandSelection" />

        <input type="hidden" id="user_id" name="user_id" value="1">
        
        <div class="form-button-container">
            <button :disabled="isOkButtonDisabled" type="submit">OK</button>
            <button :disabled="isOkButtonDisabled" type="button" @click="handleCancel">Abbrechen</button>
        </div>

    </form>
</template>

<script>
    import SelectLocation from './SelectLocation.vue';
    import NewPosterForm from './NewPosterForm.vue';
    import SelectBands from './SelectBands.vue';
    import settings from '../services/settings.js';

    export default {
        data() {
            return {
                date: this.show.date ? this.show.date.split('T')[0] : undefined,
                apiUrl: settings.apiUrl(),
                locationId: this.show.location.id,
                bandId: undefined,
                selectedBandIds: this.bands.map((band) => band.id),
                hasPosterInputChanged: false,
                posterFilename: this.show.poster.filename || ''
            }
        },
        computed: {
            isOkButtonDisabled() {
                return this.locationId == -1 || this.bandId == -1 || this.hasPosterInputChanged;
            }
        },
        components: {
            SelectLocation, NewPosterForm, SelectBands
        },
        emits: [ "send-form" ],
        props: [ "show", "bands" ],
        methods: {
            handleLocationSelection(value) {
                this.locationId = +value;
            },
            handleBandSelection(value) {
                this.bandId = +value;
            },
            handlePosterInputChange(changed) {
                this.hasPosterInputChanged = changed;
            },
            handleNewPoster(filename) {
                this.posterFilename = filename;
            },
            handleCancel() {
                this.$router.back();
            },
            async submitForm(event) {
                event.preventDefault();

                const reqBody = {
                    'title': title.value,
                    'location_id': this.locationId.toString(),
                    'date': date.value,
                    'text': text.value,
                    'poster_filename': this.posterFilename,
                    'poster_alt': poster_alt.value,
                    'bands': this.selectedBandIds.map((id) => id.toString()),
                    'user_id': user_id.value
                };

                this.$emit("send-form", reqBody);
                event.target.reset();
            }
        }
    } 
</script>
    
<style scoped>

</style>