<template>
    <div id="home">

        <div>
            <img v-bind:src="'../img/miskalogo5.gif'" id="miska" alt="An image of a cat"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    #home{

        background-image: url("http://www.zingerbugimages.com/backgrounds/purple_christmas_lights_out_of_focus_seamless_texture.jpg");
    }
    #miska{
        text-align: center;
        width:50%;
    }

</style>