
(function(window,$){
    
    // 一开始用对象，obj得通过函数
    //构造函数
    var Zolanav = function(ele, opt){
        $ele = this.$element = ele,
        $body = $("body");
        $Tbody = $(".Tbody-box");
        $nav = $(".nav");
        $win = $(window);

        $Tbody.append("<div class='Tzindex'></div>");
        $Tzindex = $('.Tzindex');

        this.defaults = {
            nav_w : "5.6rem" || $(".nav").css("width"),
            fixeTop : true,
        },
        this.options = $.extend({}, this.defaults, opt);

        _self = this;
        Topts = this.options;
        scrollstart = true;
        Tnavtime = null;
        wTop = 0;
    }

    // var zolanav = function(ele, opt) {
    //     this.$element = ele,
    //     this.defaults = {
    //         'color': 'red',
    //         'fontSize': '12px',
    //         'textDecoration':'none'
    //     },
    //     this.options = $.extend({}, this.defaults, opt)
    // }

    // Zolanav.prototype = {
    //     bg : function(){
    //         return this.$element.css({
    //             'backgroundColor': this.options.bg
    //         })
    //     }
    // }
    //创建原型
     Zolanav.prototype = {
        hd_fixed_top : function(){
            // console.log(this)
            // console.log(this.Tobj.attr("class"))
            // var Tobj = this.$element
            $ele.wrapInner("<div class='hd-fixed-top'></div>");

            var hd_h = $ele.height();
            var hd_offsettop = $ele.offset().top;
            var $hdFix = $('.hd-fixed-top');
            var hd_htop = hd_h + hd_offsettop;

            var ss = $(window).scrollTop();
            var set_time = null;

            $(window).on("scroll",function(){
                var s = $(window).scrollTop();

                clearTimeout(set_time)
                set_time = setTimeout(function(){
                    if(s>hd_htop & scrollstart & s>ss){
                        $hdFix.css({
                            'position':'fixed',
                            'top':'-'+hd_h+"px",
                        });
                    }else if(s <= hd_offsettop & scrollstart){
                        $hdFix.css({
                            'position':'relative',
                            'top':0,
                        });
                    }
                    else{
                        $hdFix.css({
                            'position':'fixed',
                            'top':0,
                        });
                    }
                    ss = s;
                },100)
            })
            
        },
        navClose : function(){
            $Tzindex.hide();
            $Tbody.css('left','0');
            Tnavtime = setTimeout(function(){$nav.hide();},1000);
            scrollstart = true;
            $body.removeClass('Tadd');//去掉给body的类
            $win.scrollTop(wTop);//设置页面滚动的高度，如果不设置，关闭弹出层时页面会回到顶部。
            $body.off();
        },
        navOpen : function(){

           clearTimeout(Tnavtime);
           wTop = $win.scrollTop();
           // $body.css("top",-Topts.wTop+"px");//给body一个负的top值；
           // $body.addClass('Tadd');//给body增加一个类，position:fixed; 
           $body.css("top",-wTop+"px").addClass('Tadd');

           $Tbody.css('left',Topts.nav_w);
           $nav.show();
           $Tzindex.show();
           scrollstart = false;
           $body.on("click",function(){
                _self.navClose();
            });
           return false;
        },
        init : function(){
            
            if(Topts.fixeTop){
                _self.hd_fixed_top()
            }
            
            //Tbody高度
            var nav_h = $nav.height();
            $Tbody.css('minHeight',nav_h+'px');

            // //设置nav长度
            $nav.css("width",Topts.nav_w);
            $(".nav-btn").on("click",function(){
               var Tbody_l = parseInt($Tbody.css('left'));
                if(Tbody_l == 0){
                    _self.navOpen();
                    return false;
                }

            });

            return this.$element
        }
    }
    $.fn.gxmnav = function(option){
        var zolanav = new Zolanav(this, option);
        return zolanav.init()
    }
}(window,jQuery));



