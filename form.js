$('button').click(function()
{
    console.log("Button Working");
    if($('#name').val() == '' || $('#DOB').val() == '' || $('#E-mail').val() == '' || $('#mobile1').val() == '' || $('#mobile2').val() == '' || $('#pwd1').val() == '' || $('#pwd2').val() == '')
    {
        swal({
            title: "Error",
            text: "Something is missing !",
            icon: "error",
            button: "OK",
          })
    }
    else if($('#mobile1').val() != $('#mobile2').val())
    {
        swal('Mobile Number not matching !','Check Again','error')
    }
    else if($('#pwd1').val() != $('#pwd2').val())
    {
        swal('Passwords Do Not Match','Check Again','error')
    }
    else
    {
        swal('Account Created','','success');
    }
});