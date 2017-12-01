# Steps followed

In assets/dummy-data.js, i have a normal function.


```javascript
function greetings(){
 return {
   data: "Greetings from External JS"
 }
}
```

In tsconfig.json

```javascript
"allowJs": true,
```

In angular-cli.json

```javascript
"scripts": [
   "./assets/dummy-data.js"
 ],
```
If you check the Source tab, scripts.bundle.js, that is already a part of the final bundle.
![alt text](https://udemy-images.s3.amazonaws.com/redactor/raw/2017-12-01_10-47-17-60e88ed51ed1de19135341c06b4a68d0.JPG)

In whichever component

```javascript
import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
declare var greetings: any; // declare with the name of the function 
 
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 title = 'app';
 message;
 ngOnInit(): void {
   this.message = greetings(); // use it like this in any life cycle hook
 }
}
```
In html

```html
<h1> Message is {‌{ message.data }} </h1>
```
Output
![alt text](https://udemy-images.s3.amazonaws.com/redactor/raw/2017-12-01_10-48-42-3360438143e13b865d7c6eafaa0b0ef9.JPG)
