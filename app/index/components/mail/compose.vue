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
                    title: ""
                }
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
                console.log(JSON.parse(JSON.stringify(me.mail)));
                me.$http.post("/api/mail/create", me.mail).then(response => {
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
                                title: ""
                            }
                        }
                    })
                }, response => {
                    serverErrorInfo();
                });
            });
        },
        methods: {
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
                me.$http.get("/api/user/listByDepartment").then(response => {
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
                    })
                }, response => {
                    serverErrorInfo();
                });
            }
        }
    }
</script>