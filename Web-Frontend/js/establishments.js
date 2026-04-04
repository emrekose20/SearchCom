const API_BASE = "https://searchcom.onrender.com/api";

function setStatus(message, type = "success") {
  const status = document.getElementById("status");
  status.textContent = message;
  status.className = `status ${type}`;
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
      <p><strong>ID:</strong> ${item._id}</p>
    `;
    list.appendChild(div);
  });
}

async function createEstablishment() {
  try {
    const body = {
      name: document.getElementById("createEstablishmentName").value.trim(),
      address: document.getElementById("createEstablishmentAddress").value.trim()
    };

    const res = await fetch(`${API_BASE}/establishments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Mekân eklenemedi.", "error");
      return;
    }

    setStatus("Mekân başarıyla eklendi.", "success");
    document.getElementById("createEstablishmentName").value = "";
    document.getElementById("createEstablishmentAddress").value = "";
    getEstablishments();
  } catch (error) {
    setStatus(error.message, "error");
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

    renderEstablishments(data);
    setStatus(`${data.length} mekân listelendi.`, "success");
  } catch (error) {
    setStatus(error.message, "error");
  }
}

async function updateEstablishment() {
  try {
    const id = document.getElementById("updateEstablishmentId").value.trim();
    const body = {
      name: document.getElementById("updateEstablishmentName").value.trim(),
      address: document.getElementById("updateEstablishmentAddress").value.trim()
    };

    const res = await fetch(`${API_BASE}/establishments/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Güncelleme başarısız.", "error");
      return;
    }

    setStatus(data.message || "Mekân güncellendi.", "success");
    getEstablishments();
  } catch (error) {
    setStatus(error.message, "error");
  }
}

async function deleteEstablishment() {
  try {
    const id = document.getElementById("deleteEstablishmentId").value.trim();

    const res = await fetch(`${API_BASE}/establishments/${id}`, {
      method: "DELETE"
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Silme işlemi başarısız.", "error");
      return;
    }

    setStatus(data.message || "Mekân silindi.", "success");
    document.getElementById("deleteEstablishmentId").value = "";
    getEstablishments();
  } catch (error) {
    setStatus(error.message, "error");
  }
}