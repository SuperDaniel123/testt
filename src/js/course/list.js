require('../common/header.js')
require('../common/aside.js')

$.ajax({
    url:'/v6/course',
    success:function(data){
        if(data.code == 200) {
            $('.courses').html(template('course-list', data.result))
        }
    }
})