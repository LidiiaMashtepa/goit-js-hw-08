function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,c=l||f||Function("return this")(),s=Object.prototype.toString,m=Math.max,g=Math.min,d=function(){return c.Date.now()};function v(e,t,n){var o,i,r,a,u,l,f=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,f=t,a=e.apply(r,n)}function h(e){return f=e,u=setTimeout(w,t),c?y(e):a}function j(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-f>=r}function w(){var e=d();if(j(e))return O(e);u=setTimeout(w,function(e){var n=t-(e-l);return s?g(n,r-(e-f)):n}(e))}function O(e){return u=void 0,v&&o?y(e):(o=i=void 0,a)}function S(){var e=d(),n=j(e);if(o=arguments,i=this,l=e,n){if(void 0===u)return h(l);if(s)return u=setTimeout(w,t),y(l)}return void 0===u&&(u=setTimeout(w,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?m(b(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==u&&clearTimeout(u),f=0,o=l=i=u=void 0},S.flush=function(){return void 0===u?a:O(d())},S}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form");console.log(y),y.addEventListener("input",e(t)((function(e){"email"===e.target.name&&(h.email=e.target.value);h.message=e.target.value;const t=JSON.stringify(h);localStorage.setItem("feedback-form-state",t)}),500)),y.addEventListener("submit",(function(e){console.log("InputValues:",h),e.preventDefault(),localStorage.clear(),y.elements.email.value="",y.elements.message.value=""}));let h={};!function(){if(0!==localStorage.length){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);console.log(e),h.email=t.email,h.message=t.message,y.elements.email.value=t.email,y.elements.message.value=t.message,console.log()}}();
//# sourceMappingURL=03-feedback.b79dbf63.js.map
