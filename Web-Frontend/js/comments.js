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

function renderMyComments(comments) {
  const list = document.getElementById("myCommentsList");
  list.innerHTML = "";

  if (!comments.length) {
    list.innerHTML = `<div class="info-box">Henüz yorum yapmadın.</div>`;
    return;
  }

  comments.forEach((comment) => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML = `
      <h4>${comment.establishmentName}</h4>
      <p><strong>Yorum:</strong> ${comment.content}</p>
      <p><strong>Yorum ID:</strong> ${comment._id}</p>
    `;
    list.appendChild(div);
  });
}

async function loadMyComments() {
  try {
    const user = getStoredUser();

    if (!user?._id) {
      window.location.href = "users.html";
      return;
    }

    const res = await fetch(`${API_BASE}/comments/user/${user._id}`);
    const data = await res.json();

    if (!res.ok) {
      setStatus(data.message || "Yorumlar getirilemedi.", "error");
      return;
    }

    renderMyComments(data);
  } catch (error) {
    setStatus(error.message, "error");
  }
}

async function addComment() {
  try {
    const user = getStoredUser();

    if (!user?._id) {
      window.location.href = "users.html";
      return;
    }

    const body = {
      userId: user._id,
      establishmentName: document.getElementById("commentEstablishmentName").value.trim(),
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
    document.getElementById("commentEstablishmentName").value = "";
    document.getElementById("commentContent").value = "";
    loadMyComments();
  } catch (error) {
    setStatus(error.message, "error");
  }
}

async function deleteComment() {
  try {
    const user = getStoredUser();

    if (!user?._id) {
      window.location.href = "users.html";
      return;
    }

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
    loadMyComments();
  } catch (error) {
    setStatus(error.message, "error");
  }
}

loadMyComments();