//42. Trapping Rain Water
/**
Kind of overthinked the solution for this one initially. 
- Solutions are typically simpler than expected, need to start thinking with simpler solutions first
- Revisit in future
 */

function trap(height) {

    const tallestLeft = Array(height.length).fill(0)
    const tallestRight = Array(height.length).fill(0)

    let maxLeft = 0
    let maxRight = 0
    let output = 0

    for (let i = 0; i < height.length; i++) {
        tallestLeft[i] = maxLeft
        maxLeft = Math.max(height[i], maxLeft)
    }

    for (let i = height.length - 1; i >= 0; i--) {
        tallestRight[i] = maxRight
        maxRight = Math.max(height[i], maxRight)
    }

    for (let i = 0; i < height.length; i++) {
        let minBoundary = Math.min(tallestLeft[i], tallestRight[i])
        if (minBoundary > height[i]) {
            output += minBoundary - height[i]
        }
    }

    return output
}

