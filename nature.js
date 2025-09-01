// // // Select gallery container
// // const galleryContainer = document.getElementById("galleryContainer");

// // // Total number of images (change as per your folder)
// // const totalImages = 20; // Example: if you have n1.jpg → n20.jpg

// // // Loop through and create image elements
// // for (let i = 1; i <= totalImages; i++) {
// //   const div = document.createElement("div");
// //   div.classList.add("gallery-item");

// //   // Create download link
// //   const link = document.createElement("a");
// //   link.href = `nature/n${i}.jpg`;   // Image source
// //   link.download = `nature${i}.jpg`; // Force download filename

// //   const img = document.createElement("img");
// //   img.src = `nature/n${i}.jpg`;
// //   img.alt = `Nature ${i}`;

// //   link.appendChild(img);
// //   div.appendChild(link);
// //   galleryContainer.appendChild(div);
// // }

// // nature.js

// // -------------- CONFIG --------------
// // Select gallery container
// const galleryContainer = document.getElementById("galleryContainer");

// // Total number of images (change as per your folder)
// const totalImages = 20; // Example: if you have n1.jpg → n20.jpg

// // Loop through and create image elements
// for (let i = 1; i <= totalImages; i++) {
//   const div = document.createElement("div");
//   div.classList.add("gallery-item");

//   // Create image element
//   const img = document.createElement("img");
//   img.src = `images/nature/n${i}.jpg`;
//   img.alt = `Nature ${i}`;

//   // ✅ Create native download link
//   const downloadLink = document.createElement("a");
//   downloadLink.href = img.src;
//   downloadLink.download = `Nature_${i}.jpg`;
//   downloadLink.textContent = "Download";
//   downloadLink.classList.add("download-btn");

//   // ✅ Style the download button (you can move this to CSS too)
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
//   downloadLink.style.display = "none"; // hidden by default

//   // ✅ Show the button on hover
//   div.addEventListener("mouseenter", () => {
//     downloadLink.style.display = "block";
//   });
//   div.addEventListener("mouseleave", () => {
//     downloadLink.style.display = "none";
//   });

//   // Build the gallery item
//   div.appendChild(img);
//   div.appendChild(downloadLink);
//   galleryContainer.appendChild(div);
// }

// -------------- CONFIG --------------
const galleryContainer = document.getElementById("galleryContainer");

// Total number of images (change as per your folder)
const totalImages = 20; // Example: n1.jpg → n20.jpg

// Base URL of your S3 bucket
const baseURL = "https://vaultgallery.s3.eu-north-1.amazonaws.com/images/nature/";

for (let i = 1; i <= totalImages; i++) {
  const div = document.createElement("div");
  div.classList.add("gallery-item");

  // ✅ Image element
  const img = document.createElement("img");
  img.src = `${baseURL}n${i}.jpg`;
  img.alt = `Nature ${i}`;

  // ✅ Download link
  const downloadLink = document.createElement("a");
  downloadLink.href = img.src;
  downloadLink.download = `Nature_${i}.jpg`; // <-- custom filename
  downloadLink.textContent = "Download";
  downloadLink.classList.add("download-btn");

  // ✅ Style the download button
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
  downloadLink.style.display = "none"; // hidden by default

  // ✅ Show button on hover
  div.addEventListener("mouseenter", () => {
    downloadLink.style.display = "block";
  });
  div.addEventListener("mouseleave", () => {
    downloadLink.style.display = "none";
  });

  // Build the gallery item
  div.appendChild(img);
  div.appendChild(downloadLink);
  galleryContainer.appendChild(div);
}
