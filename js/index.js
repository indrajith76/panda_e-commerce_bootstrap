// change all h2 font color
const allh2 = document.querySelectorAll('h2');
for (const h2 of allh2) {
    h2.style.color = 'lightblue';
}

// change backpack section bg-color
document.getElementById('backpack').style.backgroundColor='tomato';

// change all card radious
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius='30px';
}

// write a function in this function have console.log and add this function as a click hendler in a button.
function message(){
    console.log("hello form JS file");
}

// . এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 
const buyButtons = document.getElementsByClassName('buy-btn');
for (const btn of buyButtons) {
    btn.addEventListener('click', function(event){
        btn.parentElement.removeChild(event.target);
    })
}

// একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 
document.getElementById('input-email').addEventListener('keyup', function(event){
    const emailText = event.target.value;
    if(emailText === 'email'){
        document.getElementById('email-btn').removeAttribute('disabled');
    }
    else{
        document.getElementById('email-btn').setAttribute('disabled', true);
    }
})

//  (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 
// shoes section
const shoe1 = document.getElementById('shoe-img-1');
shoe1.addEventListener('mouseenter', function(){
    shoe1.src='images/shoes/shoe-2.png';
})
shoe1.addEventListener('mouseleave', function(){
    shoe1.src='images/shoes/shoe-1.png';
})

const shoe2 = document.getElementById('shoe-img-2');
shoe2.addEventListener('mouseenter', function(){
    shoe2.src='images/shoes/shoe-3.png';
})
shoe2.addEventListener('mouseleave', function(){
    shoe2.src='images/shoes/shoe-2.png';
})

const shoe3 = document.getElementById('shoe-img-3');
shoe3.addEventListener('mouseenter', function(){
    shoe3.src='images/shoes/shoe-1.png';
})
shoe3.addEventListener('mouseleave', function(){
    shoe3.src='images/shoes/shoe-3.png';
})

// bags section
const bag1 = document.getElementById('bags-img-1');
bag1.addEventListener('mouseenter', function(){
    bag1.src='images/bags/bag-3.png';
})
bag1.addEventListener('mouseleave', function(){
    bag1.src='images/bags/bag-1.png';
})

const bag2 = document.getElementById('bags-img-2');
bag2.addEventListener('mouseenter', function(){
    bag2.src='images/bags/bag-3.png';
})
bag2.addEventListener('mouseleave', function(){
    bag2.src='images/bags/bag-2.png';
})

const bag3 = document.getElementById('bags-img-3');
bag3.addEventListener('mouseenter', function(){
    bag3.src='images/bags/bag-1.png';
})
bag3.addEventListener('mouseleave', function(){
    bag3.src='images/bags/bag-3.png';
})

// (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 
const subscribe = document.getElementById('subscribe');
subscribe.addEventListener('dblclick', function(){
    subscribe.style.backgroundColor='#d0f8de';
})