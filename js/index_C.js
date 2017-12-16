    $(function(){
        /************** banner轮播 ************/
        var mySwiper = new Swiper ('.main-banner .swiper-container', {
                                direction: 'horizontal',
                                loop: true,
                                autoplay : 3000,
                                effect : 'fade',
                                pagination: '.main-banner .swiper-pagination',
                                autoplayDisableOnInteraction : false,
                                paginationClickable :true,
                            });



        /*********************************** 
            服务数据动画
        *****************************/
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',') //设置分隔符
        $('#lines1').prop('number', 800).animateNumber({ 
                    number: 1988 ,
                    easing: 'linear',
                    numberStep: comma_separator_number_step,
                },2000);
        $('#lines2').animateNumber({ 
            number: 433 ,
            easing: 'linear',
            numberStep: comma_separator_number_step
        },1600);
        $('#lines3').animateNumber({ 
            number: 10976 ,
            easing: 'linear',
            numberStep: comma_separator_number_step
        },1600);
        $('#lines4').animateNumber({ 
            number: 29 ,
            easing: 'linear',
            numberStep: comma_separator_number_step
        },1600);



        /**************************
            服务内容切换函数
        *********************/
        $(".ser-nav").on("mouseenter","li",function(){
                var $this = $(this);
                var Tindex = $this.index();
                $this.addClass("active").siblings('li').removeClass("active");
                $(".ser-menu li").eq(Tindex).show().addClass('ani-r').siblings('li').hide().removeClass('ani-r');

        });


       /******************************
            动画背景
        *****************************/
        //配置
        $("#mydiv").height($(".main-service").height())
        var config = {
            vx: 4,  //小球x轴速度,正为右，负为左
            vy: 4,  //小球y轴速度
            height: 2,  //小球高宽，其实为正方形，所以不宜太大
            width: 2,
            count: 40,     //点个数
            color: "174,174,174",   //点颜色
            stroke: "174,174,174",      //线条颜色
            dist: 160000,   //点吸附距离
            e_dist: 40000,  //鼠标吸附加速距离
            max_conn: 4    //点到点最大连接数
            //dist: 100000,   //点吸附距离
            //e_dist: 20000,  //鼠标吸附加速距离
            //max_conn: 10    //点到点最大连接数
        }
        //调用
        CanvasParticle(config);



        /******************************
            网站图片滚动函数
        ****************************/
        function ani_top(obj,num_px,to_time,settime){
            
            var alltime = obj.alltime || 6000;
            var obj = obj;             //图片
            var num_px = num_px;    //到尾部的位置
            var to_time = to_time;  //第一次进入动画时间
            var del_time = 1500;   //到尾部停顿时间

            obj.setfun = function(){
                if(obj.tofx == "fxtop"){
                    obj.animate({"top": 0 },to_time,"linear",function(){
                            obj.tofx = "fxbottom";
                            ani_top(obj,num_px,alltime,false,del_time);
                    });
                }
                else{
                    obj.animate({"top":num_px},to_time,"linear",function(){
                            obj.tofx = "fxtop";
                            ani_top(obj,num_px,alltime,false,del_time);
                    });
                }
            }

            if(settime){    //设置第一次不延迟
                obj.setfun();
            }
            else{
                obj.delay(del_time).setfun();
            }

            var $li = obj.parents("li")
            $li.mouseleave(function(){
                obj.attr("tofx",obj.tofx);
                obj.stop().animate({});
            });
        };

        $(".show-menu").on("mouseenter","li",function(){
            var $img = $(this).find(".img-box img");
            var Top = $img.position().top;
            var img_h = $img.height();
            var to_top = img_h - 175;

            $img.tofx = $img.attr("tofx") || "fxbottom";

            $img.alltime = img_h/(0.06);        //图片滚动所需总时间 图片高度/（速度） 定义属性不能用var
            var at_top = to_top + Top;          //计算初始的top
            if($img.tofx == "fxtop"){
                at_top = -Top;  
            }

            var to_time = $img.alltime/to_top * at_top;  //初始计算时间

            ani_top($img,- to_top,to_time,true);
        });

        //$("body").css("min-width","auto");

        // /**************************
        //     欢迎页面嵌套函数
        // *****************************/

        //  var h = $(window).height();
        // var ss = '<div id="showcloneshengxiaon"><iframe id="testIframe" scrolling="no" marginheight=0 marginwidth=0 frameborder="0" width="100%" width="1400" height='+h+'  src="welcome_C.html"></iframe></div>';
        // document.getElementById("showcloneshengxiaon").innerHTML = ss;

        // try {　　
        //     var tim =  setInterval(function () {　　
        //                         try {　　
        //                             document.getElementById("div" + "All").style.display = "none";　　
        //                         } catch (e) {}　　
        //                         for (var i = 0; i < document.body.children.length; i++) {
        //                             try {
        //                                 var myid = document.body.children[i].id;
        //                                 if (myid != "iconDiv1" && myid != "showcloneshengxiaon") {
        //                                     document.body.children[i].style.display = "none";
        //                                 }
        //                                 if(i >= document.body.children.length - 1){
        //                                     window.clearInterval(tim)
        //                                 }
        //                             } catch (e) {}
        //                         }　　
        //                     }, 100);
        // } catch (e) {}
    });





