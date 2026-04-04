const API = "https://searchcom.onrender.com/api";

async function addRating() {
  await fetch(`${API}/ratings`, {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
      userId:userId.value,
      establishmentId:establishmentId.value,
      score:score.value
    })
  });
  alert("Puan verildi");
}

async function getRatings() {
  const res = await fetch(`${API}/ratings/establishment/${establishmentId.value}`);
  result.innerText = JSON.stringify(await res.json(), null, 2);
}

async function updateRating() {
  await fetch(`${API}/ratings/${ratingId.value}`, {
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({score:score.value})
  });
  alert("Güncellendi");
}