/* =============================================
   NOVA PREMIUM PEPTIDES — JavaScript
   ============================================= */

// ===== PRODUCTS DATA (Rich) =====
const products = [
  {
    id: 0, name: 'BPC-157', dose: '10mg', category: 'Recovery', price: 90,
    img: 'final_vial_2.png', badge: 'BESTSELLER',
    short: 'Body Protection Compound — tissue healing & injury recovery research.',
    desc: 'BPC-157 (Body Protection Compound-157) is a pentadecapeptide made up of 15 amino acids. It is a partial sequence of body protection compound that is found in and isolated from human gastric juice. Extensively studied for its cytoprotective properties and ability to support tendon, ligament, and muscle tissue repair.',
    benefits: ['Tissue repair research', 'Tendon & ligament support', 'Anti-inflammatory mechanisms', 'Gastrointestinal research'],
    storage: 'Lyophilized: –20°C | Reconstituted: 2–8°C, 30 days',
  },
  {
    id: 1, name: 'TB-500', dose: '10mg', category: 'Recovery', price: 90,
    img: 'final_vial_3.png', badge: 'POPULAR',
    short: 'Thymosin Beta-4 — muscle & soft tissue regeneration research.',
    desc: 'TB-500 is a synthetic version of Thymosin Beta-4, a naturally occurring peptide found in virtually all human and animal cells. Research has focused on its role in cell migration and proliferation, regulation of actin polymerization, and support of wound healing and tissue regeneration processes.',
    benefits: ['Muscle & soft tissue repair', 'Wound healing research', 'Anti-fibrotic properties', 'Vascular & cardiac research'],
    storage: 'Lyophilized: –20°C | Reconstituted: 2–8°C, 30 days',
  },
  {
    id: 2, name: 'CJC + IPA', dose: '10mg', category: 'Performance', price: 95,
    img: 'final_vial_0.png', badge: 'POPULAR',
    short: 'CJC-1295 + Ipamorelin blend — GH secretion & body composition research.',
    desc: 'A synergistic combination of CJC-1295 (a GHRH analogue) and Ipamorelin (a selective GH secretagogue). When combined, these compounds stimulate GH release through different and complementary mechanisms — CJC-1295 amplifies the GHRH signal while Ipamorelin stimulates the ghrelin receptor. Together they produce a more pronounced and sustained GH pulse.',
    benefits: ['Growth hormone secretion research', 'Body composition studies', 'Recovery & performance metrics', 'Synergistic GHRH + ghrelin pathway'],
    storage: 'Lyophilized: –20°C | Reconstituted: 2–8°C, 30 days',
  },
  {
    id: 3, name: 'CJC + DAC', dose: '5mg', category: 'Performance', price: 85,
    img: 'final_vial_4.png', badge: null,
    short: 'CJC-1295 with Drug Affinity Complex — extended GH release research.',
    desc: 'CJC-1295 with DAC (Drug Affinity Complex) is a long-acting GHRH analogue. The DAC technology allows the peptide to bind to albumin in the bloodstream, dramatically extending its half-life compared to the standard GHRH analogue. Research focuses on sustained GH and IGF-1 release patterns and anabolic signaling over extended periods.',
    benefits: ['Extended GH release studies', 'IGF-1 elevation research', 'Anabolic signaling research', 'Long-acting GHRH analogue model'],
    storage: 'Lyophilized: –20°C | Reconstituted: 2–8°C, 30 days',
  },
  {
    id: 4, name: 'IGF-1 LR3', dose: '1mg', category: 'Performance', price: 90,
    img: 'final_vial_5.png', badge: null,
    short: 'Insulin-like Growth Factor 1 LR3 — muscle development & metabolic research.',
    desc: 'IGF-1 LR3 is a recombinant analogue of native IGF-1 with a modified N-terminal and a glutamate to arginine substitution at position 3. These modifications significantly reduce IGF-1 binding protein affinity, resulting in a longer serum half-life. Research focuses on its role in muscle cell proliferation, protein synthesis, and insulin-sensitizing metabolic effects.',
    benefits: ['Muscle cell proliferation studies', 'Protein synthesis research', 'Metabolic regulation', 'Reduced binding protein affinity vs native IGF-1'],
    storage: 'Lyophilized: –20°C | Reconstituted: 2–8°C, 28 days',
  },
  {
    id: 5, name: 'GHK-Cu', dose: '100mg', category: 'Wellness', price: 140,
    img: 'final_vial_6.png', badge: 'PREMIUM',
    short: 'Copper Peptide — skin regeneration, anti-aging & wound healing research.',
    desc: 'GHK-Cu (Glycyl-L-histidyl-L-lysine copper complex) is a naturally occurring copper complex first isolated from human plasma. It has been extensively studied for its potent ability to upregulate collagen, elastin, and glycosaminoglycan synthesis. Research also covers anti-inflammatory properties, antioxidant activity, and DNA repair mechanisms.',
    benefits: ['Collagen & elastin synthesis', 'Wound healing acceleration', 'Anti-inflammatory activity', 'Antioxidant & DNA repair research'],
    storage: 'Lyophilized: –20°C | Reconstituted: 2–8°C, 30 days',
  },
  {
    id: 6, name: 'NAD+', dose: '500mg', category: 'Wellness', price: 100,
    img: 'final_vial_7.png', badge: 'POPULAR',
    short: 'Nicotinamide Adenine Dinucleotide — energy, longevity & cellular aging research.',
    desc: 'NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme found in all living cells and is essential for hundreds of metabolic processes. It plays a central role in energy metabolism (converting food to ATP), serving as a substrate for sirtuins (longevity proteins) and PARP enzymes involved in DNA repair. NAD+ levels decline significantly with age, making it a major focus in longevity research.',
    benefits: ['Cellular energy metabolism', 'Sirtuin & longevity pathway research', 'DNA repair mechanisms', 'Neurological & cognitive research'],
    storage: 'Lyophilized: –20°C | Reconstituted: 2–8°C, 30 days',
  },
  {
    id: 7, name: 'MOTS-C', dose: '10mg', category: 'Wellness', price: 95,
    img: 'final_vial_8.png', badge: null,
    short: 'Mitochondrial peptide — metabolic regulation & exercise research.',
    desc: 'MOTS-C is a mitochondria-derived peptide encoded within the 12S rRNA of the mitochondrial genome. Unlike nuclear-encoded peptides, it originates from the mitochondria and has been shown in research to regulate insulin sensitivity, activate AMPK pathways, and improve exercise capacity. It represents a novel class of mitochondrial signaling molecules with broad metabolic applications.',
    benefits: ['AMPK pathway activation research', 'Insulin sensitivity studies', 'Exercise capacity & endurance', 'Mitochondrial signaling research'],
    storage: 'Lyophilized: –20°C | Reconstituted: 2–8°C, 30 days',
  },
  {
    id: 8, name: 'MT2', dose: '10mg', category: 'Wellness', price: 70,
    img: 'final_vial_9.png', badge: null,
    short: 'Melanotan II — melanocortin receptor & pigmentation research.',
    desc: 'Melanotan II (MT-2) is a synthetic analogue of the naturally occurring hormone alpha-MSH (alpha-melanocyte-stimulating hormone). It binds to melanocortin receptors (MC1-MC5) with high affinity. Research applications include study of melanin pigmentation pathways, appetite regulation, and melanocortin system signaling.',
    benefits: ['Melanocortin receptor binding studies', 'Pigmentation pathway research', 'Appetite regulation research', 'MC1-MC5 receptor pharmacology'],
    storage: 'Lyophilized: –20°C | Reconstituted: 2–8°C, 30 days',
  },
  {
    id: 9, name: 'Retatrutide', dose: '10mg', category: 'Metabolic', price: 105,
    img: 'final_vial_10.png', badge: 'NEW',
    short: 'Triple receptor agonist (GLP-1/GIP/Glucagon) — advanced metabolic research.',
    desc: 'Retatrutide is a novel triple receptor agonist targeting GLP-1 (glucagon-like peptide-1), GIP (glucose-dependent insulinotropic polypeptide), and glucagon receptors simultaneously. This tri-agonist approach has shown significant interest in obesity and metabolic disease research, as each receptor pathway contributes distinct complementary mechanisms to glucose homeostasis, energy expenditure, and body composition regulation.',
    benefits: ['GLP-1/GIP/Glucagon triple agonism', 'Metabolic disease research models', 'Body composition studies', 'Glucose homeostasis research'],
    storage: 'Lyophilized: –20°C | Reconstituted: 2–8°C, 30 days',
  },
  {
    id: 10, name: 'Tesamorelin', dose: '10mg', category: 'Metabolic', price: 105,
    img: 'final_vial_11.png', badge: null,
    short: 'GHRH analogue — growth hormone secretion & visceral fat research.',
    desc: 'Tesamorelin is a synthetic analogue of human growth hormone-releasing hormone (GHRH) consisting of the full 44-amino acid sequence with a trans-3-hexenoic acid group attached at the N-terminus for stability. Research focuses on its ability to stimulate endogenous GH secretion in a physiological pulsatile pattern, its effects on visceral adiposity, and IGF-1 modulation.',
    benefits: ['Endogenous GH secretion research', 'Visceral fat reduction studies', 'IGF-1 modulation research', 'Pituitary GHRH receptor research'],
    storage: 'Lyophilized: –20°C | Reconstituted: 2–8°C, 30 days',
  },
  {
    id: 11, name: 'BAC Water', dose: '10ml', category: 'Supplies', price: 20,
    img: 'final_vial_1.png', badge: 'ESSENTIAL',
    short: 'Bacteriostatic Water — required for peptide reconstitution.',
    desc: 'Bacteriostatic Water (BAC Water) is sterile water preserved with 0.9% benzyl alcohol. The benzyl alcohol acts as a bacteriostatic agent, inhibiting bacterial growth and allowing the vial to be safely punctured multiple times. Essential for reconstituting lyophilized peptide powders . Each 10ml vial is sufficient for multiple reconstitutions.',
    benefits: ['Peptide reconstitution medium', '0.9% benzyl alcohol preserved', 'Multi-dose compatible sterile vial', 'Required for all lyophilized peptides'],
    storage: 'Store at room temperature (15–30°C). Discard within 28 days of first use.',
  },
];

