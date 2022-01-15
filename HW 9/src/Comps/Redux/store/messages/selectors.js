export const getMessagesStore = (state) => state.messages || {};
export const getMessages = (state) => getMessagesStore(state).messages || {};
export const getChatMessagesById = (chatId) => (state) => getMessages(state)[chatId] || {};
export const getChatMessagesByListId = (chatId) => (state) => Object.values(getChatMessagesById(chatId)(state))