/////////////// TARİHÇE ////////////////////

const main = document.querySelector(".main");
const tarihce = document.querySelector(".tarihce");
const hakkinda = document.querySelector(".hakkinda");
const misyonVizyon = document.querySelector(".misyon-vizyon");
const yerlesim = document.querySelector(".yerlesim");
const iletisim = document.querySelector(".iletisim");
const sanalTur = document.querySelector(".sanalTur");
const tanitimVideo = document.querySelector(".tanitimVideo");
const erasmusFarabi = document.querySelector(".erasmusFar");
const tanitimVideo = document.querySelector(".tanitimVideo");
const bozüyükmy = document.querySelector(".bozüyükmy");
const my = document.querySelector(".my");
const sögütmy = document.querySelector(".sögütmy");
const pazaryerimy = document.querySelector(".pazaryerimy");
const osmanelimy = document.querySelector(".osmanelimy");
const gölpazarımy = document.querySelector(".gölpazarımy");
const saglıkhizmetmy = document.querySelector(".saglıkhizmetmy");
const fenf = document.querySelector(".fenf");
const iktisatf = document.querySelector(".iktisatf");
const islamiilimf = document.querySelector(".islamiilimf");
const saglıkBilimf = document.querySelector(".saglıkBilimf");
const uygulamalıBilimf = document.querySelector(".uygulamalıBilimf");
const insanToplumf = document.querySelector(".insanToplumf");
const güzelsanatf = document.querySelector(".güzelsanatf");
const mühendislikf = document.querySelector(".mühendislikf");
const tıpf = document.querySelector(".tıpf");
const ziraatf = document.querySelector(".ziraatf");
const puanlar = document.querySelector(".puanlar");
const isİmkanları = document.querySelector(".isİmkanları");
const maas = document.querySelector(".maas");
const ogrenciKulupleri = document.querySelector(".ogrenciKulupleri");
const bizeSor = document.querySelector(".bizeSor");


//!buttons
const tarihceBtn = document.querySelector("#tarihce-btn");
const hakkindaBtn = document.querySelector("#hakkinda-btn");
const misyonVizyonBtn = document.querySelector("#misyon-vizyon-btn");
const yerlesimBtn = document.querySelector("#yerlesim");
const iletisimBtn = document.querySelector("#iletisim");
const sanalTurBtn = document.querySelector("#sanalTur");
const tanitimVideoBtn = document.querySelector("#tanitimVideo");
const bozüyükmyBtn = document.querySelector("#bozüyükmy");
const myBtn = document.querySelector("#my");
const sögütmyBtn = document.querySelector("#sögütmy");
const pazaryerimyBtn = document.querySelector("#pazaryerimy");
const osmanelimyBtn = document.querySelector("#osmanelimy");
const gölpazarımyBtn = document.querySelector("#gölpazarımy");
const saglıkhizmetmyBtn = document.querySelector("#saglıkhizmetmy");
const fenfBtn = document.querySelector("#fenf");
const iktisatfBtn = document.querySelector("#iktisatf");
const islamiilimfBtn = document.querySelector("#islamiilimf");
const saglıkBilimfBtn = document.querySelector("#saglıkBilimf");
const uygulamalıBilimfBtn = document.querySelector("#uygulamalıBilimf");
const insanToplumfBtn = document.querySelector("#insanToplumf");
const güzelsanatfBtn = document.querySelector("#güzelsanatf");
const mühendislikfBtn = document.querySelector("#mühendislikf");
const tıpfBtn = document.querySelector("#tıpf");
const ziraatfBtn = document.querySelector("#ziraatf");
const puanlarBtn = document.querySelector("#puanlar");
const isİmkanlarıBtn = document.querySelector("#isİmkanları");
const maasBtn = document.querySelector("#maas");
const ogrenciKulupleriBtn = document.querySelector("#ogrenciKulupleri");
const bizeSorBtn = document.querySelector("#bizeSor");




/////// PUANLAR ////////////////
puanlar.addEventListener("click", function () {
    puanlar.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(puanlar)) {
            puanlar.classList.remove("active");

        }
    });
});
puanlarBtn.addEventListener("click", function () {
    puanlar.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(puanlarBtn) && !e.composed().includes(puanlar)) {
            puanlar.classList.remove("active");

        }
    });
});

