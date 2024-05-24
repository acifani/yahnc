'use client';

import css from './HideButton.module.css';

import { useState } from 'react';

export function HideButton({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true);

  return (
    <>
      <button className={css.btn} onClick={() => setShow((s) => !s)}>
        {show ? 'Hide' : 'Show'}
      </button>{' '}
      {show && children}
    </>
  );
}
