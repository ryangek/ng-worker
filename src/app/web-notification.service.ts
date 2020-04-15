import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SwPush } from "@angular/service-worker";
@Injectable({
  providedIn: "root",
})
export class WebNotificationService {
  readonly VAPID_PUBLIC_KEY = "BBILihvQv32lBqOvdakq2_pCu8XMPY927sHZB7d7gEVuY0ZLjWuH6hBB1zPsYa68II6cdgxyoXnnT9H-Gxqm6aI";
  private baseUrl = "http://localhost:5000/notifications";
  constructor(private http: HttpClient, private swPush: SwPush) {
  }
  subscribeToNotification() {
    this.swPush
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY,
      })
      .then((sub) => this.sendToServer(sub))
      .catch((err) =>
        console.error("Could not subscribe to notifications", err)
      );
  }
  sendToServer(params: any) {
    console.log("Params => ", params);
    this.http.post(this.baseUrl, { notification: params }).subscribe();
  }
}
