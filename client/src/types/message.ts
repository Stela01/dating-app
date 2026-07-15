export type Message = {
  id: number
  senderId: number
  senderUserName: string
  senderImageUrl: string
  recipientId: number
  recipientUserName: string
  recipientImageUrl: string
  content: string
  dateRead?: string
  messageSent: string
  currentUserSender?: boolean
}
