import React from 'react';

type ColorOption = 'yellow' | 'white' | 'rose';

interface Props {
  selectedColor: ColorOption;
  onChange: (color: ColorOption) => void;
}

const colorHex: Record<ColorOption, string> = {
  yellow: '#E6CA97',
  white: '#D9D9D9',
  rose: '#E1A4A9',
};

const colorLabels: Record<ColorOption, string> = {
  yellow: 'Yellow Gold',
  white: 'White Gold',
  rose: 'Rose Gold',
};

const ColorPicker: React.FC<Props> = ({ selectedColor, onChange }) => {
  return (
    <div className="flex flex-col items-start mb-3 mt-1">
      <div className="flex gap-3">
        {(Object.keys(colorHex) as ColorOption[]).map((color) => (
          <button
            key={color}
            className={`w-[18px] h-[18px] sm:w-[16px] sm:h-[16px] rounded-full border-2 transition-colors duration-200 ${
              selectedColor === color ? 'border-black' : 'border-transparent'
            }`}
            style={{ backgroundColor: colorHex[color] }}
            onClick={() => onChange(color)}
            aria-label={colorLabels[color]}
          />
        ))}
      </div>
      <div className="productColor text-gray-700 mt-2">{colorLabels[selectedColor]}</div>
    </div>
  );
};

export default ColorPicker;
