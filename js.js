console.log("hello world");

// console.log(timePassed);


    const decrementButton = document.getElementById("decrement");
  const incrementButton = document.getElementById("increment");
  const result = document.getElementById("btnMultiBetCount");
  let currentValue = 1;

  decrementButton.addEventListener("click", function() {
    if (currentValue > 1) {
      currentValue -= 1;
      result.value = 'X' + currentValue;
    }
  });

  incrementButton.addEventListener("click", function() {
    currentValue += 1;
    result.value = 'X' + currentValue;
  });


  const button = document.querySelector(".btn-mask-balance");
  const mask_balance = document.querySelector(".mask-balance");
  const unmask_balance = document.querySelector(".unmasked-balance");
  let isMasked = false;
console.log();

  button.addEventListener("click", function() {
    if (isMasked) {
        mask_balance.classList.toggle('visually-hidden')
        unmask_balance.classList.toggle('visually-hidden');
        button.className = 'bi bi-eye'
        isMasked = false;
    } else {
        button.className = 'bi bi-eye-slash'
        mask_balance.classList.toggle('visually-hidden')
        unmask_balance.classList.toggle('visually-hidden');
      isMasked = true;
    }
  });


// $(".guestCounter li").on("click", function (element) {
//     let operationType = $(this).attr("data-btn-type");
//     // let oldValue = $(this).parent().find("input").val();
//     console.log(operationType);
//     let result = document.getElementById("result")
//     let results = document.getElementById("result").value.replace('X', '');
    
//     let currentValue=1;
//     // let newVal;
//     if (operationType == "increment") {
//         result = Number(results ++);
//         console.log(results);
//         result.value = 'X' + results;
//     } 
//     else {

//         // Don't allow decrementing below zero

//         if (currentValue > 1) {
//             currentValue --;
//             result.value = 'X' + currentValue;
//             console.log(currentValue);

//           }
//     }
//     console.log(results);
//     console.log(currentValue);

//     $(this).parent().find("input").val(result.value);



    

// //   decrementButton.addEventListener("click", function() {
    
// //   });

// //   incrementButton.addEventListener("click", function() {
    
// //   });

// // let newVal;
// //     if (operationType == "increment") {
// //          newVal = `${parseFloat(oldValue) + 1}x`;
// //     } else {

// //         // Don't allow decrementing below zero

// //         let oldValues = oldValue.replace('x', '')

// //         if (oldValues > 1) {
// //              newVal = `${ parseFloat(oldValue) - 1}x`;
// //         } else {
// //             newVal = "1x";
// //         }
// //     }
// //     $(this).parent().find("input").val(newVal);
// });