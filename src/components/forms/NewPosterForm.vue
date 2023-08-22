<template>
    <form id="poster-form">
        <label for="poster">Plakat (png oder jpg):</label>
        <input @change="submitHandler" type="file" id="poster" name="poster" accept=".jpg, .jpeg, .png" />
        
        <img class="image-preview" v-if="image" :src="posterUrl+image" />
    </form>

</template>

<script>
    import settings from '../../services/settings.js';

    export default {
        data() {
            return {
                uploadPosterUrl: settings.apiUrl()+"/upload/poster",
                posterUrl: settings.imgUrl() + "/posters/",
                image: this.posterFilename
            }
        },
        emits: [ "newPoster" ],
        props: [ "posterFilename" ],
        watch: {
            image(newImage, oldImage) {
                this.$emit("newPoster", newImage);
            }
        },
        methods: {
            submitHandler(event) {

                const formData = new FormData(event.target.form);
                fetch(this.uploadPosterUrl, {
                    method: 'POST',
                    body: formData
                })
                .then((response) => response.json())
                .then((file) => this.image = file.filename);
            }
        }

    } 
</script>

<style scoped>
    .image-preview {
        height: 100px;
        display: block;
        margin-bottom: 10px;
    }
</style>