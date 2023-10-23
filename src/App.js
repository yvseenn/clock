
import './App.scss';
import Countdown from './components/Countdown/Countdown';
import DigitalClock from './components/DigitalClock/DigitalClock';
import Stopwatch from './components/Stopwatch/Stopwatch';

function App() {
  return (
    <div className="divPadre">
      <main className="divPadre__contenedor">
        <DigitalClock></DigitalClock>
        <Countdown></Countdown>
        <Stopwatch></Stopwatch>
      </main>
    </div>
  );
}

export default App;
