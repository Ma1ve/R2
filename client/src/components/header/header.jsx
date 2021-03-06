import React from 'react';
import { ContentWrapper } from '../content-wrapper';
import WaveImage from './wave.svg';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <ContentWrapper className={styles.content}>
        <h1 className={styles.title}>{`Путешествуйте с\n комфортом`}</h1>
        <p
          className={
            styles.desc
          }>{`С нашей компанией вы забудете обо всем, кроме\n высокого уровня`}</p>
      </ContentWrapper>
      <img src={WaveImage} alt="" className={styles.wave} />
    </div>
  );
};
