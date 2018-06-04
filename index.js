// Code your solution in this file!

function logDriverNames (drivers) {
  return drivers.map(function (driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown (drivers, hometown) {
  return drivers.map(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue (drivers) {
    // sort by value
    const result = drivers.slice().sort(function (a, b) {
        return a.revenue - b.revenue;
    });
    return result;
}

function driversByName(drivers){
const result = drivers.slice().sort(function(a,b){
    //return a.name - b.name;
    return a.name.localeCompare(b.name);
    })
return result;
}

function totalRevenue(drivers) {
    var revenues = drivers.map(function(driver) {
        return driver.revenue
    })
    console.log(revenues)
    var sum = revenues.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    return sum;
}

function averageRevenue(drivers) {
    return totalRevenue(drivers)/drivers.length;
}
