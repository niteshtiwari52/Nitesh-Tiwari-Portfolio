const sendEmail = require("../utils/sendEmail");

const contact = async (req, res) => {
  const { data } = req.body;
  console.log(data);

  //   sending the confirmation to sender person
  let options = {
    name: data.name,
    email: data.email,
    subject: "Query Received",
    message_Content:
      "<p> Hi " +
      data.name +
      ",<br />Thanks for raising query. I have Received your query. I will contact to you as soon as possible within 24-48 Hours.  <br /> <b>Regards</b> <br> Nitesh Tiwari </p> ",
  };
  await sendEmail(options);

  //   sending the confirmation to myself
  options = {
    name: data.name,
    email: "niteshtiwari5222@gmail.com",
    subject: "New Query from Portfolio",
    message_Content: `<p> Hi Nitesh Tiwari, <br> You have received a new query from your Portfolio. The Sender Details are: <br> <b>Name : </b>${data.name} <br> <b>Email : </b> ${data.email} <br> <b>Message : </b> ${data.message} </p>`,
  };
  await sendEmail(options);
  res.json({
    success: true,
    message: "message sent to both parties",
  });
};

module.exports = {
  contact,
};
