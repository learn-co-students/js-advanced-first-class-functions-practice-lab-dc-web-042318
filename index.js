function logDriverNames(drivers) {
  return drivers.forEach(driver => console.log(driver.name));
}

function logDriversByHometown(drivers, town) {
  const matchingDrivers = drivers.filter(driver => driver.hometown === town);
  return matchingDrivers.forEach(driver => console.log(driver.name));
}

function driversByRevenue(drivers) {
  const newDrivers = drivers.slice();
  const sortRevenue = function (a, b) {
    return a.revenue - b.revenue;
  };
  return newDrivers.sort(sortRevenue);
}

function driversByName(drivers) {
  const newDrivers = drivers.slice();

  const nameSorter = function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
  };
  return newDrivers.sort(nameSorter);
}

function totalRevenue(drivers) {
  const revenues = drivers.map(driver => driver.revenue);
  return revenues.reduce((sum, n) => sum + n);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
