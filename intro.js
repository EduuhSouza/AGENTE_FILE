// CODIGO FEITO COM APOIO DE IA

const delay = (ms) => new Promise(r => setTimeout(r, ms));

let terminal;

async function typeText(text, speed = 30) {
  for (let i = 0; i < text.length; i++) {
    terminal.textContent += text[i];
    await delay(speed);
  }
  terminal.textContent += "\n";
}

// input estilo terminal
function createInput() {
  return new Promise(resolve => {
    const input = document.createElement("input");

    input.style.background = "transparent";
    input.style.border = "none";
    input.style.color = "#FF2A2A";
    input.style.fontFamily = "Share Tech Mono";
    input.style.fontSize = "14px";
    input.style.outline = "none";

    terminal.appendChild(input);
    input.focus();

    input.addEventListener("keydown", function(e) {
      if (e.key === "Enter") {
        const value = input.value.trim();
        terminal.removeChild(input);
        terminal.textContent += value + "\n";
        resolve(value);
      }
    });
  });
}

async function showLogo() {
  terminal.textContent = `
 ██╗  ██╗██╗   ██╗██████╗ ██████╗  █████╗ 
 ██║  ██║╚██╗ ██╔╝██╔══██╗██╔══██╗██╔══██╗
 ███████║ ╚████╔╝ ██║  ██║██████╔╝███████║
 ██╔══██║  ╚██╔╝  ██║  ██║██╔══██╗██╔══██║
 ██║  ██║   ██║   ██████╔╝██║  ██║██║  ██║
 ╚═╝  ╚═╝   ╚═╝   ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝

     [ HYDRA VER 3.1 SYS RECOVERY ]
  `;

  await delay(2000);
  terminal.textContent = "";
}

async function bootSequence() {
  await typeText(">> Initializing HYDRA core...");
  await delay(400);
  await typeText(">> Loading recovery protocols...");
  await delay(300);
  await typeText(">> Mounting system partitions...");
  await delay(300);
  await typeText(">> Checking integrity... [OK]");
  await delay(300);
  await typeText(">> Re-establishing secure channels...");
  await delay(300);
  await typeText(">> Network status: RECONNECTED");
}

// SEGURANÇA REALISTA
async function securityChallenge() {
  await typeText("\n>> SECURITY LAYER DETECTED");
  await typeText(">> Encryption: AES-666");
  await typeText(">> Access Level: RESTRICTED");

  await typeText("\n>> Hint: requires root privileges");

  let attempts = 0;

  while (true) {
    await typeText("\n>> root@hydra:~$");
    const cmd = await createInput();

    if (cmd.toLowerCase() === "sudo") {
      await typeText(">> Elevating privileges...");
      await typeText(">> Access granted.");
      break;
    } else {
      attempts++;
      await typeText(">> Permission denied.");

      if (attempts >= 3) {
        await typeText(">> Bypassing authentication...");
        break;
      }
    }
  }
}

// HACK / DECRYPT
async function decryptionSequence() {
  await typeText("\n>> Injecting exploit...");
  await typeText(">> Overriding firewall rules...");
  await typeText(">> Accessing secure memory blocks...");

  const codes = [
    "0xA3FF21 :: buffer.inject()",
    "node.override --auth-bypass",
    "decrypt.layer(secure_protocol)",
    "kernel.exec --root-access",
    "memory.dump(0x000FFF)"
  ];

  for (let code of codes) {
    await typeText(">> " + code, 15);
    await delay(150);
  }

  await typeText("\n>> Decrypting agent file...");

  for (let i = 0; i <= 100; i += 4) {
    terminal.textContent += `>> ${"█".repeat(i/4)} ${i}%\n`;
    await delay(40);
  }

  await typeText("\n>> FILE: AGENT_CH3ETAH.dat");
  await typeText(">> STATUS: UNLOCKED");
}

// FINAL
async function startSystem() {

  terminal = document.getElementById("terminal");

  if (!terminal) {
    console.error("Terminal não encontrado");
    return;
  }

  await showLogo();
  await bootSequence();
  await securityChallenge();
  await decryptionSequence();

  await typeText("\n>> Welcome, Operator.");
  await delay(800);

  const screen = document.querySelector(".screen");

  if (screen) {
    screen.style.transition = "opacity 0.8s";
    screen.style.opacity = "0";
  }

  setTimeout(() => {
    if (screen) screen.remove();

    const app = document.getElementById("app");
    app.innerHTML = "";

    if (typeof window.renderHUD === "function") {
      window.renderHUD();
    } else {
      console.error("renderHUD não encontrado");
    }

  }, 800);
}

window.onload = startSystem;