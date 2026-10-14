import { useRef, useState } from "react";
import Header from "./Header";

const courseTracks = [
  {
    number: "01",
    icon: "🚀",
    title: "eBay Dropshipping Foundations",
    level: "Beginner",
    description:
      "Learn the fundamentals of the eBay selling model, seller responsibilities, supplier selection and order fulfilment.",
    topics: [
      "Understanding the dropshipping model",
      "Seller responsibilities and marketplace policies",
      "Supplier selection and fulfilment basics",
    ],
  },
  {
    number: "02",
    icon: "🔎",
    title: "Product Research & Analysis",
    level: "Product Research",
    description:
      "Develop a structured approach to researching products and comparing opportunities before investing your time.",
    topics: [
      "Researching product opportunities",
      "Evaluating competitors and comparable listings",
      "Assessing costs and potential profitability",
    ],
  },
  {
    number: "03",
    icon: "🛡️",
    title: "Listing & Policy Awareness",
    level: "Listing Skills",
    description:
      "Understand the importance of accurate listings, intellectual property awareness and marketplace requirements.",
    topics: [
      "Listing quality and product descriptions",
      "Brand, trademark and copyright considerations",
      "Restricted products and marketplace policies",
    ],
  },
  {
    number: "04",
    icon: "📊",
    title: "Profitability & Store Operations",
    level: "Business Operations",
    description:
      "Explore methods for estimating profitability, managing supplier changes and organising daily store operations.",
    topics: [
      "Calculating product costs and potential profit",
      "Monitoring supplier prices and stock",
      "Order handling and customer communication",
    ],
  },
];

const faqs = [
  {
    question: "Can I enroll in a class right now?",
    answer:
      "Enrollment is not available yet. Course availability, fees, schedules and enrollment requirements will be published when they are finalized.",
  },
  {
    question: "Are the courses suitable for beginners?",
    answer:
      "The proposed learning tracks include beginner-oriented topics. The final course structure and any prerequisites will be confirmed before enrollment opens.",
  },
  {
    question: "Will classes be live or recorded?",
    answer:
      "The delivery format has not been finalized. Live sessions, recorded lessons and other learning formats will be specified in the course details when they are available.",
  },
  {
    question: "Do the courses guarantee earnings?",
    answer:
      "No earnings or business outcomes are guaranteed. Results depend on individual decisions, experience, marketplace conditions and other factors.",
  },
];

const paymentDetails = {
  "Meezan Bank": [
    { label: "Account Title", value: "Muhammad Zohaib" },
    { label: "Account Number", value: "000816010782" },
    { label: "IBAN", value: "PK74MEZN0008160107821450" },
  ],
  UBL: [
    { label: "Account Title", value: "Muhammad Zohaib" },
    { label: "Account Number", value: "1774291210092" },
    { label: "IBAN", value: "PK39UNIL0109000291210092" },
  ],
  Easypaisa: [
    { label: "Account Holder", value: "Muhammad Zohaib" },
    { label: "Mobile Number", value: "03120471713" },
  ],
};


function EnrollmentForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    courses: [],
    paymentMethod: "",
    transactionReference: "",
    amountPaid: "",
    additionalMessage: "",
  });
  
async function copyPaymentDetails() {
  const details = paymentDetails[form.paymentMethod];

  if (!details) return;

  const textToCopy = [
    `Payment Method: ${form.paymentMethod}`,
    ...details.map((item) => `${item.label}: ${item.value}`),
  ].join("\n");

  try {
    await navigator.clipboard.writeText(textToCopy);
    setCopiedPaymentMethod(form.paymentMethod);
    setCopyError("");
  } catch {
    setCopiedPaymentMethod("");
    setCopyError(
      "Copying was blocked by your browser. Please select and copy the details manually."
    );
  }
}


const courseOptions = [
  "TikTok Shop",
  "Shopify Store",
  "Video Editing",
  "Digital Marketing",
  "eBay Dropshipping",
  "Amazon FBA Wholesale",
  "Full Stack Development (MERN)",
];

const [courseError, setCourseError] = useState("");
  const [paymentSlip, setPaymentSlip] = useState(null);
  const [fileError, setFileError] = useState("");
  const [consent, setConsent] = useState(false);
  const [previewSubmitted, setPreviewSubmitted] = useState(false);
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);
  
