document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('cf-name').value;
    var email = document.getElementById('cf-email').value;
    var message = document.getElementById('cf-message').value;
    var subject = 'Contacto desde el sitio — ' + name;
    var body = 'Nombre: ' + name + '\nE-mail: ' + email + '\n\n' + message;
    window.location.href = 'mailto:tomas.carchio@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
});
