<template>
    <div>
        <div class="inbox-view-info">
            <div class="row">
                <div class="col-md-7">

                </div>
            </div>
        </div>

        <items :model='model.parent'></items>
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
