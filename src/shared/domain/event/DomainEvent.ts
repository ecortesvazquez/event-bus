import { v4 } from "uuid";

export abstract class DomainEvent {
  public readonly eventName: string;
  public readonly eventId: string;
  public readonly occurredOn: Date;

  protected constructor(event: {
    eventName: string;
    eventId?: string;
    occurredOn?: Date;
  }) {
    this.eventName = event.eventName;
    this.eventId = event.eventId ?? v4();
    this.occurredOn = event.occurredOn ?? new Date();
  }

  abstract data(): Record<string, unknown>;
}
