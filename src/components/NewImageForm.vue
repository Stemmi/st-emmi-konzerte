<template>
    <form id="poster_form" @submit="submitHandler">
        <label for="poster">Bitte wähle Plakat zum Hochladen aus (png oder jpg):</label><br>
        <input type="file" id="poster" name="poster" accept=".jpg, .jpeg, .png" /><br><br>
        
        <button>OK</button><br>

        <img v-if="image" :src="posterUrl+image" />
        <p>{{ image }}</p>

    </form>

</template>

<script>
    import settings from '../services/settings.js';

    export default {
        data() {
            return {
                uploadPosterUrl: settings.apiUrl()+"/upload/poster",
                posterUrl: settings.imgUrl() + "/posters/",
                image: undefined
            }
        },
        emits: [

        ],
        methods: {
            submitHandler(event) {
                event.preventDefault();
                const formData = new FormData(poster_form);
                fetch(this.uploadPosterUrl, {
                    method: 'POST',
                    body: formData
                })
                .then((response) => response.json())
                .then((file) => this.image = file.filename);
            }

            // async postImage(event) {
            //     event.preventDefault();
            //     console.log(event.target.image.files[0]);

            //     // const reqBody = {
            //     //     'name': bandname.value,
            //     //     'url': bandurl.value
            //     // };

            //     // fetch(this.apiUrl+"/bands", {
            //     //     method: 'POST',
            //     //     body: JSON.stringify(reqBody),
            //     //     headers: {
            //     //         'Content-type': 'application/json; charset=UTF-8'
            //     //     },
            //     // }) 
            //     // .then((response) => response.json())
            //     // .then((band) => this.$emit("new_band_id", band.id));
            // },
            // changeImage(event) {
            //     console.log(event.target.files[0]);
            // }
        }

    } 
</script>

<style scoped>

</style>