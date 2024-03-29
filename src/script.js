import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import GUI from 'lil-gui'
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'


/**
 * Base
 */

// Debug
const gui = new GUI({
    width: 300,
    title: 'Nice debug UI',
    closeFolders: false
})
// window.addEventListener('keydown', (event) =>
// {
//     if(event.key == 'h')
//         gui.show(gui._hidden)
// })
const debugObject = {}

// Canvas
const canvas = document.querySelector('canvas.webgl')

/**
 * Sizes
 */
const sizes = {
    width: canvas.offsetWidth,
    height: canvas.offsetHeight
}

let speed = 20
const radio = 2.5

// Scene
const scene = new THREE.Scene()

// mouse
const mouse = new THREE.Vector2()
const cursor = new THREE.Vector2()
let isPlay = true
window.addEventListener('mousemove', (event) =>
{
    mouse.x = event.clientX / sizes.width * 2 - 1
    mouse.y = - (event.clientY / sizes.height) * 2 + 1
})

canvas.addEventListener('click', (event) => 
{
    // isPlay = isPlay || false
    // alert(isPlay)
})

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const particlesTexture = textureLoader.load('textures/particles/point.png')


/**
 * Fonts
 */
const fontLoader = new FontLoader()


const loader = new SVGLoader();
const logo = new THREE.Group();
const group = new THREE.Group();
const group2 = new THREE.Group();
loader.load(
	// resource URL
	'img/new-logo.svg',
    // 'tls.svg',
	// called when the resource is loaded
	function ( data ) {

		const paths = data.paths;
		

		for ( let i = 0; i < paths.length; i ++ ) {

			const path = paths[ i ];

			const material = new THREE.MeshBasicMaterial( {
				color: path.color,
				side: THREE.DoubleSide,
				depthWrite: false
			} );
            material.transparent = true
            material.alphaTest = false

			const shapes = SVGLoader.createShapes( path );

			for ( let j = 0; j < shapes.length; j ++ ) {

				const shape = shapes[ j ];
				const geometry = new THREE.ShapeGeometry( shape );
				const mesh = new THREE.Mesh( geometry, material );
                mesh.rotation.x = Math.PI
                // mesh.position.y = 1
				group.add( mesh );

			}

		}
        group.rotation.x = 0
        group.scale.set(0.015,0.02)
        // group.scale.set(0.0023,0.003)
        group.position.x = - 0.43
        group.position.y = 1.5


		logo.add( group );

	},
	// called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

loader.load(
	// resource URL
	// 'new-logo.svg',
    'img/tls.svg',
	// called when the resource is loaded
	function ( data ) {

		const paths = data.paths;
		

		for ( let i = 0; i < paths.length; i ++ ) {

			const path = paths[ i ];

			const material = new THREE.MeshBasicMaterial( {
				color: path.color,
				side: THREE.DoubleSide,
				depthWrite: false
			} );
            material.transparent = true
            material.alphaTest = false

			const shapes = SVGLoader.createShapes( path );

			for ( let j = 0; j < shapes.length; j ++ ) {

				const shape = shapes[ j ];
				const geometry = new THREE.ShapeGeometry( shape );
				const mesh = new THREE.Mesh( geometry, material );
                mesh.rotation.x = Math.PI
				group2.add( mesh );

			}

		}
        group2.rotation.x = 0
        // group.scale.set(0.015,0.02)
        group2.scale.set(0.0023,0.003)
        group2.position.x = - 0.86
        group2.position.y = 0.9


		logo.add( group2 );

	},
	// called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

scene.add(logo)

/**
 * Objects
 */
debugObject.color = '#ffffff'
debugObject.rea = 4.75

// Atom
const atom = new THREE.Group()
const section1 = new THREE.Group()
const section2 = new THREE.Group()
const section3 = new THREE.Group()
// const section4 = new THREE.Group()
// Geometry
const circle = new THREE.TorusGeometry(radio,0.004,162,162)
const circle2 = new THREE.TorusGeometry(radio,0.008,162,162)
const sphere = new THREE.SphereGeometry(0.03, 16, 16)

// Materials
const material = new THREE.MeshBasicMaterial({ color: debugObject.color})

const ring1 = new THREE.Mesh(circle2, material)
const ring2 = new THREE.Mesh(circle, material)
const ring3 = new THREE.Mesh(circle2, material)
// const ring4 = ring1.clone()
const elettron1 = new THREE.Mesh(sphere, material)
const nucleo1 = new THREE.Group()
const elettron2 = new THREE.Mesh(sphere, material)
const nucleo2 = new THREE.Group()
const elettron3 = new THREE.Mesh(sphere, material)
const nucleo3 = new THREE.Group()
// const elettron4 = elettron1.clone()
// elettron1.position.z = - 0.02
// elettron2.position.z = - 0.02
// elettron3.position.z = - 0.02

// elettron4.position.x = 1
nucleo1.add(elettron1)
nucleo2.add(elettron2)
nucleo3.add(elettron3)

section1.add(nucleo1)
section2.add(nucleo2)
section3.add(nucleo3)
section1.add(ring1)
section2.add(ring2)
section3.add(ring3)

/**
 * Particles
 */
const particlesGeometry  = new THREE.BufferGeometry()
const count = 1

const positions = new Float32Array(count * 3)

positions[0] = 0
positions[1] = 0
positions[2] = 0

particlesGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(positions, 3)
)

const particlesMaterial = new THREE.PointsMaterial()
particlesMaterial.size = 24
particlesMaterial.sizeAttenuation = true
particlesMaterial.color = new THREE.Color('#ffffff')
particlesMaterial.transparent = true
particlesMaterial.alphaMap = particlesTexture

const point1 = new THREE.Points(particlesGeometry, particlesMaterial)
const point2 = new THREE.Points(particlesGeometry, particlesMaterial)
const point3 = new THREE.Points(particlesGeometry, particlesMaterial)
const point4 = new THREE.Points(particlesGeometry, particlesMaterial)
const point5 = new THREE.Points(particlesGeometry, particlesMaterial)
const point6 = new THREE.Points(particlesGeometry, particlesMaterial)
const point7 = new THREE.Points(particlesGeometry, particlesMaterial)
const point8 = new THREE.Points(particlesGeometry, particlesMaterial)
const point9 = new THREE.Points(particlesGeometry, particlesMaterial)

section1.add(point1)
section2.add(point2)
section3.add(point3)

section1.add(point4)
section2.add(point5)
section3.add(point6)

// section1.add(point7)
// section2.add(point8)
// section3.add(point9)




/**
 * Text detox
 */
const detox = new THREE.Group()
fontLoader.load(
    'fonts/helvetiker_regular.typeface.json', 
    (font) => 
    {
        const textGeometry = new TextGeometry(
        // const textGeometry = new THREE.TextBufferGeometry(
            'DE-TOX',
            {
                font: font,
                size: 0.1,
                height: 0.01,
                curveSegments: 12,
                bevelEnabled: false,
                bevelThickness: 0.01,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }
        )
        const textMaterial = new THREE.MeshBasicMaterial()
        const text = new THREE.Mesh(textGeometry, textMaterial)
        detox.add(text)
        text.position.y = - 0.05
        text.position.x = - 0.25
        // text.position.z = 0.1
        // text.rotation.x = Math.PI * 0.01
        // text.rotation.z =  Math.PI * 0.155
    }
)

const circlegeometry = new THREE.PlaneGeometry( 0.6, 0.15 ); 
const circlematerial = new THREE.MeshBasicMaterial( { color: '#000' } ); 
const circleDetox = new THREE.Mesh( circlegeometry, circlematerial ); 

const detoxAngle = 580
detox.position.z = 0.009
detox.position.x = - Math.cos((detoxAngle/200) * 4) * radio
detox.position.y = - Math.sin((detoxAngle/200) * 4) * radio
detox.rotation.z = detoxAngle * 0.02 + Math.PI * 0.5

detox.add( circleDetox )
section2.add( detox )

const point2Angle = 30
point2.position.x = - Math.cos((point2Angle/200) * 4) * radio
point2.position.y = - Math.sin((point2Angle/200) * 4) * radio
const point5Angle = 188
point5.position.x = - Math.cos((point5Angle/200) * 4) * radio
point5.position.y = - Math.sin((point5Angle/200) * 4) * radio


/**
 * Text ao-x
 */
const aox = new THREE.Group()
fontLoader.load(
    'fonts/helvetiker_regular.typeface.json', 
    (font) => 
    {
        const textGeometry = new TextGeometry(
            'A-OX',
            {
                font: font,
                size: 0.1,
                height: 0.01,
                curveSegments: 12,
                bevelEnabled: false,
                bevelThickness: 0.01,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }
        )
        const textMaterial = new THREE.MeshBasicMaterial()
        const text = new THREE.Mesh(textGeometry, textMaterial)
        aox.add(text)
        text.position.y = - 0.05
        text.position.x = - 0.17
    }
)

const aoxgeometry = new THREE.PlaneGeometry( 0.45, 0.15 ); 
// const circlematerial = new THREE.MeshBasicMaterial( { color: '#000' } ); 
const aoxCircle = new THREE.Mesh( aoxgeometry, circlematerial ); 

const aoxAngle = 190
aox.position.z = 0.009
aox.position.x = - Math.cos((aoxAngle/200) * 4) * radio
aox.position.y = - Math.sin((aoxAngle/200) * 4) * radio
aox.rotation.z = aoxAngle * 0.02 + Math.PI * 0.5

aox.add( aoxCircle )
section1.add( aox )

const point1Angle = 236
const point4Angle = 79
point1.position.x = - Math.cos((point1Angle/200) * 4) * radio
point1.position.y = - Math.sin((point1Angle/200) * 4) * radio
point4.position.x = - Math.cos((point4Angle/200) * 4) * radio
point4.position.y = - Math.sin((point4Angle/200) * 4) * radio

/**
 * Text re-new
 */
const renew = new THREE.Group()
fontLoader.load(
    'fonts/helvetiker_regular.typeface.json', 
    (font) => 
    {
        const textGeometry = new TextGeometry(
            'RE-NEW',
            {
                font: font,
                size: 0.1,
                height: 0.01,
                curveSegments: 12,
                bevelEnabled: false,
                bevelThickness: 0.01,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }
        )
        const textMaterial = new THREE.MeshBasicMaterial()
        const text = new THREE.Mesh(textGeometry, textMaterial)
        renew.add(text)
        text.position.y = - 0.05
        text.position.x = - 0.25
        // text.position.z = - 0.0015
        // text.rotation.x = 5
    }
)

// const aoxgeometry = new THREE.PlaneGeometry( 0.45, 0.15 ); 
// const circlematerial = new THREE.MeshBasicMaterial( { color: '#000' } ); 
const renewCirlce = new THREE.Mesh( circlegeometry, circlematerial ); 
// renewCirlce.rotation.x = debugObject.rea
// renewCirlce.position.x = 0.019
// renewCirlce.position.y = 0.1
// renewCirlce.position.z = - 0.025
const renewAngle = 865
renew.rotation.x = 4.75

renew.position.x = - Math.cos((renewAngle/200) * 4) * radio
renew.position.y = - Math.sin((renewAngle/200) * 4) * radio + 0.01
// renew.rotation.z = renewAngle * 0.02 + Math.PI * 0.5

renew.add( renewCirlce )
section3.add( renew )

const point3Angle = 205
point3.position.x = - Math.cos((point3Angle/200) * 4) * radio
point3.position.y = - Math.sin((point3Angle/200) * 4) * radio

const point6Angle = 48
point6.position.x = - Math.cos((point6Angle/200) * 4) * radio
point6.position.y = - Math.sin((point6Angle/200) * 4) * radio

// const textTweaks = gui.addFolder('Awesome cube')
// textTweaks
//     .add(renewCirlce.rotation, 'x')
//     .min(- 20)
//     .max(30)
//     .step(0.01)
//     .name('renew rotation')

/**
 * Orbit rotation
 */
section1.rotation.y = - Math.PI * 0.25
section1.rotation.x = - Math.PI * 0.25
section2.rotation.y = Math.PI * 0.25
section2.rotation.x = - Math.PI * 0.25
section3.rotation.x = Math.PI * 0.5


atom.add(section1,section2,section3);
scene.add(atom);


var radius = 10;
var turns = 3;
var objPerTurn = 30;

var angleStep = (Math.PI * 2) / objPerTurn;
var heightStep = 0.5;

var geom = new THREE.PlaneGeometry(2, 3, 0.1);

for (let i = 0; i < turns * objPerTurn; i++) {
  let plane = new THREE.Mesh(geom, new THREE.MeshBasicMaterial({
    color: Math.random() * 0x888888 + 0x888888
  }));
  
  // position
  plane.position.set(
    Math.cos(angleStep * i) * radius,
    heightStep * i,
    Math.sin(angleStep * i) * radius
  );
  
  // rotation
  plane.rotation.y = - angleStep * i;
  scene.add(plane);
}


debugObject.pointPos = {
    x : -1.44,
    y: 0,
    z: - 2.07
}

/**
 * Points of interest
 */
const points = [
    {
        position: new THREE.Vector3(- 0.02, 1.75, - 1.8),
        element: document.querySelector('.point-nutrition')
    },
    {
        position: new THREE.Vector3(1.44, 0, - 2.07),
        element: document.querySelector('.point-mindfulness')
    },
    {
        position: new THREE.Vector3(1.46, 0, 2.06),
        element: document.querySelector('.point-coldtherapy')
    },
    {
        position: new THREE.Vector3(0, - 1.77, 1.78),
        element: document.querySelector('.point-movement')
    },
    {
        position: new THREE.Vector3(- 1.47, 0, 2.06),
        element: document.querySelector('.point-aesthetics')
    },
    {
        position: new THREE.Vector3(- 1.44, 0, - 2.07),
        element: document.querySelector('.point-medicine')
    }
]

// const pointPos = gui.addFolder('pointPos')
// pointPos
//     .add(points[5].position, 'x')
//     .min(- 20)
//     .max(30)
//     .step(0.01)
//     .name('x Point')
// pointPos
//     .add(points[5].position, 'y')
//     .min(- 20)
//     .max(30)
//     .step(0.01)
//     .name('y Point')
// pointPos
//     .add(points[5].position, 'z')
//     .min(- 20)
//     .max(30)
//     .step(0.01)
//     .name('z Point')


// action diagnostics
points[0].element.addEventListener('click', (element) => 
{
    console.log(element);
})

const axesHelper = new THREE.AxesHelper()
// scene.add(axesHelper)





/**
 * Raycaster
 */
const raycaster = new THREE.Raycaster()
// let currentIntersect = null
// const rayOrigin = new THREE.Vector3(- 3, 0, 0)
// const rayDirection = new THREE.Vector3(10, 0, 0)
// rayDirection.normalize()
// raycaster.set(rayOrigin, rayDirection)


/**
 * Camera
 */
// Base camera
const aspectRatio = sizes.width / sizes.height
const camera = new THREE.OrthographicCamera(-3 * aspectRatio,3 * aspectRatio,4,-4, 0.1, 100)
camera.position.y = 1
camera.position.z = 3

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.z = 3
// camera.position.x = 4

// camera.lookAt(new THREE.Vector3())
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.render(scene, camera)
/**
 * Animate
 */
// const clock = new THREE.Clock()
let frame = 0

gsap.fromTo( section2.scale, { y : 1, x : 1 },{ y: 1.005, x: 1.009, duration: 1.5, delay: 0.5, yoyo: true, repeat: -1, ease: "sine.inOut" })
gsap.fromTo( section1.scale, { y : 1, x : 1 },{ y: 1.005, x: 1.005, duration: 1.7, delay: 1, yoyo: true, repeat: -1, ease: "sine.inOut" })
gsap.fromTo( section3.scale, { y : 1, x : 1 },{ y: 1.009, x: 1.005, duration: 1.4, delay: 1.5, yoyo: true, repeat: -1, ease: "sine.inOut" })

gsap.fromTo( logo.scale, { y : 1, x : 1 },{ y: 1.039, x: 1.039, duration: 1.9, delay: 0.1, yoyo: true, repeat: -1, ease: "sine.inOut" })

// gsap.fromTo( camera.position, {x : - 1, y: 1},{x : 1, y: -2, duration: 2, delay: 1.5,ease: "sine.inOut" })
// gsap.to(nucleo1.position, 1.5, {
//   x: function(i, target) {
//     return (Math.cos((i/20) * 4) * radio)
//   },
//   y: function(i, target) {
//     return (Math.sin((i/20) * 4) * radio)
//   },
//   stagger: 0.1
// });

const tick = () =>
{
    if (!isPlay) return; 
    frame++  

    //const elapsedTime = clock.getElapsedTime()
    const elapsedTime = frame/60
    // console.log(elapsedTime)

    const speedacc = speed;//Math.sin(elapsedTime) * 8 + 20
    // console.log(speedacc);

    // logo.quaternion.copy(camera.quaternion)

    // Cast a ray
    //raycaster.setFromCamera(mouse, camera)

    
        // const elettron1Intersects = raycaster.intersectObject(elettron1)
        
        
       
        nucleo1.position.x = (Math.cos((elapsedTime/speedacc) * 4) * radio)
        nucleo1.position.y = (Math.sin((elapsedTime/speedacc) * 4) * radio)
        // elettron1.position.z = Math.sin(elapsedTime/0.15) * 0.1
        // nucleo1.rotation.z = elapsedTime * 0.02 + Math.PI * 0.5
        // point1.position.x = (Math.cos((elapsedTime/speedacc) * 4) * radio)
        // point1.position.y = (Math.sin((elapsedTime/speedacc) * 4) * radio) 

        // elettron2.position.x = - Math.cos((elapsedTime/20) * 4) * 2.5
        // elettron2.position.y = - Math.sin((elapsedTime/20) * 4) * 2.5
        nucleo2.position.x = - Math.cos((elapsedTime/speedacc) * 4) * radio
        nucleo2.position.y = - Math.sin((elapsedTime/speedacc) * 4) * radio


        // elettron3.position.x = - Math.cos((elapsedTime/10) * 4) * 2.5
        // elettron3.position.y = - Math.sin((elapsedTime/10) * 4) * 2.5
        nucleo3.position.x = - Math.cos((elapsedTime/speedacc) * 4) * radio
        nucleo3.position.y = - Math.sin((elapsedTime/speedacc) * 4) * radio


    

    // console.log(mouse.x);

    // camera.position.x = mouse.x * 2
    // camera.position.y = mouse.y * 0.4 + 1
    // logo.lookAt(new THREE.Vector3())
    // camera.lookAt(new THREE.Vector3())

    // const rayO1 = point1.position
    // const rayD1 = new THREE.Vector3(point1.position.x, (point1.position.y+0.5), point1.position.z)
    // raycaster.set(rayO1, rayD1)

    // const intersect1 = raycaster.intersectObjects([ring2,ring3])
    // console.log(intersect1.length);

    // if(intersect1.length)
    // {

    //     // point1.material.color.set('#cc0000')
    // }
    // else
    // {
    //     // point1.material.color.set('#ffffff')
    // }

    // Update controls
    controls.update()


    // move points
    for(const point of points)
    {
        const screenPosition = point.position.clone()
        screenPosition.project(camera)

        const translateX = screenPosition.x * sizes.width * 0.5
        const translateY = - screenPosition.y * sizes.height * 0.5
        point.element.style.transform = `translate(${translateX}px, ${translateY}px)`
    }

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()