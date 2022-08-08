import { ConnectButton } from "web3uikit"


export default function Header({darkTheme,setDarkTheme}) {
    return (
        <div className="border-b-2 flex p-5 justify-between">
            <h1 className="py-4 px-4 font-bold text-4xl ">Decentralised Lottery</h1>
            <div className="flex items-center">
            <button type="button" onClick={()=>setDarkTheme(!darkTheme)} className="text-xl font-bold dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">{!darkTheme ? 'Dark 🌑' :'Light 💡'}</button>
            <ConnectButton moralisAuth={false} />
            </div>
        </div>
    )
}