// ===== BUNDLES DATA (Enhanced) =====
const bundles = [
  {
    id: 'recovery',
    tag: 'Recovery Bundle',
    name: 'Recovery Collection',
    subtitle: 'Muscle Repair • Injury Support',
    emoji: '💪',
    description: 'The Recovery Collection pairs BPC-157 and TB-500 — two of the most well-researched peptides for tissue healing. BPC-157 targets gastrointestinal and tendon repair mechanisms while TB-500 promotes actin polymerization and cell migration across multiple tissue types. Together they represent a comprehensive recovery research model.',
    items: [
      { name: 'BPC-157 (10mg)', price: '$90', individual: true },
      { name: 'TB-500 (10mg)', price: '$90', individual: true },
    ],
    stackPrice: 170, value: null,
    highlights: ['Complementary repair mechanisms', 'Tendon, ligament & muscle focus', 'Well-documented combination'],
  },
  {
    id: 'performance',
    tag: 'Performance Bundle',
    name: 'Performance Stack',
    subtitle: 'Output • Recovery • Growth Support',
    emoji: '⚡',
    description: 'The Performance Stack combines CJC-1295 + Ipamorelin with IGF-1 LR3 for a comprehensive approach to growth hormone secretion and downstream anabolic signaling. CJC+IPA stimulates GH release via complementary pathways, while IGF-1 LR3 activates downstream growth factor receptors for muscle and metabolic research.',
    items: [
      { name: 'CJC + IPA (10mg)', price: '$95', individual: true },
      { name: 'IGF-1 LR3 (1mg)', price: '$90', individual: true },
    ],
    stackPrice: 185, value: null,
    highlights: ['GH secretion + downstream IGF-1 signaling', 'Complementary receptor pathways', 'Anabolic research model'],
  },
  {
    id: 'wellness',
    tag: 'Wellness Bundle',
    name: 'Wellness Collection',
    subtitle: 'Energy & Longevity Support',
    emoji: '🌿',
    description: 'The Wellness Collection pairs NAD+ and MOTS-C — two compounds at the frontier of longevity and metabolic research. NAD+ supports mitochondrial energy production and sirtuin activation, while MOTS-C (a mitochondria-derived peptide) activates AMPK and improves insulin sensitivity. A powerful combination for cellular aging and metabolic research protocols.',
    items: [
      { name: 'NAD+ (500mg)', price: '$100', individual: true },
      { name: 'MOTS-C (10mg)', price: '$95', individual: true },
    ],
    stackPrice: 250, value: null,
    highlights: ['Mitochondrial energy & signaling', 'AMPK & sirtuin pathway research', 'Longevity-focused combination'],
  },
  {
    id: 'metabolic',
    tag: 'Nova Signature Stack',
    name: 'Nova Metabolic Stack',
    subtitle: 'Composition • Optimization • Advanced Support',
    emoji: '🔥',
    description: 'Our most advanced research bundle. Retatrutide — a next-generation triple receptor agonist — combined with Tesamorelin for GH-mediated fat metabolism research and MOTS-C for mitochondrial metabolic support. This three-compound stack covers GLP-1/GIP/Glucagon signaling, GHRH-mediated GH release, and AMPK-pathway activation.',
    items: [
      { name: 'Retatrutide (10mg)', price: '$105', individual: true },
      { name: 'Tesamorelin (10mg)', price: '$105', individual: true },
      { name: 'MOTS-C (10mg)', price: '$95', individual: true },
    ],
    stackPrice: 290, value: 320,
    highlights: ['Triple-receptor GLP-1/GIP/Glucagon agonism', 'GHRH-mediated GH & fat metabolism', 'AMPK pathway activation'],
  },
];

