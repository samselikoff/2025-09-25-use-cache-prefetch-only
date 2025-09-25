'use client';

export function SecondsSince({ timestamp }: { timestamp: number }) {
  const diff = Date.now() - timestamp;

  return Math.floor(diff / 1000);
}
