// ServiceContext.js
import React, { createContext, useContext, useState } from "react";

const ServiceContext = createContext();

export const useServiceContext = () => useContext(ServiceContext);

export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Corporate Gifting",
      sub:"Explore our diverse selection of corporate gifts and tailor-made solutions for every occasion.",
      description: `
    We specialize in crafting bespoke corporate gifts tailored to the unique needs and preferences of your organization, regardless of its size. 
    Our mission is to assist businesses in fostering meaningful connections with their clients through thoughtful and personalized gifting solutions.
    With meticulous attention to detail and a commitment to quality, we curate an array of distinctive gifts that reflect your brand identity and resonate with your clientele.
    Whether you're a small startup or a large corporation, we understand the significance of expressing gratitude and strengthening relationships with your valued clients.
    Our dedicated team works closely with you to understand your objectives, budget, and branding guidelines, ensuring that every gift is aligned with your corporate identity and messaging. From elegant gift baskets to custom-branded merchandise, we offer a diverse selection of premium items that leave a lasting impression.
    At, we believe that every client deserves a memorable and meaningful gifting experience. Let us help you elevate your corporate gifting strategy and make a lasting impact on your clients. Reach out to us today to explore our personalized gifting solutions tailored to your organization's needs.`,
    },

    {
      id: 2,
      name: "Souvenirs for all Events",
      sub:'Souvenirs perfect for every event and occasion.',
      description: `
      Welcome to our Souvenir Customization Service!
      
      Elevate your special occasions with our bespoke souvenir solutions tailored to your every need. Whether it's a joyous wedding celebration, a memorable birthday bash, or a heartwarming naming ceremony, we specialize in curating unique and personalized gifts to add an extra touch of magic to your events.
      
      At our service, we pride ourselves on our ability to transform your vision into reality. From custom-designed invitations that set the tone for your event to meticulously crafted gift packages that leave a lasting impression, we're here to ensure that every detail is executed to perfection.
      
      Our team of experienced professionals is dedicated to understanding your preferences and desires, ensuring that each souvenir is a reflection of your unique style and personality. Whether you're looking for elegant keepsakes, practical mementos, or delightful tokens of appreciation, we have a wide range of options to suit every taste and occasion.
      
      Let us take the stress out of event planning by handling all aspects of souvenir customization for you. From conceptualization to delivery, we'll work closely with you every step of the way to ensure that your event is a truly unforgettable experience for both you and your guests.
      
      Contact us today to discuss your event needs, and let us bring your vision to life with our exquisite souvenir customization services.`,
    },
    {
      id: 3,
      name: "Amare Shopper",
      sub: 'Essential kitchen items for the modern workplace.',
      description:
        "Amare Shopper offers personalized shopping services tailored to your needs. From household and kitchen utensils to personal effects and customized items, we are here to assist you. Need foodstuff or fruit baskets? We`ve got you covered. Additionally, we offer import services to fulfill your specific requirements. Let us be your go-to personal shopper for all your needs",
    },
    {
      id: 4,
      name: "Amare Household",
      sub:'Amare Household products for a touch of elegance at home or in the office.',
      description: `
        
        Welcome to Amare Household, where we specialize in transforming your living or working spaces into stunning, revitalized environments. With our expertise in refurbishment, we offer comprehensive services tailored to both residential and commercial clients.
        
        At Amare Household, we understand that renovating a space can be a daunting task. That's why we take care of every aspect of the project, from conception to completion. Our dedicated team will work tirelessly to give your home or office the facelift it deserves, ensuring a seamless and stress-free experience for you.
        
        From upgrading your kitchen to installing exquisite plaster of Paris (PoP) finishes, we handle it all. Our meticulous attention to detail ensures that every aspect of your project is executed to perfection. Whether you're looking to breathe new life into your home or create a more inspiring work environment, we have the skills and expertise to make your vision a reality.
        
        When you choose Amare Household, you're not just getting a renovation service – you're getting a partner who is committed to delivering exceptional results. Let us turn your dream space into a tangible reality. Get in touch with us today to discuss your project and discover how we can transform your living or working space into something truly extraordinary.`,
    },
    {
      id: 5,
      name: "Amare Concierge Services",
      sub:'Concierge services to streamline your busy schedule.',
      description: `
      Welcome to Amare ViP Concierge Services, your premier destination for luxury travel assistance and concierge services. At Amare ViP, we specialize in providing comprehensive care for High Net Worth Individuals (HNIs) traveling for business meetings, shopping excursions, sightseeing adventures, and more, both within and outside Nigeria.
      
      Our dedicated team ensures that every aspect of your trip is meticulously planned and executed to perfection. From securing top-tier accommodations in luxurious hotels to arranging seamless transportation, including short lets and private jets, we take care of every detail so you can focus on enjoying your journey.
      
      At Amare ViP, we understand that your time is valuable. That's why we offer personalized travel assistance tailored to your unique preferences and requirements. Whether you need a knowledgeable companion to accompany you on your travels or assistance navigating unfamiliar destinations, our team is here to support you every step of the way.
      
      As a holistic concierge service, we pride ourselves on our ability to anticipate and fulfill your every need. From organizing exclusive experiences to arranging bespoke itineraries, we go above and beyond to ensure that your trip exceeds your expectations.
      
      Please note that while we do not provide air tickets or travel documents, we offer comprehensive assistance with all other aspects of your journey. With Amare ViP Concierge Services, you can trust that your travel experience will be nothing short of extraordinary.`,
    },
    {
      id: 6,
      name: "Specialized Services",
      sub:'Specialized solutions designed to meet unique corporate requirements.',
      description:
        `Our specialized services cater to your business's unique needs:

        Customized Strategy Development: Tailored strategies aligned with your goals.
        
        Industry-Specific Expertise: Deep knowledge across sectors for relevant solutions.
        
        Advanced Technology Integration: Cutting-edge tech integration for enhanced operations.
        
        Regulatory Compliance and Risk Management: Comprehensive compliance and risk strategies.
        
        Innovation and R&D Support: Dedicated support for innovation and growth.
        
        Change Management and Organizational Transformation: Smooth transitions with tailored change management.
        
        Strategic Partnerships and Alliances: Facilitation of key partnerships for market expansion.
        
        Empower your business with expertise and tailored solutions to thrive in today's competitive landscape.`,
    },
    {
      id: 7,
      name: "Project organization Services",
      sub:'Project organization services to ensure smooth execution and success.',
      description:
        `
   
        
        Welcome to our project organization services, where we specialize in providing trusted project management solutions to bring your visions to fruition. At our core, we are the guiding hand you need to oversee and navigate your projects seamlessly. Whether you're constructing buildings or launching tech startups, we're here to organize, manage, and propel your project into reality.
        
        Our comprehensive project management services extend to various industries, ensuring that regardless of your field, we have the expertise to handle your needs. From the inception of your project to its final execution, we're dedicated to ensuring its success. Here's how we make it happen:
        
        Expert Oversight: With years of experience under our belt, we offer expert oversight throughout every stage of your project. Our team of seasoned professionals will guide you through the intricacies of project management, providing invaluable insights and solutions tailored to your specific requirements.
        
        Diverse Portfolio: No project is too big or too small for us. Our portfolio spans across a wide range of industries, including but not limited to construction, technology, real estate, and more. Whether you're a startup looking to disrupt the market or an established organization embarking on a new venture, we've got you covered.
        
        Organizational Excellence: Organization is the cornerstone of successful project management, and we excel in this regard. From meticulously planning every detail to coordinating resources and timelines, we ensure that your project stays on track and within budget.
        
        Global Reach: While we're based in Nigeria, our services extend far beyond geographical boundaries. Whether you're located locally or internationally, we're equipped to deliver exceptional project management solutions tailored to your location and unique needs.
        
        Monitoring and Delivery: We understand the importance of keeping a close eye on your project's progress. With our robust monitoring systems in place, we provide real-time updates and insights, ensuring that any potential issues are addressed promptly and efficiently. Our ultimate goal? Delivering your project on time, every time.
        
        Tailored Solutions: We recognize that every project is unique, which is why we offer personalized solutions designed to meet your specific objectives. Whether you require assistance with project planning, risk management, or stakeholder communication, we're here to tailor our services to suit your needs.
        
        In essence, we're more than just project managers – we're your trusted partners in bringing your ideas to fruition. With our expertise, dedication, and commitment to excellence, we're here to turn your vision into reality. Get in touch with us today, and let's embark on this journey together.`,
    },
  ]);

  return (
    <ServiceContext.Provider value={{ services, setServices }}>
      {children}
    </ServiceContext.Provider>
  );
};
