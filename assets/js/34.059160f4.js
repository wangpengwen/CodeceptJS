(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{275:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"mockrequest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mockrequest"}},[t._v("#")]),t._v(" MockRequest")]),t._v(" "),s("p",[s("strong",[t._v("Extends Helper")])]),t._v(" "),s("p",[t._v("This helper allows to "),s("strong",[t._v("mock requests while running tests in Puppeteer or WebDriver")]),t._v(".\nFor instance, you can block calls to 3rd-party services like Google Analytics, CDNs.\nAnother way of using is to emulate requests from server by passing prepared data.")]),t._v(" "),s("h3",{attrs:{id:"installations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installations"}},[t._v("#")]),t._v(" Installations")]),t._v(" "),s("p",[t._v("Requires "),s("a",{attrs:{href:"https://netflix.github.io/pollyjs/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polly.js"),s("OutboundLink")],1),t._v(" library by Netflix installed")]),t._v(" "),s("pre",[s("code",[t._v("npm i @pollyjs/core @pollyjs/adapter-puppeteer --save-dev\n")])]),t._v(" "),s("p",[t._v("Requires Puppeteer helper or WebDriver helper enabled")]),t._v(" "),s("h3",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("p",[t._v("Just enable helper in config file:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("helpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   Puppeteer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// regular Puppeteer config here")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   MockRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("Partially works with WebDriver helper")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://netflix.github.io/pollyjs/#/configuration?id=configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polly config options"),s("OutboundLink")],1),t._v(" can be passed as well:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// enable replay mode")]),t._v("\nhelpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n Puppeteer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// regular Puppeteer config here")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n MockRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'replay'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[t._v("Use "),s("code",[t._v("I.mockRequest")]),t._v(" to intercept and mock requests.")]),t._v(" "),s("h3",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("config")])])]),t._v(" "),s("h3",{attrs:{id:"checkandstartmocking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#checkandstartmocking"}},[t._v("#")]),t._v(" _checkAndStartMocking")]),t._v(" "),s("p",[t._v("Starts mocking if it's not started yet.")]),t._v(" "),s("h3",{attrs:{id:"connectpuppeteer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connectpuppeteer"}},[t._v("#")]),t._v(" _connectPuppeteer")]),t._v(" "),s("p",[t._v("Creates a polly instance by registering puppeteer adapter with the instance")]),t._v(" "),s("h4",{attrs:{id:"parameters-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("title")]),t._v(" "),s("strong",[t._v("any")])])]),t._v(" "),s("h3",{attrs:{id:"connectwebdriver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connectwebdriver"}},[t._v("#")]),t._v(" _connectWebDriver")]),t._v(" "),s("p",[t._v("Creates polly object in the browser window context using xhr and fetch adapters,\nafter loading PollyJs and adapter scripts.")]),t._v(" "),s("h4",{attrs:{id:"parameters-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("title")]),t._v(" "),s("strong",[t._v("any")])])]),t._v(" "),s("h3",{attrs:{id:"mockrequest-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mockrequest-2"}},[t._v("#")]),t._v(" mockRequest")]),t._v(" "),s("p",[t._v("Mock response status")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mockRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/users'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mockRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ANY'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/secretsRoutes/*'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("403")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mockRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/secrets'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fakeSecrets'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mockRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/users/1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User not found'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Multiple requests")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mockRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/secrets'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/v2/secrets'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("403")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"parameters-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-4"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("method")]),t._v(" "),s("strong",[s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),s("OutboundLink")],1)]),t._v(" request method. Can be "),s("code",[t._v("GET")]),t._v(", "),s("code",[t._v("POST")]),t._v(", "),s("code",[t._v("PUT")]),t._v(", etc or "),s("code",[t._v("ANY")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("oneOrMoreUrls")]),t._v(" "),s("strong",[t._v("("),s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),s("OutboundLink")],1),t._v(" | "),s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"}},[t._v("Array"),s("OutboundLink")],1),t._v("<"),s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),s("OutboundLink")],1),t._v(">)")]),t._v(" url(s) to mock. Can be exact URL, a pattern, or an array of URLs.")]),t._v(" "),s("li",[s("code",[t._v("dataOrStatusCode")]),t._v(" "),s("strong",[t._v("("),s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[t._v("number"),s("OutboundLink")],1),t._v(" | "),s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),s("OutboundLink")],1),t._v(" | "),s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("object"),s("OutboundLink")],1),t._v(")")]),t._v(" status code when number provided. A response body otherwise")]),t._v(" "),s("li",[s("code",[t._v("additionalData")]),t._v(" "),s("strong",[t._v("("),s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),s("OutboundLink")],1),t._v(" | "),s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("object"),s("OutboundLink")],1),t._v(")")]),t._v(" response body when a status code is set by previous parameter.")])]),t._v(" "),s("h3",{attrs:{id:"startmocking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#startmocking"}},[t._v("#")]),t._v(" startMocking")]),t._v(" "),s("p",[t._v("Starts mocking of http requests.\nUsed by mockRequest method to automatically start\nmocking requests.")]),t._v(" "),s("h4",{attrs:{id:"parameters-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-5"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("title")]),t._v(" "),s("strong",[t._v("any")])])]),t._v(" "),s("h3",{attrs:{id:"stopmocking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stopmocking"}},[t._v("#")]),t._v(" stopMocking")]),t._v(" "),s("p",[t._v("Stops mocking requests.")])])}),[],!1,null,null,null);e.default=r.exports}}]);