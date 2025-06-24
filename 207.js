function canFinish(numCourses, prerequisites) {

    const adjList = new Map()

    for (let i = 0; i < numCourses; i++) {
        adjList.set(i, [])
    }

    for (const [course, prereq] of prerequisites) {
        adjList.get(course).push(prereq)
    }

    const visited = new Set()

    function dfs(course) {

        if (visited.has(course)) {
            return false
        }

        if (adjList.get(course).length === 0) {
            return true
        }

        visited.add(course)

        for (let prereq of adjList.get(course)) {
            if (!dfs(prereq)) return false
        }
        visited.delete(course)
        adjList.set(course, [])

        return true
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false
    }
    return true

}

/*
Comments:
- figured out that it's a direct graph problem, but struggled a little to figure out how to do the traversal without actually constructing nodes
- The trick to set a course to have empty prereqs after you know it doesnt have a cycle is a smart trick I didn't know at all

*/