import{a as g,S as h,i as p}from"./assets/vendor-1AYLTIiv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const _=void 0,L="https://pixabay.com/api/";function $(r){return g.get(L,{params:{key:_,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{throw new Error(t.message)})}const c=document.querySelector(".gallery"),a=document.querySelector(".loader");function b(r){if(!c||!Array.isArray(r))return;const t=r.map(w).join("");c.insertAdjacentHTML("beforeend",t)}function w({webformatURL:r,webformatWidth:t,webformatHeight:n,largeImageURL:s,tags:e,likes:o,views:i,comments:y,downloads:d}){return`
    <li class="gallery__item">
      <a class="gallery__link" href="${s}">
        <img 
          class="gallery__image"
          src="${r}" 
          width="${t}" 
          height="${n}" 
          alt="${e}" 
          loading="lazy" 
        />
      </a>
      <ul class="gallery__info">
        ${l("Likes",o)}
        ${l("Views",i)}
        ${l("Comments",y)}
        ${l("Downloads",d)}
      </ul>
    </li>`}function l(r,t){return`
    <li class="gallery__info-item">
      <p class="gallery__info-text">${r}</p>
      <span class="gallery__info-value">${t}</span>
    </li>`}function x(){c&&(c.innerHTML="")}function S(){a==null||a.classList.add("show")}function f(){a==null||a.classList.remove("show")}const m=document.querySelector(".form");m.addEventListener("submit",q);function q(r){r.preventDefault(),x();const t=r.target.elements["search-text"].value.trim();if(!t){u("Please enter a search query.");return}S(),$(t).then(({hits:n})=>{if(f(),n.length===0){u("Sorry, there are no images matching your search query. Please, try again!");return}b(n),P()}).catch(n=>{f(),u(`${n.message}. Please try again later.`)}).finally(()=>{m.reset()})}function P(){new h(".gallery a",{captionsData:"alt",captionDelay:250,scrollZoom:!1}).refresh()}function u(r){p.error({message:r,position:"topRight",maxWidth:432})}
//# sourceMappingURL=index.js.map
