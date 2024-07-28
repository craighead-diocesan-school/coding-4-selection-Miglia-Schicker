// ####################################
// ######## ----- Capital ----- #######
// ####################################

function capital() {
  // write your code here
  let name = prompt('What is you name?')
  let answer = prompt ('Quick question ' + name + '. What is the capital of France?')
  let correct = ('Paris')

  if (answer == 'Paris'){
    alert('Thats right ' + name)
  } else {
    alert('Thats not right ' + name)
  }
}
