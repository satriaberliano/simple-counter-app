import { useCountStore } from "@/store"
import { Button } from "./ui/button"


const ResetButton = () => {
  const reset = useCountStore((state) => state.reset)

  return (
    <div className="flex justify-center">
      <Button className='px-7' variant="destructive" onClick={() => reset()}>Reset</Button>
    </div>
  )
}

export default ResetButton