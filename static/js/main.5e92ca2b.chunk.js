(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),i=a.n(r);a(15);function o(){return c.a.createElement("footer",{className:"page-footer blue lighten-4"},c.a.createElement("div",{className:"footer-copyright"},c.a.createElement("div",{className:"container"},"\xa9 ",(new Date).getFullYear()," Copyright Text",c.a.createElement("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/just36?tab=repositories"},"Repo"))))}function l(){return c.a.createElement("nav",{className:"blue lighten-1"},c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement("a",{href:"/react-shop",className:"brand-logo"},"React Shop"),c.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/just36?tab=repositories"},"Repo")))))}var s=a(5),u=a(2),m=a(1),d="bbc2fc3e-1c7a9e08-8971c74c-ff07f848",f="https://fortniteapi.io/v1/shop?lang=en";function p(e){var t=e.id,a=e.name,n=e.description,r=e.price,i=e.full_background,o=e.addToBasket,l=void 0===o?Function.prototype:o;return c.a.createElement("div",{className:"card",id:t},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:i,alt:a,onError:function(e){e.target.src="https://via.placeholder.com/400/FF0000/FFFFFF?text=".concat(a)}})),c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},a),c.a.createElement("p",null,n)),c.a.createElement("div",{className:"card-action"},c.a.createElement("button",{className:"btn",onClick:function(){return l({id:t,name:a,price:r})}},"\u041a\u0443\u043f\u0438\u0442\u044c"),c.a.createElement("span",{className:"right price"},r," \u0440\u0443\u0431.")))}function E(e){var t=e.items,a=void 0===t?[]:t,n=e.addToBasket,r=void 0===n?Function.prototype:n;return a.length?c.a.createElement("div",{className:"items"},a.reduce(function(e,t){return e.find(function(e){return e.id===t.id})||e.push(t),e},[]).map(function(e){return c.a.createElement(p,Object.assign({key:e.id},e,{addToBasket:r}))})):c.a.createElement("h3",null,"Nothing Here")}function v(){return c.a.createElement("div",{className:"progress"},c.a.createElement("div",{className:"indeterminate"}))}function h(e){var t=e.quantity,a=void 0===t?0:t,n=e.handleBasketShow,r=void 0===n?Function.prototype:n;return c.a.createElement("div",{onClick:function(){return r()},className:"cart blue darken-4 white-text"},c.a.createElement("i",{className:"material-icons"},"shopping_basket"),a?c.a.createElement("span",{className:"card-quantity"},a):null)}function b(e){var t=e.id,a=e.name,n=e.price,r=e.quantity,i=e.removeFromBasket,o=e.incQuantity,l=e.decQuantity;return c.a.createElement("li",{className:"collection-item"},a,c.a.createElement("i",{className:"material-icons basket-quantity",onClick:function(){return l(t)}},"remove"),r,c.a.createElement("i",{className:"material-icons basket-quantity",onClick:function(){return o(t)}},"add"),"= ",n*r," \u0440\u0443\u0431.",c.a.createElement("span",{onClick:function(){return i(t)},className:"secondary-content"},c.a.createElement("i",{className:"material-icons close-icon"},"close")))}function y(e){var t=e.order,a=e.handleBasketShow,n=void 0===a?Function.prototype:a,r=e.removeFromBasket,i=void 0===r?Function.prototype:r,o=e.incQuantity,l=void 0===o?Function.prototype:o,s=e.decQuantity,u=void 0===s?Function.prototype:s,m=t.reduce(function(e,t){return e+t.price*t.quantity},0);return c.a.createElement("ul",{className:"collection basket-list"},c.a.createElement("li",{className:"collection-item active"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"),t.length?t.map(function(e){return c.a.createElement(b,Object.assign({key:e.id,removeFromBasket:i,incQuantity:l,decQuantity:u},e))}):c.a.createElement("li",{className:"collection-item"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"),c.a.createElement("li",{className:"collection-item active"},"\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",m," \u0440\u0443\u0431."),c.a.createElement("li",{className:"collection-item"},c.a.createElement("button",{className:"btn btn-small"},"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c")),c.a.createElement("i",{onClick:function(){return n()},className:"material-icons basket-close"},"close"))}function N(e){var t=e.name,a=void 0===t?"":t,r=e.closeAlert,i=void 0===r?Function.prototype:r;return Object(n.useEffect)(function(){var e=setTimeout(i,3e3);return function(){clearTimeout(e)}},[a]),c.a.createElement("div",{id:"toast-container"},c.a.createElement("div",{className:"toast"},a," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"))}function g(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!0),o=Object(m.a)(i,2),l=o[0],p=o[1],b=Object(n.useState)([]),g=Object(m.a)(b,2),k=g[0],j=g[1],F=Object(n.useState)(!1),O=Object(m.a)(F,2),q=O[0],w=O[1],B=Object(n.useState)(""),S=Object(m.a)(B,2),Q=S[0],x=S[1],C=function(){w(!q)};return Object(n.useEffect)(function(){fetch(f,{headers:{Authorization:d}}).then(function(e){return e.json()}).then(function(e){e.featured&&r(e.featured),p(!1)}).catch(function(e){p(!1),console.error(e)})},[]),c.a.createElement("main",{className:"container content"},c.a.createElement(h,{quantity:k.length,handleBasketShow:C}),l?c.a.createElement(v,null):c.a.createElement(E,{items:a,addToBasket:function(e){var t=k.findIndex(function(t){return t.id===e.id});if(t<0){var a=Object(u.a)({},e,{quantity:1});j([].concat(Object(s.a)(k),[a]))}else{var n=k.map(function(e,a){return a===t?Object(u.a)({},e,{quantity:e.quantity+1}):e});j(n)}x(e.name)}}),q&&c.a.createElement(y,{order:k,handleBasketShow:C,removeFromBasket:function(e){j(k.filter(function(t){return t.id!==e}))},incQuantity:function(e){j(k.map(function(t){if(t.id===e){var a=t.quantity+1;return Object(u.a)({},t,{quantity:a})}return t}))},decQuantity:function(e){j(k.map(function(t){if(t.id===e){var a=t.quantity-1;return Object(u.a)({},t,{quantity:a>=0?a:0})}return t}))}}),Q&&c.a.createElement(N,{name:Q,closeAlert:function(){x("")}}))}var k=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(c.a.Fragment,null,c.a.createElement(l,null),c.a.createElement(g,null),c.a.createElement(o,null)))};i.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)))},6:function(e,t,a){e.exports=a(17)}},[[6,2,1]]]);
//# sourceMappingURL=main.5e92ca2b.chunk.js.map