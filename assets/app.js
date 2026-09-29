const money = n => 'LKR ' + Number(n).toLocaleString('en-US');
const typeSlug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
const waUrl = msg => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

function headerTemplate(page){
  return `
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="index.html" aria-label="Sha Digii home">
        <img src="assets/shadigii-logo.png" alt="Sha Digii">
      </a>
      <nav class="desktop-nav" aria-label="Main navigation">
        <a data-nav="home" href="index.html">Home</a>
        <a data-nav="work" href="our-work.html">Our Work</a>
        <a data-nav="about" href="about.html">About Us</a>
        <a data-nav="packages" href="packages.html">Packages</a>
        <a data-nav="plan" href="build-your-plan.html">Build Your Plan</a>
        <a data-nav="contact" href="contact.html">Contact</a>
      </nav>
      <a class="header-wa" href="${waUrl('Hi Sha Digii! I’d like to discuss digital marketing for my business.') }" target="_blank" rel="noopener">
        <span class="wa-mark">◔</span><span>WhatsApp</span>
      </a>
      <button class="mobile-menu" type="button" aria-expanded="false" aria-controls="mobileNav"><span></span><span></span><span></span></button>
    </div>
    <div id="mobileNav" class="mobile-nav" hidden>
      <a data-nav="home" href="index.html">Home</a>
      <a data-nav="work" href="our-work.html">Our Work</a>
      <a data-nav="about" href="about.html">About Us</a>
      <a data-nav="packages" href="packages.html">Packages</a>
      <a data-nav="plan" href="build-your-plan.html">Build Your Plan</a>
      <a data-nav="contact" href="contact.html">Contact</a>
      <a class="mobile-wa" href="${waUrl('Hi Sha Digii! I’d like to discuss digital marketing for my business.') }" target="_blank" rel="noopener">WhatsApp us · ${SITE.whatsappDisplay}</a>
    </div>
  </header>`;
}

function footerTemplate(){
  return `<footer class="site-footer">
    <div class="footer-top wrap">
      <div>
        <a class="footer-brand" href="index.html"><img src="assets/shadigii-logo.png" alt="Sha Digii"></a>
        <p>Turning clicks into customers.</p>
      </div>
      <div class="footer-links">
        <a href="our-work.html">Our Work</a><a href="packages.html">Packages</a><a href="about.html">About Us</a><a href="contact.html">Contact</a>
      </div>
      <div class="footer-social">
        <a href="${SITE.facebook}" target="_blank" rel="noopener">Facebook</a>
        <a href="${SITE.instagram}" target="_blank" rel="noopener">Instagram</a>
        <a href="${waUrl('Hi Sha Digii! I’d like to talk about my business.') }" target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </div>
    <div class="footer-bottom wrap"><span>© ${new Date().getFullYear()} Sha Digii</span><span>${SITE.email}</span></div>
  </footer>`;
}

function injectShared(){
  const h=document.querySelector('[data-shared-header]'); if(h) h.innerHTML=headerTemplate(document.body.dataset.page || '');
  const f=document.querySelector('[data-shared-footer]'); if(f) f.innerHTML=footerTemplate();
  document.querySelectorAll('[data-current-year]').forEach(x=>x.textContent=new Date().getFullYear());
  const current=document.body.dataset.page;
  document.querySelectorAll(`[data-nav="${current}"]`).forEach(x=>x.classList.add('active'));
  setupMobileMenu();
}

function setupMobileMenu(){
  const btn=document.querySelector('.mobile-menu'); const nav=document.querySelector('#mobileNav');
  if(!btn||!nav) return;
  btn.addEventListener('click',()=>{
    const open=btn.getAttribute('aria-expanded')==='true';
    btn.setAttribute('aria-expanded', String(!open));
    nav.hidden=open;
  });
}

function serviceCards(){
  const w=document.querySelector('[data-services]'); if(!w) return;
  w.innerHTML=services.map(s=>`<article class="service-card"><span class="service-icon">${s.icon}</span><h3>${s.title}</h3><p>${s.text}</p></article>`).join('');
}

function portfolioCard(item,index){
  const action=item.video?'Play reel':'Open preview';
  const link=item.externalUrl ? `<a class="visit-link" href="${item.externalUrl}" target="_blank" rel="noopener">Visit live site ↗</a>` : '';
  return `<article class="work-card" data-type="${typeSlug(item.type)}">
    <button class="work-media ${item.video?'video-card':''}" type="button" data-open-portfolio="${index}" aria-label="${action}: ${item.title}">
      <img src="${item.image}" alt="${item.title} — ${item.client}" loading="lazy">
      <span class="media-badge">${item.type.toUpperCase()}</span>
      <span class="media-icon">${item.video?'▶':'↗'}</span>
    </button>
    <div class="work-info">
      <div class="work-heading"><h3>${item.title}</h3>${link}</div>
      <div class="result-badge">${item.result}</div>
      <p>${item.caption}</p>
    </div>
  </article>`;
}

