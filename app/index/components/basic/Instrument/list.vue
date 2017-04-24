<template>
    <div>
        <h1 class="page-title"> 仪器设备
            <small>／Instrument</small>
        </h1>
        <div class="row">
            <div class="col-md-12">
                <!-- BEGIN BORDERED TABLE PORTLET-->
                <div class="portlet light portlet-fit bordered">
                    <div class="portlet-title">
                        <div class="caption">
                            <div class="clearfix">
                                <a href="javascript:;" @click="create" class="btn btn-sm green"> 创 建
                                    <i class="fa fa-plus"></i>
                                </a>
                                <a href="javascript:;" class="btn btn-sm btn-info" @click="selectAll"> 全 选
                                    <i class="fa fa-check-square-o"></i>
                                </a>
                                <a href="javascript:;" @click="removeAll" class="btn btn-sm red"> 删 除
                                    <i class="fa fa-trash-o"></i>
                                </a>
                                <a href="javascript:;" @click="total" class="btn btn-sm default"> 全 部
                                    <i class="fa fa-list"></i>
                                </a>
                            </div>
                        </div>
                        <div class="actions">
                            <div class="input-icon right">
                                <i class="fa fa-search"></i>
                                <input type="text" class="form-control" placeholder="搜索..."
                                       @keyup.enter="search($event)">
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="table-scrollable table-scrollable-borderless">
                            <table class="table table-hover table-light">
                                <thead>
                                <tr class="uppercase">
                                    <th> 选择</th>
                                    <th> 编号</th>
                                    <th> 固定资产编号</th>
                                    <th> 仪器设备名称</th>
                                    <th> 设备型号</th>
                                    <th> 设备出厂编号</th>
                                    <th> 生产厂家</th>
                                    <th> 价格</th>
                                    <th> 溯源方式</th>
                                    <th> 放置地点</th>
                                    <th>保管人</th>
                                    <th> 最后检定日期</th>
                                    <th> 有效日期</th>
                                    <th> 证书号</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="(item,index) in equipmentlist">
                                    <tr>
                                        <td class="text-center">
                                            <label class="mt-checkbox mt-checkbox-outline">
                                                <input type="checkbox" :value="item.id" name="select"
                                                       v-model="selected">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td class="text-center"> {{index+1}}</td>
                                        <td class="text-center"> {{item.GIdentify}}</td>
                                        <td class="text-center"> {{item.name}}</td>
                                        <td class="text-center"> {{item.type}}</td>
                                        <td class="text-center"> {{item.Fidentify}}</td>
                                        <td class="text-center"> {{item.factory}}</td>
                                        <td class="text-center"> {{item.price}}</td>
                                        <td class="text-center"> {{item.method}}</td>
                                        <td class="text-center"> {{item.place}}</td>
                                        <td class="text-center"> {{item.people}}</td>
                                        <td class="text-center"> {{item.finalTime}}</td>
                                        <td class="text-center"> {{item.time}}</td>
                                        <td class="text-center"> {{item.certificate}}</td>
                                        <td class="text-center">
                                            <button type="button" class="btn btn-sm blue btn-outline"
                                                    @click="edit(item)">修 改
                                            </button>
                                            <button type="button" class="btn btn-sm red btn-outline"
                                                    @click="remove(item.id)">删 除
                                            </button>
                                        </td>
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
                </div>
                <!-- END BORDERED TABLE PORTLET-->
            </div>
        </div>
    </div>
</template>

<script type="es6">
    module.exports = {
        data: function () {
            return {
                userList: [],
                equipment: {
                    GIdentify: "BEM-101-001",
                    name: "电导率仪",
                    type: "DDS-307",
                    Fidentify: "610510N0014020193",
                    factory: "上海仪电科学仪器股份有限公司",
                    price: 1400,
                    method: "检定",
                    place: "化学分析室（二）",
                    people: "",
                    finalTime: "2016.06.03",
                    time: "2017.06.02",
                    certificate: "20162018505001"
                },
                equipmentList: {
                }
            }
        },
        mounted(){
            var me = this;
            me.fetchEquipmentList();

        },
        methods: {
            create(){
                router.push("/instrument/create");
            },
            selectAll(){

            },
            removeAll(){

            },
            total(){

            },
            fetchEquipmentList(){
                var me = this;
                me.$http.get("/api/equip/list").then(response => {
                    var data = response.data;
                    me.equipmentlist = data.results;
                }, response => {
                    serverErrorInfo(response);
                })
            }
        }
    }

</script>
