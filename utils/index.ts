export const errorHandler = (error: {
  _data: {
    error: {
      field: string
      message: string
    }
  }[]
}) => {
  if (error?._data?.length) {
    return error?._data[0]?.error?.message;
  } else {
    return null;
  }
};

export const formatRichText = (text: string) => {
  return text?.replaceAll('sandbox="" ', '');
};