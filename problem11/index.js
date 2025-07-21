function tinyTimeAgo(date) {
  const now = new Date();
  const seconds = Math.floor((now - new Date(date)) / 1000);
  const intervals = [
    [60, 'second'],
    [60, 'minute'],
    [24, 'hour'],
    [30, 'day'],
    [12, 'month'],
    [Infinity, 'year']
  ];

  let time = seconds;
  let unit = 'second';

  for (let i = 0; i < intervals.length; i++) {
    if (time < intervals[i][0]) break;
    time /= intervals[i][0];
    unit = intervals[i][1];
  }

  time = Math.floor(time);
  return `${time} ${unit}${time !== 1 ? 's' : ''} ago`;
}

module.exports = tinyTimeAgo;
