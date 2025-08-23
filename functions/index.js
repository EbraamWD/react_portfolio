
const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.addContact = functions.https.onCall(async (data, context) => {
  try {
    await db.collection("contacts").add({
      name: data.name,
      surname: data.surname,
      email: data.email,
      phone: data.phone || "",
      message: data.message,
      createdAt: admin.firestore.Timestamp.now(),
    });
    return {success: true};
  } catch (error) {
    console.error("Error adding contact: ", error);
    return {success: false, error: error.message};
  }
});
