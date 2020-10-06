<template>
    <div>
      <br>
        <div>
          <h2>API Documentation</h2>
        </div>
        <div>

<br>
            <p>This is a cute description of how to get data from the Cute animals database.</p>

            <p><b>To get all pics of cute animals/Chuch Norris memes, use "get" with:</b></p>
            <p>http://localhost:4000/items</p>
            <p><b>To get a random pic of cute animals/Chuch Norris meme, use "get" with:</b></p>
            <p>http://localhost:4000/random</p>
            <p><b>To get all pics of one category, replace ":cuteness" with the category name and use "get" with:</b></p>
            <p>http://localhost:4000/cutenesses/:cuteness</p>
            <p><b>To update the name of an animal with the id number, replace ":_id" with the id number and ":cuteness" with the category name and use "put" with:</b></p>
            <p>http://localhost:4000/updatingItems/:_id/:name/</p>
            <p><b>To update the link of a pic with the id number, replace "value1" with the id number and "value2" with the new link and use "put" with:</b></p>
            <p>http://localhost:4000/updatingLink?_id=value1&address=value2</p>
            <p><b>To update the category of an animal with the animal's name, replace ":name" with the animal's name and ":cuteness" with the category name and use "put" with:</b></p>
            <p>http://localhost:4000/updatingCuteness/:name/:cuteness/</p>
<br>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Api"
    }
</script>

<style scoped>

</style>