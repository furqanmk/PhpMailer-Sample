$(function () {
    
    // Initialize file input 
    $("#photograph").fileinput(
        {
            showUpload: false,
            previewFileType: 'any',
            allowedFileTypes: ['image'],
            maxImageWidth: 1000,
            maxImageHeight: 1000,
            minImageWidth: 200,
            minImageHeight: 200
        });
        
    // Save selected file in a global variable
    $('#InputPicture').on('filebatchselected', function (event, files) {
        $image = files[0];
    });
    
    // Setup JQuery Bootstrap Validation
    $("input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var image = $image;
            
            // setup a FormData instance to post to php file
            var form_data = new FormData();
            form_data.append('file', image);
            form_data.append('name', name);
            form_data.append('email', email);

            $.ajax({
                url: "././mail/mail.php",
                type: "POST",
                data: form_data,
                dataType: false,
                contentType: false,
                processData: false,
                cache: false,
                success: function () {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your form has been received! We'll contact you shortly.</strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('form').trigger("reset");
                },
                error: function () {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry, it seems that our servers are not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('form').trigger("reset");
                },
            })
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
    $('#success').html('');
});
