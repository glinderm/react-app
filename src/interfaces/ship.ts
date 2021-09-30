export interface Ship {
    id: string
    kind: string
    position: number[][] | null[][]
    orient: string
    health: number
    damage: number
    sunk: boolean
    playerShip: boolean
}