const [copiedPaymentMethod, setCopiedPaymentMethod] = useState("");
const [copyError, setCopyError] = useState("");


  const fileInputRef = useRef(null);

  const inputClass =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100";


function handleChange(event) {
  const { name, value } = event.target;

  setForm((previous) => ({
    ...previous,
    [name]: value,
  }));

  setPreviewSubmitted(false);

  if (name === "paymentMethod") {
    setCopiedPaymentMethod("");
    setCopyError("");
  }
}


function toggleCourse(course) {
  setForm((previous) => ({
    ...previous,
    courses: previous.courses.includes(course)
      ? previous.courses.filter((item) => item !== course)
      : [...previous.courses, course],
  }));

  setCourseError("");
  setPreviewSubmitted(false);
}

  function handleFileChange(event) {
    const file = event.target.files?.[0];

    setFileError("");
    setPreviewSubmitted(false);

    if (!file) {
      setPaymentSlip(null);
      return;
    }

    const allowedExtensions = [".pdf", ".jpg", ".jpeg", ".png", ".webp"];
    const fileName = file.name.toLowerCase();

    const validExtension = allowedExtensions.some((extension) =>
      fileName.endsWith(extension)
    );

    if (!validExtension) {
      setFileError("Upload a PDF, JPG, JPEG, PNG or WEBP file.");
      setPaymentSlip(null);
      event.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setFileError("The payment slip must be 5 MB or smaller.");
      setPaymentSlip(null);
      event.target.value = "";
      return;
    }

    setPaymentSlip(file);
  }


