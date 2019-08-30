import React from 'react';
import { Context } from '../store/appContext';

function Home() {
  return (
    <Context.Consumer>
      {
        ({ store, actions }) => { return(
          <div >
          <div>
            <input type="text" name="userName" onChange={e => {actions.getInfo(e)}} placeholder="Username"></input>
          </div>
          <div>
            <input  type="password" name="passWord" placeholder="Password" onChange={i => {actions.getInfo(i)}}></input>
          </div>
            
            
          <div>
            <button onClick={() => actions.submitter(store.submitted)}>Submit</button>
          </div>  
        </div>
        );
       
      }
    }
    </Context.Consumer>
  );
}

export default Home;
