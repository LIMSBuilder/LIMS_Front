<template>
    <!-- BEGIN CONTENT BODY -->
    <div>
        <h1 class="page-title"> 要素信息维护
            <small>／Element</small>
        </h1>
        <!-- BEGIN PAGE HEADER-->
        <div class="portlet light portlet-fit portlet-form ">
            <div class="portlet-body">
                <!-- BEGIN FORM-->
                <form action="#" class="form-horizontal" id="element_add">
                    <div class="form-body">
                        <h3 class="form-section">环境要素</h3>
                        <div class="alert alert-danger display-hide">
                            <button class="close" data-close="alert"></button>
                            表单尚未填写完整。
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="name">环境要素名称
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="name" v-model="name" placeholder=""
                                       name="name" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入环境要素名称，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="name">当前送检单
                                <span class="required">&nbsp;&nbsp;&nbsp;</span>
                            </label>
                            <div class="col-md-7" v-if="path">
                                <button type="button" class="btn green btn-outline" @click="viewFile">查 看</button>
                                <a class="btn grey-mint btn-outline" :href="path">下 载</a>
                                <button type="button" class="btn red btn-outline" @click="deleteFile">删 除</button>
                            </div>
                            <div class="col-md-7" v-else>
                                <span>暂无模板</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label">新送检单模板
                                <span class="required">&nbsp;&nbsp;&nbsp;</span>
                            </label>
                            <div class="col-md-7">
                                <div id="myId" class="dropzone">
                                    <div class="dz-message">
                                        将文件拖至此处或点击上传.<br>
                                        <span class="note">上传经过标签化处理的送检单模板。 目前 <strong>仅支持</strong> DOC、DOCX、XLS、XLSX。</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-actions">
                        <div class="row">
                            <div class="col-md-offset-5 col-md-9">
                                <button type="button" class="btn blue" @click="back">返回列表</button>
                                <button type="button" class="btn green" @click="create">保 存</button>
                            </div>
                        </div>
                    </div>
                </form>
                <!-- END FORM-->
            </div>
        </div>
    </div>
    <!-- END CONTENT BODY -->
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
<script type="es6">
    import Dropzone from 'mod/dropzone'
    import 'style/dropzone'
    module.exports = {
        data: function () {
            return {
                name: "",
                path: ""
            }
        },
        mounted(){
            var me = this;
            var query = me.$route.query;
            if (!query.id) {
                confirm({
                    content: "请先选择需要维护的要素信息！",
                    success: function () {
                        router.push("/element/list");
                        closeConfirm();
                    }
                });
            } else {
                me.id = query.id;
                me.$http.get("/api/element/findById", {
                    params: {
                        id: query.id
                    }
                }).then(response => {
                    var data = response.data;
                    me.name = data.name;
                    me.path = data.path;
                    me.id = data.id;
                }, response => {
                    serverErrorInfo();
                })
            }
            var elementDropzone = me.elementDropzone = new Dropzone("div#myId", {
                url: "/api/file/upload",
                paramName: "file", // The name that will be used to transfer the file
                maxFilesize: 2, // MB
                uploadMultiple: false,
                addRemoveLinks: true,
                previewsContainer: null,
                acceptedFiles: ".doc,.docx,.xls,.xlsx",
                dictInvalidFileType: "文件类型不匹配",
                dictRemoveFile: "取消上传",
                dictRemoveLinks: "x",
                dictCancelUpload: "x"
            });
            elementDropzone.on("success", function (file, finished) {
                codeState(finished.code, {
                    200: function () {
                        me.path = finished.path;
                    }
                })
            });

        },
        methods: {
            create(){
                var me = this;
                if (jQuery("#element_add").valid()) {
                    me.$http.post("/api/element/change", {
                        name: me.name,
                        path: me.path,
                        id: me.id
                    }).then(response => {
                        var data = response.data;
                        codeState(data.code, {
                            200: "环境要素创建成功！"
                        });
                    }, response => {
                        serverErrorInfo();
                    });
                }
            },
            viewFile(){
                var me = this;
                alert("待开发，查看资源文件" + me.path);
            },
            deleteFile(){
                var me = this;
                me.$http.get("/api/element/deleteTemplate", {
                    params: {
                        id: me.id
                    }
                }).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("当前环境要素送检单模板已删除！");
                            me.path = "";
                        }
                    })
                }, response => {
                    serverErrorInfo();
                })
            },
            back(){
                router.push("/element/list");
            }
        }
    };
</script>