/////// MAAS////////////////////////////////////////

maas.addEventListener("click", function () {
    maas.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(maas)) {
            maas.classList.remove("active");

        }
    });
});
maasBtn.addEventListener("click", function () {
    maas.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(maasBtn) && !e.composed().includes(maas)) {
            maas.classList.remove("active");

        }
    });
});


//////////////////////// İŞ İMKANLARI //////////////////////////////////

isİmkanları.addEventListener("click", function () {
    isİmkanları.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(puanlar)) {
            isİmkanları.classList.remove("active");

        }
    });
});
isİmkanlarıBtn.addEventListener("click", function () {
    isİmkanları.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(isİmkanlarıBtn) && !e.composed().includes(isİmkanları)) {
            isİmkanları.classList.remove("active");

        }
    });
});





///////////////////// TARİHÇE ///////////////////////////
tarihce.addEventListener("click", function () {
    tarihce.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(tarihce)) {
            tarihce.classList.remove("active");

        }
    });
});
tarihceBtn.addEventListener("click", function () {
    tarihce.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(tarihceBtn) && !e.composed().includes(tarihce)) {
            tarihce.classList.remove("active");

        }
    });
});

/////////////// HAKKINDA ////////////////////
hakkinda.addEventListener("click", function () {
    hakkinda.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(hakkinda)) {
            hakkinda.classList.remove("active");

        }
    });
});
hakkindaBtn.addEventListener("click", function () {
    hakkinda.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(hakkindaBtn) && !e.composed().includes(hakkinda)) {
            hakkinda.classList.remove("active");

        }
    });
});



/////////////// MİSYON-VİZYON ////////////////////

misyonVizyon.addEventListener("click", function () {
    misyonVizyon.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(misyonVizyon)) {
            misyonVizyon.classList.remove("active");

        }
    });
});
misyonVizyonBtn.addEventListener("click", function () {
    misyonVizyon.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(misyonVizyonBtn) && !e.composed().includes(misyonVizyon)) {
            tarihce.classList.remove("active");

        }
    });
});
/////////////// YERLEŞİM ////////////////////

yerlesim.addEventListener("click", function () {
    yerlesim.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(yerlesim)) {
            yerlesim.classList.remove("active");

        }
    });
});
yerlesimBtn.addEventListener("click", function () {
    yerlesim.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(yerlesimBtn) && !e.composed().includes(yerlesim)) {
            yerlesim.classList.remove("active");

        }
    });
});


////////////////// İLETİŞİM ////////////////////
iletisim.addEventListener("click", function () {
    iletisim.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(iletisim)) {
            iletisim.classList.remove("active");

        }
    });
});
iletisimBtn.addEventListener("click", function () {
    iletisim.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(yerlesimBtn) && !e.composed().includes(iletisim)) {
            iletisim.classList.remove("active");

        }
    });
});

///////////////////// SANAL TUR ////////////////////
sanalTur.addEventListener("click", function () {
    sanalTur.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(sanalTur)) {
            sanalTur.classList.remove("active");

        }
    });
});
sanalTurBtn.addEventListener("click", function () {
    sanalTur.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(sanalTurBtn) && !e.composed().includes(sanalTur)) {
            sanalTur.classList.remove("active");

        }
    });
});
//////////////////// TANITIM VİDEOLARI ////////////////////

tanitimVideo.addEventListener("click", function () {
    tanitimVideo.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(tanitimVideo)) {
            tanitimVideo.classList.remove("active");

        }
    });
});
tanitimVideoBtn.addEventListener("click", function () {
    tanitimVideo.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(tanitimVideoBtn) && !e.composed().includes(tanitimVideo)) {
            tanitimVideo.classList.remove("active");

        }
    });
});



///////////////////// ERASMUS FARABİ///////////////////////////


