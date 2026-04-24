// CODIGO FEITO COM APOIO DE IA

let agentUnlocked = false;

window.renderHUD = function () {
  const app = document.getElementById("app");

  if (!app) {
    console.error("App não encontrado");
    return;
  }

  app.innerHTML = `
    <div class="hud">
      <header class="hud-header">
        <div class="header-line"></div>
        <nav class="hud-nav">
          <div class="nav-item active" data-tab="agente">AGENTE</div>
          <div class="nav-item" data-tab="sistema">SISTEMA</div>
          <div class="nav-item" data-tab="hardware">HARDWARE</div>
          <div class="nav-item" data-tab="drone">DRONE</div>
          <div class="nav-item" data-tab="logs">LOGS</div>
        </nav>
      </header>

      <div class="hud-content" id="hud-content">
        ${renderTab("agente")} 
      </div>
    </div>
  `;

  initHUD();
};

function renderTab(tab) {
  switch (tab) {

    // ABA AGENTE
   case "agente":

  if (!agentUnlocked) {
    return `
      <div class="agent-lock">

        <h2>ACESSO RESTRITO</h2>
        <p>> Digite a senha da agente</p>

        <input 
          type="password" 
          id="agent-password" 
          placeholder="ENTER PASSWORD"
        />

        <button id="unlock-btn">DESBLOQUEAR</button>

        <p id="error-msg" class="error-msg"></p>

      </div>
    `;
  }

  return `
    <div class="tab-content">
      <h1>AGENTE CH3ETAH</h1>

      <div class="agent-info">
        <p><span>STATUS:</span> ATIVA</p>
        <p><span>CLASSE:</span> OPERADORA DE SISTEMAS</p>
        <p><span>ESPECIALIDADE:</span> HARDWARE / INFRA</p>
        <p><span>ACESSO:</span> NÍVEL ROOT</p>
      </div>
    </div>
  `;

  // ABA SISTEMA
    case "sistema":
      return `
      <div class="tech-bg-grid"></div>
        <div class="skills-container">
          <div class="system-summary">
            <div class="summary-item"><span>STATUS:</span> <span class="green" style="color: #00FF9C;">ONLINE</span></div>
            <div class="summary-item"><span>USER:</span> <span>CH3ETAH</span></div>
          </div>

          <div class="skills-list">
            ${renderSkillRow("SISTEMAS OPERACIONAIS", 80, "AVANÇADO", ["Windows", "Unix Architecture", "File Systems"])}
            ${renderSkillRow("LINUX DISTROS", 50, "INTERMEDIÁRIO", ["Debian/Ubuntu", "Ubunto Server", "Package Management", "Permissions"])}
            ${renderSkillRow("TERMINAL DE COMANDO", 42, "INTERMEDIÁRIO", ["Bash Scripting", "SSH/Telnet", "CMD", "Linux"])}
            ${renderSkillRow("FERRAMENTAS & UTILITÁRIOS", 60, "INTERMEDIÁRIO", ["Git/Version Control", "Monitoring"])}
          </div>
        </div>
      `;

      // ABA HARDWARE
 case "hardware":
  const hardwareAttrs = [
    { nome: "INFRA DATA CENTER", val: 4, pos: "top", desc: "Gestão de Racks e Cabeamento" },
    { nome: "MONTAGEM & SETUP", val: 9, pos: "top-right", desc: "Arquitetura de Hardware Custom" },
    { nome: "MANUTENÇÃO", val: 8, pos: "bottom-right", desc: "Diagnóstico de Nível 3" },
    { nome: "REDES & CONECTIVIDADE", val: 6, pos: "bottom-left", desc: "Topologia e Protocolos" },
    { nome: "CONFIG. LINUX", val: 7, pos: "top-left", desc: "Kernel e Otimização" }
  ];

  const attrHtml = hardwareAttrs.map(a => `
    <div class="hw-node ${a.pos}">
      <div class="node-bracket"></div>
      <div class="node-content">
        <span class="node-label">${a.nome}</span>
        <div class="node-value-bar">
          <span class="node-number">${a.val}</span>
          <div class="mini-dots">${'<span></span>'.repeat(10)}</div>
        </div>
        <span class="node-desc">${a.desc}</span>
      </div>
    </div>
  `).join("");

  return `
    <div class="hardware-tech-root">
    <div class="tech-bg-grid"></div>
      
      <div class="hw-tech-header">
        <div class="glitch-box">IDENTIFICAÇÃO: CH3ETAH_SPECIALIST_V3</div>
        <div class="status-line">SINCRONIA NEURAL: <span class="green">98.4%</span></div>
      </div>

      <div class="hw-core-wrapper">
        <div class="central-hex">
          <div class="hex-inner">
            <span class="hex-title">NÍVEL</span>
            <span class="hex-value">ROOT</span>
          </div>
          <div class="hex-scanner"></div>
        </div>
        ${attrHtml}
        
        <svg class="hw-connections" viewBox="0 0 500 500">
           <path d="M250 100 L250 200 M380 180 L300 230 M330 380 L280 280 M170 380 L220 280 M120 180 L200 230" stroke="#FF2A2A" stroke-width="0.5" fill="none" opacity="0.4"/>
        </svg>
      </div>

      <div class="hw-side-panel">
  <div class="panel-section">
    <h3>SISTEMAS CRÍTICOS</h3>

    <div class="log-entry">UPTIME: 1028h 12m</div>
    <div class="log-entry">TEMP_CPU: 42°C</div>
    <div class="log-entry">BUS_SPEED: 6000MHz</div>

    <!-- DICA ESCONDIDA -->
    <div class="log-entry glitch-hint">
      SYS_KEY_PART: <span class="glitch-text" data-text="CH3">CH3</span>
    </div>

  </div>
</div>
  `;
      // ABA 
    case "drone":
      return `<div class="tab-content"><h1>DRONE SYSTEM</h1></div>
      <div class="tech-bg-grid"></div>
      `;

    // ABA LOGS
    case "logs":
      return `<div class="tab-content"><h1>SYSTEM LOGS</h1></div>
      <div class="tech-bg-grid"></div>
      `;

    default:
      return `<div class="tab-content"><h1>UNKNOWN_MODULE</h1></div>`;
  }
}


