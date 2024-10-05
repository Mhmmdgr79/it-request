
function changepage() {
    let x = document.getElementById("changerquest").value;
    if (x == 'brokentelephoneline') {
        window.location.href = '../Failureoftelephonelines/index.html';
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


function getName() {
    var e = localStorage.getItem("fname");
    document.getElementById("ffname").value = e;

}

function back() {
    Swal.fire({
        title: 'بازگشت به صفحه قبل',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'لغو',
        confirmButtonText: 'بازگشت'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = '../index.html'
        }
    })
}

