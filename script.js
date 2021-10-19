const btnSubmit = document.querySelector('.submit');
const inputName = document.querySelector('.input__name');
const inputGender = document.querySelector('.input__gender');
const main = document.querySelector('.main');
const girlUI = document.querySelector('.girl__interface');
const boyUI = document.querySelector('.boy__interface');
const textGirl = document.querySelector('.text__girl');
const textBoy = document.querySelector('.text__boy');
const btnRep = document.querySelector('.reply');
btnSubmit.addEventListener('click',function(){
    if(inputGender.value === 'female'){
    main.classList.add('hidden');
    setTimeout(()=> girlUI.classList.remove('hidden'),300);
    textGirl.textContent = `Một bó hoa dành cho ${inputName.value} nhân ngày 20/10, chúc bạn luôn xinh đẹp và hạnh phúc <3`
}
    if(inputGender.value === 'male'){
        main.classList.add('hidden');
    setTimeout(()=> boyUI.classList.remove('hidden'),300);
    textBoy.textContent = `Ơ cái ông ${inputName.value} này, toi bảo đừng click rồi còn!`;
    }
    
});
btnRep.addEventListener('click',function(){
    boyUI.classList.add('hidden');
    setTimeout(()=> girlUI.classList.remove('hidden'),300);
    textGirl.textContent = `Thì...cầm hoa về tặng mẹ 20/10 này =))`;
})