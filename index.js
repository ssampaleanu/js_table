var tbody = document.querySelector("tbody");
var input = document.querySelector("#input");
var searchBtn = document.querySelector("#search");
var filterVar = document.querySelector("#filterVar");

var sightings = dataSet;

searchBtn.addEventListener("click", handleSearchButtonClick);

function renderTable() {
    tbody.innerHTML = "";
    for (var i = 0; i < sightings.length; i++) {
      // Get get the current sighting object and its fields
      var sighting = sightings[i];
      var fields = Object.keys(sighting);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var row = tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
        var field = fields[j];
        var cell = row.insertCell(j);
        cell.innerText = sighting[field];
      }
    }
};

renderTable();

function handleSearchButtonClick() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var searchTerm = input.value.trim().toLowerCase();
  
    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    sightings = dataSet.filter(function(result) {
        var searchFilter = document.getElementById("filterVar");
        var filter = searchFilter.options[searchFilter.selectedIndex].value;
        console.log(filter);

        if (filter === "1") {
            var columnVal = result.state.toLowerCase();
        } else if (filter === "2") {
            var columnVal = result.country.toLowerCase();
        } else if (filter === "3") {
            var columnVal = result.datetime.toLowerCase();
        } else {
            var columnVal = result.shape.toLowerCase();
        }

        return columnVal === searchTerm;
        console.log(columnVal)

    });
    renderTable();
  }