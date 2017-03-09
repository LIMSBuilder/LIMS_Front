<template>
    <div class="page-content">
        <!-- BEGIN PAGE HEADER-->
        <!-- BEGIN PAGE BAR -->
        <div class="page-bar">
            <ul class="page-breadcrumb">
                <li>
                    <a href="index.html">Home</a>
                    <i class="fa fa-circle"></i>
                </li>
                <li>
                    <span>日程计划</span>
                </li>
            </ul>
        </div>
        <!-- END PAGE BAR -->
        <!-- BEGIN PAGE TITLE-->
        <h1 class="page-title"> 日程计划
            <small> / Calendar</small>
        </h1>
        <!-- END PAGE TITLE-->
        <!-- END PAGE HEADER-->
        <div class="row">
            <div class="col-md-12">
                <div class="portlet light portlet-fit bordered calendar">
                    <div class="portlet-title">
                        <div class="caption">
                            <i class=" icon-layers font-green"></i>
                            <span class="caption-subject font-green sbold uppercase">日历</span>
                        </div>
                    </div>
                    <div class="portlet-body">
                        <div class="row">
                            <div class="col-md-12 col-sm-12">
                                <div id="calendar" class="has-toolbar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade draggable-modal" id="calendar_modal" tabindex="-1" role="basic" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title" id="modal_title">添加事件</h4>
                    </div>
                    <div class="modal-body">
                        <form role="form" class="form-horizontal">
                            <div class="form-body">
                                <div class="form-group form-md-line-input">
                                    <label class="col-md-2 control-label" for="name">事件名称</label>
                                    <div class="col-md-8">
                                        <input type="text" class="form-control" v-model="eve.title" id="name"
                                               placeholder="请输入日程事件名称">
                                        <div class="form-control-focus"></div>
                                    </div>
                                </div>
                                <div class="form-group form-md-line-input">
                                    <label class="col-md-2 control-label" for="desp">事件描述</label>
                                    <div class="col-md-8">
                                        <textarea class="form-control" rows="3" v-model="eve.desp" placeholder="描述该事件"
                                                  id="desp"></textarea>
                                        <div class="form-control-focus"></div>
                                    </div>
                                </div>
                                <div class="form-group form-md-line-input">
                                    <label class="col-md-2 control-label" for="color">日程颜色</label>
                                    <div class="col-md-8">
                                        <input type="text" v-model="eve.backgroundColor" style="padding-left: 44px;"
                                               id="color"
                                               class="form-control demo"
                                               data-position="bottom left">
                                    </div>
                                </div>
                                <div class="form-group form-md-line-input">
                                    <label class="col-md-2 control-label" for="name">日程时间</label>
                                    <div class="col-md-8">
                                        <label class="control-label">{{eve.start}} 至 {{eve.end}}</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消</button>
                        <button type="button" class="btn green" @click="addEvent">确 认</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <div class="modal fade draggable-modal" id="calendarInfo_modal" tabindex="-1"
             aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">查看日程计划</h4>
                    </div>
                    <div class="modal-body">
                        <form role="form" class="form-horizontal">
                            <div class="form-body">
                                <div class="form-group form-md-line-input">
                                    <label class="col-md-2 control-label" for="name">事件名称</label>
                                    <div class="col-md-8">
                                        <label class="control-label">{{info.title}}</label>
                                    </div>
                                </div>
                                <div class="form-group form-md-line-input">
                                    <label class="col-md-2 control-label" for="desp">事件描述</label>
                                    <div class="col-md-8">
                                        <label class="control-label">{{info.desp}}</label>
                                    </div>
                                </div>
                                <div class="form-group form-md-line-input">
                                    <label class="col-md-2 control-label" for="name">日程时间</label>
                                    <div class="col-md-8">
                                        <label class="control-label">{{info.start}} 至 {{info.end}}</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">关 闭</button>
                        <button type="button" class="btn red" @click="removeEvent">删除行程</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
    </div>
</template>

