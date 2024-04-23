import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '@/Page/Login/login';
import { DefaultAccess } from '@/layout/defaultAccess/defaultAccess';
import { SignUp } from '@/Page/SingnUp/signUp';
import { Home } from '@/Page/Home/home';


export function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route  element={<DefaultAccess/>}>

          <Route path="/" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
        </Route>

        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
