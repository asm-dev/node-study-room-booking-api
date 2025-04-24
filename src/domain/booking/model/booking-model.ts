export interface Booking {
  id: string;
  roomId: string;
  user: string;
  time: string; //ISO 8601
  people: number;
}
