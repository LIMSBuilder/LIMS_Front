<template>
    <div>
        <h1 class="page-title"> 部门信息维护
            <small>／Department</small>
        </h1>
        <div class="row">
            <div class="col-md-12">
                <!-- BEGIN BORDERED TABLE PORTLET-->
                <div class="portlet light portlet-fit bordered">
                    <div class="portlet-body">
                        <div class="table-scrollable table-scrollable-borderless">
                            <table class="table table-hover table-light">
                                <thead>
                                <tr class="uppercase">
                                    <th><input type="checkbox"></th>
                                    <th> 编号</th>
                                    <th> 部门名称</th>
                                    <th> 操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="item in departmentList">
                                    <tr>
                                        <td> 1</td>
                                        <td> Mark</td>
                                        <td> Otto</td>
                                        <td> makr124</td>
                                        <td>
                                            <span class="label label-sm label-success"> Approved </span>
                                        </td>
                                    </tr>
                                </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- Pagination -->
                    <div class="pagination pull-right">
                        <div class="M-box front pull-right" style="margin-top:10px; "></div>
                    </div>
                    <!-- End Pagination -->
                </div>
                <!-- END BORDERED TABLE PORTLET-->
            </div>

        </div>
</template>

<script>
    module.exports = {
        data(){
            return {
                departmentList: [],
                currentPage: 1
            }
        },
        mounted(){
            var me = this;
            me.fetchData(me.currentPage, rowCount);
        },
        methods: {
            fetchData (pageNum, rowCount) {
                var me = this;
                this.$http.get('/api/department/list', {
                    params: {
                        rowCount: rowCount,
                        currentPage: pageNum,
                        condition: this.condition
                    }
                }).then((response) => {
                    var data = response.data;
                    me.departmentList = data.results;
                }, (response) => {
                    serverErrorInfo();
                });
            },
            //渲染页码
            fetchPages (rowCount) {
                var me = this;
                this.$http.get('/api/department/page', {
                    params: {
                        rowCount: rowCount,
                        currentPage: 1,
                        condition: this.condition
                    }
                }).then((response) => {
                    var data = response.data;
                    jQuery(".M-box").pagination({
                        pageCount: data.total,
                        coping: true,
                        homePage: '首页',
                        endPage: '末页',
                        prevContent: '上页',
                        nextContent: '下页',
                        callback: function (data) {
                            me.fetchData(data.getCurrent(), rowCount, me.condition);
                            me.currentPage = data.getCurrent();
                        }
                    });
                }, (response) => {
                    serverErrorInfo();
                });
            },
        }
    }
</script>
