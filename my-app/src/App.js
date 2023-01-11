import css from './App.module.css';
import Sidebar from './components/Sidebar'
// import NavBarSimple from './components/NavBarSimple'
import NavBarForm from './components/NavBarForm';
import ContentAPI from './components/ContentAPI';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      {/* <NavBarSimple /> */}
      <NavBarForm />
      <ContentAPI />
    </div>
  );
}

export default App;