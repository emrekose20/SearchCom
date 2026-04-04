const API = "https://searchcom.onrender.com/api";
 
async function registerUser() {
  const name = name.value;
  const email = email.value;
  const password = password.value;
 
  const res = await fetch(`${API}/users/register`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({name,email,password})
  });
 
  result.innerText = JSON.stringify(await res.json(), null, 2);
}
 
async function getUser() {
  const id = userId.value;
  const res = await fetch(`${API}/users/${id}`);
  result.innerText = JSON.stringify(await res.json(), null, 2);
}
 
async function updateUser() {
  const id = userId.value;
 
  await fetch(`${API}/users/${id}`, {
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({name:name.value,password:password.value})
  });
 
  alert("Güncellendi");
}
 
async function deleteUser() {
  const id = userId.value;
  await fetch(`${API}/users/${id}`, {method:"DELETE"});
  alert("Silindi");
}