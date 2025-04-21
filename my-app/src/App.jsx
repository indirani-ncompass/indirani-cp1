// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Login from './login'

// // // function App() {
 
// // //   const [text,settext]=useState("");
// // //   let [vowelCountt,setvowelCount]=useState(0);
// // //   let [conCountt,setconCount]=useState(0);
// // //   function printPara(e){
// // //     console.log("hello")
// // //     settext(e.target.value);
// // //     console.log("voqwel",vowelCountt);
    
// // //     vowelCount(e.target.value,)
// // //     consonantCount(e.target.value)
// // //   }

// // // 
// // // function vowelCount(str) {
// // //     const vowels = "aeiouAEIOU";
// // //     for (let char of str) { 
// // //       if (vowels.includes(char) ) {   
// // //         vowelCountt=vowelCountt+1;
// // //         setvowelCount(vowelCountt);
// // //       }
// // //     } 
// // //     console.log("v",vowelCountt) ;
// // //   }
  

// // // function consonantCount(str) {
// // //   const vowels = "aeiouAEIOU";
// // //   let count=0
// // //   for (let char of str) {
// // //     let char1=char.toLowerCase();
// // //     if (!vowels.includes(char1) && /[bcdfghjklmnpqrstvwxyz]/.test(char1)) {
// // //       count=count+1;
// // //       setconCount(count);
// // //     }
// // //   } 
// // // }


// // function App(){
// //     //  let[text,settext]=useState(" ");
// //     //  let[vc,setvc]=useState(0);
// //     //  let[cc,setcc]=useState(0);
// //     //  console.log(vc);
// //     //  console.log(cc);
// //     //  function printpara(e){
// //     //   console.log(e.target.value);
// //     //   settext(e.target.value);
// //     //   vowelOrConsonant(e.target.value)
// //     //  }
       
// //     //  function vowelOrConsonant(str){
// //     //   const vowels = "aeiouAEIOU";
// //     //   let vowelCount=0;
// //     //   let ccCount=0;
// //     //     for(let char of str){
// //     //       if(vowels.includes(char)){
// //     //         vowelCount++;     
// //     //       }else if(char>='a' && char<='z' || char<='A' && char>='Z'){
// //     //         ccCount++;
// //     //       }
// //     //     }
// //     //     setvc(vowelCount);
// //     //     setcc(ccCount);
// //     //  }

// //   //    const newChar = inputText[inputText.length - 1];

// //   // 
// //   // if (newChar) {
// //   //   const vowels = "aeiouAEIOU";
// //   //   if (vowels.includes(newChar)) {
// //   //     
// //   //     setVc((prevVc) => prevVc + 1); 
// //   //   } else if ((newChar >= 'a' && newChar <= 'z') || (newChar >= 'A' && newChar <= 'Z')) {
// //   //     
// //   //     setCc((prevCc) => prevCc + 1); 
// //   //   }
// //   // }

// //   return (
// //     <>
// //       <p>Hello</p>
// //       <h1>Started with HTML</h1>
      
// //        <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS402z9ayQDSEYBH50P2wPpci6N3toyoQhy1YVEstC9TbxZr2H0odMn_zQ&s"width="300" height="200" alt="panda"></img>
// //        <a href="https://en.wikipedia.org/wiki/Giant_panda" target="_parent">PANDA</a>
// //        <ul>
// //     <li>first</li>
// //     <li>Second </li>
// //     <li>Third</li>
// //   </ul>
// //   <ol>
// //     <li>first</li>
// //     <li>Second </li>
// //     <li>Third</li>
// //   </ol>
// //   <p>hyy</p>
// //   <input type='text' name='inputname' className='input' id='copyinput' onInput={printpara} value={text}/>
// //   <p id="output">
// //   {text}
// //   </p>
// //   <p> VowelCount:{vc}</p>
// //   <p> Consonant Count:{cc}</p>



// //   {/* <div>
// //     <h1>LOGIN</h1>
// //     <Login/>
// //   </div> */}
     
// //     </>
// //   )
// // }

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//       <ul>
//     <li>first</li>
//     <li>Second </li>
//     <li>Third</li>
//   </ul>
//       <p>React Site Hosting </p>
//       <div>
// //     <h1>LOGIN</h1>
// //     <Login/>
// //   </div>
//     </div>
//   );
// }

// export default App



import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Second from './SecondPage';
function App() {
  return (
    <Router>
      <div>
       

        <Routes>
          <Route path="/" element={
            <div className="App">
              <ul>
           
           <li>
             <Link to="/second">Second Page</Link>
           </li>
         </ul>
              <h1>Hello World!</h1>
              <ul>
                <li>first</li>
                <li>Second</li>
                <li>Third</li>
              </ul>
              <p>React Site Hosting </p>
            </div>
          } />
          <Route path="/second" element={<Second />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
