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

function renderEstablishments(items) {
  const list = document.getElementById("establishmentList");
  list.innerHTML = "";

  if (!items.length) {
    list.innerHTML = `<div class="info-box">Henüz kayıtlı mekân yok.</div>`;
    return;
  }

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML = `
      <h4>${item.name}</h4>
      <p>${item.address}</p>
    `;
    list.appendChild(div);
  });
}

async function getEstablishments() {
  try {
    const res = await fetch(`${API_BASE}/establishments`);
    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Mekânlar getirilemedi.", "error");
      return;
    }

    renderEstablishments(data);
    setStatus(`${data.length} mekân listelendi.`, "success");
  } catch (error) {
    setStatus(error.message, "error");
  }
}

if (!getStoredUser()) {
  window.location.href = "users.html";
} else {
  getEstablishments();
}