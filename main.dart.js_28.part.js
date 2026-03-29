((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
in2(d){var x,w,v="createdAt",u="updatedAt",t=J.L(d),s=A.W(t.h(d,"id"))
if(s==null)s=""
x=A.W(t.h(d,"content"))
if(x==null)x=""
w=t.h(d,v)!=null?A.iM(A.al(t.h(d,v))):new A.ak(Date.now(),0,!1)
return new B.avo(s,x,w,t.h(d,u)!=null?A.iM(A.al(t.h(d,u))):new A.ak(Date.now(),0,!1))},
avo:function avo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
QJ:function QJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hOG:function hOG(){},
a2l:function a2l(){this.b=this.x=null},
dfN:function dfN(d){this.a=d},
dfO:function dfO(d,e){this.a=d
this.b=e},
hOE:function hOE(){},
aqK:function aqK(d,e){this.a=d
this.b=e
this.c=null},
dfP:function dfP(d){this.a=d},
dfQ:function dfQ(d,e){this.a=d
this.b=e},
iXJ(){return new B.a2_(null)},
a2_:function a2_(d){this.a=d},
b2K:function b2K(d,e){this.a=d
this.b=e},
b2L:function b2L(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
eSa:function eSa(d){this.a=d},
eS9:function eS9(d,e){this.a=d
this.b=e},
eS4:function eS4(d){this.a=d},
eS3:function eS3(d){this.a=d},
eS7:function eS7(d){this.a=d},
eS5:function eS5(d){this.a=d},
eS6:function eS6(d){this.a=d},
eS8:function eS8(d,e,f){this.a=d
this.b=e
this.c=f},
eS2:function eS2(d,e,f){this.a=d
this.b=e
this.c=f}},D
J=c[1]
A=c[0]
C=c[2]
E=c[30]
B=a.updateHolder(c[5],B)
D=c[29]
B.avo.prototype={
Y(){var x=this
return A.x(["id",x.a,"content",x.b,"createdAt",x.c.c2(),"updatedAt",x.d.c2()],y.S,y.z)},
gaf(d){return this.a}}
B.QJ.prototype={
U1(d,e,f,g,h){var x,w=this,v=h==null?w.a:h,u=f==null?w.b:f,t=g==null?w.c:g
if(d)x=null
else x=e==null?w.d:e
return new B.QJ(v,u,t,x)},
tT(d,e){return this.U1(d,null,e,null,null)},
jc(d,e){return this.U1(!1,d,e,null,null)},
f8X(d,e){return this.U1(d,null,null,e,null)},
faJ(d,e,f){return this.U1(d,null,null,e,f)},
d5X(d,e){return this.U1(!1,d,null,e,null)},
f6B(d){return this.U1(!1,null,null,null,d)},
faI(d,e,f){return this.U1(d,null,e,null,f)}}
B.a2l.prototype={
ap(){A.aj(this).n6(new B.dfN(this))
return D.e2V},
aV6(){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p
var $async$aV6=A.i(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:t.sl(0,t.gl(0).tT(!0,!0))
v=3
x=6
return A.d(A.aj(t).m(0,$.hXH(),y.N).arP(),$async$aV6)
case 6:s=e
t.sl(0,t.gl(0).faI(!0,!1,s))
v=1
x=5
break
case 3:v=2
p=u.pop()
r=A.T(p)
$.a3.$1("Failed to load note: "+A.b(r))
t.sl(0,t.gl(0).jc("Failed to load note: "+A.b(r),!1))
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$aV6,w)},
diy(d){var x,w,v,u=this
if(u.gl(0).a!=null){x=u.gl(0).a
x.toString
w=Date.now()
v=new B.avo(x.a,d,x.c,new A.ak(w,0,!1))}else v=new B.avo("temp_"+Date.now(),d,new A.ak(Date.now(),0,!1),new A.ak(Date.now(),0,!1))
u.sl(0,u.gl(0).f6B(v))
x=u.x
if(x!=null)x.an(0)
u.x=A.eb(C.fF,new B.dfO(u,d))},
adZ(d){return this.eIV(d)},
eIV(d){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p
var $async$adZ=A.i(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.sl(0,t.gl(0).f8X(!0,!0))
v=3
x=6
return A.d(A.aj(t).m(0,$.hXH(),y.N).b1y(d),$async$adZ)
case 6:s=f
if(s!=null)t.sl(0,t.gl(0).faJ(!0,!1,s))
else t.sl(0,t.gl(0).d5X("Failed to save note",!1))
v=1
x=5
break
case 3:v=2
p=u.pop()
r=A.T(p)
$.a3.$1("Error saving note: "+A.b(r))
t.sl(0,t.gl(0).d5X("Error saving note: "+A.b(r),!1))
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$adZ,w)},
atl(){var x=0,w=A.m(y.H),v=this,u
var $async$atl=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:u=v.x
if(u!=null)u.an(0)
x=v.gl(0).a!=null?2:3
break
case 2:x=4
return A.d(v.adZ(v.gl(0).a.b),$async$atl)
case 4:case 3:return A.k(null,w)}})
return A.l($async$atl,w)}}
B.aqK.prototype={
gcRf(){var x=y.S
x=A.D(x,x)
x.j(0,"Content-Type","application/json")
return x},
cRg(d){var x,w=this.b
if(C.c.c4(w,"/"))w=C.c.a3(w,0,w.length-1)
x=C.c.ao(d,"/")?d:"/"+d
return A.bA(w+(!C.c.ao(x,"/api/")?"/api"+x:x),0,null)},
arP(){var x=0,w=A.m(y.g),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$arP=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=A.dC()?C.bF:C.br
x=7
return A.d(A.tF(!0,null,new B.dfP(s),"notes:read",2,o,y.q),$async$arP)
case 7:r=e
if(r.b===200){o=r
n=y.P
q=n.a(C.L.aR(0,A.dJ(A.dI(o.e)).b3(0,o.w),null))
if(J.t(q,"note")!=null){o=B.in2(n.a(J.t(q,"note")))
v=o
x=1
break}v=null
x=1
break}$.a3.$1("Failed to fetch note: "+r.b)
v=null
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.T(l)
$.a3.$1("Error fetching note: "+A.b(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$arP,w)},
b1y(d){return this.fDD(d)},
fDD(d){var x=0,w=A.m(y.g),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$b1y=A.i(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=A.dC()?C.bF:C.br
x=7
return A.d(A.kw(!0,new B.dfQ(s,d),"notes:write",o,y.q),$async$b1y)
case 7:r=f
if(r.b===200){o=r
n=y.P
q=n.a(C.L.aR(0,A.dJ(A.dI(o.e)).b3(0,o.w),null))
n=B.in2(n.a(J.t(q,"note")))
v=n
x=1
break}$.a3.$1("Failed to update note: "+r.b)
v=null
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.T(l)
$.a3.$1("Error updating note: "+A.b(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$b1y,w)}}
B.a2_.prototype={
U(){return new B.b2L(new A.aV(C.ao,$.ao()))}}
B.b2K.prototype={
O(){return"_MathFormulaInsertMode."+this.b}}
B.b2L.prototype={
ae(){this.ai()
this.gH().m(0,$.beb().gJ(),y.h).aV6().bP(new B.eSa(this),y.a)},
q(){var x=this.w
x.a1$=$.ao()
x.X$=0
this.aj()},
aGn(){var x=0,w=A.m(y.H),v,u=this,t,s,r,q,p
var $async$aGn=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:r=u.gH()
q=$.beb()
p=r.m(0,q.gJ(),y.h)
p.diy(u.w.a.a)
x=3
return A.d(p.atl(),$async$aGn)
case 3:if(u.c==null){x=1
break}t=r.m(0,q,y.R).d
r=t==null
if(r)t="\u5df2\u4fdd\u5b58"
q=u.c.N(y.I).f
s=A.c(t,null,null,null,null,null,null,null,null,null,null)
q.a0(A.am(null,null,null,r?C.ca:C.c0,null,C.p,null,s,null,C.F,null,null,null,null,null,null,null,null,null,null))
case 1:return A.k(v,w)}})
return A.l($async$aGn,w)},
v(d){var x,w,v,u,t,s=this,r=null,q=A.aO(d),p=A.o(d).ax,o=s.gH().S($.beb(),y.R),n=A.q(d,y.T,y.n).f,m=p.k2,l=n.ga9().gc2k(),k=q.f.w
if(k==null)k=C.b8
x=p.k3
k=A.c(l,r,r,r,r,r,r,k.ar(x,C.U),r,r,r)
l=A.cth(x,r)
w=A.ay(r,r,r,A.y(C.f1,x.I(0.7),r,r,r),r,r,s.gekV(),r,r,r,n.gc7n(),r)
v=A.ay(r,r,r,A.y(C.eN,x.I(0.7),r,r,r),r,r,new B.eS9(s,d),r,r,r,n.gc7r(),r)
u=o.c
t=y.p
x=A.a([A.ay(r,r,r,A.y(C.mb,u?C.ca:x,r,r,r),r,r,s.geIU(),r,r,r,n.gc7q(),r)],t)
if(u)x.push(A.dL(8,new A.N(8,8,A.MN(C.ca,C.r0,2,r),r),r,r,r,8,r,r))
u=q.c.c
k=A.ey(A.a([w,v,new A.c9(C.ah,r,C.aT,C.p,x,r),new A.N(u,u,r,r)],t),r,r,!0,!0,m,r,1,r,r,0,!1,r,!1,r,r,l,r,!0,r,r,r,C.a4,r,k,r,r,r,1,r,!0)
return A.cF(k,m,o.b?C.dh:A.imS(s.w,!1,r,r),r,r,r,r,!1,r,r,r)},
acO(){return this.ekW()},
ekW(){var x=0,w=A.m(y.H),v,u=this,t,s,r,q,p,o,n
var $async$acO=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:n={}
n.a=null
t=u.c
t.toString
s=y.z
x=3
return A.d(A.ae(t,!1).j5(A.kJ(new B.eS4(n),null,s),s),$async$acO)
case 3:if(u.c==null||n.a==null){x=1
break}t=n.a
t.toString
x=4
return A.d(u.eNL(t),$async$acO)
case 4:r=e
if(u.c==null||r==null){x=1
break}n=n.a
n="\n"+(r===D.bh5?"[[formula:"+n.a+"|"+n.b+"]]":"$$"+n.e+"$$")+"\n"
t=u.w
s=t.a
q=s.b
p=q.a
p=p>=0?p:s.a.length
o=q.b
o=o>=0?o:s.a.length
t.cS(0,new A.bs(C.c.kJ(s.a,p,o,n),A.l1(C.ai,p+n.length),C.aj))
u.gH().m(0,$.beb().gJ(),y.h).diy(t.a.a)
n=u.c.N(y.I).f
t=u.c
t.toString
n.a0(A.am(null,null,null,null,null,C.p,null,A.c(A.q(t,y.T,y.n).f.gc7m(),null,null,null,null,null,null,null,null,null,null),null,C.F,null,null,null,null,null,null,null,null,null,null))
case 1:return A.k(v,w)}})
return A.l($async$acO,w)},
eNL(d){var x=null,w=this.c
w.toString
return A.fm(x,x,new B.eS7(d),x,x,w,x,!0,!0,!1,x,x,!0,!1,!1,y.f)},
eOQ(d){var x=null,w=A.aO(d),v=A.o(d).ax
A.fm(v.k2,x,new B.eS8(this,w,v),x,x,d,x,!0,!0,!1,x,new A.cr(A.OE(C.aE,w.a.a.f.a),C.E),x,!1,!1,y.z)},
aau(d,e,f,g){var x,w=null,v=A.o(d),u=A.y(g,C.ca,w,w,w)
v=v.ax.k3
x=A.c(e,w,w,w,w,w,w,A.aD(w,w,v,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.bD(!1,w,w,w,!0,w,w,w,!0,w,w,u,w,w,w,w,w,new B.eS2(this,f,d),!1,w,w,w,w,A.c(f,w,w,1,C.Z,w,w,A.aD(w,w,v.I(0.6),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,x,w,w,w)}}
var z=a.updateTypes(["aa<~>()","aqK(aQ)","QJ()","a2l()"])
B.hOG.prototype={
$1(d){var x=A.lF()
if(x==null)x=new A.kf(A.a([],y.O))
return new B.aqK(x,"https://api.chronorise.com")},
$S:z+1}
B.dfN.prototype={
$0(){var x=this.a,w=x.x
if(w!=null)w.an(0)
A.aj(x).m(0,$.hXH(),y.N).a.aW(0)},
$S:0}
B.dfO.prototype={
$0(){this.a.adZ(this.b)},
$S:0}
B.hOE.prototype={
$0(){return new B.a2l()},
$S:z+3}
B.dfP.prototype={
$0(){var x=this.a
return x.a.h3("GET",x.cRg("/home/notes/latest"),x.gcRf())},
$S:15}
B.dfQ.prototype={
$0(){var x=this.a,w=y.S
return x.a.dn("PUT",x.cRg("/home/notes"),x.gcRf(),C.L.bt(A.x(["content",this.b],w,w),null),null)},
$S:15}
B.eSa.prototype={
$1(d){var x,w=this.a
if(w.c==null)return
x=w.gH().m(0,$.beb(),y.R).a
x=x==null?null:x.b
if(x==null)x=""
w.w.sbq(0,x)},
$S:98}
B.eS9.prototype={
$0(){this.a.eOQ(this.b)},
$S:0}
B.eS4.prototype={
$1(d){return new A.Vk(!0,new B.eS3(this.a),null)},
$S:1160}
B.eS3.prototype={
$1(d){return this.a.a=d},
$S:373}
B.eS7.prototype={
$1(d){var x=null,w=y.T,v=y.n,u=A.c(A.q(d,w,v).f.gc7o(),x,x,x,x,x,x,x,x,x,x),t=this.a
u=A.bD(!1,x,x,x,!0,x,x,x,!0,x,x,C.w3,x,x,x,x,x,new B.eS5(d),!1,x,x,x,x,A.c(t.b,x,x,x,x,x,x,x,x,x,x),x,x,u,x,x,x)
v=A.c(A.q(d,w,v).f.gc7p(),x,x,x,x,x,x,x,x,x,x)
return new A.dH(!0,!0,!0,!0,C.Y,!1,A.B(A.a([u,A.bD(!1,x,x,x,!0,x,x,x,!0,x,x,E.anm,x,x,x,x,x,new B.eS6(d),!1,x,x,x,x,A.c(t.e,x,x,x,x,x,x,x,x,x,x),x,x,v,x,x,x)],y.p),C.l,x,C.i,C.D,0,x,C.n),x)},
$S:81}
B.eS5.prototype={
$0(){return A.ae(this.a,!1).aa(D.bh5)},
$S:0}
B.eS6.prototype={
$0(){return A.ae(this.a,!1).aa(D.eNU)},
$S:0}
B.eS8.prototype={
$1(d){var x,w=null,v=this.b.c,u=v.f
v=v.d
x=this.a
return new A.F(new A.a_(u,u,u,u),A.B(A.a([A.c(A.ac($.aG(),y.T,y.n).ga9().gbYK(),w,w,w,w,w,w,A.aD(w,w,this.c.k3,w,w,w,w,w,w,w,w,18,w,w,C.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),new A.N(v,v,w,w),x.aau(d,"\u4e8c\u6b21\u516c\u5f0f","x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",C.f1),x.aau(d,"\u79ef\u5206","\\int_{a}^{b} f(x) \\, dx",C.jh),x.aau(d,"\u6c42\u548c","\\sum_{i=1}^{n} x_i",D.c5b),x.aau(d,"\u77e9\u9635","\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}",C.Mh),x.aau(d,"\u6781\u9650","\\lim_{x \\to \\infty} f(x)",C.dG),new A.N(v,v,w,w)],y.p),C.aJ,w,C.i,C.D,0,w,C.n),w)},
$S:186}
B.eS2.prototype={
$0(){var x=this.a.w
x.sbq(0,x.a.a+("\n"+this.b+"\n"))
A.ae(this.c,!1).aa(null)},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.a2l.prototype,"gbx","ap",2)
var w
x(w=B.b2L.prototype,"geIU","aGn",0)
x(w,"gekV","acO",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.A,[B.avo,B.QJ,B.aqK])
x(A.qA,[B.hOG,B.eSa,B.eS4,B.eS3,B.eS7,B.eS8])
w(B.a2l,A.jt)
x(A.x0,[B.dfN,B.dfO,B.hOE,B.dfP,B.dfQ,B.eS9,B.eS5,B.eS6,B.eS2])
w(B.a2_,A.CT)
w(B.b2K,A.GQ)
w(B.b2L,A.AD)})()
A.yi(b.typeUniverse,JSON.parse('{"a2l":{"jt":["QJ"],"bk":["QJ","QJ"]},"a2_":{"a0":[],"n":[]},"b2L":{"ab":["a2_"]}}'))
var y=(function rtii(){var x=A.a9
return{T:x("nd"),O:x("J<bf>"),p:x("J<n>"),P:x("K<h,@>"),h:x("a2l"),N:x("aqK"),R:x("QJ"),a:x("cq"),q:x("vk"),S:x("h"),n:x("lW"),f:x("b2K"),I:x("EF"),z:x("@"),g:x("avo?"),H:x("~")}})();(function constants(){D.c5b=new A.aX(59392,"MaterialSymbolsOutlined","material_symbols_icons",!1)
D.e2V=new B.QJ(null,!1,!1,null)
D.bh5=new B.b2K(0,"reference")
D.eNU=new B.b2K(1,"latex")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"jTK","hXH",()=>A.dM(new B.hOG(),null,!1,null,null,y.N))
x($,"jTI","beb",()=>A.p6(new B.hOE(),null,!1,null,null,y.h,y.R))})()};
(a=>{a["5NhGf0THbHeq12Hq6nmFYbKCOZI="]=a.current})($__dart_deferred_initializers__);