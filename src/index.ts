export function getPosition(time: number, duration: number) {
  if (duration) {
    const percent = time <= duration ? time / duration : 1
    return `calc(${percent * 100}% - 0.1px)`
  }
  return '-9999px'
}

export function getWidth(time: number, endTime: number, duration: number) {
  if (duration) {
    const startValue = duration - time
    const changeDueStartTime = startValue / duration

    const endValue = duration - endTime
    const changeDueToEndTime = endValue / duration

    const totalChange = changeDueStartTime - changeDueToEndTime
    return `calc(${totalChange * 100}% )`
  }
  return '-9999px'
}
