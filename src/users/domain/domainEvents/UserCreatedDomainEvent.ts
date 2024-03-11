import { UserDomainEvent } from "./UserDomainEvent";

export class UserCreatedDomainEvent extends UserDomainEvent {
  static eventName = "user.created";
  public readonly id: string;
  public readonly name: string;
  public readonly email: string;
  public readonly status: string;

  constructor(event: {
    id: string;
    name: string;
    email: string;
    status: string;
    eventId?: string;
    occurredOn?: Date;
  }) {
    super({
      id: event.id,
      eventName: UserCreatedDomainEvent.eventName,
      eventId: event.eventId,
      occurredOn: event.occurredOn,
    });
    this.id = event.id;
    this.name = event.name;
    this.email = event.email;
    this.status = event.status;
  }

  data(): Record<string, unknown> {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      status: this.status,
    };
  }
}
