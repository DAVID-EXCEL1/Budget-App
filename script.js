var container = document.querySelector('#container');
var btn = document.querySelector('.btn'); 
var btnPopup = document.querySelector('#btnlogin-popup');
var iconClose = document.querySelector('#icon-close');

btn.addEventListener('click', () => {
    container.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    container.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    container.classList.remove('active-popup');
});



function playMusic() {
    var song = new Audio("Audio/Hillsong_UNITED_-_Fire_Fall_Down_CeeNaija.com_.mp3")
    song.play()
}


function sum() {
    if (personName.value == '' || first.value == '' || second.value == '' || third.value == '' || todayDate.value == '' || fourth.value == '' || fifth.value == '' || sixth.value == '') {
        err.style.display = "block"
    } else {
        var check = confirm("Are You Sure You Are Okay With Your Choices")
        if (check == true) {
            err.style.display = "none"
            var plus = Number(first.value) + Number(second.value) + Number(third.value) + Number(fourth.value) + Number(fifth.value) + Number(sixth.value)
            var cumulative = ("₦" + plus)
            if (plus > 10000) {
                alert("Total Must Be Within The Range Of ₦10,000")
                cumulative = ""
            }
            intro.innerHTML = "Welcome" + document.getElementById('personName').value
            note.innerHTML = "You Can Now Check You Account, For The Withdrawal You Requested. Thank You for Banking With Us👋. Have A Nice Shopping."
            
            if (cumulative < 10000) {
                result.innerHTML = "You Are Entitled To WIthdraw Now"
                result.style.color = "green"
            } else if (cumulative > 10000) {
                result.innerHTML = "Its Not within The Range Of Money Which you Can Withdraw "
                result.style.color = "red"
            }


            document.getElementById('row').value = ""
            // document.getElementById('first').value = ""
            // document.getElementById('second').value = ""
            // document.getElementById('third').value = ""
            // document.getElementById('fourth').value = ""
            // document.getElementById('fifth').value = ""
            // document.getElementById('sixth').value = ""
            // document.getElementById('todayDate').value = ""
        }
    }
}