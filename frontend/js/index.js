function showOptions() {
    document.getElementById('planBtn').style.display = 'none';
    var optionsDiv = document.getElementById('options');
    optionsDiv.style.display = 'block';
}
  
function selectOption(option) {
    // saved option value in localStorage
    localStorage.setItem('selectedOption', option);
    window.location.href = '/html/new_trip.html';
}

function goHome(){
    window.location.href = "http://localhost:4000/home";
}
  