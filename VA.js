 const maxCharacters = 1000;
 const url = 'http://api.voicerss.org/';
 const apiKey = '82d1b0ab763d456f99c0b86dd4815d96';
 
 const tooLongError = 'Text exceed 1000 character maximum.';
 const whitespaceError = 'Text must contein text charcters other than empty spaces.';
 
 const buildUrl = (str) => `${url}?key=${apiKey}&src=${str}&f=48khz_16bit_stereo`;

 const tooLong = (str) => str.length >= maxCharacters;
 const emptyString = (str) => str.split('').every(_char => _char === '' || _char === '\n');
 
 const playBtn = () => document.getElementById('play-btn');
 const textInput = () => document.getElementById('text-input');
 const appContainer = () => document.getElementById('app-container');
 const errorContainer = () => document.getElementById('error-messages');
 const clearErrors = () => errorContainer().innerHTML = '';
  
 const listenerFn = ($event) => {
     if($event.target.value || $event.type === 'paste')
         playBtn().disabled = false;
     else
         playBtn().disabled = true;    
 };
 
 const displayErrorMsg = (val) =>{
     const errs=[];
     if (tooLong(val)) errs.push(tooLongError);
     if (emptyString(val)) errs.push(whitespaceError);
     errs.forEach(_err => {
         const div = document.createElement('div');
         div.innerText = _err;
         errorContainer().appendChild(div);
     });
 };

window.onload=function(){
 playBtn().addEventListener('click', () => {
     clearErrors();
     
     if(!emptyString(textInput().value)&& !tooLong(textInput().value)){
         textInput().value = textInput().value.trim();
         new Audio(buildUrl(textInput().value)).play();
         }
     else
         displayErrorMsg(textInput().value);    
 });
};
 
 document.addEventListener('DOMContentLoaded',()=>{
     const containerHeight = appContainer().clientHeigher;
     const docHeight = window.innerHeight;
     appContainer().style.marginTop = `${docHeight/2 - containerHeight/2 - 25}px`;
     textInput().addEventListener('keyup',listenerFn);
     textInput().addEventListener('paste',listenerFn);
     
 });
 