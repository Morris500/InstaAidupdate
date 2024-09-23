// document.addEventListener("DOMContentLoaded", function() {
//   // Get all the buttons
//   const buttons = document.querySelectorAll("button");
//   const loadingScreen = document.getElementById("loading-screen");

//   buttons.forEach(button => {
//     button.addEventListener("click", function(e) {
//       // Prevent the default action if necessary (optional)
//       e.preventDefault();

//       // Show the loading screen
//       loadingScreen.style.visibility = "visible";

//       // Simulate an action or delay (replace with actual logic)
//       setTimeout(function() {
//         // Hide the loading screen after 3 seconds (or when the action is complete)
//         loadingScreen.style.visibility = "hidden";
//       }, 3000); // Adjust the time as needed
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const chatForm = document.getElementById("chatForm");
//     const loadingScreen = document.getElementById("loading-screen");

//     // Handle form submission
//     chatForm.addEventListener("submit", function (event) {
//         event.preventDefault(); // Prevent default form submission

//         // Show loading screen
//         loadingScreen.style.display = "flex";

//         // Simulate a delay for loading (e.g., 2 seconds)
//         setTimeout(function () {
//             // After delay, redirect to Chatbox.html
//             window.location.href = "../Html/Chatbox.html";
//         }, 2000); // 2-second delay
//     });
// });
