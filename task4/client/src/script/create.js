async function userc() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const branch = document.getElementById("branch").value;
    const mobile = document.getElementById("mobile").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById("address").value;
    const formData = {
      name: name,
      email: email,
      branch: branch,
      mobile: mobile,
      gender: gender,
      address: address,
    };
  
    const API_KEY = "knckhs9oufwo7usd7rf34n";
    await fetch("http://localhost:3000/user/create", {
      method: "POST",
      headers: {
        "x-api-key": API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert("User created successfully!");
        window.location.href = './read.html';
      })
      .catch((error) => {
        console.error("There was an error!", error);
        alert("Error creating user.");
      });
  }
  
  
  function redirectToReadPage() {
    window.location.href = './read.html';
    // Any other code to execute on click can go here
  }