import React from 'react';
import { FiCornerDownRight } from 'react-icons/fi';

function AboutUs() {
  return (
    <>
      <div className="p-4 p-md-5 text-light bg-primary">
        <h1 className="text-white col-md-6">About us <FiCornerDownRight /></h1>
        <div className="col-md-12 px-0 d-flex justify-content-center" >
          <p className="my-3 col-md-9">
          Welcome to Galway News, a news blog with a focus on current events, politics, lifestyle and culture. Here at Galway News, we believe in the power of information. Launched in 2015, our mission has always been to bring quality, up-to-date news to our readers free of charge. We provide the most extensive daily coverage of news as it affects Galwegians. Today, in 2021, Galway News is the leading online news blog in the West of Ireland. Our focus has always been providing reliable news about our great city, and we also strive to be a trusted source for current events in Ireland and wider afield. 
          You can peruse all our articles and archives here on our ad-free site. Feel free to follow us on social media (Facebook, Twitter and Instagram) for the best in breaking news, politics and features. If you have a story you think should be featured, you can email us in the GET IN TOUCH section down below, or write us a suggestion in our 'Suggest' page.           </p>
        </div>
      </div>
    </>
  )
}

export default AboutUs;