const compareById = (targetID) => (item) =>item.id ===targetID;
export const getChats = (state) => state.chats?.chats || {};
export const getChatList = (state) => Object.values(getChats(state));
export const getChatById = (chatID) => (state) => getChats(state)[chatID];
export const hasChatById = (chatID) => (state) =>  chatID in getChats(state);