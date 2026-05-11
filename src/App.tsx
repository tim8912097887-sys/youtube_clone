import Content from './components/content';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
    return (
        <div className="max-h-screen flex flex-col">
            <Header />
            <div className="flex grow overflow-auto">
                <Sidebar />
                <Content />
            </div>
        </div>
    );
}

export default App;
