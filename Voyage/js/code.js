function reset() {
    divPeople.classList.add('hidden')
    divTransport.classList.add('hidden')
    divHousing.classList.add('hidden')
    divActivities.classList.add('hidden')
    btnPeople.classList.remove('selected')
    btnTransport.classList.remove('selected')
    btnHousing.classList.remove('selected')
    btnActivities.classList.remove('selected')
}

btnPeople.addEventListener('click', function () {
    reset()
    divPeople.classList.remove('hidden')
    btnPeople.classList.add('selected')
})

btnTransport.addEventListener('click', function () {
    reset()
    divTransport.classList.remove('hidden')
    btnTransport.classList.add('selected')
})

btnHousing.addEventListener('click', function () {
    reset()
    divHousing.classList.remove('hidden')
    btnHousing.classList.add('selected')
})

btnActivities.addEventListener('click', function () {
    reset()
    divActivities.classList.remove('hidden')
    btnActivities.classList.add('selected')
})

