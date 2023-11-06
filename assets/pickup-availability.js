customElements.get("pickup-availability")||customElements.define("pickup-availability",class extends HTMLElement{constructor(){super(),this.hasAttribute("available")&&(this.errorHtml=this.querySelector("template").content.firstElementChild.cloneNode(!0),this.onClickRefreshList=this.onClickRefreshList.bind(this),this.fetchAvailability(this.dataset.variantId))}fetchAvailability(e){let t=this.dataset.rootUrl;t.endsWith("/")||(t+="/");e=t+`variants/${e}/?section_id=pickup-availability`;fetch(e).then(e=>e.text()).then(e=>{e=(new DOMParser).parseFromString(e,"text/html").querySelector(".shopify-section");this.renderPreview(e)}).catch(e=>{var t=this.querySelector("button");t&&t.removeEventListener("click",this.onClickRefreshList),this.renderError()})}onClickRefreshList(e){this.fetchAvailability(this.dataset.variantId)}renderError(){this.innerHTML="",this.appendChild(this.errorHtml),this.querySelector("button").addEventListener("click",this.onClickRefreshList)}renderPreview(e){var t=document.querySelector("pickup-availability-drawer");t&&t.remove(),e.querySelector("pickup-availability-preview")?(this.innerHTML=e.querySelector("pickup-availability-preview").outerHTML,this.setAttribute("available",""),document.body.appendChild(e.querySelector("pickup-availability-drawer")),(t=this.querySelector("button"))&&t.addEventListener("click",e=>{document.querySelector("pickup-availability-drawer").show(e.target)})):(this.innerHTML="",this.removeAttribute("available"))}}),customElements.get("pickup-availability-drawer")||customElements.define("pickup-availability-drawer",class extends HTMLElement{constructor(){super(),this.onBodyClick=this.handleBodyClick.bind(this),this.querySelector("button").addEventListener("click",()=>{this.hide()}),this.addEventListener("keyup",()=>{"ESCAPE"===event.code.toUpperCase()&&this.hide()})}handleBodyClick(e){e=e.target;e==this||e.closest("pickup-availability-drawer")||"ShowPickupAvailabilityDrawer"==e.id||this.hide()}hide(){this.removeAttribute("open"),document.body.removeEventListener("click",this.onBodyClick),document.body.classList.remove("overflow-hidden"),removeTrapFocus(this.focusElement)}show(e){this.focusElement=e,this.setAttribute("open",""),document.body.addEventListener("click",this.onBodyClick),document.body.classList.add("overflow-hidden"),trapFocus(this)}});