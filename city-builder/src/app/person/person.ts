import {Gender} from "./gender";
import {Profession} from "./profession";
import {Race} from "./race"

/**
 * A POD Representing a person
 */
export class Person {

  firstName: string;
  lastName: string;
  gender: Gender;
  profession: Profession;
  age: number;
  race: Race;
}
