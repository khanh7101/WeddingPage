export default function Footer() {
  return (
    <footer className="px-10 py-16 border-t text-sm text-gray-600 grid md:grid-cols-3 gap-10">
        <div>
          <div className="text-lg font-semibold mb-3">ApexEstate</div>
          Exceptional Properties. Modern Living.
        </div>
        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <div className="space-y-1">
            <a>Services</a><br/>
            <a>About</a><br/>
            <a>Contact</a>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">Legal</div>
          <div className="space-y-1">
            <a>Privacy Policy</a><br/>
            <a>Terms & Conditions</a>
          </div>
        </div>
      </footer>
  );
}
