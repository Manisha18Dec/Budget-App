
 $(document).ready(function(){
    $("#expense-submit").click(function(){

a=$("#expense-input").val()
 arr[i].amount = $("#amount-input").val()
    });
  });
/*
function editExpense(id, title,amount) {

event.preventDefault()
  
   $("#expense-input").val(title)
   $("#amount-input").val(amount)


    }
    // content= '<button type="submit"style=" width:150px;border:2px solid red;"  class="btn text-capitalize expense-submit" onclick="editExpense(\''+title+'\',\''+amount+'\')">edit expense</button>';
    
  // $("#editButton").html(content)


  }*/
  
   // tableRender()

*/
function addUser (e) {

  e.preventDefault()
  
   // const budget=$("#budget-amount").val();
   const title=$("#expense-input").val();
  const amount=$("#amount-input").val();
  
   // const balance=$("#balance-amount").val();
     var data=localStorage.getItem("Budget App");
  if(data){
    data=JSON.parse(data);
  }else{
    data=[];
  }
  debugger;
  for( var i=0;i<data.length;i++){
    const arr= data[i].expenses;
    for(var i = 0; i<arr.length; i++) {
    if(arr[i].id == title){
      
      arr[i].title= $("#expenses-input").val()
    
       arr[i].amount=$("#amount-input").val();
      }
     
      }
      
    }
  
 let newInput ={ 
    "id": uuidv4(), 
    "title": title, 
    "amount":amount,
    
    
  }
data[0].expenses.push(newInput)
   
   console.log(data)
localStorage.setItem("Budget App",JSON.stringify(data));
    // editRender()
  tableRender()
     dataRender()

}

function uuidv4() {
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);

  });
}

/*render()
 function render() {
 
  const title=$("#expense-input").val();
  const amount=$("#amount-input").val();
   // const balance=$("#balance-amount").val();
     var data=localStorage.getItem("Budget App");
  if(data){
    data=JSON.parse(data);
  }else{
    data=[];
  }
  


  $('#budget-amount').html(data[i].budget)
 $('#balance-amount').html(data[i].balance)
 // dataRender()
}
*/

/*addRender()
 function addRender() {
 
  const title=$("#expense-input").val();
  const amount=$("#amount-input").val();
   // const balance=$("#balance-amount").val();
    
  

   // const balance=$("#balance-amount").val();
     var data=localStorage.getItem("Budget App");
  if(data){
    data=JSON.parse(data);
  }else{
    data=[];
  }
  
 let newInput ={ 
    "id": uuidv4(), 
    "title": title, 
    "amount":amount,
    
    
  }
data[0].expenses.push(newInput)
   
   console.log(data)
localStorage.setItem("Budget App",JSON.stringify(data));
    // editRender()
  
    // dataRender()

}

function uuidv4() {
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);

  });
}
*/










tableRender()
function tableRender () {
  var data=localStorage.getItem("Budget App");
  if(data){
    data=JSON.parse(data);
  }else{
    data=[];
  }
   var content='';

  for(var i=0;i<data.length;i++){
   
    const arr= data[i].expenses
    for(var i = 0; i<arr.length; i++) {
      console.log(arr[i].title)
     
 content +='<tr>'
      
      
       // +'<td>'+(i+1)+'</td>'
       // +'<td>'+arr[i].id+'</td>'
      +'<td>'+arr[i].title+'</td>'
      +'<td>'+arr[i].amount+'</td>'
      +'<td> <a href="#" class="edit-icon mx-2"style="font-size:20px;color:blue;"><i class="fa fa-edit" id="editBtn" onclick="editRender(\''+arr[i].id+'\',\''+arr[i].title+'\',\''+arr[i].amount+'\')"></a></i><a href="#" class="edit-icon mx-2"style="font-size:20px;color:red;"><i class="fa fa-trash"onclick="deleteExpense(\''+arr[i].id+'\',\''+arr[i].title+'\',\''+arr[i].amount+'\')"></a></i> </td>'
   +'</tr>'
}

     }
$(".table-row").html(content);

}
$(document).ready(function() {
  $("#expense-submit").click(function () {
   $("#edit-submit").show()
   $("#expense-submit").hide()
  });
  $("#edit-button").click(function () {
   $("#expense-submit").show()
   $("#edit-button").hide()
  });
 });



function editRender(editid,title, amount) {
   $("#expense-input").val(title)
   $("#amount-input").val(amount)

    
 event.preventDefault();

console.log(editid,title,amount)
  var data=localStorage.getItem("Budget  App");
  if(data){
    data = JSON.parse(data);
  }else{
    data = [];
  }
  
  for( var i=0;i<data.length;i++){
    const arr= data[i].expenses;
    for(var i = 0; i<arr.length; i++) {
    if(arr[i].id == editid){
      
       $("#expenses-input").val()=arr[i].title;
    
       arr[i].amount=$("#amount-input").val();
      }
     
      }
      
    }
     // localStorage.setItem("Budget App",JSON.stringify(data));
  }

   
     // localStorage.setItem("Budget App",JSON.stringify(data));
 // }