;(function(w,$){
    var hdNavActive = function(obj){
        this.obj = obj;
    }
    hdNavActive.prototype = {
        navAct : function(index){
            this.obj.eq(index).addClass('active').siblings().removeClass('active');
        },
        navPd : function(){
            var _self = this;
            var filename = w.location.href;
            filename = filename.substr(filename.lastIndexOf("/")+1);
            // filename=filename.substr(filename.lastIndexOf("/")+1);
            if(filename.indexOf("html")>=0 || filename.indexOf("aspx")>=0){
                filename = filename.substr(0,filename.indexOf("_",2));
            }
            else{
                filename = "index"
            }

            this.obj.find("a").each(function(){
                var Tn = $(this).attr("href");
                if(Tn.indexOf(filename)>=0){
                    var Tindex = $(this).parent().index();
                    _self.navAct(Tindex);
                    return false;
                }
            })
        },
        init : function(){
            this.navPd();
            console.log(22)
            return this.obj;
        }
    };
    $.fn.hdNavActive = function(){
        var nav = new hdNavActive(this);
        nav.init();
    }
}(window,jQuery));

$(function() {
   function header_add(){
        var index = "M_index_C.html";
        var service = "M_service_C.html";
        var contact = "M_contact_C.html";
        var news = "M_news_C.html";
        var product = "M_product_C.html";
        var media = "M_media_C.html";
        var scase = "M_scase_C.html";

        var header_add = "<div class='wrap'>"+
                            "<div class='hd-left'>"+
                                "<a href="+index+">"+
                                    "<img src='M_image/hd-logo.png' class='hd-logo' />"+
                                    "<p class='txt'>把世界连起来<br />让企业享受一切</p>"+
                                "</a>"+
                            "</div>"+
                            "<div class='hd-nav'>"+
                                "<a class='nav-btn' href='javascript:;'><i class='iconfont ico-hdbtn'></i></a>"+
                            "</div>"+
                        "</div>";

        var footer_add = "<div class='ft-txt'>"+
                            "<p><i class='iconfont ico-dianhua'></i><span>客服：0754-87231283</span></p>"+
                            "<p><i class='iconfont ico-dh'></i><span>地址：广东省汕头市金平区友谊大厦2101</span></p>"+
                         "</div>";

        var nav_add = "<ul>"+
                           "<li><a href="+index+"><i class='iconfont ico-dhsy'></i>网站首页</a></li>"+
                           "<li><a href="+product+"><i class='iconfont ico-dhcp'></i>三互产品</a></li>"+
                           "<li><a href="+service+"><i class='iconfont ico-dhfw'></i>企业服务</a></li>"+
                           "<li><a href="+media+"><i class='iconfont ico-dhcm'></i>企业传媒</a></li>"+
                           "<li><a href="+scase+"><i class='iconfont ico-dhfa'></i>服务案例</a></li>"+
                           "<li><a href="+news+"><i class='iconfont ico-dhzx'></i>行业资讯</a></li>"+
                           "<li><a href="+contact+"><i class='iconfont ico-dhlx'></i>联系我们</a></li>"+
                       "</ul>";

        $(".header").append(header_add);
        $(".footer").append(footer_add);
        $(".nav").append(nav_add);
   };

   header_add();

   

   /*添加置顶*/
   function add_toTop(){
       $("<div class='scrolltop'><i class='iconfont ico-totop'></i></div>").appendTo('body');
       if($(this).scrollTop()==0){
           $("#toTop").hide();
       }
   }
   add_toTop();
   $(".scrolltop").click(function(event) {
       $("html,body").animate({
           scrollTop:"0px"},
           300
           )
   });

    /*************************************
       导航样式添加
    ************************************/
   // function nav_act(n){
   //     $(".nav ul li").eq(n).addClass('active').siblings('li').removeClass('active');
   // };
   // function nav_reg(){
   //     //获取文件名
   //     var filename=window.location.href;
   //     filename=filename.substr(filename.lastIndexOf("/")+1);

   //     //判断是文件名还是端口号进入
   //     if(filename.indexOf("html")>=0 || filename.indexOf("aspx")>=0){
   //         //获取文件名的头几个字符
   //         filename = filename.substr(0,filename.indexOf("_",2))
   //     }
   //     else{
   //         filename = "index";
   //     }

   //     //循环判断文件名对应的导航
   //     $(".nav ul li a").each(function(){
   //         var Tn = $(this).attr("href");

   //         if(Tn.indexOf(filename)>=0){
   //             var Tindex = $(this).parent().index();
   //             nav_act(Tindex);

   //             return false;
   //         }
   //     });
   // };
   // nav_reg();
   $(".nav ul li").hdNavActive()

   /************** 
   导航置顶隐藏加左拉 
   ***************/
   var nav_b  = new $(".header").gxmnav({})
   // console.log(nav_b.attr("class"));
   //  var nav_c  = new $(".main-sj").gxmnav({})
   // var nav_d  = new $(".footer").gxmnav({})
   // function nav_fix_left(){

   // //     //控制置顶导航的开关
   //     var scrollstart = true;

   //     function hd_fixed_top(){
   //         var $header = $(".header");
   //         var hd_h = $header.height();
   //         var hd_w = $header.width();
   
   //         /*包裹节点*/
   //         $header.wrapInner("<div class='hd-fixed-top'></div>");

   //         var hd_offsettop = $header.offset().top;
   //         var ss = $(window).scrollTop();
   //         $(window).scroll(function(){

   //             var s = $(window).scrollTop();
   //             if(s>hd_h & scrollstart & s>ss+10){
   //                 $('.hd-fixed-top').css({
   //                     'position':'fixed',
   //                     'top':'-'+hd_h+'px',
   //                 });

   //             }else if(s <= hd_offsettop & scrollstart){
   //                 $('.hd-fixed-top').css({
   //                     'position':'relative',
   //                     'top':0,
   //                 });
   //             }
   //             else if(s < ss - 10){
   //                 $('.hd-fixed-top').css({
   //                         'position':'fixed',
   //                         'top':0,
   //                     });
   //             }
   //             ss = s;
   //         })
   //     }
   //     hd_fixed_top();

   //     //添加遮罩
   //     $('.Tbody-box').append("<div class='Tzindex'></div>");

   //     //Tbody高度
   //     var nav_h = $('.nav').height();
   //     $('.Tbody-box').css('minHeight',nav_h+'px');

   //     //设置nav长度
   //     var nav_w = "5.6rem";
   //     $(".nav").css("width",nav_w);

   //     var Tnavtime = null;  //收起时的导航隐藏定时器

   //     var top = 0;
   //     /*导航按钮*/
   //     function closenav(){
   //         $('.Tzindex').hide();
   //         $('.Tbody-box').css('left','0');
   //         Tnavtime = setTimeout(function(){$('.nav').hide();},1000);
   //         scrollstart = true;
   //         $('body').removeClass('Tadd');//去掉给body的类
   //         $(window).scrollTop(top);//设置页面滚动的高度，如果不设置，关闭弹出层时页面会回到顶部。
   //         $("body").css("cursor","auto");
   //         $(document).off();
   //     };
   //     $('.nav-btn').click(function(){
   //         var Tbody_l = parseInt($('.Tbody-box').css('left'));
   //         if(Tbody_l == 0){
   //             clearTimeout(Tnavtime);

   //             top = $(window).scrollTop();
   //             $('body').css("top",-top+"px");//给body一个负的top值；
   //             $('body').addClass('Tadd');//给body增加一个类，position:fixed; 

   //             $('.Tbody-box').css('left',nav_w);
   //             $('.nav').show();
   //             $('.Tzindex').show();
   //             scrollstart = false;
   //             $("body").css("cursor","pointer");
   //             $(document).on("click",function(){
   //                     closenav();
   //              })
   //             return false;
   //         }
   //     });
   // };
   // nav_fix_left();
});