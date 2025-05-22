import  TestDriveForm from '../components/TestDriveForm';

export default function TestDrive() {
  return (
    <main className="py-20 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Book a Test Drive</h1>
            <p className="text-xl text-gray-600">
              Experience the thrill of driving your dream supercar. Complete the form below to schedule your exclusive test drive.
            </p>
          </div>
          
          <TestDriveForm />
        </div>
      </div>
    </main>
  );
}
  