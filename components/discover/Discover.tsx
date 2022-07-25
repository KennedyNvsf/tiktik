import React from 'react';
import styles from "../discover/dicover.module.scss";
import Link from 'next/link';
import { useRouter } from "next/router";
import { topics } from "../../utils/constants";

const Discover = () => {
    const router = useRouter();
    const {topic} = router.query;
  return (
    <div className="discover-wrapper">
      <p>Popular Topics</p>
      <div className="discover-topics-container">
        {topics.map((item) => (
          <Link href={`/?topic=${item.name}`} key={item.name}>
            <div  className={topic === item.name ? 'active-topic-styles' : 'topic-styles'}>
              <span className="discover-icon">
                {item.icon}
              </span>
              <span className="discover-icon-name">
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Discover;