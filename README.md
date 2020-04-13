# PaymentApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

##Trouble with technical task
При реализации тестового задания возник момент с противоречиями в требованиях, а именно в пункте 2 “Тестового задания” явно указано, что второй инпут - это Стоимость за день. Но в таблице отображения есть колонка "Стоимость" которая в данном случае не понятно за что отвечает и какие данные в себе хранит. Так как это не стоимость за один месяц, на что указывает часть пункта 5 (необходимо учитывать, что платежи рассчитываются на текущий год и стоимость за каждый месяц будет различна, т.к. в каждом месяце различное количество дней) вследствие чего мы не можем рассчитать общую сумму по правилу которое описано в пункте 5 “Тестового задания” ( расчет общей суммы платежей осуществляется умножением стоимости платежа за месяц на количество выбранных месяцев и последующим их суммированием). Исходя из выше излагаемого в моей реализации задачи в колонке "Стоимость" отображаю фактическую стоимость платежа за выбранные месяцы по данному платежу. Которую рассчитывают по формуле: Стоимость за день умноженая на общие количество дней для всех выбранных месяцев. Общую сумму рассчитывают как сумму всех строк колонки Стоимость так как это будет соответствовать общей сумме всех платежей в таблице. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running test-coverage and create test report

Run `ng test --code-coverage` to run tests and create test report

![alt text](https://i.paste.pics/0c2cab6654585337ee3b78b0438fcb65.png)


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
