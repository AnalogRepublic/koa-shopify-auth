'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var polarisCss =
  'html,\nbody {\n  min-height: 100%;\n  height: 100%;\n  font-size: 1.5rem;\n  font-weight: 400;\n  line-height: 2rem;\n  text-transform: initial;\n  letter-spacing: initial;\n  font-weight: 400;\n  color: #212b36;\n  font-family: -apple-system, BlinkMacSystemFont, San Francisco, Roboto,\n    Segoe UI, Helvetica Neue, sans-serif;\n}\n\n@media (min-width: 40em) {\n  html,\n  body {\n    font-size: 1.4rem;\n  }\n}\n\nhtml {\n  position: relative;\n  font-size: 62.5%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  text-size-adjust: 100%;\n  text-rendering: optimizeLegibility;\n}\n\nbody {\n  min-height: 100%;\n  margin: 0;\n  padding: 0;\n  background-color: #f4f6f8;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin: 0;\n  font-size: 1em;\n  font-weight: 400;\n}\n\n#CookiePartitionPrompt, #RequestStorageAccess {\n  display: none;\n}\n\n.Polaris-Page {\n  margin: 0 auto;\n  padding: 0;\n  max-width: 99.8rem;\n}\n\n@media (min-width: 30.625em) {\n  .Polaris-Page {\n    padding: 0 2rem;\n  }\n}\n@media (min-width: 46.5em) {\n  .Polaris-Page {\n    padding: 0 3.2rem;\n  }\n}\n\n.Polaris-Page__Content {\n  margin: 2rem 0;\n}\n\n@media (min-width: 46.5em) {\n  .Polaris-Page__Content {\n    margin-top: 2rem;\n  }\n}\n\n@media (min-width: 46.5em) {\n  .Polaris-Page {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n  }\n}\n\n.Polaris-Layout {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  margin-top: -2rem;\n  margin-left: -2rem;\n}\n\n.Polaris-Layout__Section {\n  -webkit-box-flex: 2;\n  -ms-flex: 2 2 48rem;\n  flex: 2 2 48rem;\n  min-width: 51%;\n}\n\n.Polaris-Layout__Section--fullWidth {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 100%;\n  flex: 1 1 100%;\n}\n\n.Polaris-Layout__Section {\n  max-width: calc(100% - 2rem);\n  margin-top: 2rem;\n  margin-left: 2rem;\n}\n\n.Polaris-Stack {\n  margin-top: -1.6rem;\n  margin-left: -1.6rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n}\n\n.Polaris-Stack > .Polaris-Stack__Item {\n  margin-top: 1.6rem;\n  margin-left: 1.6rem;\n  max-width: calc(100% - 1.6rem);\n}\n\n.Polaris-Stack__Item {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  min-width: 0;\n}\n\n.Polaris-Heading {\n  font-size: 1.7rem;\n  font-weight: 600;\n  line-height: 2.4rem;\n  margin: 0;\n}\n\n@media (min-width: 40em) {\n  .Polaris-Heading {\n    font-size: 1.6rem;\n  }\n}\n\n.Polaris-Card {\n  overflow: hidden;\n  background-color: white;\n  box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05),\n    0 1px 3px 0 rgba(63, 63, 68, 0.15);\n}\n\n.Polaris-Card + .Polaris-Card {\n  margin-top: 2rem;\n}\n\n@media (min-width: 30.625em) {\n  .Polaris-Card {\n    border-radius: 3px;\n  }\n}\n\n.Polaris-Card__Header {\n  padding: 2rem 2rem 0;\n}\n\n.Polaris-Card__Section {\n  padding: 2rem;\n}\n\n.Polaris-Card__Section + .Polaris-Card__Section {\n  border-top: 1px solid #dfe3e8;\n}\n\n.Polaris-Card__Section--subdued {\n  background-color: #f9fafb;\n}\n\n.Polaris-Stack--distributionTrailing {\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n}\n\n.Polaris-Stack--vertical {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\n.Polaris-Button {\n  fill: #637381;\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  min-height: 3.6rem;\n  min-width: 3.6rem;\n  margin: 0;\n  padding: 0.7rem 1.6rem;\n  background: linear-gradient(to bottom, white, #f9fafb);\n  border: 1px solid #c4cdd5;\n  box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);\n  border-radius: 3px;\n  line-height: 1;\n  color: #212b36;\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  text-decoration: none;\n  transition-property: background, border, box-shadow;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.64, 0, 0.35, 1);\n}\n\n.Polaris-Button:hover {\n  background: linear-gradient(to bottom, #f9fafb, #f4f6f8);\n  border-color: #c4cdd5;\n}\n\n.Polaris-Button:focus {\n  border-color: #5c6ac4;\n  outline: 0;\n  box-shadow: 0 0 0 1px #5c6ac4;\n}\n\n.Polaris-Button:active {\n  background: linear-gradient(to bottom, #f4f6f8, #f4f6f8);\n  border-color: #c4cdd5;\n  box-shadow: 0 0 0 0 transparent, inset 0 1px 1px 0 rgba(99, 115, 129, 0.1),\n    inset 0 1px 4px 0 rgba(99, 115, 129, 0.2);\n}\n\n.Polaris-Button.Polaris-Button--disabled {\n  fill: #919eab;\n  transition: none;\n  background: linear-gradient(to bottom, #f4f6f8, #f4f6f8);\n  color: #919eab;\n}\n\n.Polaris-Button__Content {\n  font-size: 1.5rem;\n  font-weight: 400;\n  line-height: 1.6rem;\n  text-transform: initial;\n  letter-spacing: initial;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  min-width: 1px;\n  min-height: 1px;\n}\n\n@media (min-width: 40em) {\n  .Polaris-Button__Content {\n    font-size: 1.4rem;\n  }\n}\n\n.Polaris-Button--primary {\n  background: linear-gradient(to bottom, #6371c7, #5563c1);\n  border-color: #3f4eae;\n  box-shadow: inset 0 1px 0 0 #6774c8, 0 1px 0 0 rgba(22, 29, 37, 0.05),\n    0 0 0 0 transparent;\n  color: white;\n  fill: white;\n}\n\n.Polaris-Button--primary:hover {\n  background: linear-gradient(to bottom, #5c6ac4, #4959bd);\n  border-color: #3f4eae;\n  color: white;\n  text-decoration: none;\n}\n\n.Polaris-Button--primary:focus {\n  border-color: #202e78;\n  box-shadow: inset 0 1px 0 0 #6f7bcb, 0 1px 0 0 rgba(22, 29, 37, 0.05),\n    0 0 0 1px #202e78;\n}\n\n.Polaris-Button--primary:active {\n  background: linear-gradient(to bottom, #3f4eae, #3f4eae);\n  border-color: #38469b;\n  box-shadow: inset 0 0 0 0 transparent, 0 1px 0 0 rgba(22, 29, 37, 0.05),\n    0 0 1px 0 #38469b;\n}\n\n.Polaris-Button--primary.Polaris-Button--disabled {\n  fill: white;\n  background: linear-gradient(to bottom, #bac0e6, #bac0e6);\n  border-color: #a7aedf;\n  box-shadow: none;\n  color: white;\n}';
exports.default = polarisCss;
