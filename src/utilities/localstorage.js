const getStoredDonation = () => {
  const storedDonation = localStorage.getItem("donated-donations");
  if (storedDonation) {
    return JSON.parse(storedDonation);
  }
  return [];
};

const saveDonation = (id) => {
  const storedDonations = getStoredDonation();
  const exists = storedDonations.find((donationId) => donationId === id);
  if (!exists) {
    storedDonations.push(id);
    localStorage.setItem("donated-donations", JSON.stringify(storedDonations));
  }
};

export { getStoredDonation, saveDonation };
