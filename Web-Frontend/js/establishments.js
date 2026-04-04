const API = "https://searchcom.onrender.com/api";
 
async function createEstablishment() {
  await fetch(`${API}/establishments`, {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({name:name.value,address:address.value})
  });
  alert("Eklendi");
}
 
async function getEstablishments() {
  const res = await fetch(`${API}/establishments`);
  result.innerText = JSON.stringify(await res.json(), null, 2);
}
 
async function updateEstablishment() {
  await fetch(`${API}/establishments/${id.value}`, {
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({name:name.value,address:address.value})
  });
  alert("Güncellendi");
}
 
async function deleteEstablishment() {
  await fetch(`${API}/establishments/${id.value}`, {method:"DELETE"});
  alert("Silindi");
}