erasmusFarabi.addEventListener("click", function () {
    erasmusFarabi.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(erasmusFarabi)) {
            erasmusFarabi.classList.remove("active");

        }
    });
});
erasmusFarabiBtn.addEventListener("click", function () {
    erasmusFarabi.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(erasmusFarabiBtn) && !e.composed().includes(erasmusFarabi)) {
            erasmusFarabi.classList.remove("active");

        }
    });
});



///////////////////// MEVLANA ///////////////////////////
mevlana.addEventListener("click", function () {
    mevlana.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(mevlana)) {
            mevlana.classList.remove("active");

        }
    });
});
mevlanaBtn.addEventListener("click", function () {
    mevlana.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(mevlanaBtn) && !e.composed().includes(mevlana)) {
            mevlana.classList.remove("active");

        }
    });
});

///////////////////// ÖĞRENCİ KULÜPLERİ ///////////////////////////

ogrenciKulüp.addEventListener("click", function () {
    ogrenciKulüp.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(ogrenciKulüp)) {
            ogrenciKulüp.classList.remove("active");

        }
    });
});
ogrenciKulüpBtn.addEventListener("click", function () {
    ogrenciKulüp.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(ogrenciKulüpBtn) && !e.composed().includes(ogrenciKulüp)) {
            ogrenciKulüp.classList.remove("active");

        }
    });
});



////////////BİZE SOR/////////////////

bizeSor.addEventListener("click", function () {
    bizeSor.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(bizeSor)) {
            bizeSor.classList.remove("active");

        }
    });
});
bizeSorBtn.addEventListener("click", function () {
    bizeSor.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(bizeSorBtn) && !e.composed().includes(bizeSor)) {
            bizeSor.classList.remove("active");

        }
    });
});


///////////////////// SAĞLIKLI YAŞAM ///////////////////////////
saglıklıYasam.addEventListener("click", function () {
    saglıklıYasam.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(saglıklıYasam)) {
            saglıklıYasam.classList.remove("active");

        }
    });
});
saglıklıYasamBtn.addEventListener("click", function () {
    saglıklıYasam.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(saglıklıYasamBtn) && !e.composed().includes(saglıklıYasam)) {
            saglıklıYasam.classList.remove("active");

        }
    });
});

///////////////////// FAKÜLTELER ///////////////////////////

fakülteler.addEventListener("click", function () {
    fakülteler.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(fakülteler)) {
            fakülteler.classList.remove("active");

        }
    });
});
fakültelerBtn.addEventListener("click", function () {
    fakülteler.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(fakültelerBtn) && !e.composed().includes(fakülteler)) {
            fakülteler.classList.remove("active");

        }
    });
});




///////////////////// MESLEKYÜKSEKOKUL ///////////////////////////

meslekYüksekokul.addEventListener("click", function () {
    meslekYüksekokul.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(meslekYüksekokul)) {
            meslekYüksekokul.classList.remove("active");

        }
    });
});
meslekYüksekokulBtn.addEventListener("click", function () {
    meslekYüksekokul.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(meslekYüksekokulBtn) && !e.composed().includes(meslekYüksekokul)) {
            meslekYüksekokul.classList.remove("active");

        }
    });
});


/////////////////bozüyük//////////////////

bozüyükmy.addEventListener("click", function () {
    bozüyükmy.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(bozüyükmy)) {
            bozüyükmy.classList.remove("active");

        }
    });
});
bozüyükmyBtn.addEventListener("click", function () {
    bozüyükmy.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(bozüyükmyBtn) && !e.composed().includes(bozüyükmy)) {
            bozüyükmy.classList.remove("active");

        }
    });
});

///////////////// my //////////////////

my.addEventListener("click", function () {
    my.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(my)) {
            my.classList.remove("active");

        }
    });
});
myBtn.addEventListener("click", function () {
    my.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(myBtn) && !e.composed().includes(my)) {
            my.classList.remove("active");

        }
    });
});

/////////////////söğüt//////////////////

sögütmy.addEventListener("click", function () {
    sögütmy.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(sögütmy)) {
            sögütmy.classList.remove("active");

        }
    });
});
sögütmyBtn.addEventListener("click", function () {
    sögütmy.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(sögütmyBtn) && !e.composed().includes(sögütmy)) {
            sögütmy.classList.remove("active");

        }
    });
});


