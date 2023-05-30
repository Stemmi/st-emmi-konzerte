<template>
    <form @submit="postBand">
        <label for="bandname">Name:</label><br>
        <input type="text" id="bandname" name="bandname" maxlength="255" size="40" required><br><br>
        
        <label for="bandurl">Homepage:</label><br>
        <input type="url" id="bandurl" name="bandurl" maxlength="255" size="40"><br><br>
        
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
            "new_band_id"
        ],
        methods: {
            async postBand(event) {
                event.preventDefault();

                const reqBody = {
                    'name': bandname.value,
                    'url': bandurl.value
                };

                fetch(this.apiUrl+"/bands", {
                    method: 'POST',
                    body: JSON.stringify(reqBody),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                }) 
                .then((response) => response.json())
                .then((band) => this.$emit("new_band_id", band.id));
            }
        }

    } 
</script>

<style scoped>
    form {
        background-color: var(--default-brighter-color);
    }
</style>