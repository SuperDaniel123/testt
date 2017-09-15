/**
 * Created by SuperDaniel on 2017/9/14.
 */
var loading ='<div class="overlay">'+
    '<img src="/public/img/loading.gif" />'
'</div>'
$('body').append(loading);
$(document).on('ajaxStart',function(){
    $('.overlay').show()
})

$(document).on('ajaxStop',function(){
    $('.overlay').hide()
})