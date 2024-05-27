let selections = [];let topPieces = {
    'Formal': 'blazerImageLink',
    'Semi-Formal': 'semiFormalShirtImageLink',
    'Party': 'tShirtImageLink',
    'School': 'sweaterImageLink',
    'Gym': 'gymShirtImageLink',
    'Date Night': 'niceTopImageLink',
    'Beach Outing': 'tankTopImageLink'
};

let singleFits = {
    'Formal': 'suitImageLink',
    'Semi-Formal': 'semiFormalSuitImageLink',
    'Party': 'partyDressImageLink',
    'School': 'schoolUniformImageLink',
    'Gym': 'gymOutfitImageLink',
    'Date Night': 'dateDressImageLink',
    'Beach Outing': 'beachWearImageLink'
};

let bottoms = {
    'Formal': 'formalPantsImageLink',
    'Semi-Formal': 'semiFormalPantsImageLink',
    'Party': 'jeansImageLink',
    'School': 'skirtImageLink',
    'Gym': 'gymShortsImageLink',
    'Date Night': 'casualPantsImageLink',
    'Beach Outing': 'shortsImageLink'
};

let shoes = {
    'Formal': 'formalShoesImageLink',
    'Semi-Formal': 'semiFormalShoesImageLink',
    'Party': 'jordansImageLink',
    'School': 'vansImageLink',
    'Gym': 'gymShoesImageLink',
    'Date Night': 'redBottomsImageLink',
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
    $('#submitButton').on('click', function() {
        showOutfit();
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
            $('#submitSection').show(); // Show the submit section
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
