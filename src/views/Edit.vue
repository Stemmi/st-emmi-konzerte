<template>
    <main>
    <section>
    
    <h3>Eintrag bearbeiten:</h3>
    <button @click="handleDelete">
        <DeleteIcon />
        Diese Show Löschen
    </button>
    <ShowForm v-if="show&&bands" :show="show" :bands="bands"  @sendForm="putShow" />
    
    </section>
    </main>
</template>

<script>
    import ShowForm from '../components/forms/ShowForm.vue';
    import DeleteIcon from '../components/icons/DeleteIcon.vue';
    import api from '../services/api';
    import settings from '../services/settings';

    export default {
        components: {
    ShowForm,
    DeleteIcon
},
        data() {
            return {
                apiUrl: settings.apiUrl(),
                show: undefined,
                bands: undefined,
                id: this.$route.params.id
            }
        },
        methods: {
            async putShow(reqBody) {
                reqBody.id = this.id;
                fetch(this.apiUrl+"/shows/"+this.id, {
                    method: 'PUT',
                    body: JSON.stringify(reqBody),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                }) 
                .then((response) => response.json())
                .then((show) => this.$router.push({ path: `/detail/${show.id}` }));
            },
            async handleDelete() {
                const isDeleteOk = confirm("Soll diese Show gelöscht werden?");
                // DON'T USE CONFIRM HERE, MAKE IT NICER
                if(isDeleteOk) {
                    fetch(this.apiUrl+"/shows/"+this.id, {
                    method: 'DELETE'
                }) 
                .then((response) => response.json())
                .then(() => this.$router.push({ path: `/` }));
                }
            }
        },
        async mounted() {
            this.show = await api.getShowById(this.$route.params.id);
            this.bands = await api.getBandsByShowId(this.show.id);
        }
    }  
</script>

<style scoped>
    h3 {
        margin-bottom: 20px;
    }
    button {
        margin-bottom: 20px;
    }

    section {
        width: 100%;
    }
</style>