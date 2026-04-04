const API = "https://searchcom.onrender.com/api";

async function addFavorite() {
  await fetch(`${API}/favorites`, {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
      userId:userId.value,
      establishmentId:establishmentId.value
    })
  });
  alert("Eklendi");
}

async function getFavorites() {
  const res = await fetch(`${API}/favorites/${userId.value}`);
  result.innerText = JSON.stringify(await res.json(), null, 2);
}

async function deleteFavorite() {
  await fetch(`${API}/favorites/${favoriteId.value}`, {
    method:"DELETE"
  });
  alert("Silindi");
}

async function updateFolder() {
  await fetch(`${API}/favorites/folders/${folderId.value}`, {
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({folderName:folderName.value})
  });
  alert("Güncellendi");
}