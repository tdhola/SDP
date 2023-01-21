// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function getData(){
    var id = document.contactForm.id.value;
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var address = document.contactForm.address.value;

    var idErr = nameErr = emailErr = mobileErr  = addressErr = true;
    if(id == "") {
        printError("idErr", "*Please enter user id");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(id) === false) {
            printError("idErr", "*Please enter a valid 10 digit mobile number");
        } else{
            printError("idErr", "");
            idErr = false;
        }
    }

    if(name == "") {
        printError("nameErr", "*Please enter your name");
        
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "*Please enter only alphabet");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    if(email == "") {
        printError("emailErr", "*Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "*Please use @ and . type of special variable");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    if(mobile == "") {
        printError("mobileErr", "*Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "*Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    if(address == "")
    {
      printError("addressErr", "*Please enter your address");
    }
    else{
      printError("addressErr","");
      addressErr = false;
    }
};

function add_Product(){
    var pro_id = document.contactForm.pro_id.value;
    var seller_id = document.contactForm.seller_id.value;
    var brand_id = document.contactForm.brand_id.value;
    var cat_id = document.contactForm.cat_id.value;
  var pro_name = document.contactForm.pro_name.value;
  var pro_price = document.contactForm.pro_price.value;
//   var discount = document.contactForm.discount.value;
  var pro_desc = document.contactForm.pro_desc.value;
  var quantity = document.contactForm.quantity.value;
  // var pro_price = document.contactForm.address.value;

  var idErr = sidErr = bidErr  = cidErr = nameErr = priceErr = discErr =descErr = qtyErr = true;
  if(pro_id == "") {
    printError("idErr", "*Please enter product id");
} else {
    var regex = /^[0-9]+$/;
    if(regex.test(pro_id) === false) {
        printError("idErr", "*Please enter only digit");
    } else{
        printError("idErr", "");
        idErr = false;
    }
}
if(seller_id == "") {
    printError("sidErr", "*Please enter seller id");
} else {
    var regex = /^[0-9]+$/;
    if(regex.test(seller_id) === false) {
        printError("sidErr", "*Please enter only digit");
    } else{
        printError("sidErr", "");
        sidErr = false;
    }
}
if(brand_id == "") {
    printError("bidErr", "*Please enter brand id");
} else {
    var regex = /^[0-9]+$/;
    if(regex.test(brand_id) === false) {
        printError("bidErr", "*Please enter only digit");
    } else{
        printError("bidErr", "");
        bidErr = false;
    }
}
if(cat_id == "") {
    printError("cidErr", "*Please enter category id");
} else {
    var regex = /^[0-9]+$/;
    if(regex.test(cat_id) === false) {
        printError("cidErr", "*Please enter only digit");
    } else{
        printError("cidErr", "");
        cidErr = false;
    }
}
  if(pro_name == "") {
      printError("nameErr", "*Please enter product name");
      
  } else {
      var regex = /^[a-zA-Z\s]+$/;                
      if(regex.test(pro_name) === false) {
          printError("nameErr", "*Please enter only alphabet");
      } else {
          printError("nameErr", "");
          nameErr = false;
      }
  }
  

  if(pro_price == "")
  {
    printError("priceErr", "*Please enter product price");
  }
    else {
      var regex = /^[0-9]+$/;
      if(regex.test(pro_price) === false) {
          printError("priceErr", "*Please enter only digit");
      } else{
          printError("priceErr", "");
          priceErr = false;
      }
  }

  if(quantity == "")
  {
    printError("qtyErr", "*Please enter product quantity");
  }
    else {
      var regex = /^[0-9]+$/;
      if(regex.test(quantity) === false) {
          printError("qtyErr", "*Please enter only digit");
      } else{
          printError("qtyErr", "");
          qtyErr = false;
      }
  }
  if(pro_desc == "")
  {
    printError("descErr", "*Please enter product description");
  }
    else {
      var regex = /^[0-9]+$/;
      if(regex.test(pro_desc) === false) {
          printError("descErr", "*Please enter only alpha");
      } else{
          printError("descErr", "");
          descErr = false;
      }
  }

  var fileInput = document.getElementById('file');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    if(!allowedExtensions.exec(filePath)){
      printError("imgErr",'*Please upload file having extensions .jpeg/.jpg/.png only.');
        fileInput.value = '';
        return false;
    }else{
        //Image preview
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('imagePreview').innerHTML = '<img src="'+e.target.result+'" width="500" height="500"/>';
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
};

function update_order(){
  var order_id = document.contactForm.order_id.value;
  var cid = document.contactForm.cid.value;
  var pro_id = document.contactForm.pro_id.value;
//   var cus_id = document.contactForm.cus_id.value;
  var pro_name = document.contactForm.pro_name.value;
  var pro_price = document.contactForm.pro_price.value;
  var qty = document.contactForm.qty.value;
  var date = document.contactForm.date.value;
  var order_status = document.contactForm.order_status.value;
  var payment_status = document.contactForm.payment_status.value;
  // console.log(order_status);
  var oidErr = cidErr = pidErr = nameErr = priceErr = qtyErr = dateErr = statusErr = payErr = true;
  if(order_id == "")
  {
    printError("oidErr", "*Please enter order id");
  }
    else {
      var regex = /^[0-9]+$/;
      if(regex.test(order_id) === false) {
          printError("oidErr", "*Please enter only digit");
      } else{
          printError("oidErr", "");
          oidErr = false;
      }
  }
  if(cid == "")
  {
    printError("cidErr", "*Please enter customer id");
  }
    else {
      var regex = /^[0-9]+$/;
      if(regex.test(cid) === false) {
          printError("cidErr", "*Please enter only digit");
      } else{
          printError("cidErr", "");
          cidErr = false;
      }
  }
  if(pro_id == "")
  {
    printError("pidErr", "*Please enter product id");
  }
    else {
      var regex = /^[0-9]+$/;
      if(regex.test(pro_id) === false) {
          printError("pidErr", "*Please enter only digit");
      } else{
          printError("pidErr", "");
          pidErr = false;
      }
  }
  
  if(pro_name == "") {
      printError("nameErr", "Please enter product name");
      
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(pro_name) === false) {
            printError("nameErr", "Please enter only alphabet");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
  }
 

  if(pro_price == "")
  {
    printError("priceErr", "*Please enter product price");
  }
    else {
      var regex = /^[0-9]+$/;
      if(regex.test(pro_price) === false) {
          printError("priceErr", "*Please enter only digit");
      } else{
          printError("priceErr", "");
          priceErr = false;
      }
  }

  if(qty == "")
  {
    printError("qtyErr", "*Please enter product qty");
  }
    else {
      var regex = /^[0-9]+$/;
      if(regex.test(qty) === false) {
          printError("qtyErr", "*Please enter only digit");
      } else{
          printError("qtyErr", "");
          qtyErr = false;
      }
  }

  if(date == "")
  {
    printError("dateErr", "*Please enter order date");
  }
    else {
      var regex = /^[0-9]+$/;
      if(regex.test(qty) === false) {
          printError("dateErr", "*Please enter only digit");
      } else{
          printError("dateErr", "");
          dateErr = false;
      }
  }
  if(order_status == "s")
  {
    printError("statusErr", "*Please select order status");
  }
  else{
    printError("statusErr","");
    statusErr = false;
  }
   if(payment_status == "s")
  {
    printError("payErr", "*Please select payment status");
  }
  else{
    printError("payErr","");
    payErr = false;
  }


};

function update_category(){
  var cat_name = document.contactForm.cat_name.value;
  var cat_desc = document.contactForm.cat_desc.value;
  var brand_name = document.contactForm.brand_name.value;
  var cat_id= document.contactForm.cat_id.value;

  var nameErr = descErr = idErr = bnameErr = true;
  if(cat_id == "") {
    printError("idErr", "*Please enter product id");
} else {
    var regex = /^[0-9]+$/;
    if(regex.test(cat_id) === false) {
        printError("idErr", "*Please enter only digit");
    } else{
        printError("idErr", "");
        idErr = false;
    }
}
if(brand_name == "") {
    printError("bnameErr", "*Please enter category name");
    
} else {
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(brand_name) === false) {
        printError("bnameErr", "*Please enter only alphabet");
    } else {
        printError("bnameErr", "");
        bnameErr = false;
    }
}
  if(cat_name == "") {
      printError("cnameErr", "*Please enter category name");
      
  } else {
      var regex = /^[a-zA-Z\s]+$/;                
      if(regex.test(cat_name) === false) {
          printError("cnameErr", "*Please enter only alphabet");
      } else {
          printError("cnameErr", "");
          cnameErr = false;
      }
  }
  if(cat_desc == "") {
    printError("descErr", "*Please enter category description");
    
} else {
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(cat_desc) === false) {
        printError("descErr", "*Please enter only alphabet");
    } else {
        printError("descErr", "");
        descErr = false;
    }
}
  
};