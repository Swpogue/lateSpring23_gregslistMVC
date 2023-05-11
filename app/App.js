import { CarsController } from "./Controllers/CarsController.js";
import { HouseController } from "./Controllers/HouseController.js";
import { UserController } from "./Controllers/UserController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  carsController = new CarsController();

  userController = new UserController();

  houseController = new HouseController();
}

window["app"] = new App();
