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

function renderMyRatings(ratings) {
  const list = document.getElementById("myRatingsList");
  list.innerHTML = "";

  if (!ratings.length) {
    list.innerHTML = `<div class="info-box">Henüz puan vermedin.</div>`;
    return;
  }

  ratings.forEach((rating) => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML = `
      <h4>${rating.establishmentName}</h4>
      <p><strong>Puan:</strong> ${rating.score}</p>
      <p><strong>Puan ID:</strong> ${rating._id}</p>
    `;
    list.appendChild(div);
  });
}

async function loadMyRatings() {
  try {
    const user = getStoredUser();

    if (!user?._id) {
      window.location.href = "users.html";
      return;
    }

    const res = await fetch(`${API_BASE}/ratings/user/${user._id}`);
    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Puanlar getirilemedi.", "error");
      return;
    }

    renderMyRatings(data);
    setStatus("Puanların listelendi.", "success");
  } catch (error) {
    setStatus(error.message, "error");
  }
}

async function addRating() {
  try {
    const user = getStoredUser();

    if (!user?._id) {
      window.location.href = "users.html";
      return;
    }

    const body = {
      userId: user._id,
      establishmentName: document.getElementById("ratingEstablishmentName").value.trim(),
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
    document.getElementById("ratingEstablishmentName").value = "";
    document.getElementById("ratingScore").value = "";
    loadMyRatings();
  } catch (error) {
    setStatus(error.message, "error");
  }
}

async function updateRating() {
  try {
    const user = getStoredUser();

    if (!user?._id) {
      window.location.href = "users.html";
      return;
    }

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
    document.getElementById("updateRatingId").value = "";
    document.getElementById("updateRatingScore").value = "";
    loadMyRatings();
  } catch (error) {
    setStatus(error.message, "error");
  }
}

loadMyRatings();