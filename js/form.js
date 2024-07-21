let passInput = document.querySelector("#passInput");
let ageInput = document.querySelector("#ageInput");
let phoneInput = document.querySelector("#phoneInput");
let emailInput = document.querySelector("#emailInput");
let nameInput = document.querySelector("#nameInput");
let repassInput = document.querySelector("#repassInput");
let submitBtn = document.querySelector("#submitBtn");


export function hi(){


nameInput.addEventListener("input", function (e) {
    validation(nameInput);
});
passInput.addEventListener("input", function (e) {
    validation(passInput);
});
ageInput.addEventListener("input", function (e) {
    validation(ageInput);
});
phoneInput.addEventListener("input", function (e) {
    validation(phoneInput);
});
emailInput.addEventListener("input", function (e) {
    validation(emailInput);
});
repassInput.addEventListener("input", function (e) {
    validation(repassInput);
});

function validation(element) {
    var regex = {
        nameInput: /^[A-Za-z\s]{1,50}$/,
        emailInput: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        phoneInput: /^01[0125][0-9]{8}$/,
        passInput: /^[a-zA-Z0-9!@#$%^&*]{8,}$/,
        repassInput: /^[a-zA-Z0-9!@#$%^&*]{8,}$/,
        ageInput: /^(?:1[7-9]|[2-5][0-9])$/
    };

    if (regex[element.id].test(element.value)) {
        if (element.id === "passInput") {
            passInput.nextElementSibling.classList.add('d-none');
            $(submitBtn).removeClass('bg-danger');
        }
        if (element.id === "emailInput") {
            emailInput.nextElementSibling.classList.add('d-none');
            $(submitBtn).removeClass('bg-danger');
        }
        if (element.id === "nameInput") {
            nameInput.nextElementSibling.classList.add('d-none');
            $(submitBtn).removeClass('bg-danger');
        }
        if (element.id === "phoneInput") {
            phoneInput.nextElementSibling.classList.add('d-none');
            $(submitBtn).removeClass('bg-danger');
        }
        if (element.id === "ageInput") {
            ageInput.nextElementSibling.classList.add('d-none');
            $(submitBtn).removeClass('bg-danger');
        }


        if (passInput.value !== '' && repassInput.value !== '' && passInput.value === repassInput.value) {
            passInput.classList.remove('border-danger');
            repassInput.classList.remove('border-danger');
            passInput.nextElementSibling.classList.add('d-none');
            $(submitBtn).removeClass('bg-danger')
        }
         else if (passInput.value !== '' && repassInput.value !== '' && passInput.value !== repassInput.value) {
            passInput.classList.add('border-danger');
            repassInput.classList.add('border-danger');
            passInput.nextElementSibling.classList.remove('d-none');
            repassInput.nextElementSibling.classList.remove("d-none")
            $(submitBtn).addClass('bg-danger');
        }
  

    } 
    else {
        if (element.id === "passInput") {
            passInput.nextElementSibling.classList.remove('d-none');
        }

        if (element.id === 'emailInput') {
            emailInput.nextElementSibling.classList.remove("d-none");
        }
        if (element.id === 'nameInput') {
            nameInput.nextElementSibling.classList.remove("d-none");
        }
        if (element.id === 'phoneInput') {
            phoneInput.nextElementSibling.classList.remove("d-none");
        }
        if (element.id === 'ageInput') {
            ageInput.nextElementSibling.classList.remove("d-none");
        }

        $(submitBtn).addClass('bg-danger');
        $(submitBtn).addClass('animate__animated animate__shakeX')


    }
}


function clearForm(){
    nameInput.value=''
    emailInput.value=''
    phoneInput.value=''
    ageInput.value=''
    passInput.value=''
    repassInput.value=''
    
    submitBtn.classList.remove("bg-success");
}


function validateForm() {
    let isValid = true;
    [nameInput, emailInput, phoneInput, ageInput, passInput, repassInput].forEach(input => {
        validation(input);
        if (!input.nextElementSibling.classList.contains('d-none') || 
            (input.id === 'passInput' && passInput.value !== repassInput.value)) {
            isValid = false;
        }
    });

    if (isValid) {
        console.log('succcccc');
        submitBtn.classList.add("bg-success");
        setTimeout(clearForm,500)
      
       

    }
}

submitBtn.addEventListener("click", function (e) {
   
    validateForm();
    
   
});

}
