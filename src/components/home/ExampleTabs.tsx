"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import styles from "./HomeClear.module.css";

type Example = { id: string; label: string; content: ReactNode };

export default function ExampleTabs({ items }: { items: Example[] }) {
  const [selected, setSelected] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case "ArrowRight": next = (index + 1) % items.length; break;
      case "ArrowLeft": next = (index + items.length - 1) % items.length; break;
      case "Home": next = 0; break;
      case "End": next = items.length - 1; break;
      default: return;
    }
    event.preventDefault();
    setSelected(next);
    buttons.current[next]?.focus();
  }

  return (
    <div className={styles["showcase-frame"]}>
      <div className={styles.tabs} role="tablist" aria-label="Explorar ejemplos reales">
        {items.map(({ id, label }, index) => (
          <button
            key={id}
            ref={(node) => { buttons.current[index] = node; }}
            type="button"
            id={`tab-${id}`}
            role="tab"
            aria-selected={selected === index}
            aria-controls={`panel-${id}`}
            tabIndex={selected === index ? 0 : -1}
            onClick={() => setSelected(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            <span className={styles["tab-number"]} aria-hidden="true">0{index + 1}</span>
            {label}
            <span className={styles["tab-arrow"]} aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      {items.map(({ id, content }, index) => (
        <div
          key={id}
          id={`panel-${id}`}
          className={styles["showcase-panel"]}
          role="tabpanel"
          aria-labelledby={`tab-${id}`}
          tabIndex={0}
          hidden={selected !== index}
        >
          {content}
        </div>
      ))}
    </div>
  );
}
