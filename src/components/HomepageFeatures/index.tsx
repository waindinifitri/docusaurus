import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<"svg">>;
  img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Secure",
    img: "img/secure.png",
    description: (
      <>
        Our security application covers various aspects such as data protection,
        segregation, and security enhancements in a modular fashion, ensuring a
        robust and adaptable system.​
      </>
    ),
  },
  {
    title: "Compliance",
    img: "img/compliance.png",
    description: (
      <>
        Ensuring that the organization follows laws and regulations relevant to
        the business operations. Also ensure that companies are conducting
        screenings lawfully and ethically, while also protecting the privacy and
        rights of individuals being screened.
      </>
    ),
  },
  {
    title: "Multitenancy",
    img: "img/multitenancy.png",
    description: (
      <>
        Our Multitenancy terms is enabling franchisees and tenants to tailor
        features according to their unique business processes.
      </>
    ),
  },
];

function Feature({ title, img, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img
          src={img}
          className={styles.featureImg}
          alt={title}
          style={{ width: "20%", height: "auto" }}
        />{" "}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
