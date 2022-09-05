let screen= document.querySelector('.screen');
let buttons= document.querySelectorAll('.btn');
let clear = document.querySelector('.btn-clear');
let equal = document.querySelector('.btn-equal');
let themechange=document.querySelector('.btn-light');
let input_string="" ;
 
 for(let i=0;i<buttons.length;i++)
 {
  buttons[i].addEventListener('click',function(event){
    input_string+=event.target.value;
    screen.value=input_string;
  })
}

equal.addEventListener('click',function(event){
	if(screen.value!="0")
	{
		input_string=eval(input_string);
	     screen.value=input_stringsz;
	}

})

clear.addEventListener('click',function(event){
	screen.value="0";
	input_string="";
})

themechange.addEventListener('click',function(){

    screen.classList.toggle("screen-light");

    let yellowbtn=document.querySelectorAll(".btn-yellow");
    let greybtn=document.querySelectorAll(".btn-grey");

    for (let i=0;i<yellowbtn.length;++i)
    yellowbtn[i].classList.toggle("btn-light-yellow");

    for (let i=0;i<greybtn.length;++i)
    greybtn[i].classList.toggle("btn-light-grey");  
    
    clear.classList.toggle("btn-light-clear");
    equal.classList.toggle("btn-light-equal");
})

  