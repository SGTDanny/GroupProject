let selections = [];
let topPieces = {
    'Formal': 'blazerImageLink',
    'Party': 'tShirtImageLink',
    'School': 'sweaterImageLink',
    'Interview': 'buttonUpImageLink',
    'Date Night': 'niceTopImageLink',
    'Meeting the Parents': 'casualTopImageLink',
    'Office Work': 'formalTopImageLink',
    'Beach Outing': 'tankTopImageLink'
};

let singleFits = {
    'Formal': 'suitImageLink',
    'Party': 'partyDressImageLink',
    'School': 'schoolUniformImageLink',
    'Interview': 'businessSuitImageLink',
    'Date Night': 'dateDressImageLink',
    'Meeting the Parents': 'casualDressImageLink',
    'Office Work': 'officeOutfitImageLink',
    'Beach Outing': 'beachWearImageLink'
};

let bottoms = {
    'Formal': 'formalPantsImageLink',
    'Party': 'jeansImageLink',
    'School': 'skirtImageLink',
    'Interview': 'formalSkirtImageLink',
    'Date Night': 'casualPantsImageLink',
    'Meeting the Parents': 'comfortablePantsImageLink',
    'Office Work': 'dressPantsImageLink',
    'Beach Outing': 'shortsImageLink'
};

let shoes = {
    'Formal': 'formalShoesImageLink',
    'Party': 'jordansImageLink',
    'School': 'vansImageLink',
    'Interview': 'calvinKleinImageLink',
    'Date Night': 'redBottomsImageLink',
    'Meeting the Parents': 'nikeImageLink',
    'Office Work': 'blackSketchersImageLink',
    'Beach Outing': 'sandalsImageLink'
};

function main() {   
    $(document).ready(function() {
        var selectedOccasion = '';
        var selectedTime = '';
        var selectedSeason = '';

        $('#occassion button').on('click', function() {
            selectedOccasion = $(this).text();
            selections.push(selectedOccasion);
            console.log('Selected Occasion: ' + selectedOccasion);
            checkSelections();
        });

        $('#time button').on('click', function() {
            selectedTime = $(this).text();
            selections.push(selectedTime);
            console.log('Selected Time: ' + selectedTime);
            checkSelections();
        });

        $('#season button').on('click', function() {
            selectedSeason = $(this).text();
            selections.push(selectedSeason);
            console.log('Selected Season: ' + selectedSeason);
            checkSelections();
        });
    });
}

//this function is to make sure all the selections have been made.
//after the selections are selected then it will create the submit button
function checkSelections() {
    if (selections.length >= 3) {
        let selectedOccasion = selections.find(sel => Object.keys(topPieces).includes(sel));
        let selectedTime = selections.find(sel => sel === 'Indoors' || sel === 'Outdoors');
        let selectedSeason = selections.find(sel => sel === 'Summer' || sel === 'Spring' || sel === 'Winter' || sel === 'Fall');

        if (selectedOccasion && selectedTime && selectedSeason) {
            if ($('#submitButton').length === 0) { // Check if the button already exists
                var $button = $('<button>', 
                {
                    text: 'Show Me My Fit',    // Button text
                    id: 'submitButton',      // Button id
                    click: function() {  // Click event handler
                        showOutfit();
                    }
                });
                $('#submitDiv').append($button);
            }
        }
    }
}

function showOutfit() {
    let selectedOccasion = selections.find(sel => Object.keys(topPieces).includes(sel));
    let outfit = {
        top: topPieces[selectedOccasion],
        fit: singleFits[selectedOccasion],
        bottom: bottoms[selectedOccasion],
        shoes: shoes[selectedOccasion]
    };


    //uncomment this once all of the fits have links 
    // $('#output').html(`
    //     <h2>Your Outfit</h2>
    //     <img src="${outfit.top}" alt="Top">
    //     <img src="${outfit.fit}" alt="Fit">
    //     <img src="${outfit.bottom}" alt="Bottom">
    //     <img src="${outfit.shoes}" alt="Shoes">
    // `);
// }

    //comment this out once the fits have links to images
    $('#output').html(`
        <h2>Your Outfit</h2>
        <p>${outfit.top}</p>
        <p>${outfit.fit}</p>
        <p>${outfit.bottom}</p>
        <p>${outfit.shoes}</p>
    `);
}
main();
