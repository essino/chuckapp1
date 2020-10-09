<template>
  <div>
<br>
    <h2>Search pics by filter</h2>
      <br>

    <div id="pic-form" @submit.prevent="showPics">
        <!-- A form with which the UI user can filter the pics-->
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

    <!-- Shows the pictures with their id numbers and names-->
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
    /**getting axios to use with the REST API requests */
import axios from 'axios';
/** Declaring components */
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
    /**API call to get all the items from the database */
  async created() {
    {
      try {
        {
          const promise = await axios.get('http://localhost:4000/items/');
          this.pics = promise.data;
        }
      } catch (e) {
        console.error(e)
      }
    }
  },
    /**API call to get the filtered items from the database */
  methods: {
    async showPics() {
      {
        const promise = await axios.get('http://localhost:4000/cutenesses/' + this.selectCuteness);
        this.pics = promise.data;
      }
    }
  }
}
</script>

<style>

</style>