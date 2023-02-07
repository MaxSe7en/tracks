console.log("hello world");


const data = {
  gameType: "Royal 5"
};
const showModal = (title, button_type, url, data) => {
  // showModal()
  var myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
  document.querySelector(".modal-title").innerHTML = title;
  document.querySelector(".button-type").innerHTML = button_type;
  // myModal.closest(".modal-title").innerHTML = "title.innerHTML";
  console.log(myModal);

  myModal.show();
};

const showModalTrack = (title, button_type, url, data) => {
  // showModal()
  var myModal = new bootstrap.Modal(document.getElementById("m-exampleModal"));
  document.querySelector(".modal-title").innerHTML = title;
  document.querySelector(".button-type").innerHTML = button_type;
  // myModal.closest(".modal-title").innerHTML = "title.innerHTML";
  console.log(myModal);

  myModal.show();
};
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$(document).ready(function() {
  var tooltips = [
      "Tooltip 1",
      "Tooltip 2",
      "Tooltip 3",
      "Tooltip 4"
  ];
  var currentTip = 0;
  $("#element").hover(function() {
      $(this).attr("title", tooltips[currentTip]);
      currentTip = (currentTip + 1) % tooltips.length;
  });
});


const object =[
  {
      "trackNo": 1,
      "betId": "202301310162",
      "multiplier": 1,
      "betAmt": 0.252,
      "estimatedDrawTime": "2023-01-31 20:29:00",
      "nextDay": false,
      "current": true
  },
  {
      "trackNo": 2,
      "betId": "202301310163",
      "multiplier": 1,
      "betAmt": 0.252,
      "estimatedDrawTime": "2023-01-31 20:29:00",
      "nextDay": false
  },
  {
      "trackNo": 3,
      "betId": "202301310164",
      "multiplier": 1,
      "betAmt": 0.252,
      "estimatedDrawTime": "2023-01-31 20:34:00",
      "nextDay": false
  },
  {
      "trackNo": 4,
      "betId": "202301310165",
      "multiplier": 1,
      "betAmt": 0.252,
      "estimatedDrawTime": "2023-01-31 20:39:00",
      "nextDay": false
  },
  {
      "trackNo": 5,
      "betId": "202301310166",
      "multiplier": 1,
      "betAmt": 0.252,
      "estimatedDrawTime": "2023-01-31 20:44:00",
      "nextDay": false
  },
  {
      "trackNo": 6,
      "betId": "202301310167",
      "multiplier": 1,
      "betAmt": 0.252,
      "estimatedDrawTime": "2023-01-31 20:49:00",
      "nextDay": false
  },
  {
      "trackNo": 7,
      "betId": "202301310168",
      "multiplier": 1,
      "betAmt": 0.252,
      "estimatedDrawTime": "2023-01-31 20:54:00",
      "nextDay": false
  },
  {
      "trackNo": 8,
      "betId": "202301310169",
      "multiplier": 1,
      "betAmt": 0.252,
      "estimatedDrawTime": "2023-01-31 20:59:00",
      "nextDay": false
  },
  {
      "trackNo": 9,
      "betId": "202301310170",
      "multiplier": 1,
      "betAmt": 0.252,
      "estimatedDrawTime": "2023-01-31 21:04:00",
      "nextDay": false
  },
  {
      "trackNo": 10,
      "betId": "202301310171",
      "multiplier": 1,
      "betAmt": 0.252,
      "estimatedDrawTime": "2023-01-31 21:09:00",
      "nextDay": false
  }
];
// object[0] = {betname: 1, name: "John Doe" };
// object[1] = {id: 2, name: "Jane Doe" };
// object[2] = {id: 3, name: "Jim Doe" };
// object[3] = {id: 4, name: "Jack Doe" };
// object[4] = {id: 5, name: "Jill Doe" };


const toDelete = [1,  2,  4];
const filteredArray = object.filter(item => !toDelete.includes(item.trackNo));


console.log(object);
console.log(filteredArray);
// { 5: { name: "Jill Doe" } }



const objects = {
  1: { name: "John Doe" },
  2: { name: "Jane Doe" },
  3: { name: "Jim Doe" },
  4: { name: "Jack Doe" },
  5: { name: "Jill Doe" }
};

const toDeletes = [1, 2, 3, 4];

for (const id of toDeletes) {
  delete objects[id];
}

// console.log(object);
// { 5: { name: "Jill Doe" } }