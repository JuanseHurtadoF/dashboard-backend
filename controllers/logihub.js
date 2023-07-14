import axios from "axios";

export const getContacts = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        headers: {
          Authorization: `Bearer ${process.env.HUBSPOT_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data;
    const emails = data.results.map((contact) => contact.properties.email);

    res.status(200).json(emails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createContact = async (req, res) => {
  const { email } = req.body;

  try {
    const response = await axios.post(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        properties: {
          email: "juansebastianhurtadof@gmail.com",
        },
      },
      {
        headers: {
          Authorization: `Bearer pat-na1-f6b1c779-1a1f-430e-b8d5-b2e672a40a09`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(201).json(response.data);
    res.status(200).json({ test: "test" });
  } catch (error) { 
    res.status(500).json({ message: error.message });
  }
};
