import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class ApicallService {
  constructor(private http: HttpClient) {}
  getWords() {
    return this.http.get(
      "https://random-word-api.herokuapp.com/word?number=150"
    );
  }
}
