(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){e.exports={container:"country_container__1HANJ",button:"country_button__2dpk_",country:"country_country__2WDCH",detail:"country_detail__1yvpN",regular:"country_regular__1s1Dg",flag:"country_flag__2FVKQ",weatherIcon:"country_weatherIcon__ihr1F",iconContainer:"country_iconContainer__Awh31"}},15:function(e,t,a){e.exports=a(38)},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=a(3),u=a(4),i=a.n(u),s=function(e){var t=e.handleFilterChange,a=e.chosenCountry;return r.a.createElement("div",null,"Find countries:"," ",r.a.createElement("input",{value:a,onChange:t}))},m=a(1),E=a.n(m),d=function(e){var t=e.country,a=e.setCountry;return r.a.createElement("div",null,t.name," ",r.a.createElement("button",{className:E.a.button,onClick:function(){a(t.name)}},"Show"))},p=function(e){var t=e.country;return r.a.createElement("div",null,r.a.createElement("ul",null,t.languages.map(function(e){return r.a.createElement("li",{key:e.name},e.name)})))},h=function(e){var t=e.country,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],u=c[1],s=Object(n.useState)(!1),m=Object(o.a)(s,2),d=m[0],p=m[1];return console.log("weather: ",l),console.log("weather.current: ",l.current),Object(n.useEffect)(function(){var e="http://api.weatherstack.com/current?access_key=".concat("4dd06535601b78b0aa3200a31a2a0f43","&query=").concat(t.capital);i.a.get(e).then(function(e){console.log("response.data: ",e.data),u(e.data.current),p(!0)})},[t.capital]),r.a.createElement("div",null,d?r.a.createElement("div",null,r.a.createElement("h3",null,"Weather in ",t.capital),r.a.createElement("div",{className:E.a.iconContainer},r.a.createElement("img",{className:E.a.weatherIcon,src:l.weather_icons,alt:l.weather_descriptions})),r.a.createElement("p",null,"Current time is"," ",r.a.createElement("span",{className:E.a.detail},l.observation_time)),r.a.createElement("p",null,r.a.createElement("span",{className:E.a.detail},"Temperature:")," ",l.temperature,"c"),r.a.createElement("p",null," ",r.a.createElement("span",{className:E.a.detail},"Conditions: "),l.weather_descriptions),r.a.createElement("p",null,r.a.createElement("span",{className:E.a.detail},"Wind: ")," ",l.wind_speed," kph ",l.wind_dir)):r.a.createElement("p",null,"Please wait..."))},y=function(e){var t=e.country;return r.a.createElement("div",{className:E.a.country},r.a.createElement("div",{key:t.name},r.a.createElement("h2",null,t.name),r.a.createElement("img",{className:E.a.flag,src:t.flag,alt:"".concat(t.name,"'s flag"),height:"170",width:"170"}),r.a.createElement("p",null,r.a.createElement("span",{className:E.a.detail},"Region: "),t.subregion),r.a.createElement("p",null,r.a.createElement("span",{className:E.a.detail},"Capital: "),t.capital),r.a.createElement("p",null,r.a.createElement("span",{className:E.a.detail},"Population: ")," ",t.population)),r.a.createElement("div",{className:E.a.language},r.a.createElement("h3",null,"Languages spoken: "),r.a.createElement(p,{country:t})),r.a.createElement("div",{className:E.a.weather},r.a.createElement(h,{country:t})))},f=function(e){var t=e.countries,a=e.setCountry,n=e.showCountry;return t.length>10?r.a.createElement("div",null,"Too many matches, specify another filter"):1===t.length?r.a.createElement(y,{country:t[0]}):t.length>1?t.map(function(e){return r.a.createElement(d,{key:e.name,country:e,setCountry:a,showCountry:n})}):r.a.createElement("div",null,"No countries match your search.")},g=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),u=Object(o.a)(l,2),m=u[0],d=u[1];Object(n.useEffect)(function(){i.a.get("https://restcountries.eu/rest/v2/all").then(function(e){c(e.data)})},[]);var p=a.filter(function(e){return e.name.toLowerCase().includes(m.toLowerCase())});return r.a.createElement("div",{className:E.a.container},r.a.createElement(s,{chosenCountry:m,handleFilterChange:function(e){d(e.target.value)}}),r.a.createElement("h1",null,"Countries & Their Information"),r.a.createElement(f,{countries:p,setCountry:d}))};l.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e3f54f0f.chunk.js.map