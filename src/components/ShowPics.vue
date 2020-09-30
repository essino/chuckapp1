<template>
    <div>
        <p class="homeText">
            Show Pics
        </p>
        <table id="event-table">
            <thead>
            <tr>
                <th>Pics</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="pic in pics" :key="pic.id">
                <td>{{ pic.id }}</td>
                <td>{{ pic.name }}</td>
                <td>{{ pic.address }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "ShowPics",
        data() {
            return {
                pics: [],
                pic: {
                    id: '',
                    name: '',
                    address: ''
                }
            }
        },
        async created() {
            try {
                const promise = await axios.get('http://localhost:4000/')
                //const promise = await axios.get('https://my-json-server.typicode.com/essino/fakedb/events1');
                this.pics = promise.data;

            } catch (e) {
                console.error(e)
            }
        }
    }
</script>

<style scoped>

</style>