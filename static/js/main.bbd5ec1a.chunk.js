(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),i=a(4),n=a.n(i),r=(a(9),a(2)),o=a.p+"static/media/Humidity.c57d4ae8.svg",l=a.p+"static/media/Wind.0393245f.svg",d=a.p+"static/media/Search.957a6b92.svg",m=a(0),h="1e497a45eaa6dd366c6253930349f6fc",p="https://api.openweathermap.org/data/2.5/";var u=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)({}),n=Object(r.a)(i,2),u=n[0],j=n[1],g=Object(c.useState)({list:[]}),b=Object(r.a)(g,2),y=b[0],v=b[1],O=Object(c.useState)(""),w=Object(r.a)(O,2),x=w[0],f=w[1],N=Object(c.useState)(""),_=Object(r.a)(N,2),S=_[0],A=_[1],D=Object(c.useState)([]),C=Object(r.a)(D,2),I=C[0],k=C[1],T=Object(c.useState)(null),M=Object(r.a)(T,2),P=(M[0],M[1]),R=new Date;return Object(c.useEffect)((function(){fetch("".concat(p,"weather?q=berlin&units=metric&APPID=").concat(h)).then((function(e){return e.json()})).then((function(e){j(e),s(""),f("https://source.unsplash.com/featured/?berlin"),"Rain"===e.weather[0].main?A("https://res.cloudinary.com/danielmurphy/image/upload/v1615705288/weatherApp/Rain_xfluyi.svg"):"clear sky"===e.weather[0].description?A("https://res.cloudinary.com/danielmurphy/image/upload/v1615705290/weatherApp/Clear_cdl7go.svg"):"scattered clouds"===e.weather[0].description||"few clouds"===e.weather[0].description?A("https://res.cloudinary.com/danielmurphy/image/upload/v1615705288/weatherApp/Scattered_c1m5up.svg"):"Snow"===e.weather[0].main?A("https://res.cloudinary.com/danielmurphy/image/upload/v1615705288/weatherApp/Snow_optz8i.svg"):"broken clouds"===e.weather[0].description?A("https://res.cloudinary.com/danielmurphy/image/upload/v1615705290/weatherApp/Broken_of6ay5.svg"):"overcast clouds"===e.weather[0].description&&A("https://res.cloudinary.com/danielmurphy/image/upload/v1615705290/weatherApp/Clouds_nrdjl4.svg"),console.log("weather",e)})),fetch("".concat(p,"forecast?q=berlin&units=metric&APPID=").concat(h)).then((function(e){return e.json()})).then((function(e){v(e),k([]);for(var t=[],a=0;a<4;a++)"Clouds"===e.list[a].weather[0].main?t[a]="https://res.cloudinary.com/danielmurphy/image/upload/v1615705290/weatherApp/Clouds_nrdjl4.svg":"Clear"===e.list[a].weather[0].main?t[a]="https://res.cloudinary.com/danielmurphy/image/upload/v1615705290/weatherApp/Clear_cdl7go.svg":"Rain"===e.list[a].weather[0].main?t[a]="https://res.cloudinary.com/danielmurphy/image/upload/v1615705288/weatherApp/Rain_xfluyi.svg":"Snow"===e.list[a].weather[0].main&&(t[a]="https://res.cloudinary.com/danielmurphy/image/upload/v1615705288/weatherApp/Snow_optz8i.svg");k(t),console.log("useEffectForecast",e)}))}),[]),Object(m.jsx)(m.Fragment,{children:"undefined"===u.main?Object(m.jsx)("h1",{children:"CITY NOT FOUND"}):Object(m.jsxs)("div",{className:"undefined"!=typeof u.main&&u.main.temp>16?"app warm":"app",children:[Object(m.jsxs)("main",{children:[!!x&&Object(m.jsx)("img",{className:"backgroundImg",src:x,alt:""}),Object(m.jsxs)("div",{className:"search-box",children:[Object(m.jsx)("img",{src:d,alt:"",className:"additionalIcons locationIcon"}),Object(m.jsx)("input",{autoComplete:"off",id:"iconified",type:"text",className:"search-bar",placeholder:"",onChange:function(e){return s(e.target.value)},value:a,onKeyPress:function(e){if("Enter"===e.key)try{fetch("".concat(p,"weather?q=").concat(a,"&units=metric&APPID=").concat(h)).then((function(e){return e.json()})).then((function(e){j(e),s(""),f("https://source.unsplash.com/featured/?".concat(a)||!1)})),fetch("".concat(p,"forecast?q=").concat(a,"&units=metric&APPID=").concat(h)).then((function(e){return e.json()})).then((function(e){if("city not found"===e.message)P("city not found");else{k([]),console.log("result ssss",e),v(e);for(var t=[],a=0;a<4;a++)"Rain"===e.list[a].weather[0].main?t[a]="https://res.cloudinary.com/danielmurphy/image/upload/v1615705288/weatherApp/Rain_xfluyi.svg":"clear sky"===e.list[a].weather[0].description?t[a]="https://res.cloudinary.com/danielmurphy/image/upload/v1615705290/weatherApp/Clear_cdl7go.svg":"scattered clouds"===e.list[a].weather[0].description||"few clouds"===e.list[a].weather[0].description?t[a]="https://res.cloudinary.com/danielmurphy/image/upload/v1615705288/weatherApp/Scattered_c1m5up.svg":"Snow"===e.list[a].weather[0].main?t[a]="https://res.cloudinary.com/danielmurphy/image/upload/v1615705288/weatherApp/Snow_optz8i.svg":"broken clouds"===e.list[a].weather[0].description?t[a]="https://res.cloudinary.com/danielmurphy/image/upload/v1615705290/weatherApp/Broken_of6ay5.svg":"overcast clouds"===e.list[a].weather[0].description&&(t[a]="https://res.cloudinary.com/danielmurphy/image/upload/v1615705290/weatherApp/Clouds_nrdjl4.svg");k(t),console.log("forecast",e)}}))}catch(t){console.log("working here",t)}}})]}),"undefined"!=typeof u.main?Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"location-box",children:[Object(m.jsxs)("div",{className:"location",children:[u.name,", ",u.sys.country]}),Object(m.jsx)("h3",{children:new Date(R.getTime()).toDateString().split("2021")}),Object(m.jsxs)("div",{className:"weather-box",children:[Object(m.jsxs)("div",{className:"temp",children:[Math.round(u.main.temp),"\xb0c"]}),Object(m.jsx)("img",{className:"mainIcon",src:S,alt:""}),Object(m.jsx)("h2",{children:u.weather[0].description})]})]}),Object(m.jsxs)("div",{className:"additional",children:[Object(m.jsxs)("h4",{children:[Object(m.jsx)("img",{src:o,className:"additionalIcons humidityIcon",alt:""}),"   ","Humidity : ",u.main.humidity,"%"]}),Object(m.jsxs)("h4",{style:{marginTop:"10px"},children:[" ",Object(m.jsx)("img",{src:l,className:"additionalIcons windIcon",alt:""})," ","Wind : ",u.main.humidity," km/hr"]})]})]}):"","undefined"!=typeof y.list&&Object(m.jsx)(m.Fragment,{children:y.list.length>0&&!!I&&Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"forecastTempRow",children:[Object(m.jsxs)("div",{className:"forecacstColOne",children:[Object(m.jsx)("div",{children:function(){var e=new Date(R.getTime()+864e5).toDateString().split("2021");return e}()}),Object(m.jsx)("img",{style:{color:"white"},className:"icon",src:I[0],alt:""}),Object(m.jsxs)("div",{children:[Math.round(y.list[0].main.temp_max),"\xb0c"," ",Object(m.jsxs)("small",{style:{color:"grey"},children:[Math.round(y.list[0].main.temp_min),"\xb0c"]})]})]}),Object(m.jsxs)("div",{className:"forecaseColTwo",children:[Object(m.jsx)("div",{children:new Date(R.getTime()+1728e5).toDateString().split("2021")}),Object(m.jsx)("img",{className:"icon",src:I[1],alt:""}),Object(m.jsxs)("div",{children:[Math.round(y.list[1].main.temp_max),"\xb0c"," ",Object(m.jsxs)("small",{style:{color:"grey"},children:[Math.round(y.list[1].main.temp_min),"\xb0c"]})]})," "]}),Object(m.jsxs)("div",{className:"forecastColThree",children:[Object(m.jsx)("div",{children:new Date(R.getTime()+2592e5).toDateString().split("2021")}),Object(m.jsx)("img",{className:"icon",src:I[2],alt:""}),Object(m.jsxs)("div",{children:[Math.round(y.list[2].main.temp_max),"\xb0c"," ",Object(m.jsxs)("small",{style:{color:"grey"},children:[Math.round(y.list[2].main.temp_min),"\xb0c"]})]})," "]}),Object(m.jsxs)("div",{className:"forecastColThree",children:[Object(m.jsx)("div",{children:new Date(R.getTime()+3456e5).toDateString().split("2021")}),Object(m.jsx)("img",{className:"icon",src:I[3],alt:""}),Object(m.jsxs)("div",{children:[Math.round(y.list[3].main.temp_max),"\xb0c"," ",Object(m.jsxs)("small",{style:{color:"grey"},children:[" ",Math.round(y.list[3].main.temp_max),"\xb0c"]})]})," "]})]})})})]}),Object(m.jsx)("div",{className:"footer",children:Object(m.jsx)("p",{children:"&copy 2021 : Created By Daniel Murphy"})})]})})};n.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(u,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.bbd5ec1a.chunk.js.map