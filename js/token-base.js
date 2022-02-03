var token = document.location.href.split('#')[1];

if (!token) {
  token = 'home'
}

$.get(`https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/guests/${token}.json`, function(res) {
  if (res) {
    $('.namespace').html(res);
  } else {
    $('.namespace').html(token);
  }
  $('#main').fadeIn();
});
