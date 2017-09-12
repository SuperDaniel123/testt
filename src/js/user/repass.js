require('../common/header.js')
require('../common/aside.js')

$('.form-horizontal').on('submit',function(){
    if($('#input-pass').val() != $('#input-pass-repeat').val()){
        alert('两个密码不一致')
    }else if($('#input-pass').val() == $('#input-pass-repeat').val()){
        $.ajax({
            url:'/v6/teacher/repass',
            type:'POST',
            data:$('.form-horizontal').serialize(),
            success:function(data){
                if(data.code==200){
                    alert('修改成功')
                    location.href='/dist/html/user/profile.html'
                }
            }
        })
    }
    return false;
})