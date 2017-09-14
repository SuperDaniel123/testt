require('../common/header.js')
require('../common/aside.js')

$.ajax({
    url:'/v6/category/top',
    type:'get',
    success:function(data){
        if(data.code == 200){
            $("#selectd").html(template('select-tpl',data.result))
        }
    }
})

$("#categoryFrom").on('submit',function(){
    $.ajax({
        url:'/v6/category/add',
        type:'post',
        data:$("#categoryFrom").serialize(),
        success:function(data){
            if(data.code == 200){
                alert('创建了一个新学科')
            }
        }
    })
    return false;
})
