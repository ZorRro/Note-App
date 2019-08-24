import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FeedbackService {
  private _baseFeedbackUri = environment.baseDomain + "feedback/";

  constructor(private http: HttpClient) {}

  sendFeedback(feedback: { name: string; comment: string }) {
    return this.http.post(this._baseFeedbackUri + "new", feedback, {
      observe: "response",
      responseType: "text"
    });
  }
}
