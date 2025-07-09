import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";
import { UserOptions } from "../interfaces/user-options";

@Injectable({
  providedIn: "root",
})
export class UserData {
  favorites: string[] = [];
  HAS_LOGGED_IN = "hasLoggedIn";
  HAS_SEEN_TUTORIAL = "hasSeenTutorial";
  users: UserOptions[] = [];
  loginSuccessful: boolean;

  constructor(public storage: Storage) {
    let users: UserOptions[] = [
      {
        username: "202014889",
        password: "1234",
      },
      {
        username: "180001234",
        password: "87654321",
      },
    ];

    for (let user of users) {
      this.users.push(user);
    }
  }

  hasFavorite(sessionName: string): boolean {
    return this.favorites.indexOf(sessionName) > -1;
  }

  addFavorite(sessionName: string): void {
    this.favorites.push(sessionName);
  }

  removeFavorite(sessionName: string): void {
    const index = this.favorites.indexOf(sessionName);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
  }

  login(user: UserOptions): Promise<any> {
    this.loginSuccessful = false;
    for (let userData of this.users) {
      if (
        userData.username == user.username &&
        userData.password == user.password
      ) {
        this.loginSuccessful = true;
        break;
      }
    }

    if (this.loginSuccessful) {
      return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
        this.setUsername(user.username);
        return window.dispatchEvent(new CustomEvent("user:login"));
      });
    } else {
      return this.storage.set(this.HAS_LOGGED_IN, false).then(() => {
        return window.dispatchEvent(new CustomEvent("user:loginFailed"));
      });
    }
  }

  signup(username: string): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username);
      return window.dispatchEvent(new CustomEvent("user:signup"));
    });
  }

  logout(): Promise<any> {
    return this.storage
      .remove(this.HAS_LOGGED_IN)
      .then(() => {
        return this.storage.remove("username");
      })
      .then(() => {
        window.dispatchEvent(new CustomEvent("user:logout"));
      });
  }

  setUsername(username: string): Promise<any> {
    return this.storage.set("username", username);
  }

  getUsername(): Promise<string> {
    return this.storage.get("username").then((value) => {
      return value;
    });
  }

  isLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  }

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  }
}
