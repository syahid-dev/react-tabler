export type AnyStringWithAutocomplete<T> = T | (string & Record<never, never>);
