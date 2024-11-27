document.getElementById('work').addEventListener('click', function() {
  const websites = [
      'https://tinyurl.com/54apvek2', // google mail
      'https://secure.indeed.com/auth', // indeed sign in
      'https://tinyurl.com/mrxecp4e', // reddit curated certificates links
      'https://www.linkedin.com/home', // linkedin sign in
      'https://tinyurl.com/2j924ebn' // jobstreet sign in
  ];

  websites.forEach((url, index) => {
      setTimeout(() => {
          window.open(url, '_blank');
      }, index * 500); // Opens each link with a 500 ms delay
  });
});

document.getElementById('game').addEventListener('click', function() {
  const websites2 = [
      'https://www.youtube.com/',
      'https://www.twitch.tv/',
      'https://hianime.to/', 
      'https://hdtodayz.to/',
      'https://www.animefillerlist.com/shows/detective-conan'
  ];

  websites2.forEach((url, index) => {
    setTimeout(() => {
        window.open(url, '_blank');
    }, index * 500); // Opens each link with a 500 ms delay
  });
});

const workButton = document.getElementById('work');
const gameButton = document.getElementById('game');
const originalBackground = document.getElementById('mainBody');
const hoverBackground2 = 'url(https://images6.alphacoders.com/120/thumb-1920-1204413.jpg)';
const hoverBackground = 'url(https://images.alphacoders.com/131/thumb-1920-1312123.jpg)';

document.body.style.backgroundImage = originalBackground;
workButton.addEventListener('mouseenter', function() {
    document.body.style.backgroundImage = hoverBackground;
});

workButton.addEventListener('mouseleave', function() {
    document.body.style.backgroundImage = originalBackground;
});

gameButton.addEventListener('mouseenter', function() {
  document.body.style.backgroundImage = hoverBackground2;
});

gameButton.addEventListener('mouseleave', function() {
  document.body.style.backgroundImage = originalBackground;
});

