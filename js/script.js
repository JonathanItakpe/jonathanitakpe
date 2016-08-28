/**
 * Created by PR0PH3T on 17/05/2016.
 */
$(document).ready(function(){
    $("#submit").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
// Returns successful data submission message when the entered information is stored in database.
        var dataString = 'name='+ name + '&email='+ email + '&message='+ message;
        if(name==''||email==''||message=='')
        {
            alert("Please Fill All Fields");
        }
        else
        {
// AJAX Code To Submit Form.
            $.ajax({
                type: "POST",
                url: "../mail.php",
                data: dataString,
                cache: false,
                success: function(result){
                    alert(result);
                }
            });
        }
        return false;
    });
});
