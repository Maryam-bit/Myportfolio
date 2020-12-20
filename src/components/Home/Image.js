import React, {useRef, useEffect} from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import dev from '../../img/devp.png'
export default function Image() {
  const img=useRef(null)
  useEffect(() => {
    /*
        img.current.animate(
          [
            { transform: "translate(0, 0)" },
            { transform: "translate(0, 15px)" },
            { transform: "translate(0, 0)" }
          ],
          {
            duration: 4000,
            iterations: Infinity,
            yoyo:Infinity,
            animationTimingFunction:'linear',
            playbackRate:-30
          }
        );
  })


  const img2=useRef(null)
  useEffect(() => {
        img2.current.animate(
          [
            { transform: "translate(0, 0)" },
            { transform: "translate(0, 15px)" },
            { transform: "translate(0, 0)" }
          ],
          {
            duration: 4000,
            iterations: Infinity,
            yoyo:Infinity,
            animationTimingFunction:'linear',
            playbackRate:-30
          }
        );
  })

  const img3=useRef(null)
  useEffect(() => {
        img3.current.animate(
          [
            { transform: "translate(0, 15px)" },
            { transform: "translate(0, 0)" },
            { transform: "translate(0, 15px)" }
          ],
          {
            duration: 4000,
            iterations: Infinity,
            yoyo:Infinity,
            animationTimingFunction:'linear',
            playbackRate:-30
          }
        );*/
  })
  const img4=useRef(null)
  useEffect(() => {
        img4.current.animate(
          [
            { transform: "translate(0, 0)" },
            { transform: "translate(0, 20px)" },
            { transform: "translate(0, 0)" }
          ],
          {
            duration: 4000,
            iterations: Infinity,
            yoyo:Infinity,
            animationTimingFunction:'linear',
            playbackRate:-30
          }
        );
  })


 return (
  <div className="image">
   {/* <img className="mainImg" src="https://iradesign.io/assets/img/pr1.png"/> */}
   {/* <img ref={img} className="cup" src="https://iradesign.io/assets/img/coffee-float.png"/> */}
   {/* <img ref={img2} className="women" src="https://iradesign.io/assets/img/women-float.png"/> */}
   {/* <img ref={img3} className="man" src="https://iradesign.io/assets/img/pr2.png"/> */}
   {/* <img ref={img4} className="pig" src="https://iradesign.io/assets/img/pig-float.png"/> */}
   <img ref={img4} className="img"  src={dev}/>
  </div>
 )
}
