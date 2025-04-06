const viewCount = document.getElementById("view-count");

async function fetchViews() {
  try {
    const res = await fetch("https://tfrokafijnimxoizlaca7wovra0rdfaq.lambda-url.us-east-1.on.aws/");
    const data = await res.json();
    viewCount.innerText = data.views || "0";
  } catch (err) {
    console.error("Failed to fetch view count:", err);
    viewCount.innerText = "error";
  }
}

fetchViews();
