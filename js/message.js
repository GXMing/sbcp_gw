
$(function(){

    function message_js(){
        var Tpd = true;
        //判断内容
        $('.submit-btn').click(function(){
            
            if(Tpd){
                var name = $('#name').val();
                var phone = $('#phone').val();
                var text = $('#text').val();


                var name_re = name.replace(/\s/g, "").length ==0;
                var phone_re = phone.replace(/\s/g, "").length ==0;
                var text_re = text.replace(/\s/g, "").length == 0;

                var Tlang = $('meta[name=Tlang]').attr('content');

                if(Tlang=="Eng"){
                    if(name_re){
                        alert("Please enter your name！");
                        return false;
                    }
                    if(phone_re){
                        alert("Please enter contact number！");
                        return false;
                    }
                    if(text_re){
                        alert("Please enter your message！");
                        return false;
                    }
                }
                else{
                    if(name_re){
                        alert("请输入姓名！");
                        return false;
                    }
                    if(phone_re){
                        alert("请输入您的号码！");
                        return false;
                    }
                    if(text_re){
                        alert("请输入留言内容！");
                        return false;
                    }
                }
               
                Tpd = false;
                alert("提交成功！！！")
                $('.submit-btn').css('backgroundColor','#757373');
                $('.submit-btn').text('提交成功');
            }
            
        });
    };
    message_js();


});
