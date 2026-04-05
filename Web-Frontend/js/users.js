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

  if (!box) return;

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
      name: document.getElementById("registerName").value.trim(),
      email: document.getElementById("registerEmail").value.trim(),
      password: document.getElementById("registerPassword").value
    };

    const res = await fetch(`${API_BASE}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Kayıt başarısız.", "error");
      return;
    }

    setStatus("Kayıt başarılı. Şimdi giriş yapabilirsin.", "success");

    document.getElementById("registerName").value = "";
    document.getElementById("registerEmail").value = "";
    document.getElementById("registerPassword").value = "";
  } catch (err) {
    setStatus(err.message, "error");
  }
}

async function loginUser() {
  try {
    const body = {
      email: document.getElementById("loginEmail").value.trim(),
      password: document.getElementById("loginPassword").value
    };

    const res = await fetch(`${API_BASE}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Giriş başarısız.", "error");
      return;
    }

    localStorage.setItem("searchcomUser", JSON.stringify(data.user));
    updateActiveUserUI();
    setStatus("Giriş başarılı. Panele yönlendiriliyorsun...", "success");

    setTimeout(() => {
      window.location.href = "panel.html";
    }, 700);
  } catch (err) {
    setStatus(err.message, "error");
  }
}

function logoutUser() {
  localStorage.removeItem("searchcomUser");
  updateActiveUserUI();
  setStatus("Çıkış yapıldı.", "warning");
}

async function getMyUser() {
  try {
    const storedUser = getStoredUser();

    if (!storedUser?._id) {
      setStatus("Önce giriş yapmalısın.", "error");
      return;
    }

    const res = await fetch(`${API_BASE}/users/${storedUser._id}`);
    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Kullanıcı getirilemedi.", "error");
      return;
    }

    setStatus(`Kullanıcı: ${data.name} - ${data.email}`, "success");
  } catch (err) {
    setStatus(err.message, "error");
  }
}

async function updateUser() {
  try {
    const storedUser = getStoredUser();

    if (!storedUser?._id) {
      setStatus("Güncellemek için önce giriş yapmalısın.", "error");
      return;
    }

    const body = {};
    const name = document.getElementById("updateUserName").value.trim();
    const password = document.getElementById("updateUserPassword").value;

    if (name) body.name = name;
    if (password) body.password = password;

    if (!body.name && !body.password) {
      setStatus("En az bir alan doldurmalısın.", "error");
      return;
    }

    const res = await fetch(`${API_BASE}/users/${storedUser._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Güncelleme başarısız.", "error");
      return;
    }

    const updatedUser = {
      ...storedUser,
      ...(data.user || {})
    };

    localStorage.setItem("searchcomUser", JSON.stringify(updatedUser));
    updateActiveUserUI();

    setStatus(data.message || "Profil güncellendi.", "success");

    document.getElementById("updateUserName").value = "";
    document.getElementById("updateUserPassword").value = "";
  } catch (err) {
    setStatus(err.message, "error");
  }
}

async function deleteUser() {
  try {
    const storedUser = getStoredUser();

    if (!storedUser?._id) {
      setStatus("Hesabı silmek için önce giriş yapmalısın.", "error");
      return;
    }

    const res = await fetch(`${API_BASE}/users/${storedUser._id}`, {
      method: "DELETE"
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Silme işlemi başarısız.", "error");
      return;
    }

    localStorage.removeItem("searchcomUser");
    updateActiveUserUI();
    setStatus("Hesap silindi. Ana sayfaya yönlendiriliyorsun...", "success");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 700);
  } catch (err) {
    setStatus(err.message, "error");
  }
}

updateActiveUserUI();

if (getStoredUser()) {
  setStatus("Zaten giriş yapılmış durumda.", "warning");
}