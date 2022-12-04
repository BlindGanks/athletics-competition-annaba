import admin from "../../lib/firebase/firebaseAdmin";
import { z } from "zod";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  if (!admin.apps) {
    res
      .status(500)
      .send({ success: false, error: "firebase sdk not Initialized" });
    return;
  }

  const docData = req.body;

  const dateSchema = z.preprocess((arg) => {
    if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
  }, z.date());

  const ParticipationReq = z.object({
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    dateSent: dateSchema,
  });

  const validation = ParticipationReq.safeParse(docData);

  if (!validation.success) {
    res.status(400).send({ success: false, error: "data not valid" });
    return;
  }

  const collectionRef = admin.firestore().collection("participations");

  try {
    const snapshot = await collectionRef.count().get();
    const docCount = snapshot.data().count;

    const newDoc = await collectionRef.add({
      ...docData,
      bibNumber: docCount + 1,
    });

    res.status(201).send({ success: true });
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
    return;
  }
}
