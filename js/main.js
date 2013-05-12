/*

James Black
VFW : 1305
Project 2

*/
window.addEventListener("DOMContentLoaded", function(){
    
    // Clear storage.
        var storage   = $("clearStorage");
        storage.addEventListener("click", clearStorage);
    
     var clearStorage = function() {
        //confirm("Do you want to clear all data?")
        localStorage.clear();
        console.log("Clear worked");
    }
    
    
    
    
    
    // Show storage.
        var showStorage = $("displayData");
        showStorage.addEventListener("click", showData);
        
        function showData(){
            var makeDiv = document.createElement("div");
            makeDiv.setAttribute("id", "items");
            var makeList = document.createElement("ul");
            makeDiv.appendChild(makeList);
            document.body.appendChild(makeDiv);
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
    
    // Save data
        var saveButton     = $("saveButton");
        saveButton.addEventListener("click", saveData);
        function saveData() {
        var id             = Math.floor(Math.random()*1000001);
        var item           = {}
            item.chore     = ["Chore", $("chore").value];
            item.type      = ["Type", $("type").value];
            //item.easy      = ["Easy", $("easy").value];
            //item.medium    = ["Medium", $("medium").value];
            //item.hard      = ["Hard", $("hard").value];
            item.range     = ["Range", $("range").value];
            item.choreDate = ["Chore Date", $("choreDate").value];
            item.notes     = ["Notes", $("notes").value];
            localStorage.setItem(id, JSON.stringify(item));
            alert("Chore Saved!");
    }

    
    // My get id function.
    function $(x) {
        var elementId = document.getElementById(x);
        return elementId;
    }
    
    
    
   
    //localStorage.clear();
    
    



});