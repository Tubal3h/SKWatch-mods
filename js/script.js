window.addEventListener('DOMContentLoaded', function () {
    $(window).resize(function () {
        page = parseInt($("#value").text()) 
        switch (page) {
            case 1:
                index()
                console.log("index")
                break;
            case 2:
                category();
                break;
            case 3:
                about();
                break;
            case 4:
                watches();
                break;
        
            default:
                console.log("error")
                console.log(page)
                break;
        }
    });
})

/* -------------------------------------------------------------------------- */
/*                              deskto to mobile                              */
/* -------------------------------------------------------------------------- */

function index() {
    var theWindowSize = $(this).width();
        if (theWindowSize < 1250) {
            $("header").addClass("w100");
            $("#menu").html(
                `
                <div id="watch" class=" hide" onclick="watch()">
                    <h1 id="" class="pointer">Watch</h1>
                    <div id="watch-submenu" class="m-w-menu hide " onclick="watch()">
                        <div id="" class="p-absolute center " >
                            <a href="category/yatchmaster.html">
                                <h1 id="" class="p-2 ">Yatch Master</h1>
                            </a>
                            <a href="category/datejust.html">
                                <h1 id="" class="p-2 ">Datejust</h1>
                            </a>
                            <a href="category/nautilus.html">
                                <h1 id="" class="p-2 ">Nautilus</h1>
                            </a>
                            <div id="submenu-close" class="flex center " onclick="watch()">
                                <img src="css/img/close.png" alt="" class="">
                            </div>
                        </div>
                    </div>
                    </div>
                    <div id="logo" class="m-1" onclick="menu()">
                        <img src="css/img/icon-sk.png" alt="" class="">
                    </div>
                    <a href="about.html" id="about" class="hide">
                        <h1  class="">About</h1>
                    </a>
                `
            )
            $("#section1").removeClass("section flex")
            $("#section1 img").removeClass("section-img-left")
            $("#section1 img").addClass("w100")
            $("#section2").removeClass("section flex")
            $("#section2").html(`
            <img class="section-img w100" id="section-2-img"src="css/img/sk-sub-BB.jpg" alt="">
            <div id="section-2-2" class="flex center w100">
                <div id="" class="section-text">
                    <h1 id="section-2-2-h1" class="text-clr-2">Esplora i Classici: Orologi Storici come il Nautilus, Yacht Master e Altri</h1>
                    <p id="section-2-2-p" class="text-clr-1">
                        Da SK-Watch Mods, ti presentiamo una selezione curata di orologi storici che hanno lasciato un'impronta indelebile nella storia dell'orologeria. Dai prestigiosi modelli come il Nautilus ai classici intramontabili come il Yacht Master, offriamo una vasta gamma di orologi che incarnano eleganza, innovazione e prestigio.
                            Il Nautilus, con il suo design distintivo e la sua eredità leggendaria, è una scelta popolare tra gli amanti degli orologi che apprezzano l'artigianato e lo stile senza tempo. Il Yacht Master, con la sua resistenza all'acqua e la sua robustezza, è l'emblema dell'avventura e della precisione tecnica.
                            Tuttavia, sappiamo che ogni individuo ha gusti e preferenze uniche. È per questo che offriamo la possibilità di richiedere modelli specifici che potrebbero non essere elencati nel nostro catalogo. Basta contattarci su Telegram e faremo del nostro meglio per soddisfare le tue richieste, trovando l'orologio perfetto che rispecchia il tuo stile e la tua personalità.
                            Che tu sia un collezionista esperto o un principiante appassionato, siamo qui per aiutarti a trovare l'orologio dei tuoi sogni. Scopri la nostra selezione di orologi storici e sperimenta il fascino senza tempo di questi pezzi iconici. E se hai in mente un modello specifico, non esitare a contattarci su Telegram - siamo qui per realizzare i tuoi desideri orologieri più audaci.
                    </p>
                </div>
            </div>
            `)
            $("#section3").removeClass("section flex")
            $("#section3 img").removeClass("section-img-left")
            $("#section3 img").addClass("w100")
            
            
        } else {
            $("header").removeClass("w100");
            $("#menu").html(
                `
                <a href="index.html" id="logo" class="">
                    <img src="css/img/icon-sk.png" alt="" class="">
                </a>
                <div id="" class="w-menu">
                <h1 id="" class="pointer m-1">Watch</h1>
                <div id="" class="p-absolute hide">
                    <a href="category/yatchmaster.html" class="p-1">
                        <h1 id="" class="">Yatch Master</h1>
                    </a>
                    <a href="category/datejust.html" class="p-1">
                        <h1 id="" class="">Datejust</h1>
                    </a>
                    <a href="category/nautilus.html" class="p-1">
                        <h1 id="" class="">Nautilus</h1>
                    </a>
                </div>
                </div>
                <a href="about.html">
                    <h1 id="about" class="">About</h1>
                </a>
                `
            )
            $("#section1").addClass("section flex")
            $("#section1 img").addClass("section-img-left")
            $("#section1 img").removeClass("w100")
            $("#section2").addClass("section flex")
            $("#section2").html(`
            <div id="section-2-2" class="flex center">
            <div id="" class="section-text  ">
                <h1 id="section-2-2-h1" class="text-clr-2">Esplora i Classici: Orologi Storici come il Nautilus, Yacht Master e Altri</h1>
                <p id="section-2-2-p" class="text-clr-1">
                    Da SK-Watch Mods, ti presentiamo una selezione curata di orologi storici che hanno lasciato un'impronta indelebile nella storia dell'orologeria. Dai prestigiosi modelli come il Nautilus ai classici intramontabili come il Yacht Master, offriamo una vasta gamma di orologi che incarnano eleganza, innovazione e prestigio.

Il Nautilus, con il suo design distintivo e la sua eredità leggendaria, è una scelta popolare tra gli amanti degli orologi che apprezzano l'artigianato e lo stile senza tempo. Il Yacht Master, con la sua resistenza all'acqua e la sua robustezza, è l'emblema dell'avventura e della precisione tecnica.

Tuttavia, sappiamo che ogni individuo ha gusti e preferenze uniche. È per questo che offriamo la possibilità di richiedere modelli specifici che potrebbero non essere elencati nel nostro catalogo. Basta contattarci su Telegram e faremo del nostro meglio per soddisfare le tue richieste, trovando l'orologio perfetto che rispecchia il tuo stile e la tua personalità.

Che tu sia un collezionista esperto o un principiante appassionato, siamo qui per aiutarti a trovare l'orologio dei tuoi sogni. Scopri la nostra selezione di orologi storici e sperimenta il fascino senza tempo di questi pezzi iconici. E se hai in mente un modello specifico, non esitare a contattarci su Telegram - siamo qui per realizzare i tuoi desideri orologieri più audaci.
                </p>
            </div>
        </div>
        <img class="section-img" id="section-2-img"src="css/img/sk-sub-BB.jpg" alt="">
            `)
            $("#section3").addClass("section flex")
            $("#section3 img").addClass("section-img-left")
            $("#section3 img").removeClass("w100")
        }
}
function category() {
    var theWindowSize = $(this).width();
    if (theWindowSize < 1250) {
        // window.location.href = "m_index.html";
        $("header").addClass("w100");
        $("#menu").html(
            `
            <div id="watch" class=" hide" onclick="watch()">
                <h1 id="" class="pointer">Watch</h1>
                <div id="watch-submenu" class="m-w-menu hide " onclick="watch()">
                    <div id="" class="p-absolute center " >
                        <a href="yatchmaster.html">
                            <h1 id="" class="p-2 ">Yatch Master</h1>
                        </a>
                        <a href="datejust.html">
                            <h1 id="" class="p-2 ">Datejust</h1>
                        </a>
                        <a href="nautilus.html">
                            <h1 id="" class="p-2 ">Nautilus</h1>
                        </a>
                        <div id="submenu-close" class="flex center " onclick="watch()">
                            <img src="../css/img/close.png" alt="" class="">
                        </div>
                    </div>
                </div>
                </div>
                <div id="logo" class="m-1" onclick="menu()">
                    <img src="../css/img/icon-sk.png" alt="" class="">
                </div>
                <a href="../about.html" id="about" class="hide">
                    <h1  class="">About</h1>
                </a>
                <a href="../index.html" id="home" class="p-absolute hide">
                <h1  class="">Home</h1>
            </a>
            `
        )
        
        
    } else {
        $("header").removeClass("w100");
        $("#menu").html(
            `
            <a href="../index.html" id="logo" class="">
                <img src="../css/img/icon-sk.png" alt="" class="">
            </a>
            <div id="" class="w-menu">
            <h1 id="" class="pointer m-1">Watch</h1>
            <div id="" class="p-absolute hide">
                <a href="yatchmaster.html" class="p-1">
                    <h1 id="" class="">Yatch Master</h1>
                </a>
                <a href="datejust.html" class="p-1">
                    <h1 id="" class="">Datejust</h1>
                </a>
                <a href="nautilus.html" class="p-1">
                    <h1 id="" class="">Nautilus</h1>
                </a>
            </div>
            </div>
            <a href="../about.html">
                <h1 id="about" class="">About</h1>
            </a>
            `
        )

    }
}
function about() {
    var theWindowSize = $(this).width();
    if (theWindowSize < 1250) {
        $("header").addClass("w100");
        $("#menu").html(
            `
            <div id="watch" class=" hide" onclick="watch()">
                <h1 id="" class="pointer">Watch</h1>
                <div id="watch-submenu" class="m-w-menu hide " onclick="watch()">
                    <div id="" class="p-absolute center " >
                        <a href="category/yatchmaster.html">
                            <h1 id="" class="p-2 ">Yatch Master</h1>
                        </a>
                        <a href="category/datejust.html">
                            <h1 id="" class="p-2 ">Datejust</h1>
                        </a>
                        <a href="category/nautilus.html">
                            <h1 id="" class="p-2 ">Nautilus</h1>
                        </a>
                        <div id="submenu-close" class="flex center " onclick="watch()">
                            <img src="../css/img/close.png" alt="" class="">
                        </div>
                    </div>
                </div>
                </div>
                <div id="logo" class="m-1" onclick="menu()">
                    <img src="css/img/icon-sk.png" alt="" class="">
                </div>
                <a href="about.html" id="about" class="hide">
                    <h1  class="">About</h1>
                </a>
                <a href="index.html" id="home" class="p-absolute hide">
                    <h1  class="">Home</h1>
                </a>
            `
        )
    } else {
        $("header").removeClass("w100");
        $("#menu").html(
            `
            <a href="../index.html" id="logo" class="">
                <img src="../css/img/icon-sk.png" alt="" class="">
            </a>
            <div id="" class="w-menu">
            <h1 id="" class="pointer m-1">Watch</h1>
            <div id="" class="p-absolute hide">
                <a href="category/yatchmaster.html" class="p-1">
                    <h1 id="" class="">Yatch Master</h1>
                </a>
                <a href="category/datejust.html" class="p-1">
                    <h1 id="" class="">Datejust</h1>
                </a>
                <a href="category/nautilus.html" class="p-1">
                    <h1 id="" class="">Nautilus</h1>
                </a>
            </div>
            </div>
            <a href="about.html">
                <h1 id="about" class="">About</h1>
            </a>
            `
        )

    }
}
function watches() {
    var theWindowSize = $(this).width();
    if (theWindowSize < 1250) {
        $("header").addClass("w100");
        $("#menu").html(
            `
            <div id="watch" class=" hide" onclick="watch()">
                <h1 id="" class="pointer">Watch</h1>
                <div id="watch-submenu" class="m-w-menu hide " onclick="watch()">
                    <div id="" class="p-absolute center " >
                        <a href="../yatchmaster.html">
                            <h1 id="" class="p-2 ">Yatch Master</h1>
                        </a>
                        <a href="../datejust.html">
                            <h1 id="" class="p-2 ">Datejust</h1>
                        </a>
                        <a href="../nautilus.html">
                            <h1 id="" class="p-2 ">Nautilus</h1>
                        </a>
                        <div id="submenu-close" class="flex center " onclick="watch()">
                            <img src="../../css/img/close.png" alt="" class="">
                        </div>
                    </div>
                </div>
                </div>
                <div id="logo" class="m-1" onclick="menu()">
                    <img src="../../css/img/icon-sk.png" alt="" class="">
                </div>
                <a href="../../about.html" id="about" class="hide">
                    <h1  class="">About</h1>
                </a>
                <a href="../../index.html" id="home" class="p-absolute hide">
                    <h1  class="">Home</h1>
                </a>
            `
        )
        $('.w-data-container img').removeClass('w50').addClass('w100')
        $('#w-data').removeClass('flex').addClass('w100')
        $('#w-text-container').removeClass('w50').addClass('w100')
        $('#w-img-container').removeClass('50').addClass('w100')
    } else {
        $("header").removeClass("w100");
        $('#w-img-container').removeClass('w50').addClass('w100')
        $("#menu").html(
            `
            <a href="../../index.html" id="logo" class="">
                <img src="../../css/img/icon-sk.png" alt="" class="">
            </a>
            <div id="" class="w-menu">
            <h1 id="" class="pointer m-1">Watch</h1>
            <div id="" class="p-absolute hide">
                <a href="../yatchmaster.html" class=" bg-clr-1">
                    <h1 id="" class="bg-clr-1 p-t-1">Yatch Master</h1>
                </a>
                <a href="../datejust.html" class=" bg-clr-1">
                    <h1 id="" class="bg-clr-1 p-t-1">Datejust</h1>
                </a>
                <a href="../nautilus.html" class=" bg-clr-1">
                    <h1 id="" class="bg-clr-1 p-t-1">Nautilus</h1>
                </a>
            </div>
            </div>
            <a href="../../about.html">
                <h1 id="about" class="">About</h1>
            </a>
            `
        )

    }
}

