import { useEffect, useState } from "react"
import { useInput } from './useInput'
import { useTabs } from './useTabs'
import { useTitle } from './useTitle'
import { useClick } from './useClick'
import { useConfirm } from './useConfirm'
import { usePreventLeave } from './usePreventLeave'
import { useBeforeLeave } from "./useBeforeLeave"
import { useFadeIn } from "./useFadeIn"
import { useNetwork } from "./useNetwork"
import { useScroll } from "./useScroll"
import { UseFullscreen } from "./useFullscreen"
import { useNotification } from "./useNotification"
import { useAxios } from "./useAxios"

const content = [
  {
    tab: 'Section 1',
    content: 'Section 1 content'
  },
  {
    tab: 'Section 2',
    content: 'Section 2 content'
  }
]

const App = () => {
  // UseState
  const [item, setItem] = useState(1)
  const incrementItem = () => setItem(item + 1)
  const decrementItem = () => setItem(item - 1)

  // UseInpue
  const maxLen = (value) => !value.includes("@")
  const name = useInput('Mr.', maxLen)

  //UseTab
  const { currentItem, changeItem } = useTabs(0, content)

  //UseEffect
  const [number, setNumber] = useState(0)
  const [aNumber, setAnumber] = useState(0)

  const sayHelllo = () => console.log('hello');
  useEffect(sayHelllo, [number])

  //UseTitle
  const titleUpdator = useTitle('Loading...')
  setTimeout(() => titleUpdator('Home'), 5000)

  //UseClick
  const sayHello = () => console.log('say hello');
  const title = useClick(sayHello);

  //UseConfirm
  const deleteWorld = () => console.log('deleting the world')
  const abort = () => console.log('Aborted')
  const confirmDelete = useConfirm('Are you sure', deleteWorld, abort);

  //UsePreventLeave
  const { enablePrevent, disablePrevent } = usePreventLeave()

  //UseBeforeLeave
  const begForLife = () => console.log('pis dont leave')
  useBeforeLeave(begForLife);

  //UseFadeIn
  const fadeInH2 = useFadeIn(1, 2)
  const fadeInp = useFadeIn(5, 10)

  //UseNetwork
  const handleNetworkChange = (online) => {
    console.log(online ? 'We juse went online' : 'We are offline')
  }
  const onLine = useNetwork(handleNetworkChange)

  //UseScroll
  const { y } = useScroll()

  //UseFullscreen
  const onFullS = (isFull) => {
    console.log(isFull ? 'We are full' : 'We are small')
  }
  const { element, triggerFull, exitFull } = UseFullscreen(onFullS)

  //UseNotification
  const triggerNotification = useNotification('Can I steel your kimchi?', {
    body: 'I Love kimchi dont you'
  })

  //UseAxios
  const {loading, data, error, refetch} = useAxios({
    url:'https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json'
  })

  return (
    <div className='App' style={{ height: "1000vh" }}>
      <div>
        <h1>14. UseAxios</h1>
        <h2>{data && data.status}</h2>
        <h3>{loading && 'Loading'}</h3>
        <button onClick={refetch}>Refetch</button>
      </div>
      <div>
        <h1>13. UseNotification</h1>
        <button onClick={triggerNotification}>Hello</button>
      </div>
      <div>
        <h1>12. UseFullscreen</h1>
        <div ref={element}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOL9bbVFuzP628nNfTg3Fd7rYH_k4XsvMMgw&usqp=CAU" />
          <button onClick={exitFull}>Exit Fullscreen</button>
        </div>
        <button onClick={triggerFull}>Make Fullscreen</button>
      </div>
      <div>
        <h1>11. UseScroll</h1>
        <h2 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h2>
      </div>
      <div>
        <h1>10. UseNetwork</h1>
        <h1>{onLine ? "Online" : "Offline"}</h1>
      </div>
      <div>
        <h1>9. UseFadeIn</h1>
        <h2 {...fadeInH2}>HI</h2>
        <p {...fadeInp}>hihihihihihihihi</p>
      </div>

      <div>
        <h1>8. UseBeforeLeave</h1>
      </div>

      <div>
        <h1>7. UsePreventLeave</h1>
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>Unprotect</button>
      </div>

      <div>
        <h1>6. UseConfirm</h1>
        <button onClick={confirmDelete}>Delete the world</button>
      </div>

      <div>
        <h1>5. UseClick</h1>
        <h1 ref={title}>Hi</h1>
      </div>

      <div>
        <h1>4. UseEffect</h1>
        <button onClick={() => setNumber(number + 1)}>{number}</button>
        <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
      </div>

      <div>
        <h1>3. UseTab</h1>
        {content.map((section, index) => (
          <button onClick={() => changeItem(index)}>{section.tab}</button>
        ))}
        <div>{currentItem.content}</div>
      </div>

      <div>
        <h1>2. UseInput</h1>
        <input placeholder='Name' {...name} />
      </div>

      <div>
        <h1>1. UseState</h1>
        <button onClick={decrementItem}>Decrement</button>
        <button onClick={incrementItem}>Increment</button>
      </div>
    </div>
  );
}

export default App;
