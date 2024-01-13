export async function fetchCars() {
    const headers = {
            'X-RapidAPI-Key': '4db1ef0c0emsh3e3706d201d8c21p13078fjsn249ecb7a2ef2',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers: headers,
    });
    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number)=>{
    const baseProcePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear()-year)*ageFactor;
    const rentalRatePerDay = baseProcePerDay + mileageRate + ageRate;
    return rentalRatePerDay.toFixed(0);
}