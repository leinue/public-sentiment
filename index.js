var axios = require('axios');


var publicSentiments = {
	wechat: [{
		name: '中国保险报',
		sogoUrl: 'http://weixin.sogou.com/weixin?type=1&s_from=input&query=%E4%B8%AD%E5%9B%BD%E4%BF%9D%E9%99%A9%E6%8A%A5&ie=utf8&_sug_=n&_sug_type_=',
		mp: 'https://mp.weixin.qq.com/profile?src=3&timestamp=1500970652&ver=1&signature=JNtjkvV7TZTbepQjumdB04-e-gJXgbWOSJE6LspInLmeyTeLMktuEwBolL0ev14C45pN4X7TOap4vhPoqeZQiQ==',
	}, {
		name: '盖雅时间',
		sogoUrl: 'http://weixin.sogou.com/weixin?type=1&s_from=input&query=%E7%9B%96%E9%9B%85%E6%97%B6%E9%97%B4&ie=utf8&_sug_=y&_sug_type_=&w=01019900&sut=10694&sst0=1495458755788&lkt=1%2C1495458755679%2C1495458755679',
		mp: 'https://mp.weixin.qq.com/profile?src=3&timestamp=1500970652&ver=1&signature=JNtjkvV7TZTbepQjumdB04-e-gJXgbWOSJE6LspInLmeyTeLMktuEwBolL0ev14C45pN4X7TOap4vhPoqeZQiQ=='
	}, {
		name: '清控银杏',
		sogoUrl: 'http://weixin.sogou.com/weixin?type=1&s_from=input&query=%E6%B8%85%E6%8E%A7%E9%93%B6%E6%9D%8F&ie=utf8&_sug_=y&_sug_type_=&w=01019900&sut=4299&sst0=1495459167924&lkt=0%2C0%2C0',
		mp: 'https://mp.weixin.qq.com/profile?src=3&timestamp=1500972024&ver=1&signature=utAbsnoQ1gkrYgj7FiHT4qmkJV2uOv-Hnp4CFxj6t6U-9Wbga6F58-76sDU*at8H6FCldaW*FkzfZdO3bqfysw=='
	}, {
		name: '联想之星',
		sogoUrl: 'http://weixin.sogou.com/weixin?type=1&s_from=input&query=%E8%81%94%E6%83%B3%E4%B9%8B%E6%98%9F&ie=utf8&_sug_=y&_sug_type_=&w=01019900&sut=3054&sst0=1495459063132&lkt=1%2C1495459063030%2C1495459063030',
		mp: 'https://mp.weixin.qq.com/profile?src=3&timestamp=1500970713&ver=1&signature=p-ZU6hdGT1Sw6ThzflgBIOy7v8HbKqBp4-UFE5Kqf2uRos7dKJkXzEtfB3FuwEc5jpg9MFLq21owbg3XfVCLdQ=='
	}, {
		name: '启迪之星',
		sogoUrl: 'http://weixin.sogou.com/weixin?type=1&s_from=input&query=%E5%90%AF%E8%BF%AA%E4%B9%8B%E6%98%9F&ie=utf8&_sug_=y&_sug_type_=&w=01019900&sut=3808&sst0=1495459185188&lkt=0%2C0%2C0'
	}, {
		name: '小雨伞说',
		sogoUrl: 'https://mp.weixin.qq.com/profile?src=3&timestamp=1500970780&ver=1&signature=EjoQP*u*Ax4-YaM-QNZ4L7K2RD3Lw21wlXjSFKqi4IuoinABPAbH6XMMj*Rndv05R1qzDqNsGg3fsgK5u4LZow=='
	}, {
		name: '人力资源行业资讯',
		sogoUrl: 'http://weixin.sogou.com/weixin?type=1&s_from=input&query=%E4%BA%BA%E5%8A%9B%E8%B5%84%E6%BA%90%E8%A1%8C%E4%B8%9A%E8%B5%84%E8%AE%AF&ie=utf8&_sug_=y&_sug_type_=&w=01019900&sut=2061&sst0=1495460115132&lkt=0%2C0%2C0'
	}, {
		name: '喵喵保网金融中心',
		sogoUrl: 'http://weixin.sogou.com/weixin?type=1&s_from=input&query=%E5%96%B5%E5%96%B5%E4%BF%9D%E7%BD%91%E9%87%91%E8%9E%8D%E4%B8%AD%E5%BF%83&ie=utf8&_sug_=y&_sug_type_=1&w=01015002&oq=%E5%96%B5%E5%96%B5%E4%BF%9D%E7%BD%91%E9%87%91%E8%9E%8D&ri=0&sourceid=sugg&stj=0%3B0%3B0%3B0&stj2=0&stj0=0&stj1=0&hp=0',
		mp: 'https://mp.weixin.qq.com/profile?src=3&timestamp=1500970866&ver=1&signature=yhMP4Wu8nSlRSVbmRhBT855pKTo630c27RoJKAg-1CELYTb1JCyBpP-15RSLkYbXFuuPlqGjhVSMEsBYuvqlIg=='
	}, {
		name: '蓝鲸insurance',
		sogoUrl: 'http://weixin.sogou.com/weixin?type=1&s_from=input&query=%E8%93%9D%E9%B2%B8insurance&ie=utf8&_sug_=y&_sug_type_=&w=01019900',
		mp: 'https://mp.weixin.qq.com/profile?src=3&timestamp=1500970948&ver=1&signature=-wvYlhKHXS1HWhMbNVlqRsR9jnJ8sEeXwiLZf6i7Wd8YOtbvT45ScaVlOrtz2x0UQOLxQlYYN5li0uyLqfbecg=='
	}, {
		name: '广西人力资源网',
		sogoUrl: 'http://weixin.sogou.com/weixin?type=1&s_from=input&query=%E5%B9%BF%E8%A5%BF%E4%BA%BA%E5%8A%9B%E8%B5%84%E6%BA%90%E7%BD%91&ie=utf8&_sug_=n&_sug_type_=&w=01019900&sut=2239&sst0=1496065133892&lkt=0%2C0%2C0'
	}, {
		name: '复星集团',
		sogoUrl: 'http://weixin.sogou.com/weixin?type=1&s_from=input&query=%E5%A4%8D%E6%98%9F%E9%9B%86%E5%9B%A2&ie=utf8&_sug_=y&_sug_type_=&w=01019900&sut=3692&sst0=1496065510557&lkt=0%2C0%2C0',
		mp: 'https://mp.weixin.qq.com/profile?src=3&timestamp=1500970975&ver=1&signature=1oSKOW7Fxsd3*COwPvAFwZSG7vJRfcWErVxBZjFtw4YmHm1h0Zxx0I4deTbayQqLYAghK7na63I1Su0B-x2xMw=='
	}, {
		name: '人力资源行业资讯',
		sogoUrl: 'http://weixin.sogou.com/weixin?type=1&s_from=input&query=%E4%BA%BA%E5%8A%9B%E8%B5%84%E6%BA%90%E8%A1%8C%E4%B8%9A%E8%B5%84%E8%AE%AF&ie=utf8&_sug_=y&_sug_type_=&w=01019900&sut=2061&sst0=1495460115132&lkt=0%2C0%2C0'
	}],

	baiduNews: [{
		keyword: '大特保',
		url: 'http://news.baidu.com/ns?cl=2&rn=20&tn=news&word=%E5%A4%A7%E7%89%B9%E4%BF%9D',		
	}, {
		keyword: '豆包网',
		url: 'http://news.baidu.com/ns?ct=1&rn=20&ie=utf-8&bs=%E5%A4%A7%E7%89%B9%E4%BF%9D&rsv_bp=1&sr=0&cl=2&f=8&prevct=no&tn=news&word=%E8%B1%86%E5%8C%85%E7%BD%91&rsv_sug3=1&rsv_sug4=96&rsv_sug2=0&inputT=3599',		
	}, {
		keyword: '保险极客',
		url: 'http://news.baidu.com/ns?cl=2&rn=20&tn=news&word=%E5%A4%A7%E7%89%B9%E4%BF%9D',		
	}, {
		keyword: '小雨伞保险',
		url: 'http://news.baidu.com/ns?ct=1&rn=20&ie=utf-8&bs=%E5%B0%8F%E9%9B%A8%E4%BC%9E&rsv_bp=1&sr=0&cl=2&f=8&prevct=no&tn=news&word=%E5%B0%8F%E9%9B%A8%E4%BC%9E%E4%BF%9D%E9%99%A9&rsv_sug3=2&rsv_sug4=103&rsv_sug1=1&rsv_sug2=0&inputT=694&rsv_sug=1',		
	}, {
		keyword: '平安 补充医疗',
		url: 'http://news.baidu.com/ns?ct=1&rn=20&ie=utf-8&bs=%E5%9B%A2%E4%BD%93%E4%BF%9D%E9%99%A9&rsv_bp=1&sr=0&cl=2&f=8&prevct=no&tn=news&word=%E5%B9%B3%E5%AE%89+%E8%A1%A5%E5%85%85%E5%8C%BB%E7%96%97&rsv_sug3=4&rsv_sug4=52&rsv_sug1=2&inputT=3592&rsv_sug=2',		
	}, {
		keyword: '易才',
		url: 'http://news.baidu.com/ns?ct=1&rn=20&ie=utf-8&bs=%E5%B9%B3%E5%AE%89+%E8%A1%A5%E5%85%85%E5%8C%BB%E7%96%97&rsv_bp=1&sr=0&cl=2&f=8&prevct=no&tn=news&word=%E6%98%93%E6%89%8D&rsv_sug3=2&rsv_sug4=28&rsv_sug1=1&rsv_sug2=0&inputT=1116&rsv_sug=1',		
	}, {
		keyword: '悟空保',
		url: 'http://news.baidu.com/ns?cl=2&rn=20&tn=news&word=%E6%82%9F%E7%A9%BA%E4%BF%9D',		
	}, {
		keyword: '保准牛',
		url: 'http://news.baidu.com/ns?ct=1&rn=20&ie=utf-8&bs=%E4%BF%9D%E9%99%A9%E6%9E%81%E5%AE%A2&rsv_bp=1&sr=0&cl=2&f=8&prevct=no&tn=news&word=%E4%BF%9D%E5%87%86%E7%89%9B&rsv_sug3=2&rsv_sug4=47&rsv_sug1=2&rsv_sug2=0&inputT=1333&rsv_sug=1',		
	}],

	doubao: {
		url: 'https://media.17doubao.com/media/',
		name: '豆包网'
	},

	cnHr: [{
		url: 'http://news.hr369.com/law/',
		name: '政策法规'
	}, {
		url: 'http://news.hr369.com/hangye/',
		name: '行业动态'
	}, {
		url: 'http://news.hr369.com/supplier/',
		name: '厂商资讯'
	}, {
		url: 'http://news.hr369.com/zixun/',
		name: '人资资讯'
	}],

	weibo: [{
		url: 'http://weibo.com/hrootchina?s=6cm7D0&is_hot=1',
		name: 'hroot'
	}],

	hroot: {
		url: 'http://news.hroot.com/',
		name: 'hroot'
	}
}

