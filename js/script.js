//-------------------Memroy Event Handler----------------------------
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

// function ssd(product){
//     const productInput = document.getElementById(product + '256');
// }


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





//----------------Delivery Event Handler---------------
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

//-------------Function declaration---------------------
function updateTotal(){
    const memoryCost = Number(totalMemory.innerText);
    const storageCost = Number(totalStorage.innerText);
    const shippingCost = Number(shippingField.innerText);
    const productCost = Number(basePrice.innerText);
    const grandTotal = memoryCost+ storageCost + shippingCost + productCost;

    total.innerText = grandTotal;
    totalFooter.innerText = grandTotal;
    
};



//-----------------------Promo Code---------------------------

//Promo code Start
function discound() {
    const promoInput = document.getElementById('promo-input');
    const totalAmount = document.getElementById('total-price').innerText;
    const mainAmount = document.getElementById('total')
    if (promoInput.value == 'stevekaku') {
        const a = totalAmount / 5;
        mainAmount.innerText = totalAmount - a;
    }
    promoInput.value = ''
};

