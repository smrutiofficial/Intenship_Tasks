const API_KEY = "knckhs9oufwo7usd7rf34n";
fetch("http://localhost:3000/user", {
  method: "GET",
  headers: {
    "x-api-key": API_KEY,
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const dataContainer = document.getElementById("data-container");
    dataContainer.innerHTML = data
      .map(
        (user) => `
            <div class="data">
                <button class="edit" onClick='editUser(${JSON.stringify(
                  user
                )})'><i class="uil uil-pen"></i></button>
                <button class="delete" onClick='deleteUser(${
                  user.id
                })'><i class="uil uil-trash"></i></button>
                <div class="user-item"><strong>ID:</strong> ${user.id}</div>
                <div class="user-item"><strong>Name:</strong> ${user.name}</div>
                <div class="user-item"><strong>Email:</strong> ${
                  user.email
                }</div>
                <div class="user-item"><strong>Branch:</strong> ${
                  user.branch
                }</div>
                <div class="user-item"><strong>Mobile:</strong> ${
                  user.mobile
                }</div>
                <div class="user-item"><strong>Gender:</strong> ${
                  user.gender
                }</div>
                <div class="user-item"><strong>Address:</strong> ${
                  user.address
                }</div>
            </div>
        `
      )
      .join("");
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

function editUser(user) {
  const userData = encodeURIComponent(JSON.stringify(user));
  window.location.href = `./update.html?user=${userData}`;
  console.log(user);
}


function deleteUser(userId) {
  const API_KEY = "knckhs9oufwo7usd7rf34n";
  fetch(`http://localhost:3000/user/${userId}/delete`, {
    method: "DELETE",
    headers: {
      "x-api-key": API_KEY,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
