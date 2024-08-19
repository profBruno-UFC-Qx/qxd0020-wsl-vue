window.addEventListener('load', () => {

  const form = document.querySelector('form')
  const inputNota = document.getElementById('onda')
  const selectSurfista = document.getElementById('surfista')

  const notasSurfista1 = []
  const notasSurfista2 = []

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const notaDigitada = inputNota.value
    const surfista = selectSurfista.value

    if(surfista == 1) {
      notasSurfista1.push(parseFloat(notaDigitada))
    } else {
      notasSurfista2.push(parseFloat(notaDigitada))
    }

    updateScore(surfista == 1 ? 's1' : 's2')
  })

  function updateScore(surfista) {

    const ondasSurfista = document.getElementById(`${surfista}_ondas`)
    ondasSurfista.innerHTML = ''

    let onda1 = 0
    let onda2 = 0
    const ondas = []

    let notasSurfista = []
    if(surfista == 's1') {
      notasSurfista = notasSurfista1
    } else {
      notasSurfista = notasSurfista2
    }

    for (const nota of notasSurfista) {

      if(nota > onda1) {
        const exMaior = onda1
        onda1 = nota
        if (exMaior > onda2) {
          onda2 = exMaior
        }
      } else if(nota > onda2) {
        onda2 = nota
      }

      const pOnda = document.createElement('p')
      pOnda.textContent = nota
      ondas.push(pOnda)
    }
    
    
    const placaOnda1 = ondas.find(n => n.textContent == onda1)
    if(placaOnda1) {
      placaOnda1.classList.add('destaque')
    }

    let placaOnda2 = null
    if(onda1 == onda2) {
      placaOnda2 = ondas.filter(n => n.textContent == onda2)[1]
    } else {
      placaOnda2 = ondas.find(n => n.textContent == onda2)
    }

    if(placaOnda2) {
      placaOnda2.classList.add('destaque')
    }
    
    ondasSurfista.append(...ondas)

    updataSurfistaScore(onda1, onda2, surfista)
  }



  function updataSurfistaScore(onda1, onda2, surfista) {

    const onda1S1 = document.getElementById(`${surfista}_onda1`)
    const onda2S1 = document.getElementById(`${surfista}_onda2`)
    const totalS1 = document.getElementById(`${surfista}_total`)

    onda1S1.textContent = onda1
    onda2S1.textContent = onda2
    totalS1.textContent = onda1 + onda2
  }
})