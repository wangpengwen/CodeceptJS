(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{298:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"visual-testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visual-testing"}},[t._v("#")]),t._v(" Visual Testing")]),t._v(" "),a("p",[t._v("How does one test if the UI being rendered appears correctly to the users or how to test if each UI element appears in the right position and size? The traditional way to test the UI of the application has always been manually, which is time consuming.")]),t._v(" "),a("p",[t._v("Visual testing with help of CodeceptJS will help in improving such use cases for the QA folks.")]),t._v(" "),a("p",[t._v("By default CodeceptJS uses "),a("router-link",{attrs:{to:"/helpers/WebDriver/"}},[t._v("WebDriver")]),t._v(" helper and "),a("strong",[t._v("Selenium")]),t._v(" to automate browser. It is also capable of taking screenshots of the application and this could be used for visual testing.")],1),t._v(" "),a("p",[t._v("Currently there are two helpers available for Visual testing with CodeceptJS")]),t._v(" "),a("h2",{attrs:{id:"using-resemble-helper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-resemble-helper"}},[t._v("#")]),t._v(" Using Resemble helper")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/rsmbl/Resemble.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Resemble.js"),a("OutboundLink")],1),t._v(" is a great tool for image comparison and analysis, which can be used with CodeceptJS")]),t._v(" "),a("h3",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),a("p",[t._v("To install the package, just run")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install codeceptjs-resemblehelper --save\n")])])]),a("h3",{attrs:{id:"configuring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring"}},[t._v("#")]),t._v(" Configuring")]),t._v(" "),a("p",[t._v("This helper should be added to "),a("code",[t._v("codecept.conf.js")]),t._v(" config file.")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"helpers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ResembleHelper"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"require"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"codeceptjs-resemblehelper"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"screenshotFolder"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./tests/output/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"baseFolder"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./tests/screenshots/base/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"diffFolder"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./tests/screenshots/diff/"')]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("To use the Helper, users must provide the three parameters:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("screenshotFolder")]),t._v(" : This will always have the same value as "),a("code",[t._v("output")]),t._v(" in Codecept configuration, this is the folder where webdriverIO\nsaves a screenshot when using "),a("code",[t._v("I.saveScreenshot")]),t._v(" method")]),t._v(" "),a("li",[a("code",[t._v("baseFolder")]),t._v(": This is the folder for base images, which will be used with screenshot for comparison")]),t._v(" "),a("li",[a("code",[t._v("diffFolder")]),t._v(": This will the folder where resemble would try to store the difference image, which can be viewed later.")])]),t._v(" "),a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("Details about the helper can be found on the "),a("a",{attrs:{href:"https://github.com/puneet0191/codeceptjs-resemblehelper",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Repo"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Base Image is compared with the screenshot image and test results are derived based on the "),a("code",[t._v("mismatch tolerance")]),t._v(" level provided by the user for the comparison")]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("p",[t._v("Lets consider visual testing for "),a("a",{attrs:{href:"http://codecept.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("CodeceptJS Home"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Feature")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'To test screen comparison with resemble Js Example test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Scenario")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Compare CodeceptIO Home Page @visual-test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("amOnPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("saveScreenshot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Codecept_IO_Screenshot_Image.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("seeVisualDiff")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Codecept_IO_Screenshot_Image.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("tolerance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prepareBaseImage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("In this example, we are setting the expected mismatch tolerance level as "),a("code",[t._v("2")])]),t._v(" "),a("p",[a("code",[t._v("Base Image")]),t._v(" (Generated by User)\n"),a("img",{attrs:{src:"/img/Codecept_IO_Base_Image.png",alt:"Base Image"}})]),t._v(" "),a("p",[a("code",[t._v("Screenshot Image")]),t._v(" (Generated by Test)\n"),a("img",{attrs:{src:"/img/Codecept_IO_Screenshot_Image.png",alt:"Screenshot Image"}})]),t._v(" "),a("p",[t._v("Clearly the difference in both the images visible to human eye is the section about "),a("code",[t._v("Scenario Driven")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/difference_Image_Codecept_Home.png",alt:"Difference Image"}})]),t._v(" "),a("p",[a("code",[t._v("Diff Image")]),t._v(" generated by the helper clearly highlights the section which don't match")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/Difference%20Image%20Focus.png",alt:"Highlight"}})]),t._v(" "),a("p",[a("code",[t._v("Failed Test output")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('To test screen comparison with resemble Js Example test --\n  Compare CodeceptIO Home Page @visual-test\n    I see Visual Diff "Codecept_IO_Screenshot_Image.png", {tolerance: 2, prepareBaseImage: false}\nMisMatch Percentage Calculated is 2.85\n  ✖ FAILED in 418ms\n\n\n-- FAILURES:\n\n  1) To test screen comparison with resemble Js Example test\n       Compare CodeceptIO Home Page @visual-test:\n\n      MissMatch Percentage 2.85\n      + expected - actual\n\n      -false\n      +true\n')])])]),a("p",[a("code",[t._v("Codeceptjs-resemblehelper")]),t._v(" basically comes with two major functions")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("seeVisualDiff")]),t._v(" which can be used to compare two images and calculate the misMatch percentage.")]),t._v(" "),a("li",[a("code",[t._v("seeVisualDiffForElement")]),t._v(" which can be used to compare elements on the two images and calculate misMatch percentage.")])]),t._v(" "),a("h2",{attrs:{id:"using-visual-knight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-visual-knight"}},[t._v("#")]),t._v(" Using Visual Knight")]),t._v(" "),a("p",[t._v("Visual Knight is a SaaS product which strongly supports CodeceptJS with multiple use cases. It provides an user interface to handle mismatches, statistics and more. It was designed to support Designer, Product Owner and other roles which are not familiar with coding and all this tools. All captured images are saved in a secure cloud system to not mess up your git repository.")]),t._v(" "),a("h3",{attrs:{id:"setup-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-2"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),a("p",[t._v("Create an account at "),a("a",{attrs:{href:"https://www.visual-knight.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Knight"),a("OutboundLink")],1),t._v(" and install the npm package")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install @visual-knight/codeceptjs -D\n")])])]),a("h3",{attrs:{id:"configuring-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-2"}},[t._v("#")]),t._v(" Configuring")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"helpers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"VisualKnight"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"require"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@visual-knight/codeceptjs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_API_KEY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"project"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_PROJECT_ID OR PROJECT_NAME"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"usage-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param testName {string} Is provided to visual knight (must be unique)\n * @param options {ScreenshotOptions} Contains additional settings\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareFullpageScreenshot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("testName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param testName {string} Is provided to visual knight (must be unique)\n * @param options {ScreenshotOptions} Contains additional settings\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareViewportScreenshot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("testName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param cssSelector {string} Is provided to visual knight\n * @param testName {string} Is provided to visual knight (must be unique)\n * @param options {ScreenshotOptions} Contains additional settings\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareElementScreenshot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cssSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" testName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*\nScreenshotOptions {\n  hide?: string[] // Array of css selectors which gets hidden by "opacity: 0",\n  remove?: string[] // Array of css selectors which gets hidden by "display: none",\n  additional?: object // Data is saved as relation to the variation. (Future: can be used for filtering)\n}\n*/')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("You can find the latest documentation here "),a("a",{attrs:{href:"https://doc.visual-knight.io/adapters/codeceptjs",target:"_blank",rel:"noopener noreferrer"}},[t._v("CodeceptJS helper page"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("p",[t._v("Lets consider visual testing for "),a("a",{attrs:{href:"http://codecept.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("CodeceptJS Home"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Feature")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'To test screen comparison with Visual Knight Example test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Scenario")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Compare CodeceptIO Home Page @visual-test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" adminPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("amOnPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareFullpageScreenshot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CodeceptIO Home Page"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Depending of your configuration this test will fail if no baseline exists and log the link to the image to accept or automatically accept the first run as baseline.")]),t._v(" "),a("blockquote",[a("p",[t._v("You can accept the first image as baseline automatically via "),a("code",[t._v("autoBaseline: true")]),t._v(" "),a("em",[t._v("default is false")])])]),t._v(" "),a("h2",{attrs:{id:"using-applitools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-applitools"}},[t._v("#")]),t._v(" Using Applitools")]),t._v(" "),a("p",[t._v("Applitools helps Test Automation engineers, DevOps, and FrontEnd Developers continuously test and validate visually perfect mobile, web, and native apps. Now it can be used with CodeceptJS.")]),t._v(" "),a("h3",{attrs:{id:"setup-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-3"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),a("p",[t._v("Create an account at "),a("a",{attrs:{href:"https://applitools.com/users/register",target:"_blank",rel:"noopener noreferrer"}},[t._v("Applitools"),a("OutboundLink")],1),t._v(" and install the npm packages")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm i codeceptjs-applitoolshelper --save\nnpm i webdriverio@5 --save\n")])])]),a("h3",{attrs:{id:"configuring-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-3"}},[t._v("#")]),t._v(" Configuring")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  helpers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    WebDriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://applitools.com/helloworld'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      browser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chrome'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      desiredCapabilities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        chromeOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--headless'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--disable-extensions'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--disable-gpu'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--no-sandbox'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--disable-dev-shm-usage'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      windowSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1920x600'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      smartWait"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      timeouts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'page load'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ApplitoolsHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'codeceptjs-applitoolshelper'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      applitoolsKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YOUR_API_KEY'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("h4",{attrs:{id:"to-use-this-helper-you-need-to-provide-the-following-info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to-use-this-helper-you-need-to-provide-the-following-info"}},[t._v("#")]),t._v(" To use this helper you need to provide the following info:")]),t._v(" "),a("ul",[a("li",[t._v("applitoolsKey (Required): You can find your API key under the user menu located at the right hand side of the test manager toolbar")]),t._v(" "),a("li",[t._v("windowSize (Optional): the windows size as for instance 1440x700, if not provided, the default 1920x600 will be used. The windowSize will follow this precedence: ApplitoolsHelper, Webdriver.")]),t._v(" "),a("li",[t._v("appName (Optional): you can either provide your desired application name, if not provided, the default 'Application Under Test' will be used.")])]),t._v(" "),a("h3",{attrs:{id:"usage-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-3"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param pageToCheck {string} Name of page you want to check\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("eyeCheck")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pageToCheck"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("The first time you run this test a new baseline will be created, and subsequent test runs will be compared to this baseline. If any screenshot mismatch its baseline image in a perceptible way, there will be a "),a("code",[t._v("DiffsFoundException")]),t._v(" which includes a URL that points to a detailed report where you can see the detected differences and take appropriate actions such as reporting bugs, updating the baseline and more.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FAILURES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Applitools functionality\n       Check home page @test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     Test "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Applitools functionality'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Application Under Test'")]),t._v(" detected differences"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" See details at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("eyes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("applitools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("batches"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00000251831777088983")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00000251831777088717")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("accountId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("KO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Oh9tXI0e8VF8Ha_GLVA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("You can find the latest documentation here "),a("a",{attrs:{href:"https://applitools.com/tutorials/webdriverio5.html#run-your-first-test",target:"_blank",rel:"noopener noreferrer"}},[t._v("Applitools Docs"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"example-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("p",[t._v("Lets consider visual testing for "),a("a",{attrs:{href:"http://codecept.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("CodeceptJS Home"),a("OutboundLink")],1),t._v(".\nYou can also find example repo here: https://github.com/PeterNgTr/codeceptjs-applitoolshelper")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("inject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Feature")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Applitools functionality'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("amOnPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://applitools.com/helloworld'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Scenario")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Check home page @test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("eyeCheck")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Homepage'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);