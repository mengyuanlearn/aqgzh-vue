<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :height="200">
            <van-swipe-item v-for="image in images" :key="image" >
                <img id="swipeImage" :src="image" />
            </van-swipe-item>
        </van-swipe>
        <van-notice-bar
                left-icon="volume-o"
                text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
        />
        <van-grid :column-num="3">
            <van-grid-item v-for="item in gridData" :key="item.code" :icon="item.icon" :text="item.name" />
        </van-grid>
    </div>
</template>

<script>
    export default {
        name: "navigationIndex",
        data () {
            return {
                gridData: [
                    {name: '发布任务', code: 'grid1', icon: 'photo-o'},
                    {name: '纪念节日', code: 'grid2', icon: 'photo-o'},
                    {name: '爱情花园', code: 'grid3', icon: 'photo-o'},
                    {name: '发布任务', code: 'grid4', icon: 'photo-o'},
                    {name: '发布任务', code: 'grid5', icon: 'photo-o'},
                    {name: '发布任务', code: 'grid6', icon: 'photo-o'},
                    {name: '发布任务', code: 'grid7', icon: 'photo-o'},
                    {name: '发布任务', code: 'grid8', icon: 'photo-o'},
                    {name: '发布任务', code: 'grid9', icon: 'photo-o'},
                ],
                images: [
                    require("@/assets/img/swipeImage1.jpg"),
                    require("@/assets/img/swipeImage2.jpg")
                ]
            }
        },
    }
</script>

<style scoped>
    #swipeImage {
        height: 200px;
        width: 100%;
    }
</style>
