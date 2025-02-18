// eslint-disable-next-line react/prop-types
const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center py-8">
      <h2 className="text-2xl lg:text-4xl pb-2 font-semibold">{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default Heading;