function handleSubmit(event) {
  event.preventDefault();

  setFileError("");
  setCourseError("");

  // Require at least one course
  if (form.courses.length === 0) {
    setCourseError("Please select at least one course.");
    setPreviewSubmitted(false);

    document.getElementById("enrollment")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    return;
  }

  // Require payment slip
  if (!paymentSlip) {
    setFileError("Payment slip is required.");
    setPreviewSubmitted(false);
    fileInputRef.current?.focus();
    return;
  }

  // Require consent
  if (!consent) {
    setPreviewSubmitted(false);
    return;
  }

  // Frontend prototype only. No application or file is transmitted.
  setPreviewSubmitted(true);
}


  function resetForm() {
    setForm({
      fullName: "",
      email: "",
      whatsapp: "",
      courses: [],
      paymentMethod: "",
      transactionReference: "",
      amountPaid: "",
      additionalMessage: "",
    });

    setPaymentSlip(null);
    setFileError("");
    setConsent(false);
    setPreviewSubmitted(false);
    setCourseError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  return (
    <section
      id="enrollment"
      className="scroll-mt-28 border-t border-slate-200 bg-slate-50 px-5 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-700">
              Enrollment Form Preview
            </span>

            <h2 className="mt-4 text-2xl font-extrabold text-slate-950 sm:text-3xl">
              Apply for an online class
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Complete your details and attach your payment slip.
              Admission will require payment verification and admin
              approval before an official fee receipt can be generated.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-6">
              {/* Student details */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                  Student details
                </h3>

                <div className="mt-4 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="enrollment-name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Full name *
                    </label>

                    <input
                      id="enrollment-name"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={120}
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enrollment-email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email address *
                    </label>

                    <input
                      id="enrollment-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enrollment-whatsapp"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      WhatsApp number *
                    </label>

                    <input
                      id="enrollment-whatsapp"
                      name="whatsapp"
                      type="tel"
                      autoComplete="tel"
                      required
                      maxLength={30}
                      value={form.whatsapp}
                      onChange={handleChange}
                      placeholder="Include country code"
                      className={inputClass}
                    />
                  </div>
                
<div className="relative">
  <label
    htmlFor="enrollment-course-toggle"
    className="mb-2 block text-sm font-semibold text-slate-700"
  >
    Select courses <span className="text-red-500">*</span>
  </label>

  <p className="mb-3 text-xs text-slate-500">
    Select one or more courses.
  </p>

  {/* Dropdown toggle */}
  <button
    id="enrollment-course-toggle"
    type="button"
    aria-expanded={courseDropdownOpen}
    aria-controls="enrollment-course-options"
    onClick={() => setCourseDropdownOpen((open) => !open)}
    className={`flex min-h-12 w-full items-center justify-between gap-3 rounded-xl border bg-white px-4 py-3 text-left text-sm outline-none transition focus:ring-4 focus:ring-orange-100 ${
      courseDropdownOpen
        ? "border-orange-400 ring-2 ring-orange-100"
        : "border-slate-300 hover:border-slate-400"
    }`}
  >
    <span
      className={
        form.courses.length > 0
          ? "font-medium text-slate-800"
          : "text-slate-400"
      }
    >
      {form.courses.length === 0
        ? "Choose courses"
        : `${form.courses.length} course${form.courses.length > 1 ? "s" : ""} selected`}
    </span>

    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${
        courseDropdownOpen ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </button>

  {/* Selected course tags */}
  {form.courses.length > 0 && (
    <div className="mt-2 flex flex-wrap gap-2">
      {form.courses.map((course) => (
        <span
          key={course}
          className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-700"
        >
          {course}
        </span>
      ))}
    </div>
  )}

  {/* Dropdown options */}
  {courseDropdownOpen && (
    <div
      id="enrollment-course-options"
      className="absolute left-0 right-0 top-full z-30 mt-2 max-h-64 overflow-y-auto rounded-xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10"
    >
      <div className="flex items-center justify-between px-3 py-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Available courses
        </span>

        <button
          type="button"
          onClick={() => setCourseDropdownOpen(false)}
          className="text-xs font-semibold text-orange-600 hover:text-orange-700"
        >
          Done
        </button>
      </div>

      {courseOptions.map((course) => {
        const selected = form.courses.includes(course);

        return (
          <label
            key={course}
            className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-3 transition ${
              selected
                ? "bg-orange-50"
                : "hover:bg-slate-50"
            }`}
          >
            <input
              type="checkbox"
              checked={selected}
              onChange={() => toggleCourse(course)}
              className="h-4 w-4 shrink-0 accent-orange-500"
            />

            <span className="flex-1 text-sm text-slate-700">
              {course}
            </span>

            {selected && (
              <span className="text-xs font-semibold text-orange-600">
                Selected
              </span>
            )}
          </label>
        );
      })}

      <div className="border-t border-slate-100 px-3 py-3 text-xs text-slate-500">
        {form.courses.length} of {courseOptions.length} courses selected
      </div>
    </div>
  )}

  {courseError && (
    <p role="alert" className="mt-2 text-sm font-medium text-red-600">
      {courseError}
    </p>
  )}

  <p className="mt-2 text-xs text-slate-500">
    {form.courses.length === 0
      ? "No courses selected yet."
      : `Selected: ${form.courses.join(", ")}`}
  </p>




                  </div>
                </div>
              </div>

              {/* Payment details */}
              <div className="border-t border-slate-100 pt-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                  Payment details
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Enter the details associated with your payment.
                  The admin will verify payment before confirming admission.
                </p>

                <div className="mt-4 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="enrollment-method"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Payment method *
                    </label>

                    
<select
  id="enrollment-method"
  name="paymentMethod"
  required
  value={form.paymentMethod}
  onChange={handleChange}
  className={inputClass}
>
  <option value="" disabled>
    Select payment method
  </option>
  <option value="Meezan Bank">Meezan Bank</option>
  <option value="UBL">United Bank Limited (UBL)</option>
  <option value="Easypaisa">Easypaisa</option>
</select>

                  </div>

                  <div>
                    <label
                      htmlFor="enrollment-amount"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Amount paid (PKR) *
                    </label>

                    <input
                      id="enrollment-amount"
                      name="amountPaid"
                      type="number"
                      min="1"
                      max="100000000"
                      step="0.01"
                      required
                      value={form.amountPaid}
                      onChange={handleChange}
                      placeholder="Enter amount paid"
                      className={inputClass}
                    />
                  </div>

{form.paymentMethod && (
  <div className="sm:col-span-2 rounded-2xl border border-orange-200 bg-orange-50/60 p-5">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h4 className="font-bold text-slate-900">
          {form.paymentMethod === "UBL"
            ? "United Bank Limited (UBL)"
            : form.paymentMethod}
        </h4>

        <p className="mt-1 text-sm text-slate-500">
          Transfer your course fee using these details.
        </p>
      </div>

      <button
        type="button"
        onClick={copyPaymentDetails}
        className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-700 transition hover:bg-orange-50"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <rect x="8" y="8" width="12" height="12" rx="2" />
          <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
        </svg>

        {copiedPaymentMethod === form.paymentMethod
          ? "Copied!"
          : "Copy Payment Details"}
      </button>
    </div>

    <div className="mt-4 divide-y divide-orange-100 rounded-xl border border-orange-100 bg-white px-4">
      {paymentDetails[form.paymentMethod].map((item) => (
        <div
          key={item.label}
          className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="text-xs font-semibold text-slate-500">
            {item.label}
          </span>

          <span className="break-all text-sm font-bold text-slate-800 sm:text-right">
            {item.value}
          </span>
        </div>
      ))}
    </div>

    {copyError && (
      <p role="alert" className="mt-3 text-sm text-red-600">
        {copyError}
      </p>
    )}

    <p className="mt-3 text-xs leading-5 text-slate-500">
      After transferring the fee, enter the transaction reference,
      amount paid and attach your payment slip below.
    </p>
  </div>
)}

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="enrollment-reference"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Transaction / reference ID *
                    </label>

                    <input
                      id="enrollment-reference"
                      name="transactionReference"
                      type="text"
                      required
                      maxLength={120}
                      value={form.transactionReference}
                      onChange={handleChange}
                      placeholder="Enter transaction reference"
                      className={inputClass}
                    />
                  </div>

                  {/* Mandatory payment slip */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="enrollment-slip"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Payment slip * (required)
                    </label>

                    <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-orange-300">
                      <input
                        ref={fileInputRef}
                        id="enrollment-slip"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png,.webp,application/pdf,image/jpeg,image/png,image/webp"
                        required
                        onChange={handleFileChange}
                        className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-orange-50 file:px-4 file:py-2.5 file:text-sm file:font-bold file:text-orange-700 hover:file:bg-orange-100"
                      />

                      <p className="mt-3 text-xs leading-5 text-slate-500">
                        Accepted formats: PDF, JPG, JPEG, PNG and WEBP.
                        Maximum file size: 5 MB.
                      </p>

                      {paymentSlip && (
                        <p className="mt-2 break-all text-xs font-semibold text-green-700">
                          Selected: {paymentSlip.name}
                        </p>
                      )}
                    </div>

                    {fileError && (
                      <p role="alert" className="mt-2 text-sm text-red-600">
                        {fileError}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Optional message */}
              <div className="border-t border-slate-100 pt-6">
                <label
                  htmlFor="enrollment-message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Additional message (optional)
                </label>

                <textarea
                  id="enrollment-message"
                  name="additionalMessage"
                  rows={3}
                  maxLength={1000}
                  value={form.additionalMessage}
                  onChange={handleChange}
                  placeholder="Any additional information"
                  className={`${inputClass} resize-y`}
                />
              </div>

              {/* Consent */}
              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(event) => {
                    setConsent(event.target.checked);
                    setPreviewSubmitted(false);
                  }}
                  className="mt-1 h-4 w-4 shrink-0 accent-orange-500"
                />

                <span className="text-sm leading-6 text-slate-600">
                  I confirm that my details are accurate and understand
                  that payment must be verified and admission approved
                  by the admin before an official fee receipt is issued.
                </span>
              </label>

              {/* Frontend-only notice */}
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-bold text-amber-900">
                  Frontend preview only
                </p>
                <p className="mt-1 text-xs leading-5 text-amber-900/80">
                  This form currently validates inputs in your browser.
                  It does not transmit or save applications or payment
                  slips. Backend storage and admin approval will be
                  connected in the next development stage.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-100"
                >
                  Preview Enrollment
                  <span aria-hidden="true">→</span>
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  className="min-h-12 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                >
                  Clear Form
                </button>
              </div>
            </form>

            {previewSubmitted && (
              <div
                role="status"
                aria-live="polite"
                className="mt-7 rounded-2xl border border-green-200 bg-green-50 p-5"
              >
                <h3 className="font-bold text-green-900">
                  Form validation successful
                </h3>

                <p className="mt-2 text-sm leading-6 text-green-900/80">
                  This is only a local preview. Your application and file
                  have not been submitted or saved, and your admission
                  has not been confirmed.
                </p>

                <div className="mt-4 space-y-2 rounded-xl border border-green-200 bg-white p-4 text-sm">
                  <p>
                    <strong>Student:</strong> {form.fullName}
                  </p>
                  <p>
                   <strong>Selected courses:</strong> {form.courses.join(", ")}
                  </p>
                  <p>
                    <strong>Amount entered:</strong>{" "}
                    PKR {Number(form.amountPaid).toLocaleString("en-PK")}
                  </p>
                  <p className="break-all">
                    <strong>Payment slip:</strong> {paymentSlip?.name}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Student workflow sidebar */}
        <aside className="space-y-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-slate-900">
              What happens next?
            </h3>

            <div className="mt-6 space-y-5">
              {[
                ["1", "Complete the form", "Provide your details and payment proof."],
                ["2", "Payment verification", "An admin reviews the transaction."],
                ["3", "Admission decision", "Admission is confirmed after approval."],
                ["4", "Official fee receipt", "The admin generates a PDF receipt after approval."],
              ].map(([number, title, description]) => (
                <div key={number} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-sm font-extrabold text-orange-600">
                    {number}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">
                      {title}
                    </h4>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-slate-900">
              No student account required
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              The intended enrollment process uses a shareable link.
              Students will not need to create or log into an UltraDS
              account.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}


export default function OnlineClasses() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header pageTitle="Online Classes" />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-linear-to-br from-orange-50 via-white to-purple-50">
          <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3 py-1.5 text-xs font-bold text-amber-800">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Course Catalogue Preview
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Build your eBay skills.
                <span className="mt-2 block bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Learn one step at a time.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Explore the planned UltraDS online learning tracks for
                product research, listing awareness, profitability and
                store operations. Detailed course information will be
                published as each class becomes available.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#course-tracks"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
                >
                  Explore Course Tracks
                  <span aria-hidden="true">↓</span>
                </a>

                <a
                  href="/resources-guides"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white/80 px-6 py-3 text-sm font-bold text-slate-700 transition hover:bg-white"
                >
                  Browse Free Guides
                </a>

                
<a
  href="#enrollment"
  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white/80 px-6 py-3 text-sm font-bold text-slate-700 transition hover:bg-white"
>
  Preview Enrollment Form
</a>



              </div>

              <p className="mt-5 text-sm text-slate-500">
                Enrollment is not open yet. Course fees and schedules
                have not been announced.
              </p>
            </div>
          </div>
        </section>

        {/* Course tracks */}
        <section
          id="course-tracks"
          className="scroll-mt-28 px-5 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                Planned learning tracks
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Explore the proposed curriculum
              </h2>

              <p className="mt-4 leading-7 text-slate-500">
                These are proposed course areas, not currently open
                classes. The final curriculum may change.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {courseTracks.map((course) => (
                <article
                  key={course.number}
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/40 sm:p-7"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-2xl">
                      {course.icon}
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-600">
                      {course.level}
                    </span>
                  </div>

                  <p className="mt-5 text-xs font-bold tracking-wider text-orange-600">
                    TRACK {course.number}
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold text-slate-900">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {course.description}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-5">
                    <h4 className="text-sm font-bold text-slate-800">
                      Proposed topics
                    </h4>

                    <ul className="mt-3 space-y-2.5">
                      {course.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800">
                      Planned · Enrollment not open
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Learning before enrollment */}
        <section className="border-y border-slate-100 bg-slate-50 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                Keep learning
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Start with the resources available today.
              </h2>

              <p className="mt-4 leading-7 text-slate-500">
                While the online classes are being prepared, you can
                explore the UltraDS learning library and use the free
                Profit Calculator to practise evaluating product costs.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/resources-guides"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  Explore Resources & Guides
                </a>

                <a
                  href="/profit-calculator"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Open Free Calculator
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-extrabold text-slate-900">
                What course details will be announced?
              </h3>

              <div className="mt-5 space-y-4">
                {[
                  "Course syllabus and learning objectives",
                  "Class format and schedule",
                  "Fees and enrollment requirements",
                  "Access instructions and learning materials",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                      ✓
                    </span>

                    <p className="text-sm leading-6 text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-5 text-slate-400">
                These details will be added when they have been finalized.
              </p>
            </div>
          </div>
        </section>

        
<EnrollmentForm />


        {/* FAQ */}
        <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                Common questions
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">
                Online Classes FAQ
              </h2>
            </div>

            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-orange-200 sm:p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-800">
                    {faq.question}

                    <span className="text-xl text-orange-500 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <a href="/" className="font-extrabold text-slate-900">
            Ultra<span className="text-orange-500">DS</span>
          </a>

          <p>Online Classes · UltraDS</p>
        </div>
      </footer>
    </div>
  );
}

