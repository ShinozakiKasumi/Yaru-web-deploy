((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
iqV(d,e,f,g){if(d)return""+g+"-"+f+"-begin"
if(e)return""+g+"-"+f+"-end"
return f},
itb(d){var x=$.aBu.h(0,d)
if(x==null)return d
return d+"-"+B.b(x)},
jdk(d){var x,w
if(!$.aBu.K(0,d))return
x=$.aBu.h(0,d)
x.toString
w=x-1
x=$.aBu
if(w<=0)x.V(0,d)
else x.j(0,d,w)},
itj(d,e,f,g,h){var x,w,v,u,t,s
if(f===9||f===11||f===10)return
if($.aBA>1e4&&$.aBu.a===0){$.bdO().clearMarks()
$.bdO().clearMeasures()
$.aBA=0}x=f===1||f===5
w=f===2||f===7
v=A.iqV(x,w,g,d)
if(x){u=$.aBu.h(0,v)
if(u==null)u=0
$.aBu.j(0,v,u+1)
v=A.itb(v)}t=$.bdO()
t.toString
t.mark(v,$.iDB().parse(h))
$.aBA=$.aBA+1
if(w){s=A.iqV(!0,!1,g,d)
t=$.bdO()
t.toString
t.measure(g,A.itb(s),v)
$.aBA=$.aBA+1
A.jdk(s)}C.k.a4($.aBA,0,10001)},
imn(d){var x,w
if($.bdO()==null){$.dOH.push(null)
return}x=$.itS
$.itS=x+1
w=new A.ca2(d,x,null,null)
$.dOH.push(w)
A.itj(x,-1,1,d,w.gcP3())},
imm(){if($.dOH.length===0)throw B.v(B.aL("Uneven calls to startSync and finishSync"))
var x=$.dOH.pop()
if(x==null)return
A.itj(x.b,-1,2,x.a,x.gcP3())},
jbv(d){return"{}"},
hC0:function hC0(){},
hzQ:function hzQ(){},
ca2:function ca2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
SF(d,e,f,g){return new A.aBd(f,g,y.c.b(e)?e:A.Et(null,e,B.b(d.a.x)+"--WidgetBit.inline",null),d)},
vS(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s=null
if(h==null)x=s
else x=h
if(d==null)w=x!=null
else w=d
if(g==null)v=s
else v=g
if(i==null)u=s
else u=i
if(l==null)t=s
else t=l
return new A.ja(w,e,f,v,x,u,j,k,t,m)},
P7(d,e){var x,w,v,u
if(d==null||e===D.Xb)x=e
else if(e==null)x=d
else{w=e.a
if(w==null)w=d.a
v=e.b
if(v==null)v=d.b
u=e.c
w=new A.aHf(w,v,u==null?d.c:u)
x=w}if((x==null?null:x.gDg())===!0)return D.Xb
return x},
i_P(d,e){var x=C.d.gaq(d)
if(new B.y8(x,e.i("y8<0>")).G())return e.a(x.gT(0))
return null},
jiz(d,e){var x,w,v=e.jR(0,y.G)
if(v==null)return d
x=v.a.fU(e)
if(x==null)return d
$.b6()
w=B.bp()
w.r=x.gB(x)
return d.f8I(w,"fwfh: background-color")},
jiA(d,e){var x,w=e.jR(0,y.K)
if(w==null)return d
x=w.a.fU(e)
if(x==null)return d
return d.f9m("fwfh: text-decoration-color",x)},
jiB(d,e){var x,w,v,u,t,s=e.jR(0,y.W)
if(s==null)return d
x=s.a
if(x==null){w=e.jR(0,y.fw)
v=w==null?null:w.a
if(v==null)return d
else return d.d5T("fwfh: line-height normal",v)}u=d.r
if(u==null||u===0)return d
w=e.jR(0,y.Z)
t=x.b3I(e,u,w==null?null:w.a)
if(t==null)return d
return d.d5T("fwfh: line-height",t/u)},
jiD(d,e){var x,w,v,u=e.jR(0,y.O)
if(u==null)return d
x=u.a
w=y.fy
v=B.M(new B.ce(new B.E(x,new A.hC6(e),B.Y(x).i("E<1,xU?>")),w),w.i("U.E"))
if(v.length===0)return d
return d.f9o("fwfh: text-shadow",v)},
CK:function CK(){},
q_:function q_(){},
Ms:function Ms(d,e){this.a=d
this.b=e},
a4X:function a4X(){},
aBc:function aBc(d,e){this.a=d
this.b=e},
aBd:function aBd(d,e,f,g){var _=this
_.c=d
_.d=e
_.a=f
_.b=g},
MP:function MP(d,e){this.a=d
this.b=e},
ja:function ja(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},
amn:function amn(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o},
UM:function UM(d,e){this.a=d
this.b=e},
aHf:function aHf(d,e,f){this.a=d
this.b=e
this.c=f},
bTs:function bTs(){},
SX:function SX(d){this.a=d},
tO:function tO(d,e){this.a=d
this.b=e},
a8L:function a8L(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cH5:function cH5(){},
a8M:function a8M(d,e){this.a=d
this.b=e},
amp:function amp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a02:function a02(d,e){this.a=d
this.b=e},
brX:function brX(d,e,f){this.a=d
this.b=e
this.c=f},
aKX:function aKX(d,e,f){this.a=d
this.b=e
this.c=f},
fK:function fK(d,e,f){this.a=d
this.b=e
this.c=f},
cZK:function cZK(d){this.a=d},
ap6:function ap6(d,e){var _=this
_.a=d
_.c=_.b=null
_.d=e},
b1E:function b1E(d,e,f){this.a=d
this.b=e
this.$ti=f},
hC6:function hC6(d){this.a=d},
aMn:function aMn(){},
dee:function dee(){},
def:function def(d){this.a=d},
bIn:function bIn(d){this.a=d},
bym:function bym(d){this.a=d},
bIt:function bIt(d){this.a=d},
bIu:function bIu(d){this.a=d},
auC:function auC(d){this.a=d},
bIv:function bIv(d){this.a=d},
bRl:function bRl(){},
Et(d,e,f,g){var x=y.s
return new A.ph(f,d!=null?B.a([d],x):B.a([],x),e,g)},
jmP(d){var x,w,v,u,t,s=null,r=$.iCR().aVG(0,d)
if(r==null)return s
x=r.b
w=x[0]
v=x[1]
u=C.c.aZ(d,w.length)
if(v==="base64")t=C.js.bV(u)
else t=v==="utf8"?new Uint8Array(B.el(new B.dp(u))):s
return(t==null?s:!C.an.gac(t))===!0?t:s},
bds(d,e){var x=d.h(0,e)
if(x==null)return null
return B.i5(x)},
i7z(d,e){var x=d.h(0,e)
if(x==null)return null
return B.cb(x,null)},
ph:function ph(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aKE(d,e,f,g,h){return new A.aoD(e,f,d,g,h,null)},
iqA(d,e){var x,w,v,u,t=null,s=$.iE1()
s.cK(C.cf,"Building body...",t,t)
x=d.e
x===$&&B.e()
x.a6c(0,d)
w=d.d
w===$&&B.e()
v=new A.AG(x,t,D.F9,new A.a5N(),$.ck9(),w,t)
v.d1y(e)
w=v.ap()
u=w==null?t:w.qg(x.gd31())
if(u==null)u=d.a1v(C.au)
s.cK(C.cf,"Built body successfuly.",t,t)
return u},
ji1(d){return B.cXI(d,null,!1,!1,null).dfh().gfN(0)},
aoD:function aoD(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.w=f
_.as=g
_.ay=h
_.a=i},
aKF:function aKF(){var _=this
_.e=_.d=$
_.c=_.a=_.w=_.r=_.f=null},
cXN:function cXN(d){this.a=d},
cXM:function cXM(d){this.a=d},
fn8:function fn8(d,e,f){var _=this
_.e=d
_.a=e
_.c=_.b=null
_.d=f},
azS:function azS(d,e,f){this.f=d
this.b=e
this.a=f},
j6y(d){var x,w=d.b.h(0,"dir")
if(w!=null){x=y.N
x=B.x(["direction",w],x,x)}else x=C.cI
return x},
j6z(d){var x=y.N
return B.x(["display","block"],x,x)},
j6A(d){var x=y.N
return B.x(["display","none"],x,x)},
j6B(d){var x=y.N
return B.x(["display","table"],x,x)},
j6C(d){var x=y.N
return B.x(["text-align","center"],x,x)},
j6D(d){var x,w=d.b.h(0,"align")
if(w==="center"){x=y.N
return B.x(["display","block","text-align","-webkit-center","width","100%"],x,x)}if(w!=null){x=y.N
x=B.x(["text-align",w],x,x)}else x=C.cI
return x},
j6E(d){var x=y.N
return B.x(["text-decoration-line","line-through"],x,x)},
j6F(d){var x=y.N
return B.x(["text-decoration-line","underline"],x,x)},
j6G(d){var x=y.N
return B.x(["vertical-align","middle"],x,x)},
j6H(d){var x=y.N
return B.x(["text-decoration-line","underline","text-decoration-style","dotted"],x,x)},
j6I(d){var x=y.N
return B.x(["display","block","font-style","italic"],x,x)},
j6J(d){var x=y.N
return B.x(["display","block","text-align","-webkit-center","width","100%"],x,x)},
j6K(d){var x=y.N
return B.x(["display","block","margin","0 0 1em 40px"],x,x)},
j6L(d){var x=y.N
return B.x(["display","block","font-weight","bold"],x,x)},
j6M(d){var x=y.N
return B.x(["display","block","margin","1em 40px"],x,x)},
j6N(d){var x=y.N
return B.x(["display","block","font-size","2em","font-weight","bold","margin","0.67em 0"],x,x)},
j6O(d){var x=y.N
return B.x(["display","block","font-size","1.5em","font-weight","bold","margin","0.83em 0"],x,x)},
j6P(d){var x=y.N
return B.x(["display","block","font-size","1.17em","font-weight","bold","margin","1em 0"],x,x)},
j6Q(d){var x=y.N
return B.x(["display","block","font-weight","bold","margin","1.33em 0"],x,x)},
j6R(d){var x=y.N
return B.x(["display","block","font-size","0.83em","font-weight","bold","margin","1.67em 0"],x,x)},
j6S(d){var x=y.N
return B.x(["display","block","font-size","0.67em","font-weight","bold","margin","2.33em 0"],x,x)},
j6T(d){var x=y.N
return B.x(["display","block","margin","0.5em 0","border-top","1px solid"],x,x)},
j6U(d,e){return e.qg(new A.dTr())},
j6V(d){var x=y.N
return B.x(["background-color","#ff0","color","#000"],x,x)},
j6W(d){var x=y.N
return B.x(["display","block","margin","1em 0"],x,x)},
j6X(d){var x=y.N
return B.x(["vertical-align","sub","font-size","smaller"],x,x)},
j6Y(d){var x=y.N
return B.x(["vertical-align","super","font-size","smaller"],x,x)},
j6Z(d){var x=y.N
return B.x(["font-weight","bold","vertical-align","middle"],x,x)},
bKX:function bKX(d,e){var _=this
_.a=d
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=null
_.aS0$=e},
dTs:function dTs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dTt:function dTt(d,e,f){this.a=d
this.b=e
this.c=f},
dTu:function dTu(d,e,f){this.a=d
this.b=e
this.c=f},
dTv:function dTv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dTr:function dTr(){},
bKY:function bKY(){},
b9N:function b9N(){},
hZR(d){var x,w,v=$.iez
if(v==null)v=$.iez=new B.PD(new WeakMap(),y.c8)
B.pB(d)
x=v.a.get(d)
if(x!=null)return x
if(!d.b.K(0,"style")){v.j(0,d,D.a1m)
return D.a1m}w=A.cH8(A.hP8("*{"+B.b(d.b.h(0,"style"))+"}"))
v.j(0,d,w)
return w},
HG(d){var x=d.c
if(x instanceof B.a0s)return x.c
return D.dga},
uQ(d){var x=A.HG(d)
return x.length===1?C.d.ga_(x):null},
idH(d){var x,w,v,u,t=$.idG
if(t==null)t=$.idG=new B.PD(new WeakMap(),y.gE)
B.pB(d)
x=t.a.get(d)
if(x!=null)return x
w=$.ip_
if(w==null)w=$.ip_=new A.euU(B.a([],y.A))
v=w.a
C.d.ag(v)
w.L7(d.f)
v=J.xp(v.slice(0),B.Y(v).c)
u=B.Y(v).i("aE<1>")
v=B.M(new B.aE(v,new A.cH4(),u),u.i("U.E"))
v.$flags=1
v=v
t.j(0,d,v)
return v},
oX(d){var x,w,v,u=d.c
if(u instanceof B.Q2)return u.b
if(typeof u=="string"){x=u.charCodeAt(0)
w=u.length-1
if(x===u.charCodeAt(w)){v=C.c.a3(u,1,w)
switch(x){case 34:return B.at(v,'\\"','"')
case 39:return B.at(v,"\\'","'")}}}return""},
cH8(d){var x,w=$.idJ
if(w==null)w=$.idJ=new A.eor(B.a([],y._))
x=w.a
C.d.ag(x)
w.ma(d.b)
x=J.xp(x.slice(0),B.Y(x).c)
return x},
cH4:function cH4(){},
eor:function eor(d){this.a=d},
euU:function euU(d){this.a=d},
jiC(d,e){var x,w,v=e.x
if(v==null)x=null
else{w=v.$ti.i("aE<ds.E>")
v=B.M(new B.aE(v,new A.hC5(),w),w.i("U.E"))
v.$flags=1
x=v}if(x!=null&&x.length!==0){v=B.M(d,y.z)
C.d.D(v,x)
v=B.iE(v,y.Q)}else v=d
return v},
jiY(d){var x=d.a,w=x.a
return w==null?x.e!=null:w},
j8A(d,e){var x,w=d.a,v=e.a
if(w===v)return 0
x=C.k.bk(w.y,v.y)
if(x===0)return C.k.bk(B.e4(w),B.e4(v))
else return x},
AG:function AG(d,e,f,g,h,i,j){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.y=_.x=null
_.a=h
_.b=i
_.c=null
_.al1$=j},
cG1:function cG1(){},
hC5:function hC5(){},
N7:function N7(d,e){this.a=d
this.b=e},
eiV:function eiV(){},
a5N:function a5N(){this.b=null},
cdj:function cdj(d){this.a=d},
iOg(d,e){var x=A.irn(d)
if((x==null?null:x.length!==0)===!0)e.qg(new A.cpz(x))},
irn(d){var x=d.H3(y.D)
return x==null?null:x.a},
irm(d,e){var x,w=A.irn(d);(w==null?d.wv(new A.bRk(B.a([],y.f5)),y.D).a:w).push(e)
x=d.f
if(x!=null)A.irm(x,e)},
irr(d){var x=d.jR(0,y.w)===C.cG,w=d.jR(0,y.a)
switch((w==null?C.Q:w).a){case 2:return C.l
case 5:return C.fW
case 3:return C.y
case 0:return x?C.fW:C.y
case 1:return x?C.y:C.fW
case 4:return C.y}},
j2N(d,e){return d.J6(new A.bIt(e),y.G)},
irt(d){var x=y.gu,w=d.H3(x)
return w==null?d.wv(A.jex(d),x):w},
jex(d){var x,w,v,u,t,s,r,q
for(x=d.w.gaq(0),w=x.$ti.c,v=D.ePi;x.G();){u=x.d
if(u==null)u=w.a(u)
t=u.f
s=u.b
t=t?"*"+s.b:s.b
u=A.HG(u)
r=new A.fzm(t,u)
switch(t){case"background":for(;r.c<u.length;v=q){q=v.d73(r)
if(r.c<u.length)q=q.d74(r)
if(r.c<u.length)q=q.d75(r)
if(r.c<u.length)q=q.d76(r)
if(q===v)++r.c}break
case"background-color":v=v.d73(r)
break
case"background-image":v=v.d74(r)
break
case"background-position":for(;r.c<u.length;v=q){q=v.d75(r)
if(q===v)++r.c}break
case"background-repeat":case"background-size":v=v.d76(r)
break}}return v},
irv(d){switch(d instanceof B.fp?A.oX(d):null){case"bottom":return D.ePj
case"center":return D.ePk
case"left":return D.ePl
case"right":return D.ePm
case"top":return D.ePn}return null},
dG6(d){$.i8z().j(0,d,!0)
return!0},
j2Q(d){var x,w,v=B.M(d.gTC(),y.r)
if(v.length===1){x=C.d.ga_(v)
if(x instanceof A.a4X&&x.ga4F())return d}w=d.f
v=w.YX(0)
v.l6(0,A.SF(w,A.Et(null,d.ap(),"inline-block",null),C.oV,C.b9))
return v},
j2R(d){return d.f.YX(0)},
j2P(d){switch(d){case"flex-start":return C.i
case"flex-end":return C.eP
case"center":return C.az
case"space-between":return C.cR
case"space-around":return C.oJ
case"space-evenly":return C.oK
default:return C.i}},
j2O(d){switch(d){case"flex-start":return C.y
case"flex-end":return C.fW
case"center":return C.l
case"baseline":return C.hA
case"stretch":return C.aJ
default:return C.y}},
aFk(d){var x=y.R,w=d.H3(x)
return w==null?d.wv(D.eLo,x):w},
isK(d,e){return A.Et(new A.hBf(d,e),null,B.b(d.a.x)+"--paddingInlineAfter",null)},
isL(d,e){return A.Et(new A.hBg(d,e),null,B.b(d.a.x)+"--paddingInlineBefore",null)},
isM(d){return d!=null&&d>0?new B.N(d,null,null,null):C.au},
j2V(d,e){var x,w=e.a.a,v=w instanceof B.fX?w:null
if(v!=null){x=$.cjW()
B.pB(v)
x=x.a.get(v)==null}else x=!0
if(x)return
e.fI(0,D.bqM)},
j2S(d,e){var x,w,v,u,t=A.hyR(d)
if((t==null?null:t.r)===D.Xf)return e
x=d.a.a
w=x instanceof B.fX?x:null
if(w==null)return e
t=$.cjW()
B.pB(w)
v=t.a.get(w)
if(v==null)return e
u=A.hyR(v)
if(u!=null)t=u.d==null&&u.r==null
else t=!0
if(t)return e
return e.qg(new A.dGl(d))},
j2T(d,e){var x,w=$.cjX()
B.pB(d)
if(J.C(w.a.get(d),!0)||e.gac(e))return e
x=A.hyR(d)
if(x==null)return e
return e.qg(new A.dGm(x,d))},
j2U(d){var x,w,v,u=$.cjX()
B.pB(d)
if(J.C(u.a.get(d),!0))return
x=A.hyR(d)
if(x==null)return
for(u=d.gTC(),u=new B.jz(u.a(),u.$ti.i("jz<1>")),w=null;u.G();){v=u.b
if(v instanceof A.a4X){if(w!=null)return
w=v.a}else return}if(w==null||w.gac(w))return
w.qg(new A.dGn(x,d))},
ilD(d,e,f,g){var x,w,v,u,t,s=null,r=f.a,q=r==null
if(q&&f.b==null&&f.c==null&&f.d==null&&f.f==null&&f.r===D.Xf){if(e instanceof A.amm)return e
return new A.amm(e,s)}x=g.aC(d)
r=q?s:A.aBv(r,x)
q=f.b
q=q==null?s:A.aBv(q,x)
w=f.c
w=w==null?s:A.aBv(w,x)
v=f.d
v=v==null?s:A.aBv(v,x)
u=f.f
u=u==null?s:A.aBv(u,x)
t=f.r
t=t==null?s:A.aBv(t,x)
return new A.bk_(r,q,w,v,f.e,u,t,e,s)},
hyR(d){var x=y.cC,w=d.H3(x)
if(w==null)w=d.wv(A.jey(d),x)
if(w.a==null&&w.b==null&&w.c==null&&w.d==null&&w.f==null&&w.r==null)return null
return w},
jey(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
for(x=d.w.gaq(0),w=x.$ti.c,v=e,u=v,t=u,s=t,r=s,q=r,p=q;x.G();){o=x.d
if(o==null)o=w.a(o)
n=A.HG(o)
m=n.length===1?C.d.ga_(n):e
if(m==null)continue
l=o.f
o=o.b
switch(l?"*"+o.b:o.b){case"height":k=A.ok(m)
if(k!=null){u=k
t=C.O}break
case"max-height":j=A.ok(m)
p=j==null?p:j
break
case"max-width":i=A.ok(m)
q=i==null?q:i
break
case"min-height":h=A.ok(m)
r=h==null?r:h
break
case"min-width":g=A.ok(m)
s=g==null?s:g
break
case"width":f=A.ok(m)
if(f!=null){v=f
t=C.aI}break}}if(v==null){x=$.i8A()
B.pB(d)
x=J.C(x.a.get(d),!0)}else x=!1
if(x){if(t==null)t=C.aI
v=D.Xf}return new A.c9K(p,q,r,s,t,u,v)},
aBv(d,e){var x=d.fU(e)
if(x!=null)return new A.a5n(x)
switch(d.b.a){case 0:return D.buh
case 2:return new A.aZV(d.a)
default:return null}},
j9y(d){return d.bGr(0)},
j2W(d,e){return B.au(e,1,null)},
j2X(d){var x=A.irw(d).b
if(x!=null)d.b.of(A.jo6(),x,y.a)
return d},
j2Y(d,e){if(e.gac(e)||A.irw(d).a!=="-webkit-center")return e
return e.qg(A.jo3())},
j2Z(d,e){return d.J6(e,y.a)},
irw(d){var x=y.gk,w=d.H3(x)
return w==null?d.wv(A.jeA(d),x):w},
jeA(d){var x,w,v,u=d.BH("text-align")
if(u==null)x=null
else{w=A.uQ(u)
x=w instanceof B.fp?A.oX(w):null}if(x==null)return D.ePo
switch(x){case"center":case"-moz-center":case"-webkit-center":v=C.ag
break
case"end":v=C.pt
break
case"justify":v=C.lL
break
case"left":v=C.i9
break
case"right":v=C.ia
break
case"start":v=C.Q
break
default:v=null}return new A.b85(x,v)},
jwW(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(x=A.HG(e),w=x.length,v=e.b,u=e.f,t=y.i,s=d.b,r=y.V,q=y.bR,p=y.fs,o=0;o<x.length;x.length===w||(0,B.a7)(x),++o){n=x[o]
if(u){m=v.b
l="*"+m
k=l
l=m
m=k}else{m=v.b
l=m}if(m!=="text-decoration"){if(u){v.toString
m="*"+l}else{v.toString
m=l}m=m==="text-decoration-line"}else m=!0
if(m){j=A.j40(n)
if(j!=null){s.of(A.jog(),j,p)
continue}}if(u){v.toString
m="*"+l}else{v.toString
m=l}if(m!=="text-decoration"){if(u){v.toString
m="*"+l}else{v.toString
m=l}m=m==="text-decoration-style"}else m=!0
if(m){i=A.ixq(n)
if(i!=null){s.of(A.joh(),i,q)
continue}}if(u){v.toString
m="*"+l}else{v.toString
m=l}if(m!=="text-decoration"){if(u){v.toString
m="*"+l}else{v.toString
m=l}m=m==="text-decoration-color"}else m=!0
if(m){h=A.bdr(n)
if(h!=null){s.of(A.jof(),h,r)
continue}}if(u){v.toString
m="*"+l}else{v.toString
m=l}g=!0
if(m!=="text-decoration"){if(u){v.toString
m="*"+l}else{v.toString
m=l}if(m!=="text-decoration-thickness"){if(u){v.toString
m="*"+l}else{v.toString
m=l}m=m==="text-decoration-width"}else m=g}else m=g
if(m){f=A.ok(n)
if(f!=null&&f.b===D.D8){s.of(A.joi(),f.a/100,t)
continue}}}},
jwX(d,e){return d.J6(new A.bIu(e),y.K)},
jwY(d,e){var x,w,v,u,t,s,r,q,p,o,n=null,m=d.a
if(m==null)x=n
else{m=m.jR(0,y.j)
x=m==null?n:m.CW}m=x==null
if(m)w=n
else{w=x.a
w=(w|2)===w}if(m)v=n
else{v=x.a
v=(v|4)===v}if(m)m=n
else{m=x.a
m=(m|1)===m}u=d.jR(0,y.j)
t=u==null?n:u.CW
u=t==null
if(u)s=n
else{s=t.a
s=(s|2)===s}r=s===!0
if(u)s=n
else{s=t.a
s=(s|4)===s}q=s===!0
if(u)u=n
else{u=t.a
u=(u|1)===u}p=u===!0
o=B.a([],y.fi)
if(w!==!0){w=e.a
if(w==null)w=r}else w=!0
if(w)o.push(C.a7v)
if(v!==!0){w=e.b
if(w==null)w=q}else w=!0
if(w)o.push(C.nD)
if(m!==!0){m=e.c
if(m==null)m=p}else m=!0
if(m)o.push(C.ib)
return d.CG(B.aD(n,n,n,"fwfh: text-decoration-line",B.i2m(o),n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),y.z)},
jwZ(d,e){var x=null
return d.CG(B.aD(x,x,x,"fwfh: text-decoration-style",x,x,e,x,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),y.z)},
jx_(d,e){var x=null
return d.CG(B.aD(x,x,x,"fwfh: text-decoration-thickness",x,x,x,e,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),y.z)},
j40(d){if(d instanceof B.fp)switch(A.oX(d)){case"line-through":return D.etm
case"none":return D.etk
case"overline":return D.etn
case"underline":return D.etl}return null},
jeP(d){var x,w,v,u=B.a([],y.cW),t=y.A,s=B.a([],t)
for(x=d.length,w=0;w<d.length;d.length===x||(0,B.a7)(d),++w){v=d[w]
if(v instanceof B.acl){u.push(s)
s=B.a([],t)}else s.push(v)}if(s.length!==0)u.push(s)
return u},
jkv(d,e){var x,w,v=B.a([],y.cp)
for(x=J.b1(e);x.G();){w=A.jhZ(x.gT(x))
if(w!=null)v.push(w)}return d.J6(new A.bIv(v),y.O)},
jhZ(d){var x,w,v,u,t,s,r=J.L(d)
if(r.gE(d)<2||r.gE(d)>4)return null
x=A.bdr(r.ga7(d))
if(x==null){x=A.bdr(r.ga_(d))
w=x!=null?1:0}else w=0
v=x==null
if(v&&r.gE(d)>3)return null
u=A.ok(A.i0b(d,w))
t=A.ok(A.i0b(d,1+w))
if(u==null||t==null)return null
s=A.ok(A.i0b(d,2+w))
r=s==null?D.hj:s
return new A.amp(r,v?D.Ve:x,u,t)},
jkW(d,e){var x=d!==C.cG
switch(e){case"top":case"super":return x?C.cv:C.j4
case"middle":return x?C.bZ:C.ck
case"bottom":case"sub":return x?C.nP:C.hg}return null},
jl_(d){switch(d){case"top":case"sub":return C.a4d
case"super":case"bottom":return C.eD
case"middle":return C.kd}return null},
j3t(d,e){var x=null
return e==null?d:d.CG(B.aD(x,x,B.o(e).ax.b,"fwfh: a[href] default color",x,x,x,x,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),y.z)},
j3s(d){return D.dAT},
j3r(d,e){return d.J6(e,y.g)},
j3u(d){d.l6(0,new A.aUr(d))
return d},
j3w(d){if(d.gac(0))return d
d.a5K(A.SF(d,A.Et(new A.dKn(d),null,"summary--inlineMarker",null),C.kd,C.b9))
return d},
j3v(d,e){$.i96().j(0,e,!0)
return!0},
j3x(d){var x=d.b,w=x.h(0,"color"),v=x.h(0,"face"),u=x.h(0,"size"),t=D.dUA.h(0,u==null?"":u)
u=y.N
u=B.D(u,u)
if(w!=null)u.j(0,"color",w)
if(v!=null)u.j(0,"font-family",v)
if(t!=null)u.j(0,"font-size",t)
return u},
j3y(d){var x="height",w="width",v=d.b,u=v.h(0,x),t=v.h(0,w),s=y.N
s=B.D(s,s)
s.j(0,x,"auto")
s.j(0,"min-width","0px")
s.j(0,"min-height","0px")
s.j(0,w,"auto")
if(u!=null)s.j(0,x,u+"px")
if(t!=null)s.j(0,w,t+"px")
return s},
j3z(d,e){var x=$.hWT()
B.pB(d)
x=x.a.get(d)
return x==null?e:x},
j3A(d){var x,w=$.hWT()
B.pB(d)
x=w.a.get(d)
if(x==null)return
d.l6(0,A.SF(d,x,C.oV,C.b9))},
j3B(d){var x,w,v=d.b,u=$.i97()
B.pB(d)
u=u.a.get(d)
if(u==null)u=0
if(d.x==="ol"){x=v.h(0,"type")
x=A.isn(x==null?"":x)
w=x==null?"decimal":x}else if(u===0)w="disc"
else{x=u===1?"circle":"square"
w=x}x=y.N
x=B.D(x,x)
x.j(0,"display","block")
x.j(0,"list-style-type",w)
x.j(0,"padding-inline-start","40px")
if(u===0)x.j(0,"margin","1em 0")
return x},
isn(d){switch(d){case"a":return"lower-alpha"
case"A":return"upper-alpha"
case"1":return"decimal"
case"i":return"lower-roman"
case"I":return"upper-roman"}return null},
cis(d){var x,w=y.d,v=d.H3(w)
if(v==null){x=d.a.b
w=d.wv(new A.b8j(x.K(0,"reversed"),A.i7z(x,"start"),0,0),w)}else w=v
return w},
j3C(d){return D.dZR},
j3D(d){var x,w=d.ga_(0),v=w==null?null:w.gcv(w)
w=d.ga7(0)
x=w==null?null:w.gcv(w)
if(v==null||x==null){d.a5K(new A.Ms("\u201c",d))
d.l6(0,new A.Ms("\u201d",d))
return d}v.a5K(new A.Ms("\u201c",v))
x.l6(0,new A.Ms("\u201d",x))
return d},
j3E(d){var x=y.N
return B.x(["display","none"],x,x)},
j3F(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=d.f.YX(0),l=B.a([],y.J)
for(x=d.gbr(0),w=x.length,v=y.s,u=y.P,t=d.b,s=0;s<x.length;x.length===w||(0,B.a7)(x),++s){r=x[s]
if(!A.jes(r)||l.length===0){if(l.length===0&&r instanceof A.MP)m.l6(0,r)
else l.push(r)
continue}q=d.bH8(!1,n,new A.ap6(t,n),d)
for(p=l.length,o=0;o<l.length;l.length===p||(0,B.a7)(l),++o)q.l6(0,l[o])
C.d.ag(l)
p=B.a([new A.dKA(u.a(r),q)],v)
m.l6(0,new A.aBd(C.oV,C.b9,new A.ph("ruby",p,n,n),m))}for(x=l.length,s=0;s<l.length;l.length===x||(0,B.a7)(l),++s)m.l6(0,l[s])
return m},
j3G(d,e){var x=e.a,w=x.a,v=w instanceof B.fX?w:null
if(v!==d.a)return
switch(x.x){case"rp":e.fI(0,D.bqP)
break
case"rt":e.b.of(A.jx5(),0.5,y.i)
break}},
jes(d){if(!(d instanceof A.AG))return!1
if(d.gac(0))return!1
return d.a.x==="rt"},
ilP(d){var x=null,w=new A.bHH(d)
w.b=D.br9
w.c=D.br1
w.d=A.vS(x,"table",x,A.jo_(),w.gevw(),x,x,x,A.jnZ(),-299997e10)
return w},
j3H(d){var x,w,v=d.b,u=A.bds(v,"border")
if(u==null)u=0
x=A.bds(v,"cellspacing")
w=y.N
w=B.D(w,w)
if(u>0)w.j(0,"border",B.b(u)+"px solid")
w.j(0,"border-collapse","separate")
w.j(0,"border-spacing",B.b(x==null?2:x)+"px")
return w},
j3I(d){var x=y.N
return B.x(["border","inherit"],x,x)},
i2f(d){var x,w,v,u,t,s,r,q,p
for(x=d.a,w=J.ber(A.hZR(x)),v=w.$ti,w=new B.bT(w,w.gE(0),v.i("bT<ah.E>")),v=v.i("ah.E");w.G();){u=w.d
if(u==null)u=v.a(u)
t=u.f
s=u.b
if((t?"*"+s.b:s.b)==="display"){r=A.HG(u)
q=r.length===1?C.d.ga_(r):null
p=q instanceof B.fp?A.oX(q):null
if(p!=null)return p}}switch(x.x){case"tr":return"table-row"
case"thead":return"table-header-group"
case"tbody":return"table-row-group"
case"tfoot":return"table-footer-group"
case"th":case"td":return"table-cell"
case"caption":return"table-caption"}return null},
j3J(d){return d!=null},
j3K(d,e){var x=A.bds(d.a.b,"border")
if((x==null?0:x)>0)switch(e.a.x){case"td":case"th":e.fI(0,D.brb)
break}},
j3L(d,e){var x=null,w=e.a.x
if(w==="td"||w==="th")e.fI(0,A.vS(x,"table--cellpadding--child",new A.dKB(A.bds(d.a.b,"cellpadding")),x,x,x,x,x,x,-2999974e9))},
j3M(d,e){var x,w,v,u,t=null,s="table-header-group",r=e.a.a,q=r instanceof B.fX?r:t
if(q!==d.a)return
x=A.i4E(d)
w=A.i2f(e)
switch(w){case"table-caption":e.fI(0,A.vS(!0,"caption",t,t,t,t,new A.dKC(x),t,t,10))
break
case"table-header-group":case"table-row-group":case"table-footer-group":if(w===s)v=x.d
else v=w==="table-row-group"?x.cbV():x.c
q=v.b
q===$&&B.e()
e.fI(0,q)
break
case"table-row":q=x.cbV()
u=A.i41()
q.a.push(u)
q=u.b
q===$&&B.e()
e.fI(0,q)
break
case"table-cell":q=x.a;(q.length!==0?C.d.ga7(q):x.cbV()).gfpU().cUL(e)
break}},
j3N(d){A.dG6(d)
$.cjX().j(0,d,!0)
return d},
i4E(d){var x=y.ar,w=d.H3(x)
return w==null?d.wv(new A.cax(B.a([],y.dt),B.a([],y.p),A.i42("table-footer-group"),A.i42("table-header-group"),B.a([],y.fL),B.D(y.S,y.bS)),x):w},
i41(){var x=null,w=new A.b8k(B.a([],y.ad))
w.b=A.vS(!0,"tr",x,x,x,x,x,x,w.gev4(),1000014e9)
w.c=A.vS(!0,"td",x,x,x,x,w.get7(),x,x,10)
return w},
jaw(d){var x,w=d.b.h(0,"valign")
if(w!=null){x=y.N
x=B.x(["vertical-align",w],x,x)}else x=C.cI
return x},
i42(d){var x=null,w=new A.b8l(B.a([],y.g7))
w.b=A.vS(x,d,x,x,x,x,x,x,w.geu5(),1000015e9)
return w},
bfc:function bfc(d,e,f){this.a=d
this.b=e
this.c=f},
cpw:function cpw(d){this.a=d},
cpy:function cpy(d){this.a=d},
cpu:function cpu(d,e){this.a=d
this.b=e},
cpx:function cpx(d){this.a=d},
cpv:function cpv(d){this.a=d},
cpz:function cpz(d){this.a=d},
bfe:function bfe(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cpp:function cpp(d){this.a=d},
cpq:function cpq(d){this.a=d},
cpr:function cpr(d){this.a=d},
cps:function cps(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
cpt:function cpt(){},
bRk:function bRk(d){this.a=d},
aGK:function aGK(d,e,f,g,h,i,j){var _=this
_.r=d
_.w=e
_.x=f
_.c=g
_.d=h
_.e=i
_.a=j},
cF8:function cF8(d){this.a=d},
cF9:function cF9(){},
dFY:function dFY(d){this.a=d},
dG_:function dG_(d){this.a=d},
dFZ:function dFZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dG0:function dG0(){},
b84:function b84(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fzm:function fzm(d,e){this.a=d
this.b=e
this.c=0},
aiu:function aiu(d,e){this.a=d
this.b=e},
dG1:function dG1(d){this.a=d},
dG4:function dG4(d){this.a=d},
dG3:function dG3(d,e,f){this.a=d
this.b=e
this.c=f},
dG5:function dG5(d){this.a=d},
dG2:function dG2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dG7:function dG7(d){this.a=d},
dGb:function dGb(d){this.a=d},
dGa:function dGa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dG8:function dG8(d){this.a=d},
dG9:function dG9(){},
aYu:function aYu(d,e){this.a=d
this.b=e},
dGc:function dGc(d){this.a=d},
dGe:function dGe(d){this.a=d},
dGd:function dGd(d,e){this.a=d
this.b=e},
dGf:function dGf(){},
hBf:function hBf(d,e){this.a=d
this.b=e},
hBg:function hBg(d,e){this.a=d
this.b=e},
dGh:function dGh(d){this.a=d},
dGj:function dGj(d){this.a=d},
dGi:function dGi(d,e,f){this.a=d
this.b=e
this.c=f},
dGk:function dGk(){},
i25:function i25(){},
dGl:function dGl(d){this.a=d},
dGm:function dGm(d,e){this.a=d
this.b=e},
dGn:function dGn(d,e){this.a=d
this.b=e},
ayB:function ayB(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.c=h
_.a=i},
c9K:function c9K(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
b85:function b85(d,e){this.a=d
this.b=e},
XF:function XF(d,e,f){this.a=d
this.b=e
this.c=f},
dGo:function dGo(d){this.a=d},
dGr:function dGr(d){this.a=d},
dGq:function dGq(d,e,f){this.a=d
this.b=e
this.c=f},
dGs:function dGs(d){this.a=d},
dGp:function dGp(d,e,f){this.a=d
this.b=e
this.c=f},
dKg:function dKg(d){this.a=d},
dKk:function dKk(d){this.a=d},
dKi:function dKi(d,e){this.a=d
this.b=e},
dKj:function dKj(d,e,f){this.a=d
this.b=e
this.c=f},
dKl:function dKl(d){this.a=d},
dKh:function dKh(d,e,f){this.a=d
this.b=e
this.c=f},
aUr:function aUr(d){this.a=d},
dKm:function dKm(d){this.a=d},
dKp:function dKp(d){this.a=d},
dKo:function dKo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKq:function dKq(){},
dKn:function dKn(d){this.a=d},
dKr:function dKr(d){this.a=d},
dKs:function dKs(d){this.a=d},
dKt:function dKt(d){this.a=d},
dKw:function dKw(d){this.a=d},
dKv:function dKv(d,e){this.a=d
this.b=e},
dKu:function dKu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b8j:function b8j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKx:function dKx(d){this.a=d},
dKz:function dKz(d){this.a=d},
dKy:function dKy(d,e){this.a=d
this.b=e},
dKA:function dKA(d,e){this.a=d
this.b=e},
bHH:function bHH(d){var _=this
_.a=d
_.d=_.c=_.b=$},
dKE:function dKE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dKD:function dKD(d){this.a=d},
dKF:function dKF(d,e,f){this.a=d
this.b=e
this.c=f},
dKG:function dKG(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
dKB:function dKB(d){this.a=d},
dKC:function dKC(d){this.a=d},
b8k:function b8k(d){this.a=d
this.c=this.b=$},
b8l:function b8l(d){this.a=d
this.b=$},
cax:function cax(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.w=_.r=0},
cay:function cay(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
jxm(d){if(d instanceof B.fp){if(d instanceof B.zu)return C.m.io(B.e5(d.c))
switch(A.oX(d)){case"none":return-1}}return null},
ixq(d){switch(d instanceof B.fp?A.oX(d):null){case"dotted":return C.qR
case"dashed":return C.bav
case"double":return C.a7u
case"solid":return C.bat}return null},
jxn(d){if(d instanceof B.fp)switch(A.oX(d)){case"clip":return C.eW
case"ellipsis":return C.Z}return null},
cjs(d){var x,w,v,u,t,s,r,q=y.g8,p=d.H3(q)
if(p!=null)return p
for(x=d.w.gaq(0),w=x.$ti.c,v=D.bUQ;x.G();){u=x.d
if(u==null)u=w.a(u)
t=u.f
s=u.b
r=t?"*"+s.b:s.b
if(!C.c.ao(r,"border"))continue
v=C.c.c4(r,"radius")?A.jkX(v,u):A.jkY(v,u)}d.wv(v,q)
return v},
jkY(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=C.c.aZ(e.gcjW(),6),j=k.length===0
if(j){x=A.uQ(e)
w=(x instanceof B.fp?A.oX(x):l)==="inherit"}else w=!1
if(w)return D.bUR
for(w=A.HG(e),v=w.length,u=l,t=D.Ve,s=D.bUV,r=0;r<w.length;w.length===v||(0,B.a7)(w),++r){q=w[r]
if((q instanceof B.fp?A.oX(q):l)==="none"){t=l
u=t
s=D.hj
break}p=A.ixq(q)
if(p!=null){u=p
continue}o=A.ok(q)
if(o!=null){s=o
continue}n=A.bdr(q)
if(n!=null){t=n
continue}}m=new A.aHf(t,u,s)
if(j)return d.f3L(m)
switch(k){case"-bottom":case"-block-end":return d.Ap(m)
case"-inline-end":return d.bGe(m)
case"-inline-start":return d.bGf(m)
case"-left":return d.aj1(m)
case"-right":return d.aj3(m)
case"-top":case"-block-start":return d.TY(m)}return d},
jkX(d,e){var x,w,v,u,t,s,r,q,p,o,n,m
switch(e.gcjW()){case"border-radius":x=A.HG(e)
w=C.d.k0(x,new A.hFc())
v=B.c4(8,D.hj,!1,y.bT)
u=B.Y(x)
if(w===-1){u=u.i("E<1,tO>")
u=B.M(new B.E(x,new A.hFd(),u),u.i("ah.E"))
u.$flags=1
t=u
u=t.length
if(u!==0)for(s=0;s<8;++s)v[s]=t[0]
if(u>1){r=t[1]
v[2]=r
v[3]=r
v[6]=r
v[7]=r}if(u>2){r=t[2]
v[4]=r
v[5]=r}if(u>3){u=t[3]
v[6]=u
v[7]=u}}else{u=u.c
r=B.fq(x,0,B.fY(w,"count",y.S),u)
q=r.$ti.i("E<ah.E,tO>")
r=B.M(new B.E(r,new A.hFe(),q),q.i("ah.E"))
r.$flags=1
p=r
r=p.length
if(r!==0)for(s=0;s<4;++s)v[s*2]=p[0]
if(r>1){q=p[1]
v[2]=q
v[6]=q}if(r>2)v[4]=p[2]
if(r>3)v[6]=p[3]
u=B.fq(x,w+1,null,u)
r=u.$ti.i("E<ah.E,tO>")
u=B.M(new B.E(u,new A.hFf(),r),r.i("ah.E"))
u.$flags=1
o=u
u=o.length
if(u!==0)for(s=0;s<4;++s)v[s*2+1]=o[0]
if(u>1){r=o[1]
v[3]=r
v[7]=r}if(u>2)v[5]=o[2]
if(u>3)v[7]=o[3]}u=v[0]
r=v[1]
u=u===D.hj&&r===D.hj?D.hX:new A.UM(u,r)
r=v[2]
q=v[3]
r=r===D.hj&&q===D.hj?D.hX:new A.UM(r,q)
q=v[4]
n=v[5]
q=q===D.hj&&n===D.hj?D.hX:new A.UM(q,n)
n=v[6]
m=v[7]
return d.fbX(n===D.hj&&m===D.hj?D.hX:new A.UM(n,m),q,u,r)
case"border-bottom-left-radius":return d.f6X(A.hFg(e))
case"border-bottom-right-radius":return d.f6Y(A.hFg(e))
case"border-top-left-radius":return d.f6Z(A.hFg(e))
case"border-top-right-radius":return d.f7_(A.hFg(e))}return d},
hFg(d){var x,w,v,u=A.HG(d),t=u.length
if(t===2){x=A.ok(u[0])
if(x==null)x=D.hj
w=A.ok(u[1])
if(w==null)w=D.hj
if(x===D.hj&&w===D.hj)return D.hX
return new A.UM(x,w)}else if(t===1){v=A.ok(C.d.ga_(u))
if(v==null)v=D.hj
if(v===D.hj)return D.hX
return new A.UM(v,v)}return D.hX},
bdr(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null
if(d==null)return h
if(d instanceof B.ao2)switch(d.d){case"hsl":case"hsla":x=A.idH(d)
w=J.L(x)
if(w.gE(x)>=3){v=w.h(x,0)
if(v instanceof B.zu)u=A.isP(B.e5(v.c),h)
else u=v instanceof B.aDG?A.isP(B.e5(v.c),v.f):h
t=w.h(x,1)
s=t instanceof B.Wq?C.m.a4(B.e5(t.c)/100,0,1):h
r=w.h(x,2)
q=r instanceof B.Wq?C.m.a4(B.e5(r.c)/100,0,1):h
p=w.gE(x)>=4?A.isO(w.h(x,3)):1
if(u!=null&&s!=null&&q!=null&&p!=null)return new A.SX(new B.jN(p,u,s,q).cY())}break
case"rgb":case"rgba":x=A.idH(d)
w=J.L(x)
if(w.gE(x)>=3){o=A.i54(w.h(x,0))
n=A.i54(w.h(x,1))
m=A.i54(w.h(x,2))
l=w.gE(x)>=4?A.isO(w.h(x,3)):1
if(o!=null&&n!=null&&m!=null&&l!=null)return new A.SX(B.bB(C.m.io(l*255),o,n,m))}break}else if(d instanceof B.aou){k=d.d.toUpperCase()
switch(k.length){case 3:return new A.SX(B.ct(B.eo("0xFF"+A.i5y(k),h)))
case 4:j=k[3]
i=C.c.a3(k,0,3)
return new A.SX(B.ct(B.eo("0x"+A.i5y(j)+A.i5y(i),h)))
case 6:return new A.SX(B.ct(B.eo("0xFF"+k,h)))
case 8:return new A.SX(B.ct(B.eo("0x"+C.c.a3(k,6,8)+C.c.a3(k,0,6),h)))}}else if(d instanceof B.fp)switch(A.oX(d)){case"currentcolor":return D.Ve
case"transparent":return D.eM6}return h},
isO(d){var x
if(d instanceof B.zu)x=B.e5(d.c)
else x=d instanceof B.Wq?B.e5(d.c)/100:null
return x==null?null:C.m.a4(x,0,1)},
isP(d,e){var x
switch(e){case 609:x=d*57.29577951308232
break
case 610:x=d*0.9
break
case 611:x=d*360
break
default:x=d}while(x<0)x+=360
return C.m.am(x,360)},
i54(d){var x
if(d instanceof B.zu)x=C.m.io(B.e5(d.c))
else x=d instanceof B.Wq?C.m.io(B.e5(d.c)/100*255):null
return x==null?null:C.k.a4(x,0,255)},
i5y(d){var x,w,v
for(x=d.length,w=0,v="";w<x;++w)v+=C.c.b7(d[w],2)
return v.charCodeAt(0)==0?v:v},
ok(d){var x
if(d==null)return null
if(d instanceof B.aIA)return new A.tO(B.e5(d.c),D.Xd)
else if(d instanceof B.a1D){x=B.e5(d.c)
switch(d.f){case 606:return new A.tO(x,D.bUT)
case 602:return new A.tO(x,D.Xe)}}else if(d instanceof B.fp){if(d instanceof B.zu){if(B.e5(d.c)===0)return D.hj}else if(d instanceof B.Wq)return new A.tO(B.e5(d.c),D.D8)
switch(A.oX(d)){case"auto":return D.bUU}}return null},
jhW(d){var x,w,v,u,t,s=null
switch(d.length){case 4:x=A.ok(d[0])
w=A.ok(d[1])
return new A.a8L(A.ok(d[2]),w,A.ok(d[3]),s,s,x)
case 2:v=A.ok(d[0])
u=A.ok(d[1])
return new A.a8L(v,u,u,s,s,v)
case 1:t=A.ok(d[0])
return new A.a8L(t,t,t,s,s,t)}return s},
jhX(d,e,f){var x,w=A.ok(f)
if(w==null)return d
x=d==null?D.bUS:d
switch(e){case"-bottom":case"-block-end":return x.Ap(w)
case"-inline-end":return x.bGe(w)
case"-inline-start":return x.bGf(w)
case"-left":return x.aj1(w)
case"-right":return x.aj3(w)
case"-top":case"-block-start":return x.TY(w)}return x},
hVN(d,e){var x,w,v,u,t,s,r,q,p,o,n
for(x=d.w.gaq(0),w=e.length,v=x.$ti.c,u=null;x.G();){t=x.d
if(t==null)t=v.a(t)
s=t.f
r=t.b
q=s?"*"+r.b:r.b
if(!C.c.ao(q,e))continue
p=C.c.aZ(q,w)
if(p.length===0)u=A.jhW(A.HG(t))
else{o=A.HG(t)
n=o.length===1?C.d.ga_(o):null
if(n!=null)u=A.jhX(u,p,n)}}return u},
hFc:function hFc(){},
hFd:function hFd(){},
hFe:function hFe(){},
hFf:function hFf(){},
jem(d){var x,w,v=d.gcv(d)
if(!(d instanceof A.MP))return v.b
if(d===v.ga_(0))return null
if(d===v.ga7(0)){x=A.irk(d)
if(x!=null){for(w=v;w=w.f,w.ga7(0)===d;);if(w===x.gcv(x))return x.gcv(x).b
else return null}}return v.b},
irk(d){var x=d.gjf(0)
for(;;){if(!(x!=null&&x instanceof A.MP))break
x=x.gjf(0)}return x},
irq(d,e,f,g){var x,w,v,u,t,s,r,q,p=d.length
if(p===0)return""
x=new B.cK("")
w=p-1
p=e===D.ahp
v=0
if(!p){if(f)for(;v<=w;++v)if(!d[v].b)break
if(g)for(;w>=v;--w)if(!d[w].b)break}for(u=e.a,t=v;t<=w;++t){s=d[t]
if(s.b)switch(u){case 0:if(!s.c)x.a+=" "
break
case 1:x.a+="\xa0"
break
case 2:x.a+=s.a
break}else switch(u){case 0:x.a+=s.a
break
case 1:r=B.at(s.a," ","\xa0")
x.a+=r
break
case 2:x.a+=s.a
break}}u=x.a
q=u.charCodeAt(0)==0?u:u
if(p)return q
if(g)return C.c.hT(q,B.a1("\\n$",!0,!1,!1,!1),"")
return q},
cQp:function cQp(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null
_.w=_.r=_.f=_.e=$
_.x=!1
_.y=$},
cQt:function cQt(d,e,f){this.a=d
this.b=e
this.c=f},
cQu:function cQu(d,e,f){this.a=d
this.b=e
this.c=f},
cQs:function cQs(d,e,f){this.a=d
this.b=e
this.c=f},
cQr:function cQr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cQq:function cQq(){},
ait:function ait(d,e,f){this.a=d
this.b=e
this.c=f},
i_F(d,e,f){var x=B.a([],y.gB),w=B.a([new A.cVT(d,e)],y.s)
x.push(d)
return new A.PW(e,x,f,w,null,null)},
ig5(d,e,f,g){var x,w=null,v=e instanceof B.N?e.f:w
if(v==null)v=0
x=f.fU(g.aC(d))
if(x!=null&&x>v)return new B.N(w,x,w,w)
return e},
ili(d,e){var x,w=$.i8w()
B.pB(d)
x=w.a.get(d)
if(x==null)x=0
if(e)++x
else x=x>0?x-1:0
w.j(0,d,x)},
PW:function PW(d,e,f,g,h,i){var _=this
_.r=d
_.w=e
_.c=f
_.d=g
_.e=h
_.a=i},
cVT:function cVT(d,e){this.a=d
this.b=e},
cVU:function cVU(d,e){this.a=d
this.b=e},
cF7:function cF7(){},
ds2:function ds2(){},
idI(d,e,f){return new A.aHh(e,f,d,null)},
ipD(d,e,f,g,h,i,j){var x=new A.b5D(d,e,f,g,h,i,j,null,new B.cA(),B.bJ(y.v))
x.bQ()
x.scT(null)
return x},
amm:function amm(d,e){this.c=d
this.a=e},
bk_:function bk_(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.c=k
_.a=l},
aHh:function aHh(d,e,f,g){var _=this
_.f=d
_.r=e
_.b=f
_.a=g},
b5D:function b5D(d,e,f,g,h,i,j,k,l,m){var _=this
_.Z=d
_.aO=e
_.ba=f
_.cn=g
_.dB=h
_.eA=i
_.hq=j
_.ab$=k
_.dy=l
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=m
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
cH6:function cH6(){},
bTu:function bTu(){},
aZV:function aZV(d){this.a=d},
a5n:function a5n(d){this.a=d},
br_:function br_(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
axR:function axR(d,e,f,g,h){var _=this
_.Z=d
_.aO=e
_.ab$=f
_.dy=g
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=h
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
aae:function aae(d,e,f){this.c=d
this.d=e
this.a=f},
bYd:function bYd(){var _=this
_.d=!1
_.e=$
_.c=_.a=null},
eDe:function eDe(d){this.a=d},
eDd:function eDd(d,e){this.a=d
this.b=e},
br5:function br5(d,e){this.c=d
this.a=e},
aaf:function aaf(d,e){this.c=d
this.a=e},
bra:function bra(d,e){this.c=d
this.a=e},
cXJ:function cXJ(d){this.a=d},
b1q:function b1q(d,e,f,g){var _=this
_.f=d
_.r=e
_.b=f
_.a=g},
itJ(d,e,f){switch(d.a){case 0:switch(e){case C.ad:return!0
case C.cG:return!1
case null:case void 0:return null}break
case 1:switch(f){case C.n:return!0
case C.Tm:return!1
case null:case void 0:return null}break}},
j9e(d,e,f,g,h,i,j,k){var x,w=null,v=B.bJ(y.dO),u=J.lc(4,y.ap)
for(x=0;x<4;++x)u[x]=new B.wz(w,C.Q,C.ad,new B.lm(1),w,w,w,w,C.cj,w)
v=new A.b1r(f,g,h,e,j,k,i,d,v,u,!0,0,w,w,new B.cA(),B.bJ(y.v))
v.bQ()
v.D(0,w)
return v},
br7:function br7(d,e,f,g,h,i,j){var _=this
_.e=d
_.f=e
_.w=f
_.x=g
_.z=h
_.c=i
_.a=j},
b1r:function b1r(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
_.C=d
_.ak=e
_.ah=f
_.az=g
_.aF=h
_.aU=i
_.aS=j
_.X=0
_.a1=k
_.aT=l
_.xi$=m
_.OO$=n
_.ez$=o
_.aM$=p
_.fu$=q
_.dy=r
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=s
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
eDi:function eDi(){},
eDg:function eDg(){},
eDh:function eDh(){},
eDf:function eDf(){},
eJi:function eJi(d,e,f){this.a=d
this.b=e
this.c=f},
cfs:function cfs(){},
cft:function cft(){},
bbj:function bbj(){},
br9:function br9(d,e,f){this.e=d
this.c=e
this.a=f},
T8:function T8(d,e,f){this.hE$=d
this.b4$=e
this.a=f},
ayh:function ayh(d,e,f,g,h,i){var _=this
_.C=d
_.ez$=e
_.aM$=f
_.fu$=g
_.dy=h
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=i
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
cfA:function cfA(){},
cfB:function cfB(){},
aag:function aag(d,e,f){this.d=d
this.e=e
this.a=f},
b2p:function b2p(d,e,f,g,h){var _=this
_.C=d
_.ak=null
_.ah=e
_.az=f
_.dy=g
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=h
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
aah:function aah(d,e){this.a=d
this.b=e},
ipL(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m
if(d==null)return new B.av(B.aK(0,e.a,e.b),B.aK(0,e.c,e.d))
x=e.d
w=new B.aZ(0,e.b,0,x)
v=d.b
v.toString
u=y.l
u.a(v)
t=f.$2(d,w)
s=v.b4$
r=t.b
q=w.aNV(x-r)
if(s!=null){x=s.b
x.toString
u.a(x)
p=f.$2(s,q)
o=x}else{o=null
p=C.be}x=p.b
u=t.a
n=p.a
m=Math.max(u,n)
if(d.fy!=null){v.a=new B.V((m-u)/2,x)
if(o!=null)o.a=new B.V((m-n)/2,0)}return e.cr(new B.av(m,r+x))},
aoB:function aoB(d,e){this.c=d
this.a=e},
Tl:function Tl(d,e,f){this.hE$=d
this.b4$=e
this.a=f},
b6p:function b6p(d,e,f,g,h){var _=this
_.ez$=d
_.aM$=e
_.fu$=f
_.dy=g
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=h
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
che:function che(){},
chf:function chf(){},
iVd(d,e,f,g,h,i,j,k,l){return new A.zb(d,f,g,j,k,l,h,e,i)},
jeo(d){return new B.aE(d,new A.hk0(),B.Y(d).i("aE<1>"))},
jeh(d,e){return d+e},
i4F(d,e,f,g){var x,w,v,u,t,s
if(isNaN(g))x=0/0
else{w=f.f
x=(g-(w-1)*e.gbF7(0))/w}for(w=f.f,v=isNaN(x),u=f.r,t=0;t<w;++t){s=u+t
if(v){if(d[s]<=0.01)d[s]=x}else d[s]=Math.max(d[s],x)}},
i4G(d,e){var x=e.r,w=x+e.f
B.hv(x,w,d.length,null,null)
w=B.fq(d,x,w,B.Y(d).c)
return w.gac(0)?0:w.hj(0,A.NO())},
jau(d,e,f){var x,w,v,u,t,s,r,q=d/f.length,p=B.Y(e).i("E<1,ai>")
p=B.M(new B.E(e,new A.fAN(q),p),p.i("ah.E"))
p.$flags=1
x=p
p=new B.h1(f,B.Y(f).i("h1<1>"))
w=y.i
v=p.gep(p).bD(0,new A.fAO(q,x),w).cd(0,!1)
u=Math.max(0,d-(C.d.gac(v)?0:C.d.hj(v,A.NO())))
if(u<=0.01)return v
p=v.length
t=B.c4(p,0,!1,w)
for(w=v.length,s=0;s<w;++s)t[s]=Math.max(0,x[s]-v[s])
r=C.d.gac(t)?0:C.d.hj(t,A.NO())
if(r<=0.01)return v
for(s=0;s<p;++s){w=t[s]
if(w<=0.01)continue
v[s]=Math.min(x[s],v[s]+w/r*u)}return v},
brb:function brb(d,e,f,g,h,i,j){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.c=i
_.a=j},
aoC:function aoC(d,e,f,g,h,i,j,k,l){var _=this
_.f=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.b=k
_.a=l},
zb:function zb(d,e,f,g,h,i,j,k,l){var _=this
_.f=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.b=k
_.a=l},
hk0:function hk0(){},
yg:function yg(d,e,f){var _=this
_.e=null
_.f=1
_.r=0
_.w=!1
_.x=1
_.y=0
_.z=null
_.hE$=d
_.b4$=e
_.a=f},
b8h:function b8h(d,e){this.a=d
this.b=e},
cav:function cav(d,e,f){this.a=d
this.b=e
this.c=f},
fAP:function fAP(d){this.a=d},
fAQ:function fAQ(){},
fAR:function fAR(){},
fAN:function fAN(d){this.a=d},
fAO:function fAO(d,e){this.a=d
this.b=e},
fAD:function fAD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fAE:function fAE(d,e,f){this.a=d
this.b=e
this.c=f},
cas:function cas(d,e){this.a=d
this.b=e},
fAF:function fAF(d,e,f){this.a=d
this.b=e
this.c=f},
b8i:function b8i(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.C=d
_.ak=e
_.ah=f
_.az=g
_.aF=h
_.aU=i
_.aS=j
_.ez$=k
_.aM$=l
_.fu$=m
_.dy=n
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=o
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
chx:function chx(){},
chy:function chy(){},
hjX(d){var x=d.N(y.eb)
x=x==null?null:x.f
return x==null?B.D(y.S,y.F):x},
aWr:function aWr(d,e){this.c=d
this.a=e},
bK9:function bK9(d,e,f){this.e=d
this.c=e
this.a=f},
ccU:function ccU(d){this.d=d
this.c=this.a=null},
b9u:function b9u(d,e,f){this.f=d
this.b=e
this.a=f},
ccS:function ccS(d,e){this.c=d
this.a=e},
ccT:function ccT(d,e,f,g){var _=this
_.Z=d
_.ab$=e
_.dy=f
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=g
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
YW:function YW(d,e,f,g,h){var _=this
_.Z=d
_.aO=e
_.ba=null
_.cn=0
_.ab$=f
_.dy=g
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=h
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
fJP:function fJP(){},
fJQ:function fJQ(){},
fJR:function fJR(d){this.a=d},
fJS:function fJS(d){this.a=d},
hP8(d){var x=B.is0(d)
B.i4v(null,null)
return B.ipn(B.dCE(x,null),x).wf(0)},
jn7(d,e){var x=null
return d.CG(B.aD(x,x,e,"fwfh: color",x,x,x,x,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),y.z)},
jqr(d,e){var x=null,w=J.L(e),v=w.gbO(e)?w.ga_(e):x
return d.CG(B.aD(x,x,x,"fwfh: font-family",x,x,x,x,v,w.qm(e,1).cd(0,!1),x,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),y.z)},
jqu(d,e){var x=null
return d.CG(B.aD(x,x,x,"fwfh: font-size",x,x,x,x,x,x,x,A.jf5(d,e),x,x,x,x,x,!0,x,x,x,x,x,x,x,x),y.z)},
jqv(d,e){var x=null
return d.CG(B.aD(x,x,x,"fwfh: font-size "+B.b(e)+"em",x,x,x,x,x,x,x,A.irJ(d,new A.tO(e,D.Xd)),x,x,x,x,x,!0,x,x,x,x,x,x,x,x),y.z)},
jqw(d,e){var x=null
return d.CG(B.aD(x,x,x,"fwfh: font-size "+e,x,x,x,x,x,x,x,A.irK(d,e),x,x,x,x,x,!0,x,x,x,x,x,x,x,x),y.z)},
jf5(d,e){var x,w=A.ok(e)
if(w!=null){x=A.irJ(d,w)
if(x!=null)return x}if(e instanceof B.fp)return A.irK(d,A.oX(e))
return null},
irJ(d,e){var x,w=d.a
if(w==null)w=null
else{w=w.jR(0,y.j)
w=w==null?null:w.r}x=d.jR(0,y.Z)
return e.b3I(d,w,x==null?null:x.a)},
irK(d,e){var x,w,v=null
switch(e){case"xx-large":return A.aBw(d,2)
case"x-large":return A.aBw(d,1.5)
case"large":return A.aBw(d,1.125)
case"medium":return A.aBw(d,1)
case"small":return A.aBw(d,0.8125)
case"x-small":return A.aBw(d,0.625)
case"xx-small":return A.aBw(d,0.5625)
case"larger":x=d.a
if(x==null)w=v
else{x=x.jR(0,y.j)
w=x==null?v:x.r}return w!=null?w*1.2:v
case"smaller":x=d.a
if(x==null)w=v
else{x=x.jR(0,y.j)
w=x==null?v:x.r}return w!=null?w*0.8333333333333334:v}return v},
aBw(d,e){var x,w,v,u
for(x=d,w=x;x!=null;v=x.a,w=x,x=v);u=w.jR(0,y.j)
u=u==null?null:u.r
return u!=null?u*e:null},
jqx(d,e){var x=null
return d.CG(B.aD(x,x,x,"fwfh: font-style",x,x,x,x,x,x,x,x,e,x,x,x,x,!0,x,x,x,x,x,x,x,x),y.z)},
jqz(d,e){var x=null
return d.CG(B.aD(x,x,x,"fwfh: font-weight",x,x,x,x,x,x,x,x,x,x,e,x,x,!0,x,x,x,x,x,x,x,x),y.z)},
jsV(d,e){var x=A.jgN(e)
if(x==null)return d
return d.J6(x,y.W)},
jgN(d){var x,w
if(d instanceof B.fp){if(d instanceof B.zu){x=B.e5(d.c)
if(x>0)return new A.auC(new A.tO(x*100,D.D8))}switch(A.oX(d)){case"normal":return D.etY}}w=A.ok(d)
if(w==null)return null
return new A.auC(w)},
jx0(d,e){switch(e){case"ltr":return d.J6(C.ad,y.w)
case"rtl":return d.J6(C.cG,y.w)}return d},
jqs(d){var x,w,v,u,t=B.a([],y.U)
for(x=d.length,w=0;w<d.length;d.length===x||(0,B.a7)(d),++w){v=d[w]
if(v instanceof B.fp){u=A.oX(v)
if(u.length!==0)t.push(u)}}return t},
jqy(d){switch(d){case"italic":return C.cM
case"normal":return C.eq}return null},
jqA(d){if(d instanceof B.fp){if(d instanceof B.zu)switch(B.e5(d.c)){case 100:return C.vF
case 200:return C.DN
case 300:return C.vG
case 400:return C.b1
case 500:return C.av
case 600:return C.U
case 700:return C.H
case 800:return C.jx
case 900:return C.vH}switch(A.oX(d)){case"bold":return C.H}}return null},
jyc(d,e){return d.J6(e,y.T)},
jyd(d){switch(d){case"normal":return D.KT
case"nowrap":return D.Xg
case"pre":return D.ahp}return null},
i0b(d,e){var x=J.an(d)
if(e>x-1)return null
return J.t(d,e)},
ivA(d){var x,w,v,u,t
if(d<=0||d>3999)return null
for(x=d,w=0,v="";w<13;++w){u=D.dkx[w]
t=C.m.R(x/u)
v+=C.c.b7(D.cYI[w],t)
x-=t*u}return v.charCodeAt(0)==0?v:v}},D
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[17],A)
D=c[40]
A.ca2.prototype={
gcP3(){var x,w=this,v=w.e
if(v===$){x=A.jbv(w.c)
w.e!==$&&B.bm()
w.e=x
v=x}return v},
gb0(d){return this.a}}
A.CK.prototype={
gdb3(){return!0},
ga4F(){return!0},
gjf(d){var x,w,v,u,t,s
for(x=this;;){if(!x.gdb3())return null
w=x.gcv(x).c
if(w==null)w=D.azx
v=C.d.eH(w,x)
if(v===-1)return null
for(u=v+1;u<w.length;++u){t=w[u]
if(t instanceof A.AG){s=t.ga_(0)
if(s!=null)return s}else return t}x=x.gcv(x)}return null},
gbbk(){var x=this.ga4F()
return x==null?null:!x},
k(d){return B.Z(this).k(0)+"#"+B.e4(this)}}
A.q_.prototype={
gTC(){return new B.kt(this.f0m(),y.aV)},
f0m(){var x=this
return function(){var w=0,v=1,u=[],t,s,r,q
return function $async$gTC(d,e,f){if(e===1){u.push(f)
w=v}for(;;)switch(w){case 0:t=x.gbr(0),s=t.length,r=0
case 2:if(!(r<t.length)){w=4
break}q=t[r]
w=q instanceof A.AG?5:7
break
case 5:w=8
return d.bnM(q.gTC())
case 8:w=6
break
case 7:w=9
return d.b=q,1
case 9:case 6:case 3:t.length===s||(0,B.a7)(t),++r
w=2
break
case 4:return 0
case 1:return d.c=u.at(-1),3}}}},
gbr(d){var x=this.c
return x==null?D.azx:x},
ga_(d){var x,w,v,u,t
for(x=this.gbr(0),w=x.length,v=0;v<x.length;x.length===w||(0,B.a7)(x),++v){u=x[v]
t=u instanceof A.AG?u.ga_(0):u
if(t!=null)return t}return null},
gac(d){var x,w,v,u
for(x=this.gbr(0),w=x.length,v=0;v<x.length;x.length===w||(0,B.a7)(x),++v){u=x[v]
if(u instanceof A.AG){if(!u.gac(0))return!1}else return!1}return!0},
ga7(d){var x,w,v,u,t=this.c
if(t==null)return null
for(x=B.Y(t).i("d7<1>"),w=new B.d7(t,x),w=new B.bT(w,w.gE(0),x.i("bT<ah.E>")),x=x.i("ah.E");w.G();){v=w.d
u=v==null?x.a(v):v
if(u instanceof A.AG)u=u.ga7(0)
if(u!=null)return u}return null},
h(d,e){return this.BH(e)},
eZU(d,e){var x=this,w=e.gcv(e)===x?e:e.O3(x),v=x.c;(v==null?x.c=B.a([],y.J):v).push(w)
return e},
l6(d,e){return this.eZU(0,e,y.r)},
fwt(d){var x=this,w=d.gcv(d)===x?d:d.O3(x),v=x.c
C.d.h6(v==null?x.c=B.a([],y.J):v,0,w)
return d},
a5K(d){return this.fwt(d,y.r)},
k(d){var x,w,v,u,t,s=this,r=$.i7M()
B.pB(s)
if(r.a.get(s)!=null)return"BuildTree#"+B.e4(s)+" (circular)"
x=new B.cK("")
r.j(0,s,x)
r="BuildTree#"+B.e4(s)+" "+s.b.k(0)+":\n"
r=x.a+=r
for(w=s.gbr(0),v=w.length,u=0;u<w.length;w.length===v||(0,B.a7)(w),++u){r=w[u].k(0)
r="  "+B.at(r,"\n","\n  ")+"\n"
r=x.a+=r}t=C.c.i3(r.charCodeAt(0)==0?r:r)
$.i7M().j(0,s,null)
return t}}
A.Ms.prototype={
O3(d){return new A.Ms(this.a,d)},
FX(d){return d.djS(0,this.a)},
k(d){return'"'+this.a+'"'},
gcv(d){return this.b}}
A.a4X.prototype={
gcv(d){return this.b}}
A.aBc.prototype={
ga4F(){return!1},
O3(d){return new A.aBc(this.a,d)},
FX(d){var x,w=this.a
d.cGI()
x=d.r
x===$&&B.e()
x.gcv(x)
d.c.push(w)
$.i9k().cK(C.ED,"Added "+B.b(w.gr4())+" widget",null,null)
return null},
k(d){return"WidgetBit.block#"+B.e4(this)+" "+this.a.k(0)}}
A.aBd.prototype={
O3(d){return new A.aBd(this.c,this.d,this.a,d)},
FX(d){return d.foH(this.c,this.d,this.a)},
k(d){return"WidgetBit.inline#"+B.e4(this)+" "+this.a.k(0)}}
A.MP.prototype={
gbbk(){return!0},
O3(d){return new A.MP(this.a,d)},
FX(d){return d.fGo(0,this.a)},
k(d){var x=new B.dp(this.a)
return"Whitespace["+x.au(x," ")+"]#"+B.e4(this)},
gcv(d){return this.b}}
A.ja.prototype={}
A.amn.prototype={
gDg(){var x=this,w=null,v=x.b,u=!1
if((v==null?w:v.gDg())!==!1){v=x.c
if((v==null?w:v.gDg())!==!1){v=x.d
if((v==null?w:v.gDg())!==!1){v=x.e
if((v==null?w:v.gDg())!==!1){v=x.f
if((v==null?w:v.gDg())!==!1){v=x.r
if((v==null?w:v.gDg())!==!1){v=x.w
v=(v==null?w:v.gDg())!==!1&&x.x===D.hX&&x.y===D.hX&&x.z===D.hX&&x.Q===D.hX}else v=u}else v=u}else v=u}else v=u}else v=u}else v=u
return v},
yZ(d,e,f,g,h,i,j,k,a0,a1,a2){var x,w,v,u,t=this,s=null,r=A.P7(t.b,d),q=d!=null,p=q?s:A.P7(t.c,e),o=q?s:A.P7(t.d,f),n=q?s:A.P7(t.e,g),m=q?s:A.P7(t.f,h),l=q?s:A.P7(t.r,a1)
q=q?s:A.P7(t.w,a2)
x=i==null?t.x:i
w=j==null?t.y:j
v=k==null?t.z:k
u=a0==null?t.Q:a0
return new A.amn(t.a,r,p,o,n,m,l,q,x,w,v,u)},
Ap(d){var x=null
return this.yZ(x,d,x,x,x,x,x,x,x,x,x)},
TY(d){var x=null
return this.yZ(x,x,x,x,x,x,x,x,x,x,d)},
aj1(d){var x=null
return this.yZ(x,x,x,x,d,x,x,x,x,x,x)},
aj3(d){var x=null
return this.yZ(x,x,x,x,x,x,x,x,x,d,x)},
f3L(d){var x=null
return this.yZ(d,x,x,x,x,x,x,x,x,x,x)},
bGe(d){var x=null
return this.yZ(x,x,d,x,x,x,x,x,x,x,x)},
bGf(d){var x=null
return this.yZ(x,x,x,d,x,x,x,x,x,x,x)},
fbX(d,e,f,g){var x=null
return this.yZ(x,x,x,x,x,d,e,f,g,x,x)},
f6X(d){var x=null
return this.yZ(x,x,x,x,x,d,x,x,x,x,x)},
f6Y(d){var x=null
return this.yZ(x,x,x,x,x,x,d,x,x,x,x)},
f6Z(d){var x=null
return this.yZ(x,x,x,x,x,x,x,d,x,x,x)},
f7_(d){var x=null
return this.yZ(x,x,x,x,x,x,x,x,d,x,x)},
b34(d){var x,w,v,u,t=this,s=null,r=d.jR(0,y.w)===C.cG,q=t.b,p=A.P7(q,t.c),o=p==null?s:p.HS(d)
p=t.f
if(p==null)p=r?t.d:t.e
p=A.P7(q,p)
x=p==null?s:p.HS(d)
p=t.r
if(p==null)p=r?t.e:t.d
p=A.P7(q,p)
w=p==null?s:p.HS(d)
q=A.P7(q,t.w)
v=q==null?s:q.HS(d)
q=o==null
if(q&&x==null&&w==null&&v==null)return s
q=q?C.E:o
p=x==null?C.E:x
u=w==null?C.E:w
return new B.cB(v==null?C.E:v,u,q,p)},
doj(d){var x,w,v=this,u=v.z.HS(d),t=v.Q.HS(d),s=v.x.HS(d),r=v.y.HS(d),q=u==null
if(q&&t==null&&s==null&&r==null)return null
q=q?C.aE:u
x=t==null?C.aE:t
w=s==null?C.aE:s
return new B.aT(q,x,w,r==null?C.aE:r)}}
A.UM.prototype={
HS(d){var x,w
if(this===D.hX)x=null
else{x=this.a.fU(d)
if(x==null)x=0
w=this.b.fU(d)
x=new B.aH(x,w==null?0:w)}return x}}
A.aHf.prototype={
gDg(){if(this.b!=null){var x=this.c
x=(x==null?null:x.a>0)!==!0}else x=!0
return x},
HS(d){var x,w,v,u=this,t=null
if(u===D.Xb)return t
x=u.a
w=x==null?t:x.fU(d)
if(w==null)return t
x=u.c
v=x==null?t:x.fU(d)
if(v==null)return t
return new B.b3(w,v,u.b!=null?C.C:C.fS,-1)}}
A.bTs.prototype={
gdgs(d){return null},
fU(d){var x=d.jR(0,y.j)
return x==null?null:x.b},
$iaHg:1}
A.SX.prototype={
fU(d){return this.a},
$iaHg:1,
gdgs(d){return this.a}}
A.tO.prototype={
b3I(d,e,f){var x,w,v=this,u=null,t=f==null?1:f,s=1
switch(v.b.a){case 0:return u
case 1:if(e==null){x=d.jR(0,y.j)
e=x==null?u:x.r}if(e==null)return u
w=e*v.a
t=s
break
case 2:if(e==null)return u
w=e*v.a/100
t=s
break
case 3:w=v.a*96/72
break
case 4:w=v.a
break
default:w=u}return w*t},
fU(d){return this.b3I(d,null,null)},
k(d){var x=C.m.k(this.a),w=this.b
return x+(w===D.D8?"%":w.b)}}
A.a8L.prototype={
a3a(d,e,f,g,h,i){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=f==null?x.c:f,t=g==null?x.d:g,s=h==null?x.e:h
return new A.a8L(w,v,u,t,s,i==null?x.f:i)},
Ap(d){var x=null
return this.a3a(d,x,x,x,x,x)},
TY(d){var x=null
return this.a3a(x,x,x,x,x,d)},
aj1(d){var x=null
return this.a3a(x,x,x,d,x,x)},
aj3(d){var x=null
return this.a3a(x,x,x,x,d,x)},
bGe(d){var x=null
return this.a3a(x,d,x,x,x,x)},
bGf(d){var x=null
return this.a3a(x,x,d,x,x,x)},
gc7A(){var x=this.b,w=!0
if((x==null?null:x.a>0)!==!0){x=this.c
if((x==null?null:x.a>0)!==!0){x=this.d
x=(x==null?null:x.a>0)===!0}else x=w}else x=w
return x},
gc7B(){var x=this.b,w=!0
if((x==null?null:x.a>0)!==!0){x=this.c
if((x==null?null:x.a>0)!==!0){x=this.e
x=(x==null?null:x.a>0)===!0}else x=w}else x=w
return x},
b3n(d){var x=this.d
if(x==null)x=d.jR(0,y.w)===C.cG?this.b:this.c
return x},
b3x(d){var x=this.e
if(x==null)x=d.jR(0,y.w)===C.cG?this.c:this.b
return x},
k(d){var x,w,v,u,t,s=this,r=null,q="null",p=s.d,o=p==null,n=o?s.c:p,m=n==null?r:n.k(0)
if(m==null)m=q
n=s.f
x=n==null?r:n.k(0)
if(x==null)x=q
n=s.e
w=n==null
v=w?s.b:n
u=v==null?r:v.k(0)
if(u==null)u=q
v=s.a
t=v==null?r:v.k(0)
if(t==null)t=q
if(m===u&&u===x&&x===t)return"CssLengthBox.all("+m+")"
if(new B.aE(B.a([m,x,u,t],y.U),new A.cH5(),y.cc).gE(0)===3){if(m!=="null")if(!o)return"CssLengthBox(left="+p.k(0)+")"
else return"CssLengthBox(inline-start="+B.b(s.c)+")"
if(x!=="null")return"CssLengthBox(top="+x+")"
if(u!=="null")if(!w)return"CssLengthBox(right="+n.k(0)+")"
else return"CssLengthBox(inline-end="+B.b(s.b)+")"
if(t!=="null")return"CssLengthBox(bottom="+t+")"}return"CssLengthBox("+m+", "+x+", "+u+", "+t+")"}}
A.a8M.prototype={
O(){return"CssLengthUnit."+this.b}}
A.amp.prototype={
fU(d){var x,w,v,u=this,t=null,s=u.b.fU(d)
if(s==null)return t
x=u.c.fU(d)
if(x==null)return t
w=u.d.fU(d)
if(w==null)return t
v=u.a.fU(d)
if(v==null)return t
return new B.xU(s,new B.V(x,w),v)}}
A.a02.prototype={
O(){return"CssWhitespace."+this.b}}
A.brX.prototype={
dIE(d,e,f){var x,w,v,u,t
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,B.a7)(x),++v){u=x[v]
t=$.hX7()
t.a.set(u,this)}}}
A.aKX.prototype={}
A.fK.prototype={
bFX(d,e,f,g){var x,w,v=this.c
if(e!=null)v=e.a?v.c0(e):e
x=d==null?this.a:d
w=this.b
if(f!=null){w=B.M(new B.aE(w,new A.cZK(g),B.Y(w).i("aE<1>")),y.z)
w.push(f)}return new A.fK(x,w,v)},
f3F(d,e){return this.bFX(d,null,null,e)},
J6(d,e){return this.bFX(null,null,d,e)},
CG(d,e){return this.bFX(null,d,null,e)},
jR(d,e){if(B.ea(e)===D.eC8)return e.a(this.c)
return A.i_P(this.b,e)},
aoo(){var x=this
return A.jiD(A.jiB(A.jiA(A.jiz(x.c,x),x),x),x)}}
A.ap6.prototype={
of(d,e,f){var x=e==null?f.a(e):e,w=this.d
if(w==null)w=this.d=B.a([],y.er)
C.d.M(w,new A.b1E(d,x,f.i("b1E<0>")))},
fpt(d){var x,w,v,u
for(x=this;x.d==null;x=w){w=x.a
if(w==null)break}for(v=d;v.d==null;v=u){u=v.a
if(u==null)break}return x===v},
aC(d){var x,w,v,u,t=this,s=t.a,r=s==null?null:s.aC(d)
if(r==null)r=D.cdK
x=t.d
if(x==null)return r
w=t.c
if(w!=null&&r===t.b)return w
v=r.f3F(r,y.z)
for(s=x.length,u=0;u<x.length;x.length===s||(0,B.a7)(x),++u)v=x[u].$2(d,v)
t.b=r
return t.c=v},
k(d){var x=B.e4(this),w=this.a
w=w!=null?"(parent=#"+w.gF(0)+")":""
return"inheritanceResolvers#"+x+w}}
A.b1E.prototype={
$2(d,e){var x=this,w=x.b
if(w==null&&B.ea(x.$ti.c)===B.ea(y.Y))return x.a.$2(e,x.$ti.c.a(d))
return x.a.$2(e,w)}}
A.aMn.prototype={}
A.dee.prototype={
H3(d){var x=null,w=this.al1$,v=w==null?x:new B.ce(w,d.i("ce<0>"))
w=v==null
if((w?x:!v.gac(0))===!0)return w?x:v.ga_(0)
return x},
wv(d,e){var x,w=this.al1$
if(w==null)w=this.al1$=[]
x=C.d.k0(w,new A.def(e))
if(x===-1)w.push(d)
else w[x]=d
return d}}
A.bIn.prototype={}
A.bym.prototype={}
A.bIt.prototype={}
A.bIu.prototype={}
A.auC.prototype={}
A.bIv.prototype={}
A.bRl.prototype={}
A.ph.prototype={
gac(d){return this.e==null&&this.d.length===0},
v(d){return this.d3u(d,this.e)},
d3u(d,e){var x,w,v,u,t=e==null?C.au:e,s=y.c
if(s.b(t))t=t.v(d)
for(x=this.d,w=x.length,v=0;v<x.length;x.length===w||(0,B.a7)(x),++v){u=x[v].$2(d,t)
t=u==null?C.au:u
if(s.b(t))t=t.v(d)}return t},
qg(d){this.d.push(d)
return this},
gr4(){return this.c}}
A.aoD.prototype={
gdgA(){var x=[null,null,null,this.w,D.Ip,this.ay]
C.d.D(x,C.aS)
return x},
U(){return new A.aKF()}}
A.aKF.prototype={
gbC3(){var x=this.a.w
return x.length>1e4},
ae(){var x,w=this
w.ai()
w.d!==$&&B.bo()
w.d=new A.fn8(w,null,null)
w.a.toString
x=new A.bKX(B.a([],y.cY),$)
w.e!==$&&B.bo()
w.e=x
x.a6c(0,w)
if(w.gbC3())w.r=w.aah()},
q(){var x=this.e
x===$&&B.e()
x.dDy()
x.cHa()
this.aj()},
ck(){this.ec()
this.w=null},
b8(d){var x,w=this
w.bg(d)
x=B.dY(w.a.gdgA(),d.gdgA())
if(!J.C(w.a.ay,d.ay))w.w=null
if(!x){x=w.f=null
w.r=w.gbC3()?w.aah():x}},
v(d){var x,w=this,v=w.r
if(v!=null){x=y.m
return B.tU(new A.cXN(w),v.bP(w.geXy(),x),x)}w.a.toString
x=w.gbC3()
if(x||w.f==null)w.f=w.dU0()
x=w.f
x.toString
return new A.azS(w.w,x,null)},
aah(){var x=0,w=B.m(y.m),v,u=this,t,s,r
var $async$aah=B.i(function(d,e){if(d===1)return B.j(e,w)
for(;;)switch(x){case 0:r=u.a.w
if(r.length===0){v=B.a0M(new A.cXM(u),y.m)
x=1
break}x=3
return B.d(B.aj5(A.jnE(),r,null,y.N,y.eI),$async$aah)
case 3:t=e
if(u.c==null){v=u.a1v(C.au)
x=1
break}A.imn("Build "+u.a.k(0)+" (async)")
s=A.iqA(u,t)
A.imm()
v=s
x=1
break
case 1:return B.k(v,w)}})
return B.l($async$aah,w)},
dU0(){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.a
if(n.w.length===0)return p.a1v(C.au)
A.imn("Build "+n.k(0)+" (sync)")
x=null
try{w=B.cXI(p.a.w,o,!1,!1,o).dfh().gfN(0)
x=A.iqA(p,w)}catch(t){v=B.T(t)
u=B.b_(t)
n=p.e
n===$&&B.e()
s=p.c
s.toString
r=p.d
r===$&&B.e()
q=n.ceA(s,new A.AG(n,o,D.F9,new A.a5N(),$.ck9(),r,o),v,u)
x=q}A.imm()
return x},
a1v(d){this.a.toString
return d},
eXz(d){return new A.azS(this.w,d,null)}}
A.fn8.prototype={
aC(d){var x,w,v,u,t,s,r,q
d.N(y.fB)
x=this.e
w=x.w
if(w!=null)return w
x.e===$&&B.e()
v=x.c
v.toString
u=B.h4(v)
if(u==null)u=C.ad
t=v.N(y.f0)
if(t==null)t=C.n9
v=B.dO(v,C.bh9)
v=v==null?null:v.gfq().gwm()
if(v==null)v=1
v=[D.KT,u,t.w,new A.bIn(v)]
t=x.a.ay
s=A.i_P(v,y.j)
s=(s==null?C.b8:s).c0(t)
r=A.i_P(v,y.Z)
q=s.r
if(r!=null&&r.a!==1&&q!=null)s=s.f9n("fwfh: fontSize *= textScaleFactor",q*r.a)
v=B.M(v,y.z)
u=s.as
if(u!=null)v.push(new A.bym(u))
return x.w=new A.fK(null,v,s)}}
A.azS.prototype={
fT(d){var x=this.f
return x==null||x!==d.f}}
A.bKX.prototype={
d32(d,e){var x,w,v,u=e instanceof B.hU?e.c:B.a([e],y.p),t=this.at==null?null:D.Ip
if(t==null)t=D.Ip
x=J.L(u)
if(x.gbO(u)&&x.ga_(u) instanceof A.PW)x.fb(u,0)
if(x.gbO(u)&&x.ga7(u) instanceof A.PW)x.ks(u)
for(x=t!==D.Ip;w=J.L(u),w.gE(u)===1;){e=w.ga_(u)
if(e instanceof B.hU){u=e.c
continue}if(x&&e instanceof A.amm){v=e.c
if(v instanceof B.hU){u=v.c
continue}}break}return this.f0C(d,u)},
bC4(d,e){var x=e.length
if(x===0)return null
if(x===1)return C.d.ga_(e)
x=B.a([],y.s)
return new A.aGK(e,d,this,B.b(d.a.x)+"--column",x,null,null)},
aMl(d,e,f,g){var x=J.L(e)
if(x.gE(e)===1)return x.ga_(e)
return B.B(e,f==null?C.y:f,null,C.i,C.D,0,g,C.n)},
f0C(d,e){return this.aMl(d,e,null,null)},
f0D(d,e,f){return this.aMl(d,e,null,f)},
d35(d,e,f,g,h,i){var x,w,v,u,t,s,r=null
if(f==null&&g==null&&h==null&&i==null)return e
x=e instanceof B.hd?e:r
w=x==null
v=w?r:x.c
u=w?r:x.w
t=(u instanceof B.P?u:C.abH).faC(f,h,i)
if(g!=null){w=t.c
w=w==null?r:w.gam7()
if(w!==!1){t=t.NZ(g)
s=C.p}else s=C.o}else s=C.o
return B.H(r,v==null?e:v,s,r,r,t,r,r,r,r,r,r,r,r)},
f0G(d,e,f,g){return this.d35(d,e,f,g,null,null)},
f0H(d,e,f,g){return this.d35(d,e,null,null,f,g)},
f0I(d,e,f,g,h){var x,w=null
if(e==null)return w
if(C.c.ao(e,"asset:"))x=this.dbm(e)
else if(C.c.ao(e,"data:image/"))x=this.dbn(e)
else if(C.c.ao(e,"file:"))x=this.dbo(e)
else x=e.length!==0?new B.W5(e,1,w,C.mI):w
if(x==null)return w
return B.amI(f,g,x,w,h)},
f0L(d,e,f,g,h,i){return new B.dX(new A.dTs(f,g,h,C.b9,i,e),null)},
bC6(d,e,f){var x=null
return f instanceof B.y0?B.ig(B.cW(x,e,C.z,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f.ah,x,x,x,x,x,x,x,x,x,!1,C.aV),C.hJ,x,x,x,x,x,!0):e},
f0N(d,e){var x=B.Gq(null,-1,null)
x.ah=e
this.a.push(x)
return x},
f0R(d,e){var x,w,v,u,t=null,s=e.b,r=s.length!==0?C.d.ga_(s):t
if(r==null)return t
x=this.f0S(d,r)
w=e.c
if(x!=null&&w!=null)x=B.lV(x,t,w,t,t,t,t)
if(x!=null){v=r.a
u=r.c
if(v!=null&&v>0&&u!=null&&u>0)x=new B.rc(u/v,x,t)}return x},
f0S(d,e){var x,w,v,u,t=this,s=null,r=e.b
if(C.c.ao(r,"asset:"))x=t.dbm(r)
else if(C.c.ao(r,"data:image/"))x=t.dbn(r)
else if(C.c.ao(r,"file:"))x=t.dbo(r)
else x=r.length!==0?new B.W5(r,1,s,C.mI):s
if(x==null)return s
w=$.hX7()
B.pB(e)
w=w.a.get(e)
v=w==null
u=v?s:w.a
if(u==null)u=v?s:w.c
return B.igv(C.ah,s,s,new A.dTt(t,d,e),u==null,C.jZ,C.uS,s,s,x,s,new A.dTu(t,d,e),!1,C.i3,u,s)},
f0W(d,e,f,g){var x=null,w=this.dpF(f,g),v=e.aoo()
if(w.length!==0)return this.bC8(d,e,B.dn(x,x,x,x,x,x,x,x,x,v,w))
switch(f){case"circle":return new A.aag(D.c38,v,x)
case"none":return x
case"square":return new A.aag(D.c3c,v,x)
case"disc":default:return new A.aag(D.c39,v,x)}},
bC8(d,e,f){var x=A.aFk(d).a>0?A.aFk(d).a:null,w=e.jR(0,y.T),v=e.jR(0,y.a)
if(v==null)v=C.Q
return new B.hz(new A.dTv(x,d,w!==D.Xg,f,v,e.jR(0,y.w)),null)},
d3g(d,e,f,g){var x=null
if(g.length===0){if(d==null)return x
if(d.length===1)return C.d.ga_(d)}return B.dn(d,x,e!=null?C.hJ:x,x,x,e,x,x,x,f,g)},
f15(d,e,f){return this.d3g(null,d,e,f)},
cHa(){var x,w,v
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.a7)(x),++v)x[v].q()
C.d.ag(x)},
dpF(d,e){var x,w
switch(d){case"lower-alpha":case"lower-latin":if(e>=1&&e<=26)return B.dV(96+e)+"."
return""
case"upper-alpha":case"upper-latin":if(e>=1&&e<=26)return B.dV(64+e)+"."
return""
case"decimal":return""+e+"."
case"lower-roman":x=A.ivA(e)
w=x==null?null:x.toLowerCase()
return w!=null?w+".":""
case"upper-roman":w=A.ivA(e)
return w!=null?w+".":""
case"none":default:return""}},
dbm(d){var x=null,w=B.bA(d,0,x),v=w.gfa(w)
if(v.length===0)return x
return new B.akB(v,x,w.gkh().K(0,"package")?w.gkh().h(0,"package"):x)},
dbn(d){var x=A.jmP(d)
if(x==null)return null
return new B.Il(x,1)},
dbo(d){if(B.bA(d,0,null).a6s().length===0)return null
return null},
ceA(d,e,f,g){var x,w,v,u=null
$.iE0().cK(C.kO,"Could not render data="+B.b(g),f,u)
if(g instanceof A.aKX){x=$.hX7()
B.pB(g)
w=x.a.get(g)}else w=u
x=w==null
v=x?u:w.a
if(v==null)v=x?u:w.c
return B.c(v==null?"\u274c":v,u,u,u,u,u,u,u,u,u,u)},
deF(d,e,f,g){var x=null
return B.au(new B.F(C.bm,new B.Fd(C.eL4,x,x,x,x,x,x,x,f,x,x,x,x,x,x),x),x,x)},
ftZ(d,e){return this.deF(d,e,null,null)},
ceJ(d){return this.fuC(d)},
fuC(d){var x=0,w=B.m(y.y),v,u=this,t,s
var $async$ceJ=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:t=u.at
s=t==null?null:t.as
v=s!=null&&s.$1(d)
x=1
break
case 1:return B.k(v,w)}})
return B.l($async$ceJ,w)},
anR(d){return this.fuL(d)},
fuL(d){var x=0,w=B.m(y.y),v,u=this,t,s
var $async$anR=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:x=3
return B.d(u.ceJ(d),$async$anR)
case 3:if(f){v=!0
x=1
break}x=C.c.ao(d,"#")?4:5
break
case 4:t=C.c.aZ(d,1)
s=u.aS0$
s===$&&B.e()
x=6
return B.d(s.gfk5().$1(t),$async$anR)
case 6:if(f){v=!0
x=1
break}case 5:v=!1
x=1
break
case 1:return B.k(v,w)}})
return B.l($async$anR,w)},
o3(d,e){var x,w,v,u,t,s,r=this,q=e.a,p=q.b
switch(q.x){case"a":if(p.K(0,"href")){e.b.of(A.jnM(),null,y.Y)
q=r.w
e.fI(0,q==null?r.w=new A.dKg(r).god():q)}x=p.h(0,"name")
if(x!=null){q=r.aS0$
q===$&&B.e()
e.fI(0,new A.bfc(new B.bI(x,y.C),x,q).god())}break
case"abbr":case"acronym":e.fI(0,D.br3)
break
case"address":e.fI(0,D.bqO)
break
case"article":case"aside":case"dl":case"figcaption":case"footer":case"header":case"main":case"nav":case"section":case"div":e.fI(0,D.bqy)
break
case"blockquote":case"figure":e.fI(0,D.bqC)
break
case"b":case"strong":e.b.of(A.ixe(),C.H,y.B)
break
case"big":e.b.of(A.ixc(),"larger",y.N)
break
case"small":e.b.of(A.ixc(),"smaller",y.N)
break
case"br":e.fI(0,D.bqD)
break
case"center":e.fI(0,D.bqH)
break
case"cite":case"dfn":case"em":case"i":case"var":e.b.of(A.ixd(),C.cM,y.I)
break
case"code":case"kbd":case"samp":case"tt":e.b.of(A.ixb(),D.d2G,y.x)
break
case"pre":q=r.Q
e.fI(0,q==null?r.Q=new A.dKx(r).god():q)
break
case"details":q=r.x
e.fI(0,q==null?r.x=new A.dKm(r).god():q)
break
case"dd":e.fI(0,D.bqJ)
break
case"dt":e.fI(0,D.bqX)
break
case"del":case"s":case"strike":e.fI(0,D.bqL)
break
case"font":e.fI(0,D.bqU)
break
case"h1":e.fI(0,D.bqA)
break
case"h2":e.fI(0,D.br_)
break
case"h3":e.fI(0,D.bqV)
break
case"h4":e.fI(0,D.bqG)
break
case"h5":e.fI(0,D.br8)
break
case"h6":e.fI(0,D.bqI)
break
case"hr":e.fI(0,D.bqS)
break
case"img":q=r.y
e.fI(0,q==null?r.y=new A.dKr(r).god():q)
break
case"ol":case"ul":q=r.z
e.fI(0,q==null?r.z=new A.dKt(r).god():q)
break
case"mark":e.fI(0,D.bqB)
break
case"p":e.fI(0,D.br6)
break
case"q":e.fI(0,D.br2)
break
case"ruby":e.fI(0,D.bqK)
break
case"style":case"script":e.fI(0,D.bqR)
break
case"sub":e.fI(0,D.bqF)
break
case"sup":e.fI(0,D.bra)
break
case"table":w=r.as
if(w==null)w=r.as=A.ilP(r)
e.fI(0,D.bqN)
q=w.b
q===$&&B.e()
e.fI(0,q)
q=w.c
q===$&&B.e()
e.fI(0,q)
break
case"td":e.fI(0,D.bqW)
break
case"th":e.fI(0,D.bqY)
break
case"caption":e.fI(0,D.br4)
break
case"u":case"ins":e.fI(0,D.bqT)
break}for(q=new B.cM(p,B.S(p).i("cM<1,2>")).gaq(0),v=y.C;q.G();){u=q.d
switch(u.a){case"align":e.fI(0,D.bqx)
break
case"dir":e.fI(0,D.bqQ)
break
case"id":t=u.b
s=r.aS0$
s===$&&B.e()
e.fI(0,new A.bfc(new B.bI(t,v),t,s).god())
break}}},
fvD(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=e.gcjW()
switch(k){case"color":x=A.bdr(A.uQ(e))
w=x==null?l:x.gdgs(x)
if(w!=null)d.b.of(A.jx3(),w,y.bz)
break
case"direction":v=A.uQ(e)
u=v instanceof B.fp?A.oX(v):l
if(u!=null)d.b.of(A.jx7(),u,y.N)
break
case"font-family":d.b.of(A.ixb(),A.jqs(A.HG(e)),y.x)
break
case"font-size":t=A.uQ(e)
if(t!=null)d.b.of(A.jx4(),t,y.f)
break
case"font-style":v=A.uQ(e)
u=v instanceof B.fp?A.oX(v):l
s=u!=null?A.jqy(u):l
if(s!=null)d.b.of(A.ixd(),s,y.I)
break
case"font-weight":t=A.uQ(e)
r=t!=null?A.jqA(t):l
if(r!=null)d.b.of(A.ixe(),r,y.B)
break
case"height":case"max-height":case"max-width":case"min-height":case"min-width":case"width":$.cjW().j(0,d.a,d)
d.fI(0,D.abJ)
break
case"line-height":t=A.uQ(e)
if(t!=null)d.b.of(A.jx6(),t,y.f)
break
case"max-lines":case"-webkit-line-clamp":q=A.jxm(A.uQ(e))
if(q!=null)d.wv(A.aFk(d).d5p(q),y.R)
break
case"text-align":d.fI(0,D.br5)
break
case"text-decoration":case"text-decoration-color":case"text-decoration-line":case"text-decoration-style":case"text-decoration-thickness":case"text-decoration-width":A.jwW(d,e)
break
case"text-overflow":p=A.jxn(A.uQ(e))
if(p!=null)d.wv(A.aFk(d).f6H(p),y.R)
break
case"vertical-align":x=m.r
d.fI(0,x==null?m.r=new A.dGo(m).god():x)
break
case"white-space":v=A.uQ(e)
u=v instanceof B.fp?A.oX(v):l
o=u!=null?A.jyd(u):l
if(o!=null)d.b.of(A.ixf(),o,y.T)
break
case"text-shadow":n=A.HG(e)
if(n.length!==0)d.b.of(A.joe(),A.jeP(n),y.gv)
break}if(C.c.ao(k,"background")){x=m.b
d.fI(0,x==null?m.b=new A.dFY(m).god():x)}if(C.c.ao(k,"border")){x=m.c
d.fI(0,x==null?m.c=new A.dG1(m).god():x)}if(C.c.ao(k,"margin")){x=m.e
d.fI(0,x==null?m.e=new A.dGc(m).god():x)}if(C.c.ao(k,"padding")){x=m.f
d.fI(0,x==null?m.f=new A.dGh(m).god():x)}},
fvE(d,e){var x,w,v=this
A.j2V(v,d)
switch(e){case"flex":x=v.d
d.fI(0,x==null?v.d=new A.dG7(v).god():x)
break
case"block":$.cjW().j(0,d.a,d)
$.i8A().j(0,d,!0)
d.fI(0,D.br7)
d.fI(0,D.abJ)
break
case"inline-block":d.fI(0,D.bqE)
break
case"none":d.fI(0,D.bqZ)
break
case"table":w=v.as
x=(w==null?v.as=A.ilP(v):w).d
x===$&&B.e()
d.fI(0,x)
break}},
a6c(d,e){var x
this.dF5(0,e)
this.cHa()
x=e.a
x.toString
if(!(x instanceof A.aoD))x=null
this.at=x},
dj_(d){var x,w=null
if(d.length===0)return w
if(C.c.ao(d,"data:"))return d
x=B.rJ(d)
if(x==null)return w
if(x.gzh())return d
if(x.gaT2())return B.kO(w,w,w,w,w,w,w,"https").WE(x).k(0)
return w}}
A.bKY.prototype={
q(){},
a6c(d,e){}}
A.b9N.prototype={
a6c(d,e){var x,w
this.dDz(0,e)
x=e.c
x.toString
w=y.fY
this.aS0$=new A.bfe(B.a([],w),B.D(y.N,y.eS),B.a([],y.t),B.a([],w),B.D(y.et,y.ev),x)}}
A.eor.prototype={
djd(d){return this.a.push(d)}}
A.euU.prototype={
L7(d){return C.d.D(this.a,d.c)}}
A.AG.prototype={
gdb3(){return this.f!=null},
ga4F(){return this.y},
gcv(d){var x=this.f
x.toString
return x},
j(d,e,f){this.w.D(0,A.cH8(A.hP8("*{"+e+": "+B.b(f)+";}")))},
d1y(d){var x,w,v
for(x=d.a,w=B.Y(x),x=new J.hy(x,x.length,w.i("hy<1>")),w=w.c;x.G();){v=x.d
this.dJM(v==null?w.a(v):v)}},
ap(){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.e,k=B.a([],y.E)
new A.cQp(n,l,k).dIo(l,n)
x=n.x
if(x==null)x=D.F9
for(w=J.dW(x),v=w.gaq(x),u=m;v.G();){t=v.gT(v)
s=t.a.w
u=s==null?m:s.$2(t.b,k)
if(u!=null)break}r=u==null?l.bC4(n,k):u
if(r==null)r=D.eQf
for(l=w.gaq(x),v=y.s,t=y.c,s=B.b(n.a.x)+"--";l.G();){q=l.gT(l)
p=q.a
o=p.e
q=o==null?m:o.$2(q.b,r)
r=q==null?r:q
q=p.b
if(q==null)q="lazy"
if(!t.b(r)){p=B.a([],v)
r=new A.ph(s+q,p,r,m)}}if(r.gac(r))return m
A.iOg(n,r)
for(l=w.gaq(x);l.G();){w=l.gT(l)
v=w.a.r
if(v!=null)v.$2(w.b,r)}return r},
bH8(d,e,f,g){var x,w,v,u,t,s,r,q,p=this
if(f==null){x=p.b.d
if(x==null)x=null
else x=B.a(x.slice(0),B.Y(x))
w=new A.ap6(g.b,x)}else w=f
x=e==null?p.a:e
v=A.jiC(g.r,g)
u=new A.a5N()
t=new A.AG(p.e,g,v,u,x,w,null)
if(d){s=p.al1$
if(s!=null){x=B.M(s,y.z)
t.al1$=x}for(x=p.gbr(0),v=x.length,r=0;r<x.length;x.length===v||(0,B.a7)(x),++r)t.l6(0,x[r].O3(t))
q=p.x
if(q!=null)for(x=q.$ti,x=new B.yf(q,B.a([],x.i("J<r0<1>>")),q.c,x.i("yf<1,r0<1>>"));x.G();)t.fI(0,x.gT(0).a)
u.D(0,p.w)}return t},
O3(d){return this.bH8(!0,null,null,d)},
FX(d){var x,w,v,u=this.x
if(u!=null)for(x=u.$ti,x=new B.yf(u,B.a([],x.i("J<r0<1>>")),u.c,x.i("yf<1,r0<1>>"));x.G();){w=x.gT(0)
v=w.a.f
if(v!=null)v.$1(w.b)}},
BH(d){var x,w,v,u,t,s=this.w.b
if(s==null)return null
for(x=B.Y(s).i("d7<1>"),w=new B.d7(s,x),w=new B.bT(w,w.gE(0),x.i("bT<ah.E>")),x=x.i("ah.E");w.G();){v=w.d
if(v==null)v=x.a(v)
u=v.f
t=v.b
if((u?"*"+t.b:t.b)===d)return v}return null},
fI(d,e){var x,w,v,u=this,t=null,s=u.x
if(s==null)s=u.x=B.atB(A.jnB(),t,y.Q)
s.kk(0,new A.N7(e,u))
x=$.ck8()
w=e.b
if(w==null)w="a build op"
v=u.a.x
v=v==null?t:v.toUpperCase()
x.cK(C.ED,"Registered "+w+" for "+B.b(v)+" tag",t,t)},
cAy(d,e){return this.bH8(!1,e,new A.ap6(this.b,null),this)},
YX(d){return this.cAy(0,null)},
dJM(d){var x,w,v,u,t,s,r,q=this,p=null
if(d.glW(d)===3){y.es.a(d)
x=J.w(d.w)
d.w=x
return q.dZ8(x)}if(d.glW(d)!==1)return
y.dk.a(d)
x=q.e.at
if(x==null)x=p
else{x=x.f
x=x==null?p:x.$1(d)}if(x!=null){if(y.da.b(x)){q.l6(0,A.SF(q,x,x.c,C.b9))
$.ck8().cK(C.cf,"Custom inline widget: "+B.b(d.x)+" tag",p,p)}else{q.l6(0,new A.aBc(y.c.b(x)?x:A.Et(p,x,B.b(q.a.x)+"--WidgetBit.block",p),q))
$.ck8().cK(C.cf,"Custom block widget: "+B.b(d.x)+" tag",p,p)}return}w=q.cAy(0,d)
w.eyt()
w.d1y(d.gfN(0))
v=w.x
x=v==null
u=(x?p:!new B.aE(v,A.jnC(),v.$ti.i("aE<ds.E>")).gac(0))===!0
w.y=!u
if(!x)for(x=v.$ti,x=new B.yf(v,B.a([],x.i("J<r0<1>>")),v.c,x.i("yf<1,r0<1>>")),t=w;x.G();){s=x.gT(0).a.d
s=s==null?p:s.$1(t)
t=s==null?t:s}else t=w
if(u){r=t.ap()
if(r!=null)q.l6(0,new A.aBc(r,q))}else q.l6(0,t)},
dZ8(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=$.iED().cf(d),k=$.iEE().cf(d),j=l==null,i=j?null:l.gbE(0)
if(i==null)i=0
x=k==null
w=x?null:k.b.index
if(w==null)w=d.length
if(w<=i){m.l6(0,new A.MP(d,m))
return}if(!j){j=l.b[0]
j.toString
m.l6(0,new A.MP(j,m))}v=C.c.a3(d,i,w)
j=B.M($.iEF().ev(0,v),y.bn)
j.push(null)
u=j.length
t=0
s=0
for(;s<j.length;j.length===u||(0,B.a7)(j),++s){r=j[s]
if(r==null){q=C.c.aZ(v,t)
if(q.length!==0)m.l6(0,new A.Ms(q,m))
break}else{p=r.b
o=p[0]
o.toString
if(o===" ")continue
n=p.index
m.l6(0,new A.Ms(C.c.a3(v,t,n),m))
m.l6(0,new A.MP(o,m))
t=n+p[0].length}}if(!x){j=k.b[0]
j.toString
m.l6(0,new A.MP(j,m))}},
e_4(){var x,w=null,v=this.a,u=this.e.at
if(u==null)u=w
else{u=u.e
u=u==null?w:u.$1(v)}if(u==null)return
x=$.ck8()
v=v.x
v=v==null?w:v.toUpperCase()
x.cK(C.cf,"Custom styles for "+B.b(v)+": "+B.b(u),w,w)
u=J.tA(u)
this.w.D(0,A.cH8(A.hP8("*{"+u.bD(u,new A.cG1(),y.N).au(0,";")+"}")))},
eyt(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.e
l.o3(0,m)
for(x=m.r,w=x.length,v=0;v<w;++v){u=x[v]
t=u.a.x
if(t!=null)t.$2(u.b,m)}s=m.x
if(s!=null)for(x=s.$ti,x=new B.yf(s,B.a([],x.i("J<r0<1>>")),s.c,x.i("yf<1,r0<1>>")),w=m.w,t=y._;x.G();){r=x.gT(0).gfh7()
if(r!=null){q=w.b
C.d.D(q==null?w.b=B.a([],t):q,r)}}m.e_4()
p=A.hZR(m.a)
if(J.d4(p))m.w.D(0,p)
o=m.w.b
if(o!=null){x=J.xp(o.slice(0),B.Y(o).c)
w=x.length
v=0
for(;v<x.length;x.length===w||(0,B.a7)(x),++v)l.fvD(m,x[v])}x=m.BH("display")
if(x==null)x=null
else{n=A.uQ(x)
x=n instanceof B.fp?A.oX(n):null}l.fvE(m,x)}}
A.N7.prototype={
gfh7(){var x=this.a.c,w=x==null?null:x.$1(this.b.a)
if(w==null)return null
x=J.tA(w)
return A.cH8(A.hP8("*{"+x.bD(x,new A.eiV(),y.N).au(0,";")+"}"))}}
A.a5N.prototype={
gaq(d){var x=this.b
x=x==null?null:new J.hy(x,x.length,B.Y(x).i("hy<1>"))
return x==null?new J.hy(D.a1m,0,y.ff):x},
D(d,e){var x=this.b
C.d.D(x==null?this.b=B.a([],y._):x,e)}}
A.cdj.prototype={
v(d){return C.au},
gr4(){return null},
gac(d){return!0},
qg(d){return A.Et(d,null,null,null)},
$iph:1}
A.bfc.prototype={
god(){var x=this,w=null
return A.vS(!1,"anchor#"+x.b,w,new A.cpw(x),new A.cpx(x),new A.cpy(x),w,w,w,9000001e9)},
gaf(d){return this.b}}
A.bfe.prototype={
aRa(d,e,f,g,h){var x,w=null
$.ajp().cK(C.eO,"Trying to make #"+d+" visible...",w,w)
x=new B.bb($.bl,y.ek)
this.a_8(d,new B.c0(x,y.co),e,f,g,h,w,w)
return x},
fk6(d){return this.aRa(d,C.iP,C.cU,C.aY,C.bx)},
d94(d,e,f){return this.aRa(d,e,f,C.aY,C.bx)},
fk7(d,e){return this.aRa(d,C.iP,e,C.aY,C.bx)},
a_8(d,e,f,g,h,i,j,k){return this.e3L(d,e,f,g,h,i,j,k)},
e3L(d,e,f,a0,a1,a2,a3,a4){var x=0,w=B.m(y.aT),v,u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a_8=B.i(function(a5,a6){if(a5===1)return B.j(a6,w)
for(;;)switch(x){case 0:g=u.b.h(0,d)
if(g==null){$.ajp().cK(C.kO,"Could not ensure #"+d+" visible: no anchor",null,null)
v=e.dQ(0,!1)
x=1
break}t=$.aN.aA$.x.h(0,g)
if(t!=null){$.ajp().cK(C.eO,new A.cpp(g),null,null)
v=e.dQ(0,u.cJ3(t,f,a0))
x=1
break}s=u.c
if(s.length===0){$.ajp().cK(C.kO,"Could not ensure #"+d+" visible: no body items",null,null)
v=e.dQ(0,!1)
x=1
break}r=J.xp(s.slice(0),B.Y(s).c)
q=C.d.hj(r,C.V2)
p=C.d.hj(r,C.rd)
s=a4==null?q:a4
o=Math.min(s,q)
s=a3==null?p:a3
n=Math.max(s,p)
m=u.e.h(0,g)
s=m==null
l=s?null:m.b
if(l==null)l=o
k=s?null:m.c
if(k==null)k=n
x=l<o?3:5
break
case 3:j=u.d[q*2]
$.ajp().cK(C.eO,new A.cpq(j),null,null)
x=6
return B.d(u.abD($.aN.aA$.x.h(0,j),1,a1,a2),$async$a_8)
case 6:i=a6
x=4
break
case 5:x=k>n?7:9
break
case 7:h=u.d[p*2+1]
$.ajp().cK(C.eO,new A.cpr(h),null,null)
x=10
return B.d(u.cJ3($.aN.aA$.x.h(0,h),a1,a2),$async$a_8)
case 10:i=a6
x=8
break
case 9:i=!1
case 8:case 4:if(!i){$.ajp().cK(C.kO,"Could not ensure #"+d+" visible: scroll failure",null,null)
v=e.dQ(0,!1)
x=1
break}$.aN.k3$.push(new A.cps(u,d,e,f,a0,a1,a2,n,o))
case 1:return B.k(v,w)}})
return B.l($async$a_8,w)},
abD(d,e,f,g){return this.e3M(d,e,f,g)},
cJ3(d,e,f){return this.abD(d,0,e,f)},
e3M(d,e,f,g){var x=0,w=B.m(y.y),v,u=this,t,s,r,q,p,o
var $async$abD=B.i(function(h,i){if(h===1)return B.j(i,w)
for(;;)switch(x){case 0:o=d==null?null:d.gaN()
if(o==null){v=!1
x=1
break}t=u.c
if(t.length!==0){s=u.d[C.d.ga_(t).b7(0,2)]
r=$.aN.aA$.x.h(0,s)
q=r!=null?B.u8(r,null):null}else q=null
if(q==null)q=B.u8(u.f,null)
if(q==null)p=null
else{t=q.d
t.toString
p=t}if(p==null){v=!1
x=1
break}x=3
return B.d(p.d95(o,e,f,g),$async$abD)
case 3:v=!0
x=1
break
case 1:return B.k(v,w)}})
return B.l($async$abD,w)}}
A.cpt.prototype={}
A.bRk.prototype={}
A.aGK.prototype={
gac(d){return this.r.length===0},
v(d){var x,w,v,u,t,s,r=this
A.ili(d,!0)
try{x=r.w.b.aC(d)
w=r.cFn(d)
u=r.x
t=A.irr(x)
s=x.jR(0,y.w)
if(s==null)s=C.ad
v=u.aMl(d,w,t,s)
t=$.i9b()
B.pB(r)
u=J.C(t.a.get(r),!0)?u.d32(d,v):v
return u}finally{A.ili(d,!1)}},
qg(d){var x=this
if(J.C(d,x.x.gd31()))$.i9b().j(0,x,!0)
else x.cBM(d)
return x},
cFn(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=y.p,l=B.a([],m),k=o.cLc(d)
k=B.iY(k,new A.cF8(d),k.$ti.i("U.E"),y.m)
for(x=k.gaq(0),k=new B.lC(x,new A.cF9(),B.S(k).i("lC<U.E>")),w=n,v=w,u=0;k.G();){t=x.gT(0)
if(u===0)if(t instanceof A.PW)if(v!=null)v.aWr(t)
else v=t
else ++u
if(u===1){if(t instanceof A.PW&&w instanceof A.PW){w.aWr(t)
continue}l.push(t)
w=t}}s=n
if(l.length!==0){r=C.d.ga7(l)
if(r instanceof A.PW){l.pop()
s=r}}q=o.w.b.aC(d)
if(l.length!==0){k=A.irr(q)
x=q.jR(0,y.w)
if(x==null)x=C.ad
p=o.x.aMl(d,l,k,x)}else p=n
m=B.a([],m)
if(v!=null)m.push(v)
if(p!=null)m.push(o.d3u(d,p))
if(s!=null)m.push(s)
return m},
cLc(d){return new B.kt(this.e9v(d),y.gw)},
e9v(d){var x=this
return function(){var w=d
var v=0,u=1,t=[],s,r,q,p,o,n,m
return function $async$cLc(e,f,g){if(f===1){t.push(g)
v=u}for(;;)switch(v){case 0:s=x.r,r=s.length,q=0
case 2:if(!(q<s.length)){v=4
break}p=s[q]
v=p instanceof A.aGK?5:6
break
case 5:o=p.cFn(w),n=o.length,m=0
case 7:if(!(m<o.length)){v=9
break}v=10
return e.b=o[m],1
case 10:case 8:o.length===n||(0,B.a7)(o),++m
v=7
break
case 9:v=3
break
case 6:v=11
return e.b=p,1
case 11:case 3:s.length===r||(0,B.a7)(s),++q
v=2
break
case 4:return 0
case 1:return e.c=t.at(-1),3}}}}}
A.dFY.prototype={
god(){var x=null
return A.vS(!1,"background",x,x,new A.dG_(this),new A.dG0(),x,x,x,5000005e9)}}
A.b84.prototype={
ajj(d,e,f,g,h){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=f==null?x.c:f,t=g==null?x.d:g
return new A.b84(w,v,u,t,h==null?x.e:h)},
L(d){var x=null
return this.ajj(x,d,x,x,x)},
aO_(d){var x=null
return this.ajj(x,x,x,d,x)},
O4(d){var x=null
return this.ajj(x,x,x,x,d)},
pq(d){var x=null
return this.ajj(d,x,x,x,x)},
f5C(d){var x=null
return this.ajj(x,x,d,x,x)},
d73(d){var x=d.c,w=d.b,v=A.bdr(x<w.length?w[x]:null)
if(v==null)return this;++d.c
return this.L(v)},
d74(d){var x=d.c,w=d.b,v=x<w.length?w[x]:null,u=v instanceof B.avm?v.d:null
if(u==null)return this
d.c=x+1
return this.f5C(u)},
d75(d){var x,w,v=this,u=null,t=d.c,s=d.b,r=t<s.length?s[t]:u,q=r==null?u:A.irv(r)
if(q==null)return v
t=d.c+1
x=t<s.length?s[t]:u
w=x==null?u:A.irv(x)
t=d.c
if(w==null){d.c=t+1
switch(q.a){case 0:return v.pq(C.dT)
case 1:return v.pq(C.ah)
case 2:return v.pq(C.bZ)
case 3:return v.pq(C.ck)
case 4:return v.pq(C.d1)}}else{d.c=t+2
switch(q.a){case 0:switch(w.a){case 2:return v.pq(C.nP)
case 3:return v.pq(C.hg)
case 0:case 1:case 4:return v.pq(C.dT)}break
case 1:switch(w.a){case 0:return v.pq(C.dT)
case 1:return v.pq(C.ah)
case 2:return v.pq(C.bZ)
case 3:return v.pq(C.ck)
case 4:return v.pq(C.d1)}break
case 2:switch(w.a){case 0:return v.pq(C.nP)
case 4:return v.pq(C.cv)
case 1:case 2:case 3:return v.pq(C.bZ)}break
case 3:switch(w.a){case 0:return v.pq(C.hg)
case 4:return v.pq(C.j4)
case 2:case 3:case 1:return v.pq(C.ck)}break
case 4:switch(w.a){case 2:return v.pq(C.cv)
case 3:return v.pq(C.j4)
case 0:case 1:case 4:return v.pq(C.d1)}break}}},
d76(d){var x=d.c,w=d.b,v=x<w.length?w[x]:null,u=this.fcL(v instanceof B.fp?A.oX(v):null)
if(u===this)return this;++d.c
return u},
fcL(d){var x=this
switch(d){case"no-repeat":return x.aO_(C.i3)
case"repeat-x":return x.aO_(C.anX)
case"repeat-y":return x.aO_(C.anY)
case"repeat":return x.aO_(C.anW)
case"auto":return x.O4(C.mU)
case"contain":return x.O4(C.eY)
case"cover":return x.O4(C.cq)}return x}}
A.fzm.prototype={}
A.aiu.prototype={
O(){return"_StyleBackgroundPosition."+this.b}}
A.dG1.prototype={
god(){var x=null
return A.vS(!1,"border",x,new A.dG4(this),new A.dG5(this),x,x,x,x,5000004e9)},
cDR(d,e,f,g){var x=d.b.aC(e)
return this.a.f0G(d,f,g.b34(x),g.doj(x))}}
A.dG7.prototype={
god(){var x=null
return A.vS(!0,x,x,x,x,x,x,new A.dGb(this),x,1000016e9)}}
A.aYu.prototype={
d6a(d,e){var x=d==null?this.a:d
return new A.aYu(x,e==null?this.b:e)},
d5p(d){return this.d6a(d,null)},
f6H(d){return this.d6a(null,d)}}
A.dGc.prototype={
god(){var x=null
return A.vS(!1,"margin",x,x,new A.dGe(this),new A.dGf(),x,x,x,5000006e9)}}
A.dGh.prototype={
god(){var x=null
return A.vS(!1,"padding",x,x,new A.dGj(this),new A.dGk(),x,x,x,5000003e9)}}
A.i25.prototype={}
A.ayB.prototype={}
A.c9K.prototype={}
A.b85.prototype={}
A.XF.prototype={}
A.dGo.prototype={
god(){var x=null
return A.vS(!1,"vertical-align",x,new A.dGr(this),new A.dGs(this),x,x,x,x,5000002e9)},
dRU(d,e,f,g){var x,w,v=null,u=e.b.aC(d).jR(0,y.j),t=u==null?v:u.r
if(t==null)return f
u=g.d
x=new B.a_(0,t*g.b,0,t*u)
w=x.n(0,C.Y)?f:new B.F(x,f,v)
return new B.da(u>0?C.d1:C.dT,1,v,w,v)}}
A.dKg.prototype={
god(){var x=null
return A.vS(!1,"a[href]",A.jnL(),new A.dKk(this),new A.dKl(this),x,x,x,x,1000001e9)}}
A.aUr.prototype={
gbbk(){return!0},
O3(d){return new A.aUr(d)},
FX(d){return d.djS(0,"\n")},
k(d){return"<BR />"},
gcv(d){return this.a}}
A.dKm.prototype={
god(){var x=null
return A.vS(!0,"details",x,x,x,x,x,new A.dKp(this),new A.dKq(),1000003e9)}}
A.dKr.prototype={
god(){return A.vS(!1,"img",A.jnP(),new A.dKs(this),A.jnQ(),A.jnR(),null,null,null,1000006e9)}}
A.dKt.prototype={
god(){var x=null
return A.vS(x,"ul",A.jnS(),x,x,x,x,x,new A.dKw(this),1000008e9)},
dZ9(d,e,f,g,h){var x,w,v,u,t,s,r,q=null,p="list-style-type",o=f.YX(0),n=o.b
n.of(A.ixf(),D.Xg,y.T)
o.wv(A.aFk(o).d5p(1),y.R)
x=A.cis(e)
w=f.BH(p)
if(w==null)w=q
else{v=A.uQ(w)
w=v instanceof B.fp?A.oX(v):q}if(w==null){w=f.a.b.h(0,"type")
w=A.isn(w==null?"":w)
u=w}else u=w
if(u==null){w=e.BH(p)
if(w==null)w=q
else{v=A.uQ(w)
w=v instanceof B.fp?A.oX(v):q}u=w==null?"disc":w}w=x.b
if(x.a)t=(w==null?x.d:w)-h
else t=(w==null?1:w)+h
s=n.aC(d)
r=this.a.f0W(o,s,u,t)
if(r==null)return g
n=s.jR(0,y.w)
if(n==null)n=C.ad
w=B.a([g],y.p)
w.push(r)
return new A.br9(n,w,q)}}
A.b8j.prototype={
d5S(d,e){var x=this,w=d==null?x.c:d,v=e==null?x.d:e
return new A.b8j(x.a,x.b,w,v)},
CI(d){return this.d5S(null,d)},
f4M(d){return this.d5S(d,null)}}
A.dKx.prototype={
god(){var x=null
return A.vS(x,"pre",A.jnT(),x,new A.dKz(this),x,x,x,x,1000009e9)}}
A.bHH.prototype={
evx(d,e){var x,w,v,u,t,s,r,q=this,p=null,o=A.i4E(d)
q.eBL(o)
q.bk0(d,o.d)
for(x=o.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.a7)(x),++v)q.bk0(d,x[v])
q.bk0(d,o.c)
if(o.e.length===0)return e
u=A.cjs(d)
x=d.BH("border-collapse")
if(x==null)t=p
else{s=A.uQ(x)
t=s instanceof B.fp?A.oX(s):p}x=d.BH("border-spacing")
r=x==null?p:A.uQ(x)
return A.Et(p,new B.dX(new A.dKE(q,d,u,t,r!=null?A.ok(r):p,o),p),"table",p)},
eBL(d){var x,w,v,u,t,s,r,q
for(x=d.b,w=x.length,v=d.e,u=d.f,t=y.S,s=0;s<x.length;x.length===w||(0,B.a7)(x),++s){r=x[s]
q=d.w
u.j(0,q,B.x([0,v.length],t,t))
d.r=Math.max(d.r,1)
d.w=u.a
v.push(new A.dKF(d,q,r))}},
bk0(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=A.i4E(a4),a1=a0.w,a2=a5.a,a3=a2.length
for(x=a0.e,w=a0.f,v=y.S,u=0;u<a2.length;++u){t=a2[u]
s=a1+u
r=w.h(0,s)
if(r==null){r=B.D(v,v)
w.j(0,s,r)}for(q=t.a,p=q.length,o=0;o<q.length;q.length===p||(0,B.a7)(q),++o){n={}
m=q[o]
n.a=0
for(l=0;r.K(0,l);)l=++n.a
k=m.b
k=k>0?k:1
l=m.d
if(!(l>0))l=l===0?a2.length:1
j=Math.min(a3,l)
i=x.length
for(h=0;h<j;++h){l=s+h
g=w.h(0,l)
if(g==null){g=B.D(v,v)
w.j(0,l,g)}a0.w=w.a
for(f=0;f<k;++f)g.j(0,n.a+f,i)}a0.r=Math.max(a0.r,n.a+1)
a0.w=w.a
e=m.c
d=A.cjs(e)
x.push(new A.dKG(n,this,m,e,d.a?A.cjs(a4).yZ(d.b,d.c,d.d,d.e,d.f,d.x,d.y,d.z,d.Q,d.r,d.w):d,s,k,a0,j))}}}}
A.b8k.prototype={
ev5(d,e){var x,w,v,u,t,s=e.a.a,r=s instanceof B.fX?s:null
if(r!==d.a)return
if(A.i2f(e)!=="table-cell")return
for(r=d.w.gaq(0),x=e.w,w=r.$ti.c,v=y._;r.G();){u=r.d
if(u==null)u=w.a(u)
t=x.b;(t==null?x.b=B.a([],v):t).push(u)}this.cUL(e)},
et8(d,e){var x,w=d.BH("width"),v=w==null?null:A.uQ(w),u=v!=null?A.ok(v):null,t=d.a.b
w=A.i7z(t,"colspan")
if(w==null)w=1
x=A.i7z(t,"rowspan")
if(x==null)x=1
this.a.push(new A.cay(e,w,d,x,u))},
cUL(d){var x
if(d.a.b.K(0,"valign"))d.fI(0,D.bqz)
x=this.c
x===$&&B.e()
d.fI(0,x)
A.dG6(d)
$.cjX().j(0,d,!0)}}
A.b8l.prototype={
gfpU(){var x,w=this.a
if(w.length!==0)return C.d.ga7(w)
x=A.i41()
w.push(x)
return x},
eu6(d,e){var x,w=e.a.a,v=w instanceof B.fX?w:null
if(v!==d.a)return
if(A.i2f(e)!=="table-row")return
x=A.i41()
this.a.push(x)
v=x.b
v===$&&B.e()
e.fI(0,v)}}
A.cax.prototype={
cbV(){var x=A.i42("table-row-group")
this.a.push(x)
return x}}
A.cay.prototype={}
A.cQp.prototype={
dIo(d,e){var x,w,v,u,t,s=this,r=s.a
s.cPQ(r,!1)
s.eFY(r.b)
for(r=r.gTC(),r=new B.jz(r.a(),r.$ti.i("jz<1>")),x=y.b,w=y.e;r.G();){v=s.r=r.b
u=A.jem(v)
if(u==null){t=s.w
t===$&&B.e()
u=t}if(s.d==null){s.d=B.a([],x)
s.e=u
t=B.a([],w)
s.f=t
s.w=s.e
s.y=t}t=s.w
t===$&&B.e()
if(!u.fpt(t))s.ble()
s.w=u
v.FX(s)
v=v.gbbk()
s.x=v==null?s.x:v}s.cGI()},
foH(d,e,f){var x,w,v=this
v.ble()
x=v.r
x===$&&B.e()
w=x.gcv(x)
x=v.w
x===$&&B.e()
f.qg(new A.cQt(v,x,w))
x=v.d
if(x!=null)x.push(new A.cQu(d,e,f))},
djT(d,e,f){var x,w,v=this
if(e!=null){x=v.y
x===$&&B.e()
x.push(new A.ait(e,!1,!1))}if(f!=null){x=v.y
x===$&&B.e()
w=v.r
w===$&&B.e()
x.push(new A.ait(f,!0,v.eME(w)))}},
djS(d,e){return this.djT(0,e,null)},
fGo(d,e){return this.djT(0,null,e)},
eFY(d){var x,w=this
w.d=B.a([],y.b)
w.e=d
x=B.a([],y.e)
w.f=x
w.w=w.e
w.y=x},
cPQ(d,e){var x,w,v,u
for(x=d.gbr(0),w=x.length,v=0;v<x.length;x.length===w||(0,B.a7)(x),++v){u=x[v]
if(u instanceof A.AG)this.cPQ(u,!0)}if(e)d.FX(this)},
eME(d){var x
if(this.x)return!0
x=A.irk(d)
if(x!=null&&x.ga4F()===!1)return!0
return!1},
ble(){var x,w,v=this,u=v.y
u===$&&B.e()
x=v.f
x===$&&B.e()
if(u!==x&&u.length!==0){x=v.w
x===$&&B.e()
w=v.d
if(w!=null)w.push(new A.cQs(v,x,u))}v.y=B.a([],y.e)},
cGI(){var x,w,v,u,t=this,s=null
t.ble()
x=t.d
if(x==null)w=s
else{v=B.Y(x).i("d7<1>")
x=B.M(new B.d7(x,v),v.i("ah.E"))
x.$flags=1
w=x}if(w==null)return
t.d=null
if(w.length===0){x=t.f
x===$&&B.e()
x=x.length===0}else x=!1
if(x)return
x=t.f
x===$&&B.e()
v=t.e
v===$&&B.e()
u=A.Et(new A.cQr(t,v,w,x),s,B.b(t.a.a.x)+"--text",s)
t.c.push(u)
$.i9k().cK(C.ED,"Added "+B.b(u.c)+" widget",s,s)},
bge(d,e){var x=y.g,w=e.jR(0,x)
if(w==null)return null
if(w===this.a.b.aC(d).jR(0,x))return null
return w}}
A.ait.prototype={}
A.PW.prototype={
v(d){var x=$.i8w()
B.pB(d)
x=x.a.get(d)
if((x==null?0:x)>0)return this
else return this.dDA(d)},
aWr(d){var x=C.d.ga_(d.w)
this.w.push(x)
this.cBM(new A.cVU(x,d))},
qg(d){return this}}
A.cF7.prototype={}
A.ds2.prototype={}
A.amm.prototype={
bN(d){var x=null
return A.ipD(x,x,x,x,x,x,D.bgf)},
bY(d,e){return y.X.a(e).czF(null,D.bgf,null)}}
A.bk_.prototype={
bN(d){var x,w,v=this,u=null,t=d.N(y.q),s=v.e
if(s==null)if(t==null)s=u
else{x=t.f
s=x==null?u:new A.a5n(x)}w=v.f
if(w==null)if(t==null)w=u
else{x=t.r
w=x==null?u:new A.a5n(x)}return A.ipD(s,w,v.r,v.w,v.x,v.y,v.z)},
bY(d,e){var x,w,v,u=this,t=null,s=d.N(y.q)
y.X.a(e)
x=u.e
if(x==null)if(s==null)x=t
else{w=s.f
x=w==null?t:new A.a5n(w)}v=u.f
if(v==null)if(s==null)v=t
else{w=s.r
v=w==null?t:new A.a5n(w)}e.duI(x,v,u.r,u.w)
e.czF(u.x,u.z,u.y)}}
A.aHh.prototype={
fT(d){return this.f!=d.f||this.r!=d.r}}
A.b5D.prototype={
duI(d,e,f,g){var x=this
if(J.C(d,x.Z)&&J.C(e,x.aO)&&J.C(f,x.ba)&&J.C(g,x.cn))return
x.Z=d
x.aO=e
x.ba=f
x.cn=g
x.aJ()},
czF(d,e,f){var x=this
if(d==x.dB&&J.C(f,x.eA)&&J.C(e,x.hq))return
x.dB=d
x.eA=f
x.hq=e
x.aJ()},
eN(d){var x=this.ab$
if(x==null)return C.be
return d.cr(x.bc(C.bD,this.cD_(d),x.geM()))},
dj(){var x,w=this,v=w.ab$
if(v==null){x=y.k.a(B.ax.prototype.gaG.call(w))
w.fy=new B.av(B.aK(0,x.a,x.b),B.aK(0,x.c,x.d))
return}x=y.k
v.f0(w.cD_(x.a(B.ax.prototype.gaG.call(w))),!0)
w.fy=x.a(B.ax.prototype.gaG.call(w)).cr(v.gW(0))},
cD_(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.Z,h=i==null?j:i.a4(0,0,d.d)
if(h==null)h=d.d
i=k.aO
x=i==null?j:i.a4(0,0,d.b)
if(x==null)x=d.b
i=k.ba
i=i==null?j:i.a4(0,0,d.d)
if(i==null)i=d.c
w=Math.min(h,i)
i=k.cn
i=i==null?j:i.a4(0,0,d.b)
if(i==null)i=d.a
v=Math.min(x,i)
u=isFinite(w)?w:0
t=isFinite(v)?v:0
i=k.eA
s=i==null?j:i.a4(0,u,h)
i=k.hq
r=i==null?j:i.a4(0,t,x)
q=(s==null?j:isFinite(s))===!0?s:j
p=(r==null?j:isFinite(r))===!0?r:j
o=q!=null&&p!=null?k.ebL(h,x,q,p):j
i=o==null
n=i?j:o.b
if(n==null)n=q
if(n==null)n=h
m=i?j:o.a
if(m==null)m=p
if(m==null)m=x
l=i?j:o.b
if(l==null)l=q
if(l==null)l=u
i=i?j:o.a
if(i==null)i=p
return new B.aZ(i==null?t:i,m,l,n)},
ebL(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=this.ab$
if(l==null)return m
x=B.jq(f,m)
w=B.dw()
try{t=l
w.b=t.bc(C.bD,x,t.geM())}catch(s){v=B.T(s)
u=B.b_(s)
t=$.iE2()
t.cK(C.cf,"Skipped guessing child size on tight height (preferred "+B.b(g)+"x"+B.b(f)+")",v,u)
return m}t=l
r=t.bc(C.bD,B.jq(m,g),t.geM())
q=r.a/r.b
p=w.bs().a/w.bs().b
if(isNaN(q)||isNaN(p)||Math.abs(q-p)>0.01)return m
if(this.dB===C.O){o=f*q
n=f}else{n=g/q
o=g}if(o>e){n=e/q
o=e}if(n>d){o=d*q
n=d}return new B.av(o,n)}}
A.cH6.prototype={}
A.bTu.prototype={
a4(d,e,f){return null},
gF(d){return 0},
n(d,e){if(e==null)return!1
return e instanceof A.bTu},
k(d){return"auto"}}
A.aZV.prototype={
a4(d,e,f){return C.m.a4(f*this.a/100,e,f)},
gF(d){return C.m.gF(this.a)},
n(d,e){if(e==null)return!1
return e instanceof A.aZV&&e.a===this.a},
k(d){return C.m.aY(this.a,1)+"%"}}
A.a5n.prototype={
a4(d,e,f){return C.m.a4(this.a,e,f)},
gF(d){return C.m.gF(this.a)},
n(d,e){if(e==null)return!1
return e instanceof A.a5n&&e.a===this.a},
k(d){return C.m.aY(this.a,1)}}
A.br_.prototype={
bN(d){var x=new A.axR(this.e,this.f,null,new B.cA(),B.bJ(y.v))
x.bQ()
x.scT(null)
return x},
bY(d,e){var x
y.gl.a(e)
x=this.e
if(e.Z!==x){e.Z=x
e.aJ()}x=this.f
if(e.aO!==x){e.aO=x
e.aJ()}}}
A.axR.prototype={
gamV(){var x,w=this.Z
if(w==1/0||w==-1/0)w=0
x=this.aO
return w+(x==1/0||x==-1/0?0:x)},
eN(d){return this.cNx(this.ab$,d,B.n7())},
cD(d){var x=this.ab$
if(x==null)return this.gamV()
return x.bc(C.cC,d,x.gcX())+this.gamV()},
cN(d){var x=this.ab$
if(x==null)return this.gamV()
return x.bc(C.d9,d,x.gdA())+this.gamV()},
dj(){var x=this
return x.fy=x.cNx(x.ab$,y.k.a(B.ax.prototype.gaG.call(x)),B.qt())},
cNx(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
if(d==null)return e.cr(new B.av(k.gamV(),0))
x=k.Z
if(x==1/0||x==-1/0)x=0
w=k.aO
v=f.$2(d,e.xb(new B.a_(x,0,w==1/0||w==-1/0?0:w,0)))
u=e.b
t=k.Z
x=k.aO
if(isFinite(u))w=t==1/0||t==-1/0||x==1/0||x==-1/0
else w=!1
if(!w){w=v.a
s=t==1/0||t==-1/0?0:t
r=x==1/0||x==-1/0?0:x
u=w+s+r}q=e.cr(new B.av(u,v.b))
if(f===B.qt()){p=q.a
o=Math.max(0,p-v.a)
n=t==1/0||t==-1/0?p:t
m=n+(x==1/0||x==-1/0?p:x)
l=m===0?0:o/m*n
x=d.b
x.toString
y.eF.a(x).a=new B.V(Math.min(t,l),0)}return q}}
A.aae.prototype={
U(){return new A.bYd()}}
A.bYd.prototype={
ae(){this.ai()
this.e=this.a.d},
b8(d){var x=this
x.bg(d)
if(!x.d)x.e=x.a.d},
v(d){var x=this.e
x===$&&B.e()
return new A.b1q(x,new A.eDe(this),this.a.c,null)}}
A.br5.prototype={
v(d){var x=d.N(y.M)
x=x==null?null:x.f
return x!==!1?this.c:C.au}}
A.aaf.prototype={
v(d){var x=d.N(y.M),w=x==null?null:x.f
if(w==null)return C.au
x=w?D.c3b:D.c3a
return new A.aag(x,this.c,null)}}
A.bra.prototype={
v(d){var x=null
return B.cW(x,this.c,C.z,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new A.cXJ(d),x,x,x,x,x,x,x,x,x,!1,C.aV)}}
A.b1q.prototype={
fT(d){return this.f!==d.f}}
A.br7.prototype={
th(d){return this.x},
bN(d){var x=this
return A.j9e(C.o,x.w,x.e,x.f,C.j,x.z,x.th(d),C.n)},
bY(d,e){var x=this,w=x.e
if(e.C!==w){e.C=w
e.aJ()}w=x.f
if(e.ak!==w){e.ak=w
e.aJ()}if(e.ah!==C.j){e.ah=C.j
e.aJ()}w=x.w
if(e.az!==w){e.az=w
e.aJ()}w=x.th(d)
if(e.aF!=w){e.aF=w
e.aJ()}if(e.aU!==C.n){e.aU=C.n
e.aJ()}w=x.z
if(e.aS!==w){e.aS=w
e.aJ()}if(C.o!==e.a1){e.a1=C.o
e.bv()
e.f3()}}}
A.b1r.prototype={
jS(d){if(!(d.b instanceof B.ni))d.b=new B.ni(null,null,C.W)},
aAO(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
if(k.az===C.hA)return 0
x=k.C
w=k.aM$
if(x===f){for(x=y.L,v=0,u=0,t=0;w!=null;){s=w.b
s.toString
r=x.a(s).e
if(r==null)r=0
v+=r
if(r>0){s=d.$2(w,e)
q=w.b
q.toString
q=x.a(q).e
t=Math.max(t,s/(q==null?0:q))}else u+=d.$2(w,e)
s=w.b
s.toString
w=x.a(s).b4$}return t*v+u}else{for(x=y.L,v=0,u=0,p=0;w!=null;){s=w.b
s.toString
r=x.a(s).e
if(r==null)r=0
v+=r
o=B.dw()
n=B.dw()
if(r===0){switch(k.C.a){case 0:s=w.gcX()
m=C.cC.h2(w.dy,1/0,s)
if(o.b!==o)B.aC(B.L9(o.a))
o.b=m
s=d.$2(w,m)
if(n.b!==n)B.aC(B.L9(n.a))
n.b=s
break
case 1:s=w.gdz()
m=C.d5.h2(w.dy,1/0,s)
if(o.b!==o)B.aC(B.L9(o.a))
o.b=m
s=d.$2(w,m)
if(n.b!==n)B.aC(B.L9(n.a))
n.b=s
break}s=o.b
if(s===o)B.aC(B.v5(o.a))
u+=s
s=n.b
if(s===n)B.aC(B.v5(n.a))
p=Math.max(p,B.A9(s))}s=w.b
s.toString
w=x.a(s).b4$}l=Math.max(0,(e-u)/v)
w=k.aM$
while(w!=null){s=w.b
s.toString
r=x.a(s).e
if(r==null)r=0
if(r>0)p=Math.max(p,B.A9(d.$2(w,l*r)))
s=w.b
s.toString
w=x.a(s).b4$}return p}},
cN(d){return this.aAO(new A.eDi(),d,C.aI)},
cD(d){return this.aAO(new A.eDg(),d,C.aI)},
cE(d){return this.aAO(new A.eDh(),d,C.O)},
cH(d){return this.aAO(new A.eDf(),d,C.O)},
jE(d){if(this.C===C.aI)return this.Ul(d)
return this.aPt(d)},
acD(d){switch(this.C.a){case 0:return d.b
case 1:return d.a}},
acE(d){switch(this.C.a){case 0:return d.a
case 1:return d.b}},
eN(d){var x
if(this.az===C.hA)return C.be
x=this.cNz(d,B.n7())
switch(this.C.a){case 0:return d.cr(new B.av(x.a,x.b))
case 1:return d.cr(new B.av(x.b,x.a))}},
cNz(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=a7.a,d=a7.b,a0=a7.c,a1=a7.d,a2=g.acE(new B.av(B.aK(1/0,e,d),B.aK(1/0,a0,a1))),a3=isFinite(a2),a4=g.aM$,a5=new WeakMap(),a6=!1
switch(g.az.a){case 0:break
case 2:break
case 1:break
case 4:break
case 3:a6=!0
break
default:a6=f}for(x=y.L,w=f,v=0,u=0,t=0;a4!=null;){s=a4.b
s.toString
x.a(s)
r=s.e
if(r==null)r=0
if(r>0){v+=r
w=a4}else{q=f
if(a6){switch(g.C.a){case 0:q=B.jq(a1,f)
break
case 1:q=B.jq(f,d)
break}a6=!0}else{switch(g.C.a){case 0:q=new B.aZ(0,1/0,0,a1)
break
case 1:q=new B.aZ(0,d,0,1/0)
break}a6=!1}p=a8.$2(a4,q)
o=g.acE(p)
if(a3&&o>a2){n=C.m.R(o-a2)
a5.set(a4,n)
v+=n
w=a4}else{t+=o
u=Math.max(u,g.acD(p))}}a4=s.b4$}m=Math.max(0,(a3?a2:0)-t)
if(v>0){l=a3?m/v:0/0
a4=g.aM$
for(k=0;a4!=null;){r=a5.get(a4)
if(r==null){s=a4.b
s.toString
s=x.a(s).e
r=s==null?0:s}if(r>0){if(a3)j=a4===w?m-k:l*r
else j=1/0
i=B.dw()
s=a4.b
s.toString
s=x.a(s).f
switch((s==null?C.fY:s).a){case 0:if(i.b!==i)B.aC(B.L9(i.a))
i.b=j
break
case 1:if(i.b!==i)B.aC(B.L9(i.a))
i.b=0
break}h=a6?g.acD(new B.av(B.aK(1/0,e,d),B.aK(1/0,a0,a1))):0
switch(g.C.a){case 0:s=i.b
if(s===i)B.aC(B.v5(i.a))
q=a7.fbi(j,h,s)
break
case 1:s=i.b
if(s===i)B.aC(B.v5(i.a))
q=a7.fbh(j,s,h)
break
default:q=f}p=a8.$2(a4,q)
t+=g.acE(p)
k+=j
u=Math.max(u,g.acD(p))}s=a4.b
s.toString
a4=x.a(s).b4$}}return new A.eJi(a3&&g.ah===C.j?a2:t,u,t)},
dj(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g="RenderBox was not laid out: ",f=y.k.a(B.ax.prototype.gaG.call(h)),e=h.cNz(f,B.qt()),d=e.a,a0=e.b,a1=0
if(h.az===C.hA){x=h.aM$
for(w=y.L,v=0,u=0;x!=null;){t=x.DP(h.aS,!0)
if(t!=null){a1=Math.max(a1,t)
v=Math.max(t,v)
s=x.fy
u=Math.max((s==null?B.aC(B.aL(g+B.Z(x).k(0)+"#"+B.dk(x))):s).b-t,u)
a0=Math.max(v+u,a0)}s=x.b
s.toString
x=w.a(s).b4$}}switch(h.C.a){case 0:h.fy=f.cr(new B.av(d,a0))
d=h.gW(0).a
a0=h.gW(0).b
break
case 1:h.fy=f.cr(new B.av(a0,d))
d=h.gW(0).b
a0=h.gW(0).a
break}r=d-e.c
h.X=Math.max(0,-r)
q=Math.max(0,r)
w=h.ak.a
switch(w){case 0:case 1:case 2:p=0
break
case 3:s=h.ez$
p=s>1?q/(s-1):0
break
case 4:s=h.ez$
p=s>0?q/s:0
break
case 5:s=h.ez$
p=s>0?q/(s+1):0
break
default:p=null}o=0
switch(w){case 0:break
case 1:o=q
break
case 2:o=q/2
break
case 3:break
case 4:o=p/2
break
case 5:o=p
break
default:o=null}w=h.C
s=A.itJ(w,h.aF,h.aU)
n=s===!1
m=n?d-o:o
x=h.aM$
for(s=y.L,l=a0/2;x!=null;){k=x.b
k.toString
s.a(k)
j=h.az
i=0
switch(j.a){case 0:case 1:if(!(A.itJ(B.ivc(w),h.aF,h.aU)===(j===C.y))){w=x.fy
i=a0-h.acD(w==null?B.aC(B.aL(g+B.Z(x).k(0)+"#"+B.dk(x))):w)}break
case 2:w=x.fy
i=l-h.acD(w==null?B.aC(B.aL(g+B.Z(x).k(0)+"#"+B.dk(x))):w)/2
break
case 3:break
case 4:if(w===C.aI){t=x.DP(h.aS,!0)
i=t!=null?a1-t:0}break
default:i=null}if(n){w=x.fy
m-=h.acE(w==null?B.aC(B.aL(g+B.Z(x).k(0)+"#"+B.dk(x))):w)}w=h.C
switch(w.a){case 0:k.a=new B.V(m,i)
break
case 1:k.a=new B.V(i,m)
break}if(n)m-=p
else{j=x.fy
m+=h.acE(j==null?B.aC(B.aL(g+B.Z(x).k(0)+"#"+B.dk(x))):j)+p}x=k.b4$}},
ij(d,e){return this.x9(d,e)},
bi(d,e){var x,w,v,u=this
if(!(u.X>1e-10)){u.xa(d,e)
return}if(u.gW(0).gac(0))return
x=u.aT
w=u.cx
w===$&&B.e()
v=u.gW(0)
x.sca(0,d.wj(w,e,new B.ap(0,0,0+v.a,0+v.b),u.gajT(),u.a1,x.a))},
q(){this.aT.sca(0,null)
this.dGr()},
z8(d){var x
switch(this.a1.a){case 0:return null
case 1:case 2:case 3:if(this.X>1e-10){x=this.gW(0)
x=new B.ap(0,0,0+x.a,0+x.b)}else x=null
return x}},
lb(){return this.a9p()}}
A.eJi.prototype={}
A.cfs.prototype={
bM(d){var x,w,v
this.i5(d)
x=this.aM$
for(w=y.L;x!=null;){x.bM(d)
v=x.b
v.toString
x=w.a(v).b4$}},
bA(d){var x,w,v
this.hY(0)
x=this.aM$
for(w=y.L;x!=null;){x.bA(0)
v=x.b
v.toString
x=w.a(v).b4$}}}
A.cft.prototype={}
A.bbj.prototype={
q(){var x,w,v
for(x=this.xi$,w=x.length,v=0;v<w;++v)x[v].q()
this.l3()}}
A.br9.prototype={
bN(d){var x=new A.ayh(this.e,0,null,null,new B.cA(),B.bJ(y.v))
x.bQ()
return x},
bY(d,e){var x=this.e
y.cx.a(e).seY(x)
return x}}
A.T8.prototype={}
A.ayh.prototype={
seY(d){if(this.C===d)return
this.C=d
this.aJ()},
jE(d){return this.aPt(d)},
eN(d){return this.cGO(this.aM$,d,B.n7())},
cH(d){var x=this.aM$
x=x==null?null:x.cH(d)
return x==null?this.cBn(d):x},
cD(d){var x=this.aM$
x=x==null?null:x.cD(d)
return x==null?this.cBo(d):x},
cE(d){var x=this.aM$
x=x==null?null:x.cE(d)
return x==null?this.cBp(d):x},
cN(d){var x=this.aM$
x=x==null?null:x.bc(C.d9,d,x.gdA())
return x==null?this.cBq(d):x},
ij(d,e){return this.x9(d,e)},
bi(d,e){return this.xa(d,e)},
dj(){var x=this
return x.fy=x.cGO(x.aM$,y.k.a(B.ax.prototype.gaG.call(x)),B.qt())},
jS(d){if(!(d.b instanceof A.T8))d.b=new A.T8(null,null,C.W)},
cGO(d,e,f){var x,w,v,u,t,s,r,q,p,o
if(d==null)return new B.av(B.aK(0,e.a,e.b),B.aK(0,e.c,e.d))
x=d.b
x.toString
w=y.u
w.a(x)
v=f.$2(d,e)
u=x.b4$
x=u!=null
t=x?f.$2(u,new B.aZ(0,e.b,0,e.d)):C.be
s=v.b
s=s>0?s:t.b
r=v.a
q=e.cr(new B.av(r,s))
if(f===B.qt()&&x){p=u.DP(C.b9,!0)
if(p==null)p=t.b
o=d.DP(C.b9,!0)
if(o==null)o=p
x=u.b
x.toString
w.a(x)
w=this.C===C.ad?-t.a-5:r+5
x.a=new B.V(w,o-p)}return q}}
A.cfA.prototype={
bM(d){var x,w,v
this.i5(d)
x=this.aM$
for(w=y.u;x!=null;){x.bM(d)
v=x.b
v.toString
x=w.a(v).b4$}},
bA(d){var x,w,v
this.hY(0)
x=this.aM$
for(w=y.u;x!=null;){x.bA(0)
v=x.b
v.toString
x=w.a(v).b4$}}}
A.cfB.prototype={}
A.aag.prototype={
bN(d){var x=new A.b2p(this.d,B.a([],y.cI),this.e,new B.cA(),B.bJ(y.v))
x.bQ()
return x},
bY(d,e){y.cA.a(e)
e.sfrT(this.d)
e.sjH(this.e)}}
A.b2p.prototype={
sfrT(d){if(d===this.C)return
this.C=d
this.aJ()},
gbmt(){var x,w,v=this,u=null,t=v.ak
if(t!=null)return t
x=B.BE(u,u,u,u,B.dn(u,u,u,u,u,u,u,u,u,v.az,"1."),C.Q,C.ad,u,C.j7,C.cj)
x.zp()
v.ak=x
w=v.ah
C.d.ag(w)
C.d.D(w,x.TQ())
return x},
sjH(d){var x=this
if(d.n(0,x.az))return
x.ak=null
x.az=d
x.aJ()},
jE(d){return this.gbmt().b.a.nH(d)},
eN(d){var x=this.gbmt().b,w=x.c
x=x.a.c
return d.cr(new B.av(w,x.gbB(x)))},
bi(d,e){var x,w,v,u,t,s,r,q=this,p=d.gcG(0),o=q.ah,n=o.length!==0?C.d.ga_(o):null
o=q.gW(0)
x=n!=null&&isFinite(n.gak1())&&isFinite(n.gaqa())?q.gW(0).b-n.gak1()-n.gaqa()+n.gaqa()*0.7:q.gW(0).b/2
w=e.aE(0,new B.V(o.a/2,x))
x=q.az
v=x.b
u=x.r
if(v==null||u==null)return
t=u*0.2
switch(q.C.a){case 0:$.b6()
o=B.bp()
o.r=v.gB(v)
o.c=1
o.b=C.c2
p.ii(w,t*0.9,o)
break
case 1:$.b6()
o=B.bp()
o.r=v.gB(v)
p.ii(w,t,o)
break
case 2:s=t*2
o=p.a
J.cz(o.save())
x=s/2
o.translate(w.a-x,w.b-x)
r=B.dG($.b6().r)
r.aK(new B.cS(s,x))
r.aK(new B.cS(0,s))
x=B.bp()
x.r=v.gB(v)
x.b=C.cg
p.f6(r,x)
o.restore()
break
case 3:s=t*2
o=p.a
J.cz(o.save())
x=s/2
o.translate(w.a-x,w.b-x)
r=B.dG($.b6().r)
r.aK(new B.cS(s,0))
r.aK(new B.cS(x,s))
x=B.bp()
x.r=v.gB(v)
x.b=C.cg
p.f6(r,x)
o.restore()
break
case 4:o=B.wp(w,t*0.8)
$.b6()
x=B.bp()
x.r=v.gB(v)
p.fK(o,x)
break}},
dj(){var x=y.k.a(B.ax.prototype.gaG.call(this)),w=this.gbmt().b,v=w.c
w=w.a.c
this.fy=x.cr(new B.av(v,w.gbB(w)))}}
A.aah.prototype={
O(){return"HtmlListMarkerType."+this.b}}
A.aoB.prototype={
bN(d){var x=new A.b6p(0,null,null,new B.cA(),B.bJ(y.v))
x.bQ()
return x}}
A.Tl.prototype={}
A.b6p.prototype={
jE(d){var x,w,v=this.aM$
if(v==null)return this.a9o(d)
x=v.rl(d)
if(x==null)x=0
w=v.b
w.toString
return y.l.a(w).a.b+x},
eN(d){return A.ipL(this.aM$,d,B.n7())},
cH(d){var x,w,v,u=this.aM$
if(u==null)return this.cBn(d)
x=u.cH(d)
w=u.b
w.toString
v=y.l.a(w).b4$
if(v==null)return x
return x+v.cH(d)},
cD(d){var x,w,v,u=this.aM$
if(u==null)return this.cBo(d)
x=u.cD(d)
w=u.b
w.toString
v=y.l.a(w).b4$
if(v==null)return x
return Math.max(x,v.cD(d))},
cE(d){var x,w,v,u=this.aM$
if(u==null)return this.cBp(d)
x=u.cE(d)
w=u.b
w.toString
v=y.l.a(w).b4$
if(v==null)return x
return x+v.cE(d)},
cN(d){var x,w,v,u=this.aM$
if(u==null)return this.cBq(d)
x=u.bc(C.d9,d,u.gdA())
w=u.b
w.toString
v=y.l.a(w).b4$
if(v==null)return x
return Math.min(x,v.bc(C.d9,d,v.gdA()))},
ij(d,e){return this.x9(d,e)},
bi(d,e){return this.xa(d,e)},
dj(){return this.fy=A.ipL(this.aM$,y.k.a(B.ax.prototype.gaG.call(this)),B.qt())},
jS(d){if(!(d.b instanceof A.Tl))d.b=new A.Tl(null,null,C.W)}}
A.che.prototype={
bM(d){var x,w,v
this.i5(d)
x=this.aM$
for(w=y.l;x!=null;){x.bM(d)
v=x.b
v.toString
x=w.a(v).b4$}},
bA(d){var x,w,v
this.hY(0)
x=this.aM$
for(w=y.l;x!=null;){x.bA(0)
v=x.b
v.toString
x=w.a(v).b4$}}}
A.chf.prototype={}
A.brb.prototype={
bN(d){var x=this,w=$.iq_
$.iq_=w+1
w=new A.b8i(B.Ig("fwfh.HtmlTable"+w),x.e,x.f,x.r,D.ePz,x.w,x.x,0,null,null,new B.cA(),B.bJ(y.v))
w.bQ()
return w},
bY(d,e){var x,w=this
y.a8.a(e)
x=w.e
if(!J.C(x,e.ak)){e.ak=x
e.aJ()}x=w.f
if(x!==e.ah){e.ah=x
e.aJ()}x=w.r
if(x!==e.az){e.az=x
e.aJ()}x=w.w
if(x!==e.aU){e.aU=x
e.aJ()}x=w.x
if(x!==e.aS){e.aS=x
e.aJ()}}}
A.aoC.prototype={}
A.zb.prototype={
Cv(d){var x,w,v,u=this,t=d.b
t.toString
y.H.a(t)
x=u.f
w=!J.C(t.e,x)
if(w)t.e=x
x=u.r
if(t.f!==x){t.f=x
w=!0}x=u.w
if(t.r!==x){t.r=x
w=!0}x=u.Q
if(t.w!==x){t.w=x
w=!0}x=u.y
if(t.y!==x){t.y=x
w=!0}x=u.x
if(t.x!==x){t.x=x
w=!0}x=u.z
if(!J.C(t.z,x)){t.z=x
w=!0}if(w){v=d.gcv(d)
if(v instanceof B.ax)v.aJ()}}}
A.yg.prototype={}
A.b8h.prototype={}
A.cav.prototype={
d4o(d){var x,w=this
if(d==null){x=w.a
return new A.b8h(C.cc,new B.av(B.aK(0,x.a,x.b),B.aK(0,x.c,x.d)))}return w.dzu(w.dzt(w.dzs(w.dzq(w.dzp(d)))))},
dzp(d){var x,w,v,u,t,s,r,q=B.a([],y.an),p=B.a([],y.gL)
for(x=y.H,w=d,v=0,u=0;w!=null;){t=w.b
t.toString
x.a(t)
p.push(w)
q.push(t)
v=Math.max(v,t.r+t.f)
u=Math.max(u,t.y+t.x)
w=t.b4$}x=this.c
s=x.aU
if(isFinite(s)&&s>0){t=x.gbF7(0)
r=s-(x.gdf_(0)+(v+1)*t+x.gdf0(0))}else r=null
return new A.fAD(r,q,p,v,s,u)},
dzq(d){var x,w,v,u,t,s=d.b,r=B.Y(s).i("E<1,ai?>")
r=B.M(new B.E(s,new A.fAP(d),r),r.i("ah.E"))
r.$flags=1
x=r
w=B.c4(d.d,0,!1,y.i)
for(r=this.c,v=0;v<s.length;++v){u=s[v]
t=x[v]
if(t!=null)A.i4F(w,r,u,t)}r=B.Y(w).i("E<1,ai?>")
r=B.M(new B.E(w,new A.fAQ(),r),r.i("ah.E"))
r.$flags=1
return new A.fAE(d,x,r)},
dzs(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a5.a,i=j.a,h=j.b,g=j.c,f=B.c4(g.length,k,!1,y.aJ),e=B.c4(g.length,k,!1,y.cD),d=a5.c,a0=B.Y(d).i("E<1,ai>"),a1=B.M(new B.E(d,new A.fAR(),a0),a0.i("ah.E")),a2=a1,a3=B.c4(j.d,0,!1,y.i),a4=a2
if(!A.jeo(a4).gaq(0).G())if(i!=null){d=a4
a0=J.L(d)
d=(a0.gac(d)?0:a0.hj(d,A.NO()))<=i}else d=!0
else d=!1
if(d)return new A.cas(a5,a4)
for(d=i!=null,a0=a5.b,q=this.b,p=this.c,o=p.C,n=!0;n;){for(x=0,n=!1;x<g.length;++x){w=g[x]
v=h[x]
if(a0[x]==null&&f[x]==null){m=q.$2(w,C.eX)
f[x]=m
A.i4F(a2,p,v,m.a)
o.cK(C.cf,"Got child#"+B.b(x)+" size without contraints: "+m.k(0),k,k)
n=!0}if(!n&&e[x]==null){u=0/0
try{u=this.dzr(a5,w,a4,v,a2,a3)
if(u!=null)o.cK(C.cff,"Got child#"+B.b(x)+" min width: "+B.b(u),k,k)}catch(l){t=B.T(l)
s=B.b_(l)
r="Could not measure child#"+B.b(x)+" min intrinsic width"
o.cK(C.kO,r,t,s)}if(u!=null){e[x]=u
A.i4F(a3,p,v,u)
n=!0}}}if(d)a4=A.jau(i,a2,a3)}return new A.cas(a5,a4)},
dzr(d,e,f,g,h,i){var x=d.a.a,w=A.i4G(f,g),v=A.i4G(h,g)
if(w>=v){if(x==null)return null
if((C.d.gac(f)?0:C.d.hj(f,A.NO()))<=x)return null
if(v>=A.i4G(i,g))return null}return e.bc(C.d9,1/0,e.gdA())},
dzt(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4.a.a,a0=d.b,a1=d.c,a2=B.c4(a1.length,C.be,!1,y.fW),a3=B.c4(d.f,0,!1,y.i)
for(x=this.b,w=this.c,v=w.C,u=a4.b,t=0;t<a1.length;++t){s=a1[t]
r=a0[t]
q=r.f
p=w.ak
o=p!=null&&w.ah?p.d.b*-1:w.az
n=r.r
m=n+q
B.hv(n,m,u.length,e,e)
l=B.Y(u)
k=new B.d2(u,n,m,l.i("d2<1>"))
k.h_(u,n,m,l.c)
n=k.gac(0)?0:k.hj(0,A.NO())
j=n+(q-1)*o
i=x.$2(s,B.jq(e,j))
v.cK(C.cf,"Got child#"+t+" size with width="+B.b(j)+": "+i.k(0),e,e)
a2[t]=i
o=i.b
q=r.x
p=w.ak
n=p!=null&&w.ah?p.a.b*-1:w.az
h=(o-(q-1)*n)/q
for(o=r.y,g=0;g<q;++g){f=o+g
a3[f]=Math.max(a3[f],h)}}return new A.fAF(a4,a2,a3)},
dzu(b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b5.a,a7=a6.a.a,a8=a7.b,a9=a7.c,b0=this.c,b1=b0.gbF7(0),b2=a7.f,b3=b0.gfB0(0),b4=b0.ak
b4=b4==null?a5:b4.a.b
if(b4==null)b4=0
x=b5.c
w=C.d.gac(x)?0:C.d.hj(x,A.NO())
v=b0.ak
v=v==null?a5:v.c.b
if(v==null)v=0
u=b4+w+(b2+1)*b3+v
v=this.a
t=Math.max(0,(B.aK(u,v.c,v.d)-u)/b2)
b2=b0.gdf_(0)
v=a6.b
b3=C.d.gac(v)?0:C.d.hj(v,A.NO())
s=b2+b3+(a7.d+1)*b1+b0.gdf0(0)
for(b1=b5.b,b2=this.b,b3=b0.C,r=0,q=0;q<a9.length;++q){p=a9[q]
o=a8[q]
n=b1[q]
b4=o.x
m=b0.ak
w=m!=null&&b0.ah?m.a.b*-1:b0.az
l=o.y
k=l+b4
j=x.length
B.hv(l,k,j,a5,a5)
i=B.Y(x)
h=i.c
i=i.i("d2<1>")
g=new B.d2(x,l,k,i)
g.h_(x,l,k,h)
l=g.gac(0)?0:g.hj(0,A.NO())
f=l+(b4-1)*w+t
w=o.f
m=b0.ak
b4=m!=null&&b0.ah?m.d.b*-1:b0.az
l=o.r
k=l+w
B.hv(l,k,v.length,a5,a5)
g=B.Y(v)
e=g.c
g=g.i("d2<1>")
d=new B.d2(v,l,k,g)
d.h_(v,l,k,e)
l=d.gac(0)?0:d.hj(0,A.NO())
a0=l+(w-1)*b4
if(n.b!==f){n=b2.$2(p,new B.aZ(a0,a0,f,f))
f=n.b
a0=n.a
b3.cK(C.cf,"Laid out child#"+q+" at "+B.b(a0)+"x"+B.b(f),a5,a5)}if(o.w)a1=0
else{b4=b0.ak
b4=b4==null?a5:b4.a.b
a1=b4==null?0:b4}b4=o.y
m=b0.ak
w=m!=null&&b0.ah?m.a.b*-1:b0.az
B.hv(0,b4,j,a5,a5)
i=new B.d2(x,0,b4,i)
i.h_(x,0,b4,h)
a2=a1+(i.gac(0)?0:i.hj(0,A.NO()))+(b4+1)*w
if(p.fy!=null){b4=b0.ak
w=b4==null
a1=w?a5:b4.d.b
if(a1==null)a1=0
l=o.r
b4=!w&&b0.ah?b4.d.b*-1:b0.az
B.hv(0,l,v.length,a5,a5)
g=new B.d2(v,0,l,g)
g.h_(v,0,l,e)
a3=a1+(g.gac(0)?0:g.hj(0,A.NO()))+(l+1)*b4
switch(b0.aS.a){case 1:a4=a3
break
case 0:a4=s-a0-a3
break
default:a4=a5}o.a=new B.V(a4,a2)}if(o.w)r=Math.max(r,a2+f)}return new A.b8h(new B.ap(0,r,0+s,r+(u-r)),new B.av(s,u))}}
A.fAD.prototype={}
A.fAE.prototype={}
A.cas.prototype={}
A.fAF.prototype={}
A.b8i.prototype={
gbF7(d){var x=this.ak
return x!=null&&this.ah?x.d.b*-1:this.az},
gdf_(d){var x=this.ak
x=x==null?null:x.d.b
return x==null?0:x},
gdf0(d){var x=this.ak
x=x==null?null:x.b.b
return x==null?0:x},
gfB0(d){var x=this.ak
return x!=null&&this.ah?x.a.b*-1:this.az},
jE(d){var x,w,v,u,t=this.aM$
for(x=y.H,w=null;t!=null;){v=t.b
v.toString
x.a(v)
if(v.y===0){u=t.rl(d)
if(u!=null){u+=v.a.b
if(w!=null){if(u<w)w=u}else w=u}}t=v.b4$}return w},
eN(d){return new A.cav(d,B.n7(),this).d4o(this.aM$).b},
ij(d,e){return this.x9(d,e)},
bi(d,e){var x,w,v,u,t,s,r,q,p,o,n=this.aF.a
if(!n.gac(0)){x=this.ak
if(x!=null)x.bi(d.gcG(0),n.iY(e))}w=this.aM$
for(x=y.H,v=e.a,u=e.b;w!=null;){t=w.b
t.toString
x.a(t)
s=t.a
r=s.a+v
s=s.b+u
q=w.fy
if(q==null)q=B.aC(B.aL("RenderBox was not laid out: "+B.Z(w).k(0)+"#"+B.dk(w)))
d.iy(w,new B.V(r,s))
p=t.e
if(p!=null){if(d.e==null)d.tD()
o=d.e
o.toString
p.bi(o,new B.ap(r,s,r+q.a,s+q.b))}w=t.b4$}},
dj(){var x=this,w=y.k
x.aF=new A.cav(w.a(B.ax.prototype.gaG.call(x)),B.qt(),x).d4o(x.aM$)
x.fy=w.a(B.ax.prototype.gaG.call(x)).cr(x.aF.b)},
jS(d){if(!(d.b instanceof A.yg))d.b=new A.yg(null,null,C.W)}}
A.chx.prototype={
bM(d){var x,w,v
this.i5(d)
x=this.aM$
for(w=y.H;x!=null;){x.bM(d)
v=x.b
v.toString
x=w.a(v).b4$}},
bA(d){var x,w,v
this.hY(0)
x=this.aM$
for(w=y.H;x!=null;){x.bA(0)
v=x.b
v.toString
x=w.a(v).b4$}}}
A.chy.prototype={}
A.aWr.prototype={
U(){return new A.ccU(B.D(y.S,y.F))}}
A.bK9.prototype={
bN(d){var x=new A.YW(A.hjX(d),this.e,null,new B.cA(),B.bJ(y.v))
x.bQ()
x.scT(null)
return x},
bY(d,e){var x
y.cJ.a(e)
x=A.hjX(d)
if(x!==e.Z){e.Z=x
e.aJ()}x=this.e
if(x!==e.aO){e.aO=x
e.aJ()}return e}}
A.ccU.prototype={
v(d){return new A.b9u(this.d,new A.ccS(this.a.c,null),null)}}
A.b9u.prototype={
fT(d){return this.f!==d.f}}
A.ccS.prototype={
bN(d){var x=new A.ccT(A.hjX(d),null,new B.cA(),B.bJ(y.v))
x.bQ()
x.scT(null)
return x},
bY(d,e){var x=A.hjX(d)
if(x!==e.Z){e.Z=x
e.bv()}return null}}
A.ccT.prototype={
bi(d,e){this.Z.ag(0)
this.qp(d,e)}}
A.YW.prototype={
eN(d){return this.d0G(this.ab$,d,B.n7())},
bi(d,e){var x,w,v,u,t,s,r,q=this,p=e.a+0,o=e.b+q.cn,n=q.ab$
if(n==null)return
x=n.nH(C.b9)
w=q.ba=o+(x==null?0:x)
v=q.Z
x=v.K(0,q.aO)
u=q.aO
if(x){x=v.h(0,u)
x.toString
t=J.az(x,new A.fJP(),y.i).hj(0,new A.fJQ())
x=v.h(0,q.aO)
x.toString
J.cv(x,q)
if(t>w){s=t-w
if(q.gW(0).b-n.gW(0).b>=s){d.iy(n,new B.V(p+0,o+s))
return}else{q.cn+=s
q.ba=t
$.aN.k3$.push(new A.fJR(q))
return}}else if(t<w){x=v.h(0,q.aO)
x.toString
x=J.b1(x)
while(x.G()){u=x.gT(x)
if(u===q)continue
r=u.ba
r.toString
s=w-r
if(s!==0){u.cn+=s
u.ba=w
$.aN.k3$.push(new A.fJS(u))}}}}else v.j(0,u,B.a([q],y.b5))
d.iy(n,new B.V(p,o))},
dj(){var x=this
return x.fy=x.d0G(x.ab$,y.k.a(B.ax.prototype.gaG.call(x)),B.qt())},
lb(){return"_ValignBaselineRenderObject(index: "+this.aO+")"},
d0G(d,e,f){var x=new B.aZ(0,e.b,0,e.d).xb(new B.a_(0,this.cn,0,0)),w=d!=null?f.$2(d,x):C.be
return e.cr(w.aE(0,new B.V(0,this.cn)))}}
var z=a.updateTypes(["K<h,h>(fX)","ai(ai)","q_(q_)","ph(q_,ph)","~(q_,q_)","~(q_)","n(q_,ph)","~(q_,n)","tO(iq)","fK(fK,h)","ph?(q_,U<ph>)","n(Q,n)","I(N7)","fK(fK,aHg)","fK(fK,ai)","fK(fK,iq)","aaf(Q,n)","aoC(Q)","zb?(Q)","n(n)","aae(Q,n)","I(ait)","aa<I>(h{curve:qC,duration:ca,jumpCurve:qC,jumpDuration:ca})","ai?(yg)","ai(YW)","a2g(h)","n(ph)","r(N7,N7)","ayB(Q,n)","fK(fK,a02)","fK(fK,Eg)","fK(fK,tT)","fK(fK,Gt)","aoB(Q,n)","fK(fK,u<u<iq>>)","fK(fK,Q?)","fK(fK,iA)","I(zb?)","ai(ai,ai)","fK(fK,a6)","fK(fK,u<h>)","xU?(amp)","zb?(zb?(Q))","fK(fK,Vj)","fK(fK,XF)","aZ(aZ)"])
A.hC0.prototype={
$0(){var x=b.G.performance
if(x!=null&&B.tZ(x,"Object")){B.ku(x)
if(x.measure!=null&&x.mark!=null&&x.clearMeasures!=null&&x.clearMarks!=null)return x}return null},
$S:697}
A.hzQ.prototype={
$0(){var x=b.G.JSON
if(x!=null&&B.tZ(x,"Object"))return B.ku(x)
throw B.v(B.bO("Missing JSON.parse() support"))},
$S:398}
A.cH5.prototype={
$1(d){return d==="null"},
$S:9}
A.cZK.prototype={
$1(d){return!this.a.b(d)},
$S:196}
A.hC6.prototype={
$1(d){return d.fU(this.a)},
$S:z+41}
A.def.prototype={
$1(d){return this.a.b(d)},
$S:196}
A.cXN.prototype={
$2(d,e){var x,w,v,u,t=null
if(e.b!=null)return e.gfA2()
else{x=e.c
w=this.a
v=w.e
u=w.d
if(x!=null){v===$&&B.e()
u===$&&B.e()
x=v.ceA(d,new A.AG(v,t,D.F9,new A.a5N(),$.ck9(),u,t),x,e.d)
return w.a1v(x)}else{v===$&&B.e()
u===$&&B.e()
x=v.ftZ(d,new A.AG(v,t,D.F9,new A.a5N(),$.ck9(),u,t))
return w.a1v(x)}}},
$S:3341}
A.cXM.prototype={
$0(){return this.a.a1v(C.au)},
$S:159}
A.dTs.prototype={
$2(d,e){var x=this,w=x.b,v=new A.br7(w,x.c,x.a,x.e,x.d,x.f,null)
switch(w.a){case 0:v=A.idI(v,null,e.b)
break
case 1:v=A.idI(v,e.d,null)
break}return v},
$S:82}
A.dTt.prototype={
$3(d,e,f){var x=this.a.ceA(d,this.b,e,this.c)
return x},
$S:217}
A.dTu.prototype={
$3(d,e,f){var x,w,v,u
if(f==null)return e
x=f.b
w=f.a
v=x!=null&&x>0?w/x:null
u=this.a.deF(d,this.b,v,this.c)
return u},
$C:"$3",
$R:3,
$S:379}
A.dTv.prototype={
$1(d){var x,w,v,u=this,t=null,s=B.at2(d),r=s!=null
if(r){x=d.N(y.eo)
x=(x==null?C.oe:x).x
w=x==null?C.Wu:x}else w=t
v=B.a3s(t,t,u.a,A.aFk(u.b).b,w,s,u.c,t,u.d,u.e,u.f,t,C.c9,C.cj)
return r?B.ig(v,C.ui,t,t,t,t,t,!0):v},
$S:34}
A.dTr.prototype={
$2(d,e){var x=null
return B.H(x,x,C.o,x,x,x,x,x,x,x,x,x,x,x)},
$S:3342}
A.cH4.prototype={
$1(d){return!(d instanceof B.acl)&&!(d instanceof B.acm)},
$S:1157}
A.cG1.prototype={
$1(d){return d.a+": "+d.b},
$S:271}
A.hC5.prototype={
$1(d){return d.a.x!=null},
$S:z+12}
A.eiV.prototype={
$1(d){return d.a+": "+d.b},
$S:271}
A.cpw.prototype={
$1(d){var x=this.a,w=x.c,v=x.a
w.a.push(v)
w.b.j(0,x.b,v)
A.irm(d,v)
return d},
$S:z+2}
A.cpy.prototype={
$1(d){var x=this.a
d.a5K(A.SF(d,A.Et(new A.cpu(x,d),null,B.b(d.a.x)+"--anchor#"+x.b,null),C.oV,C.b9))},
$S:z+5}
A.cpu.prototype={
$2(d,e){var x=this.b.b.aC(d).jR(0,y.j)
x=x==null?null:x.r
return new B.N(null,x,null,this.a.a)},
$S:1158}
A.cpx.prototype={
$2(d,e){return e.qg(new A.cpv(this.a))},
$S:z+3}
A.cpv.prototype={
$2(d,e){return new B.N(null,null,e,this.a.a)},
$S:1158}
A.cpz.prototype={
$2(d,e){$.iDc().j(0,e,this.a)
return e},
$S:155}
A.cpp.prototype={
$0(){return"Scrolling to "+this.a.k(0)+"..."},
$S:14}
A.cpq.prototype={
$0(){return"Scrolling up to "+this.a.k(0)+"..."},
$S:14}
A.cpr.prototype={
$0(){return"Scrolling down to "+this.a.k(0)+"..."},
$S:14}
A.cps.prototype={
$1(d){var x=this
return x.a.a_8(x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x)},
$S:6}
A.cF8.prototype={
$1(d){return y.c.b(d)?d.v(this.a):d},
$S:1038}
A.cF9.prototype={
$1(d){return!d.wB(0,C.au)},
$S:631}
A.dG_.prototype={
$2(d,e){var x,w=A.irt(d),v=w.b,u=w.c
if(v==null&&u==null)return e
x=this.a
return e.qg(new A.dFZ(x,d,v,x.a.f0I(d,u,w.a,w.e,w.d)))},
$S:z+3}
A.dFZ.prototype={
$2(d,e){var x=this,w=x.b,v=w.b.aC(d),u=x.c,t=u==null?null:u.fU(v)
return x.a.a.f0H(w,e,t,x.d)},
$S:157}
A.dG0.prototype={
$1(d){var x=A.irt(d).b
if(x==null)return
d.b.of(A.jnG(),x,y.V)},
$S:z+5}
A.dG4.prototype={
$1(d){var x,w=d.f
w.toString
if(d.y!==!0)return d
x=A.cjs(d)
if(x.gDg())return d
A.dG6(d)
w=w.YX(0)
w.l6(0,A.SF(d,A.Et(new A.dG3(this.a,d,x),d.ap(),B.b(d.a.x)+"--border",null),C.oV,C.b9))
return w},
$S:z+2}
A.dG3.prototype={
$2(d,e){var x=this.a.cDR(this.b,d,e,this.c)
return x},
$S:155}
A.dG5.prototype={
$2(d,e){var x,w=$.i8z()
B.pB(d)
if(J.C(w.a.get(d),!0))return e
x=A.cjs(d)
if(x.gDg())return e
A.dG6(d)
return A.Et(new A.dG2(this.a,d,e,x),null,B.b(d.a.x)+"--border",null)},
$S:z+3}
A.dG2.prototype={
$2(d,e){var x=this
return x.a.cDR(x.b,d,x.c,x.d)},
$S:157}
A.dGb.prototype={
$2(d,e){var x,w,v,u,t,s,r=null,q={}
if(e.length===0)return r
q.a="row"
q.b=q.c="flex-start"
for(x=J.b1(A.hZR(d.a));x.G();){w=x.gT(x)
v=A.HG(w)
u=v.length===1?C.d.ga_(v):r
t=u instanceof B.fp?A.oX(u):r
if(t!=null){s=w.f
w=w.b
switch(s?"*"+w.b:w.b){case"flex-direction":q.a=t
break
case"justify-content":q.c=t
break
case"align-items":q.b=t
break}}}return A.Et(new A.dGa(q,this.a,d,e),r,"flex",r)},
$S:z+10}
A.dGa.prototype={
$2(d,e){var x,w,v,u,t=this,s=t.c,r=s.b.aC(d),q=t.d
q=new B.E(q,new A.dG8(d),B.Y(q).i("E<1,n>")).fZ(0,new A.dG9())
q=B.M(q,q.$ti.i("U.E"))
q.$flags=1
x=t.a
w=A.j2O(x.b)
v=x.a==="row"?C.aI:C.O
x=A.j2P(x.c)
u=r.jR(0,y.w)
if(u==null)u=C.ad
return t.b.a.f0L(s,q,w,v,x,u)},
$S:157}
A.dG8.prototype={
$1(d){var x=d.v(this.a)
return x},
$S:z+26}
A.dG9.prototype={
$1(d){return!d.wB(0,C.au)},
$S:631}
A.dGe.prototype={
$2(d,e){var x,w,v,u,t,s=A.hVN(d,"margin")
if(s==null)return e
x=s.f
w=s.a
v=d.b
u=B.a([],y.E)
if(x!=null&&x.a>0)u.push(A.i_F(x,v,B.b(d.a.x)+"--marginTop"))
if(s.gc7A()||s.gc7B())u.push(e.qg(new A.dGd(v,s)))
else u.push(e)
if(w!=null&&w.a>0)u.push(A.i_F(w,v,B.b(d.a.x)+"--marginBottom"))
t=this.a.a.bC4(d,u)
return t==null?e:t},
$S:z+3}
A.dGd.prototype={
$2(d,e){var x,w,v,u=null,t=this.a.aC(d),s=this.b,r=s.b3n(t),q=r==null,p=q?u:r.fU(t)
if(p==null)p=0
x=Math.max(p,0)
w=s.b3x(t)
s=w==null
p=s?u:w.fU(t)
if(p==null)p=0
v=Math.max(p,0)
q=(q?u:r.b)===D.Xc?1/0:x
return new A.br_(q,(s?u:w.b)===D.Xc?1/0:v,e,u)},
$S:155}
A.dGf.prototype={
$1(d){var x=A.hVN(d,"margin")
if(x==null)return
if(x.gc7A())d.a5K(A.SF(d,A.isL(d,x),C.eD,C.b9))
if(x.gc7B())d.l6(0,A.SF(d,A.isK(d,x),C.eD,C.b9))},
$S:z+5}
A.hBf.prototype={
$2(d,e){var x=this.a.b.aC(d),w=this.b.b3x(x)
return A.isM(w==null?null:w.fU(x))},
$S:155}
A.hBg.prototype={
$2(d,e){var x=this.a.b.aC(d),w=this.b.b3n(x)
return A.isM(w==null?null:w.fU(x))},
$S:155}
A.dGj.prototype={
$2(d,e){var x=A.hVN(d,"padding")
if(x==null)return e
return A.Et(new A.dGi(this.a,d,x),e,B.b(d.a.x)+"--paddingBlock",null)},
$S:z+3}
A.dGi.prototype={
$2(d,e){var x,w,v=null,u=this.c,t=this.b.b.aC(d),s=u.b3n(t)
s=s==null?v:s.fU(t)
if(s==null)s=0
s=Math.max(s,0)
x=u.f
x=x==null?v:x.fU(t)
if(x==null)x=0
x=Math.max(x,0)
w=u.b3x(t)
w=w==null?v:w.fU(t)
if(w==null)w=0
w=Math.max(w,0)
u=u.a
u=u==null?v:u.fU(t)
if(u==null)u=0
u=new B.a_(s,x,w,Math.max(u,0))
return u.n(0,C.Y)?e:new B.F(u,e,v)},
$S:157}
A.dGk.prototype={
$1(d){var x=A.hVN(d,"padding")
if(x==null)return
if(x.gc7A())d.a5K(A.SF(d,A.isL(d,x),C.eD,C.b9))
if(x.gc7B())d.l6(0,A.SF(d,A.isK(d,x),C.eD,C.b9))},
$S:z+5}
A.dGl.prototype={
$2(d,e){var x=this.a.b.aC(d).jR(0,y.w)
return new A.ayB(null,(x==null?C.ad:x)===C.ad?C.cv:C.j4,A.jo0(),C.o,e,null)},
$S:z+28}
A.dGm.prototype={
$2(d,e){return A.ilD(d,e,this.a,this.b.b)},
$S:155}
A.dGn.prototype={
$2(d,e){return A.ilD(d,e,this.a,this.b.b)},
$S:155}
A.dGr.prototype={
$1(d){var x,w,v,u,t=null,s=d.f
s.toString
if(d.y!==!0)return d
x=d.BH("vertical-align")
if(x==null)w=t
else{w=A.uQ(x)
w=w instanceof B.fp?A.oX(w):t}if(w==null||w==="baseline")return d
v=A.jl_(w)
if(v==null)return d
$.i8B().j(0,d,!0)
u=A.Et(t,d.ap(),B.b(d.a.x)+"--vertical-align",t)
if(w==="sub"||w==="super")u.d.push(new A.dGq(this.a,w,d))
s=s.YX(0)
s.l6(0,A.SF(d,u,v,C.b9))
return s},
$S:z+2}
A.dGq.prototype={
$2(d,e){var x=this.b,w=x==="super"?0.4:0
x=x==="sub"?0.4:0
return this.a.dRU(d,this.c,e,new B.a_(0,x,0,w))},
$S:157}
A.dGs.prototype={
$2(d,e){var x,w,v=$.i8B()
B.pB(d)
if(J.C(v.a.get(d),!0))return e
v=d.BH("vertical-align")
if(v==null)x=null
else{w=A.uQ(v)
x=w instanceof B.fp?A.oX(w):null}if(x==null)return e
return e.qg(new A.dGp(this.a,d,x))},
$S:z+3}
A.dGp.prototype={
$2(d,e){var x,w=this.b.b.aC(d).jR(0,y.w)
if(w==null)w=C.ad
x=A.jkW(w,this.c)
if(x==null)return e
return new B.da(x,1,null,e,null)},
$S:157}
A.dKk.prototype={
$1(d){var x,w,v,u,t,s=d.a.b.h(0,"href")
if(s==null)return d
x=this.a
w=x.a
v=w.dj_(s)
u=w.f0N(d,new A.dKi(x,v==null?s:v))
if(u==null)return d
if(d.y===!0)for(w=d.gTC(),w=new B.jz(w.a(),w.$ti.i("jz<1>"));w.G();){t=w.b
if(t instanceof A.a4X&&!t.ga4F())t.a.qg(new A.dKj(x,d,u))}x=y.g
d.b.of(A.jnK(),u,x)
d.wv(u,x)
return d},
$S:z+2}
A.dKi.prototype={
$0(){return this.a.a.anR(this.b)},
$S:0}
A.dKj.prototype={
$2(d,e){return this.a.a.bC6(this.b,e,this.c)},
$S:157}
A.dKl.prototype={
$2(d,e){var x=d.H3(y.g)
if(x!=null)e.qg(new A.dKh(this.a,d,x))
return e},
$S:z+3}
A.dKh.prototype={
$2(d,e){if(e.wB(0,C.au))return null
return this.a.a.bC6(this.b,e,this.c)},
$S:157}
A.dKp.prototype={
$2(d,e){var x,w,v,u,t,s,r={}
r.a=null
x=B.a([],y.E)
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.a7)(e),++v){u=e[v]
if(r.a==null){t=$.i96()
t=t.a.get(u)
if(t==null)t=!1}else t=!1
if(t)r.a=u
else x.push(u)}w=this.a
s=w.a.bC4(d,x)
if(s==null)return null
s.qg(new A.dKo(r,w,d,d.a.b.K(0,"open")))
return s},
$S:z+10}
A.dKo.prototype={
$2(d,e){var x,w=this,v=null,u=w.c,t=u.b.aC(d),s=t.aoo(),r=w.a.a
u=B.a([new A.bra(r==null?w.b.a.bC8(u,t,B.dn(B.a([new B.jh(new A.aaf(s,v),C.kd,v,v),B.dn(v,v,v,v,v,v,v,v,v,s,"Details")],y.o),v,v,v,v,v,v,v,v,v,v)):r,v),new A.br5(e,v)],y.p)
x=t.jR(0,y.w)
if(x==null)x=C.ad
return new A.aae(w.b.a.f0D(d,u,x),w.d,v)},
$S:z+20}
A.dKq.prototype={
$2(d,e){var x=e.a,w=x.a,v=w instanceof B.fX?w:null
if(v!==d.a)return
if(x.x!=="summary")return
e.fI(0,D.br0)},
$S:z+4}
A.dKn.prototype={
$2(d,e){return new A.aaf(this.a.b.aC(d).aoo(),null)},
$S:z+16}
A.dKs.prototype={
$1(d){var x,w,v,u,t,s=d.a.b,r=this.a.a,q=s.h(0,"src"),p=r.dj_(q==null?"":q)
q=s.h(0,"alt")
x=p!=null?B.a([new A.aKX(A.bds(s,"height"),p,A.bds(s,"width"))],y.h):D.dgb
w=s.h(0,"title")
v=new A.brX(q,x,w)
v.dIE(q,x,w)
u=r.f0R(d,v)
if(u==null){t=q==null?w:q
if(t==null)t=""
if(t.length!==0)d.l6(0,new A.Ms(t,d))
return d}$.hWT().j(0,d,u)
return d},
$S:z+2}
A.dKw.prototype={
$2(d,e){var x,w,v=null,u=e.a
switch(u.x){case"ol":case"ul":x=e.wv(A.cis(e).f4M(A.cis(e).c+1),y.d)
$.i97().j(0,u,x.c)
break
case"li":w=u.a
x=w instanceof B.fX?w:v
if(x===d.a)e.fI(0,A.vS(v,"li",v,v,new A.dKv(this.a,d),v,v,v,v,1000007e9))
break}},
$S:z+4}
A.dKv.prototype={
$2(d,e){var x=this.b
return e.qg(new A.dKu(this.a,x,d,x.wv(A.cis(x).CI(A.cis(x).d+1),y.d).d-1))},
$S:z+3}
A.dKu.prototype={
$2(d,e){var x=this
return x.a.dZ9(d,x.b,x.c,e,x.d)},
$S:155}
A.dKz.prototype={
$2(d,e){return e.qg(new A.dKy(this.a,d))},
$S:z+3}
A.dKy.prototype={
$2(d,e){var x=null
return B.bv(e,C.p,x,C.z,x,x,x,x,!1,C.aI)},
$S:157}
A.dKA.prototype={
$2(d,e){var x=this.a.ap(),w=this.b.ap(),v=B.a([],y.p)
if(w!=null)v.push(w)
if(x!=null)v.push(x)
return new A.aoB(v,null)},
$S:z+33}
A.dKE.prototype={
$2(d,e){var x,w,v,u=this,t=null,s=e.b,r=u.b.b.aC(d),q=u.c.b34(r),p=u.e
p=p==null?t:p.fU(r)
if(p==null)p=0
x=r.jR(0,y.w)
if(x==null)x=C.ad
w=u.f.e
v=new A.aWr(new A.brb(q,u.d==="collapse",p,s,x,B.dv(new B.E(w,new A.dKD(d),B.Y(w).i("E<1,zb?>")).fZ(0,A.jnW()),!1,y.m),t),t)
if(isFinite(s))v=B.bv(v,C.p,t,C.z,t,t,t,t,!1,C.aI)
return v},
$S:82}
A.dKD.prototype={
$1(d){return d.$1(this.a)},
$S:z+42}
A.dKF.prototype={
$1(d){return new A.aoC(null,this.a.r,0,1,this.b,null,!0,this.c,null)},
$S:z+17}
A.dKG.prototype={
$1(d){var x,w,v=this,u=null,t=v.c,s=t.a,r=v.d,q=r.b.aC(d),p=v.e.b34(q)
if(p!=null){x=p.gxe()
s=x.n(0,C.Y)?s:new B.F(x,s,u)}r=r.BH("vertical-align")
if(r==null)w=u
else{w=A.uQ(r)
w=w instanceof B.fp?A.oX(w):u}if(w==="baseline")s=new A.bK9(v.f,s,u)
r=v.w.r
x=v.a.a
r=Math.min(v.r,r-x)
t=t.e
t=t==null?u:A.aBv(t,q)
return A.iVd(p,s,r,x,!1,u,v.x,v.f,t)},
$S:z+18}
A.dKB.prototype={
$1(d){var x,w=this.a
if(w==null)w=1
x=y.N
return B.x(["padding",B.b(w)+"px"],x,x)},
$S:3347}
A.dKC.prototype={
$2(d,e){return this.a.b.push(e)},
$S:z+7}
A.hFc.prototype={
$1(d){return d instanceof B.acm},
$S:1157}
A.hFd.prototype={
$1(d){var x=A.ok(d)
return x==null?D.hj:x},
$S:z+8}
A.hFe.prototype={
$1(d){var x=A.ok(d)
return x==null?D.hj:x},
$S:z+8}
A.hFf.prototype={
$1(d){var x=A.ok(d)
return x==null?D.hj:x},
$S:z+8}
A.cQt.prototype={
$2(d,e){var x=this.a,w=x.bge(d,this.b.aC(d))
if(w!=null)return x.b.bC6(this.c,e,w)
return e},
$S:157}
A.cQu.prototype={
$2$isLast(d,e){return new B.jh(this.c,this.a,this.b,null)},
$1(d){return this.$2$isLast(d,null)},
$C:"$2$isLast",
$R:1,
$D(){return{isLast:null}},
$S:3348}
A.cQs.prototype={
$2$isLast(d,e){var x,w=this.b.aC(d),v=w.jR(0,y.T)
if(v==null)v=D.KT
x=A.irq(this.c,v,!1,e!==!1)
if(x.length===0)return null
v=this.a
return v.b.f15(v.bge(d,w),w.aoo(),x)},
$1(d){return this.$2$isLast(d,null)},
$C:"$2$isLast",
$R:1,
$D(){return{isLast:null}},
$S:3349}
A.cQr.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.b,m=n.aC(d),l=B.a([],y.o)
for(x=o.c,w=x.length,v=!0,u=0;u<x.length;x.length===w||(0,B.a7)(x),++u){t=x[u].$2$isLast(d,v)
if(t!=null){C.d.h6(l,0,t)
v=!1}}x=o.d
w=m.jR(0,y.T)
s=A.irq(x,w==null?D.KT:w,!0,v)
if(s.length===0&&l.length===0){w=B.Y(x).i("aE<1>")
x=B.M(new B.aE(x,new A.cQq(),w),w.i("U.E"))
x.$flags=1
r=x
q=r.length===1&&r[0].a==="\n"?new B.jh(A.i_F(D.aho,n,B.b(o.a.a.a.x)+"--"+D.aho.k(0)),C.eD,null,null):null}else{n=o.a
q=n.b.d3g(l,n.bge(d,m),m.aoo(),s)}if(q==null)return C.au
p=m.jR(0,y.a)
if(p==null)p=C.Q
if(q instanceof B.jh&&p===C.Q)return q.e
n=o.a
return n.b.bC8(n.a,m,q)},
$S:157}
A.cQq.prototype={
$1(d){return!d.b},
$S:z+21}
A.cVT.prototype={
$2(d,e){return A.ig5(d,e,this.a,this.b)},
$S:155}
A.cVU.prototype={
$2(d,e){return A.ig5(d,e,this.a,this.b.r)},
$S:155}
A.eDe.prototype={
$1(d){var x=this.a
return x.A(new A.eDd(x,d))},
$S:5}
A.eDd.prototype={
$0(){var x=this.a
x.e=this.b
x.d=!0},
$S:0}
A.cXJ.prototype={
$0(){var x,w=this.a.N(y.M)
if(w!=null){x=w.f
w.r.$1(!x)}},
$S:0}
A.eDi.prototype={
$2(d,e){return d.bc(C.d9,e,d.gdA())},
$S:85}
A.eDg.prototype={
$2(d,e){return d.bc(C.cC,e,d.gcX())},
$S:85}
A.eDh.prototype={
$2(d,e){return d.bc(C.dO,e,d.gdN())},
$S:85}
A.eDf.prototype={
$2(d,e){return d.bc(C.d5,e,d.gdz())},
$S:85}
A.hk0.prototype={
$1(d){return d<=0.01},
$S:141}
A.fAP.prototype={
$1(d){var x=d.z,w=x==null?null:x.a4(0,0,this.a.e)
return(w==null?null:isFinite(w))===!0?w:null},
$S:z+23}
A.fAQ.prototype={
$1(d){return!(d<=0.01)?d:null},
$S:3350}
A.fAR.prototype={
$1(d){return d==null?0:d},
$S:3351}
A.fAN.prototype={
$1(d){return isNaN(d)?this.a:d},
$S:8}
A.fAO.prototype={
$1(d){var x=d.b,w=isNaN(x)?this.a:x
return Math.min(w,this.b[d.a])},
$S:3352}
A.fJP.prototype={
$1(d){var x=d.ba
x.toString
return x},
$S:z+24}
A.fJQ.prototype={
$2(d,e){return Math.max(d,e)},
$S:152}
A.fJR.prototype={
$1(d){return this.a.aJ()},
$S:6}
A.fJS.prototype={
$1(d){return this.a.aJ()},
$S:6};(function aliases(){var x=A.ph.prototype
x.dDA=x.v
x.cBM=x.qg
x=A.bKY.prototype
x.dDy=x.q
x.dDz=x.a6c
x=A.b9N.prototype
x.dF5=x.a6c
x=A.bbj.prototype
x.dGr=x.q})();(function installTearOffs(){var x=a._static_1,w=a._instance_1u,v=a._static_2,u=a._instance_2u,t=a.installInstanceTearOff
x(A,"jnE","ji1",25)
w(A.aKF.prototype,"geXy","eXz",19)
x(A,"joj","j6y",0)
x(A,"jok","j6z",0)
x(A,"jol","j6A",0)
x(A,"jom","j6B",0)
x(A,"jon","j6C",0)
x(A,"joo","j6D",0)
x(A,"jop","j6E",0)
x(A,"joq","j6F",0)
x(A,"jor","j6G",0)
x(A,"jos","j6H",0)
x(A,"jot","j6I",0)
x(A,"jou","j6J",0)
x(A,"jov","j6K",0)
x(A,"jow","j6L",0)
x(A,"jox","j6M",0)
x(A,"joy","j6N",0)
x(A,"joz","j6O",0)
x(A,"joA","j6P",0)
x(A,"joB","j6Q",0)
x(A,"joC","j6R",0)
x(A,"joD","j6S",0)
x(A,"joE","j6T",0)
v(A,"joF","j6U",3)
x(A,"joG","j6V",0)
x(A,"joH","j6W",0)
x(A,"joI","j6X",0)
x(A,"joJ","j6Y",0)
x(A,"joK","j6Z",0)
u(A.bKX.prototype,"gd31","d32",11)
x(A,"jnC","jiY",12)
v(A,"jnB","j8A",27)
v(A,"jnG","j2N",13)
x(A,"jo1","j2Q",2)
x(A,"jo2","j2R",2)
v(A,"jnH","j2S",6)
v(A,"jnI","j2T",6)
x(A,"jnJ","j2U",5)
x(A,"jo0","j9y",45)
v(A,"jo3","j2W",11)
x(A,"jo4","j2X",2)
v(A,"jo5","j2Y",6)
v(A,"jo6","j2Z",30)
v(A,"jof","jwX",13)
v(A,"jog","jwY",44)
v(A,"joh","jwZ",32)
v(A,"joi","jx_",14)
v(A,"joe","jkv",34)
v(A,"jnM","j3t",35)
x(A,"jnL","j3s",0)
v(A,"jnK","j3r",36)
x(A,"jo7","j3u",2)
x(A,"jnO","j3w",2)
v(A,"jnN","j3v",7)
x(A,"jo8","j3x",0)
x(A,"jnP","j3y",0)
v(A,"jnQ","j3z",6)
x(A,"jnR","j3A",5)
x(A,"jnS","j3B",0)
x(A,"jnT","j3C",0)
x(A,"jo9","j3D",2)
x(A,"joa","j3E",0)
x(A,"job","j3F",2)
v(A,"joc","j3G",4)
x(A,"jnU","j3H",0)
x(A,"jnV","j3I",0)
x(A,"jnW","j3J",37)
v(A,"jnX","j3K",4)
v(A,"jnY","j3L",4)
v(A,"jnZ","j3M",4)
x(A,"jo_","j3N",2)
x(A,"jod","jaw",0)
t(A.bfe.prototype,"gfk5",0,1,null,["$5$curve$duration$jumpCurve$jumpDuration","$1","$3$curve$duration","$2$duration","$3$curve$duration"],["aRa","fk6","d94","fk7","d94"],22,0,0)
u(A.bHH.prototype,"gevw","evx",6)
var s
u(s=A.b8k.prototype,"gev4","ev5",4)
u(s,"get7","et8",7)
u(A.b8l.prototype,"geu5","eu6",4)
w(s=A.axR.prototype,"gcX","cD",1)
w(s,"gdA","cN",1)
w(s=A.b1r.prototype,"gdA","cN",1)
w(s,"gcX","cD",1)
w(s,"gdN","cE",1)
w(s,"gdz","cH",1)
w(s=A.ayh.prototype,"gdz","cH",1)
w(s,"gcX","cD",1)
w(s,"gdN","cE",1)
w(s,"gdA","cN",1)
w(s=A.b6p.prototype,"gdz","cH",1)
w(s,"gcX","cD",1)
w(s,"gdN","cE",1)
w(s,"gdA","cN",1)
v(A,"NO","jeh",38)
v(A,"jx3","jn7",39)
v(A,"ixb","jqr",40)
v(A,"jx4","jqu",15)
v(A,"jx5","jqv",14)
v(A,"ixc","jqw",9)
v(A,"ixd","jqx",43)
v(A,"ixe","jqz",31)
v(A,"jx6","jsV",15)
v(A,"jx7","jx0",9)
v(A,"ixf","jyc",29)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(B.x0,[A.hC0,A.hzQ,A.cXM,A.cpp,A.cpq,A.cpr,A.dKi,A.eDd,A.cXJ])
v(B.A,[A.ca2,A.CK,A.ja,A.amn,A.UM,A.aHf,A.bTs,A.SX,A.tO,A.a8L,A.amp,A.brX,A.aKX,A.fK,A.ap6,A.b1E,A.dee,A.bIn,A.bym,A.bIt,A.bIu,A.auC,A.bIv,A.bKY,A.N7,A.bfc,A.bfe,A.cpt,A.bRk,A.dFY,A.b84,A.fzm,A.dG1,A.dG7,A.aYu,A.dGc,A.dGh,A.i25,A.c9K,A.b85,A.XF,A.dGo,A.dKg,A.dKm,A.dKr,A.dKt,A.b8j,A.dKx,A.bHH,A.b8k,A.b8l,A.cax,A.cay,A.cQp,A.ait,A.ds2,A.cH6,A.eJi,A.b8h,A.cav,A.fAD,A.fAE,A.cas,A.fAF])
v(A.CK,[A.bRl,A.Ms,A.a4X,A.MP,A.aUr])
u(A.q_,A.bRl)
v(A.a4X,[A.aBc,A.aBd])
v(B.qA,[A.cH5,A.cZK,A.hC6,A.def,A.dTt,A.dTu,A.dTv,A.cH4,A.cG1,A.hC5,A.eiV,A.cpw,A.cpy,A.cps,A.cF8,A.cF9,A.dG0,A.dG4,A.dG8,A.dG9,A.dGf,A.dGk,A.dGr,A.dKk,A.dKs,A.dKD,A.dKF,A.dKG,A.dKB,A.hFc,A.hFd,A.hFe,A.hFf,A.cQu,A.cQs,A.cQq,A.eDe,A.hk0,A.fAP,A.fAQ,A.fAR,A.fAN,A.fAO,A.fJP,A.fJR,A.fJS])
v(B.GQ,[A.a8M,A.a02,A.aiu,A.aah])
u(A.aMn,B.U)
v(B.X,[A.ph,A.cdj,A.br5,A.aaf,A.bra])
v(B.a0,[A.aoD,A.aae,A.aWr])
v(B.ab,[A.aKF,A.bYd,A.ccU])
v(B.AB,[A.cXN,A.dTs,A.dTr,A.cpu,A.cpx,A.cpv,A.cpz,A.dG_,A.dFZ,A.dG3,A.dG5,A.dG2,A.dGb,A.dGa,A.dGe,A.dGd,A.hBf,A.hBg,A.dGj,A.dGi,A.dGl,A.dGm,A.dGn,A.dGq,A.dGs,A.dGp,A.dKj,A.dKl,A.dKh,A.dKp,A.dKo,A.dKq,A.dKn,A.dKw,A.dKv,A.dKu,A.dKz,A.dKy,A.dKA,A.dKE,A.dKC,A.cQt,A.cQr,A.cVT,A.cVU,A.eDi,A.eDg,A.eDh,A.eDf,A.fJQ])
u(A.fn8,A.ap6)
v(B.dg,[A.azS,A.aHh,A.b1q,A.b9u])
u(A.b9N,A.bKY)
u(A.bKX,A.b9N)
v(B.bKv,[A.eor,A.euU])
u(A.AG,A.q_)
u(A.a5N,A.aMn)
v(A.ph,[A.aGK,A.PW])
u(A.ayB,B.aGY)
u(A.cF7,A.ds2)
v(B.d_,[A.amm,A.bk_,A.br_,A.bK9,A.ccS])
v(B.ast,[A.b5D,A.ccT,A.YW])
v(A.cH6,[A.bTu,A.aZV,A.a5n])
u(A.axR,B.M_)
v(B.ki,[A.br7,A.br9,A.aoB,A.brb])
v(B.ar,[A.cfs,A.cfA,A.b2p,A.che,A.chx])
u(A.cft,A.cfs)
u(A.bbj,A.cft)
u(A.b1r,A.bbj)
v(B.m2,[A.T8,A.Tl,A.yg])
u(A.cfB,A.cfA)
u(A.ayh,A.cfB)
u(A.aag,B.apz)
u(A.chf,A.che)
u(A.b6p,A.chf)
u(A.zb,B.lP)
u(A.aoC,A.zb)
u(A.chy,A.chx)
u(A.b8i,A.chy)
x(A.bRl,A.dee)
w(A.b9N,A.cpt)
w(A.cfs,B.bu)
x(A.cft,B.e8)
w(A.bbj,B.a04)
w(A.cfA,B.bu)
x(A.cfB,B.e8)
w(A.che,B.bu)
x(A.chf,B.e8)
w(A.chx,B.bu)
x(A.chy,B.e8)})()
B.yi(b.typeUniverse,JSON.parse('{"q_":{"CK":[]},"Ms":{"CK":[]},"a4X":{"CK":[]},"aBc":{"CK":[]},"aBd":{"CK":[]},"MP":{"CK":[]},"bTs":{"aHg":[]},"SX":{"aHg":[]},"aMn":{"U":["1"]},"ph":{"X":[],"n":[]},"aoD":{"a0":[],"n":[]},"azS":{"dg":[],"cX":[],"n":[]},"aKF":{"ab":["aoD"]},"AG":{"q_":[],"CK":[]},"a5N":{"U":["yY"],"U.E":"yY"},"cdj":{"ph":[],"X":[],"n":[]},"ayB":{"d_":[],"bP":[],"n":[]},"aGK":{"ph":[],"X":[],"n":[]},"aUr":{"CK":[]},"PW":{"ph":[],"X":[],"n":[]},"aHh":{"dg":[],"cX":[],"n":[]},"amm":{"d_":[],"bP":[],"n":[]},"bk_":{"d_":[],"bP":[],"n":[]},"b5D":{"ar":[],"cZ":["ar"],"ax":[],"bW":[]},"br_":{"d_":[],"bP":[],"n":[]},"axR":{"ar":[],"cZ":["ar"],"ax":[],"bW":[]},"aae":{"a0":[],"n":[]},"aaf":{"X":[],"n":[]},"b1q":{"dg":[],"cX":[],"n":[]},"bYd":{"ab":["aae"]},"br5":{"X":[],"n":[]},"bra":{"X":[],"n":[]},"br7":{"ki":[],"bP":[],"n":[]},"b1r":{"e8":["ar","ni"],"ar":[],"bu":["ar","ni"],"ax":[],"bW":[],"bu.1":"ni","e8.1":"ni","e8.0":"ar","bu.0":"ar"},"T8":{"m2":["ar"],"mN":[],"kU":["ar"],"jl":[]},"br9":{"ki":[],"bP":[],"n":[]},"ayh":{"e8":["ar","T8"],"ar":[],"bu":["ar","T8"],"ax":[],"bW":[],"bu.1":"T8","e8.1":"T8","e8.0":"ar","bu.0":"ar"},"aag":{"bP":[],"n":[]},"b2p":{"ar":[],"ax":[],"bW":[]},"aoB":{"ki":[],"bP":[],"n":[]},"Tl":{"m2":["ar"],"mN":[],"kU":["ar"],"jl":[]},"b6p":{"e8":["ar","Tl"],"ar":[],"bu":["ar","Tl"],"ax":[],"bW":[],"bu.1":"Tl","e8.1":"Tl","e8.0":"ar","bu.0":"ar"},"aoC":{"zb":[],"lP":["yg"],"cX":[],"n":[],"lP.T":"yg"},"zb":{"lP":["yg"],"cX":[],"n":[],"lP.T":"yg"},"yg":{"m2":["ar"],"mN":[],"kU":["ar"],"jl":[]},"brb":{"ki":[],"bP":[],"n":[]},"b8i":{"e8":["ar","yg"],"ar":[],"bu":["ar","yg"],"ax":[],"bW":[],"bu.1":"yg","e8.1":"yg","e8.0":"ar","bu.0":"ar"},"aWr":{"a0":[],"n":[]},"b9u":{"dg":[],"cX":[],"n":[]},"YW":{"ar":[],"cZ":["ar"],"ax":[],"bW":[]},"bK9":{"d_":[],"bP":[],"n":[]},"ccU":{"ab":["aWr"]},"ccS":{"d_":[],"bP":[],"n":[]},"ccT":{"ar":[],"cZ":["ar"],"ax":[],"bW":[]}}'))
B.i47(b.typeUniverse,JSON.parse('{"a4X":1,"aMn":1}'))
var y=(function rtii(){var x=B.a9
return{ff:x("hy<yY>"),k:x("aZ"),eF:x("mN"),r:x("CK"),P:x("q_"),dO:x("UC"),bz:x("a6"),n:x("ag<h,h>"),v:x("pv"),g8:x("amn"),V:x("aHg"),bT:x("tO"),q:x("aHh"),T:x("a02"),eo:x("Pe"),f0:x("Fn"),dk:x("fX"),c8:x("PD<u<yY>>"),gE:x("PD<u<iq>>"),f:x("iq"),L:x("ni"),I:x("Vj"),B:x("tT"),g:x("iA"),eS:x("jH<ab<a0>>"),da:x("aLd"),J:x("J<CK>"),gB:x("J<tO>"),cp:x("J<amp>"),_:x("J<yY>"),A:x("J<iq>"),cY:x("J<iA>"),fY:x("J<jH<ab<a0>>>"),h:x("J<aKX>"),o:x("J<js>"),f5:x("J<mV>"),cI:x("J<VL>"),cW:x("J<u<iq>>"),gL:x("J<ar>"),U:x("J<h>"),fi:x("J<J4>"),p:x("J<n>"),E:x("J<ph>"),er:x("J<b1E<@>>"),e:x("J<ait>"),an:x("J<yg>"),ad:x("J<cay>"),g7:x("J<b8k>"),dt:x("J<b8l>"),b5:x("J<YW>"),t:x("J<r>"),fL:x("J<zb?(Q)>"),b:x("J<js?(Q{isLast:I?})>"),s:x("J<n?(Q,n)>"),et:x("mV"),C:x("bI<ab<a0>>"),gv:x("u<u<iq>>"),x:x("u<h>"),F:x("u<YW>"),bS:x("K<r,r>"),eI:x("a2g"),fw:x("bym"),fW:x("av"),N:x("h"),es:x("J3"),a:x("Eg"),fs:x("XF"),bR:x("Gt"),w:x("Sf"),ap:x("wz"),Z:x("bIn"),j:x("aI"),G:x("bIt"),K:x("bIu"),W:x("auC"),O:x("bIv"),cc:x("aE<h>"),fy:x("ce<xU>"),m:x("n"),c:x("ph"),ev:x("jFR"),co:x("c0<I>"),D:x("bRk"),R:x("aYu"),Q:x("N7"),ek:x("bb<I>"),gl:x("axR"),M:x("b1q"),u:x("T8"),cx:x("ayh"),cA:x("b2p"),X:x("b5D"),fB:x("azS"),l:x("Tl"),gu:x("b84"),cC:x("c9K"),gk:x("b85"),aV:x("kt<CK>"),gw:x("kt<n>"),H:x("yg"),a8:x("b8i"),d:x("b8j"),ar:x("cax"),eb:x("b9u"),cJ:x("YW"),y:x("I"),i:x("ai"),z:x("@"),S:x("r"),Y:x("Q?"),bn:x("u5?"),aJ:x("av?"),cD:x("ai?"),aT:x("~")}})();(function constants(){var x=a.makeConstList
D.bqx=new A.ja(null,"align",A.joo(),null,null,null,null,null,null,-2999999e9)
D.bqy=new A.ja(null,"div",A.jok(),null,null,null,null,null,null,-2999992e9)
D.bqz=new A.ja(null,"td",A.jod(),null,null,null,null,null,null,-2999973e9)
D.bqA=new A.ja(null,"h1",A.joy(),null,null,null,null,null,null,-2999989e9)
D.bqB=new A.ja(null,"mark",A.joG(),null,null,null,null,null,null,-2999982e9)
D.bqC=new A.ja(null,"figure",A.jox(),null,null,null,null,null,null,-299999e10)
D.bqD=new A.ja(null,"br",null,A.jo7(),null,null,null,null,null,1000002e9)
D.bqE=new A.ja(null,"display: inline-block",null,A.jo1(),null,null,null,null,null,9000002e9)
D.bqF=new A.ja(null,"sub",A.joI(),null,null,null,null,null,null,-2999977e9)
D.bqG=new A.ja(null,"h4",A.joB(),null,null,null,null,null,null,-2999986e9)
D.bqH=new A.ja(null,"center",A.jou(),null,null,null,null,null,null,-2999994e9)
D.bqI=new A.ja(null,"h6",A.joD(),null,null,null,null,null,null,-2999984e9)
D.bqJ=new A.ja(null,"dd",A.jov(),null,null,null,null,null,null,-2999993e9)
D.bqK=new A.ja(null,"ruby",null,A.job(),null,null,null,null,A.joc(),1000011e9)
D.bqL=new A.ja(null,"strike",A.jop(),null,null,null,null,null,null,-2999978e9)
D.bqM=new A.ja(!1,"sizing (min-width=0)",null,null,A.jnH(),null,null,null,null,5000007e9)
D.bqN=new A.ja(null,"table",A.jom(),null,null,null,null,null,null,-2999972e9)
D.bqO=new A.ja(null,"address",A.jot(),null,null,null,null,null,null,-2999995e9)
D.bqP=new A.ja(null,"rp",A.joa(),null,null,null,null,null,null,-299998e10)
D.bqQ=new A.ja(null,"dir",A.joj(),null,null,null,null,null,null,-2999998e9)
D.bqR=new A.ja(null,"script",A.jol(),null,null,null,null,null,null,-2999979e9)
D.bqS=new A.ja(null,"hr",A.joE(),null,A.joF(),null,null,null,null,1000005e9)
D.bqT=new A.ja(null,"ins",A.joq(),null,null,null,null,null,null,-2999983e9)
D.bqU=new A.ja(null,"font",A.jo8(),null,null,null,null,null,null,1000004e9)
D.bqV=new A.ja(null,"h3",A.joA(),null,null,null,null,null,null,-2999987e9)
D.bqW=new A.ja(null,"td",A.jor(),null,null,null,null,null,null,-2999974e9)
D.bqX=new A.ja(null,"dt",A.jow(),null,null,null,null,null,null,-2999991e9)
D.bqY=new A.ja(null,"th",A.joK(),null,null,null,null,null,null,-2999971e9)
D.bqZ=new A.ja(null,"display: none",null,A.jo2(),null,null,null,null,null,9000004e9)
D.br_=new A.ja(null,"h2",A.joz(),null,null,null,null,null,null,-2999988e9)
D.br0=new A.ja(!0,"summary",null,A.jnO(),null,null,A.jnN(),null,null,9000003e9)
D.br1=new A.ja(null,"table--cellpadding",null,null,null,null,null,null,A.jnY(),1000013e9)
D.br2=new A.ja(null,"q",null,A.jo9(),null,null,null,null,null,100001e10)
D.br3=new A.ja(null,"acronym",A.jos(),null,null,null,null,null,null,-2999996e9)
D.br4=new A.ja(null,"caption",A.jon(),null,null,null,null,null,null,-2999975e9)
D.abJ=new A.ja(!1,"sizing",null,null,A.jnI(),A.jnJ(),null,null,null,5000001e9)
D.br5=new A.ja(!1,"text-align",null,A.jo4(),A.jo5(),null,null,null,null,-2999997e9)
D.br6=new A.ja(null,"p",A.joH(),null,null,null,null,null,null,-2999981e9)
D.br7=new A.ja(!0,"display: block",null,null,null,null,null,null,null,10)
D.br8=new A.ja(null,"h5",A.joC(),null,null,null,null,null,null,-2999985e9)
D.br9=new A.ja(null,"table--border",A.jnU(),null,null,null,null,null,A.jnX(),1000012e9)
D.bra=new A.ja(null,"sup",A.joJ(),null,null,null,null,null,null,-2999976e9)
D.brb=new A.ja(null,"table--border--child",A.jnV(),null,null,null,null,null,null,-2999975e9)
D.Ip=new A.cF7()
D.Ve=new A.bTs()
D.buh=new A.bTu()
D.Xb=new A.aHf(null,null,null)
D.Xe=new A.a8M(4,"px")
D.hj=new A.tO(0,D.Xe)
D.hX=new A.UM(D.hj,D.hj)
D.bUQ=new A.amn(!1,null,null,null,null,null,null,null,D.hX,D.hX,D.hX,D.hX)
D.bUR=new A.amn(!0,null,null,null,null,null,null,null,D.hX,D.hX,D.hX,D.hX)
D.bUS=new A.a8L(null,null,null,null,null,null)
D.Xc=new A.a8M(0,"auto")
D.Xd=new A.a8M(1,"em")
D.D8=new A.a8M(2,"percentage")
D.bUT=new A.a8M(3,"pt")
D.Xf=new A.tO(100,D.D8)
D.bUU=new A.tO(1,D.Xc)
D.aho=new A.tO(1,D.Xd)
D.bUV=new A.tO(1,D.Xe)
D.KT=new A.a02(0,"normal")
D.Xg=new A.a02(1,"nowrap")
D.ahp=new A.a02(2,"pre")
D.c38=new A.aah(0,"circle")
D.c39=new A.aah(1,"disc")
D.c3a=new A.aah(2,"disclosureClosed")
D.c3b=new A.aah(3,"disclosureOpen")
D.c3c=new A.aah(4,"square")
D.cdK=new A.fK(null,C.aS,C.b8)
D.cYI=x(["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"],y.U)
D.d2G=x(["Courier","monospace"],y.U)
D.azx=x([],y.J)
D.a1m=x([],y._)
D.dga=x([],y.A)
D.dgb=x([],y.h)
D.F9=x([],B.a9("J<N7>"))
D.dkx=x([1000,900,500,400,100,90,50,40,10,9,5,4,1],y.t)
D.e3z={"text-decoration":0}
D.dAT=new B.ag(D.e3z,["underline"],y.n)
D.e5c={"1":0,"2":1,"3":2,"4":3,"5":4,"6":5,"7":6}
D.dUA=new B.ag(D.e5c,["xx-small","x-small","small","medium","large","x-large","xx-large"],y.n)
D.e3P={display:0,"font-family":1,"white-space":2}
D.dZR=new B.ag(D.e3P,["block","Courier, monospace","pre"],y.n)
D.etk=new A.XF(!1,!1,!1)
D.etl=new A.XF(null,null,!0)
D.etm=new A.XF(null,!0,null)
D.etn=new A.XF(!0,null,null)
D.etY=new A.auC(null)
D.eC8=B.d3("aI")
D.eLo=new A.aYu(-1,C.eW)
D.eM6=new A.SX(C.a4)
D.bgf=new A.aZV(100)
D.ePi=new A.b84(C.cv,null,null,C.i3,C.mU)
D.ePj=new A.aiu(0,"bottom")
D.ePk=new A.aiu(1,"center")
D.ePl=new A.aiu(2,"left")
D.ePm=new A.aiu(3,"right")
D.ePn=new A.aiu(4,"top")
D.ePo=new A.b85(null,null)
D.ePz=new A.b8h(C.cc,C.be)
D.eQf=new A.cdj(null)})();(function staticFields(){$.aBA=0
$.itS=1
$.aBu=B.D(y.N,y.S)
$.dOH=B.a([],B.a9("J<ca2?>"))
$.iez=null
$.idG=null
$.idJ=null
$.ip_=null
$.iq_=0})();(function lazyInitializers(){var x=a.lazy,w=a.lazyFinal
x($,"jKi","bdO",()=>new A.hC0().$0())
x($,"jJ0","iDB",()=>new A.hzQ().$0())
w($,"jz5","i7M",()=>B.z2(B.a9("cK")))
w($,"jIP","hX7",()=>B.z2(B.a9("brX")))
w($,"jI_","iCR",()=>B.a1("^data:[^;]+;([^,]+),",!0,!1,!1,!1))
w($,"jJD","iE1",()=>B.Ig("fwfh.HtmlWidget"))
w($,"jJE","iE0",()=>B.Ig("fwfh.WidgetFactory"))
w($,"jKr","iED",()=>B.a1("^[\\u{0009}\\u{000A}\\u{000C}\\u{000D}\\u{0020}]+",!0,!1,!1,!0))
w($,"jKs","iEE",()=>B.a1("[\\u{0009}\\u{000A}\\u{000C}\\u{000D}\\u{0020}]+$",!0,!1,!1,!0))
w($,"jKt","iEF",()=>B.a1("[\\u{0009}\\u{000A}\\u{000C}\\u{000D}\\u{0020}]+",!0,!1,!1,!0))
w($,"jJF","ck8",()=>B.Ig("fwfh.CoreBuildTree"))
w($,"jKz","ck9",()=>B.V2("root"))
w($,"jJG","ajp",()=>B.Ig("fwfh.AnchorRegistry"))
w($,"jIt","iDc",()=>B.z2(B.a9("U<mV>")))
w($,"jIZ","i9b",()=>B.z2(y.y))
w($,"jEl","i8z",()=>B.z2(y.y))
w($,"jEm","cjW",()=>B.z2(y.P))
w($,"jEo","i8A",()=>B.z2(y.y))
w($,"jEn","cjX",()=>B.z2(y.y))
w($,"jEp","i8B",()=>B.z2(y.y))
w($,"jIr","i96",()=>B.z2(y.y))
w($,"jEx","hWT",()=>B.z2(y.m))
w($,"jIs","i97",()=>B.z2(y.S))
w($,"jJH","i9k",()=>B.Ig("fwfh.Flattener"))
w($,"jEb","i8w",()=>B.z2(y.S))
w($,"jJI","iE2",()=>B.Ig("fwfh.CssSizing"))})()};
(a=>{a["wxsEBhI57uAke07S+H08+IOfVQ8="]=a.current})($__dart_deferred_initializers__);