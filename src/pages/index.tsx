import React from 'react';
import styles from './index.less';
import { Link } from 'umi';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index eicp</h1>
      <Link to="./app1">去菜单1</Link>
    </div>
  );
};
