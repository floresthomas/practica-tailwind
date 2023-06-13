import React from "react";
import correo from "../assets/correo.png";
import aumento from "../assets/aumento.png";
import mallshop from "../assets/mallshop.jpg";
import message from "../assets/message.jpg";
import dart from "../assets/dart.png";
import flecha from "../assets/flecha.jpg";

const data = [
  {
    title: "Grow Your Email List",
    text: "Our high-converting optin forms like Exit-Intent® popups, Fullscreen Welcome Mats, and Scroll boxes help you dramatically boost conversions and get more email subscribers.",
    icon: correo,
  },
  {
    title: "Increase Sales Conversion",
    text: "Our smart targeting features allow you to display relevant promotions to improve your overall sales conversion rate and drive more revenue from your existing traffic.",
    icon: aumento,
  },
  {
    title: "Reduce Cart Abandonment",
    text: "On average 67.91% of shopping carts are abandoned. OptinMonster uses time-sensitive behavior based offers to drastically reduce overall cart abandonment & boost sales.",
    icon: mallshop,
  },
  {
    title: "Targeted Website Messages",
    text: "Our Onsite Follow Up Campaign™ solution helps you display targeted website messages to your existing newsletter subscribers, customers, and returning visitors.",
    icon: message,
  },
  {
    title: "Increase Your Pageviews",
    text: "Our behavior detection rules combined with the Yes / No feature significantly increase your pageviews by redirecting engaged website visitors to your most popular pages.",
    icon: flecha,
  },
  {
    title: "Onsite Retargeting",
    text: "Over 70% of visitors abandoning your website never return. Our Onsite Retargeting® solution uses behavior automation to turn abandoning visitors into subscribers & customers.",
    icon: dart,
  },
];

const Benefits = () => {
  return (
    <div className="flex flex-wrap px-6 py-8">
      {data.map((item, index) => (
        <div key={index} className="w-1/3 p-4 flex items-center">
          <div>
            <h2 className="text-lg font-bold mb-2 flex items-center">
              <img src={item.icon} alt="Icono" className="w-8 h-8 mr-2" />
              {item.title}
            </h2>
            <p className="text-sm">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
