'use strict';

//curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com
//const userName = $('#userName').val();
const searchUrl = "https://api.github.com";
const userUrl = "/users/";
const userUrl1 = "/repos";

function fetchGitHub() {
  const userName = $('#userName').val();
  console.log(searchUrl + userUrl + userName + userUrl1);
  fetch(searchUrl + userUrl + userName + userUrl1)
    .then(response => response.json())
    .then(responseJson => {
      displayResults(responseJson)
    //.catch(error => alert('Something went wrong'));
});
}

function displayResults(responseJson) {
  //console.log(responseJson);
  let length = responseJson.length;
  for (let i = 0; i < length; i++){
    $('#js-error-message').append(
      `<li>${responseJson[i].name}</li>
      <li><h3><a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a></h3>
      </li>`
  )};
  //display the results section  
  $('#js-error-message').removeClass('hidden');
};


function getUserName() {
  $('form').submit(event => {
    event.preventDefault();
    $('#js-error-message').empty();
    const userName = $('#userName').val();
    console.log(userName);
    fetchGitHub();
  });
}

$(getUserName);