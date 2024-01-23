const formatCompactNumber = (number: number) => {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });
  return formatter.format(number);
};
const ViewsCounter = ({ views }: { views?: number }) => {
  return (
    <span className='text-neutral-400'>
      {views ? formatCompactNumber(views) : 0} views
    </span>
  );
};
export default ViewsCounter;
