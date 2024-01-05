function uploadFile() {
  const form = document.getElementById("form");
  const name = document.getElementById("name");
  const files = document.getElementById("files").files;

  const formData = new FormData();
  formData.append("name", name.value);

  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }

  fetch("http://localhost:5000/stats", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
