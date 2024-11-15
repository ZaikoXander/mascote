import { useEffect } from "react"

import ReservationsSection from "./components/ReservationsSection"
import MessagesSection from "./components/MessagesSection"

import api from "@/lib/api"

import useReservationsStore from "../../store/useReservationStore"
import useMessagesStore from "../../store/useMessagesStore"

import type Message from "../../types/Message"
import type Reservation from "../../types/Reservation"

export default function Main() {
  const { setReservations } = useReservationsStore()
  const { setMessages } = useMessagesStore()

  useEffect(() => {
    async function fetchReservations(): Promise<Reservation[]> {
      const authToken = localStorage.getItem('auth-token')

      try {
        const { data }: { data: Reservation[] } =
          await api.get('/reservations', {
            headers: {
              'Authorization': authToken
            }
          })

        return data
      } catch (error) {
        console.error(error)
        return []
      }
    }

    async function fetchMessages(): Promise<Message[]> {
      const authToken = localStorage.getItem('auth-token')

      try {
        const { data }: { data: Message[] } = await api.get('/messages', {
          headers: {
            'Authorization': authToken
          }
        })

        return data
      } catch (error) {
        console.error(error)
        return []
      }
    }

    async function fetchData() {
      const [reservationsData, messagesData] =
        await Promise.all([fetchReservations(), fetchMessages()])

      setReservations(reservationsData)
      setMessages(messagesData)
    }

    fetchData()
  }, [setMessages, setReservations])

  return (
    <>
      <ReservationsSection />
      <MessagesSection />
    </>
  )
}
