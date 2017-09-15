require('../common/header.js')
require('../common/aside.js')
require('../common/loading.js')
require('../common/common.js')

$.ajax({
    url:'/v6/course/basic',
    type:'GET',
    data:{cs_id:2},
    success:function(data){
        if(data.code==200){
            $('#course-edit1').append(template('course-edit1-tpl', data.result));
        }
    }
})