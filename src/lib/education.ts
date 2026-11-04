import { educationList } from "./journey";
import { EducationItem } from "@/types";

export interface EducationEntry extends EducationItem {
  id: string;
}

export const educationData: EducationEntry[] = educationList.map((item, idx) => ({
  id: `edu-${idx}`,
  ...item,
}));

export default educationData;

