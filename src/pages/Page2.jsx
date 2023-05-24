import React, {useState, useEffect } from 'react';
import data1 from '../data/db_JSON/sample_db_0km.json';
import data2 from '../data/db_JSON/sample_db_5km.json';
import data3 from '../data/db_JSON/sample_db_10km.json';
import data4 from '../data/db_JSON/sample_db_15km.json';
import data5 from '../data/db_JSON/sample_db_20km.json';
import data6 from '../data/db_JSON/sample_db_25km.json';
import { FaBicycle, FaBus, FaCarCrash, FaTaxi, FaTrain } from "react-icons/fa";

const Page2 = ({allchosenOption}) => {
  document.title = "Mode choice";
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const option2 = ["< 5 km","5 - 10 km","10- 15 km","15- 20 km","20- 25 km","> 25 km"];

    if (allchosenOption[1]===option2[0]) {
      setData(()=>data1['Data'][0])
    } 
    else if(allchosenOption[1]===option2[1]){
      setData(()=>data2['Data'][0])
    }
    else if(allchosenOption[1]===option2[2]){
      setData(()=>data3['Data'][0])
    }
    else if(allchosenOption[1]===option2[3]){
      setData(()=>data4['Data'][0])
    }
    else if(allchosenOption[1]===option2[4]){
      setData(()=>data5['Data'][0])
    }
    else if(allchosenOption[1]===option2[5]){
      setData(()=>data6['Data'][0])
    }
    else{
      setData(()=>[])
    }
    console.log(data)
  }, [allchosenOption, data]);

  

  return (
    <div className='w-full'>
      <ul>
        <li>1. {allchosenOption[0]}</li>
        <li>2. {allchosenOption[1]}</li>
      </ul>

      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{data.mode_1}<FaBus style={{color: "blue" }}/></th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{data.mode_2}<FaBus style={{color: "blue" }}/></th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{data.mode_3}<FaBus style={{color: "blue" }}/></th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{data.mode_4}<FaTrain style={{color: "blue" }}/></th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{data.mode_5}<FaTaxi style={{color: "blue" }}/></th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{data.mode_6}<FaBicycle style={{color: "blue" }}/></th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{data.mode_7}<FaTaxi style={{color: "blue" }}/></th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{data.mode_8}<FaCarCrash style={{color: "blue" }}/></th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{data.mode_9}<FaBicycle style={{color: "blue" }}/></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="w-full py-4 text-center whitespace-nowrap" colspan="9">Total travel time spent while inside the vehicle(s)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_1.ivtt"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_2.ivtt"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_3.ivtt"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_4.ivtt"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_5.ivtt"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_6.ivtt"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_7.ivtt"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_8.ivtt"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_9.ivtt"]}</td>
          </tr>
          <tr>
            <td className="w-full py-4 text-center whitespace-nowrap" colspan="9">Number of transfers</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_1.trans"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_2.trans"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_3.trans"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_4.trans"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_5.trans"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_6.trans"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_7.trans"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_8.trans"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_9.trans"]}</td>
          </tr>
          <tr>
            <td className="w-full py-4 text-center whitespace-nowrap" colspan="9">Total travel time spent outside vehicle(s) = walktime + waittime</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_1.waittime"]+data["mode_1.walktime"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_2.waittime"]+data["mode_2.walktime"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_3.waittime"]+data["mode_3.walktime"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_4.waittime"]+data["mode_4.walktime"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_5.waittime"]+data["mode_5.walktime"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_6.waittime"]+data["mode_6.walktime"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_7.waittime"]+data["mode_7.walktime"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_8.waittime"]+data["mode_8.walktime"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_9.waittime"]+data["mode_9.walktime"]}</td>
          </tr>
          <tr>
            <td className="w-full py-4 text-center whitespace-nowrap" colspan="9">Possible delay due to traffic congestion or other uncertainties</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_1.tvariab"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_2.tvariab"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_3.tvariab"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_4.tvariab"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_5.tvariab"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_6.tvariab"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_7.tvariab"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_8.tvariab"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_9.tvariab"]}</td>
          </tr>
          <tr>
            <td className="w-full py-4 text-center whitespace-nowrap" colspan="9">Total one-way cost of travel</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_1.tcost"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_2.tcost"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_3.tcost"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_4.tcost"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_5.tcost"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_6.tcost"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_7.tcost"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_8.tcost"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_9.tcost"]}</td>
          </tr>
          <tr>
            <td className="w-full py-4 text-center whitespace-nowrap" colspan="9">Extent of crowding in the vehicle</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_1.crowd"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_2.crowd"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_3.crowd"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_4.crowd"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_5.crowd"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_6.crowd"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_7.crowd"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_8.crowd"]}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data["mode_9.crowd"]}</td>
          </tr>
          <tr>
            <td className="w-full py-4 text-center whitespace-nowrap" colspan="9">Service Type</td>
          </tr>
          <tr>
          <td className="px-6 py-4 whitespace-nowrap">{data["mode_1.serv"]}</td>
          <td className="px-6 py-4 whitespace-nowrap">{data["mode_2.serv"]}</td>
          <td className="px-6 py-4 whitespace-nowrap">{data["mode_3.serv"]}</td>
          <td className="px-6 py-4 whitespace-nowrap">{data["mode_4.serv"]}</td>
          <td className="px-6 py-4 whitespace-nowrap">{data["mode_4.serv"]}</td>
          <td className="px-6 py-4 whitespace-nowrap">{data["mode_6.serv"]}</td>
          <td className="px-6 py-4 whitespace-nowrap">{data["mode_7.serv"]}</td>
          <td className="px-6 py-4 whitespace-nowrap">{data["mode_8.serv"]}</td>
          <td className="px-6 py-4 whitespace-nowrap">{data["mode_9.serv"]}</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default Page2