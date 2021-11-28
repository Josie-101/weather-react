
import './App.css';

        
        export default function Weather() {
  return (
    <div className="container">
      <div id="app" className="app-container">
        <div>
          <form className="search-form" id="search-form">
            <input
              type="search-field"
              id="input-city"
              placeholder="City Name"
              font-size="20"
            />
          </form>
        </div>
        <div>
          <button id="submit-button">Search</button>
        </div>
        <div>
          <h1 id="city">Melbourne</h1>
          <div className="local-temperature" id="currentTemp">
            🌞 13.5°C
          </div>
        </div>
      <div>
        <div className="forecast">
          {" "}
          Five Day Forecast</div>
          <a
            href="https://getbootstrap.com/docs/4.3/layout/grid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <div className="row" flex>
            <div className="col-sm-2">
              <div className="day">Mon</div>
              <div className="icon">⛅</div>
              <div className="temperature"> 14°</div>
            </div>

            <div className="col-sm-2">
              <div className="day" padding="10px">
                Tue
              </div>
              <div className="icon">☔</div>
              <div className="temperature"> 15°</div>
            </div>

            <div className="col-sm-2">
              <div className="day">Wed</div>
              <div className="icon">🌞</div>
              <div className="temperature"> 15°</div>
            </div>

            <div className="col-sm-2">
              <div class="day">Thu</div>
              <div class="icon">⛅</div>
              <div class="temperature"> 17°</div>
            </div>

            <div className="col-sm-2">
              <div className="day">Fri</div>
              <div className="icon">🌈</div>
              <div className="temperature"> 14°</div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
       

