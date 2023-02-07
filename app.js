// Selectors

// stages

const stage1 = document.querySelector('.stage-1')
const stage2 = document.querySelector('.stage-2')
const stage3 = document.querySelector('.stage-3')
const stage4 = document.querySelector('.stage-4')
const stage5 = document.querySelector('.stage-5')
const msg = document.querySelector('.msg')


// stage 1 - input fields
const nameInput = document.querySelector('.name-input')
const emailInput = document.querySelector('.email-input')
const phoneInput = document.querySelector('.phone-input')
const nextBTN1 = document.querySelector('.next-btn1')
const back1 = document.querySelector('.back-1')


// stage 2 - plans

const plan2Options = document.querySelectorAll('.option')
const arcadeOption = document.querySelector('.arcade')
const advOption = document.querySelector('.adv')
const proOption = document.querySelector('.pro')
const nextBTN2 = document.querySelector('.next-btn2')
const back2 = document.querySelector('.back-2')



// stage 3 - add-ons

let addon1Value,
    addon2Value,
    addon3Value;

// add-on div
const addon1 = document.querySelector('.addon-1')
const addon2 = document.querySelector('.addon-2')
const addon3 = document.querySelector('.addon-3')

addon1.addEventListener('click',()=>{
    addon1box.checked = !addon1box.checked
})
addon2.addEventListener('click',()=>{
    addon2box.checked = !addon2box.checked
})
addon3.addEventListener('click',()=>{
    addon3box.checked = !addon3box.checked
})

// add-on checkBox
const addon1box = document.querySelector('.add-on1box')
const addon2box = document.querySelector('.add-on2box')
const addon3box = document.querySelector('.add-on3box')

const nextBTN3 = document.querySelector('.next-btn3')
const back3 = document.querySelector('.back-3')


// stage 4 

const addon1HTML = document.querySelector('.add-on1html')
const addon2HTML = document.querySelector('.add-on2html')
const addon3HTML = document.querySelector('.add-on3html')
const nextBTN4 = document.querySelector('.next-btn4')
const back4 = document.querySelector('.back-4')
const totalHTML = document.querySelector('.total-html')


// sub-card

const step1 = document.querySelector('.step-1')
const step2 = document.querySelector('.step-2')
const step3 = document.querySelector('.step-3')
const step4 = document.querySelector('.step-4')




let planOption;
let planPrice = 0;
const planOptionHTML = document.querySelector('.plan-option')
const planPriceHTML = document.querySelector('.plan-price')


nextBTN1.addEventListener('click',()=>{

    // form validation
const phoneInput = document.querySelector('.phone-input')
    if (nameInput.value == '' || emailInput.value == '' || phoneInput.value == '') {
        msg.innerHTML = 'Please fill in all the fields..'
        msg.classList.remove('hide')
        setTimeout(() => {
            msg.classList.add('hide')
        }, 1500);
    } else {
    // next page
    stage1.classList.add('hide')
    stage2.classList.remove('hide')
    // next step color
    step1.classList.remove('active-step')
    step2.classList.add('active-step')

    }
})
nextBTN2.addEventListener('click',()=>{


    // get price
    planOptionHTML.innerHTML = planOption
    planPriceHTML.innerHTML = planPrice

    if(planPrice == 0) {
        msg.innerHTML = 'Please Select a plan..'
        msg.classList.remove('hide')
        setTimeout(() => {
            msg.classList.add('hide')
        }, 1500);
    } else {
        stage2.classList.add('hide')
        stage3.classList.remove('hide')
        // next step color
        step2.classList.remove('active-step')
        step3.classList.add('active-step')
    }

})
nextBTN3.addEventListener('click',()=>{
    stage3.classList.add('hide')
    stage4.classList.remove('hide')
    // next step color
    step3.classList.remove('active-step')
    step4.classList.add('active-step')

        // get add-on values
        if(addon1box.checked){
            addon1HTML.classList.remove('hide')
            document.querySelector('.addon-1-name').innerHTML = 'Online Service'
            document.querySelector('.addon-1-price').innerHTML = 1
        } else {
            addon1HTML.classList.add('hide')
        }


        if(addon2box.checked){
            addon2HTML.classList.remove('hide')
            document.querySelector('.addon-2-name').innerHTML = 'Larger Storage'
            document.querySelector('.addon-2-price').innerHTML = 2
        } else {
            addon2HTML.classList.add('hide')
        }


        if(addon3box.checked){
            addon3HTML.classList.remove('hide')
            document.querySelector('.addon-3-name').innerHTML = 'Customizable Profile'
            document.querySelector('.addon-3-price').innerHTML = 2
        } else {
            addon3HTML.classList.add('hide')
        }

        // get TOTAL price
        totalHTML.innerHTML = planPrice + 
        +document.querySelector('.addon-1-price').innerHTML
        +
        +document.querySelector('.addon-2-price').innerHTML
        +
        +document.querySelector('.addon-3-price').innerHTML
})

nextBTN4.addEventListener('click',()=>{
    stage4.classList.add('hide')
    stage5.classList.remove('hide')
})

// prev page
back2.addEventListener('click',()=>{
    stage1.classList.remove('hide')
    stage2.classList.add('hide')
    // prev step color
    step1.classList.add('active-step')
    step2.classList.remove('active-step')
})
back3.addEventListener('click',()=>{
    stage2.classList.remove('hide')
    stage3.classList.add('hide')
    // prev step color
    step2.classList.add('active-step')
    step3.classList.remove('active-step')
})
back4.addEventListener('click',()=>{
    stage3.classList.remove('hide')
    stage4.classList.add('hide')
    // prev step color
    step3.classList.add('active-step')
    step4.classList.remove('active-step')
})



arcadeOption.addEventListener('click',(e)=>{
    e.target.classList.add('grey-bg')
    advOption.classList.remove('grey-bg')
    proOption.classList.remove('grey-bg')
    planOption = 'Arcade (monthly)'
    planPrice = 9
})
advOption.addEventListener('click',(e)=>{
    e.target.classList.add('grey-bg')
    arcadeOption.classList.remove('grey-bg')
    proOption.classList.remove('grey-bg')

    planOption = 'Advanced (monthly)'
    planPrice = 12

})
proOption.addEventListener('click',(e)=>{
    e.target.classList.add('grey-bg')
    advOption.classList.remove('grey-bg')
    arcadeOption.classList.remove('grey-bg')
    planOption = 'Pro (monthly)'
    planPrice = 15

})

