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
