const API_BASE = "https://searchcom.onrender.com/api";

function setStatus(message, type = "success") {
  const status = document.getElementById("status");
  status.textContent = message;
  status.className = `status ${type}`;
}

function getStoredUser() {
  const raw = localStorage.getItem("searchcomUser");
  return raw ? JSON.parse(raw) : null;
}

function createStars(avg) {
  const full = Math.floor(avg);
  const decimal = avg - full;

  let html = "";

  for (let i = 0; i < full; i++) {
    html += `<span class="star full">★</span>`;
  }

  if (decimal >= 0.1) {
    html += `<span class="star half">★</span>`;
  }

  const remaining = 5 - (full + (decimal >= 0.1 ? 1 : 0));

  for (let i = 0; i < remaining; i++) {
    html += `<span class="star empty">★</span>`;
  }

  return html;
}

async function getAverageRating(establishmentId) {
  try {
    const res = await fetch(`${API_BASE}/ratings/establishment/${establishmentId}`);
    const data = await res.json();

    // 🔥 backend array döndürüyorsa ortalamayı burada hesapla
    if (Array.isArray(data)) {
      if (data.length === 0) return 0;
      const total = data.reduce((sum, r) => sum + r.score, 0);
      return total / data.length;
    }

    // 🔥 backend averageScore döndürüyorsa
    if (data.averageScore !== undefined) {
      return Number(data.averageScore);
    }

    return 0;
  } catch {
    return 0;
  }
}

async function renderEstablishments(items) {
  const list = document.getElementById("establishmentList");
  list.innerHTML = "";

  for (const item of items) {
    const avg = await getAverageRating(item._id);

    const div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML = `
      <h4>${item.name}</h4>
      <div class="stars-row">
        ${createStars(avg)}
        <span style="margin-left:8px;color:#0f766e;font-weight:bold;">
          (${avg.toFixed(1)})
        </span>
      </div>
    `;
    list.appendChild(div);
  }
}

async function getEstablishments() {
  const res = await fetch(`${API_BASE}/establishments`);
  const data = await res.json();
  await renderEstablishments(data);
}

if (!getStoredUser()) {
  window.location.href = "users.html";
} else {
  getEstablishments();
}