function bindLightbox(items){
  const modal=document.querySelector('#portfolioLightbox'); if(!modal) return;
  const stage=modal.querySelector('.lightbox-stage');
  const title=modal.querySelector('[data-lightbox-title]');
  const meta=modal.querySelector('[data-lightbox-meta]');
  const caption=modal.querySelector('[data-lightbox-caption]');
  const live=modal.querySelector('[data-lightbox-link]');
  let current=0;
  const close=()=>{ modal.classList.remove('open'); document.body.classList.remove('modal-open'); stage.innerHTML=''; };
  const show=(idx)=>{
    current=(idx+items.length)%items.length; const item=items[current];
    stage.innerHTML=item.video
      ? `<video controls playsinline preload="metadata" poster="${item.image}"><source src="${item.video}" type="video/mp4">Your browser does not support video.</video>`
      : `<img src="${item.image}" alt="${item.title} — ${item.client}">`;
    title.textContent=item.title; meta.textContent=`${item.client} · ${item.type} · ${item.result}`; caption.textContent=item.caption;
    if(item.externalUrl){ live.hidden=false; live.href=item.externalUrl; } else { live.hidden=true; live.removeAttribute('href'); }
  };
  document.querySelectorAll('[data-open-portfolio]').forEach(b=>b.addEventListener('click',()=>{show(Number(b.dataset.openPortfolio));modal.classList.add('open');document.body.classList.add('modal-open');}));
  modal.querySelector('[data-lightbox-close]').addEventListener('click',close);
  modal.querySelector('[data-lightbox-prev]').addEventListener('click',()=>show(current-1));
  modal.querySelector('[data-lightbox-next]').addEventListener('click',()=>show(current+1));
  modal.addEventListener('click',e=>{if(e.target===modal) close();});
  document.addEventListener('keydown',e=>{ if(!modal.classList.contains('open')) return; if(e.key==='Escape') close(); if(e.key==='ArrowLeft') show(current-1); if(e.key==='ArrowRight') show(current+1); });
}

function ensureLightbox(){
  if(document.querySelector('#portfolioLightbox')) return;
  document.body.insertAdjacentHTML('beforeend', `<div id="portfolioLightbox" class="lightbox" role="dialog" aria-modal="true" aria-label="Portfolio preview">
    <div class="lightbox-panel">
      <button class="lightbox-close" data-lightbox-close aria-label="Close preview">×</button>
      <button class="lightbox-arrow prev" data-lightbox-prev aria-label="Previous project">‹</button>
      <div class="lightbox-stage"></div>
      <button class="lightbox-arrow next" data-lightbox-next aria-label="Next project">›</button>
      <div class="lightbox-copy"><span class="eyebrow" data-lightbox-meta></span><h3 data-lightbox-title></h3><div class="lightbox-result" data-lightbox-caption></div><a class="visit-link lightbox-link" data-lightbox-link hidden target="_blank" rel="noopener">Visit live site ↗</a></div>
    </div>
  </div>`);
}

function renderPortfolio({limit=null, filters=false}={}){
  const grid=document.querySelector('[data-portfolio-grid]'); if(!grid) return;
  const items=limit ? portfolio.slice(0,limit) : portfolio;
  grid.innerHTML=items.map((x,i)=>portfolioCard(x,i)).join('');
  ensureLightbox();
  if(filters){
    const filterBar=document.querySelector('[data-filter-bar]');
    if(filterBar){
      const types=[...new Set(portfolio.map(x=>x.type))];
      filterBar.innerHTML=`<button class="filter-chip active" data-filter="all">ALL</button>`+types.map(t=>`<button class="filter-chip" data-filter="${typeSlug(t)}">${t.toUpperCase()}</button>`).join('');
      filterBar.querySelectorAll('.filter-chip').forEach(btn=>btn.addEventListener('click',()=>{
        filterBar.querySelectorAll('.filter-chip').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); const f=btn.dataset.filter;
        document.querySelectorAll('[data-portfolio-grid] .work-card').forEach(card=>card.hidden=!(f==='all'||card.dataset.type===f));
      }));
    }
  }
  bindLightbox(items);
}

function renderRecent(){renderPortfolio({limit:6,filters:false});}

function packageCard(p,{compact=false}={}){
  const items=p.items.map(([n,d])=>`<li><b>${n}</b><span>${d}</span></li>`).join('');
  return `<article class="package-card ${p.featured?'featured':''} ${compact?'compact':''}">
    ${p.featured?'<div class="package-tag">MOST CHOSEN</div>':''}
    <div class="package-head"><div><h3>${p.name}</h3><p>${p.for}</p></div><strong>${money(p.price)}<small>/ month</small></strong></div>
    <ul>${items}</ul>
    <div class="package-webline">${p.websiteLabel}</div>
    <a class="btn ${p.featured?'btn-primary':'btn-outline'}" href="${waUrl(`Hi Sha Digii! I’m interested in the ${p.name} package — ${money(p.price)} / month.`)}" target="_blank" rel="noopener">Start with ${p.name}</a>
  </article>`;
}

