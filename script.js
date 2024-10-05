
function radiocheck() {
    var fname = document.getElementById('fname').value;
    localStorage.setItem('fname', fname);
    if (fname == "") {
        Swal.fire({
            title: 'لطفا تمامی فیلدها را پر کنید',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
    else {
        if (document.getElementById('More').checked) {
            window.location.href = './More/index.html';
        }
        else if (document.getElementById('1').checked) {
            window.location.href = './nodechaning/index.html';
        }
        else if (document.getElementById('2').checked) {
            window.location.href = './Failureoftelephonelines/index.html';
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
}


function sendvalue() {
    var b = document.getElementById('fname').value;
    localStorage.setItem("fname", b);
    var e = document.getElementById('fname').value;
    localStorage.setItem("fname", e);
    var h = document.getElementById('fname').value;
    localStorage.setItem("fname", h);

}
