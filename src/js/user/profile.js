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
                    var fromData = $(".form-horizontal").serialize()
                    $.ajax({
                        url:'/v6/teacher/modify',
                        type:'POST',
                        data:fromData,
                        success:function(data){
                            if(data.code == 200){
                                alert('修改成功')
                                window.location.href=window.location.href;
                            }
                        }
                    })
                    return false
                })

            }

        }
    })

})

