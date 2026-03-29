((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={IK:function IK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=h
_.r=i
_.y=j},Rj:function Rj(){this.x=!1
this.b=null},dpt:function dpt(){},dpu:function dpu(d){this.a=d},dpr:function dpr(d){this.a=d},dps:function dps(){},bC1:function bC1(d,e,f,g,h,i,j){var _=this
_.f=d
_.r=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j},bOv:function bOv(){},hVP:function hVP(){},hVO:function hVO(d){this.a=d},av2:function av2(d){this.a=d
this.c=this.b=!1},dPW:function dPW(d){this.a=d},dPX:function dPX(d){this.a=d},dPY:function dPY(d){this.a=d},
jmB(d){var w,v,u,t,s,r,q,p,o=A.a([],x.s)
o.push(d.gd9s()>0?"\u5df2\u6267\u884c\u64cd\u4f5c\uff1a\u6210\u529f "+d.gcAB()+"\uff0c\u5931\u8d25 "+d.gd9s()+"\u3002":"\u5df2\u6267\u884c\u64cd\u4f5c\uff1a\u5171 "+d.gcAB()+" \u9879\uff0c\u5168\u90e8\u6210\u529f\u3002")
for(w=d.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.a7)(w),++u){t=w[u]
s=t.b?"[OK]":"[ERR]"
r=t.a
q=D.tk.h(0,r)
p=q==null?null:q.c
r=p==null?r:p
o.push(s+" "+r+"\uff1a"+t.c)}return C.d.au(o,"\n")},
ajX:function ajX(d){this.a=d},
cmr:function cmr(){},
cms:function cms(d){this.a=d},
cmq:function cmq(d){this.a=d},
cmo:function cmo(d){this.a=d},
cmp:function cmp(){},
cmw:function cmw(d){this.a=d},
cmx:function cmx(d){this.a=d},
cmy:function cmy(d){this.a=d},
cmz:function cmz(d){this.a=d},
cmt:function cmt(d,e){this.a=d
this.b=e},
cmu:function cmu(d){this.a=d},
cmv:function cmv(d){this.a=d},
cmm:function cmm(d){this.a=d},
cmn:function cmn(){},
cmA:function cmA(){},
cmB:function cmB(){},
hFy:function hFy(){},
iO4(d){var w,v,u,t,s,r,q,p=d.e
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,A.a7)(w),++u){t=w[u]
s=D.tk.h(0,t.a)
r=s==null?null:s.b
if(r==null)r=D.iI
q=t.d
if(r.ga5T()>=q.ga5T())q=r
if(q.ga5T()>p.ga5T())p=q}return p},
iO5(d){if(d.d)return!0
return B.iO4(d).ga5T()>=D.nO.ga5T()},
mK:function mK(d,e){this.b=d
this.c=e},
ibt(d){var w=d==null?null:C.c.p(J.w(d)).toLowerCase()
switch(w==null?"":w){case"high":return D.HG
case"medium":return D.nO
default:return D.iI}},
iO2(d,e){var w,v,u,t=d.h(0,"actionId"),s=C.c.p(J.w(t==null?"":t))
t=d.h(0,"actionInstanceId")
J.w(t==null?"act_"+Date.now()+"_"+e:t)
t=d.h(0,"idempotencyKey")
w=J.w(t==null?"idem_"+Date.now()+"_"+e:t)
v=d.h(0,"args")
u=x.f.b(v)?J.eF(v,new B.cmC(),x.N,x.z):C.bt
return new B.ajY(s,w,B.ibt(d.h(0,"risk")),u)},
iO3(d){var w,v,u,t,s,r,q,p,o=J.L(d),n=x.g.a(o.h(d,"actions"))
if(n==null)n=C.aS
w=A.a([],x.bK)
for(v=J.L(n),u=x.N,t=x.z,s=x.f,r=0;r<v.gE(n);++r){q=v.h(n,r)
if(!s.b(q))continue
p=B.iO2(J.eF(q,new B.cmE(),u,t),r+1)
if(p.a.length===0)continue
w.push(p)}v=o.h(d,"schemaVersion")
C.c.p(J.w(v==null?"":v))
v=o.h(d,"planId")
v=C.c.p(J.w(v==null?"":v))
u=o.h(d,"assistantMessage")
u=C.c.p(J.w(u==null?"":u))
t=J.C(o.h(d,"requiresConfirmation"),!0)
s=B.ibt(o.h(d,"riskSummary"))
o=o.h(d,"onError")
return new B.cmD(v,u,t,s,C.c.p(J.w(o==null?"stop":o)),w)},
aDo:function aDo(d,e){this.a=d
this.b=e},
ajY:function ajY(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
cmC:function cmC(){},
cmD:function cmD(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
cmE:function cmE(){},
fS:function fS(d,e,f){this.a=d
this.b=e
this.c=f},
beT:function beT(d){this.b=d},
cnr:function cnr(){},
cnq:function cnq(){},
ru:function ru(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
j2y(d){var w,v,u,t,s,r,q,p,o=null,n=B.j2w(d)
if(n==null)return o
try{w=C.L.aR(0,n,o)
if(!x.P.b(w))return o
q=J.t(w,"answer")
v=q==null?J.t(w,"response"):q
u=typeof v=="string"?v:o
if(u==null||C.c.p(u).length===0)return o
t=B.j2x(J.t(w,"citations"))
if(t==null)return o
return new B.dEi(u,t)}catch(p){s=A.T(p)
r=A.b_(p)
return o}},
j2x(d){var w,v,u,t,s
if(d==null)return A.a([],x.t)
w=d
if(typeof d=="string"){v=C.c.p(d)
if(J.an(v)===0)return A.a([],x.t)
try{w=C.L.aR(0,v,null)}catch(s){u=A.T(s)
t=A.b_(s)
return null}}if(!x.j.b(w))return null
return J.kd(w,x.f).bD(0,new B.dEk(),x.P).cd(0,!1)},
j2w(d){var w,v,u,t,s=C.c.p(d)
if(s.length===0)return null
if(C.c.ao(s,"```")){w=A.a1("```(?:json)?\\s*([\\s\\S]*?)\\s*```",!1,!1,!1,!1).cf(s)
if(w!=null){v=w.b[1]
return v==null?null:C.c.p(v)}}if(C.c.ao(s,"{")&&C.c.c4(s,"}"))return s
u=C.c.eH(s,"{")
t=C.c.mi(s,"}")
if(u>=0&&t>u)return C.c.a3(s,u,t+1)
return null},
dEi:function dEi(d,e){this.a=d
this.b=e},
dEk:function dEk(){},
dEj:function dEj(){},
a7Z:function a7Z(d){this.a=d},
hHM:function hHM(){},
cDk:function cDk(d,e){this.a=d
this.b=e},
alm:function alm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=!1
_.f=null},
cDR:function cDR(){},
cDS:function cDS(){},
cDT:function cDT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cDU:function cDU(){},
cDV:function cDV(){},
cDQ:function cDQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hHO:function hHO(){},
hHN:function hHN(d){this.a=d},
ihh(d){var w,v,u,t,s,r,q=A.a([],x.fd),p=$.i8a().ev(0,d),o=A.M(p,A.S(p).i("U.E"))
for(p=o.length,w=0;w<o.length;o.length===p||(0,A.a7)(o),++w){v=o[w].b
u=v[1]
t=u==null?null:C.c.p(u)
if(t==null)t=""
if(t.length!==0){u=v.index
q.push(new B.La(t,!0,u,u+v[0].length))}}p=$.i8b().ev(0,d)
s=A.M(p,A.S(p).i("U.E"))
for(p=s.length,w=0;w<s.length;s.length===p||(0,A.a7)(s),++w){r=s[w]
if(C.d.c8(o,new B.d21(r)))continue
v=r.b
u=v[1]
t=u==null?null:C.c.p(u)
if(t==null)t=""
if(t.length!==0&&B.iWF(t)){u=v.index
q.push(new B.La(t,!1,u,u+v[0].length))}}C.d.dv(q,new B.d22())
return q},
iWF(d){var w,v,u
for(w=0;w<50;++w){v=$.iWE[w]
if(A.jB(d,v,0))return!0}if(C.c.t(d,"_")||C.c.t(d,"^"))return!0
if(C.c.t(d,"\\(")||C.c.t(d,"\\)"))return!0
u=A.a1("[a-zA-Z][_^][0-9a-zA-Z{]",!0,!1,!1,!1)
if(u.b.test(d))return!0
if(C.c.t(d,"{")&&C.c.t(d,"}"))return!0
return!1},
iWG(d){var w=A.Y(d).i("E<1,K<h,@>>")
w=A.M(new A.E(d,new B.d20(),w),w.i("ah.E"))
return C.L.bt(w,null)},
iWH(d){var w,v,u,t,s,r=null,q=A.a([],x.bY),p=B.ihh(d),o=p.length
if(o===0){q.push(new B.abO(D.FM,d,r))
return q}for(w=0,v=0;v<p.length;p.length===o||(0,A.a7)(p),++v){u=p[v]
t=u.c
if(t>w){s=C.c.a3(d,w,t)
if(s.length!==0)q.push(new B.abO(D.FM,s,r))}q.push(new B.abO(D.aMr,r,u))
w=u.d}if(w<d.length){s=C.c.aZ(d,w)
if(s.length!==0)q.push(new B.abO(D.FM,s,r))}return q},
La:function La(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d21:function d21(d){this.a=d},
d22:function d22(){},
d20:function d20(){},
abO:function abO(d,e,f){this.a=d
this.b=e
this.c=f},
bxe:function bxe(d,e){this.a=d
this.b=e},
ibu(d,e,f,g,h){return new B.beY(f,g,h,d,e,null)},
a6M(d,e,f,g){B.iUI(d,C.dv,e,f,D.ak1,g)},
beY:function beY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hZc(d,e,f,g,h,i,j,k,l,m){return new B.aFS(j,m,l,d,i,k,e,h,g,f,null)},
i3X(d,e,f,g,h,i,j){return new B.c9m(d,f,i,h,e,j,g,null)},
bix:function bix(d,e){this.a=d
this.b=e},
aFS:function aFS(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.a=n},
aYT:function aYT(d,e,f,g,h){var _=this
_.w=d
_.x=e
_.y=f
_.z=null
_.ay=_.ax=_.at=_.as=_.Q=!1
_.CW=_.ch=""
_.cx=g
_.cy=h
_.db=null
_.d=$
_.c=_.a=null},
eez:function eez(d){this.a=d},
eeA:function eeA(d){this.a=d},
eey:function eey(){},
edX:function edX(d){this.a=d},
edP:function edP(d){this.a=d},
edQ:function edQ(d){this.a=d},
edR:function edR(d,e,f){this.a=d
this.b=e
this.c=f},
edS:function edS(d,e){this.a=d
this.b=e},
edY:function edY(d,e){this.a=d
this.b=e},
edZ:function edZ(d,e){this.a=d
this.b=e},
edV:function edV(d){this.a=d},
edW:function edW(d){this.a=d},
ee_:function ee_(d){this.a=d},
edO:function edO(){},
edT:function edT(){},
edU:function edU(){},
ee7:function ee7(d,e,f){this.a=d
this.b=e
this.c=f},
ee5:function ee5(d,e){this.a=d
this.b=e},
ee6:function ee6(d,e){this.a=d
this.b=e},
ee4:function ee4(d,e){this.a=d
this.b=e},
eet:function eet(d){this.a=d},
eeu:function eeu(){},
eev:function eev(d,e){this.a=d
this.b=e},
eer:function eer(){},
ees:function ees(d,e){this.a=d
this.b=e},
ee3:function ee3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ee0:function ee0(d,e){this.a=d
this.b=e},
ee1:function ee1(d,e,f){this.a=d
this.b=e
this.c=f},
ee2:function ee2(d,e){this.a=d
this.b=e},
eep:function eep(){},
eeq:function eeq(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
eeo:function eeo(d,e,f,g,h,i,j,k,l,m){var _=this
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
eee:function eee(d,e,f){this.a=d
this.b=e
this.c=f},
ee8:function ee8(d,e){this.a=d
this.b=e},
ee9:function ee9(d,e){this.a=d
this.b=e},
eec:function eec(){},
eed:function eed(d,e,f){this.a=d
this.b=e
this.c=f},
eea:function eea(d,e){this.a=d
this.b=e},
eeb:function eeb(d,e){this.a=d
this.b=e},
eeg:function eeg(d,e){this.a=d
this.b=e},
eeh:function eeh(d,e){this.a=d
this.b=e},
eei:function eei(d,e){this.a=d
this.b=e},
eej:function eej(d,e){this.a=d
this.b=e},
eek:function eek(d,e){this.a=d
this.b=e},
eel:function eel(d,e){this.a=d
this.b=e},
eem:function eem(d,e,f){this.a=d
this.b=e
this.c=f},
een:function een(d,e){this.a=d
this.b=e},
eef:function eef(d,e){this.a=d
this.b=e},
edu:function edu(){},
edE:function edE(d){this.a=d},
edF:function edF(d,e,f){this.a=d
this.b=e
this.c=f},
edG:function edG(d,e){this.a=d
this.b=e},
edH:function edH(d,e,f){this.a=d
this.b=e
this.c=f},
edI:function edI(){},
edw:function edw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edv:function edv(d,e){this.a=d
this.b=e},
edx:function edx(d,e){this.a=d
this.b=e},
edy:function edy(d){this.a=d},
edz:function edz(d){this.a=d},
edA:function edA(d){this.a=d},
edB:function edB(d,e){this.a=d
this.b=e},
edC:function edC(d,e){this.a=d
this.b=e},
edD:function edD(d){this.a=d},
edL:function edL(){},
edM:function edM(d,e){this.a=d
this.b=e},
edN:function edN(d,e){this.a=d
this.b=e},
edJ:function edJ(d){this.a=d},
edK:function edK(d){this.a=d},
eew:function eew(d){this.a=d},
eex:function eex(d){this.a=d},
azo:function azo(d,e,f){this.c=d
this.d=e
this.a=f},
ffJ:function ffJ(){},
ffI:function ffI(d,e){this.a=d
this.b=e},
ffH:function ffH(d,e){this.a=d
this.b=e},
a5A:function a5A(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
b7b:function b7b(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
c8a:function c8a(d,e){this.c=d
this.a=e},
Yy:function Yy(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
c9m:function c9m(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aLQ:function aLQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
d1T:function d1T(d,e){this.a=d
this.b=e},
bxy:function bxy(d,e,f){this.c=d
this.d=e
this.a=f},
jeJ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="pageNumber"
if(C.c.p(d).length===0)return C.f4
w=A.a1("\\[Page\\s+(\\d+)\\]",!1,!1,!1,!1).ev(0,d)
w=A.M(w,A.S(w).i("U.E"))
w.$flags=1
v=w
w=A.a1("\\[Span\\s+([^\\]]+)\\]",!1,!1,!1,!1).ev(0,d)
w=A.M(w,A.S(w).i("U.E"))
w.$flags=1
u=w
t=v.length
if(t===0&&u.length===0)return C.f4
s=u.length
t=t>s?t:s
r=A.a([],x.t)
for(w=x.N,q=x.z,p=0;p<t;++p){if(p<v.length){o=v[p].b[1]
n=A.cb(o==null?"":o,null)}else n=null
if(p<u.length){o=u[p].b[1]
m=C.c.p(o==null?"":o)}else m=""
o=A.D(w,q)
if(n!=null&&n>0)o.j(0,i,n)
if(m.length!==0)o.j(0,"spanId",m)
if(o.a!==0)r.push(o)}l=A.D(w,x.P)
for(w=r.length,k=0;k<r.length;r.length===w||(0,A.a7)(r),++k){j=r[k]
q=j.h(0,i)
q=A.b(q==null?"":q)
o=j.h(0,"spanId")
l.j(0,q+"|"+A.b(o==null?"":o),j)}w=l.$ti.i("bU<2>")
w=A.M(new A.bU(l,w),w.i("U.E"))
w.$flags=1
return w},
aqi:function aqi(d,e,f,g){var _=this
_.e=d
_.f=e
_.x=f
_.a=g},
daC:function daC(){},
daD:function daD(){},
daE:function daE(d,e,f){this.a=d
this.b=e
this.c=f},
b2T:function b2T(d,e){this.c=d
this.a=e},
c0t:function c0t(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bS8:function bS8(d,e,f){this.c=d
this.d=e
this.a=f},
ef0:function ef0(d,e,f){this.a=d
this.b=e
this.c=f},
aV0:function aV0(d,e,f){this.c=d
this.e=e
this.a=f},
b8L:function b8L(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.w=!1
_.ef$=d
_.b9$=e
_.c=_.a=null},
fE2:function fE2(d){this.a=d},
fE0:function fE0(d){this.a=d},
fE1:function fE1(d){this.a=d},
fE_:function fE_(d){this.a=d},
fE3:function fE3(d){this.a=d},
aV1:function aV1(d){this.a=d},
cbx:function cbx(d,e){var _=this
_.d=$
_.ef$=d
_.b9$=e
_.c=_.a=null},
fE5:function fE5(d,e){this.a=d
this.b=e},
fE4:function fE4(d,e){this.a=d
this.b=e},
bcs:function bcs(){},
bct:function bct(){},
iPX(d){return new B.a_J(d,A.a([],x.s))},
Kp:function Kp(d,e){this.a=d
this.b=e},
a_L:function a_L(d,e){this.a=d
this.b=e},
dl3:function dl3(d,e){this.a=d
this.b=e},
Az:function Az(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cDP:function cDP(){},
OT:function OT(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
a_J:function a_J(d,e){var _=this
_.x=d
_.Q=_.z=_.y=null
_.as=!1
_.at=""
_.ax=e
_.b=_.ay=null},
cDs:function cDs(d){this.a=d},
cDt:function cDt(){},
cDu:function cDu(){},
cDv:function cDv(){},
cDw:function cDw(d){this.a=d},
cDx:function cDx(){},
cDA:function cDA(d){this.a=d},
cDB:function cDB(d){this.a=d},
cDC:function cDC(){},
cDz:function cDz(d){this.a=d},
cDD:function cDD(d){this.a=d},
cDr:function cDr(){},
cDm:function cDm(){},
cDl:function cDl(){},
cDp:function cDp(){},
cDq:function cDq(){},
cDn:function cDn(){},
cDo:function cDo(){},
cDy:function cDy(d){this.a=d},
coW:function coW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ak5:function ak5(){},
coZ:function coZ(){},
cp_:function cp_(){},
cp0:function cp0(d){this.a=d},
cp1:function cp1(){},
coX:function coX(d){this.a=d},
coY:function coY(){},
hFJ:function hFJ(){},
bp2:function bp2(){this.r=this.b=this.a=null},
aa0:function aa0(d,e,f){this.f=d
this.r=e
this.a=f},
bXG:function bXG(d,e){var _=this
_.d=$
_.ef$=d
_.b9$=e
_.c=_.a=null},
eBq:function eBq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bS7:function bS7(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
ff6:function ff6(d,e){this.a=d
this.b=e},
bba:function bba(){},
ifV(d,e,f,g,h,i,j,k,l,m){return new B.bpT(d,f,k,h,g,i,e,m,l,j,null)},
bpT:function bpT(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.x=i
_.y=j
_.ax=k
_.ay=l
_.ch=m
_.a=n},
ifP(d,e){return new B.aK1(d,!1,e,null,null)},
cye:function cye(d,e){this.a=d
this.b=e},
aK1:function aK1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.x=g
_.a=h},
bpK:function bpK(d,e){this.c=d
this.a=e},
ifS(d,e,f){return new B.bpO(d,e,f,null)},
bpO:function bpO(d,e,f,g){var _=this
_.c=d
_.e=e
_.r=f
_.a=g},
cUw:function cUw(){},
cUv:function cUv(d,e){this.a=d
this.b=e},
bpP:function bpP(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.w=h
_.a=i},
cUy:function cUy(d,e){this.a=d
this.b=e},
cUx:function cUx(d){this.a=d},
aK7:function aK7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.x=g
_.y=h
_.a=i},
bXH:function bXH(){this.c=this.a=null},
b6U:function b6U(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.a=n},
b6V:function b6V(){var _=this
_.e=_.d=!1
_.f=$
_.c=_.a=null},
fqg:function fqg(d){this.a=d},
fq8:function fq8(d,e){this.a=d
this.b=e},
fqa:function fqa(d,e){this.a=d
this.b=e},
fq9:function fq9(d){this.a=d},
fqf:function fqf(d){this.a=d},
fqb:function fqb(d){this.a=d},
fqe:function fqe(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fqd:function fqd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fqc:function fqc(d,e){this.a=d
this.b=e},
aK8:function aK8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b18:function b18(d,e){var _=this
_.w=_.r=_.f=_.e=_.d=$
_.x=!0
_.y=null
_.y2$=d
_.aD$=e
_.c=_.a=null},
eBs:function eBs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bbc:function bbc(){},
aK5:function aK5(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.f=f
_.x=g
_.a=h},
b16:function b16(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.f=$
_.w=_.r=null
_.y=f
_.ef$=g
_.b9$=h
_.c=_.a=null},
eBp:function eBp(d){this.a=d},
eBo:function eBo(){},
eBn:function eBn(){},
eBm:function eBm(d){this.a=d},
eBl:function eBl(d,e){this.a=d
this.b=e},
bb9:function bb9(){},
AU:function AU(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bXF:function bXF(){var _=this
_.e=_.d=!1
_.c=_.a=null},
eBj:function eBj(d){this.a=d},
eBc:function eBc(d){this.a=d},
eBk:function eBk(d){this.a=d},
eBb:function eBb(d){this.a=d},
eBi:function eBi(d){this.a=d},
eBd:function eBd(d){this.a=d},
eBg:function eBg(d){this.a=d},
eBf:function eBf(d){this.a=d},
eBh:function eBh(d){this.a=d},
eBe:function eBe(d){this.a=d},
bpR(d,e,f,g,h){var w=null
return A.fm(C.a4,w,new B.cUz(w,C.f9,!0,w,g,d),C.b4,w,e,0,!0,!0,!0,w,D.ei1,w,!1,!1,h)},
aoc:function aoc(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cUz:function cUz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bXD:function bXD(d,e){this.c=d
this.a=e},
iUI(d,e,f,g,h,i){var w,v,u=A.rA(d,!1)
u.toString
w=A.dw()
v=new B.cUB(w)
w.b=A.tb(new B.cUA(g,f,i,h,e,null,!0,null,null,v),!1,!1)
u.hR(0,w.bs())
return v},
aKc:function aKc(d,e){this.a=d
this.b=e},
aoe:function aoe(d,e){this.a=d
this.b=e},
aKb:function aKb(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.y=h
_.z=i
_.a=j},
cUB:function cUB(d){this.a=d},
cUA:function cUA(d,e,f,g,h,i,j,k,l,m){var _=this
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
bXK:function bXK(){this.c=this.a=null},
agW:function agW(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.a=n},
b19:function b19(d,e){var _=this
_.f=_.e=_.d=$
_.r=null
_.ef$=d
_.b9$=e
_.c=_.a=null},
eBt:function eBt(d){this.a=d},
bbd:function bbd(){},
icT(d,e,f,g,h,i,j,k,l,m,n,o){var w=x.D,v=x.c
return new A.all(new A.aw(!0,k,w),new A.aw(!0,o,w),new A.aw(!0,m,w),g,i,l,h,f,j,new A.aw(!0,d,v),new A.aw(!0,n,v),e)},
iUG(d){switch(d.a){case 0:return!0
case 1:return!1}},
iSs(d){if(d<0)return-C.m.a4(-d*0.4,0,0.3)
else if(d>1)return 1+C.m.a4((d-1)*0.4,0,0.3)
return d},
ieF(d,e,f){var w,v=e.gaN()
v.toString
x.bG.a(v)
w=1/f
return B.iSs((C.m.a4(v.fP(d).a/v.gW(0).a,0,1)-w/2)/(1-w))*2-1}},D,F,E,G
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[18],B)
D=c[22]
F=c[23]
E=c[20]
G=c[38]
B.IK.prototype={}
B.Rj.prototype={
ap(){var w=0,v=A.m(x.H),u=this
var $async$ap=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:w=2
return A.d($.iI().ghe().c.bHT(),$async$ap)
case 2:u.x=e
return A.k(null,v)}})
return A.l($async$ap,v)},
RC(){var w=0,v=A.m(x.x),u,t=2,s=[],r=this,q,p,o,n
var $async$RC=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.x){u=!0
w=1
break}t=4
q=$.iI()
w=7
return A.d(q.ghe().c.bHT(),$async$RC)
case 7:p=r.x=e
w=!p?8:10
break
case 8:w=11
return A.d(r.RW(),$async$RC)
case 11:w=12
return A.d(q.ghe().c.bHT(),$async$RC)
case 12:q=e
r.x=q
w=9
break
case 10:q=p
case 9:t=2
w=6
break
case 4:t=3
n=s.pop()
q=r.x=!1
w=6
break
case 3:w=2
break
case 6:u=q
w=1
break
case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$RC,v)},
RW(){var w=0,v=A.m(x.H),u,t,s,r
var $async$RW=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:w=2
return A.d(A.aRE(!1),$async$RW)
case 2:u=A.Eu(384)
t=$.iI()
w=3
return A.d(t.ghe().c.fd2(u),$async$RW)
case 3:w=4
return A.d(A.aj9(),$async$RW)
case 4:s=e
r=A.hM4(s.gfa(s),"asaka_vector_db",null)
u=A.Eu(384)
w=5
return A.d(t.ghe().c.fdD(r,u),$async$RW)
case 5:return A.k(null,v)}})
return A.l($async$RW,v)},
ez4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(d==null||C.c.p(d).length===0)return e
try{w=C.L.aR(0,d,e)
if(!x.j.b(w)||J.c2(w))return e
v=1
u=1
t=0
s=0
r=!1
for(l=J.b1(w),k=x.f;l.G();){q=l.gT(l)
if(!k.b(q))continue
j=A.bN(J.t(q,"left"))
p=j==null?e:j
i=A.bN(J.t(q,"top"))
o=i==null?e:i
h=A.bN(J.t(q,"right"))
n=h==null?e:h
g=A.bN(J.t(q,"bottom"))
m=g==null?e:g
if(p==null||o==null||n==null||m==null)continue
r=!0
if(p<v)v=p
if(o<u)u=o
if(n>t)t=n
if(m>s)s=m}if(!r)return e
l=A.x(["left",J.Cq(v,0,1),"top",J.Cq(u,0,1),"right",J.Cq(t,0,1),"bottom",J.Cq(s,0,1)],x.N,x.i)
return l}catch(f){return e}},
Yc(d,e,f,g){return this.dta(0,e,f,g)},
dta(d,e,a0,a1){var w=0,v=A.m(x.eB),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Yc=A.i(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:w=3
return A.d(r.RC(),$async$Yc)
case 3:if(!a3){$.a3.$1("[RagService] Vector store not initialized")
u=A.a([],x.dP)
w=1
break}t=5
k=$.iI()
w=8
return A.d(k.ghe().c.fd3(e),$async$Yc)
case 8:q=a3
j=a0==null
p=j||C.c.p(a0).length===0?a1:C.k.a4(a1*8,a1,80)
i=J.on(q)
h=A.Eu(p)
w=9
return A.d(k.ghe().c.fdE(h,i),$async$Yc)
case 9:o=a3
n=J.az(o,new B.dpt(),x.dT).a6(0)
m=j?null:C.c.p(a0)
if(m==null||m.length===0){k=n
k=A.fq(k,0,A.fY(a1,"count",x.S),A.Y(k).c).a6(0)
u=k
w=1
break}k=n
j=A.Y(k).i("aE<1>")
j=A.Mp(new A.aE(k,new B.dpu(m),j),a1,j.i("U.E"))
k=A.M(j,A.S(j).i("U.E"))
u=k
w=1
break
t=2
w=7
break
case 5:t=4
f=s.pop()
l=A.T(f)
$.a3.$1("[RagService] Search failed: "+A.b(l))
k=A.a([],x.dP)
u=k
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Yc,v)},
zx(d,e,f){return this.fxx(d,e,f)},
fxx(d,e,f){var $async$zx=A.i(function(g,a0){switch(g){case 2:r=u
w=r.pop()
break
case 1:s.push(a0)
w=t}for(;;)switch(w){case 0:i=f==null?null:C.c.p(f)
w=5
return A.dj(q.RC(),$async$zx,v)
case 5:w=!a0?3:4
break
case 3:w=6
u=[1]
return A.dj(A.ix(new A.HA(i==null||i.length===0?"Knowledge base not initialized":"PDF index is preparing")),$async$zx,v)
case 6:w=7
u=[1]
return A.dj(A.ix(new A.vW(i==null||i.length===0?"Please index your notes first using Settings > Knowledge Base.":"This PDF is still preparing its searchable index. Please wait a moment and try again.","",!0)),$async$zx,v)
case 7:w=1
break
case 4:w=8
u=[1]
return A.dj(A.ix(new A.HA(i==null||i.length===0?"Searching knowledge base...":"Searching PDF context...")),$async$zx,v)
case 8:t=10
w=13
return A.dj(q.Yc(0,d,i,5),$async$zx,v)
case 13:p=a0
w=J.c2(p)?14:15
break
case 14:w=16
u=[1]
return A.dj(A.ix(new A.vW(i==null||i.length===0?"No relevant notes found in your knowledge base.":"No relevant spans found for this PDF yet. Please wait for indexing to complete.","",!0)),$async$zx,v)
case 16:w=1
break
case 15:w=17
u=[1]
return A.dj(A.ix(new A.HA("Found "+J.an(p)+" relevant notes, generating answer...")),$async$zx,v)
case 17:k=x.N
o=J.az(p,new B.dpr(q),k).a6(0)
n=J.m_(o,"\n\n---\n\n")
m="Answer the question based on the following context from the user's notes:\n\n"+A.b(n)+"\n\n---\n\nQuestion: "+d+'\n\nOutput strict JSON only:\n{\n  "answer": "your concise answer",\n  "citations": [\n    {"pageNumber": 1, "spanId": "p:1:k:line:s:1", "quote": "exact short quote"}\n  ]\n}\n\nRules:\n- Base answer only on the context above.\n- Every material claim should have at least one citation.\n- citation spanId must come from [Span ...] markers in context when available.\n- When context includes [CitationPayload], copy its fields into citations as-is.\n- If CitationPayload includes rect, keep it in the output citation.\n- If unsupported, set citations to [] and say evidence is insufficient in answer.'
w=18
u=[1]
return A.dj(A.eIf(e.dtL(!1,!1,A.a([],x.gb),m)),$async$zx,v)
case 18:w=19
u=[1]
return A.dj(A.ix(new A.HA("Sources: "+J.az(p,new B.dps(),k).au(0,", "))),$async$zx,v)
case 19:t=2
w=12
break
case 10:t=9
h=s.pop()
l=A.T(h)
$.a3.$1("[RagService] Stream query failed: "+A.b(l))
w=20
u=[1]
return A.dj(A.ix(new A.vW("Error processing query: "+A.b(l),"",!0)),$async$zx,v)
case 20:w=12
break
case 9:w=2
break
case 12:case 1:return A.dj(null,0,v)
case 2:return A.dj(s.at(-1),1,v)}})
var w=0,v=A.NH($async$zx,x.aG),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
return A.NJ(v)}}
B.bC1.prototype={
ex(d){return new B.Rj()}}
B.bOv.prototype={
fc(){var w=x.cq.a(A.aj(this))
x.cm.a(w.x).f7(w,this.gbx())}}
B.av2.prototype={
RB(){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$RB=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.b){w=1
break}t=4
p=r.a
w=7
return A.d(p.QO("en-US"),$async$RB)
case 7:w=8
return A.d(p.auS(0.5),$async$RB)
case 8:w=9
return A.d(p.auH(1),$async$RB)
case 9:w=10
return A.d(p.auW(1),$async$RB)
case 10:p.b=new B.dPW(r)
p.r=new B.dPX(r)
p.a=new B.dPY(r)
r.b=!0
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.T(n)
$.a3.$1("TTS initialization failed: "+A.b(q))
throw n
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$RB,v)},
zO(d,e){var w=null
return this.dyM(0,e)},
dyM(d,e){var w=0,v=A.m(x.x),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$zO=A.i(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:m=null
if(e.length===0){u=!1
w=1
break}t=4
w=7
return A.d(r.RB(),$async$zO)
case 7:w=r.c?8:9
break
case 8:w=10
return A.d(r.fF(0),$async$zO)
case 10:case 9:w=m!=null?11:12
break
case 11:w=13
return A.d(r.a.QO(m),$async$zO)
case 13:case 12:w=14
return A.d(r.a.zO(0,e),$async$zO)
case 14:q=g
o=J.C(q,1)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.T(l)
$.a3.$1("TTS speak failed: "+A.b(p))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$zO,v)},
fF(d){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p
var $async$fF=A.i(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.d(s.a.fF(0),$async$fF)
case 6:s.c=!1
u=1
w=5
break
case 3:u=2
p=t.pop()
r=A.T(p)
$.a3.$1("TTS stop failed: "+A.b(r))
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$fF,v)}}
B.ajX.prototype={
UF(d){return this.fkm(d)},
fkm(d){var w=0,v=A.m(x.cb),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$UF=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:r.dX9()
q=A.a([],x.ar)
m=d.r,l=m.length,k=d.f==="stop",j=0
case 3:if(!(j<m.length)){w=5
break}p=m[j]
if(r.elZ(p.c)){J.cv(q,new B.fS(p.a,!0,"\u91cd\u590d\u8bf7\u6c42\u5df2\u8df3\u8fc7\uff08\u5e42\u7b49\u4fdd\u62a4\uff09"))
w=4
break}t=7
w=10
return A.d(r.bfm(p),$async$UF)
case 10:o=f
J.cv(q,o)
if(!o.b&&k){w=5
break}t=2
w=9
break
case 7:t=6
h=s.pop()
n=A.T(h)
J.cv(q,new B.fS(p.a,!1,"\u6267\u884c\u5931\u8d25\uff1a"+A.b(n)))
if(k){w=5
break}w=9
break
case 6:w=2
break
case 9:case 4:m.length===l||(0,A.a7)(m),++j
w=3
break
case 5:u=new B.beT(q)
w=1
break
case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$UF,v)},
bfm(d){return this.e49(d)},
e49(d){var w=0,v=A.m(x.k),u,t=this,s
var $async$bfm=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)A:switch(w){case 0:s=d.a
switch(s){case"memory.card.create":u=t.adK(d)
w=1
break A
case"memory.deck.create":u=t.aDH(d)
w=1
break A
case"memory.review.start":u=D.bjb
w=1
break A
case"memory.stats.get":u=t.EH(d)
w=1
break A
case"memory.cards.count":u=t.wN(d)
w=1
break A
case"memory.decks.list":u=t.adL(d)
w=1
break A
case"settings.memory.daily_limits.set":u=t.aGM(d)
w=1
break A
case"notes.note.create":u=t.aDV(d)
w=1
break A
case"notes.note.append":u=t.Sc(d)
w=1
break A
case"notes.note.rename":u=t.adV(d)
w=1
break A
case"notes.note.delete":u=t.adU(d)
w=1
break A
case"problembank.practice.start":u=t.aF2(d)
w=1
break A
case"problembank.practice.end_current":u=t.aF1(d)
w=1
break A
case"library.book.favorite.set":u=t.ad4(d)
w=1
break A
case"library.book.reading_progress.set":u=t.ad5(d)
w=1
break A
case"library.book.filters.set":u=t.bi3(d)
w=1
break A
case"library.books.list":u=t.aCF(d)
w=1
break A
case"learning.download.start":u=t.aCD(d)
w=1
break A
case"learning.download.batch_start":u=t.aCB(d)
w=1
break A
case"learning.download.clear_all":u=t.aCC(d)
w=1
break A
case"settings.ai.chat_model.set":u=t.aGQ(d)
w=1
break A
case"settings.notifications.set":u=t.Nm(d)
w=1
break A
case"settings.sync.set":u=t.Iw(d)
w=1
break A
case"settings.notes_sync.set":u=t.Iv(d)
w=1
break A
case"settings.theme.set":u=t.afL(d)
w=1
break A
case"settings.reminder.set":u=t.SP(d)
w=1
break A
case"settings.storage.path.set":u=t.afK(d)
w=1
break A
default:u=new B.fS(s,!1,"\u4e0d\u652f\u6301\u7684\u52a8\u4f5c\uff1a"+s)
w=1
break A}case 1:return A.k(u,v)}})
return A.l($async$bfm,v)},
adK(d){return this.eqr(d)},
eqr(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$adK=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:l=t.a0Q()
k=d.e
j=t.aGh(t.aI5(t.oF(k,"sourceText")))
i=t.aGh(t.aI5(t.oF(k,"front")))
h=t.aGh(t.aI5(t.oF(k,"back")))
g=i.length===0
if((g||h.length===0)&&j.length!==0){if(g)i=t.e4U(j)
if(h.length===0)h=j}if(i.length===0||h.length===0){u=new B.fS(d.a,!1,"\u7f3a\u5c11\u5361\u7247\u5185\u5bb9\uff0c\u8bf7\u63d0\u4f9b front/back \u6216 sourceText\u3002")
w=1
break}if(t.cPP(i)||t.cPP(h)||i.toLowerCase()===h.toLowerCase()){u=new B.fS(d.a,!1,"\u5361\u7247\u5185\u5bb9\u65e0\u6548\uff0c\u8bf7\u63d0\u4f9b\u660e\u786e\u7684\u6b63\u9762\u548c\u80cc\u9762\u5185\u5bb9\u3002")
w=1
break}s=t.a.m(0,$.iJ(),x.v)
w=3
return A.d(t.a9W(k,l,s),$async$adK)
case 3:r=f
q=t.aI4(k,"tags")
k=Date.now()
p=new A.ak(k,0,!1)
g=d.a
o=A.x(["source","ai_agent","planAction",g,"createdAt",p.c2()],x.N,x.z)
n=C.L.bt(q,null)
w=4
return A.d(s.aTu(A.a9D(C.ak,C.ak,h,p,r,k,i,C.ak,C.ak,new A.aw(!0,C.L.bt(o,null),x.l),C.dM,D.eHt,C.mF,C.ak,new A.aw(!0,n,x.D),p,l)),$async$adK)
case 4:m=f
u=new B.fS(g,!0,"\u5df2\u521b\u5efa\u8bb0\u5fc6\u5361\u7247\uff1a"+t.eBQ(i,48)+"\uff08ID: "+A.b(m)+"\uff09\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$adK,v)},
aDH(d){return this.eqs(d)},
eqs(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$aDH=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:o=d.e
n=t.oF(o,"name")
if(n.length===0){u=new B.fS(d.a,!1,"\u7f3a\u5c11\u724c\u7ec4\u540d\u79f0\uff08name\uff09\u3002")
w=1
break}s=t.a0Q()
r=t.oF(o,"description")
q=t.yn(o,"parentDeckId")
p=t.a.m(0,$.iJ(),x.v)
o=q==null?C.hN:new A.aw(!0,q,x.ev)
o=A.a06(new A.ak(Date.now(),0,!1),new A.aw(!0,r,x.D),n,C.dM,o,C.ak,new A.ak(Date.now(),0,!1),s)
m=B
l=d.a
k=!0
j="\u5df2\u521b\u5efa\u8bb0\u5fc6\u724c\u7ec4\uff08ID: "
i=A
w=3
return A.d(p.mB(p.goN(),x.a,x.L).hR(0,o),$async$aDH)
case 3:u=new m.fS(l,k,j+i.b(f)+"\uff09\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aDH,v)},
aGM(d){return this.eLF(d)},
eLF(d){var w=0,v=A.m(x.k),u,t=this,s,r,q
var $async$aGM=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:s=d.e
r=t.yn(s,"newCardsPerDay")
q=t.yn(s,"reviewsPerDay")
if(r==null&&q==null){u=new B.fS(d.a,!1,"\u81f3\u5c11\u63d0\u4f9b newCardsPerDay \u6216 reviewsPerDay\u3002")
w=1
break}w=3
return A.d(t.a.m(0,$.fB().gJ(),x.fU).fED(r,q),$async$aGM)
case 3:u=new B.fS(d.a,!0,"\u5df2\u66f4\u65b0\u8bb0\u5fc6\u6bcf\u65e5\u4e0a\u9650\u8bbe\u7f6e\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aGM,v)},
EH(d){return this.eqt(d)},
eqt(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$EH=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:p=t.a0Q()
o=t.a.m(0,$.iJ(),x.v)
w=3
return A.d(t.afe(d.e,p,o),$async$EH)
case 3:n=f
m=n.c
if(m!=null){u=new B.fS(d.a,!1,m)
w=1
break}s=n.a
r=n.b
if(r==null)r="\u5168\u90e8\u724c\u7ec4"
w=s==null?4:6
break
case 4:w=7
return A.d(o.U6(p),$async$EH)
case 7:w=5
break
case 6:l=J
w=8
return A.d(o.Qo(p,s),$async$EH)
case 8:f=l.an(f)
case 5:q=f
l=B
k=d.a
j=!0
i="\u8bb0\u5fc6\u7edf\u8ba1\uff08"+r+"\uff09\uff1a\u603b\u5361\u7247 "+A.b(q)+"\uff0c\u65b0\u5361 "
h=A
w=9
return A.d(o.Ji(p,s,C.ih),$async$EH)
case 9:i=i+h.b(f)+"\uff0c\u5b66\u4e60\u4e2d "
w=10
return A.d(o.Ji(p,s,C.v2),$async$EH)
case 10:h=f
w=11
return A.d(o.Ji(p,s,C.rh),$async$EH)
case 11:i=i+(h+f)+"\uff0c\u5f85\u590d\u4e60 "
h=A
w=12
return A.d(o.d78(p,s),$async$EH)
case 12:u=new l.fS(k,j,i+h.b(f)+"\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$EH,v)},
wN(d){return this.eqq(d)},
eqq(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$wN=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:l=d.e
k=t.ese(t.oF(l,"state"))
if(k==null){u=new B.fS(d.a,!1,"\u4e0d\u652f\u6301\u7684 state\u3002\u53ef\u9009\uff1aall/new/learning/relearning/review/due/suspended\u3002")
w=1
break}s=t.a0Q()
r=t.a.m(0,$.iJ(),x.v)
w=3
return A.d(t.afe(l,s,r),$async$wN)
case 3:q=f
l=q.c
if(l!=null){u=new B.fS(d.a,!1,l)
w=1
break}p=q.a
o=q.b
if(o==null)o="\u5168\u90e8\u724c\u7ec4"
case 4:switch(k){case"all":w=6
break
case"new":w=7
break
case"learning":w=8
break
case"relearning":w=9
break
case"review":w=10
break
case"due":w=11
break
case"suspended":w=12
break
default:w=13
break}break
case 6:w=p==null?14:16
break
case 14:w=17
return A.d(r.U6(s),$async$wN)
case 17:w=15
break
case 16:j=J
w=18
return A.d(r.Qo(s,p),$async$wN)
case 18:f=j.an(f)
case 15:n=f
w=5
break
case 7:w=19
return A.d(r.Ji(s,p,C.ih),$async$wN)
case 19:n=f
w=5
break
case 8:w=20
return A.d(r.Ji(s,p,C.v2),$async$wN)
case 20:j=f
w=21
return A.d(r.Ji(s,p,C.rh),$async$wN)
case 21:n=j+f
w=5
break
case 9:w=22
return A.d(r.Ji(s,p,C.rh),$async$wN)
case 22:n=f
w=5
break
case 10:w=23
return A.d(r.Ji(s,p,C.pM),$async$wN)
case 23:n=f
w=5
break
case 11:w=24
return A.d(r.d78(s,p),$async$wN)
case 24:n=f
w=5
break
case 12:w=p==null?25:27
break
case 25:w=28
return A.d(r.b3c(s),$async$wN)
case 28:w=26
break
case 27:w=29
return A.d(r.Qo(s,p),$async$wN)
case 29:case 26:m=f
l=J.eq(m,new B.cmr())
n=l.gE(l)
w=5
break
case 13:n=0
case 5:u=new B.fS(d.a,!0,"\u5361\u7247\u6570\u91cf\uff08"+o+"\uff0c"+t.eqp(k)+"\uff09\uff1a"+n+"\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$wN,v)},
adL(d){return this.equ(d)},
equ(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o,n,m,l,k
var $async$adL=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:o=t.a0Q()
n=t.a.m(0,$.iJ(),x.v)
m=t.yn(d.e,"limit")
l=C.k.a4(m==null?20:m,1,100)
w=3
return A.d(n.Lg(o),$async$adL)
case 3:k=f
m=J.L(k)
if(m.gac(k)){u=new B.fS(d.a,!0,"\u5f53\u524d\u6ca1\u6709\u8bb0\u5fc6\u724c\u7ec4\u3002")
w=1
break}w=4
return A.d(n.a7h(o),$async$adL)
case 4:s=f
r=m.nE(k,l).cd(0,!1)
q=new A.E(r,new B.cms(s),A.Y(r).i("E<1,h>")).au(0,"\uff1b")
p=m.gE(k)>r.length?"\uff08\u5176\u4f59\u5df2\u7701\u7565\uff09":""
u=new B.fS(d.a,!0,"\u5171 "+m.gE(k)+" \u4e2a\u724c\u7ec4\uff0c\u5c55\u793a\u524d "+r.length+" \u4e2a\uff1a"+q+p)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$adL,v)},
aDV(d){return this.esA(d)},
esA(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p
var $async$aDV=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:q=d.e
p=t.oF(q,"title")
if(p.length===0){u=new B.fS(d.a,!1,"\u7f3a\u5c11\u7b14\u8bb0\u6807\u9898\uff08title\uff09\u3002")
w=1
break}s=t.vC(q,"parentId")
w=3
return A.d(t.a.m(0,$.jj().gJ(),x.h).a3f(s,p),$async$aDV)
case 3:r=f
if(r==null||r.length===0){u=new B.fS(d.a,!1,"\u521b\u5efa\u7b14\u8bb0\u5931\u8d25\u3002")
w=1
break}u=new B.fS(d.a,!0,"\u5df2\u521b\u5efa\u7b14\u8bb0\uff08ID: "+r+"\uff09\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aDV,v)},
Sc(d){return this.esz(d)},
esz(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o,n,m,l
var $async$Sc=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:m=d.e
l=t.oF(m,"appendText")
if(l.length===0){u=new B.fS(d.a,!1,"\u7f3a\u5c11\u8ffd\u52a0\u5185\u5bb9\uff08appendText\uff09\u3002")
w=1
break}w=3
return A.d(t.a0P(m),$async$Sc)
case 3:s=f
if(s==null){u=new B.fS(d.a,!1,"\u65e0\u6cd5\u5b9a\u4f4d\u76ee\u6807\u7b14\u8bb0\uff0c\u8bf7\u63d0\u4f9b noteId \u6216\u66f4\u7cbe\u786e\u7684 noteTitle\u3002")
w=1
break}m=t.a
r=m.m(0,$.oK(),x.bb)
w=4
return A.d(r.rn(s),$async$Sc)
case 4:q=f
if(q==null){u=new B.fS(d.a,!1,"\u76ee\u6807\u7b14\u8bb0\u4e0d\u5b58\u5728\uff1a"+s)
w=1
break}w=5
return A.d(r.DQ(s),$async$Sc)
case 5:p=f
o=J.tC(p==null?"":p)
n=o.length===0?l:o+"\n\n"+l
m=m.m(0,$.jj().gJ(),x.h)
p=q.d
w=6
return A.d(m.m2(s,p==null?"{}":p,n),$async$Sc)
case 6:u=new B.fS(d.a,!0,"\u5df2\u8ffd\u52a0\u5185\u5bb9\u5230\u7b14\u8bb0\uff08ID: "+s+"\uff09\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$Sc,v)},
adV(d){return this.esC(d)},
esC(d){var w=0,v=A.m(x.k),u,t=this,s,r,q
var $async$adV=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=d.e
q=t.oF(r,"newTitle")
if(q.length===0){u=new B.fS(d.a,!1,"\u7f3a\u5c11\u65b0\u6807\u9898\uff08newTitle\uff09\u3002")
w=1
break}w=3
return A.d(t.a0P(r),$async$adV)
case 3:s=f
if(s==null){u=new B.fS(d.a,!1,"\u65e0\u6cd5\u5b9a\u4f4d\u76ee\u6807\u7b14\u8bb0\uff0c\u8bf7\u63d0\u4f9b noteId \u6216\u66f4\u7cbe\u786e\u7684 noteTitle\u3002")
w=1
break}w=4
return A.d(t.a.m(0,$.jj().gJ(),x.h).qf(s,q),$async$adV)
case 4:u=new B.fS(d.a,!0,"\u5df2\u91cd\u547d\u540d\u7b14\u8bb0\uff08ID: "+s+"\uff09\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$adV,v)},
adU(d){return this.esB(d)},
esB(d){var w=0,v=A.m(x.k),u,t=this,s
var $async$adU=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.d(t.a0P(d.e),$async$adU)
case 3:s=f
if(s==null){u=new B.fS(d.a,!1,"\u65e0\u6cd5\u5b9a\u4f4d\u76ee\u6807\u7b14\u8bb0\uff0c\u8bf7\u63d0\u4f9b noteId \u6216\u66f4\u7cbe\u786e\u7684 noteTitle\u3002")
w=1
break}w=4
return A.d(t.a.m(0,$.jj().gJ(),x.h).rT(s),$async$adU)
case 4:u=new B.fS(d.a,!0,"\u5df2\u5220\u9664\u7b14\u8bb0\uff08ID: "+s+"\uff09\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$adU,v)},
aF2(d){return this.eBY(d)},
eBY(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o
var $async$aF2=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=d.e
q=t.oF(r,"mode")
p=t.yn(r,"problemCount")
o=C.k.a4(p==null?20:p,1,100)
switch(q.toLowerCase()){case"mistakes":case"mistakes_review":s=A.ik3(o)
break
case"favorites":case"favorites_review":s=A.ik2(o)
break
case"single":case"single_question":s=A.ik5(t.vC(r,"problemId"))
break
case"smart":case"smart_review":s=A.ik6(null,null,o,null,null,null)
break
default:q=t.aI4(r,"subjects")
s=A.ik4(t.elo(r,"difficulties"),null,o,null,q,t.aI4(r,"tags"))}w=3
return A.d(t.a.m(0,$.pQ().gJ(),x.d).At(s),$async$aF2)
case 3:u=new B.fS(d.a,!0,"\u5df2\u542f\u52a8\u9898\u5e93\u7ec3\u4e60\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aF2,v)},
aF1(d){return this.eBX(d)},
eBX(d){var w=0,v=A.m(x.k),u,t=this
var $async$aF1=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.d(t.a.m(0,$.pQ().gJ(),x.d).FP(),$async$aF1)
case 3:u=new B.fS(d.a,!0,"\u5df2\u7ed3\u675f\u5f53\u524d\u9898\u5e93\u7ec3\u4e60\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aF1,v)},
ad4(d){return this.enu(d)},
enu(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o,n
var $async$ad4=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:o=d.e
n=t.vx(o,"favorited")
if(n==null){u=new B.fS(d.a,!1,"\u7f3a\u5c11\u6536\u85cf\u72b6\u6001\uff08favorited\uff09\u3002")
w=1
break}s=t.a
r=$.l6()
q=s.m(0,r.gJ(),x.U)
w=3
return A.d(t.afc(o,q),$async$ad4)
case 3:p=f
if(p==null){u=new B.fS(d.a,!1,"\u65e0\u6cd5\u5b9a\u4f4d\u56fe\u4e66\uff0c\u8bf7\u63d0\u4f9b bookId \u6216\u66f4\u7cbe\u786e\u7684 bookTitle\u3002")
w=1
break}w=s.m(0,r,x.q).CW.t(0,p)!==n?4:5
break
case 4:w=6
return A.d(q.zD(p),$async$ad4)
case 6:case 5:o=n?"\u5df2\u52a0\u5165\u6536\u85cf\u3002":"\u5df2\u53d6\u6d88\u6536\u85cf\u3002"
u=new B.fS(d.a,!0,o)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$ad4,v)},
ad5(d){return this.enw(d)},
enw(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o,n,m,l
var $async$ad5=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:p=t.a
o=$.l6()
n=p.m(0,o.gJ(),x.U)
m=d.e
w=3
return A.d(t.afc(m,n),$async$ad5)
case 3:l=f
if(l==null){u=new B.fS(d.a,!1,"\u65e0\u6cd5\u5b9a\u4f4d\u56fe\u4e66\uff0c\u8bf7\u63d0\u4f9b bookId \u6216\u66f4\u7cbe\u786e\u7684 bookTitle\u3002")
w=1
break}s=t.yn(m,"currentPage")
if(s==null||s<0){u=new B.fS(d.a,!1,"\u7f3a\u5c11\u5408\u6cd5\u7684 currentPage\u3002")
w=1
break}p=p.m(0,o,x.q).a
o=A.Y(p).i("aE<1>")
o=A.tK(new A.aE(p,new B.cmq(l),o),o.i("U.E"),x.z)
r=A.M(o,A.S(o).i("U.E"))
if(r.length!==0){p=A.c3(C.d.ga_(r).glE())
q=p==null?0:p}else q=0
p=t.yn(m,"totalPages")
w=4
return A.d(n.tf(l,s,C.k.a4(p==null?q:p,1,1e5)),$async$ad5)
case 4:u=new B.fS(d.a,!0,"\u5df2\u66f4\u65b0\u9605\u8bfb\u8fdb\u5ea6\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$ad5,v)},
bi3(d){return this.env(d)},
env(d){var w=0,v=A.m(x.k),u,t=this,s,r,q
var $async$bi3=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=t.a.m(0,$.l6().gJ(),x.U)
q=d.e
if(q.K(0,"query"))r.Hn(t.oF(q,"query"))
if(q.K(0,"tag"))r.dxv(t.vC(q,"tag"))
if(q.K(0,"subject"))r.b5x(t.vC(q,"subject"))
if(q.K(0,"language"))r.dvZ(t.vC(q,"language"))
if(q.K(0,"resourceType"))r.dwV(t.vC(q,"resourceType"))
if(q.K(0,"academicLevel"))r.dtZ(t.vC(q,"academicLevel"))
if(q.K(0,"libraryType"))r.czy(t.eyR(t.vC(q,"libraryType")))
if(q.K(0,"sort")){s=t.ey3(t.oF(q,"sort"))
if(s!=null)r.czN(s)}u=new B.fS(d.a,!0,"\u5df2\u66f4\u65b0\u56fe\u4e66\u7b5b\u9009\u6761\u4ef6\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$bi3,v)},
aCF(d){return this.ent(d)},
ent(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aCF=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:o=t.a
n=$.l6()
m=o.m(0,n.gJ(),x.U)
l=x.q
k=o.m(0,n,l)
j=d.e
i=t.yn(j,"limit")
h=C.k.a4(i==null?20:i,1,100)
g=t.oF(j,"query").toLowerCase()
w=k.a.length===0?3:4
break
case 3:w=5
return A.d(m.zq(!0),$async$aCF)
case 5:k=o.m(0,n,l)
case 4:s=k.a
o=g.length===0
if(!o){n=A.Y(s).i("aE<1>")
n=A.M(new A.aE(s,new B.cmo(g),n),n.i("U.E"))
n.$flags=1
s=n}if(s.length===0){o=o?"\u5f53\u524d\u4e66\u5e93\u6682\u65e0\u56fe\u4e66\u3002":"\u6ca1\u6709\u5339\u914d\u8be5\u5173\u952e\u8bcd\u7684\u56fe\u4e66\u3002"
u=new B.fS(d.a,!0,o)
w=1
break}r=A.fq(s,0,A.fY(h,"count",x.S),A.Y(s).c).cd(0,!1)
q=new A.E(r,new B.cmp(),A.Y(r).i("E<1,h>")).au(0,"\uff1b")
o=s.length
n=r.length
p=o>n?"\uff08\u5176\u4f59\u5df2\u7701\u7565\uff09":""
u=new B.fS(d.a,!0,"\u4e66\u5e93\u5171 "+o+" \u672c\uff0c\u5c55\u793a\u524d "+n+" \u672c\uff1a"+q+p)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aCF,v)},
aCD(d){return this.enf(d)},
enf(d){var w=0,v=A.m(x.k),u,t=this,s,r
var $async$aCD=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=t.oF(d.e,"sectionId")
if(r.length===0){u=new B.fS(d.a,!1,"\u7f3a\u5c11 sectionId\u3002")
w=1
break}w=3
return A.d(t.a.m(0,$.ajt().gJ(),x.W).avJ(r),$async$aCD)
case 3:s=f
if(s==null||s.length===0){u=new B.fS(d.a,!1,"\u4e0b\u8f7d\u542f\u52a8\u5931\u8d25\u3002")
w=1
break}u=new B.fS(d.a,!0,"\u5df2\u5f00\u59cb\u4e0b\u8f7d\u7ae0\u8282\uff08\u4efb\u52a1: "+s+"\uff09\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aCD,v)},
aCB(d){return this.enc(d)},
enc(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o
var $async$aCB=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:s=t.aI4(d.e,"sectionIds")
if(s.length===0){u=new B.fS(d.a,!1,"\u7f3a\u5c11 sectionIds \u5217\u8868\u3002")
w=1
break}r=B
q=d.a
p=!0
o=J
w=3
return A.d(t.a.m(0,$.ajt().gJ(),x.W).ai_(s),$async$aCB)
case 3:u=new r.fS(q,p,"\u5df2\u63d0\u4ea4\u6279\u91cf\u4e0b\u8f7d\u4efb\u52a1\uff08"+o.an(f)+" \u4e2a\uff09\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aCB,v)},
aCC(d){return this.ene(d)},
ene(d){var w=0,v=A.m(x.k),u,t=this,s,r
var $async$aCC=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.d(t.a.m(0,$.ajt().gJ(),x.W).Fk(),$async$aCC)
case 3:s=f
r=s?"\u5df2\u6e05\u7a7a\u5168\u90e8\u4e0b\u8f7d\u5185\u5bb9\u3002":"\u6e05\u7a7a\u4e0b\u8f7d\u5931\u8d25\u3002"
u=new B.fS(d.a,s,r)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aCC,v)},
aGQ(d){return this.eLP(d)},
eLP(d){var w=0,v=A.m(x.k),u,t=this,s,r,q
var $async$aGQ=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:s=d.e
r=t.oF(s,"providerId")
q=t.oF(s,"modelId")
if(r.length===0||q.length===0){u=new B.fS(d.a,!1,"\u7f3a\u5c11 providerId \u6216 modelId\u3002")
w=1
break}w=3
return A.d(t.a.m(0,$.kc().gJ(),x.a3).LA(new A.np(r,q)),$async$aGQ)
case 3:u=new B.fS(d.a,!0,"\u5df2\u66f4\u65b0 AI \u804a\u5929\u6a21\u578b\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aGQ,v)},
Nm(d){return this.eLR(d)},
eLR(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o
var $async$Nm=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:p=t.a.m(0,$.O_().gJ(),x.gj)
o=d.e
w=o.K(0,"reviewReminders")?3:4
break
case 3:s=t.vx(o,"reviewReminders")
w=s!=null?5:6
break
case 5:w=7
return A.d(p.QR(s),$async$Nm)
case 7:case 6:case 4:w=o.K(0,"dailyGoalReminders")?8:9
break
case 8:s=t.vx(o,"dailyGoalReminders")
w=s!=null?10:11
break
case 10:w=12
return A.d(p.QM(s),$async$Nm)
case 12:case 11:case 9:w=o.K(0,"newContentPush")?13:14
break
case 13:s=t.vx(o,"newContentPush")
w=s!=null?15:16
break
case 15:w=17
return A.d(p.QP(s),$async$Nm)
case 17:case 16:case 14:w=o.K(0,"silentModeEnabled")?18:19
break
case 18:s=t.vx(o,"silentModeEnabled")
w=s!=null?20:21
break
case 20:w=22
return A.d(p.QS(s),$async$Nm)
case 22:case 21:case 19:r=t.yn(o,"silentStartHour")
q=t.yn(o,"silentEndHour")
w=r!=null&&q!=null?23:24
break
case 23:w=25
return A.d(p.Ho(C.k.a4(r,0,23),C.k.a4(q,0,23)),$async$Nm)
case 25:case 24:u=new B.fS(d.a,!0,"\u5df2\u66f4\u65b0\u901a\u77e5\u8bbe\u7f6e\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$Nm,v)},
Iw(d){return this.eLU(d)},
eLU(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o
var $async$Iw=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:p=t.a.m(0,$.qu().gJ(),x.aL)
o=d.e
w=o.K(0,"autoSyncEnabled")?3:4
break
case 3:s=t.vx(o,"autoSyncEnabled")
w=s!=null?5:6
break
case 5:w=7
return A.d(p.a8e(s),$async$Iw)
case 7:case 6:case 4:w=o.K(0,"frequency")?8:9
break
case 8:r=t.ezk(t.oF(o,"frequency"))
w=r!=null?10:11
break
case 10:w=12
return A.d(p.a8l(r),$async$Iw)
case 12:case 11:case 9:w=o.K(0,"syncOnWifiOnly")?13:14
break
case 13:s=t.vx(o,"syncOnWifiOnly")
w=s!=null?15:16
break
case 15:w=17
return A.d(p.a8C(s),$async$Iw)
case 17:case 16:case 14:w=o.K(0,"defaultConflictResolution")?18:19
break
case 18:q=t.eyf(t.oF(o,"defaultConflictResolution"))
w=q!=null?20:21
break
case 20:w=22
return A.d(p.Yt(q),$async$Iw)
case 22:case 21:case 19:w=o.K(0,"syncNotes")?23:24
break
case 23:s=t.vx(o,"syncNotes")
w=s!=null?25:26
break
case 25:w=27
return A.d(p.YB(s),$async$Iw)
case 27:case 26:case 24:w=o.K(0,"syncOnLaunch")?28:29
break
case 28:s=t.vx(o,"syncOnLaunch")
w=s!=null?30:31
break
case 30:w=32
return A.d(p.E6(s),$async$Iw)
case 32:case 31:case 29:u=new B.fS(d.a,!0,"\u5df2\u66f4\u65b0\u540c\u6b65\u8bbe\u7f6e\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$Iw,v)},
Iv(d){return this.eLQ(d)},
eLQ(d){var w=0,v=A.m(x.k),u,t=this,s,r,q
var $async$Iv=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=t.a.m(0,$.ckE().gJ(),x.a4)
q=d.e
w=q.K(0,"syncEnabled")?3:4
break
case 3:s=t.vx(q,"syncEnabled")
w=s!=null?5:6
break
case 5:w=7
return A.d(r.a8t(s),$async$Iv)
case 7:case 6:case 4:w=q.K(0,"syncOnLaunch")?8:9
break
case 8:s=t.vx(q,"syncOnLaunch")
w=s!=null?10:11
break
case 10:w=12
return A.d(r.E6(s),$async$Iv)
case 12:case 11:case 9:w=q.K(0,"autoSyncIntervalMinutes")?13:14
break
case 13:s=t.yn(q,"autoSyncIntervalMinutes")
w=s!=null?15:16
break
case 15:w=17
return A.d(r.a8f(s),$async$Iv)
case 17:case 16:case 14:w=q.K(0,"uploadLocalChanges")?18:19
break
case 18:s=t.vx(q,"uploadLocalChanges")
w=s!=null?20:21
break
case 20:w=22
return A.d(r.a8A(s),$async$Iv)
case 22:case 21:case 19:w=q.K(0,"downloadCloudChanges")?23:24
break
case 23:s=t.vx(q,"downloadCloudChanges")
w=s!=null?25:26
break
case 25:w=27
return A.d(r.a8i(s),$async$Iv)
case 27:case 26:case 24:w=q.K(0,"syncContent")?28:29
break
case 28:s=t.vx(q,"syncContent")
w=s!=null?30:31
break
case 30:w=32
return A.d(r.a8s(s),$async$Iv)
case 32:case 31:case 29:u=new B.fS(d.a,!0,"\u5df2\u66f4\u65b0\u7b14\u8bb0\u540c\u6b65\u8bbe\u7f6e\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$Iv,v)},
afL(d){return this.eLV(d)},
eLV(d){var w=0,v=A.m(x.k),u,t=this,s,r
var $async$afL=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:switch(t.oF(d.e,"mode").toLowerCase()){case"dark":case"\u6df1\u8272":case"\u6697\u8272":s="dark"
break
case"light":case"\u6d45\u8272":case"\u4eae\u8272":s="light"
break
default:s="system"}w=4
return A.d(A.hg(),$async$afL)
case 4:w=3
return A.d(f.be("String","app_theme_mode",s),$async$afL)
case 3:if(s==="dark")r="\u6df1\u8272\u6a21\u5f0f"
else r=s==="light"?"\u6d45\u8272\u6a21\u5f0f":"\u8ddf\u968f\u7cfb\u7edf"
u=new B.fS(d.a,!0,"\u5df2\u5207\u6362\u4e3b\u9898\u6a21\u5f0f\u4e3a "+r+"\uff0c\u91cd\u542f\u5e94\u7528\u540e\u751f\u6548\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$afL,v)},
SP(d){return this.eLS(d)},
eLS(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o,n,m
var $async$SP=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:o=d.e
n=t.yn(o,"hour")
m=t.yn(o,"minute")
if(m==null)m=0
s=t.vx(o,"enabled")
w=3
return A.d(A.hg(),$async$SP)
case 3:r=f
w=s!=null?4:5
break
case 4:w=6
return A.d(r.be("Bool","study_reminder_enabled",s),$async$SP)
case 6:case 5:w=n!=null?7:8
break
case 7:q=C.k.a4(n,0,23)
p=C.k.a4(m,0,59)
w=9
return A.d(r.be("Int","study_reminder_hour",q),$async$SP)
case 9:w=10
return A.d(r.be("Int","study_reminder_minute",p),$async$SP)
case 10:u=new B.fS(d.a,!0,"\u5b66\u4e60\u63d0\u9192\u65f6\u95f4\u5df2\u8bbe\u4e3a "+(C.c.bh(C.k.k(q),2,"0")+":"+C.c.bh(C.k.k(p),2,"0"))+"\u3002")
w=1
break
case 8:u=new B.fS(d.a,!0,"\u5b66\u4e60\u63d0\u9192\u8bbe\u7f6e\u5df2\u66f4\u65b0\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$SP,v)},
afK(d){return this.eLT(d)},
eLT(d){var w=0,v=A.m(x.k),u,t=this,s
var $async$afK=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:s=t.vC(d.e,"path")
if(s==null||C.c.p(s).length===0){u=new B.fS(d.a,!1,"\u7f3a\u5c11\u5b58\u50a8\u8def\u5f84\uff08path\uff09\u53c2\u6570\u3002")
w=1
break}w=4
return A.d(A.hg(),$async$afK)
case 4:w=3
return A.d(f.be("String","data_storage_path",C.c.p(s)),$async$afK)
case 3:A.Ae("[AUDIT] storage path changed to: "+s+" by user "+t.a0Q())
u=new B.fS(d.a,!0,"\u6570\u636e\u5b58\u50a8\u8def\u5f84\u5df2\u8bbe\u5b9a\u4e3a "+s+"\uff0c\u91cd\u542f\u5e94\u7528\u540e\u751f\u6548\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$afK,v)},
a0Q(){var w=this.a.m(0,$.c1(),x.o),v=w.gB(w)
if(v==null)w=null
else{w=v.gdD()
w=w==null?null:w.a}return w==null?"guest-local-user":w},
afe(d,e,f){return this.eGB(d,e,f)},
eGB(d,e,f){var w=0,v=A.m(x.fA),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$afe=A.i(function(g,h){if(g===1)return A.j(h,v)
for(;;)switch(w){case 0:o=t.vC(d,"deckId")
n=t.vC(d,"deckName")
m=o==null
l=m?"":o
k=n==null
j=k?"":n
i=j.toLowerCase()
if(l.toLowerCase()==="all"||i==="all"){u=D.a4E
w=1
break}if(i==="\u5168\u90e8"||i==="\u6240\u6709"){u=D.a4E
w=1
break}if(m&&k){u=D.a4E
w=1
break}w=3
return A.d(f.Lg(e),$async$afe)
case 3:s=h
if(!m){r=J.eq(s,new B.cmw(o)).a6(0)
if(r.length===1){u=new A.Nt(C.k.k(C.d.ga_(r).a),C.c.p(C.d.ga_(r).c),null)
w=1
break}u=new A.Nt(o,o,null)
w=1
break}n.toString
m=J.dW(s)
q=m.bl(s,new B.cmx(n)).cd(0,!1)
l=q.length
if(l===1){u=new A.Nt(C.k.k(C.d.ga_(q).a),C.c.p(C.d.ga_(q).c),null)
w=1
break}if(l>1){u=D.eeD
w=1
break}p=m.bl(s,new B.cmy(n)).cd(0,!1)
m=p.length
if(m===1){u=new A.Nt(C.k.k(C.d.ga_(p).a),C.c.p(C.d.ga_(p).c),null)
w=1
break}if(m>1){u=D.eeP
w=1
break}u=new A.Nt(null,null,"\u672a\u627e\u5230\u76ee\u6807\u724c\u7ec4\uff1a"+n)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$afe,v)},
ese(d){var w=C.c.p(d).toLowerCase()
if(w.length===0)return"all"
switch(w){case"all":case"\u5168\u90e8":case"\u6240\u6709":return"all"
case"new":case"newcard":case"new_card":case"\u65b0":case"\u65b0\u5361":case"\u65b0\u5361\u7247":return"new"
case"learning":case"learn":case"\u5b66\u4e60":case"\u5b66\u4e60\u4e2d":return"learning"
case"relearning":case"\u91cd\u65b0\u5b66\u4e60":case"\u590d\u5b66":return"relearning"
case"review":case"\u590d\u4e60":case"\u590d\u4e60\u4e2d":return"review"
case"due":case"\u5230\u671f":case"\u5f85\u590d\u4e60":case"\u5f85\u56de\u987e":return"due"
case"suspended":case"suspend":case"\u6682\u505c":case"\u5df2\u6682\u505c":return"suspended"
default:return null}},
eqp(d){switch(d){case"all":return"\u5168\u90e8"
case"new":return"\u65b0\u5361"
case"learning":return"\u5b66\u4e60\u4e2d"
case"relearning":return"\u590d\u5b66\u4e2d"
case"review":return"\u590d\u4e60\u72b6\u6001"
case"due":return"\u5f85\u590d\u4e60"
case"suspended":return"\u5df2\u6682\u505c"
default:return d}},
a9W(d,e,f){return this.eGm(d,e,f)},
eGm(d,e,f){var w=0,v=A.m(x.N),u,t=this,s,r,q,p,o
var $async$a9W=A.i(function(g,h){if(g===1)return A.j(h,v)
for(;;)switch(w){case 0:p=t.oF(d,"deckId")
if(p.length!==0){u=p
w=1
break}s=t.oF(d,"deckName").length===0?"AI \u5361\u7247":t.oF(d,"deckName")
o=J
w=3
return A.d(f.Lg(e),$async$a9W)
case 3:r=o.b1(h)
case 4:if(!r.G()){w=5
break}q=r.gT(r)
if(C.c.p(q.c).toLowerCase()===C.c.p(s).toLowerCase()){u=C.k.k(q.a)
w=1
break}w=4
break
case 5:r=A.a06(new A.ak(Date.now(),0,!1),D.eHl,s,C.dM,C.hN,C.ak,new A.ak(Date.now(),0,!1),e)
o=C.k
w=6
return A.d(f.mB(f.goN(),x.a,x.L).hR(0,r),$async$a9W)
case 6:u=o.k(h)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$a9W,v)},
e4U(d){var w=this.aGh(this.aI5(d))
if(w.length<=120)return w
return C.c.a3(w,0,120)+"..."},
aI5(d){var w=C.c.p(d)
if(w.length===0)return""
return C.c.p(C.c.hT(w,$.ixY(),""))},
aGh(d){var w,v=C.c.p(d)
if(v.length===0)return""
w=A.a1("^[\"'\u201c\u201d\u2018\u2019`]+|[\"'\u201c\u201d\u2018\u2019`]+$",!0,!1,!1,!1)
return C.c.p(A.at(v,w,""))},
cPP(d){var w=C.c.p(d).toLowerCase()
if(w.length===0)return!1
return C.d.c8(D.daB,C.c.gnp(w))},
a0P(d){return this.eGF(d)},
eGF(d){var w=0,v=A.m(x.A),u,t=this,s,r,q,p,o,n
var $async$a0P=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:n=t.vC(d,"noteId")
if(n!=null){u=n
w=1
break}s=t.vC(d,"noteTitle")
if(s==null){u=null
w=1
break}r=t.a
w=3
return A.d(r.m(0,$.oK(),x.bb).Lx(s,12,r.m(0,$.K4(),x.N)),$async$a0P)
case 3:q=f
r=J.L(q)
if(r.gac(q)){u=null
w=1
break}p=r.bl(q,new B.cmz(s)).cd(0,!1)
o=p.length
if(o===1){u=C.d.ga_(p).a
w=1
break}if(o>1){u=null
w=1
break}if(r.gE(q)===1){u=r.ga_(q).a
w=1
break}u=null
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$a0P,v)},
afc(d,e){return this.eGe(d,e)},
eGe(d,e){var w=0,v=A.m(x.A),u,t=this,s,r,q,p
var $async$afc=A.i(function(f,g){if(f===1)return A.j(g,v)
for(;;)switch(w){case 0:p=t.vC(d,"bookId")
if(p!=null){u=p
w=1
break}s=t.vC(d,"bookTitle")
if(s==null){u=null
w=1
break}r=new B.cmt(t,s)
q=r.$0()
if(q!=null){u=q
w=1
break}w=3
return A.d(e.zq(!0),$async$afc)
case 3:u=r.$0()
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$afc,v)},
elZ(d){var w,v=C.c.p(d)
if(v.length===0)return!1
w=$.beR.K(0,v)
$.beR.j(0,v,new A.ak(Date.now(),0,!1))
return w},
dX9(){var w,v,u=A.S($.beR).i("cM<1,2>"),t=u.i("fT<U.E,h>")
u=A.M(new A.fT(new A.aE(new A.cM($.beR,u),new B.cmm(new A.ak(Date.now(),0,!1)),u.i("aE<U.E>")),new B.cmn(),t),t.i("U.E"))
u.$flags=1
w=u
for(u=w.length,v=0;v<w.length;w.length===u||(0,A.a7)(w),++v)$.beR.V(0,w[v])},
eBQ(d,e){var w=C.c.p(d)
if(w.length<=e)return w
return C.c.a3(w,0,e)+"..."},
oF(d,e){var w=d.h(0,e)
return C.c.p(J.w(w==null?"":w))},
vC(d,e){var w=this.oF(d,e)
return w.length===0?null:w},
yn(d,e){var w=d.h(0,e)
if(A.dA(w))return w
if(typeof w=="number")return C.m.R(w)
if(typeof w=="string")return A.cb(C.c.p(w),null)
return null},
vx(d,e){var w,v,u=d.h(0,e)
if(A.hi(u))return u
w=u==null?null:C.c.p(J.w(u)).toLowerCase()
if(w==null)w=""
v=x.s
if(C.d.t(A.a(["1","true","yes","on","enable","enabled"],v),w))return!0
if(C.d.t(A.a(["0","false","no","off","disable","disabled"],v),w))return!1
return null},
aI4(d,e){var w,v=d.h(0,e)
if(x.j.b(v))return J.az(v,new B.cmA(),x.N).bl(0,new B.cmB()).cd(0,!1)
w=v==null?null:C.c.p(J.w(v))
if(w==null)w=""
if(w.length===0)return C.K
return A.a([w],x.s)},
elo(d,e){var w,v,u,t,s=d.h(0,e)
if(!x.j.b(s))return C.kQ
w=A.a([],x.dC)
for(v=J.b1(s);v.G();){u=v.gT(v)
if(A.dA(u)){w.push(u)
continue}if(typeof u=="number"){w.push(C.m.R(u))
continue}if(typeof u=="string"){t=A.cb(C.c.p(u),null)
if(t!=null)w.push(t)}}return w},
ey3(d){var w=C.c.p(d).toLowerCase()
if(w.length===0)return null
switch(w){case"newest":case"latest":case"\u6700\u65b0":return C.xD
case"oldest":case"\u6700\u65e9":return D.bo7
case"title_az":case"titleaz":case"a-z":return C.US
case"title_za":case"titleza":case"z-a":return D.bo8
case"mostliked":case"most_liked":case"likes":case"\u6700\u591a\u559c\u6b22":return C.UT
case"highestrated":case"highest_rated":case"rating":case"\u6700\u9ad8\u8bc4\u5206":return C.UU
default:return null}},
eyR(d){switch(C.c.p(d==null?"":d).toLowerCase()){case"official":case"\u5b98\u65b9":return C.w9
case"community":case"\u793e\u533a":return C.oD
case"private":case"\u79c1\u6709":case"\u672c\u5730":return C.iq
default:return null}},
ezk(d){switch(C.c.p(d).toLowerCase()){case"manual":case"\u624b\u52a8":return C.a6F
case"hourly":case"\u6bcf\u5c0f\u65f6":return C.B0
case"daily":case"\u6bcf\u5929":return C.a6G
case"realtime":case"\u5b9e\u65f6":case"5min":return C.a6H
default:return null}},
eyf(d){switch(C.c.p(d).toLowerCase()){case"localpriority":case"local_priority":case"local":case"\u672c\u5730\u4f18\u5148":return C.WZ
case"cloudpriority":case"cloud_priority":case"cloud":case"\u4e91\u7aef\u4f18\u5148":return C.ye
case"lastmodifiedwins":case"last_modified_wins":case"newest":case"\u6700\u65b0\u4f18\u5148":return C.X_
case"askuser":case"ask_user":case"manual":case"\u8be2\u95ee":return C.X0
default:return null}}}
B.mK.prototype={}
B.aDo.prototype={
O(){return"AgentRiskLevel."+this.b},
ga5T(){switch(this.a){case 0:return 1
case 1:return 2
case 2:return 3}}}
B.ajY.prototype={}
B.cmD.prototype={
gac(d){return this.r.length===0}}
B.fS.prototype={}
B.beT.prototype={
gcAB(){var w=this.b
return new A.aE(w,new B.cnr(),A.Y(w).i("aE<1>")).gE(0)},
gd9s(){var w=this.b
return new A.aE(w,new B.cnq(),A.Y(w).i("aE<1>")).gE(0)}}
B.ru.prototype={
gaf(d){return this.a}}
B.dEi.prototype={}
B.a7Z.prototype={
FF(d){return this.fhT(d)},
fhT(d){var w=0,v=A.m(x.S),u,t=this,s
var $async$FF=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.d(s.fhr(d),$async$FF)
case 3:u=s.dyz(d)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$FF,v)}}
B.cDk.prototype={
aTI(){var w=0,v=A.m(x.x),u,t,s,r
var $async$aTI=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=3
return A.d(A.hg(),$async$aTI)
case 3:t=s.bG(r.t(e.a,"chat_migrated_to_drift_v1"))
u=t===!0
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aTI,v)},
a55(){var w=0,v=A.m(x.H)
var $async$a55=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:w=3
return A.d(A.hg(),$async$a55)
case 3:w=2
return A.d(e.be("Bool","chat_migrated_to_drift_v1",!0),$async$a55)
case 2:return A.k(null,v)}})
return A.l($async$a55,v)},
Pp(d){return this.fsh(d)},
fsh(d){var w=0,v=A.m(x.S),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Pp=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.d(r.aTI(),$async$Pp)
case 3:if(f){$.a3.$1("[ChatMigration] Migration already completed, skipping")
u=0
w=1
break}w=4
return A.d(A.hg(),$async$Pp)
case 4:q=f
l=q.XV("chat_sessions_list")
if(l==null)l=A.a([],x.s)
k=l.length
w=k===0?5:6
break
case 5:$.a3.$1("[ChatMigration] No sessions to migrate")
w=7
return A.d(r.a55(),$async$Pp)
case 7:u=0
w=1
break
case 6:$.a3.$1("[ChatMigration] Found "+k+" sessions to migrate")
p=0
k=l.length,j=0
case 8:if(!(j<l.length)){w=10
break}o=l[j]
t=12
w=15
return A.d(r.a0a(q,o,d),$async$Pp)
case 15:n=f
if(n)++p
t=2
w=14
break
case 12:t=11
h=s.pop()
m=A.T(h)
$.a3.$1("[ChatMigration] Failed to migrate session "+A.b(o)+": "+A.b(m))
w=14
break
case 11:w=2
break
case 14:case 9:l.length===k||(0,A.a7)(l),++j
w=8
break
case 10:w=16
return A.d(r.a55(),$async$Pp)
case 16:$.a3.$1("[ChatMigration] Migration completed: "+A.b(p)+" sessions")
u=p
w=1
break
case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Pp,v)},
a0a(d,e,f){return this.eqO(d,e,f)},
eqO(b8,b9,c0){var w=0,v=A.m(x.x),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$a0a=A.i(function(c1,c2){if(c1===1){s.push(c2)
w=t}for(;;)switch(w){case 0:b6=A.W(J.t(b8.a,"chat_session_"+b9))
if(b6==null){$.a3.$1("[ChatMigration] Session "+b9+" has no data")
u=!1
w=1
break}t=4
a4=x.P
q=a4.a(C.L.aR(0,b6,null))
a5=A.W(J.t(q,"title"))
p=a5==null?"Untitled":a5
a6=x.g.a(J.t(q,"messages"))
o=a6==null?[]:a6
n=A.W(J.t(q,"createdAt"))
m=A.W(J.t(q,"updatedAt"))
l=n!=null?A.iM(n):new A.ak(Date.now(),0,!1)
k=m!=null?A.iM(m):new A.ak(Date.now(),0,!1)
w=7
return A.d(r.b.a.cxY(b9),$async$a0a)
case 7:j=c2
if(j!=null){$.a3.$1("[ChatMigration] Session "+b9+" already exists, skipping")
u=!1
w=1
break}a7=r.a
a8=B.icT(l,C.bS,C.aH,C.bK,C.dM,C.ak,C.aH,b9,C.bK,p,k,c0)
w=8
return A.d(a7.mB(a7.gCC(),x._,x.K).hR(0,a8),$async$a0a)
case 8:i=A.a([],x.bR)
for(a8=J.b1(o),a9=x.D,b0=x.c;a8.G();){h=a8.gT(a8)
g=a4.a(h)
b1=A.W(J.t(g,"id"))
f=b1==null?C.k.k(1000*Date.now()):b1
b2=A.W(J.t(g,"role"))
e=b2==null?"user":b2
b3=A.W(J.t(g,"content"))
d=b3==null?"":b3
b4=A.W(J.t(g,"thinkingContent"))
a0=b4==null?"":b4
a1=A.W(J.t(g,"createdAt"))
a2=a1!=null?A.iM(a1):new A.ak(Date.now(),0,!1)
J.cv(i,new A.Uv(new A.aw(!0,f,a9),new A.aw(!0,b9,a9),new A.aw(!0,c0,a9),new A.aw(!0,e,a9),new A.aw(!0,d,a9),new A.aw(!0,a0,a9),C.ak,C.bH,C.dM,C.aH,C.aH,new A.aw(!0,a2,b0),new A.aw(!0,a2,b0),C.bS))}w=J.an(i)!==0?9:10
break
case 9:w=11
return A.d(a7.aTv(i),$async$a0a)
case 11:case 10:$.a3.$1("[ChatMigration] Migrated session "+b9+" with "+J.an(i)+" messages")
u=!0
w=1
break
t=2
w=6
break
case 4:t=3
b7=s.pop()
a3=A.T(b7)
$.a3.$1("[ChatMigration] Error parsing session "+b9+": "+A.b(a3))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$a0a,v)}}
B.alm.prototype={
b0Y(d){return this.fCN(d)},
fCN(d){var w=0,v=A.m(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$b0Y=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(q.e){$.a3.$1("[ChatSync] Sync already in progress, skipping")
w=1
break}q.e=!0
t=4
w=7
return A.d(q.EL(d),$async$b0Y)
case 7:r.push(6)
w=5
break
case 4:t=3
n=s.pop()
p=A.T(n)
$.a3.$1("[ChatSync] Sync failed: "+A.b(p))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
q.e=!1
w=r.pop()
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$b0Y,v)},
EL(d){return this.eAF(d)},
eAF(a7){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6
var $async$EL=A.i(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a5=r.b.$0()
if(a5==null||C.c.p(a5).length===0){$.a3.$1("[ChatSync] No auth token, skipping sync")
w=1
break}f=r.a.a
w=3
return A.d(f.dow(a7),$async$EL)
case 3:q=a9
w=4
return A.d(f.dov(a7),$async$EL)
case 4:p=a9
e=r.c
d="chat_sync:last_sync_at:"+a7
a0=r.ID(A.W(J.t(e.a,d)))
if(r.f==null)r.f=a0
$.a3.$1("[ChatSync] Syncing "+J.an(q)+" sessions, "+J.an(p)+" messages")
a1=x.eE
o=J.az(q,new B.cDR(),a1).a6(0)
n=J.az(p,new B.cDS(),a1).a6(0)
t=6
a1=A.dC()?C.bF:C.br
w=9
return A.d(A.kw(!0,new B.cDT(r,a5,o,n),"chat-sync:write",a1,x.em),$async$EL)
case 9:m=a9
w=m.b===200?10:12
break
case 10:a1=m
l=x.P.a(C.L.aR(0,A.dJ(A.dI(a1.e)).b3(0,a1.w),null))
a1=x.g
a2=a1.a(J.t(l,"serverSessions"))
if(a2==null)a2=C.aS
a3=a1.a(J.t(l,"serverMessages"))
w=13
return A.d(r.axV(a3==null?C.aS:a3,a2,a7),$async$EL)
case 13:a2=J.b1(q)
case 14:if(!a2.G()){w=15
break}k=a2.gT(a2)
w=16
return A.d(f.frL(k.b,k.x),$async$EL)
case 16:w=14
break
case 15:a2=x.N
j=A.fd(J.az(q,new B.cDU(),a2),a2)
J.jY(j,J.az(p,new B.cDV(),a2))
i=j
j=i,j=A.ha(j,j.r,A.S(j).c),a2=j.$ti.c
case 17:if(!j.G()){w=18
break}a3=j.d
h=a3==null?a2.a(a3):a3
w=19
return A.d(f.frK(h),$async$EL)
case 19:w=17
break
case 18:j=new A.ak(Date.now(),0,!1).qd()
f=A.W(J.t(l,"serverSyncAt"))
if(f==null)f=A.W(J.t(l,"syncedAt"))
a2=a1.a(J.t(l,"serverSessions"))
if(a2==null)a2=C.aS
a1=a1.a(J.t(l,"serverMessages"))
j=r.eGE(j,a1==null?C.aS:a1,a2,f)
r.f=j
w=20
return A.d(e.be("String",d,j.qd().c2()),$async$EL)
case 20:$.a3.$1("[ChatSync] Sync completed successfully")
w=11
break
case 12:j=m
$.a3.$1("[ChatSync] Sync failed with status "+m.b+": "+A.dJ(A.dI(j.e)).b3(0,j.w))
case 11:t=2
w=8
break
case 6:t=5
a6=s.pop()
g=A.T(a6)
$.a3.$1("[ChatSync] Network error during sync: "+A.b(g))
w=8
break
case 5:w=2
break
case 8:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$EL,v)},
eGE(d,e,f,g){var w,v,u,t,s,r,q=this.ID(g)
if(q==null)q=d
w=A.M(f,x.z)
C.d.D(w,e)
v=w.length
u=x.fF
t=0
for(;t<w.length;w.length===v||(0,A.a7)(w),++t){s=u.a(w[t])
r=this.ID(A.W(s==null?null:J.t(s,"updated_at")))
if(r!=null){s=r.a
if(s<=q.ghn())s=s===q.ghn()&&r.b>q.gwb()
else s=!0}else s=!1
if(s)q=r}return q.qd()},
axV(d,e,f){return this.dLu(d,e,f)},
dLu(d,e,f){var w=0,v=A.m(x.H),u=this
var $async$axV=A.i(function(g,h){if(g===1)return A.j(h,v)
for(;;)switch(w){case 0:w=2
return A.d(u.a.a.GR(0,new B.cDQ(u,e,f,d),x.H),$async$axV)
case 2:return A.k(null,v)}})
return A.l($async$axV,v)},
ID(d){var w
if(d==null||C.c.p(d).length===0)return null
w=A.hq(C.c.p(d))
return w==null?null:w.qd()}}
B.La.prototype={
Y(){var w=this
return A.x(["content",w.a,"isDisplay",w.b,"startIndex",w.c,"endIndex",w.d],x.N,x.z)},
k(d){return"LatexBlock("+(this.b?"display":"inline")+": "+this.a+")"}}
B.abO.prototype={}
B.bxe.prototype={
O(){return"MessageSegmentType."+this.b}}
B.beY.prototype={
v(d){var w,v=this,u=null,t=A.dK(A.b7(d,u,x.w).w.a.a),s=v.r,r=s?0:12,q=s?0:12,p=s?0:12,o=new A.a_(r,q,p,s?0:12)
t=t!==C.bq&&v.e!=null
s=v.d
if(t){t=v.e
t.toString
s=A.G(A.a([new A.N(296,u,t,u),C.al,A.a2(s,1)],x.p),C.aJ,u,C.i,C.j,0,u,u)
t=s}else t=s
s=x.p
t=A.a([v.c,C.J,A.a2(t,1)],s)
C.d.D(t,A.a([C.J,v.f],s))
w=A.B(t,C.l,u,C.i,C.j,0,u,C.n)
t=!v.r
return A.ibZ(36,t?new A.dH(!0,!0,!0,!0,C.Y,!1,w,u):w,!0,t,o,D.eFP)}}
B.bix.prototype={
O(){return"ChatShellLayoutMode."+this.b}}
B.aFS.prototype={
U(){var w=null,v=A.a([],x.fP),u=$.ao()
return new B.aYT(new A.fb(0,!0,w,w,w,v,u),new A.aV(C.ao,u),A.iD(!0,w,!0,!0,w,w,!1),C.HJ,A.a([],x.Y))}}
B.aYT.prototype={
ae(){var w,v,u,t=this
t.ai()
w=t.gH()
v=$.c1()
u=x.o
t.z=w.aV_(v,new B.eez(t),u)
$.aN.k3$.push(new B.eeA(t))
t.cMb(w.m(0,v,u),!0)},
q(){var w=this,v=w.z
if(v!=null)v.aW(0)
w.w.q()
v=w.x
v.a1$=$.ao()
v.X$=0
w.y.q()
w.aj()},
cT8(d,e,f){var w,v,u=e.length
if(u===0)return null
if(f!=null&&f.length!==0)for(w=0;w<u;++w){v=e[w]
if(v.a===f)return v}if(d.length!==0)for(w=0;w<u;++w){v=e[w]
if(v.a===d)return v}return C.d.ga_(e)},
eFZ(){if(this.c==null)return
this.A(new B.edX(this))},
es5(d){var w,v=C.c.p(d==null?"":d)
if(v.length===0)return""
if(C.c.ao(v.toLowerCase(),"bearer "))v=C.c.p(C.c.aZ(v,7))
w=v.toLowerCase()
if(w.length===0||w==="null"||w==="undefined"||w==="nil"||w==="(null)")return""
return v},
cMb(d,e){var w=this,v=d.gB(d),u=w.es5(v==null?null:v.giB()),t=d.gnO()!=null&&u.length===0
if(!e&&u===w.CW&&t===w.ay)return
w.CW=u
w.ay=t
if(u.length!==0){w.a_Y(!0,!1)
return}if(t){if(w.c==null)return
w.A(new B.edP(w))
return}w.eFZ()},
ec7(d){return this.cMb(d,!1)},
aDJ(d,e){var w,v,u
if(e==null)return A.q(d,x.T,x.n).f.gahx()
w=e.a
if(w===401)return A.q(d,x.T,x.n).f.gaKV()
if(w===403)return A.q(d,x.T,x.n).f.galz()
v=C.c.p(e.b)
u=v.toLowerCase()
if(v.length!==0&&u!=="null"&&u!=="undefined"&&u!=="nil")return v
return A.q(d,x.T,x.n).f.gahx()},
bjq(){var w=0,v=A.m(x.H),u,t=this,s
var $async$bjq=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}A.aY(s).dZ(0,"/auth",null)
case 1:return A.k(u,v)}})
return A.l($async$bjq,v)},
a_Y(d,e){return this.eoF(!0,e)},
eoF(d,e){var w=0,v=A.m(x.fo),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a_Y=A.i(function(a0,a1){if(a0===1)return A.j(a1,v)
for(;;)switch(w){case 0:g=t.gH()
f=g.m(0,$.bdQ(),x.Q)
if(t.c!=null)t.A(new B.edQ(t))
w=3
return A.d(f.a4W(),$async$a_Y)
case 3:s=a1
r=t.c
if(r==null){u=s
w=1
break}q=s.a
if(q!=null){p={}
o=q.b
n=A.ak0(r,o)
g=g.m(0,$.kc(),x.e).a.y.a
r=g.b
if(r!=null)C.c.p(r)
g=g.a
m=g==null?null:C.c.p(g)
if(m==null)m=""
g=t.cx
l=t.cT8(q.d,n,g.a)
p.a=l
if(l==null&&m.length!==0&&n.length!==0)for(g=n.length,k=0;k<g;++k){j=n[k]
i=C.c.p(j.d)
r=j.e
h=C.c.p(r==null?"":r)
if(i===m||h===m){p.a=j
break}}if(p.a==null)p.a=n.length!==0?C.d.ga_(n):null
t.A(new B.edR(p,t,o))
u=s
w=1
break}g=s.b
g.toString
t.A(new B.edS(t,g))
if(e){r=t.c
r.toString
B.a6M(r,C.lj,t.aDJ(r,g),D.DR)}u=s
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$a_Y,v)},
aFV(){var w=0,v=A.m(x.ac),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aFV=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:j=t.c
j.toString
s=A.ak0(j,t.cy)
j=!1
if(s.length===0)if(!t.at){r=t.db
q=r==null
p=q?null:r.a===401
if(p!==!0){j=q?null:r.a===403
j=j!==!0}}w=j?3:4
break
case 3:w=5
return A.d(t.a_Y(!0,!1),$async$aFV)
case 5:j=t.c
if(j==null){u=null
w=1
break}s=A.ak0(j,t.cy)
case 4:j=s.length
if(j===0){j=t.cx
r=j.a
q=!1
if(C.c.p(r).length===0||r==="auto"){r=t.db
p=r==null
o=p?null:r.a===401
if(o!==!0){r=p?null:r.a===403
r=r!==!0}else r=q}else r=q
if(r){u=j
w=1
break}j=t.c
j.toString
B.a6M(j,C.lj,t.aDJ(j,t.db),D.DR)
u=null
w=1
break}r=t.cx
q=r.a
m=0
for(;;){if(!(m<j)){n=null
break}l=s[m]
if(l.a===q){n=l
break}++m}j=n==null
if(!j&&!n.r){if(n.a!==q||n.d!==r.d||n.e!=r.e)t.A(new B.edY(t,n))
u=n
w=1
break}k=t.cT8("auto",s,"auto")
if(k!=null&&!k.r){t.A(new B.edZ(t,k))
u=k
w=1
break}r=t.c
r.toString
j=j?null:n.w
B.a6M(r,C.lj,j==null?t.aDJ(r,t.db):j,D.DR)
u=null
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aFV,v)},
dRl(d,e){var w,v,u=null
if(this.at||this.ax)return D.ak0
w=this.db
v=w==null
w=v?u:w.a===401
if(w===!0)return A.y(C.i1,A.o(d).ax.b,u,u,18)
if(!v&&e.length===0)return A.y(C.lj,A.o(d).ax.fy,u,u,18)
w=A.o(d).ax
v=w.rx
return A.y(D.c4T,v==null?w.k3:v,u,u,18)},
aFu(){var w=0,v=A.m(x.cW),u,t=2,s=[],r=[],q=this,p,o
var $async$aFu=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.ax){p=q.c
p.toString
u=A.ak0(p,q.cy)
w=1
break}q.A(new B.edV(q))
t=3
w=6
return A.d(q.a_Y(!0,!0),$async$aFu)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.A(new B.edW(q))
w=r.pop()
break
case 5:p=q.cy
if(p.length===0)p=A.a([],x.eA)
else{o=q.c
p=o!=null?A.ak0(o,p):A.a([],x.eA)}u=p
w=1
break
case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$aFu,v)},
dWk(d){var w,v=this
if(!v.gH().m(0,$.kc(),x.e).a.d.z)return
w=v.dTs(d)
if(w===v.ch)return
v.ch=w
$.aN.k3$.push(new B.ee_(v))},
dTs(d){if(d.length===0)return"empty"
return new A.E(d,new B.edO(),A.Y(d).i("E<1,h>")).au(0,"|")},
Zs(){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Zs=A.i(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=r.x
a1=C.c.p(a0.a.a)
if(J.an(a1)===0){w=1
break}q=a1
p=r.a.Q
w=p!=null?3:4
break
case 3:t=6
k=p.$1(a1)
w=9
return A.d(x.ad.b(k)?k:A.fR(k,x.N),$async$Zs)
case 9:o=a4
if(r.c==null){w=1
break}n=J.tC(o)
if(J.an(n)!==0)q=n
t=2
w=8
break
case 6:t=5
a2=s.pop()
m=A.T(a2)
l=A.b_(a2)
$.a3.$1("[ChatShell] messageTransformer failed: "+A.b(m)+"\n"+A.b(l))
w=8
break
case 5:w=2
break
case 8:case 4:if(J.an(q)===0){w=1
break}w=10
return A.d(r.aFV(),$async$Zs)
case 10:i=a4
if(r.c==null||i==null){w=1
break}k=r.a.as===D.pT
h=k?!1:r.Q
if(k)g=i.f
else g=r.as||i.f
k=r.gH().m(0,$.EW().$1(r.a.d).gJ(),x.B)
f=q
e=i.a
e=e.length!==0?e:null
d=i.e
k.Ym(f,g,e,d==null?i.d:d,h)
a0.sB(0,C.cd)
r.y.fJ()
case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Zs,v)},
aHV(){var w=0,v=A.m(x.H),u,t=this,s,r,q,p,o,n
var $async$aHV=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:p=t.gH()
o=p.m(0,$.EW().$1(t.a.d),x.u).a
n=A.Y(o).i("d7<1>")
o=new A.d7(o,n)
o=new A.bT(o,o.gE(0),n.i("bT<ah.E>"))
n=n.i("ah.E")
for(;;){if(!o.G()){s=null
break}r=o.d
s=r==null?n.a(r):r
if(s.b===C.pS&&C.c.p(s.c).length!==0)break}if(s==null){w=1
break}w=3
return A.d(p.m(0,$.iMj(),x.M).zO(0,s.c),$async$aHV)
case 3:q=e
p=t.c
if(p==null||q){w=1
break}B.a6M(p,D.c3L,A.q(p,x.T,x.n).f.gcts(),D.ak3)
case 1:return A.k(u,v)}})
return A.l($async$aHV,v)},
biR(){var w=this.gH().m(0,$.EW().$1(this.a.d).gJ(),x.B)
w.ayE()
w.at=""
C.d.ag(w.ax)
w.ay=null
w.sl(0,w.gl(0).fce(!0,!0,null,!1,C.zA))
this.x.sB(0,C.cd)},
e5M(d){var w,v=C.c.p(d),u=v.length
if(u===0)return
w=this.x
w.sbq(0,v)
w.siW(A.l1(C.ai,u))
this.y.fJ()},
epb(d,e){var w=A.q(d,x.T,x.n).f
switch(e){case"ai_chat_home_prompt_memory_card_create":return w.gbrW()
case"ai_chat_home_prompt_memory_deck_create":return w.gbrY()
case"ai_chat_home_prompt_memory_review_start":return w.gbs_()
case"ai_chat_home_prompt_memory_stats_get":return w.gbs0()
case"ai_chat_home_prompt_memory_cards_count":return w.gbrX()
case"ai_chat_home_prompt_memory_decks_list":return w.gbrZ()
case"ai_chat_home_prompt_notes_append":return w.gbs1()
case"ai_chat_home_prompt_practice_start":return w.gbs2()
case"ai_chat_home_prompt_library_progress_set":return w.gbrV()
case"ai_chat_home_prompt_library_books_list":return w.gbrU()
case y.c:return w.gbrT()
case y.h:return w.gbs3()
default:return""}},
eEm(d){var w,v,u,t,s=this.a
if(!(s.d.a===D.CL&&s.as===D.Jl))return C.K
s=x.eR
s=A.M(new A.aE(D.ddd,new B.edT(),s),s.i("U.E"))
s.$flags=1
w=s
C.d.dv(w,new B.edU())
v=A.a([],x.s)
for(s=w.length,u=0;u<w.length;w.length===s||(0,A.a7)(w),++u){t=C.c.p(this.epb(d,w[u].c))
if(t.length!==0)v.push(t)}return v},
eO6(d,e){var w=this.c
w.toString
B.bpR(new B.ee7(this,d,e),w,!0,D.Ds,x.H)},
cXF(){var w,v=this,u=v.gH().m(0,$.kc(),x.e).a,t=u.as.a,s=A.Y(t).i("aE<1>")
t=A.M(new A.aE(t,new B.eet(u.c),s),s.i("U.E"))
t.$flags=1
w=t
C.d.dv(w,new B.eeu())
if(w.length===0){t=v.c
t.toString
A.aY(t).dZ(0,"/settings/aiQuickPhrases",null)
return}t=v.c
t.toString
B.bpR(new B.eev(v,w),t,!0,D.Ds,x.H)},
aHp(d){return this.eNS(d)},
eNS(d){var w=0,v=A.m(x.H),u=this,t,s,r
var $async$aHp=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=u.c
r.toString
r=A.q(r,x.T,x.n)
t=u.gH().m(0,$.kc(),x.e)
s=u.c
s.toString
w=2
return A.d(B.bpR(new B.ee3(u,r.f,d,t.a.d.as),s,!0,D.Ds,x.H),$async$aHp)
case 2:return A.k(null,v)}})
return A.l($async$aHp,v)},
eO7(d,e){var w,v,u=this,t=u.gH().m(0,$.kc(),x.e).a,s=t.Q.b,r=new A.aE(s,new B.eep(),A.Y(s).i("aE<1>")).gE(0),q=t.as.a.length,p=t.at.a.length
s=t.ax
w=s.a
v=w>=0&&w<s.b.length
s=u.c
s.toString
s=A.q(s,x.T,x.n)
w=u.c
w.toString
B.bpR(new B.eeq(u,e,s.f,r,q,p,v,t.ay.a),w,!0,D.Ds,x.H)},
ag4(d){return this.eQ8(d)},
eQ8(d){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$ag4=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
m=r.gH()
q=m.m(0,$.bee(),x.ep)
l=d.b
w=7
return A.d(q.a86(C.k.a4(l,1,20),d.a),$async$ag4)
case 7:p=f
o=p.a
if(J.an(o)===0){l=r.c
if(l==null){w=1
break}B.a6M(l,C.dx,A.ac($.aG(),x.T,x.n).ga9().gbZE(),D.ak3)
m=m.m(0,$.EW().$1(r.a.d).gJ(),x.B)
m.sl(0,m.gl(0).bFZ(!0))
w=1
break}n=C.k.a4(l,1,J.an(o))
m.m(0,$.pQ().gJ(),x.d).feD(o,n)
m=m.m(0,$.EW().$1(r.a.d).gJ(),x.B)
m.sl(0,m.gl(0).bFZ(!0))
m=r.c
if(m==null){w=1
break}w=8
return A.d(A.ikE(m,null,"randomPractice",null,null,n,null,null,x.z),$async$ag4)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
m=r.c
if(m==null){w=1
break}B.a6M(m,C.lj,A.ac($.aG(),x.T,x.n).ga9().gbZg(),D.DR)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$ag4,v)},
dKn(d){switch(d.a){case 2:return"\u9ad8"
case 1:return"\u4e2d"
case 0:return"\u4f4e"}},
dKm(d){var w,v,u=d.r,t=A.Y(u).i("E<1,h>")
u=A.M(new A.E(u,new B.edu(),t),t.i("ah.E"))
u.$flags=1
w=u
if(w.length===0)return"\u65e0\u53ef\u6267\u884c\u52a8\u4f5c"
v=A.fq(w,0,A.fY(3,"count",x.S),A.Y(w).c).au(0,"\u3001")
u=w.length
if(u<=3)return v
return v+" \u7b49"+u+"\u9879"},
cGE(d,e){var w=C.c.p(d)
if(w.length<=e)return w
return C.c.a3(w,0,e)+"..."},
dXI(d){return this.cGE(d,18)},
dWj(d,e,f,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=A.o(d).ax,h=k.a,g=h.f
g=C.c.p(g)
w=h.as===D.pT
h=k.c
h.toString
if(A.dK(A.b7(h,j,x.w).w.a.a)!==C.bq){k.c.toString
v=A.aDb().c}else v=!0
h=!v
u=w?34:40
t=w?34:40
s=i.b
r=s.I(0.12)
q=A.a5(14)
p=k.a
o=p.y
u=A.H(j,A.y(o,s,j,j,w?18:20),C.o,j,j,new A.P(r,j,j,q,j,j,j,C.t),j,t,j,j,j,j,j,u)
p=p.e
t=A.o(d).ok.w
s=x.p
t=A.a([A.c(p,j,j,1,C.Z,j,j,t==null?j:t.ar(i.k3,C.H),j,j,j)],s)
if(g.length!==0&&!w){g=k.a.f
r=A.o(d).ok.Q
if(r==null)r=j
else{q=i.rx
r=r.L(q==null?i.k3:q)}C.d.D(t,A.a([C.dL,A.c(g,j,j,1,C.Z,j,j,r,j,j,j)],s))}n=A.a2(A.vN(A.G(A.a([u,C.al,A.a2(A.B(t,C.y,j,C.i,C.D,0,j,C.n),1)],s),C.l,j,C.i,C.j,0,j,j),h,j,j,C.dV,!1,D.eG5,!0),1)
m=A.a([],s)
g=k.a
if(g.x&&!g.r){g=A.eI(d,C.bJ,x.g4)
g.toString
m.push(new A.F(D.ain,new B.a5A(C.h1,g.ge_(),new B.edE(d),h,j,D.eFL,j),j))}if(k.a.w!=null){g=m.length===0?0:10
u=A.eI(d,C.bJ,x.g4)
u.toString
u=u.ge1()
t=k.a.w
t.toString
m.push(new A.F(new A.a_(0,0,g,0),new B.a5A(C.bN,u,t,h,j,D.eEy,j),j))}g=w?220:260
u=k.at||k.ax?A.q(d,x.T,x.n).f.ga2c():f.b
t=A.o(d).ok.as
l=new A.dy(new A.aZ(0,g,0,1/0),A.vN(A.G(A.a([new A.a75(f.d,f.a,j),C.S,A.a2(A.c(u,j,j,1,C.Z,j,j,t==null?j:t.ar(i.k3,C.H),j,j,j),1),C.c6,k.dRl(d,a0)],s),C.l,j,C.i,C.D,0,j,j),h,j,new B.edF(k,a0,f),D.aiw,!1,D.eHb,!0),j)
if(w){g=A.M(m,x.m)
g.push(n)
g.push(C.cS)
g.push(l)
if(e.a.length!==0)C.d.D(g,A.a([C.cS,new B.a5A(C.vW,A.q(d,x.T,x.n).f.ga29(),k.gcQR(),h,j,D.eEV,j)],s))
return A.G(g,C.y,j,C.i,C.j,0,j,j)}g=A.a([],s)
if(!a1)g.push(new B.a5A(C.dP,A.q(d,x.T,x.n).f.gTp(),new B.edG(k,e),h,e.w.length,D.eEl,j))
g.push(new B.a5A(C.ft,A.q(d,x.T,x.n).f.gaKr(),new B.edH(k,e,f),h,j,D.eDZ,j))
if(a1){h=A.M(m,x.m)
h.push(n)
h.push(C.cS)
h.push(l)
h.push(C.cS)
C.d.D(h,g)
return A.G(h,C.y,j,C.i,C.j,0,j,j)}h=A.M(m,x.m)
h.push(n)
h=A.G(h,C.y,j,C.i,C.j,0,j,j)
u=A.a([A.a2(l,1),C.cS],s)
C.d.D(u,new A.hs(g,new B.edI(),x.gB))
u.pop()
return A.B(A.a([h,C.bh,A.G(u,C.l,j,C.i,C.j,0,j,j)],s),C.aJ,D.eEJ,C.i,C.j,0,j,C.n)},
dWi(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.q(d,x.T,x.n).f,l=A.o(d).ax,k=e.a
if(k.length===0){k=o.eEm(d)
w=A.fq(k,0,A.fY(6,"count",x.S),A.Y(k).c).a6(0)
k=A.dK(A.b7(d,n,x.w).w.a.a)
v=l.b
u=v.I(0.1)
t=A.a5(28)
s=o.a
t=A.H(n,A.y(s.y,v,n,n,34),C.o,n,n,new A.P(u,n,n,t,n,n,n,C.t),n,76,n,n,n,n,n,76)
s=s.e
u=A.o(d).ok.r
v=A.c(s,n,n,n,n,n,n,u==null?n:u.ar(l.k3,C.H),C.ag,n,n)
u=o.a.f
s=C.c.p(u)
u=s.length!==0?u:m.gaKp()
s=A.o(d).ok.z
if(s==null)s=n
else{r=l.rx
s=s.jb(r==null?l.k3:r,1.55)}r=x.p
s=A.a([t,C.mC,v,C.N,A.c(u,n,n,n,n,n,n,s,C.ag,n,n)],r)
if(w.length!==0){v=m.gbs5()
u=A.o(d).ok.x
v=A.c(v,n,n,n,n,n,n,u==null?n:u.ar(l.k3,C.H),n,n,n)
u=m.gbs4()
t=A.o(d).ok.Q
if(t==null)t=n
else{q=l.rx
t=t.L(q==null?l.k3:q)}t=A.c(u,n,n,n,n,n,n,t,n,n,n)
u=A.Y(w).i("E<1,KU>")
k=A.M(new A.E(w,new B.edw(o,k===C.bq,l,d),u),u.i("ah.E"))
k.$flags=1
C.d.D(s,A.a([C.aq,new A.da(C.bZ,n,n,v,n),C.cF,new A.da(C.bZ,n,n,t,n),C.lH,new A.da(C.bZ,n,n,A.bS(C.R,k,C.aw,C.R,10,10),n)],r))}return new A.ie(A.au(A.bv(new A.dy(F.Ii,A.B(s,C.l,n,C.i,C.D,0,n,C.n),n),C.p,n,C.z,n,D.aiM,n,n,!1,C.O),n,n),D.eET)}o.dWk(k)
p=o.a.as===D.pT?C.f8:C.yq
return A.zH(A.fO(o.w,new B.edx(o,e),k.length,p,n,C.O,!1),A.ES(),n)},
dO0(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.q(a1,x.T,x.n).f,f=A.o(a1).ax,e=!a2.b,d=!e||a2.d,a0=i.c
a0.toString
if(A.dK(A.b7(a0,h,x.w).w.a.a)!==C.bq){i.c.toString
w=A.aDb().c}else w=!0
a0=A.a([],x.s)
if(i.Q&&i.a.as===D.Jl)a0.push(g.gYE())
if(i.as||i.cx.f)a0.push(g.gaKo())
v=x.p
u=A.a([],v)
t=a2.f
if(t!=null){s=f.CW
if(s==null)s=f.y
r=t.c
if(C.c.p(r).length===0)r=g.ga9().c2x(t.r.length)
q=g.ga9()
p=i.dKn(t.e)
p=q.c_Q(i.dKm(t),p)
t=g.ga9().gVD()
q=A.o(a1).ok.as
q=q==null?h:q.ar(f.k3,C.H)
o=f.rx
if(o==null)o=f.k3
n=a2.d
t=A.rn(C.bN,o,t,q,n?h:new B.edy(i),!1,h)
q=n?g.ga9().gc07():g.ga9().gc1d()
o=n?C.rS:C.ik
m=f.b
l=m.I(0.18)
k=A.o(a1).ok.as
k=k==null?h:k.ar(f.k3,C.H)
u.push(B.i3X(s,!w,C.DX,D.eEG,p,r,A.bS(C.R,A.a([t,A.rn(o,m,q,k,n?h:new B.edz(i),!0,l)],v),C.aw,C.R,8,8)))}t=a2.e
if(t!=null){s=g.ga9().c02(t.b)
t=g.ga9().c_j(t.a)
r=g.ga9().gbZx()
q=A.o(a1).ok.as
q=q==null?h:q.ar(f.k3,C.H)
p=f.rx
if(p==null)p=f.k3
r=A.rn(C.bN,p,r,q,d?h:new B.edA(i),!1,h)
q=g.ga9().gc_9()
p=f.b
o=p.I(0.18)
n=A.o(a1).ok.as
n=n==null?h:n.ar(f.k3,C.H)
u.push(B.i3X(f.y,!w,C.f3,D.eEk,t,s,A.bS(C.R,A.a([r,A.rn(C.ik,p,q,n,d?h:new B.edB(i,a2),!0,o)],v),C.aw,C.R,8,8)))}t=a2.c
if(t||!e||a2.d){e=a2.d
if(e)s=C.li
else s=t?D.c5c:C.fa
if(e)e=g.ga9().gaUa()
else e=t?g.gaKs():g.gaKt()
if(i.a.as===D.pT)t=g.gTo()
else t=i.Q?g.gaKq():g.gTo()
u.push(B.i3X(f.b,!w,s,D.eGt,t,e,D.bjF))}e=A.a([],v)
for(t=u.length,j=0;j<u.length;u.length===t||(0,A.a7)(u),++j)C.d.D(e,A.a([u[j],C.bh],v))
u=A.a([],v)
if(a0.length!==0){t=x.he
a0=A.M(new A.E(a0,new B.edC(f,a1),t),t.i("ah.E"))
a0.$flags=1
C.d.D(u,A.a([A.bS(C.R,a0,C.aw,C.R,8,8),C.bh],v))}if(i.a.as===D.pT)a0=g.gTo()
else a0=i.Q?g.gaKq():g.gTo()
t=A.o(a1).ok.y
t=t==null?h:t.jb(f.k3,1.45)
s=A.o(a1).ok.y
if(s==null)s=h
else{r=f.rx
s=s.L(r==null?f.k3:r)}t=A.a2(B.ifV(i.x,!d,i.y,7,1,new B.edD(i),C.rH,a0,s,t),1)
a0=d?C.ZA:C.or
u.push(A.G(A.a([t,C.al,B.ifS(a0,d?h:i.gdWl(),52)],v),C.fW,h,C.i,C.j,0,h,h))
e.push(A.hYI(A.B(u,C.y,h,C.i,C.D,0,h,C.n),!w,C.aij))
return A.B(e,C.aJ,h,C.i,C.D,0,h,C.n)},
dTq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!f||h.a.as===D.pT)return g
w=A.q(d,x.T,x.n).f
v=x.x
u=h.gH().S(A.arW($.kc(),new B.edL(),x.e,v),v)
v=x.p
t=A.a([E.a7l(w.ga29(),C.es,C.kG,h.gcQR(),!1,D.eFx,h.a.f,g)],v)
s=e.w
r=s.length
if(r===0){r=w.gTp()
q=A.o(d).ok.Q
if(q==null)q=g
else{p=A.o(d).ax
o=p.rx
q=q.L(o==null?p.k3:o)}t.push(new A.F(D.aiR,A.c(r,g,g,g,g,g,g,q,g,g,g),g))}else for(q=e.r,p=x.ec,o=x.b2,n=0;n<s.length;s.length===r||(0,A.a7)(s),++n){m=s[n]
if(u){l=d.N(o)
k=l==null?g:p.a(J.t(l.r.e,C.bJ))
k.toString
j=k.aSq(m.e)}else j=g
t.push(new B.b7b(m.b,j,m.a===q,new B.edM(h,m),new B.edN(h,m),g))}r=h.c
r.toString
if(A.dK(A.b7(r,g,x.w).w.a.a)!==C.bq){h.c.toString
r=A.aDb().c}else r=!0
q=w.gTp()
s=s.length
p=A.o(d).ok.at
p=p==null?g:p.ar(A.o(d).ax.k3,C.H)
p=A.rn(g,g,""+s,p,g,!1,g)
s=h.a.e
o=A.o(d).ok.Q
if(o==null)o=g
else{k=A.o(d).ax
i=k.rx
o=o.L(i==null?k.k3:i)}return new A.Oo(t,296,A.B(A.a([new A.Hk(q,p,g),C.cF,A.c(s,g,g,g,g,g,g,o,g,g,g)],v),C.y,g,C.i,C.j,0,g,C.n),g,!r,C.a_,g,D.eDR)},
dTp(d,e){var w,v,u=this,t=null,s=u.gH().S($.EW().$1(u.a.d),x.u),r=A.ak0(d,u.cy),q=r.length===0?u.cx:C.d.cu(r,new B.edJ(u),new B.edK(r)),p=u.a.r,o=u.dTq(d,s,e),n=u.dWj(d,s,q,r,e),m=x.T,l=x.n,k=A.q(d,m,l),j=x.w,i=A.dK(A.b7(d,t,j).w.a.a)===C.bq,h=s.c,g=h||s.b||s.d
if(s.d)w=k.f.ga9().gaUa()
else w=h?A.q(d,m,l).f.gaKs():A.q(d,m,l).f.gaKt()
v=i?u.dXI(w):w
k=u.c
k.toString
if(A.dK(A.b7(k,t,j).w.a.a)!==C.bq){u.c.toString
k=A.aDb().c}else k=!0
if(i&&g){j=u.a
m=j.as===D.pT?j.e:A.q(d,m,l).f.gTq()
l=A.o(d).ok.at
m=A.B(A.a([new A.Hk(m,t,t),C.bh,A.rn(t,t,v,l==null?t:l.ar(A.o(d).ax.k3,C.H),t,!1,t)],x.p),C.y,t,C.i,C.j,0,t,C.n)}else{j=u.a
m=A.a([A.a2(new A.Hk(j.as===D.pT?j.e:A.q(d,m,l).f.gTq(),t,t),1)],x.p)
if(g){l=A.o(d).ok.at
m.push(A.rn(t,t,v,l==null?t:l.ar(A.o(d).ax.k3,C.H),t,!1,t))}m=A.G(m,C.l,t,C.i,C.j,0,t,t)}l=A.o(d).ax
j=l.to
if(j==null){j=l.C
l=j==null?l.k3:j}else l=j
k=A.iU(A.B(A.a([new A.F(D.XR,m,t),A.lx(l.I(0.16),t,1,t,t,t),A.a2(u.dWi(d,s),1)],x.p),C.l,t,C.i,C.j,0,t,C.n),!k,!0,t,!1,t,C.Y,D.eG_)
return B.ibu(u.dO0(d,s),p,n,k,o)},
v(d){var w=null,v=this.dTp(d,A.dK(A.b7(d,w,x.w).w.a.a)!==C.bq)
if(this.a.r)return A.cW(w,v,C.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eew(d),w,w,w,w,w,w,w,w,w,!1,C.aV)
return A.cW(w,A.cF(w,C.a4,v,w,w,w,w,!1,w,w,w),C.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eex(d),w,w,w,w,w,w,w,w,w,!1,C.aV)}}
B.azo.prototype={
v(d){var w=null,v=A.o(d)
return new A.dy(new A.aZ(0,560,0,A.b7(d,C.dt,x.w).w.a.b*0.72),A.B(A.a([new A.Hk(A.q(d,x.T,x.n).f.gLD(),w,w),C.J,new A.ep(1,C.bB,A.iX(w,new B.ffI(this,v.ax),this.c.length,w,w,w,C.O,new B.ffJ(),!0),w)],x.p),C.y,w,C.i,C.D,0,w,C.n),w)}}
B.a5A.prototype={
v(d){var w=this,v=null,u=A.lV(A.vN(A.y(w.c,A.o(d).ax.k3,v,v,20),w.f,v,w.e,C.aC,!1,w.w,!0),v,w.d,v,v,v,v),t=w.r
if((t==null?0:t)>0){t.toString
return B.ifP(u,t)}return u}}
B.b7b.prototype={
v(d){var w=this
return E.a7l(w.c,D.an4,C.kG,w.f,w.e,null,w.d,new B.c8a(w.r,null))}}
B.c8a.prototype={
v(d){return new B.bpP(D.c3P,A.a([new B.AU(A.q(d,x.T,x.n).f.gbrS(),C.dy,this.c,!0,null,44,null)],x.fY),34,34,180,null)}}
B.Yy.prototype={
v(d){var w,v,u=this,t=null,s=A.o(d).ax,r=s.b,q=r.I(0.12),p=A.a5(14),o=A.H(t,A.y(u.e,r,t,t,t),C.o,t,t,new A.P(q,t,t,p,t,t,t,C.t),t,44,t,t,t,t,t,44)
q=u.r
if((q==null?0:q)>0){q.toString
w=B.ifP(o,q)}else w=u.w?new B.aK1(o,!0,0,r,t):o
r=A.a5(12)
q=A.o(d).ok.x
q=q==null?t:q.ar(s.k3,C.H)
q=A.c(u.c,t,t,t,t,t,t,q,t,t,t)
p=A.o(d).ok.Q
if(p==null)p=t
else{v=s.rx
p=p.jb(v==null?s.k3:v,1.4)}v=x.p
p=A.a2(A.B(A.a([q,C.aM,A.c(u.d,t,t,t,t,t,t,p,t,t,t)],v),C.y,t,C.i,C.j,0,t,C.n),1)
q=s.rx
return new A.F(C.kG,A.ao8(A.cE(!1,C.a9,!0,t,A.bY(!1,r,!0,new A.F(C.f8,A.G(A.a([w,C.aVw,p,C.al,A.y(C.kL,q==null?s.k3:q,t,t,t)],v),C.l,t,C.i,C.j,0,t,t),t),t,!0,!1,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t,t),C.o,C.a4,0,t,t,t,t,t,C.b_),C.Y),t)}}
B.c9m.prototype={
v(d){var w,v,u=this,t=null,s=A.o(d).ax,r=u.c,q=s.k3,p=A.a_e(r,q,u.d,C.eh,t,18),o=A.o(d).ok.x
o=o==null?t:o.ar(q,C.H)
o=A.c(u.e,t,t,t,t,t,t,o,t,t,t)
w=A.o(d).ok.Q
if(w==null)q=t
else{v=s.rx
q=w.jb(v==null?q:v,1.45)}w=x.p
q=A.a([A.G(A.a([p,C.al,A.a2(A.B(A.a([o,C.aM,A.c(u.f,t,t,t,t,t,t,q,t,t,t)],w),C.y,t,C.i,C.j,0,t,C.n),1)],w),C.y,t,C.i,C.j,0,t,t)],w)
C.d.D(q,A.a([C.J,u.w],w))
return A.vO(r,0.18,A.B(q,C.y,t,C.i,C.j,0,t,C.n),u.r,t,C.f8,u.x,0.1)}}
B.aLQ.prototype={
v(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=A.aO(d),k=A.o(d).ax,j=A.lJ(d),i=n.f
if(i==null){t=l.f.z
if(t==null)t=C.b8
s=n.d?18:14
i=t.oL(k.k3,s)}w=i
if(!n.d){k=A.o(d).ax
j=A.lJ(d)
t=k.RG
t=(t==null?k.k2:t).I(0.6)
s=A.a5(4)
return A.H(m,A.c(n.c,m,m,2,C.Z,m,m,j.rL(w.z0(14,1.25)),m,m,m),C.o,m,C.ku,new A.P(t,m,m,s,m,m,m,C.t),m,m,m,m,C.oh,m,m,m)}try{t=j.no(w)
v=A.t9(n.c,C.ew,new B.d1T(n,d),t)
t=l.c.e
s=l.c.d
r=l.c.d
q=k
p=q.RG
q=(p==null?q.k2:p).I(0.5)
p=l.a
t=A.H(m,A.bv(A.au(v,m,m),C.p,m,C.z,m,m,m,m,!1,C.aI),C.o,m,m,new A.P(q,m,m,p.a.c,m,m,m,C.t),m,m,m,new A.a_(0,r,0,r),new A.a_(s,t,s,t),m,m,1/0)
return t}catch(o){u=A.T(o)
return n.cEh(d,n.c,J.w(u))}},
cEh(d,e,f){var w,v=null,u=A.aO(d),t=A.o(d).ax,s=u.c.c,r=C.dI.I(0.1),q=A.b8(C.dI.I(0.3),C.C,1),p=A.y(C.b2,C.dI,v,v,16),o=u.f.Q
if(o==null)o=C.b8
w=t.rx
return A.H(v,A.G(A.a([p,new A.N(s,s,v,v),new A.ep(1,C.bB,A.c(e,v,v,v,v,v,v,o.L(w==null?t.k3:w),v,v,v),v)],x.p),C.l,v,C.i,C.D,0,v,v),C.o,v,v,new A.P(r,v,q,u.a.a.b,v,v,v,C.t),v,v,v,v,new A.a_(s,s,s,s),v,v,v)}}
B.bxy.prototype={
v(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.iWH(n),l=m.length
if(l===0)return p.bdc(d,n)
if(l===1&&C.d.ga_(m).a===D.FM){n=C.d.ga_(m).b
return p.bdc(d,n==null?"":n)}w=A.a([],x.p)
for(n=m.length,l=p.d,v=0;v<m.length;m.length===n||(0,A.a7)(m),++v){u=m[v]
t=u.a
if(t===D.FM){s=u.b
if(s==null)s=""
if(s.length!==0)w.push(p.bdc(d,s))}else if(t===D.aMr){r=u.c
t=r.b
q=r.a
if(t)w.push(new A.N(1/0,o,new B.aLQ(q,!0,!0,l,o),o))
else w.push(new B.aLQ(q,!1,!0,l,o))}}return A.bS(C.R,w,C.hQ,C.R,0,0)},
bdc(d,e){var w,v=null,u=A.aO(d),t=A.o(d),s=this.d
if(s==null){w=u.f.y
if(w==null)w=C.b8
s=w.jb(t.ax.k3,1.5)}t=A.zH(A.c(e,v,v,v,v,v,v,s,v,v,v),A.ES(),v)
return t}}
B.aqi.prototype={
bU(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.o(a2).ax,g=j.e,f=g.b===C.o4,e=$.kc(),d=x.e,a0=x.g_,a1=a3.S(A.arW(e,new B.daC(),d,a0),a0)
a0=x.f_
w=a3.S(A.arW(e,new B.daD(),d,a0),a0)
v=!f||a1.a
u=f?a1.e:a1.c
e=!f
t=e&&!g.e?B.j2y(g.c):i
s=e&&!g.e?B.jeJ(g.c):C.f4
d=t==null
r=d?i:t.b
if(r==null)r=s
q=d?i:t.a
if(q==null)q=g.c
p=e&&g.e&&g.r.length!==0
d=f?C.fW:C.y
a0=x.p
o=A.a([],a0)
if(u){n=x.T
m=x.n
n=f?A.ac($.aG(),n,m).ga9().gc0r():A.q(a2,n,m).f.ga9().gbZt()
m=A.o(a2).ok.as
if(m==null)m=i
else{l=h.rx
m=m.ar(l==null?h.k3:l,C.H)}o.push(new A.F(G.ail,A.c(n,i,i,i,i,i,i,m,i,i,i),i))}if(p)o.push(D.e6W)
else if(e&&g.r.length!==0)o.push(new A.F(C.kG,new B.aV0(g.r,!a1.r,i),i))
o.push(new A.dy(F.Ii,new B.c0t(g,q,f,j.f,a1.y,w.b,i),i))
if(e&&r.length!==0)o.push(new A.F(C.XI,new B.bS8(r,j.x,i),i))
if(e&&q.length!==0&&!g.e){g=A.a([B.ifS(C.im,new B.daE(j,a2,t),38)],a0)
o.push(new A.F(C.XI,A.G(g,C.l,i,C.i,C.D,0,i,i),i))}k=A.B(o,d,i,C.i,C.j,0,i,C.n)
g=f?C.eP:C.i
d=A.a([],a0)
if(e&&v)C.d.D(d,A.a([new B.b2T(!1,i),C.al],a0))
d.push(new A.ep(1,C.bB,k,i))
if(f&&v)C.d.D(d,A.a([C.al,new B.b2T(!0,i)],a0))
return new A.F(C.L7,A.G(d,C.y,i,g,C.j,0,i,i),i)},
azd(d,e){return this.dZ5(d,e)},
dZ5(d,e){var w=0,v=A.m(x.H),u
var $async$azd=A.i(function(f,g){if(f===1)return A.j(g,v)
for(;;)switch(w){case 0:w=3
return A.d(A.iL(new A.ia(e)),$async$azd)
case 3:if(d.e==null){w=1
break}B.a6M(d,C.bu,A.ac($.aG(),x.T,x.n).ga9().gaTT(),D.ak2)
case 1:return A.k(u,v)}})
return A.l($async$azd,v)}}
B.b2T.prototype={
v(d){var w=A.o(d).ax,v=this.c,u=v?C.fK:C.dF,t=v?w.b:w.y
if(v)v=w.c
else{v=w.as
if(v==null)v=w.z}return A.a_e(t,v,u,C.eh,null,18)}}
B.c0t.prototype={
v(d){var w,v,u,t,s,r=this,q=null,p=A.o(d),o=p.ax
if(r.w){w=r.d
v=$.i8a()
if(!v.b.test(w)){v=$.i8b()
w=v.b.test(w)
u=w}else u=!0}else u=!1
w=r.c
if(w.c.length===0)w=w.e||w.f
else w=!1
if(w)t=D.ei3
else{w=r.d
v=p.ok.y
if(u){if(v==null)v=q
else{s=v.r
if(s==null)s=16
s=v.Jc(o.k3,s*r.r,1.6)
v=s}v=new B.bxy(w,v,q)
t=v}else{if(v==null)v=q
else{s=v.r
if(s==null)s=16
s=v.Jc(o.k3,s*r.r,1.6)
v=s}v=A.c(w,q,q,q,q,q,q,v,q,q,q)
t=v}}w=r.e
v=w?o.b:o.y
s=w?0.16:0.08
w=w?0.22:0.16
return A.vO(v,w,t,r.f,q,C.a_,q,s)}}
B.bS8.prototype={
v(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=A.o(d).ax,h=A.a([],x.p)
for(w=this.c,v=i.k3,u=i.b,t=x.s,s=0;s<w.length;s=q){r=w[s]
q=s+1
p=J.L(r)
o=p.h(r,"pageNumber")
if(o==null)o=p.h(r,"page")
n=o==null?p.h(r,"page_number"):o
if(n==null)n=p.h(r,"p")
o=A.W(p.h(r,"spanId"))
m=o==null?A.W(p.h(r,"span_id")):o
if(m==null)m=""
l=typeof n=="number"?"P"+C.m.R(n):j
r=m.length
if(r===0)k=j
else k=r<=18?m:C.c.a3(m,0,18)+"..."
r=A.a([],t)
if(l!=null)r.push(l)
if(k!=null)r.push(k)
r=r.length===0?"Citation "+q:C.d.au(r," \xb7 ")
p=A.o(d).ok.at
p=p==null?j:p.ar(v,C.U)
h.push(A.rn(C.er,u,r,p,new B.ef0(this,s,d),!1,j))}return A.bS(C.R,h,C.aw,C.R,8,8)}}
B.aV0.prototype={
U(){return new B.b8L(null,null)}}
B.b8L.prototype={
ae(){var w,v,u=this,t=null
u.ai()
w=u.a.e
u.d=w
w=A.cV(t,C.a9,t,1,t,u)
u.e=w
v=x.Z
u.f=new A.be(A.du(C.cP,w,t),new A.bQ(0,0.5,v),v.i("be<bL.T>"))
u.r=A.du(C.cP,u.e,t)
if(u.d)u.e.sB(0,1)},
b8(d){this.bg(d)
this.a.toString},
q(){var w=this.e
w===$&&A.e()
w.q()
this.dHN()},
eTz(){this.a.toString
this.A(new B.fE2(this))},
dZ_(){var w=this,v=null
A.iL(new A.ia(w.a.c))
w.A(new B.fE0(w))
w.c.N(x.gV).f.a0(A.am(v,v,v,v,v,C.p,v,A.c(A.ac($.aG(),x.T,x.n).ga9().gc1v(),v,v,v,v,v,v,v,v,v,v),v,A.h0(0,0,0,0,0,1),v,v,v,v,v,v,v,v,v,v))
A.i3(C.dv,new B.fE1(w),x.fL)},
v(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.aO(d),f=A.o(d).ax
i.a.toString
w=A.dK(A.b7(d,h,x.w).w.a.a)===C.bq?180:280
v=g.c
u=v.d
t=C.f5.I(0.08)
s=g.a.a
r=s.d
q=A.b8(C.f5.I(0.25),C.C,1)
v=v.a
v=new A.a_(v,v,v,v).aE(0,C.rJ)
p=C.f5.I(0.15)
v=A.H(h,A.y(C.fa,C.f5,h,h,18),C.o,h,h,new A.P(p,h,h,s.b,h,h,h,C.t),h,h,h,h,v,h,h,h)
p=$.aG()
o=x.T
n=x.n
m=A.ac(p,o,n).ga9().gaUf()
l=g.f
k=l.as
j=x.p
k=A.a([v,new A.N(u,u,h,h),A.c(m,h,h,h,h,h,h,(k==null?C.b8:k).ar(C.WF,C.U),h,h,h)],j)
i.a.toString
k.push(new A.RS(h))
v=i.d
v===$&&A.e()
if(v){v=i.w
m=v?C.bu:C.im
k.push(A.ay(h,D.bp7,h,A.y(m,v?C.bi:C.WR,h,h,16),16,h,i.gdYZ(),C.Y,h,h,A.ac(p,o,n).ga9().gbZl(),h))}v=i.f
v===$&&A.e()
k.push(A.X5(C.ah,A.y(C.iS,C.WR,h,h,18),h,v))
k=A.bY(!1,r,!0,new A.F(new A.a_(u,u,u,u),A.G(k,C.l,h,C.i,C.j,0,h,h),h),h,!0,!1,h,h,h,h,h,h,h,h,h,h,h,i.geTy(),h,h,h,h,h,h,h,h)
v=i.r
v===$&&A.e()
p=f.k2.I(0.5)
o=A.dK(A.b7(d,h,x.w).w.a.a)
n=i.a.c
l=l.Q
m=l==null?C.b8:l
return A.H(h,A.B(A.a([k,A.os(A.h3(v,new B.fE3(i),A.H(h,A.H(h,new A.dy(new A.aZ(0,1/0,0,w),A.asU(A.bv(A.c(n,h,h,h,h,h,h,m.faQ(f.k3.I(0.85),C.cM,1.6),h,h,h),C.p,h,C.z,h,h,h,h,!1,C.O),h,h,o!==C.bq),D.eFM),C.o,h,h,new A.P(p,h,h,s.c,h,h,h,C.t),h,h,h,h,new A.a_(u,u,u,u),h,h,1/0),C.o,h,h,h,h,h,h,h,new A.a_(u,0,u,u),h,h,h)),C.p,h)],j),C.y,h,C.i,C.j,0,h,C.n),C.o,h,h,new A.P(t,h,q,r,h,h,h,C.t),h,h,h,new A.a_(0,0,0,u),h,h,h,h)}}
B.aV1.prototype={
U(){return new B.cbx(null,null)}}
B.cbx.prototype={
ae(){this.ai()
var w=A.cV(null,C.rA,null,1,null,this)
w.Bi(0)
this.d=w},
q(){var w=this.d
w===$&&A.e()
w.q()
this.dHO()},
v(d){var w,v,u,t,s,r=null,q=A.aO(d),p=q.c,o=p.d
p=p.c
w=C.f5.I(0.08)
v=A.b8(C.f5.I(0.2),C.C,1)
u=A.y(C.fa,C.f5,r,r,16)
t=A.ac($.aG(),x.T,x.n).ga9().gaUf()
s=q.f.as
t=A.c(t,r,r,r,r,r,r,(s==null?C.b8:s).ar(C.WE,C.av),r,r,r)
s=this.d
s===$&&A.e()
return A.H(r,A.G(A.a([u,new A.N(p,p,r,r),t,new A.N(p,p,r,r),A.h3(s,new B.fE5(this,q),r)],x.p),C.l,r,C.i,C.D,0,r,r),C.o,r,r,new A.P(w,r,v,q.a.a.f,r,r,r,C.t),r,r,r,r,new A.a_(o,p,o,p),r,r,r)}}
B.bcs.prototype={
q(){var w=this,v=w.b9$
if(v!=null)v.ad(0,w.gfl())
w.b9$=null
w.aj()},
bZ(){this.cp()
this.cl()
this.fm()}}
B.bct.prototype={
q(){var w=this,v=w.b9$
if(v!=null)v.ad(0,w.gfl())
w.b9$=null
w.aj()},
bZ(){this.cp()
this.cl()
this.fm()}}
B.Kp.prototype={
gb5d(){var w,v,u=this.a
if(u===D.CL)return"global"
w=this.b
w=C.cK.bV(C.c.p(w==null?"":w))
w=C.Ch.gmx().bV(w)
v=A.at(w,"=","")
if(u===D.afu)return"book:"+v
if(u===D.afv)return"online:"+v
if(u===D.bJu)return"foliate:"+v
if(u===D.y3)return"pdf:"+v
return"note:"+v},
n(d,e){if(e==null)return!1
return e instanceof B.Kp&&e.a===this.a&&e.b==this.b},
gF(d){return A.as(this.a,this.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)},
k(d){return"ChatScopeKey(scope: "+this.a.k(0)+", refId: "+A.b(this.b)+")"}}
B.a_L.prototype={
O(){return"ChatScope."+this.b}}
B.dl3.prototype={}
B.Az.prototype={
Y(){var w=this,v=w.c,u=A.Y(v).i("E<1,K<h,@>>")
v=A.M(new A.E(v,new B.cDP(),u),u.i("ah.E"))
return A.x(["id",w.a,"title",w.b,"messages",v,"createdAt",w.d.c2(),"updatedAt",w.e.c2()],x.N,x.z)},
gaf(d){return this.a}}
B.OT.prototype={
vU(d,e,f,g,h,i,j,k,l,m){var w,v,u,t=this,s=j==null?t.a:j,r=h==null?t.b:h,q=i==null?t.c:i,p=g==null?t.d:g
if(e)w=null
else w=l==null?t.e:l
if(d)v=null
else v=k==null?t.f:k
u=f==null?t.r:f
return new B.OT(s,r,q,p,w,v,u,m==null?t.w:m)},
fcg(d,e,f,g,h){var w=null
return this.vU(d,e,w,w,f,g,h,w,w,w)},
bH2(d,e,f){var w=null
return this.vU(!1,!1,w,w,d,e,f,w,w,w)},
bFZ(d){var w=null
return this.vU(!1,d,w,w,w,w,w,w,w,w)},
faM(d,e,f){var w=null
return this.vU(d,!1,w,e,w,f,w,w,w,w)},
f5K(d){var w=null
return this.vU(!1,!1,w,d,w,w,w,w,w,w)},
f6o(d){var w=null
return this.vU(!1,!1,w,w,w,w,d,w,w,w)},
f9l(d,e){var w=null
return this.vU(!1,!1,d,w,w,w,w,w,w,e)},
f4v(d){var w=null
return this.vU(d,!1,w,w,w,w,w,w,w,w)},
fce(d,e,f,g,h){var w=null
return this.vU(d,e,f,g,w,w,h,w,w,w)},
fcf(d,e,f,g,h){var w=null
return this.vU(d,e,f,w,w,w,g,w,w,h)},
d6L(d,e,f,g){var w=null
return this.vU(d,e,f,w,w,w,g,w,w,w)},
d5h(d){var w=null
return this.vU(!1,!1,w,w,w,d,w,w,w,w)},
fa0(d,e){var w=null
return this.vU(!1,!1,w,w,w,d,w,e,w,w)},
fa1(d,e){var w=null
return this.vU(!1,!1,w,w,w,d,w,w,e,w)},
f7s(d){var w=null
return this.vU(!1,!1,w,w,w,w,w,w,w,d)}}
B.a_J.prototype={
gd0C(){var w,v=this.x,u=v.a
if(u===D.y3){w=v.b
w=C.c.p(w==null?"":w).length!==0}else w=!1
if(!w)if(u===D.aft){v=v.b
v=C.c.ao(C.c.p(v==null?"":v),"pdf:")}else v=!1
else v=!0
return v},
gezG(){var w,v,u,t=null
if(!this.gd0C())return t
w=this.x
if(w.a===D.y3){w=w.b
v=C.c.p(w==null?"":w)
return v.length===0?t:v}w=w.b
u=C.c.p(w==null?"":w)
if(!C.c.ao(u,"pdf:"))return t
v=C.c.p(C.c.aZ(u,4))
return v.length===0?t:v},
genl(){var w,v=this.x
if(v.a!==D.y3)return null
v=v.b
w=C.c.p(v==null?"":v)
if(w.length===0)return null
v=C.cK.bV("pdf:"+w)
v=C.Ch.gmx().bV(v)
return"note:"+A.at(v,"=","")+":"},
epj(d){var w,v=C.c.p(d).toLowerCase(),u=v.length
if(u===0)return!1
w=C.c.gnp(v)
if(C.d.c8(D.dpf,w))return!0
if(u<=24&&C.d.c8(D.d5T,w))return!0
return!1},
ap(){A.aj(this).n6(this.gdVQ())
this.a_G()
return D.bJv},
a_G(){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$a_G=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.as){w=1
break}t=4
r.z=A.aj(r).m(0,$.i9I(),x.cR)
q=A.aj(r).m(0,$.c1(),x.o)
m=J.ajL(q)
if(m==null)m=null
else{m=m.gdD()
m=m==null?null:m.a}r.Q=m
if(m==null){$.a3.$1("[ChatNotifier] No user ID available, skipping init")
w=1
break}p=A.aj(r).m(0,$.iJ(),x.v)
m=r.z
m.toString
o=new B.cDk(p,m)
m=r.Q
m.toString
w=7
return A.d(o.Pp(m),$async$a_G)
case 7:w=8
return A.d(r.adw(),$async$a_G)
case 8:w=9
return A.d(r.apo(),$async$a_G)
case 9:r.as=!0
t=2
w=6
break
case 4:t=3
k=s.pop()
n=A.T(k)
$.a3.$1("[ChatNotifier]["+r.x.k(0)+"] Failed to init storage: "+A.b(n))
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$a_G,v)},
bct(d){var w,v=this.x,u=v.a
if(u===D.CL){if(!C.c.t(d,":"))return!0
return C.c.ao(d,"global:")}if(u===D.y3){w=this.genl()
if(!C.c.ao(d,v.gb5d()+":"))v=w!=null&&C.c.ao(d,w)
else v=!0
return v}return C.c.ao(d,v.gb5d()+":")},
adw(){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$adw=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.z
if(g==null||r.Q==null){w=1
break}t=4
j=r.Q
j.toString
w=7
return A.d(g.a.dnR(j),$async$adw)
case 7:q=e
p=J.eq(q,new B.cDs(r))
o=A.a([],x.bp)
g=J.b1(p),j=x.y
case 8:if(!g.G()){w=9
break}n=g.gT(g)
i=r.z
i.toString
w=10
return A.d(i.a.cxX(n.b),$async$adw)
case 10:m=e
l=J.az(m,new B.cDt(),j).a6(0)
J.cv(o,new B.Az(n.b,n.d,l,n.z,n.Q))
w=8
break
case 9:J.Cr(o,new B.cDu())
r.sl(0,r.gl(0).f7s(o))
t=2
w=6
break
case 4:t=3
f=s.pop()
k=A.T(f)
$.a3.$1("[ChatNotifier]["+r.x.k(0)+"] Failed to load sessions: "+A.b(k))
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$adw,v)},
apo(){var w=0,v=A.m(x.H),u,t=this
var $async$apo=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:if(t.gl(0).r!=null||t.gl(0).a.length!==0){w=1
break}if(t.gl(0).w.length===0){w=1
break}w=3
return A.d(t.a4Z(C.d.ga_(t.gl(0).w).a),$async$apo)
case 3:case 1:return A.k(u,v)}})
return A.l($async$apo,v)},
ER(){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$ER=A.i(function(b8,b9){if(b8===1){s.push(b9)
w=t}for(;;)switch(w){case 0:if(r.z==null||r.Q==null||r.gl(0).a.length===0){w=1
break}t=4
d=r.gl(0).r
q=d==null?r.x.gb5d()+":"+C.k.k(1000*Date.now()):d
p=C.d.ga_(r.gl(0).a).c.length>50?C.c.a3(C.d.ga_(r.gl(0).a).c,0,50)+"...":C.d.ga_(r.gl(0).a).c
w=7
return A.d(r.z.a.cxY(q),$async$ER)
case 7:o=b9
a0=r.z
w=o==null?8:10
break
case 8:a0.toString
a1=r.Q
a1.toString
a0=a0.a
a1=B.icT(new A.ak(Date.now(),0,!1),C.bS,C.aH,new A.aw(!0,"",x.D),C.bH,new A.aw(!0,null,x.l),C.aH,q,C.bK,p,new A.ak(Date.now(),0,!1),a1)
w=11
return A.d(a0.mB(a0.gCC(),x._,x.K).hR(0,a1),$async$ER)
case 11:w=9
break
case 10:w=12
return A.d(a0.a.fDc(q,p),$async$ER)
case 12:case 9:a0=r.gl(0).a,a1=a0.length,a2=x.D,a3=x.l,a4=x.J,a5=x.c,a6=x.R,a7=0
case 13:if(!(a7<a0.length)){w=15
break}n=a0[a7]
if(n.a==="ai_pending"){w=14
break}a8=r.z
a8.toString
w=16
return A.d(a8.a.dou(n.a),$async$ER)
case 16:m=b9
l=B.ihh(n.c)
k=J.an(l)!==0
j=k?B.iWG(l):null
a8=r.z
w=m==null?17:19
break
case 17:a8.toString
a9=n.a
b0=r.Q
b0.toString
b1=n.b===C.o4?"user":"assistant"
b2=n.c
b3=n.r
a8=a8.a
b4=Date.now()
b5=Date.now()
w=20
return A.d(new A.xm(a8,a8.gCB(),a6).hR(0,new A.Uv(new A.aw(!0,a9,a2),new A.aw(!0,q,a2),new A.aw(!0,b0,a2),new A.aw(!0,b1,a2),new A.aw(!0,b2,a2),new A.aw(!0,b3,a2),new A.aw(!0,j,a3),new A.aw(!0,k,a4),C.bH,C.aH,C.aH,new A.aw(!0,new A.ak(b4,0,!1),a5),new A.aw(!0,new A.ak(b5,0,!1),a5),C.bS)),$async$ER)
case 20:w=18
break
case 19:a8.toString
w=21
return A.d(a8.a.fD9(n.a,n.c,k,j,n.r),$async$ER)
case 21:case 18:case 14:a0.length===a1||(0,A.a7)(a0),++a7
w=13
break
case 15:a0=r.gl(0).a
a1=A.Y(a0).i("aE<1>")
a0=A.M(new A.aE(a0,new B.cDv(),a1),a1.i("U.E"))
a1=o
a1=a1==null?null:a1.z
if(a1==null)a1=new A.ak(Date.now(),0,!1)
i=new B.Az(q,p,a0,a1,new A.ak(Date.now(),0,!1))
a0=A.M(r.gl(0).w,x.ba)
h=a0
g=h
f=J.ZL(g,new B.cDw(q))
if(f>=0)J.br(g,f,i)
else J.a6Z(g,0,i)
J.Cr(g,new B.cDx())
r.sl(0,r.gl(0).f9l(q,g))
r.eUj()
t=2
w=6
break
case 4:t=3
b7=s.pop()
e=A.T(b7)
$.a3.$1("[ChatNotifier]["+r.x.k(0)+"] Failed to save session: "+A.b(e))
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$ER,v)},
a4Z(d){return this.fr3(d)},
fr3(d){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a4Z=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(!r.bct(d)){w=1
break}n=r.z
if(n==null){n=C.d.cu(r.gl(0).w,new B.cDA(d),new B.cDB(d)).c
if(n.length===0){w=1
break}r.sl(0,r.gl(0).d6L(!0,!0,d,n))
w=1
break}t=4
w=7
return A.d(n.a.cxX(d),$async$a4Z)
case 7:q=f
p=J.az(q,new B.cDC(),x.y).a6(0)
r.sl(0,r.gl(0).d6L(!0,!0,d,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.T(l)
$.a3.$1("[ChatNotifier]["+r.x.k(0)+"] Failed to load session: "+A.b(o))
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$a4Z,v)},
FF(d){return this.fhU(d)},
fhU(d){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$FF=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(!r.bct(d)){w=1
break}t=4
o=r.z
w=o!=null?7:8
break
case 7:w=9
return A.d(o.FF(d),$async$FF)
case 9:case 8:o=r.gl(0).w
n=A.Y(o).i("aE<1>")
m=A.M(new A.aE(o,new B.cDz(d),n),n.i("U.E"))
q=m
o=r.gl(0)
n=r.gl(0).r===d?C.zA:r.gl(0).a
l=r.gl(0).r===d?null:r.gl(0).r
k=r.gl(0)
r.sl(0,o.fcf(r.gl(0).r===d,k.r===d,l,n,q))
t=2
w=6
break
case 4:t=3
i=s.pop()
p=A.T(i)
$.a3.$1("[ChatNotifier]["+r.x.k(0)+"] Failed to delete session: "+A.b(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$FF,v)},
Ym(d,e,f,g,h){return this.dtK(d,e,f,g,h)},
dtK(b2,b3,b4,b5,b6){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$Ym=A.i(function(b7,b8){if(b7===1){s.push(b8)
w=t}for(;;)switch(w){case 0:a9=C.c.p(b2)
if(a9.length===0||r.gl(0).b||r.gl(0).d){w=1
break}r.at=""
m=C.k.k(1000*Date.now())
l=Date.now()
k=x.z
j=A.M(r.gl(0).a,k)
j.push(new A.lK(m,C.o4,a9,new A.ak(l,0,!1),!1,!1,""))
m=x.y
i=A.dv(j,!0,m)
j=Date.now()
l=r.gl(0)
m=A.M(i,m)
m.push(new A.lK("ai_pending",C.pS,"",new A.ak(j,0,!1),!0,!0,""))
r.sl(0,l.fcg(!0,!0,!0,b6,m))
h=A.aj(r).m(0,$.kc(),x.e)
g=A.aj(r).m(0,$.iFT(),x.G).f0E(b3,b6,b4,b5,h.a)
m=A.a([C.c.p('You are Asaka AI, a professional knowledge assistant designed to help users with learning, problem-solving, and knowledge exploration.\n\n## Core Principles\n1. **Accuracy**: Provide factually correct information. If uncertain, acknowledge limitations.\n2. **Clarity**: Use clear, structured responses with proper formatting.\n3. **Professionalism**: Maintain an objective, educational tone.\n4. **Safety**: Never provide harmful, illegal, or unethical content.\n\n## Response Guidelines\n- Use markdown formatting for better readability\n- For math content, use LaTeX notation wrapped in $$ for display math or $ for inline\n- Structure complex answers with headers and bullet points\n- Cite sources when referencing specific facts\n- Ask clarifying questions when the user\'s intent is unclear\n\n## Tool Execution Policy\n- When the user asks to operate app features (memory, notes, problem practice, library, downloads, settings), prioritize executable tool actions instead of tutorial-only text.\n- If required parameters are missing, ask the minimum follow-up question.\n- If the user delegates choices (e.g. "\u4f60\u5e2e\u6211\u751f\u6210", "\u6309\u4f60\u6765"), proceed with low-risk actions by filling reasonable defaults from context.\n- After execution, report concise action results rather than long explanations.\n\n## Constraints\n- Do not generate content that violates academic integrity\n- Do not provide complete solutions to homework without educational context\n- Respect user privacy and do not request unnecessary personal information\n')],x.s)
l=g.e
if(C.c.p(l==null?"":l).length!==0){l.toString
m.push(C.c.p(l))}f=C.c.p(C.d.au(m,"\n\n"))
e=f.length===0?null:f
m=A.aj(r).m(0,$.hXb(),x.dw)
l=g.b
j=l==null
w=3
return A.d(m.aij(j?b5:l),$async$Ym)
case 3:d=b8
q=null
t=5
w=8
return A.d(A.aj(r).m(0,$.be7(),x.gk).XH(),$async$Ym)
case 8:p=b8
q=C.c.p(p.c).length===0?null:C.c.p(p.c)
t=2
w=7
break
case 5:t=4
b0=s.pop()
q=null
w=7
break
case 4:w=2
break
case 7:m=x.N
a1=A.ej(g.f,m,k)
a2=x.c9
a3=a2.a(a1.h(0,"search"))
a3=A.ej(a3==null?C.bt:a3,m,k)
if(q!=null)a3.j(0,"embeddingModel",q)
a1.j(0,"search",a3)
a3=a2.a(a1.h(0,"mcp"))
a3=A.ej(a3==null?C.bt:a3,m,k)
a3.j(0,"builtins",A.x(["schemaVersion","yaru.mcp.builtins.v1","actions",J.aD_(D.tk.gfX(D.tk),!1),"tools",D.ayl],m,k))
if(r.x.a===D.CL)a4=b6||r.epj(a9)
else a4=!1
if(a4){a3.j(0,"enabled",!0)
a3.j(0,"mode","practice_chat")
a3.j(0,"allowedTools",D.ayl)
a3.j(0,"limit",20)}a1.j(0,"mcp",a3)
a3=A.aj(r).m(0,$.c1(),x.o)
a3=a3.gB(a3)
a5=a3==null?null:a3.gdD()
a2=a2.a(a1.h(0,"agent"))
a2=A.ej(a2==null?C.bt:a2,m,k)
a2.j(0,"enabled",!0)
a2.j(0,"mode","action_chat_v1")
a2.j(0,"confirmationPolicy","graded")
a2.j(0,"allowedActionIds",J.aD_(D.tk.gfX(D.tk),!1))
a2.j(0,"maxPlannedActions",5)
a3=a5==null
a4=a3?null:a5.a
if(a4==null)a4=""
a6=a3?null:a5.c
if(a6==null)a6=""
a7=a3?null:a5.e
if(a7==null)a7=""
a3=a3?null:a5.id.b
a2.j(0,"keywordInjections",A.x(["schemaVersion","yaru.agent.keyword-injections.v1","enabled",!0,"strategy","semantic_with_keyword_fallback","userBasic",A.x(["userId",a4,"username",a6,"nickname",a7,"role",a3==null?"":a3],m,k)],m,k))
a1.j(0,"agent",a2)
w=r.gd0C()?9:11
break
case 9:t=13
w=16
return A.d(A.aj(r).m(0,$.iaq().gjA(),x.F),$async$Ym)
case 16:t=2
w=15
break
case 13:t=12
b1=s.pop()
o=A.T(b1)
n=A.b_(b1)
$.a3.$1("[ChatProvider] Failed to initialize RAG service, continuing with query fallback: "+A.b(o)+"\n"+A.b(n))
w=15
break
case 12:w=2
break
case 15:a8=A.aj(r).m(0,$.iaq().gJ(),x.fQ).zx(a9,A.aj(r).m(0,$.bdQ(),x.Q),r.gezG())
w=10
break
case 11:m=A.aj(r).m(0,$.bdQ(),x.Q)
k=g.a
if(k==null)k=b4
if(j)l=b5
a8=m.nJ(g.d,g.c,d,i,k,a9,l,a1,e)
case 10:r.y=a8.f1(r.gdWg(),!1,r.ge62(),new B.cDD(r))
case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Ym,v)},
dWh(d){var w,v,u,t=this
if(d instanceof A.vW){t.dKV(d.a,d.c,d.b)
return}if(d instanceof A.HA){w=d.a.toLowerCase()
v=C.c.t(w,"search")
u=C.c.t(w,"done")||C.c.t(w,"complete")||C.c.t(w,"finished")
if(v&&!u)t.sl(0,t.gl(0).d5h(!0))
else if(u&&t.gl(0).c)t.sl(0,t.gl(0).d5h(!1))
return}if(d instanceof A.aln)t.aBU(d.a)},
aBU(d){return this.eiq(d)},
eiq(a1){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$aBU=A.i(function(a2,a3){if(a2===1){t.push(a3)
w=u}for(;;)switch(w){case 0:u=3
r=C.L.aR(0,a1,null)
if(x.j.b(r))j=J.kd(r,x.f).bD(0,new B.cDr(),x.P)
else j=x.P.b(r)?A.a([r],x.t):C.f4
q=j
i=J.b1(q),h=x.f,g=x.N,f=x.z
case 6:if(!i.G()){w=7
break}p=i.gT(i)
o=J.t(p,"function")
n=h.b(o)?J.cI(o,g,f):p
e=J.t(n,"name")
m=C.c.p(J.w(e==null?"":e))
if(J.an(m)===0){w=6
break}l=s.ezs(J.t(n,"arguments"))
if(J.C(m,"practice_session_start_signal")){s.ege(l)
w=6
break}w=J.C(m,"yaru_agent_execute_actions")?8:9
break
case 8:w=10
return A.d(s.aB9(l),$async$aBU)
case 10:case 9:w=6
break
case 7:u=1
w=5
break
case 3:u=2
a0=t.pop()
k=A.T(a0)
$.a3.$1("[ChatNotifier]["+s.x.k(0)+"] tool call parse failed: "+A.b(k))
w=5
break
case 2:w=1
break
case 5:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$aBU,v)},
ezs(d){var w,v
if(typeof d=="string"&&C.c.p(d).length!==0)try{w=C.L.aR(0,d,null)
if(x.P.b(w))return w}catch(v){return C.bt}if(x.P.b(d))return d
return C.bt},
ege(d){var w,v,u,t=J.L(d),s=t.h(d,"semantic_query")
if(s==null)s=t.h(d,"query")
w=C.c.p(J.w(s==null?"":s))
if(w.length===0)return
s=A.bN(t.h(d,"count"))
v=s==null?null:C.m.R(s)
u=C.k.a4(v==null?10:v,1,20)
s=this.gl(0)
t=x.fF.a(t.h(d,"meta"))
if(t!=null)J.cI(t,x.N,x.z)
this.sl(0,s.fa1(!1,new B.dl3(w,u)))},
aB9(d){return this.ebU(d)},
ebU(d){var w=0,v=A.m(x.H),u,t=this,s,r,q
var $async$aB9=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:q=B.iO3(d)
if(q.r.length===0){w=1
break}s=q.b
r=s.length!==0
if(r&&t.ay===s){w=1
break}if(r){r=t.gl(0).f
s=(r==null?null:r.b)===s}else s=!1
if(s){w=1
break}if(B.iO5(q)){t.sl(0,t.gl(0).fa0(!1,q))
w=1
break}w=3
return A.d(t.abH(q),$async$aB9)
case 3:case 1:return A.k(u,v)}})
return A.l($async$aB9,v)},
f1s(){var w=this
if(w.gl(0).f==null)return
w.sl(0,w.gl(0).f4v(!0))
w.bf6("\u5df2\u53d6\u6d88\u672c\u6b21\u5f85\u6267\u884c\u64cd\u4f5c\u3002")},
aNm(){var w=0,v=A.m(x.H),u,t=this,s
var $async$aNm=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:s=t.gl(0).f
if(s==null||t.gl(0).d){w=1
break}w=3
return A.d(t.abH(s),$async$aNm)
case 3:case 1:return A.k(u,v)}})
return A.l($async$aNm,v)},
abH(d){return this.e4a(d)},
e4a(d){var w=0,v=A.m(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$abH=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=C.c.p(d.b)
if(m.length===0)m="plan_"+Date.now()
if(q.ay===m){w=1
break}q.ay=m
q.sl(0,q.gl(0).faM(!0,!0,!1))
t=4
w=7
return A.d(A.aj(q).m(0,$.iFO(),x.r).UF(d),$async$abH)
case 7:p=f
q.bf6(B.jmB(p))
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
o=A.T(l)
q.bf6("\u6267\u884c\u64cd\u4f5c\u5931\u8d25\uff1a"+A.b(o))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
q.ay=null
q.sl(0,q.gl(0).f5K(!1))
w=r.pop()
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$abH,v)},
bf6(d){var w,v,u=this,t=C.c.p(d)
if(t.length===0)return
w=C.d.c8(u.gl(0).a,new B.cDm())
if(u.gl(0).b&&w){u.ax.push(t)
return}v=A.M(u.gl(0).a,x.y)
v.push(new A.lK(C.k.k(1000*Date.now()),C.pS,t,new A.ak(Date.now(),0,!1),!1,!1,""))
u.sl(0,u.gl(0).f6o(v))
u.ER()},
dKV(d,e,f){var w,v,u,t,s,r,q=this,p=C.d.Dh(q.gl(0).a,new B.cDl())
if(p===-1)return
if(f.length!==0)q.at+=f
w=A.M(q.gl(0).a,x.y)
v=w[p]
u=v.c+d
if(e){t=A.cDj(u)
s=q.at
s=s.length!==0?s:t.b
w[p]=v.bH7(t.a,!1,!1,s)}else{r=q.at
w[p]=v.bH7(u,!0,r.length!==0||u.length===0,r)}q.sl(0,q.gl(0).bH2(!e,!1,w))},
ehM(d){var w,v,u,t,s,r=this
$.a3.$1("[ChatNotifier]["+r.x.k(0)+"] stream error: "+A.b(d))
w=C.d.Dh(r.gl(0).a,new B.cDp())
v=A.M(r.gl(0).a,x.y)
if(w!==-1){u=v[w]
t=u.c
v[w]=u.bGZ(t.length===0?"AI service is temporarily unavailable. Please try again.":t,!1,!1)}s=r.ax
if(s.length!==0){C.d.D(v,new A.E(s,new B.cDq(),A.Y(s).i("E<1,lK>")))
C.d.ag(s)}r.sl(0,r.gl(0).bH2(!1,!1,v))
r.ayE()},
e63(){var w,v,u,t,s,r=this,q=C.d.Dh(r.gl(0).a,new B.cDn()),p=r.gl(0).a
if(q!==-1){w=A.M(r.gl(0).a,x.y)
v=w[q]
u=A.cDj(v.c)
t=r.at
t=t.length!==0?t:u.b
w[q]=v.aOt(u.a,C.k.k(1000*Date.now()),!1,!1,t)
p=w}w=r.ax
if(w.length!==0){s=A.M(p,x.y)
C.d.D(s,new A.E(w,new B.cDo(),A.Y(w).i("E<1,lK>")))
C.d.ag(w)
p=s}r.at=""
r.sl(0,r.gl(0).bH2(!1,!1,p))
r.ayE()
r.ER()},
ayE(){var w=this.y
if(w!=null)w.an(0)
this.y=null},
eUj(){var w,v,u=this
if(u.Q==null)return
w=A.aj(u).m(0,$.iGK(),x.E)
v=u.Q
v.toString
w.b0Y(v).nS(new B.cDy(u))}}
B.coW.prototype={}
B.ak5.prototype={
f0E(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.eGb(a3,l),j=k==null,i=j?l:k.e,h=a3.y,g=h.a,f=x.d4,e=m.cCH(A.a([a2,i,g.a],f))
i=j?l:k.f
w=m.cCH(A.a([a1,i,g.b],f))
v=a0||a3.z.a
if(!d)if((j?l:k.Q)!=null){i=k.Q
i.toString
i=i>0
u=i}else u=!1
else u=!0
t=m.dQi(j?l:k.a,a3)
i=A.a([],x.s)
g=j?l:k.at
if(C.c.p(g==null?"":g).length!==0)i.push(C.c.p(k.at))
if(t.length!==0)i.push(t)
s=C.c.p(C.d.au(i,"\n\n"))
i=a3.Q
g=i.b
f=A.Y(g)
r=f.i("fT<1,h>")
q=A.fd(new A.fT(new A.aE(g,new B.coZ(),f.i("aE<1>")),new B.cp_(),r),r.i("U.E"))
if(j)p=l
else{g=k.ay
f=A.Y(g).i("aE<1>")
g=A.M(new A.aE(g,q.gnp(q),f),f.i("U.E"))
g.$flags=1
g=g
p=g}if(p==null)p=C.K
g=a3.as.a
f=A.Y(g)
r=f.i("fT<1,K<h,@>>")
g=A.M(new A.fT(new A.aE(g,new B.cp0(k),f.i("aE<1>")),new B.cp1(),r),r.i("U.E"))
g.$flags=1
f=s.length===0?l:s
r=j?l:A.x(["id",k.a,"name",k.b,"temperature",k.r,"topP",k.w,"contextMessageSize",k.x,"limitContextMessages",k.y,"streamOutput",k.z,"thinkingBudget",k.Q,"maxTokens",k.as,"messageTemplate",k.ax,"enableMemory",k.cy,"enableRecentChatsReference",k.db,"customHeaders",k.CW,"customBody",k.cx],x.N,x.X)
o=x.N
n=x.aU
return new B.coW(w,e,v,u,f,A.x(["assistant",r,"instructionInjections",A.x(["activeIds",m.cV9(a3,j?l:k.a)],o,x.dy),"search",A.x(["enabled",v,"serviceIndex",a3.z.c],o,n),"mcp",A.x(["enabled",p.length!==0,"serverIds",p,"requestTimeoutSeconds",i.a],o,n),"modelRouting",A.x(["provider",e,"model",w],o,x.A),"defaultModels",h.Y(),"chatDisplay",a3.d.Y(),"chatRendering",a3.e.Y(),"chatBehavior",a3.f.Y(),"chatOther",a3.r.Y(),"quickPhrases",A.x(["items",g],o,x.fO),"voiceServices",a3.ax.Y(),"networkProxy",a3.ay.Y()],o,x.z))},
eGb(d,e){var w,v,u,t,s=d.c
if(s==null||s.length===0)return null
for(w=d.w,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
cV9(d,e){var w=e==null?"global":e,v=d.at.b
if(v.K(0,w)){v=v.h(0,w)
return v==null?C.K:v}v=v.h(0,"global")
return v==null?C.K:v},
dQi(d,e){var w,v,u,t,s=J.cl_(this.cV9(e,d))
if(s.gac(s))return""
w=e.at.a
v=A.Y(w)
u=v.i("fT<1,h>")
w=A.M(new A.fT(new A.aE(w,new B.coX(s),v.i("aE<1>")),new B.coY(),u),u.i("U.E"))
w.$flags=1
t=w
if(t.length===0)return""
return C.d.au(t,"\n\n")},
cCH(d){var w,v
for(w=0;w<3;++w){v=d[w]
if(v!=null&&C.c.p(v).length!==0)return C.c.p(v)}return null}}
B.bp2.prototype={
zO(d,e){return this.dyL(0,e)},
dyL(d,e){var w=0,v=A.m(x.z),u
var $async$zO=A.i(function(f,g){if(f===1)return A.j(g,v)
for(;;)switch(w){case 0:w=3
return A.d(D.wz.hP("speak",e,!1,x.z),$async$zO)
case 3:u=g
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$zO,v)},
QO(d){return this.dvY(d)},
dvY(d){var w=0,v=A.m(x.z),u
var $async$QO=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.d(D.wz.hP("setLanguage",d,!1,x.z),$async$QO)
case 3:u=f
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$QO,v)},
auS(d){return this.dxg(d)},
dxg(d){var w=0,v=A.m(x.z),u
var $async$auS=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.d(D.wz.hP("setSpeechRate",d,!1,x.z),$async$auS)
case 3:u=f
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$auS,v)},
auW(d){return this.dxT(d)},
dxT(d){var w=0,v=A.m(x.z),u
var $async$auW=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.d(D.wz.hP("setVolume",d,!1,x.z),$async$auW)
case 3:u=f
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$auW,v)},
auH(d){return this.dwA(d)},
dwA(d){var w=0,v=A.m(x.z),u
var $async$auH=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.d(D.wz.hP("setPitch",d,!1,x.z),$async$auH)
case 3:u=f
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$auH,v)},
fF(d){var w=0,v=A.m(x.z),u
var $async$fF=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.d(D.wz.hP("stop",null,!1,x.z),$async$fF)
case 3:u=f
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$fF,v)},
cgg(d){return this.fw9(d)},
fw9(d){var w=0,v=A.m(x.z),u=this,t
var $async$cgg=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:t=d.a
switch(t){case"speak.onStart":t=u.a
if(t!=null)t.$0()
break
case"synth.onStart":t=u.a
if(t!=null)t.$0()
break
case"speak.onComplete":t=u.b
if(t!=null)t.$0()
break
case"synth.onComplete":t=u.b
if(t!=null)t.$0()
break
case"speak.onPause":break
case"speak.onContinue":break
case"speak.onCancel":break
case"speak.onError":t=u.r
if(t!=null)t.$1(d.b)
break
case"speak.onProgress":break
case"synth.onError":t=u.r
if(t!=null)t.$1(d.b)
break
default:A.Ae("Unknown method "+t)}return A.k(null,v)}})
return A.l($async$cgg,v)}}
B.aa0.prototype={
U(){return new B.bXG(null,null)}}
B.bXG.prototype={
ae(){var w,v=this
v.ai()
w=A.cV(null,C.eg,null,1,null,v)
v.d=w
v.a.toString
w.Bi(0)},
b8(d){this.bg(d)
this.a.toString},
q(){var w=this.d
w===$&&A.e()
w.q()
this.dGh()},
v(d){var w,v=A.bpV(d)
this.a.toString
v.at3(d)
this.a.toString
w=this.dNz(C.rw,D.agJ)
return w},
dNz(d,e){var w=this.a,v=w.f,u=w.r
w=this.d
w===$&&A.e()
return new A.N(v,v,A.h3(w,new B.eBq(this,d,e,u),null),null)}}
B.bS7.prototype={
bi(d,e){var w,v,u,t,s=this,r=e.a,q=s.e,p=A.wp(new A.V(r/2,e.b/2),(r-q)/2)
$.b6()
w=A.bp()
w.r=s.d.gB(0)
w.b=C.c2
w.c=q
w.d=C.hH
d.OE(p,0,6.283185307179586,!1,w)
v=A.bp()
r=s.c
v.r=r.gB(0)
v.b=C.c2
v.c=q
v.d=C.hH
u=A.bp()
u.r=r.I(0.3).gB(0)
u.b=C.c2
u.c=q+2
u.d=C.hH
u.z=D.e0m
t=s.f-1.5707963267948966
d.OE(p,t,1.5707963267948966,!1,u)
d.OE(p,t,1.5707963267948966,!1,v)},
fY(d){var w=this
return!w.c.n(0,d.c)||!w.d.n(0,d.d)||w.e!==d.e||w.f!==d.f}}
B.ff6.prototype={
O(){return"_ProgressIndicatorType."+this.b}}
B.bba.prototype={
q(){var w=this,v=w.b9$
if(v!=null)v.ad(0,w.gfl())
w.b9$=null
w.aj()},
bZ(){this.cp()
this.cl()
this.fm()}}
B.bpT.prototype={
v(d){var w=this,v=null
return A.ifW(!1,w.c,w.y,w.d,12,v,C.qS,w.r,w.f,v,w.x,v,w.ch,w.e,w.ay,v,v,!1,v,C.cfR,v,C.Ba,w.ax,!1)},
gcB(d){return this.c}}
B.cye.prototype={
O(){return"BadgePosition."+this.b}}
B.aK1.prototype={
v(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
if(!j)w=l.e===0
else w=!1
if(w)return l.c
w=l.eaS()
v=l.eao()
u=l.e8b()
t=l.e9D()
if(j){s=l.x
if(s==null)s=C.bi
j=A.ZT(A.H(k,k,C.o,k,k,new A.P(s,k,A.b8(C.ab,C.C,2),k,A.a([new A.eL(1,C.cs,s.I(0.5),C.W,6)],x.V),k,k,C.bg),k,12,k,k,k,k,k,12),k,D.cfP)}else{A.bpV(d).at3(d)
j=l.e
r=j>99
q=r?"99+":C.k.k(j)
r=j>9||r
p=r?20:18
o=r?6:0
j=A.a5(9)
n=A.b8(C.ab.I(0.3),C.C,1.5)
m=A.a([new A.eL(1,C.cs,C.yb.I(0.4),C.W,8)],x.V)
m=A.ZT(A.H(k,A.c(q,k,k,k,k,k,k,A.aD(k,k,C.ab,k,k,k,k,k,k,k,k,11,k,k,C.H,k,1.2,!0,k,-0.2,k,k,k,k,k,k),C.ag,k,k),C.o,k,new A.aZ(p,1/0,18,1/0),new A.P(C.yb,k,n,j,m,k,k,C.t),k,k,k,k,new A.a_(o,2,o,2),k,k,k),k,D.cfA)
j=m}return new A.c9(C.aP,k,C.aT,C.o,A.a([l.c,A.dL(u,j,k,k,t,v,w,k)],x.p),k)},
eaS(){switch(0){case 0:case 1:return this.d?-2:-6}},
eao(){switch(0){case 0:case 2:return this.d?-2:-6}},
e8b(){switch(0){case 0:case 1:return null}},
e9D(){switch(0){case 0:case 2:return null}}}
B.bpK.prototype={
v(d){var w=null,v=d.N(x.C),u=v==null?w:v.r,t=u
if(t==null)t=C.f9
return A.cUq(!1,new A.AZ(A.iTO(this.eb9(),C.l,C.aI,w,C.i,C.D,0,w,w,C.n),w),C.o,w,w,C.Y,t,w,new A.v8(16,C.E),!1,w)},
eb9(){var w,v,u,t=null,s=A.a([],x.p)
for(w=this.c,v=0;v<3;++v){if(v>0){u=A.H(t,t,C.o,C.KA,t,t,t,t,t,t,t,t,t,1)
s.push(u)}s.push(w[v])}return s}}
B.bpO.prototype={
v(d){var w=this,v=null,u=w.r,t=w.e,s=t==null,r=!s,q=r?C.ab:C.KF,p=A.y(w.c,q,v,v,u*0.5),o=w.dTo()
if(s)t=new B.cUw()
return A.aK2(p,r,v,20,u,0.95,t,C.f9,v,o,0.5,!1,u)},
dTo(){switch(0){case 0:return C.zk}}}
B.cUv.prototype={
O(){return"GlassIconButtonShape."+this.b}}
B.bpP.prototype={
v(d){var w,v=this,u=d.N(x.C),t=u==null?null:u.r,s=t
if(s==null)s=C.f9
t=v.e
w=A.Y(t).i("E<1,AU>")
t=A.M(new A.E(t,new B.cUx(v),w),w.i("ah.E"))
return new B.aK5(new B.cUy(v,s),t,v.w,s,null)}}
B.aK7.prototype={
U(){return new B.bXH()}}
B.bXH.prototype={
v(d){var w,v,u,t=null,s=d.N(x.C),r=this.a
r.toString
w=s==null?t:s.r
v=w==null?C.f9:w
u=A.H(t,new B.b6U(r.c,r.d,r.e,r.x,r.y,t,t,16,v,t,t),C.o,t,t,new A.P(C.KA,t,t,A.a5(16),t,t,t,C.t),t,32,t,t,C.rJ,t,t,t)
return new A.hk(u,t)}}
B.b6U.prototype={
U(){return new B.b6V()},
deM(d){return this.e.$1(d)}}
B.b6V.prototype={
gd1h(){var w=this.f
return w===$?this.f=A.a9e(this.a.d,2):w},
b8(d){var w,v=this
v.bg(d)
w=v.a.d
if(d.d!==w)v.A(new B.fqg(v))},
etH(d){this.A(new B.fq8(this,d))},
etL(d){this.A(new B.fqa(this,d))},
etJ(d){var w,v,u,t=this
t.A(new B.fq9(t))
w=t.c.gaN()
w.toString
x.bG.a(w)
v=t.gd1h()
t.a.toString
w=w.gW(0)
t.a.toString
u=A.ieE((v+1)/2,2,0.5,d.c.a.a/w.a/0.5)
t.a.toString
t.f=A.a9e(u,2)
w=t.a
if(u!==w.d)w.deM(u)},
v(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=A.a9e(n.d,2)
n=p.a
w=n.y
v=n.f
if(v==null)v=D.ewt
u=n.r
if(u==null)u=D.ev9
n=p.gd1h()
t=p.e?C.Xk:C.Xl
s=A.a([],x.p)
r=0
for(;;){q=p.a
q.toString
if(!(r<2))break
s.push(new A.lN(1,C.fY,new A.il(C.ah,o,o,new A.dP(q.c[r],o,o,o,o,o,o,o,o,o,o,o,o),o),o));++r}return A.cW(o,A.inj(new B.fqe(p,m,C.Wm,w-3,v,u),A.G(s,C.l,o,C.i,C.j,0,o,o),C.Vb,t,n,x.i),C.z,!1,o,o,o,new B.fqf(p),p.getG(),p.getI(),o,p.getK(),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!1,C.aV)}}
B.aK8.prototype={
U(){return new B.b18(null,null)},
lD(d){return this.d.$1(d)}}
B.b18.prototype={
ae(){var w,v,u,t,s,r,q=this,p=null
q.ai()
q.d=A.cV(p,D.ai7,p,1,p,q)
q.e=A.cV(p,D.ai7,p,1,p,q)
w=x.Z
q.f=new A.be(A.du(C.Xj,q.d,C.Xj),new A.bQ(0,1,w),w.i("be<bL.T>"))
v=w.i("ik<bL.T>")
u=x.fs
t=x.cr
s=x.i
r=A.XN(A.a([new A.oF(new A.ik(new A.jE(C.di),new A.bQ(1,0.92,w),v),40,u),new A.oF(new A.ik(new A.jE(C.di),new A.bQ(0.92,1,w),v),60,u)],t),s)
q.r=new A.be(q.d,r,r.$ti.i("be<bL.T>"))
s=A.XN(A.a([new A.oF(new A.ik(new A.jE(C.Xj),new A.bQ(0,1,w),v),45,u),new A.oF(new A.ik(new A.jE(D.bV_),new A.bQ(1,0,w),v),55,u)],t),s)
q.w=new A.be(q.e,s,s.$ti.i("be<bL.T>"))
if(q.a.c)q.d.sB(0,1)},
b8(d){var w,v,u=this
u.bg(d)
w=u.a.c
if(w!==d.c){u.x=w
v=u.d
if(w){v===$&&A.e()
v.dq(0)}else{v===$&&A.e()
v.fC(0)}w=u.e
w===$&&A.e()
w.rZ(0,0)}},
q(){var w=this.d
w===$&&A.e()
w.q()
w=this.e
w===$&&A.e()
w.q()
this.dGj()},
ebf(){var w=this.a
w.lD(!w.c)},
v(d){var w,v,u=this,t=null,s=d.N(x.C),r=u.a
r.toString
w=s==null?t:s.r
u.y=w==null?C.f9:w
w=u.d
w===$&&A.e()
v=u.e
v===$&&A.e()
return A.cW(t,new A.hk(A.h3(new A.Ta(A.a([w,v],x.dS)),new B.eBs(u,C.Wm,r.e,58,18.799999999999997,22),t),t),C.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,u.gcLU(),t,t,t,t,t,t,t,t,t,!1,C.aV)}}
B.bbc.prototype={
bZ(){this.cp()
this.cl()
this.i7()},
q(){var w=this,v=w.aD$
if(v!=null)v.ad(0,w.ghZ())
w.aD$=null
w.aj()}}
B.aK5.prototype={
U(){return new B.b16(new A.mu(),new A.aOs(null),C.cv,null,null)}}
B.b16.prototype={
ae(){var w,v=this
v.ai()
w=A.aDT(null,0,v)
v.f!==$&&A.bo()
v.f=w
w.f8()
w.dC$.M(0,new B.eBp(v))},
q(){var w=this.f
w===$&&A.e()
w.q()
this.dGg()},
v(d){var w,v,u,t=this,s=null,r=t.e
if(r.gbY_()){w=t.f
w===$&&A.e()
w=w.x
w===$&&A.e()
v=w>0.05}else v=!1
w=v?0:1
u=t.a.d.$2(d,t.geTN())
return new A.CR(t.d,new A.c9(C.aP,s,C.aT,C.p,A.a([A.jf(A.jO(u,v,s),w),new A.acn(r,t.gdRs(),s,C.a4_,s)],x.p),s),s)},
aGb(d){var w,v=this.f
v===$&&A.e()
w=v.x
w===$&&A.e()
v.Ct(new A.Mg(d,A.Ny(D.enz,w-d,0),!1,C.jL))},
eTO(){var w,v=this
if(v.e.gbY_()){w=v.f
w===$&&A.e()
w=w.x
w===$&&A.e()
w=w>0.1}else w=!1
if(w)v.aGb(0)
else v.ewK()},
ewK(){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.dE.a(n.c.gaN())
if(l==null||l.fy==null)return
w=l.gW(0)
n.r=w
n.w=w.b/2
v=A.dx(l.c3(0,m),C.W)
w=n.c
w.toString
u=A.dO(w,m)
w=u==null
t=w?m:u.a.a
if(t==null)t=1/0
s=w?m:u.a.b
if(s==null)s=1/0
r=n.cFA()
q=isFinite(t)&&v.a>t/2
w=isFinite(s)
p=w?s-(v.b+n.r.b):1/0
o=w?v.b:1/0
if(p<r&&o>r)n.y=q?C.hg:C.nP
else n.y=q?C.j4:C.cv
n.e.a8O(0)
n.aGb(1)},
dXu(){this.aGb(0)},
dRt(d){var w,v,u,t,s=this,r=null
if(s.r==null)return C.au
w=s.f
w===$&&A.e()
w=w.x
w===$&&A.e()
v=C.m.a4(w,0,1)
w=A.a([],x.p)
if(v>0.3)w.push(A.kL(0,A.cW(C.fJ,A.H(r,r,C.o,C.am.I(0),r,r,r,r,r,r,r,r,r,r),C.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.gdXt(),r,r,r,r,r,r,r,r,r,!1,C.aV),0))
u=s.y
t=v-0.5
w.push(A.aGR(s.dRr(v),u,s.d,new A.V(0,(1-4*t*t)*5),!1,u))
return new A.c9(C.aP,r,C.aT,C.p,w,r)},
cFA(){return C.d.i8(this.a.e,0,new B.eBn(),x.i)+16},
dRr(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.c.N(x.C)
w=h.a.x
v=h.cFA()
u=h.r
t=A.bC(u.a,h.a.f,d)
t.toString
if(d<0.85){u=A.bC(u.b,v,d)
u.toString
s=u}else s=g
u=h.w
u=A.bC(u==null?16:u,16,d)
u.toString
r=C.m.a4((d-0.7)/0.3,0,1)
q=C.m.a4(d/0.3,0,1)
p=h.c
p.toString
o=A.igH(p)
h.a.toString
n=o==null?D.cfE:o
p=A.a5(u)
m=n.d
m=A.I7(m,m,g)
l=h.y
k=A.a([],x.p)
if(d>0.65){j=h.a.e
i=A.Y(j).i("E<1,AU>")
j=A.M(new A.E(j,new B.eBm(h),i),i.i("ah.E"))
k.push(A.jf(new A.N(t,g,new A.F(C.bm,A.bv(A.B(j,C.aJ,g,C.i,C.D,0,g,C.n),C.p,g,C.z,g,g,C.o5,g,!1,C.O),g),g),r))}return new A.hk(A.jf(A.fz(p,A.Ot(A.cUq(!1,new A.c9(l,g,C.aT,C.b4,k,g),C.b4,s,g,g,w,n,new A.v8(u,C.E),!0,t),!0,m),C.b4),q),g)}}
B.bb9.prototype={
q(){var w=this,v=w.b9$
if(v!=null)v.ad(0,w.gfl())
w.b9$=null
w.aj()},
bZ(){this.cp()
this.cl()
this.fm()}}
B.AU.prototype={
U(){return new B.bXF()}}
B.bXF.prototype={
v(d){var w,v,u,t,s,r=this,q=null,p=r.a
p.toString
w=r.e
if(w)v=D.agJ
else v=r.d?C.Wx:C.a4
u=w?0.98:1
w=A.a5(10)
t=x.p
s=A.a([],t)
C.d.D(s,A.a([A.y(r.a.d,C.yd,q,q,20),C.al],t))
s.push(A.a2(A.c(r.a.c,q,q,q,q,q,q,A.aD(q,q,C.yd,q,q,q,q,q,q,q,q,17,q,q,C.b1,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1))
r.a.toString
return new A.hk(A.cW(q,A.ig(A.aDP(A.jC(A.G(s,C.l,q,C.i,C.j,0,q,q),q,q,C.di,new A.P(v,q,q,w,q,q,q,C.t),C.dE,q,p.w,q,C.by,q),C.di,C.dE,u),C.c_,q,q,new B.eBg(r),new B.eBh(r),q,!0),C.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p.e,new B.eBi(r),new B.eBj(r),new B.eBk(r),q,q,q,q,q,q,!1,C.aV),q)}}
B.aoc.prototype={
v(d){var w,v,u,t=this,s=null
d.N(x.C)
w=t.w
v=x.p
u=A.a([],v)
C.d.D(u,A.a([C.N,new B.bXD(t.f,s),C.N],v))
u.push(new A.F(t.d,t.c,s))
u.push(C.M)
return A.aDc(!0,A.ZT(new A.dH(!0,!0,!0,!0,C.Y,!1,A.B(u,C.l,s,C.i,C.D,0,s,C.n),s),w,C.N2),C.b4,0,w,C.N2,D.aoS,!0)}}
B.bXD.prototype={
v(d){var w=null
return A.H(w,w,C.o,w,w,new A.P(C.KF,w,w,A.a5(2.5),w,w,w,C.t),w,5,w,w,w,w,w,36)}}
B.aKc.prototype={
O(){return"GlassToastPosition."+this.b}}
B.aoe.prototype={
O(){return"GlassToastType."+this.b}}
B.aKb.prototype={
U(){return new B.bXK()}}
B.bXK.prototype={
v(d){var w,v,u,t,s,r=null,q=this.eay(A.bpV(d).at3(d)),p=this.a,o=p.d,n=p.c
p=p.z
w=C.am.I(0.7)
v=A.a5(24)
u=A.b8(q.I(0.2),C.C,1)
t=A.a([new A.eL(2,C.cs,q.I(0.15),C.W,20)],x.V)
s=A.a([A.y(o,q,r,r,20),C.al,new A.ep(1,C.bB,A.c(this.a.c,r,r,2,C.Z,r,r,D.exW,r,r,r),r)],x.p)
return A.de(r,r,r,A.ZT(A.H(r,A.G(s,C.l,r,C.i,C.D,0,r,r),C.o,r,D.bp1,new A.P(w,r,u,v,t,r,r,C.t),r,r,r,r,new A.a_(16,12,16,12),r,r,r),p,D.cfO),!1,r,r,r,r,!1,r,!1,r,r,r,r,r,r,r,r,r,r,n,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,C.aX,r)},
eay(d){switch(this.a.e.a){case 0:return C.vf
case 1:return C.yb
case 2:return C.Ko
case 3:return C.Ke
case 4:return C.ab.I(0.6)}}}
B.agW.prototype={
U(){return new B.b19(null,null)},
fto(){return this.Q.$0()}}
B.b19.prototype={
ae(){var w,v,u,t=this
t.ai()
w=A.cV(null,C.fF,null,1,null,t)
t.d=w
v=t.eaC()
u=x.dJ
t.e=new A.be(A.du(C.di,w,C.lZ),new A.bQ(v,C.W,u),u.i("be<bL.T>"))
u=x.Z
t.f=new A.be(A.du(C.cee,t.d,C.aon),new A.bQ(0,1,u),u.i("be<bL.T>"))
t.d.dq(0)
w=t.a.r
if(w.a>0)t.r=A.eb(w,t.ge1n())},
eaC(){switch(this.a.f.a){case 0:return C.FU
case 1:return C.l0
case 2:return C.l0}},
abk(){var w=0,v=A.m(x.H),u=this,t
var $async$abk=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:t=u.r
if(t!=null)t.an(0)
t=u.d
t===$&&A.e()
w=2
return A.d(t.fC(0),$async$abk)
case 2:u.a.fto()
return A.k(null,v)}})
return A.l($async$abk,v)},
q(){var w=this.r
if(w!=null)w.an(0)
w=this.d
w===$&&A.e()
w.q()
this.dGk()},
v(d){var w,v,u,t,s=this,r=null,q=s.dVE(A.b7(d,r,x.w).w.r),p=s.a,o=A.bmU(r,C.bp,new B.aKb(p.c,p.d,p.e,p.w,p.y,p.z,r),r,s.e8M(),D.eFX,new B.eBt(s),C.cl)
p=p.f
w=p===D.c2i?q:r
v=p===D.ak1?q:r
u=s.e
u===$&&A.e()
t=s.f
t===$&&A.e()
return A.dL(v,A.wv(new A.f5(t,!1,p===D.c2j?A.au(o,r,r):o,r),u,r,!0),r,r,16,16,w,r)},
dVE(d){switch(this.a.f.a){case 0:return d.b+16
case 1:return 0
case 2:return d.d+16}},
e8M(){switch(this.a.f.a){case 0:return C.ahS
case 1:return C.ahR
case 2:return C.Xx}}}
B.bbd.prototype={
q(){var w=this,v=w.b9$
if(v!=null)v.ad(0,w.gfl())
w.b9$=null
w.aj()},
bZ(){this.cp()
this.cl()
this.fm()}}
var z=a.updateTypes(["~()","I(Az)","AU(AU)","h(IK)","I(fS)","aa<~>()","r(Az,Az)","aa<u<ra>>()","alm(aQ)","r(La,La)","K<h,@>(La)","av2(aQ)","I(IK)","I(ru)","r(ru,ru)","azo(Q)","h(ajY)","aqi(Q,r)","OT()","~(yO)","IK(Es)","a_J(Kp)","Az()","ak5(aQ)","aa<@>(zp)","a7Z(aQ)","~(KC)","~(HQ)","~(px)","n(Q)","ai(ai,AU)","aoc(Q)","agW(Q)","ajX(aQ)"])
B.dpt.prototype={
$1(d){var w,v=d.c,u=v.h(0,"title"),t=v.h(0,"span_id"),s=v.h(0,"page_number")
s=A.cb(s==null?"":s,null)
w=v.h(0,"boxes_json")
v.h(0,"block_kind")
v.h(0,"source_kind")
return new B.IK(d.a,d.b,u,t,s,w,v)},
$S:z+20}
B.dpu.prototype={
$1(d){var w=d.y.h(0,"doc_id"),v=w==null?null:C.c.p(w),u=v
if(u!=null&&u.length!==0)return u===this.a
return C.c.ao(d.a,this.a+"::")},
$S:z+12}
B.dpr.prototype={
$1(d){var w,v,u=d.d,t=u==null?"Untitled":u,s=d.f,r=s!=null,q=r?" [Page "+A.b(s)+"]":"",p=d.e,o=p!=null,n=o?" [Span "+p+"]":"",m=A.D(x.N,x.z)
if(r)m.j(0,"pageNumber",s)
if(o&&C.c.p(p).length!==0)m.j(0,"spanId",p)
s=d.b
r=C.c.p(s)
p=r.length
if(p!==0)m.j(0,"quote",p>120?C.c.a3(r,0,120):r)
v=this.a.ez4(d.r)
if(v!=null)m.j(0,"rect",v)
w=m
r=A.b(t)
p=A.b(q)
o=A.b(n)
m=w.a===0?"{}":C.L.bt(w,null)
return"## "+r+p+o+"\n[CitationPayload] "+m+"\n"+s},
$S:z+3}
B.dps.prototype={
$1(d){return d.a},
$S:z+3}
B.hVP.prototype={
$1(d){var w,v=new B.bp2()
D.wz.rp(v.gfw8())
w=new B.av2(v)
d.n6(new B.hVO(w))
return w},
$S:z+11}
B.hVO.prototype={
$0(){var w=this.a
w.a.fF(0)
w.b=w.c=!1
return null},
$S:0}
B.dPW.prototype={
$0(){this.a.c=!1},
$S:0}
B.dPX.prototype={
$1(d){$.a3.$1("TTS Error: "+A.b(d))
this.a.c=!1},
$S:130}
B.dPY.prototype={
$0(){this.a.c=!0},
$S:0}
B.cmr.prototype={
$1(d){return d.db},
$S:342}
B.cms.prototype={
$1(d){var w,v=C.c.p(d.c)
if(v.length===0)v="\u672a\u547d\u540d\u724c\u7ec4"
w=J.t(this.a,C.k.k(d.a))
if(w==null)w=0
return v+"\uff08"+w+" \u5f20\uff09"},
$S:842}
B.cmq.prototype={
$1(d){return d.a===this.a},
$S:118}
B.cmo.prototype={
$1(d){var w=C.c.p(d.b),v=C.c.p(d.c),u=this.a
return C.c.t(w.toLowerCase(),u)||C.c.t(v.toLowerCase(),u)},
$S:118}
B.cmp.prototype={
$1(d){var w,v,u=C.c.p(d.b)
if(u.length===0)u=d.a
w=C.c.p(d.c)
v="\u300a"+u
return w.length===0?v+"\u300b":v+"\u300b/"+w},
$S:3464}
B.cmw.prototype={
$1(d){return C.k.k(d.a)===this.a},
$S:719}
B.cmx.prototype={
$1(d){return C.c.p(d.c).toLowerCase()===C.c.p(this.a).toLowerCase()},
$S:719}
B.cmy.prototype={
$1(d){return C.c.t(C.c.p(d.c).toLowerCase(),C.c.p(this.a).toLowerCase())},
$S:719}
B.cmz.prototype={
$1(d){return C.c.p(d.b).toLowerCase()===C.c.p(this.a).toLowerCase()},
$S:3466}
B.cmt.prototype={
$0(){var w,v,u=this.a.a.m(0,$.l6(),x.q).a,t=this.b,s=A.Y(u).i("aE<1>"),r=s.i("U.E"),q=A.M(new A.aE(u,new B.cmu(t),s),r)
q.$flags=1
w=q
q=w.length
if(q===1)return C.d.ga_(w).a
if(q>1)return null
u=A.M(new A.aE(u,new B.cmv(t),s),r)
u.$flags=1
v=u
if(v.length===1)return C.d.ga_(v).a
return null},
$S:114}
B.cmu.prototype={
$1(d){return C.c.p(d.b).toLowerCase()===C.c.p(this.a).toLowerCase()},
$S:118}
B.cmv.prototype={
$1(d){return C.c.t(C.c.p(d.b).toLowerCase(),C.c.p(this.a).toLowerCase())},
$S:118}
B.cmm.prototype={
$1(d){return this.a.e4(d.b).a>6e8},
$S:3467}
B.cmn.prototype={
$1(d){return d.a},
$S:3468}
B.cmA.prototype={
$1(d){return C.c.p(J.w(d))},
$S:19}
B.cmB.prototype={
$1(d){return d.length!==0},
$S:9}
B.hFy.prototype={
$1(d){return new B.ajX(d)},
$S:z+33}
B.cmC.prototype={
$2(d,e){return new A.aA(J.w(d),e,x.I)},
$S:29}
B.cmE.prototype={
$2(d,e){return new A.aA(J.w(d),e,x.I)},
$S:29}
B.cnr.prototype={
$1(d){return d.b},
$S:z+4}
B.cnq.prototype={
$1(d){return!d.b},
$S:z+4}
B.dEk.prototype={
$1(d){return J.eF(d,new B.dEj(),x.N,x.z)},
$S:215}
B.dEj.prototype={
$2(d,e){return new A.aA(J.w(d),e,x.I)},
$S:29}
B.hHM.prototype={
$1(d){return new B.a7Z(d.S($.iJ(),x.v))},
$S:z+25}
B.cDR.prototype={
$1(d){var w=d.z.c2(),v=d.Q.c2(),u=d.as
u=u==null?null:u.c2()
return A.x(["session_id",d.b,"title",d.d,"model_id",d.e,"provider_name",d.f,"local_version",d.x,"created_at",w,"updated_at",v,"deleted_at",u],x.N,x.X)},
$S:3469}
B.cDS.prototype={
$1(d){var w=d.as.c2(),v=d.at.c2(),u=d.ax
u=u==null?null:u.c2()
return A.x(["message_id",d.b,"session_id",d.c,"role",d.e,"content",d.f,"thinking_content",d.r,"latex_blocks",d.w,"has_latex",d.x,"local_version",d.z,"created_at",w,"updated_at",v,"deleted_at",u],x.N,x.X)},
$S:3470}
B.cDT.prototype={
$0(){var w=this,v=null,u=w.a,t=A.bA("https://api.chronorise.com/api/ai/chat/sync",0,v),s=x.N,r=A.x(["Content-Type","application/json","Authorization","Bearer "+C.c.p(w.b)],s,s),q=u.f
q=q==null?v:q.c2()
return u.d.dn("POST",t,r,C.L.bt(A.x(["sessions",w.c,"messages",w.d,"lastSyncAt",q],s,x.X),v),v)},
$S:15}
B.cDU.prototype={
$1(d){return d.b},
$S:3471}
B.cDV.prototype={
$1(d){return d.c},
$S:3472}
B.cDQ.prototype={
$0(){var w=0,v=A.m(x.H),u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$$0=A.i(function(b4,b5){if(b4===1)return A.j(b5,v)
for(;;)switch(w){case 0:t=J.b1(u.b),s=u.a,r=x.D,q=x.l,p=x.dz,o=x.eh,n=x.c,m=x.bo,l=s.a,k=u.c,j=x.N,i=x.z,h=x.f
case 2:if(!t.G()){w=3
break}g=t.gT(t)
if(!h.b(g)){w=2
break}f=J.cI(g,j,i)
e=A.W(f.h(0,"session_id"))
d=A.W(f.h(0,"title"))
if(e==null||d==null){w=2
break}a0=A.W(f.h(0,"model_id"))
if(a0==null)a0=""
a1=A.W(f.h(0,"provider_name"))
a2=A.bN(f.h(0,"server_version"))
a2=a2==null?null:C.m.R(a2)
if(a2==null)a2=1
a3=s.ID(A.W(f.h(0,"created_at")))
if(a3==null)a3=new A.ak(Date.now(),0,!1).qd()
a4=s.ID(A.W(f.h(0,"updated_at")))
if(a4==null)a4=new A.ak(Date.now(),0,!1).qd()
a5=s.ID(A.W(f.h(0,"deleted_at")))
a6=l.a
w=4
return A.d(new A.xm(a6,a6.gCC(),m).Dd(0,new A.all(new A.aw(!0,e,r),new A.aw(!0,k,r),new A.aw(!0,d,r),new A.aw(!0,a0,r),new A.aw(!0,a1,q),C.bcu,C.fP,new A.aw(!0,a2,p),new A.aw(!0,a2,p),new A.aw(!0,a3,n),new A.aw(!0,a4,n),new A.aw(!0,a5,o)),C.MN),$async$$0)
case 4:w=2
break
case 3:t=J.b1(u.d),m=x.J,a0=x.R
case 5:if(!t.G()){w=6
break}g=t.gT(t)
if(!h.b(g)){w=5
break}f=J.cI(g,j,i)
a7=A.W(f.h(0,"message_id"))
e=A.W(f.h(0,"session_id"))
a8=A.W(f.h(0,"role"))
a9=A.W(f.h(0,"content"))
if(a7==null||e==null||a8==null||a9==null){w=5
break}b0=f.h(0,"latex_blocks")
if(b0==null)b1=null
else b1=typeof b0=="string"?b0:C.L.bt(b0,null)
b2=f.h(0,"has_latex")
if(A.hi(b2))b3=b2
else{A.bN(b2)
a1=b2==null?null:C.m.R(b2)
b3=(a1==null?0:a1)===1}a1=A.W(f.h(0,"thinking_content"))
a2=A.bN(f.h(0,"server_version"))
a2=a2==null?null:C.m.R(a2)
if(a2==null)a2=1
a3=s.ID(A.W(f.h(0,"created_at")))
if(a3==null)a3=new A.ak(Date.now(),0,!1).qd()
a4=s.ID(A.W(f.h(0,"updated_at")))
if(a4==null)a4=new A.ak(Date.now(),0,!1).qd()
a5=s.ID(A.W(f.h(0,"deleted_at")))
a6=l.a
if(a1==null)a1=""
w=7
return A.d(new A.xm(a6,a6.gCB(),a0).Dd(0,new A.Uv(new A.aw(!0,a7,r),new A.aw(!0,e,r),new A.aw(!0,k,r),new A.aw(!0,a8,r),new A.aw(!0,a9,r),new A.aw(!0,a1,r),new A.aw(!0,b1,q),new A.aw(!0,b3,m),C.fP,new A.aw(!0,a2,p),new A.aw(!0,a2,p),new A.aw(!0,a3,n),new A.aw(!0,a4,n),new A.aw(!0,a5,o)),C.MN),$async$$0)
case 7:w=5
break
case 6:return A.k(null,v)}})
return A.l($async$$0,v)},
$S:3}
B.hHO.prototype={
$1(d){var w=d.S($.i9I(),x.b),v=d.S($.e6(),x.bH),u=A.lF()
if(u==null)u=new A.kf(A.a([],x.eO))
return new B.alm(w,new B.hHN(d),v,u)},
$S:z+8}
B.hHN.prototype={
$0(){var w=this.a.m(0,$.c1(),x.o)
w=w.gB(w)
return w==null?null:w.giB()},
$S:114}
B.d21.prototype={
$1(d){var w=this.a
return w.b.index>=d.b.index&&w.gbE(0)<=d.gbE(0)},
$S:681}
B.d22.prototype={
$2(d,e){return C.k.bk(d.c,e.c)},
$S:z+9}
B.d20.prototype={
$1(d){return d.Y()},
$S:z+10}
B.eez.prototype={
$2(d,e){this.a.ec7(e)},
$S:295}
B.eeA.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.gH()
v.Q=w.m(0,$.kc(),x.e).a.z.a
w.m(0,$.EW().$1(v.a.d).gJ(),x.B).apo()
if(v.c!=null)v.A(new B.eey())},
$S:6}
B.eey.prototype={
$0(){},
$S:0}
B.edX.prototype={
$0(){var w=this.a
w.at=!1
w.cy=A.a([],x.Y)
w.db=D.bjv
w.cx=C.HJ},
$S:0}
B.edP.prototype={
$0(){var w=this.a
w.at=!0
w.db=null},
$S:0}
B.edQ.prototype={
$0(){var w=this.a
w.at=!0
w.db=null},
$S:0}
B.edR.prototype={
$0(){var w,v=this.b
v.at=!1
v.cy=this.c
v.db=null
w=this.a.a
if(w!=null){v.cx=w
if(w.f)v.as=!0}},
$S:0}
B.edS.prototype={
$0(){var w,v=this.a
v.at=!1
w=this.b
v.db=w
w=w.a
if(w===401||w===403){v.cy=A.a([],x.Y)
v.cx=C.HJ}},
$S:0}
B.edY.prototype={
$0(){this.a.cx=this.b},
$S:0}
B.edZ.prototype={
$0(){this.a.cx=this.b},
$S:0}
B.edV.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.edW.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.ee_.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.w.f.length===0)return
v=v.w
w=C.d.gcL(v.f).Q
w.toString
v.kb(w,C.f_,C.XC)},
$S:6}
B.edO.prototype={
$1(d){return d.a+":"+d.c.length+":"+d.e},
$S:3473}
B.edT.prototype={
$1(d){return D.tk.h(0,d.b)!=null},
$S:z+13}
B.edU.prototype={
$2(d,e){return C.k.bk(d.d,e.d)},
$S:z+14}
B.ee7.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.at||r.ax,p=r.db
p=p==null?s:r.aDJ(d,p)
w=r.db
v=w==null
u=v?s:w.a===401
t=v?s:w.a===403
w=v?s:w.a===401
w=w===!0?new B.ee5(r,d):s
return A.iip(q,p,this.b,w,r.geEK(),new B.ee6(r,d),u===!0,t===!0,this.c)},
$S:911}
B.ee5.prototype={
$0(){var w=0,v=A.m(x.H),u=this
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:A.ae(u.b,!1).b2()
w=2
return A.d(u.a.bjq(),$async$$0)
case 2:return A.k(null,v)}})
return A.l($async$$0,v)},
$S:3}
B.ee6.prototype={
$1(d){var w=this.a
w.A(new B.ee4(w,d))
A.ae(this.b,!1).b2()},
$S:912}
B.ee4.prototype={
$0(){var w=this.a,v=this.b
w.cx=v
if(v.f)w.as=!0},
$S:0}
B.eet.prototype={
$1(d){return d.c||d.d==this.a},
$S:671}
B.eeu.prototype={
$2(d,e){return C.k.bk(d.e,e.e)},
$S:3474}
B.eev.prototype={
$1(d){var w=this.b,v=A.Y(w).i("E<1,h>")
w=A.M(new A.E(w,new B.eer(),v),v.i("ah.E"))
w.$flags=1
return new B.azo(w,new B.ees(this.a,d),null)},
$S:z+15}
B.eer.prototype={
$1(d){return d.b},
$S:3475}
B.ees.prototype={
$1(d){var w=this.a,v=w.x,u=v.a.a,t=C.c.p(u).length===0?d:u+"\n"+d
v.sbq(0,t)
v.siW(A.l1(C.ai,t.length))
A.ae(this.b,!1).b2()
w.y.fJ()},
$S:4}
B.ee3.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.o(d).ax,l=o.b,k=o.a,j=x.p,i=A.a([E.a7l(l.ga29(),C.es,C.kG,new B.ee0(k,d),!1,n,k.a.f,n)],j),h=o.c,g=h.w,f=g.length
if(f===0){k=l.gTp()
h=A.o(d).ok.Q
if(h==null)h=n
else{f=m.rx
h=h.L(f==null?m.k3:f)}i.push(new A.F(C.m0,A.c(k,n,n,n,n,n,n,h,n,n,n),n))}else for(h=h.r,w=o.d,v=x.ec,u=x.b2,t=0;t<g.length;g.length===f||(0,A.a7)(g),++t){s=g[t]
if(w){r=d.N(u)
q=r==null?n:v.a(J.t(r.r.e,C.bJ))
q.toString
p=q.aSq(s.e)}else p=n
i.push(new B.b7b(s.b,p,s.a===h,new B.ee1(k,s,d),new B.ee2(k,s),n))}k=A.b7(d,C.dt,x.w).w
l=l.gTp()
g=g.length
h=A.o(d).ok.at
h=h==null?n:h.ar(m.k3,C.H)
return new A.dy(new A.aZ(0,560,0,k.a.b*0.76),A.B(A.a([new A.Hk(l,A.rn(n,n,""+g,h,n,!1,n),n),C.J,new A.ep(1,C.bB,A.bv(A.B(i,C.aJ,n,C.i,C.j,0,n,C.n),C.p,n,C.z,n,n,n,n,!1,C.O),n)],j),C.y,n,C.i,C.D,0,n,C.n),n)},
$S:1174}
B.ee0.prototype={
$0(){this.a.biR()
A.ae(this.b,!1).b2()},
$S:0}
B.ee1.prototype={
$0(){var w=this.a
w.gH().m(0,$.EW().$1(w.a.d).gJ(),x.B).a4Z(this.b.a)
A.ae(this.c,!1).b2()},
$S:0}
B.ee2.prototype={
$0(){var w=this.a
return w.gH().m(0,$.EW().$1(w.a.d).gJ(),x.B).FF(this.b.a)},
$S:0}
B.eep.prototype={
$1(d){return d.d},
$S:662}
B.eeq.prototype={
$1(d){var w=this,v={},u=w.a
v.a=u.Q
v.b=u.as
return new A.l0(new B.eeo(v,u,w.b,w.c,d,w.d,w.e,w.f,w.r,w.w),null)},
$S:64}
B.eeo.prototype={
$2(a4,a5){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.o(a4).ax,l=A.o(a4).ok,k=o.c,j=k.f,i=j?"Reasoning":k.b,h=A.b7(a4,C.dt,x.w).w,g=o.d,f=g.gaKr(),e=l.at,d=e==null,a0=A.rn(n,n,i,d?n:e.ar(m.k3,C.H),n,!1,n),a1=g.gYE(),a2=l.x,a3=a2==null
a1=A.c(a1,n,n,n,n,n,n,a3?n:a2.ar(m.k3,C.H),n,n,n)
w=o.a
v=w.a?1:0
u=l.as
t=u==null
s=t?n:u.ar(m.k3,C.H)
if(t)u=n
else{t=m.rx
u=u.ar(t==null?m.k3:t,C.U)}t=o.b
r=g.gaKo()
r=A.c(r,n,n,n,n,n,n,a3?n:a2.ar(m.k3,C.H),n,n,n)
k=j?k.b:g.gTo()
q=l.Q
if(q==null)q=n
else{p=m.rx
q=q.L(p==null?m.k3:p)}p=x.p
q=A.a2(A.B(A.a([r,C.aM,A.c(k,n,n,n,n,n,n,q,n,n,n)],p),C.y,n,C.i,C.j,0,n,C.n),1)
k=w.b||j
j=j?new B.eec():new B.eed(w,t,a5)
j=A.ao8(A.B(A.a([a1,C.bh,new B.aK7(D.d3T,v,new B.eee(w,t,a5),s,u,n),C.lH,A.G(A.a([q,new B.aK8(k,j,m.b,n)],p),C.l,n,C.i,C.j,0,n,n)],p),C.y,n,C.i,C.j,0,n,C.n),C.a_)
k=g.gLD()
k=A.c(k,n,n,n,n,n,n,a3?n:a2.ar(m.k3,C.H),n,n,n)
a1=o.e
a2=g.gLD()
a2=A.aK2(A.c(a2,n,n,n,n,n,n,d?n:e.ar(m.k3,C.H),n,n,n),!0,n,1,42,1.05,new B.eeg(t,a1),n,n,C.zk,0.5,!1,112)
a3=g.gYD()
a3=A.aK2(A.c(a3,n,n,n,n,n,n,d?n:e.ar(m.k3,C.H),n,n,n),!0,n,1,42,1.05,new B.eeh(t,a1),n,n,C.zk,0.5,!1,112)
w=g.ga29()
k=A.ao8(A.B(A.a([k,C.bh,new B.bpK(A.a([a2,a3,A.aK2(A.c(w,n,n,n,n,n,n,d?n:e.ar(m.k3,C.H),n,n,n),!0,n,1,42,1.05,new B.eei(t,a1),n,n,C.zk,0.5,!1,112)],p),n)],p),C.y,n,C.i,C.j,0,n,C.n),C.a_)
e=g.ga8E()
a2=C.RD.a52(g)
a3=g.gLD()
w=C.RE.a52(g)
v=g.ga8D()
u=C.RF.a52(g)
s=g.ga8H()
d=o.x
r=d?g.gl5().gaq5():C.RG.a52(g)
return new A.dy(new A.aZ(0,640,0,h.a.b*0.82),A.B(A.a([new A.Hk(f,a0,n),C.J,j,C.J,k,C.J,new A.ep(1,C.bB,A.bv(A.B(A.a([new B.Yy(e,a2,C.er,new B.eej(t,a1),o.f,!1,n),new B.Yy(a3,w,C.z0,new B.eek(t,a1),o.r,!1,n),new B.Yy(v,u,C.DX,new B.eel(t,a1),o.w,!1,n),new B.Yy(s,r,C.vU,new B.eem(t,a1,d),n,d,n),new B.Yy(g.ga8F(),C.RH.a52(g),C.Mg,new B.een(t,a1),n,o.y,n),new B.Yy(g.gYD(),C.RI.a52(g),C.ft,new B.eef(t,a1),n,!1,n)],p),C.l,n,C.i,C.j,0,n,C.n),C.p,n,C.z,n,n,n,n,!1,C.O),n)],p),C.y,n,C.i,C.D,0,n,C.n),n)},
$S:3477}
B.eee.prototype={
$1(d){var w,v=d===1
this.c.$1(new B.ee8(this.a,v))
w=this.b
w.A(new B.ee9(w,v))},
$S:23}
B.ee8.prototype={
$0(){return this.a.a=this.b},
$S:0}
B.ee9.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eec.prototype={
$1(d){},
$S:5}
B.eed.prototype={
$1(d){var w
this.c.$1(new B.eea(this.a,d))
w=this.b
w.A(new B.eeb(w,d))},
$S:5}
B.eea.prototype={
$0(){return this.a.b=this.b},
$S:0}
B.eeb.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.eeg.prototype={
$0(){A.ae(this.b,!1).b2()
this.a.cXF()},
$S:0}
B.eeh.prototype={
$0(){A.ae(this.b,!1).b2()
var w=this.a.c
w.toString
A.aY(w).dZ(0,"/settings/chatDisplay",null)},
$S:0}
B.eei.prototype={
$0(){A.ae(this.b,!1).b2()
this.a.biR()},
$S:0}
B.eej.prototype={
$0(){A.ae(this.b,!1).b2()
var w=this.a.c
w.toString
A.aY(w).dZ(0,"/settings/aiMcp",null)},
$S:0}
B.eek.prototype={
$0(){A.ae(this.b,!1).b2()
this.a.cXF()},
$S:0}
B.eel.prototype={
$0(){A.ae(this.b,!1).b2()
var w=this.a.c
w.toString
A.aY(w).dZ(0,"/settings/aiInstructionInjection",null)},
$S:0}
B.eem.prototype={
$0(){var w=0,v=A.m(x.H),u=this,t
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:A.ae(u.b,!1).b2()
t=u.a
w=u.c?2:4
break
case 2:w=5
return A.d(t.aHV(),$async$$0)
case 5:w=3
break
case 4:t=t.c
t.toString
A.aY(t).dZ(0,"/settings/aiVoiceServices",null)
case 3:return A.k(null,v)}})
return A.l($async$$0,v)},
$S:3}
B.een.prototype={
$0(){A.ae(this.b,!1).b2()
var w=this.a.c
w.toString
A.aY(w).dZ(0,"/settings/aiNetworkProxy",null)},
$S:0}
B.eef.prototype={
$0(){A.ae(this.b,!1).b2()
var w=this.a.c
w.toString
A.aY(w).dZ(0,"/settings/chatDisplay",null)},
$S:0}
B.edu.prototype={
$1(d){var w=d.a,v=D.tk.h(0,w)
v=v==null?null:v.c
return v==null?w:v},
$S:z+16}
B.edE.prototype={
$0(){return A.aY(this.a).aa(null)},
$S:0}
B.edF.prototype={
$0(){return this.a.eO6(this.b,this.c)},
$S:0}
B.edG.prototype={
$0(){return this.a.aHp(this.b)},
$S:0}
B.edH.prototype={
$0(){return this.a.eO7(this.b,this.c)},
$S:0}
B.edI.prototype={
$1(d){return A.a([d,C.cS],x.p)},
$S:3478}
B.edw.prototype={
$1(d){var w=this,v=w.b?w.a.cGE(d,10):d,u=w.c,t=A.o(w.d).ok.as
t=t==null?null:t.ar(u.k3,C.U)
return A.rn(C.k3,u.b,v,t,new B.edv(w.a,d),!1,null)},
$S:1175}
B.edv.prototype={
$0(){return this.a.e5M(this.b)},
$S:0}
B.edx.prototype={
$2(d,e){var w=this.b.a[e],v=this.a,u=v.c
u.toString
if(A.dK(A.b7(u,null,x.w).w.a.a)!==C.bq){v.c.toString
u=A.aDb().c}else u=!0
return new B.aqi(w,!u,v.a.z,null)},
$S:z+17}
B.edy.prototype={
$0(){var w=this.a
return w.gH().m(0,$.EW().$1(w.a.d).gJ(),x.B).f1s()},
$S:0}
B.edz.prototype={
$0(){var w=this.a
return w.gH().m(0,$.EW().$1(w.a.d).gJ(),x.B).aNm()},
$S:0}
B.edA.prototype={
$0(){var w=this.a
w=w.gH().m(0,$.EW().$1(w.a.d).gJ(),x.B)
w.sl(0,w.gl(0).bFZ(!0))
return null},
$S:0}
B.edB.prototype={
$0(){var w=this.b.e
w.toString
return this.a.ag4(w)},
$S:0}
B.edC.prototype={
$1(d){var w=null,v=this.a,u=v.b.I(0.18),t=A.o(this.b).ok.as
return A.rn(w,w,d,t==null?w:t.ar(v.k3,C.H),w,!0,u)},
$S:1175}
B.edD.prototype={
$1(d){return this.a.Zs()},
$S:4}
B.edL.prototype={
$1(d){return d.a.d.as},
$S:3480}
B.edM.prototype={
$0(){var w=this.a
return w.gH().m(0,$.EW().$1(w.a.d).gJ(),x.B).a4Z(this.b.a)},
$S:0}
B.edN.prototype={
$0(){var w=this.a
return w.gH().m(0,$.EW().$1(w.a.d).gJ(),x.B).FF(this.b.a)},
$S:0}
B.edJ.prototype={
$1(d){return d.a===this.a.cx.a},
$S:749}
B.edK.prototype={
$0(){return C.d.ga_(this.a)},
$S:3481}
B.eew.prototype={
$0(){return A.Fz(this.a).mI()},
$S:0}
B.eex.prototype={
$0(){return A.Fz(this.a).mI()},
$S:0}
B.ffJ.prototype={
$2(d,e){return C.bh},
$S:40}
B.ffI.prototype={
$2(d,e){var w=null,v=this.a,u=v.c[e],t=A.a5(12),s=this.b,r=s.b,q=r.I(0.12),p=A.a5(12)
p=A.H(w,A.y(C.z0,r,w,w,w),C.o,w,w,new A.P(q,w,w,p,w,w,w,C.t),w,40,w,w,w,w,w,40)
q=A.a2(A.c(u,w,w,w,w,w,w,A.o(d).ok.y,w,w,w),1)
r=s.rx
return A.ao8(A.cE(!1,C.a9,!0,w,A.bY(!1,t,!0,new A.F(C.f8,A.G(A.a([p,C.al,q,A.y(C.kL,r==null?s.k3:r,w,w,w)],x.p),C.l,w,C.i,C.j,0,w,w),w),w,!0,!1,w,w,w,w,w,w,w,w,w,w,w,new B.ffH(v,u),w,w,w,w,w,w,w,w),C.o,C.a4,0,w,w,w,w,w,C.b_),C.Y)},
$S:3482}
B.ffH.prototype={
$0(){return this.a.d.$1(this.b)},
$S:0}
B.d1T.prototype={
$1(d){var w=this.a
return w.cEh(this.b,w.c,d.gwa(d))},
$S:188}
B.daC.prototype={
$1(d){return d.a.d},
$S:3483}
B.daD.prototype={
$1(d){return d.a.e},
$S:3484}
B.daE.prototype={
$0(){var w=this.a,v=this.c
v=v==null?null:v.a
if(v==null)v=w.e.c
return w.azd(this.b,v)},
$S:0}
B.ef0.prototype={
$0(){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$$0=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=r.a
m=n.c[r.b]
n=n.d
w=n!=null?3:4
break
case 3:t=6
n=n.$1(m)
w=9
return A.d(x.F.b(n)?n:A.fR(n,x.H),$async$$0)
case 9:t=2
w=8
break
case 6:t=5
l=s.pop()
q=A.T(l)
p=A.b_(l)
$.a3.$1("[MessageTile] Citation tap callback failed: "+A.b(q)+"\n"+A.b(p))
n=r.c
if(n.e==null){w=1
break}B.a6M(n,C.lj,A.ac($.aG(),x.T,x.n).ga9().gc2l(),D.DR)
w=8
break
case 5:w=2
break
case 8:w=1
break
case 4:w=10
return A.d(A.iL(new A.ia(C.L.bt(m,null))),$async$$0)
case 10:n=r.c
if(n.e==null){w=1
break}B.a6M(n,C.bu,A.ac($.aG(),x.T,x.n).ga9().gc3K(),D.ak2)
case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$$0,v)},
$S:3}
B.fE2.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.e()
v=!v
w.d=v
w=w.e
if(v){w===$&&A.e()
w.dq(0)}else{w===$&&A.e()
w.fC(0)}},
$S:0}
B.fE0.prototype={
$0(){return this.a.w=!0},
$S:0}
B.fE1.prototype={
$0(){var w=this.a
if(w.c!=null)w.A(new B.fE_(w))},
$S:17}
B.fE_.prototype={
$0(){return this.a.w=!1},
$S:0}
B.fE3.prototype={
$2(d,e){var w=this.a.r
w===$&&A.e()
return new A.da(C.cv,null,w.gB(0),e,null)},
$S:707}
B.fE5.prototype={
$2(d,e){return A.G(A.iP(3,new B.fE4(this.a,this.b),!0,x.m),C.l,null,C.i,C.D,0,null,null)},
$S:3485}
B.fE4.prototype={
$1(d){var w,v=null,u=this.a.d
u===$&&A.e()
u=u.x
u===$&&A.e()
w=this.b.c.a
return A.H(v,v,C.o,v,v,new A.P(C.f5.I(C.m.a4(1-Math.abs(C.m.am(u-d*0.2,1)-0.5)*2,0.3,1)),v,v,v,v,v,v,C.bg),v,6,v,new A.a_(w,0,w,0),v,v,v,6)},
$S:3486}
B.cDP.prototype={
$1(d){return d.Y()},
$S:3487}
B.cDs.prototype={
$1(d){return this.a.bct(d.b)},
$S:3488}
B.cDt.prototype={
$1(d){var w=d.e==="user"?C.o4:C.pS
return new A.lK(d.b,w,d.f,d.as,!1,!1,d.r)},
$S:1176}
B.cDu.prototype={
$2(d,e){return e.e.bk(0,d.e)},
$S:z+6}
B.cDv.prototype={
$1(d){return d.a!=="ai_pending"},
$S:170}
B.cDw.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cDx.prototype={
$2(d,e){return e.e.bk(0,d.e)},
$S:z+6}
B.cDA.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cDB.prototype={
$0(){return new B.Az(this.a,"Not Found",C.zA,new A.ak(Date.now(),0,!1),new A.ak(Date.now(),0,!1))},
$S:z+22}
B.cDC.prototype={
$1(d){var w=d.e==="user"?C.o4:C.pS
return new A.lK(d.b,w,d.f,d.as,!1,!1,d.r)},
$S:1176}
B.cDz.prototype={
$1(d){return d.a!==this.a},
$S:z+1}
B.cDD.prototype={
$2(d,e){return this.a.ehM(d)},
$S:165}
B.cDr.prototype={
$1(d){return J.cI(d,x.N,x.z)},
$S:215}
B.cDm.prototype={
$1(d){return d.a==="ai_pending"},
$S:170}
B.cDl.prototype={
$1(d){return d.a==="ai_pending"},
$S:170}
B.cDp.prototype={
$1(d){return d.a==="ai_pending"},
$S:170}
B.cDq.prototype={
$1(d){return new A.lK(C.k.k(1000*Date.now()),C.pS,d,new A.ak(Date.now(),0,!1),!1,!1,"")},
$S:1177}
B.cDn.prototype={
$1(d){return d.a==="ai_pending"},
$S:170}
B.cDo.prototype={
$1(d){return new A.lK(C.k.k(1000*Date.now()),C.pS,d,new A.ak(Date.now(),0,!1),!1,!1,"")},
$S:1177}
B.cDy.prototype={
$1(d){$.a3.$1("[ChatNotifier]["+this.a.x.k(0)+"] Background sync error: "+A.b(d))},
$S:55}
B.coZ.prototype={
$1(d){return d.d},
$S:662}
B.cp_.prototype={
$1(d){return d.a},
$S:3491}
B.cp0.prototype={
$1(d){var w
if(!d.c){w=this.a
w=w==null?null:w.a
w=d.d==w}else w=!0
return w},
$S:671}
B.cp1.prototype={
$1(d){return d.Y()},
$S:750}
B.coX.prototype={
$1(d){return this.a.t(0,d.a)&&C.c.p(d.c).length!==0},
$S:752}
B.coY.prototype={
$1(d){return C.c.p(d.c)},
$S:3492}
B.hFJ.prototype={
$1(d){return D.brQ},
$S:z+23}
B.eBq.prototype={
$2(d,e){var w=this,v=null,u=w.a
u.a.toString
u=u.d
u===$&&A.e()
u=u.x
u===$&&A.e()
return A.h_(v,v,v,new B.bS7(v,w.b,w.c,w.d,u*2*3.141592653589793,v),C.be)},
$S:294}
B.cUw.prototype={
$0(){},
$S:0}
B.cUy.prototype={
$2(d,e){var w=null,v=this.a,u=this.b
return new A.a0Q(v.c,w,e,!0,"",v.f,v.r,C.zk,w,u===C.c2h,u,1.05,0.5,w,1,w)},
$S:3493}
B.cUx.prototype={
$1(d){return d},
$S:z+2}
B.fqg.prototype={
$0(){var w=this.a
w.f=A.a9e(w.a.d,2)},
$S:0}
B.fq8.prototype={
$0(){var w,v=this.a
v.d=!0
w=v.c
w.toString
v.a.toString
v.f=B.ieF(this.b.a,w,2)},
$S:0}
B.fqa.prototype={
$0(){var w,v=this.a
v.e=!0
w=v.c
w.toString
v.a.toString
v.f=B.ieF(this.b.a,w,2)},
$S:0}
B.fq9.prototype={
$0(){var w=this.a
w.d=w.e=!1},
$S:0}
B.fqf.prototype={
$0(){var w=this.a
return w.A(new B.fqb(w))},
$S:0}
B.fqb.prototype={
$0(){var w=this.a
w.d=w.e=!1},
$S:0}
B.fqe.prototype={
$4(d,e,f,g){var w,v,u,t=this,s=null,r=t.a,q=r.d||Math.abs(e-t.b)>0.15?1:0,p=A.a([],x.p),o=t.f,n=t.e,m=0
for(;;){w=r.a
w.toString
if(!(m<2))break
v=w.d===m
w=w.c[m]
u=v?n:o
u=A.Ob(new A.dP(w,s,s,s,s,s,s,C.Z,s,1,s,s,s),C.aY,C.a9,!0,u)
p.push(new A.lN(1,C.fY,new A.hk(A.cW(C.bp,new A.zI(new A.Xi(s,s,s,s,s,v,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,C.aX,s,s,s,s),!1,!1,s,!1,!1,new A.il(C.ah,s,s,u,s),s),C.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.fqc(r,m),s,s,s,s,s,s,s,s,s,!1,C.aV),s),s));++m}return A.dBv(new B.fqd(r,f,new A.j9(e,0),t.c,t.d),A.G(p,C.l,s,C.i,C.j,0,s,s),C.ahy,q)},
$S:1130}
B.fqd.prototype={
$3(d,e,f){var w=this,v=w.a.a,u=v.z,t=v.x
u=A.ibA(w.c,v.Q,w.e,t,w.d,!1,2,u,e,w.b)
f.toString
return new A.hk(new A.c9(C.aP,null,C.aT,C.o,A.a([u,f],x.p),null),null)},
$S:3494}
B.fqc.prototype={
$0(){var w=this.b,v=this.a.a
if(w!==v.d)v.deM(w)
return null},
$S:0}
B.eBs.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.f
a1===$&&A.e()
w=a1.a
v=a1.b.b6(0,w.gB(w))
w=a0.r
w===$&&A.e()
a1=w.a
u=w.b.b6(0,a1.gB(a1))
a1=a0.w
a1===$&&A.e()
w=a1.a
t=a1.b.b6(0,w.gB(w))
w=A.b9(e.b,e.c,v)
w.toString
a1=e.d
a0.a.toString
s=A.H(d,d,C.o,d,d,new A.P(w,d,d,A.a5(13),d,d,d,C.t),d,26,d,d,d,d,d,a1)
r=t*10
q=t*16
p=2+e.e*v
o=a0.x?p:p-q
n=e.f
m=n*1.6
l=n+r*2
w=C.m.a4(1-t*1.2,0,1)
a0.a.toString
k=A.jf(A.H(d,d,C.o,d,d,new A.P(C.ab.I(1),d,d,A.a5(n/2),A.a([new A.eL(0,C.cs,C.n3.I(0.2*(1-t)),C.tv,0)],x.V),d,d,C.t),d,n,d,d,d,d,d,m),w)
w=a0.y
j=w==null
i=B.iUG(j?C.f9:w)?D.cfB:D.cfD
if(j)w=C.f9
j=A.kL(0,A.H(d,d,C.o,C.a4,d,d,d,d,d,d,d,d,d,d),0)
h=x.p
j=A.a([j,A.dL(d,k,d,d,a0.x?0:q,d,d,d)],h)
if(t>0.05){g=a0.x?0:q
j.push(A.dL(d,A.jf(new A.aoa(1,C.bS4,C.bp,new A.N(m,n,d,d),d),t),d,d,g,d,d,d))}f=A.dL(d,A.y4(C.ah,new A.N(m+q,l,A.ifQ(d,new A.c9(C.ah,d,C.aT,C.o,j,d),t,w,i,new A.v8(l/2,C.E)),d),u*(1+t*0.1)),d,d,o,d,2-r,d)
w=a0.a.c
return A.de(d,d,d,new A.N(a1,26,new A.c9(C.aP,d,C.aT,C.o,A.a([s,f,C.au],h),d),d),!1,d,d,d,!0,!1,d,!1,d,d,d,d,d,d,d,d,d,d,"Switch",d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,a0.gcLU(),d,d,d,d,d,d,d,d,w,d,d,C.aX,d)},
$S:349}
B.eBp.prototype={
$0(){var w,v,u,t=this.a
if(t.c!=null)t.A(new B.eBo())
w=t.e
v=!1
if(w.gbY_()){t=t.f
t===$&&A.e()
u=t.x
u===$&&A.e()
if(u<=0.001){t=t.Q
t===$&&A.e()
t=t!==C.hS}else t=v}else t=v
if(t)w.re()},
$S:0}
B.eBo.prototype={
$0(){},
$S:0}
B.eBn.prototype={
$2(d,e){return d+e.w},
$S:z+30}
B.eBm.prototype={
$1(d){return new B.AU(d.c,d.d,new B.eBl(this.a,d),!0,d.r,d.w,d.a)},
$S:z+2}
B.eBl.prototype={
$0(){this.b.e.$0()
this.a.aGb(0)},
$S:0}
B.eBj.prototype={
$1(d){var w=this.a
return w.A(new B.eBc(w))},
$S:73}
B.eBc.prototype={
$0(){return this.a.e=!0},
$S:0}
B.eBk.prototype={
$1(d){var w=this.a
return w.A(new B.eBb(w))},
$S:115}
B.eBb.prototype={
$0(){return this.a.e=!1},
$S:0}
B.eBi.prototype={
$0(){var w=this.a
return w.A(new B.eBd(w))},
$S:0}
B.eBd.prototype={
$0(){return this.a.e=!1},
$S:0}
B.eBg.prototype={
$1(d){var w=this.a
return w.A(new B.eBf(w))},
$S:54}
B.eBf.prototype={
$0(){return this.a.d=!0},
$S:0}
B.eBh.prototype={
$1(d){var w=this.a
return w.A(new B.eBe(w))},
$S:53}
B.eBe.prototype={
$0(){return this.a.d=!1},
$S:0}
B.cUz.prototype={
$1(d){var w=this
return new B.aoc(w.f.$1(d),w.e,w.c,w.d,w.a,w.b,null)},
$S:z+31}
B.cUB.prototype={
$0(){J.bes(this.a.bs())},
$S:0}
B.cUA.prototype={
$1(d){var w=this
return new B.agW(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,null)},
$S:z+32}
B.eBt.prototype={
$1(d){return this.a.abk()},
$S:346};(function aliases(){var w=B.bcs.prototype
w.dHN=w.q
w=B.bct.prototype
w.dHO=w.q
w=B.bba.prototype
w.dGh=w.q
w=B.bbc.prototype
w.dGj=w.q
w=B.bb9.prototype
w.dGg=w.q
w=B.bbd.prototype
w.dGk=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_1,u=a._instance_1u
w(B.Rj.prototype,"gbx","ap",0)
var t
w(t=B.aYT.prototype,"geEK","aFu",7)
w(t,"gdWl","Zs",5)
w(t,"gcQR","biR",0)
w(t=B.b8L.prototype,"geTy","eTz",0)
w(t,"gdYZ","dZ_",0)
v(B,"jmZ","iPX",21)
w(t=B.a_J.prototype,"gbx","ap",18)
u(t,"gdWg","dWh",19)
w(t,"ge62","e63",0)
w(t,"gdVQ","ayE",0)
u(B.bp2.prototype,"gfw8","cgg",24)
u(t=B.b6V.prototype,"getG","etH",26)
u(t,"getK","etL",27)
u(t,"getI","etJ",28)
w(B.b18.prototype,"gcLU","ebf",0)
w(t=B.b16.prototype,"geTN","eTO",0)
w(t,"gdXt","dXu",0)
u(t,"gdRs","dRt",29)
w(B.b19.prototype,"ge1n","abk",5)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.A,[B.IK,B.av2,B.ajX,B.mK,B.ajY,B.cmD,B.fS,B.beT,B.ru,B.dEi,B.a7Z,B.cDk,B.alm,B.La,B.abO,B.Kp,B.dl3,B.Az,B.OT,B.coW,B.ak5,B.bp2])
u(B.bOv,A.a6P)
u(B.Rj,B.bOv)
v(A.qA,[B.dpt,B.dpu,B.dpr,B.dps,B.hVP,B.dPX,B.cmr,B.cms,B.cmq,B.cmo,B.cmp,B.cmw,B.cmx,B.cmy,B.cmz,B.cmu,B.cmv,B.cmm,B.cmn,B.cmA,B.cmB,B.hFy,B.cnr,B.cnq,B.dEk,B.hHM,B.cDR,B.cDS,B.cDU,B.cDV,B.hHO,B.d21,B.d20,B.eeA,B.ee_,B.edO,B.edT,B.ee7,B.ee6,B.eet,B.eev,B.eer,B.ees,B.ee3,B.eep,B.eeq,B.eee,B.eec,B.eed,B.edu,B.edI,B.edw,B.edC,B.edD,B.edL,B.edJ,B.d1T,B.daC,B.daD,B.fE4,B.cDP,B.cDs,B.cDt,B.cDv,B.cDw,B.cDA,B.cDC,B.cDz,B.cDr,B.cDm,B.cDl,B.cDp,B.cDq,B.cDn,B.cDo,B.cDy,B.coZ,B.cp_,B.cp0,B.cp1,B.coX,B.coY,B.hFJ,B.cUx,B.fqe,B.fqd,B.eBm,B.eBj,B.eBk,B.eBg,B.eBh,B.cUz,B.cUA,B.eBt])
u(B.bC1,A.dF)
v(A.x0,[B.hVO,B.dPW,B.dPY,B.cmt,B.cDT,B.cDQ,B.hHN,B.eey,B.edX,B.edP,B.edQ,B.edR,B.edS,B.edY,B.edZ,B.edV,B.edW,B.ee5,B.ee4,B.ee0,B.ee1,B.ee2,B.ee8,B.ee9,B.eea,B.eeb,B.eeg,B.eeh,B.eei,B.eej,B.eek,B.eel,B.eem,B.een,B.eef,B.edE,B.edF,B.edG,B.edH,B.edv,B.edy,B.edz,B.edA,B.edB,B.edM,B.edN,B.edK,B.eew,B.eex,B.ffH,B.daE,B.ef0,B.fE2,B.fE0,B.fE1,B.fE_,B.cDB,B.cUw,B.fqg,B.fq8,B.fqa,B.fq9,B.fqf,B.fqb,B.fqc,B.eBp,B.eBo,B.eBl,B.eBc,B.eBb,B.eBi,B.eBd,B.eBf,B.eBe,B.cUB])
v(A.GQ,[B.aDo,B.bxe,B.bix,B.a_L,B.ff6,B.cye,B.cUv,B.aKc,B.aoe])
v(A.AB,[B.cmC,B.cmE,B.dEj,B.d22,B.eez,B.edU,B.eeu,B.eeo,B.edx,B.ffJ,B.ffI,B.fE3,B.fE5,B.cDu,B.cDx,B.cDD,B.eBq,B.cUy,B.eBs,B.eBn])
v(A.X,[B.beY,B.azo,B.a5A,B.b7b,B.c8a,B.Yy,B.c9m,B.aLQ,B.bxy,B.b2T,B.c0t,B.bS8,B.bpT,B.aK1,B.bpK,B.bpO,B.bpP,B.aoc,B.bXD])
u(B.aFS,A.CT)
u(B.aYT,A.AD)
u(B.aqi,A.CU)
v(A.a0,[B.aV0,B.aV1,B.aa0,B.aK7,B.b6U,B.aK8,B.aK5,B.AU,B.aKb,B.agW])
v(A.ab,[B.bcs,B.bct,B.bba,B.bXH,B.b6V,B.bbc,B.bb9,B.bXF,B.bXK,B.bbd])
u(B.b8L,B.bcs)
u(B.cbx,B.bct)
u(B.a_J,A.jt)
u(B.bXG,B.bba)
u(B.bS7,A.Pa)
u(B.b18,B.bbc)
u(B.b16,B.bb9)
u(B.b19,B.bbd)
w(B.bcs,A.f4)
w(B.bct,A.f4)
w(B.bba,A.f4)
w(B.bbc,A.hR)
w(B.bb9,A.f4)
w(B.bbd,A.f4)})()
A.yi(b.typeUniverse,JSON.parse('{"Rj":{"bk":["a4<~>","~"]},"bC1":{"dF":["Rj","~"],"aP":["Rj","a4<~>","~","~"],"cg":["~"],"b4":["a4<~>"],"cm":["a4<~>"],"bE":[],"cu":["a4<~>"],"bX":[],"aP.0":"Rj","aP.1":"a4<~>","aP.2":"~","aP.3":"~","dF.0":"Rj","dF.1":"~","b4.0":"a4<~>","cg.0":"~"},"bOv":{"bk":["a4<~>","~"]},"beY":{"X":[],"n":[]},"aFS":{"a0":[],"n":[]},"azo":{"X":[],"n":[]},"aYT":{"ab":["aFS"]},"a5A":{"X":[],"n":[]},"b7b":{"X":[],"n":[]},"c8a":{"X":[],"n":[]},"Yy":{"X":[],"n":[]},"c9m":{"X":[],"n":[]},"aLQ":{"X":[],"n":[]},"bxy":{"X":[],"n":[]},"aqi":{"a0":[],"n":[]},"b2T":{"X":[],"n":[]},"c0t":{"X":[],"n":[]},"bS8":{"X":[],"n":[]},"aV0":{"a0":[],"n":[]},"aV1":{"a0":[],"n":[]},"b8L":{"ab":["aV0"]},"cbx":{"ab":["aV1"]},"a_J":{"jt":["OT"],"bk":["OT","OT"]},"aa0":{"a0":[],"n":[]},"bXG":{"ab":["aa0"]},"bS7":{"bq":[]},"bpT":{"X":[],"n":[]},"aK1":{"X":[],"n":[]},"bpK":{"X":[],"n":[]},"bpO":{"X":[],"n":[]},"bpP":{"X":[],"n":[]},"aK7":{"a0":[],"n":[]},"b6U":{"a0":[],"n":[]},"bXH":{"ab":["aK7"]},"b6V":{"ab":["b6U"]},"aK8":{"a0":[],"n":[]},"b18":{"ab":["aK8"]},"aK5":{"a0":[],"n":[]},"b16":{"ab":["aK5"]},"AU":{"a0":[],"n":[]},"bXF":{"ab":["AU"]},"aoc":{"X":[],"n":[]},"bXD":{"X":[],"n":[]},"aKb":{"a0":[],"n":[]},"agW":{"a0":[],"n":[]},"bXK":{"ab":["aKb"]},"b19":{"ab":["agW"]}}'))
var y={c:"ai_chat_home_prompt_learning_download_batch",h:"ai_chat_home_prompt_settings_notifications_set"}
var x=(function rtii(){var w=A.a9
return{_:w("yn"),cm:w("eK<bk<a4<~>,~>,a4<~>,A?,A?>"),a:w("vI"),cq:w("f_<a4<~>,~>"),r:w("ajX"),k:w("fS"),cb:w("beT"),a3:w("TY"),e:w("uE"),fo:w("ZW"),Q:w("bf1"),dw:w("a76"),G:w("ak5"),T:w("nd"),v:w("Ol"),o:w("a4<kE>"),U:w("Kg"),q:w("Hu"),g_:w("a7Y"),aG:w("yO"),b:w("a7Z"),y:w("lK"),B:w("a_J"),f_:w("a_K"),K:w("uM"),ba:w("Az"),u:w("OT"),E:w("alm"),L:w("lw"),W:w("UY"),gB:w("hs<n,n>"),ad:w("aa<h>"),F:w("aa<~>"),C:w("aaE"),R:w("xm<Ah,vV>"),bo:w("xm<yn,uM>"),bK:w("J<ajY>"),ar:w("J<fS>"),eA:w("J<ra>"),Y:w("J<yz>"),V:w("J<eL>"),gb:w("J<lK>"),bR:w("J<Uv>"),bp:w("J<Az>"),fY:w("J<AU>"),eO:w("J<bf>"),fd:w("J<La>"),t:w("J<K<h,@>>"),bY:w("J<abO>"),dP:w("J<IK>"),fP:w("J<vm>"),s:w("J<h>"),cr:w("J<oF<ai>>"),p:w("J<n>"),dC:w("J<r>"),dS:w("J<bq?>"),d4:w("J<h?>"),gk:w("B0"),cW:w("u<ra>"),fO:w("u<K<h,@>>"),eB:w("u<IK>"),dy:w("u<h>"),j:w("u<@>"),I:w("aA<h,@>"),P:w("K<h,@>"),f:w("K<@,@>"),eE:w("K<h,A?>"),he:w("E<h,KU>"),g4:w("cR"),w:w("rv"),h:w("QI"),bb:w("W8"),a4:w("a2m"),gj:w("Lr"),fL:w("cq"),aU:w("A"),ep:w("a2Q"),d:w("WS"),dT:w("IK"),fQ:w("Rj"),fA:w("+deckId,deckName,error(h?,h?,h?)"),bG:w("ar"),em:w("vk"),fU:w("Xj"),bH:w("qh"),N:w("h"),aL:w("Ml"),n:w("lW"),M:w("av2"),fs:w("oF<ai>"),dJ:w("bQ<V>"),Z:w("bQ<ai>"),O:w("aF<h>"),c:w("aw<ak>"),D:w("aw<h>"),J:w("aw<I>"),dz:w("aw<r>"),eh:w("aw<ak?>"),l:w("aw<h?>"),ev:w("aw<r?>"),eR:w("aE<ru>"),m:w("n"),b2:w("a5M"),gV:w("EF"),x:w("I"),i:w("ai"),z:w("@"),S:w("r"),ac:w("ra?"),cR:w("a7Z?"),g:w("u<@>?"),c9:w("K<h,@>?"),fF:w("K<@,@>?"),ec:w("cR?"),X:w("A?"),dE:w("ar?"),A:w("h?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bjb=new B.fS("memory.review.start",!0,"\u5df2\u51c6\u5907\u8bb0\u5fc6\u590d\u4e60\uff0c\u8bf7\u8fdb\u5165\u8bb0\u5fc6\u6a21\u5757\u5f00\u59cb\u3002")
D.iI=new B.aDo(0,"low")
D.nO=new B.aDo(1,"medium")
D.HG=new B.aDo(2,"high")
D.bjv=new A.ak3(401,"",null,null)
D.eS_=new B.ff6(0,"circular")
D.c2g=new B.aa0(20,2.4,null)
D.bjF=new A.da(C.bZ,null,null,D.c2g,null)
D.eQD=new B.cye(0,"topRight")
D.bo7=new A.a_u(1,"oldest")
D.bo8=new A.a_u(3,"titleZA")
D.bp1=new A.aZ(0,400,48,1/0)
D.bp7=new A.aZ(28,1/0,28,1/0)
D.brQ=new B.ak5()
D.CL=new B.a_L(0,"global")
D.aft=new B.a_L(1,"note")
D.afu=new B.a_L(2,"bookReader")
D.afv=new B.a_L(3,"onlineReader")
D.bJu=new B.a_L(4,"foliateReader")
D.y3=new B.a_L(5,"pdf")
D.Jl=new B.bix(0,"standard")
D.pT=new B.bix(1,"readerCompact")
D.dgF=w([],x.bp)
D.bJv=new B.OT(C.zA,!1,!1,!1,null,null,null,D.dgF)
D.agJ=new A.a6(0.14901960784313725,1,1,1,C.A)
D.bV_=new A.lv(0.455,0.03,0.515,0.955)
D.ai7=new A.ca(38e4)
D.ain=new A.a_(0,0,10,0)
D.aiw=new A.a_(14,12,14,12)
D.XR=new A.a_(18,16,18,12)
D.Ds=new A.a_(20,16,20,20)
D.aiM=new A.a_(28,28,28,28)
D.aiR=new A.a_(8,12,8,0)
D.eRa=new B.cUv(0,"circle")
D.ak0=new B.aa0(18,2.2,null)
D.c2i=new B.aKc(0,"top")
D.c2j=new B.aKc(1,"center")
D.ak1=new B.aKc(2,"bottom")
D.ak2=new B.aoe(0,"success")
D.DR=new B.aoe(1,"error")
D.eRb=new B.aoe(2,"info")
D.ak3=new B.aoe(3,"warning")
D.c3L=new A.aX(57423,"MaterialSymbolsOutlined","material_symbols_icons",!0)
D.c3P=new A.aX(58835,"MaterialSymbolsOutlined","material_symbols_icons",!1)
D.c4T=new A.aX(58839,"MaterialSymbolsOutlined","material_symbols_icons",!1)
D.c5c=new A.aX(58075,"MaterialSymbolsOutlined","material_symbols_icons",!1)
D.am_=new A.aJ(58877,"MaterialIcons",null,!1)
D.an4=new A.aR(C.dP,null,null,null,null)
D.cfA=new A.mW(1,C.n5,20,4,0.01,1.5707963267948966,0.5,0,1.1,1.2)
D.afW=new A.a6(0.1,1,1,1,C.A)
D.cfB=new A.mW(1,D.afW,20,0,0.01,135,2,0,1.15,1.5)
D.cfD=new A.mW(1,D.afW,10,0,0.01,120,2,0,1.15,1.5)
D.bPR=new A.a6(0.12,1,1,1,C.A)
D.cfE=new A.mW(1,D.bPR,10,10,0,135,0.7,0.4,0.7,1.2)
D.cfO=new A.mW(1,C.n5,25,6,0.01,1.5707963267948966,0.5,0,1.15,1.3)
D.cfP=new A.mW(1,C.n5,15,3,0.01,1.5707963267948966,0.5,0,1.1,1.2)
D.aoS=new A.v8(20,C.E)
D.d3T=w(["Focus","Search"],x.s)
D.d5T=w(["\u51fd\u6570","\u5fae\u79ef\u5206","\u5bfc\u6570","\u79ef\u5206","\u6781\u9650","\u7ebf\u6027\u4ee3\u6570","\u77e9\u9635","\u5411\u91cf","\u6982\u7387","\u7edf\u8ba1","\u51e0\u4f55","\u4ee3\u6570","\u6570\u5217","\u4e09\u89d2","\u4e0d\u7b49\u5f0f","\u65b9\u7a0b","\u9ad8\u4e2d\u6570\u5b66","\u521d\u4e2d\u6570\u5b66","math","calculus","algebra","geometry","linear algebra","probability","statistics","derivative","integral","equation"],x.s)
D.daB=w(["\u521b\u5efa\u8bb0\u5fc6\u5361\u7247","\u65b0\u5efa\u8bb0\u5fc6\u5361\u7247","\u521b\u5efa\u5361\u7247","\u65b0\u5efa\u5361\u7247","flashcard","memory card","create a flashcard","create flashcard"],x.s)
D.ayl=w(["problem_retrieve","practice_session_start_signal"],x.s)
D.e1j=new B.ru("memory_card_create","memory.card.create","ai_chat_home_prompt_memory_card_create",10)
D.e1a=new B.ru("memory_deck_create","memory.deck.create","ai_chat_home_prompt_memory_deck_create",20)
D.e1k=new B.ru("memory_review_start","memory.review.start","ai_chat_home_prompt_memory_review_start",30)
D.e1c=new B.ru("memory_stats_get","memory.stats.get","ai_chat_home_prompt_memory_stats_get",35)
D.e1i=new B.ru("memory_cards_count","memory.cards.count","ai_chat_home_prompt_memory_cards_count",38)
D.e1e=new B.ru("memory_decks_list","memory.decks.list","ai_chat_home_prompt_memory_decks_list",39)
D.e1g=new B.ru("notes_append","notes.note.append","ai_chat_home_prompt_notes_append",40)
D.e1h=new B.ru("practice_start","problembank.practice.start","ai_chat_home_prompt_practice_start",50)
D.e1d=new B.ru("library_progress","library.book.reading_progress.set","ai_chat_home_prompt_library_progress_set",60)
D.e1f=new B.ru("library_books_list","library.books.list","ai_chat_home_prompt_library_books_list",62)
D.e1b=new B.ru("learning_batch_download","learning.download.batch_start",y.c,70)
D.e19=new B.ru("settings_notifications","settings.notifications.set",y.h,80)
D.ddd=w([D.e1j,D.e1a,D.e1k,D.e1c,D.e1i,D.e1e,D.e1g,D.e1h,D.e1d,D.e1f,D.e1b,D.e19],A.a9("J<ru>"))
D.dpf=w(["\u7ec3\u4e60","\u5237\u9898","\u505a\u9898","\u51fa\u9898","\u9898\u5e93","\u5f00\u59cb\u7ec3\u4e60","practice","quiz","question bank","start practice"],x.s)
D.e5K={"memory.card.create":0,"memory.deck.create":1,"memory.review.start":2,"memory.stats.get":3,"memory.cards.count":4,"memory.decks.list":5,"settings.memory.daily_limits.set":6,"notes.note.create":7,"notes.note.append":8,"notes.note.rename":9,"notes.note.delete":10,"problembank.practice.start":11,"problembank.practice.end_current":12,"library.book.favorite.set":13,"library.book.reading_progress.set":14,"library.book.filters.set":15,"library.books.list":16,"learning.download.start":17,"learning.download.batch_start":18,"learning.download.clear_all":19,"settings.ai.chat_model.set":20,"settings.notifications.set":21,"settings.sync.set":22,"settings.notes_sync.set":23,"settings.theme.set":24,"settings.reminder.set":25,"settings.storage.path.set":26}
D.bj7=new B.mK(D.iI,"\u521b\u5efa\u8bb0\u5fc6\u5361\u7247")
D.bj_=new B.mK(D.iI,"\u521b\u5efa\u8bb0\u5fc6\u724c\u7ec4")
D.biQ=new B.mK(D.iI,"\u5f00\u59cb\u8bb0\u5fc6\u590d\u4e60")
D.bj5=new B.mK(D.iI,"\u67e5\u770b\u8bb0\u5fc6\u7edf\u8ba1")
D.biV=new B.mK(D.iI,"\u7edf\u8ba1\u8bb0\u5fc6\u5361\u7247\u6570\u91cf")
D.bj9=new B.mK(D.iI,"\u5217\u51fa\u8bb0\u5fc6\u724c\u7ec4")
D.biU=new B.mK(D.nO,"\u8c03\u6574\u8bb0\u5fc6\u6bcf\u65e5\u4e0a\u9650")
D.biO=new B.mK(D.iI,"\u521b\u5efa\u7b14\u8bb0")
D.biN=new B.mK(D.iI,"\u8ffd\u52a0\u7b14\u8bb0\u5185\u5bb9")
D.bj4=new B.mK(D.iI,"\u91cd\u547d\u540d\u7b14\u8bb0")
D.bj6=new B.mK(D.HG,"\u5220\u9664\u7b14\u8bb0")
D.bj1=new B.mK(D.iI,"\u5f00\u59cb\u9898\u5e93\u7ec3\u4e60")
D.biS=new B.mK(D.nO,"\u7ed3\u675f\u5f53\u524d\u7ec3\u4e60")
D.biT=new B.mK(D.iI,"\u8bbe\u7f6e\u56fe\u4e66\u6536\u85cf\u72b6\u6001")
D.bj3=new B.mK(D.iI,"\u8bbe\u7f6e\u9605\u8bfb\u8fdb\u5ea6")
D.biZ=new B.mK(D.iI,"\u8bbe\u7f6e\u56fe\u4e66\u7b5b\u9009")
D.biP=new B.mK(D.iI,"\u5217\u51fa\u4e66\u5e93\u56fe\u4e66")
D.biY=new B.mK(D.iI,"\u4e0b\u8f7d\u7ae0\u8282")
D.biW=new B.mK(D.nO,"\u6279\u91cf\u4e0b\u8f7d\u7ae0\u8282")
D.biR=new B.mK(D.HG,"\u6e05\u7a7a\u5168\u90e8\u4e0b\u8f7d")
D.bj8=new B.mK(D.nO,"\u5207\u6362 AI \u804a\u5929\u6a21\u578b")
D.biM=new B.mK(D.nO,"\u8c03\u6574\u901a\u77e5\u8bbe\u7f6e")
D.biX=new B.mK(D.nO,"\u8c03\u6574\u540c\u6b65\u8bbe\u7f6e")
D.bj0=new B.mK(D.nO,"\u8c03\u6574\u7b14\u8bb0\u540c\u6b65\u8bbe\u7f6e")
D.biL=new B.mK(D.nO,"\u5207\u6362\u4e3b\u9898\u6a21\u5f0f")
D.biK=new B.mK(D.iI,"\u8bbe\u7f6e\u5b66\u4e60\u63d0\u9192\u65f6\u95f4")
D.bj2=new B.mK(D.HG,"\u4fee\u6539\u6570\u636e\u5b58\u50a8\u8def\u5f84")
D.tk=new A.ag(D.e5K,[D.bj7,D.bj_,D.biQ,D.bj5,D.biV,D.bj9,D.biU,D.biO,D.biN,D.bj4,D.bj6,D.bj1,D.biS,D.biT,D.bj3,D.biZ,D.biP,D.biY,D.biW,D.biR,D.bj8,D.biM,D.biX,D.bj0,D.biL,D.biK,D.bj2],A.a9("ag<h,mK>"))
D.e0m=new A.abx(C.cs,4)
D.FM=new B.bxe(0,"text")
D.aMr=new B.bxe(1,"latex")
D.wz=new A.ly("flutter_tts",C.ec,null)
D.ezS=new B.aV1(null)
D.e6W=new A.F(C.kG,D.ezS,null)
D.eeD=new A.Nt(null,null,"\u5b58\u5728\u591a\u4e2a\u540c\u540d\u724c\u7ec4\uff0c\u8bf7\u6539\u7528 deckId\u3002")
D.a4E=new A.Nt(null,null,null)
D.eeP=new A.Nt(null,null,"\u5339\u914d\u5230\u591a\u4e2a\u724c\u7ec4\uff0c\u8bf7\u63d0\u4f9b\u66f4\u7cbe\u786e\u7684 deckName \u6216 deckId\u3002")
D.ei1=new A.cr(C.Ib,C.E)
D.ezz=new A.dP("...",null,null,null,null,null,null,null,null,null,null,null,null)
D.dn1=w([D.ak0,C.cS,D.ezz],x.p)
D.ei3=new A.lQ(C.aI,C.i,C.D,C.l,null,C.n,null,0,D.dn1,null)
D.enz=new A.atC(1,300,24)
D.ev9=new A.aI(!0,C.WP,null,null,null,null,13,C.av,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewt=new A.aI(!0,C.ab,null,null,null,null,13,C.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exW=new A.aI(!0,C.ab,null,null,null,null,15,C.av,null,-0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDR=new A.aF("chat-shell-sidebar",x.O)
D.eDZ=new A.aF("chat-shell-more-button",x.O)
D.eEk=new A.aF("chat-shell-practice-card",x.O)
D.eEl=new A.aF("chat-shell-history-button",x.O)
D.eEy=new A.aF("chat-shell-close-button",x.O)
D.eEG=new A.aF("chat-shell-agent-plan-card",x.O)
D.eEJ=new A.aF("chat-shell-header",x.O)
D.eET=new A.aF("chat-shell-empty-state",x.O)
D.eEV=new A.aF("chat-shell-new-chat-button",x.O)
D.eFx=new A.aF("chat-shell-new-chat-tile",x.O)
D.eFL=new A.aF("chat-shell-back-button",x.O)
D.eFM=new A.aF("thinking-block-scroll-area",x.O)
D.eFP=new A.aF("ai-glass-workspace-stage",x.O)
D.eFX=new A.aF("glass_toast_dismissible",x.O)
D.eG_=new A.aF("chat-shell-main-panel",x.O)
D.eG5=new A.aF("chat-shell-header-title",x.O)
D.eGt=new A.aF("chat-shell-processing-card",x.O)
D.eHb=new A.aF("chat-shell-model-button",x.O)
D.eHl=new A.aw(!0,"Created by AI Agent",x.D)
D.eHt=new A.aw(!0,"ai_agent",x.l)})();(function staticFields(){$.beR=A.D(x.N,A.a9("ak"))
$.iWE=A.a(["\\frac","\\sqrt","\\sum","\\int","\\prod","\\lim","\\infty","\\alpha","\\beta","\\gamma","\\delta","\\theta","\\pi","\\sigma","\\omega","\\partial","\\nabla","\\cdot","\\times","\\div","\\pm","\\leq","\\geq","\\neq","\\approx","\\equiv","\\in","\\subset","\\cup","\\cap","\\rightarrow","\\leftarrow","\\Rightarrow","\\Leftarrow","\\forall","\\exists","\\begin","\\end","\\left","\\right","\\mathbf","\\mathrm","\\mathcal","\\text","\\binom","\\vec","\\hat","\\bar","\\dot","\\ddot"],x.s)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"jVb","iaq",()=>{var v=null
return new B.bC1(v,v,"ragServiceProvider",v,v,v,!0)})
w($,"jXH","iMj",()=>A.dM(new B.hVP(),null,!1,null,null,x.M))
w($,"jyw","ixY",()=>A.a1("^(?:\u8bf7)?(?:\u5e2e\u6211)?(?:\u521b\u5efa|\u65b0\u5efa|\u751f\u6210|\u505a|\u5efa\u7acb|\u5236\u4f5c|create|make)(?:\u4e00\u5f20|\u4e00\u4e2a|\u4e00\u6761)?(?:\u8bb0\u5fc6\u5361\u7247|\u5361\u7247|\u95ea\u5361|flashcard|memory card)\\s*[:\uff1a-]?\\s*",!1,!1,!1,!1))
w($,"jLT","iFO",()=>A.dM(new B.hFy(),null,!1,null,null,x.r))
w($,"jNH","i9I",()=>A.dM(new B.hHM(),null,!1,null,null,x.b))
w($,"jNJ","iGK",()=>A.dM(new B.hHO(),null,!1,null,null,x.E))
w($,"jBC","i8a",()=>A.a1("\\$\\$(.+?)\\$\\$",!0,!0,!0,!1))
w($,"jBD","i8b",()=>A.a1("(?<!\\$)\\$(?!\\$)(.+?)(?<!\\$)\\$(?!\\$)",!0,!1,!1,!1))
w($,"jNI","EW",()=>C.V6.$3$1(B.jmZ(),x.B,x.u,A.a9("Kp")))
w($,"jM2","iFT",()=>A.dM(new B.hFJ(),null,!1,null,null,x.G))})()};
(a=>{a["nIavKDEQsVlDvR7NNKHvHgj3d7Y="]=a.current})($__dart_deferred_initializers__);