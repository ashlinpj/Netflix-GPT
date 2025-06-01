import Header from "./Header"

const Login = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
         <img 
           className="h-screen w-full object-cover" 
           src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg" 
           alt="Background Image" 
         />
         <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative z-10">
        <Header/>
        {/* Login form or other content will go here */}
      </div>
    </div>
  )
}

export default Login