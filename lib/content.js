// All site copy lives here — change text in this file only.

export const nav = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/for-salons", label: "For Salons" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "0", label: "Double bookings", note: "DB-level guard" },
  { value: "< 2s", label: "Live queue update", note: "Socket.IO real-time" },
  { value: "±10 min", label: "ETA accuracy", note: "80% of cases" },
  { value: "100", label: "Pilot salons", note: "Patna, 8 weeks" },
];

export const customerSteps = [
  { title: "Find a nearby salon", text: "Salons within 5 km — distance, rating and how many people are in line right now, all on one screen." },
  { title: "Pick a service + barber", text: "Haircut, beard, facial — choose your favourite barber or keep it on “Any barber”." },
  { title: "Take a token or book a slot", text: "Grab token #7 in the live queue or book a fixed 5 PM slot for tomorrow. No advance payment." },
  { title: "Wait at home", text: "Your live ETA shows in the app. When your turn is 10 minutes away you get a push — “time to leave”." },
  { title: "Take your seat", text: "The barber taps “Call next” and you get an alert. Pay by cash or UPI at the shop after the service." },
];

export const salonSteps = [
  { title: "Log in with OTP", text: "Download the Salon App, enter your phone number, verify the OTP — that's it." },
  { title: "Set up your salon", text: "Add photos, your menu (from ready templates), timings, lunch break and barbers." },
  { title: "KYC + bank", text: "PAN, Aadhaar, shop photo and UPI/bank details. Your documents stay private and secure." },
  { title: "LIVE in 48 hours", text: "The SevaSetu team verifies your details and your salon starts showing in the consumer app." },
];

export const salonFeatures = [
  { icon: "ListOrdered", title: "Live queue screen", text: "Remote tokens, walk-ins and appointments — on one screen, in the right order." },
  { icon: "UserPlus", title: "Add walk-ins", text: "A customer without the app? One tap for a token. Zero commission on counter walk-ins." },
  { icon: "Scissors", title: "Barber management", text: "Each barber gets their own line, services and timings. The owner can be a barber too." },
  { icon: "Coffee", title: "Break & leave", text: "On break, off, busy — one toggle. The ETA adjusts itself." },
  { icon: "PhoneCall", title: "Call next, skip, recall", text: "Customer late? Skip them with a 10-minute grace. If they arrive, recall — 2 positions later." },
  { icon: "BarChart3", title: "Daily report", text: "At 9 PM: customers, revenue, average wait, no-show % and a barber-wise breakdown." },
  { icon: "Ban", title: "Queue full today", text: "During a rush, one toggle closes the remote queue. Walk-ins keep going." },
  { icon: "Wallet", title: "Wallet & weekly payout", text: "A transparent ledger and a settlement every Monday — with the UTR." },
];

export const customerFeatures = [
  { icon: "MapPin", title: "Nearby salons", text: "Live salons near you on the map, with an open-now filter." },
  { icon: "Timer", title: "Live ETA", text: "Your ETA updates on every queue change, within 2 seconds." },
  { icon: "BellRing", title: "Turn alerts", text: "“Your turn soon” and “Called” — sent as push notifications." },
  { icon: "CalendarClock", title: "Fixed slot booking", text: "Book a slot up to 7 days ahead, with reminders 60 and 15 minutes before." },
  { icon: "Star", title: "Rate & review", text: "Rate both the salon and the barber — only on completed visits." },
  { icon: "Heart", title: "Favourites", text: "Save your salon and rebook in one tap next time." },
];

export const services = [
  { name: "Haircut", min: 20, price: "₹100", tag: "men" },
  { name: "Beard trim / styling", min: 10, price: "₹50", tag: "men" },
  { name: "Shave", min: 15, price: "₹50", tag: "men" },
  { name: "Haircut + Beard", min: 30, price: "₹140", tag: "men" },
  { name: "Kids haircut", min: 15, price: "₹80", tag: "kids" },
  { name: "Hair color / dye", min: 40, price: "₹300+", tag: "unisex" },
  { name: "Head massage", min: 15, price: "₹100", tag: "unisex" },
  { name: "Facial / cleanup", min: 30, price: "₹300+", tag: "unisex" },
  { name: "Women's haircut", min: 30, price: "₹250+", tag: "women" },
];

export const dayTimeline = [
  { time: "9:00 AM", title: "Shop opens", text: "Sameer and Raju mark themselves “Available” in the app. The queue opens for joins." },
  { time: "All day", title: "One screen, three lines", text: "Remote tokens, walk-ins and appointments — call next → start → complete." },
  { time: "2:00 PM", title: "Lunch break", text: "The barber goes “On break” — the ETA for their line extends automatically." },
  { time: "Rush", title: "Queue full today", text: "Toggle off — new remote joins stop, walk-ins can still be added." },
  { time: "9:00 PM", title: "Day summary", text: "Customers, revenue, average wait and a barber-wise report — no register needed." },
];

export const faqs = [
  { q: "Does the customer have to pay anything?", a: "No. There is no advance payment for a queue token. You pay by cash or UPI at the shop after the service. Online payment for appointments is optional, and only if the salon enables it." },
  { q: "What if the customer is late?", a: "The barber taps “Skip” and the customer gets a 10-minute grace period. If they arrive, they are recalled 2 positions later in the line. When the grace period ends, the token becomes a no-show." },
  { q: "What happens with walk-in customers?", a: "They join the same line. The manager or barber issues a token with “Add walk-in” in the Salon App, so the ETA stays accurate for everyone. There is no commission on counter walk-ins." },
  { q: "Can two bookings clash for the same barber?", a: "No. A database-level guard plus a slot lock allows only one confirmed booking per barber per time slot. Pilot target: zero double bookings." },
  { q: "How long does it take for a salon to go LIVE?", a: "After you submit your setup and KYC, our team reviews it within 48 hours. Once approved, your salon shows up in the consumer app." },
  { q: "When do I get my payout?", a: "Settlement happens every Monday at 10 AM. Any positive balance is transferred to your UPI/bank account, with the UTR." },
  { q: "Can a ladies or unisex salon join?", a: "Yes. Both men's and unisex salon types are supported, and the menu has tags for women, kids and unisex services." },
];

export const roles = [
  { role: "Owner", can: "Edit salon, KYC, menu, barbers, hours, all bookings, earnings, bank", color: "bg-sun" },
  { role: "Manager", can: "Manage the queue, add walk-ins, assign barbers, leave/break", color: "bg-brand text-white" },
  { role: "Barber", can: "Own queue, call next, skip, start, complete, own status", color: "bg-ink text-white" },
];
