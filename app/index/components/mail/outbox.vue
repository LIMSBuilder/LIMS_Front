<template>
    <div class="inbox-body">
        <div class="inbox-header">
            <h1 class="pull-left">发件箱</h1>
            <div class="form-inline pull-right">
                <div class="input-group input-medium">
                    <input type="text" class="form-control" @keyup.enter="search" id="searchKey" placeholder="在发件箱中搜索">
                    <span class="input-group-btn">
                                                        <button type="button" class="btn green" @click="search">
                                                            <i class="fa fa-search"></i>
                                                        </button>
                                                    </span>
                </div>
            </div>
        </div>
        <div class="inbox-content">
            <table class="table table-striped table-advance table-hover">
                <thead>
                <tr>
                    <th>
                        <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                            <input type="checkbox" class="mail-group-checkbox" @click="selectAll($event)"/>
                            <span></span>
                        </label>
                    </th>
                    <th>

                    </th>
                    <th class="pagination-control" colspan="4">
                        <button type="button" class="btn red btn-outline" @click="deleteMail">删 除</button>
                    </th>
                </tr>
                </thead>
                <tbody>
                <span v-if="mailList.length==0">当前分类无邮件。</span>
                <template v-for="item in mailList">
                    <tr>
                        <td class="inbox-small-cells">
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                <input type="checkbox" :value="item.id" v-model="selected" class="mail-checkbox"/>
                                <span></span>
                            </label>
                        </td>
                        <td class="view-message inbox-small-cells">
                            <a href="javascript:;" @click="viewOuterReceiver(item)">
                                <i class="fa fa-send-o"></i>
                            </a>
                        </td>
                        <td class="view-message " @click="viewDetail(item.id)"> {{item.title}}</td>
                        <td class="view-message inbox-small-cells" @click="deleteMailSingle(item.id)">
                            <i class="fa fa-trash-o"></i>
                        </td>
                        <td class="view-message text-right"> {{item.create_desp}}</td>
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
        <div class="modal fade draggable-modal" id="receiver" tabindex="-1" role="basic" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">收件人列表</h4>
                    </div>
                    <div class="modal-body">
                        <ul class="receiver_tag">
                            <template v-for="item in receiverList">
                                <li class="uppercase">
                                    <a href="javascript:;">{{item.name}}</a>
                                </li>
                            </template>
                        </ul>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">关 闭</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>

    </div>

</template>
<style>
    .receiver_tag {
        text-align: left;
        padding: 0;
        margin: 20px 0 0;
    }

    .receiver_tag li {
        list-style: none;
        display: inline-block;
        margin: 0 5px 20px 0;
    }

    .receiver_tag li > a {
        background-color: #f4f6f8;
        color: #a0a9b4;
        font-size: 11px;
        font-weight: 600;
        padding: 7px 10px;

    }
</style>
<script>
    module.exports = {
        data: function () {
            return {
                mailList: [],
                currentPage: 1,
                condition: "",
                selected: [],
                receiverList: []
            }
        },
        mounted(){
            var me = this;
            me.getData();
        },
        methods: {
            viewOuterReceiver(item){
                var me = this;
                me.receiverList = item.receiver;
                jQuery("#receiver").modal("show");
            },
            fetchData (pageNum, rowCount) {
                var me = this;
                this.$http.get('/api/mail/outList', {
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
                this.$http.get('/api/mail/outList', {
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
            },
            search(){
                var me = this;
                var value = jQuery("#searchKey").val();
                me.currentPage = 1;
                if (value) {
                    me.condition = "title=" + encodeURI(value);
                } else {
                    me.condition = "";
                }
                me.getData();

            },
            selectAll(e){
                var me = this;
                me.selected = [];
                if (e.target.checked) {
                    me.mailList.forEach(function (item, index) {
                        me.selected.push(item.id);
                    })
                }
            },
            deleteMail(type){
                var me = this;
                if (me.selected.length == 0) {
                    error("至少需要选择一个邮件！");
                    return;
                }
                confirm({
                    content: "是否删除所有选中的邮件？",
                    success: function () {
                        me.$http.get("/api/mail/deleteMail", {
                            params: {
                                selected: me.selected,
                                state: type
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("邮件操作成功！");
                                    me.getData();
                                }
                            });
                            me.getData();
                        }, response => {
                            serverErrorInfo();
                        })
                    }
                });
            },
            deleteMailSingle(id){
                var me = this;
                confirm({
                    content: "是否删除该邮件?",
                    success: function () {
                        me.$http.get("/api/mail/deleteMail", {
                            params: {
                                selected: [id]
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("邮件删除成功！");
                                    me.getData();
                                }
                            });
                            me.getData();
                        }, response => {
                            serverErrorInfo();
                        })
                    }
                });
            },
            viewDetail(id){
                var me = this;
                router.push("/mail/viewSend?id=" + id);
            }
        }
    }
</script>