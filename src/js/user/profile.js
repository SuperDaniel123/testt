require('../common/header.js')
require('../common/aside.js')
$(function(){
    $.ajax({
        url:"/v6/teacher/profile",
        type:'get',
        success:function(data){
            if(data.code==200){
                $('.teacher-profile').html(template('settings',data.result))
                $('.form-horizontal').on('submit',function(){
                    $.ajax({
                        url:'/v6/teacher/modify',
                        type:'POST',
                        data:{},
                        success:function(data){
                            if(data.code == 200){
                                alert('ÐÞ¸Ä³É¹¦')
                            }
                        }
                    })
                    return false
                })
            }

        }
    })
})

