import './App.css';
import {useState, useEffect} from "react";
import Image from './components/Image';


let newValue = [];
let totalAmount = [];
let count = {};




function App() {
  
  let myObj = {
    id:[0,1,2,3,4,5,6,7,8,9],
    image:["/images/pic1.jpg","/images/pic2.jpg","/images/pic3.jpg","/images/pic4.jpg","/images/pic5.jpg","/images/pic6.jpg","/images/pic7.jpg","/images/pic8.jpg","/images/pic9.jpg","/images/pic10.jpg"],
    value:[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
  };
  let imgObj = myObj.image
  let valueObj = myObj.value
  let [price, setPrice] = useState(0);
  let [total, newTotal] = useState(0);
  let [number, newNumber] = useState(0);
  
  
  

  
//adding the items in cart
  function addCart(index){
    
    price = index;
    setPrice(price);
    if (newValue.includes(price) === false){
      newValue.push(price);
    };
    totalAmount.push(valueObj[price]);

    let sum = totalAmount.reduce((partialSum, a) => partialSum + a, 0);
    newTotal(sum); 

    let counts = {};
    totalAmount.forEach((value) => {
      if (!counts[value]) {
        counts[value] = 1;
      } else {
        counts[value]++;
      }
    });
    count = {...counts}
    console.log(count);

  }
  
  
//increasing the number of items
  function adder(element){
    count[valueObj[element]]++;
    newNumber(count[valueObj[element]])
    totalAmount.push(valueObj[element]);
    let sum = totalAmount.reduce((partialSum, a) => partialSum + a, 0);
    newTotal(sum); 
    
  }

//decreasing the number of items in cart

  function substractor(element, i){
    count[valueObj[element]]--;
    newNumber(count[valueObj[element]])
    console.log(newValue);
    const index = totalAmount.indexOf(valueObj[element]);
    if (index > -1) { 
        totalAmount.splice(index, 1); 
    }
    let sum = totalAmount.reduce((partialSum, a) => partialSum + a, 0);
    newTotal(sum); 

    //deleting the div if the content is less than 1
    if (count[valueObj[element]] < 1){
      newValue.splice(i,1);
    }
  }

  
  

  return (
    <>
    <div id="container">
      <div id="smallContainer-1">
            <div id='box1'className='nav'>HOME</div>
            <div id='box2'className='nav'>CONTACT</div>
            <div id='box3'className='nav'>MENU</div>
            <div id='box4'className='nav'>FAVOURITES</div>
      </div>
      <div id="smallContainer-2">
        <div className='images'>
          {imgObj.map((element, index)=>{
              return (
              <>
                <div key={index} className="image" onClick={()=>{addCart(index)}}><img src={element}/><button>Rs {valueObj[index]}</button></div>

              </>  
          )

          })}
        </div>

        <div className='cardAdder'>

          {newValue.map((element, i )=>{
             
            
            if (newValue.length>0){
              return (
              <>
              
              <div id={i}><span><img src={imgObj[element]}/></span><span>{valueObj[element]}</span><span><button onClick={()=>adder(element)}>+</button>Rs {count[valueObj[element]]}<button onClick={()=>substractor(element, i)}>-</button></span></div>
              </>
              );
            }
          })}

          <div className='total'>TOTAL: Rs {total}</div>
          
        </div>
            
            
            
      </div>
    </div>
    
    </>

    
    
  );
};



export default App;
