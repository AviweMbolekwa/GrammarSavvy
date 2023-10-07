function sendMail(contactForm) {
  emailjs.send("service_r2f534j","GrammarSavvy", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.email.value,
      "message": contactForm.message.value
  }) .then(
      $("#modal").modal('toggle')
  );
  return false;
}