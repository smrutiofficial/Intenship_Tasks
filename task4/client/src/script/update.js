document.addEventListener('DOMContentLoaded', () => {
  function getQueryParams() {
      const params = new URLSearchParams(window.location.search);
      return {
          user: JSON.parse(decodeURIComponent(params.get('user')))
      };
  }

  // Get the user data from the query parameters
  const { user } = getQueryParams();

  // Populate the form with user data
  document.getElementById('name').value = user.name || '';
  document.getElementById('email').value = user.email || '';
  document.getElementById('branch').value = user.branch || '';
  document.getElementById('mobile').value = user.mobile || '';
  if (user.gender) {
      document.querySelector(`input[name="gender"][value="${user.gender}"]`).checked = true;
  }
  document.getElementById('address').value = user.address || '';

  // Add form submit handler
  document.getElementById('userupdate').addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent the default form submission

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const branch = document.getElementById("branch").value;
      const mobile = document.getElementById("mobile").value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const address = document.getElementById("address").value;

      const formupdate = {
          name: name,
          email: email,
          branch: branch,
          mobile: mobile,
          gender: gender,
          address: address,
      };

      console.log('Form data being sent:', formupdate); // Log form data for debugging

      const userId = user.id;

      if (!userId) {
          alert('User ID is missing');
          return;
      }

      // Send updated data to the server
      try {
          const API_KEY = "knckhs9oufwo7usd7rf34n"; // Ensure this is secure
          const response = await fetch(`http://localhost:3000/user/${userId}/update`, {
              method: 'PATCH',
              headers: {
                  "x-api-key": API_KEY,
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formupdate),
          });

          if (response.ok) {
              alert('User updated successfully!');
              window.location.href = './read.html';
          } else {
              alert('Failed to update user');
          }
      } catch (error) {
          console.error('Error:', error);
          alert('An error occurred');
      }
  });
});