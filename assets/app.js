const money = n => 'LKR ' + Number(n).toLocaleString('en-US');
const typeSlug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
const escapeHtml = value => String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const waUrl = msg => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
const hrWaUrl = msg => `https://wa.me/${SITE.hrWhatsapp}?text=${encodeURIComponent(msg)}`;

function whatsappIcon(){
  return '<svg class="wa-svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.52 3.48A11.84 11.84 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.92c0 2.1.55 4.14 1.6 5.94L.08 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.47-8.4ZM12.07 21.76h-.01a9.84 9.84 0 0 1-5.01-1.37l-.36-.21-3.74.98 1-3.65-.23-.37a9.84 9.84 0 1 1 8.35 4.62Zm5.41-7.4c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.69.15-.2.3-.79.97-.97 1.17-.18.2-.36.22-.66.08-1.5-.75-2.49-1.33-3.49-3.01-.26-.45.26-.42.75-1.4.08-.2.04-.37-.02-.52-.06-.15-.69-1.66-.95-2.27-.25-.6-.51-.52-.69-.53h-.59c-.2 0-.52.08-.8.37-.28.3-1.05 1.02-1.05 2.49s1.08 2.89 1.22 3.09c.15.2 2.13 3.26 5.16 4.57.72.31 1.28.5 1.71.64.72.23 1.38.2 1.9.12.58-.09 1.77-.73 2.02-1.43.25-.7.25-1.3.18-1.43-.07-.12-.27-.2-.56-.35Z"/></svg>';
}

function headerTemplate(page){
  const msg = waUrl('Hi Sha Digii! I’d like to discuss digital marketing for my business.');
  return `<header class="site-header">
    <div class="header-inner">
      <a class="brand" href="index.html" aria-label="Sha Digii home"><img src="assets/shadigii-logo.png" alt="Sha Digii — Turning Clicks into Customers"></a>
      <nav class="desktop-nav" aria-label="Main navigation">
        <a data-nav="home" href="index.html">Home</a><a data-nav="work" href="our-work.html">Our Work</a><a data-nav="about" href="about.html">About Us</a><a data-nav="packages" href="packages.html">Packages</a><a data-nav="plan" href="build-your-plan.html">Build Your Plan</a><a data-nav="contact" href="contact.html">Contact</a>
      </nav>
      <a class="header-wa" href="${msg}" target="_blank" rel="noopener">${whatsappIcon()}<span>WhatsApp</span></a>
      <button class="mobile-menu" type="button" aria-expanded="false" aria-controls="mobileNav" aria-label="Open menu"><span></span><span></span><span></span></button>
    </div>
    <div id="mobileNav" class="mobile-nav" hidden>
      <a data-nav="home" href="index.html">Home</a><a data-nav="work" href="our-work.html">Our Work</a><a data-nav="about" href="about.html">About Us</a><a data-nav="packages" href="packages.html">Packages</a><a data-nav="plan" href="build-your-plan.html">Build Your Plan</a><a data-nav="contact" href="contact.html">Contact</a>
      <a class="mobile-wa" href="${msg}" target="_blank" rel="noopener">${whatsappIcon()}<span>WhatsApp us · ${SITE.whatsappDisplay}</span></a>
    </div>
  </header>`;
}

function footerTemplate(){
  return `<footer class="site-footer">
    <div class="footer-top wrap">
      <div><a class="footer-brand" href="index.html"><img src="assets/shadigii-logo.png" alt="Sha Digii"></a><p>Turning clicks into customers.</p><p class="footer-local">Digital marketing support for businesses in Kandy and across Sri Lanka.</p></div>
      <div class="footer-links"><a href="our-work.html">Our Work</a><a href="packages.html">Packages</a><a href="about.html">About Us</a><a href="build-your-plan.html">Build Your Plan</a><a href="contact.html">Contact</a></div>
      <div class="footer-social"><a href="${SITE.facebook}" target="_blank" rel="noopener">Facebook</a><a href="${SITE.instagram}" target="_blank" rel="noopener">Instagram</a><a href="${SITE.facebookReviews}" target="_blank" rel="noopener">Client reviews on Facebook</a><a href="${waUrl('Hi Sha Digii! I’d like to talk about my business.') }" target="_blank" rel="noopener">WhatsApp</a></div>
    </div>
    <div class="footer-bottom wrap"><span>© ${new Date().getFullYear()} ${SITE.brand}</span><a href="mailto:${SITE.email}">${SITE.email}</a></div>
  </footer>`;
}

