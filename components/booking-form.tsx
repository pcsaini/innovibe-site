"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import {
  Loader2,
  CheckCircle,
  Car,
  Phone,
  Mail,
  User,
  FileText,
  Settings,
} from "lucide-react";

const formSchema = z.object({
  userName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  mobile: z.string().regex(/^[6-9]\d{9}$/, {
    message: "Please enter a valid 10-digit Indian mobile number.",
  }),
  vehicleBrand: z.string().min(1, {
    message: "Please select a vehicle brand.",
  }),
  vehicleModel: z.string().min(1, {
    message: "Please enter your vehicle model.",
  }),
  serviceType: z.string().min(1, {
    message: "Please select a service type.",
  }),
  otherDetails: z.string().optional(),
  description: z.string().min(10, {
    message:
      "Please provide at least 10 characters describing your requirements.",
  }),
  agreeToTerms: z.boolean().refine((value) => value, {
    message: "You must agree to the terms and conditions.",
  }),
});

const vehicleBrands = [
  "Tata Motors",
  "Mahindra",
  "MG Motor",
  "Hyundai",
  "Kia",
  "BYD",
  "Ola Electric",
  "Ather Energy",
  "TVS Motor",
  "Bajaj Auto",
  "Hero Electric",
  "Revolt Motors",
  "Other",
];

const serviceTypes = [
  "EV Conversion",
  "Charging Station Installation",
  "Battery Replacement",
  "EV Maintenance",
  "Charging Solutions",
  "Fleet Electrification",
  "Consultation",
  "Other",
];

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      email: "",
      mobile: "",
      vehicleBrand: "",
      vehicleModel: "",
      serviceType: "",
      otherDetails: "",
      description: "",
      agreeToTerms: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", values);

      setIsSubmitted(true);
      toast({
        title: "Booking Request Submitted!",
        description:
          "We'll contact you within 24 hours to discuss your requirements.",
      });

      // Reset form after successful submission
      form.reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-3xl w-full mx-auto p-8 md:p-12 shadow-xl border border-gray-200 bg-white">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            <h3 className="text-2xl font-semibold text-foreground">
              Thank You for Your Booking Request!
            </h3>
            <p className="text-muted-foreground">
              We've received your request and our team will contact you within 24 hours to discuss your EV service requirements.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>What's Next?</strong>
                <br />• Our expert will call you to understand your specific needs
                <br />• We'll provide a detailed quote and timeline
                <br />• Schedule a convenient time for service delivery
              </p>
            </div>
          </div>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="mt-8 w-full"
            variant="outline"
          >
            Submit Another Booking
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-3xl w-full mx-auto p-8 md:p-12 shadow-xl border border-gray-200 bg-white">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-bold text-center mb-2">
          Booking Details
        </CardTitle>
        <CardDescription className="text-center mb-6 text-muted-foreground">
          Please provide your details and requirements. Fields marked with * are
          required.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <User className="h-4 w-4" />
                Personal Information
              </h3>

              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        Email Address *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your.email@example.com"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        Mobile Number *
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="9876543210" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter 10-digit mobile number
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Vehicle Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Car className="h-4 w-4" />
                Vehicle Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="vehicleBrand"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vehicle Brand *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select vehicle brand" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {vehicleBrands.map((brand) => (
                            <SelectItem key={brand} value={brand}>
                              {brand}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="vehicleModel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vehicle Model *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., Nexon EV, i20, Activa"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1">
                      <Settings className="h-3 w-3" />
                      Service Type *
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the service you need" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {serviceTypes.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="otherDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Vehicle Details</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Year, variant, current condition, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Any additional information about your vehicle (optional)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Service Details Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Service Requirements
              </h3>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description & Requirements *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please describe your specific requirements, timeline, budget expectations, or any questions you have about our EV services..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Provide detailed information to help us serve you better
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Terms and Conditions */}
            <FormField
              control={form.control}
              name="agreeToTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>I agree to the terms and conditions *</FormLabel>
                    <FormDescription>
                      By submitting this form, you agree to our{" "}
                      <a
                        href="/privacy"
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </a>
                      . We'll use your information to provide you with the best
                      EV service experience.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting Request...
                </>
              ) : (
                "Submit Booking Request"
              )}
            </Button>
          </form>
        </Form>

        {/* Contact Information */}
        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">
            Need Immediate Assistance?
          </h4>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>📞 Call us: +91 98765 43210</p>
            <p>📧 Email: support@innovibemobility.com</p>
            <p>🕒 Business Hours: Mon-Sat, 9:00 AM - 7:00 PM</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
