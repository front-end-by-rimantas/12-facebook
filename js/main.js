"use strict";

document.getElementById('feed').innerHTML = renderFeed( posts );

function renderFeed( data ) {
    var HTML = '';

    data.forEach(post => {
        HTML += renderPost( post );
    });

    return HTML;
}

function renderPost( data ) {
    var HTML = '';
    HTML += `<article class="post">
                ${ renderHeader( data.author, data.date ) }
                ${ renderContent( data.content ) }
                ${ renderFooter( data.interactions ) }
            </article>`;
    return HTML;
}

function renderHeader( userInfo, date ) {
    var HTML = '';
    HTML += `<header>
                <img src="" alt="">
                <div class="texts">
                    <div class="author">
                        <a href="#">Vardenis Pavardenis</a>
                    </div>
                    <div class="date">6hrs</div>
                </div>
                <div class="actions">
                    <i class="fa fa-ellipsis-h"></i>
                </div>
            </header>`;
    return HTML;
}

function renderContent( data ) {
    var HTML = '';
    HTML += `<section>
                <div class="post-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit, doloremque, dolorum suscipit cum voluptate quibusdam aut dolor odio rerum vitae corrupti neque ducimus? Rerum vitae corrupti neque ducimus?
                </div>
                <!-- <div class="post-gallery">
                    IMAGES
                </div> -->
            </section>`;
    return HTML;
}

function renderFooter( data ) {
    var HTML = '';
    HTML += `<footer>
                <div class="actions">
                    LIKE + COMMENT
                </div>
                <div class="post-comment">
                    WRITE YOUR COMMENT
                </div>
            </footer>`;
    return HTML;
}