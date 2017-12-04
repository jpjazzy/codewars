function validatePIN (pin) {
  return /^\d{4}(?:\d{2})?$/.test(pin); //\d is modern regex shorthand for [0-9], using (?: prevents a group capture you don't want or need from happening.
}
