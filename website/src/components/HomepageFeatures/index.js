import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Reverse Proxy',
    Svg: require('@site/static/img/undraw_online_connection.svg').default,
    description: (
      <>
        Arc routes incoming internet traffic to the right spot in your network
      </>
    ),
  },
  

  {
    title: 'Load-Balancer',
    Svg: require('@site/static/img/undraw_server_status.svg').default,
    description: (
      <>
        Arc balances traffic across servers to prevent overload and keep your application running smoothly
      </>
    ),
  },
  {
    title: 'Tunneling Service',
    Svg: require('@site/static/img/undraw_connected_world.svg').default,
    description: (
      <>
        Arc provides secure access to your internal services from the internet
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
