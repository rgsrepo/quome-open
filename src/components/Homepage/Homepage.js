import React from "react";
import { Link } from "@reach/router";
import { Button } from "react-bootstrap";

import mockData from "../../data/data";

import styles from "./homepage.module.css";

const Class = (props) => {
  return (
    <Link to={props.to}>
      <Button className={styles.square} variant="primary" size="lg">
        {props.children}
      </Button>
    </Link>
  );
};

const Homepage = (props) => {
  return (
    <div className="mb-2">
      {mockData &&
        Object.values(mockData.classLevels).map((classLevel) => {
          const { name } = classLevel;
          return (
            <Class
              key={`class-${name}`}
              to={`/class/${name}`}
              classData={classLevel}
            >
              {name}
            </Class>
          );
        })}
    </div>
  );
};

export default Homepage;