import images from '../../assets/images';

interface MyToolTipProps {
  text?: string[];
  align?: 'left' | 'center' | 'right';
}

const MyToolTip: React.FC<MyToolTipProps> = ({ text = [], align = 'right' }) => {
  return (
    <div className="tooltip">
      <img src={images.InfoIcon} alt="Information icon" />
      <p className="tooltiptext" style={{ textAlign: align }}>
        {text.map((line, index) => (
          <span key={index}>
            {line}
            {index < text.length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  );
};

export default MyToolTip;
