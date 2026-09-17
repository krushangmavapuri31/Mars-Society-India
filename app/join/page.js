import JoinForm from "@/components/JoinForm";

export const metadata = {
  title: "Join | Mars Society India",
};

export default function JoinPage() {
  return (
    <section className="px-5 sm:px-8 pt-32 pb-24 max-w-3xl mx-auto">
      <p className="text-sm text-dust mb-2">Join the chapter</p>
      <h1 className="font-display text-4xl sm:text-5xl text-bone">
        Become part of Mars Society India
      </h1>
      <p className="mt-5 text-bone-dim leading-relaxed max-w-xl">
        Students, researchers, engineers, educators, and space enthusiasts across India
        are welcome to apply. Tell us a little about yourself below.
      </p>

      <div className="mt-12">
        <JoinForm />
      </div>
    </section>
  );
}
