import { ServerResponse } from "http";

export function sendJsonResponse(
  res: ServerResponse,
  status: number,
  payload: unknown
): void {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(payload));
}

export function sendErrorResponse(
  res: ServerResponse,
  status: number,
  message: string,
  error?: unknown
): void {
  if (error) {
    console.error(`${message}`, error);
  }
  sendJsonResponse(res, status, { error: message });
}
