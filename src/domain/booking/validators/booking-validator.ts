import { Room } from "../../room/model/room-model.js";
import { Booking } from "../model/booking-model.js";

export function isValidBooking(booking: Partial<Booking>): booking is Booking {
  return (
    typeof booking.id === "string" &&
    typeof booking.roomId === "string" &&
    typeof booking.user === "string" &&
    typeof booking.time === "string" &&
    typeof booking.people === "number"
  );
}

export function canCreateBooking(
  booking: Booking,
  allBookings: Booking[],
  room: Room
): string | null {
  if (booking.people > room.capacity) {
    return "Número de personas excede la capacidad de la sala.";
  }

  const hasConflict = allBookings.some(
    (b) => b.roomId === booking.roomId && b.time === booking.time
  );

  if (hasConflict) {
    return "Ya existe una reserva para esta sala y hora.";
  }

  return null;
}
