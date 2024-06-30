import React from 'react';
import Concert from '../images/concert.png';

const ConcertTour = () => {
  return (
    <div className="concert-tour">
      <img src="/public/images/concert.png" alt="Image description" />
      <div className="tour-info">
        <h2>LIM YOUNG WOONG</h2>
        <h1>IM HERO TOUR 2023</h1>
        <table>
          <thead>
            <tr>
              <th>CITY</th>
              <th>VENUE</th>
              <th>DATE</th>
              <th>TICKET OPEN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SEOUL</td>
              <td>KSPO DOME</td>
              <td>2023.10.27 - 10.29<br />2023.11.03 - 11.05</td>
              <td>2023.09.14 (THU) 8PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConcertTour;