<template>
        <NewBandModal :show="+band_id===-1" @new-band-id="setNewBandId" />

        <label for="band_id">Weitere Bands:</label>
        
        <select v-model="band_id" id="band_id" name="band_id">
            <option v-for="band of allBands" :key="band.id" :value="band.id">{{ band.name }}</option>
            <option value="-1">+++ Neue Band +++</option>
        </select>
        
        <ul class="bands-text">
            <li v-for="band, index in bandsList" :key="band.id">{{ band.name }}<button class="inline_button" type="button" :data-index="index" @click="removeBand">x</button></li>
        </ul>
</template>

<script>
    import NewBandForm from './NewBandForm.vue';
    import NewBandModal from './NewBandModal.vue';
    import formatting from '../../services/formatting.js';
    import api from '../../services/api.js';

    export default {
        data() {
            return {
                allBands: undefined,
                band_id: undefined,
            }
        },
        components: {
            NewBandForm, NewBandModal
        },
        emits: [
            "updateBand"
        ],
        props: [
            "selected_band_ids"
        ],
        computed: {
            bandsList() {
                return formatting.createBandsList(this.allBands, this.selected_band_ids);
            }
        },
        watch: {
            band_id(newId, oldId) {
                this.$emit("updateBand", newId);
                if (this.selected_band_ids.includes(this.band_id)) return;
                else if (+this.band_id == -1) return;
                else this.selected_band_ids.push(this.band_id);
            }
        },
        methods: {
            removeBand(event) {
                this.selected_band_ids.splice(event.target.dataset.index, 1);
            },
            async setNewBandId(id) {
                this.selected_band_ids.push(id);
                this.allBands = await api.getBands();
                this.band_id = id;
            }
        },
        async mounted() {            
            this.allBands = await api.getBands();
        }
    } 
</script>

<style scoped>
    ul {
        list-style-type: none;
        display: flex;
        gap: 10px;
    } 
    .inline_button {
        font-weight: bold;
        display:inline-block;
        margin: auto 5px auto 5px;
        padding: 1px 5px 2px 5px;
    }

    .bands-text {
        padding: 5px;
        font-size: 0.9rem;
        color: black;
        margin-bottom: 10px;
    }
</style>