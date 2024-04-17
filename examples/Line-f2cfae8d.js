import{K as W,O as B,P as C,h as g,Q as N,T as S,t as R,k as A,u as V,L as I,U as E,W as J,X as K,Y as Q,Z as U,_ as X,i as O,e as T,v as Y,r as D,x as Z}from"./_virtual_settings-52524864.js";function F(i,s,t){const e={arcLength:0,segments:[],minSin:1};if(i.length===0)return e;if(t){const n=i[0].add(i[i.length-1]).scale(.5);i=[n,...i,n]}let l=i[0];for(let n=2;n<i.length;n++){const r=i[n-2],o=i[n-1],d=i[n],m=r.sub(o),u=d.sub(o),c=m.normalized.safe,f=u.normalized.safe,_=Math.acos(W(-1,1,c.dot(f))),P=Math.tan(_/2),j=Math.sin(_/2),L=Math.min(s,P*m.magnitude*(n===2?1:.5),P*u.magnitude*(n===i.length-1?1:.5)),q=j===0?0:L/j,k=P===0?0:L/P,z=c.add(f).scale(1/2).normalized.safe.scale(q).add(o),w=c.perpendicular.dot(f)<0,y=new B(l,o.add(c.scale(k))),v=new C(z,L,c.perpendicular.scale(w?1:-1),f.perpendicular.scale(w?-1:1),w);y.arcLength>0&&(e.segments.push(y),e.arcLength+=y.arcLength),v.arcLength>0&&(e.segments.push(v),e.arcLength+=v.arcLength),e.minSin=Math.min(e.minSin,Math.abs(j)),l=o.add(f.scale(k))}const a=new B(l,i[i.length-1]);return a.arcLength>0&&(e.segments.push(a),e.arcLength+=a.arcLength),e}function G(i){return i.reduce((s,t,e)=>e?s+i[e-1].sub(t).magnitude:0,0)}function M(i,s,t){const e=i.length;let l=0;for(let a=0;a<s.length;a+=1){const n=i[(t+a)%e],r=s[a];l+=n.sub(r).squaredMagnitude}return l}function H(i,s,t){const e=[];if(t===0)return[...i];if(t===1)return[...s];for(let l=0;l<i.length;l++){const a=i[l],n=s[l];e.push(g.lerp(a,n,t))}return e}var p=globalThis&&globalThis.__decorate||function(i,s,t,e){var l=arguments.length,a=l<3?s:e===null?e=Object.getOwnPropertyDescriptor(s,t):e,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,s,t,e);else for(var r=i.length-1;r>=0;r--)(n=i[r])&&(a=(l<3?n(a):l>3?n(s,t,a):n(s,t))||a);return l>3&&a&&Object.defineProperty(s,t,a),a},b;let h=b=class extends N{static rotatePoints(s,t,e){if(e){let l=1/0,a=0;for(let n=0;n<s.length;n+=1){const r=M(s,t,n);r<l&&(l=r,a=n)}if(a){const n=s.splice(0,a);s.splice(s.length,0,...n)}}else{const l=M(s,t,0),a=[...s].reverse();M(a,t,0)<l&&s.reverse()}}static distributePoints(s,t){if(s.length===0){for(let r=0;r<t;r++)s.push(g.zero);return}if(s.length===1){const r=s[0];for(let o=0;o<t;o++)s.push(r);return}const e=s.length+t,l=G(s);let a=t/l,n=0;for(;s.length<e;){const r=e-s.length;if(n+1>=s.length){a=r/l,n=0;continue}const o=s[n],d=s[n+1],m=o.sub(d).magnitude,u=Math.min(Math.round(m*a),r)+1;for(let c=1;c<u;c++)s.splice(++n,0,g.lerp(o,d,c/u));n++}}*tweenPoints(s,t,e){const l=[...this.parsedPoints()],a=this.parsePoints(S(s)),n=this.closed(),r=l.length-a.length;b.distributePoints(r<0?l:a,Math.abs(r)),b.rotatePoints(a,l,n),this.tweenedPoints(l),yield*R(t,o=>{const d=e(o);this.tweenedPoints(H(l,a,d))},()=>{this.tweenedPoints(null),this.points(s)})}constructor(s){super(s),this.tweenedPoints=A(null),s.children===void 0&&s.points===void 0&&V().warn({message:"No points specified for the line",remarks:`<p>The line won&#39;t be visible unless you specify at least two points:</p>
<pre class=""><code class="language-tsx">&lt;<span class="hljs-title class_">Line</span>
  stroke=<span class="hljs-string">&quot;#fff&quot;</span>
  lineWidth={<span class="hljs-number">8</span>}
  points={[
    [<span class="hljs-number">100</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, <span class="hljs-number">100</span>],
  ]}
/&gt;</code></pre><p>Alternatively, you can define the points using the children:</p>
<pre class=""><code class="language-tsx">&lt;<span class="hljs-title class_">Line</span> stroke=<span class="hljs-string">&quot;#fff&quot;</span> lineWidth={<span class="hljs-number">8</span>}&gt;
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Node</span> <span class="hljs-attr">x</span>=<span class="hljs-string">{100}</span> /&gt;</span></span>
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Node</span> /&gt;</span></span>
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Node</span> <span class="hljs-attr">y</span>=<span class="hljs-string">{100}</span> /&gt;</span></span>
&lt;/<span class="hljs-title class_">Line</span>&gt;</code></pre><p>If you did this intentionally, and want to disable this message, set the
<code>points</code> property to <code>null</code>:</p>
<pre class=""><code class="language-tsx">&lt;<span class="hljs-title class_">Line</span> stroke=<span class="hljs-string">&quot;#fff&quot;</span> lineWidth={<span class="hljs-number">8</span>} points={<span class="hljs-literal">null</span>} /&gt;</code></pre>`,inspect:this.key})}childrenBBox(){let s=this.tweenedPoints();if(!s){const t=this.points();s=t?t.map(e=>new g(S(e))):this.children().filter(e=>!(e instanceof I)||e.isLayoutRoot()).map(e=>e.position())}return E.fromPoints(...s)}parsedPoints(){return this.parsePoints(this.points())}profile(){return F(this.tweenedPoints()??this.parsedPoints(),this.radius(),this.closed())}lineWidthCoefficient(){const s=this.radius(),t=this.lineJoin();let e=super.lineWidthCoefficient();if(s===0&&t==="miter"){const{minSin:l}=this.profile();l>0&&(e=Math.max(e,.5/l))}return e}drawOverlay(s,t){const e=this.childrenBBox().transformCorners(t),a=this.computedSize().mul(this.offset()).scale(.5).transformAsPoint(t);s.fillStyle="white",s.strokeStyle="black",s.lineWidth=1;const n=new Path2D,r=(this.tweenedPoints()??this.parsedPoints()).map(o=>o.transformAsPoint(t));if(r.length>0){J(n,r[0]);for(const o of r)K(n,o),s.beginPath(),Q(s,o,4),s.closePath(),s.fill(),s.stroke()}s.strokeStyle="white",s.stroke(n),s.beginPath(),U(s,a),s.stroke(),s.beginPath(),X(s,e),s.closePath(),s.stroke()}parsePoints(s){return s?s.map(t=>new g(S(t))):this.children().map(t=>t.position())}};p([O(0),T()],h.prototype,"radius",void 0);p([O(null),T()],h.prototype,"points",void 0);p([Y()],h.prototype,"tweenPoints",null);p([D()],h.prototype,"childrenBBox",null);p([D()],h.prototype,"parsedPoints",null);p([D()],h.prototype,"profile",null);h=b=p([Z("Line")],h);export{h as L};
