import './Analytics.css'
import {XAxis, CartesianGrid, BarChart, YAxis, Tooltip, Legend, Bar, LineChart, Line, PieChart, Pie,} from 'recharts'

const Analytics = ({chart_i, chart_ii, chart_iii, title, value, illustration}) => {
    const data = [
        {
          "name": "Sep",
          "Followers": 4000,
          "Earnings": 2400
        },
        {
          "name": "Oct",
          "Followers": 3000,
          "Earnings": 1398
        },
        {
          "name": "Nov",
          "Followers": 2000,
          "Earnings": 9800
        },
        {
          "name": "Dec",
          "Followers": 2780,
          "Earnings": 3908
        }
      ]

      const data02 = [
        {
          "uv": 4000,
          "pv": 2400,
        },
        {
          "uv": 3000,
          "pv": 1398,
        },
        {
          "uv": 2000,
          "pv": 4000,
        },
        {
          "uv": 2780,
          "pv": 3908,
        }
      ]


      const data031 = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 300
        },
        {
          "name": "Group D",
          "value": 200
        }
      ];

      const data032 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        }
      ];

    return (
        <div className='analytics'>
            {chart_i
                && 
               ( <>
                    <header>
                        <span className='followers'>Subcribers:</span>
                        <span className='earnings'>Earnigns:</span>
                    </header>

                    <BarChart width={250} height={210} data={data}>
                        <CartesianGrid strokeDasharray="100 10" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Followers" fill="#00464e" />
                        <Bar dataKey="Earnings" fill="#810551" />
                    </BarChart>
                </>)
            }
            {
                chart_ii
                &&
                (
                    <LineChart width={260} height={260} data={data02}
                        margin={{ top: 10, right: 10 }}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#810551" />
                        <Line type="monotone" dataKey="uv" stroke="#00464e" />
                    </LineChart>
                )
            }

            {
                chart_iii && 
                (
                    <PieChart width={500} height={450}>
                        <Pie data={data031} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#810551" />
                        <Pie data={data032} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#00464e" label />
                    </PieChart>
                )
            }

            {
                title && 
                <>
                    <h1 className='title'>{title}</h1>
                    <h2 className='value'>{value}</h2>
                    <h2 className='extra-text'>
                        People are loving your content
                        <br />
                        🙌🎉🎊
                    </h2>

                    <img src={illustration} alt="illus" className='illustration' />
                </>
            }
        </div>
    )
}

export default Analytics