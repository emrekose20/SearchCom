const API_BASE = "https://searchcom.onrender.com/api";

function showResult(data, ok = true) {
  document.getElementById("result").textContent = JSON.stringify(data, null, 2);
  const status = document.getElementById("status");
  status.textContent = ok ? "İşlem başarılı." : "İşlem sırasında hata oluştu.";
  status.className = ok ? "status success" : "status error";
}

async function addFavorite() {
  try {
    const body = {
      userId: document.getElementById("favoriteUserId").value,
      establishmentId: document.getElementById("favoriteEstablishmentId").value
    };

    const res = await fetch(`${API_BASE}/favorites`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    showResult(await res.json(), res.ok);
  } catch (error) {
    showResult({ error: error.message }, false);
  }
}

async function getFavorites() {
  try {
    const userId = document.getElementById("getFavoritesUserId").value;
    const res = await fetch(`${API_BASE}/favorites/${userId}`);
    showResult(await res.json(), res.ok);
  } catch (error) {
    showResult({ error: error.message }, false);
  }
}

async function deleteFavorite() {
  try {
    const id = document.getElementById("deleteFavoriteId").value;
    const res = await fetch(`${API_BASE}/favorites/${id}`, {
      method: "DELETE"
    });

    showResult(await res.json(), res.ok);
  } catch (error) {
    showResult({ error: error.message }, false);
  }
}

async function updateFolder() {
  try {
    const id = document.getElementById("folderId").value;
    const body = {
      folderName: document.getElementById("folderName").value
    };

    const res = await fetch(`${API_BASE}/favorites/folders/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    showResult(await res.json(), res.ok);
  } catch (error) {
    showResult({ error: error.message }, false);
  }
}