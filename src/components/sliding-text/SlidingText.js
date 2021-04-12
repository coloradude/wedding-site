import React from 'react'
import './slidingText.css'

/**
 * @param {string} tag - Tag name you wish to animate
 * @param {string} text - Text you wish to animate
 * @param {string} animation - Animation you wish to use
 * @param {string} delay - Animation delay in seconds ie. '.5s'
 */

const SlidingText = ({
  tag = 'NoTagParam', 
  text = 'Add text dummy!', 
  animation = 'fadeInUp', 
  delay = '0.5s'
}) => {

  let line

  switch(tag){
    case 'h1': 
      line = <h1 className={`.${animation} .${delay}`}>{text}</h1>
      break;
    case 'h2': 
      line = <h2 className={`.${animation} .${delay}`}>{text}</h2>
      break;
    case 'h3': 
      line = <h3 className={`.${animation} .${delay}`}>{text}</h3>
      break;
    case 'h4': 
      line = <h4 className={`.${animation} .${delay}`}>{text}</h4>
      break;
    case 'h5': 
      line = <h5 className={`.${animation} .${delay}`}>{text}</h5>
      break;
    case 'h6': 
      line = <h6 className={`.${animation} .${delay}`}>{text}</h6>
      break;
    case 'p': 
      line = <p className={`.${animation} .${delay}`}>{text}</p>
      break;
    case 'span': 
      line = <span className={`.${animation} .${delay}`}>{text}</span>
      break;
    default:
      line = <h1 className={`.${animation} .${delay}`}>Add Tag Param Dummy</h1>
      break;
  }

  return line
}

export default SlidingText