// ===== FAQ DATA (Expanded) =====
const faqs = [
  { cat: 'products', q: 'What are peptides?', a: 'Peptides are synthetic amino acid chains used to study specific biological processes. Each compound in the Nova catalog has a distinct compound profile targeting specific receptor systems — from tissue repair (BPC-157, TB-500) to GH secretion (CJC+IPA, Tesamorelin) to longevity support (NAD+, MOTS-C).' },
  { cat: 'products', q: 'What does "lyophilized powder" mean?', a: 'Lyophilization is a freeze-drying process that removes moisture from the peptide under vacuum conditions. This preserves the compound\'s biological integrity for much longer than liquid solutions. Before use in research, the powder must be reconstituted (dissolved) with Bacteriostatic Water (BAC Water) using a sterile syringe.' },
  { cat: 'products', q: 'What is the purity of your compounds?', a: 'We target a 99%+ purity standard across our catalog. We source exclusively from reputable manufacturers using pharmaceutical-grade synthesis and verification processes. Every batch undergoes stringent quality checks before being dispatched.' },
    { cat: 'products', q: 'Do I need BAC Water with every peptide?', a: 'Yes. All peptides in our catalog are sold as lyophilized (freeze-dried) powder and require bacteriostatic water (BAC Water) for reconstitution before. BAC Water is available in our Supplies category for $20/10ml — one vial is typically sufficient for multiple reconstitutions.' },
  { cat: 'ordering', q: 'How do I place an order?', a: 'Browse our Shop, find the compound you need, and click the "Order" button on any product card. Fill in your name, email, shipping address, and payment method preference. You\'ll receive payment instructions via email after submission. Once payment is confirmed, we process and ship your order.' },
  { cat: 'ordering', q: 'Can I order multiple products at once?', a: 'Yes. You can place separate orders for multiple products. If you\'d like to combine into a single shipment, please contact us via the Contact page after placing your first order and we will coordinate. Alternatively, consider one of our bundle collections which are shipped together.' },
  { cat: 'ordering', q: 'How long is my order held after placing?', a: 'Orders are held for 24 hours pending payment confirmation. If payment is not received within this window, the order will be cancelled. If you need more time or encounter any payment issues, contact us immediately and we\'ll work with you.' },
  { cat: 'ordering', q: 'Will I receive an order confirmation?', a: 'Yes. You will receive an email confirmation with your order details and payment instructions. Once your payment is verified, you\'ll receive a shipping confirmation with your tracking number.' },
  { cat: 'shipping', q: 'Where do you ship?', a: 'We currently ship within Canada only. We ship to all Canadian provinces and territories. We do not offer international shipping at this time.' },
  { cat: 'shipping', q: 'How long does shipping take?', a: 'Orders are processed within 1–2 business days after payment is confirmed. Delivery typically takes 3–7 business days depending on your location within Canada. A tracking number is emailed once your order ships.' },
  { cat: 'shipping', q: 'Is packaging discreet?', a: 'Yes, completely. All orders are shipped in plain outer packaging with no product names, no Nova branding, and no indication of contents on the outside of the package. Your privacy is our priority.' },
  { cat: 'shipping', q: 'What if my order is damaged or incorrect?', a: 'If you receive a damaged or incorrect product, contact us within 48 hours of delivery with your order number and photos of the issue. We will investigate promptly and arrange a replacement or resolution. All other sales are final.' },
  { cat: 'payment', q: 'What payment methods do you accept?', a: 'We accept E-Transfer (Canada) and Cryptocurrency (Bitcoin, Ethereum, and USDT). We do not accept Stripe, PayPal, or credit cards. Payment instructions are sent via email after order confirmation.' },
  { cat: 'payment', q: 'How do I pay by E-Transfer?', a: 'After placing your order, you\'ll receive an email with our E-Transfer details (email address). Send the exact amount via your bank\'s Interac E-Transfer feature and include your order number in the memo field. Payment is typically verified within a few hours on business days.' },
  { cat: 'payment', q: 'How do I pay with cryptocurrency?', a: 'After placing your order, you\'ll receive our wallet address for BTC, ETH, or USDT (specify which in your order). Send the exact CAD equivalent to the provided wallet. Include your order number as a memo/tag if possible. Confirmation is typically within 1–3 network confirmations.' },
  { cat: 'storage', q: 'How should I store lyophilized peptides?', a: 'Store unopened lyophilized peptide vials at –20°C (standard freezer) for long-term stability. They can also be stored at 2–8°C for shorter periods (up to 3–6 months depending on the compound). Keep all vials away from direct light, heat, and moisture.' },
  { cat: 'storage', q: 'How long can I store reconstituted peptides?', a: 'Once reconstituted with BAC Water, peptides should be stored at 2–8°C (refrigerator) and used within 30 days for most compounds. Do not freeze reconstituted peptide solutions. BAC Water\'s benzyl alcohol helps inhibit bacterial growth during this window.' },
  { cat: 'storage', q: 'How do I reconstitute lyophilized peptides?', a: 'You\'ll need sterile BAC Water and a sterile syringe. Wipe both vial tops with an alcohol swab. Draw the required volume of BAC Water and slowly inject it along the inside glass wall of the peptide vial — not directly onto the powder. Gently swirl (never shake) until fully dissolved. The solution should be clear. See our full Reconstitution Guide on the About page.' },
];

