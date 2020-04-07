function sendMail(contactForm) {
    emailjs.send("gmail", "online_portfolio", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "subject": contactForm.subject.value,
        "work_together": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("ERROR", error);
        }
    )
        return false;
};