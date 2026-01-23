
import React from "react";
import Card from "./components/Card";
import amazonLogo from "./assets/amazonlogo.png"
import GoogleLogo from "./assets/goggle.png"
import MicrosoftLogo from "./assets/microsoft.png"
import FacebookLogo from "./assets/facebook.png"
import AppleLogo from "./assets/apple.png"
import NetflixLogo from "./assets/netflix.png"
import TeslaLogo from "./assets/tesla.png"
import AdobeLogo from "./assets/adobe.png"
import SpotifyLogo from "./assets/shopify.png"
import LinkedInLogo from "./assets/linkdin.png"
const App = () => {

 const jobCards = [
  {
    image:amazonLogo,
    company: "Amazon",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    jobType: "Part Time",
    level: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    image:GoogleLogo,
    company: "Google",
    posted: "3 days ago",
    role: "Frontend Developer",
    jobType: "Full Time",
    level: "Mid Level",
    pay: "$100/hr",
    location: "Bangalore, India"
  },
  {
    image:MicrosoftLogo,
    company: "Microsoft",
    posted: "1 week ago",
    role: "Backend Developer",
    jobType: "Full Time",
    level: "Senior Level",
    pay: "$110/hr",
    location: "Hyderabad, India"
  },
  {
     image:FacebookLogo,
    company: "Facebook",
    posted: "2 days ago",
    role: "Product Designer",
    jobType: "Part Time",
    level: "Junior Level",
    pay: "$90/hr",
    location: "Pune, India"
  },
  {
     image:AppleLogo,
    company: "Apple",
    posted: "4 days ago",
    role: "iOS Developer",
    jobType: "Full Time",
    level: "Mid Level",
    pay: "$130/hr",
    location: "Chennai, India"
  },
  {

    image:NetflixLogo,
    company: "Netflix",
    posted: "6 days ago",
    role: "UI Developer",
    jobType: "Part Time",
    level: "Senior Level",
    pay: "$115/hr",
    location: "Mumbai, India"
  },
  {
    image:TeslaLogo,
    company: "Tesla",
    posted: "5 days ago",
    role: "UX Researcher",
    jobType: "Full Time",
    level: "Mid Level",
    pay: "$105/hr",
    location: "Bangalore, India"
  },
  {
    image:AdobeLogo,
    company: "Adobe",
    posted: "3 days ago",
    role: "Visual Designer",
    jobType: "Full Time",
    level: "Senior Level",
    pay: "$125/hr",
    location: "Delhi, India"
  },
  {
    image:SpotifyLogo,
    company: "Spotify",
    posted: "1 week ago",
    role: "Interaction Designer",
    jobType: "Part Time",
    level: "Mid Level",
    pay: "$95/hr",
    location: "Kolkata, India"
  },
  {
    image:LinkedInLogo,
    company: "LinkedIn",
    posted: "2 days ago",
    role: "Product Designer",
    jobType: "Full Time",
    level: "Senior Level",
    pay: "$120/hr",
    location: "Hyderabad, India"
  }
];

console.log(jobCards);








  return (
    <div className='w-[100%]  bg-[#111] p-[30px] flex flex-wrap gap-8'>
  {
    jobCards.map((card,index)=>{
      return <div key={index}> 
        <Card image={card.image} company={card.company} posted={card.posted} role={card.role} jobType={card.jobType} level={card.level}  pay={card.pay} location={card.location}/>
          </div>
    })
  }
   


    </div>
  );
};

export default App;
