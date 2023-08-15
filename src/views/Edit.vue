<template>
    <main>
    <section>
    
    <h3>Eintrag bearbeiten:</h3>
    <button @click="showConfirm=true">
        <DeleteIcon />
        Diese Show Löschen
    </button>
    <ConfirmDeleteShow :show="showConfirm" @is-delete-confirmed="handleDelete"/>
    <ShowForm v-if="show&&bands" :show="show" :bands="bands"  @send-form="putShow" />
    
    </section>
    </main>
</template>

<script>
    import ShowForm from '../components/forms/ShowForm.vue';
    import DeleteIcon from '../components/icons/DeleteIcon.vue';
    import ConfirmDeleteShow from '../components/forms/ConfirmDeleteShow.vue';
    import api from '../services/api';
    import settings from '../services/settings';

    export default {
        components: {
            ShowForm,
            DeleteIcon,
            ConfirmDeleteShow
        },
        data() {
            return {
                apiUrl: settings.apiUrl(),
                show: undefined,
                bands: undefined,
                id: this.$route.params.id,
                showConfirm: false
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
            async handleDelete(isConfirmed) {
                if(isConfirmed) {
                    fetch(this.apiUrl+"/shows/"+this.id, {
                    method: 'DELETE'
                }) 
                .then((response) => response.json())
                .then(() => this.$router.push({ path: `/` }));
                }
                this.showConfirm = false;

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