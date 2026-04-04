const API = "https://searchcom.onrender.com/api";

async function addComment() {
  await fetch(`${API}/comments`, {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
      userId:userId.value,
      establishmentId:establishmentId.value,
      content:content.value
    })
  });
  alert("Yorum eklendi");
}

async function deleteComment() {
  await fetch(`${API}/comments/${commentId.value}`, {
    method:"DELETE"
  });
  alert("Silindi");
}