// }  
  



function deleteExpense(deleteid,title,amount){
  event.preventDefault();
  console.log(deleteid,title,amount)

  var data=localStorage.getItem("Budget App");
  if(data){
    data = JSON.parse(data);
  }else{
        data = [];
  }
for( var i=0;i<data.length;i++){
const arr= data[i].expenses
    for(var i = 0; i<arr.length; i++) {
    if(arr[i].id == deleteid){

      arr.splice(i, 1)
      // console.log(arr[i].id)
    }
  }
}
  localStorage.setItem("Budget App",JSON.stringify(data));
   tableRender()
   dataRender()
}

  






+'<div class="expense-list__info d-flex justify-content-between text-capitalize">'
       +' <h5 class="list-item">expense title</h5>'
        +'<h5 class="list-item">expense value</h5>'
        +'<h5 class="list-item"></h5>'
        +'</div>'
		 +'<div class="expense-item d-flex justify-content-between align-items-baseline">'
         +'<h6 class="expense-title mb-0 text-uppercase list-item"></h6>'
         +'<h5 class="expense-amount mb-0 list-item"></h5>'
          +'<div class="expense-icons list-item"> '
		
		+'<td>'+arr[i].title+'</td>'
		+'<td>'+arr[i].amount+'</td>'
		+'<td> <a href="#" class="edit-icon mx-2"style="font-size:20px;color:#0d6efd;"><i class="fa fa-edit"></a></i><a href="#" class="edit-icon mx-2"style="font-size:20px;color:red;"><i class="fa fa-trash"></a></i> </td>'
		+'</div>'
        
	function editRender (title, amount) {
  $("#expense-list").val(amount)
   content = '<button onclick="editAmount(\''+title+'\', \''+amount+'\')" class=> Edit</button>';
  $("").html(content)
}

function editAmount(edittitle, amount) {

  var data=localStorage.getItem("Budget App");
  if(data){
    data = JSON.parse(data);
  }else{
        data = [];
  }
  
  for( var i=0;i<data.length;i++){
    if(data[i].title== edittitle){
      data[i]. amount= $("amount-input").val()
    }
  }
  
  localStorage.setItem("Budget App",JSON.stringify(data));
  render()
}

function deleteAmount(deletetitle,amount){

  var data=localStorage.getItem("Budget App");
  if(data){
    data = JSON.parse(data);
  }else{
        data = [];
  }

  for( var i=0;i<data.length;i++){
    if(data[i].title == deletetitle){
      data.splice(i, 1)
    }
  }
  localStorage.setItem("Budget App",JSON.stringify(data));
  render()
}


 content +=  
    
     '<tr>'
     +'<div class="expense-list__info d-flex justify-content-between text-capitalize">'
        +'<h5 class="list-item">expense title</h5>' 
        + '<h5 class="list-item">expense value</h5>'  
        +'<h5 class="list-item"></h5>'
        +'</div>'
     +'<td>'+data[i].title+'</td>'
     +'<td>'+data[i].amount+'</td>'
    +'<td><button a href="#" class="edit-icon mx-2"style="font-size:20px;color:#0d6efd;"><i class="float-right fa fa-edit onclick="editRender(\''+data[i].title+'\',\''+data[i].amount+'\')"></i></a></button><button a href="#" class="edit-icon mx-2"style="font-size:20px;color:red;"><i class="float-right fa fa-trash"onclick="editRender(\''+data[i].title+'\',\''+data[i].amount+'\')"></i></a> </td></button>'
+' </tr>'
    
       }

  $("#expense-list").html(content);
}
}

   



  











    '<tr>'
     
    +'<div class="expense-list__info d-flex justify-content-between text-capitalize">'
       +' <h5 class="list-item">expense title</h5>'
        +'<h5 class="list-item">expense value</h5>'
        +'<h5 class="list-item"></h5>'
        +'</div>'
        +'<td>'+data[i].expenseInput+'</td>'
    +'<td>'+data[i].amountInput+'</td>'
    +'<td> <a href="#" class="edit-icon mx-2"style="font-size:20px;color:#0d6efd;"><i class="fa fa-edit"></a></i><a href="#" class="edit-icon mx-2"style="font-size:20px;color:red;"><i class="fa fa-trash"></a></i> </td>'
    +'</div>'
        +'</div>'
    + '</tr>'
  }



