<template>
    <form @submit="submitForm">
        <label for="title">Titel (optional):</label>
        <input v-model="show.title" type="text" id="title" name="title" maxlength="255" size="40" >
        
        <SelectLocation :locationId="locationId" @updateLocation="handleLocationSelection" />

        <label for="date">Datum:</label>
        <input v-model="date" type="date" id="date" name="date" size="10" required>
   
        <label for="text">Beschreibung:</label>
        <textarea v-model="show.text" id="text" name="text" maxlength="255" rows="4" cols="80"></textarea>
        
        <NewPosterForm :posterFilename="posterFilename" @newposter="handleNewPoster"/>
        
        <label for="posterAlt">Plakat-Alt-Text:</label>
        <input v-model="show.poster.alt" type="text" id="posterAlt" name="posterAlt" maxlength="255" size="40">

        <SelectBands :bandIds="bandIds" @updateBandIds="handleBandsUpdate" />

        <input type="hidden" id="userId" name="userId" value="1">
        
        <div class="form-button-container">
            <button type="submit">OK</button>
            <button type="button" @click="handleCancel">Abbrechen</button>
        </div>
    </form>
</template>

<script>
    import SelectLocation from './SelectLocation.vue';
    import NewPosterForm from './NewPosterForm.vue';
    import SelectBands from './SelectBands.vue';
    import settings from '../../services/settings.js';

    export default {
        data() {
            return {
                date: this.show.date ? this.show.date.split('T')[0] : undefined,
                apiUrl: settings.apiUrl(),
                locationId: this.show.location.id,
                bandIds: this.bands.map((band) => band.id),
                posterFilename: this.show.poster.filename || ''
            }
        },
        components: {
            SelectLocation, NewPosterForm, SelectBands
        },
        emits: [ "sendForm" ],
        props: [ "show", "bands" ],
        methods: {
            handleLocationSelection(value) {
                this.locationId = +value;
            },
            handleBandsUpdate(ids) {
                this.bandIds = ids;
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
                    'poster_alt': posterAlt.value,
                    'bands': this.bandIds.map((id) => id.toString()),
                    'user_id': userId.value
                };

                this.$emit("sendForm", reqBody);
                event.target.reset();
            }
        }
    } 
</script>
    
<style scoped>

</style>