// ===== ACTIVE FAQ FILTER =====
let activeFAQCat = 'all';

function filterFAQ(cat, btn) {
  activeFAQCat = cat;
  document.querySelectorAll('.faq-cat-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderFAQ();
}

// ===== PAGE MANAGEMENT =====
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');
  window.scrollTo(0, 0);
  document.getElementById('navLinks').classList.remove('open');
  setTimeout(() => {
    animateStats();
    setupIntersectionObserver();
  }, 100);
}

function setActive(el) {
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  if (el) el.classList.add('active');
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ===== RENDER PRODUCTS =====
let activeFilter = 'All';

function filterProducts(cat) {
  activeFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('filter-' + cat);
  if (btn) btn.classList.add('active');
  renderProducts('shopGrid', null);
  setupIntersectionObserver();
}

function renderProducts(containerId, limit) {
  const container = document.getElementById(containerId);
  if (!container) return;
  let list = products;
  if (containerId === 'shopGrid' && activeFilter !== 'All') {
    list = products.filter(p => p.category === activeFilter);
  }
  if (limit) list = list.slice(0, limit);

  container.innerHTML = list.map(p => `
    <div class="product-card" onclick="openOrderModal('${p.name} (${p.dose})', '${p.price}', ${p.id})">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name} - Nova Premium Peptides" class="product-img" loading="lazy" />
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      </div>
      <div class="product-body">
        <p class="product-category">${p.category}</p>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-dose">Lyophilized Powder · ${p.dose}</p>
        <p class="product-short">${p.short}</p>
        ${containerId === 'shopGrid' ? `
        <div class="product-benefits">
          ${p.benefits.slice(0,2).map(b => `<span class="benefit-tag">✓ ${b}</span>`).join('')}
        </div>` : ''}
        <div class="product-footer">
          <span class="product-price">$${p.price} <span class="product-cad">CAD</span></span>
          <button class="product-btn" onclick="event.stopPropagation(); openOrderModal('${p.name} (${p.dose})', '${p.price}', ${p.id})">Order</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== RENDER BUNDLES (Rich) =====
function renderBundles(containerId, limit) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const list = limit ? bundles.slice(0, limit) : bundles;
  const isHomePage = containerId === 'homeBundlesGrid';

  container.innerHTML = list.map(b => `
    <div class="bundle-card">
      <div class="bundle-header-row">
        <span class="bundle-emoji">${b.emoji}</span>
        <p class="bundle-tag">${b.tag}</p>
      </div>
      <h3 class="bundle-name">${b.name}</h3>
      <p class="bundle-subtitle">${b.subtitle}</p>
      ${!isHomePage ? `<p class="bundle-description">${b.description}</p>` : ''}
      <ul class="bundle-items">
        ${b.items.map(i => `<li><span>${i.name}</span><span class="item-price">${i.price}</span></li>`).join('')}
      </ul>
      ${!isHomePage && b.highlights ? `
      <div class="bundle-highlights">
        ${b.highlights.map(h => `<span class="bundle-hl">✦ ${h}</span>`).join('')}
      </div>` : ''}
      <div class="bundle-footer">
        <div>
          <p class="bundle-stack-label">Stack Price:</p>
          ${b.value ? `<p class="bundle-value">$${b.value} CAD</p>` : ''}
        </div>
        <span class="bundle-stack-price">$${b.stackPrice}</span>
      </div>
      <button class="btn-primary bundle-btn" onclick="openOrderModal('${b.name}', '${b.stackPrice}', null)">Order This Bundle</button>
    </div>
  `).join('');
}

// ===== RENDER FAQ =====
function renderFAQ() {
  const container = document.getElementById('faqList');
  if (!container) return;
  const list = activeFAQCat === 'all' ? faqs : faqs.filter(f => f.cat === activeFAQCat);
  container.innerHTML = list.map((f, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-question" onclick="toggleFAQ(${i})">
        <span>${f.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer">
        <p>${f.a}</p>
      </div>
    </div>
  `).join('');
}

function toggleFAQ(index) {
  const item = document.getElementById('faq-' + index);
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ===== ORDER MODAL =====
function openOrderModal(productName, price, productId) {
  document.getElementById('modalProduct').textContent = productName;
  document.getElementById('modalPrice').textContent = '$' + price;
  document.getElementById('orderModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('orderModal')) {
    document.getElementById('orderModal').classList.remove('active');
    document.body.style.overflow = '';
  }
}

function submitOrder(e) {
  e.preventDefault();
  document.getElementById('orderModal').classList.remove('active');
  document.body.style.overflow = '';
  showToast('✅ Order received! Check your email for payment instructions.');
  e.target.reset();
}

// ===== CONTACT FORM =====
function submitContact(e) {
  e.preventDefault();
  showToast('✅ Message sent! We\'ll respond within 24 hours.');
  e.target.reset();
}

// ===== TOAST =====
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 5000);
}