function injectShared(){
  const h=document.querySelector('[data-shared-header]'); if(h) h.innerHTML=headerTemplate(document.body.dataset.page||'');
  const f=document.querySelector('[data-shared-footer]'); if(f) f.innerHTML=footerTemplate();
  const current=document.body.dataset.page;
  document.querySelectorAll(`[data-nav="${current}"]`).forEach(x=>x.classList.add('active'));
  document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
  setupMobileMenu();
}

function setupMobileMenu(){
  const btn=document.querySelector('.mobile-menu'), nav=document.querySelector('#mobileNav'); if(!btn||!nav) return;
  btn.addEventListener('click',()=>{const open=btn.getAttribute('aria-expanded')==='true'; btn.setAttribute('aria-expanded',String(!open)); nav.hidden=open;});
}

function setContactData(){
  document.querySelectorAll('[data-wa-number]').forEach(x=>x.textContent=SITE.whatsappDisplay);
  document.querySelectorAll('[data-email]').forEach(x=>x.textContent=SITE.email);
  document.querySelectorAll('[data-email-link]').forEach(x=>x.href='mailto:'+SITE.email);
  document.querySelectorAll('[data-wa-link]').forEach(x=>{x.href=waUrl('Hi Sha Digii! I’d like to discuss digital marketing for my business.');});
  document.querySelectorAll('[data-fb-link]').forEach(x=>x.href=SITE.facebook);
  document.querySelectorAll('[data-ig-link]').forEach(x=>x.href=SITE.instagram);
  document.querySelectorAll('[data-review-link]').forEach(x=>x.href=SITE.facebookReviews);
  document.querySelectorAll('[data-hr-wa-number]').forEach(x=>x.textContent=SITE.hrWhatsappDisplay);
  document.querySelectorAll('[data-hr-wa-link]').forEach(x=>{x.href=hrWaUrl('Hi Sha Digii! I’d like to discuss your outsourced HR services for my business.');});
}

function serviceCards(){
  const w=document.querySelector('[data-services]'); if(!w) return;
  w.innerHTML=services.map(s=>`<article class="service-card"><span class="service-icon">${s.icon}</span><h3>${escapeHtml(s.title)}</h3><p>${escapeHtml(s.text)}</p></article>`).join('');
}
function hrServiceCards(){
  const w=document.querySelector('[data-hr-services]'); if(!w) return;
  w.innerHTML=hrServices.map(s=>`<article class="service-card"><span class="service-icon">${s.icon}</span><h3>${escapeHtml(s.title)}</h3><p>${escapeHtml(s.text)}</p></article>`).join('');
}

function mediaFor(item){
  if(item.mediaType==='video') return [{kind:'video',src:item.video,poster:item.poster}];
  return (item.media||[]).map(src=>({kind:'image',src}));
}

function portfolioCard(item,index){
  const media=mediaFor(item); const first=media[0];
  let visual='';
  if(first.kind==='video') visual=`<video class="work-video" muted playsinline preload="metadata" poster="${first.poster}" data-card-video><source src="${first.src}" type="video/mp4"></video><span class="media-play" aria-hidden="true">▶</span>`;
  else visual=`<img src="${first.src}" alt="${escapeHtml(item.title)} — ${escapeHtml(item.client)}" loading="lazy">`;
  if(item.mediaType==='gallery'){
    visual=`<div class="card-gallery" data-gallery-card="${item.id}"><img src="${first.src}" alt="${escapeHtml(item.title)} — ${escapeHtml(item.client)}" loading="lazy"><div class="gallery-dots">${media.map((_,i)=>`<span class="gallery-dot ${i===0?'active':''}"></span>`).join('')}</div></div>`;
  }
  return `<article class="work-card" data-type="${typeSlug(item.type)}" data-portfolio-id="${item.id}">
    <button class="work-media ${item.mediaType==='video'?'is-video':''} ${item.mediaType==='gallery'?'is-gallery':''}" type="button" data-open-portfolio="${index}" aria-label="Open ${escapeHtml(item.title)} preview">
      ${visual}<span class="media-badge">${escapeHtml(item.type.toUpperCase())}</span>${item.mediaType==='image' || item.mediaType==='gallery'?'<span class="media-icon" aria-hidden="true">↗</span>':''}
    </button>
    <div class="work-info"><div class="work-heading"><h3>${escapeHtml(item.title)}</h3>${item.externalUrl?`<a class="visit-link" href="${item.externalUrl}" target="_blank" rel="noopener">Visit live site ↗</a>`:item.socialUrl?`<a class="visit-link" href="${item.socialUrl}" target="_blank" rel="noopener">${escapeHtml(item.socialLabel||'View on Instagram ↗')}</a>`:''}</div><span class="result-badge">${escapeHtml(item.result)}</span><p>${escapeHtml(item.caption)}</p></div>
  </article>`;
}

