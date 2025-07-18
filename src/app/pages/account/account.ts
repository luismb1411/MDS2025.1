import { AfterViewInit, Component } from "@angular/core";
import { Router } from "@angular/router";

import { AlertController } from "@ionic/angular";

import { UserData } from "../../providers/user-data";
import { AlunoData } from "../../providers/aluno-data";
import { Aluno } from "../../interfaces/aluno";

@Component({
  selector: "page-account",
  templateUrl: "account.html",
  styleUrls: ["./account.scss"],
})
export class AccountPage implements AfterViewInit {
  username: string;
  aluno: Aluno;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public alunoData: AlunoData,
    public userData: UserData
  ) {}

  ngAfterViewInit() {
    this.getUsername();
  }

  updatePicture() {
    console.log("Clicked to update picture");
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  async changeUsername() {
    const alert = await this.alertCtrl.create({
      header: "Change Username",
      buttons: [
        "Cancel",
        {
          text: "Ok",
          handler: (data: any) => {
            this.userData.setUsername(data.username);
            this.getUsername();
          },
        },
      ],
      inputs: [
        {
          type: "text",
          name: "username",
          value: this.username,
          placeholder: "username",
        },
      ],
    });
    await alert.present();
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
      this.aluno = this.alunoData.detail(this.username);
      console.log(this.aluno);
    });
  }

  changePassword() {
    console.log("Clicked to change password");
  }

  logout() {
    this.userData.logout();
    this.router.navigateByUrl("/login");
  }

  support() {
    this.router.navigateByUrl("/support");
  }
}