+'<div class="col-md-7 my-3">'
      
        +'<div class="expense-list" id="expense-list">'
      +'<div class="expense-list__info d-flex justify-content-between text-capitalize">'
       +' <h5 class="list-item">expense title</h5>'
       +'<td>'+data[i].expenseInput+'</td>'
        +'<h5 class="list-item">expense value</h5>'
        +'<td>'+data[i].amountInput+'</td>'
        +'<h5 class="list-item"></h5>'
        +'</div>'
     +'<div class="expense-item d-flex justify-content-between align-items-baseline">'
         +'<h6 class="expense-title mb-0 text-uppercase list-item"></h6>'
         +'<h5 class="expense-amount mb-0 list-item"></h5>'
          +'<div class="expense-icons list-item"> '
    +'</div>'

    
    
    +'<td> <a href="#" class="edit-icon mx-2"style="font-size:20px;color:#0d6efd;"><i class="fa fa-edit"></a></i><a href="#" class="edit-icon mx-2"style="font-size:20px;color:red;"><i class="fa fa-trash"></a></i> </td>'
    +'</div>'
        +'</div>'













  <div class="col-md-7 my-3">
      
        <div class="expense-list" id="expense-list">

        <div class="expense-list__info d-flex justify-content-between text-capitalize">
        <h5 class="list-item">expense title</h5>
        <h5 class="list-item">expense value</h5>
        <h5 class="list-item"></h5>
        </div>
          <div class="expense-item d-flex justify-content-between align-items-baseline">
         <h6 class="expense-title mb-0 text-uppercase list-item"></h6>
         <h5 class="expense-amount mb-0 list-item"></h5>
          <div class="expense-icons list-item"> 
          <a href="#" class="edit-icon mx-2"style="font-size:20px;color:#0d6efd;" data-id="${expense.id}"><i class="fa fa-edit"></i></a> 
         <a href="#" class="delete-icon" data-id="${expense.id}"><i class="fa fa-trash"style="font-size:20px;color:red;"></i></a>  
         <div id=edit_delete>  
           </div>
        </div>


<div class="expense-list" id="expense-list">

        <div class="expense-list__info d-flex justify-content-between text-capitalize">
        <h5 class="list-item">expense title</h5> -->
        <h5 class="list-item">expense value</h5> -->
        <h5 class="list-item"></h5>
        </div>
          <div class="expense-item d-flex justify-content-between align-items-baseline">
         <h6 class="expense-title mb-0 text-uppercase list-item"></h6>
         <h5 class="expense-amount mb-0 list-item"></h5>
          <div class="expense-icons list-item"> 
          <a href="#" class="edit-icon mx-2"style="font-size:20px;color:#0d6efd;" data-id="${expense.id}"><i class="fa fa-edit"></i></a>  
          <a href="#" class="delete-icon" data-id="${expense.id}"><i class="fa fa-trash"style="font-size:20px;color:red;"></i></a>   
         <div id=edit_delete> </div> -->
        </div>


///////////
function editRender(id, title,amount) {
  //input value set
  $("#expense-input").val(title)
   $("#amount-input").val(amount)
 event.preventDefault();

  content = '<button onclick="editExpense(\''+id+'\', \''+title+'\'\''+amount+'\')" class="btn text-capitalize expense-submit"> Edit Expenses</button>';
  

 // content='<button type="submit"style=" width:150px;border:2px solid red;"  class="btn text-capitalize expense-submit"onclick="editExpense(event)">edit expense</button>'
$("#editButton").html(content)
}




}

function editExpense(editid,title, amount) {
 $("#expense-input").val(title)
     $("#amount-input").val(amount)
 event.preventDefault();
console.log(editid,title,amount)
  var data=localStorage.getItem("Budget  App");
  if(data){
    data = JSON.parse(data);
  }else{
    data = [];
  }
  
  for( var i=0;i<data.length;i++){
    const arr= data[i].expenses
    for(var i = 0; i<arr.length; i++) {
    if(arr[i].id == editid){
      arr[i].title=$("#expense-amount").val()
      arr[i].amount =$("balance-amount").val()
      // console.log(arr[i].id)
    }
  }
   }
    // localStorage.setItem("Budget App",JSON.stringify(data));
  
   // dataRender()
  // render()
}

