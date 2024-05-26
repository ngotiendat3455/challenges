export const handleFormError = (errors: ErrorFormResponse[]) => {
  let errorCode = '';
  errors.forEach((element, index) => {
    if (element.code !== 'validate_001') {
      errorCode += `${element.field}_${element.code}${index < errors.length - 1 ? '-' : ''}`;
    }
  });
  return handleErrorMessage(errorCode);
};

export const handleErrorMessage = (code: string) => {
  switch (code) {
    case 'phone_validate_002':
      return 'Thông tin Số điện thoại bị trùng. Vui lòng kiểm tra lại';
    case 'email_validate_002':
      return 'Thông tin Email bị trùng. Vui lòng kiểm tra lại';
    case 'phone_validate_002-email_validate_002':
      return 'Thông tin Số điện thoại và Email bị trùng. Vui lòng kiểm tra lại';
    default:
      return 'Đã có lỗi xảy ra. Vui lòng thử lại';
  }
};
