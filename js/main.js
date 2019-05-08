"use strict";

var msgFeed = document.getElementById('messages'),
    textarea = document.querySelector('#message_editor > textarea'),
    sendBtn = document.querySelector('#message_editor > .btn-send');


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
                    <div class="date">${convertTime( date )}</div>
                </div>
                <div class="actions">
                    <i class="fa fa-ellipsis-h"></i>
                </div>
            </header>`;
    return HTML;
}

function convertTime( miliseconds ) {
    var now = new Date().getTime(),
        diff = Math.round((now - miliseconds) / 1000),
        seconds = diff,
        minutes = seconds / 60,
        hours = minutes / 60,
        days = hours / 24;

    //0s - 14s -> Just now
    if ( seconds < 15 ) {
        return 'Just now';
    }
    // 15s - 59s -> [x]sec
    if ( seconds < 60 ) {
        return seconds+'secs';
    }
    // 1m - 59m -> [x]mim
    if ( minutes < 60 ) {
        return minutes+'min';
    }
    // 1h - 12h -> [x]hrs
    if ( hours < 13 ) {
        return hours+'hrs';
    }
    // 13h - <24h -> 
    if ( hours < 24 ) {
        return 'Today';
    }
    // 24 - <48 -> Yesterday
    if ( hours < 48 ) {
        return 'Yesterday';
    }
    // 48 - 7d -> [x]days 
    if ( days < 8 ) {
        return days+'days ago';
    }
    // 1w - 4w -> [x]weeks ago
    if ( days < 29 ) {
        return Math.floor(days/7)+'weeks ago';
    }
    // 1month - 12month -> [x]12month
    if ( days / 365.25 < 1 ) {
        return Math.floor(days/30.42)+'months ago';
    }
    // 1y - ... -> [x]years ago
    return Math.floor(days / 365.25)+'years ago';
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
    event.path[1].innerHTML = event.path[1].getAttribute('data-text');
}

function replaceSmiles( text ) {
    var msg = text;
    msg = msg.replace(/\:\)/g, '<span class="emoji emoji-smile"></span>');
    return msg;
}

function sendMessage( who='me', msg='' ) {
    if ( msg === undefined || msg === '' ) {
        msg = textarea.value;
    }

    if ( msg === '' ) {
        return;
    }

    if ( typeof(who) !== 'string' ) {
        who = 'me';
    }

    // isvedame i ekrana
    // logic ? true : false
    msgFeed.innerHTML += `<div class="msg-row">
                            <div class="${who === 'me' ? 'my' : 'other'}">${replaceSmiles(msg)}</div>
                        </div>`;

    // turi nuvaziuoti iki zinuciu saraso apacios
    msgFeed.scrollTop = msgFeed.scrollHeight;

    if ( who === 'me' ) {
        // gauna atsakyma
        sendMessage( 'papuga', msg );
    }

    // isvalome editoriu
    return textarea.value = '';
}

document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', showAllText);
    // kame skirtumas??? :O
    // this.addEventListener('click', showAllText);
});

sendBtn.addEventListener('click', sendMessage);