//////////////////




        // '<div class="col-md-7 my-3">'
      
         // +'<div class="expense-list" id="expense-list">'

       '<div class="expense-list__info d-flex justify-content-between text-capitalize">'

         +' <h5 class="list-item">expense title</h5>'
          +'<h5 class="list-item">expense value</h5>'
       
         // +'<h5 class="list-item"></h5>'
        // +'</div>'
         +'</div>'
     +'<div class="expense-item d-flex justify-content-between align-items-baseline">'
          +'<h6 class="expense-title mb-0 text-uppercase list-item"></h6>'
          +'<h5 class="expense-amount mb-0 list-item"></h5>'
           +'<div class="expense-icons list-item"> '
     +'</div>'
     +'<tr>'
     +'<td>'+data[i].expenseInput+'</td>'
     +'<td>'+data[i].amountInput+'</td>'
    +'<td> <a href="#" class="edit-icon mx-2"style="font-size:20px;color:#0d6efd;"><i class="fa fa-edit"></a></i><a href="#" class="edit-icon mx-2"style="font-size:20px;color:red;"><i class="fa fa-trash"></a></i> </td>'
+' </tr>'
    


     function addRender() {
 

  var data=localStorage.getItem("Budget App");
  if(data){
    data=JSON.parse(data);
  }else{
    data=[];
  }
  let content=''
  for(var i=0;i<data.length;i++){
$('#expense').html(data[i].title);
    $('#balance').html(data[i].amount);

    content +=  
    
     +'<tr>'
     +'<div class="expense-list__info d-flex justify-content-between text-capitalize">'
        +'<h5 class="list-item">expense title</h5>' 
        + '<h5 class="list-item">expense value</h5>'  
        +'<h5 class="list-item"></h5>'
        +'</div>'
     +'<td>'+data[i].title+'</td>'
     +'<td>'+data[i].amount+'</td>'
    +'<td><button a href="#" class="edit-icon mx-2"style="font-size:20px;color:#0d6efd;"><i class="float-right fa fa-edit onclick="editRender(\''+data[i].title+'\',\''+data[i].amount+'\')"></i></a></button><button a href="#" class="edit-icon mx-2"style="font-size:20px;color:red;"><i class="float-right fa fa-trash"onclick="editRender(\''+data[i].title+'\',\''+data[i].amount+'\')"></i></a> </td></button>'
+' </tr>'
    
       }

  $("#expense-list").html(content);




function addUser (e) {

  e.preventDefault()
  
  // const budgetInput=$("#budget-input").val();
   const title=$("#expense-input").val();
  const amount=$("#amount-input").val();
  if(amount.trim()!=0){
  var data = localStorage.getItem("Budget App");
  
  if(data){
      data = JSON.parse(data);
  }else{
      data = [];

  }

  let newInput = {
      expense:  [{"id":uuidv4(),"title":title, "amount":amount}]
    
  };
    data.push(newInput)
  localStorage.setItem("Budget App",JSON.stringify(data));
   // addRender()
}
function uuidv4() {
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);

  });
}
  
  }




function editRender (id,title,amount) {
   
          // $('#title').html(data[0].expenses.budget)
   content = '<button onclick="editAmount(\''+title+'\', \''+amount+'\')" class=> Edit</button>';
  $("#editButton").html(content)
}

function editAmount(editid ,edittitle, amount) {

  var data=localStorage.getItem("Budget App");
  if(data){
    data = JSON.parse(data);
  }else{
        data = [];
  }
  
  for( var i=0;i<data.length;i++){
    if(data[i].id== editid){
      data[i]. amount= $("amount-input").val()
    }
  }
  
  localStorage.setItem("Budget App",JSON.stringify(data));
  addRender()
}

function deleteAmount(deletetitle,amount){

  var data=localStorage.getItem("Budget App");
  if(data){
    data = JSON.parse(data);
  }else{
        data = [];
  }

  for( var i=0;i<data.length;i++){
    if(data[i].title == deletetitle){
      data.splice(i, 1)
    }
  }
  localStorage.setItem("Budget App",JSON.stringify(data));
  addRender()
}

  


