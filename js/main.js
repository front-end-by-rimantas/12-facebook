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
                <img src="img/${userInfo.photo}" alt="">
                <div class="texts">
                    <div class="author">
                        <a href="#${userInfo.url}">${userInfo.name} ${userInfo.surname}</a>
                    </div>
                    <div class="date">6hrs <- ${date}</div>
                </div>
                <div class="actions">
                    <i class="fa fa-ellipsis-h"></i>
                </div>
            </header>`;
    return HTML;
}

function renderContent( data ) {
    var HTML = '',
        normal = false;
    if ( data.img ) {
        normal = true;
    }
    HTML += `<section>
                ${ renderContentText( data.text, normal ) }
                ${ renderContentGallery( data.img ) }
            </section>`;
    return HTML;
}

function renderContentText( data, normal=false ) {
    var HTML = '',
        text_min = 100,
        text_med = 250,
        text_max = 300,
        textClass = '',
        text = data.value,
        orginalText = text;
        
    if ( text.length < text_min &&
         normal === false ) {
        textClass = 'big-text';
    }
    if ( text.length > text_max ) {
        text = readableText( text, text_med ) + '...<span class="read-more">Read more</span>';
    }
    if ( data.background &&
         normal === false ) {
        textClass += ` text-bg bg-${data.background}`;
    }

    HTML += `<div class="post-text ${textClass}" data-text="${orginalText}">
                ${text}
            </div>`;
    return HTML;
}

function readableText( text, limit ) {
    text = text.slice(0, limit);

    var ar_tarpas = 'ne',
        position = 0;
    while ( ar_tarpas === 'ne' ) {
        if ( text[ text.length - position - 1 ] === ' ' ) {
            ar_tarpas = 'taip';
        } else {
            position++;
        }
    }
    text = text.slice(0, limit - position - 1);
    
    return text;
}

function renderContentGallery( data ) {
    var HTML = '',
        galleryClass = '';

    if ( data === undefined ) {
        return HTML;
    }

    if ( data.length > 1 ) {
        galleryClass = `gallery-${data.length}`;
    }
    if ( data.length > 3 ) {
        galleryClass = `gallery-4`;
    }

    HTML += `<div class="post-gallery ${galleryClass}">`;
    data.forEach(photo => {
        HTML += `<div class="post-image" style="background-image: url(img/posts/${photo});"></div>`;
    });
    if ( data.length > 4 ) {
        HTML += `<div class="image-more">+${data.length - 4}</div>`;
    }
    HTML += `</div>`;
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

function showAllText( event ) {
    console.log('read more clicked');
    console.log( event );
    
}

document.querySelectorAll('.read-more').forEach(link => {
    this.addEventListener('click', showAllText);
    // kame skirtumas??? :O
    // this.addEventListener('click', showAllText);
});;