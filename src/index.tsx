import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Bond from './pages/Bond/Bond';
import Chest from './pages/Chest/Chest';
import ChestDetail from './pages/ChestDetail/ChestDetail';
import CollectionProfile from './pages/CollectionProfile/CollectionProfile';
import Craft from './pages/Craft/Craft';
import CreateChest from './pages/CreateChest/CreateChest';
import CreateChestNft from './pages/CreateChestNft/CreateChestNft';
import CreateNft from './pages/CreateNft/CreateNft';
import Dashboard from './pages/Dashboard/Dashboard';
import Earn from './pages/Earn/Earn';
import Home from './pages/Home/Home';
import MarketPlace from './pages/MarketPlace/MarketPlace';
import NftDetail from './pages/NftDetail/NftDetail';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path="marketplace" element={<MarketPlace/>}/>
          <Route path="marketplace/:nftId" element={<NftDetail/>}></Route>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path='create' element={<CreateChestNft/>}/>
          <Route path='create/nft' element={<CreateNft/>}/>
          <Route path='create/chest' element={<CreateChest/>}/>
          <Route path='bond' element={<Bond/>}/>
          <Route path='chest' element={<Chest/>}/>
          <Route path='chest/:chestId' element={<ChestDetail/>}/>
          <Route path="craft" element={<Craft/>}/>
          <Route path="collection/:collectionId" element={<CollectionProfile/>}/>
          <Route path="earn" element={<Earn/>}/>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
