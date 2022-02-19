import {useRef, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import alanBtn from "@alan-ai/alan-sdk-web";
import Alan from './Alan';


const Home = () => {

    const nav = useNavigate() 
    useEffect(() => {
        alanBtn({
          key: '50a97403ba24b4b5d46f100e317501542e956eca572e1d8b807a3e2338fdd0dc/stage',
          onCommand: (commandData) => {
            console.log(commandData)
            if (commandData.command === 'addOrder') {
              nav('/shop')
            }

            if (commandData.command === 'logout') {
              nav('/')
            }
            
            if (commandData.command === 'viewEvents') {
              nav('/events')
            }
            if (commandData.command === 'learn') {
              nav('/learn')
            }
            // if (commandData.command === 'watchTutorials') {
            //   nav('/tutorials')
            // }
          },
        })
      }, []);
     
      const productList = "wheelchair|hearing aid|crutch|eyeglass";
    
    //   intent(`(I want|Add) (a|) $(PRODUCT ${productList})`, p => {
    //       p.play(`Searching for ${p.PRODUCT.value} `, 'Please wait', 'Here you go');
    //       p.play({command: 'addOrder', item: p.PRODUCT.value, quantity: 1});
    //   });

    //   intent(`Go to the signup page`, p => {
    //     p.play({command: 'navigation', route: 'signup'});
    //     p.play(`Opening the signup page...`);
    //   });
  
    return (
      <></>
  )
}

export default Home