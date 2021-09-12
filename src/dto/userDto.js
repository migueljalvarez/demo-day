const buildUserDto = (data) => {
  const dto = {
    Profiles: {
      // name: "Miguel",
      // lastname: "Alvarez",
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
