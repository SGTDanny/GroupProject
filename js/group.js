//array for the selections that the user Makes 
let selections = [];
//Global variables for all of the outfits possible
let topPieces = {
    'Formal': 'img/topPieces/Blazer.png',
    'Semi-Formal': 'img/topPieces/semi-formal.png',
    'Party': 'img/topPieces/tshirt_8413944.png',
    'School': 'sweater',
    'Gym': 'img/topPieces/gym-shirt.png',
    'Date Night': 'img/singleFits/date-night-dress.png',
    'Beach Outing': 'img/singleFits/beach-wear.png'
};

let singleFits = {
    'Formal': 'img/singleFits/formal-suit.png',
    'Semi-Formal': 'semiFormalSuit',
    'Party': 'img/singleFits/party-dress.png',
    'School': 'schoolUniform',
    'Gym': 'img/singleFits/gym-outfit.png',
    'Date Night': 'img/singleFits/date-night-dress.png',
    'Beach Outing': 'img/singleFits/beach-wear.png'
};

let bottoms = {
    'Formal': 'formalPants',
    'Semi-Formal': 'semiFormalPants',
    'Party': 'jeans',
    'School': 'skirt',
    'Gym': 'gymShorts',
    'Date Night': 'casualPants',
    'Beach Outing': 'shorts'
};

let shoes = {
    'Formal': 'formalShoes',
    'Semi-Formal': 'semiFormalShoes',
    'Party': 'jordans',
    'School': 'vans',
    'Gym': 'gymShoes',
    'Date Night': 'redBottoms',
    'Beach Outing': 'sandals'
};



function main() 
{
    let reset = false; 
    $(document).ready(function() {
        var selectedOccasion = '';
        var selectedTime = '';
        var selectedSeason = '';
        //handling data when buttons from each section is clicked 
        $('#occassion button').on('click', function() {
            resetSelections();
            selectedOccasion = $(this).text();
            //adding clicked value to selection array
            selections.push(selectedOccasion);
            console.log('Selected Occasion: ' + selectedOccasion);

            setActiveButton('#occassion', this);

            //funciton call look scroll to see the function explanation ..repeated
            checkSelections();

        });
        $('#time button').on('click', function() {
            selectedTime = $(this).text();

            //adding clicked value to selection array
            selections.push(selectedTime);

            console.log('Selected Time: ' + selectedTime);

            setActiveButton('#time', this);

            //..repeated function call 
            checkSelections();
        });

        $('#season button').on('click', function() {
            selectedSeason = $(this).text();

            //adding clicked value to selection array
            selections.push(selectedSeason);
            console.log('Selected Season: ' + selectedSeason);

            setActiveButton('#season', this);

            //..repeated function call 
            checkSelections();
        });
    });

    $('#submitButton').on('click', function() {
        showOutfit();
    });

    $('#resetButton').on('click', function() {
        resetSelections();
    });
    $(document).ready(function() {
        $('#occassion button').on('click', function() {
            const query = $(this).text();
            getClothingImage(query);
        });
    });
    
    
}

function resetSelections() {
    selections = [];
    $('#submitSection').hide();
    $('#output').empty();
    $('button').removeClass('active');
    console.log('Selections have been reset.');
}

function setActiveButton(sectionId, button) {
    // Remove the active class from all buttons in the section
    $(sectionId + ' button').removeClass('active');
    // Add the active class to the clicked button
    $(button).addClass('active');
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
    if(selections.length<3){
        $('#submitSection').hide();
    }
}

function showOutfit() {
    let selectedOccasion = selections.find(sel => Object.keys(topPieces).includes(sel));
    console.log(selectedOccasion);
    let outfit = {
        top: topPieces[selectedOccasion],
        fit: singleFits[selectedOccasion],
        bottom: bottoms[selectedOccasion],
        shoes: shoes[selectedOccasion]
    }; 
    // const queryTop = outfit.top;
    // getClothingImage(queryTop);
    //uncomment this once all of the fits have links 
    $('#output').html(`
        <h2>Your Outfit</h2>
        <img src="${outfit.top}" alt="Top">
        <img src="${outfit.fit}" alt="Fit">
        <img src="${outfit.bottom}" alt="Bottom">
        <img src="${outfit.shoes}" alt="Shoes">
    `);
}

    //comment this out once the fits have links to images
    // $('#output').html(`
    //     <h2>Your Outfit</h2>
    //     <p>${outfit.top}</p>
    //     <p>${outfit.fit}</p>
    //     <p>${outfit.bottom}</p>
    //     <p>${outfit.shoes}</p>
    // `);
// }

/**
 * 
 * 
 * 
 * REMOVE ME AND ADD THE KEY
 * 
 * 
 * **/
// const UNSPLASH_ACCESS_KEY = '81Y7tlCMuWuFY5rxjlVpeJq4G7PfNwlQT1obAJwLkHA'; // Replace with your Unsplash API key
// function getClothingImage(query) {
//     $.ajax({
//         url: `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`,
//         method: 'GET',
//         success: function(data) {
//             if (data.results.length > 0) {
//                 const imageUrl = data.results[0].urls.small;
//                 $('#output').html(`<img src="${imageUrl}" alt="${query}">`);
//             } else {
//                 $('#output').html('<p>No images found</p>');
//             }
//         },
//         error: function( error) {
//             console.error('Error fetching image:', error);
//             $('#output').html('<p>Error fetching image</p>');
//         }
//     });
// }
// function getClothingImage2(query, callback) {
//     $.ajax({
//         url: `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`,
//         method: 'GET',
//         success: function(data) {
//             if (data.results.length > 0) {
//                 const imageUrl = data.results[0].urls.small;
//                 callback(imageUrl);
//             } else {
//                 callback(null);
//             }
//         },
//         error: function(error) {
//             console.error('Error fetching image:', error);
//             callback(null);
//         }
//     });
// }
// function showOutfit2() {
//     let selectedOccasion = selections.find(sel => Object.keys(topPieces).includes(sel));
//     let outfit = {
//         top: topPieces[selectedOccasion],
//         fit: singleFits[selectedOccasion],
//         bottom: bottoms[selectedOccasion],
//         shoes: shoes[selectedOccasion]
//     };

//     $('#output').html('<h2>Your Outfit</h2>');

//     // Fetch and display images for each piece of clothing
//     getClothingImage2(outfit.top, function(topImage) {
//         console.log(outfit.top);
//         if (topImage) {
//             $('#output').append(`<img src="${topImage}" alt="Top">`);
//         } else {
//             $('#output').append('<p>Top image not available</p>');
//         }
//     });

//     getClothingImage2(outfit.fit, function(fitImage) {
//         if (fitImage) {
//             $('#output').append(`<img src="${fitImage}" alt="Fit">`);
//         } else {
//             $('#output').append('<p>Fit image not available</p>');
//         }
//     });

//     getClothingImage2(outfit.bottom, function(bottomImage) {
//         if (bottomImage) {
//             $('#output').append(`<img src="${bottomImage}" alt="Bottom">`);
//         } else {
//             $('#output').append('<p>Bottom image not available</p>');
//         }
//     });

//     getClothingImage2(outfit.shoes, function(shoesImage) {
//         if (shoesImage) {
//             $('#output').append(`<img src="${shoesImage}" alt="Shoes">`);
//         } else {
//             $('#output').append('<p>Shoes image not available</p>');
//         }
//     });
// }

main();
