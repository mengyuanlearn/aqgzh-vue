<template>
    <div id="sigIn">
        <div id="background">
            <img :src="imgSrc" style="width: 100%; height: 100%;"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sigInIndex",
        data () {
            return {
                imgSrc: require("@/assets/img/sigInBackground.jpg")
            }
        }
    }
</script>

<style scoped>
</style>
