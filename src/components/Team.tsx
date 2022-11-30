import { getName } from "country-list";
import ReactCountryFlag from "react-country-flag";

interface Props {
  code: string;
  position: "left" | "right";
  onChangeText: (value: string) => void;
}

export function Team({ code, position, onChangeText }: Props) {
  return (
    <div className="flex items-center h-14 mb-3">
      {position === "left" && (
        <div className="flex flex-row items-center justify-center gap-3">
          {getName(code)}
          <ReactCountryFlag
            className="emojiFlag"
            countryCode={code}
            style={{ marginRight: 12, fontSize: "2em", lineHeight: "2em" }}
          />
        </div>
      )}

      <div className="w-15 h-full text-center text-xs">
        <input
          className="w-12 bg-gray-900 mx-6 h-14 px-4 border-gray-600 text-md text-white placeholder-gray-300 rounded-2 focus:bg-gray-900 focus:border-gray-600"
          onChange={(e) => onChangeText(e.target.value)}
        />
      </div>

      {position === "right" && (
        <div className="flex flex-row items-center justify-center gap-3">
          <ReactCountryFlag
            countryCode={code}
            style={{ marginRight: 12, fontSize: "2em", lineHeight: "2em" }}
          />
          {getName(code)}
        </div>
      )}
    </div>
  );
}
