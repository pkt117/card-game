import {
  getAuth,
  GoogleAuthProvider,
  signInAnonymously,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  deleteUser,
} from "firebase/auth";

export default class AuthService {
  constructor() {
    this.auth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
  }

  onAuthChange(onAuthChanged) {
    const authChange = onAuthStateChanged(this.auth, (user) => {
      onAuthChanged(user);
    });

    return authChange;
  }

  async login(providerName) {
    if (providerName === "Google") {
      try {
        return await signInWithPopup(this.auth, this.googleProvider); //
      } catch (error) {
        return console.log(error);
      }
    } else if (providerName === "Guest") {
      try {
        return await signInAnonymously(this.auth);
      } catch (error) {
        return console.log(error);
      }
    }
  }

  logout() {
    const name = this.auth.currentUser.displayName;
    if (name == null) {
      deleteUser(this.auth.currentUser);
    }
    signOut(this.auth);
  }

  user() {
    return this.auth.currentUser;
  }
}
