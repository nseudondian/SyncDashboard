import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries  } from '@syncfusion/ej2-react-charts'


import { Header } from '../../components'
import { areaCustomSeries, barPrimaryYAxis, barPrimaryXAxis, barCustomSeries  } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'


const Area = () => {
  const { currentMode } = useStateContext()
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:text-white dark:bg-black rounded-3xl'>
    <Header category="Area" title="Inflation Rate in Percentage" />

      <ChartComponent
    id='charts'
    primaryXAxis={barPrimaryXAxis}
    primaryYAxis={barPrimaryYAxis}
    chartArea={{ border: { width: 0 }}}
    tooltip={{ enable: true }}
    background={currentMode === 'Dark' ?  '#33373E' : '#fff' }
   
    >
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category ]} />
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} /> )}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default Area