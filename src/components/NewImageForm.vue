<template>
    <form id="poster_form" @submit="submitHandler">
        <label for="poster">Plakat (png oder jpg):</label>
        <input @change="changedHandler" type="file" id="poster" name="poster" accept=".jpg, .jpeg, .png" />
        
        <img class="image_preview" v-if="image" :src="posterUrl+image" />

        <button v-if="changed">OK</button><br>

    </form>

</template>

<script>
    import settings from '../services/settings.js';

    export default {
        data() {
            return {
                uploadPosterUrl: settings.apiUrl()+"/upload/poster",
                posterUrl: settings.imgUrl() + "/posters/",
                changed: false,
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
                this.changed = false;
            },
            changedHandler() {
                this.changed = true;
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
    .image_preview {
        height: 100px;
        display: block;
    }
</style>