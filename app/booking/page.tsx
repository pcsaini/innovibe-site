import { BookingForm } from "@/components/booking-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book EV Service - InnoVibe Mobility",
  description:
    "Book your electric vehicle service with InnoVibe. From EV conversion to charging solutions, get expert assistance for your electric mobility needs.",
};

export default function BookingPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Book Your EV Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your mobility experience? Fill out the form below
            and our experts will get in touch with you within 24 hours.
          </p>
        </div>
        <BookingForm />
      </div>
    </main>
  );
}
