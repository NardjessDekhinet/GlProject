
import Header from "../../components/common/Header";
import DailySalesTrend from "../../components/offers/DailySalesTrend";
const SalesPage
= () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
    <Header title='Products' />
    
    {/* USER CHARTS */}
    <div className='grid grid-cols-0 lg:grid-cols-1 gap-6 mt-8'>
					<DailySalesTrend />
					
				</div>
		</div>

  )
}

export default SalesPage
