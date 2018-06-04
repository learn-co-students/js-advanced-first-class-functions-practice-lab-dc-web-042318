// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function(driver){
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, location) {
  locationDrivers = drivers.filter(driver => driver.hometown === location);
  logDriverNames(locationDrivers);
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(driverOne, driverTwo){
    return driverOne.revenue - driverTwo.revenue;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function(driverOne, driverTwo){
    return driverOne.name.localeCompare(driverTwo.name);
  })
}

function totalRevenue(drivers) {
  const reducer = (revSum, currentDriver ) => revSum + currentDriver.revenue;
  return drivers.reduce(reducer, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
