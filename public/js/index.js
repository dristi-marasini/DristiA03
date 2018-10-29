




$(document).ready(function(){
$('.submit').click(function(event){



  event.preventDefault()
  console.log('Clicked')


  var email=$('.email').val();
  var subject=$('.subject').val();
  var message=$('.message').val();
var statusElm=$('.status')
statusElm.empty()
if(email.length<=2){
  statusElm.append("<div> Email is not valid</div>")
}
if(subject.length<=2){
  statusElm.append("<div> Subject is not valid</div>")
}
if(message.length<=2){
  statusElm.append("<div>Message is not valid</div>")
}


})




})




