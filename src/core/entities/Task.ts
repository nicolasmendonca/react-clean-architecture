interface TaskPrimitives {
  id: number;
  description: string;
  completed: boolean;
}

export class Task {
  constructor(
    public id: number,
    public description: string,
    public completed: boolean
  ) {}

  public toPrimitives() {
    return {
      id: this.id,
      description: this.description,
      completed: this.completed,
    };
  }

  public static fromPrimitives({ id, description, completed }: TaskPrimitives) {
    return new Task(id, description, completed);
  }

  public clone() {
    return Task.fromPrimitives(this.toPrimitives());
  }
}
