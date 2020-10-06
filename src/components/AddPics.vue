<template>
  <div>
    <p class="homeText">
      Add Pics
    </p>
    <div id="pic-form" @submit.prevent="addPic">
      <form>
        <p>
          <br>
          <label><h2>What is the cuteness level of the animal?</h2></label>
          <br>
          <input type="radio" id="adorable" value="Adorable" v-model="cuteness">
          <label for="adorable">Adorable</label>
          <input type="radio" id="lovely" value="Lovely" v-model="cuteness">
          <label for="lovely">Lovely</label>
          <input type="radio" id="supercute" value="Supercute" v-model="cuteness">
          <label for="supercute">Supercute</label>
          <input type="radio" id="incredible" value="Incredible" v-model="cuteness">
          <label for="incredible">Incredible</label>
          <input type="radio" id="chuckNorris" value="ChuckNorris" v-model="cuteness">
          <label for="chuckNorris">Chuck Norris</label>
        </p>
        <p>
          <label>The animal's name</label>
          <input v-model="name" type="text" />
        </p>
        <p>
          <label>The link</label>
          <input v-model="address" type="text" />
        </p>
        <p><img :src="address" alt="This isn't cute pic!"/></p>
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
      cuteness: '',
      name: '',
      address: '',
      newPic: {
        cuteness: '',
        name: '',
        address: ''
      }
    }
  },
  methods: {
    addPic(){
      this.newPic.cuteness = this.cuteness;
      this.newPic.name = this.name;
      this.newPic.address = this.address;
      //this.newTask.done = Boolean(JSON.parse(this.picked));
      axios.post('http://localhost:4000/items', this.newPic)
          .then(res => {
                console.log(res);
                this.cuteness = '';
                this.name = '';
                this.address = '';
              }
          )
    }
  }
}
</script>

<style scoped>
label, input {
  padding-right: 0.5em;
}
img{
  width: 10%;
}
</style>