import holidays from './dates.js'

function holidayMonth(id){

    const thisMonth=[]
     for(let i=0; i<holidays.length;i++){
 
         const arrayDate = holidays[i].date.split('/');
         if(arrayDate[0]===id){
             thisMonth.push(holidays[i])
         }
     }
     return thisMonth
 }
 export default holidayMonth
