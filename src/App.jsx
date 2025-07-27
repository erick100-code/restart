import { useEffect, useRef, useState } from 'react'
import './App.css'
import Buttons from './components/buttons'
import Cx from './components/caixas'
import Logo from './components/logo'

function App() {
  let valorPersistente = useRef()
 
  let [jsons, setJsons] = useState([
    {
      "logo": "/restart/images/logo-devlens.svg",
      "name": "DevLens",
      "description": "Quickly inspect page layouts and visualize element boundaries.",
      "isActive": true,
      "type":"all"
    },
    {
      "logo": "/restart/images/logo-style-spy.svg",
      "name": "StyleSpy",
      "description": "Instantly analyze and copy CSS from any webpage element.",
      "isActive": true,
      "type":"all"
    },
    {
      "logo": "/restart/images/logo-speed-boost.svg",
      "name": "SpeedBoost",
      "description": "Optimizes browser resource usage to accelerate page loading.",
      "isActive": true,
      "type":"all"
    },
    {
      "logo": "/restart/images/logo-json-wizard.svg",
      "name": "JSONWizard",
      "description": "Formats, validates, and prettifies JSON responses in-browser.",
      "isActive": false,
      "type":"all"
    },
    {
      "logo": "/restart/images/logo-tab-master-pro.svg",
      "name": "TabMaster Pro",
      "description": "Organizes browser tabs into groups and sessions.",
      "isActive": false,
      "type":"all"
    },
    {
      "logo": "/restart/images/logo-viewport-buddy.svg",
      "name": "ViewportBuddy",
      "description": "Simulates various screen resolutions directly within the browser.",
      "isActive": false,
      "type":"all"
    },
    {
      "logo": "/restart/images/logo-markup-notes.svg",
      "name": "Markup Notes",
      "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
      "isActive": false,
      "type":"all"
    },
    {
      "logo": "/restart/images/logo-grid-guides.svg",
      "name": "GridGuides",
      "description": "Overlay customizable grids and alignment guides on any webpage.",
      "isActive": false,
      "type":"all"
    },
    {
      "logo": "/restart/images/logo-palette-picker.svg",
      "name": "Palette Picker",
      "description": "Instantly extracts color palettes from any webpage.",
      "isActive": false,
      "type":"all"
    },
    {
      "logo": "/restart/images/logo-link-checker.svg",
      "name": "LinkChecker",
      "description": "Scans and highlights broken links on any page.",
      "isActive": false,
      "type":"all"
    },
    {
      "logo": "/restart/images/logo-dom-snapshot.svg",
      "name": "DOM Snapshot",
      "description": "Capture and export DOM structures quickly.",
      "isActive": false,
      "type":"all"
    },
    {
      "logo": "/restart/images/logo-console-plus.svg",
      "name": "ConsolePlus",
      "description": "Enhanced developer console with advanced filtering and logging.",
      "isActive": false,
      "type":"all"
    }
  ])

  useEffect(() => {
    valorPersistente.current = jsons 
    console.log(valorPersistente.current)
  },[])

  function type(valid, indice, typ) {
    switch(valid) {
      case "all":
        valorPersistente.current.forEach(element => {
          element.type = "todos"
        });
        setJsons(valorPersistente.current)
        break
        case "active":  
          valorPersistente.current.forEach(obj => {
            obj.type = "ativados"
          });
          setJsons(valorPersistente.current.filter(ind => ind.isActive == true))
          break
        case "inactive":
          valorPersistente.current.forEach(obj => {
            obj.type = "inativados"
          })
          setJsons(valorPersistente.current.filter(ind => ind.isActive == false))
          break
        case "remove":
          valorPersistente.current = valorPersistente.current.filter(ind => ind.name != indice)
          setJsons(jsons.filter(ind => ind.name != indice))
          break
        case "validation":
          valorPersistente.current =  valorPersistente.current.map(ind => {
            if (ind.name == indice) {
              return {...ind, isActive: !ind.isActive}
            }
            return ind
          })
          
          setJsons(jsons.map(ind => {
            if (ind.name == indice) {
              return {...ind, isActive: !ind.isActive}
            }
            return ind
          }))

          switch(typ) {
            case "todos":
            setJsons(valorPersistente.current)
            break
            case "ativados":
              setJsons(valorPersistente.current.filter(ind => ind.isActive == true))
            break
            case "inativados":  
              setJsons(valorPersistente.current.filter(ind => ind.isActive == false))
            break
          }

          break
    }
  }

  console.log(valorPersistente.current)
  const main = useRef()

  function mod(mode) {
    if (mode == 'dark') {
      main.current.classList.add('dark')
    } else if (mode == 'light'){
      main.current.classList.remove('dark')
    }
  }

  return (
    <div>
      <main ref={main} className='bg-[#ECF3FD] min-h-screen w-screen flex flex-col gap-[60px_0px] dark:bg-linear-180 from-[#040918] from-0% to-100% to-[#091540] overflow-x-hidden p-11'>
        <Logo modoD={mod} />
        <Buttons data={jsons} funcao={type} />
        <Cx dt={jsons} func={type} />
      </main>
    </div>  
  )
}

export default App