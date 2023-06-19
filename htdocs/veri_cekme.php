<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">


<?php
    include("baglanti.php");
?>





<table class="table table-striped text-center">
    <thead>
        <tr>
            <td><b>id</b></td>
            <td><b>Ad Soyad</b></td>
           <td><b>Telefon</b></td> 
           <td><b>Email</b></td>
           <td><b>Konu</b></td>
            <td><b>Mesaj</b></td>
        </tr>
    </thead>
    <tbody>
        <?php
        $select_bizesor = mysqli_query($conn, "SELECT * FROM `sor`;") or die('query failed');
        if(mysqli_num_rows($select_bizesor) > 0){
        while($fetch_bizesor = mysqli_fetch_assoc($select_bizesor)){
        ?>
        <tr>
            <td><?= $fetch_bizesor['id'] ?></td>
            <td><?= $fetch_bizesor['adsoyad'] ?></td>
            <td><?= $fetch_bizesor['telefon'] ?></td>
            <td><?= $fetch_bizesor['email'] ?></td>
            <td><?= $fetch_bizesor['konu'] ?></td>
            <td><?= $fetch_bizesor['mesaj'] ?></td>
        </tr>
        <?php
        }
        }
        ?>
    </tbody>
</table>