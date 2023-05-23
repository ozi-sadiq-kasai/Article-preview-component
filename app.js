const share = document.querySelector('#share-icon').addEventListener('click',display)
const icon = document.querySelector('.pop-up')

let clicked = true
function display(){
  if(clicked === true){
    icon.style.display='block'
    clicked = false
  }
  else{
    icon.style.display="none"
    clicked = true
  }
}


