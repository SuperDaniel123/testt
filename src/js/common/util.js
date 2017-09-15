/**
 * Created by SuperDaniel on 2017/9/14.
 */

//½âÎölocation.search

function getSearch(key){
    var searchSty = location.search.slice(1)
    var searchArr = searchSty.split('&');
    var searchObj = {},tempArr

    for(var i = 0; i< searchArr.length; i++){
        tempArr = searchArr[i].split('=')
        searchObj[tempArr[0]] = tempArr[1]
    }
    return key == null?searchObj:searchObj[key]
}

module.exports.getSearch = getSearch;