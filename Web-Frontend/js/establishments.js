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

function createStars(averageScore) {
  const fullStars = Math.floor(averageScore);
  const decimalPart = averageScore - fullStars;

  let starsHtml = "";

  for (let i = 0; i < fullStars; i++) {
    starsHtml += `<span class="star full">★</span>`;
  }

  if (decimalPart > 0) {
    if (decimalPart < 0.5) {
      starsHtml += `<span class="star half" style="--fill: ${decimalPart * 100}%;">★</span>`;
    } else {
      starsHtml += `<span class="star half" style="--fill: 50%;">★</span>`;
    }
  }

  const shownStars = fullStars + (decimalPart > 0 ? 1 : 0);
  const emptyStars = 5 - shownStars;

  for (let i = 0; i < emptyStars; i++) {
    starsHtml += `<span class="star empty">★</span>`;
  }

  return starsHtml;
}

async function getAverageRating(establishmentId) {
  try {
    const res = await fetch(`${API_BASE}/ratings/establishment/${establishmentId}`);
    const data = await res.json();

    if (!res.ok) return 0;
    return Number(data.averageScore || 0);
  } catch (error) {
    return 0;
  }
}

async function renderEstablishments(items) {
  const list = document.getElementById("establishmentList");
  list.innerHTML = "";

  if (!items.length) {
    list.innerHTML = `<div class="info-box">Henüz kayıtlı mekan yok.</div>`;
    return;
  }

  for (const item of items) {
    const averageScore = await getAverageRating(item._id);

    const div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML = `
      <h4>${item.name}</h4>
      <p><strong>Ortalama Puan:</strong></p>
      <div class="stars-row">
        ${createStars(averageScore)}
      </div>
    `;
    list.appendChild(div);
  }
}

async function getEstablishments() {
  try {
    const res = await fetch(`${API_BASE}/establishments`);
    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Mekanlar getirilemedi.", "error");
      return;
    }

    await renderEstablishments(data);
    setStatus(`${data.length} mekan listelendi.`, "success");
  } catch (error) {
    setStatus(error.message, "error");
  }
}

if (!getStoredUser()) {
  window.location.href = "users.html";
} else {
  getEstablishments();
}