var handler = {
	wechat: function(list) {
		console.log('================================================================================================')
		console.log('开始处理微信相关数据');
		console.log('================================================================================================')

		var getWeekNews = (news) => {

			console.log(news);

		}

		getWeekNews(`<!DOCTYPE html>\r\n<!--headTrap<body></body><head></head><html></html>--><html>\r\n    <head>\r\n        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n<meta http-equiv="X-UA-Compatible" content="IE=edge">\n<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />\n<meta name="apple-mobile-web-app-capable" content="yes">\n<meta name="apple-mobile-web-app-status-bar-style" content="black">\n<meta name="format-detection" content="telephone=no">\n\n\r\n        <script nonce="" type="text/javascript">\r\n            window.logs = {\r\n                pagetime: {}\r\n            };\r\n            window.logs.pagetime[\'html_begin\'] = (+new Date());\r\n        </script>\r\n        \r\n        <link rel="dns-prefetch" href="//res.wx.qq.com">\r\n<link rel="dns-prefetch" href="//mmbiz.qpic.cn">\r\n<link rel="shortcut icon" type="image/x-icon" href="//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/common/favicon22c41b.ico">\r\n<script nonce="" type="text/javascript">\r\n    String.prototype.html = function(encode) {\r\n        var replace =["&#39;", "\'", "&quot;", \'"\', "&nbsp;", " ", "&gt;", ">", "&lt;", "<", "&amp;", "&", "&yen;", "¥"];\r\n        if (encode) {\r\n            replace.reverse();\r\n        }\r\n        for (var i=0,str=this;i< replace.length;i+= 2) {\r\n             str=str.replace(new RegExp(replace[i],\'g\'),replace[i+1]);\r\n        }\r\n        return str;\r\n    };\r\n\r\n    window.isInWeixinApp = function() {\r\n        return /MicroMessenger/.test(navigator.userAgent);\r\n    };\r\n\r\n    window.getQueryFromURL = function(url) {\r\n        url = url || \'http://qq.com/s?a=b#rd\'; \n        var tmp = url.split(\'?\'),\r\n            query = (tmp[1] || "").split(\'#\')[0].split(\'&\'),\r\n            params = {};\r\n        for (var i=0; i<query.length; i++) {\r\n            var arg = query[i].split(\'=\');\r\n            params[arg[0]] = arg[1];\r\n        }\r\n        if (params[\'pass_ticket\']) {\r\n        \tparams[\'pass_ticket\'] = encodeURIComponent(params[\'pass_ticket\'].html(false).html(false).replace(/\\s/g,"+"));\r\n        }\r\n        return params;\r\n    };\r\n\r\n    (function() {\r\n\t    var params = getQueryFromURL(location.href);\r\n        window.uin = params[\'uin\'] || "" || \'\';\r\n        window.key = params[\'key\'] || "" || \'\';\r\n        window.wxtoken = params[\'wxtoken\'] || \'\';\r\n        window.pass_ticket = params[\'pass_ticket\'] || \'\';\r\n    })();\r\n\r\n    function wx_loaderror() {\r\n        if (location.pathname === \'/bizmall/reward\') {\r\n            new Image().src = \'/mp/jsreport?key=96&content=reward_res_load_err&r=\' + Math.random();\r\n        }\r\n    }\r\n\r\n</script>\r\n\r\n        <title>清控银杏 </title>\r\n        \r\n<link rel="stylesheet" href="https://res.wx.qq.com/open/libs/weui/0.2.0/weui.css">  \r\n<link rel="stylesheet" href="//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/profile/sougou_profile3717bc.css">\r\n<!--[if lt IE 9]>\r\n<link rel="stylesheet" type="text/css" href="//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/profile/sougou_profile_pc34eb15.css"> \r\n<![endif]-->\r\n\r\n    </head>\r\n    <body id="" class="zh_CN ">\r\n        \r\n<div class="page_profile_info">\r\n    <div class="page_profile_info_inner">\r\n        <div class="profile_info_area">\r\n            <div class="profile_info_group">\r\n                <span class="radius_avatar profile_avatar">\r\n                                        <img src="http://wx.qlogo.cn/mmhead/Q3auHgzwzM6F4aJwpHehbOOFdbzdrNJ0hM9obsQrjzSpHmeEP34peg/0">\r\n                                    </span>\r\n                <div class="profile_info">\r\n                    <strong class="profile_nickname">\r\n                      清控银杏\r\n                    </strong>\r\n                                        <p class="profile_account">微信号: thgingko</p>\r\n                                    </div>\r\n            </div>\r\n            <ul class="profile_desc">\r\n                <li>\r\n                    <label class="profile_desc_label" for="">功能介绍</label>\r\n                    <div class="profile_desc_value" title="清控银杏创业投资管理公司">清控银杏创业投资管理公司</div>\r\n                </li>\r\n                <li>\r\n                    <label class="profile_desc_label" for="">帐号主体</label>\r\n                    <div class="profile_desc_value">清控银杏创业投资管理公司</div>\r\n                </li>\r\n            </ul>\r\n            \r\n            <div class="profile_opr"  style="display:none">\r\n                            <a href="javascript:void(0);" id="copyBt" class="weui_btn weui_btn_plain_primary">复制微信号</a>\r\n                        </div>\r\n                \r\n        </div>\r\n        <div class="weui_category_title">最近10条群发</div>\r\n        <div class="weui_msg_card_list" id="history">  \r\n            \r\n        </div>\r\n        <div class="msg_card_tips">仅显示最近10条群发</div>\r\n\r\n        <div class="loadmore" style="display:none;" id="js_loading">\r\n            <div class="tips_wrp"><i class="icon_loading"></i><span class="tips">正在加载</span></div>\r\n        </div>\r\n        <div class="loadmore with_line" style="display:none;" id="js_nomore">\r\n            <div class="tips_wrp"><span class="tips">已无更多</span></div>\r\n        </div>\r\n    </div>\r\n    <div id="js_pc_qr_code" class="qr_code_pc_outer">\r\n        <div class="qr_code_pc_inner">\r\n            <div class="qr_code_pc">\r\n                <img id="js_pc_qr_code_img" class="qr_code_pc_img" src="/rr?timestamp=1500972968&amp;src=3&amp;ver=1&amp;signature=MJqkR2ZXagSxTTVnrN2cluCY5x33ngW5H2EKhROOz9JdBqNjeyqcZex63T-9j-tlZ7rYhKM4UdCJkPgDQVNgQudOQfzLN6xroZc*Ay-dSgg=">\r\n                <p>微信扫一扫<br>关注该公众号</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n        \r\n        <script nonce="">\r\n    var __DEBUGINFO = {\r\n        debug_js : "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/debug/console34c264.js",\r\n        safe_js : "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/safe/moonsafe34c264.js",\r\n        res_list: []\r\n    };\r\n</script>\r\n\r\n<script nonce="">\r\n(function() {\r\n\tfunction _addVConsole(uri) {\r\n\t\tvar url = \'//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/vconsole/\' + uri;\r\n\t\tdocument.write(\'<script nonce="" type="text/javascript" src="\' + url + \'"><\\/script>\');\r\n\t}\r\n\tif (\r\n\t\t(document.cookie && document.cookie.indexOf(\'vconsole_open=1\') > -1)\r\n\t\t|| location.href.indexOf(\'vconsole=1\') > -1\r\n\t) {\r\n\t\t_addVConsole(\'2.5.1/vconsole.min.js\');\r\n\t\t_addVConsole(\'plugin/vconsole-elements/1.0.2/vconsole-elements.min.js\');\r\n\t\t_addVConsole(\'plugin/vconsole-sources/1.0.1/vconsole-sources.min.js\');\r\n\t\t_addVConsole(\'plugin/vconsole-resources/1.0.0/vconsole-resources.min.js\');\r\n\t\t_addVConsole(\'plugin/vconsole-mpopt/1.0.0/vconsole-mpopt.js\');\r\n\t}\r\n})();\r\n</script>\r\n        \r\n        <script>window.__moon_host = \'res.wx.qq.com\';window.moon_map = {"biz_common/utils/respTypes.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/respTypes3518c6.js","biz_common/utils/url/parse.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/url/parse36ebcf.js","biz_common/template-2.0.1-cmd.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/template-2.0.1-cmd3518c6.js","biz_wap/jsapi/core.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/jsapi/core34c264.js","biz_common/dom/class.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/dom/class3518c6.js","biz_common/utils/string/emoji.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/string/emoji3518c6.js","biz_wap/utils/ajax.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/ajax34c264.js","history/profile_history.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/history/profile_history.html369557.js","biz_common/utils/string/html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/string/html3518c6.js","history/template_helper.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/history/template_helper24f185.js","appmsg/cdn_img_lib.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/cdn_img_lib373857.js","biz_common/dom/event.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/dom/event36f1bb.js","history/profile_history.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/history/profile_history3602f0.js","sougou/profile.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/sougou/profile31dd7f.js"};</script><script type="text/javascript">window.__wxgspeeds={}; window.__wxgspeeds.moonloadtime=+new Date()</script><script  type="text/javascript" src="//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/moon368f86.js"></script>\r\n<script type="text/javascript">\r\n    document.domain="qq.com";\r\n    var biz = "MzIxOTM2ODA0Nw==" || "";\r\n    var src = "3" ; \r\n    var ver = "1" ; \r\n    var timestamp = "1500972024" ; \r\n    var signature = "utAbsnoQ1gkrYgj7FiHT4qmkJV2uOv-Hnp4CFxj6t6U-9Wbga6F58-76sDU*at8H6FCldaW*FkzfZdO3bqfysw==" ; \r\n    var name="thgingko"||"清控银杏";\r\n        var msgList = {"list":[{"app_msg_ext_info":{"author":"","content":"","content_url":"/s?timestamp=1500972968&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*36dIQwYTotR1sahdsvq9XYxjl1rgSZh8WZrEppC4z5vl80BIC5x2gegMcuzNKc9t0okW6XO2wQtawMvIRoiv48d4ds1dIpihHJavBJOUHuyTxtxiAp*0DLXewIf3tKJyFAagL*bDyjy2IDiGgStf4g=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/ujAmfatGZzjngrMEEZ4tXcmm8jjGpD45cd5O1eTJXX7ScL2g3Ne9Ejc4Dy0RKABU8TV9bHhibfkMawjdzQiawMvg/0?wx_fmt=jpeg","del_flag":1,"digest":"投资界与清科研究中心联合发起，国内顶级私募股权数据库私募通提供数据支持，前后历时4个月筹备评选的「2017投资界TOP100投资人」榜单隆重发布！清控银杏创始合伙人罗茁再次上榜！","fileid":100000224,"is_multi":0,"multi_app_msg_item_list":[],"source_url":"","subtype":9,"title":"清控银杏创始合伙人罗茁2017年再次上榜投资界TOP100投资人"},"comm_msg_info":{"content":"","datetime":1499840523,"fakeid":"3219368047","id":1000000038,"status":2,"type":49}},{"app_msg_ext_info":{"author":"","content":"","content_url":"/s?timestamp=1500972968&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*36dIQwYTotR1sahdsvq9XYxjl1rgSZh8WZrEppC4z5vl80BIC5x2gegMcuzNKc9t2LGoPhiQ6JcIUGMhcsRwKKV5N82-*Fw5trsQq**eBoXu4irwsPxnfQzTXpNt03hTuy04XXFjCVWSBsd5-VtOGs=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/ujAmfatGZzgREFBic6Vq54JXGQ66LT0ySs2Vo6J1Opvn6t5SyJWovWlDL3KCeZM8atDjyIbwLKxDxgBgIGsXiatw/0?wx_fmt=jpeg","del_flag":1,"digest":"提升投后服务一直是清控银杏2017年的工作重点，今天举行的学习交流会，旨在帮助被投企业适应和跟进层出不穷的资本市场新政策、拥抱新机遇、学习了解上市、转板等实操流程，为未来企业更顺利的登陆资本市场提供帮助。","fileid":100000222,"is_multi":1,"multi_app_msg_item_list":[{"author":"","content":"","content_url":"/s?timestamp=1500972968&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*36dIQwYTotR1sahdsvq9XYxjl1rgSZh8WZrEppC4z5vl80BIC5x2gegMcuzNKc9t2LGoPhiQ6JcIUGMhcsRwKKY4EehXgZ6*qTBUmj29Ak8rZ5sRw6KvG49N2Cj*JMLmQ0WnqhobEWsjrRhv67OhpU=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/ujAmfatGZzgREFBic6Vq54JXGQ66LT0ySVicK49yHdxm7hqnNMkahWfSHaxmEYV8N6kaVbXd4zmNNn71NHnic38jA/0?wx_fmt=jpeg","del_flag":1,"digest":"清控银杏投资企业思必驰的联合创始人兼首席科学家、上海交通大学教授俞凯，凭借在自然语言处理领域的杰出表现，获评“科学中国人2016年度人物”","fileid":100000214,"source_url":"","title":"祝贺思必驰首席科学家俞凯获评“科学中国人2016年度人物”"},{"author":"","content":"","content_url":"/s?timestamp=1500972968&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*36dIQwYTotR1sahdsvq9XYxjl1rgSZh8WZrEppC4z5vl80BIC5x2gegMcuzNKc9t2LGoPhiQ6JcIUGMhcsRwKJ1bUTENJa60QnLqFs5r1mCsTIwfnf37lcxUfIKuYAPQNn5r1U2gvIROF29vAxHxcQ=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/ujAmfatGZzgREFBic6Vq54JXGQ66LT0ySiaHUdA8R4j6OKBCOAGrlFOlNZYkgDz9AmHHCzyXtVjia4KibIR65eFc1g/0?wx_fmt=jpeg","del_flag":1,"digest":"2017年7月7日-9日，全球人工智能与机器人峰会（CCF-GAIR）将在深圳拉开帷幕。清控银杏投资企业思必驰，将出席CCF-GAIR大会，并带来思必驰DUI（Dialogue User Interface）开放平台的首次亮相。","fileid":100000215,"source_url":"","title":"【7月预告】携手GAIR大会，思必驰DUI开放平台即将全面亮相！"}],"source_url":"","subtype":9,"title":"升级投后企业服务，清控银杏成功举办被投企业资本市场学习交流会"},"comm_msg_info":{"content":"","datetime":1498570072,"fakeid":"3219368047","id":1000000037,"status":2,"type":49}},{"app_msg_ext_info":{"author":"","content":"","content_url":"/s?timestamp=1500972968&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*36dIQwYTotR1sahdsvq9XYxjl1rgSZh8WZrEppC4z5vl80BIC5x2gegMcuzNKc9t7gKZndwlsG4Jrco2C-OP9e-v18Ot**0fypYFoLoQE73GztFANVLq-AYpPXQvh3oEI*8WSJnUSyzVcSJyZBdpbE=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/ujAmfatGZzgXCwnsQ4wEMbUo9jpu1edpS2OQqHEpeqbiaz0AVPludSdhJgOjxxogxc40SMiaWxItSNHJiaYGshaYg/0?wx_fmt=jpeg","del_flag":1,"digest":"4月20日下午，清控银杏中小企业服务专题分享会在文津国际酒店举行。分享企业业务范围涉及大数据服务、财税代理、移动安全、电子签名以及企业团险等领域。","fileid":100000212,"is_multi":0,"multi_app_msg_item_list":[],"source_url":"","subtype":9,"title":"科技创新引领企业服务新思路，清控银杏成功举办企业服务项目专题分享会"},"comm_msg_info":{"content":"","datetime":1492697674,"fakeid":"3219368047","id":1000000036,"status":2,"type":49}},{"app_msg_ext_info":{"author":"","content":"","content_url":"/s?timestamp=1500972968&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*36dIQwYTotR1sahdsvq9XYxjl1rgSZh8WZrEppC4z5vl80BIC5x2gegMcuzNKc9tzN-Fi1qkEd64mFGwOzB7Up*45aNMLgu9x0pwuMJhWT5C47qMgQdCSwr4TmA1EhU29wKrbBlGzN0bjuUjlNFIis=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/ujAmfatGZzgjplY6CibE9XyAwrpDECOqicAFibDOHYYpIampQYgwaEoMh4QDvjyhgBZNtfPXVKibMGPkQa7LmzubibA/0?wx_fmt=jpeg","del_flag":1,"digest":"清控银杏投资的轻客电动助力自行车创始人陈腾蛟，被评为“2016年中关村高聚工程创业领军人才”。","fileid":100000191,"is_multi":0,"multi_app_msg_item_list":[],"source_url":"","subtype":9,"title":"清控银杏投资企业轻客自行车创始人陈腾蛟荣获“2016年中关村高聚工程创业领军人才”称号"},"comm_msg_info":{"content":"","datetime":1490935000,"fakeid":"3219368047","id":1000000035,"status":2,"type":49}},{"app_msg_ext_info":{"author":"","content":"","content_url":"/s?timestamp=1500972968&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*36dIQwYTotR1sahdsvq9XYxjl1rgSZh8WZrEppC4z5vl80BIC5x2gegMcuzNKc9twM4W3ubdZnaQApOa90kUuxIFzGL0ZRW8wKfCQPJc0bnDddU*Uzt2up-OqdHx5Vodk6*qTW3SJeV4bwD-Emj5y8=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_png/ujAmfatGZzhmbzZJNkwO23n3VPJHEicrZxjuOWxPJzXq5Z5C9yhW2iche7JMcJL62aCJXLtAdibWEddG4fRaAMORg/0?wx_fmt=png","del_flag":1,"digest":"商业调查工具“天眼查”宣布完成过亿元人民币的A轮融资，由清控银杏领投。该项目是清控银杏管理的中小企业发展基金（江苏南通有限合伙）投资的第一个项目。","fileid":100000182,"is_multi":0,"multi_app_msg_item_list":[],"source_url":"","subtype":9,"title":"清控银杏领投“天眼查”A轮融资"},"comm_msg_info":{"content":"","datetime":1490080874,"fakeid":"3219368047","id":1000000034,"status":2,"type":49}},{"app_msg_ext_info":{"author":"","content":"","content_url":"/s?timestamp=1500972968&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*36dIQwYTotR1sahdsvq9XYxjl1rgSZh8WZrEppC4z5vl80BIC5x2gegMcuzNKc9t8DYER1xp9Fg2Kf9WN*52QOWTb6YtJaLvYLo7Zzkz3D1KLX35SDn4EA-35iU36UUlLkzLHu0q7oc-jyqJMZ8-xA=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/ujAmfatGZzhFPibrw0NhgybFEqVgTvHSkiaqAicdIaZTp7dMRYjGGoTLLLicAIhlsl57hCIqpSjEQone7godWRfX2A/0?wx_fmt=jpeg","del_flag":1,"digest":"随着管理规模的不断扩大，清控银杏现招聘财务和法务专员，欢迎您的加入！","fileid":100000179,"is_multi":0,"multi_app_msg_item_list":[],"source_url":"","subtype":9,"title":"【招贤纳士】清控银杏招聘啦！"},"comm_msg_info":{"content":"","datetime":1488344757,"fakeid":"3219368047","id":1000000033,"status":2,"type":49}},{"app_msg_ext_info":{"author":"","content":"","content_url":"/s?timestamp=1500972968&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*36dIQwYTotR1sahdsvq9XYxjl1rgSZh8WZrEppC4z5vl80BIC5x2gegMcuzNKc9tynPyyMMXREm3hdyipgrzyJwWGWANNkP4j*S9rxVISdPUtZv7EpIBWOwPvbWJ*VOsUOIuCI7fL0-II4F619vw6k=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/ujAmfatGZzhlLA4VkZrtUyC29KO48TDBv7pswPEKg7avtiaZTaAFhQUGFsOXc6WL0RxVXiak1DNE8JawaptceXLQ/0?wx_fmt=jpeg","del_flag":1,"digest":"2017年的第一场雪，在早春时节如期而至。绵绵飘雪之际，e签宝团队在清控银杏北京办公室联合举办了精品推介会，与清控银杏投资企业及合作伙伴，共同探讨电子签名的跨行业应用。","fileid":100000162,"is_multi":0,"multi_app_msg_item_list":[],"source_url":"","subtype":9,"title":"清控银杏成功举行e签宝与投资企业专项对接会"},"comm_msg_info":{"content":"","datetime":1487818380,"fakeid":"3219368047","id":1000000032,"status":2,"type":49}},{"app_msg_ext_info":{"author":"","content":"","content_url":"/s?timestamp=1500972968&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*36dIQwYTotR1sahdsvq9XYxjl1rgSZh8WZrEppC4z5vl80BIC5x2gegMcuzNKc9t3IRH0trVMe12PNFPNqeSRTQmfRTdae5rYjER6yysA7afv2d8MjMcBEKzTamYqlU3Z0mqnBWTyCRhP9FLa7n*VA=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/ujAmfatGZzhcbCE9BToYMrWQY3N7epBNlWv7EibJfpIW1NHU9KFdFA5HcuA4ekeK1HweicxdNOQ6830jzqOBicI2Q/0?wx_fmt=jpeg","del_flag":1,"digest":"清控银杏于2016年底投资的指掌易，实现了拥有百余家政企机关客户、产品用户数量逾百万人的指数型“光速”成长。指掌易的CEO王伟获得了“2016中国移动安全年度人物奖”，指掌易也同时荣获了业内颇受瞩目的“2016中国移动安全行业典范奖”。","fileid":100000171,"is_multi":0,"multi_app_msg_item_list":[],"source_url":"","subtype":9,"title":"清控银杏投资企业指掌易获得“2016中国移动安全行业典范奖”"},"comm_msg_info":{"content":"","datetime":1487142390,"fakeid":"3219368047","id":1000000031,"status":2,"type":49}},{"app_msg_ext_info":{"author":"","content":"","content_url":"/s?timestamp=1500972968&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*36dIQwYTotR1sahdsvq9XYxjl1rgSZh8WZrEppC4z5vl80BIC5x2gegMcuzNKc9t-kWdzswHnwrp8*46iM6SkqfrUY3hqeV-AxiaJXis8RVwBMLtgU0UBQkWJmWQ2wCNnBka0awhxRjxKItUwHSEuU=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/ujAmfatGZzj0ICHEYhbLd18HOu6DGMJwFy1uqdEZL7LBOsjQwk2w8Gv41hrcfMTPvrgLjV7Fc7dicF2s954Pn8Q/0?wx_fmt=jpeg","del_flag":1,"digest":"清控银杏宣布，陈煜辉将自2017年出任公司在美国硅谷地区的投资合伙人，主要负责北美地区商务拓展，以及发掘当地有价值的高科技创业投资项目。","fileid":100000164,"is_multi":0,"multi_app_msg_item_list":[],"source_url":"","subtype":9,"title":"清控银杏宣布陈煜辉博士出任北美地区投资合伙人"},"comm_msg_info":{"content":"","datetime":1484636139,"fakeid":"3219368047","id":1000000030,"status":2,"type":49}},{"app_msg_ext_info":{"author":"罗茁","content":"","content_url":"/s?timestamp=1500972968&amp;src=3&amp;ver=1&amp;signature=0vcQCaYONgDUGSYy1gBq*36dIQwYTotR1sahdsvq9XYxjl1rgSZh8WZrEppC4z5vl80BIC5x2gegMcuzNKc9t3IZV-kOFDRbHW*H0aLmb19CEPmD-HmQOSdEYB60S462l1-ki*fV94nQlFxCkQzT9aCkvj8j-mlKyhrex-r7hC8=","copyright_stat":100,"cover":"http://mmbiz.qpic.cn/mmbiz_jpg/ujAmfatGZzialZpMgnaolYylr9n0wHHH3jmVia9RbeByWoz0cDb42xiaqRicMicGzS7wf58u2dbDJ23pGWqBWJBm8Jg/0?wx_fmt=jpeg","del_flag":1,"digest":"2016年的句号越来越近，这一年，承载了清控银杏团队许多美好的回忆。","fileid":100000101,"is_multi":0,"multi_app_msg_item_list":[],"source_url":"","subtype":9,"title":"硅谷：2016清控银杏的新开端"},"comm_msg_info":{"content":"","datetime":1482987985,"fakeid":"3219368047","id":1000000029,"status":2,"type":49}}]};\r\n        seajs.use("sougou/profile.js");\r\n</script>\r\n\r\n    </body>\r\n    <script nonce="" type="text/javascript">document.addEventListener("touchstart", function() {},false);</script>\r\n</html>\r\n<!--tailTrap<body></body><head></head><html></html>-->\r\n' `)
		
		for (var i = 0; i < list.length; i++) {
			var item = list[i];
			console.log('================================================================================')
			console.log('开始处理第', i, '个微信公众号: ', item.name);
			console.log('================================================================================')
			if(item.mp) {
				// axios.get(item.mp).then((response) => {
				// 	console.log(response);
				// });
			}else {

			}
		}
		// console.log('微信相关数据处理完毕');
		// console.log('================================================================================================')
	},

	baiduNews: function(list) {

	},

	doubao: function(list) {

	},

	cnHr: function(list) {

	},

	weibo: function(list) {

	},

	hroot: function(list) {

	}
}

handler['wechat']({
	name: '中国保险报',
	sogoUrl: 'http://weixin.sogou.com/weixin?type=1&s_from=input&query=%E4%B8%AD%E5%9B%BD%E4%BF%9D%E9%99%A9%E6%8A%A5&ie=utf8&_sug_=n&_sug_type_=',
	mp: 'https://mp.weixin.qq.com/profile?src=3&timestamp=1500970652&ver=1&signature=JNtjkvV7TZTbepQjumdB04-e-gJXgbWOSJE6LspInLmeyTeLMktuEwBolL0ev14C45pN4X7TOap4vhPoqeZQiQ==',
})

for(var type in publicSentiments) {

	if(handler[type]) {
		// handler[type](publicSentiments[type])
	}

}

