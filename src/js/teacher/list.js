require('../common/header.js')
require('../common/aside.js')
require('../common/common.js')
require('../common/loading.js')

$.ajax({
    url:'/v6/teacher',
    type:'get',
    success:function(data){
        $('.table-striped').append(template('teacher-list-tpl',data.result))
    }
})

$(document).on('click', '.btn-teacher-status', function() {
    var $this = $(this);   // 这里保存按钮是为了在ajax的回调中再次使用
    var data = {
        tc_id: $(this).attr('data-id'),
        tc_status: $(this).attr('data-status')
    };
    $.post('/v6/teacher/handle', data, function(data) {
        var newStatus = data.result.tc_status;
        $this.text(newStatus == 0? '注 销': '启 用');  // 更新按钮的文本
        $this.attr('data-status', newStatus);            // 修改自定位属性为新的status
    });
});