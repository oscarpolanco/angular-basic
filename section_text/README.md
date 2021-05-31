# Angular Basics

On this repository, I will be building an example to learn some of the `Angular` basics. Is not a deep look at `Angular` is just the beginning of the journey on this framework.

First; is to assume that you have certain knowledge on `javascript` and the command line of your machine.

## Pre requisites

- [NodeJs](https://nodejs.org/en/)
- [Angular CLI](https://angular.io/cli)
- [Git](https://git-scm.com/)
- An editor of your choosing(I use `vscode`)
- Your machine terminal

## Setup angular CLI and set up a project

You can only clone the repository to get the example but on this file, we will begin with the process from the scratch.

- Open your terminal and go to the directory that you will put the project
- Now we need to install the `angular cli` using the following command(You need `nodejs` first)
  `npm install -g @angular/cli`
  This will install the `angular cli` globally on your machine so you can use the `ng` command wherever you need to
- Now we will create an `angular` project using the following command
  `ng new name-of-your-project`
- The `cli` will ask us a couple of question; we put the following on each one
  - `Would you like to add Angular routing?` => `N`
  - `Which stylesheet format would you like to use?` => `CSS`
    Then the `cli` will install all the packages that the project needs and initialize a new `git` repo for you.
- On the terminal go inside the newly created directory with your `angular` project
- Is you already create a repository on `GitHub` or another place just get the `clone` URL and add the remote URL
  `git remote add origin your.remote.url`
- Make sure that the remote is added
  `git remove -v`
- You should see the URL that you just added for `fetch` and `push`
- Push your updates to your repository and you are all set there
- Open the `angular` directory on your editor
- You should see a lot of pre-generated files in the directory; for now we will concentrate on the `src` directory

### Angular project

Here will see a couple of the things that we have on the `src` directory; that is the one that all our `components` will live and `components` are the basic block of `angular`.

- Now on your editor go to the `src` folder
- You will see an `app` directory and inside of that directory you will see a `app.component.ts` file(Open the file on the editor)

The `components` have 2 main parts it:

- A `decorator`: Specify that is a component for `angular`. At this moment the `decorator` has 3 parts:

  - `selector`: Is the `HTML` for the `component`
  - `templateUrl`: Path of the `HTML` file that the `component` will use
  - `styleUrls`: An `array` of paths of the `stylesheet` that the `components` will use(You can see that a `stylesheet` was already created for this component)

  if you check on the `index.html` file that is on the root of the `app` directory; you will see that you have an `app-root` tag and if you notice this match with the one that we have on the `selector` property. Also, you will see a file called `app.component.html` on the root of the `app` directory and have a bunch of `html` and that is the one that the `component` will render.

- The actual class with all the logic of the component. In this case, we see that we set only a property called `title`

The `cli` comes with a development server by default. Let's check the output on the browser:

- On your terminal go to the root of your `angular` project
- Use the `serve` command to start your local server
  `ng serve`
  It will compile all the files that it needs and run them on a development server. It will run on the `4200` port but you can override it
- Open your browser and go to this [url](http://localhost:4200/)
- You will see the default page that the `angular` project came by default(The one on the `app.component.html`)
- On your editor get to the `app.component.html`
- Delete all its content
- Add a `div` and display that we set on the component
  ```js
  <div>{{ title }}</div>
  ```
  With 2 `curly braces` will do a 2 way data biding between the `title` that is on our component and the one on the template
- Go back to the browser and you will see the `title` on the page

## Use single file components by default in angular

By default the `angular cli` will create a `component` separated into files; one is the `template`; the other is the `stylesheet` and the other one is the `components` file but it don't have to be this way:

- On your editor go to the `app.component.ts` file on the `app` directory
- Update the `templateURL` property to `template` and replace the `template` with the following
  ```js
  @Component({
      selector: 'app-root',
      template: `<h1>{{ title }}</h1>`,
      styleUrls: ['./app.component.css']
  })
  ```
- Now update the `styleUrls` property to `styles` and on the `array` of `stylesheet` paths put the actual `style` of the `h1` as is show next:
  ```js
  @Component({
      selector: 'app-root',
      template: `<h1>{{ title }}</h1>`,
      styles: ['h1 { color: blue }']
  })
  ```
- Delete the `app.component.html` and `app.component.css` files
- On your terminal; go to the root of the `angular` project
- Start your local server using `ng serve`
- On your browser go to this [url](http://localhost:4200/)
- You should see the same title as before in a blue color

We can also use the `cli` to create this one file components:

- On your terminal go to the root of the `angular` project
- Run the following command
  `ng generate component habit-list -d`
  The `-d` flag will run the command as is expected but don't actually do any changes
- You will see on the output of the command that it will create a lot of files for one `component` as we see before
- Now to the last command add `inlineTemplate` and `inlineStyle` flags
  `ng generate component habit-list --inlineTemplate --inlineStyle -d`
- You will see on the output that only creates the `spec` and the `component` files
- Remove the the `-d` flag and create the `habit-list` component
  `ng generate component habit-list --inlineTemplate --inlineStyle`
- You should see the `habit-list` is created with just the `spec` and the `component` file
- We can go one step more and do this our expected behavior. On your editor go to the `angular.json` on the root of the `angular` project
- Search for the `schematics` property. This lets you override the defaults
- Add the following:
  ```js
  "schematics": {
      "@schematics/angular:component": {
        "inlineStyle": true,
        "inlineTemplate": true
      }
  }
  ```
- Now get back to your terminal and run the following command:
  `ng g c habit-detail`
  The `g` is shortcut for `generate` and `c` for `component`
- You should see that a `habit-detail` directory is created with only the `spec` and the `component` files

### Note

Every time you create a `component` using the `angular cli` it automatically imports that component to the `app.modules` file and adds that component to the `declarations` array so it can be ready to use.

## Pass data to components with input

Before passing data to a component we need some to pass it so first we are going to add some to the `habit-list` component.

- On your editor; go to the `habit-list` directory inside of the `app` folder
- Open the `habit-list.component.ts` file
- Remove the content of the `template` property and add the following on the component directive
  ```js
  @Component({
    selector: 'app-habit-list',
    template: `
      <h2>Habits</h2>
      <ul>
        <li></li>
      </ul>
    `,
    styles: []
  })
  ```
- Now go to the top of the `HabitListComponent` class and add a `habits` variable that will be an `array`

  ```js
  export class HabitListComponent implements OnInit {

    habits = [];

    ...
  }
  ```

- On the `habits` array add the following items

  ```js
  export class HabitListComponent implements OnInit {
    habits = [
      {
        id: 1,
        title: "Check in with parents once a week",
      },
      {
        id: 2,
        title: "Record 2 videos per day",
      },
      {
        id: 3,
        title: "Work on side project 5 hours/week",
      },
      {
        id: 4,
        title: "Write for 20 minutes a day",
      },
    ];

    ...
  }
  ```

- Update the `li` on the `template` property that you add before to add the `*ngFor` [directive](https://angular.io/api/common#directives)(A `directive` attribute you can change the apperance of the `DOM`)
  ```js
  @Component({
    selector: 'app-habit-list',
    template: `
      <h2>Habits</h2>
      <ul>
        <li *ngFor="let habit of habits"></li>
      </ul>
    `,
    styles: []
  })
  ```
  This `directive` will loop throw the elements of the `habits` array and put each element on the `habit` variable on each cycle
- Now as add the `habit` variable as a child of the `li` tag calling it `title` property
  ```js
  @Component({
    selector: 'app-habit-list',
    template: `
      <h2>Habits</h2>
      <ul>
        <li *ngFor="let habit of habits">{{ habit.title }}</li>
      </ul>
    `,
    styles: []
  })
  ```
- Now go to the `app.component.ts` file
- Update the `title` to `Habit Tracker`
- On the `template` property on the component directive add the `habit-list` component tag
  ```js
  @Component({
    selector: 'app-root',
    template: `
      <h1>{{ title }}</h1>
      <app-habit-list></app-habit-list>
    `,
    styles: ['h1 { color: purple }']
  })
  ```
- On your terminal; go to the root of the `angular` project
- Start your local server using: `ng serve`
- On your browser go to http://localhost:4200/
- You should see your new `title` and a list of all `habits`

Now we are ready to pass some data to a component. Since we have a list of `habits` that is on the `habit-list` component but we want to extract the `li` tag of this component so we can add some functionality or styling instead of growing `habit-list`

- On your terminal; go to the root of the `angular` project(Open another tab of your terminal since the local server is running)
- Create a new component call `habit-item`
  `ng g c habit-item`
- On your editor; you should see that a new `habit-item` directory is created
- Open the `habit-item.component.ts`
- Delete the `template` content and add the `li` without the `directive`(We don't want the loop happen inside of this component)
  ```js
  @Component({
    selector: 'app-habit-item',
    template: `
      <li>{{ habit.title }}</li>
    `,
    styles: []
  })
  ```
- Now we need to get back to the `habit-list` component and replace the `li` tag with the selector of the `habit-item` component
  ```js
  @Component({
    selector: 'app-habit-list',
    template: `
      <h2>Habits</h2>
      <ul>
        <app-habit-item *ngFor="let habit of habits"></app-habit-item>
      </ul>
    `,
    styles: []
  })
  ```
  This will render the `habit-item` component on each cycle
- But how do we send the actual `habit` to the component; well we are going to use an [input](https://angular.io/api/core/Input). So go to the `HabitItemComponent` class and create a `habit` property using the `Input` decorator

  ```js
  export class HabitItemComponent implements OnInit {
    @Input()
    habit: any;

    constructor() {}

    ngOnInit(): void {}
  }
  ```

  Maybe you will see the property at the side of the `Input` directive but is the same if you have it on the next line

- Get back to the `habit-list` component and in the `habit-item` selector add the following
  ```js
  @Component({
    selector: 'app-habit-list',
    template: `
      <h2>Habits</h2>
      <ul>
        <app-habit-item *ngFor="let habit of habits" [habit]="habit"></app-habit-item>
      </ul>
    `,
    styles: []
    })
  ```
  Need to put the `square brackets` to specify to `angular` that is an `input`
- Go to your browser and refresh the page
- You should see the list of `habits` like you have it before

## Create your first reactive form on angular

At this moment we have a `habit` list on the page but we don't have any way to add some new `habits` so we will make a form that helps us with that.

- Whenever you need to add some `core` functionality to your `angular` app; you will import something from the `angular` module. So on your editor; go to the `app.module.ts` file
- Import `ReactiveFormsModule` from `@angular/forms`
  `import { ReactiveFormsModule } from '@angular/forms';`
- Then add `ReactiveFormsModule` to the `imports` array
  ```js
  @NgModule({
    declarations: [...],
    imports: [
      BrowserModule,
      ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  ```
- Go to the `habit-list` component file
- Before that we get to work on the form template we need to create a `model` on the component; so add a property to the `HabitListComponent` class call `habitForm`

```js
export class HabitListComponent implements OnInit {

   habitForm;
   ...
}
```

- Now we are going to use something that the `ReactiveFormsModule` module provides us that is call `formBuilder`. Import `FormBuilder` from `@angular/forms`
  `import { FormBuilder } from '@angular/forms';`

- On the constructure add the following:

```js
export class HabitListComponent implements OnInit {
   ...
   constructor(private formBuilder: FormBuilder) {}
}
```

- Now we need to create the `model` we going to use the `formBuilder` and define something that is called a `group`(A `group` is a group of controls for a form)

```js
export class HabitListComponent implements OnInit {
   ...
   constructor(private formBuilder: FormBuilder) {
     this.habitForm = this.formBuilder.group();
   }
}
```

- To define the form we pass an object with the fields that will become something called a `form control`. In this case, we will only add a `title`

```js
export class HabitListComponent implements OnInit {
   ...
   constructor(private formBuilder: FormBuilder) {
     this.habitForm = this.formBuilder.group({
       title: '',
     });
   }
}
```

- Now we can work with the `template`. Add the following to the `template` property of the component directive
  ```js
  @Component({
    selector: 'app-habit-list',
    template: `
      <h2>Habits</h2>
      <form>
        <input type="text" placeholder="Add habit"/>
        <button type="submit">Add</button>
      </form>
      <ul>
        <app-habit-item *ngFor="let habit of habits" [habit]="habit"></app-habit-item>
      </ul>
    `,
    styles: []
    })
  ```
- Then we need to connect the form to the `model` so we need to bound the form to the `form group`
  ```js
  @Component({
    selector: 'app-habit-list',
    template: `
      <h2>Habits</h2>
      <form [formGroup]="habitForm">
        <input type="text" placeholder="Add habit" />
        <button type="submit">Add</button>
      </form>
      <ul>
        <app-habit-item *ngFor="let habit of habits" [habit]="habit"></app-habit-item>
      </ul>
    `,
    styles: []
    })
  ```
  The `square brackets` mean `input` or `biding` on `angular` and on this case we are `biding` the form to the `form group` passing the `model` that we already created
- Now we need to `bind` the `input` to the `field` that we created
  ```js
  @Component({
    selector: 'app-habit-list',
    template: `
      <h2>Habits</h2>
      <form [formGroup]="habitForm">
        <input type="text" placeholder="Add habit" formControlName="title" />
        <button type="submit">Add</button>
      </form>
      <ul>
        <app-habit-item *ngFor="let habit of habits" [habit]="habit"></app-habit-item>
      </ul>
    `,
    styles: []
    })
  ```
- Finnally; we need some way to submit the form and we can do this using an `angular` event call `ngSubmit`
  ```js
  @Component({
    selector: 'app-habit-list',
    template: `
      <h2>Habits</h2>
      <form [formGroup]="habitForm" (ngSubmit)="onSubmit(habitForm.value)">
        <input type="text" placeholder="Add habit" formControlName="title" />
        <button type="submit">Add</button>
      </form>
      <ul>
        <app-habit-item *ngFor="let habit of habits" [habit]="habit"></app-habit-item>
      </ul>
    `,
    styles: []
    })
  ```
  The `parenthesis` on `ngSubmit` determines that is an event or an output. The `onSubmit` function is not created yet; we will do it next
- On the `HabitListComponent` class add the following function

```js
export class HabitListComponent implements OnInit {
   ...
   onSubmit(newHabit: {id: number, title: string}) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
    this.habitForm.reset();
  }
}
```

We receive the value of the form; then create an `id` for the `habit`; push the `new habit` to the ` habit` array and finally, we clean the input

- On your terminal; go to the root of the `angular` project and run your local server
- On your browser; go to http://localhost:4200/
- You should see an input before the `habit` list
- Fill in the input and click on the submit button
- The `habit` that you add on the input should appear on the `habit` list bellow

## Communicate between components with outputs and event emitters

Now we will move the form to its own child component to continue separating elements so we can add functionality and its own style and don't make the list component grow but there will be an issue that we take care of after we move almost all code to the new form component.

- First; on your terminal go to the root of the `angular` project
- Create a new component call `habit-form`
  `ng g c habit-form`
- On your editor; you should see that a new directory call `habit-form` is created on the `app` folder
- Enter to the `habit-form.component.ts`
- Remove the content of the `template` property in the component directive
- Copy the component selector
- Go to the `habit-list.component.ts`
- Add the `habit-form` component selector and cut the form of the `template` property
  ```js
  @Component({
    selector: 'app-habit-list',
    template: `
      <h2>Habits</h2>
      <app-habit-form></app-habit-form>
      <ul>
        <app-habit-item *ngFor="let habit of habits" [habit]="habit"></app-habit-item>
      </ul>
    `,
    styles: []
  })
  ```
- Go to the `habit-form` component file
- Paste the form to the template property
  ```js
  @Component({
    selector: 'app-habit-form',
    template: `
    <form [formGroup]="habitForm" (ngSubmit)="onSubmit(habitForm.value)">
      <input type="text" placeholder="Add habit" formControlName="title" />
      <button type="submit">Add</button>
    </form>
    `,
    styles: []
  })
  ```
- Import the `FormBuilder` from `@angular/forms`
  `import { FormBuilder } from '@angular/forms';`
- Now on the `HabitFormComponent` class add the `habitForm` model
  ```js
  export class HabitFormComponent implements OnInit {
    habitForm: any;
    ...
  }
  ```
- Now go to the `habit-list` component and copy the `constructor` of the `HabitListComponent`
- Then paste the `constructor` on the `HabitFormComponent` class

  ```js
  export class HabitFormComponent implements OnInit {
    habitForm: any;

    constructor(private formBuilder: FormBuilder) {
      this.habitForm = this.formBuilder.group({
        title: '',
      })
    }
    ...
  }
  ```

We move almost all the code of the form to it own component but we are missing the `onSubmit` function to make the `ngSubmit` event work. We can't just copy the code we have on the `habit-list` because as you may notice will have an error because we won't have the `habit` list on the `habit-form` component. We could pass via an `input` the value of the `habit` list into the `habit-form` but we will be modifying the data on the child instead of the father and that is not a good practice; is better that we emit the new value from the form to the array and we can do just that with a something call [event emitter](https://angular.io/api/core/EventEmitter) on `angular` using an [output](https://angular.io/api/core/Output). Let get into it!!!

- On your editor; go to thee `habit-form` component and import `Output` and `EventEmitter` from `@angular/core`
  `import { Component, OnInit, Output, EventEmitter } from '@angular/core';`
- On the `HabitFormComponent` add the following

  ```js
  export class HabitFormComponent implements OnInit {
    habitForm: any;
     @Output() addHabit = new EventEmitter<any>();

    constructor(private formBuilder: FormBuilder) {
      this.habitForm = this.formBuilder.group({
        title: '',
      })
    }
    ...
  }
  ```

  This will create an `addHabit` variable that is an `output` and will have an instance of the `EventEmitter` class(You can specify the type that you want but in this case, we don't specify any)

- Now create the `onSubmit` function with the following content

  ```js
  export class HabitFormComponent implements OnInit {
    habitForm: any;
     @Output() addHabit = new EventEmitter<any>();

    constructor(private formBuilder: FormBuilder) {...}

    onSubmit(newHabit: {id: number, title: string}) {
      this.addHabit.emit(newHabit);
      this.habitForm.reset();
    }
    ...
  }
  ```

  This will emit the new value to its father component

- Now go to the `habit-list` component
- On the `habit-form` selector add the following
  ```js
  @Component({
    selector: 'app-habit-list',
    template: `
      <h2>Habits</h2>
      <app-habit-form (addHabit)="onAddHabit($event)"></app-habit-form>
      <ul>
        <app-habit-item *ngFor="let habit of habits" [habit]="habit"></app-habit-item>
      </ul>
    `,
    styles: []
  })
  ```
  This will set the `addHabit output` and tell `angular` that run the `onAddHabit` function(We will create next) sending the actual event object
- Go down and rename the `onSubmit` function to `onAddHabit` and delete the `reset` line
- Remove the `habitForm` and the content and parameters in the `constructor`(Do not eliminate the `constructor`)
- On your terminal run your local server
- On your browser; go to http://localhost:4200/
- You should see the same list and input on the page
- Fill the input and submit
- The new `habit` should be added to the list

## Share data and business logic throughout an angular application service

We have our `habits` array and the `add habit` logic store on our component and that is ok for a small application but what if we need to access this information or add another `habit` in another place of the application; we will need to pass this code somehow or duplicate it but `angular` have a solution for us called [service](https://angular.io/guide/architecture-services). Now let's create this `service`:

- On your terminal; go to the root of the `angular` project
- Use the `service` command to generate a new `service` call `habit`
  `ng generate service habit` or `ng g s habit`
- On your editor; you will see a new file called `habit-service.ts`
- Go to the `habit-list` component and cut the `habits` array(Leave the `habits` as a property of the class)
- Paste it on the `HabitService` class on the `habit.service` file
- Go back to the `habit-list` component and copy the `onAddHabit` function
- Get back to the `HabitService` class and paste it
- Rename from `onAddHabit` to `addHabit` in the `habit-service` file
- Import `Observable` and `of` from `rxjs`
  `import { Observable, of } from 'rxjs';`
- Now we need to create a function to get the `habits` so on the `HabitService` class add a new function call `getHabits`

  ```js
  export class HabitService {
    habits = [...];

    constructor() { }

    getHabits(): Observable<any> {
      return of(this.habits)
    }

    addHabit(newHabit: {id: number, title: string}) {
      const id = this.habits.length + 1;
      newHabit.id = id;
      this.habits.push(newHabit);
    }
  }
  ```

  We change the array to a [observable](https://angular.io/guide/observables) so if we move to a real `http` call the component is already set up correctly

- The `service` is already set so we need to make it available to the `habit-list` component and to do this the first thing that we want to do is to make sure that the `habits` is an `observable` so import `Observable` from `rxjs`
  `import { Observable, of } from 'rxjs';`
- Add the typing to the `habits` property in the `HabitListComponent` class

  ```js
  export class HabitListComponent implements OnInit {
  habits: Observable<any>;

    constructor() {}

    onAddHabit(newHabit: {id: number, title: string}) {...}

    ngOnInit(): void {}

  }
  ```

- We want to have the collection on `habits` when the component loads so to do this we need to inject an instance of the `service` on the `constructor`

  ```js
  export class HabitListComponent implements OnInit {
  habits: Observable<any>;

    constructor(private habitService: HabitService) {}

    onAddHabit(newHabit: {id: number, title: string}) {...}

    ngOnInit(): void {}

  }
  ```

- `Angular` provides something call the `async pipe` that is a pure function that we can use to manipulate data on the `template` so with this we will tell `angular` that `habits` is an `observable` and need to `subscribe` or `unsubscribe` and do everything you need to do so you can iterate the `habits`. So on the `template` add the following:
  ```js
  @Component({
    selector: 'app-habit-list',
    template: `
      <h2>Habits</h2>
      <app-habit-form (addHabit)="onAddHabit($event)"></app-habit-form>
      <ul>
          <app-habit-item *ngFor="let habit of habits | async" [habit]="habit"></app-habit-item>
      </ul>
    `,
    styles: []
  })
  ```
- Now we need to that the `habits` get the data from the `service` using the `getHabit` function that we did before

  ```js
  export class HabitListComponent implements OnInit {
  habits: Observable<any>;

    constructor(private habitService: HabitService) {
      this.habits = this.habitService.getHabits();
    }

    onAddHabit(newHabit: {id: number, title: string}) {...}

    ngOnInit(): void {}

  }
  ```

- Then we need to update the `onAddHabit` function to use the `addHabit` method that we defined before on the `service`

  ```js
  export class HabitListComponent implements OnInit {
  habits: Observable<any>;

    constructor(private habitService: HabitService) {
      this.habits = this.habitService.getHabits();
    }

    onAddHabit(newHabit: {id: number, title: string}) {
      this.habitService.addHabit(newHabit);
    }

    ngOnInit(): void {}

  }
  ```

- On your terminal; go to the root of your `angular` project and start your local server
- In your browser; go to http://localhost:4200/
- You should see the `Habits` list like before with the input and the submit button
- Fill the input and submit the data
- You should see that the input data clean itself and appear at the bottom of the `habit` list

## Add custom data types with typescript interface on angular

As you can see on some parts of the app we are using the generic `any` type for our `habits` but we actually want our custom type so we can use it across the app.

- On your terminal; go to the root of the `angular` project
- Use the `interface` command to create a new type call `habit`
  `ng generate interface habit` or `ng g i habit`
- On your editor, you will see a `habit.ts` file on the `apps` directory
- On this newly created file add the following
  ```js
  export interface Habit {
    id: number;
    title: string;
    count: number;
  }
  ```
  This will represent the structure of a `habit`(We don't add the `count` yet on the `habit` array)
- Go to the `habit-service.ts` file and import the new `Habit` type
  `import { Habit } from './habit';`
- Now on the `habits` array add the type(Will be a `Habit` array)
  ```js
  habits: Habit[] = [
    {
      id: 1,
      title: 'Check in with parents once a week',
    },
    {
      id: 2,
      title: 'Record 2 videos per day',
    },
    {
      id: 3,
      title: 'Work on side project 5 hours/week',
    },
    {
      id: 4,
      title: 'Write for 20 minutes a day',
    },
  ];
  ```
  As you can see you got an error because the `count` should exist for this type
- Go to the `habit.ts` file and add a question mark on the `count`
  ```js
  export interface Habit {
    id: number;
    title: string;
    count?: number;
  }
  ```
  This means that the `count` can exist or not
- Check that the error is gone on the `habit.service.ts` file
- Add the `count` property on each `habit`
  ```js
  habits: Habit[] = [
    {
      id: 1,
      title: 'Check in with parents once a week',
      count: 5,
    },
    {
      id: 2,
      title: 'Record 2 videos per day',
      count: 4,
    },
    {
      id: 3,
      title: 'Work on side project 5 hours/week',
      count: 3,
    },
    {
      id: 4,
      title: 'Write for 20 minutes a day',
      count: 6,
    },
  ];
  ```
- Go back to the `habit.ts` file and remove the question mark
- In the `habit.service.ts` and tell `typescript` that the `getHabits` function return an array of `habits`
  ```js
  getHabits(): Observable<Habit[]> {
    return of(this.habits)
  }
  ```
- The define the type of the `newHabit` parameter on the `addHabit` function to be a `habit`
  ```js
  onAddHabit(newHabit: Habit) {
    this.habitService.addHabit(newHabit);
  }
  ```
- Go to the `habit-list.component.ts` file
- Import the `Habit` type
  `import { Habit } from '../habit';`
- Update the `habits` property on the `HabitListComponent` class
  `habits: Observable<Habit[]>;`
- Then on the `onAddHabit` function define it parameter as a `habit`
  ```js
  onAddHabit(newHabit: Habit) {
    this.habitService.addHabit(newHabit);
  }
  ```
- Finally go to the `habit-item.component.ts` file
- Import the `Habit` type
  `import { Habit } from '../habit';`
- Add the `Habit` type to the `input`
  `@Input() habit: Habit;`
- Since we add a type to the `input`; typescript will ask us to initialize it value on the `constructor`
  ```js
  constructor() {
    this.habit = {
      id: 0,
      title: '',
      count: 0
    }
  }
  ```

## Add optional properties on angular to typescript interfaces

We mentioned before the `optional` types on our custom types just putting a `question mark` after the name but we can also add computed properties from our frontend to our custom interface. To demonstrate this we will add a `streak` property on our custom type that will be a `boolean` that will become `true` if the `count` is more than `6`.

- On your editor go to the `habits.ts` file on the root of the `apps` directory
- Add the `streak` property like this:
  ```js
  export interface Habit {
    id: number;
    title: string;
    count: number;
    streak?: boolean;
  }
  ```
  This will make the `streak` property optional that is what we want because its value will be calculated on the frontend
- Go to the `habit-list.component.ts`
- Import the `map` function from `rxjs/operators`
  `import { map } from 'rxjs/operators';`
- Go to the `HabitListComponent` class and add the following

  ```js
  export class HabitListComponent implements OnInit {
  habits: Observable<Habit[]>;

  constructor(private habitService: HabitService) {
    this.habits = this.habitService.getHabits().pipe(map(habits => {
      return habits.map(habit => {
        habit.streak = habit.count > 5 ? true : false;
          return habit;
        })
      }));
    }
    ...
  }
  ```

  Here we use the `pipe` function that links operators together so you can combine multiple functions into a single one in this case we call the `map` [operator](https://angular.io/guide/rx-library#operators) that will let you `loop` throw a set of values that you have and finally we add the `streak` property depending the amount of the `count` property

- Now go to the `habit-item.component.ts`
- On the `li` of the template add the following logic for the style of the element:
  ```js
  @Component({
    selector: 'app-habit-item',
    template: `
      <li [style.color]="habit.streak ? 'red' : 'black'">{{ habit.title }} (Count: {{ habit.count }})</li>
    `,
    styles: []
  })
  ```
  Here you will see that we add the `color` property to the `li` element and will be red if we have the `streak` property set to `true` otherwise will be `black`
- On your terminal; go to the root of the `angular` project and run your local server
- On your browser go to the http://localhost:4200/
- You should see at least one of the `habits` with the `red` color if you are following the example

## Use scope component styles in Angular

By default `angular` use `scope css` that means that if you add some styling in one component will only affect that component and not the others. Let test this a little bit.

- Go to the `habit-form.component.ts`
- On the `styles` array add the following
  ```js
  @Component({
    selector: 'app-habit-form',
    template: `... `,
    styles: [
      `
        button {
          background-color: blue;
          color: white;
          border-radius: 5px;
          font-size: 16px;
        }
      `
    ]
  })
  ```
  This will add some styling to the button of our form
- Now go to the `habit-item.component.ts`
- On the `template` property add a `delete` button that will be inside of the `li` element
  ```js
  @Component({
    selector: 'app-habit-item',
    template: `
      <li [style.color]="habit.streak ? 'red' : 'black'">{{ habit.title }} (Count: {{ habit.count }})<button type="button">Delete</button></li>
    `,
    styles: []
  })
  ```
- In your terminal; go to the root of the `angular` project and start your local server
- On your browser go to http://localhost:4200/
- You should see that the `add` button have some styling and the `delete` button doesn't have the same styles
- Open the browser `dev tools`
- Check the `css` of the `add` button
- You will see that is a generated class for the `add` button that the `delete` button doesn't have
