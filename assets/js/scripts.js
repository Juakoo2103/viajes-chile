// IntersectionObserver para cambiar la clase
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      $("#navbar").removeClass("bg-dark");
      $("#navbar").addClass("bg-transparent");
    } else {
      $("#navbar").removeClass("bg-transparent");
      $("#navbar").addClass("bg-dark");
    }
  }
});
observer.observe(document.querySelector("#carousel"));

$(function () {
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });
});

// Form submission handling
$("#contactForm").on("submit", function (event) {
  event.preventDefault();
  const nombre = $("#nombre").val().trim();
  const email = $("#email").val().trim();
  const mensaje = $("#mensaje").val().trim();

  if (nombre === "" || email === "" || mensaje === "") {
    alert("Por favor, complete todos los campos.");
  } else {
    alert("Mensaje enviado correctamente.");
    this.reset();
  }
});
