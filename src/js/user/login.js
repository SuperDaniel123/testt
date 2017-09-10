$('#login-form').on('submit',function(){
    var that = $(this)
    $.ajax({
        url:'/v6/login',
        type:'post',
        data:that.serialize(),
        success:function(data){
            if(data.code == 200){
                alert('登陆成功')
                location.href='/dist/index.html';
            }
            else{
                alert('登陆失败')
            }
        },
        error:function(){
          alert('登录失败')
        }
    })
    return false
})