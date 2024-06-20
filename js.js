document.addEventListener("DOMContentLoaded", function(event) {
  setTimeout(function() {
    document.querySelector('.loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  },5000); // 5000 milliseconds = 5 seconds
});