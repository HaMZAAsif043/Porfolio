import { useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function AutoCamera({ modelRef }) {
    const { camera, gl } = useThree()
    const hasSet = useRef(false)

    useEffect(() => {
        if (!modelRef.current || hasSet.current) return

        const box = new THREE.Box3().setFromObject(modelRef.current)
        const center = new THREE.Vector3()
        const size = new THREE.Vector3()

        box.getCenter(center)
        box.getSize(size)

        const radius = size.length() / 2
        const fov = camera.fov * (Math.PI / 180)
        const distance = radius / Math.tan(fov / 2)

        // Set camera position
        camera.position.set(center.x, center.y, center.z + distance * 1.5)
        camera.lookAt(center)

        // Optional: Update OrbitControls target
        gl.controls?.target.copy(center)

        hasSet.current = true
    }, [modelRef, camera, gl])

    return null
}

export default AutoCamera;