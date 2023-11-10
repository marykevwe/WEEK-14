import React from 'react';
import Card from './Card';

function Body() {
  const cardsData = [
    {
      title: 'Card 1',
      content: (
        <>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">About Us</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            At MaryKTech Solutions, we are at the forefront of innovation, delivering cutting-edge technology solutions that empower businesses and individuals to thrive in the digital age. With a passion for technology and a commitment to excellence, we have become a trusted partner for our clients, helping them navigate the complexities of the ever-evolving tech landscape.
          </p>
        </>
      ),
    },
    {
      title: 'Card 2',
      content: (
        <>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Why MaryKTech Solutions?</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          We're more than just a tech company. We're your partner in progress, your guide through the digital landscape, and your ally in the pursuit of innovation. With a passion for technology and a commitment to excellence, we offer a world of possibilities to help you thrive in the digital age.
          </p>
        </>
      ),
    },
    {
      title: 'Card 3',
      content: (
        <>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Our Promise to You</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          🚀 Innovation: We stay on the cutting edge of technology to provide you with the latest and most advanced solutions.
<p>💼 Tailored Solutions: Your unique needs are our priority. We create custom solutions that fit your business like a glove.
</p> <p> 🛡️ Security: We take your digital safety seriously. Our expert team ensures your data is protected at all times.
</p><p>📈 Growth: Your success is our success. We're dedicated to helping you achieve your tech goals and beyond.
</p>
          </p>
        </>
      ),
    },
    {
      title: 'Card 4',
      content: (
        <>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Our Services</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
         <p> 1.	Custom Software Development</p>
          <p>2.	Web Development</p> 
          <p> 3.	Mobile App Development</p>
          <p> 4.	Cybersecurity Services </p>
          <p> 5.	Cloud Services</p>
          <p>6.	Artificial Intelligence (AI) and Machine Learning (ML): Data Analytics and Business Intelligence</p>
          <p> 7.	Blockchain Development</p>
          <p> 8.	IoT (Internet of Things) Development</p>
          <p> 9.	IT Consulting </p>
          <p> 10.	DevOps and Continuous Integration/Continuous Deployment (CI/CD)</p>
          <p> 11.	User Experience (UX) and User Interface (UI) Design</p>
          <p> 12.	Quality Assurance and Testing</p>
          <p>13.	Cloud Migration and Management </p>
          <p> 14.	Tech Support and Maintenance:</p>
          </p>
        </>
      ),
    },
  ];
  return (
    <div className="pt-16 flex bg-white h-full">
      <div className="ml-[300px] p-8">
        <h2 className="text-blue-800 text-4xl font-bold text-center mb-6">
          Welcome to MaryKTech Solutions
        </h2>
        <div className="grid grid-cols-2 gap-4 w-[800px]">
          {cardsData.map((card, index) => (
            <Card key={index}>
              {card.content}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
