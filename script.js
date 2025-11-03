const fetchBtn = document.getElementById("fetchBtn");
const postsContainer = document.getElementById("posts");

fetchBtn.addEventListener("click", async () => {
  postsContainer.innerHTML = "<p>Loading...</p>";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=8");
    const posts = await response.json();

    postsContainer.innerHTML = posts
      .map(
        post => `
        <div class="post">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>`
      )
      .join("");
  } catch (error) {
    postsContainer.innerHTML = "<p style='color:red;'>Failed to load data!</p>";
  }
});
