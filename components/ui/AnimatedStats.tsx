"use client";

import { useState, useEffect, useRef } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 500, suffix: "+", label: "Profesionales capacitados" },
  { value: 50, suffix: "+", label: "Empresas transformadas" },
  { value: 100, suffix: "+", label: "Proyectos entregados" },
  { value: 10, suffix: "+", label: "Años de experiencia" },
];

function AnimatedStat({ value, suffix, label }: Stat) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-display font-semibold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}

export function AnimatedStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <AnimatedStat key={index} {...stat} />
      ))}
    </div>
  );
}
