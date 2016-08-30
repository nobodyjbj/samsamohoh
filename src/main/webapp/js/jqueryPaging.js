/*!************************************************************************************
 * jQuery Paging 0.2.1
 * by composite (ukjinplant@msn.com)
 * http://hazard.kr
 * This project licensed under a MIT License.
 **************************************************************************************/
!function(t){"use strict";var e,n=/a/i,r={item:"a",next:"[&gt;{5}]",prev:"[{4}&lt;]",format:"[{0}]",itemClass:"paging-item",sideClass:"paging-side",className:"jquery-paging",itemCurrent:"selected",length:10,max:1,current:1,append:!1,href:"#{0}",event:!0,first:"[1&lt;&lt;]",last:"[&gt;&gt;{6}]"},s=function(t){var e=arguments;return t.replace(/\{(\d+)}/g,function(t,n){return 0>+n?t:e[+n+1]||""})},i=function(r,i,a,l){if(e=document.createElement(r.item),e.className=a,e.innerHTML=s(l,i,r.length,r.start,r.end,r.start-1,r.end+1,r.max),n.test(r.item)&&(e.href=s(r.href,i)),r.event){t(e).bind("click",function(n){var s=!0;return t.isFunction(r.onclick)&&(s=r.onclick.call(e,n,i,r)),(void 0==s||s)&&t(r.origin).paging({current:i}),s}).appendTo(r.origin);var c="on";switch(l){case r.prev:c+="prev";break;case r.next:c+="next";break;case r.first:c+="first";break;case r.last:c+="last";break;default:c+="item"}t.isFunction(r[c])&&r[c].call(e,i,r)}return e};t.fn.paging=function(e){t(this).each(function(){if(this.__JQ_PAGING){if("destroy"===e)return t(this).removeClass(this.__JQ_PAGING.className).empty(),delete this.__JQ_PAGING,!0;if(e in this.__JQ_PAGING)return this.__JQ_PAGING[e];e=t.extend(this.__JQ_PAGING,e||{}),t(this).empty()}else{if(e instanceof String||"string"==typeof e)return!1;e=t.extend({origin:this},r,e||{}),t(this).addClass(e.className).empty()}e.max<1&&(e.max=1),e.current<1&&(e.current=1),e.start=~~((e.current-1)/e.length)*e.length+1,e.end=e.start-1+e.length,e.end>e.max&&(e.end=e.max),e.current>e.length&&(e.first!==!1&&i(e,1,e.sideClass,e.first),i(e,e.start-1,e.sideClass,e.prev));for(var n=e.start;n<=e.end;n++)i(e,n,e.itemClass+(n==e.current?" "+e.itemCurrent:""),e.format);e.current/e.length<e.max/e.length&&(e.end<e.max&&i(e,e.end+1,e.sideClass,e.next),e.last!==!1&&i(e,e.max,e.sideClass,e.last)),this.__JQ_PAGING=e})}}(jQuery);