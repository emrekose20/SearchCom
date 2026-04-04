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

async function createEstablishmentCard(item) {
  const commentsRes = await fetch(
    `${API_BASE}/comments/establishment/${encodeURIComponent(item.name)}`
  );
  const commentsData = await commentsRes.json();

  const ratingsRes = await fetch(
    `${API_BASE}/ratings/establishment/${encodeURIComponent(item.name)}`
  );
  const ratingsData = await ratingsRes.json();

  const div = document.createElement("div");
  div.className = "list-item";

  const commentsHtml = Array.isArray(commentsData) && commentsData.length
    ? commentsData.map(comment => `
        <div class="comment-block">
          <p><strong>Kullanıcı:</strong> ${comment.userName}</p>
          <p><strong>Yorum:</strong> ${comment.content}</p>
          <div class="score-line">Verilen Puan: ${Number(ratingsData.averageScore || 0).toFixed(1)}</div>
        </div>
      `).join("")
    : `<div class="comment-block"><p>Henüz yorum yok.</p><div class="score-line">Verilen Puan: ${Number(ratingsData.averageScore || 0).toFixed(1)}</div></div>`;

  div.innerHTML = `
    <h4>${item.name}</h4>
    <p>${item.address}</p>
    ${commentsHtml}
  `;

  return div;
}

async function renderEstablishments(items) {
  const list = document.getElementById("establishmentList");
  list.innerHTML = "";

  if (!items.length) {
    list.innerHTML = `<div class="info-box">Henüz kayıtlı mekân yok.</div>`;
    return;
  }

  for (const item of items) {
    const card = await createEstablishmentCard(item);
    list.appendChild(card);
  }
}

async function getEstablishments() {
  try {
    const res = await fetch(`${API_BASE}/establishments`);
    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Mekânlar getirilemedi.", "error");
      return;
    }

    await renderEstablishments(data);
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