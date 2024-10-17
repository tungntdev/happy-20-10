const images = ['images/IMG_1.jpg', 
  'images/IMG_2.jpg', 
  'images/IMG_3.jpg', 
  'images/IMG_4.jpg', 
  'images/IMG_5.jpg', 
  'images/IMG_6.jpg', 
  'images/IMG_7.jpg', 
  'images/IMG_8.jpg']; // Add your image paths
let currentIndex = 0;

// Function to show an image
function showImage(index) {
const imageViewer = document.getElementById('image-viewer');
const imageDisplay = document.getElementById('image-display');
imageDisplay.src = images[index];
imageViewer.style.display = 'block';
}

// Function to close the image viewer and resume text display
function closeImageViewer() {
const imageViewer = document.getElementById('image-viewer');
imageViewer.style.display = 'none';
// Continue the text animation here
startTextAnimation();
}

document.getElementById('prev-btn').onclick = function() {
currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
showImage(currentIndex);
};

document.getElementById('next-btn').onclick = function() {
if (currentIndex < images.length - 1) {
currentIndex++;
showImage(currentIndex);
} else {
// If the last image is reached, close the image viewer
closeImageViewer();
}
};

document.getElementById('By').onclick = function() {
if (fungsi == 1) {
Tombol.style = "";
fthilang();
fungsi = 0;
pertanyaan();
} else if (fungsi == 2) {
Tombol.style = "";
currentIndex = 0; // Reset to the first image
showImage(currentIndex);
}
};

// Handle close button click
const closeBtn = document.getElementById('close-btn');
closeBtn.onclick = function() {
closeImageViewer();
};

// Function to resume text animation after image viewing is done
function startTextAnimation() {
// Example of how you can trigger the text animation again
document.getElementById('kalimat').innerHTML = "Nói như nào nhỉ........";
new TypeIt("#kalimat", {
strings: ["Thực ra thì a đã rất vui khi được nói chuyện với em, rồi tối tối cứ vào xem ảnh mặc dù cũng chưa thân quen nhưng mà cũng cảm thấy rất gần gũi, mong rằng e không thấy phiền vì những điều a đã làm. Bây giờ a đang tập quên đi những gì mình đã nhớ rùi. Thui a không luyên thuyên nữa, chào em nhé! "],
speed: 50,
cursor: true,
waitUntilVisible: true,
}).go();
}
