const logDriverNames = function (drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function (drivers,  hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name)
    }
  })
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function(one,two) {
    return one.revenue - two.revenue;
  });
};

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

const averageRevenue = function (drivers) {
    return totalRevenue(drivers)/drivers.length;
}
