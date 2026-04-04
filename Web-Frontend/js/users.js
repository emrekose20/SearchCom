const API_BASE = "https://searchcom.onrender.com/api";

function showResult(data, ok = true) {
  document.getElementById("result").textContent = JSON.stringify(data, null, 2);
  const status = document.getElementById("status");
  status.textContent = ok ? "İşlem başarılı." : "İşlem sırasında hata oluştu.";
  status.className = ok ? "status success" : "status error";
}

async function registerUser() {
  try {
    const body = {
      name: document.getElementById("registerName").value,
      email: document.getElementById("registerEmail").value,
      password: document.getElementById("registerPassword").value
    };

    const res = await fetch(`${API_BASE}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    showResult(await res.json(), res.ok);
  } catch (error) {
    showResult({ error: error.message }, false);
  }
}

async function getUser() {
  try {
    const id = document.getElementById("getUserId").value;
    const res = await fetch(`${API_BASE}/users/${id}`);
    showResult(await res.json(), res.ok);
  } catch (error) {
    showResult({ error: error.message }, false);
  }
}

async function updateUser() {
  try {
    const id = document.getElementById("updateUserId").value;
    const body = {
      name: document.getElementById("updateUserName").value,
      password: document.getElementById("updateUserPassword").value
    };

    const res = await fetch(`${API_BASE}/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    showResult(await res.json(), res.ok);
  } catch (error) {
    showResult({ error: error.message }, false);
  }
}

async function deleteUser() {
  try {
    const id = document.getElementById("deleteUserId").value;
    const res = await fetch(`${API_BASE}/users/${id}`, {
      method: "DELETE"
    });

    showResult(await res.json(), res.ok);
  } catch (error) {
    showResult({ error: error.message }, false);
  }
}