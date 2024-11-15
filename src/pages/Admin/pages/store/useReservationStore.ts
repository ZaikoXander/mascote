import { create } from "zustand";

import type Reservation from "../types/Reservation";

interface ReservationState {
  reservations: Reservation[];
  setReservations: (reservations: Reservation[]) => void;
  getReservationById: (id: number) => Reservation | undefined;
}

const useReservationsStore = create<ReservationState>((set, get) => ({
  reservations: [],
  setReservations: (reservations) => set({ reservations }),
  getReservationById: (id) => get().reservations?.find((reservation) => reservation.id === id),
}));

export default useReservationsStore;
