export function generateBoard(level) {
    if (!Number.isInteger(level) || level <= 0) {
      throw new Error('Tile count must be a whole number');
    }
    const totalTiles = level * 4;
    // Return dummy tile array for now
    return Array(totalTiles).fill({ color: null, flipped: false, matched: false });
  }