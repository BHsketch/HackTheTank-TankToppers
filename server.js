// Get the button element
const reviewBtn = document.getElementById("review-btn");
const enquiryBtn = document.getElementById("enquiry-btn");
const bookmarkedBtn = document.getElementById("bookmarked-btn");

// Add an event listener to the button
reviewBtn.addEventListener("click", function () {
  // Redirect to the peer.html page
  location.href = "peer.html";
  //   console.log("hii");
});

enquiryBtn.addEventListener("click", function () {
  // Redirect to the peer.html page
  location.href = "sponsor.html";
  //   console.log("hii");
});

bookmarkedBtn.addEventListener("click", function () {
  // Redirect to the peer.html page
  location.href = "end.html";
  //   console.log("hii");
});
