$(document).ready(function () {
        // count
        function counter() {
            let oTop;
            if ($('.counter').length !== 0) {
                oTop = $('.counter')
                    .offset()
                    .top - window.innerHeight;
            } 
            if ($(window).scrollTop() > oTop) {
                $('.counter').each(function () {
                    let $this = $(this),
                        countTo = $this.attr('data-count');
                    $({ countNum: $this.text() }).animate({
                        countNum: countTo
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum))
                        },
                        complete: function () {
                            $this.text(this.countNum)
                        }
                    })
                })
            }
        }
    function toTopBody() {
        $("html, body").animate({
            scrollTop: 0
        }, 0)
    }
    let href = $(".sidebar__nav-link.active-page").attr("href")
    $(href).addClass("active-section")

    // hide & show footer
    if ($(".section.home").hasClass("active-section")) {
        $("footer").addClass("close")
    } else {
        $("footer").removeClass("close")
    }

    // istope js
    $(function () {
        $(".portfolio__filter-btn").on("click", function (e) {
            $(".portfolio__filter-wrapper").isotope({ itemSelector: ".portfolio__column" });
            $(".portfolio").on("click", ".portfolio__filter-btn", function () {
                $(".portfolio__filter-btn").removeClass("active-filter");
                $(this).addClass("active-filter");
                let filterSelector = $(this).attr("data-filter");
                $(".portfolio__filter-wrapper").isotope({ filter: filterSelector });
                return false
            })
        })
    })

    $(".portfolio__filter-select-div").on("click", function () {
        if (!$(this).find(".portfolio__filter-buttons").hasClass("open")) {
            $(this)
                .find(".portfolio__filter-buttons")
                .addClass("open")
            $(".rotate-select").addClass("rotate")
        } else if ($(this).find(".portfolio__filter-buttons").hasClass("open")) {
            $(this)
                .find(".portfolio__filter-buttons")
                .removeClass("open")
            $(".rotate-select").removeClass("rotate")
        }
    })

    $(".portfolio__filter-btn").on("click", function () {
        if (!$(".portfolio__filter-buttons").hasClass("open")) {
            $(".portfolio__filter-buttons").removeClass("open")
            $(".rotate-select").removeClass("rotate")
        }
        let setFilterButton = setTimeout(() => {
            $(".portfolio__filter-select").text($(this).text());
            clearTimeout(setFilterButton)
        }, 100)
    })

    // typed js
    var typed = new Typed("#typed-box", {
        stringsElement: "#typed-texts",
        typeSpeed: 40,
        backSpeed: 40,
        backDelay: 2000,
        startDelay: 100,
        loop: true
    });

    // index toggle
    isTrue = true
    function sidebarToggle() {
        if ($(".sidebar").hasClass("sidebar-close")) {
            $(".sidebar").removeClass("sidebar-close")
            $(".section.home").removeClass("close")
        } else {
            $(".sidebar").addClass("sidebar-close")
            $(".section.home").addClass("close")
        }
        if (isTrue) {
            // glass wrap
            $(".wrapper__glass").addClass("close")
            $(".wrapper__glass").removeClass("open")
            // toggle menu button
            $(".sidebar__toggle-div").addClass("close")
            $(".sidebar__toggle-div").removeClass("open")
            $(".sidebar__toggle").addClass("close")
            $(".sidebar__toggle").removeClass("open")
            isTrue = !isTrue
        } else if (!isTrue) {
            $(".wrapper__glass").addClass("open")
            $(".wrapper__glass").removeClass("close")

            // toggle menu button
            $(".sidebar__toggle-div").addClass("open")
            $(".sidebar__toggle-div").removeClass("close")
            $(".sidebar__toggle").addClass("open")
            $(".sidebar__toggle").removeClass("close")
            isTrue = !isTrue
        }
    }
    $(".sidebar__toggle-div, .wrapper__glass").on("click", function () {
        sidebarToggle()
    })

    // sidebar links
    $(".sidebar__nav-link").on("click", function (e) {
        e.preventDefault()
        $(".window__wrapper").addClass("gone")
        let sectionAnimate = setTimeout(() => {
            $(".window__wrapper").removeClass("gone")
            $("input").val("")
            clearTimeout($(sectionAnimate))
        }, 1000);
        let sidebarTimer = setTimeout(() => {
            sidebarToggle();
            clearTimeout(sidebarTimer)
        }, 600);

        // active button
        let delayRemoveLink = $(this)
            .parent()
            .siblings()
            .find(".sidebar__nav-link")
        let delayAddLink = $(this)
        let delayLinkFoo = setTimeout(() => {
            $(delayRemoveLink)
                .parent()
                .siblings()
                .find(".sidebar__nav-link")
                .removeClass("active-page")
            $(delayAddLink).addClass("active-page");
            toTopBody()
            clearTimeout(delayLinkFoo)
        }, 500);

        // change sections
        let href = $(this).attr("href")
        let clickedLink = setTimeout(() => {
            $(".section").removeClass("active-section")
            $(href).addClass("active-section")
            if (!$(".sidebar__nav-link.link-home").hasClass("active-page")) {
                $("footer.footer").removeClass("close")
            } else {
                $("footer.footer").addClass("close")
            };
            clearTimeout(clickedLink)
        }, 600);
    })

    $(window).on('scroll', function () {
        if ($("#services").hasClass("active-section")) {
            let counterSet = setTimeout(() => {
                counter();
                clearTimeout(counterSet)
            }, 300);
        }
    });

    // cards
    let cards = [
        {
            title: "The new brand Identity",
            date: "January 30. 2017",
            blogDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, impedit.",
            img: "./img/user1.jpg"
        }, {
            title: "Make it clean and simple",
            date: "January 30. 2017",
            blogDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, impedit.",
            img: ""
        }, {
            title: "A day alone at the office",
            date: "January 30. 2017",
            blogDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, impedit.",
            img: "./img/user1.jpg"
        }, {
            title: "My amazing office desk",
            date: "January 30. 2017",
            blogDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, impedit.",
            img: "./img/user.jpg"
        }, {
            title: "A day alone at the office",
            date: "January 30. 2017",
            blogDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, impedit.",
            img: "./img/user1.jpg"
        }, {
            title: "Some Amazing Buildings",
            date: "January 30. 2017",
            blogDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, impedit.",
            img: ""
        }, {
            title: "Credibly brand standarts",
            date: "January 30. 2017",
            blogDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, impedit.",
            img: "./img/user1.jpg"
        }, {
            title: "Inspired by typography",
            date: "January 30. 2017",
            blogDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, impedit.",
            img: ""
        }, {
            title: "The new brand Identity",
            date: "January 30. 2017",
            blogDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, impedit."
        }
    ]

    let commentNum = 0
    for (let i = 0; i < cards.length; i++) {
        $("#blogCards").append(
            `<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 blog__column"> 
        <div class="blog__card"><a class="blog__card-link" href="Blog-Simple-${i +
            1}">   
        <img class="blog__card-img" src=${cards[i].img || "./img/user.jpg"}><div class="blog__card-body"> 
        <h1 class="blog__card-title">${cards[i].title}</h1>
        <h1 class="blog__card-date">${cards[i].date}</h1>
        <h1 class="blog__card-text">${cards[i].blogDescription}</h1><div class="blog__bottom">
        <img class="blog__bottom-img" src="./img/user.jpg"> 
        <span class="blog__card-author">By Aazztech</span>
        <span class="blog__card-water">Design</span></div></div></a></div></div>`
        ) 

        // zero Img
        if (cards[i].img == undefined) {
            $($(".blog__card-img")[i]).addClass("zeroImg")
            $($(".blog__card-body")[i]).addClass("zeroBodyTop")
        }

        // simple card pages
        $(".page").append(
            `
    <section class="section blog-simple" id="Blog-Simple-${i + 1}">
    <div class="container"><div class="section__title"><h1 class="title">Single Post</h1>
    <p class="subtitle">Lorem ipsum dolor sit amet.</p></div><div class="row comments-parent">
    <div href="#" class="col-xl-8 col-12 col-md-12 col-lg-12 blog-simple__column">
    <div class="blog-simple__card">
    <a href="#" class="blog-simple__card-back"><i class="fa fa-long-arrow-left"></i></a>
    <img class="blog-simple__card-img" src=${cards[i].img || "./img/user.jpg"}>
    <div class="blog-simple__card-body"><h1 class="blog-simple__card-date">January 30. 2017</h1>
    <h1 class="blog-simple__card-title">${cards[i].title}</h1><div class="blog-simple__bottom">
    <img class="blog-simple__bottom-img" src="./img/user.jpg">
    <span class="blog-simple__card-author">By Aazztech</span>
    <span class="blog-simple__card-water">Design</span></div>
    <h1 class="blog-simple__card-text"> 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, atque reprehenderit, dicta rem 
    accusamus alias nisi asperiores ratione cumque non numquam odio! Optio neque voluptatum 
    sed. Odit non suscipit rem facilis dolore, numquam at voluptas quibusdam dolorem, natus 
    dolores neque veritatis dolorum omnis! Ducimus blanditiis provident voluptas at commodi 
    veniam accusantium, ea, itaque, ipsam cupiditate temporibus sint labore vero sed. Lorem ipsum 
    dolor sit amet consectetur, adipisicing elit. Delectus vel laboriosam eveniet fugit, voluptatem 
    blanditiis voluptatibus similique ad error vitae qui cum quos hic? Perferendis sit unde velit fugiat 
    nam, ipsam molestias vero consequatur autem suscipit harum quam itaque ipsum?
    <span class="blog-simple__card-description">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eum vero
    reprehenderit tempora distinctio velit quo itaque?</span> 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iste assumenda quod nam voluptate, 
    esse totam ducimus distinctio expedita possimus voluptates reprehenderit cum in illo nesciunt
    commodi adipisci blanditiis autem?</h1></div>
    <div class="blog-simple__card-comments">
    <span class="blog-simple__card-comments-link comment-num">${commentNum} comments</span>
    <div class="blog-simple__card-comments-icos"><span>Share : </span>
    <a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-google"></i></a><a href="#"><i class="fa fa-linkedin"></i></a>
    </div></div></div></div>
    <div class="col-xl-4 col-12 col-md-12 col-lg-12 blog-simple__column">
    <div class="blog-simple__card blog-simple__search">
    <h1 class="blog-simple__search-title">Search</h1><div class="blog-simple__search-input">
    <form class="blog-simple__search-input-wrapper">
    <input id="search-text" class="form-control" type="search" placeholder="Type & hit Enter">
    <button id="search-button" type="submit"><i class="fa fa-search"></i></button></form></div>
    <h1 class="blog-simple__search-title">Latest Posts</h1><div class="blog-simple__post">
    <a href="#" class="blog-simple__post-item"><img src="./img/user.jpg">
    <div class="blog-simple__post-item-texts">
    <h1 class="blog-simple__post-item-title">Galery A shadowy flight into the world
    </h1>
                                <h1 class="blog-simple__post-item-date">Dec 23. 2016 / By
                                    <b>Aazztech</b>
                                </h1>
                            </div>
                        </a>
                        <a href="#" class="blog-simple__post-item">
                            <img src="./img/user.jpg">
                            <div class="blog-simple__post-item-texts">
                                <h1 class="blog-simple__post-item-title">Galery A shadowy flight into the world
                                </h1>
                                <h1 class="blog-simple__post-item-date">Dec 23. 2016 / By
                                    <b>Aazztech</b>
                                </h1>
                            </div>
                        </a> 
                        <a href="#" class="blog-simple__post-item">
                            <img src="./img/user.jpg">
                            <div class="blog-simple__post-item-texts">
                                <h1 class="blog-simple__post-item-title">Galery A shadowy flight into the world
                                </h1>
                                <h1 class="blog-simple__post-item-date">Dec 23. 2016 / By
                                    <b>Aazztech</b>
                                </h1>
                            </div>
                        </a>
                        <a href="#" class="blog-simple__post-item">
                            <img src="./img/user.jpg">
                            <div class="blog-simple__post-item-texts">
                                <h1 class="blog-simple__post-item-title">Galery A shadowy flight into the world
                                </h1>
                                <h1 class="blog-simple__post-item-date">Dec 23. 2016 / By
                                    <b>Aazztech</b>
                                </h1>
                            </div>
                        </a>
                    </div>
                    <h1 class="blog-simple__search-title">Categories</h1>
                    <ul class="blog-simple__categories">
                        <li class="blog-simple__categories-item">Web Design</li>
                        <li class="blog-simple__categories-item">Photoshop</li>
                        <li class="blog-simple__categories-item">After Effect</li>
                        <li class="blog-simple__categories-item">Dreamviewer</li>
                    </ul>
                    <h1 class="blog-simple__search-title">Tags</h1>
                    <div class="blog-simple__tags">
                        <div class="row">
                            <div class="col-4 col-sm-3 col-lg-3 col-xl-4 blog-simple__tags-item">
                                <span>Fashion</span></div>
                            <div class="col-4 col-sm-3 col-lg-3 col-xl-4 blog-simple__tags-item">
                                <span>Design</span></div>
                            <div class="col-4 col-sm-3 col-lg-3 col-xl-4 blog-simple__tags-item">
                                <span>Fashion</span></div>
                            <div class="col-4 col-sm-3 col-lg-3 col-xl-4 blog-simple__tags-item">
                                <span>Travel</span></div>
                            <div class="col-4 col-sm-3 col-lg-3 col-xl-4 blog-simple__tags-item">
                                <span>Fashion</span></div>
                            <div class="col-4 col-sm-3 col-lg-3 col-xl-4 blog-simple__tags-item">
                                <span>Fashion</span></div>
                            <div class="col-4 col-sm-3 col-lg-3 col-xl-4 blog-simple__tags-item">
                                <span>Fashion</span></div>
                            <div class="col-4 col-sm-3 col-lg-3 col-xl-4 blog-simple__tags-item">
                                <span>Fashion</span></div>
                            <div class="col-4 col-sm-3 col-lg-3 col-xl-4 blog-simple__tags-item">
                                <span>Branding</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div href="#" class="col-xl-8 col-12 col-md-12 col-lg-12 blog-simple__column">
                <div class="blog-simple__card blog-simple__comments">
                    <div class="blog-simple__comments-wrapper padding-0 authors">
                        <img class="blog-simple__comments-img" src="./img/user.jpg" alt="">
                        <div class="blog-simple__comments-texts">
                            <span class="blog-simple__comments-title">Aazztech</span>
                            <span class="blog-simple__comments-text">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cupiditate nostrum nobis optio magnam quasi a ex est fuga
                                excepturi sed</span>
                            <span class="blog-simple__comments-icos">
                                <a href="#">
                                    <i class="fa fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i class="fa fa-facebook"></i>
                                </a>
                                <a href="#">
                                    <i class="fa fa-google"></i>
                                </a>
                                <a href="#">
                                    <i class="fa fa-linkedin"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div> 
            <div href="#" class="col-xl-8 col-12 col-md-12 col-lg-12 blog-simple__column">
                <div class="blog-simple__card blog-simple__comments comments-user">
                    <h1 class="blog-simple__search-title for-comments comment-num">${commentNum} comments</h1> 
                </div>
            </div> 
            <div href="#" class="col-xl-8 col-12 col-md-12 col-lg-12 blog-simple__column">
                <div class="blog-simple__card blog-simple__comments">
                    <h1 class="blog-simple__search-title for-comments">Leave a Reply</h1>
                    <form class="row blog-simple__comments-wrapper leave-reply" id="reply-form">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-12 blog-simple__comments-input-div">
                        <input id="reply-name" class="form-control" type="text" placeholder="Name">
                    </div> 
                    <div class="col-lg-6 col-md-6 col-sm-6 col-12 blog-simple__comments-input-div">
                        <input id="reply-email" class="form-control" type="email" placeholder="Email">
                    </div>
                    <div class="col-lg-12 col-md-12 col-12 blog-simple__comments-input-div">
                        <textarea id="reply-comment" class="form-control" type="text" placeholder="Your text here. . ."></textarea>
                    </div>
                    <button id="reply-button" class="blog-simple__comments-button" type="submit">Submit Now</button>
                </form>
                </div>
            </div>
        </div>
    </div>
</section>
    `
        )
        if (cards[i].img == undefined) {
            $($(".portfolio__img-item")[i]).attr("src", "./img/user.jpg")
            $($(".img-div-item")[i]).attr("src", "./img/user.jpg")
        }
    }

    $(".page").on("click", ".blog__card-link", function (e) {
        e.preventDefault() 
        $(".window__wrapper").addClass("gone")
        let sectionAnimate = setTimeout(() => {
            $(".window__wrapper").removeClass("gone")
            $("input").val("")
            clearTimeout(sectionAnimate)
        }, 1000);

        let clickedSimple = setTimeout(() => {
            let blogSimpleLink = $(this).attr("href")
            $(".blog").removeClass("active-section")
            $("#" + blogSimpleLink).addClass("active-section")
            toTopBody()
            clearTimeout(clickedSimple)
        }, 600);
    })

    $(".page").on("click", ".blog-simple__card-back", function (e) {
        e.preventDefault()
        $(".window__wrapper").addClass("gone")
        let sectionAnimate = setTimeout(() => {
            $(".window__wrapper").removeClass("gone")
            $("input").val("")
            clearTimeout(sectionAnimate) 
        }, 1000);

        let clickedSimpleBack = setTimeout(() => {
            $(".blog-simple").removeClass("active-section")
            $(".blog").addClass("active-section")
            toTopBody()
            clearTimeout(clickedSimpleBack)
        }, 600);
    })

    // reply comments
    let localDate = new Date()
    let monthArray = [
        'Jan',
        'Feb',
        'March',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ]
    let month = monthArray[localDate.getMonth()]
    let day = localDate.getDate()
    let year = localDate.getFullYear()
    function commentConst(commentName, comment) {
        return `
        <div class="blog-simple__comments-wrapper padding-0">
        <span class="blog-simple__comments-reply">Reply</span>
        <img class="blog-simple__comments-img" src="./img/user.jpg" alt="">
        <div class="blog-simple__comments-texts">
            <span class="blog-simple__comments-title">${commentName}</span>
            <h1 class="blog-simple__comments-date">${month} ${day}. ${year} / By</h1>
            <span class="blog-simple__comments-text">${comment}</span>
        </div>
    </div>`
    }

    $(".page").on("click", "#reply-button", function (e) {
        e.preventDefault()

        let userName = $(this)
            .parents("#reply-form")
            .find("#reply-name")
            .val()
        let userEmail = $(this)
            .parents("#reply-form")
            .find("#reply-email")
            .val()
        let userComment = $(this)
            .parents("#reply-form")
            .find("#reply-comment")
            .val()

        if (userName != "" && userEmail != "" && userComment != "") {
            $(this)
                .parents(".blog-simple")
                .find(".comment-num")
                .text(`${++commentNum} comments`) 

            $(this)
                .parents(".row.comments-parent")
                .find(".blog-simple__comments.comments-user")
                .append(commentConst(userName, userComment))
        }
        userName = $(this)
            .parents("#reply-form")
            .find("#reply-name")
            .val("")
        userEmail = $(this)
            .parents("#reply-form")
            .find("#reply-email")
            .val("")
        userComment = $(this)
            .parents("#reply-form")
            .find("#reply-comment")
            .val("")
    })

    $(".page").on(
        "keyup",
        "#reply-name, #reply-comment, #reply-email",
        function (e) {
            e.preventDefault()
            if (e.key == "Enter") {
                let userName = $(this)
                    .parents("#reply-form")
                    .find("#reply-name")
                    .val()
                let userEmail = $(this)
                    .parents("#reply-form")
                    .find("#reply-email")
                    .val()
                let userComment = $(this)
                    .parents("#reply-form")
                    .find("#reply-comment")
                    .val()
                if (userName != "" && userEmail != "" && userComment != "") {
                    $(this)
                        .parents(".blog-simple")
                        .find(".comment-num")
                        .text(`${++commentNum} comments`)
                    $(this)
                        .parents(".row.comments-parent")
                        .find(".blog-simple__comments.comments-user")
                        .append(commentConst(userName, userComment))
                }
                userName = $(this)
                    .parents("#reply-form")
                    .find("#reply-name")
                    .val("")
                userEmail = $(this)
                    .parents("#reply-form")
                    .find("#reply-email")
                    .val("")
                userComment = $(this)
                    .parents("#reply-form")
                    .find("#reply-comment")
                    .val("")
            }
        }
    )

    // portfolio simples
    let portfolioSimples = [
        {
            img: "./img/user1.jpg",
            category: "wordpress"
        }, {
            category: "web"
        }, {
            img: "./img/user1.jpg",
            category: "uxui"
        }, {
            category: "web"
        }, {
            img: "./img/user1.jpg",
            category: "uxui"
        }, {
            category: "brending"
        }, {
            img: "./img/user1.jpg",
            category: "web"
        }, {
            img: "./img/user.jpg",
            category: "uxui"
        }, {
            img: "./img/user1.jpg",
            category: "web"
        }
    ]

    for (let i = 0; i < portfolioSimples.length; i++) {
        $(".portfolio__filter-wrapper").append(
            `
        <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 portfolio__column ${portfolioSimples[i].category}">
            <a href="modalPortfolio-${i +
            1}" class="portfolio__img"> 
                <img class="portfolio__img-item" src=${portfolioSimples[i].img || "./img/user.jpg"} alt="">
                <div class="content">
                    <h1 class="content-header">Web Development Project</h1>
                    <span>Client: Jonathan Doe</span>
                </div>
            </a>
        </div>
            `
        )

        $(".page").append(
            `
    <section class="section Portfolio-Simple" id="modalPortfolio-${i + 1}">
    <div class="container Portfolio-Simple__div"> 
        <div class="section__title Portfolio-Simple__title">
            <h1 class="title">Portfolio Single</h1>
            <p class="subtitle">Lorem ipsum dolor sit amet.</p>
        </div> 
        <div class="row Portfolio-Simple__wrapper">
            <div class="col-lg-4 col-md-4 col-sm-12 col-12 Portfolio-Simple__column">
                <div class="row">  
                    <div class="col-lg-12 col-12 col-sm-7 col-md-12 column">
                        <h1 class="modal__header">Web Development</h1>
                        <span class="modal-random-text">Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. A dolor sit nostrum placeat tempora quo consectetur atque. Est
                            reiciendis labore ipsa consequatur voluptatibus aspernatur, reprehenderit veniam
                            accusantium quibusdam voluptas. Perspiciatis perferendis optio quod.</span>
                    </div>
                    <div class="col-lg-12 col-12 col-sm-5 col-md-12 column">
                        <h1 class="detail__header">
                            <b>Project Details</b>
                        </h1>
                        <span class="detail-text">
                            <b>Client :
                            </b>
                            Jonathan Doe</span>
                        <span class="detail-text">
                            <b>Agency :
                            </b>
                            Shaken Technology</span>
                        <span class="detail-text">
                            <b>Date :
                            </b>
                            24 Dec 2016</span>
                        <span class="detail-text">
                            <b>Share :
                            </b>
                            <a href="#">
                                <i class="fa fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="fa fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i class="fa fa-google"></i>
                            </a>
                            <a href="#">
                                <i class="fa fa-linkedin"></i>
                            </a>
                        </span>
                        <span class="booking-btn">
                            <a href="#"><b>Launch project</b></a>
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12 col-12 Portfolio-Simple__column for-image">
            <div class="img-div">
            <a href="#" class="Portfolio-Simple__back"><i class="fa fa-long-arrow-left"></i></a>
                <img class="img-div-item" src=${portfolioSimples[i].img || "./img/user.jpg"} alt="">                
            </div> 
                <div class="modal-navigator">
                    <span class="modal-prev">
                        <i class="fa fa-chevron-left"></i>
                        Previous
                    </span>  
                    <span class="modal-next">
                        Next
                        <i class="fa fa-chevron-right"></i> 
                    </span>
                </div>
            </div>
        </div>
    </div>
</section>
    `
        )
        if (portfolioSimples[i].img == undefined) {
            $($(".portfolio__img-item")[i]).attr("src", "./img/user.jpg")
            $($(".img-div-item")[i]).attr("src", "./img/user.jpg")
        }
    }

    $(".portfolio__filter-wrapper").on("click", ".portfolio__img", function (e) {
        e.preventDefault()
        $(".window__wrapper").addClass("gone")
        let sectionAnimate = setTimeout(() => {
            $(".window__wrapper").removeClass("gone")
            clearTimeout(sectionAnimate)
        }, 1000);

        let clickedSimplePortfolio = setTimeout(() => {
            $(".portfolio").removeClass("active-section")
            let portfolioSimplesLink = $(this).attr("href")
            $("#" + portfolioSimplesLink).addClass("active-section")
            toTopBody()
            clearTimeout(clickedSimplePortfolio)
        }, 600);
    })

    $(".page").on("click", ".Portfolio-Simple__back", function (e) {
        e.preventDefault()
        $(".window__wrapper").addClass("gone")
        let sectionAnimate = setTimeout(() => {
            $(".window__wrapper").removeClass("gone")
            clearTimeout(sectionAnimate)
        }, 1000);
        let clickedPortfolioBack = setTimeout(() => {
            $(".Portfolio-Simple").removeClass("active-section")
            $(".portfolio").addClass("active-section")
            toTopBody()
            clearTimeout(clickedPortfolioBack)
        }, 600);
    })

    $(".page").on("click", ".modal-next", function () {
        $(".window__wrapper").addClass("gone")

        let sectionAnimate = setTimeout(() => {
            $(".window__wrapper").removeClass("gone")
            clearTimeout(sectionAnimate)
        }, 1000);

        let clickedSimplePortfolio = setTimeout(() => {
            $(this)
                .parents(".Portfolio-Simple")
                .removeClass("active-section")
            if (Number($(this).parents(".Portfolio-Simple").attr("id").slice(-1)) < portfolioSimples.length) {
                $(this)
                    .parents(".Portfolio-Simple")
                    .next()
                    .addClass("active-section")
            } else {
                $(".Portfolio-Simple")
                    .eq(0)
                    .addClass("active-section")
            }
            toTopBody()
            clearTimeout(clickedSimplePortfolio)
        }, 600);
    })

    $(".page").on("click", ".modal-prev", function () {
        $(".window__wrapper").addClass("gone")

        let sectionAnimate = setTimeout(() => {
            $(".window__wrapper").removeClass("gone")
            clearTimeout(sectionAnimate)
        }, 1000);

        let clickedSimplePortfolio = setTimeout(() => {
            $(this)
                .parents(".Portfolio-Simple")
                .removeClass("active-section")
            if (Number($(this).parents(".Portfolio-Simple").attr("id").slice(-1)) != 1) {
                $(this)
                    .parents(".Portfolio-Simple")
                    .prev()
                    .addClass("active-section")
            } else {
                $(".Portfolio-Simple")
                    .eq(-1)
                    .addClass("active-section")
            }
            toTopBody()
            clearTimeout(clickedSimplePortfolio)
        }, 600);
    })

});