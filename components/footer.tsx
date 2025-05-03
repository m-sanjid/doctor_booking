import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">MediBook</h3>
            <p className="text-muted-foreground mb-4">Making healthcare accessible and convenient for everyone.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">For Patients</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/doctors" className="text-muted-foreground hover:text-primary">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link href="/specialties" className="text-muted-foreground hover:text-primary">
                  Browse Specialties
                </Link>
              </li>
              <li>
                <Link href="/teleconsultation" className="text-muted-foreground hover:text-primary">
                  Video Consultation
                </Link>
              </li>
              <li>
                <Link href="/health-articles" className="text-muted-foreground hover:text-primary">
                  Health Articles
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">For Doctors</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/doctor-register" className="text-muted-foreground hover:text-primary">
                  Join as Doctor
                </Link>
              </li>
              <li>
                <Link href="/doctor-app" className="text-muted-foreground hover:text-primary">
                  MediBook for Doctors
                </Link>
              </li>
              <li>
                <Link href="/doctor-resources" className="text-muted-foreground hover:text-primary">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/doctor-blog" className="text-muted-foreground hover:text-primary">
                  Doctor Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">123 Healthcare Avenue, Medical District, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">support@medibook.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} MediBook. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

