<template>
    <div>
        <div class="inbox-header inbox-view-header">
            <h1 class="pull-left">New server for datacenter needed
                <a href="javascript:;"> Inbox </a>
            </h1>
            <div class="pull-right">
                <a href="javascript:;" class="btn btn-icon-only dark btn-outline">
                    <i class="fa fa-print"></i>
                </a>
            </div>
        </div>
        <div class="inbox-view-info">
            <div class="row">
                <div class="col-md-7">
                    <img :src="mail.mail.sender.portrait" style="width: 45px;height: 45px;" class="inbox-author">
                    <span class="sbold">{{mail.mail.sender.name}} </span>
                    <span>&#60; {{mail.mail.sender.role.department.name}}:{{mail.mail.sender.role.name}} &#62; </span>
                    <span class="sbold"> 发送于 </span> {{mail.mail.create_time}}
                </div>
                <div class="col-md-5 inbox-info-btn">
                    <div class="btn-group">
                        <a class="btn green" href="javascript:;" data-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-cogs"></i> 操 作
                            <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="javascript:;">
                                    <i class="fa fa-pencil"></i> 回 复 </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i class="fa fa-pencil"></i> 转 发 </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="javascript:;">
                                    <i class="fa fa-trash-o"></i> 星 标 </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i class="fa fa-ban"></i> 删 除 </a>
                            </li>
                        </ul>
                        <button type="button" class="btn btn-default" style="margin-left: 10px;">上级邮件</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="inbox-view" v-html="mail.mail.content">
        </div>
        <hr>
        <div class="inbox-attached">
            <div class="margin-bottom-15">
                <span>附件列表 — </span>
                <a href="javascript:;" @click="downAll">下载所有附件 </a>
            </div>
            <div class="margin-bottom-25">
                <template v-for="item in mail.mail.path">
                    <div class="margin-bottom-25">
                        <div style="float: left;margin-right: 20px;">
                            <img style="width: 120px" src="../../../global/img/file/doc.png"
                                 v-if="item.file_path.split('.')[1]=='doc'||item.file_path.split('.')[1]=='docx'">
                            <img style="width: 120px" src="../../../global/img/file/xls.png"
                                 v-if="item.file_path.split('.')[1]=='xls'||item.file_path.split('.')[1]=='xlsx'">
                            <img style="width: 120px" src="../../../global/img/file/jpg.png"
                                 v-if="item.file_path.split('.')[1]=='jpg'">
                            <img style="width: 120px" src="../../../global/img/file/pdf.png"
                                 v-if="item.file_path.split('.')[1]=='pdf'">
                            <img style="width: 120px" src="../../../global/img/file/png.png"
                                 v-if="item.file_path.split('.')[1]=='png'">
                            <img style="width: 120px" src="../../../global/img/file/rar.png"
                                 v-if="item.file_path.split('.')[1]=='rar'">
                            <img style="width: 120px" src="../../../global/img/file/zip.png"
                                 v-if="item.file_path.split('.')[1]=='zip'">
                            <img style="width: 120px" src="../../../global/img/file/other.png"
                                 v-if="item.file_path.split('.')[1]!='zip'&&item.file_path.split('.')[1]!='rar'&&item.file_path.split('.')[1]!='png'&&item.file_path.split('.')[1]!='pdf'&&item.file_path.split('.')[1]!='jpg'&&item.file_path.split('.')[1]!='xls'&&item.file_path.split('.')[1]!='xlsx'&&item.file_path.split('.')[1]!='doc'&&item.file_path.split('.')[1]!='docx'">

                            <div style="width: 120px;text-align: center">
                                <strong style="margin: 10px 0">{{item.file_path.split("/upload\\")[1]}}</strong>
                                <a :href="item.file_path" class="btn green btn-outline">下 载</a>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
</template>
<script>
    module.exports = {
        data: function () {
            return {
                mail: {
                    mail: {
                        sender: {
                            role: {
                                department: {}
                            }
                        },
                        content: ""
                    }
                }
            }
        },
        mounted(){
            var me = this;
            me.fetchData();
        },
        methods: {
            fetchData(){
                var me = this;
                var id = me.$route.query.id;
                if (id) {
                    me.$http.get("/api/mail/findById", {
                        params: {
                            id: id
                        }
                    }).then(response => {
                        var data = response.data;
                        codeState(data.code, {
                            200: function () {
                                console.log(data);
                                me.mail = data;
                            }
                        })
                    }, response => {
                        serverErrorInfo();
                    })
                }
            },
            downAll(){
                var me = this;
                var pathList = me.mail.mail.path;
                for (var i = 0; i < pathList.length; i++) {
                    window.location.href = pathList[i].file_path;
                }
            }
        }
    }
</script>