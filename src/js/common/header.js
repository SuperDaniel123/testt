/**
 * Created by SuperDaniel on 2017/9/10.
 */
$('#back_to').on('click',function(){
    $.ajax({
        type:'get',
        url:'/v6/logout',
        success:function(data){
            if(data.code == 200){
                alert('ÍË³ö³É¹¦')
                location.href = '/dist/html/user/login.html';
            }
        }
    })
})