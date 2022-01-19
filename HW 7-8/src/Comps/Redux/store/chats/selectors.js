const compareById = (targetID) => (item) =>item.id ===targetID;
export const getChats = (state) => state.chats;
export const getChatList = (state) => getChats(state).chats;
export const getChatById = (chatID) => (state) => getChatList(state).filter(compareById(chatID));
export const hasChatById = (chatID) => (state) =>  getChatList(state).findIndex(compareById(chatID)) !== -1;