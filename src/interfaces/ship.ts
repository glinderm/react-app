

export interface Ship {
    kind: string
    position: number[][] | null[][]
    orient: string
    size: number
    hits: number
    sunk: boolean
    playerShip: boolean
}

