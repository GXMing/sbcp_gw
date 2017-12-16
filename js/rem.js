 function set_rem(){
            // rem计算
            var deviceWidth = document.documentElement.clientWidth;
            if(deviceWidth > 1080) deviceWidth = 1080;
            document.documentElement.style.fontSize = deviceWidth / 10.8 + 'px';
        }
        set_rem();
        window.onresize = function () {set_rem();}