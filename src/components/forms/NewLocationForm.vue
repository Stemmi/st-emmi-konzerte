<template>
    <form @submit="postLocation">
        <label for="locname">Name:</label>
        <input type="text" id="locname" name="locname" maxlength="255" size="40" required>
        
        <label for="loccity">Stadt:</label>
        <input type="text" id="loccity" name="loccity" maxlength="255" size="40">
        
        <label for="locurl">Homepage:</label>
        <input type="url" id="locurl" name="locurl" maxlength="255" size="40">
        
        <label for="loclong">Longitude:</label>
        <input type="number" step="0.0000000000000001" min="-180" max="180" id="loclong" name="loclong" size="40" @paste="pasteLatLong" :value="longValue">

        <label for="loclat">Latitude:</label>
        <input type="number" step="0.0000000000000001" min="-90" max="90" id="loclat" name="loclat" size="40" @paste="pasteLatLong" :value="latValue">
        
        <div class="form-button-container">
            <button type="submit">OK</button>
            <button type="button" @click="handleCancel">Abbrechen</button>
        </div>

    </form>
</template>

<script>
    import settings from '../../services/settings.js';

    export default {
        data() {
            return {
                apiUrl: settings.apiUrl(),
                longValue: undefined,
                latValue: undefined
            }
        },
        emits: [
            "newLocationId"
        ],
        methods: {
            handleCancel() {
                this.$emit("newLocationId", undefined);
            },
            async postLocation(event) {
                event.preventDefault();

                const reqBody = {
                    'name': locname.value,
                    'city': loccity.value,
                    'url': locurl.value,
                    'long': loclong.value,
                    'lat': loclat.value
                };

                fetch(this.apiUrl+"/locations", {
                    method: 'POST',
                    body: JSON.stringify(reqBody),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                }) 
                .then((response) => response.json())
                .then((location) => this.$emit("newLocationId", location.id))
                .then(event.target.reset());
            },
            pasteLatLong(event) {
                event.preventDefault();
                const paste = (event.clipboardData || window.clipboardData).getData("text");
                if (paste.includes(',')) {
                    const coordinates = paste.split(',');
                    this.latValue = +coordinates[0].trim();
                    this.longValue = +coordinates[1].trim();
                } else {
                    if (typeof(+paste) === "number") {
                        event.target.value = paste
                    } 
                }
            }
        }

    } 
</script>

<style scoped>

</style>