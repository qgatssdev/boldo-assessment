import Home from 'pages/Home';
import About from 'pages/About';
import Blog from 'pages/Blog';
import { Routes, Route } from 'react-router-dom';
import scroll from 'animations/scroll';
import ScrollToTop from 'helpers/scroll-to-top';
import { useEffect } from 'react';
import { split } from 'animations/text';
scroll();

function App() {
  useEffect(() => {
    split();
});

  return (
    <ScrollToTop>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
