var Crawler = require("crawler");

var c = new Crawler({
    maxConnections : 10,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;

            var readingList = [];

            var scripts = $('script');

            for (var i = 0; i < scripts.length; i++) {
                var script = $(scripts[i]).text();
                if(script.indexOf('document.domain') != -1) {
                    var msgList = script.split('var msgList =')[1];
                    var finalMsgList = msgList.split('seajs.use("sougou/profile.js");')[0];

                    finalMsgList = JSON.parse(finalMsgList.substring(0, finalMsgList.length - 10));

                    for(var key in finalMsgList) {
                        var list = finalMsgList[key];
                        for (var i = 0; i < list.length; i++) {
                            var article = list[i];
                            console.log('================================================================================================')
                            console.log('                           开始处理 ', $("title").text(), ' 公众号内第', i, '篇文章');
                            console.log('================================================================================================')                            
                            for(field in article) {
                                var extension = article[field];
                                console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
                                console.log('              开始处理 ', field, ' 字段内数据');
                                console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
                                // console.log(extension);
                                // console.log('*=====================================================*')

                                if(field == 'app_msg_ext_info') {
                                    console.log('作者', extension['author']);
                                    console.log('摘要', extension['digest']);
                                    console.log('地址', extension['content_url']);
                                }else {
                                    console.log('时间', extension['datetime']);
                                }
                                
                                // console.log('*=====================================================*')

                                for(articleKey in extension) {                                
                                    var detail = extension[articleKey];
                                    // console.log(extension, articleKey);
                                }
                            }

                            console.log('================================================================================================')
                            console.log('                                            处理完毕');
                            console.log('================================================================================================')                            

                        }
                    }
                }
            }

            console.log($("title").text());
        }
        done();
    }
});

