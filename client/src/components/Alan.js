import {useRef, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import alanBtn from "@alan-ai/alan-sdk-web";



const Home = () => {

    const nav = useNavigate() 
    useEffect(() => {
        alanBtn({
          key: 'ae81fee5be492f8cf984cc1732af719c2e956eca572e1d8b807a3e2338fdd0dc/stage',
          onCommand: (commandData) => {
              console.log(commandData);
             if( commandData.command === 'addOrder'){
                nav("/signin")
             }
          }
        });
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
 <main>

 </main>
  )
}

export default Home