(()=>{"use strict";function t(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var n=document.querySelector(".option_btn_more"),r=document.querySelectorAll(".option_btn_disable");console.log(r),n.addEventListener("click",(function(){n.classList.add("option_btn_disable");var e,o=function(n,r){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=function(n,r){if(n){if("string"==typeof n)return t(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?t(n,r):void 0}}(n))||r&&n&&"number"==typeof n.length){e&&(n=e);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,u=!1;return{s:function(){e=e.call(n)},n:function(){var t=e.next();return l=t.done,t},e:function(t){u=!0,a=t},f:function(){try{l||null==e.return||e.return()}finally{if(u)throw a}}}}(r);try{for(o.s();!(e=o.n()).done;)e.value.classList.remove("option_btn_disable")}catch(t){o.e(t)}finally{o.f()}}))})();
//# sourceMappingURL=main.js.map