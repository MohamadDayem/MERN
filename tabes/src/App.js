import Tab from "./components/Tabs";

const App = () => {
    const tabItems = [
        { label: 'Tab 1', content: 'enzo' },
        { label: 'Tab 2', content: 'oday' },
        { label: 'Tab 3', content: 'hakeem' },
    ];
    
    return (
        <>
            <Tab items={tabItems}/>
        </>
    );
};

export default App;