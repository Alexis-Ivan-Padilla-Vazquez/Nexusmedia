(function(g){var window=this;var gwa=function(a,b){var c=[];g.Cl(b,function(a){try{var b=g.nD.prototype.o.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.t(b)?g.mD(b)&&c.push(a):c.push(a)},a);
return c},hwa=function(a,b){var c=gwa(a,b);
(0,g.G)(c,function(a){g.nD.prototype.remove.call(this,a)},a)},A8=function(a,b){g.J0.call(this,g.T("YTP_MDX_TITLE"),0,a,b);
this.U=a;this.F={};this.R(a,"onMdxReceiversChange",this.J);this.R(a,"presentingplayerstatechange",this.J);this.J()},iwa=function(){var a=g.JG;
hwa(a,a.g.Ud(!0))},B8=function(a){g.lH.call(this,"ScreenServiceProxy");
this.ed=a;this.o=[];this.o.push(this.ed.$_s("screenChange",(0,g.y)(this.zT,this)));this.o.push(this.ed.$_s("onlineScreenChange",(0,g.y)(this.HP,this)))},C8=function(a){g.ZG("cloudview",a)},jwa=function(a){C8("setApiReady_ "+a);
g.qa("yt.mdx.remote.cloudview.apiReady_",a,void 0)},D8=function(){return g.v("yt.mdx.remote.cloudview.instance_")},kwa=function(a){g.aG[a]&&(a=g.aG[a],(0,g.G)(a,function(a){g.ZF[a]&&delete g.ZF[a]}),a.length=0)},E8=function(){return g.v("yt.mdx.remote.connection_")},F8=function(a){g.qa("yt.mdx.remote.connectData_",a,void 0)},lwa=function(a){g.qa("yt.mdx.remote.currentScreenId_",a,void 0)},G8=function(){return g.v("yt.mdx.remote.currentScreenId_")},I8=function(){if(!H8){var a=g.v("yt.mdx.remote.screenService_");
H8=a?new B8(a):null}return H8},J8=function(a){g.qa("yt.mdx.remote.cloudview.initializing_",a,void 0)},K8=function(){return!!g.v("yt.mdx.remote.cloudview.apiReady_")},L8=function(a){C8("setCastInstalled_ "+a);
g.LG("yt-remote-cast-installed",a)},M8=function(a){g.ZG("cloudview",a)},mwa=function(a,b){D8().init(a,b)},N8=function(){return!!g.MG("yt-remote-cast-installed")},nwa=function(){C8("dispose");
var a=D8();a&&a.dispose();g.qa("yt.mdx.remote.cloudview.instance_",null,void 0);jwa(!1);g.cG(O8);O8.length=0},owa=function(){var a=window.document.createElement("a");
g.Fd(a,"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Ta(a)},pwa=function(a,b){var c=window.document.createElement("script");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
c.src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js";var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},qwa=function(a){var b=g.YF();
if(b)if(b.clear(a),a)kwa(a);else for(var c in g.aG)kwa(c)},P8=function(a){return 0<=window.navigator.userAgent.indexOf(a)},Q8=function(){return g.v("yt.mdx.remote.channelParams_")||{}},S8=function(a){var b=E8();
F8(null);a||lwa("");g.qa("yt.mdx.remote.connection_",a,void 0);R8&&((0,g.G)(R8,function(b){b(a)}),R8.length=0);
b&&!a?g.fG("yt-remote-connection-change",!1):!b&&a&&g.fG("yt-remote-connection-change",!0)},rwa=function(){return g.v("yt.mdx.remote.connectData_")},T8=function(){var a=G8();
if(!a)return null;var b=I8().be();return g.kH(b,a)},swa=function(a,b){L8(!0);
J8(!1);mwa(a,function(a){a?(jwa(!0),g.dG("yt-remote-cast2-api-ready")):(M8("Failed to initialize cast API."),L8(!1),g.NG("yt-remote-cast-available"),g.NG("yt-remote-cast-receiver"),nwa());b(a)})},twa=function(){return N8()?D8()?D8().getCastSession():(M8("getCastSelector: Cast is not initialized."),null):(M8("getCastSelector: Cast API is not installed!"),null)},uwa=function(){var a=owa(),b=window.document.getElementById(a),c=b&&g.nF(b,"loaded");
c||b&&!c||(b=pwa(a,function(){g.nF(b,"loaded")||(g.oF(b,"loaded","true"),g.dG(a),g.wE(g.Aa(qwa,a),0))}))},vwa=function(a){return(0,g.H)(a,function(a){return{key:a.id,
name:a.name}})},wwa=function(){if(g.hpa){var a=2,b=g.Bh(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;g.Gh("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",g.Dh,c)}},V8=function(a,b){G8();
T8()&&T8();lwa(a.id);var c=new g.pI(U8,a,Q8());c.connect(b,rwa());c.subscribe("beforeDisconnect",function(a){g.fG("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){E8()&&(E8(),S8(null))});
S8(c)},W8=function(){var a=g.qH();
if(!a)return null;var b=I8().be();return g.kH(b,a)},X8=function(a){g.ZG("remote",a)},Y8=function(){var a=E8();
return!!a&&3!=a.getProxyState()},Z8=function(){K8()?D8().stopSession():M8("stopSession called before API ready.");
var a=E8();a&&(a.disconnect(1),S8(null))},xwa=function(){var a=I8().ed.$_gos();
var b=T8();b&&E8()&&(g.jH(a,b)||a.push(b));return vwa(a)},a9=function(a,b){g.PF.call(this);
this.g=0;this.B=a;this.D=[];this.C=new g.BB;this.A=this.o=null;this.J=(0,g.y)(this.ON,this);this.F=(0,g.y)(this.kl,this);this.G=(0,g.y)(this.NN,this);this.K=(0,g.y)(this.bO,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.qu,this),ywa(this))):c=3;0!=c&&(b?this.qu(c):g.wE((0,g.y)(function(){this.qu(c)},this),0));
var d=twa();d&&$8(this,d);this.subscribe("yt-remote-cast2-session-change",this.K)},b9=function(a){return new g.eI(a.B.getPlayerContextData())},zwa=function(a,b,c,d,e){var f=b9(a),k=e||f.listId;
d=d||0;var l={videoId:b,currentIndex:d};g.iI(f,b,d);g.t(c)&&(g.gI(f,c),l.currentTime=c);g.t(k)&&(l.listId=k);c9(a,"setPlaylist",l);e||d9(a,f)},ywa=function(a){(0,g.G)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.D.push(this.B.subscribe(a,g.Aa(this.ZP,a),this))},a)},Awa=function(a){(0,g.G)(a.D,function(a){this.B.unsubscribeByKey(a)},a);
a.D.length=0},e9=function(a,b){50>a.C.Mc()&&g.DB(a.C,b)},f9=function(a,b,c){var d=b9(a);
g.gI(d,c);-1E3!=d.g&&(d.g=b);d9(a,d)},c9=function(a,b,c){a.B.sendMessage(b,c)},d9=function(a,b){Awa(a);
a.B.setPlayerContextData(g.jI(b));ywa(a)},$8=function(a,b){a.A&&(a.A.removeUpdateListener(a.J),a.A.removeMediaListener(a.F),a.kl(null));
a.A=b;a.A&&(g9("Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.J),a.A.addMediaListener(a.F),a.A.media.length&&a.kl(a.A.media[0]))},Bwa=function(a){var b=a.o.media,c=a.o.customData;
if(b&&c){var d=b9(a);b.contentId!=d.videoId&&g9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;g.gI(d,a.o.getEstimatedTime());d9(a,d)}else g9("No cast media video. Ignoring state update.")},g9=function(a){g.ZG("CP",a)},h9=function(a,b,c){return(0,g.y)(function(a){this.oc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.oc("Retrying "+b+" using MDx browser channel."),c9(this,b,c))},a)},Cwa=function(a,b){var c=!1;
D8()||(c=new g.ZH(a,b),c.subscribe("yt-remote-cast2-availability-change",function(a){g.LG("yt-remote-cast-available",a);g.fG("yt-remote-cast2-availability-change",a)}),c.subscribe("yt-remote-cast2-receiver-selected",function(a){C8("onReceiverSelected: "+a.friendlyName);
g.LG("yt-remote-cast-receiver",a);g.fG("yt-remote-cast2-receiver-selected",a)}),c.subscribe("yt-remote-cast2-receiver-resumed",function(a){C8("onReceiverResumed: "+a.friendlyName);
g.LG("yt-remote-cast-receiver",a)}),c.subscribe("yt-remote-cast2-session-change",function(a){C8("onSessionChange: "+g.gH(a));
a||g.NG("yt-remote-cast-receiver");g.fG("yt-remote-cast2-session-change",a)}),g.qa("yt.mdx.remote.cloudview.instance_",c,void 0),c=!0);
C8("cloudview.createSingleton_: "+c);return c},Dwa=function(){var a=0<=g.Gb.search(/\ (CrMo|Chrome|CriOS)\//);
return g.SE||a},i9=function(a,b){K8()?D8().setConnectedScreenStatus(a,b):M8("setConnectedScreenStatus called before ready.")},Ewa=function(){C8("clearCurrentReceiver");
g.NG("yt-remote-cast-receiver")},Fwa=function(){if(P8("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
if(a){wwa();a({command:"cast.sender.init"});return}}if(!window.chrome||P8("Edge"))g.Dh();else if(wwa(),P8("Android")&&P8("Chrome/")&&window.navigator.presentation){var a="",b=g.zh();55<=b?a="55":50<=b&&(a="50");g.Gh("//www.gstatic.com/eureka/clank"+a+g.Eh,g.Dh)}else g.Hh(0)},Gwa=function(a){a?(g.LG("yt-remote-session-app",a.app),g.LG("yt-remote-session-name",a.name)):(g.NG("yt-remote-session-app"),g.NG("yt-remote-session-name"));
g.qa("yt.mdx.remote.channelParams_",a,void 0)},Hwa=function(){var a=Q8();
if(g.Tb(a)){var a=g.pH(),b=g.MG("yt-remote-session-name")||"",c=g.MG("yt-remote-session-app")||"",a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.qa("yt.mdx.remote.channelParams_",a,void 0)}},Iwa=function(){var a=W8();
a?(X8("Resume connection to: "+g.gH(a)),V8(a,0)):(g.yH(),Ewa(),X8("Skipping connecting because no session screen found."))},Jwa=function(a){X8("remote.onCastSessionChange_: "+g.gH(a));
if(a){var b=T8();b&&b.id==a.id?i9(b.id,"YouTube TV"):(b&&Z8(),V8(a,1))}else E8()&&Z8()},Kwa=function(){var a=xwa(),b=T8();
b||(b=W8());return g.$a(a,function(a){return b&&g.dH(b,a.key)?!0:!1})},Lwa=function(){var a=g.MG("yt-remote-cast-receiver");
return a?a.friendlyName:null},Mwa=function(a,b,c,d,e){Dwa()?Cwa(b,e)&&(J8(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?swa(a,c):(window.__onGCastApiAvailable=function(b,d){b?swa(a,c):(M8("Failed to load cast API: "+d),L8(!1),J8(!1),g.NG("yt-remote-cast-available"),g.NG("yt-remote-cast-receiver"),nwa(),c(!1))},d?window.spf?window.spf.script.load("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):uwa():Fwa())):C8("Cannot initialize because not running Chrome")},
Nwa=function(a){this.port=this.domain="";
this.g="/api/lounge";this.o=!0;a=a||window.document.location.href;var b=g.ug(a)||"";b&&(this.port=":"+b);this.domain=g.tg(a)||"";a=g.Gb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Sa(a,"10.0")&&(this.o=!1))},Owa=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);
return c},j9=function(){var a=Kwa();
!a&&N8()&&Lwa()&&(a={key:"cast-selector-receiver",name:Lwa()});return a},Pwa=function(){var a=xwa();
N8()&&g.MG("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},Qwa=function(a){var b={device:"Desktop",
app:"youtube-desktop"},b=g.ND("MDX_CONFIG")||b;g.JG&&iwa();g.sH();U8||(U8=new Nwa(b?b.loungeApiHost:void 0),g.AH()&&(U8.g="/api/loungedev"));R8||(R8=g.v("yt.mdx.remote.deferredProxies_")||[],g.qa("yt.mdx.remote.deferredProxies_",R8,void 0));Hwa();var c=I8();if(!c){var d=new g.LH(U8);g.qa("yt.mdx.remote.screenService_",d,void 0);c=I8();Mwa(a,d,function(a){a?G8()&&i9(G8(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){g.fG("yt-remote-receiver-availability-change")})},!(!b||!b.loadCastApiSetupScript),
b?b.appId:void 0)}b&&!g.v("yt.mdx.remote.initialized_")&&(g.qa("yt.mdx.remote.initialized_",!0,void 0),X8("Initializing: "+g.lg(b)),k9.push(g.bG("yt-remote-cast2-availability-change",function(){g.fG("yt-remote-receiver-availability-change")})),k9.push(g.bG("yt-remote-cast2-receiver-selected",function(){F8(null);
g.fG("yt-remote-auto-connect","cast-selector-receiver")})),k9.push(g.bG("yt-remote-cast2-receiver-resumed",function(){g.fG("yt-remote-receiver-resumed","cast-selector-receiver")})),k9.push(g.bG("yt-remote-cast2-session-change",Jwa)),k9.push(g.bG("yt-remote-connection-change",function(a){a?i9(G8(),"YouTube TV"):W8()||(i9(null,null),Ewa())})),a=Q8(),b.isAuto&&(a.id+="#dial"),g.YE("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),X8(" -- with channel params: "+
g.lg(a)),Gwa(a),c.start(),G8()||Iwa())},l9=function(){N8()?D8()?K8()?(C8("Requesting cast selector."),D8().requestSession()):(C8("Wait for cast API to be ready to request the session."),O8.push(g.bG("yt-remote-cast2-api-ready",l9))):M8("requestCastSelector: Cast is not initialized."):M8("requestCastSelector: Cast API is not installed!")},m9=function(a,b,c){g.K.call(this);
this.F=a;this.U=b;this.o=new g.MF(this);g.L(this,this.o);this.o.R(b,"onCaptionsTrackListChanged",this.aP);this.o.R(b,"captionschanged",this.MN);this.o.R(b,"captionssettingschanged",this.mC);this.o.R(b,"videoplayerreset",this.co);this.o.R(b,"mdxautoplaycancel",this.CG);this.O=this.o.R(b,"onVolumeChange",this.HA);this.D=!1;this.g=c;c.subscribe("proxyStateChange",this.SA,this);c.subscribe("remotePlayerChange",this.ol,this);c.subscribe("remoteQueueChange",this.co,this);c.subscribe("autoplayUpNext",this.uA,
this);c.subscribe("previousNextChange",this.PA,this);c.subscribe("nowAutoplaying",this.IA,this);c.subscribe("autoplayDismissed",this.tA,this);this.suggestion=null;this.G=new g.RP(64);this.A=new g.pt(this.hC,500,this);g.L(this,this.A);this.B=new g.pt(this.iC,1E3,this);g.L(this,this.B);this.C={};this.K=new g.pt(this.AC,1E3,this);g.L(this,this.K);this.J=new g.bk(this.KL,1E3,this);g.L(this,this.J);this.M=g.x;this.mC();this.co();this.ol()},n9=function(a,b){var c=a.F,d=a.U.ia().lengthSeconds;
c.J=b||0;c.g.Y("progresssync",b,d)},Rwa=function(a){n9(a,0);
a.A.stop();o9(a,new g.RP(64))},q9=function(a,b){if(p9(a)&&!a.D){var c=null;
b&&(c={style:a.U.mi()},g.Zb(c,b));a.g.bC(a.U.ia().videoId,c);a.C=b9(a.g).o}},r9=function(a,b){var c=a.U.Rf();
c?zwa(a.g,a.U.ia().videoId,b,c.Zd(),c.listId.toString()):zwa(a.g,a.U.ia().videoId,b);o9(a,new g.RP(1))},Swa=function(a,b){if(b){var c=a.U.Ac("captions","tracklist",{qy:1});
c&&c.length?(a.U.Ed("captions","track",b),a.D=!1):(a.U.Tk("captions"),a.D=!0)}else a.U.Ed("captions","track",{})},p9=function(a){return b9(a.g).videoId==a.U.ia().videoId},o9=function(a,b){a.B.stop();
var c=a.G;if(!g.XP(c,b)){var d=g.V(b,2);if(d!=g.V(a.G,2)){var e=a.U;g.V1(e.app,d,e.playerType)}a.G=b;Twa(a.F,c,b)}},s9=function(a){g.W.call(this,{H:"div",
N:"ytp-remote",L:[{H:"div",N:"ytp-remote-display-status",L:[{H:"div",N:"ytp-remote-display-status-icon",L:[g.SD()]},{H:"div",N:"ytp-remote-display-status-text",L:["{{statustext}}"]}]}]});this.o=new g.BV(this,250);g.L(this,this.o);this.A=a;this.R(a,"presentingplayerstatechange",this.B);Uwa(this,g.LU(a))},Uwa=function(a,b){if(3==a.A.Xa()){var c={RECEIVER_NAME:a.A.Ac("remote","currentReceiver").name},c=g.V(b,128)?g.T("YTP_MDX_STATUS_ERROR_2",c):b.yb()||g.V(b,4)?g.T("YTP_MDX_STATUS_PLAYING_2",c):g.T("YTP_MDX_STATUS_CONNECTED_2",
c);
a.Fa("statustext",c);a.o.show()}else a.o.hide()},t9=function(a){g.qV.call(this,a);
this.A={key:g.iH(),name:g.T("YTP_MDX_MY_COMPUTER")};this.C=null;this.D=[];this.K=this.o=null;this.G=[this.A];this.B=this.A;this.F=new g.RP(64);this.J=0;var b=g.EU(a).D;b&&(b=b.A&&b.A.g)&&(b=new A8(a,b),g.L(this,b));b=new s9(a);g.L(this,b);g.fV(a,b.element,5)},Twa=function(a,b,c){a.F=c;
a.g.Y("presentingplayerstatechange",new g.bQ(c,b))},u9=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)Z8();
else{a.B=b;var c=a.g.getPlaylistId();var d=a.g.ia().videoId;if(c||d){var e=a.g.Rf();if(e){var f=[];for(var k=0;k<e.getLength();k++)f[k]=e.jc(k).videoId}else f=[a.g.ia().videoId];c={videoIds:f,listId:c,videoId:d,index:Math.max(a.g.Zy(),0),currentTime:a.g.getCurrentTime()}}else c=null;X8("Connecting to: "+g.lg(b));"cast-selector-receiver"==b.key?(F8(c||null),c=c||null,K8()?D8().setLaunchParams(c):M8("setLaunchParams called before ready.")):!c&&Y8()&&G8()==b.key?g.fG("yt-remote-connection-change",!0):
(Z8(),F8(c||null),c=I8().be(),(c=g.kH(c,b.key))&&V8(c,1))}};
g.p(A8,g.J0);A8.prototype.J=function(){var a=this.U.Ac("remote","receivers");a&&1<a.length&&!this.U.Ac("remote","quickCast")?(this.F=g.Cb(a,this.B,this),g.L0(this,(0,g.H)(a,this.B)),a=this.U.Ac("remote","currentReceiver"),g.K0(this,this.B(a)),this.enable(!0)):this.enable(!1)};
A8.prototype.B=function(a){return a.key};
A8.prototype.mf=function(a){return"cast-selector-receiver"==a?g.T("YTP_MDX_CAST_SELECTOR"):this.F[a].name};
A8.prototype.td=function(a){g.J0.prototype.td.call(this,a);this.U.Ed("remote","currentReceiver",this.F[a]);this.A.Sb()};
g.z(B8,g.lH);g.h=B8.prototype;g.h.be=function(a){return this.ed.$_gs(a)};
g.h.contains=function(a){return!!this.ed.$_c(a)};
g.h.get=function(a){return this.ed.$_g(a)};
g.h.start=function(){this.ed.$_st()};
g.h.Zo=function(a,b,c){this.ed.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.ed.$_r(a,b,c)};
g.h.Io=function(a,b,c,d){this.ed.$_un(a,b,c,d)};
g.h.W=function(){for(var a=0,b=this.o.length;a<b;++a)this.ed.$_ubk(this.o[a]);this.o.length=0;this.ed=null;B8.aa.W.call(this)};
g.h.zT=function(){this.Y("screenChange")};
g.h.HP=function(){this.Y("onlineScreenChange")};
var H8=null,O8=[],R8=null,U8=null;g.z(a9,g.PF);g.h=a9.prototype;g.h.play=function(){1==this.g?(this.o?this.o.play(null,g.x,h9(this,"play")):c9(this,"play"),f9(this,1,g.hI(b9(this))),this.Y("remotePlayerChange")):e9(this,this.play)};
g.h.pause=function(){1==this.g?(this.o?this.o.pause(null,g.x,h9(this,"pause")):c9(this,"pause"),f9(this,2,g.hI(b9(this))),this.Y("remotePlayerChange")):e9(this,this.pause)};
g.h.NC=function(a){if(1==this.g){if(this.o){var b=b9(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.yb()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.o.seek(c,g.x,h9(this,"seekTo",{newTime:a}))}else c9(this,"seekTo",{newTime:a});f9(this,3,a);this.Y("remotePlayerChange")}else e9(this,g.Aa(this.NC,a))};
g.h.stop=function(){if(1==this.g){this.o?this.o.stop(null,g.x,h9(this,"stopVideo")):c9(this,"stopVideo");var a=b9(this);a.index=-1;a.videoId="";g.fI(a);d9(this,a);this.Y("remotePlayerChange")}else e9(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=b9(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.y)(function(){g9("set receiver volume: "+d)},this),(0,g.y)(function(){this.oc("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.y)(function(){g9("set receiver muted: "+b)},this),(0,g.y)(function(){this.oc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);c9(this,"setVolume",e)}c.muted=b;c.volume=a;d9(this,c)}else e9(this,g.Aa(this.setVolume,a,b))};
g.h.bC=function(a,b){if(1==this.g){var c=b9(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.lg(b.style),g.Zb(d,c.o));c9(this,"setSubtitlesTrack",d);d9(this,c)}else e9(this,g.Aa(this.bC,a,b))};
g.h.pu=function(a,b){if(1==this.g){c9(this,"setAudioTrack",{videoId:a,audioTrackId:b.Uc.id});var c=b9(this);c.audioTrackId=b.Uc.id;d9(this,c)}else e9(this,g.Aa(this.pu,a,b))};
g.h.MC=function(a,b){if(1==this.g){if(a&&b){var c=b9(this);g.iI(c,a,b);d9(this,c)}c9(this,"previous")}else e9(this,g.Aa(this.MC,a,b))};
g.h.LC=function(a,b){if(1==this.g){if(a&&b){var c=b9(this);g.iI(c,a,b);d9(this,c)}c9(this,"next")}else e9(this,g.Aa(this.LC,a,b))};
g.h.Nw=function(){1==this.g?c9(this,"dismissAutoplay"):e9(this,this.Nw)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.Y("proxyStateChange",a,this.g)}a9.aa.dispose.call(this)};
g.h.W=function(){Awa(this);this.B=null;this.C.clear();$8(this,null);a9.aa.W.call(this)};
g.h.qu=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.Y("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)g.EB(this.C).apply(this);else 3==a&&this.dispose()}};
g.h.ZP=function(a,b){this.Y(a,b)};
g.h.ON=function(a){if(!a)this.kl(null),$8(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=b9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)g9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,d9(this,b)}};
g.h.kl=function(a){g9("Cast media: "+!!a);this.o&&this.o.removeUpdateListener(this.G);if(this.o=a)this.o.addUpdateListener(this.G),Bwa(this),this.Y("remotePlayerChange")};
g.h.NN=function(a){a?(Bwa(this),this.Y("remotePlayerChange")):this.kl(null)};
g.h.bO=function(){var a=twa();a&&$8(this,a)};
g.h.oc=function(a){g.ZG("CP",a)};
var k9=[];g.h=Nwa.prototype;g.h.Zh=function(a){var b=this.g;if(g.t(void 0)?0:this.o)b="https://"+this.domain+this.port+this.g;return g.Bg(b+a,{})};
g.h.ou=function(a,b,c,d){c={format:"JSON",method:"POST",context:this,timeout:5E3,withCredentials:!1,Ob:g.Aa(this.uT,c,!0),onError:g.Aa(this.tT,d),gd:g.Aa(this.vT,d)};b&&(c.Tb=b,c.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.JE(a,c)};
g.h.uT=function(a,b,c,d){b?a(d):a({text:c.responseText})};
g.h.tT=function(a,b){a(Error("Request error: "+b.status))};
g.h.vT=function(a){a(Error("request timed out"))};g.p(m9,g.K);g.h=m9.prototype;g.h.W=function(){g.K.prototype.W.call(this);this.A.stop();this.B.stop();this.M();this.g.unsubscribe("proxyStateChange",this.SA,this);this.g.unsubscribe("remotePlayerChange",this.ol,this);this.g.unsubscribe("remoteQueueChange",this.co,this);this.g.unsubscribe("autoplayUpNext",this.uA,this);this.g.unsubscribe("previousNextChange",this.PA,this);this.g.unsubscribe("nowAutoplaying",this.IA,this);this.g.unsubscribe("autoplayDismissed",this.tA,this);this.g=this.F=null};
g.h.yz=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(p9(this)){if(1081!=b9(this.g).g||"control_seek"!=a)switch(a){case "control_toggle_play_pause":b9(this.g).yb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.J.aj(c[0],c[1]);break;case "control_subtitles_set_track":q9(this,c[0]);break;case "control_set_audio_track":c=c[0],p9(this)&&this.g.pu(this.U.ia().videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":r9(this,this.U.getCurrentTime());break;case "control_seek":r9(this,c[0]);break;case "control_subtitles_set_track":q9(this,c[0]);break;case "control_set_audio_track":c=c[0],p9(this)&&this.g.pu(this.U.ia().videoId,c)}};
g.h.MN=function(a){this.yz("control_subtitles_set_track",g.Tb(a)?null:a)};
g.h.mC=function(){var a=this.U.Ac("captions","track");g.Tb(a)||q9(this,a)};
g.h.HA=function(a){if(p9(this)){this.g.unsubscribe("remotePlayerChange",this.ol,this);var b=Math.round(a.volume);a=!!a.muted;var c=b9(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.K.start();this.g.subscribe("remotePlayerChange",this.ol,this)}};
g.h.aP=function(){g.Tb(this.C)||Swa(this,this.C);this.D=!1};
g.h.SA=function(a,b){this.B.stop();2==b&&this.iC()};
g.h.ol=function(){if(p9(this)){this.A.stop();var a=b9(this.g);switch(a.g){case 1081:o9(this,new g.RP(8));break;case 1:this.hC();o9(this,new g.RP(8));break;case 1083:case 3:o9(this,new g.RP(9));break;case 0:o9(this,new g.RP(2));this.J.stop();n9(this,this.U.ia().lengthSeconds);break;case 1082:o9(this,new g.RP(4));break;case 2:o9(this,new g.RP(4));n9(this,g.hI(a));break;case -1:o9(this,new g.RP(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.T("YTP_MDX_PLAYER_ERROR")},o9(this,new g.RP(128,
a))}var a=b9(this.g).o,b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.C=a,Swa(this,a));a=b9(this.g);-1==a.volume||Math.round(this.U.getVolume())==a.volume&&this.U.Le()==a.muted||this.K.isActive()||this.AC()}else Rwa(this)};
g.h.PA=function(){this.U.Y("mdxpreviousnextchange")};
g.h.co=function(){p9(this)||Rwa(this)};
g.h.CG=function(){this.g.Nw()};
g.h.uA=function(a){a&&(a=g.JE("/watch_queue_ajax",{method:"GET",bd:{action_get_watch_queue_item:1,video_id:a},Ob:(0,g.y)(this.bR,this)}))&&(this.M=(0,g.y)(a.abort,a))};
g.h.bR=function(a,b){var c=new g.fP({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.U.Y("mdxautoplayupnext",c)};
g.h.IA=function(a){(0,window.isNaN)(a)||this.U.Y("mdxnowautoplaying",a)};
g.h.tA=function(){this.U.Y("mdxautoplaycanceled")};
g.h.KL=function(a,b){-1==b9(this.g).g?r9(this,a):b&&this.g.NC(a)};
g.h.AC=function(){if(p9(this)){var a=b9(this.g);this.o.Ca(this.O);a.muted?this.U.mute():this.U.yg();this.U.setVolume(a.volume);this.O=this.o.R(this.U,"onVolumeChange",this.HA)}};
g.h.hC=function(){this.A.stop();if(!this.g.na()){var a=b9(this.g);a.yb()&&o9(this,new g.RP(8));n9(this,g.hI(a));this.A.start()}};
g.h.iC=function(){this.B.stop();this.A.stop();var a=this.g.B.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.B.start()};g.p(s9,g.W);s9.prototype.B=function(a){Uwa(this,a.state)};g.p(t9,g.qV);g.h=t9.prototype;g.h.create=function(){Qwa("embedded"==g.Y(this.g).g);this.D.push(g.bG("yt-remote-before-disconnect",this.JN,this));this.D.push(g.bG("yt-remote-connection-change",this.jQ,this));this.D.push(g.bG("yt-remote-receiver-availability-change",this.QA,this));this.D.push(g.bG("yt-remote-auto-connect",this.hQ,this));this.D.push(g.bG("yt-remote-receiver-resumed",this.gQ,this));this.QA()};
g.h.load=function(){this.g.gq();g.qV.prototype.load.call(this);this.C=new m9(this,this.g,this.o);var a=rwa(),a=a?a.currentTime:0,b=Y8()?new a9(E8(),void 0):null;0==a&&b&&(a=g.hI(b9(b)));0!=a&&(this.J=a||0,this.g.Y("progresssync",a,void 0));Twa(this,this.F,this.F);g.a2(this.g.app,6)};
g.h.unload=function(){this.g.Y("mdxautoplaycanceled");this.B=this.A;g.Le(this.C,this.o);this.o=this.C=null;g.qV.prototype.unload.call(this);g.a2(this.g.app,5)};
g.h.W=function(){g.cG(this.D);g.qV.prototype.W.call(this)};
g.h.Yk=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.C.yz.apply(this.C,[].concat([a],c instanceof Array?c:Owa(g.ka(c))))};
g.h.pH=function(){return this.loaded?this.C.suggestion:null};
g.h.Kf=function(){return this.o?b9(this.o).Kf:!1};
g.h.hasNext=function(){return this.o?b9(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.J};
g.h.sL=function(){var a=b9(this.o),b=this.g.ia();return{allowSeeking:this.g.Od(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.F?a.C+((0,g.F)()-a.A)/1E3:a.C,isPeggedToLive:1>=(a.F?a.B+((0,g.F)()-a.A)/1E3:a.B)-this.getCurrentTime(),loaded:a.K,seekableEnd:a.F?a.B+((0,g.F)()-a.A)/1E3:a.B,seekableStart:0<a.D?a.D+((0,g.F)()-a.A)/1E3:a.D}};
g.h.tL=function(){this.o&&this.o.LC()};
g.h.uL=function(){this.o&&this.o.MC()};
g.h.JN=function(a){1==a&&(this.K=this.o?b9(this.o):null)};
g.h.jQ=function(){var a=Y8()?new a9(E8(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.K=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.Ke(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.K)&&a.videoId==this.g.ia().videoId&&this.g.Xy(a.videoId,g.hI(a)));this.g.Y("videodatachange","newdata",this.g.ia(),3)};
g.h.QA=function(){this.G=[this.A].concat(Pwa());var a=j9()||this.A;u9(this,a);this.g.za("onMdxReceiversChange")};
g.h.hQ=function(){var a=j9();u9(this,a)};
g.h.gQ=function(){this.B=j9()};
g.h.rL=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?l9():u9(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&l9(),!0):!1}};
g.h.vL=function(){c9(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Gd=function(){return!1};window._exportCheck==g.Ca&&g.qa("ytmod.player.remote",t9,void 0);})(_yt_player);