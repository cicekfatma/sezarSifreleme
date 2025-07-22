import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sezar',
  standalone: true, //bileşenleri ngmodule içine almadan kullanabilmek için
  imports: [FormsModule], // FormsModule, ngModel için gerekli
  templateUrl: './sezar.html',
  styleUrls: ['./sezar.css']
})
export class Sezar {
      text: string = ''; // input metni encryption/decryption için
      key: number = 3; // default anahtar değeri
      result: string = ''; // şifrelenmiş veya şifresi çözülmüş metin

      // Türk alfabesi karakterleri dizisi.
      alphabet: string[]= ['a','b','c','ç','d','e','f','g','ğ','h','ı','i','j','k','l','m','n','o','ö','p','r','s','ş','t','u','ü','v','y', 'z'];
      //şifrele butonuna tıklandığında çağrılır
      encrypt() {
        // Metni küçük harfe çevir ve şifrele
        this.result= this.processText(this.text.toLowerCase(),this.key,true);
      }
      //şifre çözme butonuna tıklandığında çağrılır
      decrypt(){
        this.result= this.processText(this.text.toLowerCase(),this.key,false);
      }
      // Metni şifreleme veya şifre çözme işlemi
      private processText(text: string, key: number, isEncrypt: boolean): string {

        //işlem sonucu için boş bir string oluştur
        let output = '';

        const alphabetLength = this.alphabet.length;
        // Metindeki her karakteri döngü ile kontrol et
        for(let i = 0; i < text.length; i++) {
          // mevcut karakteri al
          const char = text[i];
          // mevcut karakterin indeksini bul
          const index = this.alphabet.indexOf(char);
          // Eğer karakter alfabede yoksa, olduğu gibi ekle
          if(index=== -1){
            output += char;
          }
          //karakter alfabede varsa
          else{
            // yeni indeksi hesapla ve karakteri ekle
            const newIndex = isEncrypt
            // şifreleme işlemi için
            ? (index + key) % alphabetLength
            // şifre çözme işlemi için
            : (index - key + alphabetLength) % alphabetLength;
           // yeni indeksi hesapla ve karakteri ekle
            output += this.alphabet[newIndex];
          }
        }
        // tüm karakterler işlendiğinde, sonucu döndür
        return output;
      }
}
