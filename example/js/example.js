(function(){var n,t,i,e,o,u,r,c,l,s,d;for(d=new Stackgrid,window.onload=function(){d.config.columnWidth=220,d.config.gutter=20,d.config.isFluid=!1,d.config.layout="optimized",o.update(),d.config.moveItem=function(n,t,i,e){return Velocity(n,"stop"),Velocity(n,{left:t,top:i,queue:!1,duration:200},e)},d.config.scaleContainer=function(n,t,i,e){return Velocity(n,"stop"),Velocity(n,{height:i,width:t,queue:!1,duration:200},e)},d.initialize(".grid-container",".grid-item")},o={$container:void 0,$items:void 0,columnWidth:220,gutter:20,isFluid:!1,layout:"optimized"},o.update=function(){var n,t,i,e;for(this.$container=document.querySelector(".grid-container"),this.$items=document.querySelectorAll(".grid-item"),e=this.$items,t=0,i=e.length;i>t;t++)n=e[t],n.addEventListener("click",this.removeItem)},o.removeItem=function(){Velocity(this,{scale:0},300,function(n){return function(){return o.$container.removeChild(n),d.reset(),d.restack()}}(this))},o.append=function(n){var t;t=document.createElement("div"),t.setAttribute("class","grid-item"),t.innerHTML='<img src="'+n+'" alt="">',onimgload(n,function(n){return function(){return n.$container.appendChild(t),n.update(),Velocity(t,{scale:0},1,function(){return d.append(t)}),Velocity(t,{scale:1},200)}}(this))},t=document.getElementsByClassName("control-button"),r=0,l=t.length;l>r;r++)n=t[r],n.addEventListener("click",function(n){return n.preventDefault()});for(e=["one","two","three","four","five","six","seven","eight","nine"],i={},c=0,s=e.length;s>c;c++)u=e[c],i[u]=document.querySelector(".control-button.-"+u);i.one.onclick=function(){return o.append("img/short.jpg")},i.two.onclick=function(){return o.append("img/medium.jpg")},i.three.onclick=function(){return o.append("img/tall.jpg")},i.four.onclick=function(){20===o.gutter?(this.innerHTML="Gutter - 40",o.gutter=40,d.config.gutter=40):40===o.gutter?(this.innerHTML="Gutter - 0",o.gutter=0,d.config.gutter=0):(this.innerHTML="Gutter - 20",o.gutter=20,d.config.gutter=20),d.restack()},i.five.onclick=function(){"ordinal"===o.layout?(this.innerHTML="Layout - optimized",o.layout="optimized",d.config.layout="optimized"):(this.innerHTML="Layout - ordinal",o.layout="ordinal",d.config.layout="ordinal"),d.restack()},i.six.onclick=function(){o.isFluid?(this.innerHTML="isFluid - false",o.isFluid=!1,d.config.isFluid=!1):(this.innerHTML="isFluid - true",o.isFluid=!0,d.config.isFluid=!0),d.restack()},i.seven.onclick=function(){3===o.numberOfColumns?(this.innerHTML="numberOfColumns - 4",o.numberOfColumns=4,d.config.numberOfColumns=4):(this.innerHTML="numberOfColumns - 3",o.numberOfColumns=3,d.config.numberOfColumns=3),d.restack()},i.eight.onclick=function(){320===o.columnWidth?(this.innerHTML="columnWidth - 220",o.columnWidth=220,d.config.columnWidth=220):220===o.columnWidth?(this.innerHTML="columnWidth - 120",o.columnWidth=120,d.config.columnWidth=120):(this.innerHTML="columnWidth - 320",o.columnWidth=320,d.config.columnWidth=320),d.reset()},i.nine.onclick=function(){var n,t,i,e;for(e=o.$items,t=0,i=e.length;i>t;t++)n=e[t],o.$container.removeChild(n);d.reset()}}).call(this);