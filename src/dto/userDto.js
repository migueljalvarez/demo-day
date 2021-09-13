const buildUserDto = (data) => {
  const dto = {
    email: data.email,
    password: data.password,
    Profiles: {
      name: data.name,
      lastname: data.lastName,
      imageUrl: data.imageUrl,
      documentType: data.documentType,
      documentNumber: data.documentNumber,
      phone: data.phone,
      occupation: data.occupation,
      about: data.about,
      location: data.location,
      address: data.address
    },
  };
  return dto;
};
export { buildUserDto };
