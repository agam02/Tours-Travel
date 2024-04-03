// import React from 'react'
// const About = () => {
//     return (
//         <div>
//             <h2>About Travel World</h2>
//             <p>
//                 Welcome to Travel World, where every journey is a story waiting to be told.
//             </p>
//             <p>
//                 At Travel World, we believe in the transformative power of travel. Our mission is to inspire
//                 and empower people to explore the world, discover new cultures, and create lifelong memories.
//             </p>
//             <h3>Our Vision</h3>
//             <p>
//                 To foster connections among people from different corners of the globe and break down barriers
//                 through the shared experience of travel.
//             </p>
//             <h3>What Sets Us Apart</h3>
//             <ul>
//                 <li>Expertise: Our team of travel enthusiasts and experts curates each itinerary with meticulous attention to detail.</li>
//                 <li>Global Network: With a global network of partners and local experts, we offer insider access to unique destinations.</li>
//                 <li>Personalized Service: We tailor each trip to your preferences and interests, ensuring a personalized and memorable experience.</li>
//             </ul>
//             <h3>Join Us on the Journey</h3>
//             <p>
//                 Whether you're a seasoned globetrotter or embarking on your first adventure, Travel World invites you
//                 to join us on a journey of discovery and exploration.
//             </p>
//             <p>
//                 Let us be your guide to the world's wonders, and together, let's create travel stories that last a lifetime.
//             </p>
//             <h3>Contact Us</h3>
//             <p>
//                 Have questions or ready to plan your next adventure? Contact our team at <strong>info@travelworld.com</strong>.
//             </p>
//         </div>
//     )
// }

// export default About


import React from 'react';

const About = () => {
    const styles = {
        container: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            lineHeight: '1.6',
            backgroundColor: '#f4f4f4',
        },
        heading: {
            color: '#333',
        },
        subHeading: {
            color: '#555',
        },
        list: {
            listStyleType: 'none',
            padding: 0,
        },
        listItem: {
            marginBottom: '10px',
        },
        strong: {
            fontWeight: 'bold',
        },
        contact: {
            fontWeight: 'bold',
            color: '#007bff',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>About Travel World</h2>
            <p>
                Welcome to Travel World, where every journey is a story waiting to be told.
            </p>
            <p>
                At Travel World, we believe in the transformative power of travel. Our mission is to inspire
                and empower people to explore the world, discover new cultures, and create lifelong memories.
            </p>
            <h3 style={styles.subHeading}>Our Vision</h3>
            <p>
                To foster connections among people from different corners of the globe and break down barriers
                through the shared experience of travel.
            </p>
            <h3 style={styles.subHeading}>What Sets Us Apart</h3>
            <ul style={styles.list}>
                <li style={styles.listItem}><strong style={styles.strong}>Expertise:</strong> Our team of travel enthusiasts and experts curates each itinerary with meticulous attention to detail.</li>
                <li style={styles.listItem}><strong style={styles.strong}>Global Network:</strong> With a global network of partners and local experts, we offer insider access to unique destinations.</li>
                <li style={styles.listItem}><strong style={styles.strong}>Personalized Service:</strong> We tailor each trip to your preferences and interests, ensuring a personalized and memorable experience.</li>
            </ul>
            <h3 style={styles.subHeading}>Join Us on the Journey</h3>
            <p>
                Whether you're a seasoned globetrotter or embarking on your first adventure, Travel World invites you
                to join us on a journey of discovery and exploration.
            </p>
            <p>
                Let us be your guide to the world's wonders, and together, let's create travel stories that last a lifetime.
            </p>
            <h3 style={styles.subHeading}>Contact Us</h3>
            <p>
                Have questions or ready to plan your next adventure? Contact our team at <strong style={styles.contact}>@abhinav.gmail.com</strong>.
            </p>
        </div>
    );
};

export default About;
