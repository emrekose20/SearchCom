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

function renderRatings(data) {
  const box = document.getElementById("ratingInfo");
  box.innerHTML = "";

  const summary = document.createElement("div");
  summary.className = "list-item";
  summary.innerHTML = `
    <h4>Ortalama Puan</h4>
    <p>${Number(data.averageScore || 0).toFixed(1)} / 5</p>
  `;
  box.appendChild(summary);

  (data.ratings || []).forEach(item => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML = `
      <h4>Puan: ${item.score}</h4>
      <p><strong>Puan ID:</strong> ${item._id}</p>
      <p><strong>Kullanıcı ID:</strong> ${item.userId}</p>
    `;
    box.appendChild(div);
  });
}

async function addRating() {
  try {
    const storedUser = getStoredUser();

    const body = {
      userId: document.getElementById("ratingUserId").value.trim() || (storedUser ? storedUser._id : ""),
      establishmentId: document.getElementById("ratingEstablishmentId").value.trim(),
      score: Number(document.getElementById("ratingScore").value)
    };

    const res = await fetch(`${API_BASE}/ratings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Puan gönderilemedi.", "error");
      return;
    }

    setStatus("Puan başarıyla gönderildi.", "success");
  } catch (error) {
    setStatus(error.message, "error");
  }
}

async function getRatings() {
  try {
    const id = document.getElementById("getRatingsEstablishmentId").value.trim();

    const res = await fetch(`${API_BASE}/ratings/establishment/${id}`);
    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Puanlar getirilemedi.", "error");
      return;
    }

    renderRatings(data);
    setStatus("Puanlar listelendi.", "success");
  } catch (error) {
    setStatus(error.message, "error");
  }
}

async function updateRating() {
  try {
    const id = document.getElementById("updateRatingId").value.trim();
    const body = {
      score: Number(document.getElementById("updateRatingScore").value)
    };

    const res = await fetch(`${API_BASE}/ratings/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Puan güncellenemedi.", "error");
      return;
    }

    setStatus(data.message || "Puan güncellendi.", "success");
  } catch (error) {
    setStatus(error.message, "error");
  }
}