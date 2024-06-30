import{S as d,i as p}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function g(r){const s=`https://pixabay.com/api/?key=44649550-1f14fff39212e3f1a5e911ecf&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(c=>{if(!c.ok)throw new Error("No match item");return c.json()})}function y(r){const o=[];r.map(a=>{const{webformatURL:n,largeImageURL:e,tags:t,likes:s,views:c,comments:f,downloads:m}=a;o.push(`<li class="item">
      <a href="${e}" class="gallery">
      <img class='item-img' src="${n}" alt="${t}" />
      <div class="item-info">
      <div class="item-info__text">Likes <span>${s}</span></div>
      <div class="item-info__text">Views <span>${c}</span></div>
      <div class="item-info__text">Comments <span>${f}</span></div>
      <div class="item-info__text">Downloads <span>${m}</span></div>
      </div>
      </a>
      </li>`)}),i.imgOut.innerHTML=o.join("")}function h(r){r.innerHTML=" "}const i={form:document.querySelector(".form-request"),imgOut:document.getElementById("img-output"),loader:document.querySelector(".loader")};i.form.addEventListener("submit",v);const u=new d(".list a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});let l=null;function v(r){if(r.preventDefault(),l=r.target.searchQuery.value.trim(),!l){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}i.loader.style.display="block",g(l).then(({hits:o})=>{h(i.imgOut),y([...o]),u.on()}).catch(o=>console.log(o)).finally(()=>{i.form.reset(),u.refresh(),i.loader.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
