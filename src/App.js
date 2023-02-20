import React, { useState } from 'react'
import './App.css';
import hero from './Assets/79.jpg'
import friend from './Assets/friends.png'
import lover from './Assets/lovers.png'
import affectionative from './Assets/affectionative.png'
import marriage from './Assets/marriage.png'
import enemies from './Assets/enemies.png'
import secretlovers from './Assets/secretlovers.png'
const flamesImages = {
  0: friend,
  1: lover,
  2: affectionative,
  3: marriage,
  4: enemies,
  5: secretlovers
}
const flamesName = {
  0: 'You Guys are Friends',
  1: 'You Guys are Lovers',
  2: 'You Gre Affecanative',
  3: 'You Guys will get Married',
  4: 'You Guys were Enemies',
  5: 'You Guys are Secret lovers',
}
function App() {

  const [name, setName] = useState("");
  const [girlName, setGirlName] = useState("");
  const [relationShip, setRelationShip] = useState();
  const [relationImage, setrelationImage] = useState();

  const onSubbmit = async () => {
    let nameArray = name.split('');
    let girlNameArray = girlName.split('');

    let uniqueNumber = 0;

    if (nameArray.length > girlNameArray.length) {
      uniqueNumber = await getUniqueValue(nameArray, girlNameArray);
    } else {
      uniqueNumber = await getUniqueValue(girlNameArray, nameArray);
    }
    let relationshipResult = await getRelationship(uniqueNumber);
    let resultName = await flamesName[relationshipResult]
    console.log('resultName: ', resultName);
    let resultimg = await flamesImages[relationshipResult]
    setRelationShip(resultName)
    setrelationImage(resultimg)
    console.log('resultimg: ', resultimg);
  }

  function getUniqueValue(array1, array2) {
    for (let index = 0; index < array1.length; index++) {
      let foundIndex = array2.indexOf(array1[index]);
      if (foundIndex >= 0) {
        array2[foundIndex] = 0;
        array1[index] = 0;
      }

    }
    let combinedArray = array1.concat(array2);
    let resultArray = [];
    for (let i = 0; i < combinedArray.length; i++) {
      if (combinedArray[i] != 0) {
        resultArray.push(combinedArray[i]);
      }
    }

    return resultArray.length;
  }

  const changeYourName = (e) => {
    setName(e.target.value)
  }

  const changeYourGirlName = (e) => {
    setGirlName(e.target.value)
  }

  function getRelationship(value) {
    let finalval = value % 6;
    return finalval;
  }

  return (
    <div>
      <div className='flex md:flex-row flex-col'>
        <div className='h-full w-full bg-custom-bg flex-col justify-center align-middle items-center flex'>
          <img src={hero} className='md:h-[34em] md:w-[34em] h-[20em] w-[20em]' />
          <div className='sm:pt-10 pb-2 text-custom-text'>
            <h1 className=' font-semibold text-2xl'>ILL THA KKA SAI YA</h1>
          </div>
        </div>
        {
          relationShip ? (
            <>
              <div className='h-full w-full pt-5 flex flex-col items-center sm:mx-10 rounded overflow-hidden shadow-lg"'>
                <p className='sm:text-2xl text-xl font-medium'>{relationShip}</p>
                <img src={relationImage} className='' />
              </div>
            </>
          ) : (
            <div className='h-full w-full sm:my-10 p-4 flex flex-col items-center '>
              <h1 className='font-bold md:text-4xl sm:text-2xl text-lg'> Solluga Mama kutty !!</h1>
              <div className='flex sm:py-20 py-8 pt-6 sm:px-16 px-14 flex-col gap-4 sm:mt-10 mt-5 mb-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700' >
                <h1 className=''>Your Name</h1>
                <input className='p-1 rounded-md border-custom-bg border-2 w-65' placeholder='Name'
                  value={name}
                  onChange={(e) => changeYourName(e)}
                />
                <h1>Your Crush Name</h1>
                <input className='p-1 rounded-md border-custom-bg border-2 w-65' placeholder='Crush Name'
                  value={girlName}
                  onChange={(e) => changeYourGirlName(e)}
                />
                <button className='bg-custom-button px-5 py-2 rounded mt-4' onClick={onSubbmit}>Find</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App;
