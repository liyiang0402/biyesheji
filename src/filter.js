let clothingType = (type) => {
  let clothTypeFilter
  switch (type) {
    case '0':
      clothTypeFilter = '背心'
      break
    case '1':
      clothTypeFilter = '衬衫'
      break
    case '2':
      clothTypeFilter = 'T-恤衫'
      break
    case '3':
      clothTypeFilter = '西装'
      break
    case '4':
      clothTypeFilter = '夹克'
      break
    case '5':
      clothTypeFilter = '棉服'
      break
    case '6':
      clothTypeFilter = '短裤'
      break
    case '7':
      clothTypeFilter = '牛仔裤'
      break
  }
  return clothTypeFilter
}

let orderType = (type) => {
  let orderTypeFilter
  switch (type) {
    case '0':
      orderTypeFilter = '未发货'
      break
    case '1':
      orderTypeFilter = '已发货'
      break
    case '2':
      orderTypeFilter = '待收货'
      break
    case '3':
      orderTypeFilter = '已签收'
      break
  }
  return orderTypeFilter
}

export { clothingType,orderType }
