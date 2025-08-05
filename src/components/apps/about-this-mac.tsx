import { customAlphabet } from 'nanoid'
import MacMini from '/assets/mac-mini.png'
import { WindowFrameControl } from '../system/window-frame'

const AboutThisMac = () => {
  return (
    <>
      <WindowFrameControl/>
      <div className="flex flex-col items-center justify-center h-full text-xs">
        <img className="w-32 mb-14" src={MacMini}/>
        <span className="text-xl font-bold">Mac mini</span>
        <span className="text-xs font-bold opacity-50 mb-4">2023</span>
        <table>
          <tbody>
            <tr>
              <td className="text-right font-semibold pr-1">Chip</td>
              <td className="pl-1">Apple M2 Pro</td>
            </tr>
            <tr>
              <td className="text-right font-semibold pr-1">Memory</td>
              <td className="pl-1">16 GB</td>
            </tr>
            <tr>
              <td className="text-right font-semibold pr-1">Serial Number</td>
              <td className="pl-1">{customAlphabet('ABCDEFGHIJKLMNOPRSXWYZ1234567890',10)()}</td>
            </tr>
            <tr>
              <td className="text-right font-semibold pr-1">macOS</td>
              <td className="pl-1">Sonoma 14.5</td>
            </tr>
          </tbody>
        </table>
        <button className='bg-os-foreground/10 px-2 py-0.5 rounded mt-4'>More Info...</button>
      </div>
    </>
  )
}

export { AboutThisMac }