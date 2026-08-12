document.querySelectorAll('.nav-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var nav = btn.closest('.site-nav');
    var links = nav.querySelector('.nav-links');
    var open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});
