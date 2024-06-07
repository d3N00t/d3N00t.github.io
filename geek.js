!function() {
"use strict";
var username=$("#Header1_HeaderTitle").text().trim();
var o = document.createElement("style");
o.textContent = '@import"https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/5.15.2/css/all.min.css";.day,.c_b_p_desc_readmore{display:none}.cards-list,.entrylist{margin:1rem 0;display:grid;grid-template-columns:repeat(4,1fr);grid-gap:1rem}.entrylistTitle{margin-top:1rem}.custom-card,.entrylistItem{background-color:var(--geek-color-1);border-radius:4px;box-sizing:border-box;flex-grow:1;animation:content-in .5s ease-in 0s;box-shadow:0 2px 12px #0000001a}.custom-card{display:flex;flex-direction:column;word-break:break-all}.custom-card.top .custom-card-title:before{content:"📌";margin-right:4px}.custom-card-title{padding:20px 20px 8px;font-size:14px;color:var(--geek-color-10)}.custom-card-title:hover{color:var(--color-primary)}.custom-card-desc{color:var(--geek-color-8);padding:0 20px 8px;flex-grow:1;font-size:12px}.custom-card-desc .c_b_p_desc{line-height:1.8}.custom-card-desc .MJXp-math{white-space:break-spaces}.custom-card-desc .MJXp-merror{padding:0;background:none;border:none;color:inherit;font-size:100%}.custom-card-desc .MathJax .noError{padding:0;border:none;color:inherit;font-size:100%;white-space:break-spaces}.custom-card-actions{display:flex;align-items:center;padding:0 20px 10px}.custom-card-actions div{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;margin-right:10px;color:var(--geek-color-8)}.custom-card-actions div i{margin-right:4px}.custom-card-actions a:first-of-type{margin-left:auto;margin-right:10px}.custom-card-actions a:first-of-type button{background:none;border:1px solid var(--color-primary);color:var(--color-primary)}.custom-card-actions button{margin-left:auto;padding:4px 12px;background-color:var(--color-primary);outline:none;border:1px solid var(--color-primary);color:#fff;border-radius:4px;cursor:pointer;box-sizing:border-box;white-space:nowrap}.custom-card-actions button:hover{background-color:var(--theme-primary-8);border:1px solid var(--theme-primary-8)}.custom-card-actions button:active{background-color:var(--color-primary);border:1px solid var(--color-primary);box-shadow:none}.custom-card-actions button:focus{box-shadow:0 2px 4px var(--theme-primary-4),0 0 0 3px var(--theme-primary-4)}.custom-card-actions li:before{font-weight:400}@media screen and (min-width: 1920px){.cards-list{grid-template-columns:repeat(4,1fr)}}@media screen and (max-width: 1175px){.cards-list{grid-template-columns:repeat(2,1fr)}}@media screen and (max-width: 908px){.cards-list{grid-template-columns:1fr;grid-template-rows:auto}.custom-card:hover,.entrylistItem:hover{transition:none;box-shadow:none}}#left-side .fas{margin-right:8px}.logo{font-size:15px;color:var(--geek-color-10);font-weight:700;text-align:center;height:60px;line-height:68px;letter-spacing:4px;position:sticky;top:0;background:var(--geek-color-1)}#cnblog-nav ul a{margin-bottom:20px;cursor:pointer}#cnblog-nav a:nth-child(1) span:before{color:#0984e3}#cnblog-nav a:nth-child(2) span:before{color:#00d1b2}#cnblog-nav a:nth-child(3) span:before{color:#ff6b81}#cnblog-nav a:nth-child(4) span:before{color:#10ac84}#cnblog-nav a:nth-child(5) span:before{color:#ffd257}#cnblog-nav a:nth-child(6) span:before{color:#00d1b2}#cnblog-nav a:nth-child(7) span:before{color:#48c774}.left-side-wrapper{padding-left:30px}.left-side-wrapper h3{font-size:16px;font-weight:400;margin-bottom:20px}.left-side-wrapper ul{display:flex;flex-direction:column;font-size:15px;white-space:nowrap}.left-side-wrapper ul li{text-decoration:none;color:var(--geek-color-9);display:flex;align-items:center}.left-side-wrapper ul li:not(:last-child){margin-bottom:20px}.left-side-wrapper ul li:hover{color:var(--geek-color-10)}.left-side-wrapper.links{margin-top:30px}.left-side-wrapper.links a{font-size:13px}.left-sidebar_bottom{margin-top:auto}.links{overflow-y:auto}.links h3{position:sticky;top:0;background-color:var(--geek-color-1)}.follow-me{display:flex;align-items:center;text-decoration:none;font-size:14px;overflow:hidden;color:#9c9cab;padding:0 20px;height:52px;border-top:1px solid var(--border-sidebar-block);position:relative}.follow-me .follow-text{display:flex;align-items:center;transition:.3s}.follow-me .developer{position:absolute;left:0;top:-100%;display:flex;transition:.3s;padding:0 20px;align-items:center;background-color:var(--geek-color-1);width:100%;height:100%}.follow-me .developer img{border-radius:50%;width:26px;height:26px;object-fit:cover;margin-right:10px}.follow-me:hover .follow-text{transform:translateY(100%)}.follow-me:hover .developer{top:0}@media screen and (max-width: 1366px){#cnblog-nav .fas{font-size:22px;margin-right:0}#cnblog-nav .nav-item-text{display:none}#cnblog-nav ul a{margin-bottom:5px}#cnblog-nav ul a li{padding:18px 0}#cnblog-nav ul a li span:last-child{margin-top:10px}.left-side-wrapper{padding:60px 0 0}.left-side-wrapper h3{display:none}.left-side-wrapper ul li{padding:10px 0 5px;flex-direction:column;font-size:12px}.left-side-wrapper ul li a{margin-top:10px}.logo,.links,.developer span,.follow-text span{display:none}}@media screen and (max-width: 768px){#home #sideBar,#home #left-side{display:none}#blog_nav_rss,#blog_nav_newpost{display:block}.left-side-wrapper{padding:20px 10px 0}.left-side-wrapper h3{padding-left:22px;position:relative}#left-side #cnblog-nav{flex-direction:row;flex-wrap:wrap;border-bottom:1px solid var(--border-sidebar-block)}#left-side #cnblog-nav ul{flex-direction:row}#left-side #cnblog-nav ul a{width:20%}#left-side #cnblog-nav ul a li span:first-child{background-color:var(--geek-color-6);border-radius:50%;display:flex;justify-content:center;align-items:center;width:10vw;height:10vw}#left-side #cnblog-nav ul a li span:first-child:before{font-size:16px}#left-side .links{display:block}}#post_next_prev{display:none}.custom-next-prev-post{display:flex;flex-direction:column;font-size:14px;color:var(--geek-color-10);border-radius:2px;margin-bottom:24px;white-space:nowrap}.custom-next-prev-post .prev-post,.custom-next-prev-post .next-post{padding:4px 8px}.custom-next-prev-post .prev-post a,.custom-next-prev-post .next-post a{display:flex;justify-content:flex-end;align-items:center}.custom-next-prev-post .prev-post li,.custom-next-prev-post .next-post li{color:var(--geek-color-8)}.custom-next-prev-post .prev-post span:nth-child(2),.custom-next-prev-post .next-post span:nth-child(2){max-width:80%;display:inline-block;text-overflow:ellipsis;overflow:hidden}.custom-next-prev-post .prev-post:hover li,.custom-next-prev-post .prev-post:hover span:nth-child(2),.custom-next-prev-post .next-post:hover li,.custom-next-prev-post .next-post:hover span:nth-child(2){color:#47a1f6;transition:color .2s}.custom-next-prev-post .prev-post:hover li,.custom-next-prev-post .next-post:hover li{animation:lr .3s ease-in 0s infinite alternate}.custom-next-prev-post span:nth-child(2){margin-left:4px;margin-right:8px}@media screen and (min-width: 1366px){.custom-next-prev-post{flex-direction:row;justify-content:space-between}.custom-next-prev-post .prev-post,.custom-next-prev-post .next-post{width:50%}.custom-next-prev-post .prev-post a{justify-content:flex-start}.custom-next-prev-post .prev-post li{order:-1}.custom-next-prev-post .prev-post span:nth-child(1){margin-left:8px;margin-right:4px}.custom-next-prev-post .prev-post span:nth-child(2){margin:0}.custom-next-prev-post .next-post a{justify-content:flex-end}}@keyframes lr{0%{transform:translate(-4px)}to{transform:translate(4px)}}.profile{position:relative;display:flex;flex-direction:column;z-index:1}.profile-blur{position:absolute;left:0;top:0;margin:0;width:100%;height:100%;background-repeat:no-repeat;background-size:cover;background-position:center;opacity:.9;z-index:-1;filter:blur(50px)}.profile-banner{position:relative;display:flex;justify-content:center;align-items:center;flex:1;border-radius:4px 4px 0 0;background-position:50%;background-size:cover;background-repeat:no-repeat;overflow:hidden}.profile-banner .profile-signature{position:relative;bottom:24px;max-width:60%;text-align:center;white-space:wrap;font-size:16px;color:#fff;text-shadow:0 0 3px #151728;z-index:2}.profile-menu{display:flex;padding-left:185px;background:var(--geek-color-1);border-radius:0 0 4px 4px}.profile-menu a{padding:12px 16px;color:var(--geek-color-10);cursor:pointer;font-size:14px}.profile-menu a:hover{background-color:var(--geek-color-3);transition:.2s}.profile-avatar{position:absolute;align-items:center;display:flex;z-index:1;bottom:16px;left:24px}.profile-avatar .avatar{width:150px;height:150px;border-radius:50%;border:4px solid var(--geek-color-1)}.profile-msg{position:absolute;left:200px;bottom:80px;z-index:1}.profile-msg button{margin-left:10px;background-color:var(--color-primary);border:none;font-size:12px;color:#fff;border-radius:4px;padding:3px 7px;cursor:pointer}.profile-msg p{display:flex;align-items:center}.profile-msg p:nth-child(1){font-size:22px;color:#fff;font-weight:700;text-shadow:0 0 3px #33354b}.profile-msg p:nth-child(2){margin-top:12px;font-size:13px;color:#fff;text-shadow:0 0 3px #151728}.profile-msg p:nth-child(2) a,.profile-msg p:nth-child(2) span{margin-right:16px}@media screen and (max-width: 1366px){.profile-menu{padding:0 30px;overflow:auto;font-size:14px}.profile-menu a{padding:10px 8px}.profile-avatar{left:20px;bottom:54px}.profile-avatar .avatar{width:80px;height:80px}.profile-msg{left:114px;bottom:62px}}@media screen and (max-width: 768px){.profile-avatar{left:10px;bottom:50px}.profile-avatar .avatar{width:60px;height:60px}.profile-msg{left:83px;bottom:51px}.profile-banner .profile-signature{max-width:80%;font-size:14px}}.profile-followstate.disabled{cursor:no-drop}.account{display:flex;align-items:center;height:60px;position:sticky;top:0;background-color:var(--geek-color-1);z-index:2;flex-shrink:0}.account-button{border:0;background:0;color:var(--geek-color-10);padding:0;cursor:pointer;position:relative;margin-left:20px}.account-button .fas:before{font-size:20px;font-weight:500}.fa-bell:before{margin-right:0}.account-button-notice{position:relative}.account-button-notice .notice-count{display:inline-block;position:absolute;top:-8px;right:-5px;width:14px;height:14px;line-height:12px;border-radius:50%;color:#fff;background:var(--color-primary);font-size:8px;text-align:center;white-space:nowrap;border:2px solid var(--geek-color-1)}.account-button.stats{position:relative}.account-button.stats .stat-list{visibility:hidden;position:absolute;top:0;padding:8px 12px;border-radius:2px;background:var(--geek-color-2);opacity:0;border:1px solid var(--geek-color-3)}.account-button.stats .stat-list li{display:flex;white-space:nowrap;font-size:13px;line-height:1.7;color:var(--geek-color-9)}.account-button.stats:hover .stat-list{opacity:1;visibility:visible;transform:translateY(24px);transition:all .3s}.view-count{flex:1;text-align:center}.account-avatar{margin-left:auto;margin-right:20px;font-size:20px}#custom-calendar{padding:0 18px}.event-wrapper{background-color:var(--geek-color-2)}#blog-calendar{position:relative;padding:20px 20px 0}#blog-calendar #blogCalendar table,#blog-calendar #blogCalendar tbody,#blog-calendar #blogCalendar tr,#blog-calendar #blogCalendar td{display:block}#blog-calendar #blogCalendar .CalOtherMonthDay{color:var(--geek-color-5)}#blog-calendar #blogCalendar .CalNextPrev{color:var(--geek-color-7)}#blog-calendar #blogCalendar .CalTodayDay{font-size:.7em;border:1px solid var(--color-primary);border-radius:50%;background-color:var(--theme-primary-2)}#blog-calendar #blogCalendar tr:nth-child(1){display:flex;flex-direction:row;justify-content:space-between}#blog-calendar #blogCalendar tr:nth-child(1)>td:first-of-type{width:100%}#blog-calendar #blogCalendar tr:nth-child(1)>td:first-of-type td{width:auto}#blog-calendar #blogCalendar tr:nth-child(2){padding:0 3.24px;margin-bottom:5px;border-bottom:1px solid var(--geek-color-2)}#blog-calendar #blogCalendar tr:not(:nth-child(1)){display:flex;justify-content:space-between}#blog-calendar #blogCalendar tr:not(:nth-child(1)) td{display:flex;justify-content:center;align-items:center;width:25px;height:25px}#blog-calendar #blogCalendar tr th,#blog-calendar #blogCalendar tr td{font-size:12px;padding:.2rem;font-weight:400}#blog-calendar #blogCalendar u{text-decoration:none;position:relative}#blog-calendar #blogCalendar u:after{content:"";position:absolute;bottom:-2px;width:5px;height:5px;border-radius:50%;left:50%;background-color:var(--color-primary);transform:translate(-50%)}#blog-calendar #blogCalendar u:hover{color:var(--color-primary)}.event-wrapper{position:relative;padding:20px 8px 8px;border-radius:0 0 2px 2px}.event-wrapper img{width:90%;display:block;border-radius:2px 2px 0 0;margin:0 auto}.event-wrapper .event-title{color:var(--geek-color-9);margin:8px 0 0;padding:0 14px;font-size:13px}.event-wrapper .event-subtitle{color:var(--geek-color-10);font-size:12px;font-weight:500;padding:0 14px}@media screen and (max-width: 767px){.event-wrapper{padding-top:20px}.event-wrapper img{padding-bottom:12px}#home #sideBar{display:none}}.custom-searchbar{display:grid;grid-template-columns:1fr;position:relative;background-color:var(--geek-color-1);z-index:5}.custom-searchbar input{padding:0 54px;border:none;background-color:transparent;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'512\' height=\'512\'%3e%3cpath d=\'M508.9 478.7L360 330a201.6 201.6 0 0045.2-127.3C405.3 90.9 314.4 0 202.7 0S0 91 0 202.7s91 202.6 202.7 202.6c48.2 0 92.4-17 127.3-45.2L478.7 509c4.2 4.1 11 4.1 15 0l15.2-15.1c4.1-4.2 4.1-11 0-15zm-306.2-116c-88.3 0-160-71.8-160-160s71.7-160 160-160 160 71.7 160 160-71.8 160-160 160z\' data-original=\'%23000000\' class=\'active-path\' data-old_color=\'%23000000\' fill=\'%23D8D8D8\'/%3e%3c/svg%3e");background-repeat:no-repeat;background-size:14px;background-position:25px 50%;color:var(--geek-color-10);font-size:13px;outline:none}.custom-searchbar input::placeholder{color:var(--geek-color-10)}@media screen and (min-width: 768px){.mobile-menu{display:none}}@media screen and (max-width: 768px){.mobile-menu{display:none;position:fixed;top:0;left:0;right:0;height:100vh;overflow:auto;z-index:4}.mobile-menu::-webkit-scrollbar{display:none}#side-btn-wrap{visibility:visible;position:fixed;bottom:20px;right:28px;padding:10px;background:#fff;box-shadow:1px 1px 8px var(--color-primary);border-radius:50%;z-index:20}#left-side .favourite{padding:30px}#left-side .favourite h3{display:block;padding-left:0}#left-side .favourite ul{flex-direction:row;flex-wrap:wrap}#left-side .favourite ul li{padding:.3rem .6rem;border-radius:2px;margin-bottom:.5rem;margin-right:.5rem;background-color:var(--geek-color-6);font-size:12px}#left-side .favourite ul li a{margin:0}#custom-mobile-nav .icon{width:27px;margin-left:5px;transform:rotate(90deg)}#side-btn{position:relative;width:25px;height:25px;cursor:pointer}#side-btn-burger{position:absolute;background:var(--color-primary);width:100%;height:3px;top:50%;right:0;margin-top:-1px;opacity:1;transition:all .2s ease-in-out}#side-btn-burger:after,#side-btn-burger:before{border-radius:2px;background:var(--color-primary);position:absolute;width:100%;height:3px;content:"";display:block;transition:all .2s ease-in-out}#side-btn-burger:before{top:8px}#side-btn-burger:after{bottom:8px}#side-btn.side-btn-active #side-btn-burger{background:0 0}#side-btn.side-btn-active #side-btn-burger:before{transition:all .2s;transform:rotate(45deg);top:0}#side-btn.side-btn-active #side-btn-burger:after,#side-btn.side-btn-active #side-btn-burger:before{transition:all .2}#side-btn.side-btn-active #side-btn-burger:after{transition:all .3s;transform:rotate(-45deg);bottom:0}#side-btn.side-btn-active #side-btn-burger:after,#side-btn.side-btn-active #side-btn-burger:before{transition:all .2s}.navbar-burger{cursor:pointer;display:block;width:39px;height:39px;position:absolute;top:0;right:4px;margin-left:auto;z-index:5}.navbar-burger span{background-color:currentColor;display:block;height:1px;left:calc(50% - 8px);position:absolute;transform-origin:center;transition-duration:86ms;transition-property:background-color,opacity,transform;transition-timing-function:ease-out;width:16px}.navbar-burger span:nth-child(1){top:calc(50% - 6px)}.navbar-burger span:nth-child(2){top:calc(50% - 1px)}.navbar-burger span:nth-child(3){top:calc(50% + 4px)}.navbar-burger.is-active span:nth-child(1){transform:translateY(5px) rotate(45deg)}.navbar-burger.is-active span:nth-child(2){opacity:0}.navbar-burger.is-active span:nth-child(3){transform:translateY(-5px) rotate(-45deg)}}.mobile-menu.is-active{display:block;animation:fadeIn .3s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;vertical-align:baseline;box-sizing:border-box}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1;-webkit-tap-highlight-color:rgba(0,0,0,0)}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}button{outline:none}a{color:inherit;cursor:pointer}a,a:hover,a:link,a:visited{text-decoration:none!important}@keyframes content-in{0%{transform:translateY(10rem);opacity:0}to{transform:translateY(0);opacity:1}}#under_post_card1,#under_post_card2{display:none}:root{--color-primary: var(--themeColor)}:root{--geek-color-1: #f7f8fa;--geek-color-2: #f2f3f5;--geek-color-3: #e5e6eb;--geek-color-4: #c9cdd4;--geek-color-5: #a9aeb8;--geek-color-6: #86909c;--geek-color-7: #6b7785;--geek-color-8: #4e5969;--geek-color-9: #272e3b;--geek-color-10: #1d2129}:root[theme=dark]{--geek-color-1: rgb(32, 35, 62);--geek-color-2: rgb(44, 48, 83);--geek-color-3: rgb(55, 60, 105);--geek-color-4: rgb(66, 72, 126);--geek-color-5: rgb(77, 85, 148);--geek-color-6: rgb(89, 97, 169);--geek-color-7: rgb(100, 110, 191);--geek-color-8: rgb(111, 122, 212);--geek-color-9: rgb(123, 134, 234);--geek-color-10: rgb(183, 189, 250)}#cnblogs_post_body.blogpost-body-html,#mainContent .cnblogs-markdown{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px}#cnblogs_post_body.blogpost-body-html h1,#cnblogs_post_body.blogpost-body-html h2,#cnblogs_post_body.blogpost-body-html h3,#cnblogs_post_body.blogpost-body-html h4,#cnblogs_post_body.blogpost-body-html h5,#cnblogs_post_body.blogpost-body-html h6,#mainContent .cnblogs-markdown h1,#mainContent .cnblogs-markdown h2,#mainContent .cnblogs-markdown h3,#mainContent .cnblogs-markdown h4,#mainContent .cnblogs-markdown h5,#mainContent .cnblogs-markdown h6{line-height:1.5;margin:35px 0 10px;padding:0 0 5px}#cnblogs_post_body.blogpost-body-html h1,#mainContent .cnblogs-markdown h1{font-size:30px;margin-bottom:5px}#cnblogs_post_body.blogpost-body-html h2,#mainContent .cnblogs-markdown h2{padding-bottom:12px;font-size:24px}#cnblogs_post_body.blogpost-body-html h3,#mainContent .cnblogs-markdown h3{font-size:18px;padding-bottom:0}#cnblogs_post_body.blogpost-body-html h4,#mainContent .cnblogs-markdown h4{font-size:16px}#cnblogs_post_body.blogpost-body-html h5,#mainContent .cnblogs-markdown h5{font-size:15px}#cnblogs_post_body.blogpost-body-html h6,#mainContent .cnblogs-markdown h6{margin-top:5px}#cnblogs_post_body.blogpost-body-html img,#mainContent .cnblogs-markdown img{display:flex;margin:10px auto;max-width:100%!important;border-radius:2px}#cnblogs_post_body.blogpost-body-html hr,#mainContent .cnblogs-markdown hr{margin:32px 0;border:none;border-bottom:1px solid var(--geek-color-4)}#cnblogs_post_body.blogpost-body-html a,#mainContent .cnblogs-markdown a{color:#47a1f6}#cnblogs_post_body.blogpost-body-html a:hover,#mainContent .cnblogs-markdown a:hover{color:#68b5fb}#cnblogs_post_body.blogpost-body-html ol,#mainContent .cnblogs-markdown ol{list-style:auto}#cnblogs_post_body.blogpost-body-html ul,#mainContent .cnblogs-markdown ul{list-style:disc}#cnblogs_post_body.blogpost-body-html ol,#cnblogs_post_body.blogpost-body-html ul,#mainContent .cnblogs-markdown ol,#mainContent .cnblogs-markdown ul{margin:22px 0;padding:0 0 0 28px}#cnblogs_post_body.blogpost-body-html ol li,#cnblogs_post_body.blogpost-body-html ul li,#mainContent .cnblogs-markdown ol li,#mainContent .cnblogs-markdown ul li{margin-bottom:0}#cnblogs_post_body.blogpost-body-html ol ul,#cnblogs_post_body.blogpost-body-html ol ol,#cnblogs_post_body.blogpost-body-html ul ul,#cnblogs_post_body.blogpost-body-html ul ol,#mainContent .cnblogs-markdown ol ul,#mainContent .cnblogs-markdown ol ol,#mainContent .cnblogs-markdown ul ul,#mainContent .cnblogs-markdown ul ol{margin-top:4px}#cnblogs_post_body.blogpost-body-html blockquote,#mainContent .cnblogs-markdown blockquote{margin:22px 0;padding:2px 22px;color:var(--geek-color-9);background:var(--geek-color-3);border-left:4px solid var(--color-primary)}#cnblogs_post_body.blogpost-body-html blockquote:after,#mainContent .cnblogs-markdown blockquote:after{display:block;content:""}#cnblogs_post_body.blogpost-body-html blockquote>p,#mainContent .cnblogs-markdown blockquote>p{margin:10px 0}#cnblogs_post_body.blogpost-body-html details,#mainContent .cnblogs-markdown details{margin:1.5rem 0;padding:.5rem 1rem;background:var(--geek-color-2);border-radius:2px;border:1px solid;border-color:var(--geek-color-3)}#cnblogs_post_body.blogpost-body-html details>summary,#mainContent .cnblogs-markdown details>summary{font-weight:500;outline:none;cursor:pointer}#cnblogs_post_body.blogpost-body-html details[open],#mainContent .cnblogs-markdown details[open]{border:1px solid var(--geek-color-3)}#cnblogs_post_body.blogpost-body-html iframe,#mainContent .cnblogs-markdown iframe{width:100%;height:40vw}#cnblogs_post_body.blogpost-body-html iframe.music,#mainContent .cnblogs-markdown iframe.music{width:auto;height:auto}#mainContent .cnblogs-markdown kbd{display:inline-block;padding:3px 5px;font:11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;line-height:10px;color:#444d56;vertical-align:middle;background-color:#fafbfc;border:1px solid #d1d5da;border-radius:2px;box-shadow:inset 0 -1px #d1d5da}#mainContent .cnblogs-markdown mark{background-color:var(--color-primary)}.cnblogs-markdown :not(pre,div,td)>code,.blogpost-body :not(pre,div,td)>code{display:inline;padding:.065em .4em;background-color:var(--geek-color-2);border-radius:2px;overflow-x:auto;font-size:.87em;font-family:"Menlo,Monaco,Consolas,\'Courier New\', monospace";color:#15a7a7;word-break:break-word}pre[class*=language-].highlighter-prismjs,pre code.hljs{border-radius:2px}span.cnb-code-toolbar-item{color:var(--geek-color-9);background:var(--geek-color-3);mix-blend-mode:normal;opacity:1}#cnblogs_post_body th,.cnblogs-post-body th{background:none}.blogpost-body th,.blogpost-body td,.cnblogs-post-body th,.cnblogs-post-body td{border-color:var(--geek-color-3)}@media screen and (max-width: 1023px){iframe{height:60vw}}@media screen and (max-width: 768px){h1{font-size:24px}h2{font-size:20px}h3{font-size:18px}#cnblogs_post_body iframe,.cnblogs-post-body iframe,.cnblogs-markdown iframe{height:50vw}}::-webkit-scrollbar{width:12px;height:12px;border-radius:4px}::-webkit-scrollbar-track{background:var(--geek-color-3)}::-webkit-scrollbar-thumb{background:var(--geek-color-4);border-radius:4px}::-webkit-scrollbar-thumb:hover{background:var(--geek-color-6)}.copy-btns:before,.custom-comment-avatar:after,#commentform_title:before,.diggit:before,.feedback_area_title:before,.buryit:before,#green_channel_favorite:before,#green_channel_follow:before,.custom-card-title:before,[class^=fa-]:before,[class^=fa-]:after{font-family:"Font Awesome 5 free","Font Awesome 5 Brands";font-weight:700}.post-message{display:flex;flex-direction:column;justify-content:space-around;margin-bottom:20px;width:100%}.message-top{display:flex;flex-wrap:wrap}.message-top .message-categories,.message-top .message-tags{display:flex;align-items:center;margin:8px 0}.message-top .message-categories a,.message-top .message-tags a{padding:4px 8px;font-size:13px;line-height:14px;border-radius:4px;margin:0 0 0 8px}.message-top .message-categories{margin:0 16px 0 0}.message-top .message-categories a{color:#fff;background-color:#f13a3a;border:1px solid #f13a3a}.message-top .message-tags a{border:1px solid;color:var(--geek-color-10)}.message-tags a:nth-child(1){border-color:#22a6b3}.message-tags a:nth-child(2){border-color:#0097e6}.message-tags a:nth-child(3){border-color:#fbc531}.message-tags a:nth-child(4){border-color:#10ac84}.message-bottom{display:flex;gap:8px;color:var(--geek-color-8);white-space:nowrap;overflow:auto;font-size:13px}#EntryTag,#BlogPostCategory,#tip_comment{display:none}.custom-signature{padding:1rem 14px;font-size:1.2em;line-height:1.5em}.qaq-btn{-webkit-user-select:none;user-select:none;cursor:pointer}.qaq-wrap{display:none;position:absolute;top:34px;left:-4%;padding:8px;background-color:var(--geek-color-1);border:1px solid var(--geek-color-2);border-radius:4px;width:500px;max-width:283px;z-index:3}.qaq-wrap:before,.qaq-wrap:after{position:absolute;content:"";margin:0;width:0;height:0}.qaq-wrap:after{top:-9px;left:14px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid var(--geek-color-2)}.qaq-wrap:before{top:-8px;left:14px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid var(--geek-color-1);z-index:1}.emoji-list{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));padding-right:2px;max-height:200px;overflow-y:auto;overflow-x:hidden;font-size:14px}.emoji-list .emoji-item{display:flex;justify-content:center;align-items:center;padding-top:6px;padding-bottom:6px;color:var(--geek-color-6);cursor:pointer;box-sizing:border-box;border:1px solid transparent;border-radius:4px;-webkit-user-select:none;user-select:none}.emoji-list .emoji-item img.emoji{width:20px;height:20px}.emoji-list .emoji-item:hover{background-color:var(--geek-color-3);border-color:var(--color-primary)}.emoji-list .emoji-item:hover>.emoji{transform:scale(1.2);transition:transform .15s cubic-bezier(.2,0,.13,2)}.emoji-list::-webkit-scrollbar{width:8px;height:8px}.emoji-list::-webkit-scrollbar-corner{background-color:transparent}.emoji-list::-webkit-scrollbar-thumb{background-color:#d2cfcf;border-radius:4px}.emoji-list::-webkit-scrollbar-track{background-color:transparent}.qaq-mask{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2;display:block;cursor:default;content:" ";background:transparent;z-index:-1}.anim-scale-in{animation-name:scale-in;animation-duration:.15s;animation-timing-function:cubic-bezier(.2,0,.13,1.5)}@keyframes scale-in{0%{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}body .medium-zoom-overlay{background:var(--geek-color-2)!important;z-index:6}body .medium-zoom-image--opened{z-index:7}html .medium-zoom--opened .medium-zoom-overlay{opacity:.9}.lightbox-post{cursor:zoom-in}.gallery{display:none}.custom-gallery div{display:flex;flex-wrap:wrap;margin-top:20px}.custom-gallery div img{margin:8px;width:170px;height:170px;border-radius:4px}.message-wrap{position:fixed;top:20px;right:20px;z-index:999}.gradient-border{position:relative;display:flex;align-items:center;justify-content:center;width:400px;height:200px;color:#fff;font-family:Raleway;font-size:2.5rem;--borderWidth: 3px;background:#1d1f20;border-radius:var(--borderWidth)}.gradient-border:after{content:"";position:absolute;top:calc(-1 * var(--borderWidth));left:calc(-1 * var(--borderWidth));height:calc(100% + var(--borderWidth) * 2);width:calc(100% + var(--borderWidth) * 2);background:linear-gradient(60deg,#f79533,#f37055,#ef4e7b,#a166ab,#5073b8,#1098ad,#07b39b,#6fba82);border-radius:calc(2 * var(--borderWidth));z-index:-1;animation:animatedgradient 3s ease alternate infinite;background-size:300% 300%}@keyframes animatedgradient{0%{background-position:0% 50%}50%{background-position:100% 50%}to{background-position:0% 50%}}#mainContent #post-signature{position:relative;display:flex;flex-direction:column;margin:25px 0;padding:10px 24px 10px 15px;background:var(--geek-color-2);border-left:5px solid var(--color-primary);border-radius:2px}#mainContent #post-signature p{margin:0;font-size:14px;line-height:1.6em}#mainContent #post-signature a{color:inherit;border-bottom:none}#mainContent #post-signature:before{content:"!";background:var(--color-primary);position:absolute;top:16px;left:-12px;color:#fff;width:18px;height:18px;border-radius:50%;text-align:center;line-height:18px;font-weight:800;font-size:12px}.custom-toolbar{position:fixed;bottom:30px;right:30px;width:40px;height:40px}.toolbar-item{position:relative;width:40px;height:40px;background-color:var(--geek-color-2);border-radius:50%;text-align:center;font-size:20px;line-height:40px;box-shadow:0 2px 12px #0000001a;cursor:pointer}.toolbar-item.toolbar-item-toggle{position:absolute;bottom:0}.toolbar-item i{display:flex;justify-content:center;font-style:normal;outline:none}.toolbar-item i:before{margin-right:0}.toolbar-item i::selection{background:none}.toolbar-item .tooltip{position:relative;display:flex;justify-content:center;align-items:center;height:24px;background-color:#333;color:#fff;text-align:center;border-radius:2px;font-size:12px;pointer-events:none;visibility:hidden;transform:translateY(-31px);z-index:9}.toolbar-item .tooltip:after{position:absolute;right:-5px;content:"";width:0;height:0;margin:0;border-bottom:6px solid transparent;border-top:6px solid transparent;border-left:6px solid #333}.toolbar-item:hover .tooltip{visibility:visible;transform:translate(-50px,-31px);transition:transform .2s}.toolbar-item:active{filter:brightness(.8);transition:filter .2s}@media screen and (max-width: 1366px){.menu-item-tooltip{display:none}}@media screen and (max-width: 1024px){.toolbar-item:hover .tooltip{visibility:hidden}}@media screen and (max-width: 767px){.custom-tools-menu .menu-item:not(:last-child):hover{transform:none}.custom-tools-menu{right:20px;bottom:20px}}.dark-to-light:after{content:"";width:100vw;height:100vh;position:fixed;z-index:99999;left:0;top:0;margin-left:0;background-color:#252528;opacity:.7;animation:toLight .6s linear 0s forwards;pointer-events:none}.light-to-dark:after{content:"";width:100vw;height:100vh;position:fixed;z-index:99999;left:0;top:0;margin-left:0;background-color:#fff;opacity:.7;animation:toDark .6s linear 0s forwards;pointer-events:none}@keyframes toLight{0%{background-color:#252528;opacity:.7}to{background-color:#fff;opacity:0}}@keyframes toDark{0%{background-color:#fff;opacity:.7}to{background-color:#252528;opacity:0}}#player.aplayer{background:none}#player.aplayer .aplayer-list ol li{background:var(--geek-color-6)}#player:hover .aplayer-list{transform:scaleX(1);left:0}#player:hover .aplayer-body{left:0}#player .aplayer-list{position:relative;transform:scaleX(.838);left:-34px}#player .aplayer-body{left:-66px;background-color:var(--geek-color-6)}#player .aplayer-body .aplayer-info{border-top:none}#player .aplayer-body .aplayer-miniswitcher{background-color:var(--geek-color-6);border-left:1px solid #999}#player .aplayer-lrc{display:none}#player .aplayer-lrc .aplayer-lrc-contents{color:inherit}#player .aplayer-lrc .aplayer-lrc-contents p{color:inherit;font-size:14px;text-shadow:none}@media screen and (max-width: 767px){#player{display:none}}.custom-comment-avatar{position:relative}.custom-comment-avatar img{width:50px;height:50px;border-radius:50%}.custom-comments-author .custom-comment-avatar:after{position:absolute;bottom:11px;right:5px;content:"";color:#4ac7ff;background-color:#fff;line-height:1em;border-radius:50%;margin-right:0;font-size:80%}.message-top .message-categories a,.message-top .message-tags a{border-radius:2px;box-shadow:none}.medium-zoom-image--opened{z-index:41}.custom-toolbar{z-index:9}.rocket-rotate{position:relative;top:12px;transform:rotate(-45deg)}.toolbar-item{box-shadow:0 2px 6px #0003}.custom-drag-menu{z-index:3}.medium-zoom-overlay{z-index:2}#click-effects{z-index:6}body .aplayer.aplayer-fixed .aplayer-lrc{bottom:30px}#catalog{padding:25px;font-size:14px;overflow-x:hidden;word-wrap:nowrap;text-overflow:ellipsis}#catalog .catalog-title{display:flex;align-items:center;position:sticky;top:0;color:var(--geek-color-9);font-size:16px;margin-bottom:20px;font-weight:400;cursor:pointer}#catalog ul{border-left:1px solid var(--geek-color-2)}#catalog ul li{color:var(--geek-color-10);display:flex;align-items:center;line-height:1.8}#catalog ul li:before{position:relative;right:5px;display:block;width:7px;height:7px;content:"";border-radius:50%;border:1px solid var(--color-primary);background-color:var(--geek-color-1);margin-right:4px;transition:transform .2s}#catalog ul li:hover{color:var(--geek-color-10)}#catalog ul li a{display:inline-block;width:100%}#catalog ul li a .icon{width:1.2em;height:1.8em}#catalog ul .h1-list{font-weight:700;font-size:16px}#catalog ul .h2-list{font-size:14px}#catalog ul .h3-list,#catalog ul .h4-list,#catalog ul .h5-list,#catalog ul .h6-list{font-size:12px}#catalog ul .h1-list~.h2-list{margin-left:1em;font-size:14px}#catalog ul .h2-list~.h3-list{margin-left:2em}#catalog ul .h3-list~.h4-list{margin-left:3em}#catalog ul .h4-list~.h5-list{margin-left:4em}#catalog ul .h5-list~.h6-list{margin-left:5em}#catalog ul .catalog-active{color:var(--color-primary);transition:all .3s}#catalog ul .catalog-active:before{transform:scale(1) translate(0);background-color:var(--color-primary)}*::selection{background:var(--theme-primary-4);color:inherit}html{-webkit-font-smoothing:antialiased;box-sizing:border-box}body{background-color:var(--geek-color-2);color:var(--geek-color-10);font-size:1em;line-height:1.5;font-family:UbuntuMono,Varela Round,PingFang SC,Microsoft YaHei,Helvetica,Arial,Menlo,Monaco,monospace,sans-serif;overflow:hidden}#home{display:grid;grid-template-columns:0vw 1fr 1fr 19vw;grid-template-rows:1fr 1fr 1fr;grid-template-areas:"left main main right" "left main main right" "left main main right";height:100vh}.forFlow{z-index:2}#header{display:none!important}#main{grid-area:main;display:grid;grid-template-rows:50px 1fr 30px;grid-template-columns:1fr}#mainContent{position:relative;display:grid;grid-template-columns:100%;grid-template-rows:40vh 1fr;padding:20px;background-color:var(--geek-color-2);overflow:auto}.dayTitle{display:none}.postTitl2,.entrylistPosttitle{width:100%}.entrylistPostSummary,.postCon{color:var(--geek-color-9);font-size:14px}.entrylistItem{padding:20px}#sideBar,#left-side{overflow:auto}#sideBar{grid-area:right;background-color:var(--geek-color-1);border-radius:0 4px 0 0}#sideBarMain{padding-bottom:20px}#sidebar_news,#sidebar_search{display:none!important}.sidebar-block{padding:20px 20px 0}.sidebar-block h3{color:var(--geek-color-10);font-size:16px;margin-bottom:8px;font-weight:400}.sidebar-block ul li{padding:4px 0;font-size:12px;cursor:pointer}.sidebar-block ul li:hover{color:var(--color-primary);transition:all .2s}#sidebar_shortcut ul,#sidebar_toptags ul{display:flex;flex-wrap:wrap}#sidebar_shortcut ul li,#sidebar_toptags ul li{margin:0 2px 2px 0;padding:4px 12px;background-color:var(--geek-color-2);border:1px solid var(--geek-color-3);font-size:12px;border-radius:2px}#sidebar_shortcut ul li:hover,#sidebar_toptags ul li:hover{color:inherit;background-color:var(--geek-color-3)}.recent_comment_body{background-color:var(--geek-color-2);border:1px solid var(--geek-color-3);border-radius:4px}#sidebar_recentposts ul li,.recent_comment_title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#sidebar_recentcomments .recent_comment_body{padding:12px}#sidebar_recentcomments .recent_comment_body:hover{color:inherit;transition:all .2s}#left-side{grid-area:left;border-right:1px solid var(--border-sidebar-block);display:flex;flex-direction:column;background-color:var(--geek-color-1);flex-shrink:0;border-radius:4px 0 0}#footer{margin:0;display:flex;justify-content:center;align-items:center;background-color:var(--geek-color-1);color:var(--geek-color-9);font-size:13px}#footer #poweredby{margin-left:12px}#post_detail{margin-top:20px;padding:16px 16px 0;animation:content-in .5s ease-in 0s;border-radius:4px;background-color:var(--geek-color-1);overflow:hidden}#post_detail #topics .postDesc{margin:0 0 20px;padding:0;color:var(--geek-color-9);text-align:center;font-size:13px;text-transform:capitalize}#post_detail #topics .postDesc a{text-transform:none}#post_detail .postTitle{font-size:30px}.pager{display:flex;justify-content:center;grid-column-start:1;grid-column-end:5;padding:8px 0;margin:24px 0 0;font-size:14px;text-align:center;background-color:var(--geek-color-1);color:var(--geek-color-9);border-radius:4px}.pager a,.pager span.current{margin:0 10px;padding:0 12px;border-radius:4px;background-color:var(--geek-color-2);border:1px solid var(--geek-color-3)}.pager a:hover,.pager span.current:hover{transition:all .2s;border-color:var(--color-primary)}.pager a{color:var(--geek-color-10)}.pager span.current{color:var(--color-primary);font-weight:500}h1.PostListTitle+.pager,#homepage_top_pager{display:none}#homepage_bottom_pager{margin:8px 0}.topicListFooter{grid-column-start:1;grid-column-end:4;margin:0}#nav_next_page{margin:0 0 12px;text-align:center}#nav_next_page a{padding:8px 0;border-radius:4px;width:100%;background-color:var(--geek-color-1);display:block;border:2px solid rgba(0,0,0,0);box-shadow:0 0 4px #0000000d}#nav_next_page a:hover{color:var(--color-primary);border-color:var(--color-primary);transition:all .2s}#taglist_title,.custom-gallery h3,.entrylistTitle,.PostListTitle{margin:20px 0 0;padding:12px;font-size:16px;font-weight:400;background-color:var(--geek-color-1);text-align:center}.PostListTitle{margin-bottom:16px}.entrylistDescription,.postSeparator{display:none}.entrylistTitle{grid-column-start:1;grid-column-end:4}#myposts{margin-left:0;display:grid;grid-template-columns:repeat(4,1fr);grid-gap:12px}#myposts .PostList{padding:8px;margin:0;background-color:var(--geek-color-1);border-radius:4px;box-shadow:0 2px 12px #0000001a}#myposts .PostList .postTitl2{color:var(--geek-color-10);font-size:16px;font-weight:400}#myposts .PostList .postDesc2{margin-bottom:0;padding-top:0;color:var(--geek-color-8)}#myposts .PostList .postText2{display:none}#taglist_main{margin-top:0;background-color:var(--geek-color-1)}#taglist_main #taglist_title_wrap{border-radius:4px;padding:0!important}#taglist_main #taglist{padding:20px}#taglist_main #taglist table,#taglist_main #taglist tbody,#taglist_main #taglist tr,#taglist_main #taglist td{display:block}#taglist_main #taglist tr{display:grid;grid-template-columns:repeat(4,1fr);grid-gap:8px;margin-bottom:8px;width:100%}#taglist_main #taglist td{position:relative;display:flex;align-items:center;padding:0}#taglist_main #taglist td a{display:block;padding:6px 18px;width:100%;border-radius:4px;background-color:var(--geek-color-2);border:1px solid var(--geek-color-3);font-size:13px}#taglist_main #taglist td span{position:absolute;right:4px;top:0}#blog_post_info_block{display:flex;justify-content:center;flex-direction:column;margin:0}#BlogPostCategory{margin-bottom:6px;font-size:16px;order:1}#EntryTag{margin-bottom:6px;font-size:16px;order:2}#blog_post_info{order:3;display:flex;justify-content:center;flex-wrap:wrap;align-items:baseline;margin:20px 0}#author_profile{display:flex;align-items:center;margin:0 10.8px 0 0;padding:0;width:auto;order:-1}#author_profile #author_profile_info,#author_profile #author_profile_follow{display:none}#green_channel{display:flex;align-items:center;flex-wrap:wrap;margin:0;padding:0;width:auto;border:none}#green_channel a,#green_channel span{background:none;box-shadow:none;font-weight:400;text-shadow:none;padding:0 12px}#green_channel #green_channel_follow,#green_channel #green_channel_favorite{padding:6px 12px;border-radius:4px;background-color:var(--geek-color-1);border:1px solid var(--geek-color-4)!important;color:var(--geek-color-10)!important}#green_channel #green_channel_follow:hover,#green_channel #green_channel_favorite:hover{background-color:var(--geek-color-2);background-image:none;transition:background-color .2s}#green_channel #green_channel_follow:before{content:"";margin-right:4px;font-weight:500}#green_channel #green_channel_favorite:before{content:"";margin-right:4px;font-weight:500}#green_channel #green_channel_digg,#green_channel #green_channel_weibo,#green_channel #green_channel_wechat{display:none}#div_digg{display:flex;justify-content:center;align-items:center;margin:0;padding:0}#div_digg .diggit,#div_digg .buryit{width:auto;height:auto;margin:0;background:none;padding:6px 12px;border-radius:4px;background-color:var(--geek-color-1);border:1px solid var(--geek-color-4)!important;white-space:nowrap}#div_digg .diggit span,#div_digg .buryit span{color:var(--geek-color-10)}#div_digg .diggit .diggnum,#div_digg .diggit .burynum,#div_digg .buryit .diggnum,#div_digg .buryit .burynum{line-height:1em!important}#div_digg .diggit:hover,#div_digg .buryit:hover{background-color:var(--geek-color-2);transition:background-color .2s}#div_digg .diggit{margin-right:10px}#div_digg .diggit:before{content:"";font-weight:500}#div_digg .buryit:before{content:"";font-weight:500}#div_digg .diggword,#blog-comments-placeholder br,#comment_pager_top{display:none}#blog-comments-placeholder{border-radius:4px;background-color:var(--geek-color-1);overflow:hidden}#blog-comments-placeholder .feedback_area_title{padding:8px 10px;border:1px solid var(--geek-color-3);background-color:var(--geek-color-2);border-radius:2px 2px 0 0;font-size:12px;font-weight:700}#blog-comments-placeholder .feedback_area_title:before{content:"";margin-right:4px;font-weight:400}#blog-comments-placeholder .feedbackItem{border-left:1px solid var(--geek-color-3);border-right:1px solid var(--geek-color-3);padding:17.982px 10px}#blog-comments-placeholder .feedbackItem:nth-last-child(2){border-bottom:1px solid var(--geek-color-3)}#blog-comments-placeholder .custom-comments-author{display:flex;flex-direction:column;align-items:flex-end;position:relative}#blog-comments-placeholder .custom-comments-author .louzhu{display:none}#blog-comments-placeholder .custom-comments-author .blog_comment_body{background-color:var(--geek-color-2)!important;color:var(--geek-color-9);margin-right:10px;margin-left:0}#blog-comments-placeholder .custom-comments-author .blog_comment_body a:nth-child(1){border-bottom:none}#blog-comments-placeholder .custom-comments-author .blog_comment_body:before{display:none}#blog-comments-placeholder .custom-comments-author .blog_comment_body:after{content:"";display:block;position:absolute;right:-14px;top:6px;width:6px;height:0;border-left:solid 12px var(--geek-color-2);border-top:solid 8px rgba(0,0,0,0);border-bottom:solid 8px rgba(0,0,0,0)}#blog-comments-placeholder .custom-comments-author .feedbackManage{order:0}#blog-comments-placeholder .custom-comments-author .layer{margin-left:6px;order:3!important}#blog-comments-placeholder .custom-comments-author .comment_vote{order:-3}#blog-comments-placeholder .custom-comments-author .comment_date{order:-1!important}#blog-comments-placeholder .custom-comments-author .feedbackManage{order:-2!important}#blog-comments-placeholder .custom-comments-author .feedbackCon{flex-direction:row-reverse;max-width:100%}#blog-comments-placeholder .custom-comments-author .feedbackCon br,#blog-comments-placeholder br{display:none}#blog-comments-placeholder .layer{padding:0 6px;background-color:var(--geek-color-2);color:var(--geek-color-9);border-radius:4px;margin-right:6px;order:0;font-size:12px}#blog-comments-placeholder .comment_date{margin:0 6px;order:2;font-size:14px}.feedbackListSubtitle{display:flex;align-items:center;flex-wrap:wrap;margin-bottom:5px;font-size:0;color:var(--geek-color-8)}.feedbackListSubtitle .comment_actions a:last-child{margin-right:8px}.feedbackListSubtitle>a:last-of-type{margin-left:8px;color:var(--color-primary);order:1;font-size:14px}.feedbackListSubtitle .feedbackManage{order:3;font-size:14px}.feedbackListSubtitle .comment_vote{order:4;font-size:14px}.feedbackListSubtitle .comment_vote a{padding-left:8px}.feedbackCon{display:flex;align-items:center;margin-top:5px;align-items:flex-start}.feedbackCon .blog_comment_body{position:relative;margin:16px 0 0 10px;max-width:72%;border-radius:4px;color:var(--geek-color-9);font-size:14px;line-height:1.6;padding:6px 10px;background-color:var(--geek-color-2);box-shadow:0 4px 8px #0003}.feedbackCon .blog_comment_body:before{content:"";display:block;position:absolute;left:-24.84px;top:6px;width:12.258px;height:0;border-right:solid 12px var(--geek-color-1);border-top:solid 3.24px rgba(0,0,0,0);border-bottom:solid 8px rgba(0,0,0,0)}.feedbackCon .avatar{border-radius:50%;transform:scale(.8)}#comment_form{padding-top:24px;padding-bottom:32px;background-color:var(--geek-color-1);overflow:hidden}#comment_form #divCommentShow,#comment_form #ad_text_under_commentbox,#comment_form #comment_nav,#comment_form .commentbox_footer{display:none}#comment_form #comment_form_container{position:relative;border:1px solid var(--geek-color-3);border-radius:4px}#comment_form #comment_form_container>p:nth-of-type(3),#comment_form #comment_form_container>a:first-of-type{display:none}#comment_form #comment_form_container>p:last-of-type{color:var(--geek-color-5);margin-left:10px;font-size:14px}#comment_form #comment_form_container #commentform_title{background:none;margin-bottom:0;padding:8px 10px;border-bottom:1px solid var(--geek-color-3);background-color:var(--geek-color-2);border-radius:2px 2px 0 0;font-size:12px;font-weight:700}#comment_form #comment_form_container #commentform_title:before{content:"";font-weight:400;margin-right:4px}#comment_form #comment_form_container #tip_comment{display:none}#comment_form #comment_form_container .comment_textarea{width:100%;border-color:var(--text-9);background:none;border:none}#comment_form #comment_form_container .comment_textarea .commentbox_title{border-bottom-color:var(--geek-color-3)}#comment_form #comment_form_container .comment_textarea .commentbox_tab.active{border-color:var(--color-primary)}#comment_form #comment_form_container .comment_textarea .commentbox_title_left{display:none}#comment_form #comment_form_container .comment_textarea .commentbox_title_right .comment_svg{fill:var(--geek-color-6)}#comment_form #comment_form_container .comment_textarea .commentbox_title_right .comment_svg_stroke{stroke:var(--geek-color-6)}#comment_form #comment_form_container .comment_textarea #tbCommentBody{margin-bottom:10px!important;height:81px;min-height:170px;background:none;font-size:16px;border-bottom:1px dashed var(--geek-color-3);color:var(--geek-color-10)}#comment_form #comment_form_container .comment_textarea #tbCommentBody::placeholder{color:var(--geek-color-8)}#comment_form #comment_form_container #commentbox_opt>a{display:none}#comment_form #comment_form_container #commentbox_opt #btn_comment_submit{position:absolute;bottom:10px;right:10px;width:75.6px;height:32px;padding:4px 12px;background-color:var(--color-primary);outline:none;border:1px solid var(--color-primary);color:#fff;border-radius:4px;cursor:pointer;box-sizing:border-box;white-space:nowrap}#comment_form #comment_form_container #commentbox_opt #btn_comment_submit:hover{background-color:var(--theme-primary-8);border:1px solid var(--theme-primary-8)}#comment_form #comment_form_container #commentbox_opt #btn_comment_submit:active{background-color:var(--color-primary);border:1px solid var(--color-primary);box-shadow:none}#comment_form #comment_form_container #commentbox_opt #btn_comment_submit:focus{box-shadow:0 2px 4px var(--theme-primary-4),0 0 0 3px var(--theme-primary-4)}#comment_form #comment_form_container #tip_comment2{display:none}#ad_t2{margin:20px 0 0;padding:0;display:flex;flex-direction:column;font-size:14px;color:var(--geek-color-8);border-radius:4px}#ad_t2 br{display:none}#ad_t2 a{border-radius:4px;margin-right:0;padding:4px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:var(--geek-color-2)}#ad_t2 a:not(:nth-child(1)){margin-top:5px}#top_nav,#commentform_title a,#bannerbar,#under_post_kb,#under_post_news,#cnblogs_c1,#cnblogs_c2,#HistoryToday,.under-comment-nav,.under-comment-box-nav{display:none}.blogpost-body-html pre.codeblock{background:none}#blog-comments-placeholder,#comment_form{padding-left:16px;padding-right:16px}.clear{display:none}@media screen and (max-width: 1366px){.topicListFooter{grid-column-end:4}#home{display:grid;grid-template-columns:68px 1fr 1fr 280px}.topicListFooter{margin-left:0;margin-right:0}#taglist_main #taglist tr{grid-template-columns:repeat(2,1fr);grid-gap:8px}}@media screen and (max-width: 1024px){.topicListFooter{grid-column-end:3}}@media screen and (max-width: 768px){#home{grid-template-columns:1fr;grid-template-rows:1fr 1fr;grid-template-areas:"header header" "main main"}#main{margin-top:0;grid-area:auto;height:100vh;padding:0}#mainContent{grid-template-rows:30vh 1fr;padding:10px}#mainContent::-webkit-scrollbar{display:none}.commentform{margin-left:0}.topicListFooter{grid-column-end:2}#blog_post_info_block #blog_post_info #div_digg{margin-top:12px}.comment_actions{margin:0 8px}.comment_vote a:last-child{padding-right:8px}.comment_vote,.comment_date,#poweredby{display:none}#myposts{grid-template-columns:repeat(1,1fr)}#myposts .pager{grid-column-start:1;grid-column-end:2}.pager a{padding:0 8px;margin:0 8px}#GalleryThumbNailViewer1_ThumbNails>tbody>tr{grid-template-columns:repeat(3,1fr)}#post_detail #topics .postDesc{display:none}.custom-searchbar{z-index:5}.sidebar-block{padding:30px}#sideBar,#left-side{grid-area:none}#left-side{padding-top:20px}#left-side .leftside-bottom{display:none}}@-webkit-keyframes notyf-fadeinup{0%{opacity:0;transform:translateY(25%)}to{opacity:1;transform:translateY(0)}}@keyframes notyf-fadeinup{0%{opacity:0;transform:translateY(25%)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes notyf-fadeinleft{0%{opacity:0;transform:translate(25%)}to{opacity:1;transform:translate(0)}}@keyframes notyf-fadeinleft{0%{opacity:0;transform:translate(25%)}to{opacity:1;transform:translate(0)}}@-webkit-keyframes notyf-fadeoutright{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:translate(25%)}}@keyframes notyf-fadeoutright{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:translate(25%)}}@-webkit-keyframes notyf-fadeoutdown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(25%)}}@keyframes notyf-fadeoutdown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(25%)}}@-webkit-keyframes ripple{0%{transform:scale(0) translateY(-45%) translate(13%)}to{transform:scale(1) translateY(-45%) translate(13%)}}@keyframes ripple{0%{transform:scale(0) translateY(-45%) translate(13%)}to{transform:scale(1) translateY(-45%) translate(13%)}}.notyf{position:fixed;top:0;left:0;height:100%;width:100%;color:#fff;z-index:9999;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;pointer-events:none;box-sizing:border-box;padding:20px}.notyf__icon--error,.notyf__icon--success{height:21px;width:21px;background:#fff;border-radius:50%;display:block;margin:0 auto;position:relative}.notyf__icon--error:after,.notyf__icon--error:before{content:"";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px;left:9px;height:12px;top:5px}.notyf__icon--error:after{transform:rotate(-45deg)}.notyf__icon--error:before{transform:rotate(45deg)}.notyf__icon--success:after,.notyf__icon--success:before{content:"";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px}.notyf__icon--success:after{height:6px;transform:rotate(-45deg);top:9px;left:6px}.notyf__icon--success:before{height:11px;transform:rotate(45deg);top:5px;left:10px}.notyf__toast{display:block;overflow:hidden;pointer-events:auto;-webkit-animation:notyf-fadeinup .3s ease-in forwards;animation:notyf-fadeinup .3s ease-in forwards;box-shadow:0 3px 7px #00000040;position:relative;padding:0 15px;border-radius:2px;max-width:300px;transform:translateY(25%);box-sizing:border-box;flex-shrink:0}.notyf__toast--disappear{transform:translateY(0);-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s}.notyf__toast--disappear .notyf__icon,.notyf__toast--disappear .notyf__message{-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;opacity:1;transform:translateY(0)}.notyf__toast--disappear .notyf__dismiss{-webkit-animation:notyf-fadeoutright .3s forwards;animation:notyf-fadeoutright .3s forwards;opacity:1;transform:translate(0)}.notyf__toast--disappear .notyf__message{-webkit-animation-delay:.05s;animation-delay:.05s}.notyf__toast--upper{margin-bottom:20px}.notyf__toast--lower{margin-top:20px}.notyf__toast--dismissible .notyf__wrapper{padding-right:30px}.notyf__ripple{height:400px;width:400px;position:absolute;transform-origin:bottom right;right:0;top:0;border-radius:50%;transform:scale(0) translateY(-51%) translate(13%);z-index:5;-webkit-animation:ripple .4s ease-out forwards;animation:ripple .4s ease-out forwards}.notyf__wrapper{display:flex;align-items:center;padding-top:17px;padding-bottom:17px;padding-right:15px;border-radius:3px;position:relative;z-index:10}.notyf__icon{width:22px;text-align:center;font-size:1.3em;opacity:0;-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.3s;animation-delay:.3s;margin-right:13px}.notyf__dismiss{position:absolute;top:0;right:0;height:100%;width:26px;margin-right:-15px;-webkit-animation:notyf-fadeinleft .3s forwards;animation:notyf-fadeinleft .3s forwards;-webkit-animation-delay:.35s;animation-delay:.35s;opacity:0}.notyf__dismiss-btn{background-color:#00000040;border:none;cursor:pointer;transition:opacity .2s ease,background-color .2s ease;outline:none;opacity:.35;height:100%;width:100%}.notyf__dismiss-btn:after,.notyf__dismiss-btn:before{content:"";background:#fff;height:12px;width:2px;border-radius:3px;position:absolute;left:calc(50% - 1px);top:calc(50% - 5px)}.notyf__dismiss-btn:after{transform:rotate(-45deg)}.notyf__dismiss-btn:before{transform:rotate(45deg)}.notyf__dismiss-btn:hover{opacity:.7;background-color:#00000026}.notyf__dismiss-btn:active{opacity:.8}.notyf__message{vertical-align:middle;position:relative;opacity:0;-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s;line-height:1.5em}@media only screen and (max-width:480px){.notyf{padding:0}.notyf__ripple{height:600px;width:600px;-webkit-animation-duration:.5s;animation-duration:.5s}.notyf__toast{max-width:none;border-radius:0;box-shadow:0 -2px 7px #00000021;width:100%}.notyf__dismiss{width:56px}}\n',
document.head.appendChild(o);
const {currentBlogApp: e} = window;
function t() {
    return window.isBlogOwner
}
function n() {
    return !!$("#profile_block").length
}
function a() {
    if (n())
        return $("#profile_block>a:nth-of-type(1)").html().trim();
    const o = $("#Header1_HeaderTitle").text().trim();
    return o.length ? o : e
}
function r() {
    return !!$("#post_detail").length
}
function i(o, e, t, n, a, r, i, l) {
    return `\n        <div class="${o ? "custom-card top" : "custom-card"}">\n            <a href="${i}">\n               <div class="custom-card-title">${e}</div>\n            </a>\n            <div class="custom-card-desc">${t}</div>\n            <div class="custom-card-actions">\n                <div>\n                  <i class="fas fa-stream"></i>\n                  <span>${n}</span>\n                </div>\n                <div>\n                  <i class="far fa-comment-dots"></i>\n                  <span>${a}</span>\n                </div>\n                <div>\n                  <i class="far fa-thumbs-up"></i>\n                  <span>${r}</span>\n                </div>\n            </div>\n        </div>\n        `
}
function l({page: o, wrap: e, find: t, callback: n}) {
    !function(o) {
        const e = '<div class="cards-list">';
        ({
            home: ()=>{
                $(".forFlow").prepend(e)
            }
            ,
            category: ()=>{
                $(".entrylistTitle").after(e)
            }
        })[o]()
    }(o);
    const a = $(e).find(t);
    for (let r = 0; r < a.length; r += 3) {
        const o = $(a.slice(r, r + 3)[0])
            , e = $(a.slice(r, r + 3)[1])
            , t = $(a.slice(r, r + 3)[2])
            , n = o.text().trim()
            , l = o.find("a").attr("href")
            , s = e.html()
            , c = t.find("a:last").attr("href")
            , d = !!n.includes("置顶")
            , p = o=>{
            if (!t.find(`${o}`).text())
                return 0;
            return t.find(`${o}`).text().match(/\(([^)]*)\)/)[1]
        }
            , m = p(".post-view-count")
            , g = p(".post-digg-count")
            , f = p(".post-comment-count");
        $(".cards-list").append(i(d, n, s, m, f, g, l, c))
    }
    n()
}
const s = Object.freeze(Object.defineProperty({
    __proto__: null,
    install: function() {
        const o = !!$(".day").length
            , e = !!$(".entrylistItem").length;
        if (!o && !e)
            return;
        $(".c_b_p_desc_readmore").remove();
        let t = {};
        o && (t = {
            page: "home",
            wrap: ".day",
            find: ".postTitle,.postCon,.postDesc",
            callback() {
                $(".day").remove()
            }
        }),
        e && (2 === $(".pager").length && $(".pager:first").remove(),
        0 === $(".forFlow>.entrylistTitle").length && $(".entrylistTitle").prependTo(".forFlow"),
        t = {
            page: "category",
            wrap: ".entrylistItem",
            find: ".entrylistPosttitle,.entrylistPostSummary,.entrylistItemPostDesc",
            callback() {
                $(".entrylist").remove()
            }
        }),
        l(t)
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
const c = Object.freeze(Object.defineProperty({
    __proto__: null,
    install: function() {
        $("#footer").appendTo("#main")
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
var d = o=>{
    !function() {
        const o = $("#loading");
        o.length && o.fadeOut(300)
    }()
}
;
const p = Object.assign
    , m = Array.isArray;
function g(o) {
    return "function" == typeof o
}
const f = o=>{
    const e = window.opts || {};
    return "string" == typeof o ? e[o] : m(o) ? ((o=[],e={})=>{
        const t = Object.keys(e).find((e=>o.includes(e)));
        return t ? e[t] : null
    }
    )(o, e) : void 0
}
    , b = (o,e)=>t=>((o,e,t)=>{
    const n = p({}, o, t);
    return p({}, n, e)
}
)(e, f(o), t)
    , u = b("theme", {
    name: "reacg",
    color: "#FFB3CC",
    avatar: "",
    headerBackground: ""
})
    , h = b("bodyBackground", {
    enable: !1,
    value: "",
    opacity: .85,
    repeat: !1
})
    , x = b("catalog", {
    enable: !1,
    position: "left"
})
    , y = b(["clickEffects", "click"], {
    enable: !1,
    colors: [],
    size: 30,
    maxCount: 10
})
    , v = b("emoji", {
    enable: !1,
    buttonIcon: "",
    emojiList: []
})
    , _ = b("links", {
    enable: !1,
    value: []
})
    , k = b(["imagePreview", "imagebox"], {
    enable: !1
})
    , w = b("live2d", {
    enable: !1,
    page: "all",
    agent: "pc",
    model: "haru-01",
    width: 150,
    height: 200,
    position: "left",
    gap: "default"
})
    , C = b(["mode", "darkMode"], {
    enable: !1,
    darkDefault: !1,
    autoDark: !1,
    autoLight: !1
})
    , z = b("musicPlayer", {
    enable: !1,
    page: "all",
    agent: "pc",
    autoplay: !1,
    volume: .4,
    lrc: {
        enable: !1,
        type: 1,
        color: ""
    },
    audio: [{
        name: "404 not found",
        artist: "REOL",
        url: "https://cdn.cnblogs.com/awescnb/music/demo4.mp3",
        cover: "https://cdn.cnblogs.com/awescnb/music/demo.jpg",
        lrc: ""
    }]
})
    , T = b("notice", {
    enable: !1,
    contents: []
})
    , j = b(["license", "postSignature"], {
    enable: !1,
    license: !0,
    licenseName: "",
    licenseLink: "",
    contents: []
})
    , N = b("signature", {
    enable: !1,
    contents: []
})
    , M = b("tools", {
    initialOpen: !0,
    mobileAutoClose: !0
})
    , E = b("github", {
    enable: !1,
    color: "#ffb3cc",
    url: ""
})
    , S = b("webTag", {
    enable: !1,
    title: "",
    favicon: ""
})
    , {currentBlogApp: L} = window
    , I = a()
    , P = "https://home.cnblogs.com"
    , q = "https://www.cnblogs.com"
    , O = "https://i.cnblogs.com"
    , A = "https://msg.cnblogs.com"
    , F = `${P}/u/${L}/followers`
    , D = `${P}/u/${L}/followees`
    , B = q
    , Y = `${q}/${L}/rss`
    , H = `${q}/${L}`
    , X = `${O}/posts/edit`
    , R = $("#blog_nav_contact").attr("href")
    , W = O
    , V = `${A}`
    , J = `${A}/send/${I}`
    , G = "https://wz.cnblogs.com"
    , U = "https://q.cnblogs.com"
    , Z = "https://ing.cnblogs.com"
    , K = "https://group.cnblogs.com"
    , Q = "https://i.cnblogs.com/posts";
const oo = Object.freeze(Object.defineProperty({
    __proto__: null,
    install: function() {
        !function() {
            const o = $("<div id='left-side' style='display:none;'></div>");
            $("#home").append(o)
        }(),
        function() {
            const o = $("<div class='logo'></div>");
            $("#left-side").append(o)
        }(),
        function() {
            let o;
            const e = _();
            if (function(o) {
                for (const [e] of Object.entries(o))
                    if (!Number.isNaN(parseInt(e)))
                        return !0;
                return !1
            }(e)) {
                o = [];
                for (const [t,n] of Object.entries(e))
                    Number.isNaN(parseInt(t)) || o.push(n)
            } else {
                const {enable: t, value: n} = e;
                if (o = n,
                !t)
                    return
            }
            const t = $('<div class="links left-side-wrapper"><ul></ul></div>');
            for (const {name: n, link: a} of o)
                t.find("ul").append(`<li><a href="${a}" target="_blank">${n}</a></li>`);
            $("#left-side").append(t)
        }(),
        function() {
            const o = [{
                icon: "fa-blog",
                title: "博客园",
                url: B,
                allowVisit: !0
            }, {
                icon: "fa-home",
                title: "首页",
                url: H,
                allowVisit: !0
            }, {
                icon: "fa-pen-square",
                title: "新随笔",
                url: X,
                allowVisit: !0
            }, {
                icon: "fa-paper-plane",
                title: "草稿箱",
                url: Q,
                allowVisit: !0
            }, {
                icon: "fa-envelope",
                title: "联系",
                url: R,
                allowVisit: !0
            }, {
                icon: "fa-rss",
                title: "订阅",
                url: Y,
                allowVisit: !0
            }, {
                icon: "fa-cog",
                title: "管理",
                url: W,
                allowVisit: !1
            }]
                , e = $('<div id="cnblog-nav" class="left-side-wrapper"><ul></ul></div>');
            for (const {icon: n, title: a, url: r, allowVisit: i} of o) {
                const o = $(`<a href="${r}" target="${"首页" === a ? "_self" : "_blank"}">\n            <li>\n                <span class="fas fa-fw ${n}"></span>\n                <span class="nav-item-text">${a}</span>\n            </li>\n        </a>`);
                (t || i) && ("订阅" === a && o.removeAttr("target").attr({
                    "data-rss": r,
                    href: "javascript:void(0)",
                    onclick: '$("#blog_nav_rss").trigger("click");'
                }),
                e.find("ul").append(o))
            }
            $("#left-side .logo").after(e)
        }()
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
function eo(o, e) {
    if (o()) {
        const o = e();
        return "boolean" != typeof o && "string" != typeof o || o
    }
    {
        let t = 1;
        const n = setInterval((()=>{
            if (o()) {
                const o = e();
                return "boolean" == typeof o || "string" == typeof o ? o : (clearInterval(n),
                !0)
            }
            if (180 === t)
                return clearInterval(n),
                !1;
            t++
        }
        ), 1e3)
    }
}
function to() {
    if (!r)
        return;
    const o = $("#post_next_prev>a");
    if (!o.length)
        return;
    const e = e=>({
        title: o.eq(e).text(),
        url: o.eq(e).attr("href"),
        desc: o.eq(e).attr("title")
    })
        , t = (()=>{
        const t = $("<div>").addClass("custom-next-prev-post")
            , n = (o,e)=>{
            const t = {
                prev: {
                    className: "prev-post",
                    extraText: "上一篇",
                    icon: "fa-arrow-left"
                },
                next: {
                    className: "next-post",
                    extraText: "下一篇",
                    icon: "fa-arrow-right"
                }
            }[e];
            return $("<div>").addClass(t.className).append($("<a>").append($("<span>").text(t.extraText), $("<span>").text(o.title), $("<li>").addClass(`fas ${t.icon}`)).attr("href", o.url))
        }
        ;
        return t.append(n(e(1), "prev")),
        4 === o.length && t.append(n(e(3), "next")),
        t
    }
    )();
    $("#cnblogs_post_body").after(t)
}
const no = Object.freeze(Object.defineProperty({
    __proto__: null,
    install: function() {
        eo((()=>$("#post_next_prev>a").length), to)
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
function ao() {
    const {headerBackground: o} = u()
        , e = $("<div>").addClass("profile-signature");
    return $("<div>").addClass("profile-banner").css("backgroundImage", `url(${o})`).append(e)
}
function ro() {
    $(".profile-msg button").click((()=>{
        if (t())
            return;
        const o = $(".profile-followstate");
        "+ 关注" === o.text() && (!function() {
            const o = window.cb_blogUserGuid;
            o ? window.follow(o) : $("#p_b_follow>a").trigger("click")
        }(),
        o.text("已关注"))
    }
    ))
}
function io() {
    const o = "-取消关注" === $("#p_b_follow>a").text().trim()
        , e = a()
        , t = n() ? $("#profile_block a:nth-of-type(2)").text().trim() : "未知"
        , r = n() ? $("#profile_block a:nth-of-type(3)").text().trim() : "未知"
        , i = n() ? $("#profile_block a:nth-of-type(4)").text().trim() : "未知";
    $(".profile-nickname").text(e),
    $(".profile-age").append(t),
    $(".profile-followers").append(r),
    $(".profile-following").append(i),
    $(".profile-followstate").text(o ? "已关注" : "+ 关注")
}
const lo = Object.freeze(Object.defineProperty({
    __proto__: null,
    install: function() {
        const o = $("<div>").addClass("profile")
            , e = ao()
            , t = function() {
            const o = $("<div>").addClass("profile-menu");
            return [{
                title: "收藏",
                url: G
            }, {
                title: "闪存",
                url: Z
            }, {
                title: "小组",
                url: K
            }, {
                title: "博问",
                url: U
            }].forEach((e=>{
                const t = $("<a>").attr("target", "_blank").attr("href", e.url).text(e.title);
                o.append(t)
            }
            )),
            o
        }()
            , n = function() {
            const {headerBackground: o} = u();
            return $("<div>").addClass("profile-blur").css("backgroundImage", `url(${o})`)
        }()
            , a = $("<div>").addClass("profile-msg").append($("<p>").append($("<a>").addClass("profile-nickname").attr("href", H).text(username)).append($("<button>").addClass("profile-followstate").attr("href", H).text("+ 关注"))).append($("<p>").append($("<span>").addClass("profile-age").text("园龄：")).append($("<a>").addClass("profile-followers").attr("href", F).text("粉丝：")).append($("<a>").addClass("profile-following").attr("href", D).text("关注：")))
            , r = function() {
            const {avatar: o} = u()
                , e = $("<div>").addClass("avatar").css({
                background: `center / cover url("${o}") no-repeat`
            });
            return $("<div>").addClass("profile-avatar").append($('<a>').attr("href", H).append(e))
        }();
        o.append(e).append(t).append(n).append(r).append(a),
        $("#mainContent").prepend(o),
        ro(),
        eo((()=>$("#home #profile_block>a").length), io)
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
function so() {
    eo((()=>!Number.isNaN(parseInt($("#stats_post_count").text().trim().replace(/[^0-9]/gi, "")))), (()=>{
        const o = `<ul class="stat-list">\n                      <li>随笔：<span>${$("#stats_post_count").text().trim().replace(/[^0-9]/gi, "")}</span></li>\n                      <li>文章：<span>${$("#stats_article_count").text().trim().replace(/[^0-9]/gi, "")}</span></li>\n                      <li>评论：<span>${$("#stats-comment_count").text().trim().replace(/[^0-9]/gi, "")}</span></li>\n                      <li>阅读：<span>${$("#stats-total-view-count>span").text().trim()}</span></li>\n                    </ul>`;
        $(".account-button-stats").after(o)
    }
    ))
}
function co() {
    const o = function() {
        const o = (new Date).getMonth();
        return o < 3 ? "Spring" : o < 6 ? "Summer" : o < 9 ? "Autumn" : o < 12 ? "Winter" : void 0
    }()
        , e = "https://images.cnblogs.com/cnblogs_com/guangzan"
        , t = {
        Spring: `${e}/1894231/o_230626114104_spring.png`,
        Summer: `${e}/1894231/o_230626114104_summer.png`,
        Autumn: `${e}/1894231/o_230626114105_autumn.png`,
        Winter: `${e}/1894231/o_230626114104_winter.png`
    }[o]
        , n = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"][(new Date).getMonth()]
        , a = new Date
        , r = a.getFullYear()
        , i = a.getDate() < 10 ? `0${a.getDate()}` : a.getDate()
        , l = `\n    <div id="custom-calendar" class="sidebar-block">\n        <div class="event-wrapper">\n            <img src="${t}" class="event-img">\n            <div class="event-title">${o} Wonderland</div>\n            <div class="event-subtitle">${i} ${n}, ${r}</div>\n        </div>\n    </div>\n    `;
    $("#sidebar_news").after($(l))
}
const po = Object.freeze(Object.defineProperty({
    __proto__: null,
    install: function() {
        $("#sideBar").appendTo($("#home")),
        function() {
            const o = $("#msg_count").text()
                , e = `\n    <div class="account">\n        <div class="account-button email">\n            <a href="${J}" target="_bank">\n                <li class="fas fa-envelope"></li>\n            </a>\n        </div>\n        <div class="account-button message">\n            <a href="${V}" class='account-button-notice'>\n                <li class="fas fa-bell"></li>\n                <span class="notice-count" ${!o && "style=display:none"}>${o}</span>\n            </a>\n        </div>\n        <div class="account-button stats">\n            <div class="account-button-stats">\n                <li class="fas fa-chart-bar"></li>\n            </div>\n        </div>\n    </div>`;
            $("#sideBarMain").prepend(e)
        }(),
        so(),
        function() {
            const {enable: o, url: e} = E({
                enable: !0
            });
            if (!o)
                return;
            const t = `<div class="account-avatar">\n                <a href="${e}"><i class="fab fa-github"></i></a>\n              </div>`;
            $(".account").append(t)
        }(),
        co()
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
const mo = Object.freeze(Object.defineProperty({
    __proto__: null,
    install: function() {
        $("#main").prepend('<div class="custom-searchbar"><input id="q" type="text" placeholder="在d3N00t中搜索..." onkeydown="return zzk_go_enter(event);"/></div>'),
        $("#sidebar_search").remove(),
        "pc" != ($(window).width() > 768 ? "pc" : "phone") && (!function() {
            const o = $("<div>").addClass("mobile-menu");
            $("#left-side").clone().appendTo(o),
            $("#sideBar").clone().appendTo(o),
            $("body").append(o),
            $(".mobile-menu #catalog").remove()
        }(),
        $(".custom-searchbar").append('<div id="navbarBurger" class="navbar-burger burger" data-target="navMenuMore"><span></span> <span></span><span></span></div>').click((function() {
            $(this).toggleClass("is-active"),
            $(".mobile-menu").toggleClass("is-active")
        }
        )))
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
function go(o, e) {
    const t = ()=>{
        $(document).unbind("mousewheel DOMMouseScroll")
    }
    ;
    $(document).on("mousewheel DOMMouseScroll", (e=>{
        const n = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        Math.max(-1, Math.min(1, n));
        o(),
        t()
    }
    ))
}
function fo(o, e) {
    if (o()) {
        const o = e();
        return "boolean" != typeof o && "string" != typeof o || o
    }
    let t = 1;
    const n = setInterval((()=>{
        if (o()) {
            const o = e();
            return "boolean" == typeof o || "string" == typeof o ? o : (clearInterval(n),
            !0)
        }
        if (50 === t)
            return clearInterval(n),
            !1;
        t++
    }
    ), 500)
}
function bo(o, e=function() {}
) {
    $.ajax({
        type: "GET",
        dataType: "script",
        cache: !0,
        url: o,
        success() {
            e()
        }
    })
}
function uo(o) {
    const {top: e, bottom: t, left: n, right: a, height: r, width: i} = o.getBoundingClientRect();
    return {
        top: e,
        bottom: t,
        left: n,
        right: a,
        height: r || t - e,
        width: i || a - n
    }
}
function ho() {
    return $(window).width() > 768 ? "pc" : "phone"
}
function xo(o) {
    return /http/.test(o)
}
const {currentBlogApp: yo} = window
    , vo = ()=>Boolean($("#profile_block").length);
function _o() {
    return Boolean($("#post_detail").length)
}
function ko() {
    return Boolean($(".gallery").length)
}
function wo() {
    const o = $("#post_detail").length
        , e = $(".day").length
        , t = $("#taglist_main").length
        , n = $(".entrylistPosttitle").length
        , a = $("#myposts").length;
    return o ? "post" : e ? "index" : t || a ? "tag" : n ? "list" : void 0
}
function $o() {
    return $("#cnblogs_post_body").hasClass("cnblogs-markdown")
}
function Co(o, e, t) {
    const n = function(o) {
        const e = $('<nav id="catalog"></nav>');
        return o && e.append("<h3 class='catalog-title'>目录</h3>"),
        e
    }(t)
        , a = function() {
        const o = $("<ul>")
            , e = /^h[1-6]$/;
        return $("#cnblogs_post_body :header").each((function(t) {
            if (e.test(this.tagName.toLowerCase())) {
                const e = `${this.nodeName.toLowerCase()}-list`
                    , n = $(this).children(".math.inline");
                let a, r;
                if (a = n.length ? n.prop("outerHTML") + $(this).contents().filter((function() {
                    return 3 === this.nodeType
                }
                )).text() : $(this).text(),
                0 === a.length)
                    return;
                "" !== this.id ? r = this.id : (r = a.trim(),
                $(this).attr("id", r));
                const i = $(`<li class='${e}'><a href='#${r}'>${a}</a></li>`);
                0 === t && i.addClass("catalog-active"),
                o.append(i)
            }
        }
        )),
        o
    }()
        , r = n.append(a);
    $(o)[e]($(r))
}
function zo(o, e) {
    $(o).scroll(function(o, e, t) {
        let n;
        return function() {
            const a = this
                , r = arguments
                , i = t && !n;
            clearTimeout(n),
            n = setTimeout((function() {
                n = null,
                t || o.apply(a, r)
            }
            ), e),
            i && o.apply(a, r)
        }
    }((()=>{
        !function() {
            for (let o = $("#catalog ul li").length - 1; o >= 0; o--) {
                const e = $($("#catalog ul li")[o]).find("a").attr("href").replace(/[#]/g, "");
                if (uo(document.querySelector(`#cnblogs_post_body [id='${e}']`)).top <= 100) {
                    if ($($("#catalog ul li")[o]).hasClass("catalog-active"))
                        return;
                    return $($("#catalog ul li")[o]).addClass("catalog-active"),
                    void $($("#catalog ul li")[o]).siblings().removeClass("catalog-active")
                }
            }
        }(),
        function(o, e) {
            if (!e)
                return;
            const t = $("#catalog");
            if (o.scrollY < 100)
                return t.stop().animate({
                    scrollTop: 0
                }, 800);
            $("#cnblogs_post_body :header").each((function() {
                const o = $(this).attr("id")
                    , e = $(`a[href="#${o}"]`, t);
                if ($(this).offset().top - $(window).height() / 2 < $(window).scrollTop() && $(this).offset().top + $(this).height() - $(window).height() / 2 > $(window).scrollTop()) {
                    const o = e.position().top + t.scrollTop();
                    return t.stop().animate({
                        scrollTop: o
                    }, 800)
                }
            }
            ))
        }(o, e)
    }
    ), 50, 1e3 / 60))
}
function To(o) {
    const e = {
        colors: ["#eb125f", "#6eff8a", "#6386ff", "#f9f383"],
        size: 30,
        maxCount: 30
    };
    this.params = {
        ...e,
        ...o
    },
    o.colors.length || (this.params.colors = e.colors)
}
function jo(o) {
    const e = Math.random() > .5
        , t = Math.random() > .5;
    let n = parseInt(160 * Math.random())
        , a = parseInt(160 * Math.random());
    e && (n *= -1),
    t && (a *= -1);
    const r = `translate3d(${n}px,${a}px, 0) scale(0)`;
    o.style.webkitTransform = r,
    o.style.MozTransform = r,
    o.style.msTransform = r,
    o.style.OTransform = r,
    o.style.transform = r
}
function No(o) {
    setTimeout((()=>{
        for (let e = 0; e < o.length; e++)
            document.body.removeChild(o[e])
    }
    ), 1e3)
}
To.prototype.fly = function(o, e, t, n=300) {
    const a = []
        , r = document.createDocumentFragment();
    let i = this.params.maxCount;
    t && (i *= t);
    let l = 0;
    for (let c = 0; c < i; c++) {
        const t = parseInt(c / this.params.maxCount)
            , i = document.createElement("i");
        i.className = `color-ball ball-loop-${t}`,
        i.style.left = `${o}px`,
        i.style.top = `${e}px`,
        i.style.width = `${this.params.size}px`,
        i.style.height = `${this.params.size}px`,
        i.style.position = "fixed",
        i.style.borderRadius = "1000px",
        i.style.boxSizing = "border-box",
        i.style.zIndex = 9999,
        i.style.opacity = 0,
        0 === t && (i.style.opacity = 1),
        i.style.transform = "translate3d(0px, 0px, 0px) scale(1)",
        i.style.transition = `transform 0.7s ${t * n / 1e3}s ease-out`,
        i.style.backgroundColor = (s = this.params.colors)[Math.floor(Math.random() * s.length)],
        r.appendChild(i),
        a.push(i),
        t !== l && (!function(o) {
            setTimeout((()=>{
                const e = document.getElementsByClassName(`ball-loop-${o}`);
                for (let o = 0; o < e.length; o++)
                    e[o].style.opacity = 1;
                o === l && No(a)
            }
            ), o * n + 30)
        }(t),
        l = t)
    }
    var s;
    document.body.appendChild(r),
    !t && No(a),
    setTimeout((()=>{
        for (let o = 0; o < a.length; o++)
            jo(a[o])
    }
    ), 10)
}
;
var Mo, Eo, So = function() {
    return So = Object.assign || function(o) {
        for (var e, t = 1, n = arguments.length; t < n; t++)
            for (var a in e = arguments[t])
                Object.prototype.hasOwnProperty.call(e, a) && (o[a] = e[a]);
        return o
    }
    ,
    So.apply(this, arguments)
}, Lo = function() {
    function o(o) {
        this.options = o,
        this.listeners = {}
    }
    return o.prototype.on = function(o, e) {
        var t = this.listeners[o] || [];
        this.listeners[o] = t.concat([e])
    }
    ,
    o.prototype.triggerEvent = function(o, e) {
        var t = this;
        (this.listeners[o] || []).forEach((function(o) {
            return o({
                target: t,
                event: e
            })
        }
        ))
    }
    ,
    o
}();
(Eo = Mo || (Mo = {}))[Eo.Add = 0] = "Add",
Eo[Eo.Remove = 1] = "Remove";
var Io, Po, qo = function() {
    function o() {
        this.notifications = []
    }
    return o.prototype.push = function(o) {
        this.notifications.push(o),
        this.updateFn(o, Mo.Add, this.notifications)
    }
    ,
    o.prototype.splice = function(o, e) {
        var t = this.notifications.splice(o, e)[0];
        return this.updateFn(t, Mo.Remove, this.notifications),
        t
    }
    ,
    o.prototype.indexOf = function(o) {
        return this.notifications.indexOf(o)
    }
    ,
    o.prototype.onUpdate = function(o) {
        this.updateFn = o
    }
    ,
    o
}();
(Po = Io || (Io = {})).Dismiss = "dismiss",
Po.Click = "click";
var Oo = {
    types: [{
        type: "success",
        className: "notyf__toast--success",
        backgroundColor: "#3dc763",
        icon: {
            className: "notyf__icon--success",
            tagName: "i"
        }
    }, {
        type: "error",
        className: "notyf__toast--error",
        backgroundColor: "#ed3d3d",
        icon: {
            className: "notyf__icon--error",
            tagName: "i"
        }
    }],
    duration: 2e3,
    ripple: !0,
    position: {
        x: "right",
        y: "bottom"
    },
    dismissible: !1
}
    , Ao = function() {
    function o() {
        this.notifications = [],
        this.events = {},
        this.X_POSITION_FLEX_MAP = {
            left: "flex-start",
            center: "center",
            right: "flex-end"
        },
        this.Y_POSITION_FLEX_MAP = {
            top: "flex-start",
            center: "center",
            bottom: "flex-end"
        };
        var o = document.createDocumentFragment()
            , e = this._createHTMLElement({
            tagName: "div",
            className: "notyf"
        });
        o.appendChild(e),
        document.body.appendChild(o),
        this.container = e,
        this.animationEndEventName = this._getAnimationEndEventName(),
        this._createA11yContainer()
    }
    return o.prototype.on = function(o, e) {
        var t;
        this.events = So(So({}, this.events), ((t = {})[o] = e,
        t))
    }
    ,
    o.prototype.update = function(o, e) {
        e === Mo.Add ? this.addNotification(o) : e === Mo.Remove && this.removeNotification(o)
    }
    ,
    o.prototype.removeNotification = function(o) {
        var e, t, n = this, a = this._popRenderedNotification(o);
        a && ((e = a.node).classList.add("notyf__toast--disappear"),
        e.addEventListener(this.animationEndEventName, t = function(o) {
            o.target === e && (e.removeEventListener(n.animationEndEventName, t),
            n.container.removeChild(e))
        }
        ))
    }
    ,
    o.prototype.addNotification = function(o) {
        var e = this._renderNotification(o);
        this.notifications.push({
            notification: o,
            node: e
        }),
        this._announce(o.options.message || "Notification")
    }
    ,
    o.prototype._renderNotification = function(o) {
        var e, t = this._buildNotificationCard(o), n = o.options.className;
        return n && (e = t.classList).add.apply(e, n.split(" ")),
        this.container.appendChild(t),
        t
    }
    ,
    o.prototype._popRenderedNotification = function(o) {
        for (var e = -1, t = 0; t < this.notifications.length && e < 0; t++)
            this.notifications[t].notification === o && (e = t);
        if (-1 !== e)
            return this.notifications.splice(e, 1)[0]
    }
    ,
    o.prototype.getXPosition = function(o) {
        var e;
        return (null === (e = null == o ? void 0 : o.position) || void 0 === e ? void 0 : e.x) || "right"
    }
    ,
    o.prototype.getYPosition = function(o) {
        var e;
        return (null === (e = null == o ? void 0 : o.position) || void 0 === e ? void 0 : e.y) || "bottom"
    }
    ,
    o.prototype.adjustContainerAlignment = function(o) {
        var e = this.X_POSITION_FLEX_MAP[this.getXPosition(o)]
            , t = this.Y_POSITION_FLEX_MAP[this.getYPosition(o)]
            , n = this.container.style;
        n.setProperty("justify-content", t),
        n.setProperty("align-items", e)
    }
    ,
    o.prototype._buildNotificationCard = function(o) {
        var e = this
            , t = o.options
            , n = t.icon;
        this.adjustContainerAlignment(t);
        var a = this._createHTMLElement({
            tagName: "div",
            className: "notyf__toast"
        })
            , r = this._createHTMLElement({
            tagName: "div",
            className: "notyf__ripple"
        })
            , i = this._createHTMLElement({
            tagName: "div",
            className: "notyf__wrapper"
        })
            , l = this._createHTMLElement({
            tagName: "div",
            className: "notyf__message"
        });
        l.innerHTML = t.message || "";
        var s = t.background || t.backgroundColor;
        if (n) {
            var c = this._createHTMLElement({
                tagName: "div",
                className: "notyf__icon"
            });
            if (("string" == typeof n || n instanceof String) && (c.innerHTML = new String(n).valueOf()),
            "object" == typeof n) {
                var d = n.tagName
                    , p = void 0 === d ? "i" : d
                    , m = n.className
                    , g = n.text
                    , f = n.color
                    , b = void 0 === f ? s : f
                    , u = this._createHTMLElement({
                    tagName: p,
                    className: m,
                    text: g
                });
                b && (u.style.color = b),
                c.appendChild(u)
            }
            i.appendChild(c)
        }
        if (i.appendChild(l),
        a.appendChild(i),
        s && (t.ripple ? (r.style.background = s,
        a.appendChild(r)) : a.style.background = s),
        t.dismissible) {
            var h = this._createHTMLElement({
                tagName: "div",
                className: "notyf__dismiss"
            })
                , x = this._createHTMLElement({
                tagName: "button",
                className: "notyf__dismiss-btn"
            });
            h.appendChild(x),
            i.appendChild(h),
            a.classList.add("notyf__toast--dismissible"),
            x.addEventListener("click", (function(t) {
                var n, a;
                null === (a = (n = e.events)[Io.Dismiss]) || void 0 === a || a.call(n, {
                    target: o,
                    event: t
                }),
                t.stopPropagation()
            }
            ))
        }
        a.addEventListener("click", (function(t) {
            var n, a;
            return null === (a = (n = e.events)[Io.Click]) || void 0 === a ? void 0 : a.call(n, {
                target: o,
                event: t
            })
        }
        ));
        var y = "top" === this.getYPosition(t) ? "upper" : "lower";
        return a.classList.add("notyf__toast--" + y),
        a
    }
    ,
    o.prototype._createHTMLElement = function(o) {
        var e = o.tagName
            , t = o.className
            , n = o.text
            , a = document.createElement(e);
        return t && (a.className = t),
        a.textContent = n || null,
        a
    }
    ,
    o.prototype._createA11yContainer = function() {
        var o = this._createHTMLElement({
            tagName: "div",
            className: "notyf-announcer"
        });
        o.setAttribute("aria-atomic", "true"),
        o.setAttribute("aria-live", "polite"),
        o.style.border = "0",
        o.style.clip = "rect(0 0 0 0)",
        o.style.height = "1px",
        o.style.margin = "-1px",
        o.style.overflow = "hidden",
        o.style.padding = "0",
        o.style.position = "absolute",
        o.style.width = "1px",
        o.style.outline = "0",
        document.body.appendChild(o),
        this.a11yContainer = o
    }
    ,
    o.prototype._announce = function(o) {
        var e = this;
        this.a11yContainer.textContent = "",
        setTimeout((function() {
            e.a11yContainer.textContent = o
        }
        ), 100)
    }
    ,
    o.prototype._getAnimationEndEventName = function() {
        var o, e = document.createElement("_fake"), t = {
            MozTransition: "animationend",
            OTransition: "oAnimationEnd",
            WebkitTransition: "webkitAnimationEnd",
            transition: "animationend"
        };
        for (o in t)
            if (void 0 !== e.style[o])
                return t[o];
        return "animationend"
    }
    ,
    o
}()
    , Fo = function() {
    function o(o) {
        var e = this;
        this.dismiss = this._removeNotification,
        this.notifications = new qo,
        this.view = new Ao;
        var t = this.registerTypes(o);
        this.options = So(So({}, Oo), o),
        this.options.types = t,
        this.notifications.onUpdate((function(o, t) {
            return e.view.update(o, t)
        }
        )),
        this.view.on(Io.Dismiss, (function(o) {
            var t = o.target
                , n = o.event;
            e._removeNotification(t),
            t.triggerEvent(Io.Dismiss, n)
        }
        )),
        this.view.on(Io.Click, (function(o) {
            var e = o.target
                , t = o.event;
            return e.triggerEvent(Io.Click, t)
        }
        ))
    }
    return o.prototype.error = function(o) {
        var e = this.normalizeOptions("error", o);
        return this.open(e)
    }
    ,
    o.prototype.success = function(o) {
        var e = this.normalizeOptions("success", o);
        return this.open(e)
    }
    ,
    o.prototype.open = function(o) {
        var e = this.options.types.find((function(e) {
            return e.type === o.type
        }
        )) || {}
            , t = So(So({}, e), o);
        this.assignProps(["ripple", "position", "dismissible"], t);
        var n = new Lo(t);
        return this._pushNotification(n),
        n
    }
    ,
    o.prototype.dismissAll = function() {
        for (; this.notifications.splice(0, 1); )
            ;
    }
    ,
    o.prototype.assignProps = function(o, e) {
        var t = this;
        o.forEach((function(o) {
            e[o] = null == e[o] ? t.options[o] : e[o]
        }
        ))
    }
    ,
    o.prototype._pushNotification = function(o) {
        var e = this;
        this.notifications.push(o);
        var t = void 0 !== o.options.duration ? o.options.duration : this.options.duration;
        t && setTimeout((function() {
            return e._removeNotification(o)
        }
        ), t)
    }
    ,
    o.prototype._removeNotification = function(o) {
        var e = this.notifications.indexOf(o);
        -1 !== e && this.notifications.splice(e, 1)
    }
    ,
    o.prototype.normalizeOptions = function(o, e) {
        var t = {
            type: o
        };
        return "string" == typeof e ? t.message = e : "object" == typeof e && (t = So(So({}, t), e)),
        t
    }
    ,
    o.prototype.registerTypes = function(o) {
        var e = (o && o.types || []).slice();
        return Oo.types.map((function(o) {
            var t = -1;
            e.forEach((function(e, n) {
                e.type === o.type && (t = n)
            }
            ));
            var n = -1 !== t ? e.splice(t, 1)[0] : {};
            return So(So({}, o), n)
        }
        )).concat(e)
    }
    ,
    o
}();
function Do(o, e="success", t) {
    const n = new Fo({
        position: {
            x: "right",
            y: "top"
        },
        icon: !1,
        duration: 2500,
        dismissible: !0,
        type: "success",
        types: [{
            type: "info",
            background: "rgba(0,0,0,0.7)",
            icon: !1
        }, {
            type: "warning",
            background: "orange",
            icon: {
                className: "material-icons",
                tagName: "i",
                text: "warning"
            }
        }, {
            type: "error",
            background: "indianred",
            duration: 2e3,
            dismissible: !0
        }]
    });
    "info" === e ? n.open({
        type: e,
        message: o,
        duration: t,
        icon: !1
    }) : n[e]({
        message: o,
        duration: t,
        icon: !1
    })
}
function Bo() {
    $(".custom-comment-avatar").length || $(".feedbackItem").each((function() {
        let o = $(this).children(".feedbackCon").children("span:last").html();
        o = o ? o.replace("http://", "https://") : "https://pic.cnblogs.com/face/sample_face.gif";
        const e = `<div class='custom-comment-avatar'><img src="${o}" class='avatar' /></div>`;
        $(this).children(".feedbackCon").prepend(e)
    }
    )),
    $(".comment_vote").each((function() {
        $(this).appendTo($(this).parent().siblings(".feedbackListSubtitle"))
    }
    )),
    $(".feedbackItem").each((function() {
        "楼主" === $(this).find(".louzhu").text() && $(this).addClass("custom-comments-author")
    }
    ))
}
const Yo = [{
    value: "👍",
    label: ""
}, {
    value: "👏",
    label: ""
}, {
    value: "😄",
    label: ""
}, {
    value: "🎉",
    label: ""
}, {
    value: "🚀",
    label: ""
}, {
    value: "👀",
    label: ""
}];
function Ho(o) {
    const e = (null == o ? void 0 : o.length) ? o : Yo
        , t = $('<div class="emoji-list"></div>');
    return e.forEach((o=>{
        const e = function(o) {
            const {value: e, label: t} = o
                , n = $("<div>").addClass("emoji-item");
            if (xo(e)) {
                const o = $("<img />").addClass("emoji emoji-img").attr("src", e);
                n.append(o)
            } else
                n.append(`<div class="emoji emoji-text">${e}</div>`);
            return "string" == typeof t && n.attr("title", t),
            n
        }(o);
        t.append(e)
    }
    )),
    t
}
function Xo() {
    $(".qaq-wrap").toggle()
}
function Ro(o, e) {
    const t = function(o) {
        return `<span class="qaq-btn" title="表情">${o.length ? o : "🍺"}</span>`
    }(e)
        , n = $("<div>").addClass("qaq-wrap anim-scale-in")
        , a = $("<div>").addClass("qaq-mask")
        , r = Ho(o);
    n.append(r).append(a),
    $(".commentbox_title_right").prepend(t).css("position", "relative"),
    $(".qaq-btn").after(n).click((()=>Xo())),
    $(".qaq-mask").click((()=>Xo())),
    $(".emoji-item").click((function() {
        const o = $(this).find(".emoji");
        let e;
        e = o.hasClass("emoji-img") ? `![](${o.attr("src")})` : o.html(),
        document.querySelector("#tbCommentBody").value += e,
        Xo()
    }
    ))
}
const Wo = "custom-gallery"
    , Vo = {
    opacity: .5
};
function Jo() {
    const o = $(` .blog_comment_body img, .${Wo} img`);
    if (0 === o)
        return;
    $.each(o, (e=>{
        $(o[e]).addClass("custom-zoom")
    }
    ));
    const e = window.mediumZoom(".custom-zoom", Vo);
    e.on("open", (()=>{
        go((()=>{
            e.close()
        }
        ))
    }
    )),
    $o() || $("p img").css("display", "block").unwrap()
}
const Go = {
    chitose: "live2d-widget-model-epsilon2_1/assets/Epsilon2.1.model.json",
    epsilon2_1: "live2d-widget-model-chitose/assets/chitose.model.json",
    "haru-01": "live2d-widget-model-haru/01/assets/haru01.model.json",
    "haru-02": "live2d-widget-model-haru/02/assets/haru02.model.json",
    hijiki: "live2d-widget-model-hijiki/assets/hijiki.model.json",
    tororo: "live2d-widget-model-tororo/assets/tororo.model.json",
    ryoufuku: "misaki/ryoufuku.model.json",
    seifuku: "misaki/seifuku.model.json",
    shifuku: "misaki/shifuku.model.json",
    vert_classic: "vert_classic/vert_classic.model.json",
    vert_normal: "vert_normal/vert_normal.model.json",
    vert_swimwear: "vert_swimwear/vert_swimwear.model.json",
    "小埋": "小埋/13.json",
    "伊芙加登": "伊芙加登/14.json",
    "玉藻前": "玉藻前/16.json"
};
function Uo(o) {
    const e = `https://cdn.jsdelivr.net/gh/guangzan/awesCnb-live2dModels@latest/${"random" === o ? Go[function(o) {
        lete, t = 0;
        for (const n in o)
            Math.random() < 1 / ++t && (e = n);
        return e
    }(Go)] : Go[o]}`;
    bo("https://files.cnblogs.com/files/guangzan/live2d.min.js?t=1688786567&download=true", (()=>{
        loadlive2d("model", e)
    }
    ))
}
function Zo(o, e=!0) {
    !function(o) {
        "dark" === o ? window.highlighter.setTheme(window.darkModeCodeHighlightTheme) : window.highlighter.setTheme(window.codeHighlightTheme)
    }(o),
    $("html").attr("theme", o),
    localStorage.modeType = o;
    const t = "dark" === o ? "light-to-dark" : "dark-to-light";
    e && $("body").addClass(t),
    setTimeout((()=>$("body").removeClass(t)), 1200)
}
function Ko() {
    const {date: o, viewCount: e, commentCount: t, diggCount: n} = {
        date: $("#post-date").text(),
        viewCount: $("#post_view_count").text(),
        commentCount: $("#post_comment_count").text(),
        diggCount: $("#digg_count").text()
    }
        , a = $("<div>").addClass("message-bottom");
    return a.append($("<span>").text(o)).append($("<span>").text(`阅读: ${e}`)).append($("<span>").text(`评论: ${t}`)).append($("<span>").text(`推荐: ${n}`)),
    a
}
function Qo() {
    const o = $("<div>").addClass("post-message")
        , e = function() {
        const o = $("<div>").addClass("message-top")
            , e = (()=>{
            const o = $("<div>").addClass("message-categories").text("📂");
            return $("#BlogPostCategory a").length ? ($("#BlogPostCategory a").each((function() {
                o.append($(this).get(0))
            }
            )),
            o) : (o.append("<a>未分类</a>"),
            o)
        }
        )()
            , t = (()=>{
            const o = $("<div>").addClass("message-tags").text("🔖");
            return $("#EntryTag a").length ? ($("#EntryTag a").each((function() {
                o.append($(this).get(0))
            }
            )),
            o) : (o.append("<a>无标签</a>"),
            o)
        }
        )();
        return o.append(e).append(t),
        o
    }()
        , t = Ko();
    o.append(e).append(t),
    $(".post").prepend(o)
}
const oe = "post-signature";
function ee() {
    const o = function() {
        if (vo())
            return $("#profile_block>a:nth-of-type(1)").html().trim();
        const o = $("#Header1_HeaderTitle").text().trim();
        return o.length ? o : yo
    }()
        , e = location.href.includes("#") ? location.href.substring(0, location.href.lastIndexOf("#")) : location.href
        , t = `<div id='${oe}'>\n                    <p>本文作者：${o}</p>\n                    <p>本文链接：${e}</p>\n                </div>`;
    $("#blog_post_info_block").before(t)
}
function te(o, e) {
    if (!o)
        return;
    if (/^rgb\(/.test(o))
        return o;
    if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(o))
        return o;
    const t = parseInt(`0x${o.slice(1, 3)}`)
        , n = parseInt(`0x${o.slice(3, 5)}`)
        , a = parseInt(`0x${o.slice(5, 7)}`);
    return e ? `rgba(${t},${n},${a},${e})` : `rgb(${t},${n},${a})`
}
function ne(o) {
    return "random" === o ? function(o) {
        let e = "";
        if ("rgba" === o)
            e = `rgba(${Math.floor(256 * Math.random())},${Math.floor(256 * Math.random())},${Math.floor(256 * Math.random())},0.6)`;
        else if ("16" === o)
            e = `#${Math.floor(16777215 * Math.random()).toString(16)}`;
        else {
            const t = o || ["#FE0302", "#FF7204", "#FFAA02", "#FFD302", "#FFFF00", "#A0EE00", "#00CD00", "#019899", "#4266BE", "#89D5FF", "#CC0273", "#CC0273"];
            e = t[Math.floor(Math.random() * t.length)]
        }
        return e
    }("rgba") : o
}
function ae(o, e) {
    const t = $("<i>");
    return "className" === e ? t.addClass(o) : t.html(o),
    t
}
function re(o, e) {
    const t = $(`<div class="tooltip">${o}</div>`);
    return e && t.addClass(e),
    t
}
function ie(o, e, t) {
    const n = $('<div class="toolbar-item toolbar-item-toggle"></div>')
        , a = ae(o, e)
        , r = re(t ? "收起" : "展开", " tooltip-toggle");
    return t && n.addClass("active").hide(),
    n.append(a),
    n.append(r),
    n
}
function le(o) {
    const {toolbarItems: e, menuIcon: t, menuActiveIcon: n, menuIconType: a} = o
        , r = $('<div class="custom-toolbar">')
        , i = ie(t, a, !1)
        , l = ie(n, a, !0);
    let s = 0;
    e.reverse().forEach((e=>{
        var t;
        if (e.enable && ((t = e.page) === wo() || "all" === t)) {
            const t = function(o, e, t) {
                const {className: n, callback: a, icon: r, iconType: i, tooltip: l} = o
                    , s = $(`<div class="toolbar-item" style="transform: translateY(-${e}px)">`);
                n && s.addClass(n),
                s.on("click", (()=>a(t)));
                const c = ae(r, i)
                    , d = re(l);
                return s.append(c),
                s.append(d),
                s
            }(e, s, o);
            s += 40,
            r.append(t)
        }
    }
    )),
    r.append(i).append(l),
    $("body").append(r),
    $(".toolbar-item-toggle").click(se)
}
function se() {
    const o = o=>{
        const e = o ? 90 : -50
            , t = $(".toolbar-item-toggle:not(.active)")
            , n = $(".toolbar-item-toggle.active");
        (o=>{
            let e = o;
            $(".toolbar-item:not(.toolbar-item-toggle)").each(((t,n)=>{
                $(n).css({
                    transform: `translateY(${e}px)`
                }),
                e += o - 40
            }
            ))
        }
        )(e),
        o ? (t.show(),
        n.hide()) : (t.hide(),
        n.show())
    }
    ;
    $(".custom-toolbar").toggleClass("extend"),
    $(".custom-toolbar").hasClass("extend") ? o(!1) : o(!0)
}
Object.values(Object.assign({
    "./modules/cards/index.js": s,
    "./modules/footer/index.js": c,
    "./modules/left-sidebar/index.js": oo,
    "./modules/next-prev-post/index.js": no,
    "./modules/profile/index.js": lo,
    "./modules/right-sidebar/index.js": po,
    "./modules/searchbar/index.js": mo
})).forEach((o=>o.install())),
(d(),
{
    createTheme: function() {
        const o = {
            theme: null,
            config: {
                globalProperties: {}
            }
        }
            , e = new Set
            , t = o.theme = {
            _context: o,
            version: "3.0",
            get config() {
                return o.config
            },
            set config(o) {},
            use: (o,...n)=>(e.has(o) || (o && g(o.install) ? (e.add(o),
            o.install(t, ...n)) : g(o) && (e.add(o),
            o(t, ...n))),
            t)
        };
        return t
    }
}).createTheme().use(((o,e)=>{
    const t = y(e);
    t.enable && (o=>{
        const e = new To({
            colors: o.colors,
            size: o.size,
            maxCount: o.maxCount
        });
        $("body").click((o=>{
            e.fly(o.clientX, o.clientY)
        }
        ))
    }
    )(t)
}
), {
    enable: !1
}).use((()=>{
    "post" === wo() && ($(".custom-comment-avatar").lenght || (window.renderCommentsAvatars = Bo,
    $(document).ajaxComplete(((o,e,t)=>{
        (t.url.includes("PostComment/Add") || t.url.includes("DeleteComment")) && (new window.blogCommentManager).renderComments(0)
    }
    )),
    $(document).ajaxComplete(((o,e,t)=>{
        t.url.includes("GetComments") && (window.renderCommentsAvatars(),
        window.buildEmojis(),
        window.imagebox())
    }
    )),
    fo((()=>$(".feedbackItem").length), Bo)))
}
), {
    enable: !0
}).use(((o,e)=>{
    const {color: t} = u(e);
    !function(o) {
        const e = ne(o)
            , t = te(e, .85)
            , n = te(e, .4)
            , a = te(e, .2);
        $("head").append(`<style class="themeColor">:root{\n            --themeColor: ${e};\n            --theme-primary-8: ${t};\n            --theme-primary-4: ${n};\n            --theme-primary-2: ${a};\n        </style>`)
    }(t)
}
), {
    enable: !0,
    color: "#2F63FF"
}).use(((o,e)=>{
    const {enable: t, emojiList: n, buttonIcon: a} = v(e);
    if (!t)
        return;
    if (!_o())
        return;
    const r = ()=>{
        $(".qaq-btn").length || $(".commentbox_title_right").length && Ro(n, a)
    }
    ;
    r(),
    window.buildEmojis = r
}
), {
    enable: !0
}).use(((o,e)=>{
    const {enable: t} = k(e);
    t && ($o() || ko() || _o()) && ($(".custom-zoom").length || (!function() {
        if (!ko())
            return;
        const o = $(".thumbTitle, .galleryTitle").text().trim()
            , e = $(`\n    <section class="${Wo}">\n        <h3>${o}</h3>\n        <div></div>\n    </section>`);
        $(".gallery img").each((function() {
            const o = $(this).attr("src").replace(/t_/, "o_");
            e.find("div").append(`<img src="${o}"/>`)
        }
        )),
        $(".forFlow").append(e),
        $(".gallery").remove()
    }(),
    bo("https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/medium-zoom/1.0.6/medium-zoom.min.js", (()=>{
        fo((()=>$(".blog_comment_body").length || $(`.${Wo}`).length), Jo)
    }
    )),
    window.imagebox = Jo))
}
), {
    enable: !0
}).use(((o,e)=>{
    const {enable: t, license: n, licenseName: a, licenseLink: r, contents: i} = j(e);
    t && "post" === wo() && ($("#MySignature").children().length || (ee(),
    ((o,e,t)=>{
        if (!o)
            return;
        const n = `<p>版权声明：本作品采用${e.length ? e : "知识共享署名-非商业性使用-禁止演绎 2.5 中国大陆"}<a href='${t}'>许可协议</a>进行许可。</p>`;
        $(`#${oe}`).append(n)
    }
    )(n, a, r),
    function(o) {
        let e = "";
        for (let t = 0; t < o.length; t++)
            e += `<p>${o[t]}</p>`;
        $(`#${oe}`).append(e)
    }(i)))
}
), {
    enable: !0
}).use(((o,e)=>{
    const {enable: t, title: n, favicon: a} = S(e);
    t && (function(o) {
        "" !== o && (document.title = o)
    }(n),
    function(o) {
        if ("" === o)
            return;
        const e = document.getElementById("favicon");
        null === e ? $("title").after(`<link id="favicon" rel="shortcut icon" href="${o}" type="image/svg+xml">`) : e.href = o
    }(a))
}
), {
    enable: !0
}).use(((o,e)=>{
    const {enable: t, page: n, agent: a, autoplay: r, audio: i, volume: l, lrc: s} = z(e);
    var c;
    t && (n !== wo() && "all" !== n || a !== ho() && "all" !== a || (c = "https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.css",
    $("head").append("<link>"),
    $("head").children(":last").attr({
        rel: "stylesheet",
        type: "text/css",
        href: c
    }),
    bo("https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js", (()=>{
        !function(o, e, t, n) {
            $("body").append('<div id="player" class="aplayer music-APlayer"></div>');
            const a = new APlayer({
                container: document.getElementById("player"),
                fixed: !0,
                preload: "auto",
                autoplay: o,
                volume: t,
                lrcType: n.enable ? n.type : null,
                audio: e
            });
            window.onbeforeunload = ()=>{
                const o = a.audio.currentTime;
                localStorage.audioTime = o
            }
            ,
            window.onload = ()=>{
                a.seek(localStorage.audioTime ? Number(localStorage.audioTime) : 0)
            }
            ,
            o && $(".aplayer-lrc").show(),
            "on" === localStorage.playerState && a.play(),
            a.on("play", (()=>{
                localStorage.playerState = "on",
                n.enable && $(".aplayer-lrc").show()
            }
            )),
            a.on("pause", (()=>{
                localStorage.playerState = "off",
                n.enable && $(".aplayer-lrc").hide()
            }
            )),
            n.enable && "" !== n.color && $(".aplayer-lrc").css("color", n.color)
        }(r, i, l, s)
    }
    ))))
}
), {
    enable: !1
}).use(((o,e)=>{
    const {enable: t, page: n, agent: a, model: r, position: i, gap: l, width: s, height: c} = w(e);
    t && (n !== wo() && "all" !== n || a !== ho() && "all" !== a || (!function(o, e, t) {
        const n = `<canvas id="model" style="position:fixed;${o}:0;bottom:0;z-index:30;pointer-events: none;" width="${e}"height="${t}" ></canvas>`;
        $("body").append(n)
    }(i, s, c),
    function(o, e) {
        "default" !== e && $("#model").css(o, e)
    }(i, l),
    Uo(r)))
}
), {
    enable: !1
}).use(((o,e)=>{
    const {enable: t, darkDefault: n, autoDark: a, autoLight: r} = C(e);
    t && (!function(o, e, t) {
        const n = (new Date).getHours()
            , a = n > 19 || n <= 5
            , r = localStorage.modeType
            , i = ()=>{
            r ? Zo(r, !1) : r || (window.matchMedia("(prefers-color-scheme: dark)").matches ? Zo("dark", !1) : Zo("light", !1))
        }
        ;
        r || !o ? (a && (e ? Zo("dark", !1) : i()),
        a || (t ? Zo("light", !1) : i())) : Zo("dark", !1)
    }(n, a, r),
    $(document).on("click", ".mode-change", (()=>{
        Zo("dark" === $("html").attr("theme") ? "light" : "dark")
    }
    )))
}
), {
    enable: !0
}).use(((o,e)=>{
    const {enable: t, contents: n} = T(e);
    !t && n.length || function(o) {
        const e = o.length;
        for (let t = 0; t < e; t++)
            Do(o[t], "info")
    }(n)
}
), {
    enable: !1
}).use((()=>{
    _o() && fo((()=>$("#EntryTag a").length && $("#BlogPostCategory a").length), Qo)
}
), {
    enable: !0
}).use(((o,e,t)=>{
    const {enable: n, contents: a} = N(e);
    if (!n)
        return;
    let r = {
        selector: "#sidebar_news"
    };
    t && (r = {
        ...r,
        ...t
    });
    const {selector: i} = r;
    !function(o) {
        $(o).append("<div class='custom-signature'><span></span></div>")
    }(i),
    function(o) {
        bo("https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/typed.js/2.0.11/typed.min.js", (()=>{
            new window.Typed(".custom-signature span",{
                strings: o,
                typeSpeed: 70
            })
        }
        ))
    }(a)
}
), {
    enable: !0,
    contents: ['欢迎使用皮肤 <b style="color:#3742fa">Geek</b>', "快去自定义签名吧~"]
}, {
    selector: ".profile-signature"
}).use(((o,e,t)=>{
    const {enable: n, opacity: a, value: r, repeat: i} = h(e);
    if (!n)
        return;
    const {opacitySelector: l} = {
        opacitySelector: "#main,#navigator",
        ...t
    };
    !function(o, e) {
        const t = xo(o) ? "img" : "color";
        "color" === t && $("body").css("background-color", `${o}`),
        "img" === t && ($("body").css("background-image", `url(${o})`),
        e || ($("body").css({
            "background-repeat": "no-repeat",
            "background-size": "100% 100%",
            "background-attachment": "fixed"
        }),
        "phone" === ho() && $("body").css("background-size", "cover")))
    }(r, i),
    function(o, e) {
        $(e).css("opacity", `${o}`)
    }(a, l)
}
), {
    enable: !1
}, {
    opacitySelector: "#left-side,#sideBar,#mainContent,#footer,.custom-searchbar"
}).use((function(o, e, t={}) {
    const n = {
        mountedNode: "body",
        fn: "append",
        scrollContainer: window,
        updateNavigation: !1,
        showTitle: !0,
        showScrollbar: !0
    };
    $.extend(!0, n, t);
    const {enable: a} = x(e);
    a && Boolean($("#cnblogs_post_body>h1,#cnblogs_post_body>h2,#cnblogs_post_body>h3,#cnblogs_post_body>h4").length) && "post" === wo() && "pc" === ho() && (Co(n.mountedNode, n.fn, n.showTitle),
    zo(n.scrollContainer, n.updateNavigation),
    $(".catalog-title").click((()=>{
        $("#catalog ul").toggle("fast", "linear", (function() {
            "none" === $(this).css("display") ? $(".catalog-title").removeClass("is-active") : $(".catalog-title").addClass("is-active")
        }
        ))
    }
    )),
    n.showScrollbar || $("#catalog").css({
        overflow: "hidden"
    }))
}
), {
    enable: !0
}, {
    mountedNode: ".account",
    fn: "after",
    scrollContainer: "#mainContent"
}).use(((o,e,t)=>{
    const {enable: n, initialOpen: a} = M(e);
    if (!n)
        return;
    const r = {
        scrollContainer: "html",
        menuIconType: "html",
        menuIcon: "➕",
        menuActiveIcon: "➖",
        toolbarItems: [{
            enable: !0,
            page: "all",
            icon: "🚀",
            iconType: "html",
            tooltip: "回顶",
            callback: o=>{
                return e = o.scrollContainer,
                void $(e).animate({
                    scrollTop: 0
                }, 200);
                var e
            }
        }, {
            enable: !1,
            page: "all",
            icon: "🌜",
            iconType: "html",
            tooltip: "深色",
            className: "mode-change",
            callback() {}
        }, {
            enable: !0,
            page: "post",
            icon: "👍",
            iconType: "html",
            tooltip: "推荐",
            callback() {
                Do("推荐成功"),
                $(".diggit").trigger("click")
            }
        }, {
            enable: !0,
            page: "post",
            icon: "💗",
            iconType: "html",
            tooltip: "关注",
            callback() {
                Do("关注成功"),
                window.follow()
            }
        }, {
            enable: !0,
            page: "post",
            icon: "📌",
            iconType: "html",
            tooltip: "收藏",
            callback() {
                window.AddToWz()
            }
        }, {
            enable: !0,
            page: "post",
            icon: "💬",
            iconType: "html",
            tooltip: "评论",
            callback: o=>{
                return e = o.scrollContainer,
                void $(e).animate({
                    scrollTop: $("#mainContent")[0].scrollHeight
                }, 300);
                var e
            }
        }]
    };
    le($.extend(!0, r, t)),
    $(window).width() <= 768 || !a || se()
}
), {
    enable: !0
}, {
    menuIconType: "className",
    menuIcon: "fa-angle-up",
    menuActiveIcon: "fa-angle-down",
    scrollContainer: "#mainContent",
    toolbarItems: [{
        icon: "fas fa-rocket rocket-rotate",
        iconType: "className"
    }, {
        enable: !0,
        icon: "fa-moon",
        iconType: "className"
    }, {
        icon: "fa-thumbs-up",
        iconType: "className"
    }, {
        icon: "fa-heart",
        iconType: "className"
    }, {
        icon: "fa-star",
        iconType: "className"
    }, {
        icon: "fa-comment-dots",
        iconType: "className"
    }]
})
}();

