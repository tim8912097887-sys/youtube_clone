import Content from './components/content';
import Header from './components/header/Header';

function App() {
    return (
        <div className="max-h-screen flex flex-col">
            <Header />
            <div className="flex grid-cols-[auto,1fr] grow overflow-auto">
                <div>Sidebar</div>
                <Content />
            </div>
        </div>
    );
}

export default App;
