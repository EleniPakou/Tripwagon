jQuery(init);

// Same as: jQuery(document).ready(init);

// Our Application logic goes here:
function init($) {

  let options = {
    url: "data.json",
    success: jsonHandler
  }

  function removeDups(names) {
    let unique = {};
    names.forEach(function (i) {
      if (!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }

  function createOptions(listOfCities){
    //1) Get Datalist
    let datalist = document.querySelector("#cities-list");
    //1.1) TEST!!
    //console.log(datalist);
    //2) Loop over unique cities array
    listOfCities.map (addOption);
    
    function addOption(city){
      datalist.innerHTML += `<option value="${city}"></option>`;
    }
    //2.1) Inside loop:
      // - Create option element
      // - Add city value
      // = Add to datalist (innerHTML)
      // HINT: datalist.innerHTML="<option>...</option> <option></option>"; 
  }

  function jsonHandler(data) {

    function getCity(hotel) {
      return (hotel.city);
    }

    let entries = data[1].entries;
    //console.log(entries);
    let cities = entries.map(getCity);  // Array [ {HOTEL} x 4 ]
    let uniqueCities = removeDups(cities);
    uniqueCities.sort();

    console.log(uniqueCities);
    // ["Paris", "Marseille", "Toulouse"];
    createOptions(uniqueCities);

    //let list = document.createElement("list");
    //list.innerHTML=${cities-list.city};
    //$tbody.appendChild(list);
    //[Element].setAttribute("value", "Paris")

    // ELEMENT.innerHTML
    // document.createElement( TAG )
    // ELEMENT.appendChild
    // `TEXT and dynamic ${values} from JS ${5+5}`
  }

  $.ajax(options);

}

// Alternative, no global vars at all:
// jQuery(function init(){ ... });