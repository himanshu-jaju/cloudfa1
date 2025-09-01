// anime.js

const galleryContainer = document.getElementById("galleryContainer");

// Total number of images (adjust if needed)
const totalImages = 20; // For 1.jpg to 20.jpg

for (let i = 1; i <= totalImages; i++) {
  const div = document.createElement("div");
  div.classList.add("gallery-item");

  // Create image element
  const img = document.createElement("img");
  img.src = `https://cloudfa1.s3.ap-south-1.amazonaws.com/anime/${i}.jpg`;  // ✅ Corrected path
  img.alt = `Anime ${i}`;

  // Create download link
  const downloadLink = document.createElement("a");
  downloadLink.href = img.src;
  downloadLink.download = `Anime_${i}.jpg`;
  downloadLink.textContent = "Download";
  downloadLink.classList.add("download-btn");

  // Inline styles (can move to CSS later)
  downloadLink.style.position = "absolute";
  downloadLink.style.bottom = "10px";
  downloadLink.style.left = "50%";
  downloadLink.style.transform = "translateX(-50%)";
  downloadLink.style.background = "#fff";
  downloadLink.style.padding = "6px 12px";
  downloadLink.style.borderRadius = "6px";
  downloadLink.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
  downloadLink.style.color = "#007BFF";
  downloadLink.style.textDecoration = "none";
  downloadLink.style.fontSize = "14px";
  downloadLink.style.display = "none";

  // Hover show/hide
  div.addEventListener("mouseenter", () => {
    downloadLink.style.display = "block";
  });
  div.addEventListener("mouseleave", () => {
    downloadLink.style.display = "none";
  });

  div.appendChild(img);
  div.appendChild(downloadLink);
  galleryContainer.appendChild(div);
}
