const API_BASE = "https://searchcom.onrender.com/api";

function showResult(data, ok = true) {
  document.getElementById("result").textContent = JSON.stringify(data, null, 2);
  const status = document.getElementById("status");
  status.textContent = ok ? "İşlem başarılı." : "İşlem sırasında hata oluştu.";
  status.className = ok ? "status success" : "status error";
}

async function createEstablishment() {
  try {
    const body = {
      name: document.getElementById("createEstablishmentName").value,
      address: document.getElementById("createEstablishmentAddress").value
    };

    const res = await fetch(`${API_BASE}/establishments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    showResult(await res.json(), res.ok);
  } catch (error) {
    showResult({ error: error.message }, false);
  }
}

async function getEstablishments() {
  try {
    const res = await fetch(`${API_BASE}/establishments`);
    showResult(await res.json(), res.ok);
  } catch (error) {
    showResult({ error: error.message }, false);
  }
}

async function updateEstablishment() {
  try {
    const id = document.getElementById("updateEstablishmentId").value;
    const body = {
      name: document.getElementById("updateEstablishmentName").value,
      address: document.getElementById("updateEstablishmentAddress").value
    };

    const res = await fetch(`${API_BASE}/establishments/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    showResult(await res.json(), res.ok);
  } catch (error) {
    showResult({ error: error.message }, false);
  }
}

async function deleteEstablishment() {
  try {
    const id = document.getElementById("deleteEstablishmentId").value;
    const res = await fetch(`${API_BASE}/establishments/${id}`, {
      method: "DELETE"
    });

    showResult(await res.json(), res.ok);
  } catch (error) {
    showResult({ error: error.message }, false);
  }
}