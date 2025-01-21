import { FaEdit } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";

const Form = () => {
  return (
    <form className="text-white mb-20 text-lg flex outline-none border-none gap-1 flex-col">
      <div>
        <label htmlFor='name'>Mecca Crew Name</label>
        <div className="flex items-center justify-between text-mypurple-600 bg-white px-2 py-2 rounded-md">
            <input type="text" id='name' name='name' placeholder='John Smith'/>
            <FaEdit />
        </div>
      </div>
      <div>
        <label htmlFor='sol'>Solana Address</label>
        <div className="flex items-center justify-between text-mypurple-600 bg-white px-2 py-2 rounded-md">
            <input type="text" id='sol' name='sol' placeholder='Your Solana Address'/>
            <FaEdit />
        </div>
      </div>
      <div>
        <label htmlFor='sol'>Referral code</label>
        <div className="flex items-center justify-between text-mypurple-600 bg-white px-2 py-2 rounded-md">
            <input type="text" id='sol' name='sol' placeholder='0x00000000'/>
            <IoCopy />
        </div>
      </div>
    </form>
  )
}

export default Form
