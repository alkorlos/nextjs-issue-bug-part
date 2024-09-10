'use client';

import { useEffect } from 'react';

import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    import('./helloWorld');
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <hello-world className={styles['hello-world']}></hello-world>
      </main>
    </div>
  );
}
