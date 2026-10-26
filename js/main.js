// Comportamentos comuns das páginas das marcas (PKZ e One To One):
// menu hambúrguer, janela de contato, links de WhatsApp e botão de voltar ao topo.

document.addEventListener("DOMContentLoaded", () => {
  // ---------- Menu hambúrguer ----------
  const menuBtn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("primary-navigation");

  function fecharMenu() {
    menu.classList.remove("nav-open");
    menuBtn.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  menuBtn.addEventListener("click", () => {
    const aberto = menu.classList.toggle("nav-open"); // true se acabou de abrir
    menuBtn.classList.toggle("active", aberto); // o ícone vira "X"
    menuBtn.setAttribute("aria-expanded", aberto);
  });

  // fecha ao clicar em um link do menu ou ao apertar Esc
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", fecharMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharMenu();
  });

  // ---------- Janela de contato (<dialog>) ----------
  const contato = document.getElementById("contact");
  const nomeInput = document.getElementById("name");

  document.getElementById("open-contact-modal").addEventListener("click", (e) => {
    e.preventDefault(); // não deixa o link pular para #contact
    contato.showModal();
  });
  document.getElementById("close-modal").addEventListener("click", () => contato.close());
  contato.addEventListener("click", (e) => {
    if (e.target === contato) contato.close(); // clique no fundo escuro
  });

  // botão "Enviar para WhatsApp": abre o WhatsApp com a mensagem pronta
  document.getElementById("whatsapp-cta").addEventListener("click", () => {
    const nome = nomeInput.value.trim() || BRAND.contactFallbackName;
    const url = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.contactMessage(nome))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });

  // ---------- Links de WhatsApp ----------
  // O HTML não guarda o número: os links com data-whatsapp recebem o de data.js.
  document.querySelectorAll("a[data-whatsapp]").forEach((link) => {
    link.href = `https://wa.me/${BRAND.whatsapp}`;
  });

  // ---------- Botão de voltar ao topo ----------
  const topo = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    topo.classList.toggle("show", window.scrollY > 300); // aparece depois de 300px de rolagem
  });
  topo.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // ---------- Mapa sob demanda ----------
  // O iframe do Google Maps só é criado no clique: a página não baixa o mapa de quem não vai usá-lo.
  document.querySelectorAll(".map-facade").forEach((botao) => {
    botao.addEventListener("click", () => {
      if (!botao.dataset.mapSrc) return; // sem endereço não há mapa para carregar
      const mapa = document.createElement("iframe");
      mapa.src = botao.dataset.mapSrc;
      mapa.title = botao.dataset.mapTitle;
      mapa.width = "100%";
      mapa.height = "400";
      mapa.allowFullscreen = true;
      mapa.tabIndex = -1; // como no HTML original: o mapa fica fora da ordem do Tab
      // O foco vai para a caixa, não para o mapa: o Google Maps é de outra origem e pode prender o Tab
      const caixa = botao.parentElement;
      caixa.tabIndex = -1;
      caixa.setAttribute("role", "region"); // o leitor de tela anuncia "Mapa: Localização ..." em vez de um bloco sem nome
      caixa.setAttribute("aria-label", `Mapa: ${botao.dataset.mapTitle}`);
      botao.replaceWith(mapa);
      caixa.focus(); // o botão sumiu: sem isso o foco cairia no <body>
    });
  });

  // ---------- Seções aparecem ao rolar ----------
  // Sem IntersectionObserver ou com "reduzir movimento" ligado, tudo fica visível desde o início.
  const semAnimacao = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!semAnimacao && "IntersectionObserver" in window) {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;
          entrada.target.classList.add("is-visible");
          observador.unobserve(entrada.target); // anima só uma vez
        });
      },
      { rootMargin: "0px 0px -10% 0px" } // começa quando a seção passa 10% da borda de baixo
    );
    // a primeira seção (hero) já está na tela e fica de fora
    document.querySelectorAll("main > section:not(:first-child)").forEach((secao) => {
      secao.classList.add("reveal");
      observador.observe(secao);
    });
  }
});