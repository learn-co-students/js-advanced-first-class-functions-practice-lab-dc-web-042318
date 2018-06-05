// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function (driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, hometown){
  drivers.forEach(function (driver) {
    if (driver.hometown == hometown) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  let newarr =  drivers.slice().sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue
  })
  return newarr
}

function driversByName(drivers) {
  let newarr = drivers.slice()
  newarr.sort(function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name)
  })
  return newarr
}

function totalRevenue(drivers) {
  const newarr = drivers.map(driver => driver.revenue)
  return newarr.reduce((total, element) => total + element)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
