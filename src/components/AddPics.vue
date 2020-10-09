<template>
  <div>
    <p class="homeText">
    </p>
    <div id="pic-form" @submit.prevent="addPic">
      <br>
      <h2>Add Pics</h2>
      <br>
      <form>
        <p>
          <label>What is the cuteness level of the animal? </label>
          <br>
          <input type="radio" id="adorable" value="Adorable" v-model="cuteness">
          <label for="adorable">Adorable </label>
          <input type="radio" id="lovely" value="Lovely" v-model="cuteness">
          <label for="lovely">Lovely </label>
          <input type="radio" id="supercute" value="Supercute" v-model="cuteness">
          <label for="supercute">Supercute </label>
          <input type="radio" id="incredible" value="Incredible" v-model="cuteness">
          <label for="incredible">Incredible </label>
          <input type="radio" id="chuckNorris" value="ChuckNorris" v-model="cuteness">
          <label for="chuckNorris">Chuck Norris </label>
        </p>
        <p>
          <label>The animal's name </label>
          <input v-model="name" type="text" />
        </p>
        <p>
          <label>The link </label>

          <input
                  v-model="address"
                  type="text"
                  :class="{ 'has-error': submitting && invalidAddress}"
                  @focus="clearStatus"
                  @keypress="clearStatus"
          />
        </p>
        <!--previw for image-->
        <p><img id="smallPic" :src="address" /></p>
        <!--area for error-messages if web address is too short-->
        <p v-if="error && submitting" class="error-message">
          There is no link :(
        </p>
        <button>Add Pic</button>

      </form>
      <br>
    </div>
  </div>
</template>



<script>
import axios from 'axios';
export default {
  name: "AddPics",
  data() {
    return {
      submitting: false,
      error: false,
      success: false,
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
  computed: {
    invalidAddress(){
      return this.address === ''
    },
  },
  methods: {
    addPic(){
      /*validator for address leght*/
      this.clearStatus()
      this.submitting = true
      if (this.invalidAddress) {
        this.error = true
        return
      }
      /*add data to database*/
      this.newPic.cuteness = this.cuteness;
      this.newPic.name = this.name;
      this.newPic.address = this.address;
      axios.post('http://localhost:4000/items', this.newPic)
          .then(res => {
                console.log(res);
                this.cuteness = '';
                this.name = '';
                this.address = '';
              }
          )
      this.error = false
      this.success = true
      this.submitting = false
    },
    clearStatus(){
      this.sucess = false
      this.error = false
    }
  }
}
</script>

<style scoped>
</style>