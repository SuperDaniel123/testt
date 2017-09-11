/**
 * Created by SuperDaniel on 2017/9/10.
 */
var userinfoSrt = localStorage.getItem('userinfo');
var userinfo = JSON.parse(userinfoSrt);
$('.avatar img').attr('src',userinfo.tc_avatar);
$('.profile h4').text(userinfo.tc_name);



$('.navs a').on('click',function(){
    $(this).next('ul').slideToggle();
    //$(this).parent('li').siblings().children('ul').slideToggle()
})

var path = location.pathname;

$('.navs a').removeClass('active');
$('.navs a[href="' + path + '"]').addClass('active').parents('ul').show();