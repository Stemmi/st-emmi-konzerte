<template>
    <form @submit="postLocation">
        <label for="locname">Name:</label>
        <input type="text" id="locname" name="locname" maxlength="255" size="40" required>
        
        <label for="loccity">Stadt:</label>
        <input type="text" id="loccity" name="loccity" maxlength="255" size="40">
        
        <label for="locurl">Homepage:</label>
        <input type="url" id="locurl" name="locurl" maxlength="255" size="40">
        
        <label for="loclong">Longitude:</label>
        <input type="number" step="0.0000000000000001" min="-180" max="180" id="loclong" name="loclong" size="40">

        <label for="loclat">Latitude:</label>
        <input type="number" step="0.0000000000000001" min="-90" max="90" id="loclat" name="loclat" size="40">
        
        <button type="submit">OK</button>
    </form>
</template>

<script>
    import settings from '../services/settings.js';

    export default {
        data() {
            return {
                apiUrl: settings.apiUrl()
            }
        },
        emits: [
            "new_location_id"
        ],
        methods: {
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
                .then((location) => this.$emit("new_location_id", location.id));
            }
        }

    } 
</script>

<style scoped>
    form {
        background-color: var(--default-brighter-color);
    }
</style>