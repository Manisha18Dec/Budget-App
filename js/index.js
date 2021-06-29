$(document).ready(function () {
  $("#budget-submit").click(function () {
    var budget = $("#budget-input").val();
    if (budget == "" || Number(budget) < 0) {
      $("#budgetError").text("Value Cannot be Empty Or Negative");
      $("#budgetError").css("background", "pink");
      $("#budgetError").fadeToggle(slow);
      return false;
    }
  });
});

$(document).ready(function () {
  $("#expense-submit").click(function () {
    var budget = $("#amount-input").val();
    if (budget == "" || Number(budget) < 0) {
      $("#amountError").text("Value Cannot be Empty Or Negative");
      $("#amountError").css("background", "pink");
      $("#amountError").fadeToggle(slow);

      return false;
    }
  });
});

dataRender();
function dataRender() {

  var data = localStorage.getItem("Budget App");
  if (data) {
    data = JSON.parse(data);
  } else {
    data = [];
  }

  var totalExpenseAmount = 0;
   var totalGst=0;
  const logData = [{}];
  for (var i = 0; i < data.length; i++) {
    // console.log(data[i])
    var budget = parseInt(data[i].budget);

    const arr = data[i].expenses;
    for (var j = 0; j < arr.length; j++) {
      if(isNaN(arr[j].gst)){
        continue;
      }
       console.log(typeof arr[j].amount);
        console.log(typeof arr[j].gst);
        var x=arr[j].gst;
        console.log(x);
       totalGst +=parseFloat(arr[j].gst)
       console.log("totalGst",totalGst);
        
        totalExpenseAmount += parseInt(arr[j].amount);
      console.log("totalExpenseAmount", totalExpenseAmount);
        

        var TotalGstExpenses=totalGst+totalExpenseAmount;
        console.log("TotalGstExpenses",TotalGstExpenses);
        
        var Tbalance = budget - TotalGstExpenses;
        console.log("Tbalance", Tbalance);
    }
  }
  let obj = {
    budget: budget,
    totalExpenseAmount: totalExpenseAmount,
    balance: Tbalance,
     totalGst:totalGst,
     TotalGstExpenses:TotalGstExpenses,

  };
  logData.push(obj);

  for (var i = 0; i < logData.length; i++) {
    $("#budget-amount").html(logData[i].budget);
    $("#balance-amount").html(logData[i].balance);

    $("#expense-amount").html(logData[i].TotalGstExpenses);
  }

  console.log("logData", logData);
}
   function calculateRender(){
    
var data = localStorage.getItem("Budget App");
  if (data) {
    data = JSON.parse(data);
  } else {
    data = [];
  }
   var gst;
   var total
   var title;
  var amount;
   
   var data = localStorage.getItem("Budget App");
  if (data) {
    data = JSON.parse(data);

  } else {
    data = [];
  }
  for (var i = 0; i<data.length;i++){
    const arr = data[i].expenses
    console.log(data[i]);
    for (var j= 0 ; j<arr.length;j++){
    
     
 var x=arr[j].amount;

if(x<1000){
  gst=parseFloat(x)*5/100;
   
   
  total=parseFloat(x)+parseFloat(gst);
   
  console.log(gst,total);
}else if(x>1000 && x<=5000){
  gst=parseFloat(x)*10/100;
   total=parseFloat(x)+parseFloat(gst);
   console.log(gst,total);
}else if(x>5000){
   gst=parseFloat(x)*18/100;
total=parseFloat(x)+parseFloat(gst);
console.log(gst,total);
}else{
      total=parseFloat(x);
 
     
   }  
   arr[j].gst=gst;
 arr[j].total=total;
 


}
 
localStorage.setItem("Budget App", JSON.stringify(data));

}

}







function calculateUser(e) {
  e.preventDefault();
  const balance = $("balance-input").val();
  const budget = $("#budget-input").val();
   const title = $("#expense-input").val();
   const amount = $("#amount-input").val();
$("#budget-submit").click(function(){
    $('input[type="number"]').val('');
      $('.form-control  budget-input').val('');
  });
  var data = localStorage.getItem("Budget App");

  if (data) {
    data = JSON.parse(data);
  } else {
    data = [];
  }

  let newInput = {
    id: uuidv4(),
    budget: budget,
    balance: balance,
    expenses: [],
  };
  data.push(newInput);
  localStorage.setItem("Budget App", JSON.stringify(data));
  // render()
  dataRender();
  // calculateRender();
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}




