// import Sidebar from "./components/Sidebar";
// import styled from "styled-components";
// import HomePage from "./pages/HomePage";
// import {Switch, Route } from "react-router-dom";
// import AboutPage from "./pages/AboutPage";
// import ResumePage from "./pages/ResumePage";
// import ContactPage from "./pages/ContactPage";
// import PortfoliosPage from "./pages/PortfoliosPage";
// import BlogPages from "./pages/BlogPages";
 
// function App() {
//   return (
//     <div className="App">

//       <Sidebar />
//       <MainContentStyled>
//         <div className="lines">
//           <div className="line-1"></div>
//           <div className="line-2"></div>
//           <div className="line-3"></div>
//           <div className="line-4"></div>
//         </div>
//         <Switch>
//         <Route path="/" exact>
//           <HomePage />
//           </Route>

//           <Route path="/about" exact>
//           <AboutPage />
//           </Route>

//           <Route path="/resume" exact>
//           <ResumePage />
//           </Route>

//           <Route path="/portfolio" exact>
//           <PortfoliosPage />
//           </Route>

//           <Route path="/blog" exact>
//           <BlogPages />
//           </Route>

//           <Route path="/contact" exact>
//           <ContactPage />
//           </Route>

       
//         </Switch>
//       </MainContentStyled>
//     </div>
//   );
// }

// const MainContentStyled = styled.main`

// position: relative;
// margin-left: 16.3rem;
// min-height: 100vh;
// .lines{
// position: absolute;
// min-height: 100vh;
// width: 100%;
// display: flex;
// justify-content: space-evenly;
// .line-1, .line-2, .line-3, .line-4{
//   width:1px;
//   min-height: 100vh;
//   background-color: var(--border-color);

// }
// }
// `;
// export default App





import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom"; // ✅ Removed BrowserRouter
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import PortfoliosPage from "./pages/PortfoliosPage";
import BlogPages from "./pages/BlogPages";

function App() {
  return (
    // <Router> {/* Ensure Router wraps everything */}
      <div className="App">
        <Sidebar />
        <MainContentStyled>
          <div className="lines">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
          </div>
          <Routes> {/* Use Routes instead of Switch */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/portfolio" element={<PortfoliosPage />} />
            <Route path="/blog" element={<BlogPages />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </MainContentStyled>
      </div>


  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  .lines {
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .line-1, .line-2, .line-3, .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;

