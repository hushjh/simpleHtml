function filterData(str) {
  str = str.replace( /[^0-9]+/g, ',')
  str = str.replace(/^,/g, '')
  str = str.replace(/,$/g, '')
  return str.split(',')
}