function renderPackages(container='[data-package-grid]', compact=false){
  const w=document.querySelector(container); if(!w) return; w.innerHTML=packages.map(p=>packageCard(p,{compact})).join('');
}

function renderAddons(){
  const w=document.querySelector('[data-addon-grid]'); if(!w) return;
  const interactive=document.body.dataset.page==='plan';
  w.innerHTML=addons.map(a=>`<article class="addon-card" data-addon-id="${a.id}">
    <div class="addon-main">
      <div class="addon-top-row">
        <button type="button" class="addon-toggle" aria-expanded="false"><span><strong>${a.name}</strong><small>${a.category}</small></span><span class="addon-chevron">+</span></button>
        ${interactive?`<label class="addon-check" aria-label="Select ${a.name}"><input type="checkbox" value="${a.price}" data-addon-name="${a.name}"><span></span></label>`:''}
      </div>
      <p class="addon-summary">${a.summary}</p>
      <div class="addon-details" hidden>
        <ul>${a.highlights.map(x=>`<li>${x}</li>`).join('')}</ul>
        ${a.footnote?`<div class="addon-note">${a.footnote}</div>`:''}
      </div>
      <div class="addon-price">${money(a.price)}</div>
    </div>
  </article>`).join('');
  w.querySelectorAll('.addon-card').forEach(card=>{
    const btn=card.querySelector('.addon-toggle'), details=card.querySelector('.addon-details');
    btn.addEventListener('click',()=>{const open=!card.classList.contains('expanded'); card.classList.toggle('expanded',open); btn.setAttribute('aria-expanded',String(open)); details.hidden=!open;});
  });
}

function setupPlanner(){
  const select=document.querySelector('#plannerPackage'), grid=document.querySelector('[data-addon-grid]'), lines=document.querySelector('#plannerLines'), total=document.querySelector('#plannerTotal'), send=document.querySelector('#plannerSend');
  if(!select||!grid||!lines||!total||!send) return;
  select.innerHTML='<option value="0">No package, add-ons only</option>'+packages.map(p=>`<option value="${p.price}" data-name="${p.name}">${p.name} – ${money(p.price)}</option>`).join('');
  select.value='35000';
  const update=()=>{
    const opt=select.selectedOptions[0], chosen=[]; if(Number(opt.value)) chosen.push({name:opt.dataset.name,price:Number(opt.value)});
    grid.querySelectorAll('input[type=checkbox]:checked').forEach(i=>chosen.push({name:i.dataset.addonName,price:Number(i.value)}));
    const sum=chosen.reduce((a,b)=>a+b.price,0); total.textContent=money(sum);
    lines.innerHTML=chosen.length?chosen.map(i=>`<li><span>${i.name}</span><strong>${money(i.price)}</strong></li>`).join(''):'<li><span class="muted">Choose a package or add-on to see your total.</span></li>';
    send.href=waUrl(chosen.length?`Hi Sha Digii! I would like this plan:\n${chosen.map(i=>`- ${i.name} (${money(i.price)})`).join('\n')}\nTotal: ${money(sum)}`:`Hi Sha Digii! I’d like help choosing a package or add-on for my business.`);
  };
  select.addEventListener('change',update); grid.addEventListener('change',update); update();
}

function renderTestimonials(){
  const w=document.querySelector('[data-testimonials]'); if(!w) return;
  w.innerHTML=testimonials.map((t,i)=>`<article class="testimonial ${i===0?'featured-testimonial':''}"><div class="review-head"><span class="stars">★★★★★</span><span>Client recommendation</span></div><blockquote>${t.text.split('\n\n').map(p=>`<p>${p}</p>`).join('')}</blockquote><div class="review-client"><strong>${t.client}</strong><span>Real client review</span></div></article>`).join('');
}

function renderFaq(){
  const w=document.querySelector('[data-faq]'); if(!w) return;
  w.innerHTML=faqs.map((f,i)=>`<details ${i===0?'open':''}><summary><span>${String(i+1).padStart(2,'0')}</span>${f.q}<b>+</b></summary><div>${f.a}</div></details>`).join('');
}

function setContactData(){
  document.querySelectorAll('[data-wa-number]').forEach(x=>x.textContent=SITE.whatsappDisplay);
  document.querySelectorAll('[data-email]').forEach(x=>x.textContent=SITE.email);
  document.querySelectorAll('[data-email-link]').forEach(x=>{x.href='mailto:'+SITE.email;});
  document.querySelectorAll('[data-fb-link]').forEach(x=>x.href=SITE.facebook);
  document.querySelectorAll('[data-ig-link]').forEach(x=>x.href=SITE.instagram);
  document.querySelectorAll('[data-wa-link]').forEach(x=>x.href=waUrl('Hi Sha Digii! I’d like to discuss digital marketing for my business.'));
}

document.addEventListener('DOMContentLoaded',()=>{
  injectShared(); setContactData(); serviceCards(); renderPackages(); renderAddons(); setupPlanner(); renderTestimonials(); renderFaq();
  if(document.body.dataset.page==='home') renderRecent();
  if(document.body.dataset.page==='work') renderPortfolio({filters:true});
});
