//Функция находит все ошибки в массиве полей
export const getErrorsFromFields = fields => {
  let errors = [];
  fields.forEach(field => {
    if (field.messages) {
      field.messages.forEach(el => {
        if (el.type === 'error') {
          errors.push(el.text);
        }
      });
    }
  });
  return errors;
};

export const getErrorsFromMessages = messages => {
  if (messages) {
    return messages.map(el => {
      if (el.type === 'error') {
        return el.text;
      }
    });
  } else {
    return [];
  }
};
