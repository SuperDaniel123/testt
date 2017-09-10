$('#back_to').on('click',function(){
    $.ajax({
        type:'get',
        url:'/v6/logout',
        success:function(data){
            if(data.code == 200){
                alert('退出成功')
                location.href = '/dist/html/user/login.html';
            }
        }
    })
})