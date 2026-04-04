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

function updateActiveUserUI() {
  const box = document.getElementById("activeUserBox");
  const user = getStoredUser();

  if (!user) {
    box.className = "user-pill hidden";
    box.textContent = "";
    return;
  }

  box.className = "user-pill";
  box.textContent = `Aktif kullanıcı: ${user.name} (${user.email})`;
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

    const data = await res.json();

    if (!res.ok) return setStatus(data.message, "error");

    setStatus("Kayıt başarılı");
  } catch (err) {
    setStatus(err.message, "error");
  }
}

async function loginUser() {
  try {
    const body = {
      email: document.getElementById("loginEmail").value,
      password: document.getElementById("loginPassword").value
    };

    const res = await fetch(`${API_BASE}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    if (!res.ok) return setStatus(data.message, "error");

    localStorage.setItem("searchcomUser", JSON.stringify(data.user));
    updateActiveUserUI();

    setStatus("Giriş başarılı");
  } catch (err) {
    setStatus(err.message, "error");
  }
}

function logoutUser() {
  localStorage.removeItem("searchcomUser");
  updateActiveUserUI();
  setStatus("Çıkış yapıldı", "warning");
}

async function getUser() {
  try {
    const id = document.getElementById("getUserId").value;

    const res = await fetch(`${API_BASE}/users/${id}`);
    const data = await res.json();

    if (!res.ok) return setStatus(data.message, "error");

    setStatus(`Kullanıcı: ${data.name}`);
  } catch (err) {
    setStatus(err.message, "error");
  }
}

async function updateUser() {
  try {
    const stored = getStoredUser();
    const id = document.getElementById("updateUserId").value || stored?._id;

    const body = {
      name: document.getElementById("updateUserName").value,
      password: document.getElementById("updateUserPassword").value
    };

    const res = await fetch(`${API_BASE}/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    if (!res.ok) return setStatus(data.message, "error");

    setStatus("Güncellendi");
  } catch (err) {
    setStatus(err.message, "error");
  }
}

async function deleteUser() {
  try {
    const stored = getStoredUser();
    const id = document.getElementById("deleteUserId").value || stored?._id;

    const res = await fetch(`${API_BASE}/users/${id}`, {
      method: "DELETE"
    });

    const data = await res.json();

    if (!res.ok) return setStatus(data.message, "error");

    logoutUser();
    setStatus("Silindi");
  } catch (err) {
    setStatus(err.message, "error");
  }
}

updateActiveUserUI();