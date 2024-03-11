import type { EventBus } from "@/shared/domain/event/EventBus";
// import { User } from "../../domain/User";
import { User } from "@/users/domain/User";
import { UserId } from "../../domain/valueObjects/UserId";
import { UserName } from "../../domain/valueObjects/UserName";
import { UserEmail } from "../../domain/valueObjects/UserEmail";
import { UserStatus } from "../../domain/valueObjects/UserStatus";

export class CreateUserUseCase {
  constructor(private readonly eventBus: EventBus) {}

  async execute(user: {
    id: string;
    name: string;
    email: string;
  }): Promise<void> {
    const userId = UserId.random();
    const userName = new UserName(user.name);
    const userEmail = new UserEmail(user.email);
    const userStatus = new UserStatus("active");

    const newUser = User.create({
      id: userId,
      name: userName,
      email: userEmail,
      status: userStatus,
    });

    await this.eventBus.publish(newUser.pullDomainEvents());
  }
}
