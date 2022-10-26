import { GROOVER } from "../../assets/static_data/groover";
import { VOLUME } from "../../assets/static_data/volume";

export default function handler(_, res) {
  res.status(200).json([ GROOVER, VOLUME ]);
}
