<template>
    <div class="inbox-body">
        <div class="inbox-header">
            <h1 class="pull-left">收件箱</h1>
            <div class="form-inline pull-right">
                <div class="input-group input-medium">
                    <input type="text" class="form-control" @keyup.enter="search" id="searchKey" placeholder="在收件箱中搜索">
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
                        <button type="button" class="btn green btn-outline" @click="changeState(1)">标为已读</button>
                        <button type="button" class="btn yellow btn-outline" @click="changeState(2)">设置星标</button>
                        <button type="button" class="btn red btn-outline" @click="changeState(3)">删 除</button>
                    </th>
                </tr>
                </thead>
                <tbody>
                <span v-if="mailList.length==0">当前分类无邮件。</span>
                <template v-for="item in mailList">
                    <tr :class="item.state==0?'unread':''" @click="viewDetail(item.id)">
                        <td class="inbox-small-cells">
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                <input type="checkbox" :value="item.id" v-model="selected" class="mail-checkbox"/>
                                <span></span>
                            </label>
                        </td>
                        <td class="inbox-small-cells" @click="changeStateSingle(item.state==2?1:2,item.id)">
                            <i :class="item.state==2?'fa fa-star inbox-started':'fa fa-star'"></i>
                        </td>
                        <td class="view-message hidden-xs"> {{item.mail.sender.name}}</td>
                        <td class="view-message "> {{item.mail.title}}</td>
                        <td class="view-message inbox-small-cells" @click="changeStateSingle(3,item.id)">
                            <i class="fa fa-trash-o"></i>
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
                condition: "type=inbox",
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
            },
            search(){
                var me = this;
                var value = jQuery("#searchKey").val();
                me.currentPage = 1;
                if (value) {
                    me.condition = "type=inbox&&title=" + encodeURI(value);
                } else {
                    me.condition = "type=inbox";
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
            changeState(type){
                var me = this;
                if (me.selected.length == 0) {
                    error("至少需要选择一个邮件！");
                    return;
                }
                confirm({
                    content: "是否将选中邮件" + (type == 2 ? "设置为星标邮件？" : type == 3 ? "移至回收站？" : "设置为已读邮件？"),
                    success: function () {
                        me.$http.get("/api/mail/changeState", {
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
            changeStateSingle(type, id){
                var me = this;
                confirm({
                    content: "是否将该邮件" + (type == 1 ? "还原为普通邮件？" : type == 2 ? "设置为星标邮件？" : "移至回收站？"),
                    success: function () {
                        me.$http.get("/api/mail/changeState", {
                            params: {
                                selected: [id],
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
            viewDetail(id){
                var me = this;
                router.push("/mail/view?id=" + id);
            }
        }
    }
</script>