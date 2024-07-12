/* $(function () {
  $(window).scroll(function () {
    if ($("#navbar").offset().top > 50) {
      $("#navbar").addClass("bg-dark");
      $("#navbar").removeClass("bg-transparent");
    } else {
      $("#navbar").removeClass("bg-dark");
      $("#navbar").addClass("bg-transparent");
    }
  });
});
 */

// Intersection Observer for Navbar background change
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
