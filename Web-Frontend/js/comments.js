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

async function addComment() {
  try {
    const storedUser = getStoredUser();
    const body = {
      userId: document.getElementById("commentUserId").value.trim() || (storedUser ? storedUser._id : ""),
      establishmentId: document.getElementById("commentEstablishmentId").value.trim(),
      content: document.getElementById("commentContent").value.trim()
    };

    const res = await fetch(`${API_BASE}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Yorum eklenemedi.", "error");
      return;
    }

    setStatus("Yorum başarıyla eklendi.", "success");
    document.getElementById("commentContent").value = "";
  } catch (error) {
    setStatus(error.message, "error");
  }
}

async function deleteComment() {
  try {
    const id = document.getElementById("deleteCommentId").value.trim();

    const res = await fetch(`${API_BASE}/comments/${id}`, {
      method: "DELETE"
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Yorum silinemedi.", "error");
      return;
    }

    setStatus(data.message || "Yorum silindi.", "success");
    document.getElementById("deleteCommentId").value = "";
  } catch (error) {
    setStatus(error.message, "error");
  }
}