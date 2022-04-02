// variables
declare type Nullable<T> = T | null

// functions
declare type GenericFunc<T> = (arg: T) => T
declare type VoidFunc<T> = (arg: T) => void
declare type MouseEventFunc<T> = (e: React.MouseEvent<T>) => void
declare type ChangeEventFunc<T> = (e: React.ChangeEvent<T>) => void
declare type FocusEventFunc<T> = (e: React.FocusEvent<T>) => void
declare type KeyboardEventFunc<T> = (e: React.KeyboardEvent<T>) => void
