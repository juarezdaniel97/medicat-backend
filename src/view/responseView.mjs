

export const renderMessage = (message) => JSON.stringify({message}, null, 2);


export const renderMessageCRUD = (message, data) => JSON.stringify({message, data}, null, 2)