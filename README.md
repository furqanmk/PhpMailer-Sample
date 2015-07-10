# PhpMailer - Sending An Attachment In An Email
This sample demonstrates how to post data (including files) from an HTML to form to a PHP file, where it is attached to an email and sent.

Modules Used:
* <a href="https://github.com/PHPMailer/PHPMailer">PHPMailer</a>
* <a href="http://reactiveraven.github.io/jqBootstrapValidation/">jqBootstrapValidation</a> by <a href="https://github.com/ReactiveRaven">David Godfrey</a>
* <a href="http://plugins.krajee.com/file-input">Bootstrap File Input</a> by <a href="https://github.com/kartik-v">Kartik Visweswaran</a>
* <a href="http://getbootstrap.com/getting-started/">Bootstrap<a/>
* <a href="https://jquery.com/">JQuery</a>

1) The sample form is implemented in the index.html file present in the root.</br>
2) The default.js file demonstrates the logic to validate the form data, append the data in a FormData object and post it to the mail.php file using an AJAX post.</br>
3) The posted data is unwrapped in mail.php file which then uses PHPMailer to send the data to an email address.