// console.log(data['expenses'])
  for(var i=0;i<data.length;i++){
  // $('#title').html(data[i].title)
    $('#title').html(data[i].title)
   console.log(data[i])
    const arr= data[i].expenses
    for(var i = 0; i<arr.length; i++) {
      console.log(arr[i])
    }

  

function editRender (id,title,amount) {
   
          // $('#title').html(data[0].expenses.budget)
   content = '<button onclick="editAmount(\''+title+'\', \''+amount+'\')" class=> Edit</button>';
  $("#editButton").html(content)
}

function editAmount(editid ,edittitle, amount) {

  var data=localStorage.getItem("Budget App");
  if(data){
    data = JSON.parse(data);
  }else{
        data = [];
  }
  
  for( var i=0;i<data.length;i++){
    if(data[i].id== editid){
      data[i]. amount= $("amount-input").val()
    }
  }
  
  localStorage.setItem("Budget App",JSON.stringify(data));
  addRender()
}

function deleteAmount(deletetitle,amount){

  var data=localStorage.getItem("Budget App");
  if(data){
    data = JSON.parse(data);
  }else{
        data = [];
  }

  for( var i=0;i<data.length;i++){
    if(data[i].title == deletetitle){
      data.splice(i, 1)
    }
  }
  localStorage.setItem("Budget App",JSON.stringify(data));
  addRender()
}

  



  

addRender()
      function addRender() {

  var data=localStorage.getItem("Budget App");
  if(data){
    data=JSON.parse(data);
  }else{
    data=[];
  }
   var content=''
 

  
  for(var i=0;i<data.length;i++){
   /  +'</tbody>'
// +'</table>'
 // $('#expense-amount').html(arr[i].amount)
       // $('#balance-amount').html(arr[i].balance)
         // $("#budget-amount").html(data[i].budget)
        // $("#amount-input").html(arr[i].budget)
render()
 function render() {
 
  const title=$("#expense-input").val();
  const amount=$("#amount-input").val();
   // const balance=$("#balance-amount").val();
     var data=localStorage.getItem("Budget App");
  if(data){
    data=JSON.parse(data);
  }else{
    data=[];
  }
  


  $('#budget-amount').html(data[i].budget)
 $('#balance-amount').html(data[i].balance)

}    const arr= data[i].expenses
    for(var i = 0; i<arr.length; i++) {
      console.log(arr[i].title)
       $('#expense-amount').html(arr[i].amount)
       $('#balance-amount').html(arr[i].balance)
         $("#budget-amount").html(data[i].budget)
        $("#amount-input").html(arr[i].budget)
// $('#budget-amount').html(data[i].budget)
// $('#budget-amount').html(data[i].budget)
 content +='<tr>'
      // <th scope="row">1</th>
      +'<td>'+arr[i].title+'</td>'
      +'<td>'+arr[i].amount+'</td>'
      +'<td> <a href="#" class="edit-icon mx-2"style="font-size:20px;color:blue;"><i class="fa fa-edit" id="editBtn" onclick="editRender(\''+arr[i].title+'\',\''+arr[i].amount+'\')"></a></i><a href="#" class="edit-icon mx-2"style="font-size:20px;color:red;"><i class="fa fa-trash"onclick="deleteAmount(\''+arr[i].title+'\',\''+arr[i].amount+'\')"></a></i> </td>'
   +'</tr>'
//  +'</tbody>'
// +'</table>'
     }
}
$(".table-row").html(content);
}
function tableRender () {
  var data=localStorage.getItem("Budget App");
  if(data){
    data=JSON.parse(data);
  }else{
    data=[];
  }
   var content='';

  for(var i=0;i<data.length;i++){
   
    const arr= data[i].expenses
    for(var i = 0; i<arr.length; i++) {
      console.log(arr[i].title)
     // $('#expense-amount').html(arr[i].amount)
       // $('#balance-amount').html(arr[i].balance)
      // $("amount-input").html(arr[i].budget)

 content +='<tr>'
      // <th scope="row">1</th>
      +'<td>'+(i+1)+'</td>'
      +'<td>'+arr[i].title+'</td>'
      +'<td>'+arr[i].amount+'</td>'
      +'<td> <a href="#" class="edit-icon mx-2"style="font-size:20px;color:blue;"><i class="fa fa-edit" id="editBtn" onclick="editRender(\''+arr[i].title+'\',\''+arr[i].amount+'\')"></a></i><a href="#" class="edit-icon mx-2"style="font-size:20px;color:red;"><i class="fa fa-trash"onclick="deleteAmount(\''+arr[i].title+'\',\''+arr[i].amount+'\')"></a></i> </td>'
   +'</tr>'
//  +'</tbody>'
// +'</table>'
     }
}
$(".table-row").html(content);
}
tableRender()


// $('#expense-amount').html(arr[i].amount)
       // $('#balance-amount').html(arr[i].balance)
      // $("amount-input").html(arr[i].budget)

/* content +='<tr>'
      // <th scope="row">1</th>
      +'<td>'+(i+1)+'</td>'
      +'<td>'+arr[i].title+'</td>'
      +'<td>'+arr[i].amount+'</td>'
      +'<td> <a href="#" class="edit-icon mx-2"style="font-size:20px;color:blue;"><i class="fa fa-edit" id="editBtn" onclick="editRender(\''+arr[i].title+'\',\''+arr[i].amount+'\')"></a></i><a href="#" class="edit-icon mx-2"style="font-size:20px;color:red;"><i class="fa fa-trash"onclick="deleteAmount(\''+arr[i].title+'\',\''+arr[i].amount+'\')"></a></i> </td>'
   +'</tr>'*/
//  +'</tbody>'
// +'</table>'


















   $(document).ready(function(){
          $("#expense-submit").keyup(function(){
            // const amount=$("#amount-input").val();
            var budget=parseInt ($("#budget-input").val());
            var title=parseInt($("#expense-input").val());
             var amount=budget-title;
             console.log(budget, title, amount)
          $("#amount-input").val("amount");
          })
 //   $("#amount-input").val(Tbalance);
        // $('#balance-amount').html(data[i].Tbalance)
        // $('#expense-amount').html(arr[i].amount)
      
        
        // $("#amount-input").html(arr[i].budget)
 
  // $('#balance-amount').html(arr[i].balance)
  // $("#budget-amount").html(data[i].budget)
                 })



// updateBalance();

// function updateBalance(){
   

/*
$(document).ready(function(){
          // $("#expense-submit").click(function(){
             var data = localStorage.getItem("Budget App");
  
  if(data){
      data = JSON.parse(data);
  }else{
      data = [];

  }
  var amount = 0
  for(var i = 0; i<data.length; i++){
    // console.log(data[i])
    const arr = data[i].expenses
    for(var j = 0; j<arr.length; j++) {
      console.log(typeof arr[i].amount)
       amount = parseInt(arr[i].amount)-parseInt(data[i].expenses)

console.log(amount)

function editRender (id, todo) {
  //input value set
  $("#todoEditInput").val(todo)

   content = '<button onclick="editTodo(\''+id+'\', \''+todo+'\')" class="pull-right btn btn-primary badge-pill " data-dismiss="modal"> Edit</button>';
  $("#editButton").html(content)
}

function editTodo (editid, todo) {

  var data=localStorage.getItem("todoList");
  if(data){
    data = JSON.parse(data);
  }else{
    data = [];
  }
  
  for( var i=0;i<data.length;i++){
    if(data[i].id == editid){
      data[i].todo = $("#todoEditInput").val()
    }
  }
  
  localStorage.setItem("todoList",JSON.stringify(data));
  render()
}

function deleteTodo(deletid,todo){

  var data=localStorage.getItem("todoList");
  if(data){
    data = JSON.parse(data);
  }else{
        data = [];
  }

  for( var i=0;i<data.length;i++){
    if(data[i].id == deletid){
      data.splice(i, 1)
    }
  }

  localStorage.setItem("todoList",JSON.stringify(data));
  render()
}


            
}
}
});
*/
      /* $(document).ready(function(){
          $("#expense-submit").keyup(function(){
            // const amount=$("#amount-input").val();
            var budget=parseInt ($("#budget-input").val());
            var title=parseInt($("#expense-input").val());
             var amount=budget-title;
             console.log(budget, title, amount)
          $("#amount-input").val("amount");
          })
         })
*/


'<tr>'
     +'<div class="expense-list__info d-flex justify-content-between text-capitalize">'
        +'<h5 class="list-item">expense title</h5>' 
        + '<h5 class="list-item">expense value</h5>'  
        +'<h5 class="list-item"></h5>'
        +'</div>'


$('#balance-amount').html(arr[i].amount)




+' <table class="table table-borderless table-xxl "> '

  +'<thead>'
    +'<tr>'
      
      +'<th ><h5>Expense Title</h5></th>'
      +'<th ><h5>Expense Value</h5></th>'
      
    +'</tr>'
  +'</thead>'
  +'<tbody>'
    +'<tr>'
      // <th scope="row">1</th>
      +'<td>'+arr[i].title+'</td>'
      +'<td>'+arr[i].amount+'</td>'
      +'<td> <a href="#" class="edit-icon mx-2"style="font-size:20px;color:blue;"><i class="fa fa-edit"onclick="editRender(\''+arr[i].title+'\',\''+arr[i].amount+'\')"></a></i><a href="#" class="edit-icon mx-2"style="font-size:20px;color:red;"><i class="fa fa-trash"onclick="deleteRender(\''+arr[i].title+'\',\''+arr[i].amount+'\')"></a></i> </td>'
   +'</tr>'
   +'</tbody>'
+'</table>'



/*'<div class="expense-list__info d-flex justify-content-between text-capitalize">'
       +' <h5 class="list-item">expense title</h5>'
        +'<h5 class="list-item">expense value</h5>'
        +'<h5 class="list-item"></h5>'
        +'</div>'*/
     '<div class="expense-item d-flex justify-content-center align-items-baseline">'
          +'<h6 class="expense-title px-5 mb-auto text-uppercase list-item"></h6>'
          +'<h5 class="expense-amount mb-0 list-item"></h5>'
           +'<div class="expense-icons list-item"> '

// const balance=$("#balance-amount").val()
// const amount=$("#amount-input").val()
 // const title=$("#expense-input").val();
   
 // const balance=$("#amount-input").val()
 // const title=$("#expense-input").val();
  // console.log(data['expenses'])


// $('#title').html(data[i].expenses)
    // $('#title').html(arr[i].amount)

// $('#amount').html(arr[i].amount)


/* +'<tr>'
    +'<td>'+arr[i].title+'</td>'
    +'<td>'+arr[i].amount+'</td>'
    +'<td> <a href="#" class="edit-icon mx-2"style="font-size:20px;color:blue;"><i class="fa fa-edit"onclick="editRender(\''+arr[i].title+'\',\''+arr[i].amount+'\')"></a></i><a href="#" class="edit-icon mx-2"style="font-size:20px;color:red;"><i class="fa fa-trash"onclick="deleteRender(\''+arr[i].title+'\',\''+arr[i].amount+'\')"></a></i> </td>'
    +'</div>'
    +'</div>'
    +'</div>'
    +'</tr>'*/

// $('#title').html(data[i].title)


// $('#budget-input').css("background","pink");
   // const title=$("#expense-input").val();
   // const amount=$("#amount-input").val();


/*function renderBalance(e){
  const balance=$("#balance-amount").val()
   var data=localStorage.getItem("Budget App");
  if(data){
    data=JSON.parse(data);
  }else{
    data=[];
    
  }
   let content=''


   
 // const title=$("#expense-input").val();
  // console.log(data['expenses'])
  for(var i=0;i<data.length;i++){
   // $('#title').html(data[i].expenses)
    // $('#title').html(arr[i].amount)
   console.log(data[i])
    const arr= data[i].expenses
    for(var i = 0; i<arr.length; i++) {
      console.log(arr[i])
     $('#balance-amount').html(arr[i].balance)     
}
}
}
*/

// $('#amount').html(arr[i].balanceAmount)
  // $('#balance-amount').html(data[i].amount)
// $('#balance-input').html(arr[i].balance)
// renderBalance()

/*$(document).ready(function(){
  var amount=0;
  $("expense-amount").each(function(){
    sum=parseInt($(this).val());
    if(!isNaN(sum)){
      amount+=sum;
    }
console.log(amount)
    

  });
  $('.amount-input').val('Amount:'+amount);
});*/



/*$(document).ready(function(){
          $("#expense-submit").click(function(){
            var amount=parseInt(($("#amount-input").val())+parseInt(($("#amount-input").val());
            var budget=parseInt($("#budget-input").val());
            // var  title=($("#expense-input").val());
             var balance=(budget-amount);
             console.log(budget, amount,balance)
           $("#balance-amount").val("balance");
          })
         })*/

function editRender (title,amount) {
  
   $("#amount").val(arr[i].amount)

   content = '<a href="#" onclick="editAmount(\''+title+'\', \''+amount+'\')" class="edit-icon mx-2"style="font-size:20px;color:blue;"><i class="fa fa-edit"></a></i>'
  $("#editButton").html(content)
}



  localStorage.setItem("todoList",JSON.stringify(data));
  render()
} 
        
  

 $(document).ready(function(){
// function dataRender(){
  
  var data = localStorage.getItem("Budget App");
  
  if(data){
      data = JSON.parse(data);
  }else{
      data = [];
  }
  var amount = 0
  for(var i = 0; i<data.length; i++){
    // console.log(data[i])
    const arr = data[i].expenses
    for(var j = 0; j<arr.length; j++) {
      console.log(typeof arr[i].amount)
       amount += parseInt(arr[i].amount)
       console.log(amount)
// $("#expense-amount").val(amount);
     var budget=parseInt(data[i].budget)
     var  balance=budget-amount;
     // var balance=parseInt(data[i].budget)-parseInt(arr[i].amount);
          console.log(balance)
           
          $("#balance-amount").val(balance);
          // $("#budget-amount").html(data[i].budget)
          // $("#expense-amount").html(arr[i].amount)
          // $("expense-amount").html(arr[i].amount)
   // addRender()
   // dataRander()
          }
         }
       // }
  // balRender()
});
 //   $("#amount-input").val(Tbalance);
        // $('#balance-amount').html(data[i].Tbalance)
        // $('#expense-amount').html(arr[i].amount)
      
        
        // $("#amount-input").html(arr[i].budget)
 
  // $('#balance-amount').html(arr[i].balance)
  // $("#budget-amount").html(data[i].budget)
        





          $('#budget-amount').html(logData[i].budget)
            $('#balance-amount').html(logData[i].balance)
             $('#expense-amount').html(logData[i].totalExpenseAmount)









              function render() {
 const budget=$("#budget-amount").val();
  
   const amount=$("#balance-amount").val()
    // const balancet=$("balance-amount").val()

  var data=localStorage.getItem("Budget App");
  if(data){
    data=JSON.parse(data);
  }else{
    data=[];
  }
  let content=''
  for(var i=0;i<data.length;i++){
    
          
        $('#budget-amount').html(data[i].budget)
       
          // $('#balance-amount').html(data[i].budget)
  
 // $('#balance-amount').html([i].balance)
  
 // $('#budget-amount').html(data[i].budget)
 // $('#balance-amount').html(data[i].balance)

  }

}

