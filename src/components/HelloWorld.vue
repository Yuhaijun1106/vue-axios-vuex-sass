<template>
    <div id="hello">
       <div>
            <button @click="getGuideInfo">点击我</button>
       </div>
       <button @click="getGuideInfo">点击我</button>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        getGuideInfo: function() {
            this.$get(this.$store.state.allApis.getGuideInfo, {
                data: { size: 2 },
                success: function(response) {
                    console.log(response)
                },
                error: function(error) {
                    console.log(error)
                }
            })
        }
    }
}
</script>

<style lang='scss'>
#hello{
    height: 200px;
    width: 1000px;
    margin: 0 auto;
    border: 1px solid red;
    & > button{
        width: 50px;
        height: 50px;
        border-radius: 25px;
        border: 1px solid #ccc;
    }
}
</style>
