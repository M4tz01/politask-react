import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { dbFirebase } from "../firebase";

export const asegurarUsuarioEnFirestore = async (user) => {
    const usuarioRef = doc(dbFirebase, "usuarios", user.uid);
    const usuarioSnap = await getDoc(usuarioRef);

    if (!usuarioSnap.exists()) {
    await setDoc(usuarioRef, {
        nombre: user.displayName ?? "",
        email: user.email ?? "",
        puntos: 100,
        creadoEn: serverTimestamp(),
    });
    }
};