<script>
    import 'mod/fullcalendar'
    import 'mod/fullcalendar_zh_CN'
    import 'mod/minicolors'
    import 'style/minicolors'
    import 'style/fullcalendar'
    module.exports = {
        data: function () {
            return {
                eve: {
                    backgroundColor: '#0088cc',
                    start: "",
                    end: ""
                },
                info: {
                    desp: ""
                }
            }
        },
        mounted(){
            var me = this;
            me.initCalendar();
            $("#calendar_modal").draggable({
                handle: ".modal-header"
            });
            $("#color").minicolors({
                control: $(this).attr('data-control') || 'hue',
                defaultValue: $(this).attr('data-defaultValue') || '',
                inline: $(this).attr('data-inline') === 'true',
                letterCase: $(this).attr('data-letterCase') || 'lowercase',
                opacity: $(this).attr('data-opacity'),
                position: $(this).attr('data-position') || 'bottom left',
                change: function (hex, opacity) {
                    if (!hex) return;
                    if (opacity) hex += ', ' + opacity;
                    if (typeof console === 'object') {
                        console.log(hex);
                    }
                },
                theme: 'bootstrap'
            });
        },
        methods: {
            addEvent: function () {
                var me = this;
                me.eve.backgroundColor = jQuery("#color").val();
                me.$http.post("/api/calendar/create", me.eve).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("日程计划添加成功！");
                            jQuery("#calendar_modal").modal("hide");
                            $('#calendar').fullCalendar("refetchEvents");

                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                });
            },
            removeEvent: function () {
                var me = this;
                me.$http.get("/api/calendar/delete", {
                    params: {
                        id: me.info.id
                    }
                }).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("日程计划删除成功！");
                            jQuery("#calendarInfo_modal").modal("hide");
                            $('#calendar').fullCalendar("refetchEvents");

                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                });
            },
            initCalendar: function () {
                var me = this;
                if (!jQuery().fullCalendar) {
                    return;
                }

                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();

                var h = {};

                if ($('#calendar').width() <= 400) {
                    $('#calendar').addClass("mobile");
                    h = {
                        left: 'title, prev, next',
                        center: '',
                        right: 'today,month,agendaWeek,agendaDay'
                    };
                } else {
                    $('#calendar').removeClass("mobile");
                    if (App.isRTL()) {
                        h = {
                            right: 'title',
                            center: '',
                            left: 'prev,next,today,month,agendaWeek,agendaDay'
                        };
                    } else {
                        h = {
                            left: 'title',
                            center: '',
                            right: 'prev,next,today,month,agendaWeek,agendaDay'
                        };
                    }
                }


                $('#calendar').fullCalendar('destroy'); // destroy the calendar
                $('#calendar').fullCalendar({ //re-initialize the calendar

                    disableDragging: false,
                    header: h,
                    editable: true,
                    selectable: true,
                    eventClick: function (event, jsEvent, view) {
                        me.info = {
                            id: event.id,
                            title: event.title,
                            start: event.start.format('YYYY-MM-DD HH:mm'),
                            end: event.end.format('YYYY-MM-DD HH:mm'),
                            desp: event.desp
                        };
                        jQuery("#calendarInfo_modal").modal("show");


                    },
                    select: function (startDate, endDate, allDay, jsEvent, view) {
                        me.eve = {
                            backgroundColor: '#0088cc',
                            start: startDate.format(),
                            end: endDate.format()
                        };
                        jQuery("#calendar_modal").modal("show");


                    },
                    eventDrop: function (event, dayDelta, revertFunc) {
                        me.$http.get("/api/calendar/drop", {
                            params: {
                                id: event.id,
                                start: event.start.format(),
                                end: event.end.format()
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("日程计划修改成功！");
                                    $('#calendar').fullCalendar("refetchEvents");

                                }
                            })
                        }, response => {
                            serverErrorInfo(response);
                        });
                    },
                    eventResize: function (event, dayDelta, revertFunc) {
                        me.$http.get("/api/calendar/drop", {
                            params: {
                                id: event.id,
                                start: event.start.format(),
                                end: event.end.format()
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("日程计划修改成功！");
                                    $('#calendar').fullCalendar("refetchEvents");

                                }
                            })
                        }, response => {
                            serverErrorInfo(response);
                        });
                    },
                    unselectAuto: true,
                    selectHelper: true,
                    events: function (start, end, timezone, callback) {
                        me.$http.get("/api/calendar/list").then(response => {
                            var data = response.data;
                            var events = data.results;
                            callback(events);
                        }, response => {
                            serverErrorInfo(response);
                        });
                    }
                });
            }
        }
    }
</script>