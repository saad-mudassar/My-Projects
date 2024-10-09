const placeholderTexts = [
    "Find your perfect vehicle",
    "2023 Chevrolet Blazer Premier",
    "2024 Chevrolet Blazer EV eAWD RS",
    "Search by year, make, model, type, colour, transmission, drivetrain, stock, VIN, fuel types etc...",
    "Look for your dream car"
];

let currentIndex = 0; 
let currentCharIndex = 0; 
let isPausing = false; 
const searchBar = document.getElementById('srp-headerSearchBar');
const typingInterval = 150; 
const pauseDuration = 1000; 

function changePlaceholder() {
    if (isPausing) return;

    const currentText = placeholderTexts[currentIndex];
    searchBar.placeholder = currentText.slice(0, currentCharIndex + 1);
    currentCharIndex++;

    if (currentCharIndex >= currentText.length) {
        currentCharIndex = 0;
        currentIndex = (currentIndex + 1) % placeholderTexts.length;
        isPausing = true;
        setTimeout(() => {
            isPausing = false;
        }, pauseDuration);
    }
}
setInterval(changePlaceholder, typingInterval);






const accordion = document.getElementsByClassName('filterContainer');

for (i =0; i<accordion.length; i++ ){
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })
  
}












/* 

<div id="filter-sidebar">
                <div class="filterContainer" data-collapsed="false">
                  <h3 class="section-header">Sort By
                    <span class="selectedOption" id="srp-sortByPlaceholder"> Highest Discount </span>
                  </h3>
                  <div class="section-body">
                    <div class="sectionBody-wrapper" id="srp-sortByWrapper" data-pilltitle="Sort By:">
                      <label for="" class="customRadio">
                        Lowest Price
                        <input type="radio" name="srp-sortBy" value="price-ASC" tabindex="-1">
                        <span class="checkmark"></span>
                      </label>
                      <label for="" class="customRadio">
                        Highest Price
                        <input type="radio" name="srp-sortBy" value="price-DESC" tabindex="-1">
                        <span class="checkmark"></span>
                      </label><label for="" class="customRadio">
                        Highest Discount
                        <input type="radio" name="srp-sortBy" value="discount-DESC" tabindex="-1">
                        <span class="checkmark"></span>
                      </label><label for="" class="customRadio">
                        Lowest Mileage
                        <input type="radio" name="srp-sortBy" value="mileage-ASC" tabindex="-1">
                        <span class="checkmark"></span>
                      </label><label for="" class="customRadio">
                        Highest Mileage
                        <input type="radio" name="srp-sortBy" value="mileage-DESC" tabindex="-1">
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="filterContainer" data-collapsed="false">
                  <h3 class="section-header">Price
                    <span class="selectedOption" id="srp-pricePlaceholder"></span>
                  </h3>
                  <div class="section-body"></div>
                </div>
                <div class="filterContainer" data-collapsed="false">
                  <h3 class="section-header">New or Used
                    <span class="selectedOption" id="srp-statusPlaceholder"></span>
                  </h3>
                  <div class="section-body">
                    <div class="sectionBody-wrapper" id="srp-statusWrapper" data-pilltitle="Status: ">
                      <label class="customCheckbox">
                        <input type="checkbox" name="srp-status" value="new" tabindex="-1">
                        <span class="checkmark"></span>
                        New
                        <span class="srp-checkboxPlaceholder"></span>
                      </label>
                      <label class="customCheckbox">
                        <input type="checkbox" name="srp-status" value="used" tabindex="-1">
                        <span class="checkmark"></span>
                        Used
                        <span class="srp-checkboxPlaceholder"></span>
                      </label>                      
                      <label class="customCheckbox" style="display: none;">
                        <input type="checkbox" name="srp-status" value="new" tabindex="-1">
                        <span class="checkmark"></span>
                        Certified
                        <span class="srp-checkboxPlaceholder"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="filterContainer" data-collapsed="false">
                  <h3 class="section-header">Year
                    <span class="selectedOption" id="srp-yearPlaceholder"></span>
                  </h3>
                  <div class="section-body">
                    <div class="sectionBody-wrapper" id="srp-yearWrapper" data-pilltitle="Year:">
                      <label for="" class="customCheckbox">
                        <input type="checkbox" name="srp-year" value="2025" tabindex="-1">
                        <span class="checkmark"></span>
                        <span class="srp-checkboxLabel">2025
                          <span class="srp-checkboxSubtext"> </span>
                        </span>
                        <span class="srp-checkboxPlaceholder"> (2) </span>
                      </label>

                      <label for="" class="customCheckbox">
                        <input type="checkbox" name="srp-year" value="2024" tabindex="-1">
                        <span class="checkmark"></span>
                        <span class="srp-checkboxLabel">2024
                          <span class="srp-checkboxSubtext"> </span>
                        </span>
                        <span class="srp-checkboxPlaceholder"> (70) </span>
                      </label>

                      <label for="" class="customCheckbox">
                        <input type="checkbox" name="srp-year" value="2023" tabindex="-1">
                        <span class="checkmark"></span>
                        <span class="srp-checkboxLabel">2023
                          <span class="srp-checkboxSubtext"> </span>
                        </span>
                        <span class="srp-checkboxPlaceholder"> (46) </span>
                      </label>

                      <label for="" class="customCheckbox">
                        <input type="checkbox" name="srp-year" value="2022" tabindex="-1">
                        <span class="checkmark"></span>
                        <span class="srp-checkboxLabel">2022
                          <span class="srp-checkboxSubtext"> </span>
                        </span>
                        <span class="srp-checkboxPlaceholder"> (55) </span>
                      </label>

                      <label for="" class="customCheckbox">
                        <input type="checkbox" name="srp-year" value="2021" tabindex="-1">
                        <span class="checkmark"></span>
                        <span class="srp-checkboxLabel">2021
                          <span class="srp-checkboxSubtext"> </span>
                        </span>
                        <span class="srp-checkboxPlaceholder"> (79) </span>
                      </label>

                      <label for="" class="customCheckbox">
                        <input type="checkbox" name="srp-year" value="2020" tabindex="-1">
                        <span class="checkmark"></span>
                        <span class="srp-checkboxLabel">2020
                          <span class="srp-checkboxSubtext"> </span>
                        </span>
                        <span class="srp-checkboxPlaceholder"> (55) </span>
                      </label>

                      <label for="" class="customCheckbox">
                        <input type="checkbox" name="srp-year" value="2019" tabindex="-1">
                        <span class="checkmark"></span>
                        <span class="srp-checkboxLabel">2019
                          <span class="srp-checkboxSubtext"> </span>
                        </span>
                        <span class="srp-checkboxPlaceholder"> (34) </span>
                      </label>
                      
                    </div>
                  </div>
                </div>
                <div class="filterContainer" data-collapsed="false">
                  <h3 class="section-header">Mileage
                    <span class="selectedOption" id="srp-mileagePlaceholder"></span>
                  </h3>
                  <div class="section-body"></div>
                </div>
                <div class="filterContainer" data-collapsed="false">
                  <h3 class="section-header">Make
                    <span class="selectedOption" id="srp-makePlaceholder"></span>
                  </h3>
                  <div class="section-body">
                    <div class="sectionBody-wrapper" id="srp-makeWrapper" data-pilltitle="Make:">
                      <div class="input-group customSearch" style="display: none;">
                        <input type="search" name="srp-searchMake" class="form-control" placeholder="Search for Make" aria-describedby="basic-addon1">
                        <span class="input-group-addon" id="basic-addon1">
                          <i class="fas fa-search"></i>
                        </span>
                      </div>
                      
                      <label for="" class="customCheckbox">
                        <input type="checkbox" name="srp-make" value="acura" tabindex="-1">
                        <span class="checkmark"></span>
                        <span class="srp-checkboxLabel"> Acura
                          <span class="srp-checkboxSubtext"> </span>
                        </span>
                        <span class="srp-checkboxPlaceholder"> (1) </span>
                      </label>

                      <label for="" class="customCheckbox">
                        <input type="checkbox" name="srp-make" value="audi" tabindex="-1">
                        <span class="checkmark"></span>
                        <span class="srp-checkboxLabel">Audi
                          <span class="srp-checkboxSubtext"> </span>
                        </span>
                        <span class="srp-checkboxPlaceholder"> (1) </span>
                      </label>

                      <label for="" class="customCheckbox">
                        <input type="checkbox" name="srp-make" value="buick" tabindex="-1">
                        <span class="checkmark"></span>
                        <span class="srp-checkboxLabel"> Buick 
                          <span class="srp-checkboxSubtext"> </span>
                        </span>
                        <span class="srp-checkboxPlaceholder"> (6) </span>
                      </label>

                      <label for="" class="customCheckbox">
                        <input type="checkbox" name="srp-make" value="cadillac" tabindex="-1">
                        <span class="checkmark"></span>
                        <span class="srp-checkboxLabel">Cadillac
                          <span class="srp-checkboxSubtext"> </span>
                        </span>
                        <span class="srp-checkboxPlaceholder"> (1) </span>
                      </label>

                      <label for="" class="customCheckbox">
                        <input type="checkbox" name="srp-make" value="chevrolet" tabindex="-1">
                        <span class="checkmark"></span>
                        <span class="srp-checkboxLabel">Chevrolet
                          <span class="srp-checkboxSubtext"> </span>
                        </span>
                        <span class="srp-checkboxPlaceholder"> (169) </span>
                      </label>

                      <label for="" class="customCheckbox">
                        <input type="checkbox" name="srp-make" value="chrysler" tabindex="-1">
                        <span class="checkmark"></span>
                        <span class="srp-checkboxLabel"> Chrysler 
                          <span class="srp-checkboxSubtext"> </span>
                        </span>
                        <span class="srp-checkboxPlaceholder"> (4) </span>
                      </label>

                      <label for="" class="customCheckbox">
                        <input type="checkbox" name="srp-make" value="dodge" tabindex="-1">
                        <span class="checkmark"></span>
                        <span class="srp-checkboxLabel">Dodge
                          <span class="srp-checkboxSubtext"> </span>
                        </span>
                        <span class="srp-checkboxPlaceholder"> (4) </span>
                      </label>

                      <label for="" class="customCheckbox">
                        <input type="checkbox" name="srp-make" value="ford" tabindex="-1">
                        <span class="checkmark"></span>
                        <span class="srp-checkboxLabel">Ford
                          <span class="srp-checkboxSubtext"> </span>
                        </span>
                        <span class="srp-checkboxPlaceholder"> (51) </span>
                      </label>

                      <label for="" class="customCheckbox">
                        <input type="checkbox" name="srp-make" value="gmc" tabindex="-1">
                        <span class="checkmark"></span>
                        <span class="srp-checkboxLabel"> GMC
                          <span class="srp-checkboxSubtext"> </span>
                        </span>
                        <span class="srp-checkboxPlaceholder"> (16) </span>
                      </label>
                  </div>
                </div>
                <div class="filterContainer" style="display: none;" data-collapsed="false">
                  <h3 class="section-header">Model
                    <span class="selectedOption" id="srp-modelPlaceholder"></span>
                  </h3>
                  <div class="section-body"></div>
                </div>
                <div class="filterContainer" style="display: none;" data-collapsed="false">
                  <h3 class="section-header">Trim
                    <span class="selectedOption" id="srp-trimPlaceholder"></span>
                  </h3>
                  <div class="section-body"></div>
                </div>
                <div class="filterContainer" data-collapsed="false">
                  <h3 class="section-header">Type
                    <span class="selectedOption" id="srp-typePlaceholder"></span>
                  </h3>
                  <div class="section-body"></div>
                </div>
                <div class="filterContainer" data-collapsed="false">
                  <h3 class="section-header">Body
                    <span class="selectedOption" id="srp-bodyPlaceholder"></span>
                  </h3>
                  <div class="section-body"></div>
                </div>
                <div class="filterContainer" data-collapsed="false">
                  <h3 class="section-header">Color
                    <span class="selectedOption" id="srp-color_simplePlaceholder"></span>
                  </h3>
                  <div class="section-body"></div>
                </div>
                <div class="filterContainer" data-collapsed="false">
                  <h3 class="section-header">Fuel Type
                    <span class="selectedOption" id="srp-fuelPlaceholder"></span>
                  </h3>
                  <div class="section-body"></div>
                </div>
                <div class="filterContainer" data-collapsed="false">
                  <h3 class="section-header">Drivetrain
                    <span class="selectedOption" id="srp-drivetrainPlaceholder"></span>
                  </h3>
                  <div class="section-body"></div>
                </div>
                <div class="filterContainer" data-collapsed="false" style="display: none;">
                  <h3 class="section-header">Doors
                    <span class="selectedOption" id="srp-doorsPlaceholder"></span>
                  </h3>
                  <div class="section-body"></div>
                </div>
                <div class="filterContainer" data-collapsed="false">
                  <h3 class="section-header">Engine
                    <span class="selectedOption" id="srp-litresPlaceholder"></span>
                  </h3>
                  <div class="section-body"></div>
                </div>
                <div class="filterContainer" data-collapsed="false" style="display: none;">
                  <h3 class="section-header">Passengers
                    <span class="selectedOption" id="srp-passengersPlaceholder"></span>
                  </h3>
                  <div class="section-body"></div>
                </div>

              </div>
            </div>


            */


       /*     

document.addEventListener("DOMContentLoaded", function () {
    var headers = document.querySelectorAll(".filterContainer .section-header");

    headers.forEach(function (header) {
        header.addEventListener("click", function () {
            var parentContainer = this.parentElement;
            var sectionBody = this.nextElementSibling;
            var isCollapsed = parentContainer.getAttribute("data-collapsed") === "true";

            headers.forEach(function (hdr) {
                var parent = hdr.parentElement;
                parent.setAttribute("data-collapsed", "true");
                hdr.classList.remove("active");
                hdr.nextElementSibling.style.display = "none";
            });

            if (isCollapsed) {
                parentContainer.setAttribute("data-collapsed", "false");
                this.classList.add("active");
                sectionBody.style.display = "block";
            }
        });
    });
});

*/