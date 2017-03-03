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
                    <span>日程安排</span>
                </li>
            </ul>
        </div>
        <!-- END PAGE BAR -->
        <!-- BEGIN PAGE TITLE-->
        <h1 class="page-title"> 日程安排
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

                        <form role="form">
                            <div class="form-body">
                                <div class="form-group form-md-line-input">
                                    <input type="text" class="form-control" id="form_control_1" placeholder="请输入事件名称">
                                    <label for="form_control_1">事件名称</label>
                                </div>
                                <div class="form-group form-md-line-input">
                                    <textarea class="form-control" rows="3" placeholder="请输入事件描述"></textarea>
                                    <label for="form_control_1">事件描述</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消</button>
                        <button type="button" class="btn green">确 认</button>
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
    import 'style/fullcalendar'
    module.exports = {
        data: function () {
            return {}
        },
        mounted(){
            var me = this;
            me.initCalendar();
            $("#calendar_modal").draggable({
                handle: ".modal-header"
            });
        },
        methods: {
            initCalendar: function () {
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
                    dayClick: function (date, allDay, jsEvent, view) {
                        console.log('dayClick触发的时间为：', date.format());
                    },
                    eventClick: function (event, jsEvent, view) {
                        console.log('eventClick中选中Event的id属性值为：', event.id);
                        console.log('eventClick中选中Event的title属性值为：', event.title);
                        console.log('eventClick中选中Event的start属性值为：', event.start.format('YYYY-MM-DD HH:mm'));
//                        console.log('eventClick中选中Event的end属性值为：', event.end.format('YYYY-MM-DD HH:mm'));
                        console.log('eventClick中选中Event的color属性值为：', event.color);
                        console.log('eventClick中选中Event的className属性值为：', event.className);
                    },
                    select: function (startDate, endDate, allDay, jsEvent, view) {
                        console.log('select触发的开始时间为：', startDate.format());
                        console.log('select触发的结束时间为：', endDate.format());
                        jQuery("#calendar_modal").modal("show");


                    },
                    eventDrop : function( event, dayDelta, revertFunc ) {
                        //do something here...
                        console.log('eventDrop --- start ---');
                        console.log('eventDrop被执行，Event的title属性值为：', event.title);
                        if(dayDelta._days != 0){
                            console.log('eventDrop被执行，Event的start和end时间改变了：', dayDelta._days+'天！');
                        }else if(dayDelta._milliseconds != 0){
                            console.log('eventDrop被执行，Event的start和end时间改变了：', dayDelta._milliseconds/1000+'秒！');
                        }else{
                            console.log('eventDrop被执行，Event的start和end时间没有改变！');
                        }
                        //revertFunc();
                        console.log('eventDrop --- end ---');
                        // ...
                    },
                    unselectAuto: true,
                    selectHelper: true,
                    events: [{
                        id:1,
                        title: '全天事件',
                        start: new Date(y, m, 1),
                        backgroundColor: App.getBrandColor('yellow')
                    }, {
                        id:2,
                        title: '长事件',
                        start: new Date(y, m, d - 5),
                        end: new Date(y, m, d - 2),
                        backgroundColor: App.getBrandColor('blue')
                    }, {
                        id:3,
                        title: 'Repeating Event',
                        start: new Date(y, m, d - 3, 16, 0),
                        allDay: false,
                        backgroundColor: App.getBrandColor('red')
                    }, {
                        id:4,
                        title: 'Repeating Event',
                        start: new Date(y, m, d + 6, 16, 0),
                        allDay: false,
                        backgroundColor: App.getBrandColor('green')
                    }, {
                        id:5,
                        title: 'Meeting',
                        start: new Date(y, m, d + 9, 10, 30),
                        allDay: false
                    }, {
                        title: 'Lunch',
                        start: new Date(y, m, d, 14, 0),
                        end: new Date(y, m, d, 14, 0),
                        backgroundColor: App.getBrandColor('grey'),
                        allDay: false
                    }, {
                        title: 'Birthday',
                        start: new Date(y, m, d + 1, 19, 0),
                        end: new Date(y, m, d + 1, 22, 30),
                        backgroundColor: App.getBrandColor('purple'),
                        allDay: false
                    }, {
                        title: 'Click for Google',
                        start: new Date(y, m, 28),
                        end: new Date(y, m, 29),
                        backgroundColor: App.getBrandColor('yellow'),
                        url: 'http://google.com/'
                    }]
                });
            }
        }
    }
</script>