import { FleetRepository } from "../../src/Domain/Ports/FleetRepository";
import { Location } from "../../src/Domain/Models/Location";
import { User } from "../../src/Domain/Models/User";
import { Vehicle } from "../../src/Domain/Models/Vehicle";

export interface StepContext {
  repository: FleetRepository;
  user: User;
  vehicle: Vehicle;
  fleetId: string;
  location: Location;
  otherUser: User;
  otherFleetId: string;
  parkingAttemptError: Error | null;
  registrationError: Error | null;
}
