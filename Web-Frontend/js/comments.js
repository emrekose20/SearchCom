const API_BASE = "https://searchcom.onrender.com/api";

function showResult(data, ok = true) {
  document.getElementById("result").textContent = JSON.stringify(data, null, 2);
  const status = document.getElementById("status");
  status.textContent = ok ? "İşlem başarılı." : "İşlem sırasında hata oluştu.";
  status.className = ok ? "status success" : "status error";
}

async function addComment() {
  try {
    const body = {
      userId: document.getElementById("commentUserId").value,
      establishmentId: document.getElementById("commentEstablishmentId").value,
      content: document.getElementById("commentContent").value
    };

    const res = await fetch(`${API_BASE}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    showResult(await res.json(), res.ok);
  } catch (error) {
    showResult({ error: error.message }, false);
  }
}

async function deleteComment() {
  try {
    const id = document.getElementById("deleteCommentId").value;
    const res = await fetch(`${API_BASE}/comments/${id}`, {
      method: "DELETE"
    });

    showResult(await res.json(), res.ok);
  } catch (error) {
    showResult({ error: error.message }, false);
  }
}