"use client";

import { motion, useReducedMotion } from "motion/react";

export function BarbellVisual() {
  const reduce = useReducedMotion();
  const slide = (distance: number, delay: number) => ({
    initial: reduce ? false : { x: distance, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
  });
  return (
    <svg className="barbell-visual" viewBox="0 0 680 190" aria-hidden="true">
      <path className="bar-track" d="M38 95h604" />
      <motion.g {...slide(-50, 0.1)}><rect x="76" y="45" width="28" height="100" rx="4" /><rect x="112" y="29" width="43" height="132" rx="5" /></motion.g>
      <motion.g {...slide(-35, 0.22)}><rect x="166" y="56" width="24" height="78" rx="4" /></motion.g>
      <motion.g {...slide(50, 0.1)}><rect x="576" y="45" width="28" height="100" rx="4" /><rect x="525" y="29" width="43" height="132" rx="5" /></motion.g>
      <motion.g {...slide(35, 0.22)}><rect x="490" y="56" width="24" height="78" rx="4" /></motion.g>
      <motion.path initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.35 }} d="M190 95h300" />
      <text x="340" y="84" textAnchor="middle">PLAN • TRAIN • ADJUST</text>
      <text className="barbell-small" x="340" y="120" textAnchor="middle">BUILT AROUND YOUR REAL LIFE</text>
    </svg>
  );
}

export function MacroVisual() {
  const reduce = useReducedMotion();
  return (
    <svg className="macro-visual" viewBox="0 0 360 360" aria-hidden="true">
      <circle className="macro-ring" cx="180" cy="180" r="126" />
      <motion.path initial={reduce ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.1 }} d="M180 54a126 126 0 0 1 109 189" />
      <motion.path initial={reduce ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.15 }} d="M289 243a126 126 0 0 1-201 20" />
      <motion.path initial={reduce ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.3 }} d="M88 263A126 126 0 0 1 180 54" />
      <circle cx="180" cy="180" r="66" />
      <text x="180" y="174" textAnchor="middle">FUEL</text>
      <text x="180" y="202" textAnchor="middle">THE PLAN</text>
    </svg>
  );
}

export function PeptideVisual() {
  const reduce = useReducedMotion();
  const nodes = [[44, 154], [94, 112], [145, 146], [198, 94], [252, 132], [312, 76], [370, 112], [430, 60]];
  return (
    <svg className="peptide-visual" viewBox="0 0 480 210" aria-hidden="true">
      <motion.path initial={reduce ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} d="M44 154 94 112l51 34 53-52 54 38 60-56 58 36 60-52" />
      {nodes.map(([cx, cy], index) => (
        <motion.circle key={index} cx={cx} cy={cy} r={index % 3 === 0 ? 17 : 12} initial={reduce ? false : { scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.08 * index, ease: [0.16, 1, 0.3, 1] }} />
      ))}
      <text x="44" y="196">VERIFY THE SOURCE. VERIFY THE CLAIM.</text>
    </svg>
  );
}
