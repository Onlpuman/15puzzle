import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Pzl } from './components/Pzl';
import { Progress } from './components/Progress';
import { useAppSelector } from './models/hooks';
const App = () => {
    const { darkTheme } = useAppSelector((state) => state.theme);
    const styleContainer = darkTheme ? 'app app-night-theme' : 'app';
    return (<div className={styleContainer}>
			<header className="header-container">
				<ThemeSwitcher />
			</header>
			<main className="main-container">
				<Pzl />
				<Progress />
			</main>
		</div>);
};
export default App;
