<template>
    <div class="inbox-view-info">
        <div class="row">
            <div class="col-md-7">
                <img :src="model.sender.portrait" style="width: 45px;height: 45px;" class="inbox-author">
                <span class="sbold">{{model.name}} </span>
                <span>&#60; {{model.sender.role.department.name}}:{{model.sender.role.name}} &#62; </span>
                <span class="sbold"> 发送于 </span> {{model.create_time}}
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: "items",
        props: {
            model: Object
        },
        data(){
            return {}
        },
        mounted: function () {

        },
        methods: {}
    }
</script>