(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{425:function(e,t,r){"use strict";r.r(t);var a=r(301),l=r(348),s=r(303),n=r(317),o=r.n(n),i=Object(s.a)({name:"farmer",src:o.a,layer:"farmer",animations:function(){return{default:[{start:0,end:500,handler:function(e){var t=e.context,r=e.tween;t.layers.rightarm.angle=r.number(75,100),t.layers.rightarm.centerX=853,t.layers.rightarm.centerY=815,t.layers.rightshoulder.angle=67,t.layers.rightshoulder.centerX=830,t.layers.rightshoulder.centerY=810,t.layers.leftshoulder.angle=r.number(0,181),t.layers.leftshoulder.centerX=805,t.layers.leftshoulder.centerY=810,t.layers.leftleg.angle=360-r.number(0,80),t.layers.leftleg.centerX=810,t.layers.leftleg.centerY=850,t.layers.leftcalf.angle=r.number(25,90),t.layers.leftcalf.centerX=810,t.layers.leftcalf.centerY=885,t.layers.rightleg.angle=r.number(0,80),t.layers.rightleg.centerX=815,t.layers.rightleg.centerY=865,t.layers.rightcalf.angle=360-r.number(270,360),t.layers.rightcalf.centerX=825,t.layers.rightcalf.centerY=885}},{start:500,end:1e3,handler:function(e){var t=e.context,r=e.tween;t.layers.rightarm.angle=r.number(100,75),t.layers.rightarm.centerX=853,t.layers.rightarm.centerY=815,t.layers.rightshoulder.angle=67,t.layers.rightshoulder.centerX=830,t.layers.rightshoulder.centerY=810,t.layers.rightleg.angle=r.number(280,360),t.layers.rightleg.centerX=815,t.layers.rightleg.centerY=865,t.layers.rightcalf.angle=r.number(0,40),t.layers.rightcalf.centerX=825,t.layers.rightcalf.centerY=885,t.layers.leftleg.angle=360-r.number(280,360),t.layers.leftleg.centerX=810,t.layers.leftleg.centerY=850,t.layers.leftcalf.angle=r.number(90,25),t.layers.leftcalf.centerX=810,t.layers.leftcalf.centerY=885}}]}}}),c=r(41),y=Object(c.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("vector",e._b({style:{fill:e.defaultColor},attrs:{"show-viewbox":!0},scopedSlots:e._u([{key:"default",fn:function(){return[e.layers?r("g",[r("layer",{attrs:{position:e.layers.head3,layer:e.layers.head3}}),e._v(" "),r("layer",{attrs:{position:e.layers.body2,layer:e.layers.body2}}),e._v(" "),r("layer",{attrs:{position:e.layers.rightshoulder,layer:e.layers.rightshoulder}},[r("layer",{attrs:{position:e.layers.rightarm,layer:e.layers.rightarm}})],1),e._v(" "),r("layer",{attrs:{position:e.layers.leftshoulder,layer:e.layers.leftshoulder}},[r("layer",{attrs:{position:e.layers.leftarm,layer:e.layers.leftarm}})],1),e._v(" "),r("layer",{attrs:{position:e.layers.leftleg,layer:e.layers.leftleg}},[r("layer",{attrs:{position:e.layers.leftcalf,layer:e.layers.leftcalf}})],1),e._v(" "),r("layer",{attrs:{position:e.layers.rightleg,layer:e.layers.rightleg}},[r("layer",{attrs:{position:e.layers.rightcalf,layer:e.layers.rightcalf}})],1)],1):e._e()]},proxy:!0}])},"vector",e.$props,!1))}),[],!1,null,null,null).exports,u=Object(s.a)({name:"barn",src:o.a,layer:["barn"]}),h=Object(c.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("vector",e._b({style:{fill:e.defaultColor},attrs:{"show-viewbox":!0},scopedSlots:e._u([{key:"default",fn:function(){return[r("g",e._l(e.filteredLayers,(function(e,t){return r("layer",{key:t,attrs:{layer:e}})})),1)]},proxy:!0}])},"vector",e.$props,!1))}),[],!1,null,null,null).exports,f=r(371),d=r(373),m=Object(s.a)({name:"farm-scene",src:o.a,components:{Farmer:y,Barn:h,Cow:f.a,clock:d.a}}),g=Object(c.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("vector",e._b({style:{fill:e.defaultColor},attrs:{id:"farm__"+e._uid,"show-viewbox":!1},scopedSlots:e._u([{key:"default",fn:function(){return[r("clock",{attrs:{fps:30},scopedSlots:e._u([{key:"default",fn:function(t){return[e.layers?r("g",[r("rect",{attrs:{fill:"#E3DAA6",y:"-900",width:"1384",height:"905"}}),e._v(" "),r("foreignObject",{attrs:{x:"0",y:"0",width:"100%",height:"900"}},[r("html",[r("body",{style:[{"background-color":e.defaultColor},{height:"900px"}]},[e._t("default")],2)])]),e._v(" "),r("layer",{attrs:{id:"bbbb",position:e.layers.background,layer:e.layers.background}}),e._v(" "),r("layer",{attrs:{position:e.layers.barn,layer:e.layers.barn}}),e._v(" "),r("cow",{attrs:{keyframe:t.keyframe,repeat:!0,align:"topleft",fit:!0,x:100,y:650,width:"300",height:"300"}}),e._v(" "),r("cow",{attrs:{keyframe:t.keyframe,repeat:!0,align:"topleft",fit:!0,x:600,y:650,width:"300",height:"300"}}),e._v(" "),r("farmer",{attrs:{keyframe:t.keyframe,repeat:!0,x:t.keyframe%6e3/4-200,y:800}}),e._v(" "),r("cow",{attrs:{keyframe:t.keyframe,repeat:!0,align:"topleft",fit:!0,x:350,y:650,width:"300",height:"300"}}),e._v(" "),r("cow",{attrs:{keyframe:t.keyframe,repeat:!0,align:"topleft",fit:!0,x:850,y:650,width:"300",height:"300"}})],1):e._e()]}}],null,!0)})]},proxy:!0}])},"vector",e.$props,!1))}),[],!1,null,null,null).exports,p={data:function(){return{}},components:{OceanScene:l.a,Farm:g,scroll:a.a.timers.scroll,scene:a.a.graphics.scene}},b=Object(c.a)(p,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticStyle:{height:"95vh"}}),e._v(" "),r("scroll",{attrs:{speed:1,"auto-play":""},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.keyframe;return[r("svg",{attrs:{viewBox:"0 0 1380 3800"}},[r("farm",{attrs:{color:"rgb(227,218,166)",keyframe:a,y:2500}},[r("div",{staticClass:"flex justify-around content-around"},[r("div",{staticClass:"content-around text-red-400 h-screen w-full w-screen",staticStyle:{"background-color":"rgb(226,221,191)"}},[r("h1",{staticClass:"text-lg"},[e._v("What Is Lorem Ipsum")]),e._v(" "),r("p",[e._v("What is Lorem Ipsum?\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n                            Why do we use it?\n                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n                        ")]),e._v(" "),r("br"),e._v(" "),r("h3",[e._v("INSERT YOUR HTML HERE")])])])]),e._v(" "),r("ocean-scene",{staticStyle:{fill:"#90CDF4"},attrs:{"show-viewbox":!1,keyframe:a}},[r("div",{staticClass:"flex justify-around content-around"},[r("div",{staticClass:"content-around text-red-400 h-screen w-full w-screen",staticStyle:{"background-color":"#587076"}},[r("h1",{staticClass:"text-lg"},[e._v("What Is Lorem Ipsum")]),e._v(" "),r("p",[e._v("What is Lorem Ipsum?\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n                            Why do we use it?\n                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n                        ")]),e._v(" "),r("br"),e._v(" "),r("h3",[e._v("INSERT YOUR HTML HERE")])])])])],1)]}}])})],1)}),[],!1,null,null,null);t.default=b.exports}}]);
//# sourceMappingURL=36.12655ddf.js.map