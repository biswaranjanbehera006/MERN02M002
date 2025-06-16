function calculate() {
  const car = document.getElementById("carModel").value;
  const location = document.getElementById("location").value;
  alert(`Calculating earnings for ${car} in ${location}...`);
}


function scrollTestimonials(direction) {
  const track = document.getElementById('testimonialTrack');
  const card = track.querySelector('.testimonial-card');
  const cardWidth = card.offsetWidth + 16; // including gap
  track.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}




const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
  const header = item.querySelector(".accordion-header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});
