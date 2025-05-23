import{a as h,S as p,i as L}from"./assets/vendor-1AYLTIiv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const b="50455004-1c04f8db873d92d2cd6d446ff",_="https://pixabay.com/api/";function S(r){return h.get(_,{params:{key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{throw new Error(t.message)})}const l=document.querySelector(".gallery"),i=document.querySelector(".loader");function $(r){if(!l||!Array.isArray(r))return;const t=r.map(w).join("");l.insertAdjacentHTML("beforeend",t),l.querySelectorAll(".gallery__image").forEach(n=>{n.addEventListener("load",()=>{n.parentElement.classList.add("loaded")},{once:!0})})}function w({webformatURL:r,webformatWidth:t,webformatHeight:a,largeImageURL:n,tags:e,likes:o,views:s,comments:y,downloads:g}){return`
    <li class="gallery__item">
      <a class="gallery__link" href="${n}">
        <img 
          class="gallery__image"
          src="${r}" 
          width="${t}" 
          height="${a}" 
          alt="${e}" 
          loading="lazy" 
        />
      </a>
      <ul class="gallery__info">
        ${u("Likes",o)}
        ${u("Views",s)}
        ${u("Comments",y)}
        ${u("Downloads",g)}
      </ul>
    </li>`}function u(r,t){return`
    <li class="gallery__info-item">
      <p class="gallery__info-text">${r}</p>
      <span class="gallery__info-value">${t}</span>
    </li>`}function q(){l&&(l.innerHTML="")}function E(){i==null||i.classList.add("show")}function O(){i==null||i.classList.remove("show")}const c=document.querySelector(".form"),d=c==null?void 0:c.querySelector('button[type="submit"]');document.addEventListener("DOMContentLoaded",()=>{m()});c.addEventListener("submit",v);function v(r){r.preventDefault();const t=r.target.elements["search-text"].value.trim();if(!t){f("Please enter a search query.");return}x(),q(),E(),S(t).then(({hits:a})=>{if(a.length===0){f("Sorry, there are no images matching your search query. Please, try again!");return}$(a),P()}).catch(a=>{f(`${a.message}. Please try again later.`)}).finally(()=>{O(),m(),c.reset()})}function P(){new p(".gallery a",{captionsData:"alt",captionDelay:250,scrollZoom:!1}).refresh()}function f(r){L.error({message:r,position:"topRight",maxWidth:432})}function x(){d&&(d.disabled=!0)}function m(){d&&(d.disabled=!1)}
//# sourceMappingURL=index.js.map
