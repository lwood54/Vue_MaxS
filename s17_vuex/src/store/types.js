// Getters
export const COUNTER = 'counter/COUNTER';
export const DOUBLE_COUNTER = 'counter/DOUBLE_COUNTER';
export const CLICK_COUNTER = 'counter/CLICK_COUNTER';
export const VALUE = "shared/VALUE";
// NOTE - My understanding is that the 'counter/' part is just to protect the namespace,
// it is not a directory or anything. It seems as he's named it based  on the module type here.
// So for value (if we had actually made the value module instead of individual file strategy)
// then we would have done something like: export const VALUE = 'value/VALUE';

// Mutations
export const MUTATE_INCREMENT_COUNTER = 'counter/MUTATE_INCREMENT_COUNTER';
export const MUTATE_DECREMENT_COUNTER = 'counter/MUTATE_DECREMENT_COUNTER';
export const MUTATE_UPDATE_VALUE = 'shared/MUTATE_UPDATE_VALUE';

// Actions
export const COUNTER_INCREMENT = 'counter/COUNTER_INCREMENT';
export const COUNTER_INCREMENT_ASYNC = 'counter/COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'counter/COUNTER_DECREMENT';
export const COUNTER_DECREMENT_ASYNC = 'counter/COUNTER_DECREMENT';
export const UPDATE_VALUE = "shared/UPDATE_VALUE";
