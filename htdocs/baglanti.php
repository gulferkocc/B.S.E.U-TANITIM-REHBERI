<?php
try {
    $conn = mysqli_connect('localhost','root','','bizesor') or die('connection failed');

    $DBConnection = new PDO("mysql:host=localhost;dbname=bizesor;charset=utf8;",'root','');

    //echo 'DB Conn 200';
}catch(PDOException $e){
    echo $e->getMessage();
}