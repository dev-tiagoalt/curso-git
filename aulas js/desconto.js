const quantidade = 3
const preco = 50
const total = quantidade * preco
if (total >= 200) {
  console.log(`Desconto de 10% , ficou num valor R$ ${total * 0.9}`)
}
else if (total >= 100) {
  console.log(`Desconto de 5%, ficou num valor R$ ${total * 0.95}`)
}
else {
  console.log('Valor sem desconto')
}