addRender()
      function addRender() {

  var data=localStorage.getItem("Budget App");
  if(data){
    data=JSON.parse(data);
  }else{
    data=[];
  }
   var content=''
 

  
  for(var i=0;i<data.length;i++){
   
    const arr= data[i].expenses
    for(var i = 0; i<arr.length; i++) {
      console.log(arr[i].title)
     // $("#balance-amount").html(arr[i].balance) 
// $('#budget-amount').html(data[i].budget)
// $('#budget-amount').html(data[i].budget)
 content +='<tr>'
 // +'<td>'+(i+1)+'</td>'
      // <th scope="row">1</th>

      +'<td>'+arr[i].title+'</td>'
      +'<td>'+arr[i].amount+'</td>'
      +'<td> <a href="#" class="edit-icon mx-2"style="font-size:20px;color:blue;"><i class="fa fa-edit" id="editBtn" onclick="editRender(\''+arr[i].id+'\',\''+arr[i].title+'\',\''+arr[i].amount+'\')"></a></i><a href="#" class="edit-icon mx-2"style="font-size:20px;color:red;"><i class="fa fa-trash"onclick="deleteAmount(\''+arr[i].title+'\',\''+arr[i].title+'\',\''+arr[i].amount+'\')"></a></i> </td>'
   +'</tr>'
   
$(".table-row").html(content);
//  +'</tbody>'
// +'</table>'
     }
}

}*/










