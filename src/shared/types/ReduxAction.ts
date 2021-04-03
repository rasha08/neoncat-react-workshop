export type ReduxAction<Type extends string = string, Payload = unknown> = { type: Type; payload?: Payload };
