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