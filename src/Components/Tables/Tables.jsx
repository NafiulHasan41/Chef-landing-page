import PropTypes from 'prop-types';

const Tables = ( {cooks , handleCooking , cooking }) => {

    let timeAll= 0  ;
    let calAll = 0;
    cooking.map( it => {
        const temp1 = parseInt(it.preparing_time.match(/\d+/g));
        timeAll+=temp1;
        const temp2 = parseInt(it.calories.match(/\d+/g));
        calAll+=temp2;
    })


    return (
        <div className='border-gray-500 rounded-xl shadow-xl border w-full p-0'>

        <div className='text-center border-b-2 border-gray-500 pb-4 m-3'>
          <h1 className='text-2xl font-semibold text-black'>Want to cook: {cooks.length}</h1>
        </div>
      
        <div className="text-gray-400 overflow-x-auto">
          <table className="table w-full">
           
            <thead>
              <tr className='text-[16px] font-medium text-black'>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody className='text-sm'>
      
              {cooks.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item.recipe_name}</td>
                  <td>{item.preparing_time}</td>
                  <td>{item.calories}</td>
                  <td><button onClick={() => handleCooking(item)} className="btn btn-primary mx-2 my-2 rounded-full bg-green-400 text-black border-none text-[16px] font-normal">Preparing</button></td>
                </tr>
              ))}
      
            </tbody>
          </table>
        </div>
      
        <div className='text-center border-b-2 border-gray-500 pb-4 m-3 mb-5'>
          <h1 className='text-2xl font-semibold text-black'>Currently cooking: {cooking.length}</h1>
        </div>
      
        <div className="text-gray-400 overflow-x-auto">
      
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className='text-black text-[16px] font-medium'>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody className='text-sm'>
      
              {cooking.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item.recipe_name}</td>
                  <td>{item.preparing_time}</td>
                  <td>{item.calories}</td>
                </tr>
              ))}
      
              <tr className='text-sm text-black'>
                <th></th>
                <td></td>
                <td>Total Time = {timeAll}</td>
                <td>Total Calories = {calAll}</td>
              </tr>
      
            </tbody>
          </table>
      
        </div>
      </div>

    );
};

Tables.propTypes = {
    
    cooks: PropTypes.array,
    handleCooking: PropTypes.func,
    cooking: PropTypes.array
}

export default Tables;




