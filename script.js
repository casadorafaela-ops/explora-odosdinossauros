function switchTab(event, tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}

function filterDinos() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.dino-card');

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(input) ? 'block' : 'none';
  });
}

function sendMessage() {
  const input = document.getElementById('userInput');
  const chatBox = document.getElementById('chatBox');
  const text = input.value.trim();

  if (!text) return;

  chatBox.innerHTML += `<div class="msg user">${text}</div>`;
  input.value = '';

  setTimeout(() => {
    let reply = "Informação não encontrada no banco de dados. Tente perguntar sobre T-Rex, Triceratops, Velociraptor ou Brachiosaurus!";
    const lower = text.toLowerCase();
    
    if (lower.includes('t-rex') || lower.includes('tyrannosaurus')) {
      reply = "O Tyrannosaurus Rex media cerca de 12 metros de comprimento e pesava até 8 toneladas.";
    } else if (lower.includes('triceratops')) {
      reply = "O Triceratops viveu no final do Cretáceo e usava seus chifres principalmente para defesa contra predadores.";
    } else if (lower.includes('velociraptor')) {
      reply = "O Velociraptor era um caçador bípede, rápido, com cerca de 2 metros de comprimento.";
    } else if (lower.includes('brachiosaurus')) {
      reply = "O Brachiosaurus podia atingir até 13 metros de altura, equivalente a um prédio de 4 andares.";
    }

    chatBox.innerHTML += `<div class="msg ai">${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 400);
}
