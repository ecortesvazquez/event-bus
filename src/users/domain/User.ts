import { AggregateRoot } from "@/shared/domain/AggregateRoot";
import { UserCreatedDomainEvent } from "./domainEvents/UserCreatedDomainEvent";
import type { UserId } from "./valueObjects/UserId";
import type { UserName } from "./valueObjects/UserName";
import type { UserEmail } from "./valueObjects/UserEmail";
import type { UserStatus } from "./valueObjects/UserStatus";

export class User extends AggregateRoot {
  readonly id: UserId;
  readonly name: UserName;
  readonly email: UserEmail;
  readonly status: UserStatus;

  constructor(user: {
    id: UserId;
    name: UserName;
    email: UserEmail;
    status: UserStatus;
  }) {
    super();
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.status = user.status;
  }

  static create(user: {
    id: UserId;
    name: UserName;
    email: UserEmail;
    status: UserStatus;
  }): User {
    const mewUser = new User(user);

    const userEvent = new UserCreatedDomainEvent({
      id: user.id.value,
      name: user.name.value,
      email: user.email.value,
      status: user.status.value,
    });
    mewUser.record(userEvent);

    return mewUser;
  }
}
