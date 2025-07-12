
  // FAQ Toggle
  document.querySelectorAll('.questions').forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('open');
      let p = item.querySelector('p');
      if (p.nextElementSibling && p.nextElementSibling.classList.contains('faq-answer')) {
        p.nextElementSibling.remove();
      } else {
        let answer = document.createElement('div');
        answer.classList.add('faq-answer');
        answer.style.color = 'white';
        answer.style.padding = '10px 20px';
        answer.innerText = "This is a placeholder answer. You can customize this based on the question.";
        p.parentNode.appendChild(answer);
      }
    });
  });

  // Email Validation
  document.querySelectorAll('.btnred').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const input = btn.parentElement.querySelector('input');
      if (input && input.value.trim() !== '') {
        alert('Redirecting to membership signup with: ' + input.value);
        // Simulate redirect or further logic
      } else {
        alert('Please enter a valid email address.');
      }
    });
  });

  // Optional: Slider placeholder logic
  let sliderIndex = 0;
  function slide(direction) {
    const slider = document.querySelector('.slider');
    const totalItems = document.querySelectorAll('.slider .movie').length;
    sliderIndex += direction;
    if (sliderIndex < 0) sliderIndex = 0;
    if (sliderIndex > totalItems - 4) sliderIndex = totalItems - 4;
    slider.style.transform = `translateX(-${sliderIndex * 200}px)`;
  }

  // Add global so buttons work
  window.slide = slide;

   const scrollContainer = document.getElementById("scrollContainer");

    function scrollLeft() {
      scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
    }

    function scrollRight() {
      scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
    }
