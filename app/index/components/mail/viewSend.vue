<template>
    <div>
        <!--<item :model="tree"></item>-->
        <div class="inbox-header inbox-view-header">
            <h1 class="pull-left">{{mail.title}}</h1>
            <div class="pull-right">
                <a href="javascript:;" class="btn btn-icon-only dark btn-outline">
                    <i class="fa fa-print"></i>
                </a>
            </div>
        </div>
        <div class="inbox-view-info">
            <div class="row">
                <div class="col-md-7">
                    <img :src="mail.sender.portrait" style="width: 45px;height: 45px;" class="inbox-author">
                    <span class="sbold"> 发送时间： </span> {{mail.create_time}}
                </div>
                <div class="col-md-5 inbox-info-btn">
                    <div class="btn-group">
                        <a class="btn green" href="javascript:;" data-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-cogs"></i> 操 作
                            <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="#replyMail">
                                    <i class="fa fa-pencil"></i> 回 复 </a>
                            </li>
                            <li>
                                <a href="javascript:;" @click="transmit">
                                    <i class="fa fa-send-o"></i> 转 发 </a>
                            </li>
                            <li class="divider"></li>
                            <li v-if="mail.state==3">
                                <a href="javascript:;" @click="changeStateSingle(1,mail.id)">
                                    <i class="fa fa-refresh"></i> 还原邮件 </a>
                            </li>
                            <li v-if="mail.state!=2">
                                <a href="javascript:;" @click="changeStateSingle(2,mail.id)">
                                    <i class="fa fa-star"></i> 设为星标 </a>
                            </li>
                            <li v-if="mail.state==2">
                                <a href="javascript:;" @click="changeStateSingle(1,mail.id)">
                                    <i class="fa fa-star-o"></i> 取消星标 </a>
                            </li>
                            <li v-if="mail.state!=3">
                                <a href="javascript:;" @click="changeStateSingle(3,mail.id)">
                                    <i class="fa fa-trash"></i> 删 除 </a>
                            </li>
                            <li v-if="mail.state==3">
                                <a href="javascript:;" @click="deleteTotal(mail.id)">
                                    <i class="fa fa-trash"></i> 彻底删除 </a>
                            </li>
                        </ul>
                        <button type="button" class="btn btn-default" style="margin-left: 10px;">邮件树
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="inbox-view" v-html="mail.content">
        </div>
        <hr>
        <div class="inbox-attached">
            <div class="margin-bottom-15">
                <span> 附件列表 </span>
            </div>
            <div class="margin-bottom-25">
                <template v-for="item in mail.path">
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
        <div class="clearfix"></div>
        <hr>
        <div class="inbox-attached">
            <div class="margin-bottom-15">
                <span> 收件人列表 </span>
            </div>
            <div class="margin-bottom-25">
                <ul class="receiver_tag">
                    <template v-for="item in receiverList">
                        <li class="uppercase">
                            <a href="javascript:;">{{item.name}}</a>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</template>
<style>
    .dropzone .note {
        border: none;
        font-weight: 200;
        font-size: 0.8em;
        display: block;
        margin-top: 1.4rem;
    }

    .dropzone .dz-message {
        font-size: 1.5em;
    }

    #myId {
        border: 2px dashed #0087F7;
        border-radius: 5px;
        background: white;
    }
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
<script type="es6">
    import 'wangeditor'
    import Dropzone from 'mod/dropzone'
    import 'style/dropzone'
    module.exports = {
        data: function () {
            return {
                mail: {
                    sender: {
                        role: {
                            department: {}
                        }
                    },
                    content: "",
                    title: ""
                },
                reply: {
                    title: "",
                    path: [],
                    content: "",
                    receiver: [],
                    reply: ""
                },
                tree: {},
                receiverList: []
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
                    me.$http.get("/api/mail/findMailById", {
                        params: {
                            id: id
                        }
                    }).then(response => {
                        var data = response.data;
                        me.mail = data;
                    }, response => {
                        serverErrorInfo();
                    });

                    me.$http.get("/api/mail/getReceiverList", {
                        params: {
                            id: id
                        }
                    }).then(response => {
                        var data = response.data;
                        console.log(data.results);
                        me.receiverList = data.results;
                    }, response => {
                        serverErrorInfo();
                    })
                }
            },
            fetchMailTree(){
                var me = this;
                me.$http.get("/api/mail/getMailTree", {
                    params: {
                        id: me.mail.mail.id
                    }
                }).then(response => {
                    var data = response.data;
                    console.log(data);
                }, response => {
                    serverErrorInfo();
                })
            },
            downAll(){
                var me = this;
                var pathList = me.mail.mail.path;
                for (var i = 0; i < pathList.length; i++) {
                    window.location.href = pathList[i].file_path;
                }
            },
            sendTo(){
                var me = this;
                confirm({
                    content: "确认回复该邮件？",
                    success: function () {
                        replyDropzone.processQueue();
                    }
                })
            },
            changeStateSingle(type, id){
                var me = this;
                confirm({
                    content: "是否将该邮件" + (type == 1 ? "设置为普通邮件？" : type == 2 ? "设置为星标邮件？" : "移至回收站？"),
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
                                    if (type != 3) {
                                        me.fetchData();
                                    } else {
                                        router.back();
                                    }

                                }
                            });
                            me.fetchData();
                        }, response => {
                            serverErrorInfo();
                        })
                    }
                });
            },
            deleteTotal(id){
                var me = this;
                confirm({
                    content: "是否彻底删除该邮件？",
                    success: function () {
                        me.$http.get("/api/mail/delete", {
                            params: {
                                selected: [id]
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("邮件删除成功！");
                                    me.fetchData();
                                }
                            });
                            me.getData();
                        }, response => {
                            serverErrorInfo();
                        })
                    }
                });
            },
            transmit(){
                var me = this;
                router.push("/mail/compose?transmit=" + me.mail.id);
//                me.$http.get("/api/mail/getMailTree", {
//                    params: {
//                        id: me.mail.id
//                    }
//                }).then(response => {
//                    var data = response.data;
//                    me.tree = data;
//                }, response => {
//                    serverErrorInfo();
//                })
            }
        }
    }
</script>