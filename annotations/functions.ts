const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  return undefined;
};

const throwError = (message: string): never => {
  throw new Error(message);
}; // we use never in case that function will not return anything ever


const forecast = {
    date: new Date(),
    weather: 'sunny'
}
// distraction in annotation
const logWeather = ( { date, weather}: { date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
}

logWeather(forecast)