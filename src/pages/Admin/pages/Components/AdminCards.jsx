import {ArrowUp} from 'lucide-react';

const AdminCards = () => {
  const cardsData = [
    {
      title: 'Total Articles',
      value: '1,234',
      currVal: 1234,
      preVal: 1170,
    },
    {
      title: 'New Comments',
      value: '56',
      currVal: 56,
      preVal: 50,
    },
    {
      title: 'Total Users',
      value: '8,765',
      currVal: 8765,
      preVal: 8500,
    },
    {
      title: 'Growth Rate',
      value: '+12.5%',
      currVal: 12.5,
      preVal: 10.0,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cardsData.map ((card, index) => (
          <Card
            key={index}
            title={card.title}
            value={card.value}
            currVal={card.currVal}
            preVal={card.preVal}
          />
        ))}
      </div>
    </div>
  );
};
const Card = ({title, value, currVal, preVal}) => {
  let change = Math.abs ((currVal - preVal) / preVal * 100).toFixed (2);
  let isPositive = currVal - preVal >= 0;
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md shadow-gray-50/20">
      <div className="text-lg font-semibold text-gray-400">{title}</div>
      <div className="text-4xl mt-2 font-bold text-white">{value}</div>
      <div
        className={`flex items-center gap-1 mt-2 ${isPositive ? 'text-green-400' : 'text-red-400'}`}
      >
        {isPositive
          ? <ArrowUp size={20} />
          : <ArrowUp size={20} className="transform rotate-180" />}
        {change}%
      </div>
    </div>
  );
};

export default AdminCards;
