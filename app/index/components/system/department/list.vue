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
                                    <th> #</th>
                                    <th> First Name</th>
                                    <th> Last Name</th>
                                    <th> Username</th>
                                    <th> Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td> 1</td>
                                    <td> Mark</td>
                                    <td> Otto</td>
                                    <td> makr124</td>
                                    <td>
                                        <span class="label label-sm label-success"> Approved </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 2</td>
                                    <td> Jacob</td>
                                    <td> Nilson</td>
                                    <td> jac123</td>
                                    <td>
                                        <span class="label label-sm label-info"> Pending </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 3</td>
                                    <td> Larry</td>
                                    <td> Cooper</td>
                                    <td> lar</td>
                                    <td>
                                        <span class="label label-sm label-warning"> Suspended </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 4</td>
                                    <td> Sandy</td>
                                    <td> Lim</td>
                                    <td> sanlim</td>
                                    <td>
                                        <span class="label label-sm label-danger"> Blocked </span>
                                    </td>
                                </tr>
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
        mounted(){

        },
        methods: {
            fetchData (pageNum, rowCount) {
                var me = this;
                this.$http.get('/api/article/list', {
                    params: {
                        rowCount: rowCount,
                        currentPage: pageNum,
                        condition: this.condition
                    }
                }).then((response) => {
                    var data = response.data;
                    this.article_list = data.results;
                }, (response) => {
                    serverErrorInfo();
                });
            },
            //渲染页码
            fetchPages (rowCount) {
                var me = this;
                this.$http.get('/api/article/page', {
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
