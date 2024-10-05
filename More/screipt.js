
function getName() {
    var b = localStorage.getItem("fname");
    document.getElementById("firstname").value = b;

}
function changepage() {
    let x = document.getElementById("changerquest").value;
    if (x == 'brokentelephoneline') {
        window.location.href = '../Failureoftelephonelines/index.html';
    }
    else if (x == 'nodechanging') {
        window.location.href = '../nodechaning/index.html';
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