// ===== ANIMATED STATS COUNTER =====
function animateStats() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  counters.forEach(counter => {
    if (counter.dataset.animated) return;
    counter.dataset.animated = '1';
    const target = +counter.dataset.target;
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = Math.floor(current);
    }, 16);
  });
}

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const scrollTop = document.getElementById('scrollTop');
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
    scrollTop.classList.add('visible');
  } else {
    navbar.classList.remove('scrolled');
    scrollTop.classList.remove('visible');
  }
});

// ===== PARTICLES =====
function createParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3.5 + 1;
    p.style.cssText = `
      width: ${size}px; height: ${size}px;
      left: ${Math.random() * 100}%;
      bottom: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 22 + 14}s;
      animation-delay: -${Math.random() * 20}s;
      opacity: ${Math.random() * 0.6 + 0.1};
    `;
    container.appendChild(p);
  }
}

// ===== INTERSECTION OBSERVER =====
function setupIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  setTimeout(() => {
    const selectors = '.product-card, .bundle-card, .why-card, .review-card, .step-card, .info-card, .science-card, .cat-card, .recon-step, .stat-box';
    document.querySelectorAll(selectors).forEach(card => {
      if (!card.dataset.observed) {
        card.dataset.observed = '1';
        card.style.opacity = '0';
        card.style.transform = 'translateY(28px)';
        card.style.transition = 'opacity 0.55s ease, transform 0.55s ease, box-shadow 0.3s ease, border-color 0.3s ease';
        observer.observe(card);
      }
    });
  }, 80);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('featuredGrid', 4);
  renderProducts('shopGrid', null);
  renderBundles('homeBundlesGrid', 4);
  renderBundles('bundlesGrid', null);
  renderFAQ();
  createParticles();
  setTimeout(() => {
    animateStats();
    setupIntersectionObserver();
  }, 400);
});
