console.log('[João Alison 👨🏽‍💻] App de Hábitos');

const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  
  if (dayExists) {
    alert("Dia já incluso ❌")
    return
  }
  
  alert('Adicionado com sucesso ☑️')
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('nlw11Setup@alison', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("nlw11Setup@alison")) || {}

nlwSetup.setData(data)
nlwSetup.load()
/*Próximo passo:
- fazer com que selecione outros tipos de hábitos
- Fazer com que adicione ou exclua o hábito
*/