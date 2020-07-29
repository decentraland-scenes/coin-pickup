import utils from "../node_modules/decentraland-ecs-utils/index"
import { Coin } from "./coin"

// Adding base scene models
const base = new Entity()
base.addComponent(new GLTFShape("models/baseLight.glb"))
engine.addEntity(base)

const platform = new Entity()
platform.addComponent(new GLTFShape("models/platform.glb"))
platform.addComponent(new Transform())
engine.addEntity(platform)

const coinShape = new GLTFShape("models/coin.glb") // Includes the spinning animation

// Contains the positions for each coin
const coinPositions = [
  new Vector3(2.2, 1.5, 2.2),
  new Vector3(5.2, 1.5, 2.2),
  new Vector3(8, 1.5, 2.2),
  new Vector3(10.8, 1.5, 2.2),
  new Vector3(13.8, 1.5, 2.2),
  new Vector3(13.8, 2.18, 5),
  new Vector3(13.8, 2.8, 8),
  new Vector3(10.8, 2.8, 8),
  new Vector3(8, 2.8, 8),
  new Vector3(5.2, 2.8, 8),
  new Vector3(2.2, 2.8, 8),
  new Vector3(2.2, 3.4, 10.9),
  new Vector3(2.2, 3.9, 13.8),
  new Vector3(5.2, 3.9, 13.8),
  new Vector3(8, 3.9, 13.8),
  new Vector3(10.8, 3.9, 13.8),
  new Vector3(13.8, 3.9, 13.8),
]

let triggerBoxShape = new utils.TriggerBoxShape(new Vector3(1.5, 3, 1.5), new Vector3(0, 1, 0)) // Trigger shape for coin

// Setup the coins
for (let coinPosition of coinPositions) {
  const coin = new Coin(coinShape, new Transform({ position: coinPosition }), triggerBoxShape)
}
