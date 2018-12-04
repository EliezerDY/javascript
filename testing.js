function Hotel(name, rooms,stars){
	this.name=name;
	this.rooms=rooms;
	this.stars=stars;

	};

var hotel1 =new Hotel('Inn', 100, "&#9734");
var hotel2 =new Hotel('Motel',125, "&#9734 &#9734");
var hotel3 =new Hotel('B and B',150,"&#9734 &#9734 &#9734");
var hotel4 =new Hotel('Homer',175, "&#9734 &#9734 &#9734 &#9734");
 //var hotels=["hotel1","hotel2","hotel3","hotel4"];
 console.log(hotel1.name,hotel1.rooms,hotel1.booked,hotel1.stars);
 var runs;
 // set up initial booked number for each hotel. assuming that booked initially = 0
 var bookedHotel1= 0;
 var bookedHotel2=0;
 var bookedHotel3=0;
 var bookedHotel4=0;


      for( runs=0; runs<10; runs++){
	var randomNum =Math.floor((Math.random() *4) + 1);
	console.log(randomNum);
	 if(randomNum==1){
     bookedHotel1++;
	 }

  	else if (randomNum==2){
  		bookedHotel2++;
  	}

    else if (randomNum==3){
    	bookedHotel3++;
    }

    else{
		bookedHotel4++;
    }
   }
   var avail1=hotel1.rooms-bookedHotel1;
    var avail2=hotel2.rooms-bookedHotel2;
	 var avail3=hotel3.rooms-bookedHotel3;
	  var avail4=hotel4.rooms-bookedHotel4;

   document.getElementById("function1").innerHTML="The name of the hotel is:" +hotel1.name+
   "<br/> The number of rooms of the hotel are:" +hotel1.rooms+"<br/> The rooms booked:"
   + bookedHotel1 + "<br/>The rooms available:" + avail1+"<br/> The rating is:" +hotel1.stars;
    document.getElementById("function2").innerHTML="The name of the hotel is:" +hotel2.name+
   "<br/> The number of rooms of the hotel are:" +hotel2.rooms+"<br/> The rooms booked:"
   + bookedHotel2 + "<br/>The rooms available:"+ avail2+"<br/> The rating is:" +hotel2.stars;
    document.getElementById("function3").innerHTML="The name of the hotel is:" +hotel3.name+
   "<br/> The number of rooms of the hotel are:" +hotel3.rooms+"<br/> The rooms booked:"
   + bookedHotel3 + "<br/>The rooms available:"+ avail3+"<br/> The rating is:" +hotel3.stars;
    document.getElementById("function4").innerHTML="The name of the hotel is:" +hotel4.name+
   "<br/> The number of rooms of the hotel are:" +hotel4.rooms+"<br/> The rooms booked:"
   + bookedHotel4 + "<br/>The rooms available:"+ avail4+"<br/> The rating is:" +hotel4.stars
var todayYear= new Date ();
var year1 = todayYear.getFullYear();
document.getElementById('footer').innerHTML = "<br/> The year is:" + year1;
// addons
var msg='<div class="header"></div>';
msg+='<a id="end" href="#">X</a></div>';
msg += '<div id="msgNote"><img src=sale.gif id="sale"><h3> Plan your vacation now</h3>';
msg += '<hr/>Limited time offer!<br/>';
//msg +='<div> "Book now and save!" </div>';

var elNote=document.createElement('div');
elNote.setAttribute('id', 'note');
elNote.innerHTML = msg;
document.body.appendChild (elNote);

function dismissNote(){
  document.body.removeChild(elNote);
}
var elClose=document.getElementById('end');
elClose.addEventListener('click',dismissNote,false);
// addition2
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        document.getElementById("Btn").style.display = "block";
    } else {
        document.getElementById("Btn").style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}

//third addition
// Get the modal
var modal = document.getElementById('myModal');

//  buttons that opens the modal
var btn1 = document.getElementById("bt1");
var btn2= document.getElementById("bt2");
var btn3 = document.getElementById("bt3");
var btn4 = document.getElementById("bt4");

// close
var span = document.getElementsByClassName("close")[0];
var cancel=document.getElementById("can");
// open the modal
btn1.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
}
btn3.onclick = function() {
    modal.style.display = "block";
}
btn4.onclick = function() {
    modal.style.display = "block";
}


// close the modal
span.onclick = function() {
    modal.style.display = "none";
}
cancel.onclick = function() {
    modal.style.display = "none";
}
//close when click outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
