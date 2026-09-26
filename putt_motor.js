// Motor del putt sobre la superficie LiDAR dels greens (GREEN_SURFACE). El fan servir
// index.html (mapa GPS) i putt.html (app de putt).
// La bola rodola: gravetat del pendent x 5/7 i fregament constant que surt de l'Stimpmeter
// (la bola en surt a 1,83 m/s i roda stimp x 0,3048 m en pla). Es busca la direccio i la forca
// perque passi pel centre del forat i, si no hi entres, s'aturés PUTT_PASSA m mes enlla.
// Fora del contorn del green (collar, avantgreen) la gespa es mes alta: hi roda com si l'Stimp fos
// PUTT_AV vegades el del green (estimat, sense calibrar). La transicio es de mig metre (malla de 0,5 m).
const PUTT_G=9.81*5/7, PUTT_V0=1.83, PUTT_PASSA=0.40, PUTT_DT=0.004, PUTT_AV=0.6;

// Bola d'exemple en obrir un green: a l'entrada, si en te. Els greens de practiques no en tenen
// (no hi ha sortida ni direccio d'arribada): a mig cami del centre al punt mes al sud del contorn.
function puttBolaExemple(g){
  if(g.front) return [g.front.lat,g.front.lon];
  const s=g.contour.reduce((a,p)=>p[0]<a[0]?p:a);
  return [g.middle.lat+(s[0]-g.middle.lat)*0.6,g.middle.lon+(s[1]-g.middle.lon)*0.6];
}
const puttEN=(S,ll)=>[(ll[1]-S.o[1])*S.k[0],(ll[0]-S.o[0])*S.k[1]];
const puttLL=(S,p)=>[S.o[0]+p[1]/S.k[1],S.o[1]+p[0]/S.k[0]];
function puttBilin(S,a,x,y){
  const fx=(x-S.e0)/S.pas,fy=(y-S.n0)/S.pas,n=S.n;
  const i=Math.max(0,Math.min(n-2,Math.floor(fx))),j=Math.max(0,Math.min(n-2,Math.floor(fy)));
  const u=Math.min(1,Math.max(0,fx-i)),v=Math.min(1,Math.max(0,fy-j));
  return (a[j*n+i]*(1-u)+a[j*n+i+1]*u)*(1-v)+(a[(j+1)*n+i]*(1-u)+a[(j+1)*n+i+1]*u)*v;
}
const puttDins=(S,x,y)=>x>S.e0+1&&x<S.e1-1&&y>S.n0+1&&y<S.n1-1;
function puttAlGreen(pol,x,y){
  let c=false;
  for(let i=0,j=pol.length-1;i<pol.length;j=i++){
    const [xi,yi]=pol[i],[xj,yj]=pol[j];
    if((yi>y)!==(yj>y)&&x<(xj-xi)*(y-yi)/(yj-yi)+xi) c=!c;
  }
  return c;
}
function puttRoda(S,b,ang,v0,af0,guarda){
  let x=b[0],y=b[1],vx=v0*Math.cos(ang),vy=v0*Math.sin(ang),llarg=0,t=0;
  const pts=[[x,y,0,vx,vy]],cami=guarda?[[x,y]]:null,n=S.n,gx=S.gx,gy=S.gy,mg=S.mg,kav=1/PUTT_AV-1;
  while(t<40){
    // interpolacio bilineal (com puttBilin) dels pendents i, si n'hi ha, de la mascara del green:
    // fregament af0 a dins, af0 / PUTT_AV fora, i entremig la fraccio de green
    const qx=(x-S.e0)/S.pas,qy=(y-S.n0)/S.pas;
    const i=Math.max(0,Math.min(n-2,Math.floor(qx))),j=Math.max(0,Math.min(n-2,Math.floor(qy)));
    const u=Math.min(1,Math.max(0,qx-i)),v=Math.min(1,Math.max(0,qy-j));
    const k=j*n+i,w00=(1-u)*(1-v),w01=u*(1-v),w10=(1-u)*v,w11=u*v;
    const bl=a=>a[k]*w00+a[k+1]*w01+a[k+n]*w10+a[k+n+1]*w11;
    const af=mg?af0*(1+kav*(1-bl(mg))):af0;
    const ax=-PUTT_G*bl(gx),ay=-PUTT_G*bl(gy),sp=Math.hypot(vx,vy);
    if(sp<0.015&&Math.hypot(ax,ay)<af) break;
    const fx=sp>1e-6?-af*vx/sp:0,fy=sp>1e-6?-af*vy/sp:0;
    const nvx=vx+(ax+fx)*PUTT_DT,nvy=vy+(ay+fy)*PUTT_DT;
    if(sp<0.3&&nvx*vx+nvy*vy<0&&Math.hypot(ax,ay)<af) break;
    vx=nvx;vy=nvy;
    const dx=vx*PUTT_DT,dy=vy*PUTT_DT;
    x+=dx;y+=dy;llarg+=Math.hypot(dx,dy);t+=PUTT_DT;
    pts.push([x,y,llarg,vx,vy]);
    if(guarda&&pts.length%5===0) cami.push([x,y]);
    if(!puttDins(S,x,y)) break;
  }
  if(guarda) cami.push([x,y]);
  return {pts,llarg,cami};
}
function puttMesura(r,h){
  let best=Infinity,k=0;
  for(let i=0;i<r.pts.length;i++){const d=Math.hypot(r.pts[i][0]-h[0],r.pts[i][1]-h[1]);if(d<best){best=d;k=i;}}
  const p=r.pts[k];let vx=p[3],vy=p[4];
  if(Math.hypot(vx,vy)<1e-4&&k>0){vx=p[0]-r.pts[k-1][0];vy=p[1]-r.pts[k-1][1];}
  const cr=vx*(h[1]-p[1])-vy*(h[0]-p[0]);
  return {lat:Math.sign(cr)*best,passa:k===r.pts.length-1?-best:r.llarg-p[2],vForat:Math.hypot(p[3],p[4])};
}
function puttForca(S,b,h,ang,af){
  let lo=0.05,hi=7;
  for(let it=0;it<26;it++){const mid=(lo+hi)/2;if(puttMesura(puttRoda(S,b,ang,mid,af,false),h).passa<PUTT_PASSA)lo=mid;else hi=mid;}
  const v=(lo+hi)/2;
  return {v,m:puttMesura(puttRoda(S,b,ang,v,af,false),h)};
}
function puttResol(S,b,h,af){
  const dir=Math.atan2(h[1]-b[1],h[0]-b[0]),prova=[];
  for(let k=-16;k<=16;k++){const ang=dir+k*2*Math.PI/180;prova.push({ang,...puttForca(S,b,h,ang,af)});}
  let millor=null;
  for(let i=0;i<prova.length-1;i++){
    const a=prova[i],c=prova[i+1];
    if(Math.sign(a.m.lat)!==Math.sign(c.m.lat)&&Math.abs(a.m.lat)<1.5&&Math.abs(c.m.lat)<1.5){
      const dev=Math.abs((a.ang+c.ang)/2-dir);
      if(!millor||dev<millor.dev) millor={a,c,dev};
    }
  }
  if(!millor) return null;
  let {a,c}=millor;
  for(let it=0;it<22;it++){
    const ang=(a.ang+c.ang)/2,f={ang,...puttForca(S,b,h,ang,af)};
    if(Math.sign(f.m.lat)===Math.sign(a.m.lat)) a=f; else c=f;
  }
  const s=Math.abs(a.m.lat)<Math.abs(c.m.lat)?a:c;
  return {...s,cami:puttRoda(S,b,s.ang,s.v,af,true).cami};
}

