AFRAME.registerComponent("createbuttons", {
    init: function() {
      
      var button1 = document.createElement("button");
      button1.innerHTML = "ORDER NOW";
      button1.setAttribute("id", "order-button");
      button1.setAttribute("class", "btn btn-danger ml-3 mr-3");
  
      var button2 = document.createElement("button");
      button3.innerHTML = "ORDER SUMMARY";
      button3.setAttribute("id", "order-summary-button");
      button3.setAttribute("class", "btn btn-danger ml-3");

      var button3 = document.createElement("button");
    button3.innerHTML = "RATE NOW";
    button3.setAttribute("id", "rating-button");
    button3.setAttribute("class", "btn btn-danger ml-3 mr-3");
  
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.appendChild(button2);
      buttonDiv.appendChild(button1);
    }
  });