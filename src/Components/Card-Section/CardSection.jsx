import React from 'react';
import verify from '../../images/Verify.123cc5f85d298b449ecd.png';
import learner from '../../images/learnerPermit.a9121a5ce76ceade5226.png';
import permanent from '../../images/Permanent License.2aa0bb1fcd0b9f3e0ad5.png';
import international from '../../images/International.d6b774abc970659a1047.png';
import duplicatee from '../../images/Duplicate 2.d700aa89513028b6be7f.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Card from './CardChild';

function CardSection() {
  const cardData = [
    {
      image: verify,
      title: "License Verification",
      description: "Get your verification through your CNIC number.",
      linkText: "Verification",
      linkUrl: "",
    },
    {
      image: learner,
      title: "Learner Permit",
      description: "Find Out More About Requirements",
      linkText: "Get Info",
      linkUrl: "",
    },
    {
      image: permanent,
      title: "Permanent License",
      description: "Learn About Permanent License Criteria",
      linkText: "Get Info",
      linkUrl: "",
    },
    {
      image: international,
      title: "International License",
      description: "Get Full Requirements for International License",
      linkText: "Get Info",
      linkUrl: "",
    },
    {
      image: duplicatee,
      title: "Duplicate License",
      description: "Get Duplicate License Requirements",
      linkText: "Get Info",
      linkUrl: "",
    },
  ];

  return (
    <motion.div 
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="card-container"
    >
      {cardData.map((card, index) => (
        
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          linkText={card.linkText}
          linkUrl={card.linkUrl}
        />
      ))}
    </motion.div>
  );
}

export default CardSection;
