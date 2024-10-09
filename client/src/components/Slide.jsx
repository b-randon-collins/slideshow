// import React, { useEffect, useState } from 'react';
// const Slide = ({ slideIndex }) => {
//     const [content, setContent] = useState('');

//     useEffect(() => {
//         const loadSlide = async () => {
//             try {
//                 const response = await fetch(`slides/slide${slideIndex}.html`);
//                 const text = await response.text();
//                 setContent(text);
//             } catch (error) {
//                 console.error('Error loading slide:', error);
//             }
//         };
//         loadSlide();
//     }, [slideIndex]);

//     return (
//         <div
//             className="slide-content"
//             dangerouslySetInnerHTML={{ __html: content }}
//         />
//     );
// };

// export default Slide;