function ensureLightbox(){
  if(document.querySelector('#portfolioLightbox')) return;
  document.body.insertAdjacentHTML('beforeend', `<div id="portfolioLightbox" class="lightbox" role="dialog" aria-modal="true" aria-label="Portfolio preview" aria-hidden="true">
    <div class="lightbox-panel">
      <button class="lightbox-close" data-lightbox-close aria-label="Close preview">×</button>
      <button class="lightbox-arrow prev" data-lightbox-prev aria-label="Previous media">‹</button>
      <div class="lightbox-stage"><div class="lightbox-stage-inner"></div><div class="lightbox-counter" data-lightbox-counter></div></div>
      <button class="lightbox-arrow next" data-lightbox-next aria-label="Next media">›</button>
      <aside class="lightbox-copy"><span class="eyebrow">PROJECT PREVIEW</span><h3 data-lightbox-title></h3><div class="lightbox-result" data-lightbox-result></div><p data-lightbox-caption></p><a class="visit-link lightbox-link" data-lightbox-link hidden target="_blank" rel="noopener"></a><div class="lightbox-hint">Use the arrows to browse media and projects.</div></aside>
    </div>
  </div>`);
}

function bindLightbox(items){
  const modal=document.querySelector('#portfolioLightbox'); if(!modal) return;
  const stage=modal.querySelector('.lightbox-stage-inner'), title=modal.querySelector('[data-lightbox-title]'), result=modal.querySelector('[data-lightbox-result]'), caption=modal.querySelector('[data-lightbox-caption]'), link=modal.querySelector('[data-lightbox-link]'), counter=modal.querySelector('[data-lightbox-counter]');
  let itemIndex=0, mediaIndex=0;
  const close=()=>{modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.classList.remove('modal-open'); stage.innerHTML='';};
  const render=()=>{
    const item=items[itemIndex], medias=mediaFor(item); mediaIndex=Math.max(0,Math.min(mediaIndex,medias.length-1)); const m=medias[mediaIndex];
    if(m.kind==='video') stage.innerHTML=`<video controls playsinline preload="metadata" poster="${m.poster||''}"><source src="${m.src}" type="video/mp4">Your browser does not support the video tag.</video>`;
    else stage.innerHTML=`<img src="${m.src}" alt="${escapeHtml(item.title)} — ${escapeHtml(item.client)}">`;
    title.textContent=item.title; result.textContent=`${item.client} · ${item.type} · ${item.result}`; caption.textContent=item.caption; counter.textContent=medias.length>1?`Media ${mediaIndex+1} / ${medias.length} · Project ${itemIndex+1} / ${items.length}`:`Project ${itemIndex+1} / ${items.length}`;
    if(item.externalUrl || item.socialUrl){link.hidden=false; link.href=item.externalUrl||item.socialUrl; link.textContent=item.externalUrl?'Visit live site ↗':(item.socialLabel||'View on Instagram ↗');} else {link.hidden=true; link.removeAttribute('href'); link.textContent='';}
  };
  const showItem=(idx,dir=1)=>{itemIndex=(idx+items.length)%items.length; mediaIndex=dir>0?0:Math.max(0,mediaFor(items[itemIndex]).length-1); render();};
  modal.querySelector('[data-lightbox-close]').addEventListener('click',close);
  modal.querySelector('[data-lightbox-prev]').addEventListener('click',()=>{if(mediaIndex>0){mediaIndex--;render();}else showItem(itemIndex-1,-1);});
  modal.querySelector('[data-lightbox-next]').addEventListener('click',()=>{const len=mediaFor(items[itemIndex]).length;if(mediaIndex<len-1){mediaIndex++;render();}else showItem(itemIndex+1,1);});
  modal.addEventListener('click',e=>{if(e.target===modal)close();});
  document.addEventListener('keydown',e=>{if(!modal.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')modal.querySelector('[data-lightbox-prev]').click();if(e.key==='ArrowRight')modal.querySelector('[data-lightbox-next]').click();});
  document.querySelectorAll('[data-open-portfolio]').forEach(b=>b.addEventListener('click',()=>{itemIndex=Number(b.dataset.openPortfolio);mediaIndex=0;render();modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');}));
}

function initCardVideos(){
  const videos=[...document.querySelectorAll('[data-card-video]')]; if(!videos.length) return;
  const play=v=>v.play().catch(()=>{});
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting&&e.intersectionRatio>.35)play(e.target);else e.target.pause();}),{threshold:[.15,.35]}); videos.forEach(v=>io.observe(v));
  } else videos.forEach(play);
}

function initCardGalleries(){
  document.querySelectorAll('[data-gallery-card]').forEach(card=>{
    const item=portfolio.find(p=>p.id===card.dataset.galleryCard); if(!item || item.media.length<2) return;
    const img=card.querySelector('img'), dots=[...card.querySelectorAll('.gallery-dot')]; let i=0;
    const go=n=>{i=(n+item.media.length)%item.media.length;img.src=item.media[i];dots.forEach((d,k)=>d.classList.toggle('active',k===i));};
    let timer=setInterval(()=>go(i+1),4200);
    card.addEventListener('mouseenter',()=>clearInterval(timer));
    card.addEventListener('mouseleave',()=>{timer=setInterval(()=>go(i+1),4200);});
  });
}

function renderPortfolio({limit=null,filters=false}={}){
  const grids=[...document.querySelectorAll('[data-portfolio-grid]')]; if(!grids.length) return;
  const items=limit?portfolio.slice(0,limit):portfolio;
  grids.forEach(grid=>{grid.innerHTML=items.map((x,i)=>portfolioCard(x,i)).join('');});
  ensureLightbox();
  if(filters){
    const bar=document.querySelector('[data-filter-bar]');
    if(bar){const types=[...new Set(portfolio.map(x=>x.type))];bar.innerHTML=`<button class="filter-chip active" data-filter="all">ALL</button>`+types.map(t=>`<button class="filter-chip" data-filter="${typeSlug(t)}">${escapeHtml(t.toUpperCase())}</button>`).join('');bar.querySelectorAll('.filter-chip').forEach(btn=>btn.addEventListener('click',()=>{bar.querySelectorAll('.filter-chip').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('[data-portfolio-grid] .work-card').forEach(card=>card.hidden=!(f==='all'||card.dataset.type===f));initCardVideos();}));}
  }
  bindLightbox(items); initCardVideos(); initCardGalleries();
}

function packageCard(p){
  const items=p.items.map(([n,d])=>`<li><b>${escapeHtml(n)}</b><span>${escapeHtml(d)}</span></li>`).join('');
  return `<article class="package-card ${p.featured?'featured':''}">${p.featured?'<span class="package-tag">MOST CHOSEN</span>':''}<div class="package-head"><div><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.for)}</p></div><strong>${money(p.price)}<small>/ month</small></strong></div><ul>${items}</ul><div class="package-webline">${escapeHtml(p.websiteLabel)}</div><a class="btn ${p.featured?'btn-primary':'btn-outline'}" href="${waUrl(`Hi Sha Digii! I’m interested in the ${p.name} package — ${money(p.price)} / month.`)}" target="_blank" rel="noopener">Start with ${escapeHtml(p.name)}</a></article>`;
}
function renderPackages(){document.querySelectorAll('[data-package-grid]').forEach(w=>w.innerHTML=packages.map(packageCard).join(''));}

function addonCard(a,interactive){
  const price=a.priceLabel || money(a.price);
  const billing=a.billing==='one-time' ? '<span class="addon-billing">ONE-TIME</span>' : '';
  const input=interactive?`<label class="addon-check" aria-label="Select ${escapeHtml(a.name)}"><input type="checkbox" value="${a.price}" data-addon-name="${escapeHtml(a.name)}" data-addon-billing="${escapeHtml(a.billing||'add-on')}" data-addon-label="${escapeHtml(price)}" data-addon-variable="${a.variable?'true':'false'}"><span></span></label>`:'';
  return `<article class="addon-card" data-addon-id="${a.id}"><div class="addon-main"><div class="addon-top-row"><button class="addon-toggle" type="button" aria-expanded="false"><span class="addon-title-group"><strong>${escapeHtml(a.name)} ${billing}</strong><small>${escapeHtml(a.category)}</small></span><span class="addon-chevron">+</span></button>${input}</div><p class="addon-summary">${escapeHtml(a.summary)}</p><div class="addon-details" hidden><ul>${a.highlights.map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul>${a.footnote?`<div class="addon-note">${escapeHtml(a.footnote)}</div>`:''}</div><div class="addon-price">${escapeHtml(price)}</div></div></article>`;
}
function renderAddons(){document.querySelectorAll('[data-addon-grid]').forEach(grid=>{const interactive=grid.closest('[data-planner]')?.dataset.interactive==='true' || document.body.dataset.page==='plan';grid.innerHTML=addons.map(a=>addonCard(a,interactive)).join('');grid.querySelectorAll('.addon-toggle').forEach(btn=>btn.addEventListener('click',()=>{const card=btn.closest('.addon-card'), details=card.querySelector('.addon-details'), open=!card.classList.contains('expanded');card.classList.toggle('expanded',open);btn.setAttribute('aria-expanded',String(open));details.hidden=!open;}));});}

function setupPlanners(){
  document.querySelectorAll('[data-planner]').forEach(root=>{
    const select=root.querySelector('[data-planner-package]'), grid=root.querySelector('[data-addon-grid]'), lines=root.querySelector('[data-planner-lines]'), total=root.querySelector('[data-planner-total]'), totalLabel=root.querySelector('[data-planner-total-label]'), send=root.querySelector('[data-planner-send]');
    if(!select||!grid||!lines||!total||!send)return;
    select.innerHTML='<option value="0">No monthly package, add-ons only</option><optgroup label="Digital Marketing">'+packages.map(p=>`<option value="${p.price}" data-name="${p.name}" data-kind="monthly">${p.name} – ${money(p.price)}</option>`).join('')+'</optgroup><optgroup label="Outsourced HR">'+hrPackages.map(p=>`<option value="${p.price}" data-name="${p.name}" data-kind="monthly">${p.name} HR – ${money(p.price)}</option>`).join('')+'</optgroup>';select.value='35000';
    const update=()=>{
      const opt=select.selectedOptions[0], chosen=[];
      if(Number(opt.value))chosen.push({name:opt.dataset.name+(hrPackages.some(p=>p.name===opt.dataset.name)?' HR':''),price:Number(opt.value),billing:'monthly',variable:false,label:money(Number(opt.value))+' / month'});
      grid.querySelectorAll('input[type=checkbox]:checked').forEach(i=>chosen.push({name:i.dataset.addonName,price:Number(i.value),billing:i.dataset.addonBilling==='one-time'?'one-time':'add-on',variable:i.dataset.addonVariable==='true',label:i.dataset.addonLabel||money(Number(i.value))}));
      const sum=chosen.reduce((a,b)=>a+b.price,0), hasVariable=chosen.some(i=>i.variable);
      if(totalLabel) totalLabel.textContent=hasVariable?'Total from':'Total';
      lines.innerHTML=chosen.length?chosen.map(i=>`<li><span>${escapeHtml(i.name)} ${i.billing==='one-time'?'<small>ONE-TIME</small>':''}${i.variable?'<small>FROM</small>':''}</span><strong>${escapeHtml(i.label)}</strong></li>`).join(''):'<li><span class="muted">Choose a package or add-on to see your total.</span></li>';
      total.textContent=money(sum);
      const linesText=chosen.map(i=>`- ${i.name} (${i.label}${i.billing==='monthly'?' / month':i.billing==='one-time'?' one-time':''})`).join('\n');
      send.href=waUrl(chosen.length?`Hi Sha Digii! I would like this plan:\n${linesText}\n${hasVariable?'Total from':'Total'}: ${money(sum)}`:'Hi Sha Digii! I’d like help choosing a package or add-on for my business.');
    };
    select.addEventListener('change',update);grid.addEventListener('change',update);update();
  });
}

function renderTestimonials(){
  document.querySelectorAll('[data-testimonials]').forEach(w=>{w.innerHTML=testimonials.map((t,i)=>{const paras=t.text.split('\n\n'), first=paras[0], rest=paras.slice(1);return `<article class="testimonial ${i===0?'featured-testimonial':''}"><div class="review-head"><span class="stars" aria-label="5 star review">★★★★★</span><span>Client recommendation</span></div><p class="review-preview">${escapeHtml(first)}</p><details class="review-more"><summary>Read more <span>＋</span></summary><div>${rest.map(p=>`<p>${escapeHtml(p)}</p>`).join('')}</div></details><div class="review-client"><strong>${escapeHtml(t.client)}</strong><a href="${SITE.facebookReviews}" target="_blank" rel="noopener">View Facebook reviews ↗</a></div></article>`;}).join('');});
}
function renderFaq(){const w=document.querySelector('[data-faq]');if(!w)return;w.innerHTML=faqs.map((f,i)=>`<details ${i===0?'open':''}><summary><span>${String(i+1).padStart(2,'0')}</span><b>${escapeHtml(f.q)}</b><i>＋</i></summary><div>${escapeHtml(f.a)}</div></details>`).join('');}

function init(){
  injectShared(); setContactData(); serviceCards(); hrServiceCards(); renderPackages(); renderHrPackages(); renderAddons(); setupPlanners(); renderTestimonials(); renderFaq();
  if(document.body.dataset.page==='home') renderPortfolio({limit:6});
  if(document.body.dataset.page==='work') renderPortfolio({filters:true});
}

document.addEventListener('DOMContentLoaded',init);
