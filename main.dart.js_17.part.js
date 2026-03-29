((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={IK:function IK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=h
_.r=i
_.y=j},Ri:function Ri(){this.x=!1
this.b=null},dpn:function dpn(){},dpo:function dpo(d){this.a=d},dpl:function dpl(d){this.a=d},dpm:function dpm(){},bC0:function bC0(d,e,f,g,h,i,j){var _=this
_.f=d
_.r=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j},bOt:function bOt(){},hVG:function hVG(){},hVF:function hVF(d){this.a=d},av1:function av1(d){this.a=d
this.c=this.b=!1},dPQ:function dPQ(d){this.a=d},dPR:function dPR(d){this.a=d},dPS:function dPS(d){this.a=d},
jmr(d){var w,v,u,t,s,r,q,p,o=A.a([],x.s)
o.push(d.gd9r()>0?"\u5df2\u6267\u884c\u64cd\u4f5c\uff1a\u6210\u529f "+d.gcAz()+"\uff0c\u5931\u8d25 "+d.gd9r()+"\u3002":"\u5df2\u6267\u884c\u64cd\u4f5c\uff1a\u5171 "+d.gcAz()+" \u9879\uff0c\u5168\u90e8\u6210\u529f\u3002")
for(w=d.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.a7)(w),++u){t=w[u]
s=t.b?"[OK]":"[ERR]"
r=t.a
q=D.tj.h(0,r)
p=q==null?null:q.c
r=p==null?r:p
o.push(s+" "+r+"\uff1a"+t.c)}return C.d.au(o,"\n")},
ajW:function ajW(d){this.a=d},
cmo:function cmo(){},
cmp:function cmp(d){this.a=d},
cmn:function cmn(d){this.a=d},
cml:function cml(d){this.a=d},
cmm:function cmm(){},
cmt:function cmt(d){this.a=d},
cmu:function cmu(d){this.a=d},
cmv:function cmv(d){this.a=d},
cmw:function cmw(d){this.a=d},
cmq:function cmq(d,e){this.a=d
this.b=e},
cmr:function cmr(d){this.a=d},
cms:function cms(d){this.a=d},
cmj:function cmj(d){this.a=d},
cmk:function cmk(){},
cmx:function cmx(){},
cmy:function cmy(){},
hFp:function hFp(){},
iNW(d){var w,v,u,t,s,r,q,p=d.e
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,A.a7)(w),++u){t=w[u]
s=D.tj.h(0,t.a)
r=s==null?null:s.b
if(r==null)r=D.iI
q=t.d
if(r.ga5R()>=q.ga5R())q=r
if(q.ga5R()>p.ga5R())p=q}return p},
iNX(d){if(d.d)return!0
return B.iNW(d).ga5R()>=D.nN.ga5R()},
mK:function mK(d,e){this.b=d
this.c=e},
ibk(d){var w=d==null?null:C.c.p(J.w(d)).toLowerCase()
switch(w==null?"":w){case"high":return D.HF
case"medium":return D.nN
default:return D.iI}},
iNU(d,e){var w,v,u,t=d.h(0,"actionId"),s=C.c.p(J.w(t==null?"":t))
t=d.h(0,"actionInstanceId")
J.w(t==null?"act_"+Date.now()+"_"+e:t)
t=d.h(0,"idempotencyKey")
w=J.w(t==null?"idem_"+Date.now()+"_"+e:t)
v=d.h(0,"args")
u=x.f.b(v)?J.eF(v,new B.cmz(),x.N,x.z):C.bt
return new B.ajX(s,w,B.ibk(d.h(0,"risk")),u)},
iNV(d){var w,v,u,t,s,r,q,p,o=J.L(d),n=x.g.a(o.h(d,"actions"))
if(n==null)n=C.aS
w=A.a([],x.bK)
for(v=J.L(n),u=x.N,t=x.z,s=x.f,r=0;r<v.gE(n);++r){q=v.h(n,r)
if(!s.b(q))continue
p=B.iNU(J.eF(q,new B.cmB(),u,t),r+1)
if(p.a.length===0)continue
w.push(p)}v=o.h(d,"schemaVersion")
C.c.p(J.w(v==null?"":v))
v=o.h(d,"planId")
v=C.c.p(J.w(v==null?"":v))
u=o.h(d,"assistantMessage")
u=C.c.p(J.w(u==null?"":u))
t=J.C(o.h(d,"requiresConfirmation"),!0)
s=B.ibk(o.h(d,"riskSummary"))
o=o.h(d,"onError")
return new B.cmA(v,u,t,s,C.c.p(J.w(o==null?"stop":o)),w)},
aDn:function aDn(d,e){this.a=d
this.b=e},
ajX:function ajX(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
cmz:function cmz(){},
cmA:function cmA(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
cmB:function cmB(){},
fS:function fS(d,e,f){this.a=d
this.b=e
this.c=f},
beS:function beS(d){this.b=d},
cno:function cno(){},
cnn:function cnn(){},
ru:function ru(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
j2p(d){var w,v,u,t,s,r,q,p,o=null,n=B.j2n(d)
if(n==null)return o
try{w=C.L.aR(0,n,o)
if(!x.P.b(w))return o
q=J.t(w,"answer")
v=q==null?J.t(w,"response"):q
u=typeof v=="string"?v:o
if(u==null||C.c.p(u).length===0)return o
t=B.j2o(J.t(w,"citations"))
if(t==null)return o
return new B.dEc(u,t)}catch(p){s=A.T(p)
r=A.b_(p)
return o}},
j2o(d){var w,v,u,t,s
if(d==null)return A.a([],x.t)
w=d
if(typeof d=="string"){v=C.c.p(d)
if(J.an(v)===0)return A.a([],x.t)
try{w=C.L.aR(0,v,null)}catch(s){u=A.T(s)
t=A.b_(s)
return null}}if(!x.j.b(w))return null
return J.kd(w,x.f).bD(0,new B.dEe(),x.P).cd(0,!1)},
j2n(d){var w,v,u,t,s=C.c.p(d)
if(s.length===0)return null
if(C.c.ao(s,"```")){w=A.a1("```(?:json)?\\s*([\\s\\S]*?)\\s*```",!1,!1,!1,!1).cf(s)
if(w!=null){v=w.b[1]
return v==null?null:C.c.p(v)}}if(C.c.ao(s,"{")&&C.c.c4(s,"}"))return s
u=C.c.eH(s,"{")
t=C.c.mi(s,"}")
if(u>=0&&t>u)return C.c.a3(s,u,t+1)
return null},
dEc:function dEc(d,e){this.a=d
this.b=e},
dEe:function dEe(){},
dEd:function dEd(){},
a7Y:function a7Y(d){this.a=d},
hHD:function hHD(){},
cDh:function cDh(d,e){this.a=d
this.b=e},
all:function all(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=!1
_.f=null},
cDO:function cDO(){},
cDP:function cDP(){},
cDQ:function cDQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cDR:function cDR(){},
cDS:function cDS(){},
cDN:function cDN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hHF:function hHF(){},
hHE:function hHE(d){this.a=d},
ih8(d){var w,v,u,t,s,r,q=A.a([],x.fd),p=$.i81().ev(0,d),o=A.M(p,A.S(p).i("U.E"))
for(p=o.length,w=0;w<o.length;o.length===p||(0,A.a7)(o),++w){v=o[w].b
u=v[1]
t=u==null?null:C.c.p(u)
if(t==null)t=""
if(t.length!==0){u=v.index
q.push(new B.La(t,!0,u,u+v[0].length))}}p=$.i82().ev(0,d)
s=A.M(p,A.S(p).i("U.E"))
for(p=s.length,w=0;w<s.length;s.length===p||(0,A.a7)(s),++w){r=s[w]
if(C.d.c8(o,new B.d1W(r)))continue
v=r.b
u=v[1]
t=u==null?null:C.c.p(u)
if(t==null)t=""
if(t.length!==0&&B.iWw(t)){u=v.index
q.push(new B.La(t,!1,u,u+v[0].length))}}C.d.dv(q,new B.d1X())
return q},
iWw(d){var w,v,u
for(w=0;w<50;++w){v=$.iWv[w]
if(A.jB(d,v,0))return!0}if(C.c.t(d,"_")||C.c.t(d,"^"))return!0
if(C.c.t(d,"\\(")||C.c.t(d,"\\)"))return!0
u=A.a1("[a-zA-Z][_^][0-9a-zA-Z{]",!0,!1,!1,!1)
if(u.b.test(d))return!0
if(C.c.t(d,"{")&&C.c.t(d,"}"))return!0
return!1},
iWx(d){var w=A.Y(d).i("E<1,K<h,@>>")
w=A.M(new A.E(d,new B.d1V(),w),w.i("ah.E"))
return C.L.bt(w,null)},
iWy(d){var w,v,u,t,s,r=null,q=A.a([],x.bY),p=B.ih8(d),o=p.length
if(o===0){q.push(new B.abN(D.FL,d,r))
return q}for(w=0,v=0;v<p.length;p.length===o||(0,A.a7)(p),++v){u=p[v]
t=u.c
if(t>w){s=C.c.a3(d,w,t)
if(s.length!==0)q.push(new B.abN(D.FL,s,r))}q.push(new B.abN(D.aMq,r,u))
w=u.d}if(w<d.length){s=C.c.aZ(d,w)
if(s.length!==0)q.push(new B.abN(D.FL,s,r))}return q},
La:function La(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d1W:function d1W(d){this.a=d},
d1X:function d1X(){},
d1V:function d1V(){},
abN:function abN(d,e,f){this.a=d
this.b=e
this.c=f},
bxd:function bxd(d,e){this.a=d
this.b=e},
ibl(d,e,f,g,h){return new B.beX(f,g,h,d,e,null)},
a6L(d,e,f,g){B.iUz(d,C.dv,e,f,D.ak0,g)},
beX:function beX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hZ3(d,e,f,g,h,i,j,k,l,m){return new B.aFR(j,m,l,d,i,k,e,h,g,f,null)},
i3O(d,e,f,g,h,i,j){return new B.c9k(d,f,i,h,e,j,g,null)},
biw:function biw(d,e){this.a=d
this.b=e},
aFR:function aFR(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aYS:function aYS(d,e,f,g,h){var _=this
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
eer:function eer(d){this.a=d},
ees:function ees(d){this.a=d},
eeq:function eeq(){},
edP:function edP(d){this.a=d},
edH:function edH(d){this.a=d},
edI:function edI(d){this.a=d},
edJ:function edJ(d,e,f){this.a=d
this.b=e
this.c=f},
edK:function edK(d,e){this.a=d
this.b=e},
edQ:function edQ(d,e){this.a=d
this.b=e},
edR:function edR(d,e){this.a=d
this.b=e},
edN:function edN(d){this.a=d},
edO:function edO(d){this.a=d},
edS:function edS(d){this.a=d},
edG:function edG(){},
edL:function edL(){},
edM:function edM(){},
ee_:function ee_(d,e,f){this.a=d
this.b=e
this.c=f},
edY:function edY(d,e){this.a=d
this.b=e},
edZ:function edZ(d,e){this.a=d
this.b=e},
edX:function edX(d,e){this.a=d
this.b=e},
eel:function eel(d){this.a=d},
eem:function eem(){},
een:function een(d,e){this.a=d
this.b=e},
eej:function eej(){},
eek:function eek(d,e){this.a=d
this.b=e},
edW:function edW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edT:function edT(d,e){this.a=d
this.b=e},
edU:function edU(d,e,f){this.a=d
this.b=e
this.c=f},
edV:function edV(d,e){this.a=d
this.b=e},
eeh:function eeh(){},
eei:function eei(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
eeg:function eeg(d,e,f,g,h,i,j,k,l,m){var _=this
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
ee6:function ee6(d,e,f){this.a=d
this.b=e
this.c=f},
ee0:function ee0(d,e){this.a=d
this.b=e},
ee1:function ee1(d,e){this.a=d
this.b=e},
ee4:function ee4(){},
ee5:function ee5(d,e,f){this.a=d
this.b=e
this.c=f},
ee2:function ee2(d,e){this.a=d
this.b=e},
ee3:function ee3(d,e){this.a=d
this.b=e},
ee8:function ee8(d,e){this.a=d
this.b=e},
ee9:function ee9(d,e){this.a=d
this.b=e},
eea:function eea(d,e){this.a=d
this.b=e},
eeb:function eeb(d,e){this.a=d
this.b=e},
eec:function eec(d,e){this.a=d
this.b=e},
eed:function eed(d,e){this.a=d
this.b=e},
eee:function eee(d,e,f){this.a=d
this.b=e
this.c=f},
eef:function eef(d,e){this.a=d
this.b=e},
ee7:function ee7(d,e){this.a=d
this.b=e},
edm:function edm(){},
edw:function edw(d){this.a=d},
edx:function edx(d,e,f){this.a=d
this.b=e
this.c=f},
edy:function edy(d,e){this.a=d
this.b=e},
edz:function edz(d,e,f){this.a=d
this.b=e
this.c=f},
edA:function edA(){},
edo:function edo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edn:function edn(d,e){this.a=d
this.b=e},
edp:function edp(d,e){this.a=d
this.b=e},
edq:function edq(d){this.a=d},
edr:function edr(d){this.a=d},
eds:function eds(d){this.a=d},
edt:function edt(d,e){this.a=d
this.b=e},
edu:function edu(d,e){this.a=d
this.b=e},
edv:function edv(d){this.a=d},
edD:function edD(){},
edE:function edE(d,e){this.a=d
this.b=e},
edF:function edF(d,e){this.a=d
this.b=e},
edB:function edB(d){this.a=d},
edC:function edC(d){this.a=d},
eeo:function eeo(d){this.a=d},
eep:function eep(d){this.a=d},
azn:function azn(d,e,f){this.c=d
this.d=e
this.a=f},
ffB:function ffB(){},
ffA:function ffA(d,e){this.a=d
this.b=e},
ffz:function ffz(d,e){this.a=d
this.b=e},
a5z:function a5z(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
b7a:function b7a(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
c88:function c88(d,e){this.c=d
this.a=e},
Yw:function Yw(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
c9k:function c9k(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aLP:function aLP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
d1N:function d1N(d,e){this.a=d
this.b=e},
bxx:function bxx(d,e,f){this.c=d
this.d=e
this.a=f},
jeA(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="pageNumber"
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
aqh:function aqh(d,e,f,g){var _=this
_.e=d
_.f=e
_.x=f
_.a=g},
daw:function daw(){},
dax:function dax(){},
day:function day(d,e,f){this.a=d
this.b=e
this.c=f},
b2S:function b2S(d,e){this.c=d
this.a=e},
c0r:function c0r(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bS6:function bS6(d,e,f){this.c=d
this.d=e
this.a=f},
eeT:function eeT(d,e,f){this.a=d
this.b=e
this.c=f},
aV_:function aV_(d,e,f){this.c=d
this.e=e
this.a=f},
b8K:function b8K(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.w=!1
_.ef$=d
_.b9$=e
_.c=_.a=null},
fDV:function fDV(d){this.a=d},
fDT:function fDT(d){this.a=d},
fDU:function fDU(d){this.a=d},
fDS:function fDS(d){this.a=d},
fDW:function fDW(d){this.a=d},
aV0:function aV0(d){this.a=d},
cbv:function cbv(d,e){var _=this
_.d=$
_.ef$=d
_.b9$=e
_.c=_.a=null},
fDY:function fDY(d,e){this.a=d
this.b=e},
fDX:function fDX(d,e){this.a=d
this.b=e},
bcr:function bcr(){},
bcs:function bcs(){},
iPO(d){return new B.a_H(d,A.a([],x.s))},
Kp:function Kp(d,e){this.a=d
this.b=e},
a_J:function a_J(d,e){this.a=d
this.b=e},
dkY:function dkY(d,e){this.a=d
this.b=e},
Az:function Az(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cDM:function cDM(){},
OS:function OS(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
a_H:function a_H(d,e){var _=this
_.x=d
_.Q=_.z=_.y=null
_.as=!1
_.at=""
_.ax=e
_.b=_.ay=null},
cDp:function cDp(d){this.a=d},
cDq:function cDq(){},
cDr:function cDr(){},
cDs:function cDs(){},
cDt:function cDt(d){this.a=d},
cDu:function cDu(){},
cDx:function cDx(d){this.a=d},
cDy:function cDy(d){this.a=d},
cDz:function cDz(){},
cDw:function cDw(d){this.a=d},
cDA:function cDA(d){this.a=d},
cDo:function cDo(){},
cDj:function cDj(){},
cDi:function cDi(){},
cDm:function cDm(){},
cDn:function cDn(){},
cDk:function cDk(){},
cDl:function cDl(){},
cDv:function cDv(d){this.a=d},
coT:function coT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ak4:function ak4(){},
coW:function coW(){},
coX:function coX(){},
coY:function coY(d){this.a=d},
coZ:function coZ(){},
coU:function coU(d){this.a=d},
coV:function coV(){},
hFA:function hFA(){},
bp1:function bp1(){this.r=this.b=this.a=null},
aa_:function aa_(d,e,f){this.f=d
this.r=e
this.a=f},
bXE:function bXE(d,e){var _=this
_.d=$
_.ef$=d
_.b9$=e
_.c=_.a=null},
eBi:function eBi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bS5:function bS5(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
feZ:function feZ(d,e){this.a=d
this.b=e},
bb9:function bb9(){},
ifM(d,e,f,g,h,i,j,k,l,m){return new B.bpS(d,f,k,h,g,i,e,m,l,j,null)},
bpS:function bpS(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ifG(d,e){return new B.aK0(d,!1,e,null,null)},
cyb:function cyb(d,e){this.a=d
this.b=e},
aK0:function aK0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.x=g
_.a=h},
bpJ:function bpJ(d,e){this.c=d
this.a=e},
ifJ(d,e,f){return new B.bpN(d,e,f,null)},
bpN:function bpN(d,e,f,g){var _=this
_.c=d
_.e=e
_.r=f
_.a=g},
cUq:function cUq(){},
cUp:function cUp(d,e){this.a=d
this.b=e},
bpO:function bpO(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.w=h
_.a=i},
cUs:function cUs(d,e){this.a=d
this.b=e},
cUr:function cUr(d){this.a=d},
aK6:function aK6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.x=g
_.y=h
_.a=i},
bXF:function bXF(){this.c=this.a=null},
b6T:function b6T(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b6U:function b6U(){var _=this
_.e=_.d=!1
_.f=$
_.c=_.a=null},
fq8:function fq8(d){this.a=d},
fq0:function fq0(d,e){this.a=d
this.b=e},
fq2:function fq2(d,e){this.a=d
this.b=e},
fq1:function fq1(d){this.a=d},
fq7:function fq7(d){this.a=d},
fq3:function fq3(d){this.a=d},
fq6:function fq6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fq5:function fq5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fq4:function fq4(d,e){this.a=d
this.b=e},
aK7:function aK7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b17:function b17(d,e){var _=this
_.w=_.r=_.f=_.e=_.d=$
_.x=!0
_.y=null
_.y2$=d
_.aD$=e
_.c=_.a=null},
eBk:function eBk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bbb:function bbb(){},
aK4:function aK4(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.f=f
_.x=g
_.a=h},
b15:function b15(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.f=$
_.w=_.r=null
_.y=f
_.ef$=g
_.b9$=h
_.c=_.a=null},
eBh:function eBh(d){this.a=d},
eBg:function eBg(){},
eBf:function eBf(){},
eBe:function eBe(d){this.a=d},
eBd:function eBd(d,e){this.a=d
this.b=e},
bb8:function bb8(){},
AU:function AU(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bXD:function bXD(){var _=this
_.e=_.d=!1
_.c=_.a=null},
eBb:function eBb(d){this.a=d},
eB4:function eB4(d){this.a=d},
eBc:function eBc(d){this.a=d},
eB3:function eB3(d){this.a=d},
eBa:function eBa(d){this.a=d},
eB5:function eB5(d){this.a=d},
eB8:function eB8(d){this.a=d},
eB7:function eB7(d){this.a=d},
eB9:function eB9(d){this.a=d},
eB6:function eB6(d){this.a=d},
bpQ(d,e,f,g,h){var w=null
return A.fm(C.a4,w,new B.cUt(w,C.f9,!0,w,g,d),C.b4,w,e,0,!0,!0,!0,w,D.ei0,w,!1,!1,h)},
aob:function aob(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cUt:function cUt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bXB:function bXB(d,e){this.c=d
this.a=e},
iUz(d,e,f,g,h,i){var w,v,u=A.rA(d,!1)
u.toString
w=A.dw()
v=new B.cUv(w)
w.b=A.ta(new B.cUu(g,f,i,h,e,null,!0,null,null,v),!1,!1)
u.hR(0,w.bs())
return v},
aKb:function aKb(d,e){this.a=d
this.b=e},
aod:function aod(d,e){this.a=d
this.b=e},
aKa:function aKa(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.y=h
_.z=i
_.a=j},
cUv:function cUv(d){this.a=d},
cUu:function cUu(d,e,f,g,h,i,j,k,l,m){var _=this
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
bXI:function bXI(){this.c=this.a=null},
agV:function agV(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b18:function b18(d,e){var _=this
_.f=_.e=_.d=$
_.r=null
_.ef$=d
_.b9$=e
_.c=_.a=null},
eBl:function eBl(d){this.a=d},
bbc:function bbc(){},
icK(d,e,f,g,h,i,j,k,l,m,n,o){var w=x.D,v=x.c
return new A.alk(new A.aw(!0,k,w),new A.aw(!0,o,w),new A.aw(!0,m,w),g,i,l,h,f,j,new A.aw(!0,d,v),new A.aw(!0,n,v),e)},
iUx(d){switch(d.a){case 0:return!0
case 1:return!1}},
iSj(d){if(d<0)return-C.m.a4(-d*0.4,0,0.3)
else if(d>1)return 1+C.m.a4((d-1)*0.4,0,0.3)
return d},
iew(d,e,f){var w,v=e.gaN()
v.toString
x.bG.a(v)
w=1/f
return B.iSj((C.m.a4(v.fP(d).a/v.gW(0).a,0,1)-w/2)/(1-w))*2-1}},D,F,E,G
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[18],B)
D=c[22]
F=c[23]
E=c[20]
G=c[38]
B.IK.prototype={}
B.Ri.prototype={
ap(){var w=0,v=A.m(x.H),u=this
var $async$ap=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:w=2
return A.d($.iI().ghe().c.bHQ(),$async$ap)
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
return A.d(q.ghe().c.bHQ(),$async$RC)
case 7:p=r.x=e
w=!p?8:10
break
case 8:w=11
return A.d(r.RW(),$async$RC)
case 11:w=12
return A.d(q.ghe().c.bHQ(),$async$RC)
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
return A.d(A.aRD(!1),$async$RW)
case 2:u=A.Eu(384)
t=$.iI()
w=3
return A.d(t.ghe().c.fd1(u),$async$RW)
case 3:w=4
return A.d(A.aj8(),$async$RW)
case 4:s=e
r=A.hLW(s.gfa(s),"asaka_vector_db",null)
u=A.Eu(384)
w=5
return A.d(t.ghe().c.fdC(r,u),$async$RW)
case 5:return A.k(null,v)}})
return A.l($async$RW,v)},
ez3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
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
Yb(d,e,f,g){return this.dta(0,e,f,g)},
dta(d,e,a0,a1){var w=0,v=A.m(x.eB),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Yb=A.i(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:w=3
return A.d(r.RC(),$async$Yb)
case 3:if(!a3){$.a3.$1("[RagService] Vector store not initialized")
u=A.a([],x.dP)
w=1
break}t=5
k=$.iI()
w=8
return A.d(k.ghe().c.fd2(e),$async$Yb)
case 8:q=a3
j=a0==null
p=j||C.c.p(a0).length===0?a1:C.k.a4(a1*8,a1,80)
i=J.on(q)
h=A.Eu(p)
w=9
return A.d(k.ghe().c.fdD(h,i),$async$Yb)
case 9:o=a3
n=J.az(o,new B.dpn(),x.dT).a6(0)
m=j?null:C.c.p(a0)
if(m==null||m.length===0){k=n
k=A.fq(k,0,A.fY(a1,"count",x.S),A.Y(k).c).a6(0)
u=k
w=1
break}k=n
j=A.Y(k).i("aE<1>")
j=A.Mp(new A.aE(k,new B.dpo(m),j),a1,j.i("U.E"))
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
return A.l($async$Yb,v)},
zx(d,e,f){return this.fxw(d,e,f)},
fxw(d,e,f){var $async$zx=A.i(function(g,a0){switch(g){case 2:r=u
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
return A.dj(q.Yb(0,d,i,5),$async$zx,v)
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
o=J.az(p,new B.dpl(q),k).a6(0)
n=J.m_(o,"\n\n---\n\n")
m="Answer the question based on the following context from the user's notes:\n\n"+A.b(n)+"\n\n---\n\nQuestion: "+d+'\n\nOutput strict JSON only:\n{\n  "answer": "your concise answer",\n  "citations": [\n    {"pageNumber": 1, "spanId": "p:1:k:line:s:1", "quote": "exact short quote"}\n  ]\n}\n\nRules:\n- Base answer only on the context above.\n- Every material claim should have at least one citation.\n- citation spanId must come from [Span ...] markers in context when available.\n- When context includes [CitationPayload], copy its fields into citations as-is.\n- If CitationPayload includes rect, keep it in the output citation.\n- If unsupported, set citations to [] and say evidence is insufficient in answer.'
w=18
u=[1]
return A.dj(A.eI7(e.dtL(!1,!1,A.a([],x.gb),m)),$async$zx,v)
case 18:w=19
u=[1]
return A.dj(A.ix(new A.HA("Sources: "+J.az(p,new B.dpm(),k).au(0,", "))),$async$zx,v)
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
var w=0,v=A.NG($async$zx,x.aG),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
return A.NI(v)}}
B.bC0.prototype={
ex(d){return new B.Ri()}}
B.bOt.prototype={
fc(){var w=x.cq.a(A.aj(this))
x.cm.a(w.x).f7(w,this.gbx())}}
B.av1.prototype={
RB(){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$RB=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.b){w=1
break}t=4
p=r.a
w=7
return A.d(p.QO("en-US"),$async$RB)
case 7:w=8
return A.d(p.auQ(0.5),$async$RB)
case 8:w=9
return A.d(p.auF(1),$async$RB)
case 9:w=10
return A.d(p.auU(1),$async$RB)
case 10:p.b=new B.dPQ(r)
p.r=new B.dPR(r)
p.a=new B.dPS(r)
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
B.ajW.prototype={
UF(d){return this.fkl(d)},
fkl(d){var w=0,v=A.m(x.cb),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$UF=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:r.dX8()
q=A.a([],x.ar)
m=d.r,l=m.length,k=d.f==="stop",j=0
case 3:if(!(j<m.length)){w=5
break}p=m[j]
if(r.elY(p.c)){J.cv(q,new B.fS(p.a,!0,"\u91cd\u590d\u8bf7\u6c42\u5df2\u8df3\u8fc7\uff08\u5e42\u7b49\u4fdd\u62a4\uff09"))
w=4
break}t=7
w=10
return A.d(r.bfj(p),$async$UF)
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
case 5:u=new B.beS(q)
w=1
break
case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$UF,v)},
bfj(d){return this.e48(d)},
e48(d){var w=0,v=A.m(x.k),u,t=this,s
var $async$bfj=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)A:switch(w){case 0:s=d.a
switch(s){case"memory.card.create":u=t.adI(d)
w=1
break A
case"memory.deck.create":u=t.aDD(d)
w=1
break A
case"memory.review.start":u=D.bja
w=1
break A
case"memory.stats.get":u=t.EH(d)
w=1
break A
case"memory.cards.count":u=t.wN(d)
w=1
break A
case"memory.decks.list":u=t.adJ(d)
w=1
break A
case"settings.memory.daily_limits.set":u=t.aGI(d)
w=1
break A
case"notes.note.create":u=t.aDR(d)
w=1
break A
case"notes.note.append":u=t.Sc(d)
w=1
break A
case"notes.note.rename":u=t.adT(d)
w=1
break A
case"notes.note.delete":u=t.adS(d)
w=1
break A
case"problembank.practice.start":u=t.aEZ(d)
w=1
break A
case"problembank.practice.end_current":u=t.aEY(d)
w=1
break A
case"library.book.favorite.set":u=t.ad2(d)
w=1
break A
case"library.book.reading_progress.set":u=t.ad3(d)
w=1
break A
case"library.book.filters.set":u=t.bi0(d)
w=1
break A
case"library.books.list":u=t.aCB(d)
w=1
break A
case"learning.download.start":u=t.aCz(d)
w=1
break A
case"learning.download.batch_start":u=t.aCx(d)
w=1
break A
case"learning.download.clear_all":u=t.aCy(d)
w=1
break A
case"settings.ai.chat_model.set":u=t.aGM(d)
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
case"settings.theme.set":u=t.afJ(d)
w=1
break A
case"settings.reminder.set":u=t.SP(d)
w=1
break A
case"settings.storage.path.set":u=t.afI(d)
w=1
break A
default:u=new B.fS(s,!1,"\u4e0d\u652f\u6301\u7684\u52a8\u4f5c\uff1a"+s)
w=1
break A}case 1:return A.k(u,v)}})
return A.l($async$bfj,v)},
adI(d){return this.eqq(d)},
eqq(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$adI=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:l=t.a0P()
k=d.e
j=t.aGd(t.aI1(t.oE(k,"sourceText")))
i=t.aGd(t.aI1(t.oE(k,"front")))
h=t.aGd(t.aI1(t.oE(k,"back")))
g=i.length===0
if((g||h.length===0)&&j.length!==0){if(g)i=t.e4T(j)
if(h.length===0)h=j}if(i.length===0||h.length===0){u=new B.fS(d.a,!1,"\u7f3a\u5c11\u5361\u7247\u5185\u5bb9\uff0c\u8bf7\u63d0\u4f9b front/back \u6216 sourceText\u3002")
w=1
break}if(t.cPP(i)||t.cPP(h)||i.toLowerCase()===h.toLowerCase()){u=new B.fS(d.a,!1,"\u5361\u7247\u5185\u5bb9\u65e0\u6548\uff0c\u8bf7\u63d0\u4f9b\u660e\u786e\u7684\u6b63\u9762\u548c\u80cc\u9762\u5185\u5bb9\u3002")
w=1
break}s=t.a.m(0,$.iJ(),x.v)
w=3
return A.d(t.a9U(k,l,s),$async$adI)
case 3:r=f
q=t.aI0(k,"tags")
k=Date.now()
p=new A.ak(k,0,!1)
g=d.a
o=A.x(["source","ai_agent","planAction",g,"createdAt",p.c2()],x.N,x.z)
n=C.L.bt(q,null)
w=4
return A.d(s.aTr(A.a9C(C.aj,C.aj,h,p,r,k,i,C.aj,C.aj,new A.aw(!0,C.L.bt(o,null),x.l),C.dM,D.eHs,C.mF,C.aj,new A.aw(!0,n,x.D),p,l)),$async$adI)
case 4:m=f
u=new B.fS(g,!0,"\u5df2\u521b\u5efa\u8bb0\u5fc6\u5361\u7247\uff1a"+t.eBP(i,48)+"\uff08ID: "+A.b(m)+"\uff09\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$adI,v)},
aDD(d){return this.eqr(d)},
eqr(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$aDD=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:o=d.e
n=t.oE(o,"name")
if(n.length===0){u=new B.fS(d.a,!1,"\u7f3a\u5c11\u724c\u7ec4\u540d\u79f0\uff08name\uff09\u3002")
w=1
break}s=t.a0P()
r=t.oE(o,"description")
q=t.yn(o,"parentDeckId")
p=t.a.m(0,$.iJ(),x.v)
o=q==null?C.hN:new A.aw(!0,q,x.ev)
o=A.a04(new A.ak(Date.now(),0,!1),new A.aw(!0,r,x.D),n,C.dM,o,C.aj,new A.ak(Date.now(),0,!1),s)
m=B
l=d.a
k=!0
j="\u5df2\u521b\u5efa\u8bb0\u5fc6\u724c\u7ec4\uff08ID: "
i=A
w=3
return A.d(p.mB(p.goM(),x.a,x.L).hR(0,o),$async$aDD)
case 3:u=new m.fS(l,k,j+i.b(f)+"\uff09\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aDD,v)},
aGI(d){return this.eLE(d)},
eLE(d){var w=0,v=A.m(x.k),u,t=this,s,r,q
var $async$aGI=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:s=d.e
r=t.yn(s,"newCardsPerDay")
q=t.yn(s,"reviewsPerDay")
if(r==null&&q==null){u=new B.fS(d.a,!1,"\u81f3\u5c11\u63d0\u4f9b newCardsPerDay \u6216 reviewsPerDay\u3002")
w=1
break}w=3
return A.d(t.a.m(0,$.fB().gJ(),x.fU).fEC(r,q),$async$aGI)
case 3:u=new B.fS(d.a,!0,"\u5df2\u66f4\u65b0\u8bb0\u5fc6\u6bcf\u65e5\u4e0a\u9650\u8bbe\u7f6e\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aGI,v)},
EH(d){return this.eqs(d)},
eqs(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$EH=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:p=t.a0P()
o=t.a.m(0,$.iJ(),x.v)
w=3
return A.d(t.afc(d.e,p,o),$async$EH)
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
return A.d(o.Ji(p,s,C.v1),$async$EH)
case 10:h=f
w=11
return A.d(o.Ji(p,s,C.rg),$async$EH)
case 11:i=i+(h+f)+"\uff0c\u5f85\u590d\u4e60 "
h=A
w=12
return A.d(o.d77(p,s),$async$EH)
case 12:u=new l.fS(k,j,i+h.b(f)+"\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$EH,v)},
wN(d){return this.eqp(d)},
eqp(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$wN=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:l=d.e
k=t.esd(t.oE(l,"state"))
if(k==null){u=new B.fS(d.a,!1,"\u4e0d\u652f\u6301\u7684 state\u3002\u53ef\u9009\uff1aall/new/learning/relearning/review/due/suspended\u3002")
w=1
break}s=t.a0P()
r=t.a.m(0,$.iJ(),x.v)
w=3
return A.d(t.afc(l,s,r),$async$wN)
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
return A.d(r.Ji(s,p,C.v1),$async$wN)
case 20:j=f
w=21
return A.d(r.Ji(s,p,C.rg),$async$wN)
case 21:n=j+f
w=5
break
case 9:w=22
return A.d(r.Ji(s,p,C.rg),$async$wN)
case 22:n=f
w=5
break
case 10:w=23
return A.d(r.Ji(s,p,C.pL),$async$wN)
case 23:n=f
w=5
break
case 11:w=24
return A.d(r.d77(s,p),$async$wN)
case 24:n=f
w=5
break
case 12:w=p==null?25:27
break
case 25:w=28
return A.d(r.b39(s),$async$wN)
case 28:w=26
break
case 27:w=29
return A.d(r.Qo(s,p),$async$wN)
case 29:case 26:m=f
l=J.eq(m,new B.cmo())
n=l.gE(l)
w=5
break
case 13:n=0
case 5:u=new B.fS(d.a,!0,"\u5361\u7247\u6570\u91cf\uff08"+o+"\uff0c"+t.eqo(k)+"\uff09\uff1a"+n+"\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$wN,v)},
adJ(d){return this.eqt(d)},
eqt(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o,n,m,l,k
var $async$adJ=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:o=t.a0P()
n=t.a.m(0,$.iJ(),x.v)
m=t.yn(d.e,"limit")
l=C.k.a4(m==null?20:m,1,100)
w=3
return A.d(n.Lg(o),$async$adJ)
case 3:k=f
m=J.L(k)
if(m.gac(k)){u=new B.fS(d.a,!0,"\u5f53\u524d\u6ca1\u6709\u8bb0\u5fc6\u724c\u7ec4\u3002")
w=1
break}w=4
return A.d(n.a7f(o),$async$adJ)
case 4:s=f
r=m.nE(k,l).cd(0,!1)
q=new A.E(r,new B.cmp(s),A.Y(r).i("E<1,h>")).au(0,"\uff1b")
p=m.gE(k)>r.length?"\uff08\u5176\u4f59\u5df2\u7701\u7565\uff09":""
u=new B.fS(d.a,!0,"\u5171 "+m.gE(k)+" \u4e2a\u724c\u7ec4\uff0c\u5c55\u793a\u524d "+r.length+" \u4e2a\uff1a"+q+p)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$adJ,v)},
aDR(d){return this.esz(d)},
esz(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p
var $async$aDR=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:q=d.e
p=t.oE(q,"title")
if(p.length===0){u=new B.fS(d.a,!1,"\u7f3a\u5c11\u7b14\u8bb0\u6807\u9898\uff08title\uff09\u3002")
w=1
break}s=t.vC(q,"parentId")
w=3
return A.d(t.a.m(0,$.jj().gJ(),x.h).a3e(s,p),$async$aDR)
case 3:r=f
if(r==null||r.length===0){u=new B.fS(d.a,!1,"\u521b\u5efa\u7b14\u8bb0\u5931\u8d25\u3002")
w=1
break}u=new B.fS(d.a,!0,"\u5df2\u521b\u5efa\u7b14\u8bb0\uff08ID: "+r+"\uff09\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aDR,v)},
Sc(d){return this.esy(d)},
esy(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o,n,m,l
var $async$Sc=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:m=d.e
l=t.oE(m,"appendText")
if(l.length===0){u=new B.fS(d.a,!1,"\u7f3a\u5c11\u8ffd\u52a0\u5185\u5bb9\uff08appendText\uff09\u3002")
w=1
break}w=3
return A.d(t.a0O(m),$async$Sc)
case 3:s=f
if(s==null){u=new B.fS(d.a,!1,"\u65e0\u6cd5\u5b9a\u4f4d\u76ee\u6807\u7b14\u8bb0\uff0c\u8bf7\u63d0\u4f9b noteId \u6216\u66f4\u7cbe\u786e\u7684 noteTitle\u3002")
w=1
break}m=t.a
r=m.m(0,$.oK(),x.bb)
w=4
return A.d(r.rm(s),$async$Sc)
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
adT(d){return this.esB(d)},
esB(d){var w=0,v=A.m(x.k),u,t=this,s,r,q
var $async$adT=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=d.e
q=t.oE(r,"newTitle")
if(q.length===0){u=new B.fS(d.a,!1,"\u7f3a\u5c11\u65b0\u6807\u9898\uff08newTitle\uff09\u3002")
w=1
break}w=3
return A.d(t.a0O(r),$async$adT)
case 3:s=f
if(s==null){u=new B.fS(d.a,!1,"\u65e0\u6cd5\u5b9a\u4f4d\u76ee\u6807\u7b14\u8bb0\uff0c\u8bf7\u63d0\u4f9b noteId \u6216\u66f4\u7cbe\u786e\u7684 noteTitle\u3002")
w=1
break}w=4
return A.d(t.a.m(0,$.jj().gJ(),x.h).qf(s,q),$async$adT)
case 4:u=new B.fS(d.a,!0,"\u5df2\u91cd\u547d\u540d\u7b14\u8bb0\uff08ID: "+s+"\uff09\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$adT,v)},
adS(d){return this.esA(d)},
esA(d){var w=0,v=A.m(x.k),u,t=this,s
var $async$adS=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.d(t.a0O(d.e),$async$adS)
case 3:s=f
if(s==null){u=new B.fS(d.a,!1,"\u65e0\u6cd5\u5b9a\u4f4d\u76ee\u6807\u7b14\u8bb0\uff0c\u8bf7\u63d0\u4f9b noteId \u6216\u66f4\u7cbe\u786e\u7684 noteTitle\u3002")
w=1
break}w=4
return A.d(t.a.m(0,$.jj().gJ(),x.h).rS(s),$async$adS)
case 4:u=new B.fS(d.a,!0,"\u5df2\u5220\u9664\u7b14\u8bb0\uff08ID: "+s+"\uff09\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$adS,v)},
aEZ(d){return this.eBX(d)},
eBX(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o
var $async$aEZ=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=d.e
q=t.oE(r,"mode")
p=t.yn(r,"problemCount")
o=C.k.a4(p==null?20:p,1,100)
switch(q.toLowerCase()){case"mistakes":case"mistakes_review":s=A.ijV(o)
break
case"favorites":case"favorites_review":s=A.ijU(o)
break
case"single":case"single_question":s=A.ijX(t.vC(r,"problemId"))
break
case"smart":case"smart_review":s=A.ijY(null,null,o,null,null,null)
break
default:q=t.aI0(r,"subjects")
s=A.ijW(t.eln(r,"difficulties"),null,o,null,q,t.aI0(r,"tags"))}w=3
return A.d(t.a.m(0,$.pQ().gJ(),x.d).At(s),$async$aEZ)
case 3:u=new B.fS(d.a,!0,"\u5df2\u542f\u52a8\u9898\u5e93\u7ec3\u4e60\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aEZ,v)},
aEY(d){return this.eBW(d)},
eBW(d){var w=0,v=A.m(x.k),u,t=this
var $async$aEY=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.d(t.a.m(0,$.pQ().gJ(),x.d).FP(),$async$aEY)
case 3:u=new B.fS(d.a,!0,"\u5df2\u7ed3\u675f\u5f53\u524d\u9898\u5e93\u7ec3\u4e60\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aEY,v)},
ad2(d){return this.ent(d)},
ent(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o,n
var $async$ad2=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:o=d.e
n=t.vx(o,"favorited")
if(n==null){u=new B.fS(d.a,!1,"\u7f3a\u5c11\u6536\u85cf\u72b6\u6001\uff08favorited\uff09\u3002")
w=1
break}s=t.a
r=$.l6()
q=s.m(0,r.gJ(),x.U)
w=3
return A.d(t.afa(o,q),$async$ad2)
case 3:p=f
if(p==null){u=new B.fS(d.a,!1,"\u65e0\u6cd5\u5b9a\u4f4d\u56fe\u4e66\uff0c\u8bf7\u63d0\u4f9b bookId \u6216\u66f4\u7cbe\u786e\u7684 bookTitle\u3002")
w=1
break}w=s.m(0,r,x.q).CW.t(0,p)!==n?4:5
break
case 4:w=6
return A.d(q.zD(p),$async$ad2)
case 6:case 5:o=n?"\u5df2\u52a0\u5165\u6536\u85cf\u3002":"\u5df2\u53d6\u6d88\u6536\u85cf\u3002"
u=new B.fS(d.a,!0,o)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$ad2,v)},
ad3(d){return this.env(d)},
env(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o,n,m,l
var $async$ad3=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:p=t.a
o=$.l6()
n=p.m(0,o.gJ(),x.U)
m=d.e
w=3
return A.d(t.afa(m,n),$async$ad3)
case 3:l=f
if(l==null){u=new B.fS(d.a,!1,"\u65e0\u6cd5\u5b9a\u4f4d\u56fe\u4e66\uff0c\u8bf7\u63d0\u4f9b bookId \u6216\u66f4\u7cbe\u786e\u7684 bookTitle\u3002")
w=1
break}s=t.yn(m,"currentPage")
if(s==null||s<0){u=new B.fS(d.a,!1,"\u7f3a\u5c11\u5408\u6cd5\u7684 currentPage\u3002")
w=1
break}p=p.m(0,o,x.q).a
o=A.Y(p).i("aE<1>")
o=A.tK(new A.aE(p,new B.cmn(l),o),o.i("U.E"),x.z)
r=A.M(o,A.S(o).i("U.E"))
if(r.length!==0){p=A.c3(C.d.ga_(r).glE())
q=p==null?0:p}else q=0
p=t.yn(m,"totalPages")
w=4
return A.d(n.tf(l,s,C.k.a4(p==null?q:p,1,1e5)),$async$ad3)
case 4:u=new B.fS(d.a,!0,"\u5df2\u66f4\u65b0\u9605\u8bfb\u8fdb\u5ea6\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$ad3,v)},
bi0(d){return this.enu(d)},
enu(d){var w=0,v=A.m(x.k),u,t=this,s,r,q
var $async$bi0=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=t.a.m(0,$.l6().gJ(),x.U)
q=d.e
if(q.K(0,"query"))r.Hn(t.oE(q,"query"))
if(q.K(0,"tag"))r.dxv(t.vC(q,"tag"))
if(q.K(0,"subject"))r.b5u(t.vC(q,"subject"))
if(q.K(0,"language"))r.dvZ(t.vC(q,"language"))
if(q.K(0,"resourceType"))r.dwV(t.vC(q,"resourceType"))
if(q.K(0,"academicLevel"))r.dtZ(t.vC(q,"academicLevel"))
if(q.K(0,"libraryType"))r.czw(t.eyQ(t.vC(q,"libraryType")))
if(q.K(0,"sort")){s=t.ey2(t.oE(q,"sort"))
if(s!=null)r.czL(s)}u=new B.fS(d.a,!0,"\u5df2\u66f4\u65b0\u56fe\u4e66\u7b5b\u9009\u6761\u4ef6\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$bi0,v)},
aCB(d){return this.ens(d)},
ens(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aCB=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:o=t.a
n=$.l6()
m=o.m(0,n.gJ(),x.U)
l=x.q
k=o.m(0,n,l)
j=d.e
i=t.yn(j,"limit")
h=C.k.a4(i==null?20:i,1,100)
g=t.oE(j,"query").toLowerCase()
w=k.a.length===0?3:4
break
case 3:w=5
return A.d(m.zq(!0),$async$aCB)
case 5:k=o.m(0,n,l)
case 4:s=k.a
o=g.length===0
if(!o){n=A.Y(s).i("aE<1>")
n=A.M(new A.aE(s,new B.cml(g),n),n.i("U.E"))
n.$flags=1
s=n}if(s.length===0){o=o?"\u5f53\u524d\u4e66\u5e93\u6682\u65e0\u56fe\u4e66\u3002":"\u6ca1\u6709\u5339\u914d\u8be5\u5173\u952e\u8bcd\u7684\u56fe\u4e66\u3002"
u=new B.fS(d.a,!0,o)
w=1
break}r=A.fq(s,0,A.fY(h,"count",x.S),A.Y(s).c).cd(0,!1)
q=new A.E(r,new B.cmm(),A.Y(r).i("E<1,h>")).au(0,"\uff1b")
o=s.length
n=r.length
p=o>n?"\uff08\u5176\u4f59\u5df2\u7701\u7565\uff09":""
u=new B.fS(d.a,!0,"\u4e66\u5e93\u5171 "+o+" \u672c\uff0c\u5c55\u793a\u524d "+n+" \u672c\uff1a"+q+p)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aCB,v)},
aCz(d){return this.ene(d)},
ene(d){var w=0,v=A.m(x.k),u,t=this,s,r
var $async$aCz=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=t.oE(d.e,"sectionId")
if(r.length===0){u=new B.fS(d.a,!1,"\u7f3a\u5c11 sectionId\u3002")
w=1
break}w=3
return A.d(t.a.m(0,$.ajs().gJ(),x.W).avH(r),$async$aCz)
case 3:s=f
if(s==null||s.length===0){u=new B.fS(d.a,!1,"\u4e0b\u8f7d\u542f\u52a8\u5931\u8d25\u3002")
w=1
break}u=new B.fS(d.a,!0,"\u5df2\u5f00\u59cb\u4e0b\u8f7d\u7ae0\u8282\uff08\u4efb\u52a1: "+s+"\uff09\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aCz,v)},
aCx(d){return this.enb(d)},
enb(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o
var $async$aCx=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:s=t.aI0(d.e,"sectionIds")
if(s.length===0){u=new B.fS(d.a,!1,"\u7f3a\u5c11 sectionIds \u5217\u8868\u3002")
w=1
break}r=B
q=d.a
p=!0
o=J
w=3
return A.d(t.a.m(0,$.ajs().gJ(),x.W).ahX(s),$async$aCx)
case 3:u=new r.fS(q,p,"\u5df2\u63d0\u4ea4\u6279\u91cf\u4e0b\u8f7d\u4efb\u52a1\uff08"+o.an(f)+" \u4e2a\uff09\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aCx,v)},
aCy(d){return this.enc(d)},
enc(d){var w=0,v=A.m(x.k),u,t=this,s,r
var $async$aCy=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.d(t.a.m(0,$.ajs().gJ(),x.W).Fk(),$async$aCy)
case 3:s=f
r=s?"\u5df2\u6e05\u7a7a\u5168\u90e8\u4e0b\u8f7d\u5185\u5bb9\u3002":"\u6e05\u7a7a\u4e0b\u8f7d\u5931\u8d25\u3002"
u=new B.fS(d.a,s,r)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aCy,v)},
aGM(d){return this.eLO(d)},
eLO(d){var w=0,v=A.m(x.k),u,t=this,s,r,q
var $async$aGM=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:s=d.e
r=t.oE(s,"providerId")
q=t.oE(s,"modelId")
if(r.length===0||q.length===0){u=new B.fS(d.a,!1,"\u7f3a\u5c11 providerId \u6216 modelId\u3002")
w=1
break}w=3
return A.d(t.a.m(0,$.kc().gJ(),x.a3).LA(new A.np(r,q)),$async$aGM)
case 3:u=new B.fS(d.a,!0,"\u5df2\u66f4\u65b0 AI \u804a\u5929\u6a21\u578b\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aGM,v)},
Nm(d){return this.eLQ(d)},
eLQ(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o
var $async$Nm=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:p=t.a.m(0,$.NZ().gJ(),x.gj)
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
Iw(d){return this.eLT(d)},
eLT(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o
var $async$Iw=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:p=t.a.m(0,$.qu().gJ(),x.aL)
o=d.e
w=o.K(0,"autoSyncEnabled")?3:4
break
case 3:s=t.vx(o,"autoSyncEnabled")
w=s!=null?5:6
break
case 5:w=7
return A.d(p.a8c(s),$async$Iw)
case 7:case 6:case 4:w=o.K(0,"frequency")?8:9
break
case 8:r=t.ezj(t.oE(o,"frequency"))
w=r!=null?10:11
break
case 10:w=12
return A.d(p.a8j(r),$async$Iw)
case 12:case 11:case 9:w=o.K(0,"syncOnWifiOnly")?13:14
break
case 13:s=t.vx(o,"syncOnWifiOnly")
w=s!=null?15:16
break
case 15:w=17
return A.d(p.a8A(s),$async$Iw)
case 17:case 16:case 14:w=o.K(0,"defaultConflictResolution")?18:19
break
case 18:q=t.eyd(t.oE(o,"defaultConflictResolution"))
w=q!=null?20:21
break
case 20:w=22
return A.d(p.Ys(q),$async$Iw)
case 22:case 21:case 19:w=o.K(0,"syncNotes")?23:24
break
case 23:s=t.vx(o,"syncNotes")
w=s!=null?25:26
break
case 25:w=27
return A.d(p.YA(s),$async$Iw)
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
Iv(d){return this.eLP(d)},
eLP(d){var w=0,v=A.m(x.k),u,t=this,s,r,q
var $async$Iv=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=t.a.m(0,$.ckB().gJ(),x.a4)
q=d.e
w=q.K(0,"syncEnabled")?3:4
break
case 3:s=t.vx(q,"syncEnabled")
w=s!=null?5:6
break
case 5:w=7
return A.d(r.a8r(s),$async$Iv)
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
return A.d(r.a8d(s),$async$Iv)
case 17:case 16:case 14:w=q.K(0,"uploadLocalChanges")?18:19
break
case 18:s=t.vx(q,"uploadLocalChanges")
w=s!=null?20:21
break
case 20:w=22
return A.d(r.a8y(s),$async$Iv)
case 22:case 21:case 19:w=q.K(0,"downloadCloudChanges")?23:24
break
case 23:s=t.vx(q,"downloadCloudChanges")
w=s!=null?25:26
break
case 25:w=27
return A.d(r.a8g(s),$async$Iv)
case 27:case 26:case 24:w=q.K(0,"syncContent")?28:29
break
case 28:s=t.vx(q,"syncContent")
w=s!=null?30:31
break
case 30:w=32
return A.d(r.a8q(s),$async$Iv)
case 32:case 31:case 29:u=new B.fS(d.a,!0,"\u5df2\u66f4\u65b0\u7b14\u8bb0\u540c\u6b65\u8bbe\u7f6e\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$Iv,v)},
afJ(d){return this.eLU(d)},
eLU(d){var w=0,v=A.m(x.k),u,t=this,s,r
var $async$afJ=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:switch(t.oE(d.e,"mode").toLowerCase()){case"dark":case"\u6df1\u8272":case"\u6697\u8272":s="dark"
break
case"light":case"\u6d45\u8272":case"\u4eae\u8272":s="light"
break
default:s="system"}w=4
return A.d(A.hg(),$async$afJ)
case 4:w=3
return A.d(f.be("String","app_theme_mode",s),$async$afJ)
case 3:if(s==="dark")r="\u6df1\u8272\u6a21\u5f0f"
else r=s==="light"?"\u6d45\u8272\u6a21\u5f0f":"\u8ddf\u968f\u7cfb\u7edf"
u=new B.fS(d.a,!0,"\u5df2\u5207\u6362\u4e3b\u9898\u6a21\u5f0f\u4e3a "+r+"\uff0c\u91cd\u542f\u5e94\u7528\u540e\u751f\u6548\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$afJ,v)},
SP(d){return this.eLR(d)},
eLR(d){var w=0,v=A.m(x.k),u,t=this,s,r,q,p,o,n,m
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
afI(d){return this.eLS(d)},
eLS(d){var w=0,v=A.m(x.k),u,t=this,s
var $async$afI=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:s=t.vC(d.e,"path")
if(s==null||C.c.p(s).length===0){u=new B.fS(d.a,!1,"\u7f3a\u5c11\u5b58\u50a8\u8def\u5f84\uff08path\uff09\u53c2\u6570\u3002")
w=1
break}w=4
return A.d(A.hg(),$async$afI)
case 4:w=3
return A.d(f.be("String","data_storage_path",C.c.p(s)),$async$afI)
case 3:A.Ae("[AUDIT] storage path changed to: "+s+" by user "+t.a0P())
u=new B.fS(d.a,!0,"\u6570\u636e\u5b58\u50a8\u8def\u5f84\u5df2\u8bbe\u5b9a\u4e3a "+s+"\uff0c\u91cd\u542f\u5e94\u7528\u540e\u751f\u6548\u3002")
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$afI,v)},
a0P(){var w=this.a.m(0,$.c1(),x.o),v=w.gB(w)
if(v==null)w=null
else{w=v.gdD()
w=w==null?null:w.a}return w==null?"guest-local-user":w},
afc(d,e,f){return this.eGA(d,e,f)},
eGA(d,e,f){var w=0,v=A.m(x.fA),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$afc=A.i(function(g,h){if(g===1)return A.j(h,v)
for(;;)switch(w){case 0:o=t.vC(d,"deckId")
n=t.vC(d,"deckName")
m=o==null
l=m?"":o
k=n==null
j=k?"":n
i=j.toLowerCase()
if(l.toLowerCase()==="all"||i==="all"){u=D.a4D
w=1
break}if(i==="\u5168\u90e8"||i==="\u6240\u6709"){u=D.a4D
w=1
break}if(m&&k){u=D.a4D
w=1
break}w=3
return A.d(f.Lg(e),$async$afc)
case 3:s=h
if(!m){r=J.eq(s,new B.cmt(o)).a6(0)
if(r.length===1){u=new A.Ns(C.k.k(C.d.ga_(r).a),C.c.p(C.d.ga_(r).c),null)
w=1
break}u=new A.Ns(o,o,null)
w=1
break}n.toString
m=J.dW(s)
q=m.bl(s,new B.cmu(n)).cd(0,!1)
l=q.length
if(l===1){u=new A.Ns(C.k.k(C.d.ga_(q).a),C.c.p(C.d.ga_(q).c),null)
w=1
break}if(l>1){u=D.eeC
w=1
break}p=m.bl(s,new B.cmv(n)).cd(0,!1)
m=p.length
if(m===1){u=new A.Ns(C.k.k(C.d.ga_(p).a),C.c.p(C.d.ga_(p).c),null)
w=1
break}if(m>1){u=D.eeO
w=1
break}u=new A.Ns(null,null,"\u672a\u627e\u5230\u76ee\u6807\u724c\u7ec4\uff1a"+n)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$afc,v)},
esd(d){var w=C.c.p(d).toLowerCase()
if(w.length===0)return"all"
switch(w){case"all":case"\u5168\u90e8":case"\u6240\u6709":return"all"
case"new":case"newcard":case"new_card":case"\u65b0":case"\u65b0\u5361":case"\u65b0\u5361\u7247":return"new"
case"learning":case"learn":case"\u5b66\u4e60":case"\u5b66\u4e60\u4e2d":return"learning"
case"relearning":case"\u91cd\u65b0\u5b66\u4e60":case"\u590d\u5b66":return"relearning"
case"review":case"\u590d\u4e60":case"\u590d\u4e60\u4e2d":return"review"
case"due":case"\u5230\u671f":case"\u5f85\u590d\u4e60":case"\u5f85\u56de\u987e":return"due"
case"suspended":case"suspend":case"\u6682\u505c":case"\u5df2\u6682\u505c":return"suspended"
default:return null}},
eqo(d){switch(d){case"all":return"\u5168\u90e8"
case"new":return"\u65b0\u5361"
case"learning":return"\u5b66\u4e60\u4e2d"
case"relearning":return"\u590d\u5b66\u4e2d"
case"review":return"\u590d\u4e60\u72b6\u6001"
case"due":return"\u5f85\u590d\u4e60"
case"suspended":return"\u5df2\u6682\u505c"
default:return d}},
a9U(d,e,f){return this.eGl(d,e,f)},
eGl(d,e,f){var w=0,v=A.m(x.N),u,t=this,s,r,q,p,o
var $async$a9U=A.i(function(g,h){if(g===1)return A.j(h,v)
for(;;)switch(w){case 0:p=t.oE(d,"deckId")
if(p.length!==0){u=p
w=1
break}s=t.oE(d,"deckName").length===0?"AI \u5361\u7247":t.oE(d,"deckName")
o=J
w=3
return A.d(f.Lg(e),$async$a9U)
case 3:r=o.b1(h)
case 4:if(!r.G()){w=5
break}q=r.gT(r)
if(C.c.p(q.c).toLowerCase()===C.c.p(s).toLowerCase()){u=C.k.k(q.a)
w=1
break}w=4
break
case 5:r=A.a04(new A.ak(Date.now(),0,!1),D.eHk,s,C.dM,C.hN,C.aj,new A.ak(Date.now(),0,!1),e)
o=C.k
w=6
return A.d(f.mB(f.goM(),x.a,x.L).hR(0,r),$async$a9U)
case 6:u=o.k(h)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$a9U,v)},
e4T(d){var w=this.aGd(this.aI1(d))
if(w.length<=120)return w
return C.c.a3(w,0,120)+"..."},
aI1(d){var w=C.c.p(d)
if(w.length===0)return""
return C.c.p(C.c.hT(w,$.ixP(),""))},
aGd(d){var w,v=C.c.p(d)
if(v.length===0)return""
w=A.a1("^[\"'\u201c\u201d\u2018\u2019`]+|[\"'\u201c\u201d\u2018\u2019`]+$",!0,!1,!1,!1)
return C.c.p(A.at(v,w,""))},
cPP(d){var w=C.c.p(d).toLowerCase()
if(w.length===0)return!1
return C.d.c8(D.daA,C.c.gnp(w))},
a0O(d){return this.eGE(d)},
eGE(d){var w=0,v=A.m(x.A),u,t=this,s,r,q,p,o,n
var $async$a0O=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:n=t.vC(d,"noteId")
if(n!=null){u=n
w=1
break}s=t.vC(d,"noteTitle")
if(s==null){u=null
w=1
break}r=t.a
w=3
return A.d(r.m(0,$.oK(),x.bb).Lx(s,12,r.m(0,$.K4(),x.N)),$async$a0O)
case 3:q=f
r=J.L(q)
if(r.gac(q)){u=null
w=1
break}p=r.bl(q,new B.cmw(s)).cd(0,!1)
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
return A.l($async$a0O,v)},
afa(d,e){return this.eGd(d,e)},
eGd(d,e){var w=0,v=A.m(x.A),u,t=this,s,r,q,p
var $async$afa=A.i(function(f,g){if(f===1)return A.j(g,v)
for(;;)switch(w){case 0:p=t.vC(d,"bookId")
if(p!=null){u=p
w=1
break}s=t.vC(d,"bookTitle")
if(s==null){u=null
w=1
break}r=new B.cmq(t,s)
q=r.$0()
if(q!=null){u=q
w=1
break}w=3
return A.d(e.zq(!0),$async$afa)
case 3:u=r.$0()
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$afa,v)},
elY(d){var w,v=C.c.p(d)
if(v.length===0)return!1
w=$.beQ.K(0,v)
$.beQ.j(0,v,new A.ak(Date.now(),0,!1))
return w},
dX8(){var w,v,u=A.S($.beQ).i("cM<1,2>"),t=u.i("fT<U.E,h>")
u=A.M(new A.fT(new A.aE(new A.cM($.beQ,u),new B.cmj(new A.ak(Date.now(),0,!1)),u.i("aE<U.E>")),new B.cmk(),t),t.i("U.E"))
u.$flags=1
w=u
for(u=w.length,v=0;v<w.length;w.length===u||(0,A.a7)(w),++v)$.beQ.V(0,w[v])},
eBP(d,e){var w=C.c.p(d)
if(w.length<=e)return w
return C.c.a3(w,0,e)+"..."},
oE(d,e){var w=d.h(0,e)
return C.c.p(J.w(w==null?"":w))},
vC(d,e){var w=this.oE(d,e)
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
aI0(d,e){var w,v=d.h(0,e)
if(x.j.b(v))return J.az(v,new B.cmx(),x.N).bl(0,new B.cmy()).cd(0,!1)
w=v==null?null:C.c.p(J.w(v))
if(w==null)w=""
if(w.length===0)return C.K
return A.a([w],x.s)},
eln(d,e){var w,v,u,t,s=d.h(0,e)
if(!x.j.b(s))return C.kQ
w=A.a([],x.dC)
for(v=J.b1(s);v.G();){u=v.gT(v)
if(A.dA(u)){w.push(u)
continue}if(typeof u=="number"){w.push(C.m.R(u))
continue}if(typeof u=="string"){t=A.cb(C.c.p(u),null)
if(t!=null)w.push(t)}}return w},
ey2(d){var w=C.c.p(d).toLowerCase()
if(w.length===0)return null
switch(w){case"newest":case"latest":case"\u6700\u65b0":return C.xD
case"oldest":case"\u6700\u65e9":return D.bo6
case"title_az":case"titleaz":case"a-z":return C.US
case"title_za":case"titleza":case"z-a":return D.bo7
case"mostliked":case"most_liked":case"likes":case"\u6700\u591a\u559c\u6b22":return C.UT
case"highestrated":case"highest_rated":case"rating":case"\u6700\u9ad8\u8bc4\u5206":return C.UU
default:return null}},
eyQ(d){switch(C.c.p(d==null?"":d).toLowerCase()){case"official":case"\u5b98\u65b9":return C.w8
case"community":case"\u793e\u533a":return C.oC
case"private":case"\u79c1\u6709":case"\u672c\u5730":return C.iq
default:return null}},
ezj(d){switch(C.c.p(d).toLowerCase()){case"manual":case"\u624b\u52a8":return C.a6E
case"hourly":case"\u6bcf\u5c0f\u65f6":return C.B0
case"daily":case"\u6bcf\u5929":return C.a6F
case"realtime":case"\u5b9e\u65f6":case"5min":return C.a6G
default:return null}},
eyd(d){switch(C.c.p(d).toLowerCase()){case"localpriority":case"local_priority":case"local":case"\u672c\u5730\u4f18\u5148":return C.WZ
case"cloudpriority":case"cloud_priority":case"cloud":case"\u4e91\u7aef\u4f18\u5148":return C.ye
case"lastmodifiedwins":case"last_modified_wins":case"newest":case"\u6700\u65b0\u4f18\u5148":return C.X_
case"askuser":case"ask_user":case"manual":case"\u8be2\u95ee":return C.X0
default:return null}}}
B.mK.prototype={}
B.aDn.prototype={
O(){return"AgentRiskLevel."+this.b},
ga5R(){switch(this.a){case 0:return 1
case 1:return 2
case 2:return 3}}}
B.ajX.prototype={}
B.cmA.prototype={
gac(d){return this.r.length===0}}
B.fS.prototype={}
B.beS.prototype={
gcAz(){var w=this.b
return new A.aE(w,new B.cno(),A.Y(w).i("aE<1>")).gE(0)},
gd9r(){var w=this.b
return new A.aE(w,new B.cnn(),A.Y(w).i("aE<1>")).gE(0)}}
B.ru.prototype={
gaf(d){return this.a}}
B.dEc.prototype={}
B.a7Y.prototype={
FF(d){return this.fhS(d)},
fhS(d){var w=0,v=A.m(x.S),u,t=this,s
var $async$FF=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.d(s.fhq(d),$async$FF)
case 3:u=s.dyz(d)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$FF,v)}}
B.cDh.prototype={
aTF(){var w=0,v=A.m(x.x),u,t,s,r
var $async$aTF=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=3
return A.d(A.hg(),$async$aTF)
case 3:t=s.bG(r.t(e.a,"chat_migrated_to_drift_v1"))
u=t===!0
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aTF,v)},
a53(){var w=0,v=A.m(x.H)
var $async$a53=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:w=3
return A.d(A.hg(),$async$a53)
case 3:w=2
return A.d(e.be("Bool","chat_migrated_to_drift_v1",!0),$async$a53)
case 2:return A.k(null,v)}})
return A.l($async$a53,v)},
Pp(d){return this.fsg(d)},
fsg(d){var w=0,v=A.m(x.S),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Pp=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.d(r.aTF(),$async$Pp)
case 3:if(f){$.a3.$1("[ChatMigration] Migration already completed, skipping")
u=0
w=1
break}w=4
return A.d(A.hg(),$async$Pp)
case 4:q=f
l=q.XU("chat_sessions_list")
if(l==null)l=A.a([],x.s)
k=l.length
w=k===0?5:6
break
case 5:$.a3.$1("[ChatMigration] No sessions to migrate")
w=7
return A.d(r.a53(),$async$Pp)
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
return A.d(r.a09(q,o,d),$async$Pp)
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
return A.d(r.a53(),$async$Pp)
case 16:$.a3.$1("[ChatMigration] Migration completed: "+A.b(p)+" sessions")
u=p
w=1
break
case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Pp,v)},
a09(d,e,f){return this.eqN(d,e,f)},
eqN(b8,b9,c0){var w=0,v=A.m(x.x),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$a09=A.i(function(c1,c2){if(c1===1){s.push(c2)
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
return A.d(r.b.a.cxW(b9),$async$a09)
case 7:j=c2
if(j!=null){$.a3.$1("[ChatMigration] Session "+b9+" already exists, skipping")
u=!1
w=1
break}a7=r.a
a8=B.icK(l,C.bS,C.aH,C.bK,C.dM,C.aj,C.aH,b9,C.bK,p,k,c0)
w=8
return A.d(a7.mB(a7.gCC(),x._,x.K).hR(0,a8),$async$a09)
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
J.cv(i,new A.Uu(new A.aw(!0,f,a9),new A.aw(!0,b9,a9),new A.aw(!0,c0,a9),new A.aw(!0,e,a9),new A.aw(!0,d,a9),new A.aw(!0,a0,a9),C.aj,C.bH,C.dM,C.aH,C.aH,new A.aw(!0,a2,b0),new A.aw(!0,a2,b0),C.bS))}w=J.an(i)!==0?9:10
break
case 9:w=11
return A.d(a7.aTs(i),$async$a09)
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
return A.l($async$a09,v)}}
B.all.prototype={
b0V(d){return this.fCM(d)},
fCM(d){var w=0,v=A.m(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$b0V=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(q.e){$.a3.$1("[ChatSync] Sync already in progress, skipping")
w=1
break}q.e=!0
t=4
w=7
return A.d(q.EL(d),$async$b0V)
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
return A.l($async$b0V,v)},
EL(d){return this.eAE(d)},
eAE(a7){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6
var $async$EL=A.i(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a5=r.b.$0()
if(a5==null||C.c.p(a5).length===0){$.a3.$1("[ChatSync] No auth token, skipping sync")
w=1
break}f=r.a.a
w=3
return A.d(f.dov(a7),$async$EL)
case 3:q=a9
w=4
return A.d(f.dou(a7),$async$EL)
case 4:p=a9
e=r.c
d="chat_sync:last_sync_at:"+a7
a0=r.ID(A.W(J.t(e.a,d)))
if(r.f==null)r.f=a0
$.a3.$1("[ChatSync] Syncing "+J.an(q)+" sessions, "+J.an(p)+" messages")
a1=x.eE
o=J.az(q,new B.cDO(),a1).a6(0)
n=J.az(p,new B.cDP(),a1).a6(0)
t=6
a1=A.dC()?C.bF:C.br
w=9
return A.d(A.kw(!0,new B.cDQ(r,a5,o,n),"chat-sync:write",a1,x.em),$async$EL)
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
return A.d(r.axT(a3==null?C.aS:a3,a2,a7),$async$EL)
case 13:a2=J.b1(q)
case 14:if(!a2.G()){w=15
break}k=a2.gT(a2)
w=16
return A.d(f.frK(k.b,k.x),$async$EL)
case 16:w=14
break
case 15:a2=x.N
j=A.fd(J.az(q,new B.cDR(),a2),a2)
J.jY(j,J.az(p,new B.cDS(),a2))
i=j
j=i,j=A.ha(j,j.r,A.S(j).c),a2=j.$ti.c
case 17:if(!j.G()){w=18
break}a3=j.d
h=a3==null?a2.a(a3):a3
w=19
return A.d(f.frJ(h),$async$EL)
case 19:w=17
break
case 18:j=new A.ak(Date.now(),0,!1).qd()
f=A.W(J.t(l,"serverSyncAt"))
if(f==null)f=A.W(J.t(l,"syncedAt"))
a2=a1.a(J.t(l,"serverSessions"))
if(a2==null)a2=C.aS
a1=a1.a(J.t(l,"serverMessages"))
j=r.eGD(j,a1==null?C.aS:a1,a2,f)
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
eGD(d,e,f,g){var w,v,u,t,s,r,q=this.ID(g)
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
axT(d,e,f){return this.dLu(d,e,f)},
dLu(d,e,f){var w=0,v=A.m(x.H),u=this
var $async$axT=A.i(function(g,h){if(g===1)return A.j(h,v)
for(;;)switch(w){case 0:w=2
return A.d(u.a.a.GR(0,new B.cDN(u,e,f,d),x.H),$async$axT)
case 2:return A.k(null,v)}})
return A.l($async$axT,v)},
ID(d){var w
if(d==null||C.c.p(d).length===0)return null
w=A.hq(C.c.p(d))
return w==null?null:w.qd()}}
B.La.prototype={
Y(){var w=this
return A.x(["content",w.a,"isDisplay",w.b,"startIndex",w.c,"endIndex",w.d],x.N,x.z)},
k(d){return"LatexBlock("+(this.b?"display":"inline")+": "+this.a+")"}}
B.abN.prototype={}
B.bxd.prototype={
O(){return"MessageSegmentType."+this.b}}
B.beX.prototype={
v(d){var w,v=this,u=null,t=A.dK(A.b7(d,u,x.w).w.a.a),s=v.r,r=s?0:12,q=s?0:12,p=s?0:12,o=new A.a_(r,q,p,s?0:12)
t=t!==C.bq&&v.e!=null
s=v.d
if(t){t=v.e
t.toString
s=A.G(A.a([new A.N(296,u,t,u),C.ak,A.a2(s,1)],x.p),C.aJ,u,C.i,C.j,0,u,u)
t=s}else t=s
s=x.p
t=A.a([v.c,C.J,A.a2(t,1)],s)
C.d.D(t,A.a([C.J,v.f],s))
w=A.B(t,C.l,u,C.i,C.j,0,u,C.n)
t=!v.r
return A.ibQ(36,t?new A.dH(!0,!0,!0,!0,C.Y,!1,w,u):w,!0,t,o,D.eFO)}}
B.biw.prototype={
O(){return"ChatShellLayoutMode."+this.b}}
B.aFR.prototype={
U(){var w=null,v=A.a([],x.fP),u=$.ao()
return new B.aYS(new A.fb(0,!0,w,w,w,v,u),new A.aV(C.ao,u),A.iD(!0,w,!0,!0,w,w,!1),C.HI,A.a([],x.Y))}}
B.aYS.prototype={
ae(){var w,v,u,t=this
t.ai()
w=t.gH()
v=$.c1()
u=x.o
t.z=w.aUX(v,new B.eer(t),u)
$.aN.k3$.push(new B.ees(t))
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
eFY(){if(this.c==null)return
this.A(new B.edP(this))},
es4(d){var w,v=C.c.p(d==null?"":d)
if(v.length===0)return""
if(C.c.ao(v.toLowerCase(),"bearer "))v=C.c.p(C.c.aZ(v,7))
w=v.toLowerCase()
if(w.length===0||w==="null"||w==="undefined"||w==="nil"||w==="(null)")return""
return v},
cMb(d,e){var w=this,v=d.gB(d),u=w.es4(v==null?null:v.giA()),t=d.gnO()!=null&&u.length===0
if(!e&&u===w.CW&&t===w.ay)return
w.CW=u
w.ay=t
if(u.length!==0){w.a_X(!0,!1)
return}if(t){if(w.c==null)return
w.A(new B.edH(w))
return}w.eFY()},
ec6(d){return this.cMb(d,!1)},
aDF(d,e){var w,v,u
if(e==null)return A.q(d,x.T,x.n).f.gahu()
w=e.a
if(w===401)return A.q(d,x.T,x.n).f.gaKS()
if(w===403)return A.q(d,x.T,x.n).f.galw()
v=C.c.p(e.b)
u=v.toLowerCase()
if(v.length!==0&&u!=="null"&&u!=="undefined"&&u!=="nil")return v
return A.q(d,x.T,x.n).f.gahu()},
bjn(){var w=0,v=A.m(x.H),u,t=this,s
var $async$bjn=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}A.aY(s).dZ(0,"/auth",null)
case 1:return A.k(u,v)}})
return A.l($async$bjn,v)},
a_X(d,e){return this.eoE(!0,e)},
eoE(d,e){var w=0,v=A.m(x.fo),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a_X=A.i(function(a0,a1){if(a0===1)return A.j(a1,v)
for(;;)switch(w){case 0:g=t.gH()
f=g.m(0,$.bdP(),x.Q)
if(t.c!=null)t.A(new B.edI(t))
w=3
return A.d(f.a4U(),$async$a_X)
case 3:s=a1
r=t.c
if(r==null){u=s
w=1
break}q=s.a
if(q!=null){p={}
o=q.b
n=A.ak_(r,o)
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
t.A(new B.edJ(p,t,o))
u=s
w=1
break}g=s.b
g.toString
t.A(new B.edK(t,g))
if(e){r=t.c
r.toString
B.a6L(r,C.lj,t.aDF(r,g),D.DQ)}u=s
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$a_X,v)},
aFR(){var w=0,v=A.m(x.ac),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aFR=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:j=t.c
j.toString
s=A.ak_(j,t.cy)
j=!1
if(s.length===0)if(!t.at){r=t.db
q=r==null
p=q?null:r.a===401
if(p!==!0){j=q?null:r.a===403
j=j!==!0}}w=j?3:4
break
case 3:w=5
return A.d(t.a_X(!0,!1),$async$aFR)
case 5:j=t.c
if(j==null){u=null
w=1
break}s=A.ak_(j,t.cy)
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
B.a6L(j,C.lj,t.aDF(j,t.db),D.DQ)
u=null
w=1
break}r=t.cx
q=r.a
m=0
for(;;){if(!(m<j)){n=null
break}l=s[m]
if(l.a===q){n=l
break}++m}j=n==null
if(!j&&!n.r){if(n.a!==q||n.d!==r.d||n.e!=r.e)t.A(new B.edQ(t,n))
u=n
w=1
break}k=t.cT8("auto",s,"auto")
if(k!=null&&!k.r){t.A(new B.edR(t,k))
u=k
w=1
break}r=t.c
r.toString
j=j?null:n.w
B.a6L(r,C.lj,j==null?t.aDF(r,t.db):j,D.DQ)
u=null
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aFR,v)},
dRl(d,e){var w,v,u=null
if(this.at||this.ax)return D.ak_
w=this.db
v=w==null
w=v?u:w.a===401
if(w===!0)return A.y(C.i1,A.o(d).ax.b,u,u,18)
if(!v&&e.length===0)return A.y(C.lj,A.o(d).ax.fy,u,u,18)
w=A.o(d).ax
v=w.rx
return A.y(D.c4S,v==null?w.k3:v,u,u,18)},
aFq(){var w=0,v=A.m(x.cW),u,t=2,s=[],r=[],q=this,p,o
var $async$aFq=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.ax){p=q.c
p.toString
u=A.ak_(p,q.cy)
w=1
break}q.A(new B.edN(q))
t=3
w=6
return A.d(q.a_X(!0,!0),$async$aFq)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.A(new B.edO(q))
w=r.pop()
break
case 5:p=q.cy
if(p.length===0)p=A.a([],x.eA)
else{o=q.c
p=o!=null?A.ak_(o,p):A.a([],x.eA)}u=p
w=1
break
case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$aFq,v)},
dWj(d){var w,v=this
if(!v.gH().m(0,$.kc(),x.e).a.d.z)return
w=v.dTs(d)
if(w===v.ch)return
v.ch=w
$.aN.k3$.push(new B.edS(v))},
dTs(d){if(d.length===0)return"empty"
return new A.E(d,new B.edG(),A.Y(d).i("E<1,h>")).au(0,"|")},
Zr(){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Zr=A.i(function(a3,a4){if(a3===1){s.push(a4)
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
return A.d(x.ad.b(k)?k:A.fR(k,x.N),$async$Zr)
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
return A.d(r.aFR(),$async$Zr)
case 10:i=a4
if(r.c==null||i==null){w=1
break}k=r.a.as===D.pS
h=k?!1:r.Q
if(k)g=i.f
else g=r.as||i.f
k=r.gH().m(0,$.EW().$1(r.a.d).gJ(),x.B)
f=q
e=i.a
e=e.length!==0?e:null
d=i.e
k.Yl(f,g,e,d==null?i.d:d,h)
a0.sB(0,C.cd)
r.y.fJ()
case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Zr,v)},
aHR(){var w=0,v=A.m(x.H),u,t=this,s,r,q,p,o,n
var $async$aHR=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:p=t.gH()
o=p.m(0,$.EW().$1(t.a.d),x.u).a
n=A.Y(o).i("d7<1>")
o=new A.d7(o,n)
o=new A.bT(o,o.gE(0),n.i("bT<ah.E>"))
n=n.i("ah.E")
for(;;){if(!o.G()){s=null
break}r=o.d
s=r==null?n.a(r):r
if(s.b===C.pR&&C.c.p(s.c).length!==0)break}if(s==null){w=1
break}w=3
return A.d(p.m(0,$.iMa(),x.M).zO(0,s.c),$async$aHR)
case 3:q=e
p=t.c
if(p==null||q){w=1
break}B.a6L(p,D.c3K,A.q(p,x.T,x.n).f.gctq(),D.ak2)
case 1:return A.k(u,v)}})
return A.l($async$aHR,v)},
biO(){var w=this.gH().m(0,$.EW().$1(this.a.d).gJ(),x.B)
w.ayA()
w.at=""
C.d.ag(w.ax)
w.ay=null
w.sl(0,w.gl(0).fcd(!0,!0,null,!1,C.zA))
this.x.sB(0,C.cd)},
e5L(d){var w,v=C.c.p(d),u=v.length
if(u===0)return
w=this.x
w.sbq(0,v)
w.siW(A.l1(C.ah,u))
this.y.fJ()},
epa(d,e){var w=A.q(d,x.T,x.n).f
switch(e){case"ai_chat_home_prompt_memory_card_create":return w.gbrT()
case"ai_chat_home_prompt_memory_deck_create":return w.gbrV()
case"ai_chat_home_prompt_memory_review_start":return w.gbrX()
case"ai_chat_home_prompt_memory_stats_get":return w.gbrY()
case"ai_chat_home_prompt_memory_cards_count":return w.gbrU()
case"ai_chat_home_prompt_memory_decks_list":return w.gbrW()
case"ai_chat_home_prompt_notes_append":return w.gbrZ()
case"ai_chat_home_prompt_practice_start":return w.gbs_()
case"ai_chat_home_prompt_library_progress_set":return w.gbrS()
case"ai_chat_home_prompt_library_books_list":return w.gbrR()
case y.c:return w.gbrQ()
case y.h:return w.gbs0()
default:return""}},
eEl(d){var w,v,u,t,s=this.a
if(!(s.d.a===D.CK&&s.as===D.Jk))return C.K
s=x.eR
s=A.M(new A.aE(D.ddc,new B.edL(),s),s.i("U.E"))
s.$flags=1
w=s
C.d.dv(w,new B.edM())
v=A.a([],x.s)
for(s=w.length,u=0;u<w.length;w.length===s||(0,A.a7)(w),++u){t=C.c.p(this.epa(d,w[u].c))
if(t.length!==0)v.push(t)}return v},
eO4(d,e){var w=this.c
w.toString
B.bpQ(new B.ee_(this,d,e),w,!0,D.Dr,x.H)},
cXF(){var w,v=this,u=v.gH().m(0,$.kc(),x.e).a,t=u.as.a,s=A.Y(t).i("aE<1>")
t=A.M(new A.aE(t,new B.eel(u.c),s),s.i("U.E"))
t.$flags=1
w=t
C.d.dv(w,new B.eem())
if(w.length===0){t=v.c
t.toString
A.aY(t).dZ(0,"/settings/aiQuickPhrases",null)
return}t=v.c
t.toString
B.bpQ(new B.een(v,w),t,!0,D.Dr,x.H)},
aHl(d){return this.eNQ(d)},
eNQ(d){var w=0,v=A.m(x.H),u=this,t,s,r
var $async$aHl=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:r=u.c
r.toString
r=A.q(r,x.T,x.n)
t=u.gH().m(0,$.kc(),x.e)
s=u.c
s.toString
w=2
return A.d(B.bpQ(new B.edW(u,r.f,d,t.a.d.as),s,!0,D.Dr,x.H),$async$aHl)
case 2:return A.k(null,v)}})
return A.l($async$aHl,v)},
eO5(d,e){var w,v,u=this,t=u.gH().m(0,$.kc(),x.e).a,s=t.Q.b,r=new A.aE(s,new B.eeh(),A.Y(s).i("aE<1>")).gE(0),q=t.as.a.length,p=t.at.a.length
s=t.ax
w=s.a
v=w>=0&&w<s.b.length
s=u.c
s.toString
s=A.q(s,x.T,x.n)
w=u.c
w.toString
B.bpQ(new B.eei(u,e,s.f,r,q,p,v,t.ay.a),w,!0,D.Dr,x.H)},
ag2(d){return this.eQ6(d)},
eQ6(d){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$ag2=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
m=r.gH()
q=m.m(0,$.bed(),x.ep)
l=d.b
w=7
return A.d(q.a84(C.k.a4(l,1,20),d.a),$async$ag2)
case 7:p=f
o=p.a
if(J.an(o)===0){l=r.c
if(l==null){w=1
break}B.a6L(l,C.dx,A.ac($.aG(),x.T,x.n).ga9().gbZC(),D.ak2)
m=m.m(0,$.EW().$1(r.a.d).gJ(),x.B)
m.sl(0,m.gl(0).bFW(!0))
w=1
break}n=C.k.a4(l,1,J.an(o))
m.m(0,$.pQ().gJ(),x.d).feC(o,n)
m=m.m(0,$.EW().$1(r.a.d).gJ(),x.B)
m.sl(0,m.gl(0).bFW(!0))
m=r.c
if(m==null){w=1
break}w=8
return A.d(A.ikv(m,null,"randomPractice",null,null,n,null,null,x.z),$async$ag2)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
m=r.c
if(m==null){w=1
break}B.a6L(m,C.lj,A.ac($.aG(),x.T,x.n).ga9().gbZe(),D.DQ)
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$ag2,v)},
dKn(d){switch(d.a){case 2:return"\u9ad8"
case 1:return"\u4e2d"
case 0:return"\u4f4e"}},
dKm(d){var w,v,u=d.r,t=A.Y(u).i("E<1,h>")
u=A.M(new A.E(u,new B.edm(),t),t.i("ah.E"))
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
dXH(d){return this.cGE(d,18)},
dWi(d,e,f,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=A.o(d).ax,h=k.a,g=h.f
g=C.c.p(g)
w=h.as===D.pS
h=k.c
h.toString
if(A.dK(A.b7(h,j,x.w).w.a.a)!==C.bq){k.c.toString
v=A.aDa().c}else v=!0
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
r=r.L(q==null?i.k3:q)}C.d.D(t,A.a([C.dL,A.c(g,j,j,1,C.Z,j,j,r,j,j,j)],s))}n=A.a2(A.vN(A.G(A.a([u,C.ak,A.a2(A.B(t,C.y,j,C.i,C.D,0,j,C.n),1)],s),C.l,j,C.i,C.j,0,j,j),h,j,j,C.dV,!1,D.eG4,!0),1)
m=A.a([],s)
g=k.a
if(g.x&&!g.r){g=A.eI(d,C.bJ,x.g4)
g.toString
m.push(new A.F(D.aim,new B.a5z(C.h1,g.ge_(),new B.edw(d),h,j,D.eFK,j),j))}if(k.a.w!=null){g=m.length===0?0:10
u=A.eI(d,C.bJ,x.g4)
u.toString
u=u.ge1()
t=k.a.w
t.toString
m.push(new A.F(new A.a_(0,0,g,0),new B.a5z(C.bN,u,t,h,j,D.eEx,j),j))}g=w?220:260
u=k.at||k.ax?A.q(d,x.T,x.n).f.ga2b():f.b
t=A.o(d).ok.as
l=new A.dy(new A.aZ(0,g,0,1/0),A.vN(A.G(A.a([new A.a74(f.d,f.a,j),C.S,A.a2(A.c(u,j,j,1,C.Z,j,j,t==null?j:t.ar(i.k3,C.H),j,j,j),1),C.c6,k.dRl(d,a0)],s),C.l,j,C.i,C.D,0,j,j),h,j,new B.edx(k,a0,f),D.aiv,!1,D.eHa,!0),j)
if(w){g=A.M(m,x.m)
g.push(n)
g.push(C.cS)
g.push(l)
if(e.a.length!==0)C.d.D(g,A.a([C.cS,new B.a5z(C.vV,A.q(d,x.T,x.n).f.ga28(),k.gcQR(),h,j,D.eEU,j)],s))
return A.G(g,C.y,j,C.i,C.j,0,j,j)}g=A.a([],s)
if(!a1)g.push(new B.a5z(C.dP,A.q(d,x.T,x.n).f.gTp(),new B.edy(k,e),h,e.w.length,D.eEk,j))
g.push(new B.a5z(C.ft,A.q(d,x.T,x.n).f.gaKo(),new B.edz(k,e,f),h,j,D.eDY,j))
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
C.d.D(u,new A.hs(g,new B.edA(),x.gB))
u.pop()
return A.B(A.a([h,C.bh,A.G(u,C.l,j,C.i,C.j,0,j,j)],s),C.aJ,D.eEI,C.i,C.j,0,j,C.n)},
dWh(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.q(d,x.T,x.n).f,l=A.o(d).ax,k=e.a
if(k.length===0){k=o.eEl(d)
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
u=s.length!==0?u:m.gaKm()
s=A.o(d).ok.z
if(s==null)s=n
else{r=l.rx
s=s.jb(r==null?l.k3:r,1.55)}r=x.p
s=A.a([t,C.mC,v,C.N,A.c(u,n,n,n,n,n,n,s,C.ag,n,n)],r)
if(w.length!==0){v=m.gbs2()
u=A.o(d).ok.x
v=A.c(v,n,n,n,n,n,n,u==null?n:u.ar(l.k3,C.H),n,n,n)
u=m.gbs1()
t=A.o(d).ok.Q
if(t==null)t=n
else{q=l.rx
t=t.L(q==null?l.k3:q)}t=A.c(u,n,n,n,n,n,n,t,n,n,n)
u=A.Y(w).i("E<1,KU>")
k=A.M(new A.E(w,new B.edo(o,k===C.bq,l,d),u),u.i("ah.E"))
k.$flags=1
C.d.D(s,A.a([C.aq,new A.da(C.bZ,n,n,v,n),C.cF,new A.da(C.bZ,n,n,t,n),C.lH,new A.da(C.bZ,n,n,A.bS(C.R,k,C.aw,C.R,10,10),n)],r))}return new A.ie(A.au(A.bv(new A.dy(F.Ih,A.B(s,C.l,n,C.i,C.D,0,n,C.n),n),C.p,n,C.z,n,D.aiL,n,n,!1,C.O),n,n),D.eES)}o.dWj(k)
p=o.a.as===D.pS?C.f8:C.yq
return A.zH(A.fO(o.w,new B.edp(o,e),k.length,p,n,C.O,!1),A.ES(),n)},
dO0(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.q(a1,x.T,x.n).f,f=A.o(a1).ax,e=!a2.b,d=!e||a2.d,a0=i.c
a0.toString
if(A.dK(A.b7(a0,h,x.w).w.a.a)!==C.bq){i.c.toString
w=A.aDa().c}else w=!0
a0=A.a([],x.s)
if(i.Q&&i.a.as===D.Jk)a0.push(g.gYD())
if(i.as||i.cx.f)a0.push(g.gaKl())
v=x.p
u=A.a([],v)
t=a2.f
if(t!=null){s=f.CW
if(s==null)s=f.y
r=t.c
if(C.c.p(r).length===0)r=g.ga9().c2v(t.r.length)
q=g.ga9()
p=i.dKn(t.e)
p=q.c_O(i.dKm(t),p)
t=g.ga9().gVD()
q=A.o(a1).ok.as
q=q==null?h:q.ar(f.k3,C.H)
o=f.rx
if(o==null)o=f.k3
n=a2.d
t=A.rn(C.bN,o,t,q,n?h:new B.edq(i),!1,h)
q=n?g.ga9().gc05():g.ga9().gc1b()
o=n?C.rR:C.ik
m=f.b
l=m.I(0.18)
k=A.o(a1).ok.as
k=k==null?h:k.ar(f.k3,C.H)
u.push(B.i3O(s,!w,C.DW,D.eEF,p,r,A.bS(C.R,A.a([t,A.rn(o,m,q,k,n?h:new B.edr(i),!0,l)],v),C.aw,C.R,8,8)))}t=a2.e
if(t!=null){s=g.ga9().c00(t.b)
t=g.ga9().c_h(t.a)
r=g.ga9().gbZv()
q=A.o(a1).ok.as
q=q==null?h:q.ar(f.k3,C.H)
p=f.rx
if(p==null)p=f.k3
r=A.rn(C.bN,p,r,q,d?h:new B.eds(i),!1,h)
q=g.ga9().gc_7()
p=f.b
o=p.I(0.18)
n=A.o(a1).ok.as
n=n==null?h:n.ar(f.k3,C.H)
u.push(B.i3O(f.y,!w,C.f3,D.eEj,t,s,A.bS(C.R,A.a([r,A.rn(C.ik,p,q,n,d?h:new B.edt(i,a2),!0,o)],v),C.aw,C.R,8,8)))}t=a2.c
if(t||!e||a2.d){e=a2.d
if(e)s=C.li
else s=t?D.c5b:C.fa
if(e)e=g.ga9().gaU7()
else e=t?g.gaKp():g.gaKq()
if(i.a.as===D.pS)t=g.gTo()
else t=i.Q?g.gaKn():g.gTo()
u.push(B.i3O(f.b,!w,s,D.eGs,t,e,D.bjE))}e=A.a([],v)
for(t=u.length,j=0;j<u.length;u.length===t||(0,A.a7)(u),++j)C.d.D(e,A.a([u[j],C.bh],v))
u=A.a([],v)
if(a0.length!==0){t=x.he
a0=A.M(new A.E(a0,new B.edu(f,a1),t),t.i("ah.E"))
a0.$flags=1
C.d.D(u,A.a([A.bS(C.R,a0,C.aw,C.R,8,8),C.bh],v))}if(i.a.as===D.pS)a0=g.gTo()
else a0=i.Q?g.gaKn():g.gTo()
t=A.o(a1).ok.y
t=t==null?h:t.jb(f.k3,1.45)
s=A.o(a1).ok.y
if(s==null)s=h
else{r=f.rx
s=s.L(r==null?f.k3:r)}t=A.a2(B.ifM(i.x,!d,i.y,7,1,new B.edv(i),C.rG,a0,s,t),1)
a0=d?C.ZA:C.oq
u.push(A.G(A.a([t,C.ak,B.ifJ(a0,d?h:i.gdWk(),52)],v),C.fW,h,C.i,C.j,0,h,h))
e.push(A.hYz(A.B(u,C.y,h,C.i,C.D,0,h,C.n),!w,C.aii))
return A.B(e,C.aJ,h,C.i,C.D,0,h,C.n)},
dTq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!f||h.a.as===D.pS)return g
w=A.q(d,x.T,x.n).f
v=x.x
u=h.gH().S(A.arV($.kc(),new B.edD(),x.e,v),v)
v=x.p
t=A.a([E.a7k(w.ga28(),C.es,C.kG,h.gcQR(),!1,D.eFw,h.a.f,g)],v)
s=e.w
r=s.length
if(r===0){r=w.gTp()
q=A.o(d).ok.Q
if(q==null)q=g
else{p=A.o(d).ax
o=p.rx
q=q.L(o==null?p.k3:o)}t.push(new A.F(D.aiQ,A.c(r,g,g,g,g,g,g,q,g,g,g),g))}else for(q=e.r,p=x.ec,o=x.b2,n=0;n<s.length;s.length===r||(0,A.a7)(s),++n){m=s[n]
if(u){l=d.N(o)
k=l==null?g:p.a(J.t(l.r.e,C.bJ))
k.toString
j=k.aSn(m.e)}else j=g
t.push(new B.b7a(m.b,j,m.a===q,new B.edE(h,m),new B.edF(h,m),g))}r=h.c
r.toString
if(A.dK(A.b7(r,g,x.w).w.a.a)!==C.bq){h.c.toString
r=A.aDa().c}else r=!0
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
o=o.L(i==null?k.k3:i)}return new A.On(t,296,A.B(A.a([new A.Hk(q,p,g),C.cF,A.c(s,g,g,g,g,g,g,o,g,g,g)],v),C.y,g,C.i,C.j,0,g,C.n),g,!r,C.a_,g,D.eDQ)},
dTp(d,e){var w,v,u=this,t=null,s=u.gH().S($.EW().$1(u.a.d),x.u),r=A.ak_(d,u.cy),q=r.length===0?u.cx:C.d.cu(r,new B.edB(u),new B.edC(r)),p=u.a.r,o=u.dTq(d,s,e),n=u.dWi(d,s,q,r,e),m=x.T,l=x.n,k=A.q(d,m,l),j=x.w,i=A.dK(A.b7(d,t,j).w.a.a)===C.bq,h=s.c,g=h||s.b||s.d
if(s.d)w=k.f.ga9().gaU7()
else w=h?A.q(d,m,l).f.gaKp():A.q(d,m,l).f.gaKq()
v=i?u.dXH(w):w
k=u.c
k.toString
if(A.dK(A.b7(k,t,j).w.a.a)!==C.bq){u.c.toString
k=A.aDa().c}else k=!0
if(i&&g){j=u.a
m=j.as===D.pS?j.e:A.q(d,m,l).f.gTq()
l=A.o(d).ok.at
m=A.B(A.a([new A.Hk(m,t,t),C.bh,A.rn(t,t,v,l==null?t:l.ar(A.o(d).ax.k3,C.H),t,!1,t)],x.p),C.y,t,C.i,C.j,0,t,C.n)}else{j=u.a
m=A.a([A.a2(new A.Hk(j.as===D.pS?j.e:A.q(d,m,l).f.gTq(),t,t),1)],x.p)
if(g){l=A.o(d).ok.at
m.push(A.rn(t,t,v,l==null?t:l.ar(A.o(d).ax.k3,C.H),t,!1,t))}m=A.G(m,C.l,t,C.i,C.j,0,t,t)}l=A.o(d).ax
j=l.to
if(j==null){j=l.C
l=j==null?l.k3:j}else l=j
k=A.iU(A.B(A.a([new A.F(D.XR,m,t),A.lx(l.I(0.16),t,1,t,t,t),A.a2(u.dWh(d,s),1)],x.p),C.l,t,C.i,C.j,0,t,C.n),!k,!0,t,!1,t,C.Y,D.eFZ)
return B.ibl(u.dO0(d,s),p,n,k,o)},
v(d){var w=null,v=this.dTp(d,A.dK(A.b7(d,w,x.w).w.a.a)!==C.bq)
if(this.a.r)return A.cW(w,v,C.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eeo(d),w,w,w,w,w,w,w,w,w,!1,C.aV)
return A.cW(w,A.cF(w,C.a4,v,w,w,w,w,!1,w,w,w),C.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eep(d),w,w,w,w,w,w,w,w,w,!1,C.aV)}}
B.azn.prototype={
v(d){var w=null,v=A.o(d)
return new A.dy(new A.aZ(0,560,0,A.b7(d,C.dt,x.w).w.a.b*0.72),A.B(A.a([new A.Hk(A.q(d,x.T,x.n).f.gLD(),w,w),C.J,new A.ep(1,C.bB,A.iX(w,new B.ffA(this,v.ax),this.c.length,w,w,w,C.O,new B.ffB(),!0),w)],x.p),C.y,w,C.i,C.D,0,w,C.n),w)}}
B.a5z.prototype={
v(d){var w=this,v=null,u=A.lV(A.vN(A.y(w.c,A.o(d).ax.k3,v,v,20),w.f,v,w.e,C.aC,!1,w.w,!0),v,w.d,v,v,v,v),t=w.r
if((t==null?0:t)>0){t.toString
return B.ifG(u,t)}return u}}
B.b7a.prototype={
v(d){var w=this
return E.a7k(w.c,D.an3,C.kG,w.f,w.e,null,w.d,new B.c88(w.r,null))}}
B.c88.prototype={
v(d){return new B.bpO(D.c3O,A.a([new B.AU(A.q(d,x.T,x.n).f.gbrP(),C.dy,this.c,!0,null,44,null)],x.fY),34,34,180,null)}}
B.Yw.prototype={
v(d){var w,v,u=this,t=null,s=A.o(d).ax,r=s.b,q=r.I(0.12),p=A.a5(14),o=A.H(t,A.y(u.e,r,t,t,t),C.o,t,t,new A.P(q,t,t,p,t,t,t,C.t),t,44,t,t,t,t,t,44)
q=u.r
if((q==null?0:q)>0){q.toString
w=B.ifG(o,q)}else w=u.w?new B.aK0(o,!0,0,r,t):o
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
return new A.F(C.kG,A.ao7(A.cE(!1,C.a9,!0,t,A.bY(!1,r,!0,new A.F(C.f8,A.G(A.a([w,C.aVv,p,C.ak,A.y(C.kL,q==null?s.k3:q,t,t,t)],v),C.l,t,C.i,C.j,0,t,t),t),t,!0,!1,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t,t),C.o,C.a4,0,t,t,t,t,t,C.b_),C.Y),t)}}
B.c9k.prototype={
v(d){var w,v,u=this,t=null,s=A.o(d).ax,r=u.c,q=s.k3,p=A.a_c(r,q,u.d,C.eh,t,18),o=A.o(d).ok.x
o=o==null?t:o.ar(q,C.H)
o=A.c(u.e,t,t,t,t,t,t,o,t,t,t)
w=A.o(d).ok.Q
if(w==null)q=t
else{v=s.rx
q=w.jb(v==null?q:v,1.45)}w=x.p
q=A.a([A.G(A.a([p,C.ak,A.a2(A.B(A.a([o,C.aM,A.c(u.f,t,t,t,t,t,t,q,t,t,t)],w),C.y,t,C.i,C.j,0,t,C.n),1)],w),C.y,t,C.i,C.j,0,t,t)],w)
C.d.D(q,A.a([C.J,u.w],w))
return A.vO(r,0.18,A.B(q,C.y,t,C.i,C.j,0,t,C.n),u.r,t,C.f8,u.x,0.1)}}
B.aLP.prototype={
v(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=A.aO(d),k=A.o(d).ax,j=A.lJ(d),i=n.f
if(i==null){t=l.f.z
if(t==null)t=C.b8
s=n.d?18:14
i=t.oK(k.k3,s)}w=i
if(!n.d){k=A.o(d).ax
j=A.lJ(d)
t=k.RG
t=(t==null?k.k2:t).I(0.6)
s=A.a5(4)
return A.H(m,A.c(n.c,m,m,2,C.Z,m,m,j.rK(w.z0(14,1.25)),m,m,m),C.o,m,C.ku,new A.P(t,m,m,s,m,m,m,C.t),m,m,m,m,C.og,m,m,m)}try{t=j.no(w)
v=A.t8(n.c,C.ew,new B.d1N(n,d),t)
t=l.c.e
s=l.c.d
r=l.c.d
q=k
p=q.RG
q=(p==null?q.k2:p).I(0.5)
p=l.a
t=A.H(m,A.bv(A.au(v,m,m),C.p,m,C.z,m,m,m,m,!1,C.aI),C.o,m,m,new A.P(q,m,m,p.a.c,m,m,m,C.t),m,m,m,new A.a_(0,r,0,r),new A.a_(s,t,s,t),m,m,1/0)
return t}catch(o){u=A.T(o)
return n.cEf(d,n.c,J.w(u))}},
cEf(d,e,f){var w,v=null,u=A.aO(d),t=A.o(d).ax,s=u.c.c,r=C.dI.I(0.1),q=A.b8(C.dI.I(0.3),C.C,1),p=A.y(C.b2,C.dI,v,v,16),o=u.f.Q
if(o==null)o=C.b8
w=t.rx
return A.H(v,A.G(A.a([p,new A.N(s,s,v,v),new A.ep(1,C.bB,A.c(e,v,v,v,v,v,v,o.L(w==null?t.k3:w),v,v,v),v)],x.p),C.l,v,C.i,C.D,0,v,v),C.o,v,v,new A.P(r,v,q,u.a.a.b,v,v,v,C.t),v,v,v,v,new A.a_(s,s,s,s),v,v,v)}}
B.bxx.prototype={
v(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.iWy(n),l=m.length
if(l===0)return p.bdb(d,n)
if(l===1&&C.d.ga_(m).a===D.FL){n=C.d.ga_(m).b
return p.bdb(d,n==null?"":n)}w=A.a([],x.p)
for(n=m.length,l=p.d,v=0;v<m.length;m.length===n||(0,A.a7)(m),++v){u=m[v]
t=u.a
if(t===D.FL){s=u.b
if(s==null)s=""
if(s.length!==0)w.push(p.bdb(d,s))}else if(t===D.aMq){r=u.c
t=r.b
q=r.a
if(t)w.push(new A.N(1/0,o,new B.aLP(q,!0,!0,l,o),o))
else w.push(new B.aLP(q,!1,!0,l,o))}}return A.bS(C.R,w,C.hQ,C.R,0,0)},
bdb(d,e){var w,v=null,u=A.aO(d),t=A.o(d),s=this.d
if(s==null){w=u.f.y
if(w==null)w=C.b8
s=w.jb(t.ax.k3,1.5)}t=A.zH(A.c(e,v,v,v,v,v,v,s,v,v,v),A.ES(),v)
return t}}
B.aqh.prototype={
bU(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.o(a2).ax,g=j.e,f=g.b===C.o3,e=$.kc(),d=x.e,a0=x.g_,a1=a3.S(A.arV(e,new B.daw(),d,a0),a0)
a0=x.f_
w=a3.S(A.arV(e,new B.dax(),d,a0),a0)
v=!f||a1.a
u=f?a1.e:a1.c
e=!f
t=e&&!g.e?B.j2p(g.c):i
s=e&&!g.e?B.jeA(g.c):C.f4
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
n=f?A.ac($.aG(),n,m).ga9().gc0p():A.q(a2,n,m).f.ga9().gbZr()
m=A.o(a2).ok.as
if(m==null)m=i
else{l=h.rx
m=m.ar(l==null?h.k3:l,C.H)}o.push(new A.F(G.aik,A.c(n,i,i,i,i,i,i,m,i,i,i),i))}if(p)o.push(D.e6V)
else if(e&&g.r.length!==0)o.push(new A.F(C.kG,new B.aV_(g.r,!a1.r,i),i))
o.push(new A.dy(F.Ih,new B.c0r(g,q,f,j.f,a1.y,w.b,i),i))
if(e&&r.length!==0)o.push(new A.F(C.XI,new B.bS6(r,j.x,i),i))
if(e&&q.length!==0&&!g.e){g=A.a([B.ifJ(C.im,new B.day(j,a2,t),38)],a0)
o.push(new A.F(C.XI,A.G(g,C.l,i,C.i,C.D,0,i,i),i))}k=A.B(o,d,i,C.i,C.j,0,i,C.n)
g=f?C.eP:C.i
d=A.a([],a0)
if(e&&v)C.d.D(d,A.a([new B.b2S(!1,i),C.ak],a0))
d.push(new A.ep(1,C.bB,k,i))
if(f&&v)C.d.D(d,A.a([C.ak,new B.b2S(!0,i)],a0))
return new A.F(C.L6,A.G(d,C.y,i,g,C.j,0,i,i),i)},
az9(d,e){return this.dZ4(d,e)},
dZ4(d,e){var w=0,v=A.m(x.H),u
var $async$az9=A.i(function(f,g){if(f===1)return A.j(g,v)
for(;;)switch(w){case 0:w=3
return A.d(A.iL(new A.ia(e)),$async$az9)
case 3:if(d.e==null){w=1
break}B.a6L(d,C.bu,A.ac($.aG(),x.T,x.n).ga9().gaTQ(),D.ak1)
case 1:return A.k(u,v)}})
return A.l($async$az9,v)}}
B.b2S.prototype={
v(d){var w=A.o(d).ax,v=this.c,u=v?C.fK:C.dF,t=v?w.b:w.y
if(v)v=w.c
else{v=w.as
if(v==null)v=w.z}return A.a_c(t,v,u,C.eh,null,18)}}
B.c0r.prototype={
v(d){var w,v,u,t,s,r=this,q=null,p=A.o(d),o=p.ax
if(r.w){w=r.d
v=$.i81()
if(!v.b.test(w)){v=$.i82()
w=v.b.test(w)
u=w}else u=!0}else u=!1
w=r.c
if(w.c.length===0)w=w.e||w.f
else w=!1
if(w)t=D.ei2
else{w=r.d
v=p.ok.y
if(u){if(v==null)v=q
else{s=v.r
if(s==null)s=16
s=v.Jc(o.k3,s*r.r,1.6)
v=s}v=new B.bxx(w,v,q)
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
B.bS6.prototype={
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
h.push(A.rn(C.er,u,r,p,new B.eeT(this,s,d),!1,j))}return A.bS(C.R,h,C.aw,C.R,8,8)}}
B.aV_.prototype={
U(){return new B.b8K(null,null)}}
B.b8K.prototype={
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
eTx(){this.a.toString
this.A(new B.fDV(this))},
dYZ(){var w=this,v=null
A.iL(new A.ia(w.a.c))
w.A(new B.fDT(w))
w.c.N(x.gV).f.a0(A.am(v,v,v,v,v,C.p,v,A.c(A.ac($.aG(),x.T,x.n).ga9().gc1t(),v,v,v,v,v,v,v,v,v,v),v,A.h0(0,0,0,0,0,1),v,v,v,v,v,v,v,v,v,v))
A.i3(C.dv,new B.fDU(w),x.fL)},
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
v=new A.a_(v,v,v,v).aE(0,C.rI)
p=C.f5.I(0.15)
v=A.H(h,A.y(C.fa,C.f5,h,h,18),C.o,h,h,new A.P(p,h,h,s.b,h,h,h,C.t),h,h,h,h,v,h,h,h)
p=$.aG()
o=x.T
n=x.n
m=A.ac(p,o,n).ga9().gaUc()
l=g.f
k=l.as
j=x.p
k=A.a([v,new A.N(u,u,h,h),A.c(m,h,h,h,h,h,h,(k==null?C.b8:k).ar(C.WF,C.U),h,h,h)],j)
i.a.toString
k.push(new A.RR(h))
v=i.d
v===$&&A.e()
if(v){v=i.w
m=v?C.bu:C.im
k.push(A.ay(h,D.bp6,h,A.y(m,v?C.bi:C.WR,h,h,16),16,h,i.gdYY(),C.Y,h,h,A.ac(p,o,n).ga9().gbZj(),h))}v=i.f
v===$&&A.e()
k.push(A.X3(C.al,A.y(C.iS,C.WR,h,h,18),h,v))
k=A.bY(!1,r,!0,new A.F(new A.a_(u,u,u,u),A.G(k,C.l,h,C.i,C.j,0,h,h),h),h,!0,!1,h,h,h,h,h,h,h,h,h,h,h,i.geTw(),h,h,h,h,h,h,h,h)
v=i.r
v===$&&A.e()
p=f.k2.I(0.5)
o=A.dK(A.b7(d,h,x.w).w.a.a)
n=i.a.c
l=l.Q
m=l==null?C.b8:l
return A.H(h,A.B(A.a([k,A.os(A.h3(v,new B.fDW(i),A.H(h,A.H(h,new A.dy(new A.aZ(0,1/0,0,w),A.asT(A.bv(A.c(n,h,h,h,h,h,h,m.faP(f.k3.I(0.85),C.cM,1.6),h,h,h),C.p,h,C.z,h,h,h,h,!1,C.O),h,h,o!==C.bq),D.eFL),C.o,h,h,new A.P(p,h,h,s.c,h,h,h,C.t),h,h,h,h,new A.a_(u,u,u,u),h,h,1/0),C.o,h,h,h,h,h,h,h,new A.a_(u,0,u,u),h,h,h)),C.p,h)],j),C.y,h,C.i,C.j,0,h,C.n),C.o,h,h,new A.P(t,h,q,r,h,h,h,C.t),h,h,h,new A.a_(0,0,0,u),h,h,h,h)}}
B.aV0.prototype={
U(){return new B.cbv(null,null)}}
B.cbv.prototype={
ae(){this.ai()
var w=A.cV(null,C.rz,null,1,null,this)
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
t=A.ac($.aG(),x.T,x.n).ga9().gaUc()
s=q.f.as
t=A.c(t,r,r,r,r,r,r,(s==null?C.b8:s).ar(C.WE,C.av),r,r,r)
s=this.d
s===$&&A.e()
return A.H(r,A.G(A.a([u,new A.N(p,p,r,r),t,new A.N(p,p,r,r),A.h3(s,new B.fDY(this,q),r)],x.p),C.l,r,C.i,C.D,0,r,r),C.o,r,r,new A.P(w,r,v,q.a.a.f,r,r,r,C.t),r,r,r,r,new A.a_(o,p,o,p),r,r,r)}}
B.bcr.prototype={
q(){var w=this,v=w.b9$
if(v!=null)v.ad(0,w.gfl())
w.b9$=null
w.aj()},
bZ(){this.cp()
this.cl()
this.fm()}}
B.bcs.prototype={
q(){var w=this,v=w.b9$
if(v!=null)v.ad(0,w.gfl())
w.b9$=null
w.aj()},
bZ(){this.cp()
this.cl()
this.fm()}}
B.Kp.prototype={
gb5a(){var w,v,u=this.a
if(u===D.CK)return"global"
w=this.b
w=C.cK.bV(C.c.p(w==null?"":w))
w=C.Cg.gmx().bV(w)
v=A.at(w,"=","")
if(u===D.aft)return"book:"+v
if(u===D.afu)return"online:"+v
if(u===D.bJt)return"foliate:"+v
if(u===D.y3)return"pdf:"+v
return"note:"+v},
n(d,e){if(e==null)return!1
return e instanceof B.Kp&&e.a===this.a&&e.b==this.b},
gF(d){return A.as(this.a,this.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)},
k(d){return"ChatScopeKey(scope: "+this.a.k(0)+", refId: "+A.b(this.b)+")"}}
B.a_J.prototype={
O(){return"ChatScope."+this.b}}
B.dkY.prototype={}
B.Az.prototype={
Y(){var w=this,v=w.c,u=A.Y(v).i("E<1,K<h,@>>")
v=A.M(new A.E(v,new B.cDM(),u),u.i("ah.E"))
return A.x(["id",w.a,"title",w.b,"messages",v,"createdAt",w.d.c2(),"updatedAt",w.e.c2()],x.N,x.z)},
gaf(d){return this.a}}
B.OS.prototype={
vU(d,e,f,g,h,i,j,k,l,m){var w,v,u,t=this,s=j==null?t.a:j,r=h==null?t.b:h,q=i==null?t.c:i,p=g==null?t.d:g
if(e)w=null
else w=l==null?t.e:l
if(d)v=null
else v=k==null?t.f:k
u=f==null?t.r:f
return new B.OS(s,r,q,p,w,v,u,m==null?t.w:m)},
fcf(d,e,f,g,h){var w=null
return this.vU(d,e,w,w,f,g,h,w,w,w)},
bH_(d,e,f){var w=null
return this.vU(!1,!1,w,w,d,e,f,w,w,w)},
bFW(d){var w=null
return this.vU(!1,d,w,w,w,w,w,w,w,w)},
faL(d,e,f){var w=null
return this.vU(d,!1,w,e,w,f,w,w,w,w)},
f5I(d){var w=null
return this.vU(!1,!1,w,d,w,w,w,w,w,w)},
f6m(d){var w=null
return this.vU(!1,!1,w,w,w,w,d,w,w,w)},
f9j(d,e){var w=null
return this.vU(!1,!1,d,w,w,w,w,w,w,e)},
f4t(d){var w=null
return this.vU(d,!1,w,w,w,w,w,w,w,w)},
fcd(d,e,f,g,h){var w=null
return this.vU(d,e,f,g,w,w,h,w,w,w)},
fce(d,e,f,g,h){var w=null
return this.vU(d,e,f,w,w,w,g,w,w,h)},
d6K(d,e,f,g){var w=null
return this.vU(d,e,f,w,w,w,g,w,w,w)},
d5h(d){var w=null
return this.vU(!1,!1,w,w,w,d,w,w,w,w)},
fa_(d,e){var w=null
return this.vU(!1,!1,w,w,w,d,w,e,w,w)},
fa0(d,e){var w=null
return this.vU(!1,!1,w,w,w,d,w,w,e,w)},
f7q(d){var w=null
return this.vU(!1,!1,w,w,w,w,w,w,w,d)}}
B.a_H.prototype={
gd0C(){var w,v=this.x,u=v.a
if(u===D.y3){w=v.b
w=C.c.p(w==null?"":w).length!==0}else w=!1
if(!w)if(u===D.afs){v=v.b
v=C.c.ao(C.c.p(v==null?"":v),"pdf:")}else v=!1
else v=!0
return v},
gezF(){var w,v,u,t=null
if(!this.gd0C())return t
w=this.x
if(w.a===D.y3){w=w.b
v=C.c.p(w==null?"":w)
return v.length===0?t:v}w=w.b
u=C.c.p(w==null?"":w)
if(!C.c.ao(u,"pdf:"))return t
v=C.c.p(C.c.aZ(u,4))
return v.length===0?t:v},
genk(){var w,v=this.x
if(v.a!==D.y3)return null
v=v.b
w=C.c.p(v==null?"":v)
if(w.length===0)return null
v=C.cK.bV("pdf:"+w)
v=C.Cg.gmx().bV(v)
return"note:"+A.at(v,"=","")+":"},
epi(d){var w,v=C.c.p(d).toLowerCase(),u=v.length
if(u===0)return!1
w=C.c.gnp(v)
if(C.d.c8(D.dpe,w))return!0
if(u<=24&&C.d.c8(D.d5S,w))return!0
return!1},
ap(){A.aj(this).n6(this.gdVP())
this.a_F()
return D.bJu},
a_F(){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$a_F=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.as){w=1
break}t=4
r.z=A.aj(r).m(0,$.i9z(),x.cR)
q=A.aj(r).m(0,$.c1(),x.o)
m=J.ajK(q)
if(m==null)m=null
else{m=m.gdD()
m=m==null?null:m.a}r.Q=m
if(m==null){$.a3.$1("[ChatNotifier] No user ID available, skipping init")
w=1
break}p=A.aj(r).m(0,$.iJ(),x.v)
m=r.z
m.toString
o=new B.cDh(p,m)
m=r.Q
m.toString
w=7
return A.d(o.Pp(m),$async$a_F)
case 7:w=8
return A.d(r.adu(),$async$a_F)
case 8:w=9
return A.d(r.apm(),$async$a_F)
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
return A.l($async$a_F,v)},
bcs(d){var w,v=this.x,u=v.a
if(u===D.CK){if(!C.c.t(d,":"))return!0
return C.c.ao(d,"global:")}if(u===D.y3){w=this.genk()
if(!C.c.ao(d,v.gb5a()+":"))v=w!=null&&C.c.ao(d,w)
else v=!0
return v}return C.c.ao(d,v.gb5a()+":")},
adu(){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$adu=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.z
if(g==null||r.Q==null){w=1
break}t=4
j=r.Q
j.toString
w=7
return A.d(g.a.dnQ(j),$async$adu)
case 7:q=e
p=J.eq(q,new B.cDp(r))
o=A.a([],x.bp)
g=J.b1(p),j=x.y
case 8:if(!g.G()){w=9
break}n=g.gT(g)
i=r.z
i.toString
w=10
return A.d(i.a.cxV(n.b),$async$adu)
case 10:m=e
l=J.az(m,new B.cDq(),j).a6(0)
J.cv(o,new B.Az(n.b,n.d,l,n.z,n.Q))
w=8
break
case 9:J.Cr(o,new B.cDr())
r.sl(0,r.gl(0).f7q(o))
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
return A.l($async$adu,v)},
apm(){var w=0,v=A.m(x.H),u,t=this
var $async$apm=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:if(t.gl(0).r!=null||t.gl(0).a.length!==0){w=1
break}if(t.gl(0).w.length===0){w=1
break}w=3
return A.d(t.a4X(C.d.ga_(t.gl(0).w).a),$async$apm)
case 3:case 1:return A.k(u,v)}})
return A.l($async$apm,v)},
ER(){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$ER=A.i(function(b8,b9){if(b8===1){s.push(b9)
w=t}for(;;)switch(w){case 0:if(r.z==null||r.Q==null||r.gl(0).a.length===0){w=1
break}t=4
d=r.gl(0).r
q=d==null?r.x.gb5a()+":"+C.k.k(1000*Date.now()):d
p=C.d.ga_(r.gl(0).a).c.length>50?C.c.a3(C.d.ga_(r.gl(0).a).c,0,50)+"...":C.d.ga_(r.gl(0).a).c
w=7
return A.d(r.z.a.cxW(q),$async$ER)
case 7:o=b9
a0=r.z
w=o==null?8:10
break
case 8:a0.toString
a1=r.Q
a1.toString
a0=a0.a
a1=B.icK(new A.ak(Date.now(),0,!1),C.bS,C.aH,new A.aw(!0,"",x.D),C.bH,new A.aw(!0,null,x.l),C.aH,q,C.bK,p,new A.ak(Date.now(),0,!1),a1)
w=11
return A.d(a0.mB(a0.gCC(),x._,x.K).hR(0,a1),$async$ER)
case 11:w=9
break
case 10:w=12
return A.d(a0.a.fDb(q,p),$async$ER)
case 12:case 9:a0=r.gl(0).a,a1=a0.length,a2=x.D,a3=x.l,a4=x.J,a5=x.c,a6=x.R,a7=0
case 13:if(!(a7<a0.length)){w=15
break}n=a0[a7]
if(n.a==="ai_pending"){w=14
break}a8=r.z
a8.toString
w=16
return A.d(a8.a.dot(n.a),$async$ER)
case 16:m=b9
l=B.ih8(n.c)
k=J.an(l)!==0
j=k?B.iWx(l):null
a8=r.z
w=m==null?17:19
break
case 17:a8.toString
a9=n.a
b0=r.Q
b0.toString
b1=n.b===C.o3?"user":"assistant"
b2=n.c
b3=n.r
a8=a8.a
b4=Date.now()
b5=Date.now()
w=20
return A.d(new A.xm(a8,a8.gCB(),a6).hR(0,new A.Uu(new A.aw(!0,a9,a2),new A.aw(!0,q,a2),new A.aw(!0,b0,a2),new A.aw(!0,b1,a2),new A.aw(!0,b2,a2),new A.aw(!0,b3,a2),new A.aw(!0,j,a3),new A.aw(!0,k,a4),C.bH,C.aH,C.aH,new A.aw(!0,new A.ak(b4,0,!1),a5),new A.aw(!0,new A.ak(b5,0,!1),a5),C.bS)),$async$ER)
case 20:w=18
break
case 19:a8.toString
w=21
return A.d(a8.a.fD8(n.a,n.c,k,j,n.r),$async$ER)
case 21:case 18:case 14:a0.length===a1||(0,A.a7)(a0),++a7
w=13
break
case 15:a0=r.gl(0).a
a1=A.Y(a0).i("aE<1>")
a0=A.M(new A.aE(a0,new B.cDs(),a1),a1.i("U.E"))
a1=o
a1=a1==null?null:a1.z
if(a1==null)a1=new A.ak(Date.now(),0,!1)
i=new B.Az(q,p,a0,a1,new A.ak(Date.now(),0,!1))
a0=A.M(r.gl(0).w,x.ba)
h=a0
g=h
f=J.ZJ(g,new B.cDt(q))
if(f>=0)J.br(g,f,i)
else J.a6Y(g,0,i)
J.Cr(g,new B.cDu())
r.sl(0,r.gl(0).f9j(q,g))
r.eUh()
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
a4X(d){return this.fr2(d)},
fr2(d){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a4X=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(!r.bcs(d)){w=1
break}n=r.z
if(n==null){n=C.d.cu(r.gl(0).w,new B.cDx(d),new B.cDy(d)).c
if(n.length===0){w=1
break}r.sl(0,r.gl(0).d6K(!0,!0,d,n))
w=1
break}t=4
w=7
return A.d(n.a.cxV(d),$async$a4X)
case 7:q=f
p=J.az(q,new B.cDz(),x.y).a6(0)
r.sl(0,r.gl(0).d6K(!0,!0,d,p))
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
return A.l($async$a4X,v)},
FF(d){return this.fhT(d)},
fhT(d){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$FF=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(!r.bcs(d)){w=1
break}t=4
o=r.z
w=o!=null?7:8
break
case 7:w=9
return A.d(o.FF(d),$async$FF)
case 9:case 8:o=r.gl(0).w
n=A.Y(o).i("aE<1>")
m=A.M(new A.aE(o,new B.cDw(d),n),n.i("U.E"))
q=m
o=r.gl(0)
n=r.gl(0).r===d?C.zA:r.gl(0).a
l=r.gl(0).r===d?null:r.gl(0).r
k=r.gl(0)
r.sl(0,o.fce(r.gl(0).r===d,k.r===d,l,n,q))
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
Yl(d,e,f,g,h){return this.dtK(d,e,f,g,h)},
dtK(b2,b3,b4,b5,b6){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$Yl=A.i(function(b7,b8){if(b7===1){s.push(b8)
w=t}for(;;)switch(w){case 0:a9=C.c.p(b2)
if(a9.length===0||r.gl(0).b||r.gl(0).d){w=1
break}r.at=""
m=C.k.k(1000*Date.now())
l=Date.now()
k=x.z
j=A.M(r.gl(0).a,k)
j.push(new A.lK(m,C.o3,a9,new A.ak(l,0,!1),!1,!1,""))
m=x.y
i=A.dv(j,!0,m)
j=Date.now()
l=r.gl(0)
m=A.M(i,m)
m.push(new A.lK("ai_pending",C.pR,"",new A.ak(j,0,!1),!0,!0,""))
r.sl(0,l.fcf(!0,!0,!0,b6,m))
h=A.aj(r).m(0,$.kc(),x.e)
g=A.aj(r).m(0,$.iFK(),x.G).f0C(b3,b6,b4,b5,h.a)
m=A.a([C.c.p('You are Asaka AI, a professional knowledge assistant designed to help users with learning, problem-solving, and knowledge exploration.\n\n## Core Principles\n1. **Accuracy**: Provide factually correct information. If uncertain, acknowledge limitations.\n2. **Clarity**: Use clear, structured responses with proper formatting.\n3. **Professionalism**: Maintain an objective, educational tone.\n4. **Safety**: Never provide harmful, illegal, or unethical content.\n\n## Response Guidelines\n- Use markdown formatting for better readability\n- For math content, use LaTeX notation wrapped in $$ for display math or $ for inline\n- Structure complex answers with headers and bullet points\n- Cite sources when referencing specific facts\n- Ask clarifying questions when the user\'s intent is unclear\n\n## Tool Execution Policy\n- When the user asks to operate app features (memory, notes, problem practice, library, downloads, settings), prioritize executable tool actions instead of tutorial-only text.\n- If required parameters are missing, ask the minimum follow-up question.\n- If the user delegates choices (e.g. "\u4f60\u5e2e\u6211\u751f\u6210", "\u6309\u4f60\u6765"), proceed with low-risk actions by filling reasonable defaults from context.\n- After execution, report concise action results rather than long explanations.\n\n## Constraints\n- Do not generate content that violates academic integrity\n- Do not provide complete solutions to homework without educational context\n- Respect user privacy and do not request unnecessary personal information\n')],x.s)
l=g.e
if(C.c.p(l==null?"":l).length!==0){l.toString
m.push(C.c.p(l))}f=C.c.p(C.d.au(m,"\n\n"))
e=f.length===0?null:f
m=A.aj(r).m(0,$.hX2(),x.dw)
l=g.b
j=l==null
w=3
return A.d(m.aig(j?b5:l),$async$Yl)
case 3:d=b8
q=null
t=5
w=8
return A.d(A.aj(r).m(0,$.be6(),x.gk).XG(),$async$Yl)
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
a3.j(0,"builtins",A.x(["schemaVersion","yaru.mcp.builtins.v1","actions",J.aCZ(D.tj.gfX(D.tj),!1),"tools",D.ayk],m,k))
if(r.x.a===D.CK)a4=b6||r.epi(a9)
else a4=!1
if(a4){a3.j(0,"enabled",!0)
a3.j(0,"mode","practice_chat")
a3.j(0,"allowedTools",D.ayk)
a3.j(0,"limit",20)}a1.j(0,"mcp",a3)
a3=A.aj(r).m(0,$.c1(),x.o)
a3=a3.gB(a3)
a5=a3==null?null:a3.gdD()
a2=a2.a(a1.h(0,"agent"))
a2=A.ej(a2==null?C.bt:a2,m,k)
a2.j(0,"enabled",!0)
a2.j(0,"mode","action_chat_v1")
a2.j(0,"confirmationPolicy","graded")
a2.j(0,"allowedActionIds",J.aCZ(D.tj.gfX(D.tj),!1))
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
return A.d(A.aj(r).m(0,$.iah().gjA(),x.F),$async$Yl)
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
case 15:a8=A.aj(r).m(0,$.iah().gJ(),x.fQ).zx(a9,A.aj(r).m(0,$.bdP(),x.Q),r.gezF())
w=10
break
case 11:m=A.aj(r).m(0,$.bdP(),x.Q)
k=g.a
if(k==null)k=b4
if(j)l=b5
a8=m.nJ(g.d,g.c,d,i,k,a9,l,a1,e)
case 10:r.y=a8.f1(r.gdWf(),!1,r.ge61(),new B.cDA(r))
case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Yl,v)},
dWg(d){var w,v,u,t=this
if(d instanceof A.vW){t.dKV(d.a,d.c,d.b)
return}if(d instanceof A.HA){w=d.a.toLowerCase()
v=C.c.t(w,"search")
u=C.c.t(w,"done")||C.c.t(w,"complete")||C.c.t(w,"finished")
if(v&&!u)t.sl(0,t.gl(0).d5h(!0))
else if(u&&t.gl(0).c)t.sl(0,t.gl(0).d5h(!1))
return}if(d instanceof A.alm)t.aBQ(d.a)},
aBQ(d){return this.eip(d)},
eip(a1){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$aBQ=A.i(function(a2,a3){if(a2===1){t.push(a3)
w=u}for(;;)switch(w){case 0:u=3
r=C.L.aR(0,a1,null)
if(x.j.b(r))j=J.kd(r,x.f).bD(0,new B.cDo(),x.P)
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
break}l=s.ezr(J.t(n,"arguments"))
if(J.C(m,"practice_session_start_signal")){s.egd(l)
w=6
break}w=J.C(m,"yaru_agent_execute_actions")?8:9
break
case 8:w=10
return A.d(s.aB5(l),$async$aBQ)
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
return A.l($async$aBQ,v)},
ezr(d){var w,v
if(typeof d=="string"&&C.c.p(d).length!==0)try{w=C.L.aR(0,d,null)
if(x.P.b(w))return w}catch(v){return C.bt}if(x.P.b(d))return d
return C.bt},
egd(d){var w,v,u,t=J.L(d),s=t.h(d,"semantic_query")
if(s==null)s=t.h(d,"query")
w=C.c.p(J.w(s==null?"":s))
if(w.length===0)return
s=A.bN(t.h(d,"count"))
v=s==null?null:C.m.R(s)
u=C.k.a4(v==null?10:v,1,20)
s=this.gl(0)
t=x.fF.a(t.h(d,"meta"))
if(t!=null)J.cI(t,x.N,x.z)
this.sl(0,s.fa0(!1,new B.dkY(w,u)))},
aB5(d){return this.ebT(d)},
ebT(d){var w=0,v=A.m(x.H),u,t=this,s,r,q
var $async$aB5=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:q=B.iNV(d)
if(q.r.length===0){w=1
break}s=q.b
r=s.length!==0
if(r&&t.ay===s){w=1
break}if(r){r=t.gl(0).f
s=(r==null?null:r.b)===s}else s=!1
if(s){w=1
break}if(B.iNX(q)){t.sl(0,t.gl(0).fa_(!1,q))
w=1
break}w=3
return A.d(t.abF(q),$async$aB5)
case 3:case 1:return A.k(u,v)}})
return A.l($async$aB5,v)},
f1q(){var w=this
if(w.gl(0).f==null)return
w.sl(0,w.gl(0).f4t(!0))
w.bf3("\u5df2\u53d6\u6d88\u672c\u6b21\u5f85\u6267\u884c\u64cd\u4f5c\u3002")},
aNj(){var w=0,v=A.m(x.H),u,t=this,s
var $async$aNj=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:s=t.gl(0).f
if(s==null||t.gl(0).d){w=1
break}w=3
return A.d(t.abF(s),$async$aNj)
case 3:case 1:return A.k(u,v)}})
return A.l($async$aNj,v)},
abF(d){return this.e49(d)},
e49(d){var w=0,v=A.m(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$abF=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=C.c.p(d.b)
if(m.length===0)m="plan_"+Date.now()
if(q.ay===m){w=1
break}q.ay=m
q.sl(0,q.gl(0).faL(!0,!0,!1))
t=4
w=7
return A.d(A.aj(q).m(0,$.iFF(),x.r).UF(d),$async$abF)
case 7:p=f
q.bf3(B.jmr(p))
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
o=A.T(l)
q.bf3("\u6267\u884c\u64cd\u4f5c\u5931\u8d25\uff1a"+A.b(o))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
q.ay=null
q.sl(0,q.gl(0).f5I(!1))
w=r.pop()
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$abF,v)},
bf3(d){var w,v,u=this,t=C.c.p(d)
if(t.length===0)return
w=C.d.c8(u.gl(0).a,new B.cDj())
if(u.gl(0).b&&w){u.ax.push(t)
return}v=A.M(u.gl(0).a,x.y)
v.push(new A.lK(C.k.k(1000*Date.now()),C.pR,t,new A.ak(Date.now(),0,!1),!1,!1,""))
u.sl(0,u.gl(0).f6m(v))
u.ER()},
dKV(d,e,f){var w,v,u,t,s,r,q=this,p=C.d.Dh(q.gl(0).a,new B.cDi())
if(p===-1)return
if(f.length!==0)q.at+=f
w=A.M(q.gl(0).a,x.y)
v=w[p]
u=v.c+d
if(e){t=A.cDg(u)
s=q.at
s=s.length!==0?s:t.b
w[p]=v.bH4(t.a,!1,!1,s)}else{r=q.at
w[p]=v.bH4(u,!0,r.length!==0||u.length===0,r)}q.sl(0,q.gl(0).bH_(!e,!1,w))},
ehL(d){var w,v,u,t,s,r=this
$.a3.$1("[ChatNotifier]["+r.x.k(0)+"] stream error: "+A.b(d))
w=C.d.Dh(r.gl(0).a,new B.cDm())
v=A.M(r.gl(0).a,x.y)
if(w!==-1){u=v[w]
t=u.c
v[w]=u.bGW(t.length===0?"AI service is temporarily unavailable. Please try again.":t,!1,!1)}s=r.ax
if(s.length!==0){C.d.D(v,new A.E(s,new B.cDn(),A.Y(s).i("E<1,lK>")))
C.d.ag(s)}r.sl(0,r.gl(0).bH_(!1,!1,v))
r.ayA()},
e62(){var w,v,u,t,s,r=this,q=C.d.Dh(r.gl(0).a,new B.cDk()),p=r.gl(0).a
if(q!==-1){w=A.M(r.gl(0).a,x.y)
v=w[q]
u=A.cDg(v.c)
t=r.at
t=t.length!==0?t:u.b
w[q]=v.aOq(u.a,C.k.k(1000*Date.now()),!1,!1,t)
p=w}w=r.ax
if(w.length!==0){s=A.M(p,x.y)
C.d.D(s,new A.E(w,new B.cDl(),A.Y(w).i("E<1,lK>")))
C.d.ag(w)
p=s}r.at=""
r.sl(0,r.gl(0).bH_(!1,!1,p))
r.ayA()
r.ER()},
ayA(){var w=this.y
if(w!=null)w.an(0)
this.y=null},
eUh(){var w,v,u=this
if(u.Q==null)return
w=A.aj(u).m(0,$.iGB(),x.E)
v=u.Q
v.toString
w.b0V(v).nS(new B.cDv(u))}}
B.coT.prototype={}
B.ak4.prototype={
f0C(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.eGa(a3,l),j=k==null,i=j?l:k.e,h=a3.y,g=h.a,f=x.d4,e=m.cCF(A.a([a2,i,g.a],f))
i=j?l:k.f
w=m.cCF(A.a([a1,i,g.b],f))
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
q=A.fd(new A.fT(new A.aE(g,new B.coW(),f.i("aE<1>")),new B.coX(),r),r.i("U.E"))
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
g=A.M(new A.fT(new A.aE(g,new B.coY(k),f.i("aE<1>")),new B.coZ(),r),r.i("U.E"))
g.$flags=1
f=s.length===0?l:s
r=j?l:A.x(["id",k.a,"name",k.b,"temperature",k.r,"topP",k.w,"contextMessageSize",k.x,"limitContextMessages",k.y,"streamOutput",k.z,"thinkingBudget",k.Q,"maxTokens",k.as,"messageTemplate",k.ax,"enableMemory",k.cy,"enableRecentChatsReference",k.db,"customHeaders",k.CW,"customBody",k.cx],x.N,x.X)
o=x.N
n=x.aU
return new B.coT(w,e,v,u,f,A.x(["assistant",r,"instructionInjections",A.x(["activeIds",m.cV9(a3,j?l:k.a)],o,x.dy),"search",A.x(["enabled",v,"serviceIndex",a3.z.c],o,n),"mcp",A.x(["enabled",p.length!==0,"serverIds",p,"requestTimeoutSeconds",i.a],o,n),"modelRouting",A.x(["provider",e,"model",w],o,x.A),"defaultModels",h.Y(),"chatDisplay",a3.d.Y(),"chatRendering",a3.e.Y(),"chatBehavior",a3.f.Y(),"chatOther",a3.r.Y(),"quickPhrases",A.x(["items",g],o,x.fO),"voiceServices",a3.ax.Y(),"networkProxy",a3.ay.Y()],o,x.z))},
eGa(d,e){var w,v,u,t,s=d.c
if(s==null||s.length===0)return null
for(w=d.w,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
cV9(d,e){var w=e==null?"global":e,v=d.at.b
if(v.K(0,w)){v=v.h(0,w)
return v==null?C.K:v}v=v.h(0,"global")
return v==null?C.K:v},
dQi(d,e){var w,v,u,t,s=J.ckX(this.cV9(e,d))
if(s.gac(s))return""
w=e.at.a
v=A.Y(w)
u=v.i("fT<1,h>")
w=A.M(new A.fT(new A.aE(w,new B.coU(s),v.i("aE<1>")),new B.coV(),u),u.i("U.E"))
w.$flags=1
t=w
if(t.length===0)return""
return C.d.au(t,"\n\n")},
cCF(d){var w,v
for(w=0;w<3;++w){v=d[w]
if(v!=null&&C.c.p(v).length!==0)return C.c.p(v)}return null}}
B.bp1.prototype={
zO(d,e){return this.dyL(0,e)},
dyL(d,e){var w=0,v=A.m(x.z),u
var $async$zO=A.i(function(f,g){if(f===1)return A.j(g,v)
for(;;)switch(w){case 0:w=3
return A.d(D.wy.hP("speak",e,!1,x.z),$async$zO)
case 3:u=g
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$zO,v)},
QO(d){return this.dvY(d)},
dvY(d){var w=0,v=A.m(x.z),u
var $async$QO=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.d(D.wy.hP("setLanguage",d,!1,x.z),$async$QO)
case 3:u=f
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$QO,v)},
auQ(d){return this.dxg(d)},
dxg(d){var w=0,v=A.m(x.z),u
var $async$auQ=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.d(D.wy.hP("setSpeechRate",d,!1,x.z),$async$auQ)
case 3:u=f
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$auQ,v)},
auU(d){return this.dxT(d)},
dxT(d){var w=0,v=A.m(x.z),u
var $async$auU=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.d(D.wy.hP("setVolume",d,!1,x.z),$async$auU)
case 3:u=f
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$auU,v)},
auF(d){return this.dwA(d)},
dwA(d){var w=0,v=A.m(x.z),u
var $async$auF=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.d(D.wy.hP("setPitch",d,!1,x.z),$async$auF)
case 3:u=f
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$auF,v)},
fF(d){var w=0,v=A.m(x.z),u
var $async$fF=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:w=3
return A.d(D.wy.hP("stop",null,!1,x.z),$async$fF)
case 3:u=f
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$fF,v)},
cge(d){return this.fw8(d)},
fw8(d){var w=0,v=A.m(x.z),u=this,t
var $async$cge=A.i(function(e,f){if(e===1)return A.j(f,v)
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
return A.l($async$cge,v)}}
B.aa_.prototype={
U(){return new B.bXE(null,null)}}
B.bXE.prototype={
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
v(d){var w,v=A.bpU(d)
this.a.toString
v.at1(d)
this.a.toString
w=this.dNz(C.rv,D.agI)
return w},
dNz(d,e){var w=this.a,v=w.f,u=w.r
w=this.d
w===$&&A.e()
return new A.N(v,v,A.h3(w,new B.eBi(this,d,e,u),null),null)}}
B.bS5.prototype={
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
u.z=D.e0l
t=s.f-1.5707963267948966
d.OE(p,t,1.5707963267948966,!1,u)
d.OE(p,t,1.5707963267948966,!1,v)},
fY(d){var w=this
return!w.c.n(0,d.c)||!w.d.n(0,d.d)||w.e!==d.e||w.f!==d.f}}
B.feZ.prototype={
O(){return"_ProgressIndicatorType."+this.b}}
B.bb9.prototype={
q(){var w=this,v=w.b9$
if(v!=null)v.ad(0,w.gfl())
w.b9$=null
w.aj()},
bZ(){this.cp()
this.cl()
this.fm()}}
B.bpS.prototype={
v(d){var w=this,v=null
return A.ifN(!1,w.c,w.y,w.d,12,v,C.qR,w.r,w.f,v,w.x,v,w.ch,w.e,w.ay,v,v,!1,v,C.cfQ,v,C.Ba,w.ax,!1)},
gcB(d){return this.c}}
B.cyb.prototype={
O(){return"BadgePosition."+this.b}}
B.aK0.prototype={
v(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
if(!j)w=l.e===0
else w=!1
if(w)return l.c
w=l.eaR()
v=l.ean()
u=l.e8a()
t=l.e9C()
if(j){s=l.x
if(s==null)s=C.bi
j=A.ZR(A.H(k,k,C.o,k,k,new A.P(s,k,A.b8(C.ab,C.C,2),k,A.a([new A.eL(1,C.cs,s.I(0.5),C.W,6)],x.V),k,k,C.bg),k,12,k,k,k,k,k,12),k,D.cfO)}else{A.bpU(d).at1(d)
j=l.e
r=j>99
q=r?"99+":C.k.k(j)
r=j>9||r
p=r?20:18
o=r?6:0
j=A.a5(9)
n=A.b8(C.ab.I(0.3),C.C,1.5)
m=A.a([new A.eL(1,C.cs,C.yb.I(0.4),C.W,8)],x.V)
m=A.ZR(A.H(k,A.c(q,k,k,k,k,k,k,A.aD(k,k,C.ab,k,k,k,k,k,k,k,k,11,k,k,C.H,k,1.2,!0,k,-0.2,k,k,k,k,k,k),C.ag,k,k),C.o,k,new A.aZ(p,1/0,18,1/0),new A.P(C.yb,k,n,j,m,k,k,C.t),k,k,k,k,new A.a_(o,2,o,2),k,k,k),k,D.cfz)
j=m}return new A.c9(C.aP,k,C.aT,C.o,A.a([l.c,A.dL(u,j,k,k,t,v,w,k)],x.p),k)},
eaR(){switch(0){case 0:case 1:return this.d?-2:-6}},
ean(){switch(0){case 0:case 2:return this.d?-2:-6}},
e8a(){switch(0){case 0:case 1:return null}},
e9C(){switch(0){case 0:case 2:return null}}}
B.bpJ.prototype={
v(d){var w=null,v=d.N(x.C),u=v==null?w:v.r,t=u
if(t==null)t=C.f9
return A.cUk(!1,new A.AZ(A.iTF(this.eb8(),C.l,C.aI,w,C.i,C.D,0,w,w,C.n),w),C.o,w,w,C.Y,t,w,new A.v8(16,C.E),!1,w)},
eb8(){var w,v,u,t=null,s=A.a([],x.p)
for(w=this.c,v=0;v<3;++v){if(v>0){u=A.H(t,t,C.o,C.Kz,t,t,t,t,t,t,t,t,t,1)
s.push(u)}s.push(w[v])}return s}}
B.bpN.prototype={
v(d){var w=this,v=null,u=w.r,t=w.e,s=t==null,r=!s,q=r?C.ab:C.KE,p=A.y(w.c,q,v,v,u*0.5),o=w.dTo()
if(s)t=new B.cUq()
return A.aK1(p,r,v,20,u,0.95,t,C.f9,v,o,0.5,!1,u)},
dTo(){switch(0){case 0:return C.zk}}}
B.cUp.prototype={
O(){return"GlassIconButtonShape."+this.b}}
B.bpO.prototype={
v(d){var w,v=this,u=d.N(x.C),t=u==null?null:u.r,s=t
if(s==null)s=C.f9
t=v.e
w=A.Y(t).i("E<1,AU>")
t=A.M(new A.E(t,new B.cUr(v),w),w.i("ah.E"))
return new B.aK4(new B.cUs(v,s),t,v.w,s,null)}}
B.aK6.prototype={
U(){return new B.bXF()}}
B.bXF.prototype={
v(d){var w,v,u,t=null,s=d.N(x.C),r=this.a
r.toString
w=s==null?t:s.r
v=w==null?C.f9:w
u=A.H(t,new B.b6T(r.c,r.d,r.e,r.x,r.y,t,t,16,v,t,t),C.o,t,t,new A.P(C.Kz,t,t,A.a5(16),t,t,t,C.t),t,32,t,t,C.rI,t,t,t)
return new A.hk(u,t)}}
B.b6T.prototype={
U(){return new B.b6U()},
deL(d){return this.e.$1(d)}}
B.b6U.prototype={
gd1h(){var w=this.f
return w===$?this.f=A.a9d(this.a.d,2):w},
b8(d){var w,v=this
v.bg(d)
w=v.a.d
if(d.d!==w)v.A(new B.fq8(v))},
etG(d){this.A(new B.fq0(this,d))},
etK(d){this.A(new B.fq2(this,d))},
etI(d){var w,v,u,t=this
t.A(new B.fq1(t))
w=t.c.gaN()
w.toString
x.bG.a(w)
v=t.gd1h()
t.a.toString
w=w.gW(0)
t.a.toString
u=A.iev((v+1)/2,2,0.5,d.c.a.a/w.a/0.5)
t.a.toString
t.f=A.a9d(u,2)
w=t.a
if(u!==w.d)w.deL(u)},
v(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=A.a9d(n.d,2)
n=p.a
w=n.y
v=n.f
if(v==null)v=D.ews
u=n.r
if(u==null)u=D.ev8
n=p.gd1h()
t=p.e?C.Xk:C.Xl
s=A.a([],x.p)
r=0
for(;;){q=p.a
q.toString
if(!(r<2))break
s.push(new A.lN(1,C.fY,new A.il(C.al,o,o,new A.dP(q.c[r],o,o,o,o,o,o,o,o,o,o,o,o),o),o));++r}return A.cW(o,A.ina(new B.fq6(p,m,C.Wm,w-3,v,u),A.G(s,C.l,o,C.i,C.j,0,o,o),C.Vb,t,n,x.i),C.z,!1,o,o,o,new B.fq7(p),p.getF(),p.getH(),o,p.getJ(),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!1,C.aV)}}
B.aK7.prototype={
U(){return new B.b17(null,null)},
lD(d){return this.d.$1(d)}}
B.b17.prototype={
ae(){var w,v,u,t,s,r,q=this,p=null
q.ai()
q.d=A.cV(p,D.ai6,p,1,p,q)
q.e=A.cV(p,D.ai6,p,1,p,q)
w=x.Z
q.f=new A.be(A.du(C.Xj,q.d,C.Xj),new A.bQ(0,1,w),w.i("be<bL.T>"))
v=w.i("ik<bL.T>")
u=x.fs
t=x.cr
s=x.i
r=A.XL(A.a([new A.oF(new A.ik(new A.jE(C.di),new A.bQ(1,0.92,w),v),40,u),new A.oF(new A.ik(new A.jE(C.di),new A.bQ(0.92,1,w),v),60,u)],t),s)
q.r=new A.be(q.d,r,r.$ti.i("be<bL.T>"))
s=A.XL(A.a([new A.oF(new A.ik(new A.jE(C.Xj),new A.bQ(0,1,w),v),45,u),new A.oF(new A.ik(new A.jE(D.bUZ),new A.bQ(1,0,w),v),55,u)],t),s)
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
ebe(){var w=this.a
w.lD(!w.c)},
v(d){var w,v,u=this,t=null,s=d.N(x.C),r=u.a
r.toString
w=s==null?t:s.r
u.y=w==null?C.f9:w
w=u.d
w===$&&A.e()
v=u.e
v===$&&A.e()
return A.cW(t,new A.hk(A.h3(new A.Ta(A.a([w,v],x.dS)),new B.eBk(u,C.Wm,r.e,58,18.799999999999997,22),t),t),C.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,u.gcLU(),t,t,t,t,t,t,t,t,t,!1,C.aV)}}
B.bbb.prototype={
bZ(){this.cp()
this.cl()
this.i6()},
q(){var w=this,v=w.aD$
if(v!=null)v.ad(0,w.ghZ())
w.aD$=null
w.aj()}}
B.aK4.prototype={
U(){return new B.b15(new A.mu(),new A.aOr(null),C.cv,null,null)}}
B.b15.prototype={
ae(){var w,v=this
v.ai()
w=A.aDS(null,0,v)
v.f!==$&&A.bo()
v.f=w
w.f8()
w.dC$.M(0,new B.eBh(v))},
q(){var w=this.f
w===$&&A.e()
w.q()
this.dGg()},
v(d){var w,v,u,t=this,s=null,r=t.e
if(r.gbXY()){w=t.f
w===$&&A.e()
w=w.x
w===$&&A.e()
v=w>0.05}else v=!1
w=v?0:1
u=t.a.d.$2(d,t.geTL())
return new A.CR(t.d,new A.c9(C.aP,s,C.aT,C.p,A.a([A.jf(A.jO(u,v,s),w),new A.acm(r,t.gdRs(),s,C.a3Z,s)],x.p),s),s)},
aG7(d){var w,v=this.f
v===$&&A.e()
w=v.x
w===$&&A.e()
v.Ct(new A.Mg(d,A.Nx(D.eny,w-d,0),!1,C.jL))},
eTM(){var w,v=this
if(v.e.gbXY()){w=v.f
w===$&&A.e()
w=w.x
w===$&&A.e()
w=w>0.1}else w=!1
if(w)v.aG7(0)
else v.ewJ()},
ewJ(){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.dE.a(n.c.gaN())
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
if(p<r&&o>r)n.y=q?C.hg:C.nO
else n.y=q?C.j4:C.cv
n.e.a8M(0)
n.aG7(1)},
dXt(){this.aG7(0)},
dRt(d){var w,v,u,t,s=this,r=null
if(s.r==null)return C.au
w=s.f
w===$&&A.e()
w=w.x
w===$&&A.e()
v=C.m.a4(w,0,1)
w=A.a([],x.p)
if(v>0.3)w.push(A.kL(0,A.cW(C.fJ,A.H(r,r,C.o,C.am.I(0),r,r,r,r,r,r,r,r,r,r),C.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.gdXs(),r,r,r,r,r,r,r,r,r,!1,C.aV),0))
u=s.y
t=v-0.5
w.push(A.aGQ(s.dRr(v),u,s.d,new A.V(0,(1-4*t*t)*5),!1,u))
return new A.c9(C.aP,r,C.aT,C.p,w,r)},
cFA(){return C.d.i7(this.a.e,0,new B.eBf(),x.i)+16},
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
o=A.igy(p)
h.a.toString
n=o==null?D.cfD:o
p=A.a5(u)
m=n.d
m=A.I7(m,m,g)
l=h.y
k=A.a([],x.p)
if(d>0.65){j=h.a.e
i=A.Y(j).i("E<1,AU>")
j=A.M(new A.E(j,new B.eBe(h),i),i.i("ah.E"))
k.push(A.jf(new A.N(t,g,new A.F(C.bm,A.bv(A.B(j,C.aJ,g,C.i,C.D,0,g,C.n),C.p,g,C.z,g,g,C.o4,g,!1,C.O),g),g),r))}return new A.hk(A.jf(A.fz(p,A.Os(A.cUk(!1,new A.c9(l,g,C.aT,C.b4,k,g),C.b4,s,g,g,w,n,new A.v8(u,C.E),!0,t),!0,m),C.b4),q),g)}}
B.bb8.prototype={
q(){var w=this,v=w.b9$
if(v!=null)v.ad(0,w.gfl())
w.b9$=null
w.aj()},
bZ(){this.cp()
this.cl()
this.fm()}}
B.AU.prototype={
U(){return new B.bXD()}}
B.bXD.prototype={
v(d){var w,v,u,t,s,r=this,q=null,p=r.a
p.toString
w=r.e
if(w)v=D.agI
else v=r.d?C.Wx:C.a4
u=w?0.98:1
w=A.a5(10)
t=x.p
s=A.a([],t)
C.d.D(s,A.a([A.y(r.a.d,C.yd,q,q,20),C.ak],t))
s.push(A.a2(A.c(r.a.c,q,q,q,q,q,q,A.aD(q,q,C.yd,q,q,q,q,q,q,q,q,17,q,q,C.b1,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1))
r.a.toString
return new A.hk(A.cW(q,A.ig(A.aDO(A.jC(A.G(s,C.l,q,C.i,C.j,0,q,q),q,q,C.di,new A.P(v,q,q,w,q,q,q,C.t),C.dE,q,p.w,q,C.by,q),C.di,C.dE,u),C.c_,q,q,new B.eB8(r),new B.eB9(r),q,!0),C.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p.e,new B.eBa(r),new B.eBb(r),new B.eBc(r),q,q,q,q,q,q,!1,C.aV),q)}}
B.aob.prototype={
v(d){var w,v,u,t=this,s=null
d.N(x.C)
w=t.w
v=x.p
u=A.a([],v)
C.d.D(u,A.a([C.N,new B.bXB(t.f,s),C.N],v))
u.push(new A.F(t.d,t.c,s))
u.push(C.M)
return A.aDb(!0,A.ZR(new A.dH(!0,!0,!0,!0,C.Y,!1,A.B(u,C.l,s,C.i,C.D,0,s,C.n),s),w,C.N1),C.b4,0,w,C.N1,D.aoR,!0)}}
B.bXB.prototype={
v(d){var w=null
return A.H(w,w,C.o,w,w,new A.P(C.KE,w,w,A.a5(2.5),w,w,w,C.t),w,5,w,w,w,w,w,36)}}
B.aKb.prototype={
O(){return"GlassToastPosition."+this.b}}
B.aod.prototype={
O(){return"GlassToastType."+this.b}}
B.aKa.prototype={
U(){return new B.bXI()}}
B.bXI.prototype={
v(d){var w,v,u,t,s,r=null,q=this.eax(A.bpU(d).at1(d)),p=this.a,o=p.d,n=p.c
p=p.z
w=C.am.I(0.7)
v=A.a5(24)
u=A.b8(q.I(0.2),C.C,1)
t=A.a([new A.eL(2,C.cs,q.I(0.15),C.W,20)],x.V)
s=A.a([A.y(o,q,r,r,20),C.ak,new A.ep(1,C.bB,A.c(this.a.c,r,r,2,C.Z,r,r,D.exV,r,r,r),r)],x.p)
return A.de(r,r,r,A.ZR(A.H(r,A.G(s,C.l,r,C.i,C.D,0,r,r),C.o,r,D.bp0,new A.P(w,r,u,v,t,r,r,C.t),r,r,r,r,new A.a_(16,12,16,12),r,r,r),p,D.cfN),!1,r,r,r,r,!1,r,!1,r,r,r,r,r,r,r,r,r,r,n,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,C.aX,r)},
eax(d){switch(this.a.e.a){case 0:return C.ve
case 1:return C.yb
case 2:return C.Kn
case 3:return C.Kd
case 4:return C.ab.I(0.6)}}}
B.agV.prototype={
U(){return new B.b18(null,null)},
ftn(){return this.Q.$0()}}
B.b18.prototype={
ae(){var w,v,u,t=this
t.ai()
w=A.cV(null,C.fF,null,1,null,t)
t.d=w
v=t.eaB()
u=x.dJ
t.e=new A.be(A.du(C.di,w,C.lZ),new A.bQ(v,C.W,u),u.i("be<bL.T>"))
u=x.Z
t.f=new A.be(A.du(C.ced,t.d,C.aom),new A.bQ(0,1,u),u.i("be<bL.T>"))
t.d.dq(0)
w=t.a.r
if(w.a>0)t.r=A.eb(w,t.ge1m())},
eaB(){switch(this.a.f.a){case 0:return C.FT
case 1:return C.l0
case 2:return C.l0}},
abi(){var w=0,v=A.m(x.H),u=this,t
var $async$abi=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:t=u.r
if(t!=null)t.an(0)
t=u.d
t===$&&A.e()
w=2
return A.d(t.fC(0),$async$abi)
case 2:u.a.ftn()
return A.k(null,v)}})
return A.l($async$abi,v)},
q(){var w=this.r
if(w!=null)w.an(0)
w=this.d
w===$&&A.e()
w.q()
this.dGk()},
v(d){var w,v,u,t,s=this,r=null,q=s.dVD(A.b7(d,r,x.w).w.r),p=s.a,o=A.bmT(r,C.bp,new B.aKa(p.c,p.d,p.e,p.w,p.y,p.z,r),r,s.e8L(),D.eFW,new B.eBl(s),C.cl)
p=p.f
w=p===D.c2h?q:r
v=p===D.ak0?q:r
u=s.e
u===$&&A.e()
t=s.f
t===$&&A.e()
return A.dL(v,A.wv(new A.f5(t,!1,p===D.c2i?A.au(o,r,r):o,r),u,r,!0),r,r,16,16,w,r)},
dVD(d){switch(this.a.f.a){case 0:return d.b+16
case 1:return 0
case 2:return d.d+16}},
e8L(){switch(this.a.f.a){case 0:return C.ahR
case 1:return C.ahQ
case 2:return C.Xx}}}
B.bbc.prototype={
q(){var w=this,v=w.b9$
if(v!=null)v.ad(0,w.gfl())
w.b9$=null
w.aj()},
bZ(){this.cp()
this.cl()
this.fm()}}
var z=a.updateTypes(["~()","I(Az)","AU(AU)","h(IK)","I(fS)","aa<~>()","r(Az,Az)","aa<u<ra>>()","all(aQ)","r(La,La)","K<h,@>(La)","av1(aQ)","I(IK)","I(ru)","r(ru,ru)","azn(Q)","h(ajX)","aqh(Q,r)","OS()","~(yO)","IK(Es)","a_H(Kp)","Az()","ak4(aQ)","aa<@>(zp)","a7Y(aQ)","~(KC)","~(HQ)","~(px)","n(Q)","ai(ai,AU)","aob(Q)","agV(Q)","ajW(aQ)"])
B.dpn.prototype={
$1(d){var w,v=d.c,u=v.h(0,"title"),t=v.h(0,"span_id"),s=v.h(0,"page_number")
s=A.cb(s==null?"":s,null)
w=v.h(0,"boxes_json")
v.h(0,"block_kind")
v.h(0,"source_kind")
return new B.IK(d.a,d.b,u,t,s,w,v)},
$S:z+20}
B.dpo.prototype={
$1(d){var w=d.y.h(0,"doc_id"),v=w==null?null:C.c.p(w),u=v
if(u!=null&&u.length!==0)return u===this.a
return C.c.ao(d.a,this.a+"::")},
$S:z+12}
B.dpl.prototype={
$1(d){var w,v,u=d.d,t=u==null?"Untitled":u,s=d.f,r=s!=null,q=r?" [Page "+A.b(s)+"]":"",p=d.e,o=p!=null,n=o?" [Span "+p+"]":"",m=A.D(x.N,x.z)
if(r)m.j(0,"pageNumber",s)
if(o&&C.c.p(p).length!==0)m.j(0,"spanId",p)
s=d.b
r=C.c.p(s)
p=r.length
if(p!==0)m.j(0,"quote",p>120?C.c.a3(r,0,120):r)
v=this.a.ez3(d.r)
if(v!=null)m.j(0,"rect",v)
w=m
r=A.b(t)
p=A.b(q)
o=A.b(n)
m=w.a===0?"{}":C.L.bt(w,null)
return"## "+r+p+o+"\n[CitationPayload] "+m+"\n"+s},
$S:z+3}
B.dpm.prototype={
$1(d){return d.a},
$S:z+3}
B.hVG.prototype={
$1(d){var w,v=new B.bp1()
D.wy.ro(v.gfw7())
w=new B.av1(v)
d.n6(new B.hVF(w))
return w},
$S:z+11}
B.hVF.prototype={
$0(){var w=this.a
w.a.fF(0)
w.b=w.c=!1
return null},
$S:0}
B.dPQ.prototype={
$0(){this.a.c=!1},
$S:0}
B.dPR.prototype={
$1(d){$.a3.$1("TTS Error: "+A.b(d))
this.a.c=!1},
$S:130}
B.dPS.prototype={
$0(){this.a.c=!0},
$S:0}
B.cmo.prototype={
$1(d){return d.db},
$S:303}
B.cmp.prototype={
$1(d){var w,v=C.c.p(d.c)
if(v.length===0)v="\u672a\u547d\u540d\u724c\u7ec4"
w=J.t(this.a,C.k.k(d.a))
if(w==null)w=0
return v+"\uff08"+w+" \u5f20\uff09"},
$S:841}
B.cmn.prototype={
$1(d){return d.a===this.a},
$S:127}
B.cml.prototype={
$1(d){var w=C.c.p(d.b),v=C.c.p(d.c),u=this.a
return C.c.t(w.toLowerCase(),u)||C.c.t(v.toLowerCase(),u)},
$S:127}
B.cmm.prototype={
$1(d){var w,v,u=C.c.p(d.b)
if(u.length===0)u=d.a
w=C.c.p(d.c)
v="\u300a"+u
return w.length===0?v+"\u300b":v+"\u300b/"+w},
$S:3463}
B.cmt.prototype={
$1(d){return C.k.k(d.a)===this.a},
$S:718}
B.cmu.prototype={
$1(d){return C.c.p(d.c).toLowerCase()===C.c.p(this.a).toLowerCase()},
$S:718}
B.cmv.prototype={
$1(d){return C.c.t(C.c.p(d.c).toLowerCase(),C.c.p(this.a).toLowerCase())},
$S:718}
B.cmw.prototype={
$1(d){return C.c.p(d.b).toLowerCase()===C.c.p(this.a).toLowerCase()},
$S:3465}
B.cmq.prototype={
$0(){var w,v,u=this.a.a.m(0,$.l6(),x.q).a,t=this.b,s=A.Y(u).i("aE<1>"),r=s.i("U.E"),q=A.M(new A.aE(u,new B.cmr(t),s),r)
q.$flags=1
w=q
q=w.length
if(q===1)return C.d.ga_(w).a
if(q>1)return null
u=A.M(new A.aE(u,new B.cms(t),s),r)
u.$flags=1
v=u
if(v.length===1)return C.d.ga_(v).a
return null},
$S:111}
B.cmr.prototype={
$1(d){return C.c.p(d.b).toLowerCase()===C.c.p(this.a).toLowerCase()},
$S:127}
B.cms.prototype={
$1(d){return C.c.t(C.c.p(d.b).toLowerCase(),C.c.p(this.a).toLowerCase())},
$S:127}
B.cmj.prototype={
$1(d){return this.a.e4(d.b).a>6e8},
$S:3466}
B.cmk.prototype={
$1(d){return d.a},
$S:3467}
B.cmx.prototype={
$1(d){return C.c.p(J.w(d))},
$S:19}
B.cmy.prototype={
$1(d){return d.length!==0},
$S:9}
B.hFp.prototype={
$1(d){return new B.ajW(d)},
$S:z+33}
B.cmz.prototype={
$2(d,e){return new A.aA(J.w(d),e,x.I)},
$S:30}
B.cmB.prototype={
$2(d,e){return new A.aA(J.w(d),e,x.I)},
$S:30}
B.cno.prototype={
$1(d){return d.b},
$S:z+4}
B.cnn.prototype={
$1(d){return!d.b},
$S:z+4}
B.dEe.prototype={
$1(d){return J.eF(d,new B.dEd(),x.N,x.z)},
$S:212}
B.dEd.prototype={
$2(d,e){return new A.aA(J.w(d),e,x.I)},
$S:30}
B.hHD.prototype={
$1(d){return new B.a7Y(d.S($.iJ(),x.v))},
$S:z+25}
B.cDO.prototype={
$1(d){var w=d.z.c2(),v=d.Q.c2(),u=d.as
u=u==null?null:u.c2()
return A.x(["session_id",d.b,"title",d.d,"model_id",d.e,"provider_name",d.f,"local_version",d.x,"created_at",w,"updated_at",v,"deleted_at",u],x.N,x.X)},
$S:3468}
B.cDP.prototype={
$1(d){var w=d.as.c2(),v=d.at.c2(),u=d.ax
u=u==null?null:u.c2()
return A.x(["message_id",d.b,"session_id",d.c,"role",d.e,"content",d.f,"thinking_content",d.r,"latex_blocks",d.w,"has_latex",d.x,"local_version",d.z,"created_at",w,"updated_at",v,"deleted_at",u],x.N,x.X)},
$S:3469}
B.cDQ.prototype={
$0(){var w=this,v=null,u=w.a,t=A.bA("https://api.chronorise.com/api/ai/chat/sync",0,v),s=x.N,r=A.x(["Content-Type","application/json","Authorization","Bearer "+C.c.p(w.b)],s,s),q=u.f
q=q==null?v:q.c2()
return u.d.dn("POST",t,r,C.L.bt(A.x(["sessions",w.c,"messages",w.d,"lastSyncAt",q],s,x.X),v),v)},
$S:15}
B.cDR.prototype={
$1(d){return d.b},
$S:3470}
B.cDS.prototype={
$1(d){return d.c},
$S:3471}
B.cDN.prototype={
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
return A.d(new A.xm(a6,a6.gCC(),m).Dd(0,new A.alk(new A.aw(!0,e,r),new A.aw(!0,k,r),new A.aw(!0,d,r),new A.aw(!0,a0,r),new A.aw(!0,a1,q),C.bct,C.fP,new A.aw(!0,a2,p),new A.aw(!0,a2,p),new A.aw(!0,a3,n),new A.aw(!0,a4,n),new A.aw(!0,a5,o)),C.MM),$async$$0)
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
return A.d(new A.xm(a6,a6.gCB(),a0).Dd(0,new A.Uu(new A.aw(!0,a7,r),new A.aw(!0,e,r),new A.aw(!0,k,r),new A.aw(!0,a8,r),new A.aw(!0,a9,r),new A.aw(!0,a1,r),new A.aw(!0,b1,q),new A.aw(!0,b3,m),C.fP,new A.aw(!0,a2,p),new A.aw(!0,a2,p),new A.aw(!0,a3,n),new A.aw(!0,a4,n),new A.aw(!0,a5,o)),C.MM),$async$$0)
case 7:w=5
break
case 6:return A.k(null,v)}})
return A.l($async$$0,v)},
$S:3}
B.hHF.prototype={
$1(d){var w=d.S($.i9z(),x.b),v=d.S($.e6(),x.bH),u=A.lF()
if(u==null)u=new A.kf(A.a([],x.eO))
return new B.all(w,new B.hHE(d),v,u)},
$S:z+8}
B.hHE.prototype={
$0(){var w=this.a.m(0,$.c1(),x.o)
w=w.gB(w)
return w==null?null:w.giA()},
$S:111}
B.d1W.prototype={
$1(d){var w=this.a
return w.b.index>=d.b.index&&w.gbE(0)<=d.gbE(0)},
$S:680}
B.d1X.prototype={
$2(d,e){return C.k.bk(d.c,e.c)},
$S:z+9}
B.d1V.prototype={
$1(d){return d.Y()},
$S:z+10}
B.eer.prototype={
$2(d,e){this.a.ec6(e)},
$S:354}
B.ees.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.gH()
v.Q=w.m(0,$.kc(),x.e).a.z.a
w.m(0,$.EW().$1(v.a.d).gJ(),x.B).apm()
if(v.c!=null)v.A(new B.eeq())},
$S:6}
B.eeq.prototype={
$0(){},
$S:0}
B.edP.prototype={
$0(){var w=this.a
w.at=!1
w.cy=A.a([],x.Y)
w.db=D.bju
w.cx=C.HI},
$S:0}
B.edH.prototype={
$0(){var w=this.a
w.at=!0
w.db=null},
$S:0}
B.edI.prototype={
$0(){var w=this.a
w.at=!0
w.db=null},
$S:0}
B.edJ.prototype={
$0(){var w,v=this.b
v.at=!1
v.cy=this.c
v.db=null
w=this.a.a
if(w!=null){v.cx=w
if(w.f)v.as=!0}},
$S:0}
B.edK.prototype={
$0(){var w,v=this.a
v.at=!1
w=this.b
v.db=w
w=w.a
if(w===401||w===403){v.cy=A.a([],x.Y)
v.cx=C.HI}},
$S:0}
B.edQ.prototype={
$0(){this.a.cx=this.b},
$S:0}
B.edR.prototype={
$0(){this.a.cx=this.b},
$S:0}
B.edN.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.edO.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.edS.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.w.f.length===0)return
v=v.w
w=C.d.gcL(v.f).Q
w.toString
v.kb(w,C.f_,C.XC)},
$S:6}
B.edG.prototype={
$1(d){return d.a+":"+d.c.length+":"+d.e},
$S:3472}
B.edL.prototype={
$1(d){return D.tj.h(0,d.b)!=null},
$S:z+13}
B.edM.prototype={
$2(d,e){return C.k.bk(d.d,e.d)},
$S:z+14}
B.ee_.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.at||r.ax,p=r.db
p=p==null?s:r.aDF(d,p)
w=r.db
v=w==null
u=v?s:w.a===401
t=v?s:w.a===403
w=v?s:w.a===401
w=w===!0?new B.edY(r,d):s
return A.iig(q,p,this.b,w,r.geEJ(),new B.edZ(r,d),u===!0,t===!0,this.c)},
$S:909}
B.edY.prototype={
$0(){var w=0,v=A.m(x.H),u=this
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:A.ae(u.b,!1).b2()
w=2
return A.d(u.a.bjn(),$async$$0)
case 2:return A.k(null,v)}})
return A.l($async$$0,v)},
$S:3}
B.edZ.prototype={
$1(d){var w=this.a
w.A(new B.edX(w,d))
A.ae(this.b,!1).b2()},
$S:910}
B.edX.prototype={
$0(){var w=this.a,v=this.b
w.cx=v
if(v.f)w.as=!0},
$S:0}
B.eel.prototype={
$1(d){return d.c||d.d==this.a},
$S:578}
B.eem.prototype={
$2(d,e){return C.k.bk(d.e,e.e)},
$S:3473}
B.een.prototype={
$1(d){var w=this.b,v=A.Y(w).i("E<1,h>")
w=A.M(new A.E(w,new B.eej(),v),v.i("ah.E"))
w.$flags=1
return new B.azn(w,new B.eek(this.a,d),null)},
$S:z+15}
B.eej.prototype={
$1(d){return d.b},
$S:3474}
B.eek.prototype={
$1(d){var w=this.a,v=w.x,u=v.a.a,t=C.c.p(u).length===0?d:u+"\n"+d
v.sbq(0,t)
v.siW(A.l1(C.ah,t.length))
A.ae(this.b,!1).b2()
w.y.fJ()},
$S:4}
B.edW.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.o(d).ax,l=o.b,k=o.a,j=x.p,i=A.a([E.a7k(l.ga28(),C.es,C.kG,new B.edT(k,d),!1,n,k.a.f,n)],j),h=o.c,g=h.w,f=g.length
if(f===0){k=l.gTp()
h=A.o(d).ok.Q
if(h==null)h=n
else{f=m.rx
h=h.L(f==null?m.k3:f)}i.push(new A.F(C.m0,A.c(k,n,n,n,n,n,n,h,n,n,n),n))}else for(h=h.r,w=o.d,v=x.ec,u=x.b2,t=0;t<g.length;g.length===f||(0,A.a7)(g),++t){s=g[t]
if(w){r=d.N(u)
q=r==null?n:v.a(J.t(r.r.e,C.bJ))
q.toString
p=q.aSn(s.e)}else p=n
i.push(new B.b7a(s.b,p,s.a===h,new B.edU(k,s,d),new B.edV(k,s),n))}k=A.b7(d,C.dt,x.w).w
l=l.gTp()
g=g.length
h=A.o(d).ok.at
h=h==null?n:h.ar(m.k3,C.H)
return new A.dy(new A.aZ(0,560,0,k.a.b*0.76),A.B(A.a([new A.Hk(l,A.rn(n,n,""+g,h,n,!1,n),n),C.J,new A.ep(1,C.bB,A.bv(A.B(i,C.aJ,n,C.i,C.j,0,n,C.n),C.p,n,C.z,n,n,n,n,!1,C.O),n)],j),C.y,n,C.i,C.D,0,n,C.n),n)},
$S:1173}
B.edT.prototype={
$0(){this.a.biO()
A.ae(this.b,!1).b2()},
$S:0}
B.edU.prototype={
$0(){var w=this.a
w.gH().m(0,$.EW().$1(w.a.d).gJ(),x.B).a4X(this.b.a)
A.ae(this.c,!1).b2()},
$S:0}
B.edV.prototype={
$0(){var w=this.a
return w.gH().m(0,$.EW().$1(w.a.d).gJ(),x.B).FF(this.b.a)},
$S:0}
B.eeh.prototype={
$1(d){return d.d},
$S:515}
B.eei.prototype={
$1(d){var w=this,v={},u=w.a
v.a=u.Q
v.b=u.as
return new A.l0(new B.eeg(v,u,w.b,w.c,d,w.d,w.e,w.f,w.r,w.w),null)},
$S:64}
B.eeg.prototype={
$2(a4,a5){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.o(a4).ax,l=A.o(a4).ok,k=o.c,j=k.f,i=j?"Reasoning":k.b,h=A.b7(a4,C.dt,x.w).w,g=o.d,f=g.gaKo(),e=l.at,d=e==null,a0=A.rn(n,n,i,d?n:e.ar(m.k3,C.H),n,!1,n),a1=g.gYD(),a2=l.x,a3=a2==null
a1=A.c(a1,n,n,n,n,n,n,a3?n:a2.ar(m.k3,C.H),n,n,n)
w=o.a
v=w.a?1:0
u=l.as
t=u==null
s=t?n:u.ar(m.k3,C.H)
if(t)u=n
else{t=m.rx
u=u.ar(t==null?m.k3:t,C.U)}t=o.b
r=g.gaKl()
r=A.c(r,n,n,n,n,n,n,a3?n:a2.ar(m.k3,C.H),n,n,n)
k=j?k.b:g.gTo()
q=l.Q
if(q==null)q=n
else{p=m.rx
q=q.L(p==null?m.k3:p)}p=x.p
q=A.a2(A.B(A.a([r,C.aM,A.c(k,n,n,n,n,n,n,q,n,n,n)],p),C.y,n,C.i,C.j,0,n,C.n),1)
k=w.b||j
j=j?new B.ee4():new B.ee5(w,t,a5)
j=A.ao7(A.B(A.a([a1,C.bh,new B.aK6(D.d3S,v,new B.ee6(w,t,a5),s,u,n),C.lH,A.G(A.a([q,new B.aK7(k,j,m.b,n)],p),C.l,n,C.i,C.j,0,n,n)],p),C.y,n,C.i,C.j,0,n,C.n),C.a_)
k=g.gLD()
k=A.c(k,n,n,n,n,n,n,a3?n:a2.ar(m.k3,C.H),n,n,n)
a1=o.e
a2=g.gLD()
a2=A.aK1(A.c(a2,n,n,n,n,n,n,d?n:e.ar(m.k3,C.H),n,n,n),!0,n,1,42,1.05,new B.ee8(t,a1),n,n,C.zk,0.5,!1,112)
a3=g.gYC()
a3=A.aK1(A.c(a3,n,n,n,n,n,n,d?n:e.ar(m.k3,C.H),n,n,n),!0,n,1,42,1.05,new B.ee9(t,a1),n,n,C.zk,0.5,!1,112)
w=g.ga28()
k=A.ao7(A.B(A.a([k,C.bh,new B.bpJ(A.a([a2,a3,A.aK1(A.c(w,n,n,n,n,n,n,d?n:e.ar(m.k3,C.H),n,n,n),!0,n,1,42,1.05,new B.eea(t,a1),n,n,C.zk,0.5,!1,112)],p),n)],p),C.y,n,C.i,C.j,0,n,C.n),C.a_)
e=g.ga8C()
a2=C.RC.a50(g)
a3=g.gLD()
w=C.RD.a50(g)
v=g.ga8B()
u=C.RE.a50(g)
s=g.ga8F()
d=o.x
r=d?g.gl5().gaq3():C.RF.a50(g)
return new A.dy(new A.aZ(0,640,0,h.a.b*0.82),A.B(A.a([new A.Hk(f,a0,n),C.J,j,C.J,k,C.J,new A.ep(1,C.bB,A.bv(A.B(A.a([new B.Yw(e,a2,C.er,new B.eeb(t,a1),o.f,!1,n),new B.Yw(a3,w,C.z0,new B.eec(t,a1),o.r,!1,n),new B.Yw(v,u,C.DW,new B.eed(t,a1),o.w,!1,n),new B.Yw(s,r,C.vT,new B.eee(t,a1,d),n,d,n),new B.Yw(g.ga8D(),C.RG.a50(g),C.Mf,new B.eef(t,a1),n,o.y,n),new B.Yw(g.gYC(),C.RH.a50(g),C.ft,new B.ee7(t,a1),n,!1,n)],p),C.l,n,C.i,C.j,0,n,C.n),C.p,n,C.z,n,n,n,n,!1,C.O),n)],p),C.y,n,C.i,C.D,0,n,C.n),n)},
$S:3476}
B.ee6.prototype={
$1(d){var w,v=d===1
this.c.$1(new B.ee0(this.a,v))
w=this.b
w.A(new B.ee1(w,v))},
$S:23}
B.ee0.prototype={
$0(){return this.a.a=this.b},
$S:0}
B.ee1.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ee4.prototype={
$1(d){},
$S:5}
B.ee5.prototype={
$1(d){var w
this.c.$1(new B.ee2(this.a,d))
w=this.b
w.A(new B.ee3(w,d))},
$S:5}
B.ee2.prototype={
$0(){return this.a.b=this.b},
$S:0}
B.ee3.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.ee8.prototype={
$0(){A.ae(this.b,!1).b2()
this.a.cXF()},
$S:0}
B.ee9.prototype={
$0(){A.ae(this.b,!1).b2()
var w=this.a.c
w.toString
A.aY(w).dZ(0,"/settings/chatDisplay",null)},
$S:0}
B.eea.prototype={
$0(){A.ae(this.b,!1).b2()
this.a.biO()},
$S:0}
B.eeb.prototype={
$0(){A.ae(this.b,!1).b2()
var w=this.a.c
w.toString
A.aY(w).dZ(0,"/settings/aiMcp",null)},
$S:0}
B.eec.prototype={
$0(){A.ae(this.b,!1).b2()
this.a.cXF()},
$S:0}
B.eed.prototype={
$0(){A.ae(this.b,!1).b2()
var w=this.a.c
w.toString
A.aY(w).dZ(0,"/settings/aiInstructionInjection",null)},
$S:0}
B.eee.prototype={
$0(){var w=0,v=A.m(x.H),u=this,t
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:A.ae(u.b,!1).b2()
t=u.a
w=u.c?2:4
break
case 2:w=5
return A.d(t.aHR(),$async$$0)
case 5:w=3
break
case 4:t=t.c
t.toString
A.aY(t).dZ(0,"/settings/aiVoiceServices",null)
case 3:return A.k(null,v)}})
return A.l($async$$0,v)},
$S:3}
B.eef.prototype={
$0(){A.ae(this.b,!1).b2()
var w=this.a.c
w.toString
A.aY(w).dZ(0,"/settings/aiNetworkProxy",null)},
$S:0}
B.ee7.prototype={
$0(){A.ae(this.b,!1).b2()
var w=this.a.c
w.toString
A.aY(w).dZ(0,"/settings/chatDisplay",null)},
$S:0}
B.edm.prototype={
$1(d){var w=d.a,v=D.tj.h(0,w)
v=v==null?null:v.c
return v==null?w:v},
$S:z+16}
B.edw.prototype={
$0(){return A.aY(this.a).aa(null)},
$S:0}
B.edx.prototype={
$0(){return this.a.eO4(this.b,this.c)},
$S:0}
B.edy.prototype={
$0(){return this.a.aHl(this.b)},
$S:0}
B.edz.prototype={
$0(){return this.a.eO5(this.b,this.c)},
$S:0}
B.edA.prototype={
$1(d){return A.a([d,C.cS],x.p)},
$S:3477}
B.edo.prototype={
$1(d){var w=this,v=w.b?w.a.cGE(d,10):d,u=w.c,t=A.o(w.d).ok.as
t=t==null?null:t.ar(u.k3,C.U)
return A.rn(C.k3,u.b,v,t,new B.edn(w.a,d),!1,null)},
$S:1174}
B.edn.prototype={
$0(){return this.a.e5L(this.b)},
$S:0}
B.edp.prototype={
$2(d,e){var w=this.b.a[e],v=this.a,u=v.c
u.toString
if(A.dK(A.b7(u,null,x.w).w.a.a)!==C.bq){v.c.toString
u=A.aDa().c}else u=!0
return new B.aqh(w,!u,v.a.z,null)},
$S:z+17}
B.edq.prototype={
$0(){var w=this.a
return w.gH().m(0,$.EW().$1(w.a.d).gJ(),x.B).f1q()},
$S:0}
B.edr.prototype={
$0(){var w=this.a
return w.gH().m(0,$.EW().$1(w.a.d).gJ(),x.B).aNj()},
$S:0}
B.eds.prototype={
$0(){var w=this.a
w=w.gH().m(0,$.EW().$1(w.a.d).gJ(),x.B)
w.sl(0,w.gl(0).bFW(!0))
return null},
$S:0}
B.edt.prototype={
$0(){var w=this.b.e
w.toString
return this.a.ag2(w)},
$S:0}
B.edu.prototype={
$1(d){var w=null,v=this.a,u=v.b.I(0.18),t=A.o(this.b).ok.as
return A.rn(w,w,d,t==null?w:t.ar(v.k3,C.H),w,!0,u)},
$S:1174}
B.edv.prototype={
$1(d){return this.a.Zr()},
$S:4}
B.edD.prototype={
$1(d){return d.a.d.as},
$S:3479}
B.edE.prototype={
$0(){var w=this.a
return w.gH().m(0,$.EW().$1(w.a.d).gJ(),x.B).a4X(this.b.a)},
$S:0}
B.edF.prototype={
$0(){var w=this.a
return w.gH().m(0,$.EW().$1(w.a.d).gJ(),x.B).FF(this.b.a)},
$S:0}
B.edB.prototype={
$1(d){return d.a===this.a.cx.a},
$S:748}
B.edC.prototype={
$0(){return C.d.ga_(this.a)},
$S:3480}
B.eeo.prototype={
$0(){return A.Fz(this.a).mI()},
$S:0}
B.eep.prototype={
$0(){return A.Fz(this.a).mI()},
$S:0}
B.ffB.prototype={
$2(d,e){return C.bh},
$S:40}
B.ffA.prototype={
$2(d,e){var w=null,v=this.a,u=v.c[e],t=A.a5(12),s=this.b,r=s.b,q=r.I(0.12),p=A.a5(12)
p=A.H(w,A.y(C.z0,r,w,w,w),C.o,w,w,new A.P(q,w,w,p,w,w,w,C.t),w,40,w,w,w,w,w,40)
q=A.a2(A.c(u,w,w,w,w,w,w,A.o(d).ok.y,w,w,w),1)
r=s.rx
return A.ao7(A.cE(!1,C.a9,!0,w,A.bY(!1,t,!0,new A.F(C.f8,A.G(A.a([p,C.ak,q,A.y(C.kL,r==null?s.k3:r,w,w,w)],x.p),C.l,w,C.i,C.j,0,w,w),w),w,!0,!1,w,w,w,w,w,w,w,w,w,w,w,new B.ffz(v,u),w,w,w,w,w,w,w,w),C.o,C.a4,0,w,w,w,w,w,C.b_),C.Y)},
$S:3481}
B.ffz.prototype={
$0(){return this.a.d.$1(this.b)},
$S:0}
B.d1N.prototype={
$1(d){var w=this.a
return w.cEf(this.b,w.c,d.gwa(d))},
$S:201}
B.daw.prototype={
$1(d){return d.a.d},
$S:3482}
B.dax.prototype={
$1(d){return d.a.e},
$S:3483}
B.day.prototype={
$0(){var w=this.a,v=this.c
v=v==null?null:v.a
if(v==null)v=w.e.c
return w.az9(this.b,v)},
$S:0}
B.eeT.prototype={
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
break}B.a6L(n,C.lj,A.ac($.aG(),x.T,x.n).ga9().gc2j(),D.DQ)
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
break}B.a6L(n,C.bu,A.ac($.aG(),x.T,x.n).ga9().gc3I(),D.ak1)
case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$$0,v)},
$S:3}
B.fDV.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.e()
v=!v
w.d=v
w=w.e
if(v){w===$&&A.e()
w.dq(0)}else{w===$&&A.e()
w.fC(0)}},
$S:0}
B.fDT.prototype={
$0(){return this.a.w=!0},
$S:0}
B.fDU.prototype={
$0(){var w=this.a
if(w.c!=null)w.A(new B.fDS(w))},
$S:17}
B.fDS.prototype={
$0(){return this.a.w=!1},
$S:0}
B.fDW.prototype={
$2(d,e){var w=this.a.r
w===$&&A.e()
return new A.da(C.cv,null,w.gB(0),e,null)},
$S:712}
B.fDY.prototype={
$2(d,e){return A.G(A.iP(3,new B.fDX(this.a,this.b),!0,x.m),C.l,null,C.i,C.D,0,null,null)},
$S:3484}
B.fDX.prototype={
$1(d){var w,v=null,u=this.a.d
u===$&&A.e()
u=u.x
u===$&&A.e()
w=this.b.c.a
return A.H(v,v,C.o,v,v,new A.P(C.f5.I(C.m.a4(1-Math.abs(C.m.am(u-d*0.2,1)-0.5)*2,0.3,1)),v,v,v,v,v,v,C.bg),v,6,v,new A.a_(w,0,w,0),v,v,v,6)},
$S:3485}
B.cDM.prototype={
$1(d){return d.Y()},
$S:3486}
B.cDp.prototype={
$1(d){return this.a.bcs(d.b)},
$S:3487}
B.cDq.prototype={
$1(d){var w=d.e==="user"?C.o3:C.pR
return new A.lK(d.b,w,d.f,d.as,!1,!1,d.r)},
$S:1175}
B.cDr.prototype={
$2(d,e){return e.e.bk(0,d.e)},
$S:z+6}
B.cDs.prototype={
$1(d){return d.a!=="ai_pending"},
$S:174}
B.cDt.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cDu.prototype={
$2(d,e){return e.e.bk(0,d.e)},
$S:z+6}
B.cDx.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cDy.prototype={
$0(){return new B.Az(this.a,"Not Found",C.zA,new A.ak(Date.now(),0,!1),new A.ak(Date.now(),0,!1))},
$S:z+22}
B.cDz.prototype={
$1(d){var w=d.e==="user"?C.o3:C.pR
return new A.lK(d.b,w,d.f,d.as,!1,!1,d.r)},
$S:1175}
B.cDw.prototype={
$1(d){return d.a!==this.a},
$S:z+1}
B.cDA.prototype={
$2(d,e){return this.a.ehL(d)},
$S:165}
B.cDo.prototype={
$1(d){return J.cI(d,x.N,x.z)},
$S:212}
B.cDj.prototype={
$1(d){return d.a==="ai_pending"},
$S:174}
B.cDi.prototype={
$1(d){return d.a==="ai_pending"},
$S:174}
B.cDm.prototype={
$1(d){return d.a==="ai_pending"},
$S:174}
B.cDn.prototype={
$1(d){return new A.lK(C.k.k(1000*Date.now()),C.pR,d,new A.ak(Date.now(),0,!1),!1,!1,"")},
$S:1176}
B.cDk.prototype={
$1(d){return d.a==="ai_pending"},
$S:174}
B.cDl.prototype={
$1(d){return new A.lK(C.k.k(1000*Date.now()),C.pR,d,new A.ak(Date.now(),0,!1),!1,!1,"")},
$S:1176}
B.cDv.prototype={
$1(d){$.a3.$1("[ChatNotifier]["+this.a.x.k(0)+"] Background sync error: "+A.b(d))},
$S:57}
B.coW.prototype={
$1(d){return d.d},
$S:515}
B.coX.prototype={
$1(d){return d.a},
$S:3490}
B.coY.prototype={
$1(d){var w
if(!d.c){w=this.a
w=w==null?null:w.a
w=d.d==w}else w=!0
return w},
$S:578}
B.coZ.prototype={
$1(d){return d.Y()},
$S:749}
B.coU.prototype={
$1(d){return this.a.t(0,d.a)&&C.c.p(d.c).length!==0},
$S:751}
B.coV.prototype={
$1(d){return C.c.p(d.c)},
$S:3491}
B.hFA.prototype={
$1(d){return D.brP},
$S:z+23}
B.eBi.prototype={
$2(d,e){var w=this,v=null,u=w.a
u.a.toString
u=u.d
u===$&&A.e()
u=u.x
u===$&&A.e()
return A.h_(v,v,v,new B.bS5(v,w.b,w.c,w.d,u*2*3.141592653589793,v),C.be)},
$S:344}
B.cUq.prototype={
$0(){},
$S:0}
B.cUs.prototype={
$2(d,e){var w=null,v=this.a,u=this.b
return new A.a0O(v.c,w,e,!0,"",v.f,v.r,C.zk,w,u===C.c2g,u,1.05,0.5,w,1,w)},
$S:3492}
B.cUr.prototype={
$1(d){return d},
$S:z+2}
B.fq8.prototype={
$0(){var w=this.a
w.f=A.a9d(w.a.d,2)},
$S:0}
B.fq0.prototype={
$0(){var w,v=this.a
v.d=!0
w=v.c
w.toString
v.a.toString
v.f=B.iew(this.b.a,w,2)},
$S:0}
B.fq2.prototype={
$0(){var w,v=this.a
v.e=!0
w=v.c
w.toString
v.a.toString
v.f=B.iew(this.b.a,w,2)},
$S:0}
B.fq1.prototype={
$0(){var w=this.a
w.d=w.e=!1},
$S:0}
B.fq7.prototype={
$0(){var w=this.a
return w.A(new B.fq3(w))},
$S:0}
B.fq3.prototype={
$0(){var w=this.a
w.d=w.e=!1},
$S:0}
B.fq6.prototype={
$4(d,e,f,g){var w,v,u,t=this,s=null,r=t.a,q=r.d||Math.abs(e-t.b)>0.15?1:0,p=A.a([],x.p),o=t.f,n=t.e,m=0
for(;;){w=r.a
w.toString
if(!(m<2))break
v=w.d===m
w=w.c[m]
u=v?n:o
u=A.Oa(new A.dP(w,s,s,s,s,s,s,C.Z,s,1,s,s,s),C.aY,C.a9,!0,u)
p.push(new A.lN(1,C.fY,new A.hk(A.cW(C.bp,new A.zI(new A.Xg(s,s,s,s,s,v,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,C.aX,s,s,s,s),!1,!1,s,!1,!1,new A.il(C.al,s,s,u,s),s),C.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.fq4(r,m),s,s,s,s,s,s,s,s,s,!1,C.aV),s),s));++m}return A.dBp(new B.fq5(r,f,new A.j9(e,0),t.c,t.d),A.G(p,C.l,s,C.i,C.j,0,s,s),C.ahx,q)},
$S:1129}
B.fq5.prototype={
$3(d,e,f){var w=this,v=w.a.a,u=v.z,t=v.x
u=A.ibr(w.c,v.Q,w.e,t,w.d,!1,2,u,e,w.b)
f.toString
return new A.hk(new A.c9(C.aP,null,C.aT,C.o,A.a([u,f],x.p),null),null)},
$S:3493}
B.fq4.prototype={
$0(){var w=this.b,v=this.a.a
if(w!==v.d)v.deL(w)
return null},
$S:0}
B.eBk.prototype={
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
k=A.jf(A.H(d,d,C.o,d,d,new A.P(C.ab.I(1),d,d,A.a5(n/2),A.a([new A.eL(0,C.cs,C.n2.I(0.2*(1-t)),C.tu,0)],x.V),d,d,C.t),d,n,d,d,d,d,d,m),w)
w=a0.y
j=w==null
i=B.iUx(j?C.f9:w)?D.cfA:D.cfC
if(j)w=C.f9
j=A.kL(0,A.H(d,d,C.o,C.a4,d,d,d,d,d,d,d,d,d,d),0)
h=x.p
j=A.a([j,A.dL(d,k,d,d,a0.x?0:q,d,d,d)],h)
if(t>0.05){g=a0.x?0:q
j.push(A.dL(d,A.jf(new A.ao9(1,C.bS3,C.bp,new A.N(m,n,d,d),d),t),d,d,g,d,d,d))}f=A.dL(d,A.y4(C.al,new A.N(m+q,l,A.ifH(d,new A.c9(C.al,d,C.aT,C.o,j,d),t,w,i,new A.v8(l/2,C.E)),d),u*(1+t*0.1)),d,d,o,d,2-r,d)
w=a0.a.c
return A.de(d,d,d,new A.N(a1,26,new A.c9(C.aP,d,C.aT,C.o,A.a([s,f,C.au],h),d),d),!1,d,d,d,!0,!1,d,!1,d,d,d,d,d,d,d,d,d,d,"Switch",d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,a0.gcLU(),d,d,d,d,d,d,d,d,w,d,d,C.aX,d)},
$S:348}
B.eBh.prototype={
$0(){var w,v,u,t=this.a
if(t.c!=null)t.A(new B.eBg())
w=t.e
v=!1
if(w.gbXY()){t=t.f
t===$&&A.e()
u=t.x
u===$&&A.e()
if(u<=0.001){t=t.Q
t===$&&A.e()
t=t!==C.hS}else t=v}else t=v
if(t)w.rd()},
$S:0}
B.eBg.prototype={
$0(){},
$S:0}
B.eBf.prototype={
$2(d,e){return d+e.w},
$S:z+30}
B.eBe.prototype={
$1(d){return new B.AU(d.c,d.d,new B.eBd(this.a,d),!0,d.r,d.w,d.a)},
$S:z+2}
B.eBd.prototype={
$0(){this.b.e.$0()
this.a.aG7(0)},
$S:0}
B.eBb.prototype={
$1(d){var w=this.a
return w.A(new B.eB4(w))},
$S:72}
B.eB4.prototype={
$0(){return this.a.e=!0},
$S:0}
B.eBc.prototype={
$1(d){var w=this.a
return w.A(new B.eB3(w))},
$S:112}
B.eB3.prototype={
$0(){return this.a.e=!1},
$S:0}
B.eBa.prototype={
$0(){var w=this.a
return w.A(new B.eB5(w))},
$S:0}
B.eB5.prototype={
$0(){return this.a.e=!1},
$S:0}
B.eB8.prototype={
$1(d){var w=this.a
return w.A(new B.eB7(w))},
$S:55}
B.eB7.prototype={
$0(){return this.a.d=!0},
$S:0}
B.eB9.prototype={
$1(d){var w=this.a
return w.A(new B.eB6(w))},
$S:53}
B.eB6.prototype={
$0(){return this.a.d=!1},
$S:0}
B.cUt.prototype={
$1(d){var w=this
return new B.aob(w.f.$1(d),w.e,w.c,w.d,w.a,w.b,null)},
$S:z+31}
B.cUv.prototype={
$0(){J.ber(this.a.bs())},
$S:0}
B.cUu.prototype={
$1(d){var w=this
return new B.agV(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,null)},
$S:z+32}
B.eBl.prototype={
$1(d){return this.a.abi()},
$S:309};(function aliases(){var w=B.bcr.prototype
w.dHN=w.q
w=B.bcs.prototype
w.dHO=w.q
w=B.bb9.prototype
w.dGh=w.q
w=B.bbb.prototype
w.dGj=w.q
w=B.bb8.prototype
w.dGg=w.q
w=B.bbc.prototype
w.dGk=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_1,u=a._instance_1u
w(B.Ri.prototype,"gbx","ap",0)
var t
w(t=B.aYS.prototype,"geEJ","aFq",7)
w(t,"gdWk","Zr",5)
w(t,"gcQR","biO",0)
w(t=B.b8K.prototype,"geTw","eTx",0)
w(t,"gdYY","dYZ",0)
v(B,"jmP","iPO",21)
w(t=B.a_H.prototype,"gbx","ap",18)
u(t,"gdWf","dWg",19)
w(t,"ge61","e62",0)
w(t,"gdVP","ayA",0)
u(B.bp1.prototype,"gfw7","cge",24)
u(t=B.b6U.prototype,"getF","etG",26)
u(t,"getJ","etK",27)
u(t,"getH","etI",28)
w(B.b17.prototype,"gcLU","ebe",0)
w(t=B.b15.prototype,"geTL","eTM",0)
w(t,"gdXs","dXt",0)
u(t,"gdRs","dRt",29)
w(B.b18.prototype,"ge1m","abi",5)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.A,[B.IK,B.av1,B.ajW,B.mK,B.ajX,B.cmA,B.fS,B.beS,B.ru,B.dEc,B.a7Y,B.cDh,B.all,B.La,B.abN,B.Kp,B.dkY,B.Az,B.OS,B.coT,B.ak4,B.bp1])
u(B.bOt,A.a6O)
u(B.Ri,B.bOt)
v(A.qA,[B.dpn,B.dpo,B.dpl,B.dpm,B.hVG,B.dPR,B.cmo,B.cmp,B.cmn,B.cml,B.cmm,B.cmt,B.cmu,B.cmv,B.cmw,B.cmr,B.cms,B.cmj,B.cmk,B.cmx,B.cmy,B.hFp,B.cno,B.cnn,B.dEe,B.hHD,B.cDO,B.cDP,B.cDR,B.cDS,B.hHF,B.d1W,B.d1V,B.ees,B.edS,B.edG,B.edL,B.ee_,B.edZ,B.eel,B.een,B.eej,B.eek,B.edW,B.eeh,B.eei,B.ee6,B.ee4,B.ee5,B.edm,B.edA,B.edo,B.edu,B.edv,B.edD,B.edB,B.d1N,B.daw,B.dax,B.fDX,B.cDM,B.cDp,B.cDq,B.cDs,B.cDt,B.cDx,B.cDz,B.cDw,B.cDo,B.cDj,B.cDi,B.cDm,B.cDn,B.cDk,B.cDl,B.cDv,B.coW,B.coX,B.coY,B.coZ,B.coU,B.coV,B.hFA,B.cUr,B.fq6,B.fq5,B.eBe,B.eBb,B.eBc,B.eB8,B.eB9,B.cUt,B.cUu,B.eBl])
u(B.bC0,A.dF)
v(A.x0,[B.hVF,B.dPQ,B.dPS,B.cmq,B.cDQ,B.cDN,B.hHE,B.eeq,B.edP,B.edH,B.edI,B.edJ,B.edK,B.edQ,B.edR,B.edN,B.edO,B.edY,B.edX,B.edT,B.edU,B.edV,B.ee0,B.ee1,B.ee2,B.ee3,B.ee8,B.ee9,B.eea,B.eeb,B.eec,B.eed,B.eee,B.eef,B.ee7,B.edw,B.edx,B.edy,B.edz,B.edn,B.edq,B.edr,B.eds,B.edt,B.edE,B.edF,B.edC,B.eeo,B.eep,B.ffz,B.day,B.eeT,B.fDV,B.fDT,B.fDU,B.fDS,B.cDy,B.cUq,B.fq8,B.fq0,B.fq2,B.fq1,B.fq7,B.fq3,B.fq4,B.eBh,B.eBg,B.eBd,B.eB4,B.eB3,B.eBa,B.eB5,B.eB7,B.eB6,B.cUv])
v(A.GQ,[B.aDn,B.bxd,B.biw,B.a_J,B.feZ,B.cyb,B.cUp,B.aKb,B.aod])
v(A.AB,[B.cmz,B.cmB,B.dEd,B.d1X,B.eer,B.edM,B.eem,B.eeg,B.edp,B.ffB,B.ffA,B.fDW,B.fDY,B.cDr,B.cDu,B.cDA,B.eBi,B.cUs,B.eBk,B.eBf])
v(A.X,[B.beX,B.azn,B.a5z,B.b7a,B.c88,B.Yw,B.c9k,B.aLP,B.bxx,B.b2S,B.c0r,B.bS6,B.bpS,B.aK0,B.bpJ,B.bpN,B.bpO,B.aob,B.bXB])
u(B.aFR,A.CT)
u(B.aYS,A.AD)
u(B.aqh,A.CU)
v(A.a0,[B.aV_,B.aV0,B.aa_,B.aK6,B.b6T,B.aK7,B.aK4,B.AU,B.aKa,B.agV])
v(A.ab,[B.bcr,B.bcs,B.bb9,B.bXF,B.b6U,B.bbb,B.bb8,B.bXD,B.bXI,B.bbc])
u(B.b8K,B.bcr)
u(B.cbv,B.bcs)
u(B.a_H,A.jt)
u(B.bXE,B.bb9)
u(B.bS5,A.P9)
u(B.b17,B.bbb)
u(B.b15,B.bb8)
u(B.b18,B.bbc)
w(B.bcr,A.f4)
w(B.bcs,A.f4)
w(B.bb9,A.f4)
w(B.bbb,A.hR)
w(B.bb8,A.f4)
w(B.bbc,A.f4)})()
A.yi(b.typeUniverse,JSON.parse('{"Ri":{"bk":["a4<~>","~"]},"bC0":{"dF":["Ri","~"],"aP":["Ri","a4<~>","~","~"],"cg":["~"],"b4":["a4<~>"],"cm":["a4<~>"],"bE":[],"cu":["a4<~>"],"bX":[],"aP.0":"Ri","aP.1":"a4<~>","aP.2":"~","aP.3":"~","dF.0":"Ri","dF.1":"~","b4.0":"a4<~>","cg.0":"~"},"bOt":{"bk":["a4<~>","~"]},"beX":{"X":[],"n":[]},"aFR":{"a0":[],"n":[]},"azn":{"X":[],"n":[]},"aYS":{"ab":["aFR"]},"a5z":{"X":[],"n":[]},"b7a":{"X":[],"n":[]},"c88":{"X":[],"n":[]},"Yw":{"X":[],"n":[]},"c9k":{"X":[],"n":[]},"aLP":{"X":[],"n":[]},"bxx":{"X":[],"n":[]},"aqh":{"a0":[],"n":[]},"b2S":{"X":[],"n":[]},"c0r":{"X":[],"n":[]},"bS6":{"X":[],"n":[]},"aV_":{"a0":[],"n":[]},"aV0":{"a0":[],"n":[]},"b8K":{"ab":["aV_"]},"cbv":{"ab":["aV0"]},"a_H":{"jt":["OS"],"bk":["OS","OS"]},"aa_":{"a0":[],"n":[]},"bXE":{"ab":["aa_"]},"bS5":{"bq":[]},"bpS":{"X":[],"n":[]},"aK0":{"X":[],"n":[]},"bpJ":{"X":[],"n":[]},"bpN":{"X":[],"n":[]},"bpO":{"X":[],"n":[]},"aK6":{"a0":[],"n":[]},"b6T":{"a0":[],"n":[]},"bXF":{"ab":["aK6"]},"b6U":{"ab":["b6T"]},"aK7":{"a0":[],"n":[]},"b17":{"ab":["aK7"]},"aK4":{"a0":[],"n":[]},"b15":{"ab":["aK4"]},"AU":{"a0":[],"n":[]},"bXD":{"ab":["AU"]},"aob":{"X":[],"n":[]},"bXB":{"X":[],"n":[]},"aKa":{"a0":[],"n":[]},"agV":{"a0":[],"n":[]},"bXI":{"ab":["aKa"]},"b18":{"ab":["agV"]}}'))
var y={c:"ai_chat_home_prompt_learning_download_batch",h:"ai_chat_home_prompt_settings_notifications_set"}
var x=(function rtii(){var w=A.a9
return{_:w("yn"),cm:w("eK<bk<a4<~>,~>,a4<~>,A?,A?>"),a:w("vI"),cq:w("f_<a4<~>,~>"),r:w("ajW"),k:w("fS"),cb:w("beS"),a3:w("TX"),e:w("uE"),fo:w("ZU"),Q:w("bf0"),dw:w("a75"),G:w("ak4"),T:w("nd"),v:w("Ok"),o:w("a4<kE>"),U:w("Kg"),q:w("Hu"),g_:w("a7X"),aG:w("yO"),b:w("a7Y"),y:w("lK"),B:w("a_H"),f_:w("a_I"),K:w("uM"),ba:w("Az"),u:w("OS"),E:w("all"),L:w("lw"),W:w("UX"),gB:w("hs<n,n>"),ad:w("aa<h>"),F:w("aa<~>"),C:w("aaD"),R:w("xm<Ah,vV>"),bo:w("xm<yn,uM>"),bK:w("J<ajX>"),ar:w("J<fS>"),eA:w("J<ra>"),Y:w("J<yz>"),V:w("J<eL>"),gb:w("J<lK>"),bR:w("J<Uu>"),bp:w("J<Az>"),fY:w("J<AU>"),eO:w("J<bf>"),fd:w("J<La>"),t:w("J<K<h,@>>"),bY:w("J<abN>"),dP:w("J<IK>"),fP:w("J<vm>"),s:w("J<h>"),cr:w("J<oF<ai>>"),p:w("J<n>"),dC:w("J<r>"),dS:w("J<bq?>"),d4:w("J<h?>"),gk:w("B0"),cW:w("u<ra>"),fO:w("u<K<h,@>>"),eB:w("u<IK>"),dy:w("u<h>"),j:w("u<@>"),I:w("aA<h,@>"),P:w("K<h,@>"),f:w("K<@,@>"),eE:w("K<h,A?>"),he:w("E<h,KU>"),g4:w("cR"),w:w("rv"),h:w("QH"),bb:w("W6"),a4:w("a2l"),gj:w("Lr"),fL:w("cq"),aU:w("A"),ep:w("a2P"),d:w("WQ"),dT:w("IK"),fQ:w("Ri"),fA:w("+deckId,deckName,error(h?,h?,h?)"),bG:w("ar"),em:w("vk"),fU:w("Xh"),bH:w("qh"),N:w("h"),aL:w("Ml"),n:w("lW"),M:w("av1"),fs:w("oF<ai>"),dJ:w("bQ<V>"),Z:w("bQ<ai>"),O:w("aF<h>"),c:w("aw<ak>"),D:w("aw<h>"),J:w("aw<I>"),dz:w("aw<r>"),eh:w("aw<ak?>"),l:w("aw<h?>"),ev:w("aw<r?>"),eR:w("aE<ru>"),m:w("n"),b2:w("a5L"),gV:w("EF"),x:w("I"),i:w("ai"),z:w("@"),S:w("r"),ac:w("ra?"),cR:w("a7Y?"),g:w("u<@>?"),c9:w("K<h,@>?"),fF:w("K<@,@>?"),ec:w("cR?"),X:w("A?"),dE:w("ar?"),A:w("h?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bja=new B.fS("memory.review.start",!0,"\u5df2\u51c6\u5907\u8bb0\u5fc6\u590d\u4e60\uff0c\u8bf7\u8fdb\u5165\u8bb0\u5fc6\u6a21\u5757\u5f00\u59cb\u3002")
D.iI=new B.aDn(0,"low")
D.nN=new B.aDn(1,"medium")
D.HF=new B.aDn(2,"high")
D.bju=new A.ak2(401,"",null,null)
D.eRY=new B.feZ(0,"circular")
D.c2f=new B.aa_(20,2.4,null)
D.bjE=new A.da(C.bZ,null,null,D.c2f,null)
D.eQB=new B.cyb(0,"topRight")
D.bo6=new A.a_s(1,"oldest")
D.bo7=new A.a_s(3,"titleZA")
D.bp0=new A.aZ(0,400,48,1/0)
D.bp6=new A.aZ(28,1/0,28,1/0)
D.brP=new B.ak4()
D.CK=new B.a_J(0,"global")
D.afs=new B.a_J(1,"note")
D.aft=new B.a_J(2,"bookReader")
D.afu=new B.a_J(3,"onlineReader")
D.bJt=new B.a_J(4,"foliateReader")
D.y3=new B.a_J(5,"pdf")
D.Jk=new B.biw(0,"standard")
D.pS=new B.biw(1,"readerCompact")
D.dgE=w([],x.bp)
D.bJu=new B.OS(C.zA,!1,!1,!1,null,null,null,D.dgE)
D.agI=new A.a6(0.14901960784313725,1,1,1,C.A)
D.bUZ=new A.lv(0.455,0.03,0.515,0.955)
D.ai6=new A.ca(38e4)
D.aim=new A.a_(0,0,10,0)
D.aiv=new A.a_(14,12,14,12)
D.XR=new A.a_(18,16,18,12)
D.Dr=new A.a_(20,16,20,20)
D.aiL=new A.a_(28,28,28,28)
D.aiQ=new A.a_(8,12,8,0)
D.eR8=new B.cUp(0,"circle")
D.ak_=new B.aa_(18,2.2,null)
D.c2h=new B.aKb(0,"top")
D.c2i=new B.aKb(1,"center")
D.ak0=new B.aKb(2,"bottom")
D.ak1=new B.aod(0,"success")
D.DQ=new B.aod(1,"error")
D.eR9=new B.aod(2,"info")
D.ak2=new B.aod(3,"warning")
D.c3K=new A.aX(57423,"MaterialSymbolsOutlined","material_symbols_icons",!0)
D.c3O=new A.aX(58835,"MaterialSymbolsOutlined","material_symbols_icons",!1)
D.c4S=new A.aX(58839,"MaterialSymbolsOutlined","material_symbols_icons",!1)
D.c5b=new A.aX(58075,"MaterialSymbolsOutlined","material_symbols_icons",!1)
D.alZ=new A.aJ(58877,"MaterialIcons",null,!1)
D.an3=new A.aR(C.dP,null,null,null,null)
D.cfz=new A.mW(1,C.n4,20,4,0.01,1.5707963267948966,0.5,0,1.1,1.2)
D.afV=new A.a6(0.1,1,1,1,C.A)
D.cfA=new A.mW(1,D.afV,20,0,0.01,135,2,0,1.15,1.5)
D.cfC=new A.mW(1,D.afV,10,0,0.01,120,2,0,1.15,1.5)
D.bPQ=new A.a6(0.12,1,1,1,C.A)
D.cfD=new A.mW(1,D.bPQ,10,10,0,135,0.7,0.4,0.7,1.2)
D.cfN=new A.mW(1,C.n4,25,6,0.01,1.5707963267948966,0.5,0,1.15,1.3)
D.cfO=new A.mW(1,C.n4,15,3,0.01,1.5707963267948966,0.5,0,1.1,1.2)
D.aoR=new A.v8(20,C.E)
D.d3S=w(["Focus","Search"],x.s)
D.d5S=w(["\u51fd\u6570","\u5fae\u79ef\u5206","\u5bfc\u6570","\u79ef\u5206","\u6781\u9650","\u7ebf\u6027\u4ee3\u6570","\u77e9\u9635","\u5411\u91cf","\u6982\u7387","\u7edf\u8ba1","\u51e0\u4f55","\u4ee3\u6570","\u6570\u5217","\u4e09\u89d2","\u4e0d\u7b49\u5f0f","\u65b9\u7a0b","\u9ad8\u4e2d\u6570\u5b66","\u521d\u4e2d\u6570\u5b66","math","calculus","algebra","geometry","linear algebra","probability","statistics","derivative","integral","equation"],x.s)
D.daA=w(["\u521b\u5efa\u8bb0\u5fc6\u5361\u7247","\u65b0\u5efa\u8bb0\u5fc6\u5361\u7247","\u521b\u5efa\u5361\u7247","\u65b0\u5efa\u5361\u7247","flashcard","memory card","create a flashcard","create flashcard"],x.s)
D.ayk=w(["problem_retrieve","practice_session_start_signal"],x.s)
D.e1i=new B.ru("memory_card_create","memory.card.create","ai_chat_home_prompt_memory_card_create",10)
D.e19=new B.ru("memory_deck_create","memory.deck.create","ai_chat_home_prompt_memory_deck_create",20)
D.e1j=new B.ru("memory_review_start","memory.review.start","ai_chat_home_prompt_memory_review_start",30)
D.e1b=new B.ru("memory_stats_get","memory.stats.get","ai_chat_home_prompt_memory_stats_get",35)
D.e1h=new B.ru("memory_cards_count","memory.cards.count","ai_chat_home_prompt_memory_cards_count",38)
D.e1d=new B.ru("memory_decks_list","memory.decks.list","ai_chat_home_prompt_memory_decks_list",39)
D.e1f=new B.ru("notes_append","notes.note.append","ai_chat_home_prompt_notes_append",40)
D.e1g=new B.ru("practice_start","problembank.practice.start","ai_chat_home_prompt_practice_start",50)
D.e1c=new B.ru("library_progress","library.book.reading_progress.set","ai_chat_home_prompt_library_progress_set",60)
D.e1e=new B.ru("library_books_list","library.books.list","ai_chat_home_prompt_library_books_list",62)
D.e1a=new B.ru("learning_batch_download","learning.download.batch_start",y.c,70)
D.e18=new B.ru("settings_notifications","settings.notifications.set",y.h,80)
D.ddc=w([D.e1i,D.e19,D.e1j,D.e1b,D.e1h,D.e1d,D.e1f,D.e1g,D.e1c,D.e1e,D.e1a,D.e18],A.a9("J<ru>"))
D.dpe=w(["\u7ec3\u4e60","\u5237\u9898","\u505a\u9898","\u51fa\u9898","\u9898\u5e93","\u5f00\u59cb\u7ec3\u4e60","practice","quiz","question bank","start practice"],x.s)
D.e5J={"memory.card.create":0,"memory.deck.create":1,"memory.review.start":2,"memory.stats.get":3,"memory.cards.count":4,"memory.decks.list":5,"settings.memory.daily_limits.set":6,"notes.note.create":7,"notes.note.append":8,"notes.note.rename":9,"notes.note.delete":10,"problembank.practice.start":11,"problembank.practice.end_current":12,"library.book.favorite.set":13,"library.book.reading_progress.set":14,"library.book.filters.set":15,"library.books.list":16,"learning.download.start":17,"learning.download.batch_start":18,"learning.download.clear_all":19,"settings.ai.chat_model.set":20,"settings.notifications.set":21,"settings.sync.set":22,"settings.notes_sync.set":23,"settings.theme.set":24,"settings.reminder.set":25,"settings.storage.path.set":26}
D.bj6=new B.mK(D.iI,"\u521b\u5efa\u8bb0\u5fc6\u5361\u7247")
D.biZ=new B.mK(D.iI,"\u521b\u5efa\u8bb0\u5fc6\u724c\u7ec4")
D.biP=new B.mK(D.iI,"\u5f00\u59cb\u8bb0\u5fc6\u590d\u4e60")
D.bj4=new B.mK(D.iI,"\u67e5\u770b\u8bb0\u5fc6\u7edf\u8ba1")
D.biU=new B.mK(D.iI,"\u7edf\u8ba1\u8bb0\u5fc6\u5361\u7247\u6570\u91cf")
D.bj8=new B.mK(D.iI,"\u5217\u51fa\u8bb0\u5fc6\u724c\u7ec4")
D.biT=new B.mK(D.nN,"\u8c03\u6574\u8bb0\u5fc6\u6bcf\u65e5\u4e0a\u9650")
D.biN=new B.mK(D.iI,"\u521b\u5efa\u7b14\u8bb0")
D.biM=new B.mK(D.iI,"\u8ffd\u52a0\u7b14\u8bb0\u5185\u5bb9")
D.bj3=new B.mK(D.iI,"\u91cd\u547d\u540d\u7b14\u8bb0")
D.bj5=new B.mK(D.HF,"\u5220\u9664\u7b14\u8bb0")
D.bj0=new B.mK(D.iI,"\u5f00\u59cb\u9898\u5e93\u7ec3\u4e60")
D.biR=new B.mK(D.nN,"\u7ed3\u675f\u5f53\u524d\u7ec3\u4e60")
D.biS=new B.mK(D.iI,"\u8bbe\u7f6e\u56fe\u4e66\u6536\u85cf\u72b6\u6001")
D.bj2=new B.mK(D.iI,"\u8bbe\u7f6e\u9605\u8bfb\u8fdb\u5ea6")
D.biY=new B.mK(D.iI,"\u8bbe\u7f6e\u56fe\u4e66\u7b5b\u9009")
D.biO=new B.mK(D.iI,"\u5217\u51fa\u4e66\u5e93\u56fe\u4e66")
D.biX=new B.mK(D.iI,"\u4e0b\u8f7d\u7ae0\u8282")
D.biV=new B.mK(D.nN,"\u6279\u91cf\u4e0b\u8f7d\u7ae0\u8282")
D.biQ=new B.mK(D.HF,"\u6e05\u7a7a\u5168\u90e8\u4e0b\u8f7d")
D.bj7=new B.mK(D.nN,"\u5207\u6362 AI \u804a\u5929\u6a21\u578b")
D.biL=new B.mK(D.nN,"\u8c03\u6574\u901a\u77e5\u8bbe\u7f6e")
D.biW=new B.mK(D.nN,"\u8c03\u6574\u540c\u6b65\u8bbe\u7f6e")
D.bj_=new B.mK(D.nN,"\u8c03\u6574\u7b14\u8bb0\u540c\u6b65\u8bbe\u7f6e")
D.biK=new B.mK(D.nN,"\u5207\u6362\u4e3b\u9898\u6a21\u5f0f")
D.biJ=new B.mK(D.iI,"\u8bbe\u7f6e\u5b66\u4e60\u63d0\u9192\u65f6\u95f4")
D.bj1=new B.mK(D.HF,"\u4fee\u6539\u6570\u636e\u5b58\u50a8\u8def\u5f84")
D.tj=new A.ag(D.e5J,[D.bj6,D.biZ,D.biP,D.bj4,D.biU,D.bj8,D.biT,D.biN,D.biM,D.bj3,D.bj5,D.bj0,D.biR,D.biS,D.bj2,D.biY,D.biO,D.biX,D.biV,D.biQ,D.bj7,D.biL,D.biW,D.bj_,D.biK,D.biJ,D.bj1],A.a9("ag<h,mK>"))
D.e0l=new A.abw(C.cs,4)
D.FL=new B.bxd(0,"text")
D.aMq=new B.bxd(1,"latex")
D.wy=new A.ly("flutter_tts",C.ec,null)
D.ezR=new B.aV0(null)
D.e6V=new A.F(C.kG,D.ezR,null)
D.eeC=new A.Ns(null,null,"\u5b58\u5728\u591a\u4e2a\u540c\u540d\u724c\u7ec4\uff0c\u8bf7\u6539\u7528 deckId\u3002")
D.a4D=new A.Ns(null,null,null)
D.eeO=new A.Ns(null,null,"\u5339\u914d\u5230\u591a\u4e2a\u724c\u7ec4\uff0c\u8bf7\u63d0\u4f9b\u66f4\u7cbe\u786e\u7684 deckName \u6216 deckId\u3002")
D.ei0=new A.cr(C.Ia,C.E)
D.ezy=new A.dP("...",null,null,null,null,null,null,null,null,null,null,null,null)
D.dn0=w([D.ak_,C.cS,D.ezy],x.p)
D.ei2=new A.lQ(C.aI,C.i,C.D,C.l,null,C.n,null,0,D.dn0,null)
D.eny=new A.atB(1,300,24)
D.ev8=new A.aI(!0,C.WP,null,null,null,null,13,C.av,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ews=new A.aI(!0,C.ab,null,null,null,null,13,C.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exV=new A.aI(!0,C.ab,null,null,null,null,15,C.av,null,-0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDQ=new A.aF("chat-shell-sidebar",x.O)
D.eDY=new A.aF("chat-shell-more-button",x.O)
D.eEj=new A.aF("chat-shell-practice-card",x.O)
D.eEk=new A.aF("chat-shell-history-button",x.O)
D.eEx=new A.aF("chat-shell-close-button",x.O)
D.eEF=new A.aF("chat-shell-agent-plan-card",x.O)
D.eEI=new A.aF("chat-shell-header",x.O)
D.eES=new A.aF("chat-shell-empty-state",x.O)
D.eEU=new A.aF("chat-shell-new-chat-button",x.O)
D.eFw=new A.aF("chat-shell-new-chat-tile",x.O)
D.eFK=new A.aF("chat-shell-back-button",x.O)
D.eFL=new A.aF("thinking-block-scroll-area",x.O)
D.eFO=new A.aF("ai-glass-workspace-stage",x.O)
D.eFW=new A.aF("glass_toast_dismissible",x.O)
D.eFZ=new A.aF("chat-shell-main-panel",x.O)
D.eG4=new A.aF("chat-shell-header-title",x.O)
D.eGs=new A.aF("chat-shell-processing-card",x.O)
D.eHa=new A.aF("chat-shell-model-button",x.O)
D.eHk=new A.aw(!0,"Created by AI Agent",x.D)
D.eHs=new A.aw(!0,"ai_agent",x.l)})();(function staticFields(){$.beQ=A.D(x.N,A.a9("ak"))
$.iWv=A.a(["\\frac","\\sqrt","\\sum","\\int","\\prod","\\lim","\\infty","\\alpha","\\beta","\\gamma","\\delta","\\theta","\\pi","\\sigma","\\omega","\\partial","\\nabla","\\cdot","\\times","\\div","\\pm","\\leq","\\geq","\\neq","\\approx","\\equiv","\\in","\\subset","\\cup","\\cap","\\rightarrow","\\leftarrow","\\Rightarrow","\\Leftarrow","\\forall","\\exists","\\begin","\\end","\\left","\\right","\\mathbf","\\mathrm","\\mathcal","\\text","\\binom","\\vec","\\hat","\\bar","\\dot","\\ddot"],x.s)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"jV1","iah",()=>{var v=null
return new B.bC0(v,v,"ragServiceProvider",v,v,v,!0)})
w($,"jXx","iMa",()=>A.dM(new B.hVG(),null,!1,null,null,x.M))
w($,"jym","ixP",()=>A.a1("^(?:\u8bf7)?(?:\u5e2e\u6211)?(?:\u521b\u5efa|\u65b0\u5efa|\u751f\u6210|\u505a|\u5efa\u7acb|\u5236\u4f5c|create|make)(?:\u4e00\u5f20|\u4e00\u4e2a|\u4e00\u6761)?(?:\u8bb0\u5fc6\u5361\u7247|\u5361\u7247|\u95ea\u5361|flashcard|memory card)\\s*[:\uff1a-]?\\s*",!1,!1,!1,!1))
w($,"jLJ","iFF",()=>A.dM(new B.hFp(),null,!1,null,null,x.r))
w($,"jNx","i9z",()=>A.dM(new B.hHD(),null,!1,null,null,x.b))
w($,"jNz","iGB",()=>A.dM(new B.hHF(),null,!1,null,null,x.E))
w($,"jBs","i81",()=>A.a1("\\$\\$(.+?)\\$\\$",!0,!0,!0,!1))
w($,"jBt","i82",()=>A.a1("(?<!\\$)\\$(?!\\$)(.+?)(?<!\\$)\\$(?!\\$)",!0,!1,!1,!1))
w($,"jNy","EW",()=>C.V6.$3$1(B.jmP(),x.B,x.u,A.a9("Kp")))
w($,"jLT","iFK",()=>A.dM(new B.hFA(),null,!1,null,null,x.G))})()};
(a=>{a["IyIBQNtwoSYPv6ej5TGfw4laFSM="]=a.current})($__dart_deferred_initializers__);