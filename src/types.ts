export interface CarSpecs {
  make: string;
  model: string;
  transmission: string;
  vin: string;
  bodyColor: string;
  engineSize: string;
  year: number;
  type: string;
  interiorColor: string;
}

export interface Car {
  id: string;
  title: string;
  price: number;
  mileage: number;
  image: string;
  gallery: string[];
  specs: CarSpecs;
  description: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  image: string;
}

export interface NavItem {
  label: string;
  to: string;
}
