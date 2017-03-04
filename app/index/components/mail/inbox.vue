<template>
    <div class="inbox-body">
        <div class="inbox-header">
            <h1 class="pull-left">收件箱</h1>
            <form class="form-inline pull-right" action="index.html">
                <div class="input-group input-medium">
                    <input type="text" class="form-control" placeholder="在收件箱中搜索">
                    <span class="input-group-btn">
                                                        <button type="submit" class="btn green">
                                                            <i class="fa fa-search"></i>
                                                        </button>
                                                    </span>
                </div>
            </form>
        </div>
        <div class="inbox-content">
            <table class="table table-striped table-advance table-hover">
                <thead>
                <tr>
                    <th>
                        <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                            <input type="checkbox" class="mail-group-checkbox"/>
                            <span></span>
                        </label>
                    </th>
                    <th>
                        <div class="btn-group input-actions">
                            <a class="btn btn-sm blue btn-outline dropdown-toggle sbold" href="javascript:;"
                               data-toggle="dropdown"> 操 作
                                <i class="fa fa-angle-down"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="javascript:;">
                                        <i class="fa fa-pencil"></i> 标为已读 </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <i class="fa fa-ban"></i> 移至回收站 </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a href="javascript:;">
                                        <i class="fa fa-trash-o"></i> 删除 </a>
                                </li>
                            </ul>
                        </div>
                    </th>
                    <th class="pagination-control" colspan="4">

                    </th>
                </tr>
                </thead>
                <tbody>
                <template v-for="item in mailList">
                    <tr :class="item.state==0?'unread':''">
                        <td class="inbox-small-cells">
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                <input type="checkbox" class="mail-checkbox"/>
                                <span></span>
                            </label>
                        </td>
                        <td class="inbox-small-cells">
                            <i :class="item.state==2?'fa fa-star inbox-started':'fa fa-star'"></i>
                        </td>
                        <td class="view-message hidden-xs"> {{item.mail.sender.name}}</td>
                        <td class="view-message "> {{item.mail.title}}</td>
                        <td class="view-message inbox-small-cells">
                            <i class="fa fa-paperclip" v-if="item.mail.path.length!=0"></i>
                        </td>
                        <td class="view-message text-right"> {{item.mail.create_desp}}</td>
                    </tr>
                </template>
                </tbody>
            </table>
            <!-- Pagination -->
            <div class="pagination pull-right">
                <div class="M-box front pull-right" style="margin-top:10px; "></div>
            </div>
            <!-- End Pagination -->
            <div class="clearfix"></div>
        </div>
    </div>

</template>
<script>
    module.exports = {
        data: function () {
            return {
                mailList: [],
                currentPage: 1,
                condition: "",
                selected: []
            }
        },
        mounted(){
            var me = this;
            me.getData();
        },
        methods: {
            fetchData (pageNum, rowCount) {
                var me = this;
                this.$http.get('/api/mail/list', {
                    params: {
                        rowCount: rowCount,
                        currentPage: pageNum,
                        condition: this.condition
                    }
                }).then((response) => {
                    var data = response.data;
                    me.mailList = data.results;
                }, (response) => {
                    serverErrorInfo();
                });
            },
            //渲染页码
            fetchPages (rowCount) {
                var me = this;
                this.$http.get('/api/mail/list', {
                    params: {
                        rowCount: rowCount,
                        currentPage: 1,
                        condition: me.condition
                    }
                }).then((response) => {
                    var data = response.data;
                    jQuery(".M-box").pagination({
                        pageCount: data.totalPage || 1,
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
            getData(){
                var me = this;
                me.fetchData(me.currentPage, rowCount);
                me.fetchPages(rowCount);
            }
        }
    }
</script>