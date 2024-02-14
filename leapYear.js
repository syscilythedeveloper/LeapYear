function isLeap(year) {
    

        
        //Write your code here.    
        if (year % 4 === 0 && year % 100 != 0 && year % 400 === 0){
            var msg = "Leap year." 
        }
        if (year % 4 === 0 && year % 100 !=0) {
            var msg = "Not leap year."
        }
        if (year %4 ===0){
            var msg = "Leap year."
        }
        if (year % 4 != 0 ){
            var msg = "Not leap year."
        }
        return msg
    
        
    

    
    }