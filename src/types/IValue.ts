export interface IValue<T> {
  readonly value: T;
  setValue(newValue: React.SetStateAction<T>): void;
}
