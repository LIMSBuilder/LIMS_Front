<template>
    <div class="inbox-body">
        <form class="form-horizontal" id="compose_send" action="#" method="POST"
              enctype="multipart/form-data">
            <div class="form-body">
                <div class="inbox-header"><h1 class="pull-left">新邮件</h1></div>
                <div class="form-group">
                    <label class="col-md-1 control-label" for="title">邮件主题</label>
                    <div class="col-md-10">
                        <input type="text" class="form-control" id="title" v-model="mail.title" placeholder="输入邮件主题">
                        <div class="form-control-focus"></div>
                    </div>
                </div>
                <div class="form-group" style="padding-bottom: 10px">
                    <label class="col-md-1 control-label" for="receiver">收件人
                        <span class="required">*</span>
                    </label>
                    <div class="col-md-10">
                        <select class="form-control" multiple
                                data-actions-box="true" data-live-search="true" v-model="mail.receiver" id="receiver">
                            <template v-for="item in userList">
                                <optgroup :label="item.name">
                                    <template v-for="user in item.user.results">
                                        <option :value="user.id">{{user.name}}</option>
                                    </template>
                                </optgroup>
                            </template>
                        </select>
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
                <div class="form-group" v-if="mail.isTransmit==1">
                    <label class="col-md-1 control-label" for="myId">转发附件</label>
                    <div class="col-md-10">
                        <div class="alert alert-success">
                            <strong>Note：</strong> 下方为原始邮件中所包含的附件信息，附件将随邮件一并转发。
                        </div>
                        <label class="control-label" v-if="transmitPath.length==0">
                            无转发附件
                        </label>
                        <div class="inbox-attached">
                            <template v-for="item in  transmitPath">
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
                                            <a :href="item.file_path" class="btn btn-sm green btn-outline">下 载</a>
                                            <a href="javascript:;" class="btn btn-sm red btn-outline"
                                               @click="removePath(item)">删 除</a>
                                        </div>
                                    </div>
                                </div>
                            </template>
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
    module.exports = {
        data: function () {
            return {
                userList: [{
                    user: {},
                }],
                mail: {
                    receiver: [],
                    path: [],
                    content: "",
                    title: "",
                    isTransmit: 0
                },
                transmitPath: []
            }
        },
        mounted: function () {
            var me = this;
            var textarea = document.getElementById('content');
            var editor = window.editor = new wangEditor(textarea);
            editor.config.uploadImgUrl = '/api/file/upload';
            editor.config.menus = $.map(wangEditor.config.menus, function (item, key) {
                if (item === 'location') {
                    return null;
                }
                return item;
            });
            editor.create();
            me.fetchUser();
            var myDropzone = window.myDropzone = new Dropzone("div#myId", {
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
            myDropzone.on("success", function (file, finished) {
                codeState(finished.code, {
                    200: function () {
                        me.mail.path.push(finished.path);
                    }
                })
            });
            myDropzone.on("sending", function () {
                console.log("上传之前执行");
                me.mail.path = [];
            });
            myDropzone.on("queuecomplete", function () {
                //完成全部文件的上传工作
                me.mail.content = editor.$txt.html();
                if (me.mail.isTransmit == 1) {
                    //是转发
                    for (var i = 0; i < me.transmitPath.length; i++) {
                        me.mail.path.push(me.transmitPath[i].file_path);
                    }
                }
                me.$http.post("/api/mail/create", me.mail).then(function (response) {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("发送成功！");
                            myDropzone.removeAllFiles();
                            editor.$txt.html('<p><br></p>');
                            jQuery("#receiver").selectpicker('deselectAll');
                            me.mail = {
                                receiver: [],
                                path: [],
                                content: "",
                                title: "",
                                isTransmit: me.$route.query.transmit ? 1 : 0
                            }
                        }
                    })
                }, function () {
                    serverErrorInfo(response);
                });
            });
            me.fetchTransmit();
        },
        watch: {
            '$route.query': "fetchReceiver"
        },
        methods: {
            fetchTransmit(){
                var me = this;
                var value = me.$route.query.transmit;
                if (value) {
                    me.$http.get("/api/mail/findMailById", {
                        params: {
                            id: value
                        }
                    }).then(response => {
                        var data = response.data;
                        console.log(data);
                        me.mail.isTransmit = 1;//定义为转发
                        me.mail.title = "转发" + data.sender.name + "的邮件：" + data.title;
                        me.mail.content = data.content;
                        editor.$txt.html(data.content);
                        me.transmitPath = data.path;
                    }, response => {
                        serverErrorInfo(response);
                    })
                }
            },
            fetchReceiver(){
                var me = this;
                var value = me.$route.query.receiver;
                if (value) {
                    $('#receiver').selectpicker("val", value);
                }
            },
            sendTo(){
                var me = this;
                confirm({
                    content: "确认发送邮件？",
                    success: function () {
                        myDropzone.processQueue();
                    }
                })
            },
            fetchUser: function () {
                var me = this;
                me.$http.get("/api/user/listByDepartment").then(function (response) {
                    var data = response.data;
                    me.userList = data.results;
                    me.$nextTick(function () {
                        $('#receiver').selectpicker({
                            iconBase: 'fa',
                            tickIcon: 'fa-check',
                            countSelectedText: "count",
                            deselectAllText: "取消选择",
                            selectAllText: "选择全部",
                            noneSelectedText: "请选择收件人"

                        });
                        me.fetchReceiver();
                    })
                }, function (response) {
                    serverErrorInfo(response);
                })
            },
            removePath(item){
                var me = this;
                me.transmitPath.splice(me.transmitPath.indexOf(item), 1);
//                me.transmitPath.$remove(item);
            }
        }
    }
</script>