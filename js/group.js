

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
            console.log('Selected Occasion: ' + selectedOccasion);
        });

        $('#time button').on('click', function() {
            selectedTime = $(this).text();
            selections.push(selectedTime);
            console.log('Selected Time: ' + selectedTime);
        });

        $('#season button').on('click', function() {
            selectedSeason = $(this).text();
            selections.push(selectedSeason);
            console.log('Selected Season: ' + selectedSeason);
        });

        $('#showOutfitButton').on('click', function() {
            showOutfit();
        });
        if(selectedOccasion!=''&&selectedTime!=''&&selectedSeason!=''){
            selections.push(selectedOccasion);
            selections.push(selectedTime);
            selections.push(selectedSeason);
        }
    });
}

function showOutfit() {
    let selectedOccasion = selections.find(sel => Object.keys(topPieces).includes(sel));
    let outfit = {
        top: topPieces[selectedOccasion],
        fit: singleFits[selectedOccasion],
        bottom: bottoms[selectedOccasion],
        shoes: shoes[selectedOccasion]
    };

    $('#output').html(`
        <h2>Your Outfit</h2>
        <img src="${outfit.top}" alt="Top">
        <img src="${outfit.fit}" alt="Fit">
        <img src="${outfit.bottom}" alt="Bottom">
        <img src="${outfit.shoes}" alt="Shoes">
    `);
}

main();
