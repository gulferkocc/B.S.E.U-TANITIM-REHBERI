

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head >
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Bize Sor!</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"/>

    <style>
        body{
            background-color:navajowhite;
            text-align:center;
             font-family:Arial;
        }
        #soropak{
            background:rgba(255,255,255,0.2);
            padding:30px 20px;
            border-radius: 5px;
            margin-bottom: 50px;
            height:550px;
        }

        #formgroup{
            width:700px;
            float:left;
            height:500px;
            text-align:left;
        }
        #solform{
            width:50%;
            float:left;
         /*   padding-right:5px;*/
        }
        #sagform{
            width:50%;
            float:right;
            /*padding-left:5px;*/
        }
        .form-control{
            width:100%;
            padding:10px;
            font-size:15px;
            line-height:1.5;
            color:#495057;
            background-color:white;
            margin:10px;
            border-radius:5px;
            border:1px solid #ced4da;
        }
        input[type="submit"]{
            cursor:pointer;
            background-color:#445c6e;
            font-size:18px;
            letter-spacing:1px;
            padding:10px 30px;
            color: white;
            border:2px solid white;
            border-radius: 5px;
            margin-left:10px;
            margin-top:10px;
        }
        #adres{
            width:450px;
            float: right;
            padding:30px;
            height:500px;
            text-align:left;
        }
        h4{
            font-size:25px;
            
        }
        .adresp{
           
            font-size:15px;
            letter-spacing:1.5px;

        }
        #copyright{
            font-size:20px;
            letter-spacing:2px;
            margin-bottom:15px;
        }
        

    </style>

</head>
<body>
        
        <section id="bize-sor">
            <div class="container">
                <h2 id="h2bizesor">Bize Sor!</h2>
                <h5>  Sorularınızı, Görüş ve Önerilerinizi Bize Bildirebilirsiniz<br />
                        Bilecik Şeyh Edebali Üniversitesi</h5>
        <form method="post"  >
                <div id="soropak">
                    <div id="formgroup">
                        <div id="solform">
                            <input type="text" 
                                name="isim"
                                placeholder="Ad Soyad" required
                                class="form-control"/>
                            <input type="text"
                                name="tel" 
                                placeholder="Telefon Numarası"
                                class="form-control"/>
                                                    </div>
                        <div id="sagform">
                               <input type="email" 
                                name="mail"
                                placeholder="Email Adresiniz" required
                                class="form-control"/>
                            <input type="text"
                                name="konu" 
                                placeholder="Konu Başlığı"
                                required
                                class="form-control"/>
                        </div>

                        <textarea name="mesaj"id=""cols="30"
                            placeholder="Mesaj Giriniz" rows="10" required class="form-control"></textarea>
                           
                    <input type="submit" name="Gönder" value="Gönder" />    
                    </div>

                    <div id="adres">
                        <h4>Adres: </h4>
                        <p class="adresp">  Bilecik Şeyh Edebali Üniversitesi Rektörlüğü </p>
                        <p class="adresp">Pelitözü Mah. Fatih Sultan Mehmet Bulvarı</p>
                            <p class="adresp">No:27 11230 Merkez/BİLECİK</p>
                        <p class="adresp">Telefon: 
                        0228 214 11 11</p>
                        <p class="adresp"> Belgegeçer: 
                        0228 214 10 17 </p>
                    <p class="adresp">Web:  <a href=" http://www.bilecik.edu.tr/ ">    http://www.bilecik.edu.tr/ </a></p>

                    <a href="http://aday.bilecik.edu.tr/index.php/bolum-danismanlari/" class="adresp" > Danışmanları İletişim Bilgileri için tıklayınız.</a>
                </div></div>
                <br />
        </form>
               <footer>
                    <div id="copyright"> 2023 | Tüm Hakları Saklıdır</div>

                    <div class="sosyal-medya">
                          <div class="instagram">
                <a href="https://www.instagram.com/bseuniversitesi/" target="_blank"><i class="bi bi-instagram"></i></a>
            </div>

            <div class="facebook">
                <a href="https://www.facebook.com/bseuniversitesi" target="_blank"><i class="bi bi-facebook"></i></a>
            </div>
            <div class="twitter">
                <a href="https://twitter.com/bseuniversitesi" target="_blank"><i class="bi bi-twitter"></i></a>
            </div>
            <div class="youtube">
                <a href="https://www.youtube.com/c/bseuniversitesi" target="_blank"><i class="bi bi-youtube"></i></a>

            </div>
                    </div>
                </footer>

            </div>
        </section>




</body>
</html>


              <?php
                    include("baglanti.php");

                    if(isset($_POST['Gönder'])){
                        $adsoyad = $_POST['isim'];
                        $complete_name = $name." ".$surname;
                      $telefon = $_POST['tel']; 
                      $email = $_POST['mail'];
                        $konu = $_POST['konu'];
                        $mesaj = $_POST['mesaj'];
                        

                        $trimmed_email = trim($email);
                        $lenght_email = strlen($trimmed_email);

                            if($lenght_email > 5){
                                $InsertOpinion = $DBConnection->prepare("INSERT INTO sor (adsoyad, telefon, email, konu, mesaj) values (?, ?, ?, ?, ?)");
                                $InsertOpinion->execute([$adsoyad, $telefon, $trimmed_email, $konu, $mesaj]);
                                $InsertOpinionCount = $InsertOpinion->rowcount();
                                if($InsertOpinionCount == 0){
                                    echo "<script>alert('İşlem Yapılmadı')</script>";
                                }else if($InsertOpinionCount > 0){
                                    echo "<script>alert('İşlem Yapıldı')</script>";
                                
                            }else{
                                echo "<script>alert('Böyle Bir email yok')</script>";
                            }

                    }}
                ?>

