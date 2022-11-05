import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Content Management System',
    imgSrc: '/img/home-page/cms.png',
    description: (
      <>
        Make sure your content is consistent and personalized for each
        customer with Adobe Experience Manager Sites.
        Create and manage your digital experience across all channels
        with automated toolsthat make scaling effortless.
      </>
    ),
  },
  {
    title: 'Digital Asset Management',
    imgSrc: '/img/home-page/dam.png',
    description: (
      <>
        Spend more time on experiences and less time searching for and adapting content.
        Adobe Experience Manager Assets gives you automation and smart tools to rapidly source,
        adapt,and deliver your assets across audiences and channels.
      </>
    ),
  },
  {
    title: 'Digital Enrollment and Forms',
    imgSrc: '/img/home-page/dig-enrollment.png',
    description: (
      <>
        Stop integrating point solutions.
        Adobe Experience Manager Forms is an end-to-end digital document solution
        that makes it easy to create responsive forms that customers can easily
        complete and securely e-sign, making a seamless customer journey
        from acquisition through retention.
      </>
    ),
  },
  {
    title: 'Cloud Service',
    imgSrc: '/img/home-page/cloud-service.png',
    description: (
      <>
        Stop paying for pricey upgrades with the first cloud-native
        enterprise-grade content management system.
        Get Experience Manager in the cloud with optimal performance,
        great service level agreements, and enterprise-grade security.
      </>
    ),
  },
  {
    title: 'Learning Manager',
    imgSrc: '/img/home-page/learning-manager.png',
    description: (
      <>
        Engage customers, increase sales, train partners,
        and develop employee skills with Adobe Learning Manager,
        the award-winning learning management system (LMS)
        that integrates learning experiences into your brand’s website and apps.
      </>
    ),
  },
  {
    title: 'Digital Guides',
    imgSrc: '/img/home-page/digital-guide.png',
    description: (
      <>
        Scale content creation, manage it efficiently,
        and publish faster with a cloud-native component content management system (CCMS),
        that empowers you to deliver consistent, engaging experiences across touchpoints.
      </>
    ),
  },
];

function Feature({title, imgSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
