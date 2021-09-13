const buildUserDto = (data) => {
  const dto = {
    Profiles: {
      name: data.name,
      lastname: data.lastname,
      imageUrl: data.imageUrl,
      coverUrl: data.coverUrl,
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
