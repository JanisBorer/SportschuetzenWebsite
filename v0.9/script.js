function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

window.onload = function() {
    var param = getUrlParameter('div');
    var divs = document.querySelectorAll('div[id^="unique-div"]');

    divs.forEach(function(div) {
        if (div.id === 'unique-div' + param) {
            div.classList.remove('hidden');
        } else {
            div.classList.add('hidden');
        }
    });
};