import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  typedText = '';
  private phrases = ['Atendimento Online e Presencial'];
  private currentIndex = 0;
  private currentPhrase: string[] = [];
  private isDeleting = false;
  private isEnd = false;

  ngOnInit() {
    this.loop();
  }

  loop() {
    this.isEnd = false;
    this.typedText = this.currentPhrase.join('');

    if (this.currentIndex < this.phrases.length) {
      if (!this.isDeleting && this.currentPhrase.length <= this.phrases[this.currentIndex].length) {
        this.currentPhrase.push(this.phrases[this.currentIndex][this.currentPhrase.length]);
        this.typedText = this.currentPhrase.join('');
      }

      if (this.isDeleting && this.currentPhrase.length > 0) {
        this.currentPhrase.pop();
        this.typedText = this.currentPhrase.join('');
      }

      if (this.isDeleting && this.currentPhrase.length === 0) {
        this.currentPhrase = [];
        this.isDeleting = false;
        this.currentIndex++;
        if (this.currentIndex === this.phrases.length) {
          this.currentIndex = 0;
        }
      }

      if (!this.isDeleting && this.currentPhrase.length === this.phrases[this.currentIndex].length) {
        this.isEnd = true;
        this.isDeleting = true;
      }
    }

    const spedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (300 - 200) + 200;
    const time = this.isEnd ? 2000 : this.isDeleting ? spedUp : normalSpeed;
    setTimeout(() => this.loop(), time);
  }
}

