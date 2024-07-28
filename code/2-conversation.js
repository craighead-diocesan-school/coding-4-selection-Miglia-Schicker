// ####################################
// ##### ----- Conversation ----- #####
// ####################################

function conversation() {
  alert('Welcome to my sports discussion program.')

  alert('Do you like running? Answer yes or no.')
  let answer = prompt()

  if (answer == 'yes') {
    alert("That's good - Do you do athletics.")
    let response = prompt()
  if (response == 'yes'){
       alert('Good luck in your next race')
  } else {
    alert('Just for fun then.')
  }
}
   else {
    alert('Do you watch olympic athletes?')
    let ans = prompt()
    if (ans == 'yes'){
      alert("That's good - it's inspiring")
    } else {
      alert("It's not for everyone.")
    }
  }

  alert('Goodbye')
}

function age() {
  // write your code here
let name = prompt('What is your name?')
let age = prompt('How old are you ' + name + '?')
age = Number(age)

if (age > 1 && age < 130){

if (age > 65){
  alert('You can retire now.')
} else if (age < 5){
  alert('You need supervision while using a computer.')
} else {
  alert('You are not old enough to retire yet')
}


if (age >= 18){
  alert('You are old enough to vote')
} else {
  alert('You are not old enough to vote')
}

if (age != 15){
  alert('You are not the same age as me')
}else {
  alert('You are the same age as me!')
}
}
}