tableRender()
function tableRender () {
  var data=localStorage.getItem("Budget App");
  if(data){
    data=JSON.parse(data);
  }else{
    data=[];
  }
   var content='';

  for(var i=0;i<data.length;i++){
   
    const arr= data[i].expenses
    for(var i = 0; i<arr.length; i++) {
      console.log(arr[i].title)
     
 content +='<tr>'
      
      
      // +'<td>'+(i+1)+'</td>'
      // +'<td>'+arr[i].id+'</td>'
      +'<td>'+arr[i].title+'</td>'
      +'<td>'+arr[i].amount+'</td>'
      +'<td> <a href="#" class="edit-icon mx-2"style="font-size:20px;color:blue;"><i class="fa fa-edit" id="editBtn" onclick="editRender(\''+arr[i].id+'\',\''+arr[i].title+'\',\''+arr[i].amount+'\')"></a></i><a href="#" class="edit-icon mx-2"style="font-size:20px;color:red;"><i class="fa fa-trash"onclick="deleteRender(\''+arr[i].id+'\',\''+arr[i].title+'\',\''+arr[i].amount+'\')"></a></i> </td>'
   +'</tr>'


     }

}
$(".table-row").html(content);

function editRender (id, todo) {
  //input value set
  $("#todoEditInput").val(todo)

   content = '<button onclick="editExpense(\''+id+'\', \''+title+'\'\''+amount+'\')" class="pull-right btn btn-primary badge-pill " data-dismiss="modal"> Edit</button>';
  $("#editButton").html(content)
}




}

function editRender (editid,title, amount) {
  $("#expense-input").val(title)
   $("#amount-input").val(amount)
 event.preventDefault();
console.log(editid,title,amount)
  var data=localStorage.getItem("Budget  App");
  if(data){
    data = JSON.parse(data);
  }else{
    data = [];
  }
  
  for( var i=0;i<data.length;i++){
    const arr= data[i].expenses
    for(var i = 0; i<arr.length; i++) {
    if(arr[i].id == editid){
      arr[i].title=$("#expense-amount").val()
      arr[i].amount =$("balance-amount").val()
      // console.log(arr[i].id)
    }
  }
   }
    // localStorage.setItem("Budget App",JSON.stringify(data));
  
   // dataRender()
  // render()
}




function deleteRender(deleteid,title,amount){
  event.preventDefault();
  console.log(deleteid,title,amount)

  var data=localStorage.getItem("Budget App");
  if(data){
    data = JSON.parse(data);
  }else{
        data = [];
  }



  

  for( var i=0;i<data.length;i++){
const arr= data[i].expenses
    for(var i = 0; i<arr.length; i++) {
    if(arr[i].id == deleteid){

      arr.splice(i, 1)
      // console.log(arr[i].id)
    }
  }