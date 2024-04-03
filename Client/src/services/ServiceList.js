// import React from 'react'
// import ServiceCard from './ServiceCard'
// import { Col } from 'reactstrap';

// import weatherImg from '../assets/images/weather.png';
// import guideImg from '../assets/images/guide.png';
// import customizationImg from '../assets/images/customization.png';


// const servicesData = [
//     {
//         imgUrl: weatherImg,
//         title: 'Calculate Weather',
//         desc: 'Lorem ipsum dolor sit amet'
//     },
//     {
//         imgUrl: guideImg,
//         title: 'Best Tour guide',
//         desc: 'Lorem ipsum dolor sit amet'
//     },
//     {
//         imgUrl: customizationImg,
//         title: 'Customization',
//         desc: 'Lorem ipsum dolor sit amet'
//     }
// ]

// const ServiceList = () => {
//     return (
//         <>
//             {
//                 servicesData.map((item, index) => (
//                     <Col lg='3' key={index}>
//                         <ServiceCard item={item} />
//                     </Col>
//                 ))
//             }
//         </>
//     )
// }

// export default ServiceList


// 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const ServiceList = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
                const apiKey = '1c8a62afbcfc155f90e8a2735f118c14';
                const city = 'delhi';
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
                );
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, []);

    const servicesData = [
        {
            imgUrl: guideImg,
            title: 'Best Tour guide',
            desc: 'Contact us for guide'
        },
        {
            imgUrl: customizationImg,
            title: 'Customization',
            desc: 'Subscribe us for further detail'
        },
        // You can add more services here
    ];

    return (
        <>
            {servicesData.map((item, index) => (
                <Col lg='3' key={index}>
                    <ServiceCard item={item} />
                </Col>
            ))}

            {weatherData && (
                <Col lg='3'>
                    <ServiceCard
                        item={{
                            imgUrl: weatherImg, // You might need to adjust this based on the OpenWeatherMap API response
                            title:`Weather in ${weatherData.name}`,
                        
                            desc: `Temperature: ${weatherData.main.temp}°C, ${weatherData.weather[0].description}`
                        }}
                    />
                </Col>
            )}
        </>
    );
};

export default ServiceList;
