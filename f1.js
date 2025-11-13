import * as f1js from "formula-one-js";
const { results, drivers, seasons} = f1js.requests();

const arg = process.argv[2];

drivers.getDriversByYear(arg).then(driverList => {
  console.log('Total number of drivers: ', driverList.length + '\n');
  driverList.map(driver => {
    console.log('Driver: ', driver.givenName + ' ' + driver.familyName + ' (' + driver.nationality + ')');
  })
});