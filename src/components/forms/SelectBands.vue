<template>
        <NewBandModal :show="+bandId===-1" @newBandId="setNewBandId" />

        <label for="bandId">Weitere Bands:</label>
        
        <select v-model="bandId" id="bandId" name="bandId">
            <option v-for="band of allBands" :key="band.id" :value="band.id">{{ band.name }}</option>
            <option value="-1">+++ Neue Band +++</option>
        </select>
        
        <ul class="bands-text">
            <li v-for="band, index in bandsList" :key="band.id">{{ band.name }}<button class="inline-button" type="button" :data-index="index" @click="removeBand">x</button></li>
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
                bandId: undefined,
            }
        },
        components: {
            NewBandForm, NewBandModal
        },
        emits: [
            "updateBand"
        ],
        props: [
            "selectedBandIds"
        ],
        computed: {
            bandsList() {
                return formatting.createBandsList(this.allBands, this.selectedBandIds);
            }
        },
        watch: {
            bandId(newId, oldId) {
                this.$emit("updateBand", newId);
                if (this.selectedBandIds.includes(this.bandId)) return;
                else if (+this.bandId == -1) return;
                else this.selectedBandIds.push(this.bandId);
            }
        },
        methods: {
            removeBand(event) {
                this.selectedBandIds.splice(event.target.dataset.index, 1);
            },
            async setNewBandId(id) {
                this.selectedBandIds.push(id);
                this.allBands = await api.getBands();
                this.bandId = id;
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
    .inline-button {
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