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
  } catch (error) {
    setStatus(error.message, "error");
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
    setStatus(`Hoş geldin ${data.user.name}!`, "success");

    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";
  } catch (error) {
    setStatus(error.message, "error");
  }
}

function logoutUser() {
  localStorage.removeItem("searchcomUser");
  updateActiveUserUI();
  setStatus("Çıkış yapıldı.", "warning");
}

async function getUser() {
  try {
    const id = document.getElementById("getUserId").value.trim();
    if (!id) {
      setStatus("Lütfen kullanıcı ID gir.", "error");
      return;
    }

    const res = await fetch(`${API_BASE}/users/${id}`);
    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Kullanıcı getirilemedi.", "error");
      return;
    }

    setStatus(`Kullanıcı bulundu: ${data.name} - ${data.email}`, "success");
  } catch (error) {
    setStatus(error.message, "error");
  }
}

async function updateUser() {
  try {
    const storedUser = getStoredUser();
    const inputId = document.getElementById("updateUserId").value.trim();
    const userId = inputId || (storedUser ? storedUser._id : "");

    if (!userId) {
      setStatus("Güncellemek için kullanıcı ID gir ya da önce giriş yap.", "error");
      return;
    }

    const body = {};
    const newName = document.getElementById("updateUserName").value.trim();
    const newPassword = document.getElementById("updateUserPassword").value;

    if (newName) body.name = newName;
    if (newPassword) body.password = newPassword;

    if (!body.name && !body.password) {
      setStatus("En az bir alan doldurmalısın.", "error");
      return;
    }

    const res = await fetch(`${API_BASE}/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Güncelleme başarısız.", "error");
      return;
    }

    if (storedUser && storedUser._id === userId) {
      const updatedUser = {
        ...storedUser,
        ...(data.user || {})
      };
      localStorage.setItem("searchcomUser", JSON.stringify(updatedUser));
      updateActiveUserUI();
    }

    setStatus(data.message || "Profil güncellendi.", "success");

    document.getElementById("updateUserName").value = "";
    document.getElementById("updateUserPassword").value = "";
  } catch (error) {
    setStatus(error.message, "error");
  }
}

async function deleteUser() {
  try {
    const storedUser = getStoredUser();
    const inputId = document.getElementById("deleteUserId").value.trim();
    const userId = inputId || (storedUser ? storedUser._id : "");

    if (!userId) {
      setStatus("Silmek için kullanıcı ID gir ya da önce giriş yap.", "error");
      return;
    }

    const res = await fetch(`${API_BASE}/users/${userId}`, {
      method: "DELETE"
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Silme işlemi başarısız.", "error");
      return;
    }

    if (storedUser && storedUser._id === userId) {
      localStorage.removeItem("searchcomUser");
      updateActiveUserUI();
    }

    setStatus(data.message || "Kullanıcı silindi.", "success");
    document.getElementById("deleteUserId").value = "";
  } catch (error) {
    setStatus(error.message, "error");
  }
}

updateActiveUserUI();