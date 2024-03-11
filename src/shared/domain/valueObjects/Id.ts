import { v4, validate } from "uuid";
import { ValueObject } from "./ValueObject";
import { InvalidArgumentError } from "../errors/InvalidArgumentError";

export class Id extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureIsValid(value);
  }

  static random(): Id {
    return new Id(v4());
  }

  private ensureIsValid(id: string): void {
    if (!validate(id)) {
      throw new InvalidArgumentError(`${id} is not a valid uuid`);
    }
  }
}
