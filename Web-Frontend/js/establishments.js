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
  const fraction = avg - full;

  let html = "";

  for (let i = 0; i < full; i++) {
    html += `<span class="star full">★</span>`;
  }

  if (fraction >= 0.25 && fraction < 0.75) {
    html += `<span class="star half">★</span>`;
  } else if (fraction >= 0.75) {
    html += `<span class="star full">★</span>`;
  }

  const used =
    full + (fraction >= 0.25 && fraction < 0.75 ? 1 : 0) + (fraction >= 0.75 ? 1 : 0);

  for (let i = used; i < 5; i++) {
    html += `<span class="star empty">★</span>`;
  }

  return html;
}

async function getAverageRating(establishmentId) {
  try {
    const res = await fetch(`${API_BASE}/ratings/establishment/${establishmentId}`);
    const data = await res.json();

    if (!res.ok) return 0;

    if (typeof data.averageScore === "number") {
      return data.averageScore;
    }

    if (Array.isArray(data.ratings) && data.ratings.length > 0) {
      const total = data.ratings.reduce((sum, item) => sum + Number(item.score || 0), 0);
      return total / data.ratings.length;
    }

    if (Array.isArray(data) && data.length > 0) {
      const total = data.reduce((sum, item) => sum + Number(item.score || 0), 0);
      return total / data.length;
    }

    return 0;
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
    const avg = await getAverageRating(item._id);

    const div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML = `
      <h4>${item.name}</h4>
      <p><strong>Ortalama Puan:</strong> ${avg.toFixed(1)}</p>
      <div class="stars-row">
        ${createStars(avg)}
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