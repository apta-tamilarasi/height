let h=parseInt(prompt("Enter the height"))

document.write(h+"<br>")

if(h<150){
	document.write("The person is small")
}


else if(h>=150 && h<165){
	document.write("The person is average height")
}


else if(h>=165 && h<=195){
	document.write("The person is taller")
}


else if(h>195){
	document.write("Abnormal height")
}

else{
	document.write("pls enter height")
}