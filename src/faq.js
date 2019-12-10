const data = [
  {
    "a":"This app is designeted to all students of University of Prishtina for education purpose.This app gets data for every activity the students makes both in class but also in home. For details we suggest to read the user manual"
  },
  {
    "a":"This app is designed to work with all types of students and is a good choice trying it out. For review you have section in main page and we will be happy to read your reviews"
  },
  {
    "a":"This platform takes inclass data and also challenges that students make in this app and compare them to see which students work hard to complete challenges"
  },
  {
    "a":"Every parent will have a certain ID which is given by the app but licensed in university of Prishtina,they can log in with the provided data and watch their children work"
  },
  {
    "a":"All the books are listened and are added to search bar. Any link that is broken or not working please adress us at the feedback back at the home page"
  },
  {
    "a":"Absolutely,this platform is totally free to use and also add free for best experience. If someone is willing to pay us you can do that in the donation tab - link here"
  },
  {
    "a":"To actually contact a teacher from this platform, student or parent, can do it by logging in this platform, search for teacher you want and on their profile click send message or take email from their profile and go to mail and send them as mail"
  }
]

$(document).ready(()=>{
  entrypoint();
});

const entrypoint = ()=>{
  $('#6,#7,#8,#9').hide();
  $('#1').on('click',()=>{
    $('#answer').text(data[0].a);
  });
  $('#2').on('click',()=>{
    $('#answer').text(data[1].a);
  });
  $('#3').on('click',()=>{
    $('#answer').text(data[2].a);
  });
  $('#4').on('click',()=>{
    $('#answer').text(data[3].a);
  });
  $('#5').on('click',()=>{
    $('#5').hide();
    $('#6,#7,#8,#9').show();
  });
  $('#6').on('click',()=>{
    $('#answer').text(data[4].a);
  });
  $('#7').on('click',()=>{
    $('#answer').text(data[5].a);
  });
  $('#8').on('click',()=>{
    $('#answer').text(data[6]).a;
  });
  $('#9').on('click',()=>{
    $('#6,#7,#8,#9').hide();
    $('#5').show();
    $('#answer').text('');
  });
}
