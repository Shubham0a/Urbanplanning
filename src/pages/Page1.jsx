// Respondent Travel profile
import {React, useState} from 'react'
import { Button } from '../components'
import { Questions } from "../data/questiondata";
import Page2 from './Page2';

function Page1() {

  const [activeQuestion, setActiveQuestion] = useState(0)
  const [chosenOption,setchosenOption] = useState(null)
  const [selectedOption, setSelectedOption] = useState([])
  const [activeSubmit, setinActiveSubmit] = useState(true)
  const [activeShow, setActiveShow] = useState(false)

  const onClickNext = () => {
    setActiveQuestion((prev) => prev + 1)
    setSelectedOption(() => [...selectedOption,chosenOption])
    setchosenOption(null);
  }

  const handleSubmit = () => {
    setSelectedOption(() => [...selectedOption,chosenOption])
    setinActiveSubmit(() => false)
  }

  const showResult = () => {
    setActiveShow(() => true)
  }

  const handleOptionChange = (e) => {
    setchosenOption(e.target.value);
  }

  const nquestions = Questions.length
  const { question, options } = Questions[activeQuestion]

  return (
    <>
    {!activeShow &&
    <div  className='flex justify-center items-center h-screen'> 
      <div className="flex flex-col justify-between max-w-md">
      {activeSubmit &&
      <div>
        <h2>Q{activeQuestion+1}: {question}</h2>
        <ul>
          {options.map((option) => (
            <li>
              <input type="radio" value={option} name="option" checked={chosenOption === option} onChange={handleOptionChange}
              /> {option}
            </li>
          ))}
        </ul>
        <div className='flex space-x-4'>
          {nquestions===activeQuestion+1 && activeSubmit &&
            <Button value="Submit" eventHandler={handleSubmit} />
          }
          {nquestions!==activeQuestion+1 &&
            <Button value="Next" eventHandler={onClickNext} />
          }
        </div>
      </div>
      }

      {!activeSubmit && 
      <div>
        Thank you for your submission.
        <div>
          <Button value="Show Result" eventHandler={showResult} />
        </div>
      </div>
      }
    </div>
    </div>
    }  
    
    {activeShow &&
      <div>
        <Page2 allchosenOption = {selectedOption}/>
      </div>
      }
    </>
  )
}

export default Page1