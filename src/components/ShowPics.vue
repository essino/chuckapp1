<template>
  <div>
<br>
    <h2>Search pics by filter</h2>
      <br>
    <div id="pic-form" @submit.prevent="showPics">
      <form>
        <p>
          <label>Choose the cuteness level of the pics </label>
          <br>
          <input type="radio" id="adorable" value="Adorable" v-model="selectCuteness">
          <label for="adorable">Adorable </label>
          <input type="radio" id="lovely" value="Lovely" v-model="selectCuteness">
          <label for="lovely">Lovely </label>
          <input type="radio" id="supercute" value="Supercute" v-model="selectCuteness">
          <label for="supercute">Supercute </label>
          <input type="radio" id="incredible" value="Incredible" v-model="selectCuteness">
          <label for="incredible">Incredible </label>
          <input type="radio" id="chuckNorris" value="ChuckNorris" v-model="selectCuteness">
          <label for="chuckNorris">Chuck Norris </label>
        </p>
          <br>
        <button>Search Pics</button>
      </form>
    </div>
    <br>



    <div>
      <div  v-for="pic in pics" :key="pic._id">
          <div id="picPic">
              <img :src="pic.address" />
              <br>{{ pic._id }} {{ pic.name }}
          </div>
        <br>
      </div>
    </div>

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
        _id: '',
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

<style>
/*
#picPic{

  float: left;
  background-color: darkorchid;
  width: 500px;
}

img {
  height: auto;
  width:500px;
    background-color: darkorchid;
}
div {
    background-color: darkorchid;
}
*/

</style>