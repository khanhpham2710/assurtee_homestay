import React from 'react';
import { useState } from 'react';

interface MultiButtonProps {
    title: string;
    items: string[];
}

export default function Question({title, items} : MultiButtonProps) {

    const MultiButtonComponent: React.FC<MultiButtonProps> = ({title, items }) => {

        const [selectedItem, setSelectedItem] = useState<string>("");

        const handleClick = (item: string) => {
            setSelectedItem(item);
        };
    
    return (
        <div>
            <h2>{title}</h2>
            <div>
               {items.map((item,index) => (
                <button key={index } onClick={() => handleClick(item)} className="buttonQuestion">
                    {item}
                </button>
               ))}
            </div>
        </div>
    );
    }

    return (
        <div>
          <MultiButtonComponent title={title} items={items} />
        </div>
      );
}
