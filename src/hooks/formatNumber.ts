const formatNumber = (value: number): string => (
  new Intl.NumberFormat('ru-RU').format(value)
)

export default formatNumber
