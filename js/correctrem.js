
//rem矫正
function correctrem(){
    var rem_full_width = $("<div id='rem-test' style='width:10.8rem;'></div>").appendTo($('body')).width();
    var device_width = Math.min(document.documentElement.clientWidth,1080);
    if(rem_full_width !== device_width){
    document.documentElement.style.fontSize = (device_width / 10.80) * (device_width/rem_full_width)+'px';
    }
    $('#rem-test').remove();
}
correctrem();
