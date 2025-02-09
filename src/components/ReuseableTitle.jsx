// eslint-disable-next-line react/prop-types
const ReuseableTitle = ({title, subtitle}) => {
    return (
        <div className="text-center">
            <h2 className="text-3xl font-semibold mb-2">{title}</h2>
            <p>{subtitle}</p>
        </div>
    );
};

export default ReuseableTitle;