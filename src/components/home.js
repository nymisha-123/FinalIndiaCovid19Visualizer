import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {formatDistance} from 'date-fns';
import {
  formatDate,
  formatDateAbsolute,
  validateCTS,
} from '../utils/common-functions';
/* import * as Icon from 'react-feather';
import {Link} from 'react-router-dom';*/

import Table from './table';
import Level from './level';
import MapExplorer from './mapexplorer';
import TimeSeries from './timeseries';
import Minigraph from './minigraph';
/* import Patients from './patients';*/

function Home(props) {
  const [states, setStates] = useState([]);
  const [stateDistrictWiseData, setStateDistrictWiseData] = useState({});
  /* const [patients, setPatients] = useState([]);*/
  const [fetched, setFetched] = useState(false);
  const [graphOption, setGraphOption] = useState(1);
  const [lastUpdated, setLastUpdated] = useState('');
  const [timeseries, setTimeseries] = useState([]);
  const [timeseriesMode, setTimeseriesMode] = useState(true);
  const [timeseriesLogMode, setTimeseriesLogMode] = useState(false);
  const [regionHighlighted, setRegionHighlighted] = useState(undefined);

  useEffect(() => {
    if (fetched === false) {
      getStates();
    }
  }, [fetched]);

  const getStates = async () => {
    try {
      const [response, stateDistrictWiseResponse] = await Promise.all([
        axios.get('https://api.covid19india.org/data.json'),
        axios.get('https://api.covid19india.org/state_district_wise.json'),
        /* axios.get('https://api.covid19india.org/raw_data.json'),*/
      ]);
      setStates(response.data.statewise);
      setTimeseries(response.data.cases_time_series);
      setLastUpdated(response.data.statewise[0].lastupdatedtime);
      setStateDistrictWiseData(stateDistrictWiseResponse.data);
      /* setPatients(rawDataResponse.data.raw_data.filter((p) => p.detectedstate));*/
      setFetched(true);
    } catch (err) {
      console.log(err);
    }
  };

  const onHighlightState = (state, index) => {
    if (!state && !index) setRegionHighlighted(null);
    else setRegionHighlighted({state, index});
  };
  const onHighlightDistrict = (district, state, index) => {
    if (!state && !index && !district) setRegionHighlighted(null);
    else setRegionHighlighted({district, state, index});
  };

  return (
    <div className="Home">
      <div className="home-left">
        <div className="header fadeInUp" style={{animationDelay: '0.5s'}}>
          <div className="header-mid">
            <div className="titles">
              <h1>India COVID-19 VISUALIZER</h1>
              <h6 style={{fontWeight: 600}}></h6>
            </div>
            <div className="last-update">
              
              
              
            </div>
          </div>
        </div>

        {states.length > 1 && <Level data={states} />}
        <Minigraph timeseries={timeseries} animate={true} />
        <Table
          states={states}
          summary={false}
          stateDistrictWiseData={stateDistrictWiseData}
          onHighlightState={onHighlightState}
          onHighlightDistrict={onHighlightDistrict}
        />
      </div>

      <div className="home-right">
        {fetched && (
          <React.Fragment>
            <MapExplorer
              states={states}
              stateDistrictWiseData={stateDistrictWiseData}
              regionHighlighted={regionHighlighted}
            />

           

            {/* Testing Rebuild*/}
          </React.Fragment>
        )}
      </div>
      <div>
        <br/><br/><br/><br/><br/><br/><br/>
      <div
              className="timeseries-header fadeInUp"
              style={{animationDelay: '1.5s'}}
            >
              <center><p1 ><h1 > <img
          className="fadeInUp logo"
          alt="India COVID-19 Tracker"
          src="/earth-wearing-mask.jpg"
          width="50"
          height="50"
          align="middle"
         
          style={{
            animationDelay: '0.0s',
            width: window.location.pathname === '/clusters' ? '1.5rem' : '',
            height: window.location.pathname === '/clusters' ? '1.5rem' : '',
            transition: 'all 0.3s ease-in-out',
          }}
        />
      Status </h1></p1></center>
              
              
            </div>
            <br/><br/><br/><br/><br/><br/><br/>
            <center>
            <TimeSeries
              timeseries={timeseries}
              type={graphOption}
              mode={timeseriesMode}
              logMode={timeseriesLogMode}
            /></center>
      </div>

      {/* <div className="home-left">
        {patients.length > 1 && (
          <div className="patients-summary">
            <h1>Recent Cases</h1>
            <h6>A summary of the latest reported cases</h6>
            <div className="legend">
              <div className="legend-left">
                <div className="circle is-female"></div>
                <h5 className="is-female">Female</h5>
                <div className="circle is-male"></div>
                <h5 className="is-male">Male</h5>
                <div className="circle"></div>
                <h5 className="">Unknown</h5>
              </div>
            </div>
            <div className="patients-summary-wrapper">
              <Patients
                patients={patients}
                summary={true}
                colorMode={'genders'}
              />
            </div>
            <button className="button">
              <Link to="/database">
                <Icon.Database />
                <span>View the Patients Database</span>
              </Link>
            </button>
          </div>
        )}
      </div>
      <div className="home-right"></div>
    */}
    </div>
  );
}

export default Home;

