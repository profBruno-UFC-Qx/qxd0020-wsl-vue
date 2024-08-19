const { createApp, ref, computed } = Vue

  createApp({
    setup() {
      const surfista1 = ref('Gabriel Medina')
      const surfista2 = ref('John John')

      const notasS1 = ref([10, 7, 8, 9])
      const notasS2 = ref([6, 8 , 9, 8])

      const notaDigitada = ref('')
      const surfista = ref('1')

      const ondasS1 = computed(() => {
        const onda1 = [...notasS1.value].sort((a, b) => b - a)[0]
        const onda2 = [...notasS1.value].sort((a, b) => b - a)[1]
        const total = onda1 + onda2
         return {
          onda1,
          onda2,
          total 
         }
      })

      const ondasS2 = computed(() => {
        const onda1 = [...notasS2.value].sort((a, b) => b - a)[0]
        const onda2 = [...notasS2.value].sort((a, b) => b - a)[1]
        const total = onda1 + onda2
         return {
          onda1,
          onda2,
          total 
         }
      })
      
      function eDestaque1(nota) {
        return nota == ondasS1.value.onda1 || nota == ondasS1.value.onda2
      }

      function eDestaque2(nota) {
        return nota == ondasS2.value.onda1 || nota == ondasS2.value.onda2
      }

      function updateScore() {
        if(surfista.value == 1) {
          notasS1.value.push(notaDigitada.value)
        } else {
          notasS2.value.push(notaDigitada.value)
        }
        notaDigitada.value = ''
      }

      return {
        surfista, surfista1, surfista2, notasS1, notasS2, ondasS1, ondasS2, notaDigitada, eDestaque1, eDestaque2, updateScore
      }
    }
  }).mount('#app')