

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>BŞEÜ Tanıtım Rehberi</title>
 <link rel="stylesheet" type="text/css" href="../StyleSheet1.css">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css" />


    <style>

     *{
      box-sizing:border-box;
  }

ul {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    
}

    ul#main li {
        float: left;
        position: relative;
        width: 189px;
    }

        ul#main li ul {
            display: none;
            position: absolute;
            left: 0;
            top: 50px;
        }

    ul li a {
        display: block;
        width: 189px;
        height: 50px;
        line-height: 25px;
        background-color:darkslateblue;
        text-align: center;
        color: aliceblue;
        text-decoration: none;
    }

        ul li a:hover {
            background-color:cornflowerblue;
        }

    ul#main li:hover ul {
        display: block;
    }




        body {
            font-family: Arial;
            margin: 0;
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }


        .cerceve {
            width: 100%;
             height: 60%;
            overflow: hidden;
            border: 4px solid black;
            box-sizing: border-box;
        }

        .galeri {
            position: relative;
            width: 1200%;
            height: 100%;
            left: 0;
            animation: 16s slayt infinite;
        }

            .galeri img {
                width: 8.33%;
                float: left;
            }

        @keyframes slayt {
            0% {
                left: 0%;
            }

            20% {
                left: 0%;
            }

            25% {
                left: -100%;
            }

            30% {
                left: -200%;
            }

            35% {
                left: -300%;
            }

            40% {
                left: -400%;
            }

            45% {
                left: -500%;
            }

            50% {
                left: -600%;
            }

            65% {
                left: -700%;
            }

            70% {
                left: -800%;
            }

            75% {
                left: -900%;
            }

            80% {
                left: -1000%;
            }

            90% {
                left: -1100%;
            }

            95% {
                left: -1200%;
            }
        }

        .main,
.cerceve {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
}

.main {
  z-index: 2;
  opacity:1;
}

.cerceve {
  z-index: 1;
 
}

    </style>

</head>
<body>
  

    <header class="header">
        <div>
            <img src="../images/ustLogo.png" class="bseu_amblem" width="100" height="100" />
            <h1 style="color: white">Bilecik Şeyh Edabali Üniversitesi</h1>
            <h1 style="color: white">Tanıtım</h1>
        </div>

        <div class="main">
            <ul id="main">
                <li>
                    <a href="#">Tanıtım</a>
                    <ul>
                        <li><a href="tarihce.php">Tarihçe</a> </li>
                        <li><a href="hakkinda.php ">Hakkında </a></li>
                        <li><a href="misyon-vizyon.php">Misyon-Vizyon</a> </li>
                        <li><a href="yerlesim.php">Yerleşim ve Ulaşım</a> </li>
                        <li><a href="iletisim.php ">İletişim</a> </li>
                        <li><a href="sanal-tur.php">Sanal Kampüs Turu</a> </li>
                        <li><a href="tanıtım-video.php">Tanıtım Videoları</a> </li>
                    </ul>
                </li>

                <li>
                    <a href="#">Eğitim Programları </a>
                    <ul>
                        <li><a href="fakülteler.php">Fakülteler</a> </li>
                        <li><a href="meslek-yükseskokul.php">Meslek Yüsekokulu</a> </li>
                        <li><a href="ing-hazırlık.php">İngilizce Hazırlık</a> </li>
                        <li><a href="cift-yan-anadal.php">Çift-Yan Anadal</a> </li>
                        <li><a href="egitim-modelleri.php">Eğitim Modelleri</a> </li>
                        <li><a href="yükseklisans.php">Yükseklisans</a> </li>
                        <li><a href="puanlar.php">Puanlar</a> </li>
                    </ul>
                </li>

                <li>
                    <a href="#">Öğrenci Değişimi</a>
                    <ul>
                        <li><a href="erasmus-farabi.php">Erasmus-Farabi</a> </li>
                        <li><a href="mevlana.php">Mevlana</a> </li>
                    </ul>
                </li>
                <li><a href="ogrenci-kulupleri.php">Öğrenci Kulüpleri</a> </li>
                <li><a href="saglıklı-yasam.php">Sağlık Hizmetleri / Engelsiz Yaşam</a> </li>
                <li>
                    <a href="#">Akademik Avantajlar</a>
                    <ul>
                        <li><a href="is-imkanları.php">İş İmkanları</a> </li>
                        <li><a href="maas.php">Maaş</a> </li>
                    </ul>
                </li>
                <li><a href="bize-sor.php">Bize Sor!</a> </li>

            </ul>
        </div>

        <div class="cerceve">
            <div class="galeri">
                <img src="../images/bayrak.jpeg" widht="380px" height="500px" />
                <img src="../images/atolye.jpeg" widht="380px" height="500px" />
                <img src="../images/bahce.jpeg" widht="380px" height="500px" />
                <img src="../images/bayır.jpeg" widht="380px" height=" 500px" />
                <img src="../images/NedenBESÜ4.png" widht="380px" height="500px" />
                <img src="../images/251_bc56_aday slider.jpg" height="500px" />
                <img src="../images/kampüspark.jpeg" widht="380px" height="500px" />
                <img src="../images/kütüphane.jpeg" widht="380px" height="500px" />
                <img src="../images/kütüphaneçesme.jpeg" widht="380px" height="500px" />
                <img src="../images/kütüphanemasa.jpeg" widht="380px" height="500px" />
                <img src="../images/mühiçi.jpeg" widht="380px" height="500px" />
                <img src="../images/tabela.jpeg" widht="380px" height="500px" />
            </div>
        </div>




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



        <script src="../js/JavaScript.js"></script>

    </header>
    
</body>
</html>
