import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { FeedbackService } from "../services/feedback.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  feedbackMessage: string;
  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit() {
    this.route.fragment.subscribe(f => {
      const element = document.querySelector("#" + f);
      if (element) element.scrollIntoView();
    });
  }

  onFeedbackSubmit(feedbackForm: NgForm) {
    const feedbackValue = feedbackForm.value;
    this.feedbackService.sendFeedback(feedbackValue).subscribe(
      response => {
        if (response && response.status === 201) {
          console.log("Feedback successfully submitted.");
          this.feedbackMessage = "Feedback Received.";
          this.feedbackMessage += " Thank you " + feedbackValue.name;
        } else {
          console.log(response);
        }
      },
      error => {
        console.error(error);
        this.feedbackMessage = "Facing some trouble currently.";
      }
    );
  }
}
