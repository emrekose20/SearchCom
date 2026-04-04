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

function renderMyFavorites(favorites) {
  const list = document.getElementById("myFavoritesList");
  list.innerHTML = "";

  if (!favorites.length) {
    list.innerHTML = `<div class="info-box">Henüz favori mekan eklemedin.</div>`;
    return;
  }

  favorites.forEach((favorite) => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML = `
      <h4>${favorite.establishmentName}</h4>
      <p><strong>Favori ID:</strong> ${favorite._id}</p>
    `;
    list.appendChild(div);
  });
}

async function loadMyFavorites() {
  try {
    const user = getStoredUser();

    if (!user?._id) {
      window.location.href = "users.html";
      return;
    }

    const res = await fetch(`${API_BASE}/favorites/${user._id}`);
    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Favoriler getirilemedi.", "error");
      return;
    }

    renderMyFavorites(data);
    setStatus("Favorilerin listelendi.", "success");
  } catch (error) {
    setStatus(error.message, "error");
  }
}

async function addFavorite() {
  try {
    const user = getStoredUser();

    if (!user?._id) {
      window.location.href = "users.html";
      return;
    }

    const body = {
      userId: user._id,
      establishmentName: document.getElementById("favoriteEstablishmentName").value.trim()
    };

    const res = await fetch(`${API_BASE}/favorites`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Favori eklenemedi.", "error");
      return;
    }

    setStatus(data.message || "Mekan favorilere eklendi.", "success");
    document.getElementById("favoriteEstablishmentName").value = "";
    loadMyFavorites();
  } catch (error) {
    setStatus(error.message, "error");
  }
}

async function deleteFavorite() {
  try {
    const user = getStoredUser();

    if (!user?._id) {
      window.location.href = "users.html";
      return;
    }

    const id = document.getElementById("deleteFavoriteId").value.trim();

    const res = await fetch(`${API_BASE}/favorites/${id}`, {
      method: "DELETE"
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Favori silinemedi.", "error");
      return;
    }

    setStatus(data.message || "Favori kaldırıldı.", "success");
    document.getElementById("deleteFavoriteId").value = "";
    loadMyFavorites();
  } catch (error) {
    setStatus(error.message, "error");
  }
}

loadMyFavorites();