/////////////////gölpazarı//////////////////

gölpazarımy.addEventListener("click", function () {
    gölpazarımy.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(gölpazarımy)) {
            gölpazarımy.classList.remove("active");

        }
    });
});
gölpazarımyBtn.addEventListener("click", function () {
    gölpazarımy.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(gölpazarımyBtn) && !e.composed().includes(gölpazarımy)) {
            gölpazarımy.classList.remove("active");

        }
    });
});

/////////////////osmaneli//////////////////

osmanelimy.addEventListener("click", function () {
    osmanelimy.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(osmanelimy)) {
            osmanelimy.classList.remove("active");

        }
    });
});
osmanelimyBtn.addEventListener("click", function () {
    osmanelimy.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(osmanelimyBtn) && !e.composed().includes(osmanelimy)) {
            osmanelimy.classList.remove("active");

        }
    });
});

/////////////////pazaryeri//////////////////

pazaryerimy.addEventListener("click", function () {
    pazaryerimy.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(pazaryerimy)) {
            pazaryerimy.classList.remove("active");

        }
    });
});
pazaryerimyBtn.addEventListener("click", function () {
    pazaryerimy.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(pazaryerimyBtn) && !e.composed().includes(pazaryerimy)) {
            pazaryerimy.classList.remove("active");

        }
    });
});

/////////////////sağlıkhizmet//////////////////

sağlıkhizmetmy.addEventListener("click", function () {
    sağlıkhizmetmy.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(sağlıkhizmetmy)) {
            sağlıkhizmetmy.classList.remove("active");

        }
    });
});
sağlıkhizmetmyBtn.addEventListener("click", function () {
    sağlıkhizmetmy.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(sağlıkhizmetmyBtn) && !e.composed().includes(sağlıkhizmetmy)) {
            sağlıkhizmetmy.classList.remove("active");

        }
    });
});





///////////////////// İNG HAZIRLIK ///////////////////////////

ingHazırlık.addEventListener("click", function () {
    ingHazırlık.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(ingHazırlık)) {
            ingHazırlık.classList.remove("active");

        }
    });
});
ingHazırlıkBtn.addEventListener("click", function () {
    ingHazırlık.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(ingHazırlıkBtn) && !e.composed().includes(ingHazırlık)) {
            ingHazırlık.classList.remove("active");

        }
    });
});



///////////////////// ÇİFT YAN ANADAL ///////////////////////////

ciftYanAnadal.addEventListener("click", function () {
    ciftYanAnadal.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(ciftYanAnadal)) {
            ciftYanAnadal.classList.remove("active");

        }
    });
});
ciftYanAnadalBtn.addEventListener("click", function () {
    ciftYanAnadal.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(ciftYanAnadalBtn) && !e.composed().includes(ciftYanAnadal)) {
            ciftYanAnadal.classList.remove("active");

        }
    });
});



///////////////////// EĞİTİM MODELLERİ///////////////////////////
egitimModelleri.addEventListener("click", function () {
    egitimModelleri.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(egitimModelleri)) {
            egitimModelleri.classList.remove("active");

        }
    });
});
egitimModelleriBtn.addEventListener("click", function () {
    egitimModelleri.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(egitimModelleriBtn) && !e.composed().includes(egitimModelleri)) {
            egitimModelleri.classList.remove("active");

        }
    });
});


///////////////////// YÜKSEKLİSANS ///////////////////////////
yükseklisans.addEventListener("click", function () {
    yükseklisans.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(yükseklisans)) {
            yükseklisans.classList.remove("active");

        }
    });
});
yükseklisansBtn.addEventListener("click", function () {
    yükseklisans.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(yükseklisansBtn) && !e.composed().includes(yükseklisans)) {
            yükseklisans.classList.remove("active");

        }
    });
});





///////////////////// FAKÜLTELER ///////////////////////////
///////////////////// FENF ///////////////////////////


fenf.addEventListener("click", function () {
    fenf.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(fenf)) {
            fenf.classList.remove("active");

        }
    });
});
fenfBtn.addEventListener("click", function () {
    fenf.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(fenfBtn) && !e.composed().includes(fenf)) {
            fenf.classList.remove("active");

        }
    });
});

