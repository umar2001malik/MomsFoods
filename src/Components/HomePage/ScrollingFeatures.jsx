import React from "react";
import { useTranslation } from "react-i18next";

const ScrollingFeatures = () => {
  const { t } = useTranslation();

  const features = [
    t('scrollingFeatures.ovenBaked'),
    t('scrollingFeatures.highFiber'),
    t('scrollingFeatures.allNatural'),
    t('scrollingFeatures.veganVegetarian'),
    t('scrollingFeatures.mineralsSource'),
    t('scrollingFeatures.vitaminsSource'),
    t('scrollingFeatures.proteinSource')
  ];

  return (
    <section className="bg-[#8B5E3C] py-4 overflow-hidden">
      <style>
        {`
          @keyframes marquee {
            0% { left: 0%; }
            100% { left: -100%; }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          .hover\\:pause:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="relative h-8">
        <div className="absolute whitespace-nowrap animate-marquee hover:pause flex items-center">
          {features.map((feature, index) => (
            <span key={index} className="mx-8 text-white font-semibold text-lg">
              {feature}
            </span>
          ))}
          {features.map((feature, index) => (
            <span key={`copy-${index}`} className="mx-8 text-white font-semibold text-lg">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingFeatures;