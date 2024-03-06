export default function createIteratorObject(report) {
  const lst = [];
  const keys = Object.keys(report.allEmployees);
  for (const key of keys) {
    lst.push(...report.allEmployees[key]);
  }
  return lst;
}