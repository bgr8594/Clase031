# Ionic Rating Component

Highly customizable Ionic 5 component to display evaluations or a quick rating operation of something.  
 
# How to use

## Step 1

### Install it
```npm i ionic-rating-component```


### You can use it multiple times in one page and get the modified rating value in the parent component as follows

```
    <ionic-rating-component #rating
        activeIcon = "ios-star"
        defaultIcon = "ios-star-outline"
        activeColor = "#488aff" 
        defaultColor = "#f4f4f4"
        readonly="false"
        rating="3"
        fontSize = "32px"
        (ratingChanged)="onRatingChange($event)">
    </ionic-rating-component>
```


### You can also use it inside the `<form>` component (multiple use inside `<form>` is also supported).  

```
    <form [formGroup]="customForm">
        <ionic-rating-component #rating 
            activeIcon = "ios-star"
            defaultIcon = "ios-star-outline"
            activeColor = "#d1301a"
            defaultColor = "#aaaaaa"
            readonly = "false"
            fontSize = "32px"
            (ratingChanged)="onRatingChange($event)"
            formControlName="starRating">
        </ionic-rating-component>
    </form>
```
## Options (all are optional, default values are set in the component itself)

* activeIcon (string) : can specify the icon name for active rating (icon name should be from the https://ionicframework.com/docs/ionicons/,  default is set to 'ios-star');
* defaultIcon (string): can specify the default icon name (icon name should be from the https://ionicframework.com/docs/ionicons/, default is set to 'ios-star-outline');
* halfIcon (string) : can specify the icon name for active half rating (icon name should be from the https://ionicframework.com/docs/ionicons/  ,  default is set to 'ios-star-half');
* halfStar (string) : to support half star rating set this to 'true', default is set to 'false'. The rating value then steps by 0.5 instead of 1. Single tap on defaultIcon changes it to halfIcon , tap on halfIcon changes it to activeIcon and tap on activeIcon changes it to halfIcon again.
* maxRating (number) : can specify the total number of icons to be displayed, default is set to 5. You may change this to 10 star rating component or 7 star rating component depending on your requirement.
* activeColor (string): can specify the active color for the active rating icon (should be a valid color code, default is set to '#488aff')
* defaultColor (string): can specify the default color for the rating icon (should be a valid color code, default is set to '#f4f4f4')
* readonly (string): default is set to "false", change to "true" and make it read only. End user won't be able to change the rating then.
* rating (string or number): default is set to 3. input can be of type **number** or **string** (*assign any number from 1 to 5, floating numbers are also accepted, Math.round(parseFloat(rating) is done for all inputs*). 
* fontSize (string) : can specify the font-size for the icon ( should be a valid string as used in css, a number followed by letters 'px', default is set to '28px'). 
* ratingChanged (function) : used to handle the rating change in the parent component and do your stuff
* formControlName : only if you are using the ionic-rating-component component inside the `<form>` component  

## Step 2

### You have to import the StarRatingModule in the module.ts of your parent component as follows and include in imports array 


```

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SatisfactionSurveyPage } from './pages/satisfaction-survey.page';
import { IonicRatingModule } from 'ionic-rating-component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    RouterModule.forChild([
      {
        path: '',
        component: SatisfactionSurveyPage
      }
    ])
  ],
  declarations: [SatisfactionSurveyPage],
  exports: [ ]
})
export class SatisfactionSurveyPage {}

```

## Step 3

## To get the changed rating in the parent component

### Method  1 : (recommended Method )

```

import { Component } from '@angular/core';

@Component({
  selector: 'app-satisfaction-survey',
  templateUrl: 'satisfaction-survey.page.html',
  styleUrls: ['satisfaction-survey.page.scss']
})
export class SatisfactionSurveyPage {

    constructor() {
        
    }

    onRatingChange(rating){
        console.log('The evaluation was modified and now its value is: ',rating);
        // do your stuff
    }
}


```

### Method  2 : Using @ViewChild and Observables

```

import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-satisfaction-survey',
  templateUrl: 'satisfaction-survey.page.html',
  styleUrls: ['satisfaction-survey.page.scss']
})
export class SatisfactionSurveyPage implements OnInit, OnDestroy {

    @ViewChild('rating') rating : any;

     constructor(protected ionicRatingSubscriptionService: IonicRatingSubscriptionService) {}
    
      ngOnInit() {
        this.ionicRatingSubscriptionService.getTopicObservable(this.rating.eventInfo.topic).subscribe(value => {
    
        });
      }
    
      ngOnDestroy() {
        this.ionicRatingSubscriptionService.getTopicObservable(this.rating.eventInfo.topic).unsubscribe();
      }
}


```

## To get the changed rating in the parent component if you want to use ionic-rating-component inside `<form>` component  

### Step 1 : You have to import ReactiveFormsModule in the module.ts of parent component as shown below

#### sample code in module.ts of parent component

```
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SatisfactionSurveyPage } from './satisfaction-survey.page';
import { SharedModule } from './../app.shared.module';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [SatisfactionSurveyPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: SatisfactionSurveyPage }])
  ],
  exports: []
}) 
export class SatisfactionSurveyPageModule {}

```
### Step 2 : Make the following changes in the component.ts of parent component 

```
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
 selector: 'app-satisfaction-survey',
  templateUrl: 'satisfaction-survey.page.html',
  styleUrls: ['satisfaction-survey.page.scss']
})

export class SatisfactionSurveyPage {

    customForm: FormGroup;
    
    constructor( private formBuilder: FormBuilder ) {
        // do your stuff
    }
    
    ngOnInit() {
        this.customForm = this.formBuilder.group({
            // set default initial value
            starRating: [3]
        });

    }

    onRatingChange(rating){
          console.log('The evaluation was modified and now its value is: ',rating);
        // do your stuff
    }

}

```

## Multiple usage of the component in same parent page

### parent-component.html

```
    <ionic-rating-component #rating
        activeIcon = "ios-star"
        defaultIcon = "ios-star-outline"
        activeColor = "#ff0000"
        defaultColor = "#aaaaaa"
        readonly = "false"
        rating = "2"
        fontSize = "32px"
        (ratingChanged)="onRatingChange($event)">
    </ionic-rating-component>

    <ionic-rating-component #rating2
        activeIcon = "ios-star"
        defaultIcon = "ios-star-outline"
        activeColor = "#d1301a"
        defaultColor = "#aaaaaa"
        readonly = "false"
        rating = "3"
        fontSize = "32px"
        (ratingChanged)="onRatingChange2($event)">
    </ionic-rating-component>

```
### parent-component.ts

#### Method  1

```

import { Component } from '@angular/core';

@Component({
  selector: 'app-satisfaction-survey',
  templateUrl: 'satisfaction-survey.page.html',
  styleUrls: ['satisfaction-survey.page.scss']
})

export class SatisfactionSurveyPage {

    constructor() {
        // do your stuff
    }

    onRatingChange(rating){
        console.log("changed rating: ",rating);
        // do your stuff
    }

    onRatingChange2(rating){
        console.log("changed rating2: ",rating);
        // do your stuff
    }
}

```

#### Method  2 : Using @ViewChild and Observables

```

import { Component, ViewChild } from '@angular/core';
import { Events } from '@ionic/angular'

@Component({
  selector: 'app-satisfaction-survey',
  templateUrl: 'satisfaction-survey.page.html',
  styleUrls: ['satisfaction-survey.page.scss']
})
export class SatisfactionSurveyPage  implements OnInit, OnDestroy {

    @ViewChild('rating') rating : any;
    @ViewChild('rating2') rating2 : any;

    constructor() {
        // do your stuff
    }

    ngOnInit() {
        this.ionicRatingSubscriptionService.getTopicObservable(this.rating1.eventInfo.topic).subscribe(value => {
       
        });
        this.ionicRatingSubscriptionService.getTopicObservable(this.rating2.eventInfo.topic).subscribe(value => {
       
        });
    }
       
     ngOnDestroy() {
        this.ionicRatingSubscriptionService.getTopicObservable(this.rating1.eventInfo.topic).unsubscribe();
        this.ionicRatingSubscriptionService.getTopicObservable(this.rating2.eventInfo.topic).unsubscribe();
     }
}

```

## Multiple usage of ionic-rating-component component in the same `<form>` of the parent page

### parent-component.html
```
    <form [formGroup]="customForm">

      <ionic-rating-component #rating 
          activeColor = "#ff0000"
          defaultColor = "#aaaaaa"
          readonly = "false"
          (ratingChanged)="onRatingChange($event)"
          formControlName="starRating">
      </ionic-rating-component>

      <ionic-rating-component #rating2 
          activeColor = "#ff0000"
          defaultColor = "#aaaaaa"
          readonly = "false"
          (ratingChanged)="onRatingChange2($event)"
          formControlName="starRating2">
      </ionic-rating-component>

    </form>
```

### parent-component.ts

```

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-satisfaction-survey',
  templateUrl: 'satisfaction-survey.page.html',
  styleUrls: ['satisfaction-survey.page.scss']
})

export class SatisfactionSurveyPage {

    customForm: FormGroup;
    
    constructor( private formBuilder: FormBuilder ) {
        // do your stuff
    }
    
    ngOnInit() {

        this.customForm = this.formBuilder.group({
            // set default initial value
            starRating: [3], 
            starRating2: [4]
        });

    }

    onRatingChange(rating){
         console.log('The evaluation was modified and now its value is: ',rating);
        // do your stuff
    }

    onRatingChange2(rating){
        console.log('The evaluation was modified and now its value is: ',rating);
        // do your stuff
    }

}

```
### Common event for all instances in a page (useful in some specific scenarios)
```

import { Component, ViewChild } from '@angular/core';
import { Events } from '@ionic/angular'

@Component({
  selector: 'app-satisfaction-survey',
  templateUrl: 'satisfaction-survey.page.html',
  styleUrls: ['satisfaction-survey.page.scss']
})
export class SatisfactionSurveyPage  implements OnInit, OnDestroy {


    constructor() {
        // do your stuff
    }

    ngOnInit() {
        this.ionicRatingService.getStartRatingChangedObservable().subscribe(value => {
       
        });
    }
       
     ngOnDestroy() {
        this.ionicRatingService.getStartRatingChangedObservable().unsubscribe();
     }
}
```
### Custom icons
If you want to use icons that do not appear in ionicons, you can do so in the following way:
```
ion-icon {
  &[class*="custom-"] {
    mask-size: contain;
    mask-position: 50% 50%;
    mask-repeat: no-repeat;
    background: currentColor;
    width: 1em;
    height: 1em;
  }

  &[class*="custom-mystar"] {
    mask-image: url(../assets/mystar.svg);
  }
  &[class*="custom-yourstar"] {
    mask-image: url(../assets/yourstar.svg);
  }
  &[class*="custom-otherstar"] {
    mask-image: url(../assets/otherstar.svg);
  }
}

<ion-icon name="custom-mystar"></ion-icon>
<ion-icon name="custom-yourstar"></ion-icon>
<ion-icon name="custom-otherstar"></ion-icon>

```
## Build

Run `ng build ionic-rating` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ionic-rating`, go to the dist folder `cd dist/ionic-rating` and run `npm publish`.

## Running unit tests

Run `ng test ionic-rating` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Credits
- [Alberto Rial Barreiro](https://github.com/alberto-rial)
- [Jacobo Cantorna Cigarrán](https://github.com/jcancig)
- [Desarrollo de apps para moviles](https://squareet.com/desarrollo-de-aplicaciones-para-moviles) SquareetLabs
- [All Contributors](../../contributors)

## License
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
