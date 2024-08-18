const API_KEY = "knckhs9oufwo7usd7rf34n";

fetch("http://localhost:3000/", {
  method: "GET",
  headers: {
    "x-api-key": API_KEY,
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    // Check if the content-type is JSON
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    } else {
      return response.text();
    }
  })
  .then((data) => {
    if (typeof data === "object") {
      console.log(data);
      document.getElementById("result").textContent = JSON.stringify(data, null, 2);
    } else {
      console.log(data);
      document.getElementById("result").textContent = data;
    }
  })
  .catch((error) => {
    document.getElementById("result").textContent = `Error: ${error.message}`;
  });
