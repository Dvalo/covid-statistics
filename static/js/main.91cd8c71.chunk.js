(this["webpackJsonpcovid-statistics"]=this["webpackJsonpcovid-statistics"]||[]).push([[0],{21:function(e,c,t){},26:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t(3),i=t.n(a),n=t(11),l=t(4),r=t(28),o=function(e){return e.toLocaleString("en-US",{maximumFractionDigits:2})},d=function(e){return new Date(e).toLocaleString("en-GB")},j=function(e){var c=e.country;return Object(s.jsxs)("div",{className:"country-display",children:[Object(s.jsxs)("div",{className:"country-display__top",children:[Object(s.jsx)("figure",{className:"country-display__flag",children:Object(s.jsx)("img",{src:c.countryInfo.flag,alt:c.country})}),Object(s.jsxs)("div",{className:"country-display__general-details",children:[Object(s.jsx)("p",{className:"country-display__country",children:c.country}),Object(s.jsxs)("div",{className:"country-display__continent",children:[Object(s.jsx)("p",{className:"country-display__eyebrow",children:"Continent"}),c.continent]}),Object(s.jsxs)("div",{className:"country-display__population",children:[Object(s.jsx)("p",{className:"country-display__eyebrow",children:"Population"}),o(c.population)]}),Object(s.jsxs)("div",{className:"country-display__last-updated",children:[Object(s.jsx)("p",{className:"country-display__eyebrow",children:"Updated at"}),d(c.updated)]})]})]}),Object(s.jsxs)("div",{className:"country-display__bottom",children:[Object(s.jsxs)("div",{className:"country-display__box active",children:[Object(s.jsx)("p",{className:"country-display__box-title",children:"Total Active"}),Object(s.jsx)("div",{className:"country-display__box-stat",children:o(c.active)})]}),Object(s.jsxs)("div",{className:"country-display__box active per_million",children:[Object(s.jsx)("p",{className:"country-display__box-title",children:"Active per million"}),Object(s.jsx)("div",{className:"country-display__box-stat",children:c.activePerOneMillion})]}),Object(s.jsxs)("div",{className:"country-display__box cases",children:[Object(s.jsx)("p",{className:"country-display__box-title",children:"Total Cases"}),Object(s.jsx)("div",{className:"country-display__box-stat",children:o(c.cases)})]}),Object(s.jsxs)("div",{className:"country-display__box cases per_million",children:[Object(s.jsx)("p",{className:"country-display__box-title",children:"Cases per million"}),Object(s.jsx)("div",{className:"country-display__box-stat",children:o(c.casesPerOneMillion)})]}),Object(s.jsxs)("div",{className:"country-display__box critical",children:[Object(s.jsx)("p",{className:"country-display__box-title",children:"Critical Condition"}),Object(s.jsx)("div",{className:"country-display__box-stat",children:o(c.critical)})]}),Object(s.jsxs)("div",{className:"country-display__box critical per_million",children:[Object(s.jsx)("div",{className:"country-display__box-title",children:"Critical per million"}),Object(s.jsx)("div",{className:"country-display__box-stat",children:c.criticalPerOneMillion})]}),Object(s.jsxs)("div",{className:"country-display__box deaths",children:[Object(s.jsx)("p",{className:"country-display__box-title",children:"Total Deaths"}),Object(s.jsx)("div",{className:"country-display__box-stat",children:o(c.deaths)})]}),Object(s.jsxs)("div",{className:"country-display__box deaths per_million",children:[Object(s.jsx)("p",{className:"country-display__box-title",children:"Deaths per million"}),Object(s.jsx)("div",{className:"country-display__box-stat",children:c.deathsPerOneMillion})]}),Object(s.jsxs)("div",{className:"country-display__box recovered",children:[Object(s.jsx)("p",{className:"country-display__box-title",children:"Total Recovered"}),Object(s.jsx)("div",{className:"country-display__box-stat",children:o(c.recovered)})]}),Object(s.jsxs)("div",{className:"country-display__box recovered per_million",children:[Object(s.jsx)("p",{className:"country-display__box-title",children:"Recovered per million"}),Object(s.jsx)("div",{className:"country-display__box-stat",children:c.recoveredPerOneMillion})]}),Object(s.jsxs)("div",{className:"country-display__box tests",children:[Object(s.jsx)("p",{className:"country-display__box-title",children:"Total Tests"}),Object(s.jsx)("div",{className:"country-display__box-stat",children:o(c.tests)})]}),Object(s.jsxs)("div",{className:"country-display__box tests per_million",children:[Object(s.jsx)("p",{className:"country-display__box-title",children:"Tests per million"}),Object(s.jsx)("div",{className:"country-display__box-stat",children:c.testsPerOneMillion})]}),Object(s.jsxs)("div",{className:"country-display__box cases_today",children:[Object(s.jsx)("p",{className:"country-display__box-title",children:"Cases today"}),Object(s.jsx)("div",{className:"country-display__box-stat",children:o(c.todayCases)})]}),Object(s.jsxs)("div",{className:"country-display__box deaths_today",children:[Object(s.jsx)("p",{className:"country-display__box-title",children:"Deaths today"}),Object(s.jsx)("div",{className:"country-display__box-stat",children:o(c.todayDeaths)})]}),Object(s.jsxs)("div",{className:"country-display__box recovered_today",children:[Object(s.jsx)("p",{className:"country-display__box-title",children:"Recovered today"}),Object(s.jsx)("div",{className:"country-display__box-stat",children:o(c.todayRecovered)})]})]})]})},y=t(10),u=function(e){var c=e.countries,t=e.handleCountryClick,i=Object(a.useState)(c),n=Object(l.a)(i,2),r=n[0],j=n[1],u=[];return Object(s.jsxs)("div",{className:"country-listing",children:[Object(s.jsx)("input",{className:"country-listing__search",type:"text",onChange:function(e){var t=e.target.value.toLowerCase();if(t&&""!==t){var s=c.filter((function(e){return e.country.toLowerCase().includes(t)}));j(s)}else j(c)},name:"country",placeholder:"Search By Country"}),r&&r.map((function(e,c){return Object(s.jsxs)("button",{className:"country-card",onMouseEnter:function(){return function(e){y.a.to(u[e],{opacity:.8,scale:1})}(c)},onMouseLeave:function(){return function(e){y.a.to(u[e],{opacity:0,scale:0})}(c)},onMouseMove:function(e){return function(e,c){var t=u[c];y.a.to(t,{x:e.clientX-t.offsetWidth/2,y:e.clientY-t.offsetHeight/2,duration:.25})}(e,c)},onClick:function(){return t(e)},children:[Object(s.jsx)("p",{className:"country-card__count",children:c<10?("0"+(c+1)).slice(-2):c}),Object(s.jsx)("p",{className:"country-card__label",children:e.country}),Object(s.jsxs)("div",{className:"country-card__info",children:[Object(s.jsxs)("p",{className:"country-card__continent",children:[Object(s.jsx)("span",{children:"Continent:"}),e.continent]}),Object(s.jsxs)("p",{className:"country-card__population",children:[Object(s.jsx)("span",{children:"Population:"}),o(e.population)]}),Object(s.jsxs)("p",{className:"country-card__updated",children:[Object(s.jsx)("span",{children:"Last Update:"}),d(e.updated)]})]}),Object(s.jsx)("div",{className:"country-card__trigger",children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:Object(s.jsx)("path",{d:"M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"})})}),Object(s.jsx)("div",{className:"country-card__cursor",children:Object(s.jsx)("img",{ref:function(e){return u[c]=e},src:e.countryInfo.flag,className:"country-card__flag",alt:""})})]},e.countryInfo.iso3)}))]})},_=(t(21),function(){var e=Object(a.useState)([]),c=Object(l.a)(e,2),t=c[0],i=c[1],n=Object(a.useState)(null),o=Object(l.a)(n,2),d=o[0],y=o[1],_=Object(a.useState)(!0),b=Object(l.a)(_,2),x=b[0],p=b[1];Object(a.useEffect)((function(){r.a.get("https://disease.sh/v3/covid-19/countries").then((function(e){var c=e.data.filter((function(e){return null!==e.countryInfo.iso3}));i(c),h(c)})).catch((function(e){return console.log(e)}))}),[]);var h=function(e){var c=e[Math.floor(Math.random()*e.length)];y(c)};return Object(s.jsxs)("div",{className:"covid-tracker",children:[Object(s.jsx)("div",{className:"covid-tracker__section covid-tracker__section--display",children:Object(s.jsxs)("div",{className:"covid-tracker__section-inner",children:[x&&Object(s.jsxs)("div",{className:"covid-tracker__section-intro",children:[Object(s.jsx)("p",{className:"covid-tracker__section-title",children:"Country Card"}),Object(s.jsx)("p",{className:"covid-tracker__section-desc",children:"Random country has been displayed as an example, view instructions below to display specific country of your choice."})]}),d?Object(s.jsx)(j,{country:d}):Object(s.jsx)("p",{className:"loading",children:"Loading Data..."})]})}),Object(s.jsx)("div",{className:"covid-tracker__section covid-tracker__section--listing",children:Object(s.jsxs)("div",{className:"covid-tracker__section-inner",children:[Object(s.jsxs)("div",{className:"covid-tracker__section-intro",children:[Object(s.jsx)("p",{className:"covid-tracker__section-title",children:"Country Listing"}),Object(s.jsx)("p",{className:"covid-tracker__section-desc",children:"Click on the specific country name to view all the details about the country."})]}),t.length?Object(s.jsx)(u,{countries:t,handleCountryClick:function(e){x&&p(!1),y(e),window.scrollTo({top:0,left:0,behavior:"smooth"})}}):Object(s.jsx)("p",{className:"loading",children:"Loading Data..."})]})})]})}),b=document.getElementById("root");Object(n.createRoot)(b).render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(_,{})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.91cd8c71.chunk.js.map