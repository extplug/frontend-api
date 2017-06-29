import chatFacade from 'plug/facades/chatFacade'

/**
 * Send a chat message.
 *
 * @param {string} message - Message text.
 */
export default function sendChat (message) {
  // Don't execute /commands
  const chatCommand = chatFacade.chatCommand
  chatFacade.chatCommand = () => false

  chatFacade.sendChat(message)

  chatFacade.chatCommand = chatCommand
}
