<template>
    <div>
        <!--<item :model="tree"></item>-->
        <div class="inbox-header inbox-view-header">
            <h1 class="pull-left">{{mail.mail.title}}
                <span class="badge badge-info badge-roundless" v-if="mail.state==0||mail.state==1"> 普通 </span>
                <span class="badge badge-warning badge-roundless" v-if="mail.state==2"> 星标 </span>
                <span class="badge badge-danger badge-roundless" v-if="mail.state==3"> 已删除 </span>
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
                        <button type="button" class="btn btn-default" style="margin-left: 10px;" >邮件树
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="inbox-view" v-html="mail.mail.content">
        </div>
        <hr>
        <div class="inbox-attached">
            <div class="margin-bottom-15">
                <span> 附件列表 </span>
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
        <div class="clearfix"></div>
        <div class="inbox-view-info" style="border-top: none;padding-top: 30px;margin-bottom: 20px;" id="replyMail">
            <h3> 回复邮件</h3>
        </div>
        <form class="form-horizontal" id="compose_send" action="#" method="POST"
              enctype="multipart/form-data">
            <div class="form-body">
                <div class="form-group">
                    <label class="col-md-1 control-label" for="title">邮件主题</label>
                    <div class="col-md-10">
                        <input type="text" class="form-control" id="title" v-model="reply.title" placeholder="输入邮件主题">
                        <div class="form-control-focus"></div>
                    </div>
                </div>
                <div class="form-group form-md-line-input">
                    <label class="col-md-1 control-label" for="content">邮件正文</label>
                    <div class="col-md-10">
                        <textarea class="inbox-editor  form-control" name="content" id="content" rows="12"></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-1 control-label" for="myId">附件上传</label>
                    <div class="col-md-10">
                        <div id="myId" class="dropzone">
                            <div class="dz-message">
                                将文件拖至此处或点击上传.<br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-actions noborder text-right">
                <button type="button" class="btn blue" @click="sendTo">发 送</button>
                <button type="reset" class="btn default">取 消</button>
            </div>
        </form>
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
</style>
<script>
    import 'wangeditor'
    import Dropzone from 'mod/dropzone'
    import 'style/dropzone'
//    import item from './subMail.vue'
    module.exports = {
//        components: {
//            "item": item
//        },
        data: function () {
            return {
                mail: {
                    mail: {
                        sender: {
                            role: {
                                department: {}
                            }
                        },
                        content: "",
                        title: ""
                    }
                },
                reply: {
                    title: "",
                    path: [],
                    content: "",
                    receiver: [],
                    reply: ""
                },
                tree: {}
            }
        },
        mounted(){
            var me = this;
            var textarea = document.getElementById('content');
            var reply = window.reply = new wangEditor(textarea);
            reply.config.uploadImgUrl = '/api/file/upload';
            reply.config.menus = $.map(wangEditor.config.menus, function (item, key) {
                if (item === 'location') {
                    return null;
                }
                return item;
            });
            reply.create();
            me.fetchData();
            var replyDropzone = window.replyDropzone = new Dropzone("div#myId", {
                url: "/api/file/upload",
                paramName: "file",
                maxFilesize: 1000, // MB
                uploadMultiple: false,
                addRemoveLinks: true,
                previewsContainer: null,
                dictInvalidFileType: "文件类型不匹配",
                dictRemoveFile: "取消上传",
                dictRemoveLinks: "x",
                dictCancelUpload: "x",
                autoProcessQueue: false,
                maxFiles: null,
                parallelUploads: 100,
                dictMaxFilesExceeded: "最多同时支持一百个文件上传"
            });
            replyDropzone.on("success", function (file, finished) {
                codeState(finished.code, {
                    200: function () {
                        me.reply.path.push(finished.path);
                    }
                })
            });
            replyDropzone.on("queuecomplete", function () {
                //完成全部文件的上传工作
                me.reply.content = reply.$txt.html();
                console.log(JSON.parse(JSON.stringify(me.reply)));
                me.$http.post("/api/mail/create", me.reply).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("发送成功！");
                            myDropzone.removeAllFiles();
                            editor.$txt.html('<p><br></p>');
                            jQuery("#receiver").selectpicker('deselectAll');
                            me.reply.path = [];
                            me.reply.content = "";
                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                });
            });
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
                                me.reply.title = "回复" + me.mail.mail.sender.name + "邮件：\"" + me.mail.mail.title + "\"";
                                me.reply.reply = me.mail.mail.id;
                                me.reply.receiver.push(me.mail.mail.sender.id);
                                //me.transmit();
                            }
                        })
                    }, response => {
                        serverErrorInfo(response);
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
                    serverErrorInfo(response);
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
                            serverErrorInfo(response);
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
                            serverErrorInfo(response);
                        })
                    }
                });
            },
            transmit(){
                var me = this;
                router.push("/mail/compose?transmit=" + me.mail.mail.id);
//                me.$http.get("/api/mail/getMailTree", {
//                    params: {
//                        id: me.mail.mail.id
//                    }
//                }).then(response => {
//                    var data = response.data;
//                    me.tree = data;
//                }, response => {
//                    serverErrorInfo(response);
//                })
            }
        }
    }
</script>