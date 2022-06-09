import { ErrorCode } from "./enums";

type ErrorResponse = {
  code: ErrorCode;
  message?: string;
};
