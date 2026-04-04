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

function renderFavorites(items) {
  const list = document.getElementById("favoriteList");
  list.innerHTML = "";

  if (!items.length) {
    list.innerHTML = `<div class="info-box">Henüz favori kayıt yok.</div>`;
    return;
  }

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML = `
      <h4>Favori Kayıt</h4>
      <p><strong>Favori ID:</strong> ${item._id}</p>
      <p><strong>Mekân ID:</strong> ${item.establishmentId}</p>
      <p><strong>Klasör ID:</strong> ${item.folderId || "-"}</p>
    `;
    list.appendChild(div);
  });
}

async function addFavorite() {
  try {
    const storedUser = getStoredUser();

    const body = {
      userId: document.getElementById("favoriteUserId").value.trim() || (storedUser ? storedUser._id : ""),
      establishmentId: document.getElementById("favoriteEstablishmentId").value.trim()
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

    setStatus("Mekân favorilere eklendi.", "success");
  } catch (error) {
    setStatus(error.message, "error");
  }
}

async function getFavorites() {
  try {
    const storedUser = getStoredUser();
    const userId = document.getElementById("getFavoritesUserId").value.trim() || (storedUser ? storedUser._id : "");

    if (!userId) {
      setStatus("Favorileri görmek için kullanıcı ID gir ya da giriş yap.", "error");
      return;
    }

    const res = await fetch(`${API_BASE}/favorites/${userId}`);
    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Favoriler getirilemedi.", "error");
      return;
    }

    renderFavorites(data);
    setStatus("Favoriler listelendi.", "success");
  } catch (error) {
    setStatus(error.message, "error");
  }
}

async function deleteFavorite() {
  try {
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
  } catch (error) {
    setStatus(error.message, "error");
  }
}

async function updateFolder() {
  try {
    const id = document.getElementById("folderId").value.trim();
    const body = {
      folderName: document.getElementById("folderName").value.trim()
    };

    const res = await fetch(`${API_BASE}/favorites/folders/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Klasör güncellenemedi.", "error");
      return;
    }

    setStatus(data.message || "Klasör güncellendi.", "success");
  } catch (error) {
    setStatus(error.message, "error");
  }
}