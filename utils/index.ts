import { CarProps } from "@/types";

export async function fetchCars() {
    const headers = {
            'X-RapidAPI-Key': '4db1ef0c0emsh3e3706d201d8c21p13078fjsn249ecb7a2ef2',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',{
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

export const generateCarImageUrl = (car: CarProps, angle?: string)=>{
    const url = new URL('https://cdn.imagin.studio/getimage');
    const {make, year, model} = car;
    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make',make);
    url.searchParams.append('modelFamily',model.split(' ')[0]);
    url.searchParams.append('zoomType','fullScreen');
    url.searchParams.append('modelYear',`${year}`);
    url.searchParams.append('angle',`${angle}`);
return `${url}`;
}