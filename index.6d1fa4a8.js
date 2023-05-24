!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a("6JpON"),a("lw1f2"),a("i8Q71"),a("do8zY"),a("cfOGF");var r,c,l,i,s,d=a("lw1f2"),u=a("h6c0i"),m=a("cfOGF"),_=(d=a("lw1f2"),u=a("h6c0i"),a("jzQFI")),g=document.querySelector(".backdrop"),p=JSON.parse(localStorage.getItem("user-shop-list"))||[];localStorage.getItem("user")&&(r=(0,m.getUserFromLS)()),c=(0,_.loadLS)("books")?(0,_.loadLS)("books"):[];var f=!0;function v(e){(0,d.getBooksId)(e).then((function(t){if(t){l=e,i=t;var o=document.querySelector(".js-modal-body");o.innerHTML="",o.insertAdjacentHTML("beforeend",function(e){var t,o,n,a=e.author,r=e.book_image,c=e.title,l=e.description,i=e.buy_links;r||(r="../images/book_plug.jpg");l||(l="Discover a captivating tale that transports you to a world of imagination and wonder. Dive into the pages of this enchanting book, where compelling characters and thrilling plot twists await.");return i.forEach((function(e){"Amazon"===e.name&&(t=e.url),"Apple Books"===e.name&&(o=e.url),"Bookshop"===e.name&&(n=e.url)})),'<div class="modal__body">\n      <img src="'.concat(r,'" alt="').concat(c,'" class="modal__img">\n      <div class="modal__box">\n      <h2 class="modal__title">').concat(c,'</h2>\n      <h3 class="modal__subtitle">').concat(a,'</h3>\n      <p class="modal__text">').concat(l,'</p>\n      <ul class="modal__social-list">\n          <li class="modal__social-amazon">\n            <a class="modal__link-social-amazon" href="').concat(t,'" target="_blank"></a>\n          </li>\n          <li class="modal__social-open-book">\n          <a\n          class="modal__link-social-open-book"\n          href="').concat(o,'"\n          target="_blank"\n          ></a>\n          </li>\n          <li class="modal__social-book-shop">\n          <a\n          class="modal__link-social-book-shop"\n          href="').concat(n,'"\n          target="_blank"\n          ></a>\n          </li>\n          </ul>\n          </div>\n          </div>')}(t));f&&o.insertAdjacentHTML("afterend",'<div class = "js-btn-container"></div>'),(s=document.querySelector(".js-btn-container")).innerHTML=function(e){return(0,m.isUserSet)()?-1===c.indexOf(e)?'<button class="modal__button">add to shopping list</button>':'<button class="modal__button-remove">\n          remove from the shopping list\n          </button>':'<p class="modal__congratulation">\n            Sign in to add the book to your shopping list.\n            </p>'}(e),function(){g.classList.add("is-block"),document.body.classList.add("disable-scroll"),document.addEventListener("keydown",b);var e=document.querySelector(".backdrop");function t(o){o.target.classList.contains("backdrop")&&(h(),e.removeEventListener("click",t))}e.addEventListener("click",t)}();var n=document.querySelector(".modal__button");n&&n.addEventListener("click",k);var a=document.querySelector(".modal__button-remove");a&&a.addEventListener("click",y),document.querySelector(".js-close").addEventListener("click",h)}else u.Notify.failure("Sorry, an error has occurred")}))}function b(e){"Escape"===e.code&&(h(),document.removeEventListener("keydown",b))}function h(){f=!1,g.classList.remove("is-block"),document.body.classList.remove("disable-scroll")}function k(){r.booksArr.push(l),(0,m.setUserInLS)(r),(0,m.updateUserDatabase)(r),c.push(l),(0,_.saveLS)("books",c),p.push(i),localStorage.setItem("user-shop-list",JSON.stringify(p)),s.innerHTML='<div class="button__wrapper-remove">\n  <button class="modal__button-remove">\n  remove from the shopping list\n  </button>\n  </div>\n  <p class="modal__congratulation">\n  Сongratulations! You have added the book to the shopping list. To\n  delete, press the button “Remove from the shopping list”.\n  </p>',document.querySelector(".modal__button-remove").addEventListener("click",y)}function y(){r.booksArr.splice(r.booksArr.indexOf(l),1),(0,m.setUserInLS)(r),(0,m.updateUserDatabase)(r),c.splice(r.booksArr.indexOf(l),1),(0,_.saveLS)("books",c),s.innerHTML='<div class="button__wrapper-remove">\n  <button class="modal__button">add to shopping list</button>\n  </div>\n  <p class="modal__congratulation">\n  Сongratulations! You have removed the book from the shopping list. To\n  add, press the button “Add to shopping list”.\n  </p>',document.querySelector(".modal__button").addEventListener("click",k)}var L=document.querySelector(".filter__list"),S=document.querySelector(".filter__item--active"),T=document.querySelector(".js-gallery-best-books"),q=document.querySelector(".gallery-title"),E=document.querySelector(".filter__item"),w="ALL CATEGORIES";(0,d.getCategoryList)();function j(e){v(e.currentTarget.id)}(0,d.getCategoryList)().then((function(e){e.length?L.insertAdjacentHTML("beforeend",e.map((function(e){return'<li class="filter__item" data-mark-active="'.concat(e.list_name,'">').concat(e.list_name,"</li>")})).join("")):u.Notify.failure("Oops something going wrong.")})),E.addEventListener("click",(function(e){"All categories"!==e.target.textContent||location.reload()})),L.addEventListener("click",(function(e){var t;e.target.outerText.toLowerCase()!==w.toLowerCase()&&(w=e.target.outerText,function(){var e=document.querySelector('[data-mark-active="'.concat(w,'"]')),t=document.querySelector(".filter__item--active");t&&t.classList.remove("filter__item--active");S.classList.remove("filter__item--active"),e.classList.add("filter__item--active"),S=e}(),"All categories"!==e.target.textContent?(t=S.innerHTML,(0,d.getBooksCategory)(t).then((function(e){var o,n,a;e.length?(q.innerHTML=t,T.innerHTML=function(e){return e.map((function(e){var t=e._id,o=e.book_image,n=e.title,a=e.author;return o||(o="../images/book_plug.jpg"),'<li id="'.concat(t,'" class="books-gallery__card">\n     <div class="card-container">\n     <img class="books-gallery__card-img" src="').concat(o,'" alt="').concat(n,'" loading="lazy">\n     <div class="port-overlay"><p>quick view</p></div>\n     </div>\n     <h2 class="books-gallery__card-title">').concat(n,'</h2>\n     <p class="books-gallery__card-author">').concat(a,"</p>\n     </li>")})).join("")}(e),o=S.innerHTML.split(" "),n=o.pop(),a=o.join(" "),q.innerHTML="".concat(a,' <span class="books-gallery__title-accent">').concat(n,"</span>"),document.querySelectorAll(".books-gallery__card").forEach((function(e){e.addEventListener("click",j)}))):u.Notify.failure("Sorry, there are no ".concat(t," books. Please choose another category."))}))):location.reload())})),console.log(S);var A=a("8nrFW"),M=(d=a("lw1f2"),u=a("h6c0i"),document.querySelector(".js-gallery-best-books")),H=document.querySelector(".gallery-title");function x(e){v(e.currentTarget.id)}(0,d.getTopBooks)().then((function(e){e.length?(H.insertAdjacentHTML("beforeend",'Best Sellers <span class="gallery-title-span">Books</span>'),M.insertAdjacentHTML("beforeend",function(e){var t=[];return e.forEach((function(o,n){var a=e[n].books,r=[];a.forEach((function(e){var t=e._id,o=e.book_image,n=e.title,a=e.author;o||(o="../images/book_plug.jpg");var c='<li id="'.concat(t,'" class = "book-cards">\n              <div class = "card-container">\n                <img src="').concat(o,'" alt="').concat(n,'" loading="lazy">\n                  <div class="port-overlay">\n                    <p>quick view</p>\n                  </div>\n              </div>\n                <h2>').concat(n,"</h2>\n                <p>").concat(a,"</p>\n                </li>");r.push(c)}));var c='<button type="button" id="'.concat(e[n].list_name,'" class="book-class-more">\n        see more\n      </button>');t.push('<li class = "category-block">\n            <p class = "gallery-category-title">'.concat(e[n].list_name,'</p>\n            <ul class = "category-block-list">').concat(r.join(""),"</ul>\n            ").concat(c,"\n            </li>"))})),t.join("")}(e)),document.querySelectorAll(".book-cards").forEach((function(e){e.addEventListener("click",x)}))):u.Notify.failure("Sorry, there are no best sellers books. Please choose a category.")}));var O=document.querySelector(".books-gallery"),C="ALL CATEGORIES";O.addEventListener("click",(function(t){"button"===t.target.localName&&(C=t.target.getAttribute("id"),(0,d.getBooksCategory)(C).then((function(e){e.length?(H.innerHTML=C,M.innerHTML=function(e){return e.map((function(e){var t=e._id,o=e.book_image,n=e.title,a=e.author;return o||(o="../images/book_plug.jpg"),'<li id="'.concat(t,'" class="books-gallery__card">\n        <div class="card-container">\n        <img class="books-gallery__card-img" src="').concat(o,'" alt="').concat(n,'" loading="lazy">\n        <div class="port-overlay"><p>quick view</p></div>\n        </div>\n        <h2 class="books-gallery__card-title">').concat(n,'</h2>\n        <p class="books-gallery__card-author">').concat(a,"</p>\n        </li>")})).join("")}(e),function(){H.innerHTML;var e=C.split(" "),t=e.pop(),o=e.join(" ");H.innerHTML="".concat(o,' <span class="books-gallery__title-accent">').concat(t,"</span>")}(),document.querySelectorAll(".books-gallery__card").forEach((function(e){e.addEventListener("click",x)}))):u.Notify.failure("Sorry, there are no ".concat(C," books. Please choose another category."))})),function(t){var o=document.querySelectorAll(".filter__item");document.querySelector(".filter__item--active").classList.remove("filter__item--active");var n=e(A)(o).find((function(e){return e.textContent===t}));console.log(n),n.classList.add("filter__item--active")}(C))})),a("18VO4"),a("4op18"),a("jcFG7"),a("7hKzD"),a("925RR"),window.addEventListener("load",(function(){var e=document.querySelector(".animation");setTimeout((function(){e.style.display="none"}),2e3)}))}();
//# sourceMappingURL=index.6d1fa4a8.js.map