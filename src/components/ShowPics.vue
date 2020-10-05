<template>
    <div>
        <p class="homeText">
            Show Pics
        </p>
        <table id="event-table">
            <thead>
            <tr>
                <th>Pics</th>
             <div id="pic-form" @submit.prevent="showPics">
              <form>
              <p>
                <label>What is the cuteness level of the animal?</label>
                <input type="radio" id="adorable" value="Adorable" v-model="selectCuteness">
                <label for="adorable">Adorable</label>
                <input type="radio" id="lovely" value="Lovely" v-model="selectCuteness">
                <label for="lovely">Lovely</label>
                <input type="radio" id="supercute" value="Supercute" v-model="selectCuteness">
                <label for="supercute">Supercute</label>
                <input type="radio" id="incredible" value="Incredible" v-model="selectCuteness">
                <label for="incredible">Incredible</label>
                <input type="radio" id="chuckNorris" value="ChuckNorris" v-model="selectCuteness">
                <label for="chuckNorris">Chuck Norris</label>
              </p>
              <button>Add Pic</button>
              </form>
             </div>
            </tr>
            </thead>
            <tbody>
            <tr v-for="pic in pics" :key="pic.id">
                <td>{{ pic.id }}</td>
                <td>{{ pic.name }}</td>
                <td>{{ pic.address }}</td>
                <td><img :src="pic.address" /></td>

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
          selectCuteness: "",
          pics: [],
          pic: {
            id: '',
            name: '',
            address: ''
          }
        }
      },

      async created() {


        {
          console.log(this.selectCuteness);
          try {
            console.log(this.selectCuteness);
            {
              const promise = await axios.get('http://localhost:4000/items/');
              //const promise = await axios.get('https://my-json-server.typicode.com/essino/fakedb/events1');
              this.pics = promise.data;

            }/*else {
                const promise =  axios.get('http://localhost:4000/cutenesses/' + this.selectCuteness);
                //const promise = await axios.get('https://my-json-server.typicode.com/essino/fakedb/events1');
                console.log("Menen tänne vaikka ei pitäisi")
                this.pics = promise.data;
              }*/


          } catch (e) {
            console.error(e)
          }
        }
      },
      methods: {
        async showPics() {
           {

              const promise = await axios.get('http://localhost:4000/cutenesses/' + this.selectCuteness);
              //const promise = await axios.get('https://my-json-server.typicode.com/essino/fakedb/events1');

              this.pics = promise.data;
          }
        }
        //}
      }
    }

</script>

<style scoped>

</style>