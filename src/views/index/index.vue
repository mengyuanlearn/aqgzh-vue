<template>
    <div>

        <van-nav-bar title="这是曲大律师和他老公的专属页面" />
        <sig-in-index v-if="active === 0"/>
        <navigation-index v-if="active === 1"/>
        <navigation-index v-if="active === 2"/>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="search">签到</van-tabbar-item>
            <van-tabbar-item icon="home-o">主页</van-tabbar-item>
            <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>


<script>

    import NavigationIndex from "@/views/navigation/index";
    import SigInIndex from "../signIn/index";

    export default {
        name: "showIndex",
        components: {
            SigInIndex,
            NavigationIndex
        },
        data () {
            return {
                active: 0
            }
        },
    }
</script>

<style scoped>

</style>
