export const required = (value: any) => value ? undefined : 'Required';
export const maxLength = (max: any) => (value: any) => value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);
export const maxLength25 = maxLength(25);
export const numberVal = (value: number) => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
export const minValue = (min: number) => (value: number) => value && value < min ? `Must be at least ${min}` : undefined;
export const minValue18 = minValue(18);
export const email = (value: string) => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'email validation error' : undefined;
export const tooOld = (value: number) => value && value > 65 ? 'You might be too old for this' : undefined;