/* -------------------------------------------------------------------------- */
/*                               Menu & SubMenu                               */
/* -------------------------------------------------------------------------- */

x = 0
w = x;
m = x;

function menu() {
    
    if (m == 0) {
        // console.log("1")
        $("#watch").removeClass("hide");
        $("#about").removeClass("hide");
        $("#home").removeClass("hide");
        m = 1;
    } else {
        // console.log("2")
        $("#watch").addClass("hide");
        $("#about").addClass("hide");
        $("#home").addClass("hide");
        m = 0;
    }
    
}


function watch() {
    
    if (w == 0) {
        console.log("w1")
        console.log(w)
        $("#section1").addClass("hide");
        $("#section2").addClass("hide");
        $("#section3").addClass("hide");
        $("footer").addClass("hide")
        $("#btnfix").addClass("hide")
        $("#watch-submenu").removeClass("hide");
        $("#w-img").addClass('hide')
        $("#w-list").addClass('hide')
        $("#btnfix").addClass('hide')
        $('footer').addClass('hide')
        $('.about-section').addClass('hide')
        $('.w-data-container').addClass('hide')
        document.body.style.background = "#004225";
        w = 1;
    } else {
        console.log("w2")
        console.log(w)
        $("#section1").removeClass("hide");
        $("#section2").removeClass("hide");
        $("#section3").removeClass("hide");
        $("footer").removeClass("hide")
        $("#btnfix").removeClass("hide")
        $("#watch-submenu").addClass("hide");
        $("#w-img").removeClass('hide')
        $("#w-list").removeClass('hide')
        $("#btnfix").removeClass('hide')
        $(".about-section").removeClass('hide')
        $(".w-data-container").removeClass('hide')
        document.body.style.background = "#004225";
        w = 0;
    }
}

/* -------------------------------------------------------------------------- */
/*                                 SlidePhoto                                 */
/* -------------------------------------------------------------------------- */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    // let slides = document.getElementsByClassName("mySlides");
    let slides = $(".mySlides");
    // let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex-1].style.display = "block";  
    // dots[slideIndex-1].className += " active";
}