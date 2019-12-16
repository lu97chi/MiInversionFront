import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

type Props = {
    data: any
}

const Charts = ({data}:Props) => {
  // const ref:any = useRef(null);
  // const [ actualSize, setActualSize ] = useState(0);
  // useEffect(() => {
  //     setActualSize(ref?.current?.offsetWidth)
  // }, [ref]);
  // console.log(actualSize);
  return (
    <div style={{width: '100%', overflowX: 'auto'}}>
      <LineChart
          width={1200}
          height={500}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="actual" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="acc" stroke="#82ca9d" />
      </LineChart>
    </div>
  )
};

export default Charts;