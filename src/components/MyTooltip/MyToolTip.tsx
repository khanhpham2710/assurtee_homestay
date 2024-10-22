import images from '../../assets/images';

interface MyToolTipProps {
  text: string[];
}

function MyToolTip({ text }: MyToolTipProps) {
  return (
    <div className="tooltip">
      <img src={images.InfoIcon} alt="Information icon" />
      <div className="tooltiptext">
        {text.map((line, index) => (
          <span key={index}>
            {line}
            {index < text.length - 1 && <br />}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MyToolTip;
