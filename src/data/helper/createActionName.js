// Create a meathod t ceate redux action name.
export default function createActionName(
  reducerName: string,
  actionName: string
) {
  return `${reducerName}/${actionName}`;
}
