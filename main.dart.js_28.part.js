((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
imU(d){var x,w,v="createdAt",u="updatedAt",t=J.L(d),s=A.W(t.h(d,"id"))
if(s==null)s=""
x=A.W(t.h(d,"content"))
if(x==null)x=""
w=t.h(d,v)!=null?A.iM(A.al(t.h(d,v))):new A.ak(Date.now(),0,!1)
return new B.avn(s,x,w,t.h(d,u)!=null?A.iM(A.al(t.h(d,u))):new A.ak(Date.now(),0,!1))},
avn:function avn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
QI:function QI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hOx:function hOx(){},
a2k:function a2k(){this.b=this.x=null},
dfH:function dfH(d){this.a=d},
dfI:function dfI(d,e){this.a=d
this.b=e},
hOv:function hOv(){},
aqJ:function aqJ(d,e){this.a=d
this.b=e
this.c=null},
dfJ:function dfJ(d){this.a=d},
dfK:function dfK(d,e){this.a=d
this.b=e},
iXA(){return new B.a1Z(null)},
a1Z:function a1Z(d){this.a=d},
b2J:function b2J(d,e){this.a=d
this.b=e},
b2K:function b2K(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
eS2:function eS2(d){this.a=d},
eS1:function eS1(d,e){this.a=d
this.b=e},
eRX:function eRX(d){this.a=d},
eRW:function eRW(d){this.a=d},
eS_:function eS_(d){this.a=d},
eRY:function eRY(d){this.a=d},
eRZ:function eRZ(d){this.a=d},
eS0:function eS0(d,e,f){this.a=d
this.b=e
this.c=f},
eRV:function eRV(d,e,f){this.a=d
this.b=e
this.c=f}},D
J=c[1]
A=c[0]
C=c[2]
E=c[30]
B=a.updateHolder(c[5],B)
D=c[29]
B.avn.prototype={
Y(){var x=this
return A.x(["id",x.a,"content",x.b,"createdAt",x.c.c2(),"updatedAt",x.d.c2()],y.S,y.z)},
gaf(d){return this.a}}
B.QI.prototype={
U1(d,e,f,g,h){var x,w=this,v=h==null?w.a:h,u=f==null?w.b:f,t=g==null?w.c:g
if(d)x=null
else x=e==null?w.d:e
return new B.QI(v,u,t,x)},
tT(d,e){return this.U1(d,null,e,null,null)},
jc(d,e){return this.U1(!1,d,e,null,null)},
f8V(d,e){return this.U1(d,null,null,e,null)},
faI(d,e,f){return this.U1(d,null,null,e,f)},
d5X(d,e){return this.U1(!1,d,null,e,null)},
f6z(d){return this.U1(!1,null,null,null,d)},
faH(d,e,f){return this.U1(d,null,e,null,f)}}
B.a2k.prototype={
ap(){A.aj(this).n6(new B.dfH(this))
return D.e2U},
aV3(){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p
var $async$aV3=A.i(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:t.sl(0,t.gl(0).tT(!0,!0))
v=3
x=6
return A.d(A.aj(t).m(0,$.hXy(),y.N).arN(),$async$aV3)
case 6:s=e
t.sl(0,t.gl(0).faH(!0,!1,s))
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
return A.l($async$aV3,w)},
dix(d){var x,w,v,u=this
if(u.gl(0).a!=null){x=u.gl(0).a
x.toString
w=Date.now()
v=new B.avn(x.a,d,x.c,new A.ak(w,0,!1))}else v=new B.avn("temp_"+Date.now(),d,new A.ak(Date.now(),0,!1),new A.ak(Date.now(),0,!1))
u.sl(0,u.gl(0).f6z(v))
x=u.x
if(x!=null)x.an(0)
u.x=A.eb(C.fF,new B.dfI(u,d))},
adX(d){return this.eIU(d)},
eIU(d){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p
var $async$adX=A.i(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.sl(0,t.gl(0).f8V(!0,!0))
v=3
x=6
return A.d(A.aj(t).m(0,$.hXy(),y.N).b1v(d),$async$adX)
case 6:s=f
if(s!=null)t.sl(0,t.gl(0).faI(!0,!1,s))
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
return A.l($async$adX,w)},
atj(){var x=0,w=A.m(y.H),v=this,u
var $async$atj=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:u=v.x
if(u!=null)u.an(0)
x=v.gl(0).a!=null?2:3
break
case 2:x=4
return A.d(v.adX(v.gl(0).a.b),$async$atj)
case 4:case 3:return A.k(null,w)}})
return A.l($async$atj,w)}}
B.aqJ.prototype={
gcRf(){var x=y.S
x=A.D(x,x)
x.j(0,"Content-Type","application/json")
return x},
cRg(d){var x,w=this.b
if(C.c.c4(w,"/"))w=C.c.a3(w,0,w.length-1)
x=C.c.ao(d,"/")?d:"/"+d
return A.bA(w+(!C.c.ao(x,"/api/")?"/api"+x:x),0,null)},
arN(){var x=0,w=A.m(y.g),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$arN=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=A.dC()?C.bF:C.br
x=7
return A.d(A.tF(!0,null,new B.dfJ(s),"notes:read",2,o,y.q),$async$arN)
case 7:r=e
if(r.b===200){o=r
n=y.P
q=n.a(C.L.aR(0,A.dJ(A.dI(o.e)).b3(0,o.w),null))
if(J.t(q,"note")!=null){o=B.imU(n.a(J.t(q,"note")))
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
return A.l($async$arN,w)},
b1v(d){return this.fDC(d)},
fDC(d){var x=0,w=A.m(y.g),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$b1v=A.i(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=A.dC()?C.bF:C.br
x=7
return A.d(A.kw(!0,new B.dfK(s,d),"notes:write",o,y.q),$async$b1v)
case 7:r=f
if(r.b===200){o=r
n=y.P
q=n.a(C.L.aR(0,A.dJ(A.dI(o.e)).b3(0,o.w),null))
n=B.imU(n.a(J.t(q,"note")))
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
return A.l($async$b1v,w)}}
B.a1Z.prototype={
U(){return new B.b2K(new A.aV(C.ao,$.ao()))}}
B.b2J.prototype={
O(){return"_MathFormulaInsertMode."+this.b}}
B.b2K.prototype={
ae(){this.ai()
this.gH().m(0,$.bea().gJ(),y.h).aV3().bP(new B.eS2(this),y.a)},
q(){var x=this.w
x.a1$=$.ao()
x.X$=0
this.aj()},
aGj(){var x=0,w=A.m(y.H),v,u=this,t,s,r,q,p
var $async$aGj=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:r=u.gH()
q=$.bea()
p=r.m(0,q.gJ(),y.h)
p.dix(u.w.a.a)
x=3
return A.d(p.atj(),$async$aGj)
case 3:if(u.c==null){x=1
break}t=r.m(0,q,y.R).d
r=t==null
if(r)t="\u5df2\u4fdd\u5b58"
q=u.c.N(y.I).f
s=A.c(t,null,null,null,null,null,null,null,null,null,null)
q.a0(A.am(null,null,null,r?C.ca:C.c0,null,C.p,null,s,null,C.F,null,null,null,null,null,null,null,null,null,null))
case 1:return A.k(v,w)}})
return A.l($async$aGj,w)},
v(d){var x,w,v,u,t,s=this,r=null,q=A.aO(d),p=A.o(d).ax,o=s.gH().S($.bea(),y.R),n=A.q(d,y.T,y.n).f,m=p.k2,l=n.ga9().gc2i(),k=q.f.w
if(k==null)k=C.b8
x=p.k3
k=A.c(l,r,r,r,r,r,r,k.ar(x,C.U),r,r,r)
l=A.cte(x,r)
w=A.ay(r,r,r,A.y(C.f1,x.I(0.7),r,r,r),r,r,s.gekU(),r,r,r,n.gc7l(),r)
v=A.ay(r,r,r,A.y(C.eN,x.I(0.7),r,r,r),r,r,new B.eS1(s,d),r,r,r,n.gc7p(),r)
u=o.c
t=y.p
x=A.a([A.ay(r,r,r,A.y(C.mb,u?C.ca:x,r,r,r),r,r,s.geIT(),r,r,r,n.gc7o(),r)],t)
if(u)x.push(A.dL(8,new A.N(8,8,A.MM(C.ca,C.r_,2,r),r),r,r,r,8,r,r))
u=q.c.c
k=A.ey(A.a([w,v,new A.c9(C.al,r,C.aT,C.p,x,r),new A.N(u,u,r,r)],t),r,r,!0,!0,m,r,1,r,r,0,!1,r,!1,r,r,l,r,!0,r,r,r,C.a4,r,k,r,r,r,1,r,!0)
return A.cF(k,m,o.b?C.dh:A.imJ(s.w,!1,r,r),r,r,r,r,!1,r,r,r)},
acM(){return this.ekV()},
ekV(){var x=0,w=A.m(y.H),v,u=this,t,s,r,q,p,o,n
var $async$acM=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:n={}
n.a=null
t=u.c
t.toString
s=y.z
x=3
return A.d(A.ae(t,!1).j5(A.kJ(new B.eRX(n),null,s),s),$async$acM)
case 3:if(u.c==null||n.a==null){x=1
break}t=n.a
t.toString
x=4
return A.d(u.eNJ(t),$async$acM)
case 4:r=e
if(u.c==null||r==null){x=1
break}n=n.a
n="\n"+(r===D.bh4?"[[formula:"+n.a+"|"+n.b+"]]":"$$"+n.e+"$$")+"\n"
t=u.w
s=t.a
q=s.b
p=q.a
p=p>=0?p:s.a.length
o=q.b
o=o>=0?o:s.a.length
t.cS(0,new A.bs(C.c.kJ(s.a,p,o,n),A.l1(C.ah,p+n.length),C.ai))
u.gH().m(0,$.bea().gJ(),y.h).dix(t.a.a)
n=u.c.N(y.I).f
t=u.c
t.toString
n.a0(A.am(null,null,null,null,null,C.p,null,A.c(A.q(t,y.T,y.n).f.gc7k(),null,null,null,null,null,null,null,null,null,null),null,C.F,null,null,null,null,null,null,null,null,null,null))
case 1:return A.k(v,w)}})
return A.l($async$acM,w)},
eNJ(d){var x=null,w=this.c
w.toString
return A.fm(x,x,new B.eS_(d),x,x,w,x,!0,!0,!1,x,x,!0,!1,!1,y.f)},
eOO(d){var x=null,w=A.aO(d),v=A.o(d).ax
A.fm(v.k2,x,new B.eS0(this,w,v),x,x,d,x,!0,!0,!1,x,new A.cr(A.OD(C.aE,w.a.a.f.a),C.E),x,!1,!1,y.z)},
aas(d,e,f,g){var x,w=null,v=A.o(d),u=A.y(g,C.ca,w,w,w)
v=v.ax.k3
x=A.c(e,w,w,w,w,w,w,A.aD(w,w,v,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.bD(!1,w,w,w,!0,w,w,w,!0,w,w,u,w,w,w,w,w,new B.eRV(this,f,d),!1,w,w,w,w,A.c(f,w,w,1,C.Z,w,w,A.aD(w,w,v.I(0.6),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,x,w,w,w)}}
var z=a.updateTypes(["aa<~>()","aqJ(aQ)","QI()","a2k()"])
B.hOx.prototype={
$1(d){var x=A.lF()
if(x==null)x=new A.kf(A.a([],y.O))
return new B.aqJ(x,"https://api.chronorise.com")},
$S:z+1}
B.dfH.prototype={
$0(){var x=this.a,w=x.x
if(w!=null)w.an(0)
A.aj(x).m(0,$.hXy(),y.N).a.aW(0)},
$S:0}
B.dfI.prototype={
$0(){this.a.adX(this.b)},
$S:0}
B.hOv.prototype={
$0(){return new B.a2k()},
$S:z+3}
B.dfJ.prototype={
$0(){var x=this.a
return x.a.h3("GET",x.cRg("/home/notes/latest"),x.gcRf())},
$S:15}
B.dfK.prototype={
$0(){var x=this.a,w=y.S
return x.a.dn("PUT",x.cRg("/home/notes"),x.gcRf(),C.L.bt(A.x(["content",this.b],w,w),null),null)},
$S:15}
B.eS2.prototype={
$1(d){var x,w=this.a
if(w.c==null)return
x=w.gH().m(0,$.bea(),y.R).a
x=x==null?null:x.b
if(x==null)x=""
w.w.sbq(0,x)},
$S:96}
B.eS1.prototype={
$0(){this.a.eOO(this.b)},
$S:0}
B.eRX.prototype={
$1(d){return new A.Vj(!0,new B.eRW(this.a),null)},
$S:1159}
B.eRW.prototype={
$1(d){return this.a.a=d},
$S:361}
B.eS_.prototype={
$1(d){var x=null,w=y.T,v=y.n,u=A.c(A.q(d,w,v).f.gc7m(),x,x,x,x,x,x,x,x,x,x),t=this.a
u=A.bD(!1,x,x,x,!0,x,x,x,!0,x,x,C.w2,x,x,x,x,x,new B.eRY(d),!1,x,x,x,x,A.c(t.b,x,x,x,x,x,x,x,x,x,x),x,x,u,x,x,x)
v=A.c(A.q(d,w,v).f.gc7n(),x,x,x,x,x,x,x,x,x,x)
return new A.dH(!0,!0,!0,!0,C.Y,!1,A.B(A.a([u,A.bD(!1,x,x,x,!0,x,x,x,!0,x,x,E.anl,x,x,x,x,x,new B.eRZ(d),!1,x,x,x,x,A.c(t.e,x,x,x,x,x,x,x,x,x,x),x,x,v,x,x,x)],y.p),C.l,x,C.i,C.D,0,x,C.n),x)},
$S:81}
B.eRY.prototype={
$0(){return A.ae(this.a,!1).aa(D.bh4)},
$S:0}
B.eRZ.prototype={
$0(){return A.ae(this.a,!1).aa(D.eNS)},
$S:0}
B.eS0.prototype={
$1(d){var x,w=null,v=this.b.c,u=v.f
v=v.d
x=this.a
return new A.F(new A.a_(u,u,u,u),A.B(A.a([A.c(A.ac($.aG(),y.T,y.n).ga9().gbYI(),w,w,w,w,w,w,A.aD(w,w,this.c.k3,w,w,w,w,w,w,w,w,18,w,w,C.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),new A.N(v,v,w,w),x.aas(d,"\u4e8c\u6b21\u516c\u5f0f","x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",C.f1),x.aas(d,"\u79ef\u5206","\\int_{a}^{b} f(x) \\, dx",C.jh),x.aas(d,"\u6c42\u548c","\\sum_{i=1}^{n} x_i",D.c5a),x.aas(d,"\u77e9\u9635","\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}",C.Mg),x.aas(d,"\u6781\u9650","\\lim_{x \\to \\infty} f(x)",C.dG),new A.N(v,v,w,w)],y.p),C.aJ,w,C.i,C.D,0,w,C.n),w)},
$S:200}
B.eRV.prototype={
$0(){var x=this.a.w
x.sbq(0,x.a.a+("\n"+this.b+"\n"))
A.ae(this.c,!1).aa(null)},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.a2k.prototype,"gbx","ap",2)
var w
x(w=B.b2K.prototype,"geIT","aGj",0)
x(w,"gekU","acM",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.A,[B.avn,B.QI,B.aqJ])
x(A.qA,[B.hOx,B.eS2,B.eRX,B.eRW,B.eS_,B.eS0])
w(B.a2k,A.jt)
x(A.x0,[B.dfH,B.dfI,B.hOv,B.dfJ,B.dfK,B.eS1,B.eRY,B.eRZ,B.eRV])
w(B.a1Z,A.CT)
w(B.b2J,A.GQ)
w(B.b2K,A.AD)})()
A.yi(b.typeUniverse,JSON.parse('{"a2k":{"jt":["QI"],"bk":["QI","QI"]},"a1Z":{"a0":[],"n":[]},"b2K":{"ab":["a1Z"]}}'))
var y=(function rtii(){var x=A.a9
return{T:x("nd"),O:x("J<bf>"),p:x("J<n>"),P:x("K<h,@>"),h:x("a2k"),N:x("aqJ"),R:x("QI"),a:x("cq"),q:x("vk"),S:x("h"),n:x("lW"),f:x("b2J"),I:x("EF"),z:x("@"),g:x("avn?"),H:x("~")}})();(function constants(){D.c5a=new A.aX(59392,"MaterialSymbolsOutlined","material_symbols_icons",!1)
D.e2U=new B.QI(null,!1,!1,null)
D.bh4=new B.b2J(0,"reference")
D.eNS=new B.b2J(1,"latex")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"jTA","hXy",()=>A.dM(new B.hOx(),null,!1,null,null,y.N))
x($,"jTy","bea",()=>A.p6(new B.hOv(),null,!1,null,null,y.h,y.R))})()};
(a=>{a["RjcuMWZ9whsLM7kBRT241euLSco="]=a.current})($__dart_deferred_initializers__);