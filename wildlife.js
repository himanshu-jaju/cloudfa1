// // wildlife.js

// const galleryContainer = document.getElementById("galleryContainer");

// // Total number of images (adjust if needed)
// const totalImages = 20; // For w1.jpg to w20.jpg

// for (let i = 1; i <= totalImages; i++) {
//   const div = document.createElement("div");
//   div.classList.add("gallery-item");

//   // Create image element
//   const img = document.createElement("img");
//   img.src = `images/wildlife/w${i}.jpg`;  // Folder and file naming
//   img.alt = `Wildlife ${i}`;

//   // Create download link
//   const downloadLink = document.createElement("a");
//   downloadLink.href = img.src;
//   downloadLink.download = `Wildlife_${i}.jpg`;
//   downloadLink.textContent = "Download";
//   downloadLink.classList.add("download-btn");

//   // Inline styles (same as others)
//   downloadLink.style.position = "absolute";
//   downloadLink.style.bottom = "10px";
//   downloadLink.style.left = "50%";
//   downloadLink.style.transform = "translateX(-50%)";
//   downloadLink.style.background = "#fff";
//   downloadLink.style.padding = "6px 12px";
//   downloadLink.style.borderRadius = "6px";
//   downloadLink.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
//   downloadLink.style.color = "#007BFF";
//   downloadLink.style.textDecoration = "none";
//   downloadLink.style.fontSize = "14px";
//   downloadLink.style.display = "none";

//   // Hover show/hide download button
//   div.addEventListener("mouseenter", () => {
//     downloadLink.style.display = "block";
//   });
//   div.addEventListener("mouseleave", () => {
//     downloadLink.style.display = "none";
//   });

//   div.appendChild(img);
//   div.appendChild(downloadLink);
//   galleryContainer.appendChild(div);
// }

// wildlife.js

const galleryContainer = document.getElementById("galleryContainer");

// Total number of images (adjust if needed)
const totalImages = 20; // For w1.jpg to w20.jpg

for (let i = 1; i <= totalImages; i++) {
  const div = document.createElement("div");
  div.classList.add("gallery-item");

  // Create image element
  const img = document.createElement("img");
  img.src = `https://vaultgallery.s3.eu-north-1.amazonaws.com/images/wildlife/w${i}.jpg`;  // S3 bucket path
  img.alt = `Wildlife ${i}`;

  // Create download link
  const downloadLink = document.createElement("a");
  downloadLink.href = img.src;
  downloadLink.download = `Wildlife_${i}.jpg`;
  downloadLink.textContent = "Download";
  downloadLink.classList.add("download-btn");

  // Inline styles
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

  // Hover show/hide download button
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
