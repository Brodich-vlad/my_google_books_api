import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

import LayoutPage from "../../pages/layout-page/layout-page";
import HomePage from "../../pages/home-page/home-page";
import MyLibraryPage from "../../pages/my-library-page";
import ErrorPage from '../../pages/error-page';


export default function MyRoutes() {
 
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutPage/>}>
                    <Route index element={<HomePage/>}></Route>

                    <Route path={`myLibrary`} element={<MyLibraryPage/>}></Route>
                </Route>    
    
                <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}