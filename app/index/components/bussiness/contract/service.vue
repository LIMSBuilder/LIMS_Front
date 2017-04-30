<template>
    <!-- BEGIN CONTENT BODY -->
    <div>
        <h1 class="page-title"> 创建服务合同
            <small>／Service Contract</small>
        </h1>
        <!-- BEGIN PAGE HEADER-->
        <div class="portlet light portlet-fit portlet-form ">
            <div class="portlet-body">
                <!-- BEGIN FORM-->
                <form action="#" class="form-horizontal" id="service_add">
                    <div class="form-body">
                        <h3 class="form-section">服务合同</h3>
                        <div class="alert alert-success">
                            <strong>小技巧：</strong> 使用标签处理过的模板能减少重复工作，提升工作效率。点击<a href="javascript:;">此处</a>查看标签模板制作方法。
                        </div>
                        <div class="alert alert-danger display-hide">
                            <button class="close" data-close="alert"></button>
                            表单尚未填写完整。
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="name">合同名称
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="name" v-model="name" placeholder="请输入合同名称"
                                       required>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label">服务合同
                                <span class="required">&nbsp;&nbsp;&nbsp;</span>
                            </label>
                            <div class="col-md-7">
                                <div id="myId" class="dropzone">
                                    <div class="dz-message">
                                        将文件拖至此处或点击上传.<br>
                                        <span class="note">上传双方已签署的服务合同。 目前 <strong>仅支持</strong> DOC、DOCX、XLS、XLSX。</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label">技术审核
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <div class="md-radio-inline">
                                    <div class="md-radio has-success">
                                        <input type="radio" v-model="isReview" id="review" name="review"
                                               class="md-radiobtn" value="1">
                                        <label for="review">
                                            <span class="inc"></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 开启 </label>
                                    </div>
                                    <div class="md-radio has-error">
                                        <input type="radio" v-model="isReview" id="notReview" name="review"
                                               class="md-radiobtn" value="0">
                                        <label for="notReview">
                                            <span class="inc"></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 关闭 </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-actions">
                        <div class="row">
                            <div class="col-md-offset-5 col-md-9">
                                <button type="button" class="btn green" @click="create" v-if="flag==0">保 存</button>
                                <button type="button" class="btn green" @click="change" v-if="flag==1">修 改</button>

                                <button type="reset" class="btn default" @click="resetAll">重 置</button>
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
                isReview: 1,
                path: "",
                name: "",
                flag: 0,
                change_id: ""
            }
        },
        mounted(){
            var me = this;
            var query = me.$route.query;
//            debugger
            if (query.id) {
                me.$http.get("/api/service/findDetailsList", {
                    params: {
                        id: query.id
                    }
                }).then(response => {
                    var data = response.data;
                    me.flag = 1;
                    me.change_id = query.id;
                    me.isReview = data.review;
                    me.path = data.path;
                    me.name = data.name;
                }, response => {
                    serverErrorInfo(response);
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
//                        debugger
                        me.path = finished.path;
                    }
                })
            });
            BlogUtils.formValid(jQuery("#service_add"));
        },
        methods: {
            create(){
                var me = this;
                if (jQuery("#service_add").valid()) {
                    me.$http.post("/api/service/createService", {
                        review: me.isReview,
                        path: me.path,
                        name: me.name
                    }).then(response => {
                        var data = response.data;
                        codeState(data.code, {
                            200: function () {
                                alert("服务合同保存成功！");
                                router.push("/contract/serviceList");
                            }

                        });
                    }, response => {
                        serverErrorInfo(response);
                    });
                }
            },
            change(){
                var me = this;
                if (jQuery("#service_add").valid()) {
                    me.$http.post("/api/service/change", {
                        id: me.change_id,
                        review: me.isReview,
                        path: me.path,
                        name: me.name
                    }).then(response => {
                        var data = response.data;
                        codeState(data.code, {
                            200: function () {
                                alert("服务合同保存成功！");
                                router.push("/contract/serviceList");
                            }

                        });
                    }, response => {
                        serverErrorInfo(response);
                    });
                }
            },
            resetAll(){
                this.name = "";
                this.path = "";
                me.isReview = 1;
                this.elementDropzone.removeAllFiles();
            }
        }
    }
</script>