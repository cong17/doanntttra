export function getNextSevenDays(): string[] {
  const days: string[] = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  const next7Days: string[] = [];
  for (let i = 0; i < 7; i++) {
    next7Days.push(days[new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000).getDay()]);
  }
  return next7Days;
}
