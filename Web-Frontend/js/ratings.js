const API_BASE = "https://searchcom.onrender.com/api";

function showResult(data, ok = true) {
  document.getElementById("result").textContent = JSON.stringify(data, null, 2);
  const status = document.getElementById("status");
  status.textContent = ok ? "İşlem başarılı." : "İşlem sırasında hata oluştu.";
  status.className = ok ? "status success" : "status error";
}

async function addRating() {
  try {
    const body = {
      userId: document.getElementById("ratingUserId").value,
      establishmentId: document.getElementById("ratingEstablishmentId").value,
      score: Number(document.getElementById("ratingScore").value)
    };

    const res = await fetch(`${API_BASE}/ratings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    showResult(await res.json(), res.ok);
  } catch (error) {
    showResult({ error: error.message }, false);
  }
}

async function getRatings() {
  try {
    const id = document.getElementById("getRatingsEstablishmentId").value;
    const res = await fetch(`${API_BASE}/ratings/establishment/${id}`);
    showResult(await res.json(), res.ok);
  } catch (error) {
    showResult({ error: error.message }, false);
  }
}

async function updateRating() {
  try {
    const id = document.getElementById("updateRatingId").value;
    const body = {
      score: Number(document.getElementById("updateRatingScore").value)
    };

    const res = await fetch(`${API_BASE}/ratings/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    showResult(await res.json(), res.ok);
  } catch (error) {
    showResult({ error: error.message }, false);
  }
}