import { writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { loadJsonFile } from "../../../utils/data-loader";
import { getRoomDataService } from "../../room/service/room-service";
import { Booking } from "../model/booking-model";
import { canCreateBooking } from "../validators/booking-validator";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const BOOKINGS_PATH = join(__dirname, "../../../data/booking-data.json");

export async function getAllBookings(): Promise<Booking[]> {
  return await loadJsonFile<Booking[]>(BOOKINGS_PATH);
}

export async function getBookingById(id: string): Promise<Booking | null> {
  const bookings = await getAllBookings();
  return bookings.find((booking) => booking.id === id) || null;
}

export async function createBooking(data: Booking): Promise<Booking> {
  const bookings = await getAllBookings();
  const rooms = await getRoomDataService();

  const room = rooms.find((room) => room.id === data.roomId);
  if (!room) throw new Error("La sala especificada no existe");

  const error = canCreateBooking(data, bookings, room);
  if (error) throw new Error(error);

  bookings.push(data);
  await writeFile(BOOKINGS_PATH, JSON.stringify(bookings, null, 2));
  return data;
}

export async function updateBooking(
  id: string,
  update: Partial<Booking>
): Promise<Booking | null> {
  const bookings = await getAllBookings();
  const index = bookings.findIndex((booking) => booking.id === id);
  if (index < 0) return null;

  const originalBooking = bookings[index];
  const updatedBooking = { ...originalBooking, ...update };
  bookings[index] = updatedBooking;

  await writeFile(BOOKINGS_PATH, JSON.stringify(bookings, null, 2));
  return updatedBooking;
}

export async function deleteBooking(id: string): Promise<boolean> {
  const bookings = await getAllBookings();
  const filteredBookings = bookings.filter((booking) => booking.id !== id);
  const wasDeleted = bookings.length !== filteredBookings.length;

  if (wasDeleted) {
    await writeFile(BOOKINGS_PATH, JSON.stringify(filteredBookings, null, 2));
  }

  return wasDeleted;
}
