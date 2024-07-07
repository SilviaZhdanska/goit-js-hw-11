import{S as l,i as c}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d="44780398-b9dbe1b89370a8f5261d05d93";function u(n){const t=`https://pixabay.com/api/?key=${d}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(t).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}document.querySelector(".card-container");function f(n){const t=document.querySelector(".card-container"),o=n.map(e=>`
    <div class="card">
      <div class="card-img-top">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" >
        </a>
      </div>
      <div class="card-body">
        <h2 class="card-title visually-hidden">${e.tags}</h2>
        <p class="card-text">Likes: ${e.likes}</p>
        <p class="card-text">Views: ${e.views}</p>
        <p class="card-text">Comments: ${e.comments}</p>
        <p class="card-text">Downloads: ${e.downloads}</p>
      </div>
    </div>
  `).join("");t.innerHTML=o,new l(".card-img-top a",{captions:!0,captionsData:"alt"}).refresh()}function p(){c.info({backgroundColor:"red",position:"topRight",title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"})}function h(){console.error("Error fetching images"),c.error({title:"Error",message:"Sorry, there was an error fetching images. Please try again later."})}const y=document.querySelector(".search-form"),i=document.querySelector(".loader");i.style.display="none";y.addEventListener("submit",m);function m(n){n.preventDefault();const t=n.currentTarget,o=t.elements.query.value.trim().toLowerCase();o&&(i.style.display="inline-block",u(o).then(s=>{i.style.display="none",s.hits.length===0?p():f(s.hits)}).catch(s=>{console.error("Error:",s),i.style.display="none",h()}).finally(()=>t.reset()))}
//# sourceMappingURL=commonHelpers.js.map
