class Vehicle {

    constructor(public color: string) {}

    protected honk(): void {
    console.log('uuuu');
  }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color);

class Car extends Vehicle {
    constructor(public wheels: number, color: string){
        super(color)
    }

 private drive(): void {
    console.log('ttttt');
  }

  startDrivingProcess(): void {
     this.drive()
  }
}

const car = new Car(4,'red');
car.startDrivingProcess();

