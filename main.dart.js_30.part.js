((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
iqM(d,e,f,g){if(d)return""+g+"-"+f+"-begin"
if(e)return""+g+"-"+f+"-end"
return f},
it2(d){var x=$.aBt.h(0,d)
if(x==null)return d
return d+"-"+B.b(x)},
jdb(d){var x,w
if(!$.aBt.K(0,d))return
x=$.aBt.h(0,d)
x.toString
w=x-1
x=$.aBt
if(w<=0)x.V(0,d)
else x.j(0,d,w)},
ita(d,e,f,g,h){var x,w,v,u,t,s
if(f===9||f===11||f===10)return
if($.aBz>1e4&&$.aBt.a===0){$.bdN().clearMarks()
$.bdN().clearMeasures()
$.aBz=0}x=f===1||f===5
w=f===2||f===7
v=A.iqM(x,w,g,d)
if(x){u=$.aBt.h(0,v)
if(u==null)u=0
$.aBt.j(0,v,u+1)
v=A.it2(v)}t=$.bdN()
t.toString
t.mark(v,$.iDs().parse(h))
$.aBz=$.aBz+1
if(w){s=A.iqM(!0,!1,g,d)
t=$.bdN()
t.toString
t.measure(g,A.it2(s),v)
$.aBz=$.aBz+1
A.jdb(s)}C.k.a4($.aBz,0,10001)},
ime(d){var x,w
if($.bdN()==null){$.dOB.push(null)
return}x=$.itJ
$.itJ=x+1
w=new A.ca0(d,x,null,null)
$.dOB.push(w)
A.ita(x,-1,1,d,w.gcP3())},
imd(){if($.dOB.length===0)throw B.v(B.aL("Uneven calls to startSync and finishSync"))
var x=$.dOB.pop()
if(x==null)return
A.ita(x.b,-1,2,x.a,x.gcP3())},
jbm(d){return"{}"},
hBS:function hBS(){},
hzI:function hzI(){},
ca0:function ca0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
SF(d,e,f,g){return new A.aBc(f,g,y.c.b(e)?e:A.Et(null,e,B.b(d.a.x)+"--WidgetBit.inline",null),d)},
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
P6(d,e){var x,w,v,u
if(d==null||e===D.Xb)x=e
else if(e==null)x=d
else{w=e.a
if(w==null)w=d.a
v=e.b
if(v==null)v=d.b
u=e.c
w=new A.aHe(w,v,u==null?d.c:u)
x=w}if((x==null?null:x.gDg())===!0)return D.Xb
return x},
i_G(d,e){var x=C.d.gaq(d)
if(new B.y8(x,e.i("y8<0>")).G())return e.a(x.gT(0))
return null},
jip(d,e){var x,w,v=e.jR(0,y.G)
if(v==null)return d
x=v.a.fU(e)
if(x==null)return d
$.b6()
w=B.bp()
w.r=x.gB(x)
return d.f8G(w,"fwfh: background-color")},
jiq(d,e){var x,w=e.jR(0,y.K)
if(w==null)return d
x=w.a.fU(e)
if(x==null)return d
return d.f9k("fwfh: text-decoration-color",x)},
jir(d,e){var x,w,v,u,t,s=e.jR(0,y.W)
if(s==null)return d
x=s.a
if(x==null){w=e.jR(0,y.fw)
v=w==null?null:w.a
if(v==null)return d
else return d.d5T("fwfh: line-height normal",v)}u=d.r
if(u==null||u===0)return d
w=e.jR(0,y.Z)
t=x.b3F(e,u,w==null?null:w.a)
if(t==null)return d
return d.d5T("fwfh: line-height",t/u)},
jit(d,e){var x,w,v,u=e.jR(0,y.O)
if(u==null)return d
x=u.a
w=y.fy
v=B.M(new B.ce(new B.E(x,new A.hBY(e),B.Y(x).i("E<1,xU?>")),w),w.i("U.E"))
if(v.length===0)return d
return d.f9m("fwfh: text-shadow",v)},
CK:function CK(){},
q_:function q_(){},
Ms:function Ms(d,e){this.a=d
this.b=e},
a4W:function a4W(){},
aBb:function aBb(d,e){this.a=d
this.b=e},
aBc:function aBc(d,e,f,g){var _=this
_.c=d
_.d=e
_.a=f
_.b=g},
MO:function MO(d,e){this.a=d
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
amm:function amm(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
UL:function UL(d,e){this.a=d
this.b=e},
aHe:function aHe(d,e,f){this.a=d
this.b=e
this.c=f},
bTq:function bTq(){},
SX:function SX(d){this.a=d},
tO:function tO(d,e){this.a=d
this.b=e},
a8K:function a8K(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cH_:function cH_(){},
a8L:function a8L(d,e){this.a=d
this.b=e},
amo:function amo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a00:function a00(d,e){this.a=d
this.b=e},
brW:function brW(d,e,f){this.a=d
this.b=e
this.c=f},
aKW:function aKW(d,e,f){this.a=d
this.b=e
this.c=f},
fK:function fK(d,e,f){this.a=d
this.b=e
this.c=f},
cZE:function cZE(d){this.a=d},
ap5:function ap5(d,e){var _=this
_.a=d
_.c=_.b=null
_.d=e},
b1D:function b1D(d,e,f){this.a=d
this.b=e
this.$ti=f},
hBY:function hBY(d){this.a=d},
aMm:function aMm(){},
de8:function de8(){},
de9:function de9(d){this.a=d},
bIm:function bIm(d){this.a=d},
byl:function byl(d){this.a=d},
bIs:function bIs(d){this.a=d},
bIt:function bIt(d){this.a=d},
auB:function auB(d){this.a=d},
bIu:function bIu(d){this.a=d},
bRj:function bRj(){},
Et(d,e,f,g){var x=y.s
return new A.ph(f,d!=null?B.a([d],x):B.a([],x),e,g)},
jmF(d){var x,w,v,u,t,s=null,r=$.iCI().aVD(0,d)
if(r==null)return s
x=r.b
w=x[0]
v=x[1]
u=C.c.aZ(d,w.length)
if(v==="base64")t=C.js.bV(u)
else t=v==="utf8"?new Uint8Array(B.el(new B.dp(u))):s
return(t==null?s:!C.an.gac(t))===!0?t:s},
bdr(d,e){var x=d.h(0,e)
if(x==null)return null
return B.i5(x)},
i7p(d,e){var x=d.h(0,e)
if(x==null)return null
return B.cb(x,null)},
ph:function ph(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aKD(d,e,f,g,h){return new A.aoC(e,f,d,g,h,null)},
iqr(d,e){var x,w,v,u,t=null,s=$.iDT()
s.cK(C.cf,"Building body...",t,t)
x=d.e
x===$&&B.e()
x.a6a(0,d)
w=d.d
w===$&&B.e()
v=new A.AG(x,t,D.F8,new A.a5M(),$.ck6(),w,t)
v.d1y(e)
w=v.ap()
u=w==null?t:w.qg(x.gd31())
if(u==null)u=d.a1u(C.au)
s.cK(C.cf,"Built body successfuly.",t,t)
return u},
jhS(d){return B.cXC(d,null,!1,!1,null).dfg().gfN(0)},
aoC:function aoC(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.w=f
_.as=g
_.ay=h
_.a=i},
aKE:function aKE(){var _=this
_.e=_.d=$
_.c=_.a=_.w=_.r=_.f=null},
cXH:function cXH(d){this.a=d},
cXG:function cXG(d){this.a=d},
fn0:function fn0(d,e,f){var _=this
_.e=d
_.a=e
_.c=_.b=null
_.d=f},
azR:function azR(d,e,f){this.f=d
this.b=e
this.a=f},
j6p(d){var x,w=d.b.h(0,"dir")
if(w!=null){x=y.N
x=B.x(["direction",w],x,x)}else x=C.cI
return x},
j6q(d){var x=y.N
return B.x(["display","block"],x,x)},
j6r(d){var x=y.N
return B.x(["display","none"],x,x)},
j6s(d){var x=y.N
return B.x(["display","table"],x,x)},
j6t(d){var x=y.N
return B.x(["text-align","center"],x,x)},
j6u(d){var x,w=d.b.h(0,"align")
if(w==="center"){x=y.N
return B.x(["display","block","text-align","-webkit-center","width","100%"],x,x)}if(w!=null){x=y.N
x=B.x(["text-align",w],x,x)}else x=C.cI
return x},
j6v(d){var x=y.N
return B.x(["text-decoration-line","line-through"],x,x)},
j6w(d){var x=y.N
return B.x(["text-decoration-line","underline"],x,x)},
j6x(d){var x=y.N
return B.x(["vertical-align","middle"],x,x)},
j6y(d){var x=y.N
return B.x(["text-decoration-line","underline","text-decoration-style","dotted"],x,x)},
j6z(d){var x=y.N
return B.x(["display","block","font-style","italic"],x,x)},
j6A(d){var x=y.N
return B.x(["display","block","text-align","-webkit-center","width","100%"],x,x)},
j6B(d){var x=y.N
return B.x(["display","block","margin","0 0 1em 40px"],x,x)},
j6C(d){var x=y.N
return B.x(["display","block","font-weight","bold"],x,x)},
j6D(d){var x=y.N
return B.x(["display","block","margin","1em 40px"],x,x)},
j6E(d){var x=y.N
return B.x(["display","block","font-size","2em","font-weight","bold","margin","0.67em 0"],x,x)},
j6F(d){var x=y.N
return B.x(["display","block","font-size","1.5em","font-weight","bold","margin","0.83em 0"],x,x)},
j6G(d){var x=y.N
return B.x(["display","block","font-size","1.17em","font-weight","bold","margin","1em 0"],x,x)},
j6H(d){var x=y.N
return B.x(["display","block","font-weight","bold","margin","1.33em 0"],x,x)},
j6I(d){var x=y.N
return B.x(["display","block","font-size","0.83em","font-weight","bold","margin","1.67em 0"],x,x)},
j6J(d){var x=y.N
return B.x(["display","block","font-size","0.67em","font-weight","bold","margin","2.33em 0"],x,x)},
j6K(d){var x=y.N
return B.x(["display","block","margin","0.5em 0","border-top","1px solid"],x,x)},
j6L(d,e){return e.qg(new A.dTm())},
j6M(d){var x=y.N
return B.x(["background-color","#ff0","color","#000"],x,x)},
j6N(d){var x=y.N
return B.x(["display","block","margin","1em 0"],x,x)},
j6O(d){var x=y.N
return B.x(["vertical-align","sub","font-size","smaller"],x,x)},
j6P(d){var x=y.N
return B.x(["vertical-align","super","font-size","smaller"],x,x)},
j6Q(d){var x=y.N
return B.x(["font-weight","bold","vertical-align","middle"],x,x)},
bKV:function bKV(d,e){var _=this
_.a=d
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=null
_.aRY$=e},
dTn:function dTn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dTo:function dTo(d,e,f){this.a=d
this.b=e
this.c=f},
dTp:function dTp(d,e,f){this.a=d
this.b=e
this.c=f},
dTq:function dTq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dTm:function dTm(){},
bKW:function bKW(){},
b9M:function b9M(){},
hZI(d){var x,w,v=$.ieq
if(v==null)v=$.ieq=new B.PC(new WeakMap(),y.c8)
B.pB(d)
x=v.a.get(d)
if(x!=null)return x
if(!d.b.K(0,"style")){v.j(0,d,D.a1l)
return D.a1l}w=A.cH2(A.hP_("*{"+B.b(d.b.h(0,"style"))+"}"))
v.j(0,d,w)
return w},
HG(d){var x=d.c
if(x instanceof B.a0q)return x.c
return D.dg9},
uQ(d){var x=A.HG(d)
return x.length===1?C.d.ga_(x):null},
idy(d){var x,w,v,u,t=$.idx
if(t==null)t=$.idx=new B.PC(new WeakMap(),y.gE)
B.pB(d)
x=t.a.get(d)
if(x!=null)return x
w=$.ioR
if(w==null)w=$.ioR=new A.euM(B.a([],y.A))
v=w.a
C.d.ag(v)
w.L7(d.f)
v=J.xp(v.slice(0),B.Y(v).c)
u=B.Y(v).i("aE<1>")
v=B.M(new B.aE(v,new A.cGZ(),u),u.i("U.E"))
v.$flags=1
v=v
t.j(0,d,v)
return v},
oX(d){var x,w,v,u=d.c
if(u instanceof B.Q1)return u.b
if(typeof u=="string"){x=u.charCodeAt(0)
w=u.length-1
if(x===u.charCodeAt(w)){v=C.c.a3(u,1,w)
switch(x){case 34:return B.at(v,'\\"','"')
case 39:return B.at(v,"\\'","'")}}}return""},
cH2(d){var x,w=$.idA
if(w==null)w=$.idA=new A.eoj(B.a([],y._))
x=w.a
C.d.ag(x)
w.ma(d.b)
x=J.xp(x.slice(0),B.Y(x).c)
return x},
cGZ:function cGZ(){},
eoj:function eoj(d){this.a=d},
euM:function euM(d){this.a=d},
jis(d,e){var x,w,v=e.x
if(v==null)x=null
else{w=v.$ti.i("aE<ds.E>")
v=B.M(new B.aE(v,new A.hBX(),w),w.i("U.E"))
v.$flags=1
x=v}if(x!=null&&x.length!==0){v=B.M(d,y.z)
C.d.D(v,x)
v=B.iE(v,y.Q)}else v=d
return v},
jiO(d){var x=d.a,w=x.a
return w==null?x.e!=null:w},
j8r(d,e){var x,w=d.a,v=e.a
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
_.akZ$=j},
cFW:function cFW(){},
hBX:function hBX(){},
N6:function N6(d,e){this.a=d
this.b=e},
eiN:function eiN(){},
a5M:function a5M(){this.b=null},
cdh:function cdh(d){this.a=d},
iO7(d,e){var x=A.ire(d)
if((x==null?null:x.length!==0)===!0)e.qg(new A.cpw(x))},
ire(d){var x=d.H3(y.D)
return x==null?null:x.a},
ird(d,e){var x,w=A.ire(d);(w==null?d.wv(new A.bRi(B.a([],y.f5)),y.D).a:w).push(e)
x=d.f
if(x!=null)A.ird(x,e)},
iri(d){var x=d.jR(0,y.w)===C.cG,w=d.jR(0,y.a)
switch((w==null?C.Q:w).a){case 2:return C.l
case 5:return C.fW
case 3:return C.y
case 0:return x?C.fW:C.y
case 1:return x?C.y:C.fW
case 4:return C.y}},
j2E(d,e){return d.J6(new A.bIs(e),y.G)},
irk(d){var x=y.gu,w=d.H3(x)
return w==null?d.wv(A.jeo(d),x):w},
jeo(d){var x,w,v,u,t,s,r,q
for(x=d.w.gaq(0),w=x.$ti.c,v=D.ePg;x.G();){u=x.d
if(u==null)u=w.a(u)
t=u.f
s=u.b
t=t?"*"+s.b:s.b
u=A.HG(u)
r=new A.fze(t,u)
switch(t){case"background":for(;r.c<u.length;v=q){q=v.d72(r)
if(r.c<u.length)q=q.d73(r)
if(r.c<u.length)q=q.d74(r)
if(r.c<u.length)q=q.d75(r)
if(q===v)++r.c}break
case"background-color":v=v.d72(r)
break
case"background-image":v=v.d73(r)
break
case"background-position":for(;r.c<u.length;v=q){q=v.d74(r)
if(q===v)++r.c}break
case"background-repeat":case"background-size":v=v.d75(r)
break}}return v},
irm(d){switch(d instanceof B.fp?A.oX(d):null){case"bottom":return D.ePh
case"center":return D.ePi
case"left":return D.ePj
case"right":return D.ePk
case"top":return D.ePl}return null},
dG0(d){$.i8q().j(0,d,!0)
return!0},
j2H(d){var x,w,v=B.M(d.gTC(),y.r)
if(v.length===1){x=C.d.ga_(v)
if(x instanceof A.a4W&&x.ga4D())return d}w=d.f
v=w.YW(0)
v.l6(0,A.SF(w,A.Et(null,d.ap(),"inline-block",null),C.oU,C.b9))
return v},
j2I(d){return d.f.YW(0)},
j2G(d){switch(d){case"flex-start":return C.i
case"flex-end":return C.eP
case"center":return C.az
case"space-between":return C.cR
case"space-around":return C.oI
case"space-evenly":return C.oJ
default:return C.i}},
j2F(d){switch(d){case"flex-start":return C.y
case"flex-end":return C.fW
case"center":return C.l
case"baseline":return C.hA
case"stretch":return C.aJ
default:return C.y}},
aFj(d){var x=y.R,w=d.H3(x)
return w==null?d.wv(D.eLm,x):w},
isB(d,e){return A.Et(new A.hB6(d,e),null,B.b(d.a.x)+"--paddingInlineAfter",null)},
isC(d,e){return A.Et(new A.hB7(d,e),null,B.b(d.a.x)+"--paddingInlineBefore",null)},
isD(d){return d!=null&&d>0?new B.N(d,null,null,null):C.au},
j2M(d,e){var x,w=e.a.a,v=w instanceof B.fX?w:null
if(v!=null){x=$.cjT()
B.pB(v)
x=x.a.get(v)==null}else x=!0
if(x)return
e.fI(0,D.bqL)},
j2J(d,e){var x,w,v,u,t=A.hyJ(d)
if((t==null?null:t.r)===D.Xf)return e
x=d.a.a
w=x instanceof B.fX?x:null
if(w==null)return e
t=$.cjT()
B.pB(w)
v=t.a.get(w)
if(v==null)return e
u=A.hyJ(v)
if(u!=null)t=u.d==null&&u.r==null
else t=!0
if(t)return e
return e.qg(new A.dGf(d))},
j2K(d,e){var x,w=$.cjU()
B.pB(d)
if(J.C(w.a.get(d),!0)||e.gac(e))return e
x=A.hyJ(d)
if(x==null)return e
return e.qg(new A.dGg(x,d))},
j2L(d){var x,w,v,u=$.cjU()
B.pB(d)
if(J.C(u.a.get(d),!0))return
x=A.hyJ(d)
if(x==null)return
for(u=d.gTC(),u=new B.jz(u.a(),u.$ti.i("jz<1>")),w=null;u.G();){v=u.b
if(v instanceof A.a4W){if(w!=null)return
w=v.a}else return}if(w==null||w.gac(w))return
w.qg(new A.dGh(x,d))},
ilu(d,e,f,g){var x,w,v,u,t,s=null,r=f.a,q=r==null
if(q&&f.b==null&&f.c==null&&f.d==null&&f.f==null&&f.r===D.Xf){if(e instanceof A.aml)return e
return new A.aml(e,s)}x=g.aC(d)
r=q?s:A.aBu(r,x)
q=f.b
q=q==null?s:A.aBu(q,x)
w=f.c
w=w==null?s:A.aBu(w,x)
v=f.d
v=v==null?s:A.aBu(v,x)
u=f.f
u=u==null?s:A.aBu(u,x)
t=f.r
t=t==null?s:A.aBu(t,x)
return new A.bjZ(r,q,w,v,f.e,u,t,e,s)},
hyJ(d){var x=y.cC,w=d.H3(x)
if(w==null)w=d.wv(A.jep(d),x)
if(w.a==null&&w.b==null&&w.c==null&&w.d==null&&w.f==null&&w.r==null)return null
return w},
jep(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
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
t=C.aI}break}}if(v==null){x=$.i8r()
B.pB(d)
x=J.C(x.a.get(d),!0)}else x=!1
if(x){if(t==null)t=C.aI
v=D.Xf}return new A.c9I(p,q,r,s,t,u,v)},
aBu(d,e){var x=d.fU(e)
if(x!=null)return new A.a5m(x)
switch(d.b.a){case 0:return D.bug
case 2:return new A.aZU(d.a)
default:return null}},
j9p(d){return d.bGo(0)},
j2N(d,e){return B.au(e,1,null)},
j2O(d){var x=A.irn(d).b
if(x!=null)d.b.of(A.jnX(),x,y.a)
return d},
j2P(d,e){if(e.gac(e)||A.irn(d).a!=="-webkit-center")return e
return e.qg(A.jnU())},
j2Q(d,e){return d.J6(e,y.a)},
irn(d){var x=y.gk,w=d.H3(x)
return w==null?d.wv(A.jer(d),x):w},
jer(d){var x,w,v,u=d.BH("text-align")
if(u==null)x=null
else{w=A.uQ(u)
x=w instanceof B.fp?A.oX(w):null}if(x==null)return D.ePm
switch(x){case"center":case"-moz-center":case"-webkit-center":v=C.ag
break
case"end":v=C.ps
break
case"justify":v=C.lL
break
case"left":v=C.i9
break
case"right":v=C.ia
break
case"start":v=C.Q
break
default:v=null}return new A.b84(x,v)},
jwM(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(x=A.HG(e),w=x.length,v=e.b,u=e.f,t=y.i,s=d.b,r=y.V,q=y.bR,p=y.fs,o=0;o<x.length;x.length===w||(0,B.a7)(x),++o){n=x[o]
if(u){m=v.b
l="*"+m
k=l
l=m
m=k}else{m=v.b
l=m}if(m!=="text-decoration"){if(u){v.toString
m="*"+l}else{v.toString
m=l}m=m==="text-decoration-line"}else m=!0
if(m){j=A.j3S(n)
if(j!=null){s.of(A.jo6(),j,p)
continue}}if(u){v.toString
m="*"+l}else{v.toString
m=l}if(m!=="text-decoration"){if(u){v.toString
m="*"+l}else{v.toString
m=l}m=m==="text-decoration-style"}else m=!0
if(m){i=A.ixh(n)
if(i!=null){s.of(A.jo7(),i,q)
continue}}if(u){v.toString
m="*"+l}else{v.toString
m=l}if(m!=="text-decoration"){if(u){v.toString
m="*"+l}else{v.toString
m=l}m=m==="text-decoration-color"}else m=!0
if(m){h=A.bdq(n)
if(h!=null){s.of(A.jo5(),h,r)
continue}}if(u){v.toString
m="*"+l}else{v.toString
m=l}g=!0
if(m!=="text-decoration"){if(u){v.toString
m="*"+l}else{v.toString
m=l}if(m!=="text-decoration-thickness"){if(u){v.toString
m="*"+l}else{v.toString
m=l}m=m==="text-decoration-width"}else m=g}else m=g
if(m){f=A.ok(n)
if(f!=null&&f.b===D.D7){s.of(A.jo8(),f.a/100,t)
continue}}}},
jwN(d,e){return d.J6(new A.bIt(e),y.K)},
jwO(d,e){var x,w,v,u,t,s,r,q,p,o,n=null,m=d.a
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
if(w)o.push(C.a7u)
if(v!==!0){w=e.b
if(w==null)w=q}else w=!0
if(w)o.push(C.nC)
if(m!==!0){m=e.c
if(m==null)m=p}else m=!0
if(m)o.push(C.ib)
return d.CG(B.aD(n,n,n,"fwfh: text-decoration-line",B.i2d(o),n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),y.z)},
jwP(d,e){var x=null
return d.CG(B.aD(x,x,x,"fwfh: text-decoration-style",x,x,e,x,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),y.z)},
jwQ(d,e){var x=null
return d.CG(B.aD(x,x,x,"fwfh: text-decoration-thickness",x,x,x,e,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),y.z)},
j3S(d){if(d instanceof B.fp)switch(A.oX(d)){case"line-through":return D.etl
case"none":return D.etj
case"overline":return D.etm
case"underline":return D.etk}return null},
jeG(d){var x,w,v,u=B.a([],y.cW),t=y.A,s=B.a([],t)
for(x=d.length,w=0;w<d.length;d.length===x||(0,B.a7)(d),++w){v=d[w]
if(v instanceof B.ack){u.push(s)
s=B.a([],t)}else s.push(v)}if(s.length!==0)u.push(s)
return u},
jkl(d,e){var x,w,v=B.a([],y.cp)
for(x=J.b1(e);x.G();){w=A.jhP(x.gT(x))
if(w!=null)v.push(w)}return d.J6(new A.bIu(v),y.O)},
jhP(d){var x,w,v,u,t,s,r=J.L(d)
if(r.gE(d)<2||r.gE(d)>4)return null
x=A.bdq(r.ga7(d))
if(x==null){x=A.bdq(r.ga_(d))
w=x!=null?1:0}else w=0
v=x==null
if(v&&r.gE(d)>3)return null
u=A.ok(A.i02(d,w))
t=A.ok(A.i02(d,1+w))
if(u==null||t==null)return null
s=A.ok(A.i02(d,2+w))
r=s==null?D.hj:s
return new A.amo(r,v?D.Ve:x,u,t)},
jkM(d,e){var x=d!==C.cG
switch(e){case"top":case"super":return x?C.cv:C.j4
case"middle":return x?C.bZ:C.ck
case"bottom":case"sub":return x?C.nO:C.hg}return null},
jkQ(d){switch(d){case"top":case"sub":return C.a4c
case"super":case"bottom":return C.eD
case"middle":return C.kd}return null},
j3k(d,e){var x=null
return e==null?d:d.CG(B.aD(x,x,B.o(e).ax.b,"fwfh: a[href] default color",x,x,x,x,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),y.z)},
j3j(d){return D.dAS},
j3i(d,e){return d.J6(e,y.g)},
j3l(d){d.l6(0,new A.aUq(d))
return d},
j3n(d){if(d.gac(0))return d
d.a5I(A.SF(d,A.Et(new A.dKh(d),null,"summary--inlineMarker",null),C.kd,C.b9))
return d},
j3m(d,e){$.i8Y().j(0,e,!0)
return!0},
j3o(d){var x=d.b,w=x.h(0,"color"),v=x.h(0,"face"),u=x.h(0,"size"),t=D.dUz.h(0,u==null?"":u)
u=y.N
u=B.D(u,u)
if(w!=null)u.j(0,"color",w)
if(v!=null)u.j(0,"font-family",v)
if(t!=null)u.j(0,"font-size",t)
return u},
j3p(d){var x="height",w="width",v=d.b,u=v.h(0,x),t=v.h(0,w),s=y.N
s=B.D(s,s)
s.j(0,x,"auto")
s.j(0,"min-width","0px")
s.j(0,"min-height","0px")
s.j(0,w,"auto")
if(u!=null)s.j(0,x,u+"px")
if(t!=null)s.j(0,w,t+"px")
return s},
j3q(d,e){var x=$.hWK()
B.pB(d)
x=x.a.get(d)
return x==null?e:x},
j3r(d){var x,w=$.hWK()
B.pB(d)
x=w.a.get(d)
if(x==null)return
d.l6(0,A.SF(d,x,C.oU,C.b9))},
j3s(d){var x,w,v=d.b,u=$.i8Z()
B.pB(d)
u=u.a.get(d)
if(u==null)u=0
if(d.x==="ol"){x=v.h(0,"type")
x=A.ise(x==null?"":x)
w=x==null?"decimal":x}else if(u===0)w="disc"
else{x=u===1?"circle":"square"
w=x}x=y.N
x=B.D(x,x)
x.j(0,"display","block")
x.j(0,"list-style-type",w)
x.j(0,"padding-inline-start","40px")
if(u===0)x.j(0,"margin","1em 0")
return x},
ise(d){switch(d){case"a":return"lower-alpha"
case"A":return"upper-alpha"
case"1":return"decimal"
case"i":return"lower-roman"
case"I":return"upper-roman"}return null},
ciq(d){var x,w=y.d,v=d.H3(w)
if(v==null){x=d.a.b
w=d.wv(new A.b8i(x.K(0,"reversed"),A.i7p(x,"start"),0,0),w)}else w=v
return w},
j3t(d){return D.dZQ},
j3u(d){var x,w=d.ga_(0),v=w==null?null:w.gcv(w)
w=d.ga7(0)
x=w==null?null:w.gcv(w)
if(v==null||x==null){d.a5I(new A.Ms("\u201c",d))
d.l6(0,new A.Ms("\u201d",d))
return d}v.a5I(new A.Ms("\u201c",v))
x.l6(0,new A.Ms("\u201d",x))
return d},
j3v(d){var x=y.N
return B.x(["display","none"],x,x)},
j3w(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=d.f.YW(0),l=B.a([],y.J)
for(x=d.gbr(0),w=x.length,v=y.s,u=y.P,t=d.b,s=0;s<x.length;x.length===w||(0,B.a7)(x),++s){r=x[s]
if(!A.jej(r)||l.length===0){if(l.length===0&&r instanceof A.MO)m.l6(0,r)
else l.push(r)
continue}q=d.bH5(!1,n,new A.ap5(t,n),d)
for(p=l.length,o=0;o<l.length;l.length===p||(0,B.a7)(l),++o)q.l6(0,l[o])
C.d.ag(l)
p=B.a([new A.dKu(u.a(r),q)],v)
m.l6(0,new A.aBc(C.oU,C.b9,new A.ph("ruby",p,n,n),m))}for(x=l.length,s=0;s<l.length;l.length===x||(0,B.a7)(l),++s)m.l6(0,l[s])
return m},
j3x(d,e){var x=e.a,w=x.a,v=w instanceof B.fX?w:null
if(v!==d.a)return
switch(x.x){case"rp":e.fI(0,D.bqO)
break
case"rt":e.b.of(A.jwW(),0.5,y.i)
break}},
jej(d){if(!(d instanceof A.AG))return!1
if(d.gac(0))return!1
return d.a.x==="rt"},
ilG(d){var x=null,w=new A.bHG(d)
w.b=D.br8
w.c=D.br0
w.d=A.vS(x,"table",x,A.jnQ(),w.gevv(),x,x,x,A.jnP(),-299997e10)
return w},
j3y(d){var x,w,v=d.b,u=A.bdr(v,"border")
if(u==null)u=0
x=A.bdr(v,"cellspacing")
w=y.N
w=B.D(w,w)
if(u>0)w.j(0,"border",B.b(u)+"px solid")
w.j(0,"border-collapse","separate")
w.j(0,"border-spacing",B.b(x==null?2:x)+"px")
return w},
j3z(d){var x=y.N
return B.x(["border","inherit"],x,x)},
i26(d){var x,w,v,u,t,s,r,q,p
for(x=d.a,w=J.beq(A.hZI(x)),v=w.$ti,w=new B.bT(w,w.gE(0),v.i("bT<ah.E>")),v=v.i("ah.E");w.G();){u=w.d
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
j3A(d){return d!=null},
j3B(d,e){var x=A.bdr(d.a.b,"border")
if((x==null?0:x)>0)switch(e.a.x){case"td":case"th":e.fI(0,D.bra)
break}},
j3C(d,e){var x=null,w=e.a.x
if(w==="td"||w==="th")e.fI(0,A.vS(x,"table--cellpadding--child",new A.dKv(A.bdr(d.a.b,"cellpadding")),x,x,x,x,x,x,-2999974e9))},
j3D(d,e){var x,w,v,u,t=null,s="table-header-group",r=e.a.a,q=r instanceof B.fX?r:t
if(q!==d.a)return
x=A.i4v(d)
w=A.i26(e)
switch(w){case"table-caption":e.fI(0,A.vS(!0,"caption",t,t,t,t,new A.dKw(x),t,t,10))
break
case"table-header-group":case"table-row-group":case"table-footer-group":if(w===s)v=x.d
else v=w==="table-row-group"?x.cbT():x.c
q=v.b
q===$&&B.e()
e.fI(0,q)
break
case"table-row":q=x.cbT()
u=A.i3T()
q.a.push(u)
q=u.b
q===$&&B.e()
e.fI(0,q)
break
case"table-cell":q=x.a;(q.length!==0?C.d.ga7(q):x.cbT()).gfpT().cUL(e)
break}},
j3E(d){A.dG0(d)
$.cjU().j(0,d,!0)
return d},
i4v(d){var x=y.ar,w=d.H3(x)
return w==null?d.wv(new A.cav(B.a([],y.dt),B.a([],y.p),A.i3U("table-footer-group"),A.i3U("table-header-group"),B.a([],y.fL),B.D(y.S,y.bS)),x):w},
i3T(){var x=null,w=new A.b8j(B.a([],y.ad))
w.b=A.vS(!0,"tr",x,x,x,x,x,x,w.gev3(),1000014e9)
w.c=A.vS(!0,"td",x,x,x,x,w.get6(),x,x,10)
return w},
jan(d){var x,w=d.b.h(0,"valign")
if(w!=null){x=y.N
x=B.x(["vertical-align",w],x,x)}else x=C.cI
return x},
i3U(d){var x=null,w=new A.b8k(B.a([],y.g7))
w.b=A.vS(x,d,x,x,x,x,x,x,w.geu4(),1000015e9)
return w},
bfb:function bfb(d,e,f){this.a=d
this.b=e
this.c=f},
cpt:function cpt(d){this.a=d},
cpv:function cpv(d){this.a=d},
cpr:function cpr(d,e){this.a=d
this.b=e},
cpu:function cpu(d){this.a=d},
cps:function cps(d){this.a=d},
cpw:function cpw(d){this.a=d},
bfd:function bfd(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cpm:function cpm(d){this.a=d},
cpn:function cpn(d){this.a=d},
cpo:function cpo(d){this.a=d},
cpp:function cpp(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
cpq:function cpq(){},
bRi:function bRi(d){this.a=d},
aGJ:function aGJ(d,e,f,g,h,i,j){var _=this
_.r=d
_.w=e
_.x=f
_.c=g
_.d=h
_.e=i
_.a=j},
cF2:function cF2(d){this.a=d},
cF3:function cF3(){},
dFS:function dFS(d){this.a=d},
dFU:function dFU(d){this.a=d},
dFT:function dFT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dFV:function dFV(){},
b83:function b83(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fze:function fze(d,e){this.a=d
this.b=e
this.c=0},
ait:function ait(d,e){this.a=d
this.b=e},
dFW:function dFW(d){this.a=d},
dFZ:function dFZ(d){this.a=d},
dFY:function dFY(d,e,f){this.a=d
this.b=e
this.c=f},
dG_:function dG_(d){this.a=d},
dFX:function dFX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dG1:function dG1(d){this.a=d},
dG5:function dG5(d){this.a=d},
dG4:function dG4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dG2:function dG2(d){this.a=d},
dG3:function dG3(){},
aYt:function aYt(d,e){this.a=d
this.b=e},
dG6:function dG6(d){this.a=d},
dG8:function dG8(d){this.a=d},
dG7:function dG7(d,e){this.a=d
this.b=e},
dG9:function dG9(){},
hB6:function hB6(d,e){this.a=d
this.b=e},
hB7:function hB7(d,e){this.a=d
this.b=e},
dGb:function dGb(d){this.a=d},
dGd:function dGd(d){this.a=d},
dGc:function dGc(d,e,f){this.a=d
this.b=e
this.c=f},
dGe:function dGe(){},
i1X:function i1X(){},
dGf:function dGf(d){this.a=d},
dGg:function dGg(d,e){this.a=d
this.b=e},
dGh:function dGh(d,e){this.a=d
this.b=e},
ayA:function ayA(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.c=h
_.a=i},
c9I:function c9I(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
b84:function b84(d,e){this.a=d
this.b=e},
XD:function XD(d,e,f){this.a=d
this.b=e
this.c=f},
dGi:function dGi(d){this.a=d},
dGl:function dGl(d){this.a=d},
dGk:function dGk(d,e,f){this.a=d
this.b=e
this.c=f},
dGm:function dGm(d){this.a=d},
dGj:function dGj(d,e,f){this.a=d
this.b=e
this.c=f},
dKa:function dKa(d){this.a=d},
dKe:function dKe(d){this.a=d},
dKc:function dKc(d,e){this.a=d
this.b=e},
dKd:function dKd(d,e,f){this.a=d
this.b=e
this.c=f},
dKf:function dKf(d){this.a=d},
dKb:function dKb(d,e,f){this.a=d
this.b=e
this.c=f},
aUq:function aUq(d){this.a=d},
dKg:function dKg(d){this.a=d},
dKj:function dKj(d){this.a=d},
dKi:function dKi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKk:function dKk(){},
dKh:function dKh(d){this.a=d},
dKl:function dKl(d){this.a=d},
dKm:function dKm(d){this.a=d},
dKn:function dKn(d){this.a=d},
dKq:function dKq(d){this.a=d},
dKp:function dKp(d,e){this.a=d
this.b=e},
dKo:function dKo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b8i:function b8i(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKr:function dKr(d){this.a=d},
dKt:function dKt(d){this.a=d},
dKs:function dKs(d,e){this.a=d
this.b=e},
dKu:function dKu(d,e){this.a=d
this.b=e},
bHG:function bHG(d){var _=this
_.a=d
_.d=_.c=_.b=$},
dKy:function dKy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dKx:function dKx(d){this.a=d},
dKz:function dKz(d,e,f){this.a=d
this.b=e
this.c=f},
dKA:function dKA(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
dKv:function dKv(d){this.a=d},
dKw:function dKw(d){this.a=d},
b8j:function b8j(d){this.a=d
this.c=this.b=$},
b8k:function b8k(d){this.a=d
this.b=$},
cav:function cav(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.w=_.r=0},
caw:function caw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
jxc(d){if(d instanceof B.fp){if(d instanceof B.zu)return C.m.im(B.e5(d.c))
switch(A.oX(d)){case"none":return-1}}return null},
ixh(d){switch(d instanceof B.fp?A.oX(d):null){case"dotted":return C.qQ
case"dashed":return C.bau
case"double":return C.a7t
case"solid":return C.bas}return null},
jxd(d){if(d instanceof B.fp)switch(A.oX(d)){case"clip":return C.eW
case"ellipsis":return C.Z}return null},
cjq(d){var x,w,v,u,t,s,r,q=y.g8,p=d.H3(q)
if(p!=null)return p
for(x=d.w.gaq(0),w=x.$ti.c,v=D.bUP;x.G();){u=x.d
if(u==null)u=w.a(u)
t=u.f
s=u.b
r=t?"*"+s.b:s.b
if(!C.c.ao(r,"border"))continue
v=C.c.c4(r,"radius")?A.jkN(v,u):A.jkO(v,u)}d.wv(v,q)
return v},
jkO(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=C.c.aZ(e.gcjU(),6),j=k.length===0
if(j){x=A.uQ(e)
w=(x instanceof B.fp?A.oX(x):l)==="inherit"}else w=!1
if(w)return D.bUQ
for(w=A.HG(e),v=w.length,u=l,t=D.Ve,s=D.bUU,r=0;r<w.length;w.length===v||(0,B.a7)(w),++r){q=w[r]
if((q instanceof B.fp?A.oX(q):l)==="none"){t=l
u=t
s=D.hj
break}p=A.ixh(q)
if(p!=null){u=p
continue}o=A.ok(q)
if(o!=null){s=o
continue}n=A.bdq(q)
if(n!=null){t=n
continue}}m=new A.aHe(t,u,s)
if(j)return d.f3J(m)
switch(k){case"-bottom":case"-block-end":return d.Ap(m)
case"-inline-end":return d.bGb(m)
case"-inline-start":return d.bGc(m)
case"-left":return d.aiZ(m)
case"-right":return d.aj0(m)
case"-top":case"-block-start":return d.TY(m)}return d},
jkN(d,e){var x,w,v,u,t,s,r,q,p,o,n,m
switch(e.gcjU()){case"border-radius":x=A.HG(e)
w=C.d.k0(x,new A.hF3())
v=B.c4(8,D.hj,!1,y.bT)
u=B.Y(x)
if(w===-1){u=u.i("E<1,tO>")
u=B.M(new B.E(x,new A.hF4(),u),u.i("ah.E"))
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
r=B.M(new B.E(r,new A.hF5(),q),q.i("ah.E"))
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
u=B.M(new B.E(u,new A.hF6(),r),r.i("ah.E"))
u.$flags=1
o=u
u=o.length
if(u!==0)for(s=0;s<4;++s)v[s*2+1]=o[0]
if(u>1){r=o[1]
v[3]=r
v[7]=r}if(u>2)v[5]=o[2]
if(u>3)v[7]=o[3]}u=v[0]
r=v[1]
u=u===D.hj&&r===D.hj?D.hX:new A.UL(u,r)
r=v[2]
q=v[3]
r=r===D.hj&&q===D.hj?D.hX:new A.UL(r,q)
q=v[4]
n=v[5]
q=q===D.hj&&n===D.hj?D.hX:new A.UL(q,n)
n=v[6]
m=v[7]
return d.fbW(n===D.hj&&m===D.hj?D.hX:new A.UL(n,m),q,u,r)
case"border-bottom-left-radius":return d.f6V(A.hF7(e))
case"border-bottom-right-radius":return d.f6W(A.hF7(e))
case"border-top-left-radius":return d.f6X(A.hF7(e))
case"border-top-right-radius":return d.f6Y(A.hF7(e))}return d},
hF7(d){var x,w,v,u=A.HG(d),t=u.length
if(t===2){x=A.ok(u[0])
if(x==null)x=D.hj
w=A.ok(u[1])
if(w==null)w=D.hj
if(x===D.hj&&w===D.hj)return D.hX
return new A.UL(x,w)}else if(t===1){v=A.ok(C.d.ga_(u))
if(v==null)v=D.hj
if(v===D.hj)return D.hX
return new A.UL(v,v)}return D.hX},
bdq(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null
if(d==null)return h
if(d instanceof B.ao1)switch(d.d){case"hsl":case"hsla":x=A.idy(d)
w=J.L(x)
if(w.gE(x)>=3){v=w.h(x,0)
if(v instanceof B.zu)u=A.isG(B.e5(v.c),h)
else u=v instanceof B.aDF?A.isG(B.e5(v.c),v.f):h
t=w.h(x,1)
s=t instanceof B.Wo?C.m.a4(B.e5(t.c)/100,0,1):h
r=w.h(x,2)
q=r instanceof B.Wo?C.m.a4(B.e5(r.c)/100,0,1):h
p=w.gE(x)>=4?A.isF(w.h(x,3)):1
if(u!=null&&s!=null&&q!=null&&p!=null)return new A.SX(new B.jN(p,u,s,q).cY())}break
case"rgb":case"rgba":x=A.idy(d)
w=J.L(x)
if(w.gE(x)>=3){o=A.i4W(w.h(x,0))
n=A.i4W(w.h(x,1))
m=A.i4W(w.h(x,2))
l=w.gE(x)>=4?A.isF(w.h(x,3)):1
if(o!=null&&n!=null&&m!=null&&l!=null)return new A.SX(B.bB(C.m.im(l*255),o,n,m))}break}else if(d instanceof B.aot){k=d.d.toUpperCase()
switch(k.length){case 3:return new A.SX(B.ct(B.eo("0xFF"+A.i5p(k),h)))
case 4:j=k[3]
i=C.c.a3(k,0,3)
return new A.SX(B.ct(B.eo("0x"+A.i5p(j)+A.i5p(i),h)))
case 6:return new A.SX(B.ct(B.eo("0xFF"+k,h)))
case 8:return new A.SX(B.ct(B.eo("0x"+C.c.a3(k,6,8)+C.c.a3(k,0,6),h)))}}else if(d instanceof B.fp)switch(A.oX(d)){case"currentcolor":return D.Ve
case"transparent":return D.eM4}return h},
isF(d){var x
if(d instanceof B.zu)x=B.e5(d.c)
else x=d instanceof B.Wo?B.e5(d.c)/100:null
return x==null?null:C.m.a4(x,0,1)},
isG(d,e){var x
switch(e){case 609:x=d*57.29577951308232
break
case 610:x=d*0.9
break
case 611:x=d*360
break
default:x=d}while(x<0)x+=360
return C.m.am(x,360)},
i4W(d){var x
if(d instanceof B.zu)x=C.m.im(B.e5(d.c))
else x=d instanceof B.Wo?C.m.im(B.e5(d.c)/100*255):null
return x==null?null:C.k.a4(x,0,255)},
i5p(d){var x,w,v
for(x=d.length,w=0,v="";w<x;++w)v+=C.c.b7(d[w],2)
return v.charCodeAt(0)==0?v:v},
ok(d){var x
if(d==null)return null
if(d instanceof B.aIz)return new A.tO(B.e5(d.c),D.Xd)
else if(d instanceof B.a1C){x=B.e5(d.c)
switch(d.f){case 606:return new A.tO(x,D.bUS)
case 602:return new A.tO(x,D.Xe)}}else if(d instanceof B.fp){if(d instanceof B.zu){if(B.e5(d.c)===0)return D.hj}else if(d instanceof B.Wo)return new A.tO(B.e5(d.c),D.D7)
switch(A.oX(d)){case"auto":return D.bUT}}return null},
jhM(d){var x,w,v,u,t,s=null
switch(d.length){case 4:x=A.ok(d[0])
w=A.ok(d[1])
return new A.a8K(A.ok(d[2]),w,A.ok(d[3]),s,s,x)
case 2:v=A.ok(d[0])
u=A.ok(d[1])
return new A.a8K(v,u,u,s,s,v)
case 1:t=A.ok(d[0])
return new A.a8K(t,t,t,s,s,t)}return s},
jhN(d,e,f){var x,w=A.ok(f)
if(w==null)return d
x=d==null?D.bUR:d
switch(e){case"-bottom":case"-block-end":return x.Ap(w)
case"-inline-end":return x.bGb(w)
case"-inline-start":return x.bGc(w)
case"-left":return x.aiZ(w)
case"-right":return x.aj0(w)
case"-top":case"-block-start":return x.TY(w)}return x},
hVE(d,e){var x,w,v,u,t,s,r,q,p,o,n
for(x=d.w.gaq(0),w=e.length,v=x.$ti.c,u=null;x.G();){t=x.d
if(t==null)t=v.a(t)
s=t.f
r=t.b
q=s?"*"+r.b:r.b
if(!C.c.ao(q,e))continue
p=C.c.aZ(q,w)
if(p.length===0)u=A.jhM(A.HG(t))
else{o=A.HG(t)
n=o.length===1?C.d.ga_(o):null
if(n!=null)u=A.jhN(u,p,n)}}return u},
hF3:function hF3(){},
hF4:function hF4(){},
hF5:function hF5(){},
hF6:function hF6(){},
jed(d){var x,w,v=d.gcv(d)
if(!(d instanceof A.MO))return v.b
if(d===v.ga_(0))return null
if(d===v.ga7(0)){x=A.irb(d)
if(x!=null){for(w=v;w=w.f,w.ga7(0)===d;);if(w===x.gcv(x))return x.gcv(x).b
else return null}}return v.b},
irb(d){var x=d.gjf(0)
for(;;){if(!(x!=null&&x instanceof A.MO))break
x=x.gjf(0)}return x},
irh(d,e,f,g){var x,w,v,u,t,s,r,q,p=d.length
if(p===0)return""
x=new B.cK("")
w=p-1
p=e===D.aho
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
cQj:function cQj(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null
_.w=_.r=_.f=_.e=$
_.x=!1
_.y=$},
cQn:function cQn(d,e,f){this.a=d
this.b=e
this.c=f},
cQo:function cQo(d,e,f){this.a=d
this.b=e
this.c=f},
cQm:function cQm(d,e,f){this.a=d
this.b=e
this.c=f},
cQl:function cQl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cQk:function cQk(){},
ais:function ais(d,e,f){this.a=d
this.b=e
this.c=f},
i_w(d,e,f){var x=B.a([],y.gB),w=B.a([new A.cVN(d,e)],y.s)
x.push(d)
return new A.PV(e,x,f,w,null,null)},
ifX(d,e,f,g){var x,w=null,v=e instanceof B.N?e.f:w
if(v==null)v=0
x=f.fU(g.aC(d))
if(x!=null&&x>v)return new B.N(w,x,w,w)
return e},
il9(d,e){var x,w=$.i8n()
B.pB(d)
x=w.a.get(d)
if(x==null)x=0
if(e)++x
else x=x>0?x-1:0
w.j(0,d,x)},
PV:function PV(d,e,f,g,h,i){var _=this
_.r=d
_.w=e
_.c=f
_.d=g
_.e=h
_.a=i},
cVN:function cVN(d,e){this.a=d
this.b=e},
cVO:function cVO(d,e){this.a=d
this.b=e},
cF1:function cF1(){},
drX:function drX(){},
idz(d,e,f){return new A.aHg(e,f,d,null)},
ipu(d,e,f,g,h,i,j){var x=new A.b5C(d,e,f,g,h,i,j,null,new B.cA(),B.bJ(y.v))
x.bQ()
x.scT(null)
return x},
aml:function aml(d,e){this.c=d
this.a=e},
bjZ:function bjZ(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.c=k
_.a=l},
aHg:function aHg(d,e,f,g){var _=this
_.f=d
_.r=e
_.b=f
_.a=g},
b5C:function b5C(d,e,f,g,h,i,j,k,l,m){var _=this
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
cH0:function cH0(){},
bTs:function bTs(){},
aZU:function aZU(d){this.a=d},
a5m:function a5m(d){this.a=d},
bqZ:function bqZ(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
axQ:function axQ(d,e,f,g,h){var _=this
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
aad:function aad(d,e,f){this.c=d
this.d=e
this.a=f},
bYb:function bYb(){var _=this
_.d=!1
_.e=$
_.c=_.a=null},
eD6:function eD6(d){this.a=d},
eD5:function eD5(d,e){this.a=d
this.b=e},
br4:function br4(d,e){this.c=d
this.a=e},
aae:function aae(d,e){this.c=d
this.a=e},
br9:function br9(d,e){this.c=d
this.a=e},
cXD:function cXD(d){this.a=d},
b1p:function b1p(d,e,f,g){var _=this
_.f=d
_.r=e
_.b=f
_.a=g},
itA(d,e,f){switch(d.a){case 0:switch(e){case C.ad:return!0
case C.cG:return!1
case null:case void 0:return null}break
case 1:switch(f){case C.n:return!0
case C.Tl:return!1
case null:case void 0:return null}break}},
j95(d,e,f,g,h,i,j,k){var x,w=null,v=B.bJ(y.dO),u=J.lc(4,y.ap)
for(x=0;x<4;++x)u[x]=new B.wz(w,C.Q,C.ad,new B.lm(1),w,w,w,w,C.cj,w)
v=new A.b1q(f,g,h,e,j,k,i,d,v,u,!0,0,w,w,new B.cA(),B.bJ(y.v))
v.bQ()
v.D(0,w)
return v},
br6:function br6(d,e,f,g,h,i,j){var _=this
_.e=d
_.f=e
_.w=f
_.x=g
_.z=h
_.c=i
_.a=j},
b1q:function b1q(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
eDa:function eDa(){},
eD8:function eD8(){},
eD9:function eD9(){},
eD7:function eD7(){},
eJa:function eJa(d,e,f){this.a=d
this.b=e
this.c=f},
cfq:function cfq(){},
cfr:function cfr(){},
bbi:function bbi(){},
br8:function br8(d,e,f){this.e=d
this.c=e
this.a=f},
T8:function T8(d,e,f){this.hE$=d
this.b4$=e
this.a=f},
ayg:function ayg(d,e,f,g,h,i){var _=this
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
cfy:function cfy(){},
cfz:function cfz(){},
aaf:function aaf(d,e,f){this.d=d
this.e=e
this.a=f},
b2o:function b2o(d,e,f,g,h){var _=this
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
aag:function aag(d,e){this.a=d
this.b=e},
ipC(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m
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
q=w.aNS(x-r)
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
aoA:function aoA(d,e){this.c=d
this.a=e},
Tl:function Tl(d,e,f){this.hE$=d
this.b4$=e
this.a=f},
b6o:function b6o(d,e,f,g,h){var _=this
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
chc:function chc(){},
chd:function chd(){},
iV4(d,e,f,g,h,i,j,k,l){return new A.zb(d,f,g,j,k,l,h,e,i)},
jef(d){return new B.aE(d,new A.hjT(),B.Y(d).i("aE<1>"))},
je8(d,e){return d+e},
i4w(d,e,f,g){var x,w,v,u,t,s
if(isNaN(g))x=0/0
else{w=f.f
x=(g-(w-1)*e.gbF4(0))/w}for(w=f.f,v=isNaN(x),u=f.r,t=0;t<w;++t){s=u+t
if(v){if(d[s]<=0.01)d[s]=x}else d[s]=Math.max(d[s],x)}},
i4x(d,e){var x=e.r,w=x+e.f
B.hv(x,w,d.length,null,null)
w=B.fq(d,x,w,B.Y(d).c)
return w.gac(0)?0:w.hj(0,A.NN())},
jal(d,e,f){var x,w,v,u,t,s,r,q=d/f.length,p=B.Y(e).i("E<1,ai>")
p=B.M(new B.E(e,new A.fAF(q),p),p.i("ah.E"))
p.$flags=1
x=p
p=new B.h1(f,B.Y(f).i("h1<1>"))
w=y.i
v=p.gep(p).bD(0,new A.fAG(q,x),w).cd(0,!1)
u=Math.max(0,d-(C.d.gac(v)?0:C.d.hj(v,A.NN())))
if(u<=0.01)return v
p=v.length
t=B.c4(p,0,!1,w)
for(w=v.length,s=0;s<w;++s)t[s]=Math.max(0,x[s]-v[s])
r=C.d.gac(t)?0:C.d.hj(t,A.NN())
if(r<=0.01)return v
for(s=0;s<p;++s){w=t[s]
if(w<=0.01)continue
v[s]=Math.min(x[s],v[s]+w/r*u)}return v},
bra:function bra(d,e,f,g,h,i,j){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.c=i
_.a=j},
aoB:function aoB(d,e,f,g,h,i,j,k,l){var _=this
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
hjT:function hjT(){},
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
b8g:function b8g(d,e){this.a=d
this.b=e},
cat:function cat(d,e,f){this.a=d
this.b=e
this.c=f},
fAH:function fAH(d){this.a=d},
fAI:function fAI(){},
fAJ:function fAJ(){},
fAF:function fAF(d){this.a=d},
fAG:function fAG(d,e){this.a=d
this.b=e},
fAv:function fAv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fAw:function fAw(d,e,f){this.a=d
this.b=e
this.c=f},
caq:function caq(d,e){this.a=d
this.b=e},
fAx:function fAx(d,e,f){this.a=d
this.b=e
this.c=f},
b8h:function b8h(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
chv:function chv(){},
chw:function chw(){},
hjP(d){var x=d.N(y.eb)
x=x==null?null:x.f
return x==null?B.D(y.S,y.F):x},
aWq:function aWq(d,e){this.c=d
this.a=e},
bK8:function bK8(d,e,f){this.e=d
this.c=e
this.a=f},
ccS:function ccS(d){this.d=d
this.c=this.a=null},
b9t:function b9t(d,e,f){this.f=d
this.b=e
this.a=f},
ccQ:function ccQ(d,e){this.c=d
this.a=e},
ccR:function ccR(d,e,f,g){var _=this
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
YU:function YU(d,e,f,g,h){var _=this
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
fJH:function fJH(){},
fJI:function fJI(){},
fJJ:function fJJ(d){this.a=d},
fJK:function fJK(d){this.a=d},
hP_(d){var x=B.irS(d)
B.i4m(null,null)
return B.ipe(B.dCy(x,null),x).wf(0)},
jmY(d,e){var x=null
return d.CG(B.aD(x,x,e,"fwfh: color",x,x,x,x,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),y.z)},
jqh(d,e){var x=null,w=J.L(e),v=w.gbO(e)?w.ga_(e):x
return d.CG(B.aD(x,x,x,"fwfh: font-family",x,x,x,x,v,w.qm(e,1).cd(0,!1),x,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),y.z)},
jqk(d,e){var x=null
return d.CG(B.aD(x,x,x,"fwfh: font-size",x,x,x,x,x,x,x,A.jeX(d,e),x,x,x,x,x,!0,x,x,x,x,x,x,x,x),y.z)},
jql(d,e){var x=null
return d.CG(B.aD(x,x,x,"fwfh: font-size "+B.b(e)+"em",x,x,x,x,x,x,x,A.irA(d,new A.tO(e,D.Xd)),x,x,x,x,x,!0,x,x,x,x,x,x,x,x),y.z)},
jqm(d,e){var x=null
return d.CG(B.aD(x,x,x,"fwfh: font-size "+e,x,x,x,x,x,x,x,A.irB(d,e),x,x,x,x,x,!0,x,x,x,x,x,x,x,x),y.z)},
jeX(d,e){var x,w=A.ok(e)
if(w!=null){x=A.irA(d,w)
if(x!=null)return x}if(e instanceof B.fp)return A.irB(d,A.oX(e))
return null},
irA(d,e){var x,w=d.a
if(w==null)w=null
else{w=w.jR(0,y.j)
w=w==null?null:w.r}x=d.jR(0,y.Z)
return e.b3F(d,w,x==null?null:x.a)},
irB(d,e){var x,w,v=null
switch(e){case"xx-large":return A.aBv(d,2)
case"x-large":return A.aBv(d,1.5)
case"large":return A.aBv(d,1.125)
case"medium":return A.aBv(d,1)
case"small":return A.aBv(d,0.8125)
case"x-small":return A.aBv(d,0.625)
case"xx-small":return A.aBv(d,0.5625)
case"larger":x=d.a
if(x==null)w=v
else{x=x.jR(0,y.j)
w=x==null?v:x.r}return w!=null?w*1.2:v
case"smaller":x=d.a
if(x==null)w=v
else{x=x.jR(0,y.j)
w=x==null?v:x.r}return w!=null?w*0.8333333333333334:v}return v},
aBv(d,e){var x,w,v,u
for(x=d,w=x;x!=null;v=x.a,w=x,x=v);u=w.jR(0,y.j)
u=u==null?null:u.r
return u!=null?u*e:null},
jqn(d,e){var x=null
return d.CG(B.aD(x,x,x,"fwfh: font-style",x,x,x,x,x,x,x,x,e,x,x,x,x,!0,x,x,x,x,x,x,x,x),y.z)},
jqp(d,e){var x=null
return d.CG(B.aD(x,x,x,"fwfh: font-weight",x,x,x,x,x,x,x,x,x,x,e,x,x,!0,x,x,x,x,x,x,x,x),y.z)},
jsL(d,e){var x=A.jgE(e)
if(x==null)return d
return d.J6(x,y.W)},
jgE(d){var x,w
if(d instanceof B.fp){if(d instanceof B.zu){x=B.e5(d.c)
if(x>0)return new A.auB(new A.tO(x*100,D.D7))}switch(A.oX(d)){case"normal":return D.etX}}w=A.ok(d)
if(w==null)return null
return new A.auB(w)},
jwR(d,e){switch(e){case"ltr":return d.J6(C.ad,y.w)
case"rtl":return d.J6(C.cG,y.w)}return d},
jqi(d){var x,w,v,u,t=B.a([],y.U)
for(x=d.length,w=0;w<d.length;d.length===x||(0,B.a7)(d),++w){v=d[w]
if(v instanceof B.fp){u=A.oX(v)
if(u.length!==0)t.push(u)}}return t},
jqo(d){switch(d){case"italic":return C.cM
case"normal":return C.eq}return null},
jqq(d){if(d instanceof B.fp){if(d instanceof B.zu)switch(B.e5(d.c)){case 100:return C.vE
case 200:return C.DM
case 300:return C.vF
case 400:return C.b1
case 500:return C.av
case 600:return C.U
case 700:return C.H
case 800:return C.jx
case 900:return C.vG}switch(A.oX(d)){case"bold":return C.H}}return null},
jy2(d,e){return d.J6(e,y.T)},
jy3(d){switch(d){case"normal":return D.KS
case"nowrap":return D.Xg
case"pre":return D.aho}return null},
i02(d,e){var x=J.an(d)
if(e>x-1)return null
return J.t(d,e)},
ivr(d){var x,w,v,u,t
if(d<=0||d>3999)return null
for(x=d,w=0,v="";w<13;++w){u=D.dkw[w]
t=C.m.R(x/u)
v+=C.c.b7(D.cYH[w],t)
x-=t*u}return v.charCodeAt(0)==0?v:v}},D
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[17],A)
D=c[40]
A.ca0.prototype={
gcP3(){var x,w=this,v=w.e
if(v===$){x=A.jbm(w.c)
w.e!==$&&B.bm()
w.e=x
v=x}return v},
gb0(d){return this.a}}
A.CK.prototype={
gdb2(){return!0},
ga4D(){return!0},
gjf(d){var x,w,v,u,t,s
for(x=this;;){if(!x.gdb2())return null
w=x.gcv(x).c
if(w==null)w=D.azw
v=C.d.eH(w,x)
if(v===-1)return null
for(u=v+1;u<w.length;++u){t=w[u]
if(t instanceof A.AG){s=t.ga_(0)
if(s!=null)return s}else return t}x=x.gcv(x)}return null},
gbbh(){var x=this.ga4D()
return x==null?null:!x},
k(d){return B.Z(this).k(0)+"#"+B.e4(this)}}
A.q_.prototype={
gTC(){return new B.kt(this.f0k(),y.aV)},
f0k(){var x=this
return function(){var w=0,v=1,u=[],t,s,r,q
return function $async$gTC(d,e,f){if(e===1){u.push(f)
w=v}for(;;)switch(w){case 0:t=x.gbr(0),s=t.length,r=0
case 2:if(!(r<t.length)){w=4
break}q=t[r]
w=q instanceof A.AG?5:7
break
case 5:w=8
return d.bnJ(q.gTC())
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
return x==null?D.azw:x},
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
eZS(d,e){var x=this,w=e.gcv(e)===x?e:e.O3(x),v=x.c;(v==null?x.c=B.a([],y.J):v).push(w)
return e},
l6(d,e){return this.eZS(0,e,y.r)},
fws(d){var x=this,w=d.gcv(d)===x?d:d.O3(x),v=x.c
C.d.h6(v==null?x.c=B.a([],y.J):v,0,w)
return d},
a5I(d){return this.fws(d,y.r)},
k(d){var x,w,v,u,t,s=this,r=$.i7C()
B.pB(s)
if(r.a.get(s)!=null)return"BuildTree#"+B.e4(s)+" (circular)"
x=new B.cK("")
r.j(0,s,x)
r="BuildTree#"+B.e4(s)+" "+s.b.k(0)+":\n"
r=x.a+=r
for(w=s.gbr(0),v=w.length,u=0;u<w.length;w.length===v||(0,B.a7)(w),++u){r=w[u].k(0)
r="  "+B.at(r,"\n","\n  ")+"\n"
r=x.a+=r}t=C.c.i3(r.charCodeAt(0)==0?r:r)
$.i7C().j(0,s,null)
return t}}
A.Ms.prototype={
O3(d){return new A.Ms(this.a,d)},
FX(d){return d.djR(0,this.a)},
k(d){return'"'+this.a+'"'},
gcv(d){return this.b}}
A.a4W.prototype={
gcv(d){return this.b}}
A.aBb.prototype={
ga4D(){return!1},
O3(d){return new A.aBb(this.a,d)},
FX(d){var x,w=this.a
d.cGI()
x=d.r
x===$&&B.e()
x.gcv(x)
d.c.push(w)
$.i9b().cK(C.EC,"Added "+B.b(w.gr4())+" widget",null,null)
return null},
k(d){return"WidgetBit.block#"+B.e4(this)+" "+this.a.k(0)}}
A.aBc.prototype={
O3(d){return new A.aBc(this.c,this.d,this.a,d)},
FX(d){return d.foG(this.c,this.d,this.a)},
k(d){return"WidgetBit.inline#"+B.e4(this)+" "+this.a.k(0)}}
A.MO.prototype={
gbbh(){return!0},
O3(d){return new A.MO(this.a,d)},
FX(d){return d.fGn(0,this.a)},
k(d){var x=new B.dp(this.a)
return"Whitespace["+x.au(x," ")+"]#"+B.e4(this)},
gcv(d){return this.b}}
A.ja.prototype={}
A.amm.prototype={
gDg(){var x=this,w=null,v=x.b,u=!1
if((v==null?w:v.gDg())!==!1){v=x.c
if((v==null?w:v.gDg())!==!1){v=x.d
if((v==null?w:v.gDg())!==!1){v=x.e
if((v==null?w:v.gDg())!==!1){v=x.f
if((v==null?w:v.gDg())!==!1){v=x.r
if((v==null?w:v.gDg())!==!1){v=x.w
v=(v==null?w:v.gDg())!==!1&&x.x===D.hX&&x.y===D.hX&&x.z===D.hX&&x.Q===D.hX}else v=u}else v=u}else v=u}else v=u}else v=u}else v=u
return v},
yZ(d,e,f,g,h,i,j,k,a0,a1,a2){var x,w,v,u,t=this,s=null,r=A.P6(t.b,d),q=d!=null,p=q?s:A.P6(t.c,e),o=q?s:A.P6(t.d,f),n=q?s:A.P6(t.e,g),m=q?s:A.P6(t.f,h),l=q?s:A.P6(t.r,a1)
q=q?s:A.P6(t.w,a2)
x=i==null?t.x:i
w=j==null?t.y:j
v=k==null?t.z:k
u=a0==null?t.Q:a0
return new A.amm(t.a,r,p,o,n,m,l,q,x,w,v,u)},
Ap(d){var x=null
return this.yZ(x,d,x,x,x,x,x,x,x,x,x)},
TY(d){var x=null
return this.yZ(x,x,x,x,x,x,x,x,x,x,d)},
aiZ(d){var x=null
return this.yZ(x,x,x,x,d,x,x,x,x,x,x)},
aj0(d){var x=null
return this.yZ(x,x,x,x,x,x,x,x,x,d,x)},
f3J(d){var x=null
return this.yZ(d,x,x,x,x,x,x,x,x,x,x)},
bGb(d){var x=null
return this.yZ(x,x,d,x,x,x,x,x,x,x,x)},
bGc(d){var x=null
return this.yZ(x,x,x,d,x,x,x,x,x,x,x)},
fbW(d,e,f,g){var x=null
return this.yZ(x,x,x,x,x,d,e,f,g,x,x)},
f6V(d){var x=null
return this.yZ(x,x,x,x,x,d,x,x,x,x,x)},
f6W(d){var x=null
return this.yZ(x,x,x,x,x,x,d,x,x,x,x)},
f6X(d){var x=null
return this.yZ(x,x,x,x,x,x,x,d,x,x,x)},
f6Y(d){var x=null
return this.yZ(x,x,x,x,x,x,x,x,d,x,x)},
b31(d){var x,w,v,u,t=this,s=null,r=d.jR(0,y.w)===C.cG,q=t.b,p=A.P6(q,t.c),o=p==null?s:p.HS(d)
p=t.f
if(p==null)p=r?t.d:t.e
p=A.P6(q,p)
x=p==null?s:p.HS(d)
p=t.r
if(p==null)p=r?t.e:t.d
p=A.P6(q,p)
w=p==null?s:p.HS(d)
q=A.P6(q,t.w)
v=q==null?s:q.HS(d)
q=o==null
if(q&&x==null&&w==null&&v==null)return s
q=q?C.E:o
p=x==null?C.E:x
u=w==null?C.E:w
return new B.cB(v==null?C.E:v,u,q,p)},
doi(d){var x,w,v=this,u=v.z.HS(d),t=v.Q.HS(d),s=v.x.HS(d),r=v.y.HS(d),q=u==null
if(q&&t==null&&s==null&&r==null)return null
q=q?C.aE:u
x=t==null?C.aE:t
w=s==null?C.aE:s
return new B.aT(q,x,w,r==null?C.aE:r)}}
A.UL.prototype={
HS(d){var x,w
if(this===D.hX)x=null
else{x=this.a.fU(d)
if(x==null)x=0
w=this.b.fU(d)
x=new B.aH(x,w==null?0:w)}return x}}
A.aHe.prototype={
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
A.bTq.prototype={
gdgr(d){return null},
fU(d){var x=d.jR(0,y.j)
return x==null?null:x.b},
$iaHf:1}
A.SX.prototype={
fU(d){return this.a},
$iaHf:1,
gdgr(d){return this.a}}
A.tO.prototype={
b3F(d,e,f){var x,w,v=this,u=null,t=f==null?1:f,s=1
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
fU(d){return this.b3F(d,null,null)},
k(d){var x=C.m.k(this.a),w=this.b
return x+(w===D.D7?"%":w.b)}}
A.a8K.prototype={
a39(d,e,f,g,h,i){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=f==null?x.c:f,t=g==null?x.d:g,s=h==null?x.e:h
return new A.a8K(w,v,u,t,s,i==null?x.f:i)},
Ap(d){var x=null
return this.a39(d,x,x,x,x,x)},
TY(d){var x=null
return this.a39(x,x,x,x,x,d)},
aiZ(d){var x=null
return this.a39(x,x,x,d,x,x)},
aj0(d){var x=null
return this.a39(x,x,x,x,d,x)},
bGb(d){var x=null
return this.a39(x,d,x,x,x,x)},
bGc(d){var x=null
return this.a39(x,x,d,x,x,x)},
gc7y(){var x=this.b,w=!0
if((x==null?null:x.a>0)!==!0){x=this.c
if((x==null?null:x.a>0)!==!0){x=this.d
x=(x==null?null:x.a>0)===!0}else x=w}else x=w
return x},
gc7z(){var x=this.b,w=!0
if((x==null?null:x.a>0)!==!0){x=this.c
if((x==null?null:x.a>0)!==!0){x=this.e
x=(x==null?null:x.a>0)===!0}else x=w}else x=w
return x},
b3k(d){var x=this.d
if(x==null)x=d.jR(0,y.w)===C.cG?this.b:this.c
return x},
b3u(d){var x=this.e
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
if(new B.aE(B.a([m,x,u,t],y.U),new A.cH_(),y.cc).gE(0)===3){if(m!=="null")if(!o)return"CssLengthBox(left="+p.k(0)+")"
else return"CssLengthBox(inline-start="+B.b(s.c)+")"
if(x!=="null")return"CssLengthBox(top="+x+")"
if(u!=="null")if(!w)return"CssLengthBox(right="+n.k(0)+")"
else return"CssLengthBox(inline-end="+B.b(s.b)+")"
if(t!=="null")return"CssLengthBox(bottom="+t+")"}return"CssLengthBox("+m+", "+x+", "+u+", "+t+")"}}
A.a8L.prototype={
O(){return"CssLengthUnit."+this.b}}
A.amo.prototype={
fU(d){var x,w,v,u=this,t=null,s=u.b.fU(d)
if(s==null)return t
x=u.c.fU(d)
if(x==null)return t
w=u.d.fU(d)
if(w==null)return t
v=u.a.fU(d)
if(v==null)return t
return new B.xU(s,new B.V(x,w),v)}}
A.a00.prototype={
O(){return"CssWhitespace."+this.b}}
A.brW.prototype={
dIE(d,e,f){var x,w,v,u,t
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,B.a7)(x),++v){u=x[v]
t=$.hWZ()
t.a.set(u,this)}}}
A.aKW.prototype={}
A.fK.prototype={
bFU(d,e,f,g){var x,w,v=this.c
if(e!=null)v=e.a?v.c0(e):e
x=d==null?this.a:d
w=this.b
if(f!=null){w=B.M(new B.aE(w,new A.cZE(g),B.Y(w).i("aE<1>")),y.z)
w.push(f)}return new A.fK(x,w,v)},
f3D(d,e){return this.bFU(d,null,null,e)},
J6(d,e){return this.bFU(null,null,d,e)},
CG(d,e){return this.bFU(null,d,null,e)},
jR(d,e){if(B.ea(e)===D.eC7)return e.a(this.c)
return A.i_G(this.b,e)},
aom(){var x=this
return A.jit(A.jir(A.jiq(A.jip(x.c,x),x),x),x)}}
A.ap5.prototype={
of(d,e,f){var x=e==null?f.a(e):e,w=this.d
if(w==null)w=this.d=B.a([],y.er)
C.d.M(w,new A.b1D(d,x,f.i("b1D<0>")))},
fps(d){var x,w,v,u
for(x=this;x.d==null;x=w){w=x.a
if(w==null)break}for(v=d;v.d==null;v=u){u=v.a
if(u==null)break}return x===v},
aC(d){var x,w,v,u,t=this,s=t.a,r=s==null?null:s.aC(d)
if(r==null)r=D.cdJ
x=t.d
if(x==null)return r
w=t.c
if(w!=null&&r===t.b)return w
v=r.f3D(r,y.z)
for(s=x.length,u=0;u<x.length;x.length===s||(0,B.a7)(x),++u)v=x[u].$2(d,v)
t.b=r
return t.c=v},
k(d){var x=B.e4(this),w=this.a
w=w!=null?"(parent=#"+w.gF(0)+")":""
return"inheritanceResolvers#"+x+w}}
A.b1D.prototype={
$2(d,e){var x=this,w=x.b
if(w==null&&B.ea(x.$ti.c)===B.ea(y.Y))return x.a.$2(e,x.$ti.c.a(d))
return x.a.$2(e,w)}}
A.aMm.prototype={}
A.de8.prototype={
H3(d){var x=null,w=this.akZ$,v=w==null?x:new B.ce(w,d.i("ce<0>"))
w=v==null
if((w?x:!v.gac(0))===!0)return w?x:v.ga_(0)
return x},
wv(d,e){var x,w=this.akZ$
if(w==null)w=this.akZ$=[]
x=C.d.k0(w,new A.de9(e))
if(x===-1)w.push(d)
else w[x]=d
return d}}
A.bIm.prototype={}
A.byl.prototype={}
A.bIs.prototype={}
A.bIt.prototype={}
A.auB.prototype={}
A.bIu.prototype={}
A.bRj.prototype={}
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
A.aoC.prototype={
gdgz(){var x=[null,null,null,this.w,D.Io,this.ay]
C.d.D(x,C.aS)
return x},
U(){return new A.aKE()}}
A.aKE.prototype={
gbC0(){var x=this.a.w
return x.length>1e4},
ae(){var x,w=this
w.ai()
w.d!==$&&B.bo()
w.d=new A.fn0(w,null,null)
w.a.toString
x=new A.bKV(B.a([],y.cY),$)
w.e!==$&&B.bo()
w.e=x
x.a6a(0,w)
if(w.gbC0())w.r=w.aaf()},
q(){var x=this.e
x===$&&B.e()
x.dDy()
x.cHa()
this.aj()},
ck(){this.ec()
this.w=null},
b8(d){var x,w=this
w.bg(d)
x=B.dY(w.a.gdgz(),d.gdgz())
if(!J.C(w.a.ay,d.ay))w.w=null
if(!x){x=w.f=null
w.r=w.gbC0()?w.aaf():x}},
v(d){var x,w=this,v=w.r
if(v!=null){x=y.m
return B.tU(new A.cXH(w),v.bP(w.geXw(),x),x)}w.a.toString
x=w.gbC0()
if(x||w.f==null)w.f=w.dU0()
x=w.f
x.toString
return new A.azR(w.w,x,null)},
aaf(){var x=0,w=B.m(y.m),v,u=this,t,s,r
var $async$aaf=B.i(function(d,e){if(d===1)return B.j(e,w)
for(;;)switch(x){case 0:r=u.a.w
if(r.length===0){v=B.a0K(new A.cXG(u),y.m)
x=1
break}x=3
return B.d(B.aj4(A.jnu(),r,null,y.N,y.eI),$async$aaf)
case 3:t=e
if(u.c==null){v=u.a1u(C.au)
x=1
break}A.ime("Build "+u.a.k(0)+" (async)")
s=A.iqr(u,t)
A.imd()
v=s
x=1
break
case 1:return B.k(v,w)}})
return B.l($async$aaf,w)},
dU0(){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.a
if(n.w.length===0)return p.a1u(C.au)
A.ime("Build "+n.k(0)+" (sync)")
x=null
try{w=B.cXC(p.a.w,o,!1,!1,o).dfg().gfN(0)
x=A.iqr(p,w)}catch(t){v=B.T(t)
u=B.b_(t)
n=p.e
n===$&&B.e()
s=p.c
s.toString
r=p.d
r===$&&B.e()
q=n.cey(s,new A.AG(n,o,D.F8,new A.a5M(),$.ck6(),r,o),v,u)
x=q}A.imd()
return x},
a1u(d){this.a.toString
return d},
eXx(d){return new A.azR(this.w,d,null)}}
A.fn0.prototype={
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
if(t==null)t=C.n8
v=B.dO(v,C.bh8)
v=v==null?null:v.gfq().gwm()
if(v==null)v=1
v=[D.KS,u,t.w,new A.bIm(v)]
t=x.a.ay
s=A.i_G(v,y.j)
s=(s==null?C.b8:s).c0(t)
r=A.i_G(v,y.Z)
q=s.r
if(r!=null&&r.a!==1&&q!=null)s=s.f9l("fwfh: fontSize *= textScaleFactor",q*r.a)
v=B.M(v,y.z)
u=s.as
if(u!=null)v.push(new A.byl(u))
return x.w=new A.fK(null,v,s)}}
A.azR.prototype={
fT(d){var x=this.f
return x==null||x!==d.f}}
A.bKV.prototype={
d32(d,e){var x,w,v,u=e instanceof B.hU?e.c:B.a([e],y.p),t=this.at==null?null:D.Io
if(t==null)t=D.Io
x=J.L(u)
if(x.gbO(u)&&x.ga_(u) instanceof A.PV)x.fb(u,0)
if(x.gbO(u)&&x.ga7(u) instanceof A.PV)x.ks(u)
for(x=t!==D.Io;w=J.L(u),w.gE(u)===1;){e=w.ga_(u)
if(e instanceof B.hU){u=e.c
continue}if(x&&e instanceof A.aml){v=e.c
if(v instanceof B.hU){u=v.c
continue}}break}return this.f0A(d,u)},
bC1(d,e){var x=e.length
if(x===0)return null
if(x===1)return C.d.ga_(e)
x=B.a([],y.s)
return new A.aGJ(e,d,this,B.b(d.a.x)+"--column",x,null,null)},
aMi(d,e,f,g){var x=J.L(e)
if(x.gE(e)===1)return x.ga_(e)
return B.B(e,f==null?C.y:f,null,C.i,C.D,0,g,C.n)},
f0A(d,e){return this.aMi(d,e,null,null)},
f0B(d,e,f){return this.aMi(d,e,null,f)},
d35(d,e,f,g,h,i){var x,w,v,u,t,s,r=null
if(f==null&&g==null&&h==null&&i==null)return e
x=e instanceof B.hd?e:r
w=x==null
v=w?r:x.c
u=w?r:x.w
t=(u instanceof B.P?u:C.abG).faB(f,h,i)
if(g!=null){w=t.c
w=w==null?r:w.gam4()
if(w!==!1){t=t.NZ(g)
s=C.p}else s=C.o}else s=C.o
return B.H(r,v==null?e:v,s,r,r,t,r,r,r,r,r,r,r,r)},
f0E(d,e,f,g){return this.d35(d,e,f,g,null,null)},
f0F(d,e,f,g){return this.d35(d,e,null,null,f,g)},
f0G(d,e,f,g,h){var x,w=null
if(e==null)return w
if(C.c.ao(e,"asset:"))x=this.dbl(e)
else if(C.c.ao(e,"data:image/"))x=this.dbm(e)
else if(C.c.ao(e,"file:"))x=this.dbn(e)
else x=e.length!==0?new B.W3(e,1,w,C.To):w
if(x==null)return w
return B.amH(f,g,x,w,h)},
f0J(d,e,f,g,h,i){return new B.dX(new A.dTn(f,g,h,C.b9,i,e),null)},
bC3(d,e,f){var x=null
return f instanceof B.y0?B.ig(B.cW(x,e,C.z,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f.ah,x,x,x,x,x,x,x,x,x,!1,C.aV),C.hJ,x,x,x,x,x,!0):e},
f0L(d,e){var x=B.Gq(null,-1,null)
x.ah=e
this.a.push(x)
return x},
f0P(d,e){var x,w,v,u,t=null,s=e.b,r=s.length!==0?C.d.ga_(s):t
if(r==null)return t
x=this.f0Q(d,r)
w=e.c
if(x!=null&&w!=null)x=B.lV(x,t,w,t,t,t,t)
if(x!=null){v=r.a
u=r.c
if(v!=null&&v>0&&u!=null&&u>0)x=new B.rc(u/v,x,t)}return x},
f0Q(d,e){var x,w,v,u,t=this,s=null,r=e.b
if(C.c.ao(r,"asset:"))x=t.dbl(r)
else if(C.c.ao(r,"data:image/"))x=t.dbm(r)
else if(C.c.ao(r,"file:"))x=t.dbn(r)
else x=r.length!==0?new B.W3(r,1,s,C.To):s
if(x==null)return s
w=$.hWZ()
B.pB(e)
w=w.a.get(e)
v=w==null
u=v?s:w.a
if(u==null)u=v?s:w.c
return B.igm(C.al,s,s,new A.dTo(t,d,e),u==null,C.jZ,C.uR,s,s,x,s,new A.dTp(t,d,e),!1,C.i3,u,s)},
f0U(d,e,f,g){var x=null,w=this.dpE(f,g),v=e.aom()
if(w.length!==0)return this.bC5(d,e,B.dn(x,x,x,x,x,x,x,x,x,v,w))
switch(f){case"circle":return new A.aaf(D.c37,v,x)
case"none":return x
case"square":return new A.aaf(D.c3b,v,x)
case"disc":default:return new A.aaf(D.c38,v,x)}},
bC5(d,e,f){var x=A.aFj(d).a>0?A.aFj(d).a:null,w=e.jR(0,y.T),v=e.jR(0,y.a)
if(v==null)v=C.Q
return new B.hz(new A.dTq(x,d,w!==D.Xg,f,v,e.jR(0,y.w)),null)},
d3g(d,e,f,g){var x=null
if(g.length===0){if(d==null)return x
if(d.length===1)return C.d.ga_(d)}return B.dn(d,x,e!=null?C.hJ:x,x,x,e,x,x,x,f,g)},
f13(d,e,f){return this.d3g(null,d,e,f)},
cHa(){var x,w,v
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.a7)(x),++v)x[v].q()
C.d.ag(x)},
dpE(d,e){var x,w
switch(d){case"lower-alpha":case"lower-latin":if(e>=1&&e<=26)return B.dV(96+e)+"."
return""
case"upper-alpha":case"upper-latin":if(e>=1&&e<=26)return B.dV(64+e)+"."
return""
case"decimal":return""+e+"."
case"lower-roman":x=A.ivr(e)
w=x==null?null:x.toLowerCase()
return w!=null?w+".":""
case"upper-roman":w=A.ivr(e)
return w!=null?w+".":""
case"none":default:return""}},
dbl(d){var x=null,w=B.bA(d,0,x),v=w.gfa(w)
if(v.length===0)return x
return new B.akA(v,x,w.gkh().K(0,"package")?w.gkh().h(0,"package"):x)},
dbm(d){var x=A.jmF(d)
if(x==null)return null
return new B.Il(x,1)},
dbn(d){if(B.bA(d,0,null).a6q().length===0)return null
return null},
cey(d,e,f,g){var x,w,v,u=null
$.iDS().cK(C.kO,"Could not render data="+B.b(g),f,u)
if(g instanceof A.aKW){x=$.hWZ()
B.pB(g)
w=x.a.get(g)}else w=u
x=w==null
v=x?u:w.a
if(v==null)v=x?u:w.c
return B.c(v==null?"\u274c":v,u,u,u,u,u,u,u,u,u,u)},
deE(d,e,f,g){var x=null
return B.au(new B.F(C.bm,new B.Fd(C.eL2,x,x,x,x,x,x,x,f,x,x,x,x,x,x),x),x,x)},
ftY(d,e){return this.deE(d,e,null,null)},
ceH(d){return this.fuB(d)},
fuB(d){var x=0,w=B.m(y.y),v,u=this,t,s
var $async$ceH=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:t=u.at
s=t==null?null:t.as
v=s!=null&&s.$1(d)
x=1
break
case 1:return B.k(v,w)}})
return B.l($async$ceH,w)},
anO(d){return this.fuK(d)},
fuK(d){var x=0,w=B.m(y.y),v,u=this,t,s
var $async$anO=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:x=3
return B.d(u.ceH(d),$async$anO)
case 3:if(f){v=!0
x=1
break}x=C.c.ao(d,"#")?4:5
break
case 4:t=C.c.aZ(d,1)
s=u.aRY$
s===$&&B.e()
x=6
return B.d(s.gfk4().$1(t),$async$anO)
case 6:if(f){v=!0
x=1
break}case 5:v=!1
x=1
break
case 1:return B.k(v,w)}})
return B.l($async$anO,w)},
o3(d,e){var x,w,v,u,t,s,r=this,q=e.a,p=q.b
switch(q.x){case"a":if(p.K(0,"href")){e.b.of(A.jnC(),null,y.Y)
q=r.w
e.fI(0,q==null?r.w=new A.dKa(r).god():q)}x=p.h(0,"name")
if(x!=null){q=r.aRY$
q===$&&B.e()
e.fI(0,new A.bfb(new B.bI(x,y.C),x,q).god())}break
case"abbr":case"acronym":e.fI(0,D.br2)
break
case"address":e.fI(0,D.bqN)
break
case"article":case"aside":case"dl":case"figcaption":case"footer":case"header":case"main":case"nav":case"section":case"div":e.fI(0,D.bqx)
break
case"blockquote":case"figure":e.fI(0,D.bqB)
break
case"b":case"strong":e.b.of(A.ix5(),C.H,y.B)
break
case"big":e.b.of(A.ix3(),"larger",y.N)
break
case"small":e.b.of(A.ix3(),"smaller",y.N)
break
case"br":e.fI(0,D.bqC)
break
case"center":e.fI(0,D.bqG)
break
case"cite":case"dfn":case"em":case"i":case"var":e.b.of(A.ix4(),C.cM,y.I)
break
case"code":case"kbd":case"samp":case"tt":e.b.of(A.ix2(),D.d2F,y.x)
break
case"pre":q=r.Q
e.fI(0,q==null?r.Q=new A.dKr(r).god():q)
break
case"details":q=r.x
e.fI(0,q==null?r.x=new A.dKg(r).god():q)
break
case"dd":e.fI(0,D.bqI)
break
case"dt":e.fI(0,D.bqW)
break
case"del":case"s":case"strike":e.fI(0,D.bqK)
break
case"font":e.fI(0,D.bqT)
break
case"h1":e.fI(0,D.bqz)
break
case"h2":e.fI(0,D.bqZ)
break
case"h3":e.fI(0,D.bqU)
break
case"h4":e.fI(0,D.bqF)
break
case"h5":e.fI(0,D.br7)
break
case"h6":e.fI(0,D.bqH)
break
case"hr":e.fI(0,D.bqR)
break
case"img":q=r.y
e.fI(0,q==null?r.y=new A.dKl(r).god():q)
break
case"ol":case"ul":q=r.z
e.fI(0,q==null?r.z=new A.dKn(r).god():q)
break
case"mark":e.fI(0,D.bqA)
break
case"p":e.fI(0,D.br5)
break
case"q":e.fI(0,D.br1)
break
case"ruby":e.fI(0,D.bqJ)
break
case"style":case"script":e.fI(0,D.bqQ)
break
case"sub":e.fI(0,D.bqE)
break
case"sup":e.fI(0,D.br9)
break
case"table":w=r.as
if(w==null)w=r.as=A.ilG(r)
e.fI(0,D.bqM)
q=w.b
q===$&&B.e()
e.fI(0,q)
q=w.c
q===$&&B.e()
e.fI(0,q)
break
case"td":e.fI(0,D.bqV)
break
case"th":e.fI(0,D.bqX)
break
case"caption":e.fI(0,D.br3)
break
case"u":case"ins":e.fI(0,D.bqS)
break}for(q=new B.cM(p,B.S(p).i("cM<1,2>")).gaq(0),v=y.C;q.G();){u=q.d
switch(u.a){case"align":e.fI(0,D.bqw)
break
case"dir":e.fI(0,D.bqP)
break
case"id":t=u.b
s=r.aRY$
s===$&&B.e()
e.fI(0,new A.bfb(new B.bI(t,v),t,s).god())
break}}},
fvC(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=e.gcjU()
switch(k){case"color":x=A.bdq(A.uQ(e))
w=x==null?l:x.gdgr(x)
if(w!=null)d.b.of(A.jwU(),w,y.bz)
break
case"direction":v=A.uQ(e)
u=v instanceof B.fp?A.oX(v):l
if(u!=null)d.b.of(A.jwY(),u,y.N)
break
case"font-family":d.b.of(A.ix2(),A.jqi(A.HG(e)),y.x)
break
case"font-size":t=A.uQ(e)
if(t!=null)d.b.of(A.jwV(),t,y.f)
break
case"font-style":v=A.uQ(e)
u=v instanceof B.fp?A.oX(v):l
s=u!=null?A.jqo(u):l
if(s!=null)d.b.of(A.ix4(),s,y.I)
break
case"font-weight":t=A.uQ(e)
r=t!=null?A.jqq(t):l
if(r!=null)d.b.of(A.ix5(),r,y.B)
break
case"height":case"max-height":case"max-width":case"min-height":case"min-width":case"width":$.cjT().j(0,d.a,d)
d.fI(0,D.abI)
break
case"line-height":t=A.uQ(e)
if(t!=null)d.b.of(A.jwX(),t,y.f)
break
case"max-lines":case"-webkit-line-clamp":q=A.jxc(A.uQ(e))
if(q!=null)d.wv(A.aFj(d).d5p(q),y.R)
break
case"text-align":d.fI(0,D.br4)
break
case"text-decoration":case"text-decoration-color":case"text-decoration-line":case"text-decoration-style":case"text-decoration-thickness":case"text-decoration-width":A.jwM(d,e)
break
case"text-overflow":p=A.jxd(A.uQ(e))
if(p!=null)d.wv(A.aFj(d).f6F(p),y.R)
break
case"vertical-align":x=m.r
d.fI(0,x==null?m.r=new A.dGi(m).god():x)
break
case"white-space":v=A.uQ(e)
u=v instanceof B.fp?A.oX(v):l
o=u!=null?A.jy3(u):l
if(o!=null)d.b.of(A.ix6(),o,y.T)
break
case"text-shadow":n=A.HG(e)
if(n.length!==0)d.b.of(A.jo4(),A.jeG(n),y.gv)
break}if(C.c.ao(k,"background")){x=m.b
d.fI(0,x==null?m.b=new A.dFS(m).god():x)}if(C.c.ao(k,"border")){x=m.c
d.fI(0,x==null?m.c=new A.dFW(m).god():x)}if(C.c.ao(k,"margin")){x=m.e
d.fI(0,x==null?m.e=new A.dG6(m).god():x)}if(C.c.ao(k,"padding")){x=m.f
d.fI(0,x==null?m.f=new A.dGb(m).god():x)}},
fvD(d,e){var x,w,v=this
A.j2M(v,d)
switch(e){case"flex":x=v.d
d.fI(0,x==null?v.d=new A.dG1(v).god():x)
break
case"block":$.cjT().j(0,d.a,d)
$.i8r().j(0,d,!0)
d.fI(0,D.br6)
d.fI(0,D.abI)
break
case"inline-block":d.fI(0,D.bqD)
break
case"none":d.fI(0,D.bqY)
break
case"table":w=v.as
x=(w==null?v.as=A.ilG(v):w).d
x===$&&B.e()
d.fI(0,x)
break}},
a6a(d,e){var x
this.dF5(0,e)
this.cHa()
x=e.a
x.toString
if(!(x instanceof A.aoC))x=null
this.at=x},
diZ(d){var x,w=null
if(d.length===0)return w
if(C.c.ao(d,"data:"))return d
x=B.tr(d)
if(x==null)return w
if(x.gzh())return d
if(x.gaT_())return B.kO(w,w,w,w,w,w,w,"https").WD(x).k(0)
return w}}
A.bKW.prototype={
q(){},
a6a(d,e){}}
A.b9M.prototype={
a6a(d,e){var x,w
this.dDz(0,e)
x=e.c
x.toString
w=y.fY
this.aRY$=new A.bfd(B.a([],w),B.D(y.N,y.eS),B.a([],y.t),B.a([],w),B.D(y.et,y.ev),x)}}
A.eoj.prototype={
djc(d){return this.a.push(d)}}
A.euM.prototype={
L7(d){return C.d.D(this.a,d.c)}}
A.AG.prototype={
gdb2(){return this.f!=null},
ga4D(){return this.y},
gcv(d){var x=this.f
x.toString
return x},
j(d,e,f){this.w.D(0,A.cH2(A.hP_("*{"+e+": "+B.b(f)+";}")))},
d1y(d){var x,w,v
for(x=d.a,w=B.Y(x),x=new J.hy(x,x.length,w.i("hy<1>")),w=w.c;x.G();){v=x.d
this.dJM(v==null?w.a(v):v)}},
ap(){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.e,k=B.a([],y.E)
new A.cQj(n,l,k).dIo(l,n)
x=n.x
if(x==null)x=D.F8
for(w=J.dW(x),v=w.gaq(x),u=m;v.G();){t=v.gT(v)
s=t.a.w
u=s==null?m:s.$2(t.b,k)
if(u!=null)break}r=u==null?l.bC1(n,k):u
if(r==null)r=D.eQd
for(l=w.gaq(x),v=y.s,t=y.c,s=B.b(n.a.x)+"--";l.G();){q=l.gT(l)
p=q.a
o=p.e
q=o==null?m:o.$2(q.b,r)
r=q==null?r:q
q=p.b
if(q==null)q="lazy"
if(!t.b(r)){p=B.a([],v)
r=new A.ph(s+q,p,r,m)}}if(r.gac(r))return m
A.iO7(n,r)
for(l=w.gaq(x);l.G();){w=l.gT(l)
v=w.a.r
if(v!=null)v.$2(w.b,r)}return r},
bH5(d,e,f,g){var x,w,v,u,t,s,r,q,p=this
if(f==null){x=p.b.d
if(x==null)x=null
else x=B.a(x.slice(0),B.Y(x))
w=new A.ap5(g.b,x)}else w=f
x=e==null?p.a:e
v=A.jis(g.r,g)
u=new A.a5M()
t=new A.AG(p.e,g,v,u,x,w,null)
if(d){s=p.akZ$
if(s!=null){x=B.M(s,y.z)
t.akZ$=x}for(x=p.gbr(0),v=x.length,r=0;r<x.length;x.length===v||(0,B.a7)(x),++r)t.l6(0,x[r].O3(t))
q=p.x
if(q!=null)for(x=q.$ti,x=new B.yf(q,B.a([],x.i("J<r0<1>>")),q.c,x.i("yf<1,r0<1>>"));x.G();)t.fI(0,x.gT(0).a)
u.D(0,p.w)}return t},
O3(d){return this.bH5(!0,null,null,d)},
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
if(s==null)s=u.x=B.atA(A.jnr(),t,y.Q)
s.kk(0,new A.N6(e,u))
x=$.ck5()
w=e.b
if(w==null)w="a build op"
v=u.a.x
v=v==null?t:v.toUpperCase()
x.cK(C.EC,"Registered "+w+" for "+B.b(v)+" tag",t,t)},
cAw(d,e){return this.bH5(!1,e,new A.ap5(this.b,null),this)},
YW(d){return this.cAw(0,null)},
dJM(d){var x,w,v,u,t,s,r,q=this,p=null
if(d.glW(d)===3){y.es.a(d)
x=J.w(d.w)
d.w=x
return q.dZ7(x)}if(d.glW(d)!==1)return
y.dk.a(d)
x=q.e.at
if(x==null)x=p
else{x=x.f
x=x==null?p:x.$1(d)}if(x!=null){if(y.da.b(x)){q.l6(0,A.SF(q,x,x.c,C.b9))
$.ck5().cK(C.cf,"Custom inline widget: "+B.b(d.x)+" tag",p,p)}else{q.l6(0,new A.aBb(y.c.b(x)?x:A.Et(p,x,B.b(q.a.x)+"--WidgetBit.block",p),q))
$.ck5().cK(C.cf,"Custom block widget: "+B.b(d.x)+" tag",p,p)}return}w=q.cAw(0,d)
w.eys()
w.d1y(d.gfN(0))
v=w.x
x=v==null
u=(x?p:!new B.aE(v,A.jns(),v.$ti.i("aE<ds.E>")).gac(0))===!0
w.y=!u
if(!x)for(x=v.$ti,x=new B.yf(v,B.a([],x.i("J<r0<1>>")),v.c,x.i("yf<1,r0<1>>")),t=w;x.G();){s=x.gT(0).a.d
s=s==null?p:s.$1(t)
t=s==null?t:s}else t=w
if(u){r=t.ap()
if(r!=null)q.l6(0,new A.aBb(r,q))}else q.l6(0,t)},
dZ7(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=$.iEu().cf(d),k=$.iEv().cf(d),j=l==null,i=j?null:l.gbE(0)
if(i==null)i=0
x=k==null
w=x?null:k.b.index
if(w==null)w=d.length
if(w<=i){m.l6(0,new A.MO(d,m))
return}if(!j){j=l.b[0]
j.toString
m.l6(0,new A.MO(j,m))}v=C.c.a3(d,i,w)
j=B.M($.iEw().ev(0,v),y.bn)
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
m.l6(0,new A.MO(o,m))
t=n+p[0].length}}if(!x){j=k.b[0]
j.toString
m.l6(0,new A.MO(j,m))}},
e_3(){var x,w=null,v=this.a,u=this.e.at
if(u==null)u=w
else{u=u.e
u=u==null?w:u.$1(v)}if(u==null)return
x=$.ck5()
v=v.x
v=v==null?w:v.toUpperCase()
x.cK(C.cf,"Custom styles for "+B.b(v)+": "+B.b(u),w,w)
u=J.tA(u)
this.w.D(0,A.cH2(A.hP_("*{"+u.bD(u,new A.cFW(),y.N).au(0,";")+"}")))},
eys(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.e
l.o3(0,m)
for(x=m.r,w=x.length,v=0;v<w;++v){u=x[v]
t=u.a.x
if(t!=null)t.$2(u.b,m)}s=m.x
if(s!=null)for(x=s.$ti,x=new B.yf(s,B.a([],x.i("J<r0<1>>")),s.c,x.i("yf<1,r0<1>>")),w=m.w,t=y._;x.G();){r=x.gT(0).gfh6()
if(r!=null){q=w.b
C.d.D(q==null?w.b=B.a([],t):q,r)}}m.e_3()
p=A.hZI(m.a)
if(J.d4(p))m.w.D(0,p)
o=m.w.b
if(o!=null){x=J.xp(o.slice(0),B.Y(o).c)
w=x.length
v=0
for(;v<x.length;x.length===w||(0,B.a7)(x),++v)l.fvC(m,x[v])}x=m.BH("display")
if(x==null)x=null
else{n=A.uQ(x)
x=n instanceof B.fp?A.oX(n):null}l.fvD(m,x)}}
A.N6.prototype={
gfh6(){var x=this.a.c,w=x==null?null:x.$1(this.b.a)
if(w==null)return null
x=J.tA(w)
return A.cH2(A.hP_("*{"+x.bD(x,new A.eiN(),y.N).au(0,";")+"}"))}}
A.a5M.prototype={
gaq(d){var x=this.b
x=x==null?null:new J.hy(x,x.length,B.Y(x).i("hy<1>"))
return x==null?new J.hy(D.a1l,0,y.ff):x},
D(d,e){var x=this.b
C.d.D(x==null?this.b=B.a([],y._):x,e)}}
A.cdh.prototype={
v(d){return C.au},
gr4(){return null},
gac(d){return!0},
qg(d){return A.Et(d,null,null,null)},
$iph:1}
A.bfb.prototype={
god(){var x=this,w=null
return A.vS(!1,"anchor#"+x.b,w,new A.cpt(x),new A.cpu(x),new A.cpv(x),w,w,w,9000001e9)},
gaf(d){return this.b}}
A.bfd.prototype={
aR7(d,e,f,g,h){var x,w=null
$.ajo().cK(C.eO,"Trying to make #"+d+" visible...",w,w)
x=new B.bb($.bl,y.ek)
this.a_7(d,new B.c0(x,y.co),e,f,g,h,w,w)
return x},
fk5(d){return this.aR7(d,C.iP,C.cU,C.aY,C.bx)},
d93(d,e,f){return this.aR7(d,e,f,C.aY,C.bx)},
fk6(d,e){return this.aR7(d,C.iP,e,C.aY,C.bx)},
a_7(d,e,f,g,h,i,j,k){return this.e3K(d,e,f,g,h,i,j,k)},
e3K(d,e,f,a0,a1,a2,a3,a4){var x=0,w=B.m(y.aT),v,u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a_7=B.i(function(a5,a6){if(a5===1)return B.j(a6,w)
for(;;)switch(x){case 0:g=u.b.h(0,d)
if(g==null){$.ajo().cK(C.kO,"Could not ensure #"+d+" visible: no anchor",null,null)
v=e.dQ(0,!1)
x=1
break}t=$.aN.aA$.x.h(0,g)
if(t!=null){$.ajo().cK(C.eO,new A.cpm(g),null,null)
v=e.dQ(0,u.cJ3(t,f,a0))
x=1
break}s=u.c
if(s.length===0){$.ajo().cK(C.kO,"Could not ensure #"+d+" visible: no body items",null,null)
v=e.dQ(0,!1)
x=1
break}r=J.xp(s.slice(0),B.Y(s).c)
q=C.d.hj(r,C.V2)
p=C.d.hj(r,C.rc)
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
$.ajo().cK(C.eO,new A.cpn(j),null,null)
x=6
return B.d(u.abB($.aN.aA$.x.h(0,j),1,a1,a2),$async$a_7)
case 6:i=a6
x=4
break
case 5:x=k>n?7:9
break
case 7:h=u.d[p*2+1]
$.ajo().cK(C.eO,new A.cpo(h),null,null)
x=10
return B.d(u.cJ3($.aN.aA$.x.h(0,h),a1,a2),$async$a_7)
case 10:i=a6
x=8
break
case 9:i=!1
case 8:case 4:if(!i){$.ajo().cK(C.kO,"Could not ensure #"+d+" visible: scroll failure",null,null)
v=e.dQ(0,!1)
x=1
break}$.aN.k3$.push(new A.cpp(u,d,e,f,a0,a1,a2,n,o))
case 1:return B.k(v,w)}})
return B.l($async$a_7,w)},
abB(d,e,f,g){return this.e3L(d,e,f,g)},
cJ3(d,e,f){return this.abB(d,0,e,f)},
e3L(d,e,f,g){var x=0,w=B.m(y.y),v,u=this,t,s,r,q,p,o
var $async$abB=B.i(function(h,i){if(h===1)return B.j(i,w)
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
return B.d(p.d94(o,e,f,g),$async$abB)
case 3:v=!0
x=1
break
case 1:return B.k(v,w)}})
return B.l($async$abB,w)}}
A.cpq.prototype={}
A.bRi.prototype={}
A.aGJ.prototype={
gac(d){return this.r.length===0},
v(d){var x,w,v,u,t,s,r=this
A.il9(d,!0)
try{x=r.w.b.aC(d)
w=r.cFl(d)
u=r.x
t=A.iri(x)
s=x.jR(0,y.w)
if(s==null)s=C.ad
v=u.aMi(d,w,t,s)
t=$.i92()
B.pB(r)
u=J.C(t.a.get(r),!0)?u.d32(d,v):v
return u}finally{A.il9(d,!1)}},
qg(d){var x=this
if(J.C(d,x.x.gd31()))$.i92().j(0,x,!0)
else x.cBK(d)
return x},
cFl(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=y.p,l=B.a([],m),k=o.cLc(d)
k=B.iY(k,new A.cF2(d),k.$ti.i("U.E"),y.m)
for(x=k.gaq(0),k=new B.lC(x,new A.cF3(),B.S(k).i("lC<U.E>")),w=n,v=w,u=0;k.G();){t=x.gT(0)
if(u===0)if(t instanceof A.PV)if(v!=null)v.aWo(t)
else v=t
else ++u
if(u===1){if(t instanceof A.PV&&w instanceof A.PV){w.aWo(t)
continue}l.push(t)
w=t}}s=n
if(l.length!==0){r=C.d.ga7(l)
if(r instanceof A.PV){l.pop()
s=r}}q=o.w.b.aC(d)
if(l.length!==0){k=A.iri(q)
x=q.jR(0,y.w)
if(x==null)x=C.ad
p=o.x.aMi(d,l,k,x)}else p=n
m=B.a([],m)
if(v!=null)m.push(v)
if(p!=null)m.push(o.d3u(d,p))
if(s!=null)m.push(s)
return m},
cLc(d){return new B.kt(this.e9u(d),y.gw)},
e9u(d){var x=this
return function(){var w=d
var v=0,u=1,t=[],s,r,q,p,o,n,m
return function $async$cLc(e,f,g){if(f===1){t.push(g)
v=u}for(;;)switch(v){case 0:s=x.r,r=s.length,q=0
case 2:if(!(q<s.length)){v=4
break}p=s[q]
v=p instanceof A.aGJ?5:6
break
case 5:o=p.cFl(w),n=o.length,m=0
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
A.dFS.prototype={
god(){var x=null
return A.vS(!1,"background",x,x,new A.dFU(this),new A.dFV(),x,x,x,5000005e9)}}
A.b83.prototype={
ajg(d,e,f,g,h){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=f==null?x.c:f,t=g==null?x.d:g
return new A.b83(w,v,u,t,h==null?x.e:h)},
L(d){var x=null
return this.ajg(x,d,x,x,x)},
aNX(d){var x=null
return this.ajg(x,x,x,d,x)},
O4(d){var x=null
return this.ajg(x,x,x,x,d)},
pp(d){var x=null
return this.ajg(d,x,x,x,x)},
f5A(d){var x=null
return this.ajg(x,x,d,x,x)},
d72(d){var x=d.c,w=d.b,v=A.bdq(x<w.length?w[x]:null)
if(v==null)return this;++d.c
return this.L(v)},
d73(d){var x=d.c,w=d.b,v=x<w.length?w[x]:null,u=v instanceof B.avl?v.d:null
if(u==null)return this
d.c=x+1
return this.f5A(u)},
d74(d){var x,w,v=this,u=null,t=d.c,s=d.b,r=t<s.length?s[t]:u,q=r==null?u:A.irm(r)
if(q==null)return v
t=d.c+1
x=t<s.length?s[t]:u
w=x==null?u:A.irm(x)
t=d.c
if(w==null){d.c=t+1
switch(q.a){case 0:return v.pp(C.dT)
case 1:return v.pp(C.al)
case 2:return v.pp(C.bZ)
case 3:return v.pp(C.ck)
case 4:return v.pp(C.d1)}}else{d.c=t+2
switch(q.a){case 0:switch(w.a){case 2:return v.pp(C.nO)
case 3:return v.pp(C.hg)
case 0:case 1:case 4:return v.pp(C.dT)}break
case 1:switch(w.a){case 0:return v.pp(C.dT)
case 1:return v.pp(C.al)
case 2:return v.pp(C.bZ)
case 3:return v.pp(C.ck)
case 4:return v.pp(C.d1)}break
case 2:switch(w.a){case 0:return v.pp(C.nO)
case 4:return v.pp(C.cv)
case 1:case 2:case 3:return v.pp(C.bZ)}break
case 3:switch(w.a){case 0:return v.pp(C.hg)
case 4:return v.pp(C.j4)
case 2:case 3:case 1:return v.pp(C.ck)}break
case 4:switch(w.a){case 2:return v.pp(C.cv)
case 3:return v.pp(C.j4)
case 0:case 1:case 4:return v.pp(C.d1)}break}}},
d75(d){var x=d.c,w=d.b,v=x<w.length?w[x]:null,u=this.fcK(v instanceof B.fp?A.oX(v):null)
if(u===this)return this;++d.c
return u},
fcK(d){var x=this
switch(d){case"no-repeat":return x.aNX(C.i3)
case"repeat-x":return x.aNX(C.anW)
case"repeat-y":return x.aNX(C.anX)
case"repeat":return x.aNX(C.anV)
case"auto":return x.O4(C.mT)
case"contain":return x.O4(C.eY)
case"cover":return x.O4(C.cq)}return x}}
A.fze.prototype={}
A.ait.prototype={
O(){return"_StyleBackgroundPosition."+this.b}}
A.dFW.prototype={
god(){var x=null
return A.vS(!1,"border",x,new A.dFZ(this),new A.dG_(this),x,x,x,x,5000004e9)},
cDP(d,e,f,g){var x=d.b.aC(e)
return this.a.f0E(d,f,g.b31(x),g.doi(x))}}
A.dG1.prototype={
god(){var x=null
return A.vS(!0,x,x,x,x,x,x,new A.dG5(this),x,1000016e9)}}
A.aYt.prototype={
d69(d,e){var x=d==null?this.a:d
return new A.aYt(x,e==null?this.b:e)},
d5p(d){return this.d69(d,null)},
f6F(d){return this.d69(null,d)}}
A.dG6.prototype={
god(){var x=null
return A.vS(!1,"margin",x,x,new A.dG8(this),new A.dG9(),x,x,x,5000006e9)}}
A.dGb.prototype={
god(){var x=null
return A.vS(!1,"padding",x,x,new A.dGd(this),new A.dGe(),x,x,x,5000003e9)}}
A.i1X.prototype={}
A.ayA.prototype={}
A.c9I.prototype={}
A.b84.prototype={}
A.XD.prototype={}
A.dGi.prototype={
god(){var x=null
return A.vS(!1,"vertical-align",x,new A.dGl(this),new A.dGm(this),x,x,x,x,5000002e9)},
dRU(d,e,f,g){var x,w,v=null,u=e.b.aC(d).jR(0,y.j),t=u==null?v:u.r
if(t==null)return f
u=g.d
x=new B.a_(0,t*g.b,0,t*u)
w=x.n(0,C.Y)?f:new B.F(x,f,v)
return new B.da(u>0?C.d1:C.dT,1,v,w,v)}}
A.dKa.prototype={
god(){var x=null
return A.vS(!1,"a[href]",A.jnB(),new A.dKe(this),new A.dKf(this),x,x,x,x,1000001e9)}}
A.aUq.prototype={
gbbh(){return!0},
O3(d){return new A.aUq(d)},
FX(d){return d.djR(0,"\n")},
k(d){return"<BR />"},
gcv(d){return this.a}}
A.dKg.prototype={
god(){var x=null
return A.vS(!0,"details",x,x,x,x,x,new A.dKj(this),new A.dKk(),1000003e9)}}
A.dKl.prototype={
god(){return A.vS(!1,"img",A.jnF(),new A.dKm(this),A.jnG(),A.jnH(),null,null,null,1000006e9)}}
A.dKn.prototype={
god(){var x=null
return A.vS(x,"ul",A.jnI(),x,x,x,x,x,new A.dKq(this),1000008e9)},
dZ8(d,e,f,g,h){var x,w,v,u,t,s,r,q=null,p="list-style-type",o=f.YW(0),n=o.b
n.of(A.ix6(),D.Xg,y.T)
o.wv(A.aFj(o).d5p(1),y.R)
x=A.ciq(e)
w=f.BH(p)
if(w==null)w=q
else{v=A.uQ(w)
w=v instanceof B.fp?A.oX(v):q}if(w==null){w=f.a.b.h(0,"type")
w=A.ise(w==null?"":w)
u=w}else u=w
if(u==null){w=e.BH(p)
if(w==null)w=q
else{v=A.uQ(w)
w=v instanceof B.fp?A.oX(v):q}u=w==null?"disc":w}w=x.b
if(x.a)t=(w==null?x.d:w)-h
else t=(w==null?1:w)+h
s=n.aC(d)
r=this.a.f0U(o,s,u,t)
if(r==null)return g
n=s.jR(0,y.w)
if(n==null)n=C.ad
w=B.a([g],y.p)
w.push(r)
return new A.br8(n,w,q)}}
A.b8i.prototype={
d5S(d,e){var x=this,w=d==null?x.c:d,v=e==null?x.d:e
return new A.b8i(x.a,x.b,w,v)},
CI(d){return this.d5S(null,d)},
f4K(d){return this.d5S(d,null)}}
A.dKr.prototype={
god(){var x=null
return A.vS(x,"pre",A.jnJ(),x,new A.dKt(this),x,x,x,x,1000009e9)}}
A.bHG.prototype={
evw(d,e){var x,w,v,u,t,s,r,q=this,p=null,o=A.i4v(d)
q.eBK(o)
q.bjY(d,o.d)
for(x=o.a,w=x.length,v=0;v<x.length;x.length===w||(0,B.a7)(x),++v)q.bjY(d,x[v])
q.bjY(d,o.c)
if(o.e.length===0)return e
u=A.cjq(d)
x=d.BH("border-collapse")
if(x==null)t=p
else{s=A.uQ(x)
t=s instanceof B.fp?A.oX(s):p}x=d.BH("border-spacing")
r=x==null?p:A.uQ(x)
return A.Et(p,new B.dX(new A.dKy(q,d,u,t,r!=null?A.ok(r):p,o),p),"table",p)},
eBK(d){var x,w,v,u,t,s,r,q
for(x=d.b,w=x.length,v=d.e,u=d.f,t=y.S,s=0;s<x.length;x.length===w||(0,B.a7)(x),++s){r=x[s]
q=d.w
u.j(0,q,B.x([0,v.length],t,t))
d.r=Math.max(d.r,1)
d.w=u.a
v.push(new A.dKz(d,q,r))}},
bjY(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=A.i4v(a4),a1=a0.w,a2=a5.a,a3=a2.length
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
d=A.cjq(e)
x.push(new A.dKA(n,this,m,e,d.a?A.cjq(a4).yZ(d.b,d.c,d.d,d.e,d.f,d.x,d.y,d.z,d.Q,d.r,d.w):d,s,k,a0,j))}}}}
A.b8j.prototype={
ev4(d,e){var x,w,v,u,t,s=e.a.a,r=s instanceof B.fX?s:null
if(r!==d.a)return
if(A.i26(e)!=="table-cell")return
for(r=d.w.gaq(0),x=e.w,w=r.$ti.c,v=y._;r.G();){u=r.d
if(u==null)u=w.a(u)
t=x.b;(t==null?x.b=B.a([],v):t).push(u)}this.cUL(e)},
et7(d,e){var x,w=d.BH("width"),v=w==null?null:A.uQ(w),u=v!=null?A.ok(v):null,t=d.a.b
w=A.i7p(t,"colspan")
if(w==null)w=1
x=A.i7p(t,"rowspan")
if(x==null)x=1
this.a.push(new A.caw(e,w,d,x,u))},
cUL(d){var x
if(d.a.b.K(0,"valign"))d.fI(0,D.bqy)
x=this.c
x===$&&B.e()
d.fI(0,x)
A.dG0(d)
$.cjU().j(0,d,!0)}}
A.b8k.prototype={
gfpT(){var x,w=this.a
if(w.length!==0)return C.d.ga7(w)
x=A.i3T()
w.push(x)
return x},
eu5(d,e){var x,w=e.a.a,v=w instanceof B.fX?w:null
if(v!==d.a)return
if(A.i26(e)!=="table-row")return
x=A.i3T()
this.a.push(x)
v=x.b
v===$&&B.e()
e.fI(0,v)}}
A.cav.prototype={
cbT(){var x=A.i3U("table-row-group")
this.a.push(x)
return x}}
A.caw.prototype={}
A.cQj.prototype={
dIo(d,e){var x,w,v,u,t,s=this,r=s.a
s.cPQ(r,!1)
s.eFX(r.b)
for(r=r.gTC(),r=new B.jz(r.a(),r.$ti.i("jz<1>")),x=y.b,w=y.e;r.G();){v=s.r=r.b
u=A.jed(v)
if(u==null){t=s.w
t===$&&B.e()
u=t}if(s.d==null){s.d=B.a([],x)
s.e=u
t=B.a([],w)
s.f=t
s.w=s.e
s.y=t}t=s.w
t===$&&B.e()
if(!u.fps(t))s.blb()
s.w=u
v.FX(s)
v=v.gbbh()
s.x=v==null?s.x:v}s.cGI()},
foG(d,e,f){var x,w,v=this
v.blb()
x=v.r
x===$&&B.e()
w=x.gcv(x)
x=v.w
x===$&&B.e()
f.qg(new A.cQn(v,x,w))
x=v.d
if(x!=null)x.push(new A.cQo(d,e,f))},
djS(d,e,f){var x,w,v=this
if(e!=null){x=v.y
x===$&&B.e()
x.push(new A.ais(e,!1,!1))}if(f!=null){x=v.y
x===$&&B.e()
w=v.r
w===$&&B.e()
x.push(new A.ais(f,!0,v.eMD(w)))}},
djR(d,e){return this.djS(0,e,null)},
fGn(d,e){return this.djS(0,null,e)},
eFX(d){var x,w=this
w.d=B.a([],y.b)
w.e=d
x=B.a([],y.e)
w.f=x
w.w=w.e
w.y=x},
cPQ(d,e){var x,w,v,u
for(x=d.gbr(0),w=x.length,v=0;v<x.length;x.length===w||(0,B.a7)(x),++v){u=x[v]
if(u instanceof A.AG)this.cPQ(u,!0)}if(e)d.FX(this)},
eMD(d){var x
if(this.x)return!0
x=A.irb(d)
if(x!=null&&x.ga4D()===!1)return!0
return!1},
blb(){var x,w,v=this,u=v.y
u===$&&B.e()
x=v.f
x===$&&B.e()
if(u!==x&&u.length!==0){x=v.w
x===$&&B.e()
w=v.d
if(w!=null)w.push(new A.cQm(v,x,u))}v.y=B.a([],y.e)},
cGI(){var x,w,v,u,t=this,s=null
t.blb()
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
u=A.Et(new A.cQl(t,v,w,x),s,B.b(t.a.a.x)+"--text",s)
t.c.push(u)
$.i9b().cK(C.EC,"Added "+B.b(u.c)+" widget",s,s)},
bgb(d,e){var x=y.g,w=e.jR(0,x)
if(w==null)return null
if(w===this.a.b.aC(d).jR(0,x))return null
return w}}
A.ais.prototype={}
A.PV.prototype={
v(d){var x=$.i8n()
B.pB(d)
x=x.a.get(d)
if((x==null?0:x)>0)return this
else return this.dDA(d)},
aWo(d){var x=C.d.ga_(d.w)
this.w.push(x)
this.cBK(new A.cVO(x,d))},
qg(d){return this}}
A.cF1.prototype={}
A.drX.prototype={}
A.aml.prototype={
bN(d){var x=null
return A.ipu(x,x,x,x,x,x,D.bge)},
bY(d,e){return y.X.a(e).czD(null,D.bge,null)}}
A.bjZ.prototype={
bN(d){var x,w,v=this,u=null,t=d.N(y.q),s=v.e
if(s==null)if(t==null)s=u
else{x=t.f
s=x==null?u:new A.a5m(x)}w=v.f
if(w==null)if(t==null)w=u
else{x=t.r
w=x==null?u:new A.a5m(x)}return A.ipu(s,w,v.r,v.w,v.x,v.y,v.z)},
bY(d,e){var x,w,v,u=this,t=null,s=d.N(y.q)
y.X.a(e)
x=u.e
if(x==null)if(s==null)x=t
else{w=s.f
x=w==null?t:new A.a5m(w)}v=u.f
if(v==null)if(s==null)v=t
else{w=s.r
v=w==null?t:new A.a5m(w)}e.duI(x,v,u.r,u.w)
e.czD(u.x,u.z,u.y)}}
A.aHg.prototype={
fT(d){return this.f!=d.f||this.r!=d.r}}
A.b5C.prototype={
duI(d,e,f,g){var x=this
if(J.C(d,x.Z)&&J.C(e,x.aO)&&J.C(f,x.ba)&&J.C(g,x.cn))return
x.Z=d
x.aO=e
x.ba=f
x.cn=g
x.aJ()},
czD(d,e,f){var x=this
if(d==x.dB&&J.C(f,x.eA)&&J.C(e,x.hq))return
x.dB=d
x.eA=f
x.hq=e
x.aJ()},
eN(d){var x=this.ab$
if(x==null)return C.be
return d.cr(x.bc(C.bD,this.cCY(d),x.geM()))},
dj(){var x,w=this,v=w.ab$
if(v==null){x=y.k.a(B.ax.prototype.gaG.call(w))
w.fy=new B.av(B.aK(0,x.a,x.b),B.aK(0,x.c,x.d))
return}x=y.k
v.f0(w.cCY(x.a(B.ax.prototype.gaG.call(w))),!0)
w.fy=x.a(B.ax.prototype.gaG.call(w)).cr(v.gW(0))},
cCY(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.Z,h=i==null?j:i.a4(0,0,d.d)
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
o=q!=null&&p!=null?k.ebK(h,x,q,p):j
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
ebK(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=this.ab$
if(l==null)return m
x=B.jq(f,m)
w=B.dw()
try{t=l
w.b=t.bc(C.bD,x,t.geM())}catch(s){v=B.T(s)
u=B.b_(s)
t=$.iDU()
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
A.cH0.prototype={}
A.bTs.prototype={
a4(d,e,f){return null},
gF(d){return 0},
n(d,e){if(e==null)return!1
return e instanceof A.bTs},
k(d){return"auto"}}
A.aZU.prototype={
a4(d,e,f){return C.m.a4(f*this.a/100,e,f)},
gF(d){return C.m.gF(this.a)},
n(d,e){if(e==null)return!1
return e instanceof A.aZU&&e.a===this.a},
k(d){return C.m.aY(this.a,1)+"%"}}
A.a5m.prototype={
a4(d,e,f){return C.m.a4(this.a,e,f)},
gF(d){return C.m.gF(this.a)},
n(d,e){if(e==null)return!1
return e instanceof A.a5m&&e.a===this.a},
k(d){return C.m.aY(this.a,1)}}
A.bqZ.prototype={
bN(d){var x=new A.axQ(this.e,this.f,null,new B.cA(),B.bJ(y.v))
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
A.axQ.prototype={
gamS(){var x,w=this.Z
if(w==1/0||w==-1/0)w=0
x=this.aO
return w+(x==1/0||x==-1/0?0:x)},
eN(d){return this.cNx(this.ab$,d,B.n7())},
cD(d){var x=this.ab$
if(x==null)return this.gamS()
return x.bc(C.cC,d,x.gcX())+this.gamS()},
cN(d){var x=this.ab$
if(x==null)return this.gamS()
return x.bc(C.d9,d,x.gdA())+this.gamS()},
dj(){var x=this
return x.fy=x.cNx(x.ab$,y.k.a(B.ax.prototype.gaG.call(x)),B.qt())},
cNx(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
if(d==null)return e.cr(new B.av(k.gamS(),0))
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
A.aad.prototype={
U(){return new A.bYb()}}
A.bYb.prototype={
ae(){this.ai()
this.e=this.a.d},
b8(d){var x=this
x.bg(d)
if(!x.d)x.e=x.a.d},
v(d){var x=this.e
x===$&&B.e()
return new A.b1p(x,new A.eD6(this),this.a.c,null)}}
A.br4.prototype={
v(d){var x=d.N(y.M)
x=x==null?null:x.f
return x!==!1?this.c:C.au}}
A.aae.prototype={
v(d){var x=d.N(y.M),w=x==null?null:x.f
if(w==null)return C.au
x=w?D.c3a:D.c39
return new A.aaf(x,this.c,null)}}
A.br9.prototype={
v(d){var x=null
return B.cW(x,this.c,C.z,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new A.cXD(d),x,x,x,x,x,x,x,x,x,!1,C.aV)}}
A.b1p.prototype={
fT(d){return this.f!==d.f}}
A.br6.prototype={
th(d){return this.x},
bN(d){var x=this
return A.j95(C.o,x.w,x.e,x.f,C.j,x.z,x.th(d),C.n)},
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
A.b1q.prototype={
jS(d){if(!(d.b instanceof B.ni))d.b=new B.ni(null,null,C.W)},
aAK(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
cN(d){return this.aAK(new A.eDa(),d,C.aI)},
cD(d){return this.aAK(new A.eD8(),d,C.aI)},
cE(d){return this.aAK(new A.eD9(),d,C.O)},
cH(d){return this.aAK(new A.eD7(),d,C.O)},
jE(d){if(this.C===C.aI)return this.Ul(d)
return this.aPq(d)},
acB(d){switch(this.C.a){case 0:return d.b
case 1:return d.a}},
acC(d){switch(this.C.a){case 0:return d.a
case 1:return d.b}},
eN(d){var x
if(this.az===C.hA)return C.be
x=this.cNz(d,B.n7())
switch(this.C.a){case 0:return d.cr(new B.av(x.a,x.b))
case 1:return d.cr(new B.av(x.b,x.a))}},
cNz(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=a7.a,d=a7.b,a0=a7.c,a1=a7.d,a2=g.acC(new B.av(B.aK(1/0,e,d),B.aK(1/0,a0,a1))),a3=isFinite(a2),a4=g.aM$,a5=new WeakMap(),a6=!1
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
o=g.acC(p)
if(a3&&o>a2){n=C.m.R(o-a2)
a5.set(a4,n)
v+=n
w=a4}else{t+=o
u=Math.max(u,g.acB(p))}}a4=s.b4$}m=Math.max(0,(a3?a2:0)-t)
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
break}h=a6?g.acB(new B.av(B.aK(1/0,e,d),B.aK(1/0,a0,a1))):0
switch(g.C.a){case 0:s=i.b
if(s===i)B.aC(B.v5(i.a))
q=a7.fbh(j,h,s)
break
case 1:s=i.b
if(s===i)B.aC(B.v5(i.a))
q=a7.fbg(j,s,h)
break
default:q=f}p=a8.$2(a4,q)
t+=g.acC(p)
k+=j
u=Math.max(u,g.acB(p))}s=a4.b
s.toString
a4=x.a(s).b4$}}return new A.eJa(a3&&g.ah===C.j?a2:t,u,t)},
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
s=A.itA(w,h.aF,h.aU)
n=s===!1
m=n?d-o:o
x=h.aM$
for(s=y.L,l=a0/2;x!=null;){k=x.b
k.toString
s.a(k)
j=h.az
i=0
switch(j.a){case 0:case 1:if(!(A.itA(B.iv3(w),h.aF,h.aU)===(j===C.y))){w=x.fy
i=a0-h.acB(w==null?B.aC(B.aL(g+B.Z(x).k(0)+"#"+B.dk(x))):w)}break
case 2:w=x.fy
i=l-h.acB(w==null?B.aC(B.aL(g+B.Z(x).k(0)+"#"+B.dk(x))):w)/2
break
case 3:break
case 4:if(w===C.aI){t=x.DP(h.aS,!0)
i=t!=null?a1-t:0}break
default:i=null}if(n){w=x.fy
m-=h.acC(w==null?B.aC(B.aL(g+B.Z(x).k(0)+"#"+B.dk(x))):w)}w=h.C
switch(w.a){case 0:k.a=new B.V(m,i)
break
case 1:k.a=new B.V(i,m)
break}if(n)m-=p
else{j=x.fy
m+=h.acC(j==null?B.aC(B.aL(g+B.Z(x).k(0)+"#"+B.dk(x))):j)+p}x=k.b4$}},
ii(d,e){return this.x9(d,e)},
bi(d,e){var x,w,v,u=this
if(!(u.X>1e-10)){u.xa(d,e)
return}if(u.gW(0).gac(0))return
x=u.aT
w=u.cx
w===$&&B.e()
v=u.gW(0)
x.sca(0,d.wj(w,e,new B.ap(0,0,0+v.a,0+v.b),u.gajQ(),u.a1,x.a))},
q(){this.aT.sca(0,null)
this.dGr()},
z8(d){var x
switch(this.a1.a){case 0:return null
case 1:case 2:case 3:if(this.X>1e-10){x=this.gW(0)
x=new B.ap(0,0,0+x.a,0+x.b)}else x=null
return x}},
lb(){return this.a9n()}}
A.eJa.prototype={}
A.cfq.prototype={
bM(d){var x,w,v
this.i4(d)
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
A.cfr.prototype={}
A.bbi.prototype={
q(){var x,w,v
for(x=this.xi$,w=x.length,v=0;v<w;++v)x[v].q()
this.l3()}}
A.br8.prototype={
bN(d){var x=new A.ayg(this.e,0,null,null,new B.cA(),B.bJ(y.v))
x.bQ()
return x},
bY(d,e){var x=this.e
y.cx.a(e).seY(x)
return x}}
A.T8.prototype={}
A.ayg.prototype={
seY(d){if(this.C===d)return
this.C=d
this.aJ()},
jE(d){return this.aPq(d)},
eN(d){return this.cGO(this.aM$,d,B.n7())},
cH(d){var x=this.aM$
x=x==null?null:x.cH(d)
return x==null?this.cBl(d):x},
cD(d){var x=this.aM$
x=x==null?null:x.cD(d)
return x==null?this.cBm(d):x},
cE(d){var x=this.aM$
x=x==null?null:x.cE(d)
return x==null?this.cBn(d):x},
cN(d){var x=this.aM$
x=x==null?null:x.bc(C.d9,d,x.gdA())
return x==null?this.cBo(d):x},
ii(d,e){return this.x9(d,e)},
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
A.cfy.prototype={
bM(d){var x,w,v
this.i4(d)
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
A.cfz.prototype={}
A.aaf.prototype={
bN(d){var x=new A.b2o(this.d,B.a([],y.cI),this.e,new B.cA(),B.bJ(y.v))
x.bQ()
return x},
bY(d,e){y.cA.a(e)
e.sfrS(this.d)
e.sjH(this.e)}}
A.b2o.prototype={
sfrS(d){if(d===this.C)return
this.C=d
this.aJ()},
gbmq(){var x,w,v=this,u=null,t=v.ak
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
jE(d){return this.gbmq().b.a.nH(d)},
eN(d){var x=this.gbmq().b,w=x.c
x=x.a.c
return d.cr(new B.av(w,x.gbB(x)))},
bi(d,e){var x,w,v,u,t,s,r,q=this,p=d.gcG(0),o=q.ah,n=o.length!==0?C.d.ga_(o):null
o=q.gW(0)
x=n!=null&&isFinite(n.gajZ())&&isFinite(n.gaq8())?q.gW(0).b-n.gajZ()-n.gaq8()+n.gaq8()*0.7:q.gW(0).b/2
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
p.ih(w,t*0.9,o)
break
case 1:$.b6()
o=B.bp()
o.r=v.gB(v)
p.ih(w,t,o)
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
dj(){var x=y.k.a(B.ax.prototype.gaG.call(this)),w=this.gbmq().b,v=w.c
w=w.a.c
this.fy=x.cr(new B.av(v,w.gbB(w)))}}
A.aag.prototype={
O(){return"HtmlListMarkerType."+this.b}}
A.aoA.prototype={
bN(d){var x=new A.b6o(0,null,null,new B.cA(),B.bJ(y.v))
x.bQ()
return x}}
A.Tl.prototype={}
A.b6o.prototype={
jE(d){var x,w,v=this.aM$
if(v==null)return this.a9m(d)
x=v.rk(d)
if(x==null)x=0
w=v.b
w.toString
return y.l.a(w).a.b+x},
eN(d){return A.ipC(this.aM$,d,B.n7())},
cH(d){var x,w,v,u=this.aM$
if(u==null)return this.cBl(d)
x=u.cH(d)
w=u.b
w.toString
v=y.l.a(w).b4$
if(v==null)return x
return x+v.cH(d)},
cD(d){var x,w,v,u=this.aM$
if(u==null)return this.cBm(d)
x=u.cD(d)
w=u.b
w.toString
v=y.l.a(w).b4$
if(v==null)return x
return Math.max(x,v.cD(d))},
cE(d){var x,w,v,u=this.aM$
if(u==null)return this.cBn(d)
x=u.cE(d)
w=u.b
w.toString
v=y.l.a(w).b4$
if(v==null)return x
return x+v.cE(d)},
cN(d){var x,w,v,u=this.aM$
if(u==null)return this.cBo(d)
x=u.bc(C.d9,d,u.gdA())
w=u.b
w.toString
v=y.l.a(w).b4$
if(v==null)return x
return Math.min(x,v.bc(C.d9,d,v.gdA()))},
ii(d,e){return this.x9(d,e)},
bi(d,e){return this.xa(d,e)},
dj(){return this.fy=A.ipC(this.aM$,y.k.a(B.ax.prototype.gaG.call(this)),B.qt())},
jS(d){if(!(d.b instanceof A.Tl))d.b=new A.Tl(null,null,C.W)}}
A.chc.prototype={
bM(d){var x,w,v
this.i4(d)
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
A.chd.prototype={}
A.bra.prototype={
bN(d){var x=this,w=$.ipR
$.ipR=w+1
w=new A.b8h(B.Ig("fwfh.HtmlTable"+w),x.e,x.f,x.r,D.ePx,x.w,x.x,0,null,null,new B.cA(),B.bJ(y.v))
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
A.aoB.prototype={}
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
A.b8g.prototype={}
A.cat.prototype={
d4o(d){var x,w=this
if(d==null){x=w.a
return new A.b8g(C.cc,new B.av(B.aK(0,x.a,x.b),B.aK(0,x.c,x.d)))}return w.dzu(w.dzt(w.dzs(w.dzq(w.dzp(d)))))},
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
if(isFinite(s)&&s>0){t=x.gbF4(0)
r=s-(x.gdeZ(0)+(v+1)*t+x.gdf_(0))}else r=null
return new A.fAv(r,q,p,v,s,u)},
dzq(d){var x,w,v,u,t,s=d.b,r=B.Y(s).i("E<1,ai?>")
r=B.M(new B.E(s,new A.fAH(d),r),r.i("ah.E"))
r.$flags=1
x=r
w=B.c4(d.d,0,!1,y.i)
for(r=this.c,v=0;v<s.length;++v){u=s[v]
t=x[v]
if(t!=null)A.i4w(w,r,u,t)}r=B.Y(w).i("E<1,ai?>")
r=B.M(new B.E(w,new A.fAI(),r),r.i("ah.E"))
r.$flags=1
return new A.fAw(d,x,r)},
dzs(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a5.a,i=j.a,h=j.b,g=j.c,f=B.c4(g.length,k,!1,y.aJ),e=B.c4(g.length,k,!1,y.cD),d=a5.c,a0=B.Y(d).i("E<1,ai>"),a1=B.M(new B.E(d,new A.fAJ(),a0),a0.i("ah.E")),a2=a1,a3=B.c4(j.d,0,!1,y.i),a4=a2
if(!A.jef(a4).gaq(0).G())if(i!=null){d=a4
a0=J.L(d)
d=(a0.gac(d)?0:a0.hj(d,A.NN()))<=i}else d=!0
else d=!1
if(d)return new A.caq(a5,a4)
for(d=i!=null,a0=a5.b,q=this.b,p=this.c,o=p.C,n=!0;n;){for(x=0,n=!1;x<g.length;++x){w=g[x]
v=h[x]
if(a0[x]==null&&f[x]==null){m=q.$2(w,C.eX)
f[x]=m
A.i4w(a2,p,v,m.a)
o.cK(C.cf,"Got child#"+B.b(x)+" size without contraints: "+m.k(0),k,k)
n=!0}if(!n&&e[x]==null){u=0/0
try{u=this.dzr(a5,w,a4,v,a2,a3)
if(u!=null)o.cK(C.cfe,"Got child#"+B.b(x)+" min width: "+B.b(u),k,k)}catch(l){t=B.T(l)
s=B.b_(l)
r="Could not measure child#"+B.b(x)+" min intrinsic width"
o.cK(C.kO,r,t,s)}if(u!=null){e[x]=u
A.i4w(a3,p,v,u)
n=!0}}}if(d)a4=A.jal(i,a2,a3)}return new A.caq(a5,a4)},
dzr(d,e,f,g,h,i){var x=d.a.a,w=A.i4x(f,g),v=A.i4x(h,g)
if(w>=v){if(x==null)return null
if((C.d.gac(f)?0:C.d.hj(f,A.NN()))<=x)return null
if(v>=A.i4x(i,g))return null}return e.bc(C.d9,1/0,e.gdA())},
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
n=k.gac(0)?0:k.hj(0,A.NN())
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
a3[f]=Math.max(a3[f],h)}}return new A.fAx(a4,a2,a3)},
dzu(b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b5.a,a7=a6.a.a,a8=a7.b,a9=a7.c,b0=this.c,b1=b0.gbF4(0),b2=a7.f,b3=b0.gfB_(0),b4=b0.ak
b4=b4==null?a5:b4.a.b
if(b4==null)b4=0
x=b5.c
w=C.d.gac(x)?0:C.d.hj(x,A.NN())
v=b0.ak
v=v==null?a5:v.c.b
if(v==null)v=0
u=b4+w+(b2+1)*b3+v
v=this.a
t=Math.max(0,(B.aK(u,v.c,v.d)-u)/b2)
b2=b0.gdeZ(0)
v=a6.b
b3=C.d.gac(v)?0:C.d.hj(v,A.NN())
s=b2+b3+(a7.d+1)*b1+b0.gdf_(0)
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
l=g.gac(0)?0:g.hj(0,A.NN())
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
l=d.gac(0)?0:d.hj(0,A.NN())
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
a2=a1+(i.gac(0)?0:i.hj(0,A.NN()))+(b4+1)*w
if(p.fy!=null){b4=b0.ak
w=b4==null
a1=w?a5:b4.d.b
if(a1==null)a1=0
l=o.r
b4=!w&&b0.ah?b4.d.b*-1:b0.az
B.hv(0,l,v.length,a5,a5)
g=new B.d2(v,0,l,g)
g.h_(v,0,l,e)
a3=a1+(g.gac(0)?0:g.hj(0,A.NN()))+(l+1)*b4
switch(b0.aS.a){case 1:a4=a3
break
case 0:a4=s-a0-a3
break
default:a4=a5}o.a=new B.V(a4,a2)}if(o.w)r=Math.max(r,a2+f)}return new A.b8g(new B.ap(0,r,0+s,r+(u-r)),new B.av(s,u))}}
A.fAv.prototype={}
A.fAw.prototype={}
A.caq.prototype={}
A.fAx.prototype={}
A.b8h.prototype={
gbF4(d){var x=this.ak
return x!=null&&this.ah?x.d.b*-1:this.az},
gdeZ(d){var x=this.ak
x=x==null?null:x.d.b
return x==null?0:x},
gdf_(d){var x=this.ak
x=x==null?null:x.b.b
return x==null?0:x},
gfB_(d){var x=this.ak
return x!=null&&this.ah?x.a.b*-1:this.az},
jE(d){var x,w,v,u,t=this.aM$
for(x=y.H,w=null;t!=null;){v=t.b
v.toString
x.a(v)
if(v.y===0){u=t.rk(d)
if(u!=null){u+=v.a.b
if(w!=null){if(u<w)w=u}else w=u}}t=v.b4$}return w},
eN(d){return new A.cat(d,B.n7(),this).d4o(this.aM$).b},
ii(d,e){return this.x9(d,e)},
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
d.ix(w,new B.V(r,s))
p=t.e
if(p!=null){if(d.e==null)d.tD()
o=d.e
o.toString
p.bi(o,new B.ap(r,s,r+q.a,s+q.b))}w=t.b4$}},
dj(){var x=this,w=y.k
x.aF=new A.cat(w.a(B.ax.prototype.gaG.call(x)),B.qt(),x).d4o(x.aM$)
x.fy=w.a(B.ax.prototype.gaG.call(x)).cr(x.aF.b)},
jS(d){if(!(d.b instanceof A.yg))d.b=new A.yg(null,null,C.W)}}
A.chv.prototype={
bM(d){var x,w,v
this.i4(d)
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
A.chw.prototype={}
A.aWq.prototype={
U(){return new A.ccS(B.D(y.S,y.F))}}
A.bK8.prototype={
bN(d){var x=new A.YU(A.hjP(d),this.e,null,new B.cA(),B.bJ(y.v))
x.bQ()
x.scT(null)
return x},
bY(d,e){var x
y.cJ.a(e)
x=A.hjP(d)
if(x!==e.Z){e.Z=x
e.aJ()}x=this.e
if(x!==e.aO){e.aO=x
e.aJ()}return e}}
A.ccS.prototype={
v(d){return new A.b9t(this.d,new A.ccQ(this.a.c,null),null)}}
A.b9t.prototype={
fT(d){return this.f!==d.f}}
A.ccQ.prototype={
bN(d){var x=new A.ccR(A.hjP(d),null,new B.cA(),B.bJ(y.v))
x.bQ()
x.scT(null)
return x},
bY(d,e){var x=A.hjP(d)
if(x!==e.Z){e.Z=x
e.bv()}return null}}
A.ccR.prototype={
bi(d,e){this.Z.ag(0)
this.qp(d,e)}}
A.YU.prototype={
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
t=J.az(x,new A.fJH(),y.i).hj(0,new A.fJI())
x=v.h(0,q.aO)
x.toString
J.cv(x,q)
if(t>w){s=t-w
if(q.gW(0).b-n.gW(0).b>=s){d.ix(n,new B.V(p+0,o+s))
return}else{q.cn+=s
q.ba=t
$.aN.k3$.push(new A.fJJ(q))
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
$.aN.k3$.push(new A.fJK(u))}}}}else v.j(0,u,B.a([q],y.b5))
d.ix(n,new B.V(p,o))},
dj(){var x=this
return x.fy=x.d0G(x.ab$,y.k.a(B.ax.prototype.gaG.call(x)),B.qt())},
lb(){return"_ValignBaselineRenderObject(index: "+this.aO+")"},
d0G(d,e,f){var x=new B.aZ(0,e.b,0,e.d).xb(new B.a_(0,this.cn,0,0)),w=d!=null?f.$2(d,x):C.be
return e.cr(w.aE(0,new B.V(0,this.cn)))}}
var z=a.updateTypes(["K<h,h>(fX)","ai(ai)","q_(q_)","ph(q_,ph)","~(q_,q_)","~(q_)","n(q_,ph)","~(q_,n)","tO(iq)","fK(fK,h)","ph?(q_,U<ph>)","n(Q,n)","I(N6)","fK(fK,aHf)","fK(fK,ai)","fK(fK,iq)","aae(Q,n)","aoB(Q)","zb?(Q)","n(n)","aad(Q,n)","I(ais)","aa<I>(h{curve:qC,duration:ca,jumpCurve:qC,jumpDuration:ca})","ai?(yg)","ai(YU)","a2f(h)","n(ph)","r(N6,N6)","ayA(Q,n)","fK(fK,a00)","fK(fK,Eg)","fK(fK,tT)","fK(fK,Gt)","aoA(Q,n)","fK(fK,u<u<iq>>)","fK(fK,Q?)","fK(fK,iA)","I(zb?)","ai(ai,ai)","fK(fK,a6)","fK(fK,u<h>)","xU?(amo)","zb?(zb?(Q))","fK(fK,Vi)","fK(fK,XD)","aZ(aZ)"])
A.hBS.prototype={
$0(){var x=b.G.performance
if(x!=null&&B.tZ(x,"Object")){B.ku(x)
if(x.measure!=null&&x.mark!=null&&x.clearMeasures!=null&&x.clearMarks!=null)return x}return null},
$S:696}
A.hzI.prototype={
$0(){var x=b.G.JSON
if(x!=null&&B.tZ(x,"Object"))return B.ku(x)
throw B.v(B.bO("Missing JSON.parse() support"))},
$S:459}
A.cH_.prototype={
$1(d){return d==="null"},
$S:9}
A.cZE.prototype={
$1(d){return!this.a.b(d)},
$S:202}
A.hBY.prototype={
$1(d){return d.fU(this.a)},
$S:z+41}
A.de9.prototype={
$1(d){return this.a.b(d)},
$S:202}
A.cXH.prototype={
$2(d,e){var x,w,v,u,t=null
if(e.b!=null)return e.gfA1()
else{x=e.c
w=this.a
v=w.e
u=w.d
if(x!=null){v===$&&B.e()
u===$&&B.e()
x=v.cey(d,new A.AG(v,t,D.F8,new A.a5M(),$.ck6(),u,t),x,e.d)
return w.a1u(x)}else{v===$&&B.e()
u===$&&B.e()
x=v.ftY(d,new A.AG(v,t,D.F8,new A.a5M(),$.ck6(),u,t))
return w.a1u(x)}}},
$S:3340}
A.cXG.prototype={
$0(){return this.a.a1u(C.au)},
$S:155}
A.dTn.prototype={
$2(d,e){var x=this,w=x.b,v=new A.br6(w,x.c,x.a,x.e,x.d,x.f,null)
switch(w.a){case 0:v=A.idz(v,null,e.b)
break
case 1:v=A.idz(v,e.d,null)
break}return v},
$S:84}
A.dTo.prototype={
$3(d,e,f){var x=this.a.cey(d,this.b,e,this.c)
return x},
$S:231}
A.dTp.prototype={
$3(d,e,f){var x,w,v,u
if(f==null)return e
x=f.b
w=f.a
v=x!=null&&x>0?w/x:null
u=this.a.deE(d,this.b,v,this.c)
return u},
$C:"$3",
$R:3,
$S:607}
A.dTq.prototype={
$1(d){var x,w,v,u=this,t=null,s=B.at1(d),r=s!=null
if(r){x=d.N(y.eo)
x=(x==null?C.od:x).x
w=x==null?C.Wu:x}else w=t
v=B.a3r(t,t,u.a,A.aFj(u.b).b,w,s,u.c,t,u.d,u.e,u.f,t,C.c9,C.cj)
return r?B.ig(v,C.uh,t,t,t,t,t,!0):v},
$S:32}
A.dTm.prototype={
$2(d,e){var x=null
return B.H(x,x,C.o,x,x,x,x,x,x,x,x,x,x,x)},
$S:3341}
A.cGZ.prototype={
$1(d){return!(d instanceof B.ack)&&!(d instanceof B.acl)},
$S:1156}
A.cFW.prototype={
$1(d){return d.a+": "+d.b},
$S:285}
A.hBX.prototype={
$1(d){return d.a.x!=null},
$S:z+12}
A.eiN.prototype={
$1(d){return d.a+": "+d.b},
$S:285}
A.cpt.prototype={
$1(d){var x=this.a,w=x.c,v=x.a
w.a.push(v)
w.b.j(0,x.b,v)
A.ird(d,v)
return d},
$S:z+2}
A.cpv.prototype={
$1(d){var x=this.a
d.a5I(A.SF(d,A.Et(new A.cpr(x,d),null,B.b(d.a.x)+"--anchor#"+x.b,null),C.oU,C.b9))},
$S:z+5}
A.cpr.prototype={
$2(d,e){var x=this.b.b.aC(d).jR(0,y.j)
x=x==null?null:x.r
return new B.N(null,x,null,this.a.a)},
$S:1157}
A.cpu.prototype={
$2(d,e){return e.qg(new A.cps(this.a))},
$S:z+3}
A.cps.prototype={
$2(d,e){return new B.N(null,null,e,this.a.a)},
$S:1157}
A.cpw.prototype={
$2(d,e){$.iD3().j(0,e,this.a)
return e},
$S:158}
A.cpm.prototype={
$0(){return"Scrolling to "+this.a.k(0)+"..."},
$S:14}
A.cpn.prototype={
$0(){return"Scrolling up to "+this.a.k(0)+"..."},
$S:14}
A.cpo.prototype={
$0(){return"Scrolling down to "+this.a.k(0)+"..."},
$S:14}
A.cpp.prototype={
$1(d){var x=this
return x.a.a_7(x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x)},
$S:6}
A.cF2.prototype={
$1(d){return y.c.b(d)?d.v(this.a):d},
$S:1037}
A.cF3.prototype={
$1(d){return!d.wB(0,C.au)},
$S:630}
A.dFU.prototype={
$2(d,e){var x,w=A.irk(d),v=w.b,u=w.c
if(v==null&&u==null)return e
x=this.a
return e.qg(new A.dFT(x,d,v,x.a.f0G(d,u,w.a,w.e,w.d)))},
$S:z+3}
A.dFT.prototype={
$2(d,e){var x=this,w=x.b,v=w.b.aC(d),u=x.c,t=u==null?null:u.fU(v)
return x.a.a.f0F(w,e,t,x.d)},
$S:157}
A.dFV.prototype={
$1(d){var x=A.irk(d).b
if(x==null)return
d.b.of(A.jnw(),x,y.V)},
$S:z+5}
A.dFZ.prototype={
$1(d){var x,w=d.f
w.toString
if(d.y!==!0)return d
x=A.cjq(d)
if(x.gDg())return d
A.dG0(d)
w=w.YW(0)
w.l6(0,A.SF(d,A.Et(new A.dFY(this.a,d,x),d.ap(),B.b(d.a.x)+"--border",null),C.oU,C.b9))
return w},
$S:z+2}
A.dFY.prototype={
$2(d,e){var x=this.a.cDP(this.b,d,e,this.c)
return x},
$S:158}
A.dG_.prototype={
$2(d,e){var x,w=$.i8q()
B.pB(d)
if(J.C(w.a.get(d),!0))return e
x=A.cjq(d)
if(x.gDg())return e
A.dG0(d)
return A.Et(new A.dFX(this.a,d,e,x),null,B.b(d.a.x)+"--border",null)},
$S:z+3}
A.dFX.prototype={
$2(d,e){var x=this
return x.a.cDP(x.b,d,x.c,x.d)},
$S:157}
A.dG5.prototype={
$2(d,e){var x,w,v,u,t,s,r=null,q={}
if(e.length===0)return r
q.a="row"
q.b=q.c="flex-start"
for(x=J.b1(A.hZI(d.a));x.G();){w=x.gT(x)
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
break}}}return A.Et(new A.dG4(q,this.a,d,e),r,"flex",r)},
$S:z+10}
A.dG4.prototype={
$2(d,e){var x,w,v,u,t=this,s=t.c,r=s.b.aC(d),q=t.d
q=new B.E(q,new A.dG2(d),B.Y(q).i("E<1,n>")).fZ(0,new A.dG3())
q=B.M(q,q.$ti.i("U.E"))
q.$flags=1
x=t.a
w=A.j2F(x.b)
v=x.a==="row"?C.aI:C.O
x=A.j2G(x.c)
u=r.jR(0,y.w)
if(u==null)u=C.ad
return t.b.a.f0J(s,q,w,v,x,u)},
$S:157}
A.dG2.prototype={
$1(d){var x=d.v(this.a)
return x},
$S:z+26}
A.dG3.prototype={
$1(d){return!d.wB(0,C.au)},
$S:630}
A.dG8.prototype={
$2(d,e){var x,w,v,u,t,s=A.hVE(d,"margin")
if(s==null)return e
x=s.f
w=s.a
v=d.b
u=B.a([],y.E)
if(x!=null&&x.a>0)u.push(A.i_w(x,v,B.b(d.a.x)+"--marginTop"))
if(s.gc7y()||s.gc7z())u.push(e.qg(new A.dG7(v,s)))
else u.push(e)
if(w!=null&&w.a>0)u.push(A.i_w(w,v,B.b(d.a.x)+"--marginBottom"))
t=this.a.a.bC1(d,u)
return t==null?e:t},
$S:z+3}
A.dG7.prototype={
$2(d,e){var x,w,v,u=null,t=this.a.aC(d),s=this.b,r=s.b3k(t),q=r==null,p=q?u:r.fU(t)
if(p==null)p=0
x=Math.max(p,0)
w=s.b3u(t)
s=w==null
p=s?u:w.fU(t)
if(p==null)p=0
v=Math.max(p,0)
q=(q?u:r.b)===D.Xc?1/0:x
return new A.bqZ(q,(s?u:w.b)===D.Xc?1/0:v,e,u)},
$S:158}
A.dG9.prototype={
$1(d){var x=A.hVE(d,"margin")
if(x==null)return
if(x.gc7y())d.a5I(A.SF(d,A.isC(d,x),C.eD,C.b9))
if(x.gc7z())d.l6(0,A.SF(d,A.isB(d,x),C.eD,C.b9))},
$S:z+5}
A.hB6.prototype={
$2(d,e){var x=this.a.b.aC(d),w=this.b.b3u(x)
return A.isD(w==null?null:w.fU(x))},
$S:158}
A.hB7.prototype={
$2(d,e){var x=this.a.b.aC(d),w=this.b.b3k(x)
return A.isD(w==null?null:w.fU(x))},
$S:158}
A.dGd.prototype={
$2(d,e){var x=A.hVE(d,"padding")
if(x==null)return e
return A.Et(new A.dGc(this.a,d,x),e,B.b(d.a.x)+"--paddingBlock",null)},
$S:z+3}
A.dGc.prototype={
$2(d,e){var x,w,v=null,u=this.c,t=this.b.b.aC(d),s=u.b3k(t)
s=s==null?v:s.fU(t)
if(s==null)s=0
s=Math.max(s,0)
x=u.f
x=x==null?v:x.fU(t)
if(x==null)x=0
x=Math.max(x,0)
w=u.b3u(t)
w=w==null?v:w.fU(t)
if(w==null)w=0
w=Math.max(w,0)
u=u.a
u=u==null?v:u.fU(t)
if(u==null)u=0
u=new B.a_(s,x,w,Math.max(u,0))
return u.n(0,C.Y)?e:new B.F(u,e,v)},
$S:157}
A.dGe.prototype={
$1(d){var x=A.hVE(d,"padding")
if(x==null)return
if(x.gc7y())d.a5I(A.SF(d,A.isC(d,x),C.eD,C.b9))
if(x.gc7z())d.l6(0,A.SF(d,A.isB(d,x),C.eD,C.b9))},
$S:z+5}
A.dGf.prototype={
$2(d,e){var x=this.a.b.aC(d).jR(0,y.w)
return new A.ayA(null,(x==null?C.ad:x)===C.ad?C.cv:C.j4,A.jnR(),C.o,e,null)},
$S:z+28}
A.dGg.prototype={
$2(d,e){return A.ilu(d,e,this.a,this.b.b)},
$S:158}
A.dGh.prototype={
$2(d,e){return A.ilu(d,e,this.a,this.b.b)},
$S:158}
A.dGl.prototype={
$1(d){var x,w,v,u,t=null,s=d.f
s.toString
if(d.y!==!0)return d
x=d.BH("vertical-align")
if(x==null)w=t
else{w=A.uQ(x)
w=w instanceof B.fp?A.oX(w):t}if(w==null||w==="baseline")return d
v=A.jkQ(w)
if(v==null)return d
$.i8s().j(0,d,!0)
u=A.Et(t,d.ap(),B.b(d.a.x)+"--vertical-align",t)
if(w==="sub"||w==="super")u.d.push(new A.dGk(this.a,w,d))
s=s.YW(0)
s.l6(0,A.SF(d,u,v,C.b9))
return s},
$S:z+2}
A.dGk.prototype={
$2(d,e){var x=this.b,w=x==="super"?0.4:0
x=x==="sub"?0.4:0
return this.a.dRU(d,this.c,e,new B.a_(0,x,0,w))},
$S:157}
A.dGm.prototype={
$2(d,e){var x,w,v=$.i8s()
B.pB(d)
if(J.C(v.a.get(d),!0))return e
v=d.BH("vertical-align")
if(v==null)x=null
else{w=A.uQ(v)
x=w instanceof B.fp?A.oX(w):null}if(x==null)return e
return e.qg(new A.dGj(this.a,d,x))},
$S:z+3}
A.dGj.prototype={
$2(d,e){var x,w=this.b.b.aC(d).jR(0,y.w)
if(w==null)w=C.ad
x=A.jkM(w,this.c)
if(x==null)return e
return new B.da(x,1,null,e,null)},
$S:157}
A.dKe.prototype={
$1(d){var x,w,v,u,t,s=d.a.b.h(0,"href")
if(s==null)return d
x=this.a
w=x.a
v=w.diZ(s)
u=w.f0L(d,new A.dKc(x,v==null?s:v))
if(u==null)return d
if(d.y===!0)for(w=d.gTC(),w=new B.jz(w.a(),w.$ti.i("jz<1>"));w.G();){t=w.b
if(t instanceof A.a4W&&!t.ga4D())t.a.qg(new A.dKd(x,d,u))}x=y.g
d.b.of(A.jnA(),u,x)
d.wv(u,x)
return d},
$S:z+2}
A.dKc.prototype={
$0(){return this.a.a.anO(this.b)},
$S:0}
A.dKd.prototype={
$2(d,e){return this.a.a.bC3(this.b,e,this.c)},
$S:157}
A.dKf.prototype={
$2(d,e){var x=d.H3(y.g)
if(x!=null)e.qg(new A.dKb(this.a,d,x))
return e},
$S:z+3}
A.dKb.prototype={
$2(d,e){if(e.wB(0,C.au))return null
return this.a.a.bC3(this.b,e,this.c)},
$S:157}
A.dKj.prototype={
$2(d,e){var x,w,v,u,t,s,r={}
r.a=null
x=B.a([],y.E)
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.a7)(e),++v){u=e[v]
if(r.a==null){t=$.i8Y()
t=t.a.get(u)
if(t==null)t=!1}else t=!1
if(t)r.a=u
else x.push(u)}w=this.a
s=w.a.bC1(d,x)
if(s==null)return null
s.qg(new A.dKi(r,w,d,d.a.b.K(0,"open")))
return s},
$S:z+10}
A.dKi.prototype={
$2(d,e){var x,w=this,v=null,u=w.c,t=u.b.aC(d),s=t.aom(),r=w.a.a
u=B.a([new A.br9(r==null?w.b.a.bC5(u,t,B.dn(B.a([new B.jh(new A.aae(s,v),C.kd,v,v),B.dn(v,v,v,v,v,v,v,v,v,s,"Details")],y.o),v,v,v,v,v,v,v,v,v,v)):r,v),new A.br4(e,v)],y.p)
x=t.jR(0,y.w)
if(x==null)x=C.ad
return new A.aad(w.b.a.f0B(d,u,x),w.d,v)},
$S:z+20}
A.dKk.prototype={
$2(d,e){var x=e.a,w=x.a,v=w instanceof B.fX?w:null
if(v!==d.a)return
if(x.x!=="summary")return
e.fI(0,D.br_)},
$S:z+4}
A.dKh.prototype={
$2(d,e){return new A.aae(this.a.b.aC(d).aom(),null)},
$S:z+16}
A.dKm.prototype={
$1(d){var x,w,v,u,t,s=d.a.b,r=this.a.a,q=s.h(0,"src"),p=r.diZ(q==null?"":q)
q=s.h(0,"alt")
x=p!=null?B.a([new A.aKW(A.bdr(s,"height"),p,A.bdr(s,"width"))],y.h):D.dga
w=s.h(0,"title")
v=new A.brW(q,x,w)
v.dIE(q,x,w)
u=r.f0P(d,v)
if(u==null){t=q==null?w:q
if(t==null)t=""
if(t.length!==0)d.l6(0,new A.Ms(t,d))
return d}$.hWK().j(0,d,u)
return d},
$S:z+2}
A.dKq.prototype={
$2(d,e){var x,w,v=null,u=e.a
switch(u.x){case"ol":case"ul":x=e.wv(A.ciq(e).f4K(A.ciq(e).c+1),y.d)
$.i8Z().j(0,u,x.c)
break
case"li":w=u.a
x=w instanceof B.fX?w:v
if(x===d.a)e.fI(0,A.vS(v,"li",v,v,new A.dKp(this.a,d),v,v,v,v,1000007e9))
break}},
$S:z+4}
A.dKp.prototype={
$2(d,e){var x=this.b
return e.qg(new A.dKo(this.a,x,d,x.wv(A.ciq(x).CI(A.ciq(x).d+1),y.d).d-1))},
$S:z+3}
A.dKo.prototype={
$2(d,e){var x=this
return x.a.dZ8(d,x.b,x.c,e,x.d)},
$S:158}
A.dKt.prototype={
$2(d,e){return e.qg(new A.dKs(this.a,d))},
$S:z+3}
A.dKs.prototype={
$2(d,e){var x=null
return B.bv(e,C.p,x,C.z,x,x,x,x,!1,C.aI)},
$S:157}
A.dKu.prototype={
$2(d,e){var x=this.a.ap(),w=this.b.ap(),v=B.a([],y.p)
if(w!=null)v.push(w)
if(x!=null)v.push(x)
return new A.aoA(v,null)},
$S:z+33}
A.dKy.prototype={
$2(d,e){var x,w,v,u=this,t=null,s=e.b,r=u.b.b.aC(d),q=u.c.b31(r),p=u.e
p=p==null?t:p.fU(r)
if(p==null)p=0
x=r.jR(0,y.w)
if(x==null)x=C.ad
w=u.f.e
v=new A.aWq(new A.bra(q,u.d==="collapse",p,s,x,B.dv(new B.E(w,new A.dKx(d),B.Y(w).i("E<1,zb?>")).fZ(0,A.jnM()),!1,y.m),t),t)
if(isFinite(s))v=B.bv(v,C.p,t,C.z,t,t,t,t,!1,C.aI)
return v},
$S:84}
A.dKx.prototype={
$1(d){return d.$1(this.a)},
$S:z+42}
A.dKz.prototype={
$1(d){return new A.aoB(null,this.a.r,0,1,this.b,null,!0,this.c,null)},
$S:z+17}
A.dKA.prototype={
$1(d){var x,w,v=this,u=null,t=v.c,s=t.a,r=v.d,q=r.b.aC(d),p=v.e.b31(q)
if(p!=null){x=p.gxe()
s=x.n(0,C.Y)?s:new B.F(x,s,u)}r=r.BH("vertical-align")
if(r==null)w=u
else{w=A.uQ(r)
w=w instanceof B.fp?A.oX(w):u}if(w==="baseline")s=new A.bK8(v.f,s,u)
r=v.w.r
x=v.a.a
r=Math.min(v.r,r-x)
t=t.e
t=t==null?u:A.aBu(t,q)
return A.iV4(p,s,r,x,!1,u,v.x,v.f,t)},
$S:z+18}
A.dKv.prototype={
$1(d){var x,w=this.a
if(w==null)w=1
x=y.N
return B.x(["padding",B.b(w)+"px"],x,x)},
$S:3346}
A.dKw.prototype={
$2(d,e){return this.a.b.push(e)},
$S:z+7}
A.hF3.prototype={
$1(d){return d instanceof B.acl},
$S:1156}
A.hF4.prototype={
$1(d){var x=A.ok(d)
return x==null?D.hj:x},
$S:z+8}
A.hF5.prototype={
$1(d){var x=A.ok(d)
return x==null?D.hj:x},
$S:z+8}
A.hF6.prototype={
$1(d){var x=A.ok(d)
return x==null?D.hj:x},
$S:z+8}
A.cQn.prototype={
$2(d,e){var x=this.a,w=x.bgb(d,this.b.aC(d))
if(w!=null)return x.b.bC3(this.c,e,w)
return e},
$S:157}
A.cQo.prototype={
$2$isLast(d,e){return new B.jh(this.c,this.a,this.b,null)},
$1(d){return this.$2$isLast(d,null)},
$C:"$2$isLast",
$R:1,
$D(){return{isLast:null}},
$S:3347}
A.cQm.prototype={
$2$isLast(d,e){var x,w=this.b.aC(d),v=w.jR(0,y.T)
if(v==null)v=D.KS
x=A.irh(this.c,v,!1,e!==!1)
if(x.length===0)return null
v=this.a
return v.b.f13(v.bgb(d,w),w.aom(),x)},
$1(d){return this.$2$isLast(d,null)},
$C:"$2$isLast",
$R:1,
$D(){return{isLast:null}},
$S:3348}
A.cQl.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.b,m=n.aC(d),l=B.a([],y.o)
for(x=o.c,w=x.length,v=!0,u=0;u<x.length;x.length===w||(0,B.a7)(x),++u){t=x[u].$2$isLast(d,v)
if(t!=null){C.d.h6(l,0,t)
v=!1}}x=o.d
w=m.jR(0,y.T)
s=A.irh(x,w==null?D.KS:w,!0,v)
if(s.length===0&&l.length===0){w=B.Y(x).i("aE<1>")
x=B.M(new B.aE(x,new A.cQk(),w),w.i("U.E"))
x.$flags=1
r=x
q=r.length===1&&r[0].a==="\n"?new B.jh(A.i_w(D.ahn,n,B.b(o.a.a.a.x)+"--"+D.ahn.k(0)),C.eD,null,null):null}else{n=o.a
q=n.b.d3g(l,n.bgb(d,m),m.aom(),s)}if(q==null)return C.au
p=m.jR(0,y.a)
if(p==null)p=C.Q
if(q instanceof B.jh&&p===C.Q)return q.e
n=o.a
return n.b.bC5(n.a,m,q)},
$S:157}
A.cQk.prototype={
$1(d){return!d.b},
$S:z+21}
A.cVN.prototype={
$2(d,e){return A.ifX(d,e,this.a,this.b)},
$S:158}
A.cVO.prototype={
$2(d,e){return A.ifX(d,e,this.a,this.b.r)},
$S:158}
A.eD6.prototype={
$1(d){var x=this.a
return x.A(new A.eD5(x,d))},
$S:5}
A.eD5.prototype={
$0(){var x=this.a
x.e=this.b
x.d=!0},
$S:0}
A.cXD.prototype={
$0(){var x,w=this.a.N(y.M)
if(w!=null){x=w.f
w.r.$1(!x)}},
$S:0}
A.eDa.prototype={
$2(d,e){return d.bc(C.d9,e,d.gdA())},
$S:83}
A.eD8.prototype={
$2(d,e){return d.bc(C.cC,e,d.gcX())},
$S:83}
A.eD9.prototype={
$2(d,e){return d.bc(C.dO,e,d.gdN())},
$S:83}
A.eD7.prototype={
$2(d,e){return d.bc(C.d5,e,d.gdz())},
$S:83}
A.hjT.prototype={
$1(d){return d<=0.01},
$S:140}
A.fAH.prototype={
$1(d){var x=d.z,w=x==null?null:x.a4(0,0,this.a.e)
return(w==null?null:isFinite(w))===!0?w:null},
$S:z+23}
A.fAI.prototype={
$1(d){return!(d<=0.01)?d:null},
$S:3349}
A.fAJ.prototype={
$1(d){return d==null?0:d},
$S:3350}
A.fAF.prototype={
$1(d){return isNaN(d)?this.a:d},
$S:8}
A.fAG.prototype={
$1(d){var x=d.b,w=isNaN(x)?this.a:x
return Math.min(w,this.b[d.a])},
$S:3351}
A.fJH.prototype={
$1(d){var x=d.ba
x.toString
return x},
$S:z+24}
A.fJI.prototype={
$2(d,e){return Math.max(d,e)},
$S:154}
A.fJJ.prototype={
$1(d){return this.a.aJ()},
$S:6}
A.fJK.prototype={
$1(d){return this.a.aJ()},
$S:6};(function aliases(){var x=A.ph.prototype
x.dDA=x.v
x.cBK=x.qg
x=A.bKW.prototype
x.dDy=x.q
x.dDz=x.a6a
x=A.b9M.prototype
x.dF5=x.a6a
x=A.bbi.prototype
x.dGr=x.q})();(function installTearOffs(){var x=a._static_1,w=a._instance_1u,v=a._static_2,u=a._instance_2u,t=a.installInstanceTearOff
x(A,"jnu","jhS",25)
w(A.aKE.prototype,"geXw","eXx",19)
x(A,"jo9","j6p",0)
x(A,"joa","j6q",0)
x(A,"job","j6r",0)
x(A,"joc","j6s",0)
x(A,"jod","j6t",0)
x(A,"joe","j6u",0)
x(A,"jof","j6v",0)
x(A,"jog","j6w",0)
x(A,"joh","j6x",0)
x(A,"joi","j6y",0)
x(A,"joj","j6z",0)
x(A,"jok","j6A",0)
x(A,"jol","j6B",0)
x(A,"jom","j6C",0)
x(A,"jon","j6D",0)
x(A,"joo","j6E",0)
x(A,"jop","j6F",0)
x(A,"joq","j6G",0)
x(A,"jor","j6H",0)
x(A,"jos","j6I",0)
x(A,"jot","j6J",0)
x(A,"jou","j6K",0)
v(A,"jov","j6L",3)
x(A,"jow","j6M",0)
x(A,"jox","j6N",0)
x(A,"joy","j6O",0)
x(A,"joz","j6P",0)
x(A,"joA","j6Q",0)
u(A.bKV.prototype,"gd31","d32",11)
x(A,"jns","jiO",12)
v(A,"jnr","j8r",27)
v(A,"jnw","j2E",13)
x(A,"jnS","j2H",2)
x(A,"jnT","j2I",2)
v(A,"jnx","j2J",6)
v(A,"jny","j2K",6)
x(A,"jnz","j2L",5)
x(A,"jnR","j9p",45)
v(A,"jnU","j2N",11)
x(A,"jnV","j2O",2)
v(A,"jnW","j2P",6)
v(A,"jnX","j2Q",30)
v(A,"jo5","jwN",13)
v(A,"jo6","jwO",44)
v(A,"jo7","jwP",32)
v(A,"jo8","jwQ",14)
v(A,"jo4","jkl",34)
v(A,"jnC","j3k",35)
x(A,"jnB","j3j",0)
v(A,"jnA","j3i",36)
x(A,"jnY","j3l",2)
x(A,"jnE","j3n",2)
v(A,"jnD","j3m",7)
x(A,"jnZ","j3o",0)
x(A,"jnF","j3p",0)
v(A,"jnG","j3q",6)
x(A,"jnH","j3r",5)
x(A,"jnI","j3s",0)
x(A,"jnJ","j3t",0)
x(A,"jo_","j3u",2)
x(A,"jo0","j3v",0)
x(A,"jo1","j3w",2)
v(A,"jo2","j3x",4)
x(A,"jnK","j3y",0)
x(A,"jnL","j3z",0)
x(A,"jnM","j3A",37)
v(A,"jnN","j3B",4)
v(A,"jnO","j3C",4)
v(A,"jnP","j3D",4)
x(A,"jnQ","j3E",2)
x(A,"jo3","jan",0)
t(A.bfd.prototype,"gfk4",0,1,null,["$5$curve$duration$jumpCurve$jumpDuration","$1","$3$curve$duration","$2$duration","$3$curve$duration"],["aR7","fk5","d93","fk6","d93"],22,0,0)
u(A.bHG.prototype,"gevv","evw",6)
var s
u(s=A.b8j.prototype,"gev3","ev4",4)
u(s,"get6","et7",7)
u(A.b8k.prototype,"geu4","eu5",4)
w(s=A.axQ.prototype,"gcX","cD",1)
w(s,"gdA","cN",1)
w(s=A.b1q.prototype,"gdA","cN",1)
w(s,"gcX","cD",1)
w(s,"gdN","cE",1)
w(s,"gdz","cH",1)
w(s=A.ayg.prototype,"gdz","cH",1)
w(s,"gcX","cD",1)
w(s,"gdN","cE",1)
w(s,"gdA","cN",1)
w(s=A.b6o.prototype,"gdz","cH",1)
w(s,"gcX","cD",1)
w(s,"gdN","cE",1)
w(s,"gdA","cN",1)
v(A,"NN","je8",38)
v(A,"jwU","jmY",39)
v(A,"ix2","jqh",40)
v(A,"jwV","jqk",15)
v(A,"jwW","jql",14)
v(A,"ix3","jqm",9)
v(A,"ix4","jqn",43)
v(A,"ix5","jqp",31)
v(A,"jwX","jsL",15)
v(A,"jwY","jwR",9)
v(A,"ix6","jy2",29)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(B.x0,[A.hBS,A.hzI,A.cXG,A.cpm,A.cpn,A.cpo,A.dKc,A.eD5,A.cXD])
v(B.A,[A.ca0,A.CK,A.ja,A.amm,A.UL,A.aHe,A.bTq,A.SX,A.tO,A.a8K,A.amo,A.brW,A.aKW,A.fK,A.ap5,A.b1D,A.de8,A.bIm,A.byl,A.bIs,A.bIt,A.auB,A.bIu,A.bKW,A.N6,A.bfb,A.bfd,A.cpq,A.bRi,A.dFS,A.b83,A.fze,A.dFW,A.dG1,A.aYt,A.dG6,A.dGb,A.i1X,A.c9I,A.b84,A.XD,A.dGi,A.dKa,A.dKg,A.dKl,A.dKn,A.b8i,A.dKr,A.bHG,A.b8j,A.b8k,A.cav,A.caw,A.cQj,A.ais,A.drX,A.cH0,A.eJa,A.b8g,A.cat,A.fAv,A.fAw,A.caq,A.fAx])
v(A.CK,[A.bRj,A.Ms,A.a4W,A.MO,A.aUq])
u(A.q_,A.bRj)
v(A.a4W,[A.aBb,A.aBc])
v(B.qA,[A.cH_,A.cZE,A.hBY,A.de9,A.dTo,A.dTp,A.dTq,A.cGZ,A.cFW,A.hBX,A.eiN,A.cpt,A.cpv,A.cpp,A.cF2,A.cF3,A.dFV,A.dFZ,A.dG2,A.dG3,A.dG9,A.dGe,A.dGl,A.dKe,A.dKm,A.dKx,A.dKz,A.dKA,A.dKv,A.hF3,A.hF4,A.hF5,A.hF6,A.cQo,A.cQm,A.cQk,A.eD6,A.hjT,A.fAH,A.fAI,A.fAJ,A.fAF,A.fAG,A.fJH,A.fJJ,A.fJK])
v(B.GQ,[A.a8L,A.a00,A.ait,A.aag])
u(A.aMm,B.U)
v(B.X,[A.ph,A.cdh,A.br4,A.aae,A.br9])
v(B.a0,[A.aoC,A.aad,A.aWq])
v(B.ab,[A.aKE,A.bYb,A.ccS])
v(B.AB,[A.cXH,A.dTn,A.dTm,A.cpr,A.cpu,A.cps,A.cpw,A.dFU,A.dFT,A.dFY,A.dG_,A.dFX,A.dG5,A.dG4,A.dG8,A.dG7,A.hB6,A.hB7,A.dGd,A.dGc,A.dGf,A.dGg,A.dGh,A.dGk,A.dGm,A.dGj,A.dKd,A.dKf,A.dKb,A.dKj,A.dKi,A.dKk,A.dKh,A.dKq,A.dKp,A.dKo,A.dKt,A.dKs,A.dKu,A.dKy,A.dKw,A.cQn,A.cQl,A.cVN,A.cVO,A.eDa,A.eD8,A.eD9,A.eD7,A.fJI])
u(A.fn0,A.ap5)
v(B.dg,[A.azR,A.aHg,A.b1p,A.b9t])
u(A.b9M,A.bKW)
u(A.bKV,A.b9M)
v(B.bKu,[A.eoj,A.euM])
u(A.AG,A.q_)
u(A.a5M,A.aMm)
v(A.ph,[A.aGJ,A.PV])
u(A.ayA,B.aGX)
u(A.cF1,A.drX)
v(B.d_,[A.aml,A.bjZ,A.bqZ,A.bK8,A.ccQ])
v(B.ass,[A.b5C,A.ccR,A.YU])
v(A.cH0,[A.bTs,A.aZU,A.a5m])
u(A.axQ,B.M_)
v(B.ki,[A.br6,A.br8,A.aoA,A.bra])
v(B.ar,[A.cfq,A.cfy,A.b2o,A.chc,A.chv])
u(A.cfr,A.cfq)
u(A.bbi,A.cfr)
u(A.b1q,A.bbi)
v(B.m2,[A.T8,A.Tl,A.yg])
u(A.cfz,A.cfy)
u(A.ayg,A.cfz)
u(A.aaf,B.apy)
u(A.chd,A.chc)
u(A.b6o,A.chd)
u(A.zb,B.lP)
u(A.aoB,A.zb)
u(A.chw,A.chv)
u(A.b8h,A.chw)
x(A.bRj,A.de8)
w(A.b9M,A.cpq)
w(A.cfq,B.bu)
x(A.cfr,B.e8)
w(A.bbi,B.a02)
w(A.cfy,B.bu)
x(A.cfz,B.e8)
w(A.chc,B.bu)
x(A.chd,B.e8)
w(A.chv,B.bu)
x(A.chw,B.e8)})()
B.yi(b.typeUniverse,JSON.parse('{"q_":{"CK":[]},"Ms":{"CK":[]},"a4W":{"CK":[]},"aBb":{"CK":[]},"aBc":{"CK":[]},"MO":{"CK":[]},"bTq":{"aHf":[]},"SX":{"aHf":[]},"aMm":{"U":["1"]},"ph":{"X":[],"n":[]},"aoC":{"a0":[],"n":[]},"azR":{"dg":[],"cX":[],"n":[]},"aKE":{"ab":["aoC"]},"AG":{"q_":[],"CK":[]},"a5M":{"U":["yY"],"U.E":"yY"},"cdh":{"ph":[],"X":[],"n":[]},"ayA":{"d_":[],"bP":[],"n":[]},"aGJ":{"ph":[],"X":[],"n":[]},"aUq":{"CK":[]},"PV":{"ph":[],"X":[],"n":[]},"aHg":{"dg":[],"cX":[],"n":[]},"aml":{"d_":[],"bP":[],"n":[]},"bjZ":{"d_":[],"bP":[],"n":[]},"b5C":{"ar":[],"cZ":["ar"],"ax":[],"bW":[]},"bqZ":{"d_":[],"bP":[],"n":[]},"axQ":{"ar":[],"cZ":["ar"],"ax":[],"bW":[]},"aad":{"a0":[],"n":[]},"aae":{"X":[],"n":[]},"b1p":{"dg":[],"cX":[],"n":[]},"bYb":{"ab":["aad"]},"br4":{"X":[],"n":[]},"br9":{"X":[],"n":[]},"br6":{"ki":[],"bP":[],"n":[]},"b1q":{"e8":["ar","ni"],"ar":[],"bu":["ar","ni"],"ax":[],"bW":[],"bu.1":"ni","e8.1":"ni","e8.0":"ar","bu.0":"ar"},"T8":{"m2":["ar"],"mN":[],"kU":["ar"],"jl":[]},"br8":{"ki":[],"bP":[],"n":[]},"ayg":{"e8":["ar","T8"],"ar":[],"bu":["ar","T8"],"ax":[],"bW":[],"bu.1":"T8","e8.1":"T8","e8.0":"ar","bu.0":"ar"},"aaf":{"bP":[],"n":[]},"b2o":{"ar":[],"ax":[],"bW":[]},"aoA":{"ki":[],"bP":[],"n":[]},"Tl":{"m2":["ar"],"mN":[],"kU":["ar"],"jl":[]},"b6o":{"e8":["ar","Tl"],"ar":[],"bu":["ar","Tl"],"ax":[],"bW":[],"bu.1":"Tl","e8.1":"Tl","e8.0":"ar","bu.0":"ar"},"aoB":{"zb":[],"lP":["yg"],"cX":[],"n":[],"lP.T":"yg"},"zb":{"lP":["yg"],"cX":[],"n":[],"lP.T":"yg"},"yg":{"m2":["ar"],"mN":[],"kU":["ar"],"jl":[]},"bra":{"ki":[],"bP":[],"n":[]},"b8h":{"e8":["ar","yg"],"ar":[],"bu":["ar","yg"],"ax":[],"bW":[],"bu.1":"yg","e8.1":"yg","e8.0":"ar","bu.0":"ar"},"aWq":{"a0":[],"n":[]},"b9t":{"dg":[],"cX":[],"n":[]},"YU":{"ar":[],"cZ":["ar"],"ax":[],"bW":[]},"bK8":{"d_":[],"bP":[],"n":[]},"ccS":{"ab":["aWq"]},"ccQ":{"d_":[],"bP":[],"n":[]},"ccR":{"ar":[],"cZ":["ar"],"ax":[],"bW":[]}}'))
B.i3Z(b.typeUniverse,JSON.parse('{"a4W":1,"aMm":1}'))
var y=(function rtii(){var x=B.a9
return{ff:x("hy<yY>"),k:x("aZ"),eF:x("mN"),r:x("CK"),P:x("q_"),dO:x("UB"),bz:x("a6"),n:x("ag<h,h>"),v:x("pv"),g8:x("amm"),V:x("aHf"),bT:x("tO"),q:x("aHg"),T:x("a00"),eo:x("Pd"),f0:x("Fn"),dk:x("fX"),c8:x("PC<u<yY>>"),gE:x("PC<u<iq>>"),f:x("iq"),L:x("ni"),I:x("Vi"),B:x("tT"),g:x("iA"),eS:x("jH<ab<a0>>"),da:x("aLc"),J:x("J<CK>"),gB:x("J<tO>"),cp:x("J<amo>"),_:x("J<yY>"),A:x("J<iq>"),cY:x("J<iA>"),fY:x("J<jH<ab<a0>>>"),h:x("J<aKW>"),o:x("J<js>"),f5:x("J<mV>"),cI:x("J<VJ>"),cW:x("J<u<iq>>"),gL:x("J<ar>"),U:x("J<h>"),fi:x("J<J4>"),p:x("J<n>"),E:x("J<ph>"),er:x("J<b1D<@>>"),e:x("J<ais>"),an:x("J<yg>"),ad:x("J<caw>"),g7:x("J<b8j>"),dt:x("J<b8k>"),b5:x("J<YU>"),t:x("J<r>"),fL:x("J<zb?(Q)>"),b:x("J<js?(Q{isLast:I?})>"),s:x("J<n?(Q,n)>"),et:x("mV"),C:x("bI<ab<a0>>"),gv:x("u<u<iq>>"),x:x("u<h>"),F:x("u<YU>"),bS:x("K<r,r>"),eI:x("a2f"),fw:x("byl"),fW:x("av"),N:x("h"),es:x("J3"),a:x("Eg"),fs:x("XD"),bR:x("Gt"),w:x("Se"),ap:x("wz"),Z:x("bIm"),j:x("aI"),G:x("bIs"),K:x("bIt"),W:x("auB"),O:x("bIu"),cc:x("aE<h>"),fy:x("ce<xU>"),m:x("n"),c:x("ph"),ev:x("jFH"),co:x("c0<I>"),D:x("bRi"),R:x("aYt"),Q:x("N6"),ek:x("bb<I>"),gl:x("axQ"),M:x("b1p"),u:x("T8"),cx:x("ayg"),cA:x("b2o"),X:x("b5C"),fB:x("azR"),l:x("Tl"),gu:x("b83"),cC:x("c9I"),gk:x("b84"),aV:x("kt<CK>"),gw:x("kt<n>"),H:x("yg"),a8:x("b8h"),d:x("b8i"),ar:x("cav"),eb:x("b9t"),cJ:x("YU"),y:x("I"),i:x("ai"),z:x("@"),S:x("r"),Y:x("Q?"),bn:x("u5?"),aJ:x("av?"),cD:x("ai?"),aT:x("~")}})();(function constants(){var x=a.makeConstList
D.bqw=new A.ja(null,"align",A.joe(),null,null,null,null,null,null,-2999999e9)
D.bqx=new A.ja(null,"div",A.joa(),null,null,null,null,null,null,-2999992e9)
D.bqy=new A.ja(null,"td",A.jo3(),null,null,null,null,null,null,-2999973e9)
D.bqz=new A.ja(null,"h1",A.joo(),null,null,null,null,null,null,-2999989e9)
D.bqA=new A.ja(null,"mark",A.jow(),null,null,null,null,null,null,-2999982e9)
D.bqB=new A.ja(null,"figure",A.jon(),null,null,null,null,null,null,-299999e10)
D.bqC=new A.ja(null,"br",null,A.jnY(),null,null,null,null,null,1000002e9)
D.bqD=new A.ja(null,"display: inline-block",null,A.jnS(),null,null,null,null,null,9000002e9)
D.bqE=new A.ja(null,"sub",A.joy(),null,null,null,null,null,null,-2999977e9)
D.bqF=new A.ja(null,"h4",A.jor(),null,null,null,null,null,null,-2999986e9)
D.bqG=new A.ja(null,"center",A.jok(),null,null,null,null,null,null,-2999994e9)
D.bqH=new A.ja(null,"h6",A.jot(),null,null,null,null,null,null,-2999984e9)
D.bqI=new A.ja(null,"dd",A.jol(),null,null,null,null,null,null,-2999993e9)
D.bqJ=new A.ja(null,"ruby",null,A.jo1(),null,null,null,null,A.jo2(),1000011e9)
D.bqK=new A.ja(null,"strike",A.jof(),null,null,null,null,null,null,-2999978e9)
D.bqL=new A.ja(!1,"sizing (min-width=0)",null,null,A.jnx(),null,null,null,null,5000007e9)
D.bqM=new A.ja(null,"table",A.joc(),null,null,null,null,null,null,-2999972e9)
D.bqN=new A.ja(null,"address",A.joj(),null,null,null,null,null,null,-2999995e9)
D.bqO=new A.ja(null,"rp",A.jo0(),null,null,null,null,null,null,-299998e10)
D.bqP=new A.ja(null,"dir",A.jo9(),null,null,null,null,null,null,-2999998e9)
D.bqQ=new A.ja(null,"script",A.job(),null,null,null,null,null,null,-2999979e9)
D.bqR=new A.ja(null,"hr",A.jou(),null,A.jov(),null,null,null,null,1000005e9)
D.bqS=new A.ja(null,"ins",A.jog(),null,null,null,null,null,null,-2999983e9)
D.bqT=new A.ja(null,"font",A.jnZ(),null,null,null,null,null,null,1000004e9)
D.bqU=new A.ja(null,"h3",A.joq(),null,null,null,null,null,null,-2999987e9)
D.bqV=new A.ja(null,"td",A.joh(),null,null,null,null,null,null,-2999974e9)
D.bqW=new A.ja(null,"dt",A.jom(),null,null,null,null,null,null,-2999991e9)
D.bqX=new A.ja(null,"th",A.joA(),null,null,null,null,null,null,-2999971e9)
D.bqY=new A.ja(null,"display: none",null,A.jnT(),null,null,null,null,null,9000004e9)
D.bqZ=new A.ja(null,"h2",A.jop(),null,null,null,null,null,null,-2999988e9)
D.br_=new A.ja(!0,"summary",null,A.jnE(),null,null,A.jnD(),null,null,9000003e9)
D.br0=new A.ja(null,"table--cellpadding",null,null,null,null,null,null,A.jnO(),1000013e9)
D.br1=new A.ja(null,"q",null,A.jo_(),null,null,null,null,null,100001e10)
D.br2=new A.ja(null,"acronym",A.joi(),null,null,null,null,null,null,-2999996e9)
D.br3=new A.ja(null,"caption",A.jod(),null,null,null,null,null,null,-2999975e9)
D.abI=new A.ja(!1,"sizing",null,null,A.jny(),A.jnz(),null,null,null,5000001e9)
D.br4=new A.ja(!1,"text-align",null,A.jnV(),A.jnW(),null,null,null,null,-2999997e9)
D.br5=new A.ja(null,"p",A.jox(),null,null,null,null,null,null,-2999981e9)
D.br6=new A.ja(!0,"display: block",null,null,null,null,null,null,null,10)
D.br7=new A.ja(null,"h5",A.jos(),null,null,null,null,null,null,-2999985e9)
D.br8=new A.ja(null,"table--border",A.jnK(),null,null,null,null,null,A.jnN(),1000012e9)
D.br9=new A.ja(null,"sup",A.joz(),null,null,null,null,null,null,-2999976e9)
D.bra=new A.ja(null,"table--border--child",A.jnL(),null,null,null,null,null,null,-2999975e9)
D.Io=new A.cF1()
D.Ve=new A.bTq()
D.bug=new A.bTs()
D.Xb=new A.aHe(null,null,null)
D.Xe=new A.a8L(4,"px")
D.hj=new A.tO(0,D.Xe)
D.hX=new A.UL(D.hj,D.hj)
D.bUP=new A.amm(!1,null,null,null,null,null,null,null,D.hX,D.hX,D.hX,D.hX)
D.bUQ=new A.amm(!0,null,null,null,null,null,null,null,D.hX,D.hX,D.hX,D.hX)
D.bUR=new A.a8K(null,null,null,null,null,null)
D.Xc=new A.a8L(0,"auto")
D.Xd=new A.a8L(1,"em")
D.D7=new A.a8L(2,"percentage")
D.bUS=new A.a8L(3,"pt")
D.Xf=new A.tO(100,D.D7)
D.bUT=new A.tO(1,D.Xc)
D.ahn=new A.tO(1,D.Xd)
D.bUU=new A.tO(1,D.Xe)
D.KS=new A.a00(0,"normal")
D.Xg=new A.a00(1,"nowrap")
D.aho=new A.a00(2,"pre")
D.c37=new A.aag(0,"circle")
D.c38=new A.aag(1,"disc")
D.c39=new A.aag(2,"disclosureClosed")
D.c3a=new A.aag(3,"disclosureOpen")
D.c3b=new A.aag(4,"square")
D.cdJ=new A.fK(null,C.aS,C.b8)
D.cYH=x(["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"],y.U)
D.d2F=x(["Courier","monospace"],y.U)
D.azw=x([],y.J)
D.a1l=x([],y._)
D.dg9=x([],y.A)
D.dga=x([],y.h)
D.F8=x([],B.a9("J<N6>"))
D.dkw=x([1000,900,500,400,100,90,50,40,10,9,5,4,1],y.t)
D.e3y={"text-decoration":0}
D.dAS=new B.ag(D.e3y,["underline"],y.n)
D.e5b={"1":0,"2":1,"3":2,"4":3,"5":4,"6":5,"7":6}
D.dUz=new B.ag(D.e5b,["xx-small","x-small","small","medium","large","x-large","xx-large"],y.n)
D.e3O={display:0,"font-family":1,"white-space":2}
D.dZQ=new B.ag(D.e3O,["block","Courier, monospace","pre"],y.n)
D.etj=new A.XD(!1,!1,!1)
D.etk=new A.XD(null,null,!0)
D.etl=new A.XD(null,!0,null)
D.etm=new A.XD(!0,null,null)
D.etX=new A.auB(null)
D.eC7=B.d3("aI")
D.eLm=new A.aYt(-1,C.eW)
D.eM4=new A.SX(C.a4)
D.bge=new A.aZU(100)
D.ePg=new A.b83(C.cv,null,null,C.i3,C.mT)
D.ePh=new A.ait(0,"bottom")
D.ePi=new A.ait(1,"center")
D.ePj=new A.ait(2,"left")
D.ePk=new A.ait(3,"right")
D.ePl=new A.ait(4,"top")
D.ePm=new A.b84(null,null)
D.ePx=new A.b8g(C.cc,C.be)
D.eQd=new A.cdh(null)})();(function staticFields(){$.aBz=0
$.itJ=1
$.aBt=B.D(y.N,y.S)
$.dOB=B.a([],B.a9("J<ca0?>"))
$.ieq=null
$.idx=null
$.idA=null
$.ioR=null
$.ipR=0})();(function lazyInitializers(){var x=a.lazy,w=a.lazyFinal
x($,"jK8","bdN",()=>new A.hBS().$0())
x($,"jIR","iDs",()=>new A.hzI().$0())
w($,"jyW","i7C",()=>B.z2(B.a9("cK")))
w($,"jIF","hWZ",()=>B.z2(B.a9("brW")))
w($,"jHQ","iCI",()=>B.a1("^data:[^;]+;([^,]+),",!0,!1,!1,!1))
w($,"jJt","iDT",()=>B.Ig("fwfh.HtmlWidget"))
w($,"jJu","iDS",()=>B.Ig("fwfh.WidgetFactory"))
w($,"jKh","iEu",()=>B.a1("^[\\u{0009}\\u{000A}\\u{000C}\\u{000D}\\u{0020}]+",!0,!1,!1,!0))
w($,"jKi","iEv",()=>B.a1("[\\u{0009}\\u{000A}\\u{000C}\\u{000D}\\u{0020}]+$",!0,!1,!1,!0))
w($,"jKj","iEw",()=>B.a1("[\\u{0009}\\u{000A}\\u{000C}\\u{000D}\\u{0020}]+",!0,!1,!1,!0))
w($,"jJv","ck5",()=>B.Ig("fwfh.CoreBuildTree"))
w($,"jKp","ck6",()=>B.V1("root"))
w($,"jJw","ajo",()=>B.Ig("fwfh.AnchorRegistry"))
w($,"jIj","iD3",()=>B.z2(B.a9("U<mV>")))
w($,"jIP","i92",()=>B.z2(y.y))
w($,"jEb","i8q",()=>B.z2(y.y))
w($,"jEc","cjT",()=>B.z2(y.P))
w($,"jEe","i8r",()=>B.z2(y.y))
w($,"jEd","cjU",()=>B.z2(y.y))
w($,"jEf","i8s",()=>B.z2(y.y))
w($,"jIh","i8Y",()=>B.z2(y.y))
w($,"jEn","hWK",()=>B.z2(y.m))
w($,"jIi","i8Z",()=>B.z2(y.S))
w($,"jJx","i9b",()=>B.Ig("fwfh.Flattener"))
w($,"jE1","i8n",()=>B.z2(y.S))
w($,"jJy","iDU",()=>B.Ig("fwfh.CssSizing"))})()};
(a=>{a["Q7brSC1OqkJfE9VFpzQJAV0lr6w="]=a.current})($__dart_deferred_initializers__);