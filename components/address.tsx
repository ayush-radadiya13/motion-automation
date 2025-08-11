export function ContactPage() {
  return (
    <div className="w-full max-w-4xl rounded-lg px-6 md:px-10 py-0 md:py-2 space-y-10">
      {/* Address */}
      <section>
        <h2 className="font-bold text-blue-600 mb-2 text-xl">Address</h2>
        <p>Plot No.15, Survey No.20, Near Punam Dumper,</p>
        <p>Gondal Road, Vavdi, Rajkot,</p>
        <p>Rajkot - 360004, Gujarat, India</p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="font-bold text-blue-600 mb-2 text-xl">Contact</h2>
        <p>We’d love to talk about how we can work together.</p>
        <p className="font-medium">📞 +91 99982 12691</p>
        <p className="font-medium">📞 +91 70467 80350</p>
        <p className="font-medium">✉ motionautomationrajkot@gmail.com</p>
      </section>

      {/* Follow Us */}
      <section>
        <h2 className="font-bold text-blue-600 mb-2 text-xl">Follow Us</h2>
        <div className="flex gap-8 justify-start">
          <a
            href="https://www.facebook.com/motionautomation"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            Facebook
          </a>
          <a
            href="https://www.youtube.com/@Motion_Automation"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
           YouTube
          </a>
          <a
            href="https://www.instagram.com/motion_automation/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600"
          >
            Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
