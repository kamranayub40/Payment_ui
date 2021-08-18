$('.btn').on('click', function() {
        var value = $('.input').val(); 
        console.log(value)
        var value1 = $('.inputcard').val(); 
        console.log(value1)
        var inputexdate = $('.inputexdate').val(); 
        console.log(inputexdate)
        var inputcvc = $('.inputcvc').val(); 
        console.log(inputcvc)
        inputcvc=""
})
const isEmpty = str => !str.trim().length;
$('.btn').on('click',function(){
    
})

document.getElementsByClassName(".input").addEventListener("input", function() {
  if( isEmpty(this.value) ) {
    console.log( "NAME is invalid (Empty)" )
  } else {
    console.log( `NAME value is: ${this.value}` );
  }
});