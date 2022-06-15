import holidays from './dates.js'


 let hoje = new Date();

 let today = hoje.toLocaleDateString()
 
 function TodaHoliday(){
 
     let isHoliday=""
 
     for(let i=0; i<holidays.length; i++){
 
 
         if(holidays[i].date===today){
             isHoliday=`Sim, hoje é ${holidays[i].name}`
         }    
     }
     if(isHoliday===""){
         isHoliday="Não, hoje não é feriado"
     }
     return isHoliday
 }

 export default (TodaHoliday)