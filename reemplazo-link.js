document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a[href^='https://shrinkme.site/']").forEach(link => {
    link.href = link.href.replace(
      "https://shrinkme.site/",
      "https://shrinkme.io/"
    );
  });
});
