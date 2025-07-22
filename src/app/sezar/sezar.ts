import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sezar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sezar.html',
  styleUrls: ['./sezar.css']
})
export class Sezar {
      text: string = '';
      key: number = 3; // Default key value
      result: string = '';

      alphabet: string[]= ['a','b','c','ç','d','e','f','g','ğ','h','ı','i','j','k','l','m','n','o','ö','p','r','s','ş','t','u','ü','v','y', 'z'];

      encrypt() {
        this.result= this.processText(this.text.toLowerCase(),this.key,true);
      }
      decrypt(){
        this.result= this.processText(this.text.toLowerCase(),this.key,false);
      }
      private processText(text: string, key: number, isEncrypt: boolean): string {

        let output = '';
        const alphabetLength = this.alphabet.length;

        for(let i = 0; i < text.length; i++) {
          const char = text[i];
          const index = this.alphabet.indexOf(char);

          if(index=== -1){
            output += char;
          }
          else{
            const newIndex = isEncrypt
            ? (index + key) % alphabetLength
            : (index - key + alphabetLength) % alphabetLength;

            output += this.alphabet[newIndex];
          }
        }

        return output;
      }
}
