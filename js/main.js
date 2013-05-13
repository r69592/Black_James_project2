/*

James Black
VFW : 1305
Project 2

*/
window.addEventListener("DOMContentLoaded", function(){
   
    localStorage.clear();
    
    // My get id function.
    function $(x) {
        var elementId = document.getElementById(x);
        return elementId;
    }
    
    // Clear storage.
        var storage   = $("clearStorage");
        storage.addEventListener("click", clearStorage);
    
     var clearStorage = function() {
        //confirm("Do you want to clear all data?")
        localStorage.clear();
        console.log("Clear worked");
    }
    
    // Show storage.
        function showData(){
            toggleControls("on");
            var makeDiv = document.createElement("div");
            makeDiv.setAttribute("id", "items");
            var makeList = document.createElement("ul");
            makeDiv.appendChild(makeList);
            document.body.appendChild(makeDiv);
            $("items").style.display = "block";
            for (var i=0, len=localStorage.length; i,len; i++) {
                 var makeLi = document.createElement("li");
                 makeList.appendChild(makeLi);
                 var key = localStorage.key(i);
                 var value = localStorage.getItem(key);
                 var obj = JSON.parse(value);
                 var makeSublist = document.createElement("ul");
                 makeLi.appendChild(makeSublist);
                 for (var n in obj) {
                      var makeSubli = document.createElement("li");
                      makeSublist.appendChild(makeSubli);
                      var optSubText = obj[n][0]+" "+obj[n][1];
                      makeSubli.innerHTML = optSubText;
                 }
            }
        }
                var showStorage = $("displayData");
                showStorage.addEventListener("click", showData);
        
        function toggleControls(n) {
            switch(n) {
                case "on":
                    $("choreForm").style.display = "none";
                    $("clearStorage").style.display = "inline";
                    $("displayData").style.display = "none";
                    $("addNewChore").style.display = "inline";
                    break;
                case "off":
                    $("choreForm").style.display = "block";
                    $("clearStorage").style.display = "inline";
                    $("displayData").style.display = "inline";
                    $("addNewChore").style.display = "none";
                    $("items").style.display = "none";
                    break;
                default:
                    return false;
            }
        }
         
        function getSelectedRadio() {
            var radios = document.forms[0].difficulty
            for(var i=0; i < radios.length; i++) {
                if (radios[i].checked) {
                     difficultyValue = radios[i].value;
               }
            }
        }
        
    // Save data
        var saveButton     = $("saveButton");
        saveButton.addEventListener("click", saveData);
        function saveData() {
        var id             = Math.floor(Math.random()*1000001);
        getSelectedRadio();
        var item           = {}
            item.chore     = ["Chore", $("chore").value];
            item.type      = ["Type", $("type").value];
            item.difficulty= ["difficulty", difficultyValue];
            item.range     = ["Range", $("range").value];
            item.choreDate = ["Chore Date", $("choreDate").value];
            item.notes     = ["Notes", $("notes").value];
            localStorage.setItem(id, JSON.stringify(item));
            alert("Chore Saved!");
    }

    
    
    
    var myArray = [],
    difficultyValue
    ;
   
    
    



});