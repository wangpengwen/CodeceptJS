(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{290:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"testing-with-nightmare"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-with-nightmare"}},[t._v("#")]),t._v(" Testing with Nightmare")]),t._v(" "),a("p",[t._v("Selenium WebDriver is considered to be standard for end to end testing of web applications.\nDespite its popularity it have its drawbacks, it requires a real browser and Selenium server to control it.\nThis hardens setting it up testing environment for CI server and slows down test execution.")]),t._v(" "),a("p",[t._v("Is there a sane alternative to Selenium?")]),t._v(" "),a("p",[t._v("Yes, how about "),a("a",{attrs:{href:"http://www.nightmarejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("NightmareJS"),a("OutboundLink")],1),t._v("?")]),t._v(" "),a("p",[t._v("It is modern Electron based testing framework which allows to execute tests in headless mode as well as in window mode for debug purposes.\nThis makes Nightmare very useful, much more handy than PhantomJS. Nightmare is in active development and has nice API for writing acceptance tests.\nUnfortunately, as all other JavaScript testing frameworks it has its own very custom API.\nWhat if you choose it for a project and suddenly you realize that you need something more powerful, like Selenium?\nYes, that might be a problem if you are not using CodeceptJS.\nThe one idea behind CodeceptJS is to unify different testing backends under one API, so you could easily write tests the same way no matter what engines you use: webdriverio, Protractor, or Nightmare.")]),t._v(" "),a("p",[t._v("Compare a test written using Nightmare API:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("nightmare\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("goto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://yahoo.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'form[action*=\"/search\"] [name=p]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'github nightmare'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'form[action*=\"/search\"] [type=submit]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#main'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("evaluate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#main .searchCenterMiddle li a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("with a similar CodeceptJS test:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("amOnPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://yahoo.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'github nightmare'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Search Web'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("waitForElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#main'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("seeElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#main .searchCenterMiddle li a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("seeElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"//a[contains(@href,'github.com/segmentio/nightmare')]\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("see")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'segmentio/nightmare'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#main li a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("NightmareJS support only CSS locators for web elements, while CodeceptJS improves it to use XPath as well.\nThis is how form can be located by labels, and buttons by text in examples above. It is done by injecting\nclient-side scrips (for element location) to every loaded page. Also all events like click, doubleClick, keyPress are "),a("strong",[t._v("simulated")]),t._v(" by JavaScript,\nthis makes testing less relevant, as they are not native to operating systems.")]),t._v(" "),a("h2",{attrs:{id:"how-fast-is-nightmare-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-fast-is-nightmare-js"}},[t._v("#")]),t._v(" How Fast Is Nightmare JS?")]),t._v(" "),a("p",[t._v("Let's execute the test above within WebDriver using headless Firefox + Selenium Server packed in Docker container.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("docker run -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4444")]),t._v(":4444 selenium/standalone-firefox:2.53.0\ncodeceptjs run yahoo_test.js --steps\n")])])]),a("p",[t._v("This provides use with output:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v(" Yahoo basic "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" WebDriver._before\n • I am on page "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://yahoo.com"')]),t._v("\n • I fill field "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github nightmare"')]),t._v("\n • I click "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Search Web"')]),t._v("\n • I "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" element "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#main"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n • I see element "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#main .searchCenterMiddle li a"')]),t._v("\n • I see "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"segmentio/nightmare"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"li a"')]),t._v("\n ✓ OK "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" 17591ms\n")])])]),a("p",[t._v("When we switch helper to Nightmare:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v(" Yahoo basic "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Nightmare._before\n • I am on page "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://yahoo.com"')]),t._v("\n • I fill field "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github nightmare"')]),t._v("\n • I click "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Search Web"')]),t._v("\n • I "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" element "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#main"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n • I see element "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#main .searchCenterMiddle li a"')]),t._v("\n • I see "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"segmentio/nightmare"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"li a"')]),t._v("\n ✓ OK "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" 5490ms\n")])])]),a("p",[t._v("As you see the Nightmare test was almost "),a("strong",[t._v("3 times faster")]),t._v(" than Selenium test.\nSure, this can't be taken as a valuable benchmark but more like a proof of concept.")]),t._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),a("p",[t._v("To start you need CodeceptJS with nightmare package installed.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g nightmare\n")])])]),a("p",[t._v("And a basic project initialized")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("codeceptjs init\n")])])]),a("p",[t._v("You will be asked for a Helper to use, you should select Nightmare and provide url of a website you are testing.\nSetup process is explained on "),a("a",{attrs:{href:"http://codecept.io/quickstart/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QuickStart page"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("(If you already have CodeceptJS project, just install nightmare globally or locally and enable it in config)")]),t._v(" "),a("h2",{attrs:{id:"configuring-nightmare"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-nightmare"}},[t._v("#")]),t._v(" Configuring Nightmare")]),t._v(" "),a("p",[t._v("Enable "),a("code",[t._v("Nightmare")]),t._v(" helper in "),a("code",[t._v("codecept.json")]),t._v(" config:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ..")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"helpers"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Nightmare"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"show"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"restart"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ..")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Turn on the "),a("code",[t._v("show")]),t._v(" option if you want to follow test progress in a window. This is very useful for debugging.\nAll other options can be taken from "),a("a",{attrs:{href:"https://github.com/segmentio/nightmare#api",target:"_blank",rel:"noopener noreferrer"}},[t._v("NightmareJS API"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Turn off the "),a("code",[t._v("restart")]),t._v(" option if you want to run your suite in a single browser instance.")]),t._v(" "),a("p",[t._v("Option "),a("code",[t._v("waitForAction")]),t._v(" defines how long to wait after a click, doubleClick or pressKey action is performed.\nTest execution may happen much faster than the response is rendered, so make sure you set a proper delay value.\nBy default CodeceptJS waits for 500ms.")]),t._v(" "),a("h2",{attrs:{id:"opening-a-web-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opening-a-web-page"}},[t._v("#")]),t._v(" Opening a Web Page")]),t._v(" "),a("p",[t._v("Nightmare provides you with more control to browser engine than Selenium does.\nThis allows you to use headers in your tests. For instance, CodeceptJS provides "),a("code",[t._v("haveHeader")]),t._v(" method\nto set default headers for all your HTTP requests:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("haveHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-tested-with'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'codeceptjs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("When opening a web page you can set headers as well. "),a("code",[t._v("amOnPage")]),t._v(" methods can take headers as second parameter:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use basic http auth")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("amOnPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/admin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Basic '")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("token "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("As a small bonus: all "),a("code",[t._v("console.log")]),t._v(" calls on a page will be also shown in "),a("code",[t._v("--debug")]),t._v(" mode.")]),t._v(" "),a("h2",{attrs:{id:"manipulating-web-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manipulating-web-page"}},[t._v("#")]),t._v(" Manipulating Web Page")]),t._v(" "),a("p",[t._v("Nightmare helper is supposed to work in the same manner as WebDriver or Protractor.\nThis means that all CodeceptJS actions like "),a("code",[t._v("click")]),t._v(", "),a("code",[t._v("fillField")]),t._v(", "),a("code",[t._v("selectOption")]),t._v(" and others are supposed to work in the very same manner.\nThey are expressive and flexible to accept CSS, XPath, names, values, or strict locators. Follow the helper reference for detailed description.")]),t._v(" "),a("p",[t._v("Assertions start with "),a("code",[t._v("see")]),t._v(" prefix. You can check text on a page, elements on page and others.")]),t._v(" "),a("h2",{attrs:{id:"extending-nightmare-helper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extending-nightmare-helper"}},[t._v("#")]),t._v(" Extending Nightmare Helper")]),t._v(" "),a("p",[t._v("CodeceptJS allows you to define and connect own helpers. If some functionality of\nNightmare helper is missing you can easily create "),a("code",[t._v("ExtendedNightmare")]),t._v(" helper by running:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("codeceptjs gh\n")])])]),a("p",[t._v("Learn more about "),a("a",{attrs:{href:"http://codecept.io/helpers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Helpers"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Nightmare instance can be accessed by custom helper:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns current nightmare instance")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("helpers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Nightmare'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("browser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("This way you can call "),a("a",{attrs:{href:"https://github.com/segmentio/nightmare#interact-with-the-page",target:"_blank",rel:"noopener noreferrer"}},[t._v("native Nightmare commands"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("It is important to understand that Nightmare executes JavaScript on client and on server side.\nIf you need to find an element you should search for it using client side script, but if you want\nto do an assertion you should return a data to server side.")]),t._v(" "),a("p",[t._v("Nightmare provides "),a("code",[t._v("evaluate")]),t._v(" method to execute client-side JavaScript. CodeceptJS registers "),a("code",[t._v("codeceptjs")]),t._v("\nobject globally on client side with "),a("code",[t._v("findElement")]),t._v(" and "),a("code",[t._v("findElements")]),t._v(" methods in it. They return IDs of matched elements\nso you can access them in next calls to "),a("code",[t._v("evaluate")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// inside a custom helper class")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("seeAttributeContains")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("locator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attribute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expectedValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// let's use chai assertion library")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" assert "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chai'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get nightmare instance")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" browser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("helpers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Nightmare'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("browser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// find an element by CSS or XPath:")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" els "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("helpers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Nightmare'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_locate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("locator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we received an array with IDs of matched elements")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// now let's execute client-side script to get attribute for the first element")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" attributeValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" browser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("evaluate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this is executed inside a web page!")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" codeceptjs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("attribute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" els"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attribute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// function + its params")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get attribute value and back to server side")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// execute an assertion")]),t._v("\n  assert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("include")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("attributeValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expectedValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("It can be used in tests like:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("seeAttributeContains")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#main img'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/cat.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("This sample assertion used "),a("code",[t._v("_locate")]),t._v(" helper method which searched for elements\nby CSS/XPath or a strict locator. Then "),a("code",[t._v("browser.evaluate")]),t._v(" method was called to\nuse locate found elements on a page and return attribute from the first of them.")]),t._v(" "),a("h2",{attrs:{id:"additional-links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-links"}},[t._v("#")]),t._v(" Additional Links")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://codenroll.it/acceptance-testing-with-codecept-js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nightmare Tutorial"),a("OutboundLink")],1),t._v(" by jploskonka.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);