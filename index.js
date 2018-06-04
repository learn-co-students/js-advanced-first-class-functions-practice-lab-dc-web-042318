// Code your solution in this file!

const logDriverNames = function (array) {
	array.forEach(function(element){console.log(element.name)})
}

const logDriversByHometown = function (array, hometown) {
	return logDriverNames(array.filter(function (driver){return driver.hometown===hometown}))
}

const driversByRevenue = function (array) {
	const newArray = [...array];
	return newArray.sort(function (a, b) { return a.revenue-b.revenue })
}

const driversByName = function (array) {
	const newArray = [...array]
	return newArray.sort(function (a,b){return a.name.localeCompare(b.name)})
}

const totalRevenue = function (array) {
	return array.slice().reduce(function (rev, driver){return rev + driver.revenue}, 0)
}

const averageRevenue = function (array) {
	return totalRevenue(array)/array.length
	
}