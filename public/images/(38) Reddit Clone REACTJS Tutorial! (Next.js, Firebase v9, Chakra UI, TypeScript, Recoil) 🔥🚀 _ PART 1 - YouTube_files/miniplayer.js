(function(g){var window=this;'use strict';var Fbb=function(a){g.W.call(this,{F:"div",K:"ytp-miniplayer-ui"});this.Cf=!1;this.player=a;this.N(a,"minimized",this.qh);this.N(a,"onStateChange",this.wM)},Gbb=function(a){g.WP.call(this,a);
this.u=new g.yE(this);this.j=new Fbb(this.player);this.j.hide();g.oP(this.player,this.j.element,4);a.Pf()&&(this.load(),g.uo(a.getRootNode(),"ytp-player-minimized",!0));this.player.S("web_rounded_containers")&&g.uo(a.getRootNode(),"ytp-rounded-miniplayer",!0)};
g.v(Fbb,g.W);g.k=Fbb.prototype;
g.k.JJ=function(){this.tooltip=new g.cU(this.player,this);g.H(this,this.tooltip);g.oP(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Jc=new g.PQ(this.player);g.H(this,this.Jc);this.Fi=new g.W({F:"div",K:"ytp-miniplayer-scrim"});g.H(this,this.Fi);this.Fi.Ca(this.element);this.N(this.Fi.element,"click",this.LE);var a=new g.W({F:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"\u9589\u3058\u308b"},W:[g.kM()]});g.H(this,a);a.Ca(this.Fi.element);this.N(a.element,
"click",this.Mn);a=new g.z2(this.player,this);g.H(this,a);a.Ca(this.Fi.element);this.Us=new g.W({F:"div",K:"ytp-miniplayer-controls"});g.H(this,this.Us);this.Us.Ca(this.Fi.element);this.N(this.Us.element,"click",this.LE);var b=new g.W({F:"div",K:"ytp-miniplayer-button-container"});g.H(this,b);b.Ca(this.Us.element);a=new g.W({F:"div",K:"ytp-miniplayer-play-button-container"});g.H(this,a);a.Ca(this.Us.element);var c=new g.W({F:"div",K:"ytp-miniplayer-button-container"});g.H(this,c);c.Ca(this.Us.element);
this.vT=new g.vS(this.player,this,!1);g.H(this,this.vT);this.vT.Ca(b.element);b=new g.tS(this.player,this);g.H(this,b);b.Ca(a.element);this.nextButton=new g.vS(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.Ca(c.element);this.Ii=new g.PT(this.player,this);g.H(this,this.Ii);this.Ii.Ca(this.Fi.element);this.Ec=new g.HS(this.player,this);g.H(this,this.Ec);g.oP(this.player,this.Ec.element,4);this.BE=new g.W({F:"div",K:"ytp-miniplayer-buttons"});g.H(this,this.BE);g.oP(this.player,this.BE.element,
4);a=new g.W({F:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"\u9589\u3058\u308b"},W:[g.kM()]});g.H(this,a);a.Ca(this.BE.element);this.N(a.element,"click",this.Mn);a=new g.W({F:"button",Ga:["ytp-miniplayer-replay-button","ytp-button"],X:{"aria-label":"\u9589\u3058\u308b"},W:[g.rM()]});g.H(this,a);a.Ca(this.BE.element);this.N(a.element,"click",this.m3);this.N(this.player,"presentingplayerstatechange",this.Yc);this.N(this.player,"appresize",this.Ab);this.N(this.player,"fullscreentoggled",
this.Ab);this.Ab()};
g.k.show=function(){this.Pe=new g.go(this.Tt,null,this);this.Pe.start();this.Cf||(this.JJ(),this.Cf=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Ec.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Pe&&(this.Pe.dispose(),this.Pe=void 0);g.W.prototype.hide.call(this);this.player.Pf()||(this.Cf&&this.Ec.hide(),this.player.loadModule("annotations_module"))};
g.k.ra=function(){this.Pe&&(this.Pe.dispose(),this.Pe=void 0);g.W.prototype.ra.call(this)};
g.k.Mn=function(){this.player.stopVideo();this.player.Oa("onCloseMiniplayer")};
g.k.m3=function(){this.player.playVideo()};
g.k.LE=function(a){if(a.target===this.Fi.element||a.target===this.Us.element)g.aL(this.player.Gb())?this.player.pauseVideo():this.player.playVideo()};
g.k.qh=function(){g.uo(this.player.getRootNode(),"ytp-player-minimized",this.player.Pf())};
g.k.oe=function(){this.Ec.lc();this.Ii.lc()};
g.k.Tt=function(){this.oe();this.Pe&&this.Pe.start()};
g.k.Yc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.Ab=function(){g.$S(this.Ec,0,this.player.fb().getPlayerSize().width,!1);g.KS(this.Ec)};
g.k.wM=function(a){this.player.Pf()&&(0===a?this.hide():this.show())};
g.k.yc=function(){return this.tooltip};
g.k.Of=function(){return!1};
g.k.Ig=function(){return!1};
g.k.Lj=function(){return!1};
g.k.Ok=function(){return!1};
g.k.De=function(){return!1};
g.k.vB=function(){};
g.k.No=function(){};
g.k.ww=function(){};
g.k.Kl=function(){return null};
g.k.wD=function(){return null};
g.k.Uz=function(){return null};
g.k.Hj=function(){return new g.Hl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.ju=function(a,b,c,d,e){var f=0,h=d=0,l=g.Vl(a);if(b){c=g.po(b,"ytp-prev-button")||g.po(b,"ytp-next-button");var m=g.po(b,"ytp-play-button"),n=g.po(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Tl(b,this.element),h=b.x,f=b.y-12):n&&(h=g.po(b,"ytp-miniplayer-button-top-left"),f=g.Tl(b,this.element),b=g.Vl(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.fb().getPlayerSize().width;e=f+(e||0);l=g.qe(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Wn=function(){};
g.k.Jk=function(){return!1};
g.k.wB=function(){};
g.k.Dx=function(){};
g.k.Lp=function(){};
g.k.EC=function(){};
g.k.yq=function(){};g.v(Gbb,g.WP);g.k=Gbb.prototype;g.k.onVideoDataChange=function(){if(this.player.S("web_rounded_containers")&&this.player.getVideoData()){var a=16/9;a=this.player.getVideoAspectRatio()>a+.1;g.uo(this.player.getRootNode(),"ytp-rounded-miniplayer-extra-wide-video",a)}};
g.k.create=function(){g.WP.prototype.create.call(this);this.u.N(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.Zj=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.VP("miniplayer",Gbb);})(_yt_player);
