<template>
    <form @submit="postBand">
        <label for="bandname">Name:</label>
        <input type="text" id="bandname" name="bandname" maxlength="255" size="40" required>
        
        <label for="bandurl">Homepage:</label>
        <input type="url" id="bandurl" name="bandurl" maxlength="255" size="40">
        
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
                .then((band) => this.$emit("new_band_id", band.id))
                .then(event.target.reset());
            }
        }

    } 
</script>

<style scoped>
    form {
        background-color: var(--default-brighter-color);
    }
</style>