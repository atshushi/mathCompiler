<br />
  <h3 align="center">A math operations compiler</h3>

  <p align="center">
    String => Math
    <br />
    <a href="https://github.com/othneildrew/mathCompiler/issues">Report Bug</a>
    ·
    <a href="https://github.com/atshushi/mathCompiler/issues">Request Feature</a>
  </p>
</div>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [Node.js](https://nodejs.org/)
* [Eslint](https://eslint.org/)
* [Jest](https://jestjs.io/)
* [Typescript](https://www.typescriptlang.org/)
* [Babel](https://babeljs.io/)
* [Husky](https://typicode.github.io/husky)

## Getting Started

_Below is an example of how you can setup the project mathCompiler._

1. Clone the repo
   ```sh
   git clone https://github.com/atshushi/mathCompiler.git
   ```
2. Install Dependencies
   ```sh
   yarn install # if you use yarn
   npm install # if you use npm
   ```
3. Start the Project
   ```sh
   yarn start # if you use yarn
   npm run start # if you use npm
   ```

## Documentation

| Method      | Params   | Example     | The same as
| :--------   | :------- | :-------    | :-------
| sum(params) | number[] | sum([1, 2]) | 1 + 2 =
| subtract(params) | number[] | subtract([1, 2]) | 1 - 2 = -3
| multiply(params) | number[] | multiply([1, 2]) | 1 × 2 = 2
| divide(params) | number[] | divide([1, 2]) | 1 / 2 = 0.5
| pow(params) | number[] | pow([2, 3]) | 2³ = 8
| sqrt(params) | number | sqrt(5) | √5 =  2.23606797749979
| ceil(params) | number | ceil(5.5) | ≅5.5 = 6
| log(params) | number  | log(5) | log_e (5) = 1.6094379124341003
| max(params) | number[] | max([5, 1]) | 5 > 1 = 5 (Find the largest number)
| min(params) | number[] | min([5, 1]) | 5 < 1 = 1 (Find the smaller number)
| numbertofraction(params) | number | numbertofraction(5.5) | 5/1
| numberstopercent(params) | number[] | numberstopercent([17, 500]) | (17 / 100) * 500 = 85
| abbreviatenumber(params) | number | abbreviatenumber(50000) | 50K


## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Shushi - [shushi#1245](https://discord.com/users/852650555254767676) - atsushithesushi@gmail.com
