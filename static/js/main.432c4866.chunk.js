(this["webpackJsonpcovid-statistics"]=this["webpackJsonpcovid-statistics"]||[]).push([[0],{42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var i=s(0),c=s(2),a=s.n(c),n=s(18),o=s.n(n),r=s(3),l=s(4),d=s(7),j=s(6),h=s(5),b=s(19),x=s.n(b),u=s(8),m=s.n(u),O=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"formatNumber",value:function(e){return e.toLocaleString("en-US",{maximumFractionDigits:2})}},{key:"formatDate",value:function(e){return new Date(e).toLocaleString("en-GB")}},{key:"render",value:function(){if(null==this.props.currentCountry||0===this.props.currentCountry.length)return Object(i.jsx)(m.a,{type:"bubbles",color:"#ffffff",height:64,width:64});var e=this.props.currentCountry;return Object(i.jsxs)("div",{id:"country-card",children:[Object(i.jsxs)("div",{className:"top-wrap",children:[Object(i.jsx)("div",{className:"country-flag",children:Object(i.jsx)("img",{src:e.countryInfo.flag,alt:e.country})}),Object(i.jsxs)("div",{className:"top-details-wrap",children:[Object(i.jsx)("div",{className:"country",children:e.country}),Object(i.jsxs)("div",{className:"continent",children:[Object(i.jsx)("span",{className:"main-title",children:"Continent"}),e.continent]}),Object(i.jsxs)("div",{className:"population",children:[Object(i.jsx)("span",{className:"main-title",children:"Population"}),this.formatNumber(e.population)]}),Object(i.jsxs)("div",{className:"last-updated",children:[Object(i.jsx)("span",{className:"main-title",children:"Updated at"}),this.formatDate(e.updated)]})]})]}),Object(i.jsxs)("div",{className:"bottom-wrap",children:[Object(i.jsxs)("div",{className:"info-box active",children:[Object(i.jsx)("div",{className:"info-box-title",children:"Total Active"}),Object(i.jsx)("div",{className:"info-box-stat",children:this.formatNumber(e.active)})]}),Object(i.jsxs)("div",{className:"info-box active per_million",children:[Object(i.jsx)("div",{className:"info-box-title",children:"Active per million"}),Object(i.jsx)("div",{className:"info-box-stat",children:this.props.currentCountry.activePerOneMillion})]}),Object(i.jsxs)("div",{className:"info-box cases",children:[Object(i.jsx)("div",{className:"info-box-title",children:"Total Cases"}),Object(i.jsx)("div",{className:"info-box-stat",children:this.formatNumber(e.cases)})]}),Object(i.jsxs)("div",{className:"info-box cases per_million",children:[Object(i.jsx)("div",{className:"info-box-title",children:"Cases per million"}),Object(i.jsx)("div",{className:"info-box-stat",children:this.formatNumber(e.casesPerOneMillion)})]}),Object(i.jsxs)("div",{className:"info-box critical",children:[Object(i.jsx)("div",{className:"info-box-title",children:"Critical Condition"}),Object(i.jsx)("div",{className:"info-box-stat",children:this.formatNumber(e.critical)})]}),Object(i.jsxs)("div",{className:"info-box critical per_million",children:[Object(i.jsx)("div",{className:"info-box-title",children:"Critical per million"}),Object(i.jsx)("div",{className:"info-box-stat",children:e.criticalPerOneMillion})]}),Object(i.jsxs)("div",{className:"info-box deaths",children:[Object(i.jsx)("div",{className:"info-box-title",children:"Total Deaths"}),Object(i.jsx)("div",{className:"info-box-stat",children:this.formatNumber(e.deaths)})]}),Object(i.jsxs)("div",{className:"info-box deaths per_million",children:[Object(i.jsx)("div",{className:"info-box-title",children:"Deaths per million"}),Object(i.jsx)("div",{className:"info-box-stat",children:this.props.currentCountry.deathsPerOneMillion})]}),Object(i.jsxs)("div",{className:"info-box recovered",children:[Object(i.jsx)("div",{className:"info-box-title",children:"Total Recovered"}),Object(i.jsx)("div",{className:"info-box-stat",children:this.formatNumber(e.recovered)})]}),Object(i.jsxs)("div",{className:"info-box recovered per_million",children:[Object(i.jsx)("div",{className:"info-box-title",children:"Recovered per million"}),Object(i.jsx)("div",{className:"info-box-stat",children:this.props.currentCountry.recoveredPerOneMillion})]}),Object(i.jsxs)("div",{className:"info-box tests",children:[Object(i.jsx)("div",{className:"info-box-title",children:"Total Tests"}),Object(i.jsx)("div",{className:"info-box-stat",children:this.formatNumber(e.tests)})]}),Object(i.jsxs)("div",{className:"info-box tests per_million",children:[Object(i.jsx)("div",{className:"info-box-title",children:"Tests per million"}),Object(i.jsx)("div",{className:"info-box-stat",children:this.props.currentCountry.testsPerOneMillion})]}),Object(i.jsxs)("div",{className:"info-box cases_today",children:[Object(i.jsx)("div",{className:"info-box-title",children:"Cases today"}),Object(i.jsx)("div",{className:"info-box-stat",children:this.formatNumber(e.todayCases)})]}),Object(i.jsxs)("div",{className:"info-box deaths_today",children:[Object(i.jsx)("div",{className:"info-box-title",children:"Deaths today"}),Object(i.jsx)("div",{className:"info-box-stat",children:this.formatNumber(e.todayDeaths)})]}),Object(i.jsxs)("div",{className:"info-box recovered_today",children:[Object(i.jsx)("div",{className:"info-box-title",children:"Recovered today"}),Object(i.jsx)("div",{className:"info-box-stat",children:this.formatNumber(e.todayRecovered)})]})]})]})}}]),s}(a.a.Component),v=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return null==this.props.countriesData||0===this.props.countriesData.length?Object(i.jsx)(m.a,{type:"bubbles",color:"#ffffff",height:64,width:64}):Object(i.jsxs)("table",{id:"countries_table",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Country"}),Object(i.jsx)("th",{children:"Total Cases"}),Object(i.jsx)("th",{children:"Cases Today"}),Object(i.jsx)("th",{children:"Deaths"}),Object(i.jsx)("th",{children:"Deaths Today"}),Object(i.jsx)("th",{children:"Recovered"}),Object(i.jsx)("th",{children:"Active"}),Object(i.jsx)("th",{children:"Critical"})]})}),Object(i.jsx)("tbody",{children:this.props.countriesData.map((function(t){return Object(i.jsxs)("tr",{className:"country_row",children:[Object(i.jsxs)("th",{className:"country-display",onClick:function(){return e.props.whenClicked(t)},children:[Object(i.jsx)("img",{src:t.countryInfo.flag,alt:t.country,className:"country-img"}),t.country]}),Object(i.jsx)("th",{children:t.cases}),Object(i.jsx)("th",{children:t.todayCases}),Object(i.jsx)("th",{children:t.deaths}),Object(i.jsx)("th",{children:t.todayDeaths}),Object(i.jsx)("th",{children:t.recovered}),Object(i.jsx)("th",{children:t.active}),Object(i.jsx)("th",{children:t.critical})]},t.country)}))})]})}}]),s}(a.a.Component),f=(s(42),function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var i;return Object(r.a)(this,s),(i=t.call(this,e)).state={countriesData:[],activeCountry:[]},i.setActiveCountry=i.setActiveCountry.bind(Object(d.a)(i)),i}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://disease.sh/v3/covid-19/countries").then((function(t){e.setState({countriesData:t.data}),e.getRandomCountry()})).catch((function(e){return console.log(e)}))}},{key:"getRandomCountry",value:function(){var e=Math.floor(Math.random()*this.state.countriesData.length),t=this.state.countriesData[e];this.setState({activeCountry:t})}},{key:"setActiveCountry",value:function(e){this.setState({activeCountry:e}),window.scrollTo({top:0,left:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"covid-tracker",children:[Object(i.jsxs)("div",{className:"country-card-wrapper",children:[Object(i.jsx)("h1",{className:"section-title",children:"Country Card"}),Object(i.jsx)("p",{className:"section-instructions",children:"Random country has been displayed as an example, view instructions below to display specific country of your choice."}),Object(i.jsx)(O,{currentCountry:this.state.activeCountry})]}),Object(i.jsxs)("div",{className:"country-list-wrapper",children:[Object(i.jsx)("h1",{className:"section-title",children:"Country List"}),Object(i.jsx)("p",{className:"section-instructions",children:"Click on the specific country name to view all the details about the country."}),Object(i.jsx)(v,{countriesData:this.state.countriesData,whenClicked:this.setActiveCountry})]})]})}}]),s}(a.a.Component));s(43);o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.432c4866.chunk.js.map