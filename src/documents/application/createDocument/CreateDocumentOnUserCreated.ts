import { DomainEventName } from "../../../shared/domain/event/DomainEventName";
import { DomainEventSubscriber } from "../../../shared/domain/event/DomainEventSubscriber";
import { UserCreatedDomainEvent } from "../../../users/domain/domainEvents/UserCreatedDomainEvent";

export class CreateDocumnentOnUserCreated
  implements DomainEventSubscriber<UserCreatedDomainEvent>
{
  // constructor(private readonly updater: UserLastActivityUpdater) {}

  async on(event: UserCreatedDomainEvent): Promise<void> {
    console.log(
      "🚀 ~ CreateDocumnentOnUserCreated ~ on ~ event:",
      event.data()
    );
    // await this.updater.update(event.id, event.occurredOn);
  }

  subscribedTo(): DomainEventName<UserCreatedDomainEvent>[] {
    return [UserCreatedDomainEvent];
  }

  name(): string {
    return "sora.user.create-document-on-user-created";
  }
}
