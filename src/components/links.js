import React from 'react';

function Links(props) {
  return (
    <div>
     
      
    <div className="Links">
      <br/><br/><br/>
    <img
          className="fadeInUp logo"
          alt="India COVID-19 Tracker"
          src="/covid-banner-web.png"
          class="center"
          height="200"
          width="700"
          style={{
            animationDelay: '0.0s',
            width: window.location.pathname === '/clusters' ? '1.5rem' : '',
            height: window.location.pathname === '/clusters' ? '1.5rem' : '',
            transition: 'all 0.3s ease-in-out',
          }}
        />
      <div className="link fadeInUp" style={{animationDelay: '0.2s'}}>
        <h3>HELPLINE NUMBERS [by State]</h3>
        <a
          href="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf
        </a>
      </div>

      <div className="link fadeInUp" style={{animationDelay: '0.3s'}}>
        <h3>Ministry of Health and Family Welfare, Gov. of India</h3>
        <a
          href="https://www.mohfw.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.mohfw.gov.in/
        </a>
      </div>
     
          
      <div className="link fadeInUp" style={{animationDelay: '0.4s'}}>
        
     <h3> WHO : COVID-19 Home Page</h3>
        <a
          href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.who.int/emergencies/diseases/novel-coronavirus-2019
        </a>
      </div>

      <div className="link fadeInUp" style={{animationDelay: '0.5s'}}>
        <h3>CDC</h3>
        <a
          href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.cdc.gov/coronavirus/2019-ncov/faq.html
        </a>
      </div>

      <div className="link fadeInUp" style={{animationDelay: '0.5s'}}>
        <h3>PM Care Funds Account Details</h3>
        <a
          href="https://www.indiatvnews.com/fyi/pm-cares-fund-details-donations-account-number-emergency-covid-19-help-602559"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.indiatvnews.com/fyi/pm-cares-fund-details-donations-account-number-emergency-covid-19-help-602559
        </a>
      </div>
      <img
          className="fadeInUp logo"
          alt="India COVID-19 Tracker"
          src="/DoTheFive.gif"
          class="center"
          height="700"
          width="300"
          style={{
            animationDelay: '0.0s',
            width: window.location.pathname === '/clusters' ? '1.5rem' : '',
            height: window.location.pathname === '/clusters' ? '1.5rem' : '',
            transition: 'all 0.3s ease-in-out',
          }}
        />
      

      
      
    </div>
    </div>  );
}

export default Links;
