// const { Observable } = require('rxjs');
// import { Observable, Observer } from 'rxjs';
// import { filter, map } from 'rxjs/operators';

import React, { useState, createContext } from 'react';

interface DineshProps {
  children: React.ReactNode;
}

export const MyContext = createContext<any>(null);

const Toggle: React.FC<DineshProps> = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const click = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <MyContext.Provider value={{ toggle, setToggle, click }}>
        {children}
      </MyContext.Provider>
    </div>
  );
};

export default Toggle;
// const dinesh = new Promise((resolve, reject) => {
//   let a = 30
//   let b = 20
//   if (a < b) {
//     resolve('the condition is true')
//   } else {
//     reject('the condition is false')
//   }
// })
// dinesh.then((data) => {
//   console.log('successfull', data)
// }).catch((data) => {
//   console.log('unsuccessfull', data)
// })



// promises with async and await
// const dinesh = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('my name is dinesh')
//   }, 2000)
// })
// const umesh = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('my name is umesh')
//   }, 1000)
// })
// async function myname() {
//   const a = await dinesh
//   console.log(a)
//   const b = await umesh
//   console.log(b)
// }

// myname()

// const dinesh = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('my name is dinesh')
//   },1000)
// })
// dinesh.then((data) => {
//   console.log('promiseexample :', data)
// })



// const myname = new Observable((observer: Observer<string>) => {
//   setTimeout(() => {
//     observer.next('mango');
//     observer.next('Apple');
//     observer.next('banana');
//   }, 1000);
// });


// myname
//   .pipe(
//     // filter((result: string) => result === 'Apple'),
//     // map((value: String) => value + 'food')
//   )
//   .subscribe((result: string) => {
//     console.log('observable example :', result);
//   });
