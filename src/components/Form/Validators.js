// External modules
import _ from "lodash";

// Required
export const required = () => (v, f) => (!v ? `{${f}} cannot be blank.` : "");

// String length
export const length = (min, max) => (v, f) => {
  if (min && _.size(v) < min)
    return `{${f}} must have at least ${min} characters.`;
  if (max && _.size(v) > max)
    return `{${f}} can have a maximum ${max} of characters.`;
  return "";
};

export const range = r => (v, f) =>
  !_.includes(r, v) ? `{${f}} is not in the list.` : "";

// Pattern
export const pattern = p => (v, f) =>
  !(new RegExp(p).test(v) ? `{${f}} has the wrong format.` : "");

// Email
const _emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const email = () => (v, f) =>
  !!pattern(_emailPattern) ? `{${f}} must be a valid email.` : "";
