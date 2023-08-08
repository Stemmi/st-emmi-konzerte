<template>
    <form id="poster_form" @submit="submitHandler">
        <label for="poster">Plakat (png oder jpg):</label>
        <input @change="changedHandler" type="file" id="poster" name="poster" accept=".jpg, .jpeg, .png" />
        
        <img class="image_preview" v-if="image&&!changed" :src="posterUrl+image" />

        <div class="form-button-container" v-if="changed">
            <button >OK</button>
            <button type="reset" @click="handleCancel">Abbrechen</button>
        </div>
        


    </form>

</template>

<script>
    import settings from '../../services/settings.js';

    export default {
        data() {
            return {
                uploadPosterUrl: settings.apiUrl()+"/upload/poster",
                posterUrl: settings.imgUrl() + "/posters/",
                changed: false,
                image: this.poster_filename
            }
        },
        emits: [
            "changed_input", "new_poster"
        ],
        props: [ "poster_filename" ],
        watch: {
            changed(newValue, oldValue) {
                this.$emit("changed_input", newValue);
            },
            image(newImage, oldImage) {
                this.$emit("new_poster", newImage);
            }
        },
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
            },
            handleCancel() {
                this.changed = false;
            }
        }

    } 
</script>

<style scoped>
    .image_preview {
        height: 100px;
        display: block;
        margin-bottom: 10px;
    }
</style>