///////////////////// İKTİSATF ///////////////////////////


iktisatf.addEventListener("click", function () {
    iktisatf.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(iktisatf)) {
            iktisatf.classList.remove("active");

        }
    });
});
iktisatfBtn.addEventListener("click", function () {
    iktisatf.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(iktisatfBtn) && !e.composed().includes(iktisatf)) {
            iktisatf.classList.remove("active");

        }
    });
});

///////////////////// İSLaMİ İLİMF ///////////////////////////


islamiilimf.addEventListener("click", function () {
    islamiilimf.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(islamiilimf)) {
            islamiilimf.classList.remove("active");

        }
    });
});
islamiilimfBtn.addEventListener("click", function () {
    islamiilimf.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(islamiilimfBtn) && !e.composed().includes(islamiilimf)) {
            islamiilimf.classList.remove("active");

        }
    });
});

///////////////////// SAĞLIK BİLİMF ///////////////////////////


saglıkBilimf.addEventListener("click", function () {
    saglıkBilimf.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(saglıkBilimf)) {
            saglıkBilimf.classList.remove("active");

        }
    });
});
saglıkBilimfBtn.addEventListener("click", function () {
    saglıkBilimf.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(saglıkBilimfBtn) && !e.composed().includes(saglıkBilimf)) {
            saglıkBilimf.classList.remove("active");

        }
    });
});





///////////////////// UYGULAMALI BİLİMF ///////////////////////////



uygulamalıBilimf.addEventListener("click", function () {
    uygulamalıBilimf.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(uygulamalıBilimf)) {
            uygulamalıBilimf.classList.remove("active");

        }
    });
});
uygulamalıBilimfBtn.addEventListener("click", function () {
    uygulamalıBilimf.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(uygulamalıBilimfBtn) && !e.composed().includes(uygulamalıBilimf)) {
            uygulamalıBilimf.classList.remove("active");

        }
    });
});

///////////////////// GÜZELSANATF ///////////////////////////


güzelsanatf.addEventListener("click", function () {
    güzelsanatf.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(güzelsanatf)) {
            güzelsanatf.classList.remove("active");

        }
    });
});
güzelsanatfBtn.addEventListener("click", function () {
    güzelsanatf.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(güzelsanatfBtn) && !e.composed().includes(güzelsanatf)) {
            güzelsanatf.classList.remove("active");

        }
    });
});

////////////////////İNSAN TOPLUMF ///////////////////////////



insanToplumf.addEventListener("click", function () {
    insanToplumf.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(insanToplumf)) {
            insanToplumf.classList.remove("active");

        }
    });
});
insanToplumfBtn.addEventListener("click", function () {
    insanToplumf.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(insanToplumfBtn) && !e.composed().includes(insanToplumf)) {
            insanToplumf.classList.remove("active");

        }
    });
});


///////////////////// MÜHENDİSLİKF ///////////////////////////


mühendislikf.addEventListener("click", function () {
    mühendislikf.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(mühendislikf)) {
            mühendislikf.classList.remove("active");

        }
    });
});
mühendislikfBtn.addEventListener("click", function () {
    mühendislikf.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(mühendislikfBtn) && !e.composed().includes(mühendislikf)) {
            mühendislikf.classList.remove("active");

        }
    });
});

///////////////////// TIPF ///////////////////////////


tıpf.addEventListener("click", function () {
    tıpf.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(tıpf)) {
            tıpf.classList.remove("active");

        }
    });
});
tıpfBtn.addEventListener("click", function () {
    tıpf.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(tıpfBtn) && !e.composed().includes(tıpf)) {
            tıpf.classList.remove("active");

        }
    });
});

///////////////////// ZİRAATF ///////////////////////////


ziraatf.addEventListener("click", function () {
    ziraatf.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(ziraatf)) {
            ziraatf.classList.remove("active");

        }
    });
});
ziraatfBtn.addEventListener("click", function () {
    ziraatf.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(ziraatfBtn) && !e.composed().includes(ziraatf)) {
            ziraatf.classList.remove("active");

        }
    });
});