<template>
    <div>
        <div>
            API Documentation
        </div>
        <div>
            <p>This is a cute description of how to get data from the Cute animals database.</p>

            <p><b>To get all pics of cute animals/Chuch Norris memes, use "get" with:</b></p>
            <p>http://localhost:4000/items</p>
            <p><b>To get all pics of one category, replace ":cuteness" with the category name and use "get" with:</b></p>
            <p>http://localhost:4000/cutenesses/:cuteness</p>
            <p><b>To update the name of an animal with the id number, replace ":_id" with the id number and ":cuteness" with the category name and use "put" with:</b></p>
            <p>http://localhost:4000/updatingItems/:_id/:name/</p>
            <p><b>To update the category of an animal with the animal's name, replace ":name" with the animal's name and ":cuteness" with the category name and use "put" with:</b></p>
            <p>http://localhost:4000/updatingCuteness/:name/:cuteness/</p>

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