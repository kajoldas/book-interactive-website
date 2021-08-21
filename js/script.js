//-------------------Memroy Event Handler
const ram1 = document.getElementById('ram8GB');
const ram2 = document.getElementById('ram16GB');

const totalMemory = document.getElementById('total-memory');

ram1.addEventListener('click', function(){
    totalMemory.innerText = 0;
    updateTotal();
});
ram2.addEventListener('click', function(){
    totalMemory.innerText = 180;
    updateTotal();
});






//-------------Storage Event Handler----------------
const ssd1 = document.getElementById('ssd256');
const ssd2 = document.getElementById('ssd512');
const ssd3 = document.getElementById('ssd1024');

const totalStorage = document.getElementById('total-storage');

ssd1.addEventListener('click', function(){
    totalStorage.innerText = 0;
    updateTotal();
})
ssd2.addEventListener('click', function(){
    totalStorage.innerText = 100;
    updateTotal();
})
ssd3.addEventListener('click', function(){
    totalStorage.innerText = 180;
    updateTotal();
})





//----------------Shipping Event Handler---------------
const free = document.getElementById('free-delivery');
const premium = document.getElementById('premium-delivery');

const shippingField = document.getElementById('delivery-charge');

free.addEventListener('click', function(){
    shippingField.innerText = 0;
    updateTotal();
})
premium.addEventListener('click', function(){
    shippingField.innerText = 20;
    updateTotal();
})


//---------------------Total Calculation------------------
const basePrice = document.getElementById('base-price');
const total = document.getElementById('total-price');
const totalFooter = document.getElementById('total');


function updateTotal(){
    const memoryCost = Number(totalMemory.innerText);
    const storageCost = Number(totalStorage.innerText);
    const shippingCost = Number(shippingField.innerText);
    const productCost = Number(basePrice.innerText);
    const grandTotal = memoryCost+ storageCost + shippingCost + productCost;

    total.innerText = grandTotal;
    totalFooter.innerText = grandTotal;



    // console.log(basePrice.innerText, totalMemory.innerText, totalStorage.innerText, shippingField.innerText);
}
//------------------ Changing Total Price----------------
// const total = document.getElementById('total-price');
// total.innerText = 


// //-----------------------Promo Code---------------------------
const promoBtn  = document.getElementById('discount-button');
promoBtn.addEventListener('click', function(){
    discount();
})
function discount(){
    const promoCode = document.getElementById('discount-input').innerText;
    total.innerText= grandTotal * 0.9;
    totalFooter = grandTotal *0.9;
    if(promoCode=='stevekaku'){
        promoBtn= discount();
    }
    // else{
    //     break;
    // }
}



