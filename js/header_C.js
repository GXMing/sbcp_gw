$(function(){
    function header_add(){
        var index = "index_C.html";
        var product = "product_C.html";
        var service = "service_C.html";
        var media = "media_C.html";
        var news = "news_C.html";
        var contact = "contact_C.html";
        var scase = "scase_C.html";

        var header_add = "<h1 style='display:none;'>汕头市三互科技有限公司</h1>"+
                            "<div class='wrap clearfix'>"+
                                "<div class='hd-logo'>"+
                                    "<a href="+index+">"+
                                        "<img src='image/hd-logo.png' />"+
                                        "<p class='txt'>把世界连起来<br />让企业享受一切</p>"+
                                    "</a>"+
                                "</div>"+
                                "<nav class='hd-nav'>"+
                                    "<h3 style='display:none;'>网站导航</h3>"+
                                    "<ul class='clearfix'>"+
                                        "<li class='nav-item'><a href="+index+">首页</a></li>"+
                                        "<li class='nav-item'>"+
                                            "<a href="+product+">三互产品</a>"+
                                            // "<ul class='subnav'>"+
                                            //     "<li class='subnav-item'>"+
                                            //         "<a href='###'>ddd</a>"+
                                            //         "<a href='###'>ddd</a>"+
                                            //         "<a href='###'>ddd</a>"+
                                            //         "<a href='###'>ddd</a>"+
                                            //     "</li>"+
                                            // "</ul>"+
                                        "</li>"+
                                        "<li class='nav-item'><a href="+service+">企业服务</a></li>"+
                                        "<li class='nav-item'><a href="+media+">企业传媒</a></li>"+
                                        "<li class='nav-item'><a href="+scase+">服务案例</a></li>"+
                                        "<li class='nav-item'><a href="+news+">行业资讯</a></li>"+
                                        "<li class='nav-item'><a href="+contact+">联系我们</a></li>"+
                                    "</ul>"+
                                "</nav>"+
                            "</div>";

        var footer_add = "<div class='ft-txt'>"+
                            "<p><i class='iconfont ico-dianhua'></i><span>客服：0754-87231283</span></p>"+
                            "<p><i class='iconfont ico-yj'></i><span>传真：0754-87231283</span></p>"+
                            "<p><i class='iconfont ico-dh'></i><span>地址：广东省汕头市金平区友谊大厦2101</span></p>"+
                        "</div>";

        $(".header").append(header_add);
        $(".footer").append(footer_add);
    };
    header_add();

     /*************************************
        导航样式添加
     ************************************/
    function nav_act(n){
        $(".hd-nav ul .nav-item").eq(n).addClass('active').siblings('li').removeClass('active');
    };
    function nav_reg(){
        //获取文件名
        var filename=window.location.href;
        filename=filename.substr(filename.lastIndexOf("/")+1);

        //判断是文件名还是端口号进入
        if(filename.indexOf("html")>=0 || filename.indexOf("aspx")>=0){
            //获取文件名的头几个字符
            filename = filename.substr(0,filename.indexOf("_",2))
        }
        else{
            filename = "index";
        }

        //循环判断文件名对应的导航
        $(".hd-nav ul li a").each(function(){
            var Tn = $(this).attr("href");

            if(Tn.indexOf(filename)>=0){
                var Tindex = $(this).parent().index();
                nav_act(Tindex);

                return false;
            }
        });
    };
    nav_reg();


    /***********************
        导航置顶
    ***********************/
    function hd_fixed_top(){
        var $header = $(".header");
        var hd_h = $header.height();
        var hd_w = $header.width();
        $header.height(hd_h);
        /*包裹节点*/
        $header.wrapInner("<div class='hd-fixed-top'></div>");

        var hd_offsettop = $header.offset().top;
        var ss = $(window).scrollTop();
        $(window).scroll(function(){

            var s = $(window).scrollTop();
            if(s <= hd_offsettop){
                $('.hd-fixed-top').css({
                    'position':'relative',
                    'top':0,
                });
            }
            else{
                $('.hd-fixed-top').css({
                        'position':'fixed',
                        'top':0,
                    });
                ss = s;
            }
        })
    }
    hd_fixed_top();
});