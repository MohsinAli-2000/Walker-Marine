$(document).ready(function () {
    // ================================++++++++++++++++++++====================
    // mega menu code starts here
    // Helper function to close all menus
    function closeAllMenus() {
        $(".boatsSalesMegaMenu, .servicesMegaMenu, .selectStoreMenu, .resourcesMegaMenu").fadeOut();
        $(".toggleBoatSalesMenu, .toggleServiceMenu").removeClass("activeNavTab");
        $(".resourcesMegaMenu").removeClass("togglerClassForResourcesMenu");
        $(".resourcesIcon").attr("src", "./assets/images/mega-menus/burger-icon.webp");
        $(".mobileSearchBarWrapper").fadeOut()
    }

    // --- Boat Sales Menu ---
    $(".toggleBoatSalesMenu").on("click", function (event) {
        event.stopPropagation();
        const menu = $(".boatsSalesMegaMenu");
        const trigger = $(this);

        closeAllMenus();
        if (!menu.is(":visible")) {
            menu.fadeIn();
            trigger.addClass("activeNavTab");
        }
    });

    $(".boatSalesMenuCrossIcon").on("click", function (event) {
        event.stopPropagation();
        $(".boatsSalesMegaMenu").fadeOut();
        $(".toggleBoatSalesMenu").removeClass("activeNavTab");
    });

    // --- Services Menu ---
    $(".toggleServiceMenu").on("click", function (event) {
        event.stopPropagation();
        const menu = $(".servicesMegaMenu");
        const trigger = $(this);

        closeAllMenus();
        if (!menu.is(":visible")) {
            menu.fadeIn();
            trigger.addClass("activeNavTab");
        }
    });

    $(".serviceMenuCrossIcon").on("click", function (event) {
        event.stopPropagation();
        $(".servicesMegaMenu").fadeOut();
        $(".toggleServiceMenu").removeClass("activeNavTab");
    });

    // Store Menu
    $(".toggleStoreMenu").on("click", function (event) {
        event.stopPropagation();
        const menu = $(".selectStoreMenu");

        closeAllMenus();
        if (!menu.is(":visible")) {
            menu.fadeIn();
        }
    });

    // --- Resources Menu ---
    $(".toggleResourcesMegaMenu").on("click", function (event) {
        event.stopPropagation();
        const menu = $(".resourcesMegaMenu");
        const icon = $(".resourcesIcon");
        const isActive = menu.hasClass("togglerClassForResourcesMenu");

        closeAllMenus();
        if (!isActive) {
            menu.addClass("togglerClassForResourcesMenu").fadeIn();
            icon.attr("src", "./assets/images/mega-menus/cross-icon.webp");
        }
    });

    // --- Click Outside to Close ---
    $(document).on("click", function (event) {
        const target = $(event.target);
        if (
            !target.closest(".boatsSalesMegaMenu, .servicesMegaMenu, .selectStoreMenu, .resourcesMegaMenu, .mobileSearchBarWrapper").length &&
            !target.closest(".toggleBoatSalesMenu, .toggleServiceMenu, .toggleStoreMenu, .toggleResourcesMegaMenu, .mobileSearchIconWrapper").length
        ) {
            closeAllMenus();
        }
    });

    // mega menu code ends here
    // ================================++++++++++++++++++++====================


    // ================================++++++++++++++++++++====================
    // mobile nav code starts here
    $(".burgerBtnContainer").on("click", function () {
        $(this).toggleClass("cross");
        if ($(".mobileNavMegaMenu").is(":visible")) {
            $(".mobileNavMegaMenu").fadeOut();
        } else {
            $(".mobileNavMegaMenu").fadeIn();
        }
    });

    $(".mobileMenuCrossIcon").on("click", function () {
        $(".mobileNavMegaMenu").fadeOut();
        $(".burgerBtnContainer").removeClass("cross");
    });

    // Back button to main menu
    $(".mainMenuIconWrapper").on("click", function () {
        $(".subMobileMenus").fadeOut();
        $(".mainMobileMenuWrapper").fadeIn();
    });

    // ===== Submenu toggles =====
    $(".toggleMenu-boats").on("click", function () {
        $(".mainMobileMenuWrapper").fadeOut();
        $(".submenu-boats").fadeIn();
    });


    $(".toggleMenu-service").on("click", function () {
        $(".mainMobileMenuWrapper").fadeOut();
        $(".submenu-service").fadeIn();
    });

    $(".toggleMenu-resources").on("click", function () {
        $(".mainMobileMenuWrapper").fadeOut();
        $(".submenu-resources").fadeIn();
    });

    $(".mobileSearchIconWrapper").on("click", function () {
        $(".mobileSearchBarWrapper").fadeToggle()
    })
    // mobile nav code ends here
    // ================================++++++++++++++++++++====================

    // ================================++++++++++++++++++++====================
    // home page code starts here
    if ($('.homeBrandCarousel').length) {
        $('.homeBrandCarousel').owlCarousel({
            loop: true,
            margin: 24,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1.2
                },
                600: {
                    items: 2.1
                },
                1000: {
                    items: 3.2
                }
            }
        });
    }

    if ($('.homeEventCarousel').length) {
        $('.homeEventCarousel').owlCarousel({
            loop: true,
            margin: 20,
            navText: ['<img src="./assets/images/home/prev-arrow.webp" alt="prev"/>', '<img src="./assets/images/home/next-arrow.webp" alt="next"/>'],
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }
    // home page code ends here
    // ================================++++++++++++++++++++====================


    // ================================++++++++++++++++++++====================
    // sell trade code starts here
    const uploadButton = document.getElementById('uploadButton');
    const fileInput = document.getElementById('fileInput');
    const fileNameSpan = document.getElementById('fileName');

    if (uploadButton && fileInput && fileNameSpan) {
        uploadButton.addEventListener('click', function () {
            fileInput.click();
        });

        fileInput.addEventListener('change', function () {
            const fileName = this.files[0]?.name || "No file selected";
            fileNameSpan.textContent = fileName;
        });
    }
    // sell trade code ends here
    // ================================++++++++++++++++++++====================

    // ================================++++++++++++++++++++====================
    // service page code starts here
    if ($('.serviceCarousel').length) {
        $('.serviceCarousel').owlCarousel({
            loop: true,
            margin: 20,
            navText: ['<img src="./assets/images/home/prev-arrow.webp" alt="prev"/>', '<img src="./assets/images/home/next-arrow.webp" alt="next"/>'],
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }

    const activeBorder = "1px solid #1892AA";
    const inactiveBorder = "1px solid #000";
    const activeColor = "#1892AA";
    const inactiveColor = "#000";
    const activeIcon = "./assets/images/service/blue-arrow.webp";
    const inactiveIcon = "./assets/images/service/black-arrow.webp";

    const tabsDetails = document.querySelectorAll(".tabsDetails");
    const infoTabs = document.querySelectorAll(".infoTab");
    const infoTabTexts = document.querySelectorAll(".infoTabName h4");
    const infoTabIcons = document.querySelectorAll(".infoTabIcon img");

    function showTab(index) {
        tabsDetails.forEach((d, i) => d.style.display = i === index ? "block" : "none");
        infoTabs.forEach((t, i) => t.style.border = i === index ? activeBorder : inactiveBorder);
        infoTabTexts.forEach((txt, i) => txt.style.color = i === index ? activeColor : inactiveColor);
        infoTabIcons.forEach((icon, i) => icon.src = i === index ? activeIcon : inactiveIcon);

        const offsetTop = tabsDetails[index].getBoundingClientRect().top + window.scrollY - 200;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }

    // init first tab
    if (infoTabs.length) showTab(0);

    // add click events
    infoTabs.forEach((tab, i) => tab.addEventListener("click", () => showTab(i)));
    // service page code ends here
    // ================================++++++++++++++++++++====================


    // ================================++++++++++++++++++++====================
    // location  page code starts here
    if ($('.locationTemplateCarousel').length) {
        $('.locationTemplateCarousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
    }
    // location  page code ends here
    // ================================++++++++++++++++++++====================

    // ================================++++++++++++++++++++====================
    // brand page code starts here
    if ($('.brandCarousel').length) {
        $('.brandCarousel').owlCarousel({
            loop: true,
            margin: 20,
            navText: ['<img src="./assets/images/home/prev-arrow.webp" alt="prev"/>', '<img src="./assets/images/home/next-arrow.webp" alt="next"/>'],
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }

    $(".brandFaqHeaderWrap").on("click", function () {
        $(this).next(".brandAnswerWrapper").slideToggle()
        $(this).find("img").toggleClass("rotateFaqIcon")
    })
    // brand page code ends here
    // ================================++++++++++++++++++++====================
})

document.addEventListener("DOMContentLoaded", function () {
    Fancybox.bind("[data-fancybox]", {
        Toolbar: {
            display: [
                "slideShow",
                "fullscreen",
                "download",
                "thumbs",
                "close",
            ],
        },
        animated: true,
        dragToClose: true,
    });
});