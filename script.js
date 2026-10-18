// ========== GOLDEN PARTICLES ==========
const particlesContainer = document.getElementById('particles');
const particleCount = 40;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  const size = Math.random() * 3 + 1;
  const posX = Math.random() * 100;
  const delay = Math.random() * 10;
  const duration = Math.random() * 10 + 10;

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${posX}%`;
  particle.style.animationDelay = `${delay}s`;
  particle.style.animationDuration = `${duration}s`;

  if (Math.random() > 0.7) {
    particle.style.background = 'var(--cyan)';
    particle.style.boxShadow = '0 0 10px var(--cyan)';
  }

  particlesContainer.appendChild(particle);
}

// ========== CHAPTERS DATA ==========
const chaptersData = [
  { id: 1, title: "एक अनसुलझा रहस्य और अंडे की दुनिया", desc: "नील सरोवर की गहराइयों में एक नए जीवन की शुरुआत।" },
  { id: 2, title: "पहला शिकार और जीवन रक्षा", desc: "पानी के नीचे का खतरनाक संसार और 'मास्क' का पहला इस्तेमाल।" },
  { id: 3, title: "मोल्टिंग का सफर और पहला बड़ा बदलाव", desc: "तंग कवच से बाहर निकलकर एक नया, मजबूत शरीर।" },
  { id: 4, title: "झील का खूंखार शिकारी और पानी का दानव", desc: "टेडपोल का शिकार और डाइविंग बीटल से महायुद्ध।" },
  { id: 5, title: "महान रूपांतरण और पानी से आसमान की ओर", desc: "केचुली का फटना और एक नए राजा का जन्म।" },
  { id: 6, title: "पहली उड़ान और हवा पर विजय", desc: "हवा में पहली छलांग, 360-डिग्री दृष्टि और हवाई शिकार।" },
  { id: 7, title: "इलाके की जंग और आसमान का संघर्ष", desc: "रेड डार्टर से महायुद्ध और अपने साम्राज्य की रक्षा।" },
  { id: 8, title: "प्यार का चक्र और 'Mating Wheel'", desc: "ज़ेफायरा से मिलन और प्रकृति का सबसे सुंदर दृश्य।" },
  { id: 9, title: "जीवन का संध्याकाल और अंतिम उड़ान", desc: "एक राजा का अंतिम सफर और आसमान की पुकार।" },
  { id: 10, title: "नया सवेरा और अनंत चक्र", desc: "एक नई पीढ़ी का जन्म और जीवन के चक्र की निरंतरता।" },
  { id: 11, title: "जीवन-गाथा के मुख्य तथ्य और विज्ञान", desc: "ड्रैगनफ्लाई से जुड़े 8 अद्भुत वैज्ञानिक तथ्य।" },
  { id: 12, title: "अंतिम अध्याय — अमर उड़ान और जीवन का संदेश", desc: "एरोन की गाथा से मिलने वाली 4 प्रेरणादायक सीख।" }
];

// ========== GENERATE CHAPTER CARDS ==========
const chaptersGrid = document.getElementById('chaptersGrid');

chaptersData.forEach(chapter => {
  const card = document.createElement('a');
  card.href = `unit${chapter.id}.html`;
  card.classList.add('chapter-card');

  // If it's the facts or conclusion chapter, add a special marker
  let badgeText = `अध्याय ${chapter.id}`;
  if (chapter.id === 11) badgeText = "विज्ञान और तथ्य";
  if (chapter.id === 12) badgeText = "समापन (Conclusion)";

  card.innerHTML = `
    <div class="chapter-num">${badgeText}</div>
    <div class="chapter-name">${chapter.title}</div>
    <div class="chapter-desc">${chapter.desc}</div>
    <div class="chapter-link">पढ़ना शुरू करें <span>→</span></div>
  `;

  chaptersGrid.appendChild(card);
});

// ========== 3D PARALLAX EFFECT FOR HERO IMAGES ==========
const heroVisual = document.querySelector('.hero-visual');
const mainImgFrame = document.querySelector('.main-img-frame');
const floatingCards = document.querySelectorAll('.floating-card');

if (heroVisual) {
  heroVisual.addEventListener('mousemove', (e) => {
    const x = (e.clientX - heroVisual.offsetWidth / 2) / 25;
    const y = (e.clientY - heroVisual.offsetHeight / 2) / 25;
    
    mainImgFrame.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
    
    floatingCards.forEach((card, index) => {
      const speed = (index + 1) * 0.5;
      card.style.transform = `translate(${-x * speed}px, ${-y * speed}px)`;
    });
  });

  heroVisual.addEventListener('mouseleave', () => {
    mainImgFrame.style.transform = `translate(0, 0) scale(1)`;
    floatingCards.forEach(card => {
      card.style.transform = `translate(0, 0)`;
    });
  });
}