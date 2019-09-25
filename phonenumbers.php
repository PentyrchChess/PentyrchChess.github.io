<?php
// Define your password
$password = "somefakepassword";
$state = 0;

if($_POST){
    if ($_POST['txtPassword'] == $password) { 
        $state = 1;
    }
    else {$state = -1;}
}    

if($state != 1){

?>
<!DOCTYPE html>
<html>
    <head>
        <title>Pentyrch Chess</title>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <link rel="SHORTCUT ICON" href="/favicon.ico"/>
        <link rel="ICON" type="image/vnd.microsoft.icon" href="/favicon.ico"/>

        <link rel="stylesheet" href="/assets/css/styles.css">

    </head>
<body style="margin:0px;">

<?php
    
include('header.html');       



?>
<div id="main-content" style="padding-top: 5px;">
        
        <p> Members' phone numbers are only available to other members. </p>
        <p> Please enter club password to access </p>



<form name="form" method="post" action="phonenumbers.shtml">

    <p><label for="txtpassword">Password:</label>

    <br /><input type="password" title="Enter your password" name="txtPassword" />
    
    <?php if($state == -1){echo '<span style="color:red;">Incorrect password.  Please try again.</span>';}?>
    
    </p>



    <p><input type="submit" name="Submit" value="Sign in" /></p>



</form>



<?php



}

else {


include('phonenumbers.shtml');
}
?> 
</div>
</body>
</html>

<?php
    

?>