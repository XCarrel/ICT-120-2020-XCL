document.addEventListener('DOMContentLoaded', function() {

    inpCode.addEventListener('change', function () {
        if (inpCode.value.length == 6) {
            cmdOk.classList.remove('d-none')
        } else {
            cmdOk.classList.add('d-none')
        }
    })
})
