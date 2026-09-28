const header = document.getElementById("header");

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");

const navLinks =
    nav.querySelectorAll("a");

const backTop =
    document.getElementById("backTop");

const quoteForm =
    document.getElementById("quoteForm");

const formSuccess =
    document.getElementById("formSuccess");

const currentYear =
    document.getElementById("currentYear");


// ==============================
// ANNÉE
// ==============================

currentYear.textContent =
    new Date().getFullYear();


// ==============================
// SCROLL
// ==============================

function handleScroll() {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }


    if (window.scrollY > 500) {

        backTop.classList.add("visible");

    } else {

        backTop.classList.remove("visible");

    }

}

window.addEventListener(
    "scroll",
    handleScroll
);

handleScroll();


// ==============================
// MENU MOBILE
// ==============================

menuToggle.addEventListener(
    "click",
    () => {

        nav.classList.toggle("open");

        document.body.classList.toggle(
            "menu-open"
        );


        if (nav.classList.contains("open")) {

            menuToggle.textContent = "✕";

        } else {

            menuToggle.textContent = "☰";

        }

    }
);


navLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            nav.classList.remove("open");

            document.body.classList.remove(
                "menu-open"
            );

            menuToggle.textContent = "☰";

        }
    );

});


// ==============================
// RETOUR EN HAUT
// ==============================

backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


// ==============================
// FORMULAIRE DEVIS
// ==============================

quoteForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();

        const phone =
            document
                .getElementById("phone")
                .value
                .trim();

        const brand =
            document
                .getElementById("brand")
                .value
                .trim();

        const model =
            document
                .getElementById("model")
                .value
                .trim();

        const service =
            document
                .getElementById("service")
                .value;

        const message =
            document
                .getElementById("message")
                .value
                .trim();


        if (
            !name ||
            !phone ||
            !brand ||
            !model ||
            !service ||
            !message
        ) {

            alert(
                "Merci de remplir tous les champs obligatoires."
            );

            return;

        }


        formSuccess.classList.add(
            "visible"
        );


        quoteForm.reset();


        setTimeout(
            () => {

                formSuccess.classList.remove(
                    "visible"
                );

            },
            5000
        );

    }
);