function addUser(e) {
   calculateRender();
  e.preventDefault();

  // const budget=$("#budget-amount").val();
  const title = $("#expense-input").val();
  const amount = $("#amount-input").val();
    const gst=$("#gst-input").val();
    const total=$("#total-input").val();
 
 $("#expense-submit").click(function(){
    $('#expense-input').val('');
      $('.form-control expense-input').val('');
  });
  $("#expense-submit").click(function(){
    $('input[type="number"]').val('');
      $('.form-control expense-input').val('');
  });

  // $("#edit-submit").hide();
  var data = localStorage.getItem("Budget App");
  if (data) {
    data = JSON.parse(data);
  } else {
    data = [];
  }

  let newInput = {
    id: uuidv4(),
    title: title,
    amount: amount,
       gst:gst,
      total:total,
     
  };
  data[0].expenses.push(newInput);


  console.log(data);
  localStorage.setItem("Budget App", JSON.stringify(data));
  // editRender()
   tableRender();
  dataRender();
    
}



tableRender();
function tableRender() {
   calculateRender();
  var data = localStorage.getItem("Budget App");
  if (data) {
    data = JSON.parse(data);
  } else {
    data = [];
  }
  var content = "";

  for (var i = 0; i < data.length; i++) {
    const arr = data[i].expenses;
    for (var i = 0; i< arr.length; i++) {
      console.log(arr[i].title);
     console.log(arr[i].gst);
       console.log(arr[i].total);

      $("#total-input").html(arr[i].total);
      content +=
        '<tr>' +
        // '<td>'+(i+1)+'</td>'+
         // +'<td>'+arr[i].id+'</td>'+
        "<td>" +
         arr[i].title +
        "</td>" +
        "<td>" +
         arr[i].amount +
        "</td>" +
        "<td>"+
        arr[i].gst+
       " </td>"+
       "<td>"+
       arr[i].total+
       "</td>"+
        
        '<td> <a href="#" class="edit-icon mx-2"style="font-size:20px;color:blue;"><i class="fa fa-edit" id="editBtn" onclick="editRender(\'' +
        arr[i].id +
        "','" +
         arr[i].title +
        "','" +
        arr[i].amount +
        "','" +
        arr[i].gst+
        "','" +
       arr[i].total+
       "','" +
        '\')"></a></i><a href="#" class="edit-icon mx-2"style="font-size:20px;color:red;"><i class="fa fa-trash"onclick="deleteExpense(\'' +
        arr[i].id +
        "','" +
        arr[i].title +
        "','" +
        arr[i].amount +
        "','" +
        arr[i].gst+
        "','" +
       arr[i].total+
       "','" +
        "')\"></a></i> </td>" +
        '</tr>';
    }
  }
  $(".table-row").html(content);

}





function edit(e) {

 
   e.preventDefault();
  
  // const budget=$("#budget-amount").val();
  const title = $("#expense-input").val();
  const amount = $("#amount-input").val();
  const id = $("#custId").val();


  console.log("Click check",e,title,amount,id)

  var data = localStorage.getItem("Budget App");
  if (data) {
    data = JSON.parse(data);
  } else {
    data = [];
  }
  for (var i = 0; i<data.length;i++){
    const arr = data[i].expenses
    for (j= 0 ; j<arr.length;j++){
      console.log("My Check", arr[j]);
      if (arr[j].id == id) {
              arr[j].title = title;
              arr[j].amount = amount;
            } 
           
 
    }
    console.log("Data Budget", data)
    localStorage.setItem("Budget App", JSON.stringify(data));
    
    
  }

 dataRender();
tableRender();
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}




function editRender(editid, title, amount) {
  $("#edit-submit").show();
      $("#expense-submit").hide();
 
  $("#expense-input").val(title);
  $("#amount-input").val(amount);
  $("#custId").val(editid);
 
   

  event.preventDefault();


}

// }

function deleteExpense(deleteid, title, amount) {
   event.preventDefault();
  console.log(deleteid, title, amount);

  var data = localStorage.getItem("Budget App");
  if (data) {
    data = JSON.parse(data);
  } else {
    data = [];
  }
  
  for (var i = 0; i < data.length; i++) {
    const arr = data[i].expenses;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].id == deleteid) {
        arr.splice(i, 1);
        // console.log(arr[i].id)
      }
    }
  }
  localStorage.setItem("Budget App", JSON.stringify(data));
  tableRender();
  dataRender();
  calculateRender();
}
