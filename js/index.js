const form = document.getElementById('survey-form');

const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');

const presentation = document.getElementById('presentation');
const profile = document.getElementById('profile');
const selection = document.getElementById('selection');
const comments = document.getElementById('comments');


const goToProfile = document.getElementById('goToProfile');
const goToSelection = document.getElementById('goToSelection');
const goToComments = document.getElementById('goToComments');

const backToPresentation = document.getElementById('backToPresentation');
const backToProfile = document.getElementById('backToProfile');
const backToSelection = document.getElementById('backToSelection');

for (const input of document.querySelectorAll('input:not(textarea):not([type=submit])')) {
  input.addEventListener('keypress', function (evt) {
    if (evt.keyCode == 13) {
      evt.preventDefault();
    }
  })
}

goToProfile.addEventListener('click', function () {
  if (name.checkValidity()) {
    if (email.checkValidity()) {
      presentation.classList.remove('gobackin');
      presentation.classList.add('hide');
      profile.classList.remove('gobackout');
      profile.classList.add('show');
    } else email.reportValidity();
  } else name.reportValidity();

});

goToSelection.addEventListener('click', function () {
  if (number.checkValidity()) {
    profile.classList.remove('show', 'gobackin');
    profile.classList.add('hide');
    selection.classList.remove('gobackout');
    selection.classList.add('show');
  } else number.reportValidity()
});

goToComments.addEventListener('click', function () {
  selection.classList.remove('show', 'gobackin');
  selection.classList.add('hide');
  comments.classList.remove('gobackout');
  comments.classList.add('show');
});

backToPresentation.addEventListener('click', function () {
  profile.classList.remove('show', 'gobackin');
  profile.classList.add('gobackout');
  presentation.classList.remove('hide');
  presentation.classList.add('gobackin');
});

backToProfile.addEventListener('click', function () {
  selection.classList.remove('show', 'gobackin');
  selection.classList.add('gobackout');
  profile.classList.remove('hide');
  profile.classList.add('gobackin');
});

backToSelection.addEventListener('click', function () {
  comments.classList.remove('show');
  comments.classList.add('gobackout');
  selection.classList.remove('hide');
  selection.classList.add('gobackin');
});