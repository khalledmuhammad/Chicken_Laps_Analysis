import React from 'react'
import {Switch , Route } from "react-router-dom"
import { useSelector } from "react-redux";
import Auth from '../Authenticate/Auth';
import Home from '../Home/Home';
import Maamel from '../Maamel/Maamel';
import MaamelTfry5 from '../Maamel/MaamelTfry5';
import MaamelTsmynData from '../MaamelData/MaamelTsmynData';

import AddCompany from '../Home/AddCompany';
import BrokenData from '../MaamelData/BrokenData';
import HtachingData from '../MaamelData/HtachingData';
import FertData from '../MaamelData/FertData';
import EggData from '../MaamelData/EggData';
import CompanyLabs from '../Home/CompanyLabs';
import LabData from '../Home/LabData';
import BrokenEggsData from '../Home/BrokenEggsData';
import EggsData from '../Home/EggsData';
import HatchingEggsData from '../Home/HatchingEggsData';
import FertilizationData from '../Home/FertilizationData';



function Routes() {
    const loggedIn = useSelector((state) => state.App.loggedIn);
    const userRole = useSelector((state) => state.Users.user.role);


    return (
        <div>
             {  !loggedIn ?
              <Switch>
             
            <Route path="/" component={Auth} />

       
                
                </Switch> 
                :
    <Switch >
    { userRole==="admin" ? 
    <>
        <Route exact path="/" component={Home} /> 
     <Route  path="/Add-Company" component={AddCompany} />
     <Route path="/:Cid/:Lid/hatchingData" component={HatchingEggsData} />
     <Route path="/:Cid/:Lid/fertData" component={FertilizationData} />
     <Route path="/:Cid/:Lid/eggsData" component={EggsData} />
     <Route path="/:Cid/:Lid/brokenData" component={BrokenEggsData} />
     <Route exact path="/:Cid/:Lid" component={LabData} />
     <Route exact path="/:Cid" component={CompanyLabs} />


     
     </>
 

     :
     <>
     
     <Route exact path="/" component={Maamel} />
          <Route exact  path="/mamelTfry5" component={MaamelTfry5} />


          <Route  exact path="/mamelTfry5/:mid" component={MaamelTsmynData} />
   


          <Route path="/mamelTfry5/:mid/broken" component={BrokenData} />
          <Route path="/mamelTfry5/:mid/hatching" component={HtachingData} />
          <Route path="/mamelTfry5/:mid/fert" component={FertData} />
          <Route path="/mamelTfry5/:mid/eggData" component={EggData} />



     </>



    
}

     


    </Switch>
    }
        </div>
    )
}

export default Routes
