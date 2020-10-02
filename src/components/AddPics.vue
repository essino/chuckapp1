<template>
    <div>
        <p class="homeText">
            Add Pics
        </p>
        <div id="pic-form" @submit.prevent="addPic">
            <form>
               <label>Id</label>
                <input v-model="id" type="text" />
                <label>Name</label>
                <input v-model="name" type="text" />
                <label>Address</label>
                <input v-model="address" type="text" />
                <button>Add Pic</button>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "AddPics",
        data() {
            return {
                id: '',
                name: '',
                address: '',
                newPic: {
                    id: '',
                    name: '',
                    address: ''
                }
            }
        },
        methods: {
            addPic(){
                //this.newPic.id = this.id;
                this.newPic.name = this.name;
                this.newPic.address = this.address;
                //this.newTask.done = Boolean(JSON.parse(this.picked));
                axios.post('http://localhost:4000/items', this.newPic)
                    .then(res => {
                            console.log(res);
                            this.id = '';
                            this.name = '';
                            this.address = '';
                        }
                    )
            }
        }
    }
</script>

<style scoped>

</style>