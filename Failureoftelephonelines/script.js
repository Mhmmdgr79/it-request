
function changepage() {
    let x = document.getElementById("changerquest").value;
    if (x == 'nodechanging') {
        window.location.href = '../nodechaning/index.html';
    }
    else if (x == 'More') {
        window.location.href = '../More/index.html';
    }
    else {
        Swal.fire({
            title: 'لطفا یک گزینه را انتخاب نمایید',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function getName() {
   var h=localStorage.getItem('fname');
   document.getElementById('fffname').value=h;
  
}
function back(){
    Swal.fire({
title: 'بازگشت به صفحه قبل',
icon: 'warning',
showCancelButton: true,
confirmButtonColor: '#3085d6',
cancelButtonColor: '#d33',
cancelButtonText : 'لغو',
confirmButtonText: 'بازگشت'
}).then((result) => {
if (result.isConfirmed) {
window.location.href='../index.html'
}
})
}
