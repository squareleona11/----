interface getKdaProps {
  kills: number;
  deaths: number;
  assists: number;
}
/**
 * kda를 계산하여 반환한다.
 * @param kills
 * @param deaths
 * @param assists
 */
export function getKDA(props: getKdaProps) {
  if (!props.kills && !props.assists && !props.deaths) return 0;
  const KDA = ((props.kills + props.assists) / props.deaths).toFixed(2);
  return Number(KDA);
}

interface getWinRateProps {
  wins: number;
  totalPlay: number;
}
/**
 * 승률을 계산한다
 * @param wins
 * @param totalPlay
 */
export function getWinRate(props: getWinRateProps) {
  if (!props.wins && !props.totalPlay) return 0;
  return Math.floor((props.wins / props.totalPlay) * 100);
}

/**
 * diff today (오늘 - 비교날짜)
 * @param date
 */
export function diffTodayDay(date: Date) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const today = new Date();
  // Discard the time and time-zone information.
  const utcDate = Date.UTC(date.getFullYear(), date.getMonth(), date.getDay());
  const utcToday = Date.UTC(
    today.getFullYear(),
    today.getMonth(),
    today.getDay()
  );

  return Math.floor((utcToday - utcDate) / _MS_PER_DAY);
}
