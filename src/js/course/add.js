require('../common/header.js')
require('../common/aside.js')
require('../common/loading.js')
require('../common/common.js')

$('#course-add-form button[type="submit"]').on('click',function(){
    $.ajax({
        url:'/v6/course/create',
        type:'post',
        data:$('#course-add-form').serialize(),
        success:function(data){
            if(data.code == 200){
                alert('创建成功')
                location.href = '/dist/html/course/course_edit_step1.html?cs_id=' + data.result.cs_id;
            }
        }
    })
    return false;
})
