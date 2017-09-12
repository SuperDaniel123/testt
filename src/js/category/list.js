require('../common/header.js')
require('../common/aside.js')

$.ajax({
    url:'/v6/category',
    type:'GET',
    success:function(data){
        $('.table-bordered').append(template('tableList',data.result))
    }
})

