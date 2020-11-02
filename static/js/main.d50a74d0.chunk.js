(this["webpackJsonpcovid-statistics"]=this["webpackJsonpcovid-statistics"]||[]).push([[0],{24:function(t,e,s){},42:function(t,e,s){},43:function(t,e,s){"use strict";s.r(e);var c=s(0),i=s(2),n=s.n(i),r=s(17),a=s.n(r),o=(s(24),s(3)),l=s(4),d=s(7),j=s(6),h=s(5),b=s(18),u=s.n(b),x=function(t){Object(j.a)(s,t);var e=Object(h.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(null==this.props.currentCountry||0===this.props.currentCountry.length)return Object(c.jsx)("div",{children:"Loading..."});var t=new Date(this.props.currentCountry.updated).toLocaleString("en-GB");return Object(c.jsxs)("div",{id:"country-card",children:[Object(c.jsxs)("div",{className:"top-wrap",children:[Object(c.jsx)("div",{className:"country-flag",children:Object(c.jsx)("img",{src:this.props.currentCountry.countryInfo.flag,alt:this.props.currentCountry.country})}),Object(c.jsxs)("div",{className:"top-details-wrap",children:[Object(c.jsxs)("div",{className:"country",children:[this.props.currentCountry.country," "]}),Object(c.jsxs)("div",{className:"continent",children:[Object(c.jsx)("span",{className:"main-title",children:"Continent"}),this.props.currentCountry.continent," "]}),Object(c.jsxs)("div",{className:"population",children:[Object(c.jsx)("span",{className:"main-title",children:"population"}),this.props.currentCountry.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")]}),Object(c.jsxs)("div",{className:"last-updated",children:[Object(c.jsx)("span",{className:"main-title",children:"updated at"}),t]})]})]}),Object(c.jsxs)("div",{className:"bottom-wrap",children:[Object(c.jsxs)("div",{className:"info-box active",children:[Object(c.jsx)("div",{className:"info-box-title",children:"Total Active"}),Object(c.jsx)("div",{className:"info-box-stat",children:this.props.currentCountry.active})]}),Object(c.jsxs)("div",{className:"info-box active per_million",children:[Object(c.jsx)("div",{className:"info-box-title",children:"Active per million"}),Object(c.jsx)("div",{className:"info-box-stat",children:this.props.currentCountry.activePerOneMillion})]}),Object(c.jsxs)("div",{className:"info-box cases",children:[Object(c.jsx)("div",{className:"info-box-title",children:"Total Cases"}),Object(c.jsx)("div",{className:"info-box-stat",children:this.props.currentCountry.cases})]}),Object(c.jsxs)("div",{className:"info-box cases per_million",children:[Object(c.jsx)("div",{className:"info-box-title",children:"Cases per million"}),Object(c.jsx)("div",{className:"info-box-stat",children:this.props.currentCountry.casesPerOneMillion})]}),Object(c.jsxs)("div",{className:"info-box critical",children:[Object(c.jsx)("div",{className:"info-box-title",children:"Critical Condition"}),Object(c.jsx)("div",{className:"info-box-stat",children:this.props.currentCountry.critical})]}),Object(c.jsxs)("div",{className:"info-box critical per_million",children:[Object(c.jsx)("div",{className:"info-box-title",children:"Critical per million"}),Object(c.jsx)("div",{className:"info-box-stat",children:this.props.currentCountry.criticalPerOneMillion})]}),Object(c.jsxs)("div",{className:"info-box deaths",children:[Object(c.jsx)("div",{className:"info-box-title",children:"Total Deaths"}),Object(c.jsx)("div",{className:"info-box-stat",children:this.props.currentCountry.deaths})]}),Object(c.jsxs)("div",{className:"info-box deaths per_million",children:[Object(c.jsx)("div",{className:"info-box-title",children:"Deaths per million"}),Object(c.jsx)("div",{className:"info-box-stat",children:this.props.currentCountry.deathsPerOneMillion})]}),Object(c.jsxs)("div",{className:"info-box recovered",children:[Object(c.jsx)("div",{className:"info-box-title",children:"Total Recovered"}),Object(c.jsx)("div",{className:"info-box-stat",children:this.props.currentCountry.recovered})]}),Object(c.jsxs)("div",{className:"info-box recovered per_million",children:[Object(c.jsx)("div",{className:"info-box-title",children:"Recovered per million"}),Object(c.jsx)("div",{className:"info-box-stat",children:this.props.currentCountry.recoveredPerOneMillion})]}),Object(c.jsxs)("div",{className:"info-box tests",children:[Object(c.jsx)("div",{className:"info-box-title",children:"Total Tests"}),Object(c.jsx)("div",{className:"info-box-stat",children:this.props.currentCountry.tests})]}),Object(c.jsxs)("div",{className:"info-box tests per_million",children:[Object(c.jsx)("div",{className:"info-box-title",children:"Tests per million"}),Object(c.jsx)("div",{className:"info-box-stat",children:this.props.currentCountry.testsPerOneMillion})]}),Object(c.jsxs)("div",{className:"info-box cases_today",children:[Object(c.jsx)("div",{className:"info-box-title",children:"Cases today"}),Object(c.jsx)("div",{className:"info-box-stat",children:this.props.currentCountry.todayCases})]}),Object(c.jsxs)("div",{className:"info-box deaths_today",children:[Object(c.jsx)("div",{className:"info-box-title",children:"Deaths today"}),Object(c.jsx)("div",{className:"info-box-stat",children:this.props.currentCountry.todayDeaths})]}),Object(c.jsxs)("div",{className:"info-box recovered_today",children:[Object(c.jsx)("div",{className:"info-box-title",children:"Recovered today"}),Object(c.jsx)("div",{className:"info-box-stat",children:this.props.currentCountry.todayRecovered})]})]})]})}}]),s}(n.a.Component),O=function(t){Object(j.a)(s,t);var e=Object(h.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var t=this;return null==this.props.countriesData||0===this.props.countriesData.length?Object(c.jsx)("div",{children:"Loading..."}):Object(c.jsxs)("table",{id:"countries_table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Country"}),Object(c.jsx)("th",{children:"Total Cases"}),Object(c.jsx)("th",{children:"Cases Today"}),Object(c.jsx)("th",{children:"Deaths"}),Object(c.jsx)("th",{children:"Deaths Today"}),Object(c.jsx)("th",{children:"Recovered"}),Object(c.jsx)("th",{children:"Recovered Today"}),Object(c.jsx)("th",{children:"Active"}),Object(c.jsx)("th",{children:"Critical"})]})}),Object(c.jsx)("tbody",{children:this.props.countriesData.map((function(e){return Object(c.jsxs)("tr",{className:"country_row",children:[Object(c.jsxs)("th",{className:"country-display",onClick:function(){return t.props.whenClicked(e)},children:[Object(c.jsx)("img",{src:e.countryInfo.flag,alt:e.country,className:"country-img"}),e.country]}),Object(c.jsx)("th",{children:e.cases}),Object(c.jsx)("th",{children:e.todayCases}),Object(c.jsx)("th",{children:e.deaths}),Object(c.jsx)("th",{children:e.todayDeaths}),Object(c.jsx)("th",{children:e.recovered}),Object(c.jsx)("th",{children:e.todayRecovered}),Object(c.jsx)("th",{children:e.active}),Object(c.jsx)("th",{children:e.critical})]},e.country)}))})]})}}]),s}(n.a.Component),v=(s(42),function(t){Object(j.a)(s,t);var e=Object(h.a)(s);function s(t){var c;return Object(o.a)(this,s),(c=e.call(this,t)).state={countriesData:[],activeCountry:[]},c.setActiveCountry=c.setActiveCountry.bind(Object(d.a)(c)),c}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var t=this;u.a.get("https://disease.sh/v3/covid-19/countries").then((function(e){t.setState({countriesData:e.data}),t.getRandomCountry()})).catch((function(t){return console.log(t)}))}},{key:"getRandomCountry",value:function(){var t=Math.floor(Math.random()*this.state.countriesData.length),e=this.state.countriesData[t];this.setState({activeCountry:e})}},{key:"setActiveCountry",value:function(t){this.setState({activeCountry:t}),window.scrollTo({top:0,left:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"covid-tracker",children:[Object(c.jsx)("h1",{className:"section-title",children:"Country Card"}),Object(c.jsx)("p",{className:"section-instructions",children:"Random country has been displayed as an example, view instructions below to display specific country of your choice."}),Object(c.jsx)(x,{currentCountry:this.state.activeCountry}),Object(c.jsx)("h1",{className:"section-title",children:"Country List"}),Object(c.jsx)("p",{className:"section-instructions",children:"Click on the specific country name to view all the details about the country."}),Object(c.jsx)(O,{countriesData:this.state.countriesData,whenClicked:this.setActiveCountry})]})}}]),s}(n.a.Component)),p=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,44)).then((function(e){var s=e.getCLS,c=e.getFID,i=e.getFCP,n=e.getLCP,r=e.getTTFB;s(t),c(t),i(t),n(t),r(t)}))};a.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),p()}},[[43,1,2]]]);
//# sourceMappingURL=main.d50a74d0.chunk.js.map