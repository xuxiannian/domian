var indexInit = {
    //时间格式化
    formatDate(){
        var s1 = new Date().getTime(),
            date = new Date(s1),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
          hour = date.getHours(),
          minute = date.getMinutes();
        if (month < 10) month = '0' + month;
        if (day < 10) day = '0' + day;
        if (hour < 10) hour = '0' + hour;
        if (minute < 10) minute = '0' + minute;
        return year + '/' + month + '/' + day + ' ' + hour + ':' + minute;
    },
    /*
    文字适应宽度字体变小
    _div:文字盒子
    _width：盒子宽度
    minSize：最小字号
    maxSize：最大字号
    */
    fontSizeFormat(_div, _width, minSize, maxSize) {
        var i;
        $(_div).css('font-size', minSize + "px");
        for (i = minSize; i < maxSize; i++) {
            if ($(_div).width() > _width) {
                $(_div).css('font-size', i + 'px');
                break;
            } else {
                $(_div).css('font-size', i + 'px');
            }
        }
    }
}
$(function(){
    $('.timeTxt').html(indexInit.formatDate());
    indexInit.fontSizeFormat("h1",650,16,30);
})