export default function Navbar() {
    return (
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <a href="/" className="text-xl font-bold">
            SignalsHQ
          </a>
          <div className="space-x-4">
            <a href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      </nav>
    );
  }
  