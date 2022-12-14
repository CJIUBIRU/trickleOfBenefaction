import "../App.css";
import NavbarComp from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../elements/navbar";
import Login from "./Login";
import DonateList from "./DonateList";
import UploadDemand from "./UploadDemand";
import UploadDemandSec from "./UploadDemandSec";
import UploadDemandThird from "./UploadDemandThird";
import LoginDemand from "./LoginDemand";
import LoginAdmin from "./LoginAdmin";
import Signin from "./Signin";
import MyDemand from "./MyDemand";
import Profile from "./Profile";
import DonateListSec from "./DonateListSec";
import DonateListThird from "./DonateListThird";
import DonateRecord from "./DonateRecord";
import DonateRecordList from "./DonateRecordList";
import Process from "./Process";
import ProcessRecordList from "./ProcessRecordList";
import ViewRecord from "./ViewRecord";
import CharityInfo from "./CharityInfo";
import CharityPreview from "./CharityPreview";
import SetPassword from "./SetPassword";
import PasswordSuccess from "./PasswordSuccess";
import UploadSuccess from "./UploadSuccess";
import Charity from "./Charity";
import CharityDetail from "./CharityDetail";
import CharityInfoSuccess from "./CharityInfoSuccess";
import ApplicationInfo from "./ApplicationInfo";
import ApplicationUpload from "./ApplicationUpload";
import ManagerProveData from "./ManagerProveData";
import PointsActivity from "./PointsActivity";
import PointsItem from "./PointsItem";
import PointsItemDetails from "./PointsItemDetails";
import PointsItemSuccess from "./PointsItemSuccess";
import ManagerProve from "./ManagerProve";
import ManagerProveMail from "./ManagerProveMail";
import SignUp from "./SignUp";
import UploadGoods from "./UploadGoods";
import UploadGoodsSec from "./UploadGoodsSec";
import ApplicationUpload2 from "./ApplicationUpload2";
import ApplicationUpload3 from "./ApplicationUpload3";
import ApplicationUpload4 from "./ApplicationUpload4";
import ForgetPasseord from "./ForgetPassword";
import UserUpdatePassword from "./UserUpdatePassword";
import AddStores from "./AddStores";
import UploadGoodsSuccess from "./UploadGoodsSuccess";
import AllGoods from "./AllGoods";
import AllStores from "./AllStores";
import UpdateStores from "./UpdateStores";
import UpdateGoods from "./UpdateGoods";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<NavbarComp />} />
            <Route path="/signin" element={<SignUp />} />
            <Route path="/uploadGoods" element={<UploadGoods />} />
            <Route path="/uploadGoodsSec" element={<UploadGoodsSec />} />
            <Route path="/loginin" element={<Signin />} />
            <Route path="/donate" element={<DonateList />} />
            <Route path="/upload" element={<UploadDemand />} />
            <Route path="/demandstep2" element={<UploadDemandSec />} />
            <Route path="/demandstep1" element={<UploadDemand />} />
            <Route path="/demandstep3" element={<UploadDemandThird />} />
            <Route path="/myDemand" element={<MyDemand />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/donatestep2" element={<DonateListSec />} />
            <Route path="/donatestep3" element={<DonateListThird />} />
            <Route path="/donateRecord" elelment={<DonateRecord />} />
            <Route path="/donateRecordList" element={<DonateRecordList />} />
            <Route path="/process" element={<Process />} />
            <Route path="/processRecordList" element={<ProcessRecordList />} />
            <Route path="/viewRecord" element={<ViewRecord />} />
            <Route element={<ApplicationInfo />} path="/applicationInfo" />
            <Route element={<ApplicationUpload />} path="/applicationUpload" />
            <Route element={<ApplicationUpload2 />} path="/applicationUpload2" />
            <Route element={<ApplicationUpload3 />} path="/applicationUpload3" />
            <Route element={<ApplicationUpload4 />} path="/applicationUpload4" />
            <Route element={<UploadSuccess />} path="/uploadSuccess" />
            <Route element={<ManagerProve />} path="/managerProve" />
            <Route element={<ManagerProveMail />} path="/managerProveMail" />
            <Route element={<ManagerProveData />} path="/managerProveData" />
            <Route element={<SetPassword />} path="/setPassword" />
            <Route element={<PasswordSuccess />} path="/passwordSuccess" />
            <Route element={<CharityInfo />} path="/charityInfo" />
            <Route element={<CharityPreview />} path="/charityPreview" />
            <Route
              element={<CharityInfoSuccess />}
              path="/charityInfoSuccess"
            />
            <Route element={<Charity />} path="/charity" />
            <Route element={<CharityDetail />} path="/charityDetail" />
            <Route element={<PointsActivity />} path="/pointsActivity" />
            <Route element={<PointsItem />} path="/pointsItem" />
            <Route element={<PointsItemDetails />} path="/pointsItemDetails" />
            <Route element={<PointsItemSuccess />} path="/pointsItemSuccess" />
            <Route element={<ForgetPasseord />} path="/forgetPassword" />
            <Route element={<UserUpdatePassword />} path="/userUpdatePassword" />
            <Route element={<AddStores />} path="/addStores" />
            <Route element={<UploadGoodsSuccess />} path="/uploadGoodsSuccess" />
            <Route element={<AllGoods />} path="/allGoods" />
            <Route element={<AllStores />} path="/allStores" />
            <Route element={<UpdateStores />} path="/updateStores" />
            <Route element={<UpdateGoods/>} path="/updateGoods"></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
