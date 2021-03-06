export default `
type Engine {
  id: ID
  simulatorId: ID
  type: String
  power: Power
  name: String
  speeds: [Speed]
  speed: Int
  heat: Float
  damage: Float
  on: Boolean
  #coolant: Coolant
}
type Speed {
  text: String
  number: Float
}
input SpeedInput {
  text: String
  number: Float
}
`;
