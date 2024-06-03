import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import AllCategories from "./components/Allcategory/AllCategories";
import About from "./components/About/About";
import Allproducts from "./components/Allproducts/Allproducts";
import Success from "./components/Success/Success"; // Import Success component
import Failed from "./components/Failed/Failed"; // Import Failed component


function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/categories" element={<AllCategories />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Allproducts />} />
                    <Route path="/success" element={<Success />} /> {/* Add Success route */}
                    <Route path="/failed" element={<Failed />} /> {/* Add Failed route */}
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
