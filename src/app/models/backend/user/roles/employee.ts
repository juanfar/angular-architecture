export interface Employee {
  specialization: Specialization;
  skills: Skill[];
  qualification: Qualification;
  expectedSalary: number;
  experiencies: Experiencie[];
}

interface Specialization {
  id: string;
  name: string;
}

interface Skill {
  id: string;
  name: string;
}

interface Qualification {
  id: string;
  name: string;
}

interface Experiencie {
  companyName: string;
  period: Period;
}

interface Period {
  from: string;
  to: string;
}
