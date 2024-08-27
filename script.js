// Write your JavaScipt code below this line. 
const mainTitle = document.getElementById('main-title') //selected element from line 13
mainTitle.textContent = 'Welcome to Our Cat Adoption Center'

const description = document.getElementById('description')//changes p on on line 14
description.textContent = 'Find your purrfect companion!'

const cat1Button = document.getElementById('cat-1-button') //when you click the button on the console you will see the following message
cat1Button.addEventListener('click', () => {
  console.log('clicked the first cat')
})
const cat2Button = document.getElementById('cat-2-button') //when you click the button on the console you will see the following message
cat2Button.addEventListener('click', () => {
  console.log('clicked the second cat')
})
const cat3Button = document.getElementById('cat-3-button') //when you click the button on the console you will see the following message
cat3Button.addEventListener('click', () => {
  console.log('clicked the third cat')
})

//if you click adopt the button it will remove whiever cat you clicked 
//and a small alert will pop up
document.getElementById('cat-1-button').addEventListener('click', () => {
    const cat = document.getElementById('cat-1')
    alert('Congrats on adopting your new friend!')
    cat.remove()
  })
document.getElementById('cat-2-button').addEventListener('click', () => {
    const cat = document.getElementById('cat-2')
    alert('Congrats on adopting your new friend!')
    cat.remove()
  })
document.getElementById('cat-3-button').addEventListener('click', () => {
    const cat = document.getElementById('cat-3')
    alert('Congrats on adopting your new friend!')
    cat.remove()
  })