function renderSkillRow(name, percent, rank, subSkills) {
  const modulesHtml = subSkills.map(skill => `<span class="module-tag">${skill}</span>`).join("");

  return `
    <div class="skill-row">
      <div class="skill-identity">
        <div class="skill-name-wrapper">
          <span class="skill-name">${name}</span>
          <span class="skill-rank-label">${rank}</span>
        </div>
        <div class="skill-modules">
          ${modulesHtml}
        </div>
      </div>

      <div class="skill-progress-focus">
        <div class="progress-info">
          <span class="percent-val">${percent}%</span>
          <div class="bar-container">
            <div class="bar-fill" style="width: ${percent}%">
              <div class="bar-glitch"></div>
            </div>
          </div>
        </div>
        <div class="status-indicator">
          <span class="dot pulse"></span> MODULE_ACTIVE
        </div>
      </div>
    </div>
  `;
}

function initHUD() {
  const tabs = document.querySelectorAll(".nav-item");
  const content = document.getElementById("hud-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.dataset.tab;
      content.innerHTML = renderTab(target);

      if (target === "agente") {
        initAgentLock();
      }
    });
  });

  
  initAgentLock();
}

function initAgentLock() {
  const btn = document.getElementById("unlock-btn");
  const input = document.getElementById("agent-password");
  const error = document.getElementById("error-msg");

  if (!btn || !input) return;

  btn.addEventListener("click", () => {
    if (input.value === "123") {

      agentUnlocked = true;

      // efeito visual foda
      document.body.classList.add("state-unlocked");

      const content = document.getElementById("hud-content");
      content.innerHTML = renderTab("agente");

    } else {
      error.textContent = ">> ACESSO NEGADO";
      input.value = "";

    }
  });
}