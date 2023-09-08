function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid; // + will convert string into number i.e '1' => 1
    playerConfigOverlayElement.style.display= 'block';
    backdropElement.style.display='block';
}
function closePlayerConfig(){
    playerConfigOverlayElement.style.display= 'none';
    backdropElement.style.display='none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent='';
    formElement.firstElementChild.lastElementChild.value = '';
}
function savePlayerConfig(event){
    event.preventDefault(); // will prevent the refreshing of page when the confim button is pressed
    const formData = new FormData(event.target); // will helps to obtain the data from html page
    const enteredPlayername = formData.get('playername').trim(); // trim() remove extra white space.
     
    if(!enteredPlayername){ //enteredPlayername === ' '
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name';
        return;
    }
    
    updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;

    //if(editPlayer1BtnElement === 1){
   //     players[0].name = enteredPlayername;
  //  }else{
  //      players[1].name = enteredPlayername;
  //  }

    players[editedPlayer-1].name = enteredPlayername;

    closePlayerConfig();
}