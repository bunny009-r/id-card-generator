var btn=document.querySelector('.btn')
var card=document.querySelector('.card')
btn.addEventListener('click',function(){
card.classList.remove("hide")



document.querySelector('#card_name').innerText="Name    : "+document.querySelector('#name').value
document.querySelector('#card_Id').innerText="Id    : "+document.querySelector('#Id').value
document.querySelector('#card_collage').innerText="Collage : "+document.querySelector('#Collage').value
document.querySelector('#card_location').innerText="Address : "+document.querySelector('#Address').value

var img=document.querySelector('#img')
var card_img=document.querySelector('#card_img')
if(img.files[0])
{
    card_img.src=URL.createObjectURL(img.files[0])
    
}
})