c.queue([{
    html: `
<!DOCTYPE html>
<!--headTrap<body></body><head></head><html></html>--><html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">


        <script nonce="" type="text/javascript">
            window.logs = {
                pagetime: {}
            };
            window.logs.pagetime['html_begin'] = (+new Date());
        </script>
        
        <link rel="dns-prefetch" href="//res.wx.qq.com">
<link rel="dns-prefetch" href="//mmbiz.qpic.cn">
<link rel="shortcut icon" type="image/x-icon" href="//res.wx.qq.com/mmbizwap/en_US/htmledition/images/icon/common/favicon22c41c.ico">
<script nonce="" type="text/javascript">
    String.prototype.html = function(encode) {
        var replace =["&#39;", "'", "&quot;", '"', "&nbsp;", " ", "&gt;", ">", "&lt;", "<", "&amp;", "&", "&yen;", "¥"];
        if (encode) {
            replace.reverse();
        }
        for (var i=0,str=this;i< replace.length;i+= 2) {
             str=str.replace(new RegExp(replace[i],'g'),replace[i+1]);
        }
        return str;
    };

    window.isInWeixinApp = function() {
        return /MicroMessenger/.test(navigator.userAgent);
    };

    window.getQueryFromURL = function(url) {
        url = url || 'http://qq.com/s?a=b#rd'; 
        var tmp = url.split('?'),
            query = (tmp[1] || "").split('#')[0].split('&'),
            params = {};
        for (var i=0; i<query.length; i++) {
            var arg = query[i].split('=');
            params[arg[0]] = arg[1];
        }
        if (params['pass_ticket']) {
            params['pass_ticket'] = encodeURIComponent(params['pass_ticket'].html(false).html(false).replace(/\s/g,"+"));
        }
        return params;
    };

    (function() {
        var params = getQueryFromURL(location.href);
        window.uin = params['uin'] || "" || '';
        window.key = params['key'] || "" || '';
        window.wxtoken = params['wxtoken'] || '';
        window.pass_ticket = params['pass_ticket'] || '';
    })();

    function wx_loaderror() {
        if (location.pathname === '/bizmall/reward') {
            new Image().src = '/mp/jsreport?key=96&content=reward_res_load_err&r=' + Math.random();
        }
    }

</script>

        <title>中国保险报 </title>
        
<link rel="stylesheet" href="https://res.wx.qq.com/open/libs/weui/0.2.0/weui.css">  
<link rel="stylesheet" href="//res.wx.qq.com/mmbizwap/en_US/htmledition/style/page/profile/sougou_profile3717bc.css">
<!--[if lt IE 9]>
<link rel="stylesheet" type="text/css" href="//res.wx.qq.com/mmbizwap/en_US/htmledition/style/page/profile/sougou_profile_pc34eb16.css"> 
<![endif]-->

    </head>
    <body id="" class="en_US ">
        
<div class="page_profile_info">
    <div class="page_profile_info_inner">
        <div class="profile_info_area">
            <div class="profile_info_group">
                <span class="radius_avatar profile_avatar">
                                        <img src="http://wx.qlogo.cn/mmhead/Q3auHgzwzM5W6A9DPibaE285nIrNvOPeMW6WaA1jXSqfN9h4wTAW1jw/0">
                                    </span>
                <div class="profile_info">
                    <strong class="profile_nickname">
                      中国保险报
                    </strong>
                                        <p class="profile_account">微信号: zgbxbwx</p>
                                    </div>
            </div>
            <ul class="profile_desc">
                <li>
                    <label class="profile_desc_label" for="">功能介绍</label>
                    <div class="profile_desc_value" title="《中国保险报》创刊于1994年1月5日，是一份以保险为特色的高端专业财经媒体，也是中国保险业唯一公开发行的报纸，入选2014年中央出版转型示范单位。现由中国保险监督管理委员会主管、中国保险报业股份有限公司主办。">《中国保险报》创刊于1994年1月5日，是一份以保险为特色的高端专业财经媒体，也是中国保险业唯一公开发行的报纸，入选2014年中央出版转型示范单位。现由中国保险监督管理委员会主管、中国保险报业股份有限公司主办。</div>
                </li>
                <li>
                    <label class="profile_desc_label" for="">帐号主体</label>
                    <div class="profile_desc_value"><img class="icon_verify success" src="//res.wx.qq.com/mmbizwap/en_US/htmledition/images/icon/common/icon_verify_success.2x2a26be.png">中国保险报业股份有限公司</div>
                </li>
            </ul>
            
            <div class="profile_opr"  style="display:none">
                            <a href="javascript:void(0);" id="copyBt" class="weui_btn weui_btn_plain_primary">复制微信号</a>
                        </div>
                
        </div>
        <div class="weui_category_title">最近10条群发</div>
        <div class="weui_msg_card_list" id="history">  
            
        </div>
        <div class="msg_card_tips">仅显示最近10条群发</div>

        <div class="loadmore" style="display:none;" id="js_loading">
            <div class="tips_wrp"><i class="icon_loading"></i><span class="tips">正在加载</span></div>
        </div>
        <div class="loadmore with_line" style="display:none;" id="js_nomore">
            <div class="tips_wrp"><span class="tips">已无更多</span></div>
        </div>
    </div>
    <div id="js_pc_qr_code" class="qr_code_pc_outer">
        <div class="qr_code_pc_inner">
            <div class="qr_code_pc">
                <img id="js_pc_qr_code_img" class="qr_code_pc_img" src="/rr?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=MJqkR2ZXagSxTTVnrN2clp*5sCAl89goVRFROvAu1IcF1nNyQ4-tTeoZAipz5gmHrcZJqXM-6cydkEY7i6*V4o9n26ZLkBlvEIpOf9nsygA=">
                <p>微信扫一扫<br>关注该公众号</p>
            </div>
        </div>
    </div>
</div>

        
        <script nonce="">
    var __DEBUGINFO = {
        debug_js : "//res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/debug/console34c264.js",
        safe_js : "//res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/safe/moonsafe34c264.js",
        res_list: []
    };
</script>

<script nonce="">
(function() {
    function _addVConsole(uri) {
        var url = '//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/vconsole/' + uri;
        document.write('<script nonce="" type="text/javascript" src="' + url + '"><\/script>');
    }
    if (
        (document.cookie && document.cookie.indexOf('vconsole_open=1') > -1)
        || location.href.indexOf('vconsole=1') > -1
    ) {
        _addVConsole('2.5.1/vconsole.min.js');
        _addVConsole('plugin/vconsole-elements/1.0.2/vconsole-elements.min.js');
        _addVConsole('plugin/vconsole-sources/1.0.1/vconsole-sources.min.js');
        _addVConsole('plugin/vconsole-resources/1.0.0/vconsole-resources.min.js');
        _addVConsole('plugin/vconsole-mpopt/1.0.0/vconsole-mpopt.js');
    }
})();
</script>
        
        <script>window.__moon_host = 'res.wx.qq.com';window.moon_map = {"biz_common/utils/respTypes.js":"//res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_common/utils/respTypes3518c7.js","biz_common/utils/url/parse.js":"//res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_common/utils/url/parse36ebcf.js","biz_common/template-2.0.1-cmd.js":"//res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_common/template-2.0.1-cmd3518c7.js","biz_wap/jsapi/core.js":"//res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/jsapi/core34c264.js","biz_common/dom/class.js":"//res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_common/dom/class3518c7.js","biz_common/utils/string/emoji.js":"//res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_common/utils/string/emoji3518c7.js","biz_wap/utils/ajax.js":"//res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/utils/ajax34c264.js","history/profile_history.html.js":"//res.wx.qq.com/mmbizwap/en_US/htmledition/js/history/profile_history.html369558.js","biz_common/utils/string/html.js":"//res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_common/utils/string/html3518c7.js","history/template_helper.js":"//res.wx.qq.com/mmbizwap/en_US/htmledition/js/history/template_helper24f29e.js","appmsg/cdn_img_lib.js":"//res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/cdn_img_lib373857.js","biz_common/dom/event.js":"//res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_common/dom/event36f1bc.js","history/profile_history.js":"//res.wx.qq.com/mmbizwap/en_US/htmledition/js/history/profile_history3602f0.js","sougou/profile.js":"//res.wx.qq.com/mmbizwap/en_US/htmledition/js/sougou/profile31dd7f.js"};</script><script type="text/javascript">window.__wxgspeeds={}; window.__wxgspeeds.moonloadtime=+new Date()</script><script  type="text/javascript" src="//res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/moon368f87.js"></script>
<script type="text/javascript">
    document.domain="qq.com";
    var biz = "MjM5Nzc4MzQ4Mw==" || "";
    var src = "3" ; 
    var ver = "1" ; 
    var timestamp = "1500973991" ; 
    var signature = "K0cGv*kXxo3VVgZsoeIRhg3tb49R0EhSFZ18dAXE5yleRlpoZZBhvIkXhaVst4pAVF5VO4xSJeCQElaYfCqcxw==" ; 
    var name="zgbxbwx"||"中国保险报";
        var msgList = {"list":[{"app_msg_ext_info":{"author":"赵广道","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*qtvnn2RoKxgok0vpQEnNJOzrWXFjXTdmSoogaKu8ZlKCBiEelp*U-IYCg0hleqCFomYcIG67-L8C7qY7LPpI7I=","copyright_stat":11,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY98BgicPjGv1icuIib6cFjS1tl5oKcSJdKicP35v4LmpUIEFmaPjfAdEdqdqLrMNbutog7YPlDMALibMj7g/0?wx_fmt=jpeg","del_flag":1,"digest":"公开数据显示，中国15岁至30岁的独生子女总人数约有1.9亿人，这一年龄段的年死亡率为万分之四，因此每年约产","fileid":505866730,"is_multi":1,"multi_app_msg_item_list":[{"author":"叶珏珑","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*qtvnn2RoKxgok0vpQEnNJMdkufqdhqYhxveYE5fRVVhGvi5nGVf9d2Wh8MsR*0xwTTvSGslIfxVF*jXAVYKDcE=","copyright_stat":11,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY98BgicPjGv1icuIib6cFjS1tl5BDAQY27n6KiaEI5fhcAE4CzwEyDKictFKmBXjBTLdF0nf1vUSjHbianSA/0?wx_fmt=jpeg","del_flag":1,"digest":"20世纪80年代末，南开大学与北美精算师协会(英文简称为SOA)签订合作协议，在中国设立“精算学研究课程”，","fileid":505866732,"source_url":"","title":"北美精算师协会当选主席：未来将出现更多精算背景的保险业高管"},{"author":"赵广道 杜亮","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*qtvnn2RoKxgok0vpQEnNJMr6XqjtSwSKC0XoxJ1U1cNTLcHzGGXVTrpm9YIoy4DCHhIP*wtnUAJTrQE-VqBEt0=","copyright_stat":14,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY9icKyS7pLkiacysw4fhsKTQwzY7IiaXHPibfcFThy0nZIkEoF4ibt1vCzaElQRW1Y39AWbNe5MZj1qvjkw/0?wx_fmt=jpeg","del_flag":1,"digest":"“看着别人家都拿到了保险公司给补的钱，真是后悔去年没上（保险）。”上海市松江区新浜镇赵王村村民马海云对记者说","fileid":505866118,"source_url":"","title":"上海：收入保险试点一年成效显现"}],"source_url":"","subtype":9,"title":"保险能为“失独”家庭做什么？"},"comm_msg_info":{"content":"","datetime":1500901507,"fakeid":"2397783483","id":1000000346,"status":2,"type":49}},{"app_msg_ext_info":{"author":"","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*vnxtdXP1AU7EZybaVfbpJZV5WvS1WG7QrOd7krNZgR1XjH3GGiRWzX8zDaHRNUXHMNvNh8Yy5Td47fRactlw6M=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY9icyau7wFIMFeOph0ib2ZdM0D5vMcMNU5TShMTvEJPPZUweDkic0yicRrGTP9BtUwRGRWr1LC2U0uqDiaA/0?wx_fmt=jpeg","del_flag":1,"digest":"在2017全国保险行业协会座谈会上，保监会副主席梁涛表示，近年来，伴随着保险业日新月异的变化，保险行业协会也","fileid":505866725,"is_multi":1,"multi_app_msg_item_list":[{"author":"","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*vnxtdXP1AU7EZybaVfbpJbFJXFHulwrQoaREH9P8t2lLnNOu9rt*DroOsrvqCTLLZujF92T2ADX7GjP31gMBX4=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY99ticICvViaS3RlYlfC8uR5bbCALe9HforOhrbic5o85wFGJ6vEEibR6SbnD3jPX0nS3O8SIJRWHu8FqA/0?wx_fmt=jpeg","del_flag":1,"digest":"摘   要◆政策监管●保监会传达习近平总书记重要讲话精神●保监会：坚持保险服务实体经济的宗旨●保监会就股权管","fileid":505866432,"source_url":"","title":"保险周报|保监会就股权管理办法再次征求意见；四大上市险企上半年原保费出炉"}],"source_url":"","subtype":9,"title":"梁涛：充分发挥行业自律功能 为维护保险业稳定健康发展贡献力量"},"comm_msg_info":{"content":"","datetime":1500803403,"fakeid":"2397783483","id":1000000345,"status":2,"type":49}},{"app_msg_ext_info":{"author":"赵广道","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*il44J2YYlM136HowVrP5tcuocBTbtab536bMAxgd6InYyCes2LW-WrOEtPS3zH*OId7wOCTXX4RGYZONiiuzow=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY99iaPq3WXIs5OziavyJUZVTAaVgBblv3Ax8ib7M9xsibP11Y633a55yibdBKKKexyGddic0aosSVWmLqzDw/0?wx_fmt=jpeg","del_flag":1,"digest":"具体到A级车、B级车、SUV和MPV车型来看，SUV和MPV的碰撞结果几乎全部为较差。","fileid":505865499,"is_multi":1,"multi_app_msg_item_list":[{"author":"","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*il44J2YYlM136HowVrP5tcCdr0SR9EJiMXPiKjGP7hJ0YOy04-VWlBJZU8HIThn-iqP61Ie8T3qtqQklBZ29uc=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY98bNiaIWPnJCuoTngv3iauoe6L7KNuUUIlPYia4m0zQ0U8qpDClnqibLOxX1uoh7lAWfj6HsibQuHDygYA/0?wx_fmt=jpeg","del_flag":1,"digest":"想了解最新的保险招聘信息嘛？快来中国保险家APP！","fileid":505866646,"source_url":"","title":"看最新保险招聘信息 上中国保险家APP"},{"author":"房文彬 赵修彬","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*il44J2YYlM136HowVrP5td7qpMoY7xobV2nHAFxTjfKhaw-l75MvshPqM5pPGnFg5IRoBfUC6tndK9CY*6l9LM=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY9iburgzQWm1o69bxUTDakVC1zqoHFyQYF0iawahE27IdJ3icfcOEe3AVcHHaLibH0BrJhEJKmYuFyAjtQ/0?wx_fmt=jpeg","del_flag":1,"digest":"截至7月21日10时，全省共接到报案6947件，估损金额3.59亿元。目前已决赔款776万元，预付赔款536万元。相关损失的查勘定损理赔工作仍在紧张进行中。","fileid":505866715,"source_url":"","title":"吉林保险业全力应对7.13暴雨灾情，目前已赔付776万元"},{"author":"姚庆海 朱华 阳甜","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*il44J2YYlM136HowVrP5tcHwOfUReOXh8jL35qD2LNkEDpY4*Atvq5qr9b0aoraFjuk1BIeDLIlalHRFwItbWM=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY9ibLKMZnDT2N07ic0PXiao1T17F34KjSIPCSlHAVmCadoiabkwNHfKVuicaewZupQDjbujkE16g385iaJicQ/0?wx_fmt=jpeg","del_flag":1,"digest":"中国古代已形成以灾备为目的的社会保障体系，并有商业保险的萌芽。这种传统社会保障以政府为主导，根植于农耕文化和","fileid":505866176,"source_url":"","title":"涨知识！李鸿章、左宗棠……的中国近现代保险思想脉络"}],"source_url":"","subtype":9,"title":"中保汽车安全指数评价 测试SUV、MPV都不耐撞！"},"comm_msg_info":{"content":"","datetime":1500627688,"fakeid":"2397783483","id":1000000344,"status":2,"type":49}},{"app_msg_ext_info":{"author":"","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*pvVv7Bevv7U6BnIXO-VEcSLCSbE4SxC43XYc5wN7RKqXOo81O0rttyeD8ryX7J*aGEUZ-yaxAgiIGuR0njtvvQ=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY99iaPq3WXIs5OziavyJUZVTAaRibsMEuSgSEYb4ZvCfxMLKL4qmxZREteicRtAAI0zLopQyo3MJibydGiaQ/0?wx_fmt=jpeg","del_flag":1,"digest":"为加强对信用保证保险业务（以下简称信保业务）监督管理，规范信保业务经营行为，防范金融交叉风险，促进信保业务持","fileid":505865497,"is_multi":1,"multi_app_msg_item_list":[{"author":"朱艳霞","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*pvVv7Bevv7U6BnIXO-VEcSW6aJYNpjVSQdGrn1OeslM-rjPfCvuges6TiV8BhGofD-IQ-jqRBjFk2ju*kf1J18=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY9icEZfbbCKXOTIpA5WUicSHkPUAvzYbO9o4xj3xOaaYrE0icJBjFpULq2icib77mqpEDBkFAL8GOb7m18g/0?wx_fmt=jpeg","del_flag":1,"digest":"今日保监会再次下文，对《保险公司股权管理办法（第二次征求意见稿）》公开征求意见。","fileid":505866230,"source_url":"","title":"保险公司股权管理办法二次征求意见！保监会拟将股东类别分为四类"},{"author":"刘宝民","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*pvVv7Bevv7U6BnIXO-VEcQ3J8doyfKXuMqotG16dtgAD-bYrXsHmPvyM-iVIVlaAuTp10BhPD4xRxrf76Q8ROo=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz/aNjLObicsY98Kmvm609nUbQxKLgO7ic8Tf5tlxdJpUFC46oeJ5ARPicyFxvibUTuo5jDpT9e3ribnNKE83squYa7Xqw/0?wx_fmt=png","del_flag":1,"digest":"没有按期年检的车，出了事故保险赔不赔？看看这则案例，你就明白了！由于一位车主的投保车辆没有按期年检，发生事故","fileid":400844426,"source_url":"","title":"没有按期年检的车敢不敢出事？出了事保险公司赔不赔？"},{"author":"房文彬","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*pvVv7Bevv7U6BnIXO-VEcSmnok83E0nY6Gz3wOie-yoDyIogiLvJhzMHKZG930dY2yulDOWa7*PMl9f0yLJIzo=","copyright_stat":11,"cover":"http://mmbiz.qpic.cn/mmbiz/aNjLObicsY9ib9l5iccy8vqKiaiceSc5ibgQyGv943D9KCjF4oFfIyqYRopQPUx4OSquTW3v47mA6q3E5M7ulGHH0kMg/0?wx_fmt=jpeg","del_flag":1,"digest":"“中国保险类微信影响力排行榜”今日发布第100期，榜单由《中国保险报》和新榜权威发布，第100期榜单的监测时间为7月10日-7月16日。","fileid":207960393,"source_url":"","title":"保险周榜|“中国人寿”凭爆文冲出重围，夺企业榜亚军"},{"author":"广告","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*pvVv7Bevv7U6BnIXO-VEcTjGoFLZhhSPG1D66nBpQiSSuImqWa5B6Wd*XJtS-TKiOAisAjUxAmwZSjojrc3jSc=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY9ibyFaqibicApdkjj2eBmkOqv2aQI0icASsSdevNZRGDia2muw9tMRSxasdpc2kOAz7IEic7lvMnjY8wfdg/0?wx_fmt=jpeg","del_flag":1,"digest":"公司简介中国人寿保险股份有限公司是国内寿险行业的龙头企业，总部位于北京, 注册资本282.65亿元人民币。","fileid":505866693,"source_url":"","title":"中国人寿上海市分公司招聘个险渠道内勤管理人员"}],"source_url":"http://xw.sinoins.com/2017-07/20/content_237238.htm","subtype":9,"title":"保监会：禁止保险公司为部分融资行为提供信保产品和服务"},"comm_msg_info":{"content":"","datetime":1500547220,"fakeid":"2397783483","id":1000000343,"status":2,"type":49}},{"app_msg_ext_info":{"author":"李忠献","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*pt14aVMQynptoxEsQgmxtDDsjrvJgI2Ajfis1h9y2R5iR5hAkNdhh1DT5sqCpNbfspax5O3jdgy4fi-N6HNB7w=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY9icEZfbbCKXOTIpA5WUicSHkPOh9hPAUWSOqWKibSPWA5oGNpYOToOt3lbUk4Gpjmn5nU84eAEw9tdxQ/0?wx_fmt=jpeg","del_flag":1,"digest":"7月18日晚间，中国太保发布上半年保费收入公告，至此，A股四大上市险企中国平安、中国人寿、新华保险、中国太保","fileid":505866222,"is_multi":1,"multi_app_msg_item_list":[{"author":"刘昌海","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*pt14aVMQynptoxEsQgmxtDgdK1-FikurMKdHP80FtQa*xXa3QaCy1bpoAr3sfC*VespASECvmweI1h5tG99ml0=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY99DesQ13JNGDWRJcBNgyg8KXgMz9ibd3S6A4NiaXliagu06q6EM9x84PWbyYLhH5NpOfAfWgGbKTlfmg/0?wx_fmt=jpeg","del_flag":1,"digest":"驾驶机动车过失致人死亡这一事件是否属于保险事故？保险公司是否应该赔偿？让我们一起看看这则案例吧！","fileid":505866705,"source_url":"","title":"驾车过失致人死亡，交强险是否赔偿？"},{"author":"广告","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*pt14aVMQynptoxEsQgmxtBUp0x1UZTh9qBY-pe-hFtAFVqkP9msPHGSBdvNPXF8wG67J130Xddm5iGFjOEGUyY=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY9ibyFaqibicApdkjj2eBmkOqv2aQI0icASsSdevNZRGDia2muw9tMRSxasdpc2kOAz7IEic7lvMnjY8wfdg/0?wx_fmt=jpeg","del_flag":1,"digest":"公司简介中国人寿保险股份有限公司是国内寿险行业的龙头企业，总部位于北京, 注册资本282.65亿元人民币。","fileid":505866693,"source_url":"","title":"中国人寿上海市分公司招聘销售支持、人员管理等岗位"}],"source_url":"","subtype":9,"title":"四大上市险企上半年原保费出炉：中国平安增速第一"},"comm_msg_info":{"content":"","datetime":1500455533,"fakeid":"2397783483","id":1000000342,"status":2,"type":49}},{"app_msg_ext_info":{"author":"","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*rDUzQU34i5FC7Usx71LuiD3M-ag8-0ZU41ifLS*jRgKfYW9IEqSHYF-UtQP0yQvq*VdrZsPdNHGwwzjsJOD9pM=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY9icQCLy38m3HGx20XfZrqsuQHLejib0gq3aVMOmicNTz2QQOYhv9T0y1E4MoIBjseT9yO797RBRFG9Hg/0?wx_fmt=jpeg","del_flag":1,"digest":"2017年7月17日，亚洲区域精算能力培训班在中国保监会302会议室举行了开班仪式。","fileid":505866076,"is_multi":1,"multi_app_msg_item_list":[{"author":"李画","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*rDUzQU34i5FC7Usx71LuiC9EeyJ*WwLKjkXqoZeW7HabruxV2XG8SzxYmoFNIw4lmSohbPuhinwI3l6rBlTPBQ=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY9ibyFaqibicApdkjj2eBmkOqv2ADdk3OT4rSP2tJ0ialoU52gbhIVVyT3xibVKlcRO1xfMHCz9oxF6kQfg/0?wx_fmt=jpeg","del_flag":1,"digest":"7月18日，中保研汽车技术研究院有限公司碰撞试验室正式在京落成启用。","fileid":505866698,"source_url":"","title":"厉害了！保险业首个汽车碰撞试验室在京落成启用！"},{"author":"和平","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*rDUzQU34i5FC7Usx71LuiA7gPZ*UrUA8n1oSX1i1CHbpJ0Z7pLEpGxYXqzh0C98nXWKIWMrLAPR4WG0aQxeTP8=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY9iblBk50nzCksu0wKvUZoQtGrXf4rXiaoNAUejSHxoh7RTyUg3X8nib3HDKsgntiaabm2fQ1icUtqPTUlw/0?wx_fmt=jpeg","del_flag":1,"digest":"保险公司加强内部偿付能力管理有利于从风险源头上管控风险。在偿二代制度2016年初正式实施之后，2017年上半","fileid":505866105,"source_url":"","title":"偿二代二期工程启动在即，九成险企初建风险管理体系"},{"author":"康民","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*rDUzQU34i5FC7Usx71LuiB*ns6ONOma-Fcf98Uq5bsH2B*w*hrPVF5DnnKZq7XPrCrqCTjYTxdjOWgnOgHK2Io=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY9964VbvDdYHdd24m9dlgBPaK1Qyxn492DPDE7W0Why8gvdAcNnh6iaPfEK9icen5xuOFFmGIuN3ibb0A/0?wx_fmt=jpeg","del_flag":1,"digest":"7月17日，中国平安在新加坡宣布，集团旗下陆金所的国际业务平台，陆国际金融资产交易所（新加坡）有限公司正式在新加坡开业，并将在下个月上线。","fileid":505866395,"source_url":"","title":"陆金所国际平台在新加坡开业"},{"author":"高笑寒 王小韦","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*rDUzQU34i5FC7Usx71LuiBAfzR6M4EQI11Jkyt-AMMNo5srR*RMNF51TMWlixiGIHF6tobL1v16KJes6I5R5Cw=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz/aNjLObicsY9icpkrGYg7ibhW5SB8ib5Bv2REiaM7Z9SbT4SXPn2w2RhHlLfXmYNZEic4iaeqYfnX2X6XbxvscdWcuuWIg/0?wx_fmt=png","del_flag":1,"digest":"随着更多互联网技术、人工智能、大数据等技术的普及和应用，传统的业务流程已经不再是零敲碎打的优化和改进，而是模","fileid":400595822,"source_url":"","title":"未来保险业发展的三大制高点：数据 科技 服务"}],"source_url":"","subtype":9,"title":"亚洲区域精算能力建设培训班开班"},"comm_msg_info":{"content":"","datetime":1500373785,"fakeid":"2397783483","id":1000000341,"status":2,"type":49}},{"app_msg_ext_info":{"author":"","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*ohuR3coWFrVoe2XokKMKUPV7TvxVnJF1hgZ70nTnPxgH1tzCL4WyD3sEypFKaaZARGy3-ClshDMklRU5srMN7E=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY9icHJATO238TeKE63pJ6oKdpjlWicJtCz1mXkpToxiaPPJ9CS6pWLLmoQRtVgdceHxuRWJuoYmVRYBFg/0?wx_fmt=jpeg","del_flag":1,"digest":"7月17日，保监会召开党委扩大会议，传达学习习近平总书记重要讲话和第五次全国金融工作会议精神。","fileid":505865630,"is_multi":1,"multi_app_msg_item_list":[{"author":"赵广道","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*ohuR3coWFrVoe2XokKMKUOaD8XobAhQ13gWqKeRPzp80zYXhOit77s0tHE8KPvZRChb6xefu4ffeL7S7i30ECY=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz/aNjLObicsY9icHiaTpOhJgrwrLqYpNusNfybXwyqA84S83A3SW9AgNmIS86aF741boC0RTzh8icQ899XjREmicAIY0Q/0?wx_fmt=jpeg","del_flag":1,"digest":"7月17日，劳合社发布了一份最新的全球网络安全保险研究报告。","fileid":402432661,"source_url":"","title":"劳合社：极端网络攻击事件可能造成高达530亿美元的经济损失"},{"author":"","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*ohuR3coWFrVoe2XokKMKUNeBT49pFEboxKCoWn7NOGh7ox-LFZR*GOZkCn3S-FQLmkwKLtcP*ckBNfjwbpSGh0=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY98Hm0AYxIE2YPVpoAeyZnXqvdUyBIEJhJpIibujiaRXYlLmB9vJEk1ISGzzSGibOl1bNX6kfhbwS9SqQ/0?wx_fmt=jpeg","del_flag":1,"digest":"数字化是用来解决问题的。企业的数字化战略是为了解决企业运营当中存在的突出问题。所有企业运营的问题几乎都可以归","fileid":505865711,"source_url":"","title":"中保协人身险运营管理专业委员会在京成立"}],"source_url":"","subtype":9,"title":"保监会党委召开会议传达习近平总书记重要讲话和全国金融工作会议精神"},"comm_msg_info":{"content":"","datetime":1500291180,"fakeid":"2397783483","id":1000000340,"status":2,"type":49}},{"app_msg_ext_info":{"author":"","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*vPiHSqIe6ZlISg2x0hnFUOw8dd*tQ07zKQMTWg6uAvn-5DZOoL4GHlsNgrwMXgLUZvV1hfZu7tOkuNXIMB-L2Q=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY9ibHicVDyhGjEusgcicJ1j9TXlEUOMA5NLO0ojaEZT8np076H2G5PRYs1fGGhZppz97pReyu7AibweibcA/0?wx_fmt=jpeg","del_flag":1,"digest":"速览一周保险资讯，尽在保险周报。","fileid":505866599,"is_multi":0,"multi_app_msg_item_list":[],"source_url":"","subtype":9,"title":"保险周报|全国金融工作会议在京召开；保监会发布通知整治车险市场乱象"},"comm_msg_info":{"content":"","datetime":1500199647,"fakeid":"2397783483","id":1000000339,"status":2,"type":49}},{"app_msg_ext_info":{"author":"新华社","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*rHNJBkF*i5Q4nVyQbAcp0HAn5VLMVZK7lAxAxilQeVmtOoCEwaShjaUJLpk8BrUcLGdrVL19Dt38xzVZN7jYVk=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY99zPs3Bh8tau0H8OZa1ibSoLQGEvfdjKra8Kv89k7wK1McVljvciceHY5mx224xdsFuD1cicWtZiaF7QQ/0?wx_fmt=jpeg","del_flag":1,"digest":"全国金融工作会议14日至15日在北京召开。中共中央总书记、国家主席、中央军委主席习近平出席会议并发表重要讲话。","fileid":505866684,"is_multi":0,"multi_app_msg_item_list":[],"source_url":"","subtype":9,"title":"习近平在全国金融工作会议上强调：服务实体经济 防控金融风险 深化金融改革，促进经济和金融良性循环健康发展"},"comm_msg_info":{"content":"","datetime":1500126860,"fakeid":"2397783483","id":1000000338,"status":2,"type":49}},{"app_msg_ext_info":{"author":"新华社","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*iZkdcXVo58bR-chNV2gvd*KQuf6ITypr4MFIFGgi4rtQNHlxWnUjajLSMgcx-w9HrI77UwajYkJAFqOuVYlUzI=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/aNjLObicsY9icEZfbbCKXOTIpA5WUicSHkPib2H16iaSVykcOjHYiaWAZO89R2jB6OIBPicXCYwbLdxNC0In9jZKsOE1Q/0?wx_fmt=jpeg","del_flag":1,"digest":"不破不立，以此来形容处于转型关键时期的中国保险业再贴切不过。经历过跑马圈地挣快钱，也经历过种了别人的地，荒了","fileid":505866228,"is_multi":1,"multi_app_msg_item_list":[{"author":"王方琪","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*iZkdcXVo58bR-chNV2gvd*jSGv3KoZ0blqvgMPObKsujZTeOKE3GEgGW4Y80gojM9hV1uzfDQaHflCGyQb1zFw=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_png/aNjLObicsY99icm7UAMqUEnXxsiaiaT47055TeLO65Z0MUxr95lwjlBPia4vjkAPYbHj4k09kfsuRic9ycszmZJoE0Hw/0?wx_fmt=png","del_flag":1,"digest":"7月9日下午，江西省新余市人民医院骨科医生刘辉猝死，年仅32岁。6月28日，浙江大学医学院附属邵逸夫医院麻醉","fileid":505866662,"source_url":"","title":"“过劳死”事件多发，保险能为医生做什么？"},{"author":"赵国辉 赵修彬","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*iZkdcXVo58bR-chNV2gvd80nVNAbF*mmIFr8hRVigBf1kibZ*mDewysUFbNiFC5RBOv0Hnn4ulcdFixX1IrCd0=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz/aNjLObicsY997hiaE2RjfLL2VhqNdWCtorcAvOxj14XEdbcAXfu4udc23hGibBEPtCa5ZNZtlJ072EoWlGdhgD1aw/0?wx_fmt=jpeg","del_flag":1,"digest":"近期，黑龙江保监局认真落实中国保监会党委就强监管、治乱象、补短板、防风险和服务实体经济所作的一系列决策部署，","fileid":401790008,"source_url":"","title":"落实“1+4”系列文件|黑龙江保监局：凝心聚力、因地制宜， 抓好文件落地见效"},{"author":"广告","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*iZkdcXVo58bR-chNV2gvd8h*7odPjQmx*2sUFncbFSP8zngsl-rRs5T3sgP0KE5q3VNPQUi*itBpAcOI68ZNyM=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_png/aNjLObicsY9ib1bEHcSgwiaiaiceVibib0hxicMsGNT7xzCQNb5l0yOQqYcXgyLPOQ7Qjb2kk5Y6XbcEIuueRoX7VU5kHQ/0?wx_fmt=png","del_flag":1,"digest":"照亮别人 温暖自己","fileid":505866576,"source_url":"","title":"保险英雄| 长城人寿篇"},{"author":"广告","content":"","content_url":"/s?timestamp=1500973993&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*01FWhiByVJBwKNkYWX0F1p18T1KqE-9*yYhAXeeFp56cqNkfQYRLzm8aYlUlmhR*iZkdcXVo58bR-chNV2gvd*dt7m5cu3H*KDM6KJLPAk69LGG*ob0ruZU9M6DF126qXOxH41ygi-QQt9yXdb2PGw=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_png/aNjLObicsY9ic1jufxjlDeysQdGpLhPqJskAxLgh6OfWVE9ianKs4xQU8vJR4K2xQl2C1qDWZyNpqziaP7S0dOuG7Q/0?wx_fmt=png","del_flag":1,"digest":"“第二届中国互联网保险大会”6月15-16日在北京隆重举行，大会掀起一场互联网保险讨论热浪。 大会组委会将","fileid":505866550,"source_url":"http://wx.inslinker.com/payment","title":"《2017中国互联网保险大会精选报告》预订从速"}],"source_url":"","subtype":9,"title":"挣快钱的套路不灵了——保险业的回归之旅"},"comm_msg_info":{"content":"","datetime":1500042830,"fakeid":"2397783483","id":1000000337,"status":2,"type":49}}]};
        seajs.use("sougou/profile.js");
</script>

    </body>
    <script nonce="" type="text/javascript">document.addEventListener("touchstart", function() {},false);</script>
</html>
<!--tailTrap<body></body><head></head><html></html>-->
`
}]);
