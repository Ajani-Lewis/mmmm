window.onload = function(){

    let clerkID = document.getElementById("clerkID");
    let constID = document.getElementById("constID");
    let pollDivID = document.getElementById("pollDivID");
    let pollStation = document.getElementById("pollStation");
    let cand1 = document.getElementById("candidate1");
    let cand2 = document.getElementById("candidate2");
    let rejBallots = document.getElementById("rejected");
    let totalVotes = document.getElementById("total");

    let submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", clicked);

    inputArray = [clerkID, constID, pollDivID, cand1, cand2, rejBallots, totalVotes];

    function clicked(e){

        e.preventDefault();
        allValid = 0;
        ready = false;

        for(i=0;i<inputArray.length;i++){
            console.log(inputArray[i])
    
            if(!numValidation(inputArray[i].value)){
                inputArray[i].classList.add("red-border");
            }else{
                inputArray[i].classList.remove("red-border");
                allValid += 1;
            }
        }

        if( (!pollStation.value.match(/^[A-Z0-9]+$/)) || pollStation.value =="" ){
            pollStation.classList.add("red-border");
        }else{
            pollStation.classList.remove("red-border");
            allValid+=1;
        }

        console.log(allValid);

        if(allValid==8){
            cand1votes = parseInt(cand1.value);
            cand2votes = parseInt(cand2.value);
            reject = parseInt(rejBallots.value);
            total = parseInt(totalVotes.value);

            sum = cand1votes + cand2votes + reject;

            if(sum == total){
                ready = true;
                totalVotes.classList.remove("red-border");
            }else{
                totalVotes.classList.add("red-border");
            }
        }

    }

    function numValidation(inp){
        inp = inp.trim();

        if(inp == ""){
            return false;
        }else if(isNaN(inp)){
            return false;
        }

        return true;
    }

    
}