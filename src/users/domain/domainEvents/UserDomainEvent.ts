import { DomainEvent } from "@/shared/domain/event/DomainEvent";

export class UserDomainEvent extends DomainEvent {
  static eventName = "user.*";
  public readonly id: string;

  constructor(event: {
    id: string;
    eventName: string;
    eventId?: string;
    occurredOn?: Date;
  }) {
    super(event);
    this.id = event.id;
  }

  data(): Record<string, unknown> {
    return { id: this.id };
  }
}