// Superficie d'un green, descodificada (Int16 base64 -> metres i pendents) i desada a la cache
const puttCache={};
function puttSuperficie(camp,n){
  const s=typeof GREEN_SURFACE!=='undefined'&&GREEN_SURFACE[camp]&&GREEN_SURFACE[camp][n];
  if(!s) return null;
  const clau=camp+'|'+n;
  if(!puttCache[clau]){
    const dec=b=>{const bin=atob(b),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);return new Int16Array(u.buffer);};
    const z=dec(s.z),gx=dec(s.gx),gy=dec(s.gy),N=s.n*s.n;
    const S={...s,z:new Float32Array(N),gx:new Float32Array(N),gy:new Float32Array(N)};
    for(let i=0;i<N;i++){S.z[i]=z[i]/1000;S.gx[i]=gx[i]/1e5;S.gy[i]=gy[i]/1e5;}
    S.e1=s.e0+(s.n-1)*s.pas; S.n1=s.n0+(s.n-1)*s.pas;
    // mascara del green als nodes de la malla (1 a dins del contorn, 0 fora), per al fregament
    const cg=typeof COURSE_GEO!=='undefined'&&COURSE_GEO[camp]&&COURSE_GEO[camp][n];
    const c=cg&&cg.green&&cg.green.contour;
    if(c&&c.length>2){
      const pol=c.map(ll=>puttEN(S,ll));S.mg=new Float32Array(N);
      for(let j=0;j<s.n;j++)for(let i=0;i<s.n;i++)S.mg[j*s.n+i]=puttAlGreen(pol,s.e0+i*s.pas,s.n0+j*s.pas)?1:0;
    }
    puttCache[clau]=S;
  }
  return puttCache[clau];
}
