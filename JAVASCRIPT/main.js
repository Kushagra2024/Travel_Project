import { MY_API_KEY } from './config.js';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': MY_API_KEY,
		'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
	}
};

fetch('https://skyscanner50.p.rapidapi.com/api/v1/searchFlights?origin=IXD&destination=DEL&date=2022-09-30&adults=1&currency=INR&countryCode=IN&market=en-US', options)
	.then(response => response.json())
	.then(response => {
        console.log(response);

    
    
    })
	.catch(err => {
        console.error(err);
    });


    //carrier - name,departure time.
    //destination - airport name, display code
    // origin - airport name , display code 
    // price - amount
    // arrival time