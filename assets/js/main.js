/**
 * Always update my image
 */
function getGithubAvatar() {
  fetch('https://api.github.com/users/emmanuelkant')
    .then(res => res.json())
    .then(data => {
      const avatar = document.querySelector('.avatar').children[0];
      avatar.src = data.avatar_url;
    });
}

function onLoadEvent() {
  if ('addEventListener' in window) {
    window.addEventListener('load', function() { document.body.className = document.body.className.replace(/\bis-preload\b/, ''); });
    document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
  }
}

onLoadEvent();
getGithubAvatar();
