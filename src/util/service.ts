import { Item } from "../entity/Item";

export function getItems(): Item[] {
    return [
        new Item(1, "ceshi", new Date(), new Date(), 0, new Date()),
        new Item(2, "ceshi", new Date(), new Date(), 0, new Date()),
        new Item(3, "ceshi", new Date(), new Date(), 0, new Date()),
        new Item(4, "ceshi", new Date(), new Date(), 0, new Date()),
        new Item(5, "ceshi", new Date(), new Date(), 0, new Date()),
    ]
}