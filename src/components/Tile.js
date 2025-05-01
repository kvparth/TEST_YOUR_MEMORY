export function canFlipTile(tile) {
    return tile && !tile.flipped && !tile.matched;
}

export function flipTile(tile) {
    if (!tile) throw new Error('Invalid tile reference');
    